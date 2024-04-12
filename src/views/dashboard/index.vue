<script setup>
import Echarts from "@/components/Echarts/index.vue";
/** api/v1 */
console.log(import.meta.env.VITE_BASE_API);
</script>
<template>
  <div class="dashaboard-container">
    <div class="dashaboard-container-item">
      <el-card class="card1 m-5 mr-5">
        <template #header>你好</template>
        11111111
      </el-card>
      <el-card class="card2 m-5 mr-5">
        <template #header>你好</template>
        11111111
      </el-card>
    </div>

    <div class="chart">
      <Echarts />
    </div>
  </div>
</template>

<style lang="scss">
.dashaboard-container {
  margin: 30px 0 0 0;
  min-height: 100%;
  .dashaboard-container-item {
    display: flex;
    justify-content: space-around;
    align-items: center;
    .card1 {
      flex: 2;
    }
    .card2 {
      flex: 1;
    }

    .m-5 {
      margin: 0 0 5px 0;
    }

    .mr-5 {
      margin-right: 5px;
    }
  }

  @media screen and (max-width: 768px) {
    .dashaboard-container-item {
      display: block;
    }
  }

  .chart {
    width: 100%;
    height: 100%;
  }
}
</style>
