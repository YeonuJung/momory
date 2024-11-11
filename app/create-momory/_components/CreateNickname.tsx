import React from "react";
import NicknameInput from "../../../components/common/NicknameInput";
import Header from "@/components/common/Header";

export default function CreateNickname() {
  return (
    <>
      <Header type={"arrow"} />
      <div className="flex flex-col gap-y-[5.2vw] xs:gap-y-[2.496rem]">
        <div className="flex items-center justify-center">
          <h1 className="align-top font-nanum-Jung text-[8.96vw] font-normal text-sky xs:text-[4.3rem]">
            내 닉네임을 정해주세요
          </h1>
        </div>
        <NicknameInput />
      </div>
    </>
  );
}
