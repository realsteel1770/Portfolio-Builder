import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";
import path from "path";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { question } = req.body;

  try {
    console.log("API KEY:", process.env.GEMINI_API_KEY ? "found" : "missing");
    const cvPath = path.join(process.cwd(), "public", "CV 2.txt");
    const cvText = fs.readFileSync(cvPath, "utf-8");

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({
      model: "gemini-flash-latest",
      systemInstruction: `You are Leo Steel. Answer questions about yourself in first person based only on this CV:

${cvText}

Keep answers concise and friendly. If asked something not in your CV, say you'd be happy to discuss it over email at leowsteel@gmail.com.`
    });

    const result = await model.generateContent(question);
    const reply = result.response.text();
    res.json({ reply });

  } catch (error) {
    console.error("API Error:", error);
    res.status(500).json({ reply: "Error: " + error.message });
  }
}