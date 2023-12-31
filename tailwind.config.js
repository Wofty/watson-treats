/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./**.{html,js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#102756',
        'secondary': '#dc6434',
        'ecru-white': '#fbfbf4',
        'gray-chateau': '#9da5b2',
        'apricot': '#e79979',
        'cashmere': '#e4b6a4',
        'regent-gray': '#7c8c9c',
        'ghost': '#cbccd1',
        'mandys-pink': '#f3c7b4'
      },
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
        'serif': ['Merriweather', 'serif'],
        'cursive': ['Playball', 'cursive'],

      },
      backgroundImage: {
        'hero-about': "url('images/about/hero-about-test.jpg')",
        'menu-bg-hover': "url('shapes/menu-stroke.png')"
      },


    }
  },

  plugins: [],
}

