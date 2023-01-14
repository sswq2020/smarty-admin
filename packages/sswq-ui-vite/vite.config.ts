/// <reference types="vitest" />
import { defineConfig, Plugin } from 'vite';
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Unocss from './config/unocss'
import { UserConfig } from 'vite';

const rollupOptions = {
  external: ['vue', 'vue-router'],
  output: {
    globals: {
      vue: "Vue"
    }
  }
}

export const config = {
  plugins: [
    vue() as Plugin,
    vueJsx({}) as Plugin,
    Unocss() as Plugin[]
  ],
  build: {
    rollupOptions,
    minify: 'terser', // boolean | 'terser' | 'esbuild'
    sourcemap: true, // 输出单独 source文件
    reportCompressedSize:true,
    cssCodeSplit: true,
    lib: {
      entry: './src/entry.ts',
      name: 'SswqUI',
      fileName: 'sswq-ui',
      // 导出模块格式
      formats: ['es','esm',"umd", "iife"]
    },
    outDir:'./dist'
  },
  test: {
    // enable jest-like global test APIs
    globals: true,
    // simulate DOM with happy-dom
    // (requires installing happy-dom as a peer dependency)
    environment: 'happy-dom',
    // 支持tsx组件，很关键
    transformMode: {
      web: [/.[tj]sx$/]
    }
  }
}
// https://vitejs.dev/config/
export default defineConfig(config as UserConfig)