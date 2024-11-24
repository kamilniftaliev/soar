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
        "color-sky": "#718EBF",
        blue: "#396AFF",
        azure: "#DFEAF2",
      },
      borderRadius: {
        input: "40px",
        container: "25px",
        medium: "15px",
        small: "10px",
      },
      fontSize: {
        small: "15px",
        sm: ["13px", "15px"],
        md: ["16px", "19px"],
        xl: ["20px", "24px"],
      },
      lineHeight: {
        input: "18px",
      },
      padding: {
        container: "25px",
        "big-container": "30px",
      },
    },
  },
  plugins: [],
} satisfies Config;
