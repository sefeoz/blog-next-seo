import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/header";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: {
    default: "S.EFE OZ - Software Engineering Student & Technology Blog",
    template: "%s | S.EFE OZ"
  },
  description: "Sadan Efe Oz's personal blog. Software engineering, technology trends, web development and personal experiences. Content about Next.js, React, and modern web technologies.",
  keywords: [
    "yazılım geliştirici",
    "web development", 
    "Next.js",
    "React",
    "TypeScript",
    "teknoloji blogu",
    "frontend development",
    "Sadan Efe Oz",
    "İstinye Üniversitesi",
    "software engineering"
  ],
  authors: [{ name: "Sadan Efe Oz" }],
  creator: "Sadan Efe Oz",
  publisher: "Sadan Efe Oz",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://sefeoz.vercel.app'), // Domain'inizi buraya ekleyin
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://sefeoz.vercel.app",
    title: "S.EFE OZ - Software Engineering Student & Technology Blog",
    description: "Software engineering, technology trends, web development and personal experiences. Content about Next.js, React, and modern web technologies.",
    siteName: "S.EFE OZ Blog",
    images: [
      {
        url: "/og-image.jpg", // Open Graph resmi ekleyin
        width: 1200,
        height: 630,
        alt: "S.EFE OZ - Yazılım Geliştirici",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "S.EFE OZ - Software Engineering Student & Technology Blog",
    description: "Software engineering, technology trends, web development and personal experiences. Content about Next.js, React, and modern web technologies.",
    creator: "@sefeoz",
    images: ["/twitter-image.jpg"], // Twitter resmi ekleyin
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Google Search Console
    yandex: "your-yandex-verification-code", // Yandex Webmaster
    yahoo: "your-yahoo-verification-code", // Yahoo Site Explorer
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Providers>
          <Header />
          
          {children}
        </Providers>
      </body>
    </html>
  );
}
