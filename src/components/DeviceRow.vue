<script setup lang="ts">
import { type Device } from "@/types";
import type { PropType } from "vue";
import { computed } from "vue";
const props = defineProps({
  device: {
    type: Object as PropType<Device>,
    required: true,
  },
});

const getStatus = computed(() => {
  return props.device.connected == "true" ? "ONLINE" : "OFFLINE";
});
</script>
<template>
  <td>
    <img src="../assets/icons/computer-logo-dark.png" alt="ordinateur_logo" />
  </td>
  <td class="hostname">{{ device.hostname }}</td>
  <td>{{ device.mac_address }}</td>
  <td>{{ device.ip_address }}</td>
  <td>{{ getStatus }}</td>
  <td>{{ device.datetime }}</td>
  <td>15j12h08m</td>
</template>
<style scoped>
td > img {
  width: 30px;
  height: 30px;
}

.hostname {
  font-weight: 700;
  color: var(--accent2);
}

td {
  font-size: 0.8em;
  padding: 2em;
  text-align: center;
  color: black;
}
</style>
