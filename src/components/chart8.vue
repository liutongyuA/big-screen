<template>
  <div class="border aflx" :class="{'row1':row=='row1','row2':row=='row2','row3':row=='row3'}">
    <div class="title">{{title}}</div>
    <div class="charts" ref="echart"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
    props:['option','title','row'],
  mounted() {
      this.initEcharts();
  },
  methods: {
    initEcharts() {
      const mycharts = echarts.init(this.$refs.echart);
      mycharts.setOption(this.option);
    },
    px(n) {
      return (n / 2420) * window.pageWidth;
    },
  },
};
</script>

<style lang="scss" scoped>
@function pxToRem($x) {
  @return $x / 2420 * 100rem;
}
.aflx {
  display: flex;
  flex-direction: column;
  align-items: center;
  > .title {
    color: white;
    border: 1px solid #0a5299;
    border-top: none;
    display: flex;
    justify-content: center;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
    font-size: pxToRem(22);
    padding: pxToRem(10) pxToRem(28);
    line-height: pxToRem(24);
    text-shadow: 0 0 pxToRem(3) white;
  }
  .charts {
    flex-grow: 1;
    width: 220px;
    height: 400px;
  }
}
</style>