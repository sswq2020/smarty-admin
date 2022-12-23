# Button 按钮
常用操作按钮

## 基础用法

基础的函数用法

:::demo 使用`size`、`color`、`pain`、`round`属性来定义 Button 的样式。

``` vue
<template>
 <div style="margin-bottom:20px;">
  <SButton color="blue">主要按钮</SButton>
  <SButton color="green">绿色按钮</SButton>
  <SButton color="gray">灰色按钮</SButton>
  <SButton color="yellow">黄色按钮</SButton>
  <SButton color="red">红色按钮</SButton>
 </div>

</template> 
```

:::

## 不同的尺寸

:::demo 尺寸有`small`、`medium`、`large`、默认small.

``` vue
<template>
 <div style="margin-bottom:20px;">
  <SButton color="blue" size="small">小按钮</SButton>
  <SButton color="green" size="medium">中按钮</SButton>
  <SButton color="gray" size="large">大按钮</SButton>
 <SButton loading=“true” color="gray" size="large">大按钮</SButton>
 </div>

</template> 
```
:::

## 带有Icon的按钮

:::demo 结合icones的图标,使用Unocss便可轻松实现带icon的图标

``` vue
<template>
 <div style="margin-bottom:20px;">
  <SButton color="blue" icon="search" size="small">小按钮</SButton>
  <SButton color="green" icon="edit" size="medium">中按钮</SButton>
  <SButton color="gray" icon="check" size="large">大按钮</SButton>
 </div>

</template> 
```
:::


## Loading状态下的icon

:::demo  Loading状态下一般用于操作需要等待一段时间

``` vue
<template>
 <div style="margin-bottom:20px;">
  <SButton loading="true" color="blue" icon="search" size="small">小按钮</SButton>
  <SButton loading="true" color="green" icon="edit" size="medium">中按钮</SButton>
  <SButton loading="true" color="gray" icon="check" size="large">大按钮</SButton>
 </div>

</template> 
```
:::
