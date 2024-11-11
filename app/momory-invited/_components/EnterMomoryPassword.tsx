import Header from "@/components/common/Header";
import FourDigitPassword from "@/components/common/FourDigitPassword";

export default function EnterMomoryPassword() {
  return (
    <>
      <Header type={"finish"} />
      <div className="flex items-center justify-center">
        <h1 className="align-top font-nanum-Jung text-[8.96vw] font-normal text-sky xs:text-[4.3rem]">
          모모리 비밀번호를 입력해주세요
        </h1>
      </div>
      <FourDigitPassword />
    </>
  );
}
