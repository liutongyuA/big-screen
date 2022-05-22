<template>
  <div class="screenWrap" ref="screenWrap">
    <screenHeader></screenHeader>
  </div>
</template>

<script>
import {pageWidth,pageHeight,deviceHeight}  from '../util'
import screenHeader from '@/components/screenHeader' 
export default {
  name: 'ScreenWrap',
  components:{
    screenHeader
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

  }
</style>
