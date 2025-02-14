<script setup lang="ts">

</script>

<template>
  <div>
    <el-card m-auto :body-style="{ padding: '10px' }">
      <template #header>
        <div text-start text-xl font-bold>
          天元 土摇滚solo
        </div>
      </template>

      <div flex gap-2>
        <!-- <div h-661px w-481px shrink-0 ring-1>
          图片
        </div> -->
        <img object-contain :src="getLocalImg('party')">
        <div shrink-0 text-start>
          <div>
            <div class="title">
              关于连击
            </div>
            <div class="content">
              双芬+觉醒该刀(27.6)+U武(25)+极星剑(10)+奥义buff(20)+3层魂de解放(10)+神灭(5)=97.6
            </div>
          </div>
          <div>
            <div class="title">
              关于HIT
            </div>
            <div class="content">
              一层追伤4ta(24)+银姐援护炮(1)+神盾3(6)+愚者偷跑(6)=37hit
            </div>
          </div>
          <div>
            <div class="title">
              关于200w
            </div>
            <div class="content">
              主(4)+情毛(3)+神盾(2)+愚者(1)+cb(1)+银姐(1)=12次<br>
              大公=3次, 巴布+FC可以让神盾3每段都过200w
            </div>
          </div>
          <div>
            <div class="title">
              火风 奥伤36hit 技伤5c
            </div>
            <div class="content">
              正常循环: [毛1→神盾3→愚者3] , hit试炼: [神盾3→愚者3]<br>
              ⚠️情毛没刷上梅花buff的时候只有34hit, 需要补2hit
            </div>
          </div>
          <div>
            <div class="title">
              土水 奥伤4ta 技伤fc
            </div>
            <div class="content">
              循环 [4ta→fc→4ta→fc蹲→满豆], 第三轮的fc打进200w特动, 再来一遍转阶段
            </div>
          </div>
          <div>
            <div class="title">
              光暗 奥伤5技能 技伤10弱体
            </div>
            <div class="content">
              只触发奥伤特动, 身上出db的时候, 开愚者1神盾2. 具体操作可参考视频<br>
              猛猛冲, 剩余2%左右血量时, 关奥义A, 触发10弱体, 黑翼解掉之后打进下个阶段
            </div>
          </div>
          <div>
            <div class="title">
              40-15
            </div>
            <div class="content">
              基本同火风阶段, 40hit解不掉可以G了硬吃。愚者2调整到复制, 000调整到白翼<br>
              20左右补惨雾, 留技能和召唤进15
            </div>
          </div>
          <div>
            <div class="title">
              最后15%
            </div>
            <div class="content">
              - 15% FC 大公大巴 充能 砸琴<br>
              - 2000w奥义 泰坦 充能<br>
              - 2000w技伤 充能<br>
              - 10回弱体 巴布000 充能 惨雾 凯姆24(刷新)23 所有伤害技能 FC<br>
              - 200w*10 泰坦 主1 充能<br>
              - FC 大巴 FC 充能<br>
              - 泰坦大公 充能爆了<br>
            </div>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<style  scoped>
.title {
  --uno: font-bold text-xl;
}
.content {
  --uno: ml-2;
}
</style>
