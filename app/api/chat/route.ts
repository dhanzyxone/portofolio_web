import { NextResponse } from 'next/server'
import { GoogleGenAI } from '@google/genai'

export async function POST(req: Request) {
  try {
    const apiKey = process.env.GEMINI_API_KEY
    if (!apiKey) {
      return NextResponse.json({ reply: 'API key not configured' }, { status: 400 })
    }

    const ai = new GoogleGenAI({ apiKey })
    const { message } = await req.json()
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: `Anda adalah asisten virtual untuk portfolio Dhaffa Harfansyah (Creative Technologist & AI Developer). Jawablah pertanyaan pengunjung dengan ramah, profesional, dan informatif berdasarkan data portfolio.`,
      },
    })

    return NextResponse.json({ reply: response.text })
  } catch (error) {
    console.error('Gemini API Error:', error)
    return NextResponse.json({ reply: 'Maaf, asisten AI sedang mengalami gangguan koneksi.' }, { status: 500 })
  }
}
