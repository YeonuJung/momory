"use client";
import { PAGES_WITH_FINISHBUTTON } from "@/constants/page";
import { HeaderProps } from "@/types/Header";
import Image from "next/image";

export default function Header(props: HeaderProps) {
  const { page } = props;
  return (
    <header className="absolute top-[6.67vw] flex w-full items-center justify-between px-[5.83vw] xs:top-[3.2rem] xs:px-[2.8rem]">
      {
        <div className="flex h-[4.62vw] w-[7.1vw] cursor-pointer items-center justify-center xs:h-[2.219rem] xs:w-[3.408rem]">
          <Image
            src="/image/arrow-left.png"
            width={14.12}
            height={21.19}
            alt="왼쪽 화살표"
            className={`h-[4.62vw] w-[2.94vw] cursor-pointer xs:h-[2.219rem] xs:w-[1.412rem] ${"handlePrev" in props ? "" : "cursor-not-allowed opacity-50"}`}
            onClick={"handlePrev" in props ? props.handlePrev : undefined}
          />
        </div>
      }
      <Image
        src="/image/상단메인로고.svg"
        width={130}
        height={64}
        alt="상단 메인로고"
        className="h-[13.33vw] w-[27.08vw] cursor-pointer xs:h-[6.4rem] xs:w-[13rem]"
      ></Image>
      {PAGES_WITH_FINISHBUTTON.includes(page) ? (
        <span
          className="cursor-pointer font-nanum-Jung text-[6.67vw] font-normal text-sky xs:text-[3.2rem]"
          onClick={"handleSubmit" in props ? props.handleSubmit : undefined}
        >
          완료
        </span>
      ) : (
        <div className="flex h-[4.62vw] w-[7.1vw] cursor-pointer items-center justify-center xs:h-[1.9rem] xs:w-[3.408rem]">
          <Image
            src="/image/arrow-right.png"
            width={14.12}
            height={21.19}
            alt="오른쪽 화살표"
            className="h-[4.62vw] w-[2.94vw] cursor-pointer xs:h-[2.219rem] xs:w-[1.412rem]"
            onClick={"handleNext" in props ? props.handleNext : undefined}
          ></Image>
        </div>
      )}
    </header>
  );
}
