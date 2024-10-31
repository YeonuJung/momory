import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex relative min-h-screen w-full min-w-[32rem] max-w-[48rem] flex-col justify-center gap-[3.3rem] bg-ruby">
      <div className="relative flex flex-col items-center justify-center gap-[1.12rem]">
        <div className="px-[1.5rem] pt-[2.6rem]">
          <Image
            alt={"메인로고"}
            src={"/image/메인로고.svg"}
            width={256}
            height={68}
            className="absolute left-1/2 top-0 -translate-x-1/2"
          />
          <h1 className="-rotate-[0.98] text-center font-nanum-Hana text-[7.8rem] font-normal leading-[8.6rem] tracking-[0.03em] text-sky">
            Momory
          </h1>
        </div>
        <div className="w-[17.6rem] text-center font-pretendard text-[2rem] font-semibold leading-[2.387rem] tracking-[-0.08em] text-sky">
          올 한 해 따뜻했던 기억들, 이곳에 채워보세요
        </div>
        <Image
          alt={"타이틀 주변 일러스트"}
          src={"/image/타이틀 주변 일러스트.svg"}
          width={304}
          height={181}
          className="absolute top-[1.3rem]"
        ></Image>
      </div>
      <div className="flex flex-col items-center gap-[1.8rem]">
        <div className="text-center text-[1.5rem] font-semibold leading-[1.7rem] tracking-[-0.03em] text-white underline underline-offset-2">
          SNS 로그인
        </div>
        <div className="flex gap-[1.7rem]">
          <Link href={"/api/v1/auth/kakao"} className="z-10">
            <Image
              alt={"카카오 소셜로그인 버튼"}
              src={"/image/kakao.svg"}
              width={59}
              height={59}
            ></Image>
          </Link>
          <Link href={"/api/v1/auth/naver"} className="z-10">
            <Image
              alt={"네이버 소셜로그인 버튼"}
              src={"/image/naver.svg"}
              width={59}
              height={59}
            ></Image>
          </Link>
          <Link href={"/api/v1/auth/google"} className="z-10">
            <Image
              alt={"구글 소셜로그인 버튼"}
              src={"/image/google.svg"}
              width={59}
              height={59}
            ></Image>
          </Link>
        </div>
      </div>
      <Image src={"/image/배경 일러스트.svg"} width={434} height={667} alt={"배경 일러스트"} className="absolute top-[0.7rem] min-h-[66.7rem]"></Image>
    </div>
  );
}
