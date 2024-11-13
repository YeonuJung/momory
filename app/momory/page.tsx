import Image from "next/image";
import MomoryImage from "../../components/common/MomoryImage";
import PageDots from "../../components/common/PageDots";
import TopContainer from "@/components/layout/TopContainer";
import ModalContainer from "@/components/common/Modal/ModalContainer";
import ImageDetail from "../../components/common/Modal/ImageDetail";
import ButtonContainer from "@/components/common/Button/ButtonContainer";
import { Button } from "@/components/common/Button/Button";
import PasswordInput from "@/components/common/Input/PasswordInput";
import InputLabel from "@/components/common/Input/InputLabel";

export default function Momory_page() {
  return (
    <TopContainer verticalSpacing="gap-y-[5.6vw] xs:gap-y-[2.688rem]">
      <div className="flex items-center justify-center">
        <div className="flex h-[19vw] w-[83.3vw] items-center justify-center gap-[0.83vw] bg-title-illustration bg-cover bg-center bg-no-repeat font-nanum-Jung font-normal text-sky xs:h-[9.12rem] xs:w-[39.984rem] xs:gap-[0.398rem]">
          <span className="flex -translate-y-[1.6vw] items-center justify-center text-[13.54vw] leading-[15.63vw] xs:-translate-y-[0.768rem] xs:text-[6.499rem] xs:leading-[7.502rem]">
            수현수현
          </span>
          <span className="flex items-center justify-center text-[8.53vw] leading-[9.8vw] xs:text-[4.094rem] xs:leading-[4.704rem]">
            님과의 기억들
          </span>
        </div>
      </div>
      <MomoryImage />
      <PageDots />
      <ButtonContainer>
        <Button>내 모모리 공유하기</Button>
        <Button>모모리 간직하기</Button>
      </ButtonContainer>
      <Image
        src={"/image/arrow-left.svg"}
        alt={"왼쪽 화살표"}
        width={13}
        height={19}
        className="absolute left-[2.67vw] w-[3.47vw] cursor-pointer xs:left-[1.282rem] xs:w-[1.3rem]"
      ></Image>
      <Image
        src={"/image/arrow-right.svg"}
        alt={"오른쪽 화살표"}
        width={13}
        height={19}
        className="absolute right-[2.67vw] w-[3.47vw] cursor-pointer xs:right-[1.282rem] xs:w-[1.3rem]"
      ></Image>
      <ModalContainer verticalSpacing="gap-y-[2rem]">
        <InputLabel>내 사진 비밀번호를 입력해주세요</InputLabel>
        <PasswordInput/>
        {/* 
        위에 있는 요소들은 사진 클릭했을 때 나오는 비밀번호창
        밑에 요소들은 비밀번호 입력 후 모달에 나오는 내용들
         */}
        {/* <ImageDetail />
        <ButtonContainer>
          <Button>삭제</Button>
          <Button>기억 간직하기</Button>
        </ButtonContainer> */}
        {/* 모모리 오너만 삭제버튼있고 보는 사람들은 기억 간직하기만 있도록 */}
      </ModalContainer>
    </TopContainer>
  );
}
