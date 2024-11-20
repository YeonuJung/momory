import InputLabel from "@/components/common/Input/InputLabel";
import MomoryNicknameInput from "../MomoryNicknameInput";
import MomoryHeader from "../MomoryHeader";

export default function CreateMomoryNickname() {
  return (
    <>
      <MomoryHeader />
      <div className="flex flex-col gap-y-[5.2vw] xs:gap-y-[2.496rem]">
        <InputLabel>내 닉네임을 정해주세요</InputLabel>
        <MomoryNicknameInput />
      </div>
    </>
  );
}
