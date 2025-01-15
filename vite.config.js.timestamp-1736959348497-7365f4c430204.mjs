// vite.config.js
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///C:/Users/reebon/DogClub/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/reebon/DogClub/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueDevTools from "file:///C:/Users/reebon/DogClub/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
import svgLoader from "file:///C:/Users/reebon/DogClub/node_modules/vite-svg-loader/index.js";
var __vite_injected_original_import_meta_url = "file:///C:/Users/reebon/DogClub/vite.config.js";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    svgLoader(
      {
        svgoConfig: {
          // этот параметр для отображения Svg картинок
        }
      }
    )
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxyZWVib25cXFxcRG9nQ2x1YlwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxccmVlYm9uXFxcXERvZ0NsdWJcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL3JlZWJvbi9Eb2dDbHViL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXHJcblxyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xyXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcclxuaW1wb3J0IHZ1ZURldlRvb2xzIGZyb20gJ3ZpdGUtcGx1Z2luLXZ1ZS1kZXZ0b29scydcclxuaW1wb3J0IHN2Z0xvYWRlciBmcm9tICd2aXRlLXN2Zy1sb2FkZXInO1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcGx1Z2luczogW1xyXG4gICAgdnVlKCksXHJcbiAgICB2dWVEZXZUb29scygpLFxyXG4gICAgc3ZnTG9hZGVyKFxyXG4gICAgICB7XHJcbiAgICAgICAgc3Znb0NvbmZpZzoge1xyXG4gICAgICAgICAgLy8gXHUwNDREXHUwNDQyXHUwNDNFXHUwNDQyIFx1MDQzRlx1MDQzMFx1MDQ0MFx1MDQzMFx1MDQzQ1x1MDQzNVx1MDQ0Mlx1MDQ0MCBcdTA0MzRcdTA0M0JcdTA0NEYgXHUwNDNFXHUwNDQyXHUwNDNFXHUwNDMxXHUwNDQwXHUwNDMwXHUwNDM2XHUwNDM1XHUwNDNEXHUwNDM4XHUwNDRGIFN2ZyBcdTA0M0FcdTA0MzBcdTA0NDBcdTA0NDJcdTA0MzhcdTA0M0RcdTA0M0VcdTA0M0FcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICksXHJcbiAgXSxcclxuICByZXNvbHZlOiB7XHJcbiAgICBhbGlhczoge1xyXG4gICAgICAnQCc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMnLCBpbXBvcnQubWV0YS51cmwpKVxyXG4gICAgfVxyXG4gIH1cclxufSlcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUErUCxTQUFTLGVBQWUsV0FBVztBQUVsUyxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxpQkFBaUI7QUFDeEIsT0FBTyxlQUFlO0FBTHVJLElBQU0sMkNBQTJDO0FBUTlNLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUNKLFlBQVk7QUFBQSxJQUNaO0FBQUEsTUFDRTtBQUFBLFFBQ0UsWUFBWTtBQUFBO0FBQUEsUUFFWjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxjQUFjLElBQUksSUFBSSxTQUFTLHdDQUFlLENBQUM7QUFBQSxJQUN0RDtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
