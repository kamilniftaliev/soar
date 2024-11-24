"use client";

import { ROUTES } from "@/constants";
import { cn } from "@/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Routes() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col">
      {ROUTES.map(({ path, label, Icon }) => {
        const isActive = pathname === path;

        return (
          <Link
            key={path}
            className={cn(
              "flex gap-6 text-black py-4 px-10 hover:opacity-100 transition-opacity",
              {
                "opacity-40": !isActive,
                "line-left": isActive,
              }
            )}
            href={path}
          >
            <Icon />
            <span className="font-medium text-lg">{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
