<template>
<div class="screen-container">
  <div class="skill-container bg-primary shadow-soft">
    <h1 class="title">Website</h1>
    <div class="skill-header">
      <div class="skill-badge vuejs shadow-soft"></div>
      <div class="badge-container">
        <div class="skill-badge javascript shadow-soft"></div>
        <div class="skill-badge css3 shadow-soft"></div>
      </div>
    </div>
    <div class="skill-boxes-grid">
    <div class="skill-box bg-primary shadow-soft">
        <h2 class="skill-box__header">Optimized</h2>
        <div class="skill-box__content">
          <div class="img fast"></div>
          <p>Even with lots of images or files, users will receive content asap!</p>
        </div>
      </div>
      <div class="skill-box bg-primary shadow-soft">
        <h2 class="skill-box__header">Pixel Perfect</h2>
        <div class="skill-box__content">
          <div class="img cube"></div>
          <p class="text">If you provide the design I will treat in with respect. I uphold myself to pixel perfect standards.</p>
        </div>
      </div>
      <div class="skill-box bg-primary shadow-soft">
        <h2 class="skill-box__header">Communication</h2>
        <div class="skill-box__content">
          <div class="img comms"></div>
          <p>I will provide you with periodic updates and together we can steer the ship in the right direction </p>
        </div>
      </div>
      <div class="skill-box bg-primary shadow-soft">
        <h2 class="skill-box__header">SEO</h2>
        <div class="skill-box__content">
          <div class="img seo"></div>
          <p>I’ll do everything in my power to give your site a great ranking which will bring you more visitors.</p>
        </div>
      </div>
    </div>
  </div>

  <div class="skill-container bg-primary shadow-soft">
    <h1 class="title">Web Services</h1>
    <div class="skill-header">
      <div class="skill-badge vuejs shadow-soft"></div>
      <div class="badge-container">
        <div class="skill-badge javascript shadow-soft"></div>
        <div class="skill-badge css3 shadow-soft"></div>
      </div>
    </div>
    <div class="skill-boxes-grid">
    <div class="skill-box bg-primary shadow-soft">
        <h2 class="skill-box__header">Bug Fixing</h2>
        <div class="skill-box__content">
          <div class="img bug"></div>
          <p>Got bugs? I can remove them from your software.</p>
        </div>
      </div>
      <div class="skill-box bg-primary shadow-soft">
        <h2 class="skill-box__header">New Features</h2>
        <div class="skill-box__content">
          <div class="img feature"></div>
          <p class="text">If you have a pre-existing site and want to add a wicked new feature, I can do that for you!</p>
        </div>
      </div>
      <div class="skill-box bg-primary shadow-soft">
        <h2 class="skill-box__header">Responsive</h2>
        <div class="skill-box__content">
          <div class="img res"></div>
          <p>Does your site break apart on mobile? I can take your desktop design and make it fit all screen sizes.</p>
        </div>
      </div>
      <div class="skill-box bg-primary shadow-soft">
        <h2 class="skill-box__header">UI Cleanup</h2>
        <div class="skill-box__content">
          <div class="img ui"></div>
          <p>Is a button overlapping text? Is a card missing its shadow? CSS is a passion of mine, I can fix your UI</p>
        </div>
      </div>
      <div class="skill-box bg-primary shadow-soft">
        <h2 class="skill-box__header">And more!</h2>
        <div class="skill-box__content">
          <div class="img seo"></div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, voluptates.</p>
        </div>
      </div>
      <div class="skill-box bg-primary shadow-soft">
        <h2 class="skill-box__header">And more!</h2>
        <div class="skill-box__content">
          <div class="img seo"></div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, repellendus?</p>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<style lang="scss" scoped>

.bg-primary {
  background: var(--primary);
}

.screen-container {
  min-height: 100vh;
  width: 100vw;
  // margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.skill-container {
  position: relative;
  display: block;
  width: 100%;
  max-width: 110rem;
  height: fit-content;
  min-height: 55rem;
  margin: 10rem 0 0 0;
  color: var(--text-primary);
  border-radius: 14px;

  &:last-child {
    margin-bottom: 10rem;
  }

  
}

.skill-header {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: -8rem;
  justify-content: space-between;

  @media screen and (max-width: 700px) {
    margin-top: 0;
    justify-content: center;
  }
}

.skill-badge {
  display: inline-block;
  width: 9rem;
  height: 9rem;
  border-radius: 14px;
  margin:0 0 0 3rem;

  @media screen and (max-width: 313px) {
    margin-left: 1rem;
  }
}

.vuejs {
background: url('../assets/vuejs.svg') no-repeat center;
background-size: 70%;
}

.css3 {
background: url('../assets/CSS3.svg') no-repeat center;
background-size: 55%;
}

.javascript {
background: url('../assets/javascript.svg') no-repeat center;
background-size: 70%;
}

.badge-container {
  margin-right: 3rem;
   @media screen and (max-width: 313px) {
    margin-right: 0rem;
  }
}

.title {
  width: fit-content;
  margin: 0 auto;
  text-align: center;
  font-size: 8rem;
  font-family: Righteous, sans-serif;
  filter: brightness(110%) drop-shadow(1px 1px 1px var(--text-primary));
}

.skill-boxes-grid {
  height: 80%;
  width: 100%;
  margin: 0 auto 4rem auto;
  display: grid;
  justify-content: center;
  justify-items: center;
  align-items: center;
  // grid-template-rows: repeat(auto-fill;
  grid-template-columns: repeat(auto-fit, minmax(200px, 350px));
}

.skill-box {
  height: 16rem;
  width: 100%;
  max-width: 40rem;
  border-radius: 14px;
  margin-top: 3.5rem;

&__header {
  width: fit-content;
  height: 30%;
  margin: 0 auto;
  font-size: 4rem;
  font-family: Righteous, sans-serif;

}


&__content {
  height: 70%;
  margin: 0rem 1rem 0 1rem;
display: flex;
justify-content: space-between;
align-items: center;
}

}

p {
  margin: 0 0 0 1rem;
  width: 90%;
  padding: 1rem;
  font-size: 14px;
  color: rgb(13, 255, 0);
  font-weight: bold;
  filter: brightness(10%);
}


.img {
  width: 5rem;
  height: 5rem;
  background: #000;
}

.fast {
  background: url('../assets/fast.png') no-repeat center;
  background-size: 100%;
}
.cube {
  background: url('../assets/cube.png') no-repeat center;
  background-size: 100%;
}

.comms {
  background: url('../assets/Coms.png') no-repeat center;
  background-size: 100%;
}

.seo {
  background: url('../assets/SEO.svg') no-repeat center;
  background-size: 100%;
}

.bug {
  background: url('../assets/bug.svg') no-repeat center;
  background-size: 100%;
}
.feature {
  background: url('../assets/feature.svg') no-repeat center;
  background-size: 100%;
}
.res {
  background: url('../assets/res.svg') no-repeat center;
  background-size: 100%;
}
.ui {
  background: url('../assets/ui.svg') no-repeat center;
  background-size: 100%;
}




</style>
