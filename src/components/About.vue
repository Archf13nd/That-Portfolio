<template>
    <div class="container">
        <div class="inner-container" contenteditable="true">

        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70vw;
    height: 80vh;
    background: rgb(255, 255, 255);
    border: 3px solid black;
}

.inner-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 69.5vw;
    height: 79vh;
    background: rgba(0, 0, 0, 0);
    border: 5px solid rgba(0, 0, 0, 0.3);
;
    padding: -20px;
    
}
</style>