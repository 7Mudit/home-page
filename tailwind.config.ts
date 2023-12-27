import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
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
  plugins: [],
};
export default config;
