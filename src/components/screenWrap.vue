<template>
  <div class="screenWrap" ref="screenWrap">
    <screenHeader></screenHeader>
    <screenMain></screenMain>
  </div>
</template>

<script>
import {pageWidth,pageHeight,deviceHeight}  from '../util'
import screenHeader from '@/components/screenHeader' 
import screenMain from '@/components/screenMain'
export default {
  name: 'ScreenWrap',
  components:{
    screenHeader,screenMain
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
    display: flex;
    flex-direction: column;
  }
</style>
