import { currencyFormatter, dateFormatter, TRANSACTIONS } from "@/constants";
import { SectionTitle } from "./SectionTitle";
import { cn } from "@/utils";

export function RecentTransaction() {
  return (
    <div>
      <SectionTitle>Recent Transaction</SectionTitle>
      <div className="flex flex-col gap-2.5 white-section px-4 py-container lg:p-container">
        {TRANSACTIONS.map(
          ({ id, Icon, color, bgColor, title, date, amount, action }) => (
            <div key={id} className="flex items-center">
              <span
                className={`flex items-center justify-center w-[55px] h-[55px] rounded-full shrink-0`}
                style={{
                  backgroundColor: bgColor,
                }}
              >
                <Icon
                  style={{
                    color: color,
                  }}
                />
              </span>
              <div className="flex flex-col gap-1.5 ml-4 overflow-hidden">
                <p className="text-md font-medium overflow-hidden text-nowrap text-ellipsis">
                  {title}
                </p>
                <p className="text-rg text-custom-sky overflow-hidden text-nowrap text-ellipsis">
                  {dateFormatter.format(new Date(date))}
                </p>
              </div>
              <span
                className={cn(
                  "ml-auto text-md font-medium",
                  action === "added"
                    ? "text-received-money"
                    : "text-spent-money"
                )}
              >
                {action === "added" ? "+" : "-"}
                {currencyFormatter.format(amount)}
              </span>
            </div>
          )
        )}
      </div>
    </div>
  );
}
