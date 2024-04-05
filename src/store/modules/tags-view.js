import { ref } from "vue";
import { defineStore } from "pinia";

export const useTagsViewStore = defineStore("tags-view", () => {
  /** 加载Views*/
  const visitedViews = ref([]);
  /** 缓存Views*/
  const cachedViews = ref([]);

  const addVisitedView = (view) => {
    if (
      visitedViews.value.some((v, index) => {
        if (v.path === view.path) {
          /** 防止 query 参数丢失 */
          if (v.fullPath !== view.fullPath) {
            /** 浅拷贝value值*/
            visitedViews.value[index] = Object.assign({}, view);
            console.log(visitedViews.value[index]);
          }
          return true;
        }
      })
    ) {
      return;
    }
    /** 增添tags*/
    visitedViews.value.push(Object.assign({}, view));
  };

  return {
    addVisitedView,
  };
});
