<template>
  <div class="screenMain">
      <div class="section1">
        <chart1/>
      </div>
      <div class="section2 border"></div>
      <div class="section3 border"></div>
  </div>
</template>

<script>
import chart1 from '@/components/chart1'
export default {
    name:'screenMain',
    data(){
        return{
        
        }
    },
   components:{chart1}
}
</script>

<style lang="scss" scoped>
@function pxToRem($x){
    @return $x / 2420 * 100rem
}
.screenMain{
    flex:1;
    display: grid;
    grid-template: 
    ".box1  .box2 .box3" 1fr/14fr 168fr 20fr 318fr 20fr 168fr 14fr;
    .border{
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
}
</style>