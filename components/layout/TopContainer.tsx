import React from "react";

interface TopContainerProps {
  children?: React.ReactNode;
  verticalSpacing?: string;
}
export default function TopContainer({
  children,
  verticalSpacing,
}: TopContainerProps) {
  return (
    <div
      className={`relative flex min-h-screen w-full max-w-[48rem] flex-col justify-center ${verticalSpacing} overflow-auto bg-ruby shortLandscape:min-h-[85rem]`}
    >
      {children}
    </div>
  );
}
