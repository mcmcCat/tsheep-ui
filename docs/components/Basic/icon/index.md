# Selector 下拉菜单 
  
## 基础用法

使用 type、plain、round 和 circle 来定义按钮的样式。

<div class="example">
  <ty-selector 
    placeholder="请选择框架"
    @setItemValue="setItemValue"
    :data="selectorData"
  />
  <div>
    我是用户，我拿到了组件内选择到的值: {{ option }}
  </div>
</div>

<details>
  <summary>展开查看</summary>

  ```vue
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
  // 导入下拉菜单的选项数据（用户可以自定义）
  import selectorData from '../../../../src/assets/data/selector.js'
  import { ref } from 'vue'

  const option = ref('')
  // 选择的option值交由用户操作
  const setItemValue = (value) => {
    option.value = value
  }
</script>

<style lang="scss" scoped></style>
  ```
</details>


<script setup>
  // 导入下拉菜单的选项数据（用户可以自定义）
  import selectorData from '../../../../src/assets/data/selector.js'
  import { ref } from 'vue'

  const option = ref('')
  // 选择的option值交由用户操作
  const setItemValue = (value) => {
    option.value = value
  }
</script>
<style>
    .example{
        border: 1px solid #f5f5f5;
        border-radius: 5px;
        padding:20px
    }
    
    details > summary:first-of-type {
        font-size: 10px;
        padding: 8px 0;
        cursor: pointer;
        color: #1989fa;
    }
    .selector {
      margin-bottom: 8px;
    }
    .iconfont {
      top: 6px !important;
    }
</style>


