import FourDigitPassword from "@/components/common/Input/FourDigitPassword";
import Header from "@/components/layout/Header";
import InputLabel from "@/components/common/Input/InputLabel";
import { useMomoryStore } from "@/store/useMomoryStore";

export default function CreateMomoryPassword() {
  const momoryPassword = useMomoryStore((state) => state.momoryPassword);
  const setMomoryPassword = useMomoryStore((state) => state.setMomoryPassword)
  return (
    <>
      <Header type={"finish"} />
      <div className="flex flex-col gap-y-[5.2vw] xs:gap-y-[2.496rem]">
        <InputLabel>내 모모리 비밀번호를 정해주세요</InputLabel>
        <FourDigitPassword momoryPassword={momoryPassword} setMomoryPassword={setMomoryPassword}/>
        <div className="flex flex-col items-center justify-center">
          <h2 className="w-[72.08vw] font-pretendard text-[3.7vw] font-normal tracking-tight text-white xs:w-[36.2rem] xs:text-[1.8rem]">
            <span className="font-semibold">
              내 모모리 비밀번호를 아는 친구만 입장
            </span>
            할 수 있어요!
          </h2>
          <h2 className="flex w-[72.08vw] justify-center font-pretendard text-[3.7vw] font-normal tracking-tight text-white xs:w-[36.2rem] xs:text-[1.8rem]">
            비밀번호를 꼭 기억해주세요
          </h2>
        </div>
      </div>
    </>
  );
}
