<template>
  <div class="">
    <ty-Button>默认</ty-Button>
    <ty-Button :type="'success'">成功</ty-Button>
    <ty-input v-model="val" ></ty-input>
    <p>{{ val }}</p>
  </div>
</template>
 
<script setup>
import {ref} from 'vue'

const val = ref("")
</script>

<style lang="scss" scoped></style>
