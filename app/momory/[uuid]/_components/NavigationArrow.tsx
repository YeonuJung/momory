"use client";

interface NavigationArrowProps {
    src: string;
    alt: string;
    direction: "left" | "right";
}
export default function NavigationArrow({src, alt, direction}: NavigationArrowProps) {
  const classNameByDirection = direction === "left" ? "left-[2.67vw] xs:left-[1.282rem]" : "right-[2.67vw] xs:right-[1.282rem]";
  return (
    <>
      <img
        src={`${src}`}
        alt={`${alt}`}
        width="13"
        height="19"
        className={`absolute ${classNameByDirection} w-[3.47vw] cursor-pointer  xs:w-[1.3rem]`}
      ></img>
    </>
  )
}
