import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "deep-blue-black":
          "linear-gradient(135deg, #000428 0%, #004e92 50%, black 100%)",
        "purple-black":
          "linear-gradient(135deg, #654ea3 0%, #eaafc8 50%, black 100%)",
        "green-black": "linear-gradient(135deg, #0f9b0f 0%, #000000 100%)",
        "red-black":
          "linear-gradient(135deg, #ff416c 0%, #ff4b2b 50%, black 100%)",
        "gold-black": "linear-gradient(135deg, #D4AF37 0%, black 100%)",
        "gemini-style-gradient":
          "linear-gradient(135deg, #ffffff 0%, #1c202e 50%, black 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
