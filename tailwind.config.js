/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
  safelist: ["bg-[#E6E6E6]", "bg-[#F2F2F2]", "text-white"],
};
