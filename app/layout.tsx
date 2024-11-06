import localFont from "next/font/local"
import './globals.css'


const pretendard = localFont({
  src: "../public/fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
  display: "block"
})

const nanumHaNaSonGeurSsi = localFont({
  src: "../public/fonts/NanumHaNaSonGeurSsi.ttf",
  variable: "--font-nanum-Hana",
  display: "block",
  weight: "400"
})

const nanumJungHagSaeng = localFont({
  src: "../public/fonts/NanumJungHagSaeng.ttf",
  variable: "--font-nanum-Jung",
  display: "block",
  weight: "400"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${pretendard.variable} ${nanumHaNaSonGeurSsi.variable} ${nanumJungHagSaeng.variable}`}>
      <body className="min-h-screen flex flex-col items-center bg-white">
        {children}
      </body>
    </html>
  );
}
