import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,ts,jsx,tsx,mdx}",
  //"
  // make sure it's pointing to the ROOT node_module
  "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {},
};
export const darkMode = "class";
export const plugins = [heroui()];
