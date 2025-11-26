# Deploy no Vercel (rápido)

1. Crie conta em vercel.com e clique em "New Project" → import from Git.
2. Suba o repositório (ou faça upload do ZIP).
3. Configure variáveis de ambiente no painel do projeto:
   - DATABASE_URL
   - NEXTAUTH_URL (ex.: https://seuprojeto.vercel.app)
   - NEXTAUTH_SECRET (gera com `openssl rand -base64 32`)
   - OPENAI_API_KEY
   - STRIPE_SECRET_KEY
4. Clique em Deploy. Vercel cuida do resto (SSL automático).
