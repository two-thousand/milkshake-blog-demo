// vite.config.ts
import { defineConfig } from 'vite';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url'; // Import fileURLToPath

// Get the directory name of the current module file
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        // Add this line to include article.html as an entry point
        article: resolve(__dirname, 'article.html'), // Assuming the file is named article.html in your root
      },
    },
  },
  // ... other Vite configuration options
});