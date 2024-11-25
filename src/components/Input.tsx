import { cn } from "@/utils";
import { ClassValue } from "clsx";
import type { InputHTMLAttributes, SVGAttributes } from "react";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "className"> {
  label?: string;
  Icon?: (props: SVGAttributes<HTMLOrSVGElement>) => JSX.Element;
  containerClassName?: ClassValue;
  className?: ClassValue;
}

export function Input({
  label,
  Icon,
  containerClassName,
  className,
  ...props
}: InputProps) {
  return (
    <label
      className={cn("flex flex-col gap-2 lg:gap-3 group", containerClassName)}
    >
      {label && (
        <span className="text-black text-sm lg:text-base font-normal">
          {label}
        </span>
      )}
      <div className="flex items-center gap-4">
        {!!Icon && (
          <Icon className="text-custom-sky shrink-0 group-hover:text-blue" />
        )}
        <input
          className={cn(
            "py-3 lg:py-4 bg-transparent outline-none w-full text-xs lg:text-rg leading-input placeholder:text-placeholder",
            className
          )}
          {...props}
        />
      </div>
    </label>
  );
}
