<template>
  <a :href="url">
    <div class="projects-container shadow-soft">
      <p class="app-progress">Progress: {{ progress }}</p>
      <div class="details">
        <h2>{{ title }}</h2>
        <p class="desc"><span>Description:</span> {{ description }}</p>
      </div>
      <div class="tag-container">
        <div class="tag" v-for="techtag in tech" :key="techtag">
          {{ techtag }}
        </div>
      </div>
      <div class="screenshot">
        <img src="../assets/message-app.png" alt="" />
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: ["title", "description", "tech", "progress", "url"]
};
</script>

<style lang="scss" scoped>
.projects-container {
  // width: 800px;
  position: relative;
  background: var(--primary);
  border-radius: 14px;
  padding: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  // flex-wrap: wrap;
}

.details {
  // background: green;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #55de7b;
  width: 100%;
  min-width: 100px;
  text-align: center;
}

.desc {
  color: #55de7cc5;
  margin: 0;
}

span {
  color: #55de7c;
}

.app-progress {
  display: inline;
  height: 30px;
  width: 150px;
  padding: 2px;
  background: var(--primary);
  border-radius: 6px;
  box-shadow: inset 2px 2px 5px var(--shadow),
    inset -3px -3px 7px var(--shadow-light);
  color: #55de7b;
  position: absolute;
  text-align: center;
  top: 1%;
  right: 3%;
}

.tag-container {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 30px;
  margin: 20px 0;
}

.tag {
  background: var(--primary);
  box-shadow: inset 2px 2px 5px var(--shadow),
    inset -3px -3px 7px var(--shadow-light);
  border-radius: 7px;
  min-width: 70px;
  text-align: center;
  padding: 5px;
  color: #55de7b;
  margin-left: 10px;
}

img {
  box-shadow: inset 2px 2px 5px var(--shadow),
    inset -3px -3px 7px var(--shadow-light);
  padding: 5px;
  background: var(--primary);
}

h2 {
  display: inline-block;
  width: fit-content;
}

.screenshot {
  background: #000;
  height: 100%;
  max-height: 300px;
  min-width: 300px;
}
</style>
