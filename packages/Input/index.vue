<template>
  <div class="">
    <!-- @input事件,每输入一个字符触发一次  -->
    <input type="text" :value="modelValue" @input="inputChange"/>
  </div>
</template>

<script>
  export default {
    name: 'tyInput'
  }
</script>
<script setup>
// 使用input在父子组件传值时 defineProps、defineEmits 的使用方式需注意有些不同
// 父组件给子组件传值时，没用使用名字而是使用v-model，则子组件接收时默认使用 modelValue 作为 prop，并以     update:modelValue 作为对应的事件，在v-model绑定数据更新时自动触发事件。
// 我们可以通过给 v-model 指定一个参数来更改这些名字：
// 父 ↓
// <MyComponent v-model:title="bookTitle" />  
// 子 ↓
// export default {
//   props: ['title'],
//   emits: ['update:title']
// }
const emit = defineEmits(['update:modelValue'])
const props = defineProps({
  modelValue : String|Number,
})
const inputChange = (e) => {
  // console.log(e.target.value);
  emit('update:modelValue',e.target.value)
}
</script>

<style lang="scss" scoped></style>
