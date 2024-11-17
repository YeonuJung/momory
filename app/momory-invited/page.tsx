import PageLayout from "@/components/layout/PageLayout";
// import MomoryInvite from "./_components/MomoryInvite";
import EnterMomoryPassword from "./_components/views/EnterMomoryPassword";

export default function MomoryInvited_page() {
  return (
    <PageLayout verticalSpacing="gap-y-[5.6vw] xs:gap-y-[2.688rem]">
      <EnterMomoryPassword/>
      {/* <MomoryInvite /> */}
    </PageLayout>
  );
}
