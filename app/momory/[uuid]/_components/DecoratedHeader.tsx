
export default function DecoratedHeader({children}: {children: React.ReactNode}) {
  return (
    <div className="flex h-[19vw] w-[83.3vw] items-center justify-center gap-[0.83vw] bg-title-illustration bg-cover bg-center bg-no-repeat font-nanum-Jung font-normal text-sky xs:h-[9.12rem] xs:w-[39.984rem] xs:gap-[0.398rem]">
      {children}
    </div>
  )
}
