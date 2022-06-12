<template>
  <div class="gxtj border">
    <div class="title">案发派出所管辖统计</div>
    <div class="echart" ref="echart1"></div>
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
        xAxis: {
          data: ["呼市分局", "包头分局", "东胜分局", "赤峰分局", "乌海分局", "锡盟分局"],
          // data: ["呼市分局", "包头分局", "鄂尔多斯分局", "赤峰分局", "呼市分局", "呼市分局"],
          axisTick: { show: false },
          axisLabel: {
            fontSize: this.px(20),
            formatter(val) {
              if (val.length > 2) {
                const arr = val.split("");
                arr.splice(2, 0, "\n");
                return arr.join("");
              } else {
                return val;
              }
            },
          },
        },
        title: { show: false },
        legend: { show: false },
        yAxis: {
          show: true,
          splitLine: {
            show: false,
          },
          axisLine: {
            show: true,
            LineStyle: { color: "#083B70" },
          },
          axisLabel: { fontSize: this.px(20) },
        },
        grid: {
          x: this.px(40),
          y: this.px(40),
          x2: this.px(40),
          y2: this.px(55),
        },
        series: [
          {
            type: "bar", //类型为柱状图
            data: [5, 20, 36, 10, 10, 20],
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
      const mycharts = echarts.init(this.$refs.echart1);
      mycharts.setOption(this.option);
    },
    px(n) {
      return (n / 2420) * window.pageWidth;
    },
  },
};
</script>

<style lang='scss' scoped>
@function pxToRem($x){
    @return $x / 2420 * 100rem
}
.gxtj {
  height: pxToRem(315);
  display: flex;
  flex-direction: column;
  >.title {
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
  >.echart {
    flex-grow: 1;
    width: 100%;
    height: 400px;
  }
}
</style>