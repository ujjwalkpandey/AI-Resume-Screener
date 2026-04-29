🚀 AI-Resume-Screener: Elite Recruitment Pipeline
Screener AI is a high-availability, full-stack recruitment automation tool built to bridge the gap between massive applicant volumes and efficient hiring decisions. By combining Large Language Models (LLMs) with a custom-built resilient architecture, it ensures that recruiters never face downtime, even when third-party APIs hit their limits.

💎 The "Always-On" Advantage (Core Innovation)
The most significant challenge with modern AI-driven apps is API Reliability. Most applications crash when they hit rate limits. This project implements a Dual-Engine Architecture:

Primary Engine (Gemini 1.5 Flash): Performs deep semantic analysis, extracting candidate intent, specific skill matches, and professional summaries.

Secondary Engine (Semantic Heuristic): A built-in "fail-safe" that automatically activates if the AI API is rate-limited or unavailable. It performs a weighted keyword-density analysis to provide a reliable match score, ensuring the system remains 100% functional.

✨ Key Features
Intelligent Analysis: Uses Gemini AI to match resumes against complex Job Descriptions (JD) beyond simple keyword matching.

Premium Multi-Theme UI: Features a high-end interface with a one-touch toggle between "Professional Light" (Purple/White) and "Elite Dark" (Black/Gold) modes.

End-to-End Automation:

File Processing: Converts PDFs and DOCX files to text in real-time via Google Drive API.

Persistent Database: Every application is logged instantly to a centralized Google Sheet for tracking.

Smart Triggers: Automatically sends personalized interview invitations via email for candidates scoring above 80% (verified by AI).

🛠️ Technical Stack
Language: Google Apps Script (JavaScript V8 Engine).

AI: Google Generative AI (Gemini 1.5 Flash).

APIs: Google Drive API v3, Google Sheets API, Gmail App Service.

Frontend: HTML5, CSS3 (Glassmorphism & Interactive Animations), JavaScript (Vanilla ES6+).

🛡️ Security & Scalability
Environment Safety: The system is designed with a strict separation between the API logic and the UI.

Zero-Footprint Scalability: Built on Google’s global infrastructure, the app can handle multiple simultaneous users without the need for managing servers or databases.

Credential Protection: (Note for developers: Always use script properties or environment variables; never hardcode API keys in public repositories).

📈 Impact & Results
By using this pipeline, recruitment teams can:

Reduce Screening Time: Go from hours of manual reading to seconds of automated analysis.

Eliminate Technical Bottlenecks: The heuristic fallback ensures zero "Error 429" screens for the end-user.

Enhance Candidate Experience: Instant score feedback and automated follow-up emails.

🔧 How to Use
Clone this repo and create a new Google Apps Script project.

Add the Drive Service in the Apps Script editor.

Paste your Gemini API Key from Google AI Studio into the Code.gs file.

Deploy as Web App and experience the elite screening experience.
