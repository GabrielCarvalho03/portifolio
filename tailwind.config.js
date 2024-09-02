/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderWidth: {
        0.5: "0.5px",
      },
      colors: {
        primary: "#11151A",
        blueOcean: "#0468FD",
        gray: {
          100: "#35353",
        },
      },
    },
  },
  plugins: [],
};
