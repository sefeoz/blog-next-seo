import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/header";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "S.EFE OZ",
  description: "S.EFE OZ'un kişisel blog sayfası. Yazılım, teknoloji ve kişisel deneyimler üzerine yazılar.",
  keywords: ["yazılım", "teknoloji", "blog", "web development"],
  authors: [{ name: "Sadan Efe Oz" }],
  openGraph: {
    title: "S.EFE OZ - Kişisel Blog",
    description: "Yazılım, teknoloji ve kişisel deneyimler",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "S.EFE OZ - Kişisel Blog",
    description: "Yazılım, teknoloji ve kişisel deneyimler",
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
