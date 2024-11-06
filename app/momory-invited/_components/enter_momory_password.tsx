import Header from "@/components/header";
import Password_input from "@/components/password_input";
import Image from "next/image";

export default function Enter_momory_password() {
  return (
    <div className="relative flex min-h-screen w-full max-w-[48rem] flex-col justify-center gap-y-[5.2vw] overflow-auto bg-ruby xs:gap-y-[2.496rem] watch:h-[25rem] landscape:min-h-[85rem]">
      <Header type={"finish"} />
      <div className="flex items-center justify-center">
        <h1 className="align-top font-nanum-Jung text-[8.96vw] font-normal text-sky xs:text-[4.3rem]">
          내 모모리 비밀번호를 정해주세요
        </h1>
      </div>
      <Password_input />
    </div>
  );
}
