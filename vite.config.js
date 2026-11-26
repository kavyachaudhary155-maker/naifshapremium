import { defineConfig } from 'vite';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        home: resolve(root, 'index.html'),
        story: resolve(root, 'story.html'),
        collections: resolve(root, 'collections.html'),
        lookbook: resolve(root, 'lookbook.html'),
        journal: resolve(root, 'journal.html'),
        atelier: resolve(root, 'atelier.html'),
        contact: resolve(root, 'contact.html')
      }
    }
  }
});
