"use client";
import { useMomoryViewStore } from '@/store/useMomoryViewStore';
import Image from 'next/image'

export default function ImageDetail() {
  const modalData = useMomoryViewStore((state) => state.modalData);
  return (
    <div className='flex flex-col p-[1.35rem] items-center justify-center shadow-frame bg-white w-[61.7vw] h-[97.92vw] xs:w-[29.614rem] xs:h-[47rem]'>
      <div className={`flex justify-center items-center ${modalData.filter}`}>
        <Image src="/image/임시사진.png" alt='디테일 이미지' width={265.9} height={352.45}/>
      </div>
      <div className='w-full align-top font-normal text-[#2525257e] font-nanum-Jung text-4.17vw] xs:text-[2rem] tracking-wide'><span>@{modalData.nickname}</span></div>
      <div className='w-full align-top leading-[4.38vw] xs:leading-[2.1rem] font-nanum-Jung text-[4.58vw] xs:text-[2.2rem] tracking-wide'><span>{modalData.message}</span></div>
    </div>
  )
}
