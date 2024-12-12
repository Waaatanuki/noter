<script setup lang="ts">
const srcList = [
  'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
  'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
  'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
  'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
  'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
  'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
  'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',
]

const showIndex = ref([0, 1, 2])

const currentIndex = ref(0)

function handleLeftClick() {
  if (currentIndex.value === showIndex.value[0] && currentIndex.value !== 0) {
    showIndex.value.forEach((item, index) => {
      showIndex.value[index] = item - 1 < 0 ? srcList.length - 1 : item - 1
    })
  }
  currentIndex.value = currentIndex.value - 1 < 0 ? srcList.length - 1 : currentIndex.value - 1
}

function handleRightClick() {
  if (currentIndex.value === showIndex.value.at(-1) && currentIndex.value !== srcList.length - 1) {
    showIndex.value.forEach((item, index) => {
      showIndex.value[index] = item + 1 > srcList.length - 1 ? 0 : item + 1
    })
  }
  currentIndex.value = currentIndex.value + 1 > srcList.length - 1 ? 0 : currentIndex.value + 1
}
</script>

<template>
  <div>
    <img m-auto mb-5 h-100 :src="srcList[currentIndex]">
    <div fc gap-2>
      <el-button circle mr-4 :disabled="currentIndex === 0" @click="handleLeftClick">
        <template #icon>
          <Icon icon="ep:arrow-left" />
        </template>
      </el-button>
      <div v-for="imgIndex in showIndex" :key="imgIndex" p-2 :class="{ 'ring-3': currentIndex === imgIndex }">
        <img h-30 :src="srcList[imgIndex]" @click="currentIndex = imgIndex">
      </div>
      <el-button circle ml-4 :disabled="currentIndex === srcList.length - 1" @click="handleRightClick">
        <template #icon>
          <Icon icon="ep:arrow-right" />
        </template>
      </el-button>
    </div>
  </div>
</template>
