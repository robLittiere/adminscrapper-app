<template>
  <div class="table-container widget">
    <table class="data-table">
      <thead>
        <tr>
          <th></th>
          <th>Nom de machine</th>
          <th>Adresse MAC</th>
          <th>Adresse IP</th>
          <th>Statut</th>
          <th>Dernière connexion</th>
          <th>Temps depuis la dernière connexion</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <DeviceRow />
        </tr>
        <tr>
          <DeviceRow />
        </tr>
        <tr>
          <DeviceRow />
        </tr>
        <tr>
          <DeviceRow />
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script lang="ts">
import DeviceRow from "./DeviceRow.vue";

export default {
  components: {
    DeviceRow,
  },
  data() {
    return {};
  },
};
</script>
<style>
.table-container {
  display: flex;
  min-height: 50vh;
  padding: 1.5em;
}
.data-table {
  width: 100%;
  border-color: var(--color-border-table);
  border-spacing: 0;
}

.data-table > thead > tr > th {
  padding: 0.5em;
  border-bottom: 1px solid;
  border-color: inherit;
  text-align: center;
  font-size: 1em;
  font-weight: 600;
}
</style>
