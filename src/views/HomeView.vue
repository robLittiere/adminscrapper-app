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
        <ActivityCard
          title="Nombre de machines détectés"
          content="32"
          icon_filename="computer-logo-dark.png"
          color="positive"
        />
        <ActivityCard
          title="Nombre de machines pingé dernièrement"
          content="14"
          icon_filename="network.png"
          color="ping"
        />
        <ActivityCard
          title="Alertes machines inactives"
          content="2"
          icon_filename="warning1-sm.png"
          color="warning"
        />
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
