module.exports = {
  content: [
      "./**/*.tsx",
      "./<custom directory>/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      extend: {
        // fontFamily: {
        //   Dm: ["DM Sans", "sans-serif"],
        // },
        backgroundImage: {
          'roadline': "url('./src/assets/roadmap-line.svg')",
        },
      },
  },
  plugins: [],
};
