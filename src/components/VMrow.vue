<script setup lang="ts">
import { type VmType } from "@/types";
import type { PropType } from "vue";
import { computed } from "vue";
const props = defineProps({
  vm: {
    type: Object as PropType<VmType>,
    required: true,
  },
});

const statusClass = computed(() => {
  return {
    status: true,
    "bg-positive color-accent": props.vm.status.toLowerCase() == "online",
    "bg-warning-accent color-warning":
      props.vm.status.toLowerCase() == "offline",
  };
});
</script>
<template>
  <td>
    <div class="vm-name">
      {{ props.vm.name }}
    </div>
  </td>
  <td>
    <div class="vm-url">
      {{ props.vm.url }}
    </div>
  </td>
  <td>
    <div class="vm-status">
      <span>{{ vm.status }}</span>
    </div>
  </td>
  <td>
    <div class="vm-date">{{ vm.date }}</div>
  </td>
</template>

<style scoped>
.vm-container {
  width: 100%;
  padding: 1em;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: white;
}

td {
  font-size: 0.8em;
  padding: 2em;
  text-align: center;
  color: black;
  border-bottom: 1px solid;
  border-color: var(--color-border-table);
}

.vm-name {
  font-weight: 700;
  color: var(--accent2);
}
</style>
