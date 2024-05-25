import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        home: {
          1: "#212121",
          2: "#F1F1F1",
          3: "#E73C37",
        },
        marquee: {
          bg: "#212121",
          text: "#F1F1F1",
        },
        about: {
          bg: "#CDEA68",
          text: "#212121",
        },
      },
    },
  },
  plugins: [],
};
export default config;
