import OpenAI from "openai";
import fs from "fs";
import path from "path";

let cachedCvText = null;
let cachedClient = null;

function getCvText() {
  if (cachedCvText) return cachedCvText;

  const cvPath = path.join(process.cwd(), "public", "CV 2.txt");
  cachedCvText = fs.readFileSync(cvPath, "utf-8");
  return cachedCvText;
}

function getClient() {
  if (cachedClient) return cachedClient;

  cachedClient = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  return cachedClient;
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

    if (!process.env.OPENAI_API_KEY) {
      return new Response(JSON.stringify({ reply: "Server configuration error." }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    const cvText = getCvText();
    const client = getClient();

    const response = await client.responses.create({
      model: "gpt-4.1-mini",
      instructions: `You are Leo Steel. Answer questions ONLY using the exact information from this CV. Do not make anything up. Keep answers to 2-3 sentences maximum. Be conversational and friendly, not bullet points. If the answer is not in the CV, say "That's not on my CV but email me at leowsteel@gmail.com".

CV:
${cvText}`,
      input: question,
    });

    const reply = response.output_text || "Sorry, I couldn't generate a reply.";

    return new Response(JSON.stringify({ reply }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error:", error);

    return new Response(
      JSON.stringify({ reply: "Error: " + (error?.message || "Unknown error") }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};