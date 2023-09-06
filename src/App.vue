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
    <ty-button type="success" >123</ty-button>
    <div>
      <button @click="show1">success</button>
      <button @click="show2">warning</button>
      <button @click="show3">danger</button>
    </div>
  </div>
  
</template>
 
<script setup>
  // 导入下拉菜单的选项数据（用户可以自定义）
  import selectorData from '@/assets/data/selector.js'
  import { ref,getCurrentInstance } from 'vue'
  import { tyMessage } from '../packages/index.js' 

  const option = ref('')
  // 选择的option值交由用户操作
  const setItemValue = (value) => {
    option.value = value
  }

  const instance = getCurrentInstance()
  const $message = instance.appContext.config.globalProperties.$message
  const show1 = () => {
    $message({
      type: 'success',
      message: '欢迎光临~~~',
      duration: 3000,
    }) 
    // tyMessage({
    //   type: 'success',
    //   message: '欢迎光临~~~',
    //   duration: 3000,
    // });
  };
  const show2 = () => {
    tyMessage({
      type: 'warning',
      message: '欢迎光临！',
      duration: 3000,
    });
  };
  const show3 = () => {
    tyMessage({
      type: 'danger',
      message: '欢迎光临！！！',
      duration: 3000,
    });
  };
</script>

<style lang="scss" scoped></style>
