import Header from "@/components/layout/Header";
import NicknameInput from "@/components/common/Input/NicknameInput";
import TopContainer from "@/components/layout/TopContainer";
import CreateMemoryMessage from "./CreateMemoryMessage";

export default function CreateMemoryCredential() {
  return (
    <TopContainer>
      <Header type={"arrow"} />
      <div className="flex flex-col gap-y-[1.3rem] translate-y-[23px]">
      <NicknameInput />
      <CreateMemoryMessage />
      </div>
    </TopContainer>
  );
}
