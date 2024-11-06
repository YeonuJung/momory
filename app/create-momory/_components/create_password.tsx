import Image from "next/image";
import React from "react";
import Password_input from "../../../components/password_input";
import Header from "@/components/header";

export default function Create_password() {
  return (
    <div className="relative flex min-h-screen w-full max-w-[48rem] flex-col justify-center overflow-auto bg-ruby gap-y-[5.2vw] xs:gap-y-[2.496rem] watch:h-[25rem] landscape:min-h-[85rem]">
     <Header type={"finish"}/>
      <div className="flex items-center justify-center">
        <h1 className="align-top font-nanum-Jung text-[8.96vw] font-normal text-sky xs:text-[4.3rem]">
          내 모모리 비밀번호를 정해주세요
        </h1>
      </div>
      <Password_input />
      <div className="flex flex-col items-center justify-center">
        <h2 className="font-pretendard w-[72.08vw] xs:w-[36.2rem] text-[3.7vw]  font-normal tracking-tight text-white xs:text-[1.8rem] "><span className="font-semibold">내 모모리 비밀번호를 아는 친구만 입장</span>할 수 있어요!</h2>
        <h2 className="flex justify-center font-pretendard w-[72.08vw] xs:w-[36.2rem] text-[3.7vw] tracking-tight font-normal text-white xs:text-[1.8rem] ">비밀번호를 꼭 기억해주세요</h2>
      </div>
    </div>
  );
}
