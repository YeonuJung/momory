"use client";

import { useRef} from "react";
interface FourDigitPasswordProps {
  momoryPassword: string[];
  setMomoryPassword: (newPassword: string[]) => void;
}
export default function FourDigitPassword({momoryPassword, setMomoryPassword}: FourDigitPasswordProps) {
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];
  const handleChange = (index: number, value: string) => {
    // 숫자만 입력 가능하도록
    if (!/^\d*$/.test(value)) return;

    const newPassword = [...momoryPassword];
    newPassword[index] = value;
    setMomoryPassword(newPassword);

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
    // 해당 칸에 값이 없어야 하고 첫 번째 칸이 아니도록
    if (e.key === "Backspace" && !momoryPassword[index] && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };

  return (
    <div className="flex items-center justify-center gap-x-[3vw] xs:gap-x-[1.28rem]">
      {momoryPassword.map((digit, index) => {
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
            className="h-[15.83vw] w-[15.83vw] rounded-[11px] text-center font-pretendard text-[6.5vw] outline outline-2 outline-sky focus:outline-[3px] xs:h-[6.84rem] xs:w-[6.84rem] xs:text-[2.81rem]"
          />
        );
      })}
    </div>
  );
}