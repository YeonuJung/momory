import Header from '@/components/common/Header'
import React from 'react'

export default function SelectFilter() {
  return (
    <>
    <Header type={"arrow"} />
    <div className="flex flex-col items-center justify-center gap-y-[5.63vw] xs:gap-y-[2.7rem] mt-[20.83vw] xs:mt-[10rem]">
      <div className="relative flex h-[63.7vh] w-[76.3vw] justify-center bg-white shadow-frame xs:h-[54.2rem] xs:w-[36.622rem]">
        <div className="absolute top-[3.71vw] flex h-[51.33vh] w-[68.45vw] items-center justify-center border-[2.5px] border-sky xs:top-[1.779rem] xs:h-[43.632rem] xs:w-[32.855rem]">
        </div>
      </div>
      <div className="flex gap-x-[1.04vw] xs:gap-x-[0.5rem] font-nanum-Jung text-[6.67vw] leading-[1.9rem] font-normal text-white xs:text-[3.2rem]">
        <div className='flex flex-col justify-center items-center gap-y-2.5vw] xs:gap-y-[1.2rem] '>
            <div className='w-[16.88vw] xs:w-[8.1rem] h-[16.88vw] xs:h-[8.1rem] rounded-[11px] border-sky border-[2px]'></div>
            <span>원본</span>
        </div>
        <div className='flex flex-col justify-center items-center gap-y-2.5vw] xs:gap-y-[1.2rem] '>
            <div className='w-[16.88vw] xs:w-[8.1rem] h-[16.88vw] xs:h-[8.1rem] rounded-[11px] border-sky border-[2px]'></div>
            <span>필터 1</span>
        </div>
        <div className='flex flex-col justify-center items-center gap-y-2.5vw] xs:gap-y-[1.2rem] '>
            <div className='w-[16.88vw] xs:w-[8.1rem] h-[16.88vw] xs:h-[8.1rem] rounded-[11px] border-sky border-[2px]'></div>
            <span>필터 2</span>
        </div>
        <div className='flex flex-col justify-center items-center gap-y-2.5vw] xs:gap-y-[1.2rem] '>
            <div className='w-[16.88vw] xs:w-[8.1rem] h-[16.88vw] xs:h-[8.1rem] rounded-[11px] border-sky border-[2px]'></div>
            <span>필터 3</span>
        </div>
        <div className='flex flex-col justify-center items-center gap-y-2.5vw] xs:gap-y-[1.2rem] '>
            <div className='w-[16.88vw] xs:w-[8.1rem] h-[16.88vw] xs:h-[8.1rem] rounded-[11px] border-sky border-[2px]'></div>
            <span>필터 4</span>
        </div>
      </div>
    </div>
  </>
  )
}
