import Link from "next/link";
import Image from "next/image";

import { Input } from "../Input";
import { MenuIcon, NotificationIcon, SearchIcon, SettingsIcon } from "@/icons";
import { PageTitle } from "./PageTitle";

export function Header() {
  return (
    <header className="grid lg:flex grid-cols-3 grid-rows-2 items-center gap-y-4 lg:gap-7 lg:border-b lg:border-gray px-container lg:px-10 py-5 col-span-2 lg:col-span-full col-start-1 lg:col-start-auto text-center lg:h-[100]">
      <MenuIcon className="text-black cursor-pointer lg:hidden order-1" />
      <PageTitle />
      <Input
        Icon={SearchIcon}
        containerClassName="order-last lg:order-none col-span-3 row-start-2 w-full lg:w-64 lg:ml-auto px-6 bg-secondary rounded-input shrink-0"
        placeholder="Search for something"
      />
      <Link
        href="#"
        className="hidden lg:block w-circle-btn order-3 lg:order-none aspect-square group rounded-full bg-secondary p-3"
      >
        <SettingsIcon className="text-custom-sky group-hover:text-blue" />
      </Link>
      <Link
        href="#"
        className="hidden lg:block w-circle-btn order-3 lg:order-none aspect-square group rounded-full bg-secondary p-3"
      >
        <NotificationIcon className="text-custom-sky group-hover:text-blue" />
      </Link>
      <Image
        width={60}
        height={60}
        src="/profile-photo.png"
        alt="Profile Photo"
        className="order-3 lg:order-none aspect-square w-[35px] lg:w-[60px] ml-auto lg:ml-0"
      />
    </header>
  );
}
