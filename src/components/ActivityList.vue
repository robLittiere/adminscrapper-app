<script setup lang="ts">
import { computed } from "vue";
import { useDeviceStore } from "@/stores/device";
import ActivityCard from "@/components/ActivityCard.vue";
import { storeToRefs } from "pinia";
const deviceStore = useDeviceStore();
const { devices } = storeToRefs(deviceStore);

const getNumberOfDevices = computed(() => {
  return devices.value.length;
});

const getNumberOfPingedDevices = computed(() => {
  return devices.value.filter((device) => device.connected == "true").length;
});

const getNumberOfDisconnectedDevices = computed(() => {
  return devices.value.filter((devices) => devices.connected == "false").length;
});
</script>
<template>
  <div class="activity_grid">
    <ActivityCard
      title="Nombre de machines détectées"
      :content="getNumberOfDevices"
      icon_filename="computer-logo-dark.png"
      color="positive"
    />
    <ActivityCard
      title="Nombre de machines pingées dernièrement"
      :content="getNumberOfPingedDevices"
      icon_filename="network.png"
      color="ping"
    />
    <ActivityCard
      title="Alertes machines inactives"
      :content="getNumberOfDisconnectedDevices"
      icon_filename="warning1-sm.png"
      color="warning"
    />
  </div>
</template>
<style>
.activity_grid {
  display: grid;
  grid-gap: 12px;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}
</style>
