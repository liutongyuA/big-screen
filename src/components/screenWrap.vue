<template>
  <div class="screenWrap" ref="screenWrap">
    <home />
  </div>
</template>

<script>
import {pageWidth,pageHeight,deviceHeight}  from '../util'
import home from '@/components/home'
export default {
  name: 'ScreenWrap',
  components:{
    home
  },
  mounted(){
    this.$refs.screenWrap.style.width = pageWidth +'px' 
    this.$refs.screenWrap.style.height = pageHeight +'px' 
    this.$refs.screenWrap.style.marginTop= `${(deviceHeight-pageHeight)/2}px`
  }

}
</script>

<style scoped lang="scss">
  .screenWrap{
    margin:0 auto;
    background-color: #bfa;
  }
</style>
