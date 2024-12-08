import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "모모리",
  description: "올 한 해 따뜻했던 기억 이곳에 채워보세요",
  openGraph: {
    type: "website",
    url: "https://momory.kr",
    title: "모모리",
    description: "올 한 해 따뜻했던 기억 이곳에 채워보세요",
    images: [
      {
        url: "https://momory.kr/image/오픈그래프이미지.png",
        width: 1200,
        height: 640,
        alt: "모모리 메인 소개 이미지",
        type: "image/png",
      },
    ],
    locale: "ko_KR",
    siteName: "모모리",
    emails: ["gsh95214@naver.com"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@momory",
    title: "모모리",
    description: "올 한 해 따뜻했던 기억 이곳에 채워보세요",
    images: [
      {
        url: "https://momory.kr/image/오픈그래프이미지.png",
        alt: "모모리 메인 소개 이미지",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/image/favicon.ico" },
      { url: "/image/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/image/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      {
        url: "/image/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        url: "/image/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/image/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  manifest: '/site.webmanifest',
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

const pretendard = localFont({
  src: "../public/fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
  display: "block",
});

const nanumHaNaSonGeurSsi = localFont({
  src: "../public/fonts/NanumHaNaSonGeurSsi.woff2",
  variable: "--font-nanum-Hana",
  display: "swap",
  preload: true,
  weight: "400",
});

const nanumJungHagSaeng = localFont({
  src: "../public/fonts/NanumJungHagSaeng.woff2",
  variable: "--font-nanum-Jung",
  display: "block",
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${pretendard.variable} ${nanumHaNaSonGeurSsi.variable} ${nanumJungHagSaeng.variable}`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/cssgram/0.1.10/cssgram.min.css"
        ></link>
      </head>
      <body className="flex min-h-screen flex-col items-center bg-white">
        <Toaster position="top-center" containerStyle={{ top: 100 }} />
        {children}
      </body>
    </html>
  );
}
