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
      }, 'dark',
      // {
      //   dark: {
      //     primary: "#D9F99D",
      //     secondary: "#FDE68A",
      //     accent: "#4B5563",
      //     neutral: "#F3F4F6",
      //     "base-100": "#1F2937",
      //     info: "#98A8DD",
      //     success: "#1BBB70",
      //     warning: "#F59E0B",
      //     error: "#FB7185",
      //   },
      // },
    ],
  },
  plugins: [require("daisyui")],
}