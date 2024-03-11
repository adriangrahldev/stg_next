import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@headlessui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
    }
  },
  plugins: [nextui({})],
};
export default config;
