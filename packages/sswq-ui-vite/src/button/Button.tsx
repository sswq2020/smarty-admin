import {defineComponent,PropType,toRefs} from 'vue'
import "uno.css"
import './index.css'
export type IColor = 'black' | 'gray' | 'red' | 'yellow' | 'green'|'blue'|'indigo'|'purple'|'pink'
export type ISize = "samll" | 'medium' | 'large'
export const props = {
  color:{
    type: String as PropType<IColor>,  //https://cn.vuejs.org/api/utility-types.html#proptypet
    default:'blue'
  },
  size:{
    type: String as PropType<ISize>,
    default:'small'
  },
  round:{
    type: Boolean,
    default:false

  },
  plain:{
    type:Boolean,
    default:false
  },
  icon:{
    type:String,
    default:''
  },
  loading:{
    type: Boolean,
    default:false
  }
}
const size = {
  small:{
    x:"2",
    y:"1",
    text:"sm"
  },
  medium:{
    x:"3",
    y:"1",
    text:"base"
  },
  large:{
    x:"4",
    y:"2",
    text:"lg"
  }

}

export default defineComponent({
    name:"SButton",
    props:props,
    setup(props,{slots}){
        return ()=> 
        <button  
          class={
            `
            border-1
            py-${size[props.size].y}
            px-${size[props.size].x}
            font-semibold
            ${props.round ? 'rounded-full' : 'rounded-lg'}
            bg-${props.color}-${props.plain ? '100' : '500'}
            hover:bg-${props.color}-400
            border-${props.color}-${props.plain ? "400": '500'}
            text-${props.plain ? props.color + "-500": "white"}
            text-${size[props.size].text}
            border-solid
            cursor-pointer
            m-1
            hover:text-white
            `
          }
        > 
            {props.loading ? (<i class={'i-carbon-circle-dash loading p-3'}></i>): ""}
            {props.icon && !props.loading ? (<i class={`i-ic-baseline-${props.icon} p-3`}></i>): ""}
            {slots.default ? slots.default():''}
        </button>
        
    }
})