<script setup lang="ts">
const data = [
  {
    questId: '301061',
    questName: '邂逅、黒銀の翼ＨＬ',
    isBlueBox: true,
    isBlueTreasure: true,
    targetItemKey: '17_20004',
    total: 7991,
    blueChest: 1050,
    redChestFFJ: 14,
    blueChestFFJ: 18,
    normalChestFFJ: 0,
    ring1: 772,
    ring2: 189,
    ring3: 71,
    lastBlueChestCount: 38,
    lastBlueChestTake: 34,
    lastFFJTime: 1740786878,
    lastFFJTakeDay: 43,
    monthlyTableData: [
      {
        date: '2025-04',
        total: 33,
        blueChest: 1,
        blueChestFFJ: 0,
        ring3: 0,
      },
      {
        date: '2025-03',
        total: 28,
        blueChest: 9,
        blueChestFFJ: 0,
        ring3: 0,
      },
      {
        date: '2025-02',
        total: 28,
        blueChest: 7,
        blueChestFFJ: 0,
        ring3: 1,
      },
      {
        date: '2025-01',
        total: 40,
        blueChest: 2,
        blueChestFFJ: 0,
        ring3: 0,
      },
      {
        date: '2024-12',
        total: 36,
        blueChest: 7,
        blueChestFFJ: 0,
        ring3: 0,
      },
      {
        date: '2024-11',
        total: 37,
        blueChest: 8,
        blueChestFFJ: 0,
        ring3: 0,
      },
      {
        date: '2024-10',
        total: 38,
        blueChest: 5,
        blueChestFFJ: 1,
        ring3: 0,
      },
      {
        date: '2024-09',
        total: 108,
        blueChest: 27,
        blueChestFFJ: 0,
        ring3: 2,
      },
      {
        date: '2024-08',
        total: 83,
        blueChest: 10,
        blueChestFFJ: 1,
        ring3: 0,
      },
      {
        date: '2024-07',
        total: 146,
        blueChest: 19,
        blueChestFFJ: 0,
        ring3: 2,
      },
      {
        date: '2024-06',
        total: 153,
        blueChest: 26,
        blueChestFFJ: 0,
        ring3: 3,
      },
      {
        date: '2024-05',
        total: 91,
        blueChest: 23,
        blueChestFFJ: 0,
        ring3: 2,
      },
      {
        date: '2024-04',
        total: 30,
        blueChest: 7,
        blueChestFFJ: 0,
        ring3: 1,
      },
      {
        date: '2024-03',
        total: 28,
        blueChest: 7,
        blueChestFFJ: 0,
        ring3: 0,
      },
      {
        date: '2024-02',
        total: 27,
        blueChest: 1,
        blueChestFFJ: 0,
        ring3: 0,
      },
      {
        date: '2024-01',
        total: 1021,
        blueChest: 132,
        blueChestFFJ: 2,
        ring3: 9,
      },
      {
        date: '2023-12',
        total: 80,
        blueChest: 11,
        blueChestFFJ: 0,
        ring3: 0,
      },
      {
        date: '2023-11',
        total: 60,
        blueChest: 10,
        blueChestFFJ: 1,
        ring3: 0,
      },
      {
        date: '2023-10',
        total: 19,
        blueChest: 2,
        blueChestFFJ: 0,
        ring3: 0,
      },
      {
        date: '2023-09',
        total: 134,
        blueChest: 20,
        blueChestFFJ: 0,
        ring3: 2,
      },
      {
        date: '2023-08',
        total: 8,
        blueChest: 2,
        blueChestFFJ: 0,
        ring3: 0,
      },
      {
        date: '2023-07',
        total: 15,
        blueChest: 0,
        blueChestFFJ: 0,
        ring3: 0,
      },
      {
        date: '2023-06',
        total: 6,
        blueChest: 0,
        blueChestFFJ: 0,
        ring3: 0,
      },
      {
        date: '2023-05',
        total: 65,
        blueChest: 9,
        blueChestFFJ: 0,
        ring3: 0,
      },
      {
        date: '2023-04',
        total: 65,
        blueChest: 12,
        blueChestFFJ: 2,
        ring3: 0,
      },
      {
        date: '2023-03',
        total: 193,
        blueChest: 22,
        blueChestFFJ: 2,
        ring3: 1,
      },
      {
        date: '2023-02',
        total: 147,
        blueChest: 12,
        blueChestFFJ: 0,
        ring3: 0,
      },
      {
        date: '2023-01',
        total: 1079,
        blueChest: 128,
        blueChestFFJ: 1,
        ring3: 5,
      },
      {
        date: '2022-12',
        total: 35,
        blueChest: 8,
        blueChestFFJ: 0,
        ring3: 0,
      },
      {
        date: '2022-11',
        total: 28,
        blueChest: 4,
        blueChestFFJ: 0,
        ring3: 1,
      },
      {
        date: '2022-10',
        total: 51,
        blueChest: 5,
        blueChestFFJ: 0,
        ring3: 1,
      },
      {
        date: '2022-09',
        total: 32,
        blueChest: 6,
        blueChestFFJ: 0,
        ring3: 0,
      },
      {
        date: '2022-08',
        total: 177,
        blueChest: 40,
        blueChestFFJ: 0,
        ring3: 6,
      },
      {
        date: '2022-07',
        total: 255,
        blueChest: 27,
        blueChestFFJ: 0,
        ring3: 2,
      },
      {
        date: '2022-06',
        total: 276,
        blueChest: 42,
        blueChestFFJ: 1,
        ring3: 4,
      },
      {
        date: '2022-05',
        total: 560,
        blueChest: 75,
        blueChestFFJ: 3,
        ring3: 4,
      },
      {
        date: '2022-04',
        total: 2263,
        blueChest: 264,
        blueChestFFJ: 3,
        ring3: 22,
      },
      {
        date: '2022-03',
        total: 516,
        blueChest: 60,
        blueChestFFJ: 1,
        ring3: 3,
      },
    ],
    intervalData: {
      labels: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
      ],
      count: [
        38,
        123,
        127,
        12,
        74,
        14,
        6,
        20,
        197,
        63,
        10,
        12,
        9,
        34,
        123,
        6,
        110,
        34,
        38,
      ],
    },
  },
  {
    questId: '303251',
    questName: '崩天、虚空の兆',
    isBlueBox: true,
    isBlueTreasure: true,
    targetItemKey: '17_20004',
    total: 1091,
    blueChest: 1073,
    redChestFFJ: 0,
    blueChestFFJ: 1,
    normalChestFFJ: 0,
    ring1: 77,
    ring2: 22,
    ring3: 10,
    lastBlueChestCount: 565,
    lastBlueChestTake: 508,
    lastFFJTime: 1663517682,
    lastFFJTakeDay: 0,
    monthlyTableData: [
      {
        date: '2024-12',
        total: 1,
        blueChest: 1,
        blueChestFFJ: 0,
        ring3: 0,
      },
      {
        date: '2024-02',
        total: 184,
        blueChest: 184,
        blueChestFFJ: 0,
        ring3: 2,
      },
      {
        date: '2024-01',
        total: 200,
        blueChest: 195,
        blueChestFFJ: 0,
        ring3: 0,
      },
      {
        date: '2023-11',
        total: 2,
        blueChest: 2,
        blueChestFFJ: 0,
        ring3: 0,
      },
      {
        date: '2023-04',
        total: 3,
        blueChest: 3,
        blueChestFFJ: 0,
        ring3: 0,
      },
      {
        date: '2023-02',
        total: 3,
        blueChest: 3,
        blueChestFFJ: 0,
        ring3: 0,
      },
      {
        date: '2023-01',
        total: 9,
        blueChest: 9,
        blueChestFFJ: 0,
        ring3: 0,
      },
      {
        date: '2022-11',
        total: 2,
        blueChest: 2,
        blueChestFFJ: 0,
        ring3: 0,
      },
      {
        date: '2022-10',
        total: 24,
        blueChest: 24,
        blueChestFFJ: 0,
        ring3: 0,
      },
      {
        date: '2022-09',
        total: 224,
        blueChest: 221,
        blueChestFFJ: 1,
        ring3: 2,
      },
      {
        date: '2022-08',
        total: 369,
        blueChest: 362,
        blueChestFFJ: 0,
        ring3: 6,
      },
      {
        date: '2022-07',
        total: 14,
        blueChest: 13,
        blueChestFFJ: 0,
        ring3: 0,
      },
      {
        date: '2022-04',
        total: 54,
        blueChest: 52,
        blueChestFFJ: 0,
        ring3: 0,
      },
      {
        date: '2022-03',
        total: 2,
        blueChest: 2,
        blueChestFFJ: 0,
        ring3: 0,
      },
    ],
    intervalData: {
      labels: [
        '1',
        '2',
      ],
      count: [
        508,
        565,
      ],
    },
  },
  {
    questId: '305161',
    questName: '降臨、調停の翼ＨＬ',
    isBlueBox: true,
    isBlueTreasure: true,
    targetItemKey: '17_20004',
    total: 7226,
    blueChest: 7137,
    redChestFFJ: 0,
    blueChestFFJ: 20,
    normalChestFFJ: 0,
    ring1: 570,
    ring2: 145,
    ring3: 57,
    lastBlueChestCount: 121,
    lastBlueChestTake: 6,
    lastFFJTime: 1744776378,
    lastFFJTakeDay: 0,
    monthlyTableData: [
      {
        date: '2025-04',
        total: 796,
        blueChest: 788,
        blueChestFFJ: 5,
        ring3: 8,
      },
      {
        date: '2025-03',
        total: 938,
        blueChest: 911,
        blueChestFFJ: 1,
        ring3: 4,
      },
      {
        date: '2025-02',
        total: 184,
        blueChest: 179,
        blueChestFFJ: 0,
        ring3: 2,
      },
      {
        date: '2025-01',
        total: 84,
        blueChest: 82,
        blueChestFFJ: 0,
        ring3: 0,
      },
      {
        date: '2024-12',
        total: 1,
        blueChest: 1,
        blueChestFFJ: 0,
        ring3: 0,
      },
      {
        date: '2024-11',
        total: 45,
        blueChest: 44,
        blueChestFFJ: 0,
        ring3: 0,
      },
      {
        date: '2024-09',
        total: 380,
        blueChest: 379,
        blueChestFFJ: 1,
        ring3: 5,
      },
      {
        date: '2024-08',
        total: 870,
        blueChest: 869,
        blueChestFFJ: 2,
        ring3: 7,
      },
      {
        date: '2024-04',
        total: 386,
        blueChest: 382,
        blueChestFFJ: 2,
        ring3: 4,
      },
      {
        date: '2024-03',
        total: 44,
        blueChest: 43,
        blueChestFFJ: 0,
        ring3: 1,
      },
      {
        date: '2024-02',
        total: 308,
        blueChest: 303,
        blueChestFFJ: 1,
        ring3: 1,
      },
      {
        date: '2024-01',
        total: 1400,
        blueChest: 1387,
        blueChestFFJ: 4,
        ring3: 10,
      },
      {
        date: '2023-12',
        total: 10,
        blueChest: 9,
        blueChestFFJ: 0,
        ring3: 0,
      },
      {
        date: '2023-11',
        total: 2,
        blueChest: 2,
        blueChestFFJ: 0,
        ring3: 0,
      },
      {
        date: '2023-09',
        total: 5,
        blueChest: 4,
        blueChestFFJ: 0,
        ring3: 0,
      },
      {
        date: '2023-08',
        total: 4,
        blueChest: 4,
        blueChestFFJ: 0,
        ring3: 0,
      },
      {
        date: '2023-06',
        total: 6,
        blueChest: 6,
        blueChestFFJ: 0,
        ring3: 0,
      },
      {
        date: '2023-05',
        total: 57,
        blueChest: 57,
        blueChestFFJ: 0,
        ring3: 1,
      },
      {
        date: '2023-04',
        total: 29,
        blueChest: 28,
        blueChestFFJ: 0,
        ring3: 0,
      },
      {
        date: '2023-03',
        total: 84,
        blueChest: 84,
        blueChestFFJ: 0,
        ring3: 1,
      },
      {
        date: '2023-02',
        total: 18,
        blueChest: 18,
        blueChestFFJ: 0,
        ring3: 0,
      },
      {
        date: '2023-01',
        total: 600,
        blueChest: 587,
        blueChestFFJ: 1,
        ring3: 7,
      },
      {
        date: '2022-12',
        total: 4,
        blueChest: 4,
        blueChestFFJ: 0,
        ring3: 0,
      },
      {
        date: '2022-11',
        total: 2,
        blueChest: 2,
        blueChestFFJ: 0,
        ring3: 0,
      },
      {
        date: '2022-10',
        total: 123,
        blueChest: 123,
        blueChestFFJ: 0,
        ring3: 1,
      },
      {
        date: '2022-09',
        total: 173,
        blueChest: 172,
        blueChestFFJ: 0,
        ring3: 1,
      },
      {
        date: '2022-08',
        total: 103,
        blueChest: 103,
        blueChestFFJ: 0,
        ring3: 0,
      },
      {
        date: '2022-07',
        total: 7,
        blueChest: 7,
        blueChestFFJ: 0,
        ring3: 0,
      },
      {
        date: '2022-06',
        total: 33,
        blueChest: 33,
        blueChestFFJ: 0,
        ring3: 1,
      },
      {
        date: '2022-05',
        total: 386,
        blueChest: 384,
        blueChestFFJ: 3,
        ring3: 2,
      },
      {
        date: '2022-04',
        total: 3,
        blueChest: 3,
        blueChestFFJ: 0,
        ring3: 0,
      },
      {
        date: '2022-03',
        total: 141,
        blueChest: 139,
        blueChestFFJ: 0,
        ring3: 1,
      },
    ],
    intervalData: {
      labels: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
      ],
      count: [
        232,
        9,
        152,
        1029,
        632,
        41,
        48,
        93,
        1110,
        199,
        291,
        780,
        114,
        47,
        884,
        763,
        428,
        141,
        17,
        6,
        121,
      ],
    },
  },
  {
    questId: '303141',
    questName: '神撃、究極の竜ＨＬ',
    isBlueBox: false,
    isBlueTreasure: false,
    targetItemKey: '17_20004',
    total: 1047,
    blueChest: 0,
    redChestFFJ: 27,
    blueChestFFJ: 0,
    normalChestFFJ: 0,
    ring1: 0,
    ring2: 0,
    ring3: 0,
    lastBlueChestCount: 0,
    lastBlueChestTake: 0,
    lastFFJTime: 1744155357,
    lastFFJTakeDay: 34,
    monthlyTableData: [
      {
        date: '2025-04',
        total: 16,
        blueChest: 0,
        blueChestFFJ: 0,
        ring3: 0,
      },
      {
        date: '2025-03',
        total: 30,
        blueChest: 0,
        blueChestFFJ: 0,
        ring3: 0,
      },
      {
        date: '2025-02',
        total: 28,
        blueChest: 0,
        blueChestFFJ: 0,
        ring3: 0,
      },
      {
        date: '2025-01',
        total: 32,
        blueChest: 0,
        blueChestFFJ: 0,
        ring3: 0,
      },
      {
        date: '2024-12',
        total: 36,
        blueChest: 0,
        blueChestFFJ: 0,
        ring3: 0,
      },
      {
        date: '2024-11',
        total: 34,
        blueChest: 0,
        blueChestFFJ: 0,
        ring3: 0,
      },
      {
        date: '2024-10',
        total: 38,
        blueChest: 0,
        blueChestFFJ: 0,
        ring3: 0,
      },
      {
        date: '2024-09',
        total: 53,
        blueChest: 0,
        blueChestFFJ: 0,
        ring3: 0,
      },
      {
        date: '2024-08',
        total: 31,
        blueChest: 0,
        blueChestFFJ: 0,
        ring3: 0,
      },
      {
        date: '2024-07',
        total: 30,
        blueChest: 0,
        blueChestFFJ: 0,
        ring3: 0,
      },
      {
        date: '2024-06',
        total: 30,
        blueChest: 0,
        blueChestFFJ: 0,
        ring3: 0,
      },
      {
        date: '2024-05',
        total: 30,
        blueChest: 0,
        blueChestFFJ: 0,
        ring3: 0,
      },
      {
        date: '2024-04',
        total: 29,
        blueChest: 0,
        blueChestFFJ: 0,
        ring3: 0,
      },
      {
        date: '2024-03',
        total: 28,
        blueChest: 0,
        blueChestFFJ: 0,
        ring3: 0,
      },
      {
        date: '2024-02',
        total: 26,
        blueChest: 0,
        blueChestFFJ: 0,
        ring3: 0,
      },
      {
        date: '2024-01',
        total: 30,
        blueChest: 0,
        blueChestFFJ: 0,
        ring3: 0,
      },
      {
        date: '2023-12',
        total: 28,
        blueChest: 0,
        blueChestFFJ: 0,
        ring3: 0,
      },
      {
        date: '2023-11',
        total: 18,
        blueChest: 0,
        blueChestFFJ: 0,
        ring3: 0,
      },
      {
        date: '2023-10',
        total: 18,
        blueChest: 0,
        blueChestFFJ: 0,
        ring3: 0,
      },
      {
        date: '2023-09',
        total: 16,
        blueChest: 0,
        blueChestFFJ: 0,
        ring3: 0,
      },
      {
        date: '2023-08',
        total: 8,
        blueChest: 0,
        blueChestFFJ: 0,
        ring3: 0,
      },
      {
        date: '2023-07',
        total: 15,
        blueChest: 0,
        blueChestFFJ: 0,
        ring3: 0,
      },
      {
        date: '2023-06',
        total: 4,
        blueChest: 0,
        blueChestFFJ: 0,
        ring3: 0,
      },
      {
        date: '2023-05',
        total: 29,
        blueChest: 0,
        blueChestFFJ: 0,
        ring3: 0,
      },
      {
        date: '2023-04',
        total: 29,
        blueChest: 0,
        blueChestFFJ: 0,
        ring3: 0,
      },
      {
        date: '2023-03',
        total: 30,
        blueChest: 0,
        blueChestFFJ: 0,
        ring3: 0,
      },
      {
        date: '2023-02',
        total: 27,
        blueChest: 0,
        blueChestFFJ: 0,
        ring3: 0,
      },
      {
        date: '2023-01',
        total: 31,
        blueChest: 0,
        blueChestFFJ: 0,
        ring3: 0,
      },
      {
        date: '2022-12',
        total: 29,
        blueChest: 0,
        blueChestFFJ: 0,
        ring3: 0,
      },
      {
        date: '2022-11',
        total: 28,
        blueChest: 0,
        blueChestFFJ: 0,
        ring3: 0,
      },
      {
        date: '2022-10',
        total: 30,
        blueChest: 0,
        blueChestFFJ: 0,
        ring3: 0,
      },
      {
        date: '2022-09',
        total: 29,
        blueChest: 0,
        blueChestFFJ: 0,
        ring3: 0,
      },
      {
        date: '2022-08',
        total: 32,
        blueChest: 0,
        blueChestFFJ: 0,
        ring3: 0,
      },
      {
        date: '2022-07',
        total: 31,
        blueChest: 0,
        blueChestFFJ: 0,
        ring3: 0,
      },
      {
        date: '2022-06',
        total: 26,
        blueChest: 0,
        blueChestFFJ: 0,
        ring3: 0,
      },
      {
        date: '2022-05',
        total: 28,
        blueChest: 0,
        blueChestFFJ: 0,
        ring3: 0,
      },
      {
        date: '2022-04',
        total: 28,
        blueChest: 0,
        blueChestFFJ: 0,
        ring3: 0,
      },
      {
        date: '2022-03',
        total: 32,
        blueChest: 0,
        blueChestFFJ: 0,
        ring3: 0,
      },
    ],
    intervalData: {
      labels: [
        '1',
      ],
      count: [
        0,
      ],
    },
  },
]

