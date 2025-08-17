// src/app/layout.tsx
import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Portfolio",
  description: "Portfolio site with About, Skills, Projects",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="light">
      <body className={`${inter.className} bg-background text-foreground`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}