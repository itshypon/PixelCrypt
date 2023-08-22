export default {
    build: {
      rollupOptions: {
        input: {
          index : 'index.html',
          steg : 'steganography.html',
          style : 'style.css',  
          main: 'index.js', 
          steganography: 'steganography.min.js'// Update with your main entry point
          // Add other entry points if needed
        }
      }
    }
  }
  