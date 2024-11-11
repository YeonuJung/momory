import React from "react";
import FourDigitPassword from "@/components/common/FourDigitPassword";
import Header from "@/components/common/Header";

export default function CreatePassword() {
  return (
    <>
      <Header type={"finish"} />
      <div className="flex flex-col gap-y-[5.2vw] xs:gap-y-[2.496rem]">
        <div className="flex items-center justify-center">
          <h1 className="align-top font-nanum-Jung text-[8.96vw] font-normal text-sky xs:text-[4.3rem]">
            내 모모리 비밀번호를 정해주세요
          </h1>
        </div>
        <FourDigitPassword />
        <div className="flex flex-col items-center justify-center">
          <h2 className="w-[72.08vw] font-pretendard text-[3.7vw] font-normal tracking-tight text-white xs:w-[36.2rem] xs:text-[1.8rem]">
            <span className="font-semibold">
              내 모모리 비밀번호를 아는 친구만 입장
            </span>
            할 수 있어요!
          </h2>
          <h2 className="flex w-[72.08vw] justify-center font-pretendard text-[3.7vw] font-normal tracking-tight text-white xs:w-[36.2rem] xs:text-[1.8rem]">
            비밀번호를 꼭 기억해주세요
          </h2>
        </div>
      </div>
    </>
  );
}
