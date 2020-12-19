<template>
  <div class="screen-container">
    <div class="the-container">
      <div class="text--intro-container">
        <div class="text text--intro">
          Creation is one of life’s wonders. To take an idea and fashion it from
          mind to matter, solving all those complications that reality tests it
          with, is extremely satisfying to me.
        </div>
      </div>
      <div class="spacer"></div>

      <img
        class="my-photo shadow-soft"
        src="../assets/me.jpg"
        alt="Photo of me"
      />
      <div class="text__main--container">
        <div class="text text__main--1">
          I’m Alastair. I’m from the UK, Devon to be a little more precise. I’ve
          been into web development for a while now and have picked up a range
          of skills which I’m confident I can use to turn any design into a
          working, responsive, optimized and bug-free website.
        </div>
        <div class="text text__main--2">
          If you have an idea and wish to make it a reality then I would love to
          help you with that. Please check out my projects and see what skills I
          possess. I’m only a message away so if I’m what you are looking for I
          look forward to hearing from you.
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.screen-container {
  position: absolute;
  top: 0;
  left: 0;
  margin: 0 auto;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 400px) {
    margin-top: 32px;
  }
}

.the-container {
  width: 60%;
  height: 60%;
  margin: 5% 0 5% 0;
  justify-content: center;

  display: grid;
  grid-template: minmax(10px, 1fr) / repeat(auto-fill, minmax(300px, 600px));
}

.spacer {
  display: inline-block;
  background: rgba(0, 0, 0, 0);
  width: 100%;
  grid-column: 2 / 3;
  grid-row: 1 / 2;

  @media screen and (max-width: 1333px) {
    display: none;
  }
}

.my-photo {
  height: 400px;
  justify-self: end;
  margin: 10% 10% 0 0;

  @media screen and (max-width: 1333px) {
    justify-self: center;
    margin: 10% 0 10% 0;
  }
}

.text {
  color: #55de7b;
  font-size: 18px;

  &--intro-container {
    display: flex;
    padding-right: 10%;
    padding-left: 10%;
    text-align: end;

    @media screen and (max-width: 1333px) {
      text-align: center;
    }
  }

  &__main--container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  &__main--2 {
    margin-top: 5%;
  }
}
</style>
