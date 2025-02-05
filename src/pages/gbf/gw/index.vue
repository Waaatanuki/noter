<script setup lang="ts">
interface Event {
  value: string
  title: string
  date: string[]
  user: number
  cow: {
    total: number
    gold: number
    meat: number
    summon: number
    weapon: number
  }
  quest: {
    questId: string
    questName: string
    questImage: string
    celestialWeapon: number
    revenantWeapon: number
    bigMeat?: number
    total: number
  }[]
}

const eventList: Event[] = [
  {
    value: 'teamraid076',
    title: '第76回古战场(水有利)',
    date: [
      '2025-01-22',
      '2025-01-29',
    ],
    user: 4302,
    cow: {
      total: 1279430,
      gold: 78402,
      meat: 26543399,
      summon: 44599,
      weapon: 1578,
    },
    quest: [
      {
        questId: '926761',
        questName: '90HELL',
        questImage: 'teamraid076_hell90',
        celestialWeapon: 2944,
        revenantWeapon: 2783,
        bigMeat: 1411422,
        total: 1218641,
      },
      {
        questId: '926771',
        questName: '95HELL',
        questImage: 'teamraid076_hell95',
        celestialWeapon: 162,
        revenantWeapon: 151,
        bigMeat: 109011,
        total: 71722,
      },
      {
        questId: '926781',
        questName: '100HELL',
        questImage: 'teamraid076_hell100',
        celestialWeapon: 1145,
        revenantWeapon: 1115,
        bigMeat: 907449,
        total: 382249,
      },
      {
        questId: '926791',
        questName: '150HELL',
        questImage: 'teamraid076_hell150',
        celestialWeapon: 1182,
        revenantWeapon: 1216,
        bigMeat: 1267107,
        total: 425881,
      },
      {
        questId: '926801',
        questName: '200HELL',
        questImage: 'teamraid076_hell200',
        celestialWeapon: 167,
        revenantWeapon: 181,
        bigMeat: 257587,
        total: 64854,
      },
      {
        questId: '926811',
        questName: '250HELL',
        questImage: 'teamraid076_hell250',
        celestialWeapon: 263,
        revenantWeapon: 329,
        bigMeat: 0,
        total: 101667,
      },
    ],
  },
  {
    value: 'teamraid075',
    title: '第75回古战场(风有利)',
    date: [
      '2024-11-07',
      '2024-11-14',
    ],
    user: 3546,
    cow: {
      total: 852992,
      gold: 52032,
      meat: 17895772,
      summon: 29940,
      weapon: 1066,
    },
    quest: [
      {
        questId: '924561',
        questName: '90HELL',
        questImage: 'teamraid075_hell90',
        celestialWeapon: 2731,
        revenantWeapon: 2607,
        bigMeat: 1309138,
        total: 1125345,
      },
      {
        questId: '924571',
        questName: '95HELL',
        questImage: 'teamraid075_hell95',
        celestialWeapon: 235,
        revenantWeapon: 243,
        bigMeat: 170586,
        total: 115779,
      },
      {
        questId: '924581',
        questName: '100HELL',
        questImage: 'teamraid075_hell100',
        celestialWeapon: 685,
        revenantWeapon: 742,
        bigMeat: 555169,
        total: 240613,
      },
      {
        questId: '924591',
        questName: '150HELL',
        questImage: 'teamraid075_hell150',
        celestialWeapon: 554,
        revenantWeapon: 547,
        bigMeat: 612276,
        total: 211304,
      },
      {
        questId: '924601',
        questName: '200HELL',
        questImage: 'teamraid075_hell200',
        celestialWeapon: 151,
        revenantWeapon: 124,
        bigMeat: 192324,
        total: 48022,
      },
      {
        questId: '924611',
        questName: '250HELL',
        questImage: 'teamraid075_hell250',
        celestialWeapon: 281,
        revenantWeapon: 253,
        bigMeat: 0,
        total: 92238,
      },
    ],
  },
  {
    value: 'teamraid074',
    title: '第74回古战场(土有利)',
    date: [
      '2024-09-07',
      '2024-09-14',
    ],
    user: 3318,
    cow: {
      total: 1035348,
      gold: 63880,
      meat: 19474895,
      summon: 38929,
      weapon: 1879,
    },
    quest: [
      {
        questId: '922461',
        questName: '90HELL',
        questImage: 'teamraid074_hell90',
        celestialWeapon: 4308,
        revenantWeapon: 3438,
        bigMeat: 1820851,
        total: 1373521,
      },
      {
        questId: '922471',
        questName: '95HELL',
        questImage: 'teamraid074_hell95',
        celestialWeapon: 305,
        revenantWeapon: 302,
        bigMeat: 184796,
        total: 110434,
      },
      {
        questId: '922481',
        questName: '100HELL',
        questImage: 'teamraid074_hell100',
        celestialWeapon: 775,
        revenantWeapon: 753,
        bigMeat: 489912,
        total: 202265,
      },
      {
        questId: '922491',
        questName: '150HELL',
        questImage: 'teamraid074_hell150',
        celestialWeapon: 763,
        revenantWeapon: 686,
        bigMeat: 655175,
        total: 212515,
      },
      {
        questId: '922501',
        questName: '200HELL',
        questImage: 'teamraid074_hell200',
        celestialWeapon: 303,
        revenantWeapon: 246,
        bigMeat: 335710,
        total: 81246,
      },
      {
        questId: '922511',
        questName: '250HELL',
        questImage: 'teamraid074_hell250',
        celestialWeapon: 330,
        revenantWeapon: 339,
        bigMeat: 0,
        total: 84781,
      },
    ],
  },
  {
    value: 'teamraid073',
    title: '第73回古战场(暗有利)',
    date: [
      '2024-06-21',
      '2024-06-28',
    ],
    user: 2650,
    cow: {
      total: 1471242,
      gold: 89126,
      meat: 15830563,
      summon: 54798,
      weapon: 2656,
    },
    quest: [
      {
        questId: '920261',
        questName: '90HELL',
        questImage: 'teamraid073_hell90',
        celestialWeapon: 2883,
        revenantWeapon: 2686,
        total: 1217737,
      },
      {
        questId: '920271',
        questName: '95HELL',
        questImage: 'teamraid073_hell95',
        celestialWeapon: 842,
        revenantWeapon: 797,
        total: 340987,
      },
      {
        questId: '920281',
        questName: '100HELL',
        questImage: 'teamraid073_hell100',
        celestialWeapon: 105,
        revenantWeapon: 100,
        total: 23442,
      },
      {
        questId: '920291',
        questName: '150HELL',
        questImage: 'teamraid073_hell150',
        celestialWeapon: 489,
        revenantWeapon: 533,
        total: 187959,
      },
      {
        questId: '920301',
        questName: '200HELL',
        questImage: 'teamraid073_hell200',
        celestialWeapon: 624,
        revenantWeapon: 606,
        total: 195655,
      },
    ],
  },
]
</script>

