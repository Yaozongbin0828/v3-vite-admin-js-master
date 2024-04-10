<script setup>
import Echarts from "./components/Echarts.vue";
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
  width: 500px;
  height: 500px;
}
</style>
