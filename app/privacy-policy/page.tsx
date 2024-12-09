import PageLayout from "@/components/layout/PageLayout";

export default function page() {
  return (
    <PageLayout>
      <div className="w-full px-4 py-8 xs:px-[5.4rem] xs:py-9">
        <div className="space-y-10 font-pretendard text-white">
          <h1 className="mb-12 text-center text-4xl font-bold">
            개인정보처리방침
          </h1>

          <section>
            <h2 className="mb-6 flex items-center gap-2 text-2xl font-semibold">
              <span className="inline-block h-2 w-2 rounded-full bg-sky"></span>
              1. 개인정보의 처리 목적
            </h2>
            <p className="mb-6 text-lg text-white/90">
              Momory(&apos;서비스&apos;)은(는) 다음의 목적을 위하여 개인정보를
              처리하고 있으며, 다음의 목적 이외의 용도로는 이용하지 않습니다.
            </p>
            <ul className="list-disc space-y-3 pl-6 text-lg text-white/90 marker:text-sky">
              <li>회원 가입 및 관리</li>
              <li>서비스 제공 및 운영</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-6 flex items-center gap-2 text-2xl font-semibold">
              <span className="inline-block h-2 w-2 rounded-full bg-sky"></span>
              2. 개인정보의 처리 및 보유 기간
            </h2>
            <p className="mb-6 text-lg text-white/90">
              ① 서비스는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터
              개인정보를 수집 시에 동의 받은 개인정보 보유·이용기간 내에서
              개인정보를 처리·보유합니다.
            </p>
            <p className="mb-4 text-lg text-white/90">
              ② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.
            </p>
            <ul className="list-disc space-y-3 pl-6 text-lg text-white/90 marker:text-sky">
              <li>회원 가입 정보: 서비스 종료 시까지</li>
              <li>서비스 이용 기록: 서비스 종료 시까지</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-6 flex items-center gap-2 text-2xl font-semibold">
              <span className="inline-block h-2 w-2 rounded-full bg-sky"></span>
              3. 정보주체의 권리·의무 및 그 행사방법
            </h2>
            <p className="mb-6 text-lg text-white/90">
              이용자는 개인정보주체로서 다음과 같은 권리를 행사할 수 있습니다.
            </p>
            <ul className="list-disc space-y-3 pl-6 text-lg text-white/90 marker:text-sky">
              <li>오류 등이 있을 경우 정정 요구</li>
              <li>삭제 요구</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-6 flex items-center gap-2 text-2xl font-semibold">
              <span className="inline-block h-2 w-2 rounded-full bg-sky"></span>
              4. 처리하는 개인정보의 항목
            </h2>
            <p className="mb-6 text-lg text-white/90">
              서비스는 다음의 개인정보 항목을 처리하고 있습니다.
            </p>
            <ul className="list-disc space-y-3 pl-6 text-lg text-white/90 marker:text-sky">
              <li>필수항목: 이메일 주소</li>
              <li>선택항목: 닉네임, 비밀번호, 사진, 메시지</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-6 flex items-center gap-2 text-2xl font-semibold">
              <span className="inline-block h-2 w-2 rounded-full bg-sky"></span>
              5. 개인정보의 안전성 확보 조치
            </h2>
            <p className="mb-6 text-lg text-white/90">
              서비스는 개인정보보호법 제29조에 따라 다음과 같이 안전성 확보에
              필요한 기술적/관리적 및 물리적 조치를 하고 있습니다.
            </p>
            <ul className="list-disc space-y-3 pl-6 text-lg text-white/90 marker:text-sky">
              <li>개인정보 암호화</li>
              <li>해킹 등에 대비한 기술적 대책</li>
              <li>개인정보에 대한 접근 제한</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-6 flex items-center gap-2 text-2xl font-semibold">
              <span className="inline-block h-2 w-2 rounded-full bg-sky"></span>
              6. 개인정보 보호책임자
            </h2>
            <div className="rounded-lg bg-dialog p-6 shadow-frame">
              <p className="mb-6 text-lg text-white/90">
                서비스는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보
                처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와
                같이 개인정보 보호책임자를 지정하고 있습니다.
              </p>
              <div className="ml-4">
                <p className="mb-4 text-xl text-sky">▶ 개인정보 보호책임자</p>
                <ul className="space-y-2 text-lg text-white/90">
                  <li>직책: 서비스 총괄 책임자</li>
                  <li>연락처: gsh95214@naver.com</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-6 flex items-center gap-2 text-2xl font-semibold">
              <span className="inline-block h-2 w-2 rounded-full bg-sky"></span>
              7. 개인정보 처리방침 변경
            </h2>
            <p className="mb-6 text-lg text-white/90">
              이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른
              변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일
              전부터 공지사항을 통하여 고지할 것입니다.
            </p>
            <p className="mt-4 text-lg text-white/90">시행일자: 2024.12.03</p>
          </section>
        </div>
      </div>
    </PageLayout>
  );
}
