import { cn } from "@/utils";
import { ClassValue } from "clsx";
import type { InputHTMLAttributes, SVGAttributes } from "react";

export interface Props
  extends Pick<
    InputHTMLAttributes<HTMLInputElement>,
    "onChange" | "placeholder"
  > {
  label?: string;
  Icon?: (props: SVGAttributes<HTMLOrSVGElement>) => JSX.Element;
  containerClassName?: ClassValue;
  className?: ClassValue;
}

export default function Input({
  label,
  Icon,
  placeholder,
  containerClassName,
  className,
  onChange,
}: Props) {
  return (
    <label className={cn("group", containerClassName)}>
      {label && <span className="text-base font-normal">{label}</span>}
      <div className="flex items-center gap-4">
        {!!Icon && (
          <Icon className="text-icon shrink-0 group-hover:text-active-icon" />
        )}
        <input
          className={cn(
            "py-4 bg-transparent outline-none w-full text-input leading-input placeholder:text-search-placeholder",
            className
          )}
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>
    </label>
  );
}
