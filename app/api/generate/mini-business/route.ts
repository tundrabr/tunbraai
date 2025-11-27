import { NextResponse } from "next/server";
import { generateMiniBusinessWithAI } from "@/lib/ai";
import { prisma } from "@/lib/prisma";

export async function POST(req) {
  const body = await req.json();
  const ideia = body.ideia;

  const ai = await generateMiniBusinessWithAI({ ideia });

  const saved = await prisma.miniBusiness.create({
    data: {
      userId: "demo",
      idea: ideia,
      title: ai.nome_do_negocio,
      summary: ai.descricao_resumida,
    }
  });

  return NextResponse.json({ miniBusiness: saved });
}