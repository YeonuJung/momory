import React from 'react'

export default function SocialSection({children}: {children: React.ReactNode}) {
  return (
    <div className="flex flex-col items-center gap-y-[3.9vw] xs:gap-y-[1.68rem]">
      {children}
    </div>
  )
}