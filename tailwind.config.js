/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        'Bone': '#ECE7E0',
        'Indigo': '#6600FF', 
      },
      fontFamily:{
        IbmPlexSans:['IBM Plex Sans', 'sans-serif'],
        Kleemax:['Kleemax', 'serif'],
        Nebula:['Nebula', 'serif']
      }
    },
  },
  plugins: [],
};
