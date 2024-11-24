import Link from "next/link";
import Image from "next/image";

import { Input } from "../Input";
import { MenuIcon, NotificationIcon, SearchIcon, SettingsIcon } from "@/icons";
import { PageTitle } from "./PageTitle";

export function Header() {
  return (
    <header className="grid sm:flex grid-cols-3 grid-rows-2 items-center gap-y-4 sm:gap-7 sm:border-b sm:border-gray px-container sm:px-10 py-5 col-span-2 sm:col-span-full col-start-1 sm:col-start-auto text-center sm:h-[100]">
      <MenuIcon className="text-black cursor-pointer sm:hidden order-1" />
      <PageTitle />
      <Input
        Icon={SearchIcon}
        containerClassName="order-last sm:order-none col-span-3 row-start-2 w-full sm:w-64 sm:ml-auto px-6 bg-secondary rounded-input shrink-0"
        placeholder="Search for something"
      />
      <Link
        href="#"
        className="hidden sm:block w-[50px] order-3 sm:order-none aspect-square group rounded-full bg-secondary p-3"
      >
        <SettingsIcon className="text-color-sky group-hover:text-blue" />
      </Link>
      <Link
        href="#"
        className="hidden sm:block w-[50px] order-3 sm:order-none aspect-square group rounded-full bg-secondary p-3"
      >
        <NotificationIcon className="text-color-sky group-hover:text-blue" />
      </Link>
      <Image
        width={60}
        height={60}
        src="/profile-photo.png"
        alt="Profile Photo"
        className="order-3 sm:order-none aspect-square w-[35px] sm:w-[60px] ml-auto sm:ml-0"
      />
    </header>
  );
}
