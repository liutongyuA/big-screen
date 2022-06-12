<template>
  <div class="warp border" :style="{height:heightRem }">
    <div class="title">{{title}}</div>
    <div class="echart" ref="echart"></div>
    <slot></slot>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {
        heightRem:this.height / 2420 * 100 +'rem'
    };
  },
  props:['title','option','height'],
  mounted() {
    this.initEcharts();
  },
  methods: {
    initEcharts() {
      const mycharts = echarts.init(this.$refs.echart);
      mycharts.setOption(this.option);
    },

  },
};
</script>

<style lang='scss' scoped>
@function pxToRem($x) {
  @return $x / 2420 * 100rem;
}
.warp {
  height: pxToRem(315);
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
  > .echart {
    flex-grow: 1;
    width: 100%;
    height: 400px;
  }
    .legend {
        color: white;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    padding: 0 pxToRem(20) pxToRem(10);
    > .first,
    > .second {
      display: inline-block;
      width: pxToRem(18);
      height: pxToRem(12);
      background: red;
      margin: 0 pxToRem(10);
    }
    .first {
      background: linear-gradient(90deg, #2034f9 0%, #04a1ff 100%);
    }
    .second {
      background: linear-gradient(90deg, #b92ae8 0%, #6773e7 100%);
    }
  }
}
</style>