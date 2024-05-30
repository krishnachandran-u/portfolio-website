import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Fab from '@/components/atoms/fab';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Created using Next.js, Tailwind CSS, and TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col justify-between h-screen bg-slate-200 overflow-x-hidden`}>
        <div>
          {children}
        </div>
        <div className = "fixed left-0 bottom-0 w-full z-[50]">
          <Fab />
        </div>
      </body>
    </html>
  );
}
