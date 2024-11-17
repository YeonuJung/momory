import React from "react";
import NicknameInput from "../../../../components/common/Input/NicknameInput";
import Header from "@/components/layout/Header";
import InputLabel from "@/components/common/Input/InputLabel";

export default function CreateMomoryNickname() {
  return (
    <>
      <Header type={"arrow"} />
      <div className="flex flex-col gap-y-[5.2vw] xs:gap-y-[2.496rem]">
        <InputLabel>내 닉네임을 정해주세요</InputLabel>
        <NicknameInput />
      </div>
    </>
  );
}
