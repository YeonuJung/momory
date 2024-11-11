import TopContainer from "@/components/layout/TopContainer";
import MomoryInvite from "./_components/MomoryInvite";
// import EnterMomoryPassword from "./_components/EnterMomoryPassword";

export default function MomoryInvited_page() {
  return (
    <TopContainer verticalSpacing="gap-y-[5.6vw] xs:gap-y-[2.688rem]">
      {/* <EnterMomoryPassword/> */}
      <MomoryInvite />
    </TopContainer>
  );
}
