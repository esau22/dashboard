import { cn } from "@/libs/utlis";
import { IconType } from "react-icons";

interface ButtonIconProps {
  icon: IconType;
  onClick: () => void;
  className?: string;
}

export const ButtonIcon = ({
  icon: Icon,
  className,
  onClick,
}: ButtonIconProps) => {
  return (
    <button type="button" className={cn("", className)} onClick={onClick}>
      <Icon size={20} />
    </button>
  );
};
