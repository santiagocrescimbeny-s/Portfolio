import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  // Integrations
  integrations: [react()],
  
  // Variables de entorno
  site: 'https://example.com',
  
  // Configuración de build
  output: 'static',
  
  // Otros ajustes
  vite: {
    ssr: {
      external: ['svgo']
    }
  }
});
