<template>
  <div class="tags-view-container">
    <router-link
      ref="tagRefs"
      class="tags-view-item"
      :key="tag.path"
      :class="isActive(tag) ? 'active' : ''"
    >
    </router-link>
  </div>
</template>

<script setup>
import { getCurrentInstance, onMounted, ref, watch } from "vue";
import { RouterLink, useRoute, useRouter } from "vue-router";

// 当前选中的tag
const selectedTag = ref({});
let affixTags = [];

const isActive = (tag) => {
  return tag.path === route.path;
};
</script>
<style scoped lang="scss">
.tags-view-container {
  height: var(--v3-tagsview-container);
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 #00000010, 0 0 3px 0 #00000010;

  .tags-view-item {
    display: inline-block;
    position: relative;
    cursor: pointer;
    height: 26px;
    line-height: 26px;
    border: 1px solid #fff;
  }
}
</style>
