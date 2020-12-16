<template>
  <div class="pill">
    <label class="checkbox" for="checkbox">
      <input v-model="darkmode" type="checkbox" name="checkbox" id="checkbox" />
    </label>
    <div
      class="ball"
      :class="{
        'roll-forward': darkmode,
        'roll-backward': !darkmode
      }"
    >
      <div class="catchlight"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      darkmode: false
    };
  }
};
</script>

<style lang="scss" scoped>
.pill {
  width: 100px;
  height: 30px;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.671);
  position: absolute;
  top: 3vh;
  right: 4vw;
}

#checkbox {
  visibility: hidden;
}

.checkbox {
  display: inline-block;
  position: relative;
  background: rgba(0, 0, 0, 0);
  width: 100px;
  height: 30px;
  border-radius: inherit;
  z-index: 10;
}

.ball {
  position: absolute;
  width: 30px;
  top: 0px;
  height: 100%;
  clip-path: circle(50% at 50% 50%);
  background: radial-gradient(circle, #ffffff, #5e5f5e);
  z-index: 1;
}

.catchlight {
  position: absolute;
  top: 8px;
  left: 12px;
  width: 8px;
  height: 8px;
  clip-path: circle(50% at 50% 50%);
  background: #fff;
}

.roll-forward {
  animation: roll-forward 0.5s ease-in forwards;
}
.roll-backward {
  animation: roll-backward 0.5s ease-in forwards;
}

@keyframes roll-forward {
  from {
    left: 0;
    transform: rotateZ(0deg);
  }
  to {
    left: 70px;
    transform: rotateZ(360deg);
  }
}
@keyframes roll-backward {
  from {
    left: 70px;
    transform: rotateZ(0deg);
  }
  to {
    left: 0;
    transform: rotateZ(-360deg);
  }
}
</style>
