<script setup lang="ts">
const menu = [
  {
    category: 'GBF',
    list: [
      { path: '/gbf/drop', name: '根据物品类型统计掉落' },
      { path: '/gbf/gw', name: '团战掉落统计' },
      { path: '/gbf/support', name: '友招' },
    ],
  },
  {
    category: 'Raft',
    list: [
      { path: '/raft/dishes', name: '菜肴' },
    ],
  },
  {
    category: 'other',
    list: [
      { path: '/other/slide', name: '滑动切换' },
      { path: '/other/playground', name: '测试' },
    ],
  },
]
</script>

<template>
  <div fc flex-wrap gap-3>
    <el-card v-for="cat in menu" :key="cat.category" :header="cat.category" min-w-100>
      <div flex gap-2>
        <el-link v-for="item in cat.list" :key="item.path" @click="$router.push(item.path)">
          {{ item.name }}
        </el-link>
      </div>
    </el-card>
  </div>
</template>
