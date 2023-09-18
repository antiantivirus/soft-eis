import "./globals.css";
import localFont from "next/font/local";
import { SOFT, EIS } from "../components/logo";
import Navigation from "../components/navigation";
import Link from "next/link";
import MobileNavigation from "../components/mobileNavigation";
import Head from "next/head";

const uncut = localFont({
  src: "./UncutSans-Variable.woff2",
  display: "swap",
  variable: "--font-uncut",
});

export const metadata = {
  title: "SOFT EIS Magazine",
  description:
    "SOFT EIS is an independent print magazine published in Berlin. Each issue deconstructs a different topic by pulling at its strings to examine the space between.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={uncut.className + " bg-background"}>
      <Head>
        <meta property="og:image" content="/softeis-social.png" />
      </Head>
      <body className={"bg-background p-4 lg:flex"}>
        <header className="lg:w-[26vw]">
          <Link href="/">
            <SOFT />
          </Link>
          <Navigation className="hidden lg:block fade-in" />
          <MobileNavigation />
        </header>
        <main className="grow lg:w-[58vw] fade-in">{children}</main>
        <div className="lg:w-[16vw]">
          <EIS />
        </div>
        <div
          style={{
            background:
              "linear-gradient(0deg, #F6C859 0%, rgba(192, 192, 192, 0.00) 61.46%)",
          }}
          className="fixed bottom-0 left-0 w-screen h-[30vh] z-0 pointer-events-none"
        ></div>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.SnipcartSettings = {
                publicApiKey: "M2UyMjA4ZjAtN2Q3OC00OTVhLWIyZTEtODZmOTUwNmIzMTBhNjM3NDM2MzQxNjA0NDQ5MjA5",
                loadStrategy: "on-user-interaction",
                modalStyle: "side",
                currency: "eur"
            };
            (function(){var c,d;(d=(c=window.SnipcartSettings).version)!=null||(c.version="3.0");var s,S;(S=(s=window.SnipcartSettings).currency)!=null||(s.currency="usd");var l,p;(p=(l=window.SnipcartSettings).timeoutDuration)!=null||(l.timeoutDuration=2750);var w,u;(u=(w=window.SnipcartSettings).domain)!=null||(w.domain="cdn.snipcart.com");var m,g;(g=(m=window.SnipcartSettings).protocol)!=null||(m.protocol="https");var f,v;(v=(f=window.SnipcartSettings).loadCSS)!=null||(f.loadCSS=!0);var E=window.SnipcartSettings.version.includes("v3.0.0-ci")||window.SnipcartSettings.version!="3.0"&&window.SnipcartSettings.version.localeCompare("3.4.0",void 0,{numeric:!0,sensitivity:"base"})===-1,y=["focus","mouseover","touchmove","scroll","keydown"];window.LoadSnipcart=o;document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r):r();function r(){window.SnipcartSettings.loadStrategy?window.SnipcartSettings.loadStrategy==="on-user-interaction"&&(y.forEach(function(t){return document.addEventListener(t,o)}),setTimeout(o,window.SnipcartSettings.timeoutDuration)):o()}var a=!1;function o(){if(a)return;a=!0;let t=document.getElementsByTagName("head")[0],n=document.querySelector("#snipcart"),i=document.querySelector('src[src^="'.concat(window.SnipcartSettings.protocol,"://").concat(window.SnipcartSettings.domain,'"][src$="snipcart.js"]')),e=document.querySelector('link[href^="'.concat(window.SnipcartSettings.protocol,"://").concat(window.SnipcartSettings.domain,'"][href$="snipcart.css"]'));n||(n=document.createElement("div"),n.id="snipcart",n.setAttribute("hidden","true"),document.body.appendChild(n)),$(n),i||(i=document.createElement("script"),i.src="".concat(window.SnipcartSettings.protocol,"://").concat(window.SnipcartSettings.domain,"/themes/v").concat(window.SnipcartSettings.version,"/default/snipcart.js"),i.async=!0,t.appendChild(i)),!e&&window.SnipcartSettings.loadCSS&&(e=document.createElement("link"),e.rel="stylesheet",e.type="text/css",e.href="".concat(window.SnipcartSettings.protocol,"://").concat(window.SnipcartSettings.domain,"/themes/v").concat(window.SnipcartSettings.version,"/default/snipcart.css"),t.prepend(e)),y.forEach(function(h){return document.removeEventListener(h,o)})}function $(t){!E||(t.dataset.apiKey=window.SnipcartSettings.publicApiKey,window.SnipcartSettings.addProductBehavior&&(t.dataset.configAddProductBehavior=window.SnipcartSettings.addProductBehavior),window.SnipcartSettings.modalStyle&&(t.dataset.configModalStyle=window.SnipcartSettings.modalStyle),window.SnipcartSettings.currency&&(t.dataset.currency=window.SnipcartSettings.currency),window.SnipcartSettings.templatesUrl&&(t.dataset.templatesUrl=window.SnipcartSettings.templatesUrl))}})();
          `,
          }}
        />
      </body>
    </html>
  );
}
