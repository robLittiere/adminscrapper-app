<script setup lang="ts">
import Home from "@/components/Home.vue";
import HeaderAdmin from "@/components/HeaderAdmin.vue";
import Sidebar from "@/components/Sidebar.vue";
import ActivityCard from "@/components/ActivityCard.vue";
</script>

<template>
  <HeaderAdmin />
  <div class="view_container">
    <Sidebar />
    <main class="content">
      <div class="activity_grid">
        <ActivityCard title="Nombre de machines monitoré" content="32" />
        <ActivityCard title="Nombre de machines pingé" content="14" />
        <ActivityCard title="Alertes machines inactives" content="2" />
      </div>
    </main>
  </div>
</template>

<style>
.view_container {
  flex: 1;
  display: flex;
  height: 100%;
}

.content {
  padding: 2em;
  flex: 1;
  background-color: var(--color-background-mute);
  display: flex;
  flex-direction: column;
}

.activity_grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}
</style>
