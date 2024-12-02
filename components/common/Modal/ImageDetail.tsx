"use client";
import { useMomoryViewStore } from "@/store/useMomoryViewStore";
import Image from "next/image";

export default function ImageDetail() {
  const modalData = useMomoryViewStore((state) => state.modalData);
  return (
    <div className="flex h-[97.92vw] w-[61.7vw] flex-col items-center justify-center bg-white p-[1.35rem] shadow-frame xs:h-[47rem] xs:w-[29.614rem]">
      <div className={`flex items-center justify-center ${modalData.filter}`}>
        <Image
          src={modalData.imagePath as string}
          alt="디테일 이미지"
          width={265.9}
          height={352.45}
          className="h-[73.42vw] w-[55.4vw] xs:h-[35.24rem] xs:w-[26.59rem] object-cover "
        />
      </div>
      <Image
        src="/image/메모리로고2.png"
        alt="메모리 로고"
        width={64}
        height={38}
        className="absolute top-[12.19vw] xs:top-[5.85rem]"
      />
      <div className="text-4.17vw] w-full align-top font-nanum-Jung font-normal tracking-wide text-[#2525257e] xs:text-[2rem]">
        <span>@{modalData.nickname}</span>
      </div>
      <div className="w-full align-top font-nanum-Jung text-[4.58vw] leading-[4.38vw] tracking-wide xs:text-[2.2rem] xs:leading-[2.1rem]">
        <span>{modalData.message}</span>
      </div>
    </div>
  );
}
