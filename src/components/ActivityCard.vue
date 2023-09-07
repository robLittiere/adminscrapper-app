<template lang="">
  <div class="activity_container">
    <div class="activity_title">{{ title }}</div>
    <div class="activity_content">
      <div class="activity_icon"></div>
      <div class="activity_data">{{ content }}</div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  props: {
    title: String,
    content: String,
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.activity_container {
  display: flex;
  flex-direction: column;
  background-color: white;
  min-height: 20vh;
  margin: 8px;
}
</style>
