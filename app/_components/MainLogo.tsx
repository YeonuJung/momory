import Image from "next/image"
import mainLogo from "@/public/image/메인로고.png"
export default function MainLogo() {
  return (
    <>
    <Image
    alt="메인로고"
    src={mainLogo}
    width={230.4}
    height={107.82}
    className="z-10 w-[53.3vw] xs:w-[23.04rem] h-auto"
    />
    </>
  )
}