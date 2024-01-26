import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./stories/*.{js,ts,jsx,tsx,mdx}",
    "./stories/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      light: {
        colors: {
          background: "#F7F7F7",
          primary: {
            50: "#ffe2fc",
            100: "#ffb1eb",
            200: "#ff7fdc",
            300: "#ff4dcd",
            400: "#fe1ebe",
            500: "#fe1ebe",
            600: "#e507a5",
            700: "#b30080",
            800: "#81005b",
            900: "#4f0038",
            DEFAULT: "#FF4ECD",
            foreground: "#18181B"
          },
          secondary: {
            50: "#e0fafe",
            100: "#c0e8ee",
            200: "#9ed6e0",
            300: "#7ac6d2",
            400: "#57b6c4",
            500: "#3e9caa",
            600: "#2d7a85",
            700: "#1c5760",
            800: "#09353b",
            900: "#001317",
            DEFAULT: "#3e9caa",
            foreground: "#e0fafe"
          },
          danger: {
            50: "#FEDDCD",
            100: "#FDB49C",
            200: "#FB816B",
            300: "#F75146",
            400: "#F75146",
            500: "#f20b10",
            600: "#D0081D",
            700: "#AE0526",
            800: "#8C032A",
            900: "#74022C",
            DEFAULT: "#f20b10",
            foreground: "#FDB49C"
          },
          warning: {
            100: "#FFFAD5",
            200: "#FFF5AC",
            300: "#FFEE82",
            400: "#FFE763",
            500: "#FFDC30",
            600: "#DBB823",
            700: "#B79718",
            800: "#93760F",
            900: "#7A5F09",
            DEFAULT: "#FFDC30",
            foreground: "#FFFAD5"
          },
          success: {
            100: "#E5FCDE",
            200: "#C7F9BF",
            300: "#9EED9A",
            400: "#7CDC81",
            500: "#53C664",
            600: "#3CAA57",
            700: "#298E4B",
            800: "#1A7240",
            900: "#0F5F39",
            DEFAULT: "#53C664",
            foreground: "#E5FCDE"
          }
        }
      },
      dark: {
        colors: {
          background: "#18181B",
          primary: {
            100: "#FFF2F2",
            200: "#FFE5E8",
            300: "#FFD9E0",
            400: "#FFCFDD",
            500: "#FFC0D9",
            600: "#DB8CB3",
            700: "#B76094",
            800: "#933D79",
            900: "#7A2468",
            DEFAULT: "#FFC0D9",
            foreground: "#F7F7F7"
          },
          secondary: {
            100: "#EAFDF9",
            200: "#D7FBF7",
            300: "#BEF3F1",
            400: "#A8E3E7",
            500: "#8ACDD7",
            600: "#64A7B8",
            700: "#45829A",
            800: "#2C5F7C",
            900: "#1A4467",
            DEFAULT: "#8ACDD7",
            foreground: "#EAFDF9"
          },
          danger: {
            100: "#FFEDE3",
            200: "#FFD7C9",
            300: "#FFBCAE",
            400: "#FFA299",
            500: "#FF7878",
            600: "#DB5763",
            700: "#B73C51",
            800: "#932642",
            900: "#7A1739",
            DEFAULT: "#FF7878",
            foreground: "#FDB49C"
          },
          warning: {
            100: "#FFFAE0",
            200: "#FFF4C1",
            300: "#FFECA3",
            400: "#FFE58C",
            500: "#FFD966",
            600: "#DBB34A",
            700: "#B78F33",
            800: "#936E20",
            900: "#7A5613",
            DEFAULT: "#FFD966",
            foreground: "#FFFAE0"
          },
          success: {
            100: "#F1FEF1",
            200: "#E4FDE6",
            300: "#D5FADC",
            400: "#C8F6D5",
            500: "#B5F1CC",
            600: "#84CFA8",
            700: "#5BAD8B",
            800: "#398B71",
            900: "#227361",
            DEFAULT: "#B5F1CC",
            foreground: "#F1FEF1"
          }
        }
      }
    }
  })],

};
export default config;
