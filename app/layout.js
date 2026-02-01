"use client";

import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect } from "react";
import Footer from "@/components/partials/Footer";
import Header from "@/components/partials/Header";
import Script from "next/script";
import { Lato } from "next/font/google";
import HomepageHero from "@/components/hero/HomepageHero";
import { getData } from "@/services";
import { Toaster } from "react-hot-toast";

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

  useEffect(() => {
    getData("wake").then((res) => {});
  }, []);

  return (
    <>
      <html lang="en" className={`${lato.className} font-sans z-10`}>
        <body className="tracking-tight">
          <main>
            {children}
            <Footer />
            <Toaster
              toastOptions={{
                success: {
                  iconTheme: {
                    primary: "green",
                    secondary: "white",
                  },
                },
                error: {
                  iconTheme: {
                    primary: "#FF0000",
                    secondary: "white",
                  },
                },
                className: "",
                style: {
                  borderRadius: "5px",
                  border: "1px solid #E6E6E6",
                  padding: "10px",
                  color: "#000000",
                  fontSize: "14px",
                  background: "white",
                },
              }}
            />
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
