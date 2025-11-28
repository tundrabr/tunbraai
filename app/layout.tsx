import "./globals.css";

export const metadata = {
  title: "TundraAI",
  description: "Mini negócios automáticos.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-slate-950 text-slate-50">
        {children}
      </body>
    </html>
  );
}
