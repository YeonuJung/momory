import React from "react";

interface PageLayoutProps {
  children?: React.ReactNode;
  verticalSpacing?: string;
}
export default function PageLayout({
  children,
  verticalSpacing,
}: PageLayoutProps) {
  return (
    <div
      className={`relative flex min-h-screen w-full max-w-[43.2rem] flex-col justify-center ${verticalSpacing} bg-ruby shortLandscape:min-h-[76rem]`}
    >
      {children}
    </div>
  );
}
