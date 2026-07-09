import { defineConfig } from 'vite'
// Use the SWC-based React plugin which is commonly available
// and avoids missing type issues with @vitejs/plugin-react-swc
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
