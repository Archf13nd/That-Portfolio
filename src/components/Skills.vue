<template>
<div class="screen-container">
   <div class='the-container'>
       <div class="skill">
           <img src="../assets/HTML5.svg" alt="HTML5 logo">
           <ul>
               <li>Performence</li>
               <li>Semantics</li>
               <li>Multimedia</li>
               <li>SEO</li>
           </ul>
       </div>
       <div class="skill">
           <img src="../assets/HTML5.svg" alt="HTML5 logo">
           <ul>
               <li>Performence</li>
               <li>Semantics</li>
               <li>Multimedia</li>
               <li>SEO</li>
           </ul>
       </div>
       <div class="skill">
           <img src="../assets/HTML5.svg" alt="HTML5 logo">
           <ul>
               <li>Performence</li>
               <li>Semantics</li>
               <li>Multimedia</li>
               <li>SEO</li>
           </ul>
       </div>
       <div class="skill">
           <img src="../assets/HTML5.svg" alt="HTML5 logo">
           <ul>
               <li>Performence</li>
               <li>Semantics</li>
               <li>Multimedia</li>
               <li>SEO</li>
           </ul>
       </div>
       <div class="skill">
           <img src="../assets/HTML5.svg" alt="HTML5 logo">
           <ul>
               <li>Performence</li>
               <li>Semantics</li>
               <li>Multimedia</li>
               <li>SEO</li>
           </ul>
       </div>
       <div class="skill">
           <img src="../assets/HTML5.svg" alt="HTML5 logo">
           <ul>
               <li>Performence</li>
               <li>Semantics</li>
               <li>Multimedia</li>
               <li>SEO</li>
           </ul>
       </div>
   </div>
</div>
</template>


<style lang="scss" scoped>

img {
    height: 200px
}

.screen-container {
    position: absolute;
    top: 0;
    left: 0;
    padding: 5% 3% 5% 3%;
    min-width: 100vw;
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
    justify-content: center;
    align-items: center; 
    // margin-top: 5%;
    // background: #000;
}

.skill {
    min-height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #54d169;

}


</style>