
import tailwindcss from 'tailwindcss';

export default {
  plugins: [tailwindcss()],
    build: {
      rollupOptions: {
        input: {
          index : 'index.html',
          style : 'style.css',  
          main: 'index.js', 
          steganography: 'steganography.min.js'// Update with your main entry point
          // Add other entry points if needed
        }
      }
    }
  }
  