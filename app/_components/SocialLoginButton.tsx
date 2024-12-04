import Link from 'next/link'
import Image from 'next/image';
interface SocialLoginButtonProps {
    href: string;
    src: string;
    alt: string;
}
export default function SocialLoginButton({href, src, alt}: SocialLoginButtonProps) {
  return (
    <Link href={`${href}`} className="z-20">
    <Image
      alt={`${alt}`}
      src={`${src}`}
      width={53.1}
      height={53.1}
      className="h-auto w-[12.3vw] xs:w-[5.31rem]"
    ></Image>
  </Link>
  )
}
