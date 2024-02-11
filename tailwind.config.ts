import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3C50E0",
        secundary: "#FCA311",
        dark: "#121212",
        "dark-light": "#181818",
        strokedark: "#2E3A47",
        "form-strokedark": "#3d4d60",
        "form-input": "#1d2a39",
        "meta-1": "#DC3545",
        "meta-2": "#EFF2F7",
        "meta-3": "#10B981",
        "meta-4": "#313D4A",
        "meta-5": "#259AE6",
        "meta-6": "#FFBA00",
        "meta-7": "#FF6766",
        "meta-8": "#F0950C",
        "meta-9": "#E5E7EB",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
