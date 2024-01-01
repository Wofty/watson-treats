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
        'menu-bg-hover': "url('shapes/menu-stroke.png')",
        'home-hero-bg': "url('images/home/hero-bg.webp')",
        'home-sec1-bg': "url('images/home/home-bg-s1-light.png')",
        'home-sec3-bg': "url('images/home/home-bg-s3.png')",

      },
      screens: {
        'xs': '320px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1200px',
        '2xl': '1536px',
      },


    }
  },

  plugins: [],
}

