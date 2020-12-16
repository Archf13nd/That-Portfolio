<template>
  <div class="the-container">
    <div class="text--intro-container">
    <div class="text text--intro">Creation is one of life’s wonders. To take an idea and fashion it from mind to matter, solving all those complications that reality tests it with, is extremely satisfying to me.</div>
    </div>

    <img class='my-photo shadow-soft' src="../assets/me.jpg" alt="Photo of me">
    <div class='text__main--container'>
      <div class="text text__main--1">I’m Alastair. I’m from the UK, Devon to be a little more precise. I’ve been into web development for a while now and have picked up a range of skills which I’m confident I can use to turn any design into a working, responsive, optimized and bug-free website. </div>
      <div class="text text__main--2">If you have an idea and wish to make it a reality then I would love to help you with that. Please check out my projects and see what skills I possess. I’m only a message away so if I’m what you are looking for I look forward to hearing from you. 
    </div>
</div>
  </div>
</template>

<style lang="scss" scoped>
.the-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid rgba(0, 128, 0, 0);
  width: 60vw;
  height: 70vh;

  display: grid;
  grid-template: 30% 70% / minmax(50%, 80%) minmax(20%, 50%);
}

.my-photo {
  position: relative;
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  height: 100%;
  border-radius: 10px;
  border: 2px solid black;
  justify-self: end;
  margin: 0% 10% 0 0;
}

.text {
  color: #97E7A4;
  font-size: 120%;

  &--intro-container {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template: 100% / minmax(300px, 700px) 1fr;
  }

  &--intro {
    width: 100%;
    text-align: end;
    padding-right: 10%;

    // @media (max-width: 1200px) {
    // padding-top: 10%;
    // padding-left: 0%;
    // }
  }


  &__main--container {
    grid-column: 2 / 3;
    grid-row: 2 / 3;

    @media (max-width: 1360px) {
    grid-row: 1 / 3;
    }

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }

  &__main--1 {
    margin-bottom: 10%;
  }
  &__main--2 {

  }

}



</style>
