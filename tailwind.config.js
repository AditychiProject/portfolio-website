/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "24px",
    },
    extend: {
      colors: {
        primary: "#1F2937",
        paragraph: "#6B7280",
        light: "#FFFFFF",
        section: "#F3F4F6",
      },
      boxShadow: {
        main: "0 4px 8px 0px rgba(31, 41, 55, 0.2)",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
