/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily:{
      Ibm:['var(--font-ibm)'],
      Kleemax:['var(--font-kleemax)'],
      Nebula:['var(--font-nebula)']
    },
    extend: {
      colors:{
        'Bone': '#ECE7E0',
        'Indigo': '#6600FF', 
      },
    },
  },
  plugins: [],
};
