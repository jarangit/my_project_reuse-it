/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'red': {
        light: '#F06852',
        DEFAULT: '#e84747',
        dark: '#',
      },
      "white": {
        DEFAULT: "#ffff"
      },
      "gray": {
        light:"#f7f7f7",
        DEFAULT: "#E5E4E2"
      },
      "black": {
        DEFAULT: "#000"
      },
      "green": {
        DEFAULT: "#65B2A0"
      },
      "yellow": {
        DEFAULT: "#f4b811"
      },
      "pink": {
        DEFAULT: "#ffe0e0"
      },
    }
  },
  plugins: [],
}