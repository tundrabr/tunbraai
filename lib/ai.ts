// lib/ai.ts
export async function generateMiniBusinessWithAI(idea: string) {
  // Aqui depois você troca pelo OpenAI/IA real
  return {
    name: `Negócio: ${idea || 'Demo'}`,
    summary: 'Plano gerado com IA de brincadeira, só pra testar o front.',
  }
}
