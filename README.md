Here’s your README rewritten clearly, naturally, and in a more human, conversational tone — while still looking professional and polished for a technical assessment.

⸻

🧠 Smart Study Assistant

A lightweight AI-powered study tool that turns any topic into quick study notes, quizzes, and tips.
You type a topic → the backend grabs real information from Wikipedia → an AI model refines it → the frontend presents everything in a clean, student-friendly layout.

Great for fast revision, quick learning, or exploring new subjects.


🌐 What’s Inside

This project has two main parts:
	•	Backend (Express API)
Located in backend/.
It exposes a /study endpoint, fetches context from Wikipedia, and then uses an AI provider (Gemini, OpenAI, or a safe mock generator) to create:
	•	A 3-bullet summary
	•	Three MCQs
	•	A study tip
	•	(Optional) a math/logic problem
depending on the user’s mode.
	•	Frontend (React + Vite)
Located in frontend/vite-project/.
It lets users enter a topic, switch on math mode, and browse previous results through localStorage.
It also includes light/dark themes, loading states, and error handling.


✨ Key Features
	•	🔎 Topic → Study Pack: summary, quiz, tip, and optional math problem
	•	🌐 Wikipedia-backed context to keep responses grounded
	•	🤖 Flexible AI layer: works with Gemini, OpenAI, or a mock fallback
	•	🎨 Clean UI with theme toggle
	•	🕒 History tracking (localStorage)
	•	⚡ Fast and simple end-to-end workflow

⸻

🧰 Requirements
	•	Node.js 18+
	•	npm 9+
	•	(Optional) API keys for:
	•	Google Gemini
	•	OpenAI
If none are provided, the backend automatically uses a mock AI mode so the app still works.


🚀 Getting Started

1️⃣ Backend Setup

cd backend
npm install
# create a .env file (see table below)
node server.js

The server will run on http://localhost:5000
Endpoint: GET /study?topic=<your_topic>&mode=math|general


2️⃣ Frontend Setup (Vite + React)

cd frontend/vite-project
npm install
# create .env and set VITE_API_URL (e.g., http://localhost:5000)
npm run dev

Open the URL Vite prints, usually:
👉 http://localhost:5173


🔐 Environment Variables

Create .env files in both backend/ and frontend/vite-project/.

Location	Variable	Required?	Purpose
backend	AI_PROVIDER	No (defaults to mock)	Choose gemini, openai, or mock
backend	GEMINI_API_KEY	Yes if using Gemini	Google AI key
backend	GEMINI_MODEL	No	Defaults to gemini-2.5-flash
frontend	VITE_API_URL	Yes	Full backend URL



📡 API Overview

GET /study

Query Param	Description
topic (required)	Any string to search on Wikipedia
mode (optional)	Use math for quant/logic mode



✔️ Success Response Preview

<img width="1470" height="923" alt="Screenshot 2025-11-14 at 1 54 32 PM" src="https://github.com/user-attachments/assets/34d90c08-fdaf-4066-a0a8-fe8ce2109d60" />


🏗 Project Layout

backend/
  lib/
    ai.js        # AI provider + prompt builder
    wiki.js      # Wikipedia fetch helper
  routes/
    study.js     # /study endpoint logic
  server.js      # Express app

frontend/
  vite-project/
    src/
      components/
      App.jsx


⸻

🧪 Development Commands

Backend:

node server.js

Frontend:

npm run dev
npm run build
npm run preview
npm run lint


⸻

🛠 Troubleshooting Tips
	•	CORS issues → Double-check VITE_API_URL (include http://).
	•	Gemini/OpenAI errors → Verify API keys and the selected AI_PROVIDER.
	•	History missing → Clear or inspect localStorage key studyHistory.
	•	Mock mode always active → Check if keys are present and AI_PROVIDER is set correctly.


 🚀 Deployment Links
	•	Frontend (Vercel): https://study-assistant-vb87.vercel.app/
	•	Backend (Vercel): https://study-assistant-sigma.vercel.app/

  
