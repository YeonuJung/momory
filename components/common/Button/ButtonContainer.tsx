export default function ButtonContainer({children}: {children: React.ReactNode}) {   
  return (     
    <div className="flex w-full gap-x-[1.5vw] px-[2.7vw] font-nanum-Jung font-normal xs:gap-x-[0.65rem] xs:px-[1.17rem]">        
      {children}       
    </div>   
  ) 
}  
