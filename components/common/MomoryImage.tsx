import Image from "next/image";

interface MomoryImageProps {
  nickname?: string[];
  // 필수로 전환할 것
}
export default function MomoryImage({nickname}: MomoryImageProps) {
  return (
    <div className="relative flex flex-wrap content-center items-center justify-center gap-x-[5.6vw] gap-y-[4.75vw] xs:gap-x-[2.688rem] xs:gap-y-[2.28rem]">
      <div className="flex h-[33.9vw] w-[23vw] -rotate-[1.75deg] flex-col items-center justify-center bg-polaroid-frame bg-cover bg-center bg-no-repeat xs:h-[16.032rem] xs:w-[10.8rem]">
        <div className="h-[25.52vw] w-[19.28vw] xs:h-[12.25rem] xs:w-[9.256rem]"></div>
        <div className="w-full px-[1.85vw] py-[1.76vw] align-top font-nanum-Jung text-[3.75vw] font-normal text-[#252525] xs:px-[0.888rem] xs:py-[0.845rem] xs:text-[1.8rem]">
          @트리플스타
          {nickname}
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
      <div className="flex h-[33.9vw] w-[23vw] -rotate-[3.26deg] flex-col items-center justify-center bg-polaroid-frame bg-cover bg-center bg-no-repeat xs:h-[16.032rem] xs:w-[10.8rem]">
        <div className="h-[25.52vw] w-[19.28vw] xs:h-[12.25rem] xs:w-[9.256rem]"></div>
        <div className="w-full px-[1.85vw] py-[1.76vw] align-top font-nanum-Jung text-[3.75vw] font-normal text-[#252525] xs:px-[0.888rem] xs:py-[0.845rem] xs:text-[1.8rem]">
          @요리하는돌아이
        </div>
      </div>
      <Image
        src={"/image/모모리 일러스트.png"}
        alt="모모리 일러스트"
        width={337}
        height={467}
        className="absolute left-[6.46vw] top-[-4.17vw] w-[89.87vw] xs:left-[3.1rem] xs:top-[-2rem] xs:w-[43.138rem]"
      ></Image>
    </div>
  );
}

