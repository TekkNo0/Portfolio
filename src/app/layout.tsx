import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { Navbar } from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Máximo Monárdez | Programador & Experto en Ciberseguridad",
  description:
    "Portfolio profesional de Máximo Monárdez. Desarrollo de software full-stack y consultoría en ciberseguridad.",
  keywords: [
    "Máximo Monárdez",
    "Programador",
    "Ciberseguridad",
    "Next.js",
    "TypeScript",
    "Full Stack",
    "Cybersecurity",
  ],
  authors: [{ name: "Máximo Monárdez" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body className="min-h-screen bg-cyber-bg text-slate-100 antialiased selection:bg-cyber-cyan selection:text-black">
        <LanguageProvider>
          <Navbar />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
