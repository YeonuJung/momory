"use client";

import { FILTER_LIST } from "@/constants/page";
import { useMemoryStore } from "@/store/useMemoryStore";
import React, { MutableRefObject, useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

export default function SelectMemoryFilter() {
  const setMemoryFilter = useMemoryStore((state) => state.setMemoryFilter);
  const memoryFilter = useMemoryStore((state) => state.memoryFilter);
  const memoryPhotoPreviewUrl = useMemoryStore(
    (state) => state.memoryPhoto.previewUrl,
  );
  const ref = useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>;
  const { events } = useDraggable(ref, {
    applyRubberBandEffect: true,
    decayRate: 0.8,
  });

  return (
    <div className="mt-[20.83vw] flex flex-col items-center justify-center gap-y-[5.63vw] xs:mt-[9rem] xs:gap-y-[2.43rem]">
      <div className="relative flex h-[125.46vw] w-[76.3vw] justify-center bg-white shadow-frame xs:h-[48.78rem] xs:w-[32.96rem]">
        <div
          style={{backgroundImage: `url(${memoryPhotoPreviewUrl})`}}
          className={`absolute top-[3.71vw] flex h-[101vw] w-[68.45vw] items-center justify-center border-[2.5px] border-sky bg-center bg-cover bg-white xs:top-[1.6rem] xs:h-[39.27rem] xs:w-[29.57rem] ${memoryFilter}`}
        ></div>
      </div>
      <div
        ref={ref}
        {...events}
        className="scroll-hide flex w-[90.63vw] cursor-grab touch-pan-x select-none gap-x-[1.04vw] overflow-x-scroll font-nanum-Jung text-[5.42vw] font-extralight text-white xs:w-[39.15rem] xs:gap-x-[0.45rem] xs:text-[2.34rem]"
      >
        {FILTER_LIST.map((filter, idx) => {
          return (
            <div
              key={idx}
              className="flex flex-col items-center justify-center gap-y-[0.83vw] xs:gap-y-[0.36rem]"
            >
              <div
                style={{backgroundImage: `url(${memoryPhotoPreviewUrl})`}}
                className={`${filter.class} h-[16.88vw] w-[16.88vw] rounded-[11px] border-[2px] border-sky bg-cover xs:h-[7.29rem] xs:w-[7.29rem] bg-white overflow-hidden`}
                onClick={() => setMemoryFilter(filter.class)}
              ></div>
              <span>{filter.filter}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}