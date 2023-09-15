<script setup lang="ts">
import Home from "@/components/Home.vue";
import HeaderAdmin from "@/components/HeaderAdmin.vue";
import Sidebar from "@/components/Sidebar.vue";
import ActivityCard from "@/components/ActivityCard.vue";
import DeviceTable from "@/components/DeviceTable.vue";
import ActivityList from "@/components/ActivityList.vue";
import { fetchDevices } from "@/helpers/apiHelper";
import { ref, onMounted, computed } from "vue";
import { type VmsType, type VmType } from "@/types";
import { useDeviceStore } from "@/stores/device";
import { fetchErrorDevices, fetchSuccessDevices } from "@/helpers/apiHelper";
import VmTable from "@/components/VmTable.vue";
let deviceStore = useDeviceStore();

const vms = ref<VmsType>({
  errors: [],
  success: [],
});

onMounted(async () => {
  deviceStore.fillDevices();

  console.log("Im getting success and error urls....");
  let errors: string[] = await fetchErrorDevices();
  let errobj: VmType[] = errors.map((error) => {
    let split = error.split("-");
    return {
      name: split[0],
      url: split[1],
      date: split[2],
      status: "OFFLINE",
    } as VmType;
  });
  vms.value.errors = errobj;

  let success: string[] = await fetchSuccessDevices();
  let suobj: VmType[] = success.map((success) => {
    let split = success.split("-");
    return {
      name: split[0],
      url: split[1],
      date: split[2],
      status: "ONLINE",
    } as VmType;
  });
  vms.value.success = suobj;
});
</script>

<template>
  <HeaderAdmin />
  <div class="view_container">
    <Sidebar />
    <main class="content">
      <ActivityList />
      <div class="ativity_table"><VmTable :vms="vms" /></div>
    </main>
  </div>
</template>
<script lang="ts"></script>

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
  gap: 15px;
}
</style>
