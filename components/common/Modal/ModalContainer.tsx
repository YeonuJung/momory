import Image from "next/image"

interface ModalContainerProps {
  children: React.ReactNode;
  verticalSpacing?: string;
}

export default function ModalContainer({children, verticalSpacing}: ModalContainerProps) {
  return (
    <div className="absolute inset-0 bg-dialog bg-opacity-[77%] flex justify-center items-center">
        <div className= {`flex flex-col items-center justify-center translate-y-[2.8rem] relative bg-ruby rounded-[11px] border-sky border-2 w-[82.08vw] h-[127.92vw] xs:w-[39.4rem] xs:h-[61.4rem] ${verticalSpacing}`}>
            <Image src="/image/X.svg" alt="닫기 버튼" width={21} height={21} unoptimized className="absolute right-[2.34vw] -top-[8.33vw] xs:right-[1.121rem] xs:-top-[4rem] cursor-pointer" />
            {children}
        </div>
    </div>
  )
}