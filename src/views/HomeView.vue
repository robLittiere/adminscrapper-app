<script setup lang="ts">
import Home from "@/components/Home.vue";
import HeaderAdmin from "@/components/HeaderAdmin.vue";
import Sidebar from "@/components/Sidebar.vue";
</script>

<template>
  <HeaderAdmin />
  <div class="view_container">
    <Sidebar />
    <main class="content"></main>
  </div>
</template>

<style>
.view_container {
  flex: 1;
  display: flex;
  height: 100%;
}

.content {
  flex: 1;
  background-color: var(--color-background-mute);
}
</style>
