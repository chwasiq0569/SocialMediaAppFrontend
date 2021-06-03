module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      // Configure your color palette here
      brand: {
        primary: "#FFFAFA",
        secondary: "#F7F7F8",
        tertiary: "#022F96",
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
