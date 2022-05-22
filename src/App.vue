<template>
  <div id="app">
    <screenWrap />
  </div>
</template>

<script>
import screenWrap from '@/components/screenWrap'
export default {
  name: 'App',
  components: {
    screenWrap
  }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app{
    background-image: url('./assets/background.png');
    background-size: cover;
}
</style>
