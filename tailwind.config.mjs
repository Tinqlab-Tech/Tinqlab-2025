/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./node_modules/rizzui/dist/*.{js,ts,jsx,tsx}", // ⚠️ Required this line to compile RizzUI style.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5A67D8",
        mainBlack: "#000000",
        mainGrey: "#FAFAFA",
      },
      backgroundImage: {
        herobg: "url('/images/herobg.png')",
        vectorone: "url('/images/subsidiaryvector.png')",
        shade: "url('/images/shade.png')",
        hero: "url('/images/cover.jpeg')",
        aboutus: "url('/images/aboutus.png')",
        arrowvector: "url('/images/vector.png')",
        arrowvector1: "url('/images/vector1.png')",
        arrowvector2: "url('/images/vector2.png')",
      },
      boxShadow: {
        "custom-primary": "4px 4px 25px 0 rgba(90, 103, 216, 0.2)",
      },
    },
  },
  plugins: [],
};
