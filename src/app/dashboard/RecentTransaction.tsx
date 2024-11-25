import { currency, TRANSACTIONS } from "@/constants";
import { SectionTitle } from "./SectionTitle";
import { cn } from "@/utils";

export function RecentTransaction() {
  return (
    <div>
      <SectionTitle>Recent Transaction</SectionTitle>
      <div className="flex flex-col gap-2.5 white-section p-container">
        {TRANSACTIONS.map(
          ({ id, Icon, color, bgColor, title, date, amount, action }) => (
            <div key={id} className="flex items-center">
              <span
                className={`flex items-center justify-center w-[55px] h-[55px] rounded-full`}
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
              <div className="flex flex-col gap-1.5 ml-4">
                <p className="text-md font-medium">{title}</p>
                <p className="text-rg text-color-sky">{date}</p>
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
                {currency.format(amount)}
              </span>
            </div>
          )
        )}
      </div>
    </div>
  );
}
