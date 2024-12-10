<script setup lang="ts">
const menu = [
  { path: '/gbf/drop', name: 'gbf' },
]
</script>

<template>
  <div>
    <div>
      <el-link v-for="item in menu" :key="item.path" @click="$router.push(item.path)">
        {{ item.name }}
      </el-link>
    </div>
  </div>
</template>
