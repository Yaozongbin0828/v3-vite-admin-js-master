<template>
  <footer class="layout-footer">
    MIT © 2023-PRESENT @yaozongbin{{ VITE_APP_TITLE }}
  </footer>
</template>

<script setup>
const VITE_APP_TITLE = import.meta.env.VITE_APP_TITLE;
</script>
<style scoped lang="scss">
.layout-footer {
  width: 100%;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #a1a4ab;
}
</style>
