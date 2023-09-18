import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { SOFT, EIS } from "@/icons/logo";
import Navigation from "../components/navigation";
import Link from "next/link";
import Script from "next/script";

const uncut = localFont({
  src: "./UncutSans-Variable.woff2",
  display: "swap",
  variable: "--font-uncut",
});

export const metadata: Metadata = {
  title: "SOFT EIS Magazine",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={uncut.className + " bg-background"}>
      <body className={"bg-background p-4 flex"}>
        <header className="w-1/4 relative">
          <Link href="/">
            <SOFT />
          </Link>
          <Navigation className="hidden lg:block" />
        </header>
        <main className="grow">{children}</main>
        <div className="w-1/6 relative">
          <EIS />
        </div>
      </body>
      <Script type="text/javascript" src="/snipcart.js"></Script>
    </html>
  );
}
