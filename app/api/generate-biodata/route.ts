import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { name, age, education, profession, religion, location, tone = "Simple" } = await req.json();

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: "OpenAI API key not configured" },
        { status: 500 }
      );
    }

    const prompt = `
      Create a marriage biodata description in a ${tone}, culturally appropriate Indian tone.
      
      Details:
      Name: ${name}
      Age: ${age}
      Education: ${education}
      Profession: ${profession}
      Religion: ${religion}
      Location: ${location}
      
      Generate:
      1. About Me (3-5 lines, first-person perspective)
      2. Family Details (A respectful summary of family background)
      3. Partner Preferences (Clear, polite expectations)
      
      Keep language simple, respectful, and suitable for Indian matrimony. 
      Return the response as a JSON object with keys: "aboutMe", "familyDetails", and "partnerPreferences".
    `;

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a professional matrimonial profile writer in India." },
        { role: "user", content: prompt }
      ],
      response_format: { type: "json_object" },
      temperature: 0.7,
      max_tokens: 1000,
    });

    const content = response.choices[0].message.content;
    if (!content) throw new Error("No content generated");

    return NextResponse.json(JSON.parse(content));

  } catch (error: any) {
    console.error("AI Generation Error:", error);
    return NextResponse.json(
      { error: "Failed to generate biodata content. Please try again." },
      { status: 500 }
    );
  }
}
