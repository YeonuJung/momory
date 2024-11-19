import PageLayout from "@/components/layout/PageLayout";

import CreateMomoryContainer from "./_components/CreateMomoryContainer";
import CreateMomoryNickname from "./_components/views/CreateMomoryNickname";
import CreateMomoryPassword from "./_components/views/CreateMomoryPassword";
export default function CreateMomory_page() {
  return (
    <PageLayout>
      <CreateMomoryContainer createMomoryNickname={<CreateMomoryNickname/>} createMomoryPassword={<CreateMomoryPassword/>}/>
    </PageLayout>
  );
}
