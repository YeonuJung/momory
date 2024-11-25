import { Button, ButtonWithCaption } from "@/components/common/Button/Button";
import ButtonContainer from "@/components/common/Button/ButtonContainer";
import PageDots from "@/app/momory/[uuid]/_components/PageDots";
import Image from "next/image";

export default function MomoryInvite() {
  return (
    <>
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
      <div className="relative flex flex-wrap content-center items-center justify-center gap-x-[5.6vw] gap-y-[4.75vw] xs:gap-x-[2.688rem] xs:gap-y-[2.28rem]">
        <div className="flex h-[33.9vw] w-[23vw] -rotate-[1.75deg] flex-col items-center justify-center bg-polaroid-frame bg-cover bg-center bg-no-repeat xs:h-[16.032rem] xs:w-[10.8rem]">
          <div className="h-[25.52vw] w-[19.28vw] xs:h-[12.25rem] xs:w-[9.256rem]"></div>
          <div className="w-full px-[1.85vw] py-[1.76vw] align-top font-nanum-Jung text-[3.75vw] font-normal text-[#252525] xs:px-[0.888rem] xs:py-[0.845rem] xs:text-[1.8rem]">
            @트리플스타
          </div>
        </div>
        <div className="flex h-[33.9vw] w-[23vw] flex-col items-center justify-center bg-polaroid-frame bg-cover bg-center bg-no-repeat xs:h-[16.032rem] xs:w-[10.8rem]">
          <div className="h-[25.52vw] w-[19.28vw] xs:h-[12.25rem] xs:w-[9.256rem]"></div>
          <div className="w-full px-[1.85vw] py-[1.76vw] align-top font-nanum-Jung text-[3.75vw] font-normal text-[#252525] xs:px-[0.888rem] xs:py-[0.845rem] xs:text-[1.8rem]">
            @나폴리맛피아
          </div>
        </div>
        <div className="flex h-[33.9vw] w-[23vw] rotate-[2.66deg] flex-col items-center justify-center bg-polaroid-frame bg-cover bg-center bg-no-repeat xs:h-[16.032rem] xs:w-[10.8rem]">
          <div className="h-[25.52vw] w-[19.28vw] xs:h-[12.25rem] xs:w-[9.256rem]"></div>
          <div className="w-full px-[1.85vw] py-[1.76vw] align-top font-nanum-Jung text-[3.75vw] font-normal text-[#252525] xs:px-[0.888rem] xs:py-[0.845rem] xs:text-[1.8rem]">
            @급식대가
          </div>
        </div>
        <div className="flex h-[33.9vw] w-[23vw] -rotate-[2.31deg] flex-col items-center justify-center bg-polaroid-frame bg-cover bg-center bg-no-repeat xs:h-[16.032rem] xs:w-[10.8rem]">
          <div className="h-[25.52vw] w-[19.28vw] xs:h-[12.25rem] xs:w-[9.256rem]"></div>
          <div className="w-full px-[1.85vw] py-[1.76vw] align-top font-nanum-Jung text-[3.75vw] font-normal text-[#252525] xs:px-[0.888rem] xs:py-[0.845rem] xs:text-[1.8rem]">
            @에드워드리
          </div>
        </div>
        <div className="flex h-[33.9vw] w-[23vw] rotate-[1.99deg] flex-col items-center justify-center bg-polaroid-frame bg-cover bg-center bg-no-repeat xs:h-[16.032rem] xs:w-[10.8rem]">
          <div className="h-[25.52vw] w-[19.28vw] xs:h-[12.25rem] xs:w-[9.256rem]"></div>
          <div className="w-full px-[1.85vw] py-[1.76vw] align-top font-nanum-Jung text-[3.75vw] font-normal text-[#252525] xs:px-[0.888rem] xs:py-[0.845rem] xs:text-[1.8rem]">
            @최현석
          </div>
        </div>
        <div className="flex h-[33.9vw] w-[23vw] flex-col items-center justify-center bg-polaroid-frame bg-cover bg-center bg-no-repeat xs:h-[16.032rem] xs:w-[10.8rem]">
          <div className="h-[25.52vw] w-[19.28vw] xs:h-[12.25rem] xs:w-[9.256rem]"></div>
          <div className="w-full px-[1.85vw] py-[1.76vw] align-top font-nanum-Jung text-[3.75vw] font-normal text-[#252525] xs:px-[0.888rem] xs:py-[0.845rem] xs:text-[1.8rem]">
            @안성재
          </div>
        </div>
        <div className="flex h-[33.9vw] w-[23vw] -rotate-[2.79deg] flex-col items-center justify-center bg-polaroid-frame bg-cover bg-center bg-no-repeat xs:h-[16.032rem] xs:w-[10.8rem]">
          <div className="h-[25.52vw] w-[19.28vw] xs:h-[12.25rem] xs:w-[9.256rem]"></div>
          <div className="w-full px-[1.85vw] py-[1.76vw] align-top font-nanum-Jung text-[3.75vw] font-normal text-[#252525] xs:px-[0.888rem] xs:py-[0.845rem] xs:text-[1.8rem]">
            @백종원
          </div>
        </div>
        <div className="flex h-[33.9vw] w-[23vw] rotate-[0.95deg] flex-col items-center justify-center bg-polaroid-frame bg-cover bg-center bg-no-repeat xs:h-[16.032rem] xs:w-[10.8rem]">
          <div className="h-[25.52vw] w-[19.28vw] xs:h-[12.25rem] xs:w-[9.256rem]"></div>
          <div className="w-full px-[1.85vw] py-[1.76vw] align-top font-nanum-Jung text-[3.75vw] font-normal text-[#252525] xs:px-[0.888rem] xs:py-[0.845rem] xs:text-[1.8rem]">
            @최강록
          </div>
        </div>
        <div className="flex h-[33.4vw] w-[22.5vw] -rotate-[3.26deg] flex-col items-center justify-center bg-polaroid-frame bg-cover bg-center bg-no-repeat xs:h-[16.032rem] xs:w-[10.8rem]">
          <div className="h-[25.52vw] w-[19.28vw] xs:h-[12.25rem] xs:w-[9.256rem]"></div>
          <div className="w-full px-[1.85vw] py-[1.76vw] align-top font-nanum-Jung text-[3.75vw] font-normal text-[#252525] xs:px-[0.888rem] xs:py-[0.845rem] xs:text-[1.8rem]">
            @요리하는돌아이
          </div>
        </div>
        <Image
          src="/image/모모리 일러스트.png"
          alt="모모리 일러스트"
          width={337}
          height={467}
          className="absolute left-[6.46vw] top-[-4.17vw] w-[89.87vw] xs:left-[3.1rem] xs:top-[-2rem] xs:w-[43.138rem]"
        ></Image>
      </div>
      <PageDots />
      <ButtonContainer>
        <ButtonWithCaption caption={"*하나만 남길 수 있어요"}>사진 남기기</ButtonWithCaption>
        <Button>내 모모리 만들기</Button>
        {/* 사진 남기고 나면 내 모모리 만들기만 남도록
        만약 로그인 한 상태라면 내 모모리로 이동하기로 변경
        */}
      </ButtonContainer>
      <Image
        src="/image/arrow-left.svg"
        alt="왼쪽 화살표"
        width={13}
        height={19}
        className="absolute left-[2.67vw] w-[3.47vw] cursor-pointer xs:left-[1.282rem] xs:w-[1.3rem]"
      ></Image>
      <Image
        src="/image/arrow-right.svg"
        alt="오른쪽 화살표"
        width={13}
        height={19}
        className="absolute right-[2.67vw] w-[3.47vw] cursor-pointer xs:right-[1.282rem] xs:w-[1.3rem]"
      ></Image>
    </>
  );
}
