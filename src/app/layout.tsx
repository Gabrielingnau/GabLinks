import "../styles/globals.css";

import { Inter } from "next/font/google";
import Image from "next/image";

import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} dark`}>
      <body className="w-full relative flex items-center justify-center h-screen">
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
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
}
