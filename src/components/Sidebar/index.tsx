import Link from "next/link";

import { Routes } from "./Routes";
import { Logo } from "@/icons";

export function Sidebar() {
  return (
    <aside className="hidden lg:block row-start-1 row-span-2 border-r border-gray">
      <Link href="/" className="flex gap-3 items-center my-8 mx-9">
        <Logo className="text-black" />
        <span className="font-extrabold text-primary text-2xl">Soar Task</span>
      </Link>
      <Routes />
    </aside>
  );
}
