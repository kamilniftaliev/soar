import type { Config } from "tailwindcss";

export default {
  content: ["./src/components/**/*.{ts,tsx}", "./src/app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#343C6A",
        gray: "#E6EFF5",
        black: "#232323",
        secondary: "#F5F7FA",
        smoke: "#F4F5F7",
        placeholder: "#8BA3CB",
        "custom-sky": "#718EBF",
        blue: "#396AFF",
        azure: "#DFEAF2",
        manatee: "#9199AF",
        "received-money": "#41D4A8",
        "spent-money": "#FF4B4A",
      },
      borderRadius: {
        input: "40px",
        container: "25px",
        medium: "15px",
        small: "10px",
      },
      fontSize: {
        tiny: ["10px", "12px"],
        xss: ["11px", "13px"],
        xs: ["12px", "14px"],
        sm: ["13px", "15px"],
        rg: ["15px", "18px"],
        md: ["16px", "19px"],
        "2md": ["17px", "20px"],
        xl: ["20px", "24px"],
        "2xl": ["22px", "26px"],
      },
      lineHeight: {
        input: "18px",
      },
      padding: {
        container: "25px",
        "big-container": "30px",
      },
      gap: {
        md: "20px",
        lg: "30px",
      },
      height: {
        card: "235px",
      },
      width: {
        "circle-btn": "50px",
      },
    },
  },
  plugins: [],
} satisfies Config;
