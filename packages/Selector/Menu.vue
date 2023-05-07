<template>
  <div class="selector-menu">
    <template v-if="searchData.length > 0">
      <div class="menu-item" v-for="(item,index) in searchData" :key="index" @click="setItemValue(item)">
        {{ item.text }}
    </div>
    </template>
    <NoDataTip v-else />
  </div>
</template>

<script>
  export default {
    name: 'SelectorMenu',
    components: {
      NoDataTip
    }
  }
</script>

<script setup>
  import NoDataTip from "./NoDataTip.vue";
  import {ref ,onMounted ,watch} from 'vue'

  const searchData = ref([])

  const props = defineProps({
    data: {
      type: Array,
      default: () => {
        return [
          {
            id:1,
            value: '1',
            text: '选项1'
          },
          {
            id:2,
            value: '2',
            text: '选项2'
          },
          {
            id:3,
            value: '3',
            text: '选项3'
          },
        ]
      }
    },
    searchValue: {
      type: String,
      default: ''
    }
  })
  const emit = defineEmits(['setItemValue'])

  function setItemValue(item) {
    emit('setItemValue',item)
  }

  const filterData = (value) => {
    searchData.value = props.data.filter((item) => {
      return item.text.toLowerCase().includes(props.searchValue.toLowerCase())
    })
  }

  onMounted(() => {
    searchData.value = props.data //在setup内需要从props中获取，模板内不需要
  })

  // watch 参数一：监听的属性，参数二：回调函数(新值旧值)
  watch(() => {
    return props.searchValue
  }, (value) => {
    filterData(value)
  })

  



</script>

<style lang="scss" scoped>
.selector-menu {
    // 默认隐藏下拉菜单
    display: none;
    position: absolute;
    left: 0;
    top: 48px;
    width: 100%;
    background-color: #fff;
    box-shadow: 0 0 10px #ddd;
    border-radius: 5px;
    cursor: pointer;
    
    .menu-item {
      height: 35px;
      text-align: center;
      line-height: 35px;
      font-size: 14px;
      color: #666;
      margin: 10px 0;
      transition: background-color .2s linear;

      &:hover {
        background-color: #ededed;
      }
    }
  }
</style>

