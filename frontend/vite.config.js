import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      "/api": {
        target: "https://prompt-sage-backend.onrender.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "")  // Optionally remove '/api' from the path if needed
      }
    }
    
  }
})
