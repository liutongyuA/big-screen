<template>
  <div class="screenHeader">
    <span>
      某市公安局合成作战平台
    </span>
  </div>
</template>

<script>
export default {
  name:'screenHeader'
}
</script>

<style scoped lang="scss">
//混合函数 2420为设计稿宽度
@function pxToRem($x){
    @return $x / 2420 * 100rem
}
.screenHeader{
    height: pxToRem(99);
    background: linear-gradient(90deg,#081823 0,rgba(0,0,0,0) 50%,#081823 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    >span{
      color: white;
      font-size: 1.87rem;
    }
}
</style>