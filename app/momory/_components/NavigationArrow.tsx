import Image from "next/image"

interface NavigationArrowProps {
    src: string;
    alt: string;
    direction: "left" | "right";
}
export default function NavigationArrow({src, alt, direction}: NavigationArrowProps) {
  return (
    <>
      <Image
        src={`${src}`}
        alt={`${alt}`}
        width={13}
        height={19}
        className={`absolute ${direction}-[2.67vw] w-[3.47vw] cursor-pointer xs:${direction}-[1.282rem] xs:w-[1.3rem]`}
      ></Image>
    </>
  )
}
