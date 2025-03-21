/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"], // Adjust based on your project structure
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF", // Example primary color (Tailwind blue-800)
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