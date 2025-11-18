import { GoogleGenAI } from "@google/genai";
// Function to generate embedded text using GoogleGenAI
export async function generateEmbedding(text: string): Promise<number[] | null> {
	const apiKey = process.env.GOOGLE_GENAI_API_KEY;
	if (!apiKey) {
		throw new Error('Google GenAI API key not set in environment variables');
	}
	const ai  = new GoogleGenAI({ apiKey });
	try {
		// Assuming the API provides an embedding endpoint
		const response = await ai .models.embedContent({ 
            model: 'gemini-embedding-001',
            contents: text,
         });
         
		// The actual response structure may differ; adjust as needed
		if (response.embeddings && response.embeddings.length > 0 && response.embeddings[0].values) {
			return response.embeddings[0].values;
		}
		return null;
	} catch (error) {
		console.error('Error generating embedding:', error);
		return null;
	}
}