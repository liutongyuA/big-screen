<template>
  <div class="fznl border">
    <div class="title">犯罪人员年龄段分布</div>
    <div class="charts">
      <charts :option="optionSex" text="性别" category="sex"></charts>
      <charts :option="optionAge" text="年龄段" category="age"></charts>
    </div>
  </div>
</template>

<script>
import charts from "./charts.vue";
export default {
  components: { charts },
  data() {
    return {
      optionSex: {
        color: ["#8D70F8", "#33A4FA"],
        xAxis: { show: false },
        yAxis: { show: false },
        legend: { show: false },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["75%", "90%"],
            avoidLabelOverlap: false,
            label: {
              show: true,
              position: "inside",
              textStyle: {
                color: "white",
                fontSize: this.px(20),
              },
              formatter(options) {
                return options.value * 100 + "%";
              },
            },
            labelLine: { show: false },
            itemStyle: {
              borderColor: "#0F113A",
              borderWidth: this.px(4),
            },
            data: [
              { value: 0.2, name: "女" },
              { value: 0.8, name: "男" },
            ],
          },
        ],
      },
      optionAge:{
              color: ['#856BED', '#F46064', '#F38E1C', '#1CDB7C', '#33A4FA'],
      xAxis: {show: false},
      yAxis: {show: false},
      legend: {show: false},
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: ['75%', '90%'],
          avoidLabelOverlap: false,
          label: {
            show: true, position: 'inside', textStyle: {color: 'white', fontSize: this.px(20)},
            formatter(options) {
              return (options.value * 100).toFixed(0) + '%';
            }
          },
          labelLine: {show: false},
          itemStyle: {
            borderColor: '#0F113A',
            borderWidth: this.px(4)
          },
          data: [
            {value: 0.07, name: '10-20'},
            {value: 0.10, name: '20-30'},
            {value: 0.23, name: '30-40'},
            {value: 0.28, name: '40-50'},
            {value: 0.32, name: '50-60'},
          ]
        }
      ]
      }
    };
  },
  methods: {
    px(n) {
      return (n / 2420) * window.pageWidth;
    },
  },
};
</script>

<style lang='scss' scoped>
@function pxToRem($x) {
  @return $x / 2420 * 100rem;
}
.fznl {
  height: pxToRem(363);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  > .title {
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
  > .charts {
    width: 100%;
    height: 400px;
    display: flex;
    padding: pxToRem(30);
  }
}
</style>