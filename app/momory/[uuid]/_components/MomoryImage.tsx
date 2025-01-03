"use client";
import { ILLUSTRATIONS, ROTATION_ANGLES } from "@/constants/page";
import { useMomoryViewStore } from "@/store/useMomoryViewStore";
import { Memory } from "@/types/model";
import Image from "next/image";

interface MomoryImageProps {
  memoryData: Memory[] | null;
  userId: number;
  uuid: string;
  memoryPublicUrlArray: string[];
  momory_uuid: string | undefined;
}

export default function MomoryImage({
  memoryData,
  userId,
  uuid,
  memoryPublicUrlArray,
  momory_uuid,
}: MomoryImageProps) {
  const openModal = useMomoryViewStore((state) => state.openModal);

  return (
    <div className="flex flex-wrap content-center items-center justify-center gap-x-[5.6vw] gap-y-[4.75vw] xs:gap-x-[2.42rem] xs:gap-y-[2.05rem]">
      {ROTATION_ANGLES.map((angle, idx) => {
        const currentMemory = memoryData && idx < memoryData.length ? memoryData[idx] : undefined;
        const imageUrl = idx < (memoryPublicUrlArray?.length || 0) ? memoryPublicUrlArray[idx] : undefined
        return (
          <div
            key={idx}
            className={`relative flex h-[33.46vw] w-[22.5vw] ${angle} cursor-pointer flex-col items-center justify-center bg-polaroid-frame bg-cover bg-center bg-no-repeat xs:h-[14.46rem] xs:w-[9.72rem]`}
            onClick={() => {
              if (!currentMemory) {
                return;
              }
              openModal({
                filter: currentMemory.filter,
                memoryId: currentMemory.id,
                nickname: currentMemory.nickname,
                imagePath: imageUrl,
                message: currentMemory.message,
                memory_user_id: currentMemory.user_id,
                logined_user_id: userId,
                memory_momory_uuid: currentMemory.momory_uuid,
                momory_uuid: uuid,
                user_momory_uuid: momory_uuid,
              });
            }}
          >
            {imageUrl ? (
              <Image
                width={81}
                height={107.1}
                alt={"메모리"}
                src={imageUrl}
                unoptimized={true}
                className={`${currentMemory?.filter ? currentMemory.filter : "none"} h-[25.52vw] w-[18.75vw] bg-neutral-300 object-cover xs:h-[10.71rem] xs:w-[8.1rem]`}
              ></Image>
            ) : (
              <div
                className={`${currentMemory?.filter ? currentMemory.filter : "none"} h-[25.52vw] w-[18.75vw] xs:h-[10.71rem] xs:w-[8.1rem]`}
              ></div>
            )}

            <div className="h-[5.83vw] w-full pl-[2.08vw] align-top font-nanum-Jung text-[3.75vw] font-medium tracking-wide text-[#252525] xs:h-[2.52rem] xs:pl-[0.9rem] xs:text-[1.62rem]">
              {currentMemory?.nickname
                ? `@${currentMemory?.nickname}`
                : "@닉네임"}
            </div>
            {ILLUSTRATIONS[idx].map((illust, i) => {
              return (
                <Image
                  width={illust.width}
                  height={illust.height}
                  key={i}
                  src={illust.path}
                  className={`absolute ${illust.position}`}
                  alt="배경일러스트"
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
