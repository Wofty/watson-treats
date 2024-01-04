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
        'primary': '#f3c7b4',
        'secondary': '#dc6434',
        'ecru-white': '#fbfbf4',
        'gray-chateau': '#2a2f3a',
        'apricot': '#e79979',
        'cashmere': '#e4b6a4',
        'regent-gray': '#505a66',
        'ghost': '#cbccd1',
        'mandys-pink': '#f3c7b4',

      },
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
        'serif': ['Merriweather', 'serif'],
        'cursive': ['Playball', 'cursive'],
        'sevillan': ['Sevillana', 'cursive'],

      },
      backgroundImage: {
        //menu hover

        'menu-bg-hover': "url('/shapes/menu-stroke.png')",

        'hero-about': "url('/images/about/hero-about-test.jpg')",

        'home-hero-bg': "url('/images/home/hero-bg.webp')",
        //section bg
        'section-bg-1': "url('/images/bg/section_bg-1.png')",
        'section-bg-2': "url('/images/bg/section_bg-2.png')",

        // home bg
        'home-sec1-bg': "url('/images/home/home-bg-s1-light.png')",
        'home-sec3-bg': "url('/images/home/bg-home.png')",


        //separators
        'separator-1': "url('/shapes/separator_02.png')",
        'separator-2': "url('/shapes/separator_02.png')",
      },
      screens: {
        'xs': '320px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1200px',
        '2xl': '1536px',
      },
      listStyleType: {

        'circle': 'circle',

      },


    }
  },

  plugins: [],
}

