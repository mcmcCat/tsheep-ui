<template>
  <div class="selector-input">
    <label class="placeholder" for="input">{{ placeholder }}</label>
    <input ref="inputValue" type="text" class="input" :value="value" @input="searchOptions($event)" @focus="searchOptions($event)" @blur="setValue(value)" id="input"/>
    <span class="iconfont icon-s-xiajiantou"></span>
  </div>
</template>

<script>
  export default {
    name: 'SelectorInput',
  }
</script>

<script setup>
  import '@/assets/icon/iconfont.css'
  // 能够拿到当前组件的实例的vue方法
  import { getCurrentInstance } from 'vue';

  // 此时instance就是该组件实例
  const instance = getCurrentInstance()
  
  const props = defineProps({
    placeholder: {
      type: String,
      default: '请选择'
    },
    value: {
      type: String,
      default: ''
    }
  })

  const emit = defineEmits(['searchOptions'])

  const searchOptions = (e) => {
    console.log(e.target.value);
    emit('searchOptions',e.target.value)
  }

  const setValue = (value) => {
    console.log(`之前选中的option:${value}`);
    // instance.refs 上就挂载着 元素的ref属性值，访问该值就可取得DOM元素
    const _input = instance.refs.inputValue
    if(_input.value.length > 0) {
      _input.value = value
    }
  }
</script>

<style lang="scss" scoped>
.selector-input {
    position: relative;
    width: 100%;
    height: 38px;

    .input {
      width: 100%;
      height: 100%;
      padding: 0 15px;
      box-sizing: border-box;
      background-color: #fff;
      border: 1px solid #999;
      border-radius: 5px;
      outline: none;
      transition: all .2s linear;

      &:focus {
        border-color: #1890ff;
        box-shadow: 0 0 3px #1890ff;
      }
    }

    .placeholder,
    .iconfont {
      position: absolute;
    }

    .placeholder {
      left: 15px;
      top: 8px;
      color: #999;
    }

    .iconfont {
      right: 15px;
      top: 12px;
      color: #999;

      &.icon-search {
        font-size: 22px;
        top: 8px;
      }
    }
  }
</style>

