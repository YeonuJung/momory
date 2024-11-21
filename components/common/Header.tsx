"use client";
import { PAGES_WITH_FINISHBUTTON} from "@/constants/page";
import { api } from "@/libs/axios";
import { hashPassword } from "@/libs/bcrypt";
import { HeaderProps} from "@/types/Header";
import Image from "next/image";


export default function Header(props: HeaderProps) {
  const {page, setCurrentPage} = props
  const handleSubmit = async () => {
    switch(page){
      case "create_nickname":
        if(props.momoryNickname === "" || props.momoryNickname.length > 4){
          alert("닉네임을 제대로 입력해주세요.");
          return;
        }
        setCurrentPage("create_password");
        break;
      case "create_password":
        if(props.momoryPassword.length < 4){
          alert("비밀번호를 모두 입력해주세요.");
          return;
        }
        const combinedPassword = props.momoryPassword.join("")
        const hashedPassword = await hashPassword(combinedPassword)
        api.post("/api/v1/momory", {momoryNickname: props.momoryNickname, momoryPassword: hashedPassword})
        break;
      case "enter_password":
        if(props.momoryPassword.length < 4){
          alert("비밀번호를 모두 입력해주세요.");
          return;
        }
        api.post("/api/v1/momory")
        break;
      case "upload_photo":
        if(!props.memoryPhoto.photo){
          alert("사진을 업로드해주세요.");
          return;
        }
        setCurrentPage("select_filter");
        break;
      case "select_filter":
        if(props.memoryFilter === ""){
          alert("필터를 선택해주세요.");
          return;
        }
        setCurrentPage("create_nicknameAndmessage");
        break;
      case "create_nicknameAndmessage":
        if(props.memoryNicknameAndMessage.nickname === "" || props.memoryNicknameAndMessage.message === ""){
          alert("닉네임과 메시지를 입력해주세요.");
          return;
        }
        const formData = new FormData();
        formData.append("photo", props.memoryPhoto);
        formData.append("filter", props.memoryFilter);
        formData.append("nickname", props.memoryNicknameAndMessage.nickname);
        formData.append("message", props.memoryNicknameAndMessage.message);
        api.post("/api/v1/memory",formData)
        break;
      default:
    }
  }
  return (
    <header className="absolute top-[6.67vw] flex w-full items-center justify-between px-[5.83vw] xs:top-[3.2rem] xs:px-[2.8rem]">
      <Image
        src="/image/arrow-left.svg"
        width={13}
        height={19}
        alt="왼쪽 화살표"
        className="h-[4.62vw] w-[2.92vw] cursor-pointer xs:h-[1.9rem] xs:w-[1.3rem]"
      ></Image>
      <Image
        src="/image/상단메인로고.svg"
        width={130}
        height={64}
        alt="상단 메인로고"
        className="h-[13.33vw] w-[27.08vw] cursor-pointer xs:h-[6.4rem] xs:w-[13rem]"
      ></Image>
      {PAGES_WITH_FINISHBUTTON.includes(page) ? (
        <span className="cursor-pointer font-nanum-Jung text-[6.67vw] font-normal text-sky xs:text-[3.2rem]" onClick={handleSubmit}>
          완료
        </span>
      ) : (
        <Image
          src="/image/arrow-right.svg"
          width={13}
          height={19}
          alt="오른쪽 화살표"
          className="h-[4.62vw] w-[2.92vw] cursor-pointer xs:h-[1.9rem] xs:w-[1.3rem]"
        ></Image>
      )}
    </header>
  );
}
