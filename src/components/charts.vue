<template>
    <div class="dt border" ref="echart2">
        <div class="title">全市犯罪人员籍贯发布地</div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import china from '../geo/china.json';
export default {
 data() {
    return {
      option: {
        textStyle: {
          fontSize: this.px(12),
          color: "#79839E",
        },
        title: { show: false },
        legend: { show: false },
        grid: {
          x: this.px(20),
          y: this.px(20),
          x2: this.px(20),
          y2: this.px(20),
          containLabel: true,
        },
        xAxis: { show: false },
        yAxis: { show: false },
        series: [
          {
            type: "map",
            mapType: "CN", // 自定义扩展图表类型
            data: [{ name: "甘肃省", value: 1 }],
            label: { show: false, color: "white" },
            itemStyle: {
              areaColor: "#010D3D",
              color: "#15B8FD",
              borderColor: "#01A7F7",
              emphasis: {
                label: { color: "white" },
                areaColor: "#5470C6",
              },
            },
          },
          {
            type: "map",
            mapType: "CN", // 自定义扩展图表类型
            data: [{ name: "四川省", value: 100 }],
            itemStyle: {
              areaColor: "#010D3D",
              color: "#06E1EE",
              borderColor: "yellow",
              emphasis: {
                label: { color: "white" },
                areaColor: "#5470C6",
              },
            },
          },
          {
            type: "map",
            mapType: "CN", // 自定义扩展图表类型
            data: [{ name: "青海省", value: 100 }],
            itemStyle: {
              areaColor: "#010D3D",
              color: "#BB31F7",
              borderColor: "#01A7F7",
              emphasis: {
                label: { color: "white" },
                areaColor: "#5470C6",
              },
            },
          },
        ],
      },
    }
  },
  mounted() {
    this.initEcharts();
  },
  methods: {
    initEcharts() {
      const mycharts = echarts.init(this.$refs.echart2);
      echarts.registerMap('CN', china);
      mycharts.setOption(this.option);
    },
    px(n) {
      return (n / 2420) * window.pageWidth;
    },
  },
}
</script>

<style lang="scss">
@function pxToRem($x){
    @return $x / 2420 * 100rem
}
.dt{
    height: pxToRem(700);
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
}
</style>