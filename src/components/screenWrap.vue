<template>
  <div class="screenWrap" ref="screenWrap">
    <screenHeader></screenHeader>
    <screenMain></screenMain>
    <screenFooter></screenFooter>
    
  </div>
</template>

<script>
import {pageWidth,pageHeight,deviceHeight}  from '../util'
import screenHeader from '@/components/screenHeader' 
import screenMain from '@/components/screenMain'
import screenFooter from '@/components/screenFooter'
export default {
  name: 'ScreenWrap',
  components:{
    screenHeader,screenMain,screenFooter
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
