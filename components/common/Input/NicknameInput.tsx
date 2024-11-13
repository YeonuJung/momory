"use client";

import {useState } from "react";

export default function NicknameInput() {
  const [nickname, setNickname] = useState<string>("");
  
  const handleNickname = (value: string) => {
    if(value.length > 4) return;
    setNickname(value.slice(0, 4));
  };
  console.log(nickname)
  return (
    <div className="flex items-center justify-center">
      <input
        type="text"
        value={nickname}
        onChange={(e) => handleNickname(e.target.value)}
        placeholder="닉네임을 입력해주세요 (4자 이내)"
        className="placeholder:underline placeholder:decoration-[1px] placeholder:underline-offset-2 h-[15.83vw] w-[71.67vw] rounded-[11px] text-center font-pretendard text-[6.5vw] outline outline-2 outline-sky placeholder:-translate-y-[1vw] placeholder:font-pretendard placeholder:text-[3.13vw] focus:outline-[3px] xs:h-[7.6rem] xs:w-[34.4rem] xs:text-[3.12rem] xs:placeholder:-translate-y-[0.5rem] xs:placeholder:text-[1.5rem]"
      ></input>
    </div>
  );
}
