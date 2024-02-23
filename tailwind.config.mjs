/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    colors: {
      LightGray: "hsl(0, 0%, 81%)",
      LightGrayishBlue: "hsl(210, 46%, 95%)",
      ModerateViolet: "hsl(263, 55%, 52%)",
      VeryDarkGrayishBlue: "hsl(217, 19%, 35%)",
      VeryDarkBlackishBlue: "hsl(219, 29%, 14%)",
      White: "hsl(0, 0%, 100%)",
    },
  },
  plugins: [],
};
