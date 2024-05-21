/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/lib/**/*.js",
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': "url('https://res.cloudinary.com/dn5ks1ljf/image/upload/v1716221277/paws-bg_nkyk44.png')",
      }),
      backgroundColor: theme => ({
        'hero-bg': "#FFCDD2"
      }),
      colors: {
        dark: 'var(--text-dark)',
        accent: 'var(--accent-100)',
        // accent50: 'var(--accent-50)',
        secondary: 'var(--secondary)',

      },
    }
  },
  plugins: [
    require("flowbite/plugin")
  ],
};
