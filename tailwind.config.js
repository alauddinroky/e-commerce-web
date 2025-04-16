/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fff5f0",    // Very light shade
          100: "#ffe6d9",   // Light shade
          200: "#ffc6ad",   // Slightly darker shade
          300: "#ffa37e",   // Medium shade
          400: "#ff7f4c",   // Brighter shade
          500: "#f36d22",   // Base color (close to #ee6d1c)
          600: "#d85f1d",   // Darker shade
          700: "#ee6d1c",   // Your specified shade
          800: "#9e3d0f",   // Very dark shade
          900: "#7a2e0b",   // Deepest shade
          950: "#451808",   // Almost black
        }        
      },
    },
  },
  plugins: [],
};
