import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    container: { center: true, padding: "1.25rem" },
    extend: {
      fontFamily: { sans: ["var(--font-sans)"], display: ["var(--font-display)"] },
      colors: {
        lambda: { 50:"#f4f7ff",100:"#e8efff",200:"#cfe0ff",300:"#a8c3ff",400:"#7aa1ff",500:"#4d7dff",600:"#2f5cf2",700:"#2446c2",800:"#1d3899",900:"#172d78" }
      },
      borderRadius: { xl: "14px", "2xl": "20px" },
      boxShadow: { card: "0 8px 30px rgba(0,0,0,0.06)", subtle: "0 2px 10px rgba(0,0,0,0.04)" },
      keyframes: { fadeUp: { "0%": { opacity:"0", transform:"translateY(6px)" }, "100%": { opacity:"1", transform:"translateY(0)" } } },
      animation: { appear: "fadeUp .35s ease-out both" }
    }
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio")]
};
export default config;
