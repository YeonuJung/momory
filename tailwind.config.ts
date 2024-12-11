import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    // Desktop position classes (vw)
    "-top-[0.79vw]",
    "-left-[3.42vw]",
    "top-[9.21vw]",
    "-left-[4.05vw]",
    "-top-[1vw]",
    "-right-[2.88vw]",
    "-right-[1.01vw]",
    "bottom-[12.85vw]",
    "-left-[4.05vw]",
    "-bottom-[4.03vw]",
    "-bottom-[4.23vw]",
    "-right-[4.55vw]",
    "-right-[8.59vw]",
    "-top-[3.63vw]",
    "-bottom-[3.23vw]",
    "-right-[5.83vw]",
    "-bottom-[4.03vw]",
    "-left-[2.01vw]",
    "-top-[3.55vw]",
    "-right-[2.09vw]",
    "-top-[2.69vw]",
    "left-[4.48vw]",
    "-bottom-[13.22vw]",
    "-right-[3.05vw]",
    "-right-[1.67vw]",
    "bottom-[14.61vw]",
    "-left-[2.92vw]",
    "-bottom-[3.1vw]",
    "-bottom-[9.76vw]",
    "left-[4.58vw]",
    "-bottom-[4.14vw]",
    "-right-[11.34vw]",
    "-top-[2.89vw]",
    "-left-[4.46vw]",
    "-top-[4.98vw]",
    "-right-[9.36vw]",
    "-left-[2.5vw]",
    "-bottom-[4.26vw]",
    "-bottom-[6.76vw]",
    "right-[8.72vw]",
    "-bottom-[3.84vw]",
    "-right-[5.24vw]",

    // Mobile position classes (rem)
    "xs:-top-[0.343rem]",
    "xs:-left-[1.478rem]",
    "xs:top-[3.977rem]",
    "xs:-left-[1.748rem]",
    "xs:-top-[0.433rem]",
    "xs:-right-[1.246rem]",
    "xs:-right-[1.876rem]",
    "xs:bottom-[5.551rem]",
    "xs:-left-[1.748rem]",
    "xs:-bottom-[1.739rem]",
    "xs:-bottom-[1.829rem]",
    "xs:-right-[1.966rem]",
    "xs:-right-[3.713rem]",
    "xs:-top-[1.57rem]",
    "xs:-bottom-[1.396rem]",
    "xs:-right-[2.516rem]",
    "xs:-bottom-[1.74rem]",
    "xs:-left-[0.869rem]",
    "xs:-top-[1.535rem]",
    "xs:-right-[0.945rem]",
    "xs:-top-[1.163rem]",
    "xs:left-[1.937rem]",
    "xs:-bottom-[5.711rem]",
    "xs:-right-[1.316rem]",
    "xs:-right-[0.72rem]",
    "xs:bottom-[6.313rem]",
    "xs:-left-[1.26rem]",
    "xs:-bottom-[1.337rem]",
    "xs:-bottom-[4.217rem]",
    "xs:left-[1.98rem]",
    "xs:-bottom-[1.787rem]",
    "xs:-right-[4.897rem]",
    "xs:-top-[1.25rem]",
    "xs:-left-[1.929rem]",
    "xs:-top-[2.15rem]",
    "xs:-right-[4.043rem]",
    "xs:-left-[1.08rem]",
    "xs:-bottom-[1.84rem]",
    "xs:-bottom-[2.92rem]",
    "xs:right-[3.767rem]",
    "xs:-bottom-[1.66rem]",
    "xs:-right-[2.263rem]",
  ],
  theme: {
    extend: {
      colors: {
        ruby: "#A92525", // 메인 빨강색
        ruby2: "#8A1C1C", // 터치 빨강색
        sky: "#75D8FF", // 메인 하늘색
        black: "#252525", // 메인 검정색
        dialog: "#3A0B0B", // 모달 배경색
        gray1: "#25252599", // 닉네임 색
        gray2: "#25252580", // 플레이스홀더 및 더보기 색
      },
      fontFamily: {
        pretendard: ["var(--font-pretendard)"],
        "nanum-Jung": ["var(--font-nanum-Jung)"],
      },
      screens: {
        // xs -> 디바이스 가로
        xs: "432px",
        shortLandscape: {
          raw: "(orientation: landscape) and (max-width: 765px)",
        },
        short: {
          raw: "(max-height: 710px)"
        }
      },
      backgroundImage: {
        "title-illustration": "url('/image/타이틀 주변.png')",
        "polaroid-frame": "url('/image/frame.png')",
      },
      boxShadow: {
        frame: "0px 1.5px 3px 0px #252525",
      },
    
    },
  },
  plugins: [],
};
export default config;
