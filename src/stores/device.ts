import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { type Device } from "@/types";
import { fetchDevices } from "@/helpers/apiHelper";

export const useDeviceStore = defineStore("device", () => {
  const devices = ref<Device[]>([]);

  async function fillDevices() {
    let d: Device[] = await fetchDevices();
    devices.value = d;
  }
  return {
    devices,
    fillDevices,
  };
});
