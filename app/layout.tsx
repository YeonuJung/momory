import localFont from "next/font/local"
import "./globals.css";


const pretendard = localFont({
  src: "../public/fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
  display: "swap"
})

const nanumHaNaSonGeurSsi = localFont({
  src: "../public/fonts/NanumHaNaSonGeurSsi.ttf",
  variable: "--font-nanum-Hana",
  display: "swap",
  weight: "400"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${pretendard.variable} ${nanumHaNaSonGeurSsi.variable}`}>
      <body className="min-h-screen flex flex-col items-center bg-slate-300">
        {children}
      </body>
    </html>
  );
}
