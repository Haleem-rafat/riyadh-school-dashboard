module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: true,
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "821px",
      // => @media (min-width: 768px) { ... }
      lg: "1366px",
      // => @media (min-width: 1025px) { ... }
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serifAR: ["Cairo"],
      serifEN: ["Roboto"],
      mono: ["ui-monospace", "SFMono-Regular"],
      display: ["Oswald"],
      body: ["Almarai"],
    },
    extend: {
      colors: {
        background: {
          DEFAULT: "#F0F4F9",
        },
        primary: {
          DEFAULT: "#35746B",
          veryLight: "#F6F8FC",
        },
        gray: {
          DEFAULT: "#646D82",
          veryLight: "#E9E9F0",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
