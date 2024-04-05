import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
//引入node.js内置模块path
/** Vite3.0版本以下写法*/
// const path = require('path');
/**  Vite3.0版本以上ES6写法*/
import path from "path";
/** 引入vite-plugin-svg-icons插件*/
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
/** 引入vite-svg-loader插件*/
import svgLoader from "vite-svg-loader";
/** 引入unocss*/
import UnoCss from "unocss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  /** 设置路径 方便部署到Github Page*/
  base: "/v3-vite-admin-js-master/",
  build: {
    outDir: "docs",
  },
  plugins: [
    vue(),
    /** Unocss*/
    UnoCss(),
    /** 将 SVG 静态图转化为 Vue 组件 */
    svgLoader({ defaultImport: "url" }),
    /** SVG */
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), "src/icons/svg")],
      symbolId: "icon-[dir]-[name]",
    }),
  ],
  resolve: {
    //配置路径别名@
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    //自动补全的文件扩展名列表
    extensions: [".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
  },
});
