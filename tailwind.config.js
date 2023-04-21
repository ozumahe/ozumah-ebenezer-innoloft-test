/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      primaryColor: "#272E71",
      appBackgroundColor: "#F9FAFB",
    },
  },
  plugins: [require("daisyui")],
};
