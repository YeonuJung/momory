"use client";
import { PAGES_WITH_FINISHBUTTON } from "@/constants/page";
import { HeaderProps } from "@/types/Header";
import Image from "next/image";
import headerLogo from "@/public/image/상단메인로고.png";

export default function Header(props: HeaderProps) {
  const { page } = props;
  return (
    <header className="absolute top-[6.67vw] flex w-full items-center justify-between px-[5.83vw] xs:top-[2.88rem] xs:px-[2.52rem]">
      {
        <div className="flex h-[4.62vw] w-[7.1vw] cursor-pointer items-center justify-center xs:h-[2rem] xs:w-[3.067rem]">
          <span
            className={`font-nanum-Jung text-[6.67vw] font-normal text-sky active:scale-125 xs:text-[2.88rem] ${"handlePrev" in props ? "cursor-pointer" : "cursor-not-allowed opacity-50"} whitespace-nowrap`}
            onClick={"handlePrev" in props ? props.handlePrev : undefined}
          >
            이전
          </span>
        </div>
      }
      <Image
        src={headerLogo}
        width={117}
        height={57.6}
        alt="상단 메인로고"
        priority={true}
        className="h-[13.33vw] w-[27.08vw] cursor-pointer xs:h-[5.76rem] xs:w-[11.7rem]"
      />
      {PAGES_WITH_FINISHBUTTON.includes(page) ? (
        <button
          disabled={"isSubmitting" in props ? props.isSubmitting : undefined}
          className="cursor-pointer font-nanum-Jung text-[6.67vw] font-normal text-sky active:scale-125 xs:text-[2.88rem] whitespace-nowrap"
          onClick={"handleSubmit" in props ? props.handleSubmit : undefined}
        >
          완료
        </button>
      ) : (
        <div className="flex h-[4.62vw] w-[7.1vw] cursor-pointer items-center justify-center xs:h-[2rem] xs:w-[3.067rem]">
          <span
            className= "font-nanum-Jung text-[6.67vw] font-normal text-sky active:scale-125 xs:text-[2.88rem] cursor-pointer whitespace-nowrap"
            onClick={"handleNext" in props ? props.handleNext : undefined}
          >다음</span>
        </div>
      )}
    </header>
  );
}
