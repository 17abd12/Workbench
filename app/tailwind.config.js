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
          primary: '#ffffff', // Light theme primary color
          secondary: '#f0f0f0', // Light theme secondary color
          text: '#333333', // Light theme text color
        },
        dark: {
          primary: '#1a1a1a', // Dark theme primary color
          secondary: '#333333', // Dark theme secondary color
          text: '#f0f0f0', // Dark theme text color
        },
      },
    },
  },
  darkMode: 'class', // Enable dark mode with a class
  plugins: [],
};
