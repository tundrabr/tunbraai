// app/api/generate/mini-business/route.ts
import { NextResponse } from 'next/server'
import { generateMiniBusinessWithAI } from '@/lib/ai'

export async function POST(req: Request) {
  try {
    const { idea } = await req.json()
    const result = await generateMiniBusinessWithAI(idea ?? '')

    return NextResponse.json(result)
  } catch (err) {
    console.error(err)
    return NextResponse.json(
      { error: 'Erro ao gerar mini-negócio' },
      { status: 500 }
    )
  }
}
