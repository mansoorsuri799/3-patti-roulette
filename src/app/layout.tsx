import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
  preload: true,
});
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DeferredStyles from "@/components/DeferredStyles";
import ScrollToTopWrapper from "@/components/ScrollToTopWrapper";
import WebVitalsTracker from "@/components/WebVitalsTracker";
import { MobileMenuProvider } from "@/components/MobileMenuProvider";
import { BRAND, IMAGES, RATING_COUNT, RATING_VALUE, SITE_ORIGIN, VERSION } from "@/lib/site";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#06091F",
  viewportFit: "cover",
  interactiveWidget: "resizes-visual",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: {
    default: `3 Patti Roulette Pakistan ${VERSION} Official APK Download`,
    template: `%s | ${BRAND}`
  },
  description: "3 Patti Roulette APK for Pakistan: Teen Patti tables plus roulette wheels, JazzCash and EasyPaisa wallets, and v1.14 Android install notes. Entertainment play — not guaranteed income.",
  keywords: [
    "3 Patti Roulette",
    "3 Patti Roulette APK",
    "3 Patti Roulette download",
    "3 Patti Roulette Pakistan",
    "Teen Patti roulette app",
    "3 patti roulette v1.14",
    "JazzCash Teen Patti",
    "EasyPaisa roulette game"
  ],
  authors: [{ name: `${BRAND} Team` }],
  creator: BRAND,
  publisher: BRAND,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon', sizes: '256x256' },
      { url: IMAGES.logo, type: 'image/webp', sizes: '512x512' }
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180' }
    ],
    shortcut: [
      { url: '/favicon.ico', type: 'image/x-icon' }
    ]
  },
  verification: {
    google: "8a7c21f6e90a89ef",
  },
  alternates: {
    canonical: SITE_ORIGIN,
  },
  openGraph: {
    title: `3 Patti Roulette Pakistan ${VERSION} Official APK Download`,
    description: "Teen Patti and roulette on Android with JazzCash and EasyPaisa. Read the install guide on 3pattiroulette.com.pk before you sideload v1.14.",
    url: SITE_ORIGIN,
    siteName: BRAND,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${SITE_ORIGIN}${IMAGES.og}`,
        width: 512,
        height: 512,
        alt: `${BRAND} app icon`,
      },
      {
        url: `${SITE_ORIGIN}${IMAGES.ogSquare}`,
        width: 512,
        height: 512,
        alt: `${BRAND} square preview`,
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `3 Patti Roulette Pakistan ${VERSION} Official APK Download`,
    description: "Teen Patti and roulette on Android with JazzCash and EasyPaisa. Sideload v1.14 from the download guide.",
    creator: "@3pattiroulette",
    images: [
      {
        url: `${SITE_ORIGIN}${IMAGES.twitter}`,
        width: 512,
        height: 512,
        alt: `${BRAND} preview`,
      }
    ],
  },
  applicationName: BRAND,
  category: "Gaming",
  classification: "Teen Patti and Roulette Game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="256x256" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/3-patti-roulette.webp" type="image/webp" sizes="512x512" />
        <link rel="apple-touch-icon" href="/apple-icon.png" sizes="180x180" />
        
        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* Defer manifest to avoid critical path (374ms latency) - load after page interactive */}
        <Script id="deferred-manifest" strategy="lazyOnload">
          {`(function(){var l=document.createElement('link');l.rel='manifest';l.href='/manifest.json';document.head.appendChild(l);})();`}
        </Script>
        {/* Google Analytics - only load if GA ID is set in env (use NEXT_PUBLIC_GA_MEASUREMENT_ID) */}
        {typeof process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID === 'string' &&
         process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID &&
         !/^G-XXXXXXXXXX$/i.test(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
              strategy="lazyOnload"
            />
            <Script id="google-analytics" strategy="lazyOnload">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                  send_page_view: false,
                  transport_type: 'beacon'
                });
              `}
            </Script>
          </>
        )}
      </head>
      <body
        className={`${poppins.className} antialiased bg-primary text-white min-h-screen flex flex-col`}
        style={{
          backgroundImage: "radial-gradient(circle at 10% 20%, rgba(10, 16, 41, 0.4) 0%, rgba(6, 9, 31, 0.01) 90%)",
          backgroundAttachment: "fixed",
          minHeight: "100vh"
        }}
        suppressHydrationWarning
      >
        <div className="stars-bg fixed inset-0 z-0 opacity-20"></div>
        <MobileMenuProvider>
          <Header />
          <main className="relative z-10">
          {children}
          </main>
          <DeferredStyles />
          <Footer />
          <ScrollToTopWrapper />
        </MobileMenuProvider>
        <WebVitalsTracker />
        
        {/* Structured data for Organization */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": BRAND,
              "url": SITE_ORIGIN,
              "logo": `${SITE_ORIGIN}${IMAGES.logo}`,
              "description": `${BRAND} covers Teen Patti tables and roulette wheels for Pakistani Android users, with JazzCash and EasyPaisa wallet guides.`,
              "sameAs": [
                "https://www.facebook.com/share/1at8tjJcje/"
              ]
            })
          }}
        />
        
        {/* Structured data for SoftwareApplication */}
        <Script
          id="app-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": BRAND,
              "operatingSystem": "Android",
              "applicationCategory": "GameApplication",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "PKR"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": RATING_VALUE,
                "ratingCount": RATING_COUNT,
                "bestRating": "5"
              }
            })
          }}
        />
      </body>
    </html>
  );
}
