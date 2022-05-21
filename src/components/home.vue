<template>
  <div class="home"></div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
//混合函数 2420为设计稿宽度
@function pxToRem($x){
    @return $x / 2420 * 100rem
}
.home{
    width: pxToRem(367);
    height: pxToRem(315);
    border: 1px solid red;
}
</style>