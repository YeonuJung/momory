import Image from 'next/image'
import React from 'react'

export default function ImageDetail() {
  return (
    <div className='flex flex-col p-[1.35rem] items-center justify-center shadow-frame bg-white w-[61.7vw] h-[97.92vw] xs:w-[29.614rem] xs:h-[47rem]'>
      <div className='flex justify-center items-center'>
        <Image src="/image/임시사진.png" alt='디테일 이미지' width={265.9} height={352.45}/>
      </div>
      <div className='w-full align-top font-normal text-[#2525257e] font-nanum-Jung text-4.17vw] xs:text-[2rem]'><span>@급식대가</span></div>
      <div className='w-full align-top leading-[4.38vw] xs:leading-[2.1rem] font-nanum-Jung text-[4.58vw] xs:text-[2.2rem]'><span>이것은 50자 한글 문자열 테스트입니다. 모바일에서 텍스트가 잘리는지 확인하기 위한 테스트입니다.</span></div>
    </div>
  )
}
