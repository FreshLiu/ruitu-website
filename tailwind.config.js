/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  corePlugins: { preflight: false },
  theme: {
    screens: {
      md: "768px",
      lg: "1024px",
    },
    extend: {
      colors: {
        brand: {
          blue: "#2B5CFF",
          orange: "#FF6B3D",
          ink: "#101321",
        },
      },
      maxWidth: {
        page: "1140px",
      },
    },
  },
  plugins: [],
};
