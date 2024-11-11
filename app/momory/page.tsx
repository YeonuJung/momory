import Image from "next/image";
import MomoryImage from "../../components/common/MomoryImage";
import PageDots from "../../components/ui/PageDots";
import TopContainer from "@/components/layout/TopContainer";

export default function Momory_page() {
  return (     
    <TopContainer verticalSpacing="gap-y-[5.6vw] xs:gap-y-[2.688rem]">
      <div className="flex items-center justify-center">
        <div className="flex h-[19vw] w-[83.3vw] items-center justify-center gap-[0.83vw] bg-title-illustration bg-cover bg-center bg-no-repeat font-nanum-Jung font-normal text-sky xs:h-[9.12rem] xs:w-[39.984rem] xs:gap-[0.398rem]">
          <span className="flex -translate-y-[1.6vw] items-center justify-center text-[13.54vw] leading-[15.63vw] xs:-translate-y-[0.768rem] xs:text-[6.499rem] xs:leading-[7.502rem]">
            수현수현
          </span>
          <span className="flex items-center justify-center text-[8.53vw] leading-[9.8vw] xs:text-[4.094rem] xs:leading-[4.704rem]">
            님과의 기억들
          </span>
        </div>
      </div>
      <MomoryImage/>
      <PageDots/>
      <div className="flex gap-x-[1.5vw] px-[2.7vw] font-nanum-Jung font-normal xs:gap-x-[0.72rem] xs:px-[1.296rem]">
        <button
          type="button"
          className="flex h-[17.7vw] flex-1 flex-col items-center justify-center gap-y-[1vw] rounded-[8.59px] border-2 border-sky text-white xs:h-[8.496rem] xs:gap-y-[0.48rem]"
        >
          <span className="text-[6.7vw] leading-[5vw] xs:text-[3.216rem] xs:leading-[2.4rem]">
            내 모모리 공유하기
          </span>
        </button>
        <button
          type="button"
          className="h-[17.7vw] flex-1 rounded-[8.59px] border-2 border-sky text-white xs:h-[8.496rem]"
        >
          <span className="text-[6.7vw] leading-[5vw] xs:text-[3.216rem] xs:leading-[2.4rem]">
            모모리 간직하기
          </span>
        </button>
      </div>
      <Image
        src={"/image/arrow-left.svg"}
        alt={"왼쪽 화살표"}
        width={13}
        height={19}
        className="absolute left-[2.67vw] w-[3.47vw] cursor-pointer xs:left-[1.282rem] xs:w-[1.3rem]"
      ></Image>
      <Image
        src={"/image/arrow-right.svg"}
        alt={"오른쪽 화살표"}
        width={13}
        height={19}
        className="absolute right-[2.67vw] w-[3.47vw] cursor-pointer xs:right-[1.282rem] xs:w-[1.3rem]"
      ></Image>
    </TopContainer>
  );
}
