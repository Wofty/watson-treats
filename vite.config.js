import { defineConfig } from 'vite';

export default defineConfig({

  base: '/',
  build: {
    rollupOptions: {
      input: {
        home: '/index.html',
        about: '/about.html',
        catering: '/catering.html',
        cakes: '/cakes.html',
        teas: '/teas.html',

      }
    }
  }
});