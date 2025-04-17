<script setup lang="ts">
import artifaceList from './list.json'
</script>

<template>
  <div>
    <div w-1000px flex flex-wrap gap-10px border-1 border-solid>
      <div v-for="artifact in artifaceList" :key="artifact.id" relative w-250px>
        <div relative h-100px w-100px>
          <img w-100px :src="`https://prd-game-a1-granbluefantasy.akamaized.net/assets/img/sp/assets/artifact/s/${artifact.artifact_id}.jpg`" width="100%" height="100%" alt="">
          <img absolute bottom-0 left-0 :src="`https://prd-game-a1-granbluefantasy.akamaized.net/assets/img/sp/artifact/ui/icon/icn_type_${artifact.attribute}.png`" width="30%" height="30%" alt="">
          <img absolute right-0 top-0 :src="`https://prd-game-a1-granbluefantasy.akamaized.net/assets/img/sp/artifact/ui/icon/icn_weapon_${artifact.kind.padStart(2, '0')}.png`" width="30%" height="30%" alt="">
        </div>
        <div flex flex-col gap-2>
          <div v-for="i in 4" :key="i" flex items-center justify-start gap-1 px-20px>
            <div>{{ `Lv${artifact[`skill${i}_info`].level}` }}</div>
            <img width="16" height="16" :src="getBonusIcon(artifact[`skill${i}_info`].icon_image)">
            <div>
              {{ `${artifact[`skill${i}_info`].name} ${artifact[`skill${i}_info`].effect_value}` }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
