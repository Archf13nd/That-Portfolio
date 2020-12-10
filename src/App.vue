<template>
  <div id="app">
    <the-nav></the-nav>
    <router-view/>
  </div>
</template>

<script>
import theNav from './components/Nav.vue'

export default {
  components: {
    theNav
  }
  
}
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

body {
  font-family: Helvetica, sans-serif;
  box-sizing: border-box;

}
</style>
