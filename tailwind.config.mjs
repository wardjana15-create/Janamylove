import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  corePlugins: {
    // disable aspect ratio as per docs -> https://tailwindcss.com/docs/aspect-ratio
    aspectRatio: false,
    // disable preflight to avoid css issues with astro-mdx
    preflight: false,
  },
  theme: {
    extend: {
      fontFamily: {
        // Add any custom fonts here
        mono: ["IBM Plex Mono", ...fontFamily.mono],
      },
      colors: {
        // Add any custom colors here
      },
      // https://tailwindcss.com/docs/typography-plugin
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            "h1,h2,h3,h4": {
              "scroll-margin-top": "var(--scroll-mt)",
            },
            "thematic-break": {
              "border-top": "1px solid rgb(229 231 235)",
            },
          },
        },
        dark: {
          css: {
            "thematic-break": {
              "border-top": "1px solid rgb(55 65 81)",
            },
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};

export default config;
