<script setup lang="ts">
import VMrow from "./VMrow.vue";
import { type VmsType } from "@/types";
import { ref, computed } from "vue";
import type { PropType } from "vue";
const props = defineProps({
  vms: {
    type: Object as PropType<VmsType>,
    required: true,
  },
});
const fmvms = computed(() => {
  let list = props.vms.errors;
  return props.vms;
});
</script>
<template>
  <div class="vm-table-container widget">
    <table class="data-table">
      <thead>
        <tr>
          <th>Check</th>
          <th>URL</th>
          <th>Statut</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="vm in props.vms.errors" :key="vm.url">
          <VMrow :vm="vm" />
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style>
.vm-table-container {
  display: flex;
  flex-direction: column;
  padding: 1.5em;
  min-height: 20vh;
}

.data-table {
  width: 100%;
  border-color: var(--color-border-table);
  border-spacing: 0;
}

.data-table > thead > tr > th {
  padding: 1em;
  border-bottom: 1px solid;
  border-color: inherit;
  text-align: center;
  font-size: 1em;
  font-weight: 600;
}

.table-title {
  font-size: 1.5em;
  font-weight: 700;
  margin-top: 1em;
  margin-bottom: 1em;
}
</style>
