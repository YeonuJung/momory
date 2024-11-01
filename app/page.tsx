import Link from "next/link";
import Image from "next/image";

export default function Home() {

  return (
    <div className="flex relative min-h-screen w-full max-w-[48rem] flex-col justify-center gap-[6.9vw] bg-ruby">
      <div className="relative flex flex-col items-center justify-center gap-[2.3vw] ">
        <div className="relative px-[3.2vw] pt-[5.3vw] xs:px-[]">
          <Image
            alt={"메인로고"}
            src={"/image/메인로고.svg"}
            width={200}
            height={53.13}
            className="absolute left-1/2 top-0 -translate-x-1/2 w-[53.3vw] h-auto"
          />
          <h1 className="-rotate-[0.98] text-center align-text-top font-nanum-Hana text-[16.2vw] font-normal leading-[17.8vw] tracking-[0.05vw] text-sky">
            Momory
          </h1>
        </div>
        <div className="w-[36.6vw] text-center align-text-top font-pretendard text-[4.1vw] font-semibold leading-[4.9vw] tracking-[-0.21vw] text-sky">
          올 한 해 따뜻했던 기억들, 이곳에 채워보세요
        </div>
        <Image
          alt={"타이틀 주변 일러스트"}
          src={"/image/타이틀 주변 일러스트.svg"}
          width={304}
          height={181}
          className="absolute top-[3.5vw] w-[81vw] h-auto"
        ></Image>
        <Image src={"/image/배경 일러스트.svg"} width={339} height={521} alt={"배경 일러스트"} className="absolute right-[8.8vw] w-[90.4vw] h-auto"></Image>
      </div>
      <div className="flex flex-col items-center gap-[3.9vw]">
        <div className="text-center align-text-top text-[3.1vw] font-semibold leading-[3.47vw] tracking-[-0.08vw] text-white underline underline-offset-2">
          SNS 로그인
        </div>
        <div className="flex gap-[3.5vw]">
          <Link href={"/api/v1/auth/kakao"} className="z-10">
            <Image
              alt={"카카오 소셜로그인 버튼"}
              src={"/image/kakao.svg"}
              width={46}
              height={46}
              className="w-[12.3vw] h-auto"
            ></Image>
          </Link>
          <Link href={"/api/v1/auth/naver"} className="z-10">
            <Image
              alt={"네이버 소셜로그인 버튼"}
              src={"/image/naver.svg"}
              width={46}
              height={46}
              className="w-[12.3vw] h-auto"
            ></Image>
          </Link>
          <Link href={"/api/v1/auth/google"} className="z-10">
            <Image
              alt={"구글 소셜로그인 버튼"}
              src={"/image/google.svg"}
              width={46}
              height={46}
              className="w-[12.3vw] h-auto"
            ></Image>
          </Link>
        </div>
      </div>
    </div>
  );
}
