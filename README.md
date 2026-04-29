# 🚀 Screener AI: High-Availability Recruitment Pipeline

**Screener AI** is an elite, full-stack recruitment automation engine designed to bridge the gap between massive applicant volumes and quality hiring decisions. Built for the **MLSA KIIT Chapter**, this system features a unique **resilient architecture** that ensures recruiters never experience downtime, even when third-party AI APIs are rate-limited.

---

## 📖 About the Project

Traditional AI screening tools fail the moment an API quota is reached, causing "Error 429" screens that halt productivity. **Screener AI** solves this by implementing a **Dual-Engine Logic Gate**. It prioritizes deep semantic analysis via LLMs but stays "Always-On" through an automated switch to local heuristics.

---

## ✨ Key Features

* **Dual-Engine Analysis**: Leverages **Gemini 1.5 Flash** for deep semantic resume-to-JD matching.
* **Zero-Downtime Resilience**: Features an **automated fallback** to a local keyword-density engine if the primary AI API is unavailable.
* **Premium "Elite" UI/UX**: Professional **one-touch toggle** between "Light Mode" (Purple/White) and "Elite Dark Mode" (Black/Gold).
* **End-to-End Automation**: 
    * **Live PDF/DOCX Parsing**: Real-time extraction via Google Drive API v3.
    * **Persistent Logging**: Every screening is logged instantly to a centralized Google Sheet.
    * **Smart Invitations**: Automated interview triggers for high-scoring candidates (>80%) verified by the LLM.

---

## 🏗️ Technical Architecture

The system is designed as a stateless, scalable web application running on Google’s global infrastructure.



* **Frontend**: HTML5, CSS3 (Glassmorphism & Interactive Score Gauges), JavaScript (ES6+).
* **Backend**: Google Apps Script (V8 Runtime) acting as a serverless middleware.
* **AI/ML**: Google Generative AI (Gemini 1.5 Flash) via REST integration.
* **Database**: Google Sheets API for real-time persistent data storage.

---

## 🧠 The "Fail-Safe" Engineering Logic

A core innovation of this project is the **Resilient Logic Gate** implemented in the backend:
1.  **Stage 1**: System attempts a 100-point semantic match using Gemini.
2.  **Stage 2**: If the API returns an error (Rate-Limit/Regional), the system silently switches to **Local Heuristic Analysis**.
3.  **Safety Buffer**: Fallback scores are capped at 79% to ensure automated interview triggers only fire when the full LLM confirms a top-tier candidate.

---

## 🚀 Quick Start

### 1. Clone & Setup
1.  Create a new Google Apps Script project.
2.  Enable the **Drive API** service in the project settings.
3.  Copy `Code.gs` and `Index.html` from this repository.

### 2. Configure Environment
1.  Obtain an API Key from **Google AI Studio**.
2.  Replace the placeholder in `Code.gs` with your key:
    ```javascript
    const API_KEY = 'YOUR_GEMINI_API_KEY';
    ```
    *(Note: Never push your real API key to public repositories)*

### 3. Deploy
1.  Click **Deploy > New Deployment**.
2.  Set type to **Web App** and access to **Anyone**.

---

## 🔌 API & Integration Details

| Interaction | Trigger | Result |
| :--- | :--- | :--- |
| **Resume Upload** | PDF/DOCX Submission | Persistent Sheet Log |
| **Score > 80%** | AI Verification | Automated Interview Email |
| **API Limit Reached** | 429 Error Detection | Heuristic Fallback Activation |

---
---
**Screener AI: Because recruitment shouldn't wait for an API to reset.**
