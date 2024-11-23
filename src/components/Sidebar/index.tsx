import Link from "next/link";

import Routes from "./Routes";
import { Logo } from "@/icons";

export default function Sidebar() {
  return (
    <aside className="row-start-1 row-span-2 border-r border-border">
      <Link href="/" className="flex gap-3 items-center my-8 mx-9">
        <Logo className="text-black" />
        <span className="font-extrabold text-primary text-2xl">Soar Task</span>
      </Link>
      <Routes />
    </aside>
  );
}
