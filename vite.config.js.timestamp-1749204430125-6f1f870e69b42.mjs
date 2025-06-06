// vite.config.js
import react from "file:///home/project/node_modules/@vitejs/plugin-react/dist/index.mjs";
import tailwindcss from "file:///home/project/node_modules/@tailwindcss/vite/dist/index.mjs";
import path from "path";
import safeParser from "file:///home/project/node_modules/postcss-safe-parser/lib/safe-parse.js";
import { fileURLToPath } from "url";
import { defineConfig } from "file:///home/project/node_modules/vite/dist/node/index.js";
var __vite_injected_original_import_meta_url = "file:///home/project/vite.config.js";
var __dirname = path.dirname(fileURLToPath(__vite_injected_original_import_meta_url));
var vite_config_default = defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    hmr: true
  },
  resolve: {
    alias: {
      "@": "/src",
      "@utils": path.resolve(__dirname, "src/utils"),
      "@content": path.resolve(__dirname, "src/content"),
      "@tailwind": path.resolve(__dirname, "src/tailwind"),
      "@ts-default": path.resolve(__dirname, "src/ts-default"),
      "@ts-tailwind": path.resolve(__dirname, "src/ts-tailwind")
    }
  },
  css: {
    postcss: {
      parser: safeParser
    }
  },
  assetsInclude: ["**/*.glb"]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Byb2plY3Qvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnXG5pbXBvcnQgdGFpbHdpbmRjc3MgZnJvbSAnQHRhaWx3aW5kY3NzL3ZpdGUnXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IHNhZmVQYXJzZXIgZnJvbSAncG9zdGNzcy1zYWZlLXBhcnNlcidcblxuaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCB9IGZyb20gJ3VybCc7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuXG4vLyBDb252ZXJ0IGltcG9ydC5tZXRhLnVybCB0byBfX2Rpcm5hbWUgZXF1aXZhbGVudFxuY29uc3QgX19kaXJuYW1lID0gcGF0aC5kaXJuYW1lKGZpbGVVUkxUb1BhdGgoaW1wb3J0Lm1ldGEudXJsKSk7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbcmVhY3QoKSwgdGFpbHdpbmRjc3MoKV0sXG4gIHNlcnZlcjoge1xuICAgIGhtcjogdHJ1ZVxuICB9LFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogJy9zcmMnLFxuICAgICAgJ0B1dGlscyc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvdXRpbHMnKSxcbiAgICAgICdAY29udGVudCc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvY29udGVudCcpLFxuICAgICAgJ0B0YWlsd2luZCc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvdGFpbHdpbmQnKSxcbiAgICAgICdAdHMtZGVmYXVsdCc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvdHMtZGVmYXVsdCcpLFxuICAgICAgJ0B0cy10YWlsd2luZCc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvdHMtdGFpbHdpbmQnKSxcbiAgICB9LFxuICB9LFxuICBjc3M6IHtcbiAgICBwb3N0Y3NzOiB7XG4gICAgICBwYXJzZXI6IHNhZmVQYXJzZXJcbiAgICB9XG4gIH0sXG4gIGFzc2V0c0luY2x1ZGU6IFsnKiovKi5nbGInXVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBeU4sT0FBTyxXQUFXO0FBQzNPLE9BQU8saUJBQWlCO0FBQ3hCLE9BQU8sVUFBVTtBQUNqQixPQUFPLGdCQUFnQjtBQUV2QixTQUFTLHFCQUFxQjtBQUM5QixTQUFTLG9CQUFvQjtBQU5xRyxJQUFNLDJDQUEyQztBQVNuTCxJQUFNLFlBQVksS0FBSyxRQUFRLGNBQWMsd0NBQWUsQ0FBQztBQUc3RCxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQztBQUFBLEVBQ2hDLFFBQVE7QUFBQSxJQUNOLEtBQUs7QUFBQSxFQUNQO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLO0FBQUEsTUFDTCxVQUFVLEtBQUssUUFBUSxXQUFXLFdBQVc7QUFBQSxNQUM3QyxZQUFZLEtBQUssUUFBUSxXQUFXLGFBQWE7QUFBQSxNQUNqRCxhQUFhLEtBQUssUUFBUSxXQUFXLGNBQWM7QUFBQSxNQUNuRCxlQUFlLEtBQUssUUFBUSxXQUFXLGdCQUFnQjtBQUFBLE1BQ3ZELGdCQUFnQixLQUFLLFFBQVEsV0FBVyxpQkFBaUI7QUFBQSxJQUMzRDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLEtBQUs7QUFBQSxJQUNILFNBQVM7QUFBQSxNQUNQLFFBQVE7QUFBQSxJQUNWO0FBQUEsRUFDRjtBQUFBLEVBQ0EsZUFBZSxDQUFDLFVBQVU7QUFDNUIsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
