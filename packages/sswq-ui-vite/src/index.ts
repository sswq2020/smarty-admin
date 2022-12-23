import { createApp } from "vue/dist/vue.esm-bundler.js";

import "uno.css";
import SmartyUI from "./entry";
createApp({
  template: `
        <div>
           <SButton color="blue">
           蓝色按钮
           </SButton>
           <SButton color="green">
           绿色按钮
           </SButton>
           <SButton color="gray">
           灰色按钮
           </SButton>
           <SButton color="yellow">
           黄色按钮
           </SButton>
           <SButton color="red">
           红色按钮
           </SButton>
        </div>
        <div>
        <SButton color="blue" size="medium" plain="true">蓝色按钮</SButton>
        <SButton color="green" size="medium" plain="true">绿色按钮</SButton>
        <SButton color="gray" size="medium" plain="true">灰色按钮</SButton>
        <SButton color="yellow" size="medium" plain="true">黄色按钮</SButton>
        <SButton color="red" size="medium" plain="true">红色按钮</SButton>
       </div>

       <div>
       <SButton color="blue" size="large" :round="true" >蓝色按钮</SButton>
       <SButton color="green" size="large">绿色按钮</SButton>
       <SButton color="gray" size="large">灰色按钮</SButton>
       <SButton color="yellow" size="large">黄色按钮</SButton>
       <SButton color="red" size="large">红色按钮</SButton>
      </div>


      <div>
      <SButton color="blue" size="large" :round="true" icon="search"></SButton>
      <SButton color="green" size="large" icon="edit"></SButton>
      <SButton color="gray" size="large" icon="check"></SButton>
      <SButton color="yellow" size="large" icon="message"></SButton>
      <SButton color="red" size="large" icon="share"></SButton>
     </div>

     <div>
      <SButton color="blue" loading="true" size="large" :round="true">Loading1</SButton>
     </div>
    `,
})
  .use(SmartyUI)
  .mount("#app");
