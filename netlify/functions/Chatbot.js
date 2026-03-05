import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";
import path from "path";

let cachedCvText = null;
let cachedModel = null;

function getCvText() {
  if (cachedCvText) return cachedCvText;

  const cvPath = path.join(process.cwd(), "public", "CV 2.txt");
  cachedCvText = fs.readFileSync(cvPath, "utf-8");
  return cachedCvText;
}

function getModel() {
  if (cachedModel) return cachedModel;

  const cvText = getCvText();
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

  cachedModel = genAI.getGenerativeModel({
    model: "gemini-flash-latest",
    systemInstruction: `You are Leo Steel. Answer questions ONLY using the exact information from this CV. Do not make anything up. Keep answers to 2-3 sentences maximum. Be conversational and friendly, not bullet points. If the answer is not in the CV, say "That's not on my CV but email me at leowsteel@gmail.com".

CV:
${cvText}`
  });

  return cachedModel;
}

export default async (req, context) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  try {
    const { question } = await req.json();

    if (!question) {
      return new Response(JSON.stringify({ reply: "Please ask a question." }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    if (!process.env.GEMINI_API_KEY) {
      return new Response(JSON.stringify({ reply: "Server configuration error." }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    const model = getModel();
    const result = await model.generateContent(question);
    const reply = result.response.text();

    return new Response(JSON.stringify({ reply }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error("Error:", error);

    return new Response(JSON.stringify({ reply: "Error: " + error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};