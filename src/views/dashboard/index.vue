<script setup>
import Echarts from "@/components/Echarts/index.vue";
/** api/v1 */
console.log(import.meta.env.VITE_BASE_API);
</script>
<template>
  <div class="chart">
    <Echarts />
  </div>
</template>

<style lang="scss">
.chart {
  width: 100%;
  height: 100%;
  margin-top: 30px;
}
</style>
