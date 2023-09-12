import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useDeviceStore = defineStore("device", () => {
  const devices = ref([]);

  return { devices };
});
