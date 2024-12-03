interface PageDotsProps {
  currentPage: number;
  totalCount: number | null;
}

export default function PageDots({ currentPage, totalCount }: PageDotsProps) {
  const safeTotalCount = totalCount ?? 1;
  
  // 페이지 수를 계산 (아이템당 페이지당 9개 항목이라고 가정)
  const totalPages = Math.ceil(safeTotalCount / 9);

  // 페이지 점들을 동적으로 생성
  const dots = Array.from({ length: totalPages }, (_, idx) => {
    const pageNumber = idx + 1;
    return `h-[1.25vw] w-[1.25vw] rounded-full ${
      currentPage === pageNumber ? "bg-sky" : "bg-white"
    } xs:h-[0.6rem] xs:w-[0.6rem]`;
  });

  return (
    <div className="flex items-center justify-center gap-x-[2.9vw] xs:gap-x-[1.392rem]">
      {dots.map((dot, idx) => (
        <div key={idx} className={dot}></div>
      ))}
    </div>
  );
}
