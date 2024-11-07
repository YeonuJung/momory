"use client";
import { useState } from "react";

export default function Enter_memory_password() {
  const [password, setPassword] = useState("");

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(e.target.value)){
    }
    setPassword(e.target.value);
  }
  return (
    <div>
      <div className="flex items-center justify-center">
        <input
          type="password"
          value={password}
          onChange={(e) => handlePasswordChange(e)}
          placeholder="영문, 숫자 조합 (8자 이상)"
          className="placeholder:underline-1 h-[15.83vw] w-[71.67vw] rounded-[11px] text-center font-pretendard text-[6.5vw] outline outline-2 outline-sky placeholder:-translate-y-[1vw] placeholder:font-pretendard placeholder:text-[3.13vw] focus:outline-[3px] xs:h-[7.6rem] xs:w-[34.4rem] xs:text-[3.12rem] xs:placeholder:-translate-y-[0.5rem] xs:placeholder:text-[1.5rem]"
        ></input>
      </div>
    </div>
  );
}
