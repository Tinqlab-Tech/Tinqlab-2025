"use client";

import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Footer from "@/components/partials/Footer";
import Header from "@/components/partials/Header";
import Script from "next/script";
import { Lato } from "next/font/google";
import HomepageHero from "@/components/hero/HomepageHero";

//fonts
const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"], // choose the weights you need
  style: ["normal", "italic"], // optional
  variable: "--font-lato", // optional for CSS variable usage
  display: "swap", // improves font loading
});
export default function RootLayout({ children }) {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <>
      <html lang="en" className={`${lato.className} font-sans z-10`}>
        <body className="tracking-tight">
          <main>
            <Header />
            {children}
            <Footer />
          </main>
          <Script
            src="/assets/scripts/lang-config.js"
            strategy="beforeInteractive"
          />
          <Script
            src="/assets/scripts/translation.js"
            strategy="beforeInteractive"
          />
          <Script
            src="//translate.google.com/translate_a/element.js?cb=TranslateInit"
            strategy="afterInteractive"
          />
        </body>
      </html>
    </>
  );
}
