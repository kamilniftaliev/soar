import Image from "next/image";

import { MasterCardIcon } from "@/icons";
import { cn } from "@/utils";
import { SectionTitle } from "./SectionTitle";

const CARDS = [
  {
    id: "1",
    balance: "$5,756",
    holder: "Eddy Cusuma",
    valid: "12/22",
    number: "3778 **** **** 1234",
    theme: "black",
  },
  {
    id: "2",
    balance: "$5,756",
    holder: "Eddy Cusuma",
    valid: "12/22",
    number: "3778 **** **** 1234",
    theme: "white",
  },
];

export function Cards() {
  return (
    <div className="col-span-2">
      <div className="flex justify-between">
        <SectionTitle>My Cards</SectionTitle>
        <SectionTitle className="text-2md">See All</SectionTitle>
      </div>
      <div className="flex mt-5 gap-md sm:gap-lg overflow-hidden">
        {CARDS.map(({ id, balance, holder, valid, number, theme }) => {
          const isBlack = theme === "black";
          const isWhite = theme === "white";

          return (
            <div
              key={id}
              className={cn(
                "lato rounded-container overflow-hidden basis-64 sm:basis-80 shrink-0",
                {
                  "black-card text-white": isBlack,
                  "bg-white text-black border border-azure h-card": isWhite,
                }
              )}
            >
              <div className="flex flex-col gap-8 sm:px-5 sm:py-6">
                <div className="flex justify-between items-center">
                  <div className="flex flex-col">
                    <span className={cn(isWhite && "text-color-sky")}>
                      Balance
                    </span>
                    <span className="text-xl font-semibold">{balance}</span>
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
                      className={cn(
                        "uppercase text-xs text-nowrap",
                        isWhite ? "text-color-sky" : "opacity-70"
                      )}
                    >
                      Card holder
                    </span>
                    <span className="text-rg mt-1 text-nowrap">{holder}</span>
                  </div>
                  <div className="flex flex-col">
                    <span
                      className={cn(
                        "uppercase text-xs text-nowrap",
                        isWhite ? "text-color-sky" : "opacity-70"
                      )}
                    >
                      Valid thru
                    </span>
                    <span className="text-rg mt-1 text-nowrap">{valid}</span>
                  </div>
                </div>
              </div>
              <div
                className={cn(
                  "flex justify-between items-center sm:py-5 sm:pl-5 sm:pr-[17px]",
                  {
                    "black-card-footer": isBlack,
                    "border-t border-t-azure": isWhite,
                  }
                )}
              >
                <span className="text-2xl font-semibold text-nowrap">
                  {number}
                </span>
                <MasterCardIcon
                  className={cn(
                    "ml-auto shrink-0",
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
