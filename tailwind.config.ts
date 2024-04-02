import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

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
              100: "#ebecf3"
            },
            secondary: {
              DEFAULT: "#bf94ff"
            }
          }
        }
      }
    })
  ]
};
export default config;
