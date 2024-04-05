<script setup>
import { ref, onUnmounted } from "vue";
import { ElMessage } from "element-plus";
import screenfull from "screenfull";

const props = defineProps({
  /** 全屏的元素，默认是 html */
  element: {
    type: String,
    default: "html",
  },
  /** 打开全屏提示语 */
  openTips: {
    type: String,
    default: "全屏",
  },
  /** 关闭全屏提示语 */
  exitTips: {
    type: String,
    default: "退出全屏",
  },
});

/** 创建一个响应式的tips变量，初始值为props.openTips*/
const tips = ref(props.openTips);
/**  创建一个响应式的isFullscreen变量，初始值为false*/
const isFullscreen = ref(false);

const clickScreenfull = () => {
  /** 根据props.element的值来选择相应的元素，如果找到匹配的元素，则将其赋值给dom变量，否则将dom设置为undefined*/
  const dom = document.querySelector(props.element) || undefined;
  if (!screenfull.isEnabled) {
    ElMessage.warning("您的浏览器无法工作");
    return;
  }
  /** 调用screenfull库的toggle方法配合dom来切换全屏状态*/
  screenfull.toggle(dom);
};

/** 定义了一个change函数，用于在全屏状态发生变化时更新isFullscreen和tips的值*/
const change = () => {
  isFullscreen.value = screenfull.isFullscreen;
  tips.value = screenfull.isFullscreen ? props.exitTips : props.openTips;
};

/** 使用screenfull库的on方法来监听全屏状态的变化，并在变化时调用change函数。*/
screenfull.on("change", change);

/** 在组件卸载时，使用onUnmounted钩子来清除全屏状态的监听*/
onUnmounted(() => {
  if (screenfull.isEnabled) {
    screenfull.off("change", change);
  }
});
</script>

<template>
  <div @click="clickScreenfull">
    <el-tooltip effect="dark" :content="tips" placement="bottom">
      <svg-icon :name="isFullscreen ? 'fullscreen-exit' : 'fullscreen'" />
    </el-tooltip>
  </div>
</template>

<style lang="scss" scoped>
.svg-icon {
  font-size: 20px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
}
</style>
