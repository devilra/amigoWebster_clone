/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        serviceText: {
          "0%": { fontSize: "4.5rem", opacity: "1" }, // 7xl
          "40%": { fontSize: "3rem", opacity: "1" }, // 5xl
          "100%": { fontSize: "3rem", opacity: "0" }, // fade
        },
        fadeInGrow: {
          "0%": { opacity: "0", transform: "scale(0.8)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        serviceText: "serviceText 2s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
};
