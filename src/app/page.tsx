import { BalanceHistory } from "./dashboard/BalanceHistory";
import { Cards } from "./dashboard/Cards";
import { ExpenseStatistics } from "./dashboard/ExpenseStatistics";
import { QuickTransfer } from "./dashboard/QuickTransfer";
import { RecentTransaction } from "./dashboard/RecentTransaction";
import { WeeklyActivity } from "./dashboard/WeeklyActivity";

export default function Dashboard() {
  return (
    <div className="grid auto-cols-fr lg:grid-cols-3 gap-y-5 lg:gap-lg">
      <Cards />
      <RecentTransaction />
      <WeeklyActivity />
      <ExpenseStatistics />
      <QuickTransfer />
      <BalanceHistory />
    </div>
  );
}
