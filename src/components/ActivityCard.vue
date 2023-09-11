<template lang="">
  <div class="activity_container">
    <div class="activity_title">{{ title }}</div>
    <div class="activity_content">
      <div :class="iconClass">
        <img :src="getImageUrl()" alt="Statut d'activité" />
      </div>
      <div class="activity_data">{{ content }}</div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  props: {
    title: String,
    content: String,
    icon_filename: String,
    color: String,
  },
  data() {
    return {};
  },
  computed: {
    iconClass() {
      return {
        activity_icon: true,
        "bg-warning": this.color == "warning",
        "bg-ping": this.color == "ping",
        "bg-positive": this.color == "positive",
      };
    },
  },
  methods: {
    getImageUrl() {
      let url = new URL(
        `../assets/icons/${this.icon_filename}`,
        import.meta.url
      );
      console.log(url);
      return url;
    },
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
  padding: 1.5em;
}

.activity_title {
  font-size: 16px;
  font-weight: 700;
}

.activity_content {
  height: 100%;
  display: flex;
  align-items: flex-end;
  gap: 16px;
  margin-bottom: 2em;
}

.activity_data {
  font-weight: bold;
  font-size: 2em;
  padding-bottom: 6px;
}

.activity_icon {
  height: 50px;
  width: 50px;
  padding: 10px;
  border-radius: 100%;
}

.activity_icon > img {
  height: 100%;
  width: 100%;
}
</style>
