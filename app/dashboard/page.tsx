"use client";
import { useState } from "react";

export default function Dashboard() {
  const [ideia, setIdeia] = useState("");
  const [result, setResult] = useState(null);

  async function gerar(e) {
    e.preventDefault();
    const r = await fetch("/api/generate/mini-business", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ideia })
    });
    setResult(await r.json());
  }

  return (
    <main className="p-6">
      <h2 className="text-xl font-bold">Gerar Mini Negócio</h2>
      <form onSubmit={gerar}>
        <textarea
          value={ideia}
          onChange={e => setIdeia(e.target.value)}
          className="w-full bg-slate-800 p-2"
        />
        <button className="mt-2 p-2 border">Gerar</button>
      </form>
      {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
    </main>
  );
}