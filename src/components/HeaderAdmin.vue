<template lang="">
  <div class="header_container">
    <div class="left_side">
      <div class="logo_container">
        <img src="../assets/saro/saro_128.png" alt="Logo SARO" />
      </div>
    </div>
    <div class="right_side">
      <div class="app_name">SARO</div>
      <ul class="menu">
        <li>
          <router-link class="menu_item" to="/"
            ><div>Administration</div>
            <span></span
          ></router-link>
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
  align-items: center;
  min-height: var(--header-height);
  background-color: #fff;
}

.right_side {
  flex: 1;
  display: flex;
  height: var(--header-height);
  justify-content: space-between;
  align-items: center;
  border-left: 2px solid var(--color-border-light);
}

.left_side {
  display: flex;
  align-items: center;
}

.menu {
  height: 100%;
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: center;
  padding-right: 2em;
  font-variation-settings: "wght" 700;
  font-size: 16px;
}

li {
  height: 100%;
}

.menu_item {
  padding: 0 1.2em;
  padding-top: 2px;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
  border-bottom: 2px solid transparent;
}

.menu_item > span {
  position: absolute;
  bottom: 0;
  display: block;
  height: 2px;
  background: black;
  width: 0;
}

.menu_item:hover {
  border-bottom: 2px solid var(--accent1);
}

.logo_container {
  padding: 4px;
  max-height: var(--header-height);
  min-width: var(--sidebar-width);
  padding-right: 1em;
  padding-left: 6px;
}

.logo_container > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.app_name {
  padding-left: 1em;
  font-variation-settings: "wght" 800;
  font-size: 2.5em;
  color: var(--accent2);
  letter-spacing: 4px;
}
</style>
