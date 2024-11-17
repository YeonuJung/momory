import React from 'react'

export default function MainLogoContainer({children}: {children: React.ReactNode}) {
  return (
    <div className="relative px-[3.2vw] pt-[5.3vw] xs:px-[1.536rem] xs:pt-[2.544rem]">
        {children}
    </div>
  )
}
