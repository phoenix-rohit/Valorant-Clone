/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px", // Mobile Landscape
      msm: "600px",
      md: "768px", // Tablet Portrait
      mdm: "850px",
      lg: "1024px", // Table Landscape
      xl: "1280px", // Desktop
      "2xl": "1440px", // Large Desktop
    },

    fontFamily: {
      oswald: ["Oswald", "ui-sans-serif", "system-ui"],
      montserrat: ["Montserrat", "ui-sans-serif"],
      sans: ["Poppins", "ui-sans-serif"],
      sora: ["Sora", "ui-sans-serif"],
    },
    extend: {
      colors: {
        "ui-red": "#FF4654",
        "ui-gray": "#1C1C1C",
        "ui-rich-black": "#19222D",
      },
      backgroundImage: {
        "dark-valo-bg": "url('/dark-valo-bg.jpg')",
        "valo-download": "url('/download-bg.jpg')",
        loading: "url('/loading-screen.jpg')",
        valo: "url('/background-valorant.png')",
        "valo-white": "url('/valorant-white.png')",
        "white-valo-bg": "url('/white-valo-bg.jpg')",
        "connection-errror-bg": "url('/connection-error.jpg')",
        "matrix-bg": "url('/matrix-bg.jpg')",
        "home-2": "url('/home_2.jpg')",
        "agent-1-bg": "url('/agents-bg-1.jpg')",
        "map-1-bg": "url('/maps-1.jpg')",
        "login-1": "url('/jett-login.jpg')",
        "login-1-dark": "url('/jett-login-dark.jpg')",
      },
    },
  },
  plugins: [],
};
