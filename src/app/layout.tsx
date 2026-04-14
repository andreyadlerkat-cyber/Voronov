import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Воронов Даниил — Веб-разработчик",
  description: "Персональное портфолио веб-разработчика Воронова Даниила. Создание современных веб-приложений на Next.js, React, TypeScript.",
  keywords: ["веб-разработчик", "frontend", "Next.js", "React", "TypeScript", "портфолио"],
  authors: [{ name: "Воронов Даниил" }],
  creator: "Воронов Даниил",
  publisher: "Воронов Даниил",
  openGraph: {
    title: "Воронов Даниил — Веб-разработчик",
    description: "Персональное портфолио веб-разработчика",
    type: "website",
    locale: "ru_RU",
    siteName: "Портфолио Даниила Воронова",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
