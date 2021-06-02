module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      // Configure your color palette here
      brand: {
        primary: "#1F1F4B",
        secondary: "rgba(255, 255, 255, 0.07)",
        tertiary: "#2B2D6B",
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
