<template>
  <div class="container">
    <ty-selector 
      placeholder="请选择框架"
      @setItemValue="setItemValue"
      :data="selectorData"
    />
    <div>
      我是用户，我拿到了组件内选择到的值: {{ option }}
    </div>
  </div>
  
</template>
 
<script>
  export default {
    name: 'App'
  }
</script>
<script setup>
  // 导入下拉菜单的选项数据（用户可以自定义 ）
  import selectorData from '@/assets/data/selector.js'
  import { ref } from 'vue'

  const option = ref('')
  // 选择的option值交由用户操作
  const setItemValue = (value) => {
    option.value = value
  }
</script>

<style lang="scss" scoped></style>
