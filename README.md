# TunbraAI (Next.js scaffold)

Este repositório é uma versão inicial **convertida** do seu projeto Vite -> Next.js.
Ele inclui uma estrutura mínima App Router, Tailwind e Prisma schema.

**Importante:** Este é um scaffold — integrações com OpenAI, Stripe e geração de PDF estão marcadas como TODO e são implementadas nas rotas API.

## Como usar (rápido)
1. Instale dependências:
   ```bash
   npm install
   ```
2. Copie `.env.example` para `.env` e preencha:
   - DATABASE_URL (Postgres)
   - NEXTAUTH_URL
   - OPENAI_API_KEY
   - STRIPE_SECRET_KEY
3. Rodar em modo dev:
   ```bash
   npm run dev
   ```

## Entrega
Você receberá o ZIP com o scaffold. Depois implemento endpoints com OpenAI/Stripe/PDF conforme combinado.


## API Endpoints (iniciar)
- POST /api/generate - body { idea, userId? }
- GET /api/projects?userId=
- POST /api/projects - create project
- POST /api/stripe/webhook - stripe webhook listener
- NextAuth available at /api/auth


## Backend features added
- Puppeteer-based PDF endpoint: POST /api/generate/pdf (returns base64 in dev)
- Secure Stripe webhook verification using STRIPE_WEBHOOK_SECRET
- Playwright E2E tests: run `npm run test:e2e` (requires Playwright)
