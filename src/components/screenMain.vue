<template>
  <div class="screenMain">
    <!-- <div class="section1">
        <chart1/>
      </div>
      <div class="section2">
          <chart2/>
      </div>
      <div class="section3 border"></div> -->
    <div class="section1">
      <chart title="案发派出所管辖统计" :option="option1"></chart>
      <chart title="案件破获排名" :option="option2" height='423'>
          <div class="legend">
            <span class="first" /> 破案排名1 <span class="second" /> 破案排名2
          </div>
      </chart>
    </div>
    <div class="section2">
    </div>
    <div class="section3 border"></div>
    <div class="section4 border"></div>
    <div class="section5 border"></div>
  </div>
</template>

<script>
// import chart1 from '@/components/chart1'
// import chart2 from '@/components/chart2'
import * as echarts from "echarts";
import chart from "@/components/chart";
export default {
  name: "screenMain",
  data() {
    return {
      option1: {
        textStyle: {
          color: "#4B5273",
          fontSize: this.px(20),
        },
        xAxis: {
          data: [
            "呼市分局",
            "包头分局",
            "东胜分局",
            "赤峰分局",
            "乌海分局",
            "锡盟分局",
          ],
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
      option2: {
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
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  {
                    offset: 0,
                    color: "#2034f9",
                  },
                  {
                    offset: 1,
                    color: "#04a1ff",
                  },
                ]),
              },
            },
          },
          {
            name: "2012年",
            type: "bar",
            data: [2, 3, 4, 5, 6, 7, 8, 9, 10],
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  {
                    offset: 0,
                    color: "#b92ae8",
                  },
                  {
                    offset: 1,
                    color: "#6773e7",
                  },
                ]),
              },
            },
          },
        ],
      },
    };
  },
  methods: {
    px(n) {
      return (n / 2420) * window.pageWidth;
    },
  },
  components: { chart },
};
</script>

<style lang="scss" scoped>
@function pxToRem($x) {
  @return $x / 2420 * 100rem;
}
.screenMain {
  margin-top: pxToRem(20);
  flex: 1;
  display: grid;
  grid-template:
    "box1 box2 box4 box5" 755fr
    "box3 box3 box4 box5" 363fr / 366fr 361fr 811fr 747fr;
  grid-column-gap: pxToRem(28);
  grid-row-gap: pxToRem(28);
  .border {
    border: 1px solid #0764bc;
    border-radius: 4px;
    position: relative;
    background-color: #051218;
    opacity: 0.7;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      border-radius: 4px;
      box-shadow: 21px 0 0 -20px #0f3361, -21px 0 0 -20px #0f3361,
        0 21px 0 -20px #0f3361, 0 -21px 0 -20px #0f3361, 11px 0 0 -10px #0d4483,
        -11px 0 0 -10px #0d4483, 0 11px 0 -10px #0d4483, 0 -11px 0 -10px #0d4483;
    }
  }
  > .section1 {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    grid-area: box1;
  }
  > .section2 {
    grid-area: box2;
  }
  > .section3 {
    grid-area: box3;
  }
  > .section4 {
    grid-area: box4;
  }
  > .section5 {
    grid-area: box5;
  }
}
</style>