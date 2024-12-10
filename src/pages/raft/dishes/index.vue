<script setup lang="ts">
import BBQ from './asset/BBQ.webp'
import Catfish_Deluxe from './asset/Catfish_Deluxe.webp'
import Coconut_Beat from './asset/Coconut_Beat.webp'
import Coconut_Chicken from './asset/Coconut_Chicken.webp'
import Head_Broth from './asset/Head_Broth.webp'
import Hearty_Stew from './asset/Hearty_Stew.webp'
import Mangonana from './asset/Mangonana.webp'
import Mushroom_Omelette from './asset/Mushroom_Omelette.webp'
import Red_Melon from './asset/Red_Melon.webp'
import Redbeet_Shot from './asset/Redbeet_Shot.webp'
import Salmon_Salad from './asset/Salmon_Salad.webp'
import Shark_Dinner from './asset/Shark_Dinner.webp'
import Silver_Smoothie from './asset/Silver_Smoothie.webp'
import Simple_Fish_Stew from './asset/Simple_Fish_Stew.webp'
import Simple_Smoothie from './asset/Simple_Smoothie.webp'
import Spicy_Pineberry from './asset/Spicy_Pineberry.webp'
import Steak_with_Jam from './asset/Steak_with_Jam.webp'
import Strawberry_Colada from './asset/Strawberry_Colada.webp'
import Sushi from './asset/Sushi.webp'
import Vegetable_Soup from './asset/Vegetable_Soup.webp'

const food = [{
  name: '椰子鸡',
  img: Coconut_Chicken,
  hunger: 55,
  thirst: 10,
  bonus: 55,
  recipe: [['蘑菇'], ['椰子'], ['生鸟腿'], ['生鸟腿']],
}, {
  name: '简易炖鱼',
  img: Simple_Fish_Stew,
  hunger: 40,
  thirst: 0,
  bonus: 45,
  recipe: [['生鲱鱼', '生鲳鱼'], ['生鲱鱼', '生鲳鱼'], ['生土豆', '生甜菜'], ['生土豆', '生甜菜']],
}, {
  name: '头汤',
  img: Head_Broth,
  hunger: 20,
  thirst: 30,
  bonus: 100,
  recipe: [['生土豆', '生甜菜'], ['牛奶'], ['毒河豚头'], ['毒河豚头']],
}, {
  name: '蔬菜汤',
  img: Vegetable_Soup,
  hunger: 40,
  thirst: 0,
  bonus: 35,
  recipe: [['生土豆', '生甜菜'], ['生土豆', '生甜菜'], ['生土豆', '生甜菜'], ['生土豆', '生甜菜']],
}, {
  name: '蘑菇煎蛋卷',
  img: Mushroom_Omelette,
  hunger: 35,
  thirst: 0,
  bonus: 35,
  recipe: [['生土豆'], ['蛋'], ['蛋'], ['蘑菇']],
}, {
  name: '鲨鱼晚宴',
  img: Shark_Dinner,
  hunger: 45,
  thirst: 0,
  bonus: 70,
  recipe: [['生鲨鱼肉'], ['生鲨鱼肉'], ['蘑菇'], ['银海藻']],
}, {
  name: '果酱牛排',
  img: Steak_with_Jam,
  hunger: 40,
  thirst: 5,
  bonus: 40,
  recipe: [['生土豆', '生甜菜'], ['生肉'], ['红浆果'], ['红浆果']],
}, {
  name: '烧烤',
  img: BBQ,
  hunger: 65,
  thirst: 0,
  bonus: 75,
  recipe: [['生肉'], ['生鲭鱼'], ['生鸟腿'], ['蘑菇']],
}, {
  name: '寿司',
  img: Sushi,
  hunger: 50,
  thirst: 0,
  bonus: 65,
  recipe: [['生鲭鱼', '生罗非鱼'], ['生鲭鱼', '生罗非鱼'], ['蛋'], ['银海藻']],
}, {
  name: '奢华鲶鱼',
  img: Catfish_Deluxe,
  hunger: 40,
  thirst: 0,
  bonus: 55,
  recipe: [['生土豆', '生甜菜'], ['生鯰魚'], ['蘑菇'], ['辣椒']],
  extra: '跑得更快',
}, {
  name: '鲑鱼沙拉',
  img: Salmon_Salad,
  hunger: 40,
  thirst: 10,
  bonus: 55,
  recipe: [['菠萝', '芒果'], ['生鲑鱼'], ['银海藻'], ['姜黄']],
  extra: '提升肺活量',
}, {
  name: '丰盛炖菜',
  img: Hearty_Stew,
  hunger: 20,
  thirst: 0,
  bonus: 30,
  recipe: [['生土豆'], ['蘑菇'], ['生肉'], ['杜松莓']],
  extra: '免死一次',
}]

