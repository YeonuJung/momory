import Image from "next/image";
import backgroundIllust from "@/public/image/배경 일러스트.png";
import logoAroundIllust from "@/public/image/로고 주변 일러스트.png";
import kakaoLogo from "@/public/image/kakao.png";
import naverLogo from "@/public/image/naver.png";
import googleLogo from "@/public/image/google.png";
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
import { cookies } from "next/headers";
import { verifyAccessToken } from "@/libs/jwt";
import ShowAuthToast from "@/components/common/Toast/ShowAuthToast";
import Link from "next/link";

export default async function HomePage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const redirect_uri = searchParams.redirect_uri as string | undefined;
  // ValidateToken 유틸은 토큰이 없는 경우 랜딩페이지로 리다이렉트 시키기 때문에
  // 여기서는 사용하면 무한 리다이렉트가 발생할 수 있어서 직접 쿠키에서 파싱
  const cookieStore = cookies();
  const access_token = cookieStore.get("access_token");
  // 액세스 토큰이 있다면
  if (access_token) {
    // 액세스 토큰을 검증
    const verifiedAccessToken = await verifyAccessToken(access_token.value);
    // 액세스 토큰이 유효하다면 2가지 케이스로 나눔
    // 리다이렉트 uri가 존재한다면 해당 uri로 리다이렉트
    // 리다이렉트 uri가 존재하지 않는다면 모모리 존재 확인 후 모모리로 이동 또는 생성페이지로 이동
    if (verifiedAccessToken.ok && verifiedAccessToken.payload) {
      // 액세스 토큰에서 모모리 uuid를 가져오기 -> 없을 수도 있음
      const momory_uuid = verifiedAccessToken.payload.momory_uuid as
        | string
        | undefined;
      // 리다이렉트 uri가 존재한다면 해당 uri로 리다이렉트
      if (redirect_uri) {
        return redirect(redirect_uri);
      }
      // 리다이렉트 uri가 없는 경우
      // 모모리가 존재한다면 해당 모모리로, 없으면 생성 페이지로 리다이렉트
      if (momory_uuid) {
        return redirect(`/momory/${momory_uuid}`);
      }
      // 모모리가 존재하지 않는다면 모모리 생성 페이지로 리다이렉트
      return redirect(`/create-momory`);
    }
  }

  // 액세스 토큰이 없다면 페이지에 머무르도록 해서 로그인 시킴
  return (
    <PageLayout verticalSpacing="gap-y-[6.9vw] xs:gap-y-[2.98rem]">
      <ShowAuthToast redirect_uri={redirect_uri} />
      <PolaroidDecoration />
      <HeroSection>
        <Image
          src={backgroundIllust}
          width={390.6}
          height={597.6}
          alt="모모리 배경 일러스트"
          priority={true}
          className="absolute z-20 h-auto w-[90.4vw] xs:w-[39.06rem]"
        ></Image>
        <MainLogoContainer>
          <MainLogo />
        </MainLogoContainer>
        <ServiceGuideContainer>
          <SerivceGuide>올 한 해 따뜻했던 기억 이곳에 채워보세요</SerivceGuide>
        </ServiceGuideContainer>
        <Image
          alt="모모리 로고 주변 일러스트"
          src={logoAroundIllust}
          width={273.6}
          height={162.9}
          className="absolute top-[1.521rem] z-20 h-auto w-[81vw] xs:w-[27.36rem]"
        ></Image>
      </HeroSection>
      <SocialSection>
        <SocialLoginText>소셜 로그인</SocialLoginText>
        <SocialLoginButtonConatiner>
          <SocialLoginButton
            href={
              redirect_uri
                ? `/api/v1/auth/kakao/?redirect_uri=${redirect_uri}`
                : `/api/v1/auth/kakao`
            }
            src={kakaoLogo}
            alt="카카오 소셜로그인 버튼"
          />
          <SocialLoginButton
            href={
              redirect_uri
                ? `/api/v1/auth/naver/?redirect_uri=${redirect_uri}`
                : `/api/v1/auth/naver`
            }
            src={naverLogo}
            alt="네이버 소셜로그인 버튼"
          />
          <SocialLoginButton
            href={
              redirect_uri
                ? `/api/v1/auth/google/?redirect_uri=${redirect_uri}`
                : `/api/v1/auth/google`
            }
            src={googleLogo}
            alt="구글 소셜로그인 버튼"
          />
        </SocialLoginButtonConatiner>
      </SocialSection>
      <div className="text-center z-20">
        <Link
          href="/privacy-policy"
          className="text-xs text-white/70 hover:text-white/90"
        >
          개인정보처리방침
        </Link>
      </div>
    </PageLayout>
  );
}
