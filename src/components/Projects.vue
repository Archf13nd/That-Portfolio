<template>
  <div class="window-container">
    <div class="side"></div>
    <div class="project-list">
      <project-card
        v-for="project in projects"
        :key="project.name"
        :title="project.title"
        :description="project.description"
        :tech="project.tech"
        :progress="project.progress"
        :url="project.url"
      >
      </project-card>
    </div>
    <div class="side"></div>
  </div>
</template>

<script>
import ProjectCard from "./ProjectCard.vue";
export default {
  components: {
    ProjectCard
  },
  computed: {
    projects() {
      return this.$store.getters["getProjects"];
    }
  }
};
</script>

<style scoped>
.window-container {
  height: 100vh;
  width: 100vw;
  display: flex;
}

.project-list {
  flex: 3.3 1 400px;
  margin-top: 150px;
}

.side {
  flex: 6.6 2 100px;
}

h1 {
  font-size: 3vw;
  color: #55de7b;
}
h3,
p {
  margin: 0;
  color: #55de7b;
}
ul {
  list-style: none;
}
</style>
