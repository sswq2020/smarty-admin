import * as path from 'path'
import * as fs from "fs-extra"
import {config} from '../vite.config'
import {build, defineConfig, FSWatcher, InlineConfig, UserConfig} from 'vite'

const buildAll = async () => { 

// 1. 导入vite.config中的配置，使用vite的build方法进行全量打包
 await build(defineConfig(config as UserConfig) as InlineConfig)

 // 2. 读取文件夹 遍历组件库文件夹
const srcDir = path.resolve(__dirname,'../src/'); // ./dist/button
fs.readdirSync(srcDir)
  .filter((name)=>{
   // 过滤文件只保留index.ts
   const componentDir = path.resolve(srcDir,name);
   const isDir = fs.lstatSync(componentDir).isDirectory();
   return isDir && fs.readdirSync(componentDir).includes('index.ts')
  })
  .forEach(async(name)=>{
    // 文件夹遍历
    const outDir = path.resolve(config.build.outDir,name)  
    const custom = {
        lib:{
            entry:path.resolve(srcDir,name),
            name,
            // 导出模块名
            fileName:'index',
            formats:['es','esm','umd']       
        },
        outDir
    }
    Object.assign(config.build,custom);
    await build(defineConfig(config as UserConfig) as InlineConfig);

    fs.outputFile(
        path.resolve(outDir,'package.json'),
        `{
            "name":"sswq-ui-vite/${name}",
            "main":"index.umd.js",
            "module":"index.umd.js"
        }`,
        `utf-8`
    )
  })
}

buildAll()


  

