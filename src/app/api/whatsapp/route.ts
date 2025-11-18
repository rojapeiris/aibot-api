import { NextRequest, NextResponse } from 'next/server'
import {generateEmbedding} from "../../../../utils/genai/embed"

export async function POST(request: NextRequest) {
  try {
    const { text } = await request.json();
    if (!text || typeof text !== 'string') {
      return NextResponse.json({ error: 'Missing or invalid "text" in request body.' }, { status: 400 });
    }
    const embedding = await generateEmbedding(text);
    if (!embedding) {
      return NextResponse.json({ error: 'Failed to generate embedding.' }, { status: 500 });
    }
    return NextResponse.json({ embedding });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}