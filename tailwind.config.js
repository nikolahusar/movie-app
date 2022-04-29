module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        300: "300px",
        200: "200px",
        250: "250px",
        400: "400px",
        320: "320px",
        100: "100px",
        160: "160px",
      },
      height: {
        500: "500px",
        320: "320px",
      },
      screens: {
        xl: { max: "1279px" },
        lg: { max: "1024px" },
        md: { max: "768px" },
        sm: { max: "640px" },
      },
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      top: {
        topCalc: "calc(100% + .25rem)",
      },
      flex: {
        2: "2 2 0%",
        3: "3 3 0%",
      },

      display: ["group-focus"],
    },
  },
  plugins: [],
};
