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
      fontSize: {
        xxs: ".625rem",
      },
      fontFamily: {
        body: ["Poppins"],
        inter: ["Inter"],
      },
      transitionProperty: {
        width: "width",
        height: "height",
        borderRadius: "rounded",
      },
      backgroundImage: (theme) => ({
        "login-img":
          "url('https://images.unsplash.com/photo-1587080413959-06b859fb107d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=810&q=80')",
      }),
    },
  },
  variants: {
    extend: {
      scale: ["active", "group-hover"],
      outline: ["active"],
      position: ["focus-within"],
      width: ["responsive", "hover", "focus", "focus-within"],
      margin: ["focus-within"],
      padding: ["focus-within"],
      translate: ["focus-within"],
      transitionProperty: [
        "responsive",
        "motion-safe",
        "motion-reduce",
        "active",
      ],
      borderRadius: ["hover", "focus", "active", "responsive"],
      opacity: ["disabled"],
      textColor: ["active"],
      backgroundColor: ["active"],
    },
  },
  plugins: [],
};
