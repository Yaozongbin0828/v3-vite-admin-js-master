<script setup>
import { computed, ref, watch, nextTick } from "vue";
// import { useRoute } from "vue";
// import { ELScrollbar } from "element-plus";
// import { ArrowLeft, ArrowRight } from "@element-plus/icons-vue";
import { useSettingsStore } from "@/store/modules/settings";
import Screenfull from "@/components/Screenfull/index.vue";

// const route = useRoute();
const settingsStore = useSettingsStore();

const showScreenfull = computed(() => {
  return settingsStore.showScreenfull;
});
</script>
<template>
  <div class="tags-view-container">
    <Screenfull
      v-if="showScreenfull"
      element=".app-main"
      class="screenfull"
      openTips="内容区域全屏"
    />
  </div>
</template>

<style lang="scss" scoped>
.tags-view-container {
  height: var(--v3-tagsview-height);
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 #00000010, 0 0 3px 0 #00000010;

  .screenfull {
    width: 40px;
    vertical-align: middle;
    position: fixed;
    top: 55px;
    right: 0;
    vertical-align: middle;
    cursor: pointer;
  }
}
</style>
