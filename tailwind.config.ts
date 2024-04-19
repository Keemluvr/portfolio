import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "0",
        sm: "0",
        lg: "0",
        xl: "0",
        "2xl": "0"
      }
    },
    extend: {
      colors: {}
    }
  },
  darkMode: "class",
  plugins: [
    nextui({
      layout: {},
      defaultTheme: "dark",
      themes: {
        light: {
          layout: {},
          colors: {}
        },
        dark: {
          layout: {},
          colors: {
            background: "#111111",
            primary: {
              DEFAULT: "#111111",
              100: "#ebecf3",
              200: "#232323",
              900: "#080808"
            },
            secondary: {
              DEFAULT: "#bf94ff",
              600: "#b380ff"
            }
          }
        }
      }
    }),
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".horizontal-tb": {
          writingMode: "horizontal-tb"
        },
        ".vertical-rl": {
          writingMode: "vertical-rl"
        },
        ".vertical-lr": {
          writingMode: "vertical-lr"
        }
      };
      addUtilities(newUtilities);
    })
  ]
};
export default config;
