import { USERS } from "@/constants";
import { SectionTitle } from "./SectionTitle";
import Image from "next/image";
import { ArrowRightIcon, SendIcon } from "@/icons";
import { Input } from "@/components";

export function QuickTransfer() {
  return (
    <div>
      <SectionTitle>Quick Transfer</SectionTitle>
      <div className="flex flex-col white-section px-5 gap-5">
        <div className="flex gap-3 items-center">
          <div className="flex overflow-auto gap-4 py-4 px-5">
            {USERS.map(({ id, name, role, photo }) => (
              <div
                key={id}
                className="shrink-0 flex flex-col text-center items-center"
              >
                <Image
                  className="shrink-0 rounded-full"
                  src={photo}
                  alt={name}
                  width={70}
                  height={70}
                />
                <span className="text-md text-black mt-3.5">{name}</span>
                <span className="text-rg text-custom-sky mt-1">{role}</span>
              </div>
            ))}
          </div>
          <button className="flex items-center justify-center rounded-full shadow-lg w-circle-btn aspect-square shrink-0">
            <ArrowRightIcon />
          </button>
        </div>
        <div className="flex items-center justify-center gap-5 flex-wrap 2xl:flex-nowrap">
          <span className="shrink-0 text-md text-custom-sky">Write Amount</span>
          <div className="flex items-center justify-between bg-[#EDF1F7] rounded-input pl-5">
            <Input containerClassName="basis-24" placeholder="525.50" />
            <button className="flex items-center gap-3 text-white bg-black py-3.5 px-6 rounded-input">
              <span>Send</span>
              <SendIcon className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
