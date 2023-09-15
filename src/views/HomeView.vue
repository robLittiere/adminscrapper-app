<script setup lang="ts">
import Home from "@/components/Home.vue";
import HeaderAdmin from "@/components/HeaderAdmin.vue";
import Sidebar from "@/components/Sidebar.vue";
import ActivityCard from "@/components/ActivityCard.vue";
import DeviceTable from "@/components/DeviceTable.vue";
import ActivityList from "@/components/ActivityList.vue";
import { fetchDevices } from "@/helpers/apiHelper";
import { ref, onMounted, onBeforeMount } from "vue";
import { type Device } from "@/types";
import { useDeviceStore } from "@/stores/device";

let deviceStore = useDeviceStore();

onMounted(async () => {
  deviceStore.fillDevices();
});
</script>

<template>
  <HeaderAdmin />
  <div class="view_container">
    <Sidebar />
    <main class="content">
      <ActivityList />
      <div class="ativity_table">
        <DeviceTable />
      </div>
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
