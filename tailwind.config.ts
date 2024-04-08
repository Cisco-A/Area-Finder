import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        lightTheme: {
          primary: "#3366FF",
          secondary: "#2952CC",
          accent: "#061E66",
          neutral: "#1E1E1E",
          "base-100": "#FAFCFD",
          info: "#009dff",
          success: "#488a00",
          warning: "#de2100",
          error: "#f40039",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
