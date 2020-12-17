<template>
  <div class="the-container">
    <div class="text--intro-container">
      <div class="text text--intro">
        Creation is one of life’s wonders. To take an idea and fashion it from
        mind to matter, solving all those complications that reality tests it
        with, is extremely satisfying to me.
      </div>
    </div>

    <img
      class="my-photo shadow-soft"
      src="../assets/me.jpg"
      alt="Photo of me"
    />
    <div class="text__main--container">
      <div class="text text__main--1">
        I’m Alastair. I’m from the UK, Devon to be a little more precise. I’ve
        been into web development for a while now and have picked up a range of
        skills which I’m confident I can use to turn any design into a working,
        responsive, optimized and bug-free website.
      </div>
      <div class="text text__main--2">
        If you have an idea and wish to make it a reality then I would love to
        help you with that. Please check out my projects and see what skills I
        possess. I’m only a message away so if I’m what you are looking for I
        look forward to hearing from you.
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
  min-height: 70vh;
  @media (max-width: 1300px) {
    width: 70vw;
    min-height: 70vh;
  }

  display: grid;
  grid-template: 30% 70% / minmax(50%, 80%) minmax(20%, 50%);

  @media (max-width: 1050px) {
    grid-template: 1fr 600px 2fr / 100%;
    position: relative;
    top: 0;
    left: 0;
    width: 80%;
    margin: 0 auto;
    height: 100%;
    transform: translate(0%, 0%);
  }
}

.my-photo {
  position: relative;
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  max-height: 500px;
  min-height: 300px;
  border-radius: 10px;
  border: 2px solid black;
  justify-self: end;
  margin: 0% 10% 0 0;
  @media (max-width: 1050px) {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    justify-self: center;
    align-self: center;
    margin: 0% 0% 0 0;
  }
}

.text {
  color: #97e7a4;
  font-size: 120%;

  &--intro-container {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template: 100% / minmax(300px, 700px) 1fr;
    @media (max-width: 1050px) {
      grid-column: 1 / 2;
      grid-row: 1 / 2;
      grid-template: 100% / 100%;
    }

    align-items: end;
  }

  &--intro {
    width: 100%;
    text-align: end;
    padding-right: 10%;
    padding-bottom: 10%;
    @media (max-width: 1050px) {
      text-align: center;
      justify-self: center;
    }
  }

  &__main--container {
    grid-column: 2 / 3;
    grid-row: 2 / 3;

    @media (max-width: 1360px) {
      margin-top: 5%;
      grid-row: 1 / 3;
    }

    @media (max-width: 1050px) {
      grid-column: 1 / 2;
      grid-row: 3 / 4;
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
