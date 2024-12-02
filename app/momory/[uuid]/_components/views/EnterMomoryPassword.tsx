import InputLabel from "@/components/common/Input/InputLabel";
import EnterMomoryPasswordInput from "../EnterMomoryPasswordInput";
import EnterMomoryPasswordHeader from "../EnterMomoryPasswordHeader";
import PageLayout from "@/components/layout/PageLayout";

export default function EnterMomoryPassword() {
  return (
    <PageLayout verticalSpacing="gap-y-[5.6vw] xs:gap-y-[2.688rem]">
      <EnterMomoryPasswordHeader/>
      <InputLabel>모모리 비밀번호를 입력해주세요</InputLabel>
      <EnterMomoryPasswordInput/>
    </PageLayout>
  );
}
