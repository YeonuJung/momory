import Link from "next/link";
import Image from "next/image";
interface NavigationArrowProps {
  src: string;
  alt: string;
  direction: "left" | "right";
  momoryUuid: string;
  currentPage: number;
  hasNextPage: boolean
}

export default function NavigationArrowWithPagination({
  src,
  alt,
  direction,
  momoryUuid,
  currentPage,
  hasNextPage,
}: NavigationArrowProps) {
  const classNameByDirection =
    direction === "left"
      ? "absolute left-[2.67vw] xs:left-[1.15rem] active:scale-125"
      : "absolute right-[2.67vw] xs:right-[1.15rem] active:scale-125";
  const isDisabled =
    (direction === "right" && !hasNextPage) || 
    (direction === "left" && currentPage <= 1);

  const imageClassName =
    "w-[3.47vw] xs:w-[1.17rem] h-auto" +
    (isDisabled ? " opacity-30" : " cursor-pointer");

  const updatedPage = direction === "right" ? currentPage + 1 : currentPage - 1;

  const href = `/momory/${momoryUuid}?page=${updatedPage}`
 
  if (isDisabled) {
    return (
      <Image
        src={src}
        alt={alt}
        width={11.7}
        height={16.45}
        className={`${classNameByDirection} w-[3.47vw] opacity-30 xs:w-[1.17rem] h-auto`}
      />
    );
  }

  return (
    <Link href={href} className={classNameByDirection}>
      <Image
        src={src}
        alt={alt}
        width={11.7}
        height={16.45}
        className={imageClassName}
      />
    </Link>
  );
}