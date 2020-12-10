<template>
<div class="nav-container">
  <div class="nav-curve"></div>    
    <img src="../assets/Logo.svg" alt="logo">
    <div class="bottom-left-quarter">
    <router-link to="about" class='tab tab_about' href=#><p>About</p></router-link>
    <router-link to="about" class='tab tab_about' href=#><p>About</p></router-link>
    </div>
    <div class="top-right-quarter">
    <router-link to="contact" class='tab tab_contact' href=#><p>Contact</p></router-link>
    <router-link to="projects" class='tab tab_projects' href=#><p>Projects</p></router-link>
    </div>
    <div class="bottom-right-quarter">
    <div class="logo-links">
    <div class="logo-container">
      <div class="logo">
        <a href="https://github.com/Archf13nd" target="_blank"><img to="#" class='logo-link logo-link--github' src="../assets/Github.svg" alt="Github link"></a>
        <div class="logo-backdrop logo-backdrop--front logo-backdrop--white"></div>
      </div>
        <div class="logo-backdrop logo-backdrop--back logo-backdrop--black"></div>
    </div>
    <div class="logo-container">
      <div class="logo">
        <a href="https://www.linkedin.com/in/alastair-parkyns-8a683a201/" target="_blank"><img class='logo-link' src="../assets/LinkedIn.svg" alt="LinkedIn link"></a>
        <div class="logo-backdrop logo-backdrop--front logo-backdrop--white"></div>
      </div>
        <div class="logo-backdrop logo-backdrop--back logo-backdrop--black"></div>
    </div>
    <div class="logo-container">
      <div class="logo">
        <a href="https://www.linkedin.com/in/alastair-parkyns-8a683a201/" target="_blank"><img class='logo-link' src="../assets/LinkedIn.svg" alt="LinkedIn link"></a>
        <div class="logo-backdrop logo-backdrop--front logo-backdrop--white"></div>
      </div>
        <div class="logo-backdrop logo-backdrop--back logo-backdrop--black"></div>
    </div>
    </div>
    </div>
</div>
</template>

<script>
// import logo from '../assets/Logo.svg'
export default {
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.nav-container {
position: relative;
width: 160px;
height: 160px;
display: grid;
grid-template: 1fr 1fr / 1fr 1fr;
gap: 8px 8px;
// background: rgb(39, 247, 12);
margin: 16px;
// align-items: center;
// justify-content: center;
}

.nav-curve {
  position: absolute;
  top: -220px;
  left: -220px;
  width: 440px;
  height: 440px;
  background: radial-gradient(circle, #ffffff 0%, rgb(248, 248, 248) 68%, #2c2b2b 70%, #5e5f5e 100%);
  clip-path: circle(50% at 50% 50%);
  // border: 2px solid black;
  z-index: -100;
}


.logo {
  position: relative;


  &:hover {
    transform: translateY(-.5px)
  }
  
  &:active {
    transition: transform .2s;
    transform: translateY(3px) translateX(0px);
  }
}

.logo-link {
  width: 32px;
  height: 32px;
}

.logo-links {
  width: 80px;
  height: 80px;
  display: grid;
  grid-template: 1fr 1fr / 1fr 1fr;
  gap: 8px 8px;
  align-items: center;
  justify-items: center;

}

.logo-backdrop {
  display: inline-block;
  height: 32px;
  width: 32px;
  position: absolute;
  top: 0;
  left: 0;
  clip-path: circle(50% at 50% 50%);
  z-index: -10;

  &--front {
    top: -1px;
    z-index: -5;
  }

  &--back {
    transform: translateY(3px) translateX(0px);
  }
 
  &--white {
    background: rgb(255, 255, 255);
  }

  &--black {
    background: rgb(112, 116, 111);
  }

}

.logo-container {
  position: relative;

  & > .logo-backdrops {
    position: absolute;
    top: 0;
    z-index: -10;

  }

}

.tab {
  // box-sizing: border-box;
  display: inline-block;
  width: 80px;
  height: 36px;
  box-sizing: border-box;
  border: 1px solid #000;
  border-radius: 15px;
  background: rgb(32, 33, 34);
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.712);
  text-decoration: none;
  color: white;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .1s ease-out;


    &:hover {
      transform: translateY(-2px);
      box-shadow: 1px 3px 10px rgba(0, 0, 0, 0.712);

    }

    &:active {
      transform: translateY(0px);
      box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.712);

    }

    &_about {
      margin-bottom: 8px;
      // &:last-child {
      //   margin-top: 16px;
      // }
    }
  &_contact {
    margin-bottom: 8px;
  }
  &_projects {
    // margin-top: 16px;
  }
}

.bottom-left-quarter {
  grid-row: 2 / 3;
  grid-column: 1 / 2;
  align-self: end;
}

.bottom-right-quarter {

}

.top-right-quarter {

}


</style>
