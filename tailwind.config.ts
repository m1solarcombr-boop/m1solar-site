import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        body: ["Inter", "system-ui", "-apple-system", "sans-serif"]
      },
      colors: {
        brand: {
          yellow: "#F7B500",
          orange: "#FF8C42",
          green: "#36B37E",
          dark: "#0F172A"
        }
      },
      boxShadow: {
        soft: "0 10px 40px rgba(15, 23, 42, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
