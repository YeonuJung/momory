import React from "react";

interface HeaderTitleProps {
  nickname: string;
}

export default function HeaderTitle({nickname}: HeaderTitleProps) {
  return (
    <>
      <span className="flex -translate-y-[1.6vw] items-center justify-center text-[13.54vw] leading-[15.63vw] xs:-translate-y-[0.69rem] xs:text-[5.85rem] xs:leading-[6.75rem]">
        {nickname}
      </span>
      <span className="flex items-center justify-center text-[8.53vw] leading-[9.8vw] xs:text-[3.68rem] xs:leading-[4.23rem]">
        님과의 기억들
      </span>
    </>
  );
}