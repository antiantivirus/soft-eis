import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Logo } from "@/icons/logo";
import Navigation from "../components/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-background">
      <body className={inter.className + "bg-background p-4 flex"}>
        <header className="w-1/4 relative">
          <div className="fixed top-1/2 left-2">
            <Logo />
          </div>
          <Navigation />
        </header>
        <main className="grow">{children}</main>
        <div className="w-1/4 relative">
          <div className="fixed top-1/2 right-2">
            <Logo />
          </div>
        </div>
      </body>
    </html>
  );
}