<template>
  <div m-auto flex gap-4>
    <el-card v-for="event in eventList" :key="event.value" shrink-0 style="width: 600px;" :body-style="{ padding: '10px' }">
      <template #header>
        <div flex justify-between>
          <div>
            {{ event.title }}  {{ event.date.join('至') }}
          </div>
          <div>统计玩家：{{ event.user }}</div>
        </div>
      </template>

      <div my-10px fc flex-wrap gap-10px>
        <QuestCard quest-image="/sp/quest/assets/2040066000_ex_plus.png" :total="event.cow.total">
          <div w-400px fc gap-10>
            <ItemStatistic img="/sp/assets/item/article/m/10116.jpg" hidden :is-percent="false" :value="event.cow.meat" :rate="event.cow.meat / event.cow.total" />
            <ItemStatistic img="/sp/assets/summon/qm/teamraid_ex_plus_golden.png" hidden :value="event.cow.gold" :rate="event.cow.gold / event.cow.total" />
            <ItemStatistic img="/sp/assets/summon/s/2040022000.jpg" hidden :value="event.cow.summon" :rate="event.cow.summon / event.cow.total" />
            <ItemStatistic img="/sp/assets/weapon/s/1040001800.jpg" :value="event.cow.weapon" :rate="event.cow.weapon / event.cow.total" />
          </div>
        </QuestCard>
        <template v-for="quest in event.quest" :key="quest.questId">
          <QuestCard :quest-image="`/sp/assets/summon/qm/${quest.questImage}.png`" :total="quest.total">
            <div w-400px fc gap-10>
              <ItemStatistic img="/sp/assets/weapon/s/1040025400.jpg" :value="quest.celestialWeapon" :rate="quest.celestialWeapon / quest.total" />
              <ItemStatistic img="/sp/assets/weapon/s/1040001800.jpg" :value="quest.revenantWeapon" :rate="quest.revenantWeapon / quest.total" />
              <ItemStatistic
                v-if="quest.bigMeat !== undefined" :mask="quest.questName.includes('250')" img="/sp/assets/item/article/s/10551.jpg"
                :value="quest.bigMeat" :rate="quest.bigMeat / quest.total" :is-percent="false" hidden
              />
            </div>
          </QuestCard>
        </template>
      </div>
    </el-card>
  </div>
</template>
