import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5001, // Cambiar el puerto a 5001
    strictPort: true, // Evita que Vite use otro puerto si 5001 está ocupado
    host: true, // Permite el acceso desde la red
  },
});
