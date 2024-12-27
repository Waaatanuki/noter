<script setup lang="ts">
const dataStr = ref(`[
  {
    "questId": "819051",
    "questName": "荒原踏み荒らす巨象",
    "questImage": "/sp/quest/assets/replicard/5710090.png",
    "total": 11443,
    "reward": [
      {
        "key": "10_1331",
        "count": 3535
      }
    ]
  }
]`)

const data = computed(() => {
  try {
    return JSON.parse(dataStr.value)
  }
  catch (e) {
    return []
  }
})

function getRatio(a = 0, b = 0) {
  if (b === 0)
    return '0.00'

  return ((a / b) * 100).toFixed(2)
}
</script>

<template>
  <div m-auto fc flex-col flex-wrap gap-4 class="w-80%">
    <el-card v-for="quest in data" :key="quest.questId" :body-style="{ padding: '10px' }">
      <div flex items-center justify-start text-sm>
        <div mr-15px w-100px fc shrink-0 flex-col>
          <img w-100px :src="getQuestImg(quest.questImage)">
          <div mt-2px fc gap-2px>
            <Icon icon="game-icons:crossed-swords" />
            <div text-orange font-black>
              {{ quest.total.toLocaleString() }}
            </div>
            <Icon icon="game-icons:crossed-swords" />
          </div>
        </div>
        <div fc flex-wrap gap-5 py-2>
          <div v-for="item in quest.reward" :key="item.key" shrink-0>
            <div>
              <el-badge :value="item.count" type="danger" :max="99999999" :offset="[-10, 0]">
                <img w-50px draggable="false" :src="getItemSrc(item.key)">
              </el-badge>

              <div text-xs>
                {{ getRatio(item.count, quest.total) }}%
              </div>
            </div>
          </div>
        </div>
      </div>
    </el-card>

    <el-input v-model="dataStr" :rows="5" type="textarea" />
  </div>
</template>
