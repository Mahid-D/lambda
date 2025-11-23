import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Inter, Space_Grotesk } from "next/font/google";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });
const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: { default: "Lambda", template: "%s | Lambda" },
  description: "Lambda is a studio for the modern web.",
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }){
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sans.variable} ${display.variable} font-sans`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
