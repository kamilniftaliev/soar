import { AccountsIcon } from "@/icons";
import { CreditCardsIcon } from "@/icons/CreditCards";
import { DashboardIcon } from "@/icons/Dashboard";
import { InvestmentsIcon } from "@/icons/Investments";
import { LoansIcon } from "@/icons/Loans";
import { MyPrivilegesIcon } from "@/icons/MyPrivileges";
import { ServicesIcon } from "@/icons/Services";
import { SettingIcon } from "@/icons/Setting";
import { TransactionsIcon } from "@/icons/Transactions";

export const ROUTES = [
  {
    path: "/",
    Icon: DashboardIcon,
    label: "Dashboard",
    pageTitle: "Overview",
  },
  {
    path: "/transactions",
    Icon: TransactionsIcon,
    label: "Transactions",
  },
  {
    path: "/accounts",
    Icon: AccountsIcon,
    label: "Accounts",
  },
  {
    path: "/investments",
    Icon: InvestmentsIcon,
    label: "Investments",
  },
  {
    path: "/credit-cards",
    Icon: CreditCardsIcon,
    label: "Credit Cards",
  },
  {
    path: "/loans",
    Icon: LoansIcon,
    label: "Loans",
  },
  {
    path: "/services",
    Icon: ServicesIcon,
    label: "Services",
  },
  {
    path: "/my-privileges",
    Icon: MyPrivilegesIcon,
    label: "My Privileges",
  },
  {
    path: "/setting",
    Icon: SettingIcon,
    label: "Setting",
  },
];
