import { CardToCardIcon, MoneyIcon, PayPalIcon } from "@/icons";

export const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumSignificantDigits: 3,
});

export const TRANSACTIONS = [
  {
    id: "1",
    Icon: CardToCardIcon,
    color: "#FFBB38",
    bgColor: "#fff5d9",
    title: "Deposit from my Card",
    date: "2021-01-28",
    amount: 850,
    action: "subtracted",
  },
  {
    id: "2",
    Icon: PayPalIcon,
    color: "#396AFF",
    bgColor: "#e7edff",
    title: "Deposit Paypal",
    date: "2021-01-25",
    amount: 2500,
    action: "added",
  },
  {
    id: "3",
    Icon: MoneyIcon,
    color: "#16DBCC",
    bgColor: "#dcfaf8",
    title: "Jemi Wilson",
    date: "2021-01-21",
    amount: 5400,
    action: "added",
  },
];
