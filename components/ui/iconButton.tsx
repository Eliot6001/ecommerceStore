import React, { MouseEventHandler } from "react";
import { cn } from "@/lib/utils";
interface iconButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  icon: React.ReactElement;
  className: string;
}
const iconButton: React.FC<iconButtonProps> = ({
  onClick,
  icon,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "roundedfull flex items-center bg-white border shadow-md p-2 hover:scale-110 transition",
        className
      )}
    >
      {icon}
    </button>
  );
};

export default iconButton;
