import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Augusto Brito | Full-Stack Developer",
  description:
    "Portfólio de Augusto Brito, desenvolvedor full-stack especializado em React, Next.js, TypeScript e Node.js. Desenvolvendo soluções escaláveis com foco em performance e UX.",
  keywords: [
    "desenvolvedor",
    "full-stack",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "portfólio"
  ],
  authors: [{ name: "Augusto Brito" }],
  creator: "Augusto Brito",
  openGraph: {
    title: "Augusto Brito | Full-Stack Developer",
    description:
      "Desenvolvedor full-stack especializado em React, Next.js, TypeScript e Node.js",
    url: "https://augustobrito.dev",
    siteName: "Augusto Brito Portfolio",
    images: [
      {
        url: "/photos/foto-home.jpeg",
        width: 1200,
        height: 630,
        alt: "Augusto Brito"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Augusto Brito | Full-Stack Developer",
    description:
      "Desenvolvedor full-stack especializado em React, Next.js, TypeScript e Node.js",
    creator: "@wguttoo",
    images: ["/photos/foto-home.jpeg"]
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
