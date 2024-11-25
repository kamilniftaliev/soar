import { Cards } from "./dashboard/Cards";
import { ExpenseStatistics } from "./dashboard/ExpenseStatistics";
import { QuickTransfer } from "./dashboard/QuickTransfer";
import { RecentTransaction } from "./dashboard/RecentTransaction";
import { SectionTitle } from "./dashboard/SectionTitle";
import { WeeklyActivity } from "./dashboard/WeeklyActivity";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-3 gap-lg">
      <Cards />
      <RecentTransaction />
      <WeeklyActivity />
      <ExpenseStatistics />
      <QuickTransfer />
      <div className="col-span-2">
        <SectionTitle>Balance History</SectionTitle>
      </div>
    </div>
  );
}
