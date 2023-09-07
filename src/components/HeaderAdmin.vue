<template lang="">
  <div class="header_container">
    <div class="left_side">
      <div class="logo_container">
        <img src="../assets/saro/saro_128.png" alt="Logo SARO" />
      </div>
      <div class="app_name">SARO</div>
    </div>
    <div class="right_side">
      <ul class="menu">
        <li>
          <router-link class="menu_item" to="/">Administration</router-link>
        </li>
        <li>
          <router-link class="menu_item" to="/dashboard"
            >VM Disponibles</router-link
          >
        </li>
        <li>
          <router-link class="menu_item" to="/about">Liens utiles</router-link>
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
  min-height: 80px;
  background-color: #fff;
  border-bottom: 1px solid lightgray;
}

.right_side {
  display: flex;
  align-items: center;
}

.left_side {
  display: flex;
  align-items: center;
}

.menu {
  display: flex;
  list-style: none;
  align-items: center;
  padding-right: 2em;
}

.menu_item {
  padding: 2.3em 1.2em 2.3em 1.2em;
  color: var(--color-header-text);
}
.menu_item:hover {
  color: var(--color-header-hover);
}

.logo_container {
  padding: 8px;
  max-height: 150px;
  max-width: 150px;
  padding-right: 1em;
  padding-left: 6px;
  border-right: 1px solid lightgray;
}

.logo_container > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.app_name {
  padding-left: 1em;
  font-weight: bold;
  font-size: 1.5em;
}
</style>
