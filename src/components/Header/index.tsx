import Link from "next/link";

import Input from "../Input";
import { NotificationIcon, SearchIcon, SettingsIcon } from "@/icons";
import Image from "next/image";
import PageTitle from "./PageTitle";

export default function Header() {
  return (
    <header className="flex items-center gap-7 border-b border-border px-10 py-5 col-span-1 col-start-2 text-center h-[100]">
      <PageTitle />
      <Input
        Icon={SearchIcon}
        containerClassName="ml-auto px-6 bg-secondary rounded-input w-64"
        placeholder="Search for something"
      />
      <Link href="#" className="group rounded-full bg-secondary p-3">
        <SettingsIcon className="text-icon group-hover:text-active-icon" />
      </Link>
      <Link href="#" className="group rounded-full bg-secondary p-3">
        <NotificationIcon className="text-icon group-hover:text-active-icon" />
      </Link>
      <Image
        width={60}
        height={60}
        src="/profile-photo.png"
        alt="Profile Photo"
      />
    </header>
  );
}
