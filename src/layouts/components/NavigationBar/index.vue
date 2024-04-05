<template>
  <div class="navigation-bar">
    <!-- 隐藏/显示按钮 -->
    <Hamburger
      :is-active="sidebar.opened"
      class="hamburger"
      @toggle-click="toggleSidebar"
    />
    <!-- 面包屑导航 -->
    <Breadcrumb class="breadcrumb" />
    <!-- 右边组件 -->
    <div class="right-menu">
      <!-- Screenfull 全屏-->
      <Screenfull/>
      <!-- ThemeSwitch 主题切换 -->
      <!-- Notify 通知 -->
      <el-dropdown class="right-menu-item">
        <!-- 用户名 头像 -->
        <div class="right-menu-avatar">
          <el-avatar :icon="UserFilled" :size="30" />
          <span>{{ userStore.username }}</span>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <a target="_blank" href="https://yaozongbin.gitee.io/yaozongbin/">
              <el-dropdown-item>个人博客</el-dropdown-item>
            </a>
            <a target="_blank" href="https://github.com/yaozongbin">
              <el-dropdown-item>GitHub</el-dropdown-item>
            </a>
            <a target="_blank" href="https://gitee.com/yaozongbin">
              <el-dropdown-item>Gitee</el-dropdown-item>
            </a>
            <el-dropdown-item divided @click="logout">
              <span style="display: block">退出登录</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useAppStore } from "@/store/modules/app";
import { UserFilled } from "@element-plus/icons-vue";
import { useUserStore } from "@/store/modules/user";

import Breadcrumb from "../Breadcrumb/index.vue";
import Hamburger from "../Hamburger/index.vue";
import Screenfull from "@/components/Screenfull/index.vue"

const appStore = useAppStore();
const userStore = useUserStore();
const router = useRouter();

const sidebar = computed(() => {
  return appStore.sidebar;
});

/** Sidebar默认为false*/
const toggleSidebar = () => {
  appStore.toggleSidebar(false);
};

/** 退出登录返回到登录页面*/
const logout = () => {
  userStore.logout();
  router.push("/login");

};
</script>
<style scoped lang="scss">
.navigation-bar {
  height: var(--v3-navigationbar-height);
  overflow: hidden;
  background: #fff;

  .hamburger {
    display: flex;
    align-items: center;
    height: 100%;
    float: left;
    padding: 0 15px;
    cursor: pointer;
  }

  .breadcrumb {
    float: left;

    /**参考 Bootstrap 的响应式设计 WIDTH = 576*/
    @media screen and (max-width: 576px) {
      display: none;
    }
  }

  /** 右上功能*/
  .right-menu {
    float: right;
    margin-right: 10px;
    height: 100%;
    display: flex;
    align-items: center;
    color: #606266;

    .right-menu-item {
      padding: 0 10px;
      cursor: pointer;

      .right-menu-avatar {
        display: flex;
        align-items: center;

        .el-avatar {
          margin-right: 10px;
        }

        span {
          font-size: 16px;
        }
      }
    }
  }
}
</style>
