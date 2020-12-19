<template>
  <div class="screen-container">
    <div class="the-container">
      <div class="skill">
        <img src="../assets/HTML5.svg" alt="HTML5 logo" />
        <ul>
          <li>Performence</li>
          <li>Semantics</li>
          <li>Multimedia</li>
          <li>SEO</li>
        </ul>
      </div>
      <div class="skill">
        <img class='css3' src="../assets/CSS3.svg" alt="CSS3 Logo" />
        <ul>
          <li>Responsive Design</li>
          <li>Maintainable</li>
          <li>Scalable</li>
          <li>Flexbox and Grid</li>
          <li>Sass</li>
        </ul>
      </div>
      <div class="skill">
        <img src="../assets/javascript.svg" alt="Javascript logo" />
        <ul>
          <li>Es6+</li>
          <li>Optimized</li>
          <li>Data stuctures</li>
          <li>Algorithms</li>
        </ul>
      </div>
      <div class="skill">
        <img src="../assets/vuejs.svg" alt="Vue Logo" />
        <ul>
          <li>Vue 3</li>
          <li>Vue CLI</li>
          <li>Vuex</li>
          <li>Vue Router / axios</li>
          <li>Plugins</li>
        </ul>
      </div>
      <div class="skill">
        <img src="../assets/webpack.svg" alt="Webpack Logo" />
        <ul>
          <li>File Bundling</li>
          <li>Further optimization</li>
          <li>Minified code</li>
          <li>Tailored configs</li>
        </ul>
      </div>
      <div class="skill npm">
        <img src="../assets/npm.svg" alt="NPM logo" />
        <ul>
          <li>Latest Tech</li>
          <li>Faster workflow</li>
          <li>I'm security conscious</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
img {
  max-width: 180px;
}

.css3 {
    height: 180px;
    & ~ ul {
        margin: 20px 0 0 60px;
    }
}

.screen-container {
  position: absolute;
  top: 0;
  left: 0;
  padding: 5% 3% 5% 3%;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.the-container {
  min-width: 400px;
  width: 60%;

  display: grid;
  grid-template: 1fr / repeat(auto-fill, minmax(300px, 1fr));
  // grid-template: 300px / 700px;
  align-items: center;
  justify-content: center;
  // margin-top: 5%;
  // background: #000;
}

.skill {
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #54d169;

& > ul {
    margin-left: 24px;
}

}
</style>
