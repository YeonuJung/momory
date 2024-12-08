import Image from "next/image"
import polaroid1 from "@/public/image/1.png"
import polaroid2 from "@/public/image/2.png"
import polaroid3 from "@/public/image/3.png"
import polaroid4 from "@/public/image/4.png"
import polaroid5 from "@/public/image/5.png"
import polaroid6 from "@/public/image/6.png"
import polaroid7 from "@/public/image/7.png"
import polaroid8 from "@/public/image/8.png"
import polaroid9 from "@/public/image/9.png"
import polaroid10 from "@/public/image/10.png"
import polaroid11 from "@/public/image/11.png"
import polaroid12 from "@/public/image/12.png"

export default function PolaroidDecoration() {
 return (
   <>
     <Image
       src={polaroid1}
       alt="배경 주변 폴라로이드"
       width={123}
       height={244.74}
       className="absolute left-0 top-[15.53px] z-10 h-auto w-[28.53vw] xs:w-[12.3rem]"
     />
     <Image
       src={polaroid2}
       alt="배경 주변 폴라로이드"
       width={151.9}
       height={152.82}
       className="absolute left-[45px] top-0 h-auto w-[35.16vw] xs:w-[15.19rem]"
     />
     <Image
       src={polaroid3}
       alt="배경 주변 폴라로이드"
       width={178}
       height={191.43}
       className="absolute right-[79.9px] top-0 z-10 h-auto w-[41.2vw] xs:w-[17.8rem]"
     />
     <Image
       src={polaroid4}
       alt="배경 주변 폴라로이드"
       width={130}
       height={201.75}
       className="absolute right-0 top-0 z-[5] h-auto w-[30.09vw] xs:w-[13rem]"
     />
     <Image
       src={polaroid5}
       alt="배경 주변 폴라로이드"
       width={77}
       height={213.56}
       className="absolute left-0 top-[230.62px] z-[5] h-auto w-[17.82vw] xs:w-[7.7rem]"
     />
     <Image
       src={polaroid6}
       alt="배경 주변 폴라로이드"
       width={78}
       height={227.15}
       className="absolute right-0 top-[170px] h-auto w-[18.06w] xs:w-[7.8rem]"
     />
     <Image
       src={polaroid7}
       alt="배경 주변 폴라로이드"
       width={72}
       height={207.59}
       className="absolute bottom-[156px] left-0 h-auto w-[16.67vw] xs:w-[7.2rem] short:hidden"
     />
     <Image
       src={polaroid8}
       alt="배경 주변 폴라로이드"
       width={62}
       height={206.24}
       className="absolute bottom-[233px] right-0 z-[5] h-auto w-[14.35vw] xs:w-[6.2rem] short:hidden"
     />
     <Image
       src={polaroid9}
       alt="배경 주변 폴라로이드"
       width={155.3}
       height={184.39}
       className="absolute bottom-0 left-0 h-auto w-[40.58vw] xs:w-[17.53rem]"
     />
     <Image
       src={polaroid10}
       alt="배경 주변 폴라로이드"
       width={172.6}
       height={195.39}
       className="absolute bottom-0 left-[120px] z-[5] h-auto w-[39.95vw] xs:w-[17.26rem]"
     />
     <Image
       src={polaroid11}
       alt="배경 주변 폴라로이드"
       width={159.6}
       height={134.03}
       className="absolute bottom-0 right-0 h-auto w-[36.94vw] xs:w-[15.96rem]"
     />
     <Image
       src={polaroid12}
       alt="배경 주변 폴라로이드"
       width={100.1}
       height={204.83}
       className="absolute bottom-[47px] right-0 h-auto w-[23.17vw] xs:w-[10.01rem]"
     />
   </>
 )
}