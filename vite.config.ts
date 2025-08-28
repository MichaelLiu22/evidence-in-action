import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // 确保静态文件能被正确访问
  publicDir: 'public',
  build: {
    // 确保构建时复制所有静态文件
    copyPublicDir: true,
    rollupOptions: {
      // 确保 PDF 文件被包含在构建中
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
    },
  },
}));
