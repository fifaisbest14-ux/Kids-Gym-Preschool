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
        base: "#FFFCF7",
        surface: "#FFF4E6",
        ink: {
          DEFAULT: "#2C2418",
          muted: "#7A6E5D",
        },
        brand: {
          DEFAULT: "#E8622C",
          dark: "#C44D1D",
          text: "#D4511C",
        },
        teal: {
          trust: "#2E9B8F",
        },
        honey: {
          accent: "#F5B942",
        },
        status: {
          success: "#3F8F4A",
          error: "#C0392B",
        },
      },
      fontFamily: {
        heading: ["var(--font-nunito)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        card: "12px",
        pill: "999px",
      },
      boxShadow: {
        soft: "0 2px 8px rgba(44,36,24,.06), 0 12px 32px rgba(44,36,24,.08)",
        card: "0 4px 16px rgba(44,36,24,.05)",
        floating: "0 16px 40px rgba(44,36,24,.12)",
      },
    },
  },
  plugins: [],
};

export default config;
