export default function SocialLoginText({children}: {children: React.ReactNode}) {
  return (
    <div className="text-center align-text-top text-[3.1vw] font-semibold leading-[3.47vw] tracking-[-0.08vw] text-white underline underline-offset-2 xs:text-[1.34rem] xs:leading-[1.49rem] xs:tracking-[-0.034rem]">
      {children}
    </div>
  );
}