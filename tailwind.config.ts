import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        sm: "2rem",
        md: "4rem",
      },
    },
    extend: {
      colors: {
        softGray: "#e7ecef",
        black: "#040404",
        darkGray: "#8b8c89",
        primaryColor: "#274c77",
        lightBlue: "#6096ba",
        darkBlue: "#13505b",
        success: "#7ebc89",
      },
    },
  },
  plugins: [],
} satisfies Config;
