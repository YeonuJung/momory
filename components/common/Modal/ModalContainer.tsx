interface ModalContainerProps {
  children: React.ReactNode;
  verticalSpacing?: string;
}

export default function ModalContainer({children, verticalSpacing}: ModalContainerProps) {
  return (
    <div className="absolute inset-0 bg-dialog bg-opacity-[77%] flex justify-center items-center">
        <div className= {`flex flex-col items-center justify-center translate-y-[2.8rem] relative bg-ruby rounded-[11px] border-sky border-2 w-[82.08vw] h-[127.92vw] xs:w-[39.4rem] xs:h-[61.4rem] ${verticalSpacing}`}>
            {children}
        </div>
    </div>
  )
}
