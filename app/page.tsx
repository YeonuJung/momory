import Link from "next/link";

export default function Home() {
  
  
  return (
    <div className="max-w-[48rem] min-w-[32rem] w-full min-h-screen flex justify-between bg-white px-10">
      <Link className="font-bold text-[3rem] cursor-pointer" href={"/api/auth/kakao"} >카카오</Link>
      <Link className="font-bold text-[3rem] cursor-pointer" href={"api/auth/google"}>구글</Link>
      <Link className="font-bold text-[3rem] cursor-pointer" href={"api/auth/naver"} >네이버</Link>
    </div>
  );
}
