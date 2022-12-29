## 遇到的坑

 - 推荐node v16.16.0以上版本，不然会遇到`node:path`问题
 ``` shell
   failed to load config from XXX:\vite.config.ts
   error when starting dev server:
   Error: Cannot find module 'node:path'
 ```
原因是vite3依赖的某个包需要node v16.16.0以上才支持，如果之前安装了请用nvm切换，并删除之前的node_modules

 - Typescript 默认不支持.vue类型的模块，需要自定义的d.ts文件
 src/shims-vue.d.ts
 ``` ts
  declare module "*.vue" {
    import { DefineComponent } from "vue";
    const component: DefineComponent<{}, {}, any>;
    export default component;
  }
 ```

 - 使用JSX（TSX）在vue3的项目遇到的问题，vscode编辑器会提示错误，解决方案是在tsconfig.json里添加 "jsx": "preserve",
 ``` json
{
    "compilerOptions": {
        "declaration": true, /* 生成相关的 '.d.ts' 文件。 */
        "declarationDir": "./dist/types", /* '.d.ts' 文件输出目录 */
        "jsx": "preserve",
    },
    "include": [
        "./**/*.*",
        "./shims-vue.d.ts",
    ],
    "exclude": [
        "node_modules"
    ],
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": "true"
}

 ```

 - 在进行全局引入和单个局部引入组件时遇到的问题代码如下
 其中entry.ts如下
 ```  ts
  import {App} from 'vue'
  import MyButton from './button'
  import SFCButton from './SFCButton.vue'
  import JSXButton from './JSXButton'

  export {
      MyButton,
      SFCButton,
      JSXButton
  }

  export default {
      install(app:App):void{
          app.component(MyButton.name,MyButton)
          app.component(SFCButton.name,SFCButton)
          app.component(JSXButton.name,JSXButton)
      }
  }
 ```

 经过vite.config.ts的配置
 ``` ts
import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

const rollupOptions = {
  external:['vue','vue-router'],
  output:{
    globals:{
      vue:"Vue"
    }
  }
}


export default defineConfig({
    plugins:[
      vue(),
      vueJsx({}) 
    ],
    build:{
      rollupOptions,
      minify:false,
      lib:{
        entry:'./src/entry.ts',
        name:'SmartyUI',
        fileName:'smarty-ui',
        // 导出模块格式
        formats:['es',"umd","iife"]
      }
    }
})

 ```

 运行pnpm build,生成dist下三个文件
 ``` shell
  smarty-ui.iife.js
  smarty-ui.mjs
  smarty-ui.umd.js

 ```
 我们只用到ESMouldle`smarty-ui.mjs`，我在demo/esm文件下button.html,index.html分别使用局部引入和全局引入
 
 button.html
 ``` js
    import { createApp } from "vue/dist/vue.esm-bundler.js";
    import SmartyUI, {SFCButton,JSXButton,MyButton,} from "../../dist/smarty-ui.mjs";
    createApp({
        template: `<SButton/><JSXButton/><SFCButton/>`,
    })
      .component(SFCButton.name, SFCButton)
      .component(JSXButton.name, JSXButton)
      .component(MyButton.name, MyButton)
      .mount("#app");
 ```

 index.html 

 ``` js
    import {createApp} from "vue/dist/vue.esm-bundler.js"
    import  SmartyUI, { SFCButton,JSXButton,MyButton} from '../../dist/smarty-ui.mjs'
    createApp({
        template: `<SFCButton/><JSXButton/><MyButton/>`}).use(SmartyUI).mount('#app')

 ```

实际运行时JSXButton，MyButton都显示不出来，代码并没有运行起来，还给了提示
```
Failed to resolve component: MyButton,JSXButtonIf this is a native custom element, make sure to exclude it from component resolutionvia compilerOptions.isCustomElement. at <App> 
```
最后发现写组件的name属性拼写不对,MyButton写成~MxButton~,JSXButton写成~JsXButton~
```
export default defineComponent({
    name:"MxButton",
    render(){
        return h("button",null,"MyButton")
    }
})

export default defineComponent({
    name:'JsXButton',
    render(){
        return <button>JSX Button</button>
    }
})

```

问题来了，如果单页面的引入，是不会有这个问题。一旦全局注册app.use或者app.component注册就会检查name属性的匹配https://cn.vuejs.org/api/options-misc.html#name

- 引入unocss 的vscode问题,开始直接能用，现在不行，待定

- 引入unocss，pnpm build，会报错，解决办法是根据提示增加编译选项 cssCodeSplit vite.config.ts，简单解释一下原因： cssCodeSplit 这个选项是为了决定在编译的时候是否要独立输出 css。显然这里面应该选择为 true。

## 配置 Vitest 测试组件库需要以下三个库：

- vitest ：测试框架，用于执行整个测试过程并提供断言库、mock、覆盖率；

- happy-dom：是用于提供在 Node 环境中的 Dom 仿真模型；

- @vue/test-utils 工具库： Vue推荐的测试工具库。


## 在vite.config.ts 中增加Vitest配置会出现报错

- 解决的办法就是在 vite.config.ts 中增加一个类型定义声明

``` ts
 /// <reference types="vitest" />
```

## pnpm init 出现

``` shell
Oops! Something went wrong! :(

ESLint: 8.25.0

Error: Failed to load plugin '@typescript-eslint' declared in '.eslintrc.cjs': Cannot find module 'typescript'
lianxi@lianxideMacBook-Air smarty-ui-vite % pnpm lint 
```

- 解决方法

```
 pnpm i typescript
```


## Git Actions不生效的问题
- 现象自己生成的.github/workflows/xxx.yml不生效
- 具体原因尚未确定
- 解决方法 在Github官网Action里直接生成.github/workflows/xxx.yml，拉到本地。本地yml文件直接copy过去






