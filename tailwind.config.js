/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Enables dark mode toggling
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        spinPerspective: {
          "0%": { transform: "rotateX(0deg) rotateY(0deg)" },
          "100%": { transform: "rotateX(360deg) rotateY(360deg)" },
        },
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        scale: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.2)" },
        },
        colorChange: {
          "0%, 100%": { color: "#ff69b4" },
          "50%": { color: "#00bfff" },
        },
      },
      animation: {
        "spin-perspective": "spinPerspective 5s infinite linear",
        pulse: "pulse 2s infinite ease-in-out",
        scale: "scale 2s infinite ease-in-out",
        colorChange: "colorChange 2s infinite ease-in-out",
        spin: "spin 1s linear infinite",
      },
    },
  },
  plugins: [],
};
