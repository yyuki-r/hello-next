import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "六方嘉 | 良い知恵で、価値あるものをより早く",
  description: "プロダクト戦略サポート、プロダクトマネージャーメンタリング、採用支援を通じて、良い知恵で、価値あるものをより早く実現する六方嘉の公式サイトです。",
  keywords: "プロダクト戦略, プロダクトマネージャー, メンタリング, 採用支援, 六方嘉",
  authors: [{ name: "六方嘉" }],
  creator: "六方嘉",
  publisher: "六方嘉",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://rokuhou-ryo.com"),
  openGraph: {
    title: "六方嘉 | 良い知恵で、価値あるものをより早く",
    description: "プロダクト戦略サポート、プロダクトマネージャーメンタリング、採用支援を通じて、良い知恵で、価値あるものをより早く実現する六方嘉の公式サイトです。",
    url: "https://rokuhou-ryo.com",
    siteName: "六方嘉",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "六方嘉 | 良い知恵で、価値あるものをより早く",
    description: "プロダクト戦略サポート、プロダクトマネージャーメンタリング、採用支援を通じて、良い知恵で、価値あるものをより早く実現する六方嘉の公式サイトです。",
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
