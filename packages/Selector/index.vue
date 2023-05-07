<template>
  <div class="selector" v-focus-directive>
    <SelectorInput 
      :placeholder="placeholder"
      :value="inputValue"
      @searchOptions="searchOptions"
    />
    <SelectorMenu
      :data="data"
      @setItemValue="setItemValue"
      :searchValue="searchValue"
    />
  </div>
</template>

<script>
  export default {
    name: 'tySelector',
    components: {
      SelectorInput,
      SelectorMenu
    }
  }
</script>

<script setup>
  import SelectorInput from './Input.vue';
  import SelectorMenu from './Menu.vue';
  // 导入自定义指令，注意命名规范，在模板中使用格式v-Name-Directive
  import vFocusDirective  from '/directives/focus.js';
  import {reactive ,toRefs} from 'vue'

  const state = reactive({
    inputValue: '',
    searchValue: ''
  })
  
  const props = defineProps({
    placeholder: {
      type: String,
      default: ''
    },
    data: {
      type: Array,
    }
  })
  
  const emit = defineEmits(['setItemValue'])
  const setItemValue = (item) => {
    state.inputValue = item.text
    emit('setItemValue',item.text)
  }
  const searchOptions = (value) => {
    state.searchValue = value
  }

  // 结构出来响应式的数据供模板使用
  const { inputValue,searchValue } = toRefs(state)


</script>

<style lang="scss" scoped>
  .selector{
    position: relative;
    width: 300px;
  }
</style>

