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

const statusClass = computed(() => {
  return {
    status: true,
    "bg-positive color-accent": props.device.connected == "true",
    "bg-warning-accent color-warning": props.device.connected == "false",
  };
});

const formatLastConnection = computed(() => {
  const currentDate = new Date();
  const timestamp = new Date(props.device.datetime).getTime();
  const currentTimestamp = currentDate.getTime();
  const difference = currentTimestamp - timestamp;

  const seconds = Math.floor(difference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    return `${days} j ${hours % 24} h ${minutes % 60} min${
      minutes % 60 === 1 ? "" : "s"
    }`;
  } else if (hours > 0) {
    return `${hours} h ${minutes % 60} min${minutes % 60 === 1 ? "" : "s"}`;
  } else if (minutes > 0) {
    return `${minutes} min${minutes === 1 ? "" : "s"}`;
  } else {
    return `${seconds} seconde${seconds === 1 ? "" : "s"}`;
  }
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
  <td>
    <span :class="statusClass">{{ getStatus }}</span>
  </td>
  <td>{{ device.datetime }}</td>
  <td>{{ formatLastConnection }}</td>
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

.status {
  font-weight: 500;
  padding: 5px;
  padding-left: 3em;
  padding-right: 3em;
}
</style>
