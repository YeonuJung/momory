import React from 'react'

export default function SocialLoginButtonConatiner({children}: {children: React.ReactNode}) {
  return (
    <div className="flex gap-x-[3.5vw] xs:gap-x-[1.68rem]">
      {children}
    </div>
  )
}
