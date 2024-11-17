import Header from "@/components/layout/Header";
import React from "react";

export default function UploadMemory() {
  return (
    <>
      <Header type="arrow" />
      <div className="flex flex-col items-center justify-center gap-y-[10.83vw] xs:gap-y-[5.2rem] mt-[20.83vw] xs:mt-[10rem]">
        <div className="relative flex h-[63.7vh] w-[76.3vw] justify-center bg-white shadow-frame xs:h-[54.2rem] xs:w-[36.622rem]">
          <div className="absolute top-[3.71vw] flex h-[51.33vh] w-[68.45vw] items-center justify-center border-[2.5px] border-sky xs:top-[1.779rem] xs:h-[43.632rem] xs:w-[32.855rem] cursor-pointer">
            <span className="absoulte font-nanum-Jung text-[7.5vw] text-sky xs:text-[3.6rem]">
              +
            </span>
          </div>
        </div>
        <span className="align-top font-nanum-Jung text-[8.96vw] font-normal text-white xs:text-[4.6rem]">
          사진을 등록해주세요
        </span>
      </div>
    </>
  );
}
