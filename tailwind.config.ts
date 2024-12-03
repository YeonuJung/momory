import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    // Desktop position classes (vw)
    "-top-[0.79vw]", "-left-[3.42vw]",
    "top-[9.21vw]", "-left-[4.05vw]",
    "-top-[1vw]", "-right-[2.88vw]",
    "-right-[1.01vw]", "bottom-[12.85vw]",
    "-left-[4.05vw]", "-bottom-[4.03vw]",
    "-bottom-[4.23vw]", "-right-[4.55vw]",
    "-right-[8.59vw]", "-top-[3.63vw]",
    "-bottom-[3.23vw]", "-right-[5.83vw]",
    "-bottom-[4.03vw]", "-left-[2.01vw]",
    "-top-[3.55vw]", "-right-[2.09vw]",
    "-top-[2.69vw]", "left-[4.48vw]",
    "-bottom-[13.22vw]", "-right-[3.05vw]",
    "-right-[1.67vw]", "bottom-[14.61vw]",
    "-left-[2.92vw]", "-bottom-[3.1vw]",
    "-bottom-[9.76vw]", "left-[4.58vw]",
    "-bottom-[4.14vw]", "-right-[11.34vw]",
    "-top-[2.89vw]", "-left-[4.46vw]",
    "-top-[4.98vw]", "-right-[9.36vw]",
    "-left-[2.5vw]", "-bottom-[4.26vw]",
    "-bottom-[6.76vw]", "right-[8.72vw]",
    "-bottom-[3.84vw]", "-right-[5.24vw]",

    // Mobile position classes (rem)
    "xs:-top-[0.381rem]", "xs:-left-[1.642rem]",
    "xs:top-[4.419rem]", "xs:-left-[1.942rem]",
    "xs:-top-[0.481rem]", "xs:-right-[1.384rem]",
    "xs:-right-[2.084rem]", "xs:bottom-[6.168rem]",
    "xs:-left-[1.942rem]", "xs:-bottom-[1.932rem]",
    "xs:-bottom-[2.032rem]", "xs:-right-[2.184rem]",
    "xs:-right-[4.125rem]", "xs:-top-[1.744rem]",
    "xs:-bottom-[1.551rem]", "xs:-right-[2.796rem]",
    "xs:-bottom-[1.933rem]", "xs:-left-[0.966rem]",
    "xs:-top-[1.705rem]", "xs:-right-[1.05rem]",
    "xs:-top-[1.292rem]", "xs:left-[2.152rem]",
    "xs:-bottom-[6.346rem]", "xs:-right-[1.462rem]",
    "xs:-right-[0.8rem]", "xs:bottom-[7.014rem]",
    "xs:-left-[1.4rem]", "xs:-bottom-[1.486rem]",
    "xs:-bottom-[4.686rem]", "xs:left-[2.2rem]",
    "xs:-bottom-[1.986rem]", "xs:-right-[5.441rem]",
    "xs:-top-[1.389rem]", "xs:-left-[2.143rem]",
    "xs:-top-[2.389rem]", "xs:-right-[4.492rem]",
    "xs:-left-[1.2rem]", "xs:-bottom-[2.044rem]",
    "xs:-bottom-[3.244rem]", "xs:right-[4.186rem]",
    "xs:-bottom-[1.844rem]", "xs:-right-[2.514rem]"
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
