export default function ContentSection({children}: {children: React.ReactNode}) {
  return (
    <div className="flex flex-col gap-y-[5.6vw] xs:gap-y-[2.42rem]">
      {children}
    </div>
  )
}