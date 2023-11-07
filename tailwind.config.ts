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
        // Text
        paragraphColour: "rgba(0, 0, 0, 0.75)",
        highlightColour: "rgba(0, 0, 0, 1)",
        dateColour: "rgba(0, 0, 0, 0.85)",
        titleColour: "rgba(0, 0, 0, 1)",
        descriptionColour: "rgba(0, 0, 0, 0.60)",
        captionColour: "rgba(0, 0, 0, 0.50)",
        // Border
        borderColourHover: "rgba(0, 0, 0, 0.85)"
      },
    },
  },
  plugins: [],
};
export default config;
