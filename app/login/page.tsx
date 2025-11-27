// app/login/page.tsx
"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  async function handleLogin() {
    await signIn("google");
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-50">
      <div className="border border-slate-700 rounded-xl p-8 w-full max-w-sm text-center">
        <h1 className="text-2xl font-bold mb-4">Entrar no TunbraAI</h1>
        <p className="text-sm text-slate-300 mb-6">
          Use sua conta Google para acessar sua área de mini-negócios.
        </p>
        <button
          onClick={handleLogin}
          className="w-full rounded-lg border border-slate-500 px-4 py-2 text-sm font-medium hover:bg-slate-800"
        >
          Entrar com Google
        </button>
      </div>
    </main>
  );
}
