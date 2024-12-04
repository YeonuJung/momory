export default function DecoratedHeader({children}: {children: React.ReactNode}) {
  return (
    <div className="flex h-[19vw] w-[83.3vw] items-center justify-center gap-[0.83vw] bg-title-illustration bg-cover bg-center bg-no-repeat font-nanum-Jung font-normal text-sky xs:h-[8.21rem] xs:w-[35.99rem] xs:gap-[0.36rem]">
      {children}
    </div>
  )
}