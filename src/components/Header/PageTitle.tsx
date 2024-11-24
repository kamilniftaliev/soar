"use client";

import { usePathname } from "next/navigation";

import { ROUTES } from "@/constants";

export function PageTitle() {
  const pathname = usePathname();

  const route = ROUTES.find(({ path }) => path === pathname) || ROUTES[0];

  return (
    <h2 className="order-2 sm:order-none text-xl sm:text-3xl font-semibold text-primary">
      {route.pageTitle || route.label}
    </h2>
  );
}
