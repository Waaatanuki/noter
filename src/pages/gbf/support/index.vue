<script setup lang="ts">
interface MySupportSummon {
  [key: string]: {
    imgId: string
    name: string
    rank: string
    necessary: boolean
  }
}

const profile = ref({ uid: 123, imgPc: '310901_sw_1_01', name: 'ddd' })

const mySupportSummon = ref<MySupportSummon>({
  '10': {
    imgId: '2040094000_02',
    name: 'Lv200 アグニス',
    rank: 'rank3',
    necessary: false,
  },
  '11': { imgId: 'empty', name: '', rank: '', necessary: false },
  '12': { imgId: 'empty', name: '', rank: '', necessary: false },
  '13': { imgId: 'empty', name: '', rank: '', necessary: false },
  '20': {
    imgId: '2040028000_04',
    name: 'Lv250 リヴァイアサン・マグナ',
    rank: 'rank4',
    necessary: false,
  },
  '21': {
    imgId: '2040114000',
    name: 'Lv150 カグヤ',
    rank: 'rank2',
    necessary: false,
  },
  '22': { imgId: 'empty', name: '', rank: '', necessary: false },
  '23': { imgId: 'empty', name: '', rank: '', necessary: false },
  '30': {
    imgId: '2040084000_04',
    name: 'Lv250 ティターン',
    rank: 'rank4',
    necessary: false,
  },
  '31': {
    imgId: '2040027000_04',
    name: 'Lv250 ユグドラシル・マグナ',
    rank: 'rank4',
    necessary: false,
  },
  '32': { imgId: 'empty', name: '', rank: '', necessary: false },
  '33': { imgId: 'empty', name: '', rank: '', necessary: false },
  '40': {
    imgId: '2040020000_04',
    name: 'Lv250 ティアマト・マグナ',
    rank: 'rank4',
    necessary: false,
  },
  '41': { imgId: 'empty', name: '', rank: '', necessary: false },
  '42': { imgId: 'empty', name: '', rank: '', necessary: false },
  '43': { imgId: 'empty', name: '', rank: '', necessary: false },
  '50': {
    imgId: '2040047000_04',
    name: 'Lv250 シュヴァリエ・マグナ',
    rank: 'rank4',
    necessary: false,
  },
  '51': {
    imgId: '2040056000_04',
    name: 'Lv250 ルシフェル',
    rank: 'rank4',
    necessary: false,
  },
  '52': { imgId: 'empty', name: '', rank: '', necessary: false },
  '53': { imgId: 'empty', name: '', rank: '', necessary: false },
  '60': {
    imgId: '2040046000_04',
    name: 'Lv250 セレスト・マグナ',
    rank: 'rank4',
    necessary: false,
  },
  '61': {
    imgId: '2040003000_04',
    name: 'Lv250 バハムート',
    rank: 'rank4',
    necessary: false,
  },
  '62': { imgId: 'empty', name: '', rank: '', necessary: false },
  '63': { imgId: 'empty', name: '', rank: '', necessary: false },
  '00': {
    imgId: '2040158000',
    name: 'Lv100 黒麒麟',
    rank: 'rank1',
    necessary: false,
  },
  '01': { imgId: 'empty', name: '', rank: '', necessary: false },
  '02': {
    imgId: '2040065000_02',
    name: 'Lv200 ジ・オーダー・グランデ',
    rank: 'rank3',
    necessary: false,
  },
  '03': { imgId: 'empty', name: '', rank: '', necessary: false },

})

const order = [1, 2, 3, 4, 5, 6]
</script>

