<script setup lang="ts">
import Catfish_Deluxe from './asset/Catfish_Deluxe.webp'
import Cave_Mushroom from './asset/Cave_Mushroom.webp'
import Chili from './asset/Chili.webp'
import Raw_Beet from './asset/Raw_Beet.webp'
import Raw_Catfish from './asset/Raw_Catfish.webp'
import Raw_Potato from './asset/Raw_Potato.webp'

const food = [{
  name: 'Catfish_Deluxe',
  img: Catfish_Deluxe,
  recipe: [[Raw_Potato, Raw_Beet], [Raw_Catfish], [Cave_Mushroom], [Chili]],
}]
</script>

<template>
  <div>
    <img src="./asset/Catfish_Deluxe.webp" alt="" srcset="">
    <div h-20 w-20 flex flex-wrap>
      <div h-10 w-10>
        <img h-full w-full src="./asset/Raw_Potato.webp">
      </div>
      <div h-10 w-10>
        <img h-full w-full src="./asset/Raw_Catfish.webp">
      </div>
      <div h-10 w-10>
        <img h-full w-full src="./asset/Cave_Mushroom.webp">
      </div>
      <div h-10 w-10>
        <img h-full w-full src="./asset/Chili.webp">
      </div>
    </div>
  </div>
  <div v-for="dish in food" :key="dish.name">
    <img :src="dish.img">

    <div h-20 w-20 flex flex-wrap>
      <div v-for="item, index in dish.recipe" :key="index" h-10 w-10>
        <img v-for="img in item" :key="img" h-full w-full :src="img">
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
