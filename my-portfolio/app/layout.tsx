import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Maria | Desenvolvedora Backend",
  description: "Portfólio de Maria, desenvolvedora backend sênior.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}