import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#343C6A",
        border: "#E6EFF5",
        black: "#232323",
        secondary: "#F5F7FA",
        "search-placeholder": "#8BA3CB",
        icon: "#718EBF",
        "active-icon": "#396AFF",
      },
      borderRadius: {
        input: "40px",
      },
      fontSize: {
        input: "15px",
      },
      lineHeight: {
        input: "18px",
      },
    },
  },
  plugins: [],
} satisfies Config;