const tabName = ref('301061')

function getRatio(a = 0, b = 0) {
  if (b === 0)
    return 0
  return ((a / b) * 100).toFixed(2)
}

function getGoldBrickShowValue(quest: GoldBrickBaseInfo) {
  switch (quest.questId) {
    case '303141':
      // 超巴
      return `${quest.redChestFFJ ?? 0}+${quest.normalChestFFJ ?? 0}`
    case '301061':
      // 大巴
      return `${quest.blueChestFFJ ?? 0}+${quest.redChestFFJ ?? 0}`
    default:
      return quest.blueChestFFJ ?? 0
  }
}

function getGoldBrickTips(quest: GoldBrickBaseInfo) {
  switch (quest.questId) {
    case '303141':
      // 超巴
      return '自发金+金箱金'
    case '301061':
      // 大巴
      return '蓝箱金+自发金'
    default:
      return '蓝箱金'
  }
}
</script>

<template>
  <div class="my-tab">
    <el-tabs v-model="tabName" type="border-card" stretch max-w-800px>
      <el-tab-pane v-for="quest in data" :key="quest.questId" :name="quest.questId">
        <template #label>
          <div w-100px fc flex-col>
            <img w-full :src="getQuestImg(quest.questId)">
            <div v-if="tabName === quest.questId" mt-2px fc gap-2px text-black dark:text-white>
              <div i-game-icons:crossed-swords />
              <div text-orange font-black>
                {{ quest.total.toLocaleString() }}
              </div>
              <div i-game-icons:crossed-swords />
            </div>
          </div>
        </template>
        <div flex flex-col gap-2 px-2 py-4>
          <div h-full flex flex-col items-center justify-start>
            <div w-600px flex items-center justify-around>
              <div v-if="quest.isBlueBox" class="desc-item">
                <el-badge :value="quest.blueChest" type="danger" :max="99999999" :offset="[-10, 0]">
                  <img w-50px :src="getLocalImg('blueChest')">
                </el-badge>

                <div text-xs>
                  {{ getRatio(quest.blueChest, quest.total) }}%
                </div>
              </div>

              <div class="desc-item">
                <el-tooltip :content="getGoldBrickTips(quest)">
                  <el-badge :value="getGoldBrickShowValue(quest)" type="danger" :max="99999999" :offset="[-10, 0]">
                    <img w-50px :src="getLocalImg('goldBrick', 'item')">
                  </el-badge>
                </el-tooltip>

                <div v-if="quest.questId !== '303141'" text-xs>
                  {{ getRatio(quest.blueChestFFJ, quest.blueChest) }}%
                </div>
              </div>

              <template v-if="quest.questId !== '303141'">
                <div class="desc-item">
                  <el-badge :value="quest.ring3" type="danger" :max="99999999" :offset="[-10, 0]">
                    <img w-50px :src="getLocalImg('ring3', 'item')">
                  </el-badge>
                  <div text-xs>
                    {{ getRatio(quest.ring3, quest.blueChest) }}%
                  </div>
                </div>
                <div class="desc-item">
                  <el-badge :value="quest.ring2" type="danger" :max="99999999" :offset="[-10, 0]">
                    <img w-50px :src="getLocalImg('ring2', 'item')">
                  </el-badge>
                  <div text-xs>
                    {{ getRatio(quest.ring2, quest.blueChest) }}%
                  </div>
                </div>
                <div class="desc-item">
                  <el-badge :value="quest.ring1" type="danger" :max="99999999" :offset="[-10, 0]">
                    <img w-50px :src="getLocalImg('ring1', 'item')">
                  </el-badge>
                  <div text-xs>
                    {{ getRatio(quest.ring1, quest.blueChest) }}%
                  </div>
                </div>
              </template>
            </div>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<style>
.my-tab .el-tabs--border-card > .el-tabs__header .el-tabs__item {
  width: 150px;
  height: 130px;
}
</style>
