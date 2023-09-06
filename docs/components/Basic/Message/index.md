# Message 消息提示 
  
## 基础用法

从顶部出现，3 秒后自动消失。

<div class="example">
  <button @click="show">
    点击弹出消息提示
  </button>
</div>

<details>
  <summary>展开查看</summary>

  ```vue
 <template>
  <div class="example">
    <button @click="show">
      点击弹出消息提示
    </button>
  </div>
</template>
 
<script>
  export default {
    name: 'App'
  }
</script>
<script setup>
  import { ref } from 'vue'

  const show = () => {
    tyMessage({
      type: 'success',
      message: '我是消息提示',
      duration: 3000
    })
  }
</script>

<style lang="scss" scoped></style>
  ```
</details>


<script setup>
  import { ref } from 'vue'

  const show = () => {
    tyMessage({
      type: 'success',
      message: '我是消息提示',
      duration: 3000
    })
  }
</script>
<style lang="scss" scope>
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
    
</style>


