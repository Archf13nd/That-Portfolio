<template>
  <div class="container">
    <h1>Projects</h1>
    <div class="project-list">
      <a href="https://thirsty-boyd-875f5e.netlify.app/">
        <div class="project-container">
          <div class="details">
            <h3>A Message App</h3>
            <p>Progress: Ongoing</p>
          </div>
          <div class="screenshot">
          </div>
        </div>
      </a>
      </div>
    </div>
</template>

<style scoped>
.container {
 height: 100vh;
 width: 100vw;
 display: flex;
 flex-direction: column;
 align-items: center;
}

.project-list {
margin-top: 200px;
width: 400px;
height: 200px;
}

.project-container {
  height: 240px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.details {
  display: flex;
  align-items: flex-end;
  justify-content: space-around;

}
  
.screenshot {
  width: 400px;
  height: 200px;
  background: url("../assets/message-app.png");
  background-size: 100%;
  background-repeat: no-repeat;
}

h1 {
  font-size: 3vw;
  color: #55de7b;
}
h3, p {
  margin: 0;
  color:  #55de7b
}
ul {
  list-style: none;
}
</style>
