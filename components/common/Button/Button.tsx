"use client";
interface ButtonProps {
    children: React.ReactNode;
    action: "share_momory" | "save_momory" | "create_momory" | "leave_memory" | "delete_memory" | "save_memory" | "go_to_my_momory"
}
interface ButtonWithCaptionProps extends ButtonProps {
    caption: string;
}
export function Button({children}: ButtonProps) {
  return (
    <button
      type="button"
      className="h-[17.7vw] flex-1 rounded-[8.59px] border-2 border-sky text-white xs:h-[8.496rem]"
    >
      <span className="text-[6.7vw] leading-[5vw] xs:text-[3.216rem] xs:leading-[2.4rem]">
        {children}
      </span>
    </button>
  );
}
export function ButtonWithCaption({children, caption}: ButtonWithCaptionProps) {
  return (
    <button
      type="button"
      className="flex h-[17.7vw] flex-1 flex-col items-center justify-center gap-y-[1vw] rounded-[8.59px] border-2 border-sky text-white xs:h-[8.496rem] xs:gap-y-[0.48rem]"
    >
      <span className="text-[6.7vw] leading-[5vw] xs:text-[3.216rem] xs:leading-[2.4rem]">
        {children}
      </span>
      <span className="text-[4.4vw] leading-[4vw] xs:text-[2.112rem] xs:leading-[1.92rem]">
        {caption}
      </span>
    </button>
  );
}

