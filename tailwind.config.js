/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        sm: "0.175rem", // 14px (default)
        base: "0.175rem", // Change base font size to 14px (smaller than default 16px)
        lg: "0.175rem", // 16px (default size for lg)
        xl: "1.125rem", // 18px (default size for xl)
      },
    },
  },
  plugins: [],
};
