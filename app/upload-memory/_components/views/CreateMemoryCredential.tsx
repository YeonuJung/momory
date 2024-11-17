import Header from "@/components/layout/Header";
import NicknameInput from "@/components/common/Input/NicknameInput";
import PageLayout from "@/components/layout/PageLayout";
import CreateMemoryMessage from "../CreateMemoryMessage";

export default function CreateMemoryCredential() {
  return (
    <PageLayout>
      <Header type="arrow" />
      <div className="flex flex-col gap-y-[1.3rem] translate-y-[23px]">
      <NicknameInput />
      <CreateMemoryMessage />
      </div>
    </PageLayout>
  );
}
