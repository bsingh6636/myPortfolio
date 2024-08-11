/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'faster-one' : ['Faster One' , 'system-ui'],
        'rubik-bubbles' : ['Rubik Bubbles' , 'system-ui'],
        'foldit-dotted' : ["Foldit", 'sans-serif'],
        'londrina-sketch-regular' : ["Londrina Sketch", 'sans-serif'],
        'rubik-vinyl-regular' : ["Rubik Vinyl", 'system-ui']
      }
    },
  },
  plugins: [],
}


