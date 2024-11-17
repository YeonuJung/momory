"use client";

import Header from "@/components/layout/Header";
import React, { MutableRefObject, useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

export default function SelectFilter() {
  const ref = useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>;
  const { events } = useDraggable(ref, {
    applyRubberBandEffect: true,
    decayRate: 0.8,
  });
  const filterList = [
    {filter: "원본", class: "none"},
    {filter: "1977", class: "_1977"},
    {filter: "Aden", class: "aden"},
    {filter: "Brannan", class: "brannan"},
    {filter: "Brooklyn", class: "brooklyn"},
    {filter: "Clarendon", class: "clarendon"},
    {filter: "Earlybird", class: "earlybird"},
    {filter: "Gingham", class: "gingham"},
    {filter: "Hudson", class: "hudson"},
    {filter: "Inkwell", class: "inkwell"},
    {filter: "Kelvin", class: "kelvin"},
    {filter: "Lark", class: "lark"},
    {filter: "Lofi", class: "lofi"},
    {filter: "Maven", class: "maven"},
    {filter: "Mayfair", class: "mayfair"},
    {filter: "Moon", class: "moon"},
    {filter: "Nashville", class: "nashville"},
    {filter: "Perpetua", class: "perpetua"},
    {filter: "Reyes", class: "reyes"},
    {filter: "Rise", class: "rise"},
    {filter: "Slumber", class: "slumber"},
    {filter: "Stinson", class: "stinson"},
    {filter: "Toaster", class: "toaster"},
    {filter: "Valencia", class: "valencia"},
    {filter: "Walden", class: "walden"},
    {filter: "Willow", class: "willow"},
    {filter: "X-pro ||", class: "xpro2"},

  ];
  return (
    <>
      <Header type="arrow" />
      <div className="mt-[20.83vw] flex flex-col items-center justify-center gap-y-[5.63vw] xs:mt-[10rem] xs:gap-y-[2.7rem]">
        <div className="relative flex h-[63.7vh] w-[76.3vw] justify-center bg-white shadow-frame xs:h-[54.2rem] xs:w-[36.622rem]">
          <div className="absolute top-[3.71vw] flex h-[51.33vh] w-[68.45vw] items-center justify-center border-[2.5px] border-sky xs:top-[1.779rem] xs:h-[43.632rem] xs:w-[32.855rem]"></div>
        </div>
        <div
          ref={ref}
          {...events}
          className="flex w-[90.63vw] gap-x-[1.04vw] overflow-x-scroll font-nanum-Jung text-[5.42vw] font-extralight text-white  xs:w-[43.5rem] xs:gap-x-[0.5rem] xs:text-[2.6rem] cursor-grab  select-none touch-pan-x scroll-hide"
         
        >
          {filterList.map((filter, idx) => {
            return (
              <div
                key={idx}
                className="flex flex-col items-center justify-center gap-y-[0.83vw] xs:gap-y-[0.4rem]"
              >
                <div className={`${filter.class} bg-polaroid-filter bg-cover bg-center h-[16.88vw] w-[16.88vw] rounded-[11px] border-[2px] border-sky xs:h-[8.1rem] xs:w-[8.1rem]`} id={filter.class}></div>
                <span>{filter.filter}</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}