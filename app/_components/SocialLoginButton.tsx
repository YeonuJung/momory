import Link from 'next/link'

interface SocialLoginButtonProps {
    href: string;
    src: string;
    alt: string;
}
export default function SocialLoginButton({href, src, alt}: SocialLoginButtonProps) {
  return (
    <Link href={`${href}`} className="z-20">
    <img
      alt={`${alt}`}
      src={`${src}`}
      width="46"
      height="46"
      className="h-auto w-[12.3vw] xs:w-[5.904rem]"
    ></img>
  </Link>
  )
}
