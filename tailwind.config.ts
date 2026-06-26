import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          400: "#2BC25C",
          500: "#15A045", // primary, from logo button
          600: "#0E7A3B",
          700: "#0B5E2E",
        },
        lime: {
          300: "#A8E36A",
          400: "#86D44F",
        },
        forest: {
          700: "#0E4634",
          800: "#0A3527",
          900: "#06231A",
        },
        gold: {
          400: "#F0BC5E",
          500: "#E0A23D",
        },
        mist: {
          50: "#F3F8F3",
          100: "#E8F1E9",
          200: "#D8E7DA",
        },
        ink: {
          DEFAULT: "#0B1F16",
          soft: "#385448",
        },
        // semantic
        strong: "#0B1F16",
        body: "#335144",
        muted: "#6E877C",
        surface: "#F3F8F3",
      },
      fontFamily: {
        display: ["var(--font-sora)", "system-ui", "sans-serif"],
        body: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        sm: "12px",
        md: "18px",
        lg: "26px",
        xl: "34px",
        pill: "999px",
      },
      boxShadow: {
        sm: "0 1px 3px rgba(10,53,39,.04)",
        md: "0 6px 18px -14px rgba(10,53,39,.12)",
        lg: "0 14px 38px -26px rgba(8,34,24,.20)",
        glow: "0 8px 24px -18px rgba(21,160,69,.24)",
        "glow-hover": "0 12px 32px -18px rgba(21,160,69,.32)",
      },
      maxWidth: {
        wrap: "1200px",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(.2,.7,.2,1)",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(26px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
