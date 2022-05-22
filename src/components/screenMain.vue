<template>
  <div class="screenMain">
      <div class="section1"></div>
      <div class="section2"></div>
      <div class="section3"></div>
      <div class="section4"></div>
      <div class="section5"></div>
  </div>
</template>

<script>
export default {
    name:'screenMain'
}
</script>

<style lang="scss" scoped>
.screenMain{
    flex:1;
    display: grid;
    grid-template-areas: 
    "box1 box2 box4 box5"
    "box1 box2 box4 box5"
    "box3 box3 box4 box5";
    >.section1{
        grid-area: box1;
        background: pink;
    }
    >.section2{
        grid-area: box2;
        background: lightblue;
    }
    >.section3{
        grid-area: box3;
        background: lightcoral;
    }
    >.section4{
        grid-area: box4;
        background: lightcyan;
    }
    >.section5{
        grid-area: box5;
        background: lightgreen;
    }
}
</style>