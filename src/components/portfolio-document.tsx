import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { email, person } from "@/data/portfolio";
import Navbar from "./navbar";
import Footer from "./footer";
import MotionEnhancements from "./motion-enhancements";
import { getResume } from "@/lib/resume";
import "@/app/globals.css";
const sans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});
const mono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});
export default function PortfolioDocument({
  children,
  locale,
}: {
  children: ReactNode;
  locale: Locale;
}) {
  const dict = getDictionary(locale);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    jobTitle: person.jobTitle,
    email,
    sameAs: person.sameAs,
  };
  return (
    <html
      lang={locale}
      className={`${sans.variable} ${mono.variable} antialiased`}
    >
      <body>
        <a href="#conteudo" className="skip-link">
          {dict.skip}
        </a>
        <Navbar dict={dict} locale={locale} resume={getResume(locale)} />
        <main id="conteudo" tabIndex={-1}>
          {children}
        </main>
        <Footer dict={dict} />
        <MotionEnhancements />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
