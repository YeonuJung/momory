import Link from 'next/link'
import Image from 'next/image'

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
      width={46}
      height={46}
      className="h-auto w-[12.3vw] xs:w-[5.904rem]"
    ></Image>
  </Link>
  )
}