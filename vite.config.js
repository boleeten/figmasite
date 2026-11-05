import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Figma Code layer는 클라우드 환경에서 프록시를 거쳐 접속하므로
// 0.0.0.0 에서 열고 모든 호스트를 허용합니다.
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: Number(process.env.PORT) || 5173,
    strictPort: true,
    allowedHosts: true,
  },
})
