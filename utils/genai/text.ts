import { GoogleGenAI } from "@google/genai";

export async function generateText(systemMessage:string,message: string) {
    const apiKey = process.env.GOOGLE_GENAI_API_KEY;
    if (!apiKey) {
        throw new Error(
            "Google GenAI API key not set in environment variables",
        );
    }

    const ai = new GoogleGenAI({ apiKey });

    try {
        // Assuming the API provides an embedding endpoint
        const response = await ai.models.generateContent({
            model: "gemini-2.0-flash",
            contents: message,
            config: {
                systemInstruction: systemMessage,
            },
        });

        // The actual response structure may differ; adjust as needed
        if (
            response.text && response.text.length > 0 &&
            response.text
        ) {
            return response.text;
        }
        return null;
    } catch (error) {
        console.error("Error generating embedding:", error);
        return null;
    }
}
