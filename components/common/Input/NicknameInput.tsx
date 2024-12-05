"use client";
interface NicknameInputProps {
  momoryNickname: string;
  setMomoryNickname: (momoryNickname: string) => void;
}
export default function NicknameInput({momoryNickname, setMomoryNickname}: NicknameInputProps) {
  const handleNickname = (value: string) => {
    if(value.length > 5) return;
    setMomoryNickname(value.slice(0, 5));
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