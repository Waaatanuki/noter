<script setup lang="ts">
const menu = [
  {
    category: 'GBF',
    list: [
      { path: '/gbf/drop', name: '根据物品类型统计掉落' },
    ],
  },
  {
    category: 'Raft',
    list: [
      { path: '/raft/dishes', name: '菜肴' },
    ],
  },
]
</script>

<template>
  <div fc flex-wrap gap-3>
    <el-card v-for="cat in menu" :key="cat.category" :header="cat.category" min-w-100>
      <div>
        <el-link v-for="item in cat.list" :key="item.path" @click="$router.push(item.path)">
          {{ item.name }}
        </el-link>
      </div>
    </el-card>
  </div>
</template>
