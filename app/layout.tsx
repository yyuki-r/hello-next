import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "株式会社六方良 | 社会の未来を知恵で切り拓く",
  description: "プロダクト戦略サポート、プロダクトマネージャーメンタリング、採用支援を通じて、社会の未来を切り拓く株式会社六方良の公式サイトです。",
  keywords: "プロダクト戦略, プロダクトマネージャー, メンタリング, 採用支援, 六方良",
  authors: [{ name: "株式会社六方良" }],
  creator: "株式会社六方良",
  publisher: "株式会社六方良",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://rokuhou-ryo.com"),
  openGraph: {
    title: "株式会社六方良 | 社会の未来を知恵で切り拓く",
    description: "プロダクト戦略サポート、プロダクトマネージャーメンタリング、採用支援を通じて、社会の未来を切り拓く株式会社六方良の公式サイトです。",
    url: "https://rokuhou-ryo.com",
    siteName: "株式会社六方良",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "株式会社六方良 | 社会の未来を知恵で切り拓く",
    description: "プロダクト戦略サポート、プロダクトマネージャーメンタリング、採用支援を通じて、社会の未来を切り拓く株式会社六方良の公式サイトです。",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="icon" href="/ROPPOYOSHI_Icon_fabicon.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
