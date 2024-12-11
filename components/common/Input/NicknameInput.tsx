"use client";

import toast from "react-hot-toast";


interface NicknameInputProps {
  momoryNickname: string;
  setMomoryNickname: (momoryNickname: string) => void;
}
export default function NicknameInput({momoryNickname, setMomoryNickname}: NicknameInputProps) {
  let toastId: string | undefined;

  const handleNickname = (value: string) => {
    // 입력된 값이 정규식을 통과하는지 체크
  const hasOnlyValidChars = /^[\w\sㄱ-ㅎㅏ-ㅣ가-힣]*$/.test(value);
  if (!hasOnlyValidChars) {
    if(toastId){
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
      duration: 2000
    });
    return;
  }
    const actualLength = Array.from(value).length
    if(actualLength > 5) return;
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
      {momoryNickname.length === 0 ? <div className="font-bold text-[3.47vw] xs:text-[1.5rem] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 whitespace-nowrap text-zinc-500 pointer-events-none">{"닉네임을 입력해주세요 (5자 이내ℹ️)"}</div> : null}
    </div>
  );
}