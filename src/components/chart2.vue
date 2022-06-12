<template>
  <div class="ajph border">
    <div class="title">案件破获排名</div>
    <div class="echart" ref="echart2"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {
      option: {
        textStyle: {
          color: "#4B5273",
          fontSize: this.px(20),
        },
        title: { show: false },
        legend: { show: false },
        grid: {
          x: this.px(100),
          y: this.px(40),
          x2: this.px(40),
          y2: this.px(40),
        },
        xAxis: {
          boundaryGap: [0, 0.01],
          splitLine: { show: false },
          axisLabel: { fontSize: this.px(20) },
        },
        yAxis: {
          axisTick: { show: false },
          data: [
            "城关区公安局",
            "七里区公安局",
            "西固区公安局",
            "安宁区公安局",
            "红古区公安局",
          ],
          axisLabel: {
            fontSize: this.px(15),
            formatter(val) {
              return val.replace("公安局", "\n公安局");
            },
          },
        },
        series: [
          {
            name: "2011年",
            type: "bar",
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9],
          },
          {
            name: "2012年",
            type: "bar",
            data: [2, 3, 4, 5, 6, 7, 8, 9, 10],
          },
        ],
      },
    };
  },
  mounted() {
    this.initEcharts();
  },
  methods: {
    initEcharts() {
      const mycharts = echarts.init(this.$refs.echart2);
      mycharts.setOption(this.option);
    },
    px(n) {
      return (n / 2420) * window.pageWidth;
    },
  },
};
</script>

<style lang="scss">
@function pxToRem($x) {
  @return $x / 2420 * 100rem;
}
.ajph {
  height: pxToRem(315);
  display: flex;
  flex-direction: column;
  > .title {
    color: white;
    border-bottom: 1px solid #0a5299;
    justify-content: center;
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
  }
}
</style>