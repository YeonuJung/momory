"use client";

import { useRef, useState } from "react";

export default function Password_input() {
  const [password, setPassword] = useState(["", "", "", ""]);
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];
  const handleChange = (index: number, value: string) => {
    // 숫자만 입력 가능하도록
    if (!/^\d*$/.test(value)) return;

    const newPassword = [...password];
    newPassword[index] = value;
    setPassword(newPassword);

    // 값이 입력되면 다음 input으로 focus
    if (value && index < 3) {
      inputRefs[index + 1].current?.focus();
    }
  };
  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    // Backspace 키를 눌렀을 때 이전 input으로 focus
    if (e.key === "Backspace" && !password[index] && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };

  return (
    <div className="flex items-center justify-center gap-x-[3vw] xs:gap-x-[1.423rem]">
      {password.map((digit, index) => {
        return (
          <input
            key={index}
            type="password"
            maxLength={1}
            inputMode="numeric"
            value={digit}
            ref={inputRefs[index]}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onChange={(e) => handleChange(index, e.target.value)}
            className="h-[15.83vw] w-[15.83vw] rounded-[11px] text-center font-pretendard text-[6.5vw] outline outline-2 outline-sky focus:outline-[3px] xs:h-[7.6rem] xs:w-[7.6rem] xs:text-[3.12rem]"
          />
        );
      })}
    </div>
  );
}
