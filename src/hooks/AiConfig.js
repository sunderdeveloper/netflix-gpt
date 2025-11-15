import { GoogleGenAI } from "@google/genai";
import { AI_KEY } from "../utils/constants";

const ai = new GoogleGenAI({
  apiKey: AI_KEY,
});

// async function main() {
//   const prompt =
//     "Explain the concept of Occam's Razor and provide a simple, everyday example.";
//   const response = await ai.models.generateContent({
//     model: "gemini-2.5-flash",
//     contents: prompt,
//   });
//   console.log(response.text);
// }

// main();

export default ai;
