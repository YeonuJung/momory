"use client";

import { useMomoryViewStore } from "@/store/useMomoryViewStore";
import Image from "next/image";

const ImageDetail = () => {
  const modalData = useMomoryViewStore((state) => state.modalData);
  
  return (
    <div className="flex h-[97.92vw] w-[61.7vw] flex-col items-center justify-center bg-white p-[1.214rem] shadow-frame xs:h-[42.3rem] xs:w-[26.65rem]">
      <div className={`flex items-center justify-center ${modalData.filter}`}>
        <Image
          src={modalData.imagePath as string}
          alt="디테일 이미지"
          width={239.3}
          height={317.2}
          unoptimized={true}
          className="h-[73.42vw] w-[55.4vw] xs:h-[31.72rem] xs:w-[23.93rem] object-cover"
        />
      </div>
      <Image
        src="/image/메모리로고2.png"
        alt="메모리 로고"
        width={69}
        height={38.6}
        className="absolute top-[12.19vw] xs:top-[5.27rem] w-[15.97vw] h-[8.94vw] xs:w-[6.9rem] xs:h-[3.86rem]"
      />
      <div className="text-[4.17vw] w-full align-top font-nanum-Jung font-normal tracking-wide text-[#2525257e] xs:text-[1.8rem]">
        <span>@{modalData.nickname}</span>
      </div>
      <div className="w-full align-top font-nanum-Jung text-[4.58vw] leading-[4.38vw] tracking-wide xs:text-[1.98rem] xs:leading-[1.89rem]">
        <span>{modalData.message}</span>
      </div>
    </div>
  );
};

export default ImageDetail;