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
          line: "var(--color--greyscale-line)",
          offWhite: "var(--color--greyscale-offWhite)",
          inputBackground: "var(--color--greyscale-inputBackground)",
          background: "var(--color--greyscale-background)",
          placeholder: "var(--color--greyscale-)",
          label: "var(--color--greyscale-label)",
          body: "var(--color--greyscale-body)",
          titleActive: "var(--color--greyscale-titleActive)",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
