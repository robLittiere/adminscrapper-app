<template lang="">
  <div class="header_container">
    <div class="left_side">
      <div class="logo_container"></div>
      <div class="app_name">AdminScrapper</div>
    </div>
    <div class="right_side">
      <div class="scan_button">Scan me</div>
      <ul class="menu">
        <li>
          <router-link class="menu_item" to="/">Home</router-link>
        </li>
        <li>
          <router-link class="menu_item" to="/dashboard">Dashboard</router-link>
        </li>
        <li>
          <router-link class="menu_item" to="/about">About</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
export default {};
</script>
<style scoped>
.header_container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 80px;
  background-color: #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.right_side {
  display: flex;
  align-items: center;
}

.menu {
  display: flex;
  list-style: none;
  align-items: center;
}

.menu_item {
  padding: 1em;
}
</style>
