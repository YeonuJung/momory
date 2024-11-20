"use client";
import Image from "next/image";

interface HeaderProps {
  type: "finish" | "arrow";
  setCurrentPage?: (currentPage: string) => void;
}
export default function Header({ type }: HeaderProps) {
  return (
    <header className="absolute top-[6.67vw] flex w-full items-center justify-between px-[5.83vw] xs:top-[3.2rem] xs:px-[2.8rem]">
      <Image
        src="/image/arrow-left.svg"
        width={13}
        height={19}
        alt="왼쪽 화살표"
        className="h-[4.62vw] w-[2.92vw] cursor-pointer xs:h-[1.9rem] xs:w-[1.3rem]"
      ></Image>
      <Image
        src="/image/상단메인로고.svg"
        width={130}
        height={64}
        alt="상단 메인로고"
        className="h-[13.33vw] w-[27.08vw] cursor-pointer xs:h-[6.4rem] xs:w-[13rem]"
      ></Image>
      {type === "finish" ? (
        <span className="cursor-pointer font-nanum-Jung text-[6.67vw] font-normal text-sky xs:text-[3.2rem]">
          완료
        </span>
      ) : (
        <Image
          src="/image/arrow-right.svg"
          width={13}
          height={19}
          alt="오른쪽 화살표"
          className="h-[4.62vw] w-[2.92vw] cursor-pointer xs:h-[1.9rem] xs:w-[1.3rem]"
        ></Image>
      )}
    </header>
  );
}
