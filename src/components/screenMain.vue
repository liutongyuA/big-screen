<template>
  <div class="screenMain">
      <div class="section1"></div>
      <div class="section2"></div>
      <div class="section3"></div>
      <!-- <div class="section4"></div>
      <div class="section5"></div> -->
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
    grid-template: 
    ".box1  .box2 .box3" 1fr/14fr 168fr 20fr 318fr 20fr 168fr 14fr;
    >div{
        border: 1px solid #0764bc;
        border-radius: 4px;
        position: relative;
        background-color: #051218;
        opacity:0.7; 
        &::before{
            content: '';
            position: absolute;
            left: 0;right: 0;top: 0;bottom: 0;
            border-radius: 4px;
            box-shadow: 
            21px 0 0 -20px #0f3361,
            -21px 0 0 -20px #0f3361,
            0 21px 0 -20px #0f3361,
            0 -21px 0 -20px #0f3361,
            11px 0 0 -10px #0d4483,
            -11px 0 0 -10px #0d4483,
            0 11px 0 -10px #0d4483,
            0 -11px 0 -10px #0d4483;

        }
    }
    >.section1{
        grid-area: box1;
    }
    >.section2{
        grid-area: box2;
    }
    >.section3{
        grid-area: box3;
    }
    // >.section4{
    //     grid-area: box4;
    //     background: lightcyan;
    // }
    // >.section5{
    //     grid-area: box5;
    //     background: lightgreen;
    // }
}
</style>