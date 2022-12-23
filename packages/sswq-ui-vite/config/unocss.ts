import {presetUno,presetAttributify,presetIcons} from 'unocss'

import Unocss from 'unocss/vite'

const colors = [
    "white",
    "black",
    "gray",
    "red",
    "yellow",
    "green",
    "blue",
    "indigo",
    "purple",
    "pink"
]

const safelist = [
    'text-white',
    ...colors.map((v)=>`bg-${v}-100`),
    ...colors.map((v)=>`bg-${v}-400`),
    ...colors.map((v)=>`bg-${v}-500`),
    ...colors.map((v)=>`hover:bg-${v}-100`),
    ...colors.map((v)=>`hover:bg-${v}-300`),
    ...colors.map((v)=>`hover:bg-${v}-400`),
    ...colors.map((v)=>`hover:bg-${v}-500`),
    ...colors.map((v) => `border-${v}-400`),
    ...colors.map((v) => `border-${v}-500`),
    ...colors.map((v) => `text-${v}-500`),
    ...colors.map((v) => `hover:text-${v}-500`),
    ...[1,2,3,4,5,6,7,8].map((_,i)=>`px-${i+1}`),
    ...[1,2,3,4,5,6,7,8].map((_,i)=>`py-${i+1}`),
    ...["sm","base","lg"].map((v)=> `text-${v}`),
    ...["rounded-full","rounded-lg"],
    ...["search","edit","check","message","star-off","delete","add","share"].map((v)=>`i-ic-baseline-${v}`),
    ...["dash"].map((v)=>`i-carbon-circle-${v}`)

];

export default () => Unocss({
    safelist,
    presets:[presetUno(),presetAttributify(),presetIcons()]
}) 