module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#25A9A8",
          secondary: "#00033E",
          "base-100": "#ffffff",
        },
      },
      "dark",
    ],
  },
  plugins: [require("daisyui")],
}