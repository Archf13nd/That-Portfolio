<template>
  <div class="nav-container">
    <div class="nav-grid">
      <div class="square">
        <ul class="square-grid nav nav-pills nav-pill-circle">
          <li class="nav-item circle-item">
            <a
              class="nav-link circle-link"
              href="https://www.linkedin.com/in/alastair-parkyns-8a683a201/"
              target="_blank"
              ><span class="logo linked-in"></span
            ></a>
          </li>
          <li class="nav-item circle-item">
            <a
              class="nav-link circle-link"
              href="https://github.com/Archf13nd"
              target="_blank"
              ><span class="logo github"></span
            ></a>
          </li>
          <li class="nav-item circle-item">
            <a class="nav-link circle-link" href="#"></a>
          </li>
          <li class="nav-item circle-item">
            <a class="nav-link circle-link" href="#"></a>
          </li>
        </ul>
      </div>
      <div class="square">
        <ul class="nav nav-pills">
          <li class="nav-item page-tab-item">
            <router-link
              to="contact"
              active-class="active"
              class="page-tab-link nav-link"
              >Hire Me</router-link
            >
          </li>
          <li class="nav-item page-tab-item">
            <router-link
              to="projects"
              active-class="active"
              class="page-tab-link nav-link"
              >Projects</router-link
            >
          </li>
        </ul>
      </div>
      <div class="square">
        <ul class="nav nav-pills">
          <li class="nav-item page-tab-item">
            <router-link
              to="skills"
              active-class="active"
              class="page-tab-link nav-link"
              >Skills</router-link
            >
          </li>
          <li class="nav-item page-tab-item">
            <router-link
              to="about"
              active-class="active"
              class="page-tab-link nav-link"
              >About me</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// import logo from '../assets/Logo.svg'
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Righteous&display=swap");

.linked-in {
  background: url("../assets/LinkedIn.svg");
}

.github {
  background: url("../assets/GitHub64.png");
}

.logo {
  display: inline-block;
  background-size: cover;
  background-repeat: none;
  width: 89%;
  height: 89%;
}

ul {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
a {
  color: #55de7b;
}

a:active {
  color: var(--active-text);
  background-color: var(--active);
  border-color: var(--border);
  box-shadow: inset 2px 2px 5px var(--shadow),
    inset -3px -3px 7px var(--shadow-light);
}

.nav {
  flex-wrap: nowrap;
  flex-direction: column;
}

.nav-container {
  position: relative;
  display: block;
  z-index: 666;
  max-width: 16.66vw;
  height: 16.66vw;
  max-width: 320px;
  height: 320px;
  background: url("../assets/Background.svg");
  background-size: cover;
  filter: drop-shadow(4px 4px 4px #3c3942);
  @media (max-width: 1300px) {
    display: none;
  }
}

.nav-grid {
  position: absolute;
  top: 5%;
  left: 5%;
  width: 92.5%;
  height: 92.5%;
  background: rgba(0, 0, 0, 0); // Production
  display: grid;
  grid-template: 48.65% 48.65% / 48.65% 48.65%;
  gap: 2.7%;
  color: #55de7b;
  align-items: center;
  justify-content: center;
}

.nav-item {
  position: relative;
}

.circle-item {
  width: 100%;
  height: 100%;
}

.nav-item > .circle-link {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.page-tab-item {
  width: 77.7%;
  height: 33%;
  margin-bottom: 11%;
}

.nav-item > .page-tab-link {
  width: 100%;
  height: 100%;
  font-size: 18px;
  font-family: Righteous, sans-serif;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
}

.square {
  // Production
  background: rgba(32, 104, 29, 0);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}

.square-grid {
  display: grid;
  width: 77.7%;
  height: 77.7%;
  grid-template: 43% 43% / 43% 43%;
  grid-gap: 14.28%;
  justify-content: flex-start;
  align-items: flex-start;
}
</style>
