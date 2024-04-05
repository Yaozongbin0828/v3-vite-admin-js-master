<template>
    <div class="app-wrapper">
        <!-- mobile端侧边栏遮罩层 -->
        <!-- 侧边栏 -->
        <Sidebar class="sidebar-container" />
        <!-- 主容器 -->
        <div class="main-container">
            <div class="layout-header">
                <NavigationBar />
            </div>
        </div>
        <!-- 页面主题内容 -->
        <AppMain class="app-main" />
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useAppStore } from '@/store/modules/app'
import { useSettingsStore } from '@/store/modules/settings'
import { AppMain, NavigationBar, Sidebar } from "./components"
import { useResize } from "@/hooks/useResize"

const { isMobile } = useResize()
const appStore = useAppStore()
const settingsStore = useSettingsStore()





</script>
<style scoped lang="scss">
@import "@/styles/mixins.scss";
/** $transition-time: 0.35s;*/

.app-wrapper {
    @include clearfix;
    position: relative;
    width: 100%;
}


.drawer-bg {
    background-color: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
}

.main-container {
    min-height: 100%;
    transition: margin-left 0.28s;
    margin-left: var(--v3-sidebar-width);
    position: relative;
}

.sidebar-container {
    transition: width 0.28s;
    width: var(--v3-sidebar-width) !important;
    height: 100%;
    position: fixed;
    font-size: 0px;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    overflow: hidden;
}

.fixed-header {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    width: calc(100% - var(--v3-sidebar-width));
    transition: width 0.28s;
}

.hideSidebar {
    .main-container {
        margin-left: var(--v3-sidebar-hide-width);
    }

    .sidebar-container {
        width: var(--v3-sidebar-hide-width) !important;
    }

    .fixed-header {
        width: calc(100% - var(--v3-sidebar-hide-width));
    }
}


/** for mobile response 适配移动端*/
.mobile {
    .main-container {
        margin-left: 0px;
    }

    .sidebar-container {
        transition: transform 0.28s;
        width: var(--v3-sidebar-width) !important;
    }

    &.openSidebar {
        position: fixed;
        top: 0;
    }

    &.hideSidebar {
        .sidebar-container {
            pointer-events: none;
            transition-duration: 0.3s;
            transform: translate3d(calc(0px - var(--v3-sidebar-width)), 0, 0);
        }
    }

    .fixed-header {
        width: 100%;
    }
}

.withoutAnimation {

    .main-container,
    .sidebar-container {
        transition: none;
    }
}
</style>