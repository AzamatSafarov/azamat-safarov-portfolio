import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata, Viewport } from "next";
import localFont from 'next/font/local';
import "./globals.css";

const soriaFont = localFont({
  src: "../public/soria-font.ttf",
  variable: "--font-soria",
});

const vercettiFont = localFont({
  src: "../public/Vercetti-Regular.woff",
  variable: "--font-vercetti",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://azamatsafarov.vercel.app'),
  title: "Azamat Safarov",
  description: "Digital Humanities & Data Visualization. International Relations, methodology, and code.",
  keywords: "Azamat Safarov, Digital Humanities, Data Visualization, International Relations, Methodology, D3.js, React, Next.js, Portfolio, SFedU",
  authors: [{ name: "Azamat Safarov" }],
  creator: "Azamat Safarov",
  publisher: "Azamat Safarov",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Azamat Safarov — Portfolio",
    description: "Digital Humanities & Data Visualization. International Relations, methodology, and code.",
    siteName: "Azamat Safarov's Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Azamat Safarov — Portfolio",
    description: "Digital Humanities & Data Visualization. International Relations, methodology, and code.",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overscroll-y-none">
      <body
        className={`${soriaFont.variable} ${vercettiFont.variable} font-sans antialiased`}
      >
        {children}
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ''}/>
    </html>
  );
}
