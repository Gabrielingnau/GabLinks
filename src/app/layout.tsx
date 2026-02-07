import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";

import { ThemeProvider } from "@/app/providers/theme-provider";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/lib/prismicio";

import "../styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gab-links.vercel.app/"), // troque pelo domínio real

  title: {
    default: "GabLinks",
    template: "%s | GabLinks",
  },

  description:
    "Todos os meus links importantes em um só lugar. Redes sociais, projetos e contatos.",

  keywords: ["links", "portfolio", "redes sociais", "contato", "gablinks"],

  authors: [{ name: "Gabriel Lingnau" }],

  creator: "Gabriel Lingnau",

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "GabLinks",
    title: "GabLinks",
    description:
      "Acesse todos os meus links, projetos e redes sociais em um único lugar.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GabLinks",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "GabLinks",
    description: "Todos os meus links importantes em um só lugar.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.variable} suppressHydrationWarning>
      <body className="w-full relative flex items-center justify-center h-screen">
        <ThemeProvider attribute="class" enableSystem disableTransitionOnChange>
          <main className="flex items-center justify-content-center p-6 h-screen w-full">
            <Image
              src="/background-dark.png"
              alt="Fundo"
              priority
              fill
              className="object-cover absolute -z-10 hidden dark:block"
            />

            <Image
              src="/background-light.png"
              alt="Fundo"
              priority
              fill
              className="object-cover absolute -z-10 dark:hidden"
            />

            {children}
            <PrismicPreview repositoryName={repositoryName} />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
