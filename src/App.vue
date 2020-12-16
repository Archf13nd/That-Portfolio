<template>
  <div id="app">
    <the-nav></the-nav>
    <the-pill />
    <router-view />
  </div>
</template>

<script>
import theNav from "./components/Nav.vue";
import thePill from "./components/DarkMode.vue";

export default {
  components: {
    theNav,
    thePill
  }
};
</script>

<style lang="scss">
:root {
  --primary-color-base: #000000;
  --secondary-color-base: #000000;
}

html,
body,
::before,
::after {
  margin: 0;
  padding: 0;
}

html {
  box-sizing: border-box;
}

#app {
  min-height: 100vh;
}

*,
*::before,
*::after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}

body {
  font-family: Helvetica, sans-serif;
  background: #141414;
}
</style>
