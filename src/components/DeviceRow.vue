<template>
  <td>
    <img src="../assets/icons/computer-logo-dark.png" alt="ordinateur_logo" />
  </td>
  <td class="hostname">Test de Robin</td>
  <td>89:09:56:54:65</td>
  <td>192.168.100.1</td>
  <td>ONLINE</td>
  <td>12/09/2023 10:40:21</td>
  <td>15j12h08m</td>
</template>
<script lang="ts">
export default {};
</script>
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
