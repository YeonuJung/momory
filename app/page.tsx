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
import { redirect } from "next/navigation";
import { checkMomory } from "@/backend/queries/momory";
import { cookies } from "next/headers";
import { verifyAccessToken } from "@/libs/jwt";

export default async function HomePage() {
  // ValidateToken 유틸은 토큰이 없는 경우 랜딩페이지로 리다이렉트 시키기 때문에
  // 여기서는 사용하면 무한 리다이렉트가 발생할 수 있어서 직접 쿠키에서 파싱
  const cookieStore = cookies();
  const access_token = cookieStore.get("access_token");
  // 액세스 토큰이 있다면
  if(access_token){
    // 액세스 토큰을 검증
    const verifiedAccessToken = await verifyAccessToken(access_token.value);
    // 액세스 토큰이 유효하다면
    if (verifiedAccessToken.ok && verifiedAccessToken.payload) {
      // 액세스 토큰에서 모모리 uuid를 가져오기 -> 없을 수도 있음
      const momory_uuid = verifiedAccessToken.payload.momory_uuid as string | undefined;
      // 모모리가 존재한다면 해당 모모리로 리다이렉트
      if (momory_uuid) {
        return redirect(`/momory/${momory_uuid}`);
      }
      // 모모리가 존재하지 않는다면 모모리 생성 페이지로 리다이렉트
      return redirect(`/create-momory`);
    }
  }
  
  // 액세스 토큰이 없다면 페이지에 머무르도록 해서 로그인 시킴
  return (
    <PageLayout verticalSpacing="gap-y-[6.9vw] xs:gap-y-[3.312rem]">
      <PolaroidDecoration />
      <HeroSection>
        <Image
          src="/image/배경 일러스트.png"
          width={339}
          height={521}
          alt="배경 일러스트"
          priority={true}
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
