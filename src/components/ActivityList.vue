<template>
  <div class="activity_grid">
    <ActivityCard
      title="Nombre de machines détectées"
      content="32"
      icon_filename="computer-logo-dark.png"
      color="positive"
    />
    <ActivityCard
      title="Nombre de machines pingées dernièrement"
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
</template>
<script lang="ts">
import ActivityCard from "./ActivityCard.vue";
export default {
  components: { ActivityCard },
  data() {
    return {};
  },
};
</script>
<style>
.activity_grid {
  display: grid;
  grid-gap: 12px;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}
</style>
