import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  metadataBase: new URL('https://marialuiza-dev.vercel.app'),
  title: "Maria | Desenvolvedora Backend",
  description: "Portfólio de Maria, Desenvolvedora Backend.",
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