const drink = [{
  name: '香椰节拍',
  img: Coconut_Beat,
  hunger: 10,
  thirst: 50,
  bonus: 30,
  recipe: [['椰子'], ['椰子'], ['椰子'], ['生甜菜根']],
}, {
  name: '简易奶昔',
  img: Simple_Smoothie,
  hunger: 15,
  thirst: 40,
  bonus: 55,
  recipe: [['芒果'], ['菠萝'], ['椰子'], ['椰子']],
}, {
  name: '草莓可乐达',
  img: Strawberry_Colada,
  hunger: 10,
  thirst: 30,
  bonus: 50,
  recipe: [['菠萝'], ['草莓'], ['椰子'], ['椰子']],
}, {
  name: '银色奶昔',
  img: Silver_Smoothie,
  hunger: 10,
  thirst: 40,
  bonus: 65,
  recipe: [['香蕉'], ['芒果'], ['牛奶'], ['银海藻']],
}, {
  name: '芒果香蕉',
  img: Mangonana,
  hunger: 5,
  thirst: 45,
  bonus: 70,
  recipe: [['芒果'], ['香蕉'], ['香蕉'], ['牛奶']],
}, {
  name: '红瓜',
  img: Red_Melon,
  hunger: 10,
  thirst: 70,
  bonus: 45,
  recipe: [['红浆果'], ['草莓'], ['西瓜'], ['椰子']],
}, {
  name: '辣菠萝莓',
  img: Spicy_Pineberry,
  hunger: 0,
  thirst: 10,
  bonus: 25,
  recipe: [['菠萝'], ['草莓'], ['草莓'], ['辣椒']],
  extra: '游得更快',
}, {
  name: '甜菜根汁',
  img: Redbeet_Shot,
  hunger: 5,
  thirst: 10,
  bonus: 25,
  recipe: [['生甜菜根'], ['生甜菜根'], ['椰子'], ['姜黄']],
  extra: '提升生命上限',
}]
</script>

<template>
  <div fc flex-wrap gap-2>
    <div v-for="dish in food" :key="dish.name" w-60 border-1>
      <div flex items-center justify-between border-b-1 p-2>
        <div w-80px fc flex-col>
          <img h-10 w-10 :src="dish.img">
          <div>{{ dish.name }}</div>
        </div>
        <div flex flex-col items-start>
          <div>
            饥饿：{{ dish.hunger }}
          </div>
          <div>
            口渴：{{ dish.thirst }}
          </div>
          <div>
            奖励：{{ dish.bonus }}
          </div>
        </div>
      </div>
      <div relative p-2 text-start>
        <li v-for="list, index in dish.recipe" :key="index">
          {{ list.join(' or ') }}
        </li>
        <div v-if="dish.extra" absolute bottom-2 right-2 px-1 ring-2 ring-rose>
          <div text-end>
            十分钟内
          </div>
          <div>{{ dish.extra }}</div>
        </div>
      </div>
    </div>
  </div>
  <div mt-4 fc flex-wrap gap-2>
    <div v-for="dish in drink" :key="dish.name" w-60 border-1>
      <div flex items-center justify-between border-b-1 p-2>
        <div w-80px fc flex-col>
          <img h-10 w-10 :src="dish.img">
          <div>{{ dish.name }}</div>
        </div>
        <div flex flex-col items-start>
          <div>
            饥饿：{{ dish.hunger }}
          </div>
          <div>
            口渴：{{ dish.thirst }}
          </div>
          <div>
            奖励：{{ dish.bonus }}
          </div>
        </div>
      </div>
      <div relative p-2 text-start>
        <li v-for="list, index in dish.recipe" :key="index">
          {{ list.join(' or ') }}
        </li>
        <div v-if="dish.extra" absolute bottom-2 right-2 px-1 ring-2 ring-rose>
          <div text-end>
            十分钟内
          </div>
          <div>{{ dish.extra }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
