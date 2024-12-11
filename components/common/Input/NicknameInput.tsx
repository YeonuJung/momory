"use client";

import toast from "react-hot-toast";

interface NicknameInputProps {
  momoryNickname: string;
  setMomoryNickname: (momoryNickname: string) => void;
}
export default function NicknameInput({
  momoryNickname,
  setMomoryNickname,
}: NicknameInputProps) {
  let toastId: string | undefined;

  const handleNickname = (value: string) => {
    // 입력된 값이 정규식을 통과하는지 체크
    const hasOnlyValidChars = /^[a-zA-Z0-9\s가-힣ㄱ-ㅎㅏ-ㅣㆍᆞᆢ]*$/.test(value);
    if (!hasOnlyValidChars) {
      if (toastId) {
        toast.dismiss(toastId);
      }
      toastId = toast.error("닉네임에는 한글, 영문, 숫자만 입력 가능합니다", {
        style: {
          height: "65px",
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "gray",
          textAlign: "center",
        },
        duration: 2000,
      });
      return;
    }
    const actualLength = Array.from(value).length;
    if (actualLength > 5) return;
    setMomoryNickname(value);
  };
  return (
    <div className="relative flex items-center justify-center">
      <input
        type="text"
        value={momoryNickname}
        onChange={(e) => handleNickname(e.target.value)}
        className="h-[15.83vw] w-[71.67vw] rounded-[11px] text-center font-pretendard text-[6.5vw] outline outline-2 outline-sky focus:outline-[3px] xs:h-[6.84rem] xs:w-[30.96rem] xs:text-[2.81rem]"
      ></input>
      {momoryNickname.length === 0 ? (
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[3.47vw] font-bold text-zinc-500 xs:text-[1.5rem]">
          {"닉네임을 입력해주세요 (5자 이내ℹ️)"}
        </div>
      ) : null}
    </div>
  );
}
