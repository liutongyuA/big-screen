<template>
  <div class="screenFooter">
      © lty 2021-2022
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
@function pxToRem($x){
    @return $x / 2420 * 100rem
}
.screenFooter{
    color: white;
    height: pxToRem(68);
    margin-top: pxToRem(20);
    // border: 1px solid red;
    background: linear-gradient(90deg,#081823 0,rgba(0,0,0,0) 50%,#081823 100%);
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>