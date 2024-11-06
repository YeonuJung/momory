import React from "react";
import Nickname_input from "./nickname_input";
import Header from "@/components/header";

export default function Create_nickname() {
  return (
    <div className="relative flex min-h-screen w-full max-w-[48rem] flex-col justify-center overflow-auto bg-ruby landscape:min-h-[85rem] watch:h-[25rem]">
     <Header type={"arrow"}/>
      <div className="flex flex-col gap-y-[5.2vw] xs:gap-y-[2.496rem]">
        <div className="flex justify-center items-center"><h1 className="text-sky font-nanum-Jung font-normal text-[8.96vw] xs:text-[4.3rem] align-top">내 닉네임을 정해주세요</h1></div>
        <Nickname_input/>
      </div>
    </div>
  );
}