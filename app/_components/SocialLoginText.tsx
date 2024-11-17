import React from "react";

export default function SocialLoginText({children}: {children: React.ReactNode}) {
  return (
    <div className="text-center align-text-top text-[3.1vw] font-semibold leading-[3.47vw] tracking-[-0.08vw] text-white underline underline-offset-2 xs:text-[1.488rem] xs:leading-[1.66rem] xs:tracking-[-0.038rem]">
      {children}
    </div>
  );
}
