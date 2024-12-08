"use client";
import { PAGES_WITH_FINISHBUTTON } from "@/constants/page";
import { HeaderProps } from "@/types/Header";
import Image from "next/image";
import arrowLeft from "@/public/image/arrow-left.png";
import arrowRight from "@/public/image/arrow-right.png";
import headerLogo from "@/public/image/상단메인로고.png";

export default function Header(props: HeaderProps) {
 const { page } = props;
 return (
   <header className="absolute top-[6.67vw] flex w-full items-center justify-between px-[5.83vw] xs:top-[2.88rem] xs:px-[2.52rem]">
     {
       <div className="flex h-[4.62vw] w-[7.1vw] cursor-pointer items-center justify-center xs:h-[2rem] xs:w-[3.067rem]">
         <Image
           src={arrowLeft}
           width={12.7}
           height={20}
           alt="왼쪽 화살표"
           className={`h-[4.62vw] w-[2.94vw] cursor-pointer xs:h-[2rem] xs:w-[1.27rem] ${"handlePrev" in props ? "" : "cursor-not-allowed opacity-50"}`}
           onClick={"handlePrev" in props ? props.handlePrev : undefined}
         />
       </div>
     }
     <Image
       src={headerLogo}
       width={117}
       height={57.6}
       alt="상단 메인로고"
       className="h-[13.33vw] w-[27.08vw] cursor-pointer xs:h-[5.76rem] xs:w-[11.7rem]"
     />
     {PAGES_WITH_FINISHBUTTON.includes(page) ? (
       <span
         className="cursor-pointer font-nanum-Jung text-[6.67vw] font-normal text-sky xs:text-[2.88rem]"
         onClick={"handleSubmit" in props ? props.handleSubmit : undefined}
       >
         완료
       </span>
     ) : (
       <div className="flex h-[4.62vw] w-[7.1vw] cursor-pointer items-center justify-center xs:h-[1.71rem] xs:w-[3.067rem]">
         <Image
           src={arrowRight}
           width={12.7}
           height={20}
           alt="오른쪽 화살표"
           className="h-[4.62vw] w-[2.94vw] cursor-pointer xs:h-[2rem] xs:w-[1.27rem]"
           onClick={"handleNext" in props ? props.handleNext : undefined}
         />
       </div>
     )}
   </header>
 );
}