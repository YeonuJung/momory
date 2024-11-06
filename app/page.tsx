import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full max-w-[48rem] flex-col justify-center gap-y-[6.9vw] overflow-auto bg-ruby xs:gap-y-[3.312rem] landscape:min-h-[85rem] watch:h-[22.5rem]">
      <Image
        src={"/image/1.png"}
        alt="배경 주변 폴라로이드"
        width={283}
        height={563}
        className="absolute left-0 top-[1.725rem] z-10 h-auto w-[28.53vw] xs:w-[13.67rem] watch:hidden"
      ></Image>
      <Image
        src={"/image/2.png"}
        alt="배경 주변 폴라로이드"
        width={332}
        height={334}
        className="absolute left-[3.675rem] top-0 h-auto w-[32.9vw] xs:w-[15.769rem] watch:hidden"
      ></Image>
      <Image
        src={"/image/3.png"}
        alt="배경 주변 폴라로이드"
        width={302}
        height={324}
        className="absolute right-[8.1rem] top-0 z-10 h-auto w-[38.7vw] xs:w-[18.548rem] watch:hidden"
      ></Image>
      <Image
        src={"/image/4.png"}
        alt="배경 주변 폴라로이드"
        width={288}
        height={447}
        className="absolute right-0 top-0 z-[5] h-auto w-[29.07vw] xs:w-[13.932rem] watch:hidden"
      ></Image>
      <Image
        src={"/image/5.png"}
        alt="배경 주변 폴라로이드"
        width={115}
        height={319}
        className="absolute left-0 top-[22.18rem] z-[5] h-auto w-[15.67vw] xs:w-[7.51rem] watch:hidden"
      ></Image>
      <Image
        src={"/image/6.png"}
        alt="배경 주변 폴라로이드"
        width={126}
        height={367}
        className="absolute right-0 top-[14.175rem] h-auto w-[16vw] xs:w-[7.668rem] watch:hidden"
      ></Image>
      <Image
        src={"/image/7.png"}
        alt="배경 주변 폴라로이드"
        width={103}
        height={297}
        className="absolute bottom-[14.175rem] left-0 h-auto w-[13.4vw] xs:w-[6.422rem] watch:hidden"
      ></Image>
      <Image
        src={"/image/8.png"}
        alt="배경 주변 폴라로이드"
        width={94.66}
        height={139.62}
        className="absolute bottom-[20.3rem] right-0 z-[5] h-auto w-[12.27vw] xs:w-[5.881rem] watch:hidden"
      ></Image>
      <Image
        src={"/image/9.png"}
        alt="배경 주변 폴라로이드"
        width={113.6}
        height={167.55}
        className="absolute bottom-0 left-0 h-auto w-[36vw] xs:w-[17.254rem] watch:hidden"
      ></Image>
      <Image
        src={"/image/10.png"}
        alt="배경 주변 폴라로이드"
        width={130.91}
        height={193.09}
        className="absolute bottom-0 left-[10.9rem] z-[5] h-auto w-[37.7vw] xs:w-[18.069rem] watch:hidden"
      ></Image>
      <Image
        src={"/image/11.png"}
        alt="배경 주변 폴라로이드"
        width={113.52}
        height={167.44}
        className="absolute bottom-0 right-0 h-auto w-[37vw] xs:w-[17.734rem] watch:hidden"
      ></Image>
      <Image
        src={"/image/12.png"}
        alt="배경 주변 폴라로이드"
        width={113.52}
        height={167.44}
        className="absolute bottom-[4.4rem] right-0 h-auto w-[23.2vw] xs:w-[11.119rem] watch:hidden"
      ></Image>
      <div className="relative flex flex-col items-center justify-center gap-y-[2.3vw] xs:gap-y-[1.104rem]">
        <Image
          src={"/image/배경 일러스트.png"}
          width={339}
          height={521}
          alt={"배경 일러스트"}
          className="absolute z-20 h-auto w-[90.4vw] xs:w-[43.4rem]"
        ></Image>
        <div className="relative px-[3.2vw] pt-[5.3vw] xs:px-[1.536rem] xs:pt-[2.544rem]">
          <Image
            alt={"메인로고"}
            src={"/image/메인로고.png"}
            width={200}
            height={53.13}
            className="absolute left-1/2 top-0 h-auto w-[53.3vw] -translate-x-1/2 xs:w-[25.584rem]"
          />
          <h1 className="xs:tracking=[0.024rem] -rotate-[0.98] text-center align-text-top font-nanum-Hana text-[16.2vw] font-normal leading-[17.8vw] tracking-[0.05vw] text-sky xs:text-[7.776rem] xs:leading-[8.544rem]">
            Momory
          </h1>
        </div>
        <div className="w-[36.6vw] text-center align-text-top font-pretendard text-[4.1vw] font-semibold leading-[4.9vw] tracking-[-0.21vw] text-sky xs:w-[17.568rem] xs:text-[1.968rem] xs:leading-[2.352rem] xs:tracking-[-0.101rem]">
          올 한 해 따뜻했던 기억들, 이곳에 채워보세요
        </div>
        <Image
          alt={"로고 주변 일러스트"}
          src={"/image/로고 주변 일러스트.svg"}
          width={304}
          height={181}
          className="absolute top-[1.68rem] h-auto w-[81vw] xs:w-[38.88rem]"
        ></Image>
      </div>
      <div className="flex flex-col items-center gap-y-[3.9vw] xs:gap-y-[1.872rem]">
        <div className="text-center align-text-top text-[3.1vw] font-semibold leading-[3.47vw] tracking-[-0.08vw] text-white underline underline-offset-2 xs:text-[1.488rem] xs:leading-[1.66rem] xs:tracking-[-0.038rem]">
          SNS 로그인
        </div>
        <div className="flex gap-x-[3.5vw] xs:gap-x-[1.68rem]">
          <Link href={"/api/v1/auth/kakao"} className="z-20">
            <Image
              alt={"카카오 소셜로그인 버튼"}
              src={"/image/kakao.svg"}
              width={46}
              height={46}
              className="h-auto w-[12.3vw] xs:w-[5.904rem]"
            ></Image>
          </Link>
          <Link href={"/api/v1/auth/naver"} className="z-20">
            <Image
              alt={"네이버 소셜로그인 버튼"}
              src={"/image/naver.svg"}
              width={46}
              height={46}
              className="h-auto w-[12.3vw] xs:w-[5.904rem]"
            ></Image>
          </Link>
          <Link href={"/api/v1/auth/google"} className="z-20">
            <Image
              alt={"구글 소셜로그인 버튼"}
              src={"/image/google.svg"}
              width={46}
              height={46}
              className="h-auto w-[12.3vw] xs:w-[5.904rem]"
            ></Image>
          </Link>
        </div>
      </div>
    </div>
  );
}