<template>
  <div fc>
    <div v-if="profile.uid" relative h-full>
      <img absolute h-full w-full :src="getLocalImg('frame')">
      <div relative z-10 flex gap-10px px-25px py-20px>
        <div>
          <img w-60px :src="getAssetImg('leader', profile.imgPc, 'raid_chain')">
        </div>
        <div flex flex-col items-stretch justify-between>
          <div flex gap-10px>
            <div v-for="i in order" :key="i" space-y-10px>
              <div v-for="j in 2" :key="`${i}${j}`" relative cursor-pointer @click="mySupportSummon[`${i}${j - 1}`].necessary = !mySupportSummon[`${i}${j - 1}`]?.necessary">
                <template v-if="mySupportSummon[`${i}${j - 1}`]">
                  <img w-50px :src="getAssetImg('summon', mySupportSummon[`${i}${j - 1}`].imgId, 'raid_normal') ">
                  <div v-if="mySupportSummon[`${i}${j - 1}`].name" absolute bottom-0 right-0 rounded bg-slate px-1 text-10px :class="`bless-${mySupportSummon[`${i}${j - 1}`].rank}-style`">
                    {{ `Lv${mySupportSummon[`${i}${j - 1}`].name.match(/\d+/)![0]}` }}
                  </div>
                  <div v-if="mySupportSummon[`${i}${j - 1}`].necessary" i-twemoji:pushpin absolute right--8px top--8px />
                </template>
              </div>
            </div>
            <div space-y-10px>
              <div v-for="i in 2" :key="i" space-y-2px>
                <div v-for="j in 2" :key="`0${2 * i + j - 3}`" relative cursor-pointer @click="mySupportSummon[`0${2 * i + j - 3}`].necessary = !mySupportSummon[`0${2 * i + j - 3}`]?.necessary">
                  <template v-if="mySupportSummon[`0${2 * i + j - 3}`]">
                    <img v-if="mySupportSummon[`0${2 * i + j - 3}`].imgId !== 'empty'" w-50px :src="getAssetImg('summon', mySupportSummon[`0${2 * i + j - 3}`].imgId, 's') ">
                    <div v-else h-50px w-50px />
                    <div v-if="mySupportSummon[`0${2 * i + j - 3}`].name" absolute bottom-0 right-0 rounded bg-slate px-1 text-10px :class="`bless-${mySupportSummon[`0${2 * i + j - 3}`].rank}-style`">
                      {{ `Lv${mySupportSummon[`0${2 * i + j - 3}`].name.match(/\d+/)![0]}` }}
                    </div>
                    <div v-if="mySupportSummon[`0${2 * i + j - 3}`].necessary" i-twemoji:pushpin absolute right--8px top--8px />
                  </template>
                </div>
              </div>
            </div>
          </div>
          <div flex items-center justify-between text-15px text-white font-700>
            <div>
              ID: {{ profile.uid }}
            </div>
            <div>
              昵称: {{ profile.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bless-rank1-style {
  color: #ffa826;
  text-shadow:
    0px 0px 1px #694429,
    0px 0px 1px #694429,
    0px 0px 1px #694429,
    0px 0px 2px #694429,
    0px 0px 2px #694429,
    0px 0px 2px #694429;
}

.bless-rank2-style {
  color: #e3b7ff;
  text-shadow:
    0px 0px 1px #7f12b7,
    0px 0px 1px #7f12b7,
    0px 0px 1px #7f12b7,
    0px 0px 2px #7f12b7,
    0px 0px 2px #7f12b7,
    0px 0px 2px #7f12b7;
}

.bless-rank3-style {
  color: #a1e3ff;
  text-shadow:
    0px 0px 1px #371eb4,
    0px 0px 1px #371eb4,
    0px 0px 1px #371eb4,
    0px 0px 2px #371eb4,
    0px 0px 2px #371eb4,
    0px 0px 2px #371eb4,
    0px 0px 3px #371eb4,
    0px 0px 3px #371eb4,
    0px 0px 3px #371eb4;
}

.bless-rank4-style {
  color: #ffcac3;
  text-shadow:
    0 0 1px #a12a00,
    0 0 1px #a12a00,
    0 0 1px #a12a00,
    0 0 2px #a12a00,
    0 0 2px #a12a00,
    0 0 2px #a12a00,
    0 0 3px #a12a00,
    0 0 3px #a12a00,
    0 0 3px #a12a00;
}
</style>
