import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ruby: "#A92525", // 메인 빨강색
        sky: "#75D8FF", // 메인 하늘색
        black: "#252525", // 메인 검정색
        dialog: "#3A0B0B", // 모달 배경색
        gray1: "#25252599", // 닉네임 색
        gray2: "#25252580", // 플레이스홀더 및 더보기 색
      },
      fontFamily:{
        pretendard: ["var(--font-pretendard)"],
        "nanum-Hana": ["var(--font-nanum-Hana)"],
        "nanum-Jung": ["var(--font-nanum-Jung)"]
      },
      screens: {
        // xs -> 디바이스 가로
        xs: '480px',
        shortLandscape: {
          raw: '(orientation: landscape) and (max-height: 850px)',
        }
      },
      backgroundImage: {
        "title-illustration": "url('/image/타이틀 주변.png')",
        "polaroid-frame": "url('/image/frame.png')",
        "polaroid-filter": "url('/image/filter.png')",
      },
      boxShadow: {
        "frame": "0px 1.5px 3px 0px #252525"
      }
    },
  },
  plugins: [
  ],
};
export default config;
