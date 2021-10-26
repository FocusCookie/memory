module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: {
          light: "var(--color--primary-light)",
          DEFAULT: "var(--color--primary)",
          dark: "var(--color--primary-dark)",
        },
        greyscale: {
          line: "#D6D8E7",
          offWhite: "#FCFCFC",
          inputBackground: "#EFF0F6",
          background: "#F7F7FC",
          placeholder: "#A0A3BD",
          label: "#6E7191",
          body: "#4E4B66",
          titleActive: "#14142B",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
