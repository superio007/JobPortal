// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       '/api': {
//         target: 'http://localhost:3001',
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/api/, '')
//       }
//     }
//   }
// })


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: process.env.NODE_ENV === 'development' ? {
      '/api': {
        target: 'https://json-deploy-job-portal-7nd3fwju6-superio007s-projects.vercel.app/db.json',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    } : {},
  }
})
