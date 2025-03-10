import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/utils";


const inter = Inter({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <html lang="ru">
      <body className={cn(inter.className, `antialiased`)}>
        <main>{children}</main>
      </body>
    </html>
  );
}
