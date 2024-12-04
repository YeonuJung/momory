interface PageDotsProps {
  currentPage: number;
  totalCount: number | null;
}

export default function PageDots({ currentPage, totalCount }: PageDotsProps) {
  const safeTotalCount = totalCount ?? 1;
  
  const totalPages = Math.ceil(safeTotalCount / 9);

  const dots = Array.from({ length: totalPages }, (_, idx) => {
    const pageNumber = idx + 1;
    return `h-[1.25vw] w-[1.25vw] rounded-full ${
      currentPage === pageNumber ? "bg-sky" : "bg-white"
    } xs:h-[0.54rem] xs:w-[0.54rem]`;
  });

  return (
    <div className="flex items-center justify-center gap-x-[2.9vw] xs:gap-x-[1.25rem]">
      {dots.map((dot, idx) => (
        <div key={idx} className={dot}></div>
      ))}
    </div>
  );
}