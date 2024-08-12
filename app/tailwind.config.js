/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Define colors for both light and dark themes
        light: {
          primary: '#f8f9fa', // Light theme primary color
          secondary: "linear-gradient(to right, #47D785, #3D63DD)", // Light theme secondary color
          text: '#f8f9fa', // Light theme text color
        },
        dark: {
          primary: '#1a1a1a', // Dark theme primary color
          secondary: '#333333', // Dark theme secondary color
          text: '#3D63DD', // Dark theme text color
        },
      },
    },
  },
  darkMode: 'class', // Enable dark mode with a class
  plugins: [],
};
