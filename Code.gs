const SHEET_NAME = 'SHEET_NAME';
const API_KEY = 'YOUR_API_KEY_HERE'; 

function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Screener AI | Elite')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function processApplication(fileData, fileName, mimeType, jobDesc, candidateEmail) {
  try {
    const blob = Utilities.newBlob(Utilities.base64Decode(fileData), mimeType, fileName);
    const tempFile = DriveApp.createFile(blob);
    const url = "https://www.googleapis.com/drive/v3/files/" + tempFile.getId() + "/copy";
    const options = {
      "method": "post",
      "headers": { "Authorization": "Bearer " + ScriptApp.getOAuthToken() },
      "contentType": "application/json",
      "payload": JSON.stringify({ "mimeType": "application/vnd.google-apps.document" }),
      "muteHttpExceptions": true
    };
    
    const response = UrlFetchApp.fetch(url, options);
    const convertedId = JSON.parse(response.getContentText()).id;
    const document = DocumentApp.openById(convertedId);
    const rawContent = document.getBody().getText();
    
    tempFile.setTrashed(true);
    DriveApp.getFileById(convertedId).setTrashed(true);

    const result = getAIAnalysis(rawContent, jobDesc);
    const data = JSON.parse(result);

    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    sheet.appendRow([new Date(), data.candidate_name, candidateEmail, data.match_score, data.missing_skills.join(", "), data.summary]);

    if (data.match_score > 80 && !data.summary.includes("Heuristic")) {
      MailApp.sendEmail(candidateEmail, "Interview Invitation", `Hi ${data.candidate_name}, your profile matched at ${data.match_score}%. Let's talk!`);
    }

    return { success: true, data: data };
  } catch (err) {
    return { success: false, error: err.toString() };
  }
}

function getAIAnalysis(resume, jd) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;
  const payload = { "contents": [{ "parts": [{ "text": `Analyze resume vs JD. Return ONLY JSON: {"candidate_name": "string", "match_score": number, "missing_skills": ["string"], "summary": "string"}. JD: ${jd} | Resume: ${resume}` }] }] };

  const response = UrlFetchApp.fetch(url, { "method": "post", "contentType": "application/json", "payload": JSON.stringify(payload), "muteHttpExceptions": true });
  const json = JSON.parse(response.getContentText());

  if (json.error) {
    const terms = jd.toLowerCase().match(/\b(\w{4,})\b/g) || [];
    const resumeLower = resume.toLowerCase();
    const matches = terms.filter(word => resumeLower.includes(word));
    const score = Math.min(Math.round(([...new Set(matches)].length / (terms.length || 1)) * 100) + 20, 79);
    return JSON.stringify({
      "candidate_name": "Verified Candidate",
      "match_score": score,
      "missing_skills": ["API Latency - Manual Check"],
      "summary": `Heuristic Fallback: Detected ${matches.length} matching professional terms. (Uptime Protection Active).`
    });
  }
  return json.candidates[0].content.parts[0].text.replace(/```json/g, '').replace(/```/g, '').trim();
}
