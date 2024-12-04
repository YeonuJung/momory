export default function HeroSection({children}: {children: React.ReactNode}) {
  return (
    <div className="relative flex flex-col items-center justify-center gap-y-[2.3vw] xs:gap-y-[0.99rem]">
      {children}
    </div>
  )
}