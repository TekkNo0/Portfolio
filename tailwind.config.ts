import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: "#05070e",
          surface: "#0c1222",
          card: "#111a30",
          border: "#1e293b",
          cyan: "#00f0ff",
          blue: "#0284c7",
          electric: "#38bdf8",
          emerald: "#10b981",
          muted: "#94a3b8",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        "cyan-glow": "0 0 25px rgba(0, 240, 255, 0.25)",
        "cyan-glow-sm": "0 0 10px rgba(0, 240, 255, 0.3)",
        "blue-glow": "0 0 25px rgba(2, 132, 199, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
