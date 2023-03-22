/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
        extend: {
          colors: {
            error: "string",
            main: "#58662E",
            dark: "#131612",
            darkGrey: "#242A23",
            grey: "#4C594A",
            lightGrey: "#758C73",
            white: "#F7F8F7",
          },
          animation: {
            collapse: "max-height 0.3s ease-in-out",
          }
        },
    },
    plugins: [],
}
