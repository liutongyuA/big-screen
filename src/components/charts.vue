<template>
  <div class="nld">
    <!-- chart7使用 -->
    <div class="chartWrap">
      <div ref="chart" class="chart"></div>
      <div class="text">{{text}}</div>
    </div>
    <div class="legend" v-if="category === 'sex'">
      <span class="male" />男 
      <span class="female" />女
    </div>
    <div class="legend" v-if="category === 'age'">
        <span style='background:#856BED' />10-20
        <span style='background:#F46064' />20-30
        <span style='background:#F38E1C' />30-40
        <span style='background:#1CDB7C' />40-50
        <span style='background:#33A4FA' />50-60
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {

    };
  },
  props:["option",'text','category'],
  mounted() {
    this.initEcharts();
  },
  methods: {
    initEcharts() {
      const mycharts = echarts.init(this.$refs.chart);
      mycharts.setOption(this.option);
    },
  },
};
</script>

<style lang="scss">
@function pxToRem($x) {
  @return $x / 2420 * 100rem;
}
.nld {
  flex: 1;
  display: flex;
  flex-direction: column;
  .chartWrap {
    flex: 1;
    display: flex;
    position: relative;
    .chart {
      flex: 1;
    }
    .text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #33a4fa; font-size: pxToRem(40); text-shadow: 0 0 pxToRem(20) #33a4fa;font-weight: bold;
    }
  }
  .legend {height: pxToRem(40); display: flex; align-items: center;
           justify-content: center; flex-wrap: wrap;
          > span {display: inline-block; width: pxToRem(16); height: pxToRem(10);
            border-radius: pxToRem(2); margin: 0 pxToRem(10);}
          .male {background: #33a4fa;}
          .female {background: #8d70f8;}
          }
}
</style>