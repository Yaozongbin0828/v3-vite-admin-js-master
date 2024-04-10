<script setup>
import { ref, onMounted } from "vue";
import * as echarts from "echarts/core";
import {
  TooltipComponent,
  GridComponent,
  LegendComponent,
} from "echarts/components";
import { BarChart, LineChart, PieChart } from "echarts/charts";
import { UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";
import VChart from "vue-echarts";

echarts.use([
  TooltipComponent,
  GridComponent,
  LegendComponent,
  BarChart,
  LineChart,
  CanvasRenderer,
  UniversalTransition,
  PieChart,
]);

const skillsOption = {
  tooltip: {
    trigger: "item",
    formatter({ name, value }) {
      return `${name} ${value}%`;
    },
  },
  legend: {
    left: "center",
  },
  series: [
    {
      top: "7%",
      type: "pie",
      radius: ["40%", "85%"],
      avoidLabelOverlap: true,
      itemStyle: {
        borderRadius: 10,
        borderColor: "#fff",
        borderWidth: 2,
      },
      label: {
        show: false,
        position: "center",
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 36,
          fontWeight: "bold",
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        { value: 0.7, name: "Other" },
        { value: 50.9, name: "Vue" },
        { value: 45.1, name: "JavaScript" },
        { value: 2.0, name: "Sass" },
        { value: 1.3, name: "Css" },
      ],
    },
  ],
};
</script>
<template>
  <div class="echarts-container">
    <el-card shadow="always">
      <template #header>技术栈</template>
      <VChart :option="skillsOption" id="vchart" class="wh-full" autoresize />
    </el-card>
  </div>

  <VChart :option="skillsOption" class="wh-full" autoresize />
</template>

<style lang="scss" scoped>
.echarts-container {
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-content: center;

  .wh-full {
    width: 500px;
    height: 500px;
  }
}

.wh-full {
  width: 100%;
  height: 100%;
}
</style>
