import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";
import path from "path";

let cachedCvText = null;
let cachedModel = null;

function loadCvText() {
  if (cachedCvText) return cachedCvText;

  const cvPath = path.join(process.cwd(), "public", "CV 2.txt");
  cachedCvText = fs.readFileSync(cvPath, "utf-8");
  return cachedCvText;
}

function getModel() {
  if (cachedModel) return cachedModel;

  const cvText = loadCvText();
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

  cachedModel = genAI.getGenerativeModel({
    model: "gemini-flash-latest",
    systemInstruction: `You are Leo Steel. Answer questions about yourself in first person based only on this CV:

${cvText}

Keep answers concise and friendly. If asked something not in your CV, say you'd be happy to discuss it over email at leowsteel@gmail.com.`,
  });

  return cachedModel;
}

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  try {
    const { question } = req.body || {};
    if (!question || typeof question !== "string") {
      return res.status(400).json({ reply: "Please send a question." });
    }

    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({ reply: "Server config error: missing GEMINI_API_KEY." });
    }

    const model = getModel();
    const result = await model.generateContent(question);
    return res.json({ reply: result.response.text() });
  } catch (error) {
  console.error("API Error:", error);

  const msg = error?.message || "";

  if (msg.includes("429")) {
    return res.json({
      reply: "I’ve hit the AI request limit for now 😅 Please try again in a bit."
    });
  }
  if (msg.includes("503")) {
    return res.json({
      reply: "The AI service is busy right now — try again in a moment."
    });
  }
  return res.json({ reply: "Something went wrong. Try again." });
}
}