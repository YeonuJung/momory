import Link from "next/link";

interface NavigationArrowProps {
  src: string;
  alt: string;
  direction: "left" | "right";
  momoryUuid: string;
  currentPage: number;
  totalCount: number | null;
}

export default function NavigationArrowWithPagination({
  src,
  alt,
  direction,
  momoryUuid,
  currentPage,
  totalCount,
}: NavigationArrowProps) {
  // 테일윈드 특성상 클래스네임을 동적으로 할당하기 보다는 통째로 할당하는 게 런타임시 안정적
  const classNameByDirection =
    direction === "left"
      ? "absolute left-[2.67vw] xs:left-[1.282rem]"
      : "absolute right-[2.67vw] xs:right-[1.282rem]";
  const safeTotalCount = totalCount ?? 0;
  const totalPages = Math.ceil(safeTotalCount / 9);
  // 커서가 없는 경우 화살표 비활성화
  const isDisabled =
    (direction === "right" && currentPage >= totalPages) || 
    (direction === "left" && currentPage <= 1);

  const imageClassName =
    "w-[3.47vw] xs:w-[1.3rem]" +
    (isDisabled ? " opacity-30" : " cursor-pointer");

  // 이전, 다음 페이지로 이동할 때 페이지 번호 조정
  const updatedPage = direction === "right" ? currentPage + 1 : currentPage - 1;

  const href = `/momory/${momoryUuid}?page=${updatedPage}`
 
  if (isDisabled) {
    return (
      <img
        src={src}
        alt={alt}
        width="13"
        height="19"
        className={`${classNameByDirection} w-[3.47vw] opacity-30 xs:w-[1.3rem]`}
      />
    );
  }

  return (
    <Link href={href} className={classNameByDirection}>
      <img
        src={src}
        alt={alt}
        width="13"
        height="19"
        className={imageClassName}
      />
    </Link>
  );
}
