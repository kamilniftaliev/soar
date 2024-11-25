import Image from "next/image";

import { MasterCardIcon } from "@/icons";
import { cn } from "@/utils";
import { SectionTitle } from "./SectionTitle";
import { CARDS } from "@/constants";

export function Cards() {
  return (
    <div className="lg:col-span-2">
      <div className="flex justify-between">
        <SectionTitle>My Cards</SectionTitle>
        <SectionTitle className="text-rg lg:text-2md">See All</SectionTitle>
      </div>
      <div className="flex items-start mt-5 gap-md lg:gap-lg overflow-hidden">
        {CARDS.map(({ id, balance, holder, valid, number, theme }) => {
          const isBlack = theme === "black";
          const isWhite = theme === "white";

          return (
            <div
              key={id}
              className={cn(
                "lato rounded-container overflow-hidden basis-64 lg:basis-80 lg:h-card shrink-0",
                {
                  "black-card text-white": isBlack,
                  "bg-white text-black border border-azure": isWhite,
                }
              )}
            >
              <div className="flex flex-col gap-6 lg:gap-8 py-4 px-5 lg:py-6">
                <div className="flex justify-between items-center">
                  <div className="flex flex-col">
                    <span
                      className={`text-xss lg:text-xs ${
                        isWhite ? "text-custom-sky" : ""
                      }`}
                    >
                      Balance
                    </span>
                    <span className="text-md lg:text-xl font-semibold">
                      {balance}
                    </span>
                  </div>
                  <Image
                    src={isBlack ? "/white-chip.png" : "/black-chip.png"}
                    alt="Card chip"
                    width={34}
                    height={34}
                  />
                </div>
                <div className="flex gap-10">
                  <div className="flex flex-col">
                    <span
                      className={`uppercase text-tiny lg:text-xs text-nowrap ${
                        isWhite ? "text-custom-sky" : "opacity-70"
                      }`}
                    >
                      Card holder
                    </span>
                    <span className="text-sm lg:text-rg mt-1 text-nowrap">
                      {holder}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span
                      className={`uppercase text-tiny lg:text-xs text-nowrap ${
                        isWhite ? "text-custom-sky" : "opacity-70"
                      }`}
                    >
                      Valid thru
                    </span>
                    <span className="text-sm lg:text-rg mt-1 text-nowrap">
                      {valid}
                    </span>
                  </div>
                </div>
              </div>
              <div
                className={cn(
                  "flex justify-between items-center pl-5 py-4 pr-[17px] lg:py-5 lg:pl-5",
                  {
                    "black-card-footer": isBlack,
                    "border-t border-t-azure": isWhite,
                  }
                )}
              >
                <span className="text-rg lg:text-2xl font-semibold text-nowrap">
                  {number}
                </span>
                <MasterCardIcon
                  className={cn(
                    "ml-auto shrink-0 w-7 lg:w-auto h-4 lg:h-auto",
                    isBlack ? "text-white" : "text-manatee"
                  )}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
