/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"], // Adjust based on your project structure
  theme: {
    extend: {
      colors: {
        primary: "linear-gradient(180deg, #A4BC46 0%, #85A019 100%)",
        secondary: "#363958",
      },
    },
  },
  plugins: [],
};


// module.exports = {
//     content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
//     theme: {
//       extend: {},
//     },
//     plugins: [],
//   };