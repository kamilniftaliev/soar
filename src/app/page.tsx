import { Cards } from "./dashboard/Cards";
import { RecentTransaction } from "./dashboard/RecentTransaction";
import { SectionTitle } from "./dashboard/SectionTitle";
import { WeeklyActivity } from "./dashboard/WeeklyActivity";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-3 gap-lg">
      <Cards />
      <RecentTransaction />
      <WeeklyActivity />
      <div>
        <SectionTitle>Expense Statistics</SectionTitle>
      </div>
      <div>
        <SectionTitle>Quick Transfer</SectionTitle>
      </div>
      <div className="col-span-2">
        <SectionTitle>Balance History</SectionTitle>
      </div>
    </div>
  );
}
