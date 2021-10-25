module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: {
          light: "var(--color-primary--light)",
          DEFAULT: "var(--color-primary)",
          dark: "var(--color-primary--dark)",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
