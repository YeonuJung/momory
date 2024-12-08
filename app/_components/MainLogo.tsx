import Image from "next/image"
import mainLogo from "@/public/image/메인로고.png"
export default function MainLogo() {
  return (
    <>
      <Image
            alt="메인로고"
            src={mainLogo}
            width={239.79}
            height={63.7}
            className="z-20 absolute left-1/2 top-0 h-auto w-[53.3vw] -translate-x-1/2 xs:w-[23.03rem]"
          />
          <h1 className="xs:tracking=[0.022rem] -rotate-[0.98] text-center align-text-top font-nanum-Hana text-[16.2vw] font-normal leading-[17.8vw] tracking-[0.05vw] text-sky xs:text-[7rem] xs:leading-[7.69rem] z-20">
            Momory
          </h1>
    </>
  )
}