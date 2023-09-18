import "./globals.css";
import localFont from "next/font/local";
import { SOFT, EIS } from "../icons/logo";
import Navigation from "../components/navigation";
import Link from "next/link";
import Head from "next/head";
import Snipcart from "../components/snipcart";

const uncut = localFont({
  src: "./UncutSans-Variable.woff2",
  display: "swap",
  variable: "--font-uncut",
});

export const metadata = {
  title: "SOFT EIS Magazine",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={uncut.className + " bg-background"}>
      <Head>
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link
          rel="stylesheet"
          href="https://cdn.snipcart.com/themes/v3.4.0/default/snipcart.css"
        />
        <script
          async
          defer
          src="https://cdn.snipcart.com/themes/v3.4.0/default/snipcart.js"
        ></script>
        <div
          hidden
          id="snipcart"
          data-api-key="YTQwNzE2YjAtNjlmZC00YmUzLTkwYjAtZWU4ZmM1OTY0Y2QxNjM3NDM2MzQxNjA0NDQ5MjA5"
        ></div>
      </Head>
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
    </html>
  );
}
