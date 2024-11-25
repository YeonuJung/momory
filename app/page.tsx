import Image from "next/image";
import PageLayout from "@/components/layout/PageLayout";
import PolaroidDecoration from "./_components/PolaroidDecoration";
import SocialLoginText from "./_components/SocialLoginText";
import SocialLoginButton from "./_components/SocialLoginButton";
import MainLogo from "./_components/MainLogo";
import MainLogoContainer from "./_components/containers/MainLogoContainer";
import SerivceGuide from "./_components/SerivceGuide";
import ServiceGuideContainer from "./_components/containers/ServiceGuideContainer";
import HeroSection from "./_components/sections/HeroSection";
import SocialSection from "./_components/sections/SocialSection";
import SocialLoginButtonConatiner from "./_components/containers/SocialLoginButtonConatiner";

export default async function HomePage({searchParams} : {searchParams: Promise<{[key: string]: string | string[] | undefined}>}) {
  // const {error} = await searchParams
  // if(error && error === 'server'){
    
  // }
  // if(error && error === 'not_found'){

  // }

  return (
    <PageLayout verticalSpacing="gap-y-[6.9vw] xs:gap-y-[3.312rem]">
      <PolaroidDecoration />
      <HeroSection>
        <Image
          src="/image/배경 일러스트.png"
          width={339}
          height={521}
          alt="배경 일러스트"
          className="absolute z-20 h-auto w-[90.4vw] xs:w-[43.4rem]"
        ></Image>
        <MainLogoContainer>
          <MainLogo />
        </MainLogoContainer>
        <ServiceGuideContainer>
          <SerivceGuide>
            올 한 해 따뜻했던 기억들, 이곳에 채워보세요
          </SerivceGuide>
        </ServiceGuideContainer>
        <img
          alt="로고 주변 일러스트"
          src="/image/로고 주변 일러스트.svg"
          width="304"
          height="181"
          className="absolute top-[1.68rem] h-auto w-[81vw] xs:w-[38.88rem]"
        ></img>
      </HeroSection>
      <SocialSection>
        <SocialLoginText>소셜 로그인</SocialLoginText>
        <SocialLoginButtonConatiner>
          <SocialLoginButton
            href="/api/v1/auth/kakao"
            src="/image/kakao.svg"
            alt="카카오 소셜로그인 버튼"
          />
          <SocialLoginButton
            href="/api/v1/auth/naver"
            src="/image/naver.svg"
            alt="네이버 소셜로그인 버튼"
          />
          <SocialLoginButton
            href="/api/v1/auth/google"
            src="/image/google.svg"
            alt="구글 소셜로그인 버튼"
          />
        </SocialLoginButtonConatiner>
      </SocialSection>
    </PageLayout>
  );
}
