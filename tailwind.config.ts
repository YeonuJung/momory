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
      },
      screens: {
        // xs -> 가로
        xs: '480px',
        // short -> 세로
        short: {
          raw: '(max-height: 400px)',
        },
        watch: {
          raw: '(max-height: 225px)',
        }

      }
    },
  },
  plugins: [],
};
export default config;
