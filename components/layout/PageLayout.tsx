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
      className={`safe-screen-height relative flex w-full max-w-[43.2rem] flex-col justify-center ${verticalSpacing} bg-ruby shortLandscape:min-h-[76.5rem]`}
    >
      {children}
    </div>
  );
}
