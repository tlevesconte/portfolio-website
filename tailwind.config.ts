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
        paragraphColour: "rgba(0, 0, 0, 0.75)",
        highlightColour: "rgba(0, 0, 0, 0.85)",
        captionColour: "rgba(0, 0, 0, 0.50)",
        footerColour: "rgba(0, 0, 0, 0.40)"
      },
    },
  },
  plugins: [],
};
export default config;
