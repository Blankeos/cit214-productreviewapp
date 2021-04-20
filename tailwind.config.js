module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#e89700", // our primary orange
        brown: {
          100: "#c09A6D",
          200: "#573F27",
          300: "#3b2d26", // my fave brown
        },
        darkGray: "#282f42",
        myOrange: "#ffa500",
      },
      fontFamily: {
        body: ["Poppins"],
        inter: ["Inter"],
      },
      transitionProperty: {
        width: "width",
      },
    },
  },
  variants: {
    extend: {
      scale: ["active"],
      outline: ["active"],
      position: ["focus-within"],
      width: ["responsive", "hover", "focus", "focus-within"],
      margin: ["focus-within"],
      padding: ["focus-within"],
      translate: ["focus-within"],
      transitionProperty: ["responsive", "motion-safe", "motion-reduce"],
      borderRadius: ["hover", "focus"],
    },
  },
  plugins: [],
};
