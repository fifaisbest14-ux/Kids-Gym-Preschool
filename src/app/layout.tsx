import type { Metadata } from "next";
import { Nunito, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileBottomBar } from "@/components/layout/MobileBottomBar";
import { ConsentBanner } from "@/components/layout/ConsentBanner";
import { TrackingProvider } from "@/components/tracking/TrackingProvider";
import { JsonLd } from "@/components/seo/JsonLd";
import { BUSINESS } from "@/lib/constants";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${BUSINESS.name} | Kids Gym & Daycare in Model Town, Lahore`,
  description: `Model Town's preschool & daycare combining structured kids gym activities with guided early learning for children ages 1–8. Call ${BUSINESS.phoneDisplay}.`,
  keywords: [
    "preschool in Model Town Lahore",
    "daycare Model Town",
    "daycare near me Lahore",
    "kids gym Lahore",
    "preschool Model Town Lahore",
    "daycare for working mothers Lahore",
  ],
  authors: [{ name: BUSINESS.name }],
  metadataBase: new URL("https://kidsgym.pk"),
  openGraph: {
    title: BUSINESS.name,
    description: "Model Town's trusted kids gym, preschool, and daycare. Where active play meets early learning.",
    url: "https://kidsgym.pk",
    siteName: BUSINESS.name,
    locale: "en_PK",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || "GTM-XXXXXXX";

  return (
    <html lang="en" className={`${nunito.variable} ${inter.variable}`}>
      <head>
        <JsonLd />
        {/* Google Consent Mode v2 Defaults */}
        <Script
          id="consent-mode-default"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                'analytics_storage': 'denied',
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied'
              });
            `,
          }}
        />
        {/* Google Tag Manager Inline Container */}
        {gtmId && gtmId !== "GTM-XXXXXXX" && (
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${gtmId}');
              `,
            }}
          />
        )}
      </head>
      <body className="min-h-screen flex flex-col bg-base text-ink antialiased">
        {/* GTM noscript fallback */}
        {gtmId && gtmId !== "GTM-XXXXXXX" && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        <TrackingProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <MobileBottomBar />
          <ConsentBanner />
        </TrackingProvider>
      </body>
    </html>
  );
}
