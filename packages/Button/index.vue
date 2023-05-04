<template>
  <div :class="tClass">
    <button>
      <slot></slot>
    </button>
  </div>
</template>

<script>
  export default {
    name: 'tyButton'
  }
</script>
<script setup>
import {computed} from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: '',
  }
})
const tClass = computed(()=>{
  return [
    'ty-button',
    props.type == "" ? "" : `ty-button-${props.type}`
  ]
})
</script>

<style lang="scss" scoped>
  button {
    outline: none;
    border: 0;
    background: none;
    cursor: pointer;
  }
  .ty-button {
    button {
      padding: 12px 24px;
      border-radius: 4px;
      border: 1px solid #f0f0f0;
      background-color: #dad7d7;
      &:hover,&:focus {
        opacity: .7;
      }
    }
  }
  .ty-button-success {
    button {
      background-color: rgb(188, 230, 124);
    }
  }
</style>
