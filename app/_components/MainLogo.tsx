import Image from "next/image"

export default function MainLogo() {
  return (
    <>
      <Image
            alt="메인로고"
            src="/image/메인로고.png"
            width={200}
            height={53.13}
            className="absolute left-1/2 top-0 h-auto w-[53.3vw] -translate-x-1/2 xs:w-[25.584rem]"
          />
          <h1 className="xs:tracking=[0.024rem] -rotate-[0.98] text-center align-text-top font-nanum-Hana text-[16.2vw] font-normal leading-[17.8vw] tracking-[0.05vw] text-sky xs:text-[7.776rem] xs:leading-[8.544rem]">
            Momory
          </h1>
    </>
  )
}
