<template>
  <div class="dt border">
    <div class="title">全市犯罪人员籍贯发布地</div>
    <div class="echart6" ref="echart6"></div>
    <div class="legend">
      <span class="icon" style="background:#15B8FD"/>山东籍
      <span class="icon" style="background:#06E1EE"/>四川籍
      <span class="icon" style="background:#BB31F7"/>青海籍
    </div>
    <div class="notes">此地图仅显示了中国的部分区域</div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import china from "../geo/china.json";
export default {
  data() {
    return {
      option: {
        xAxis: {show:false},
        title: { show: false },
        legend: { show: false },
        yAxis: {show: false},
        series: [
        {
          type: 'map',
          mapType: 'CN', // 自定义扩展图表类型
          data: [
            {name: '山东省', value: 1},
          ],
          label: {show: false, color: 'white'},
          itemStyle: {
            color:'#15B8FD',
            areaColor: '#010D3D',
            borderColor: '#01A7F7',
            emphasis: {
              label: {color: 'white'},
              areaColor: '#5470C6',
            },
          }
        },
        {
          type: 'map',
          mapType: 'CN', // 自定义扩展图表类型
          data: [
            {name: '四川省', value: 100},
          ],
          itemStyle: {
            color:'#06E1EE',
            areaColor: '#010D3D',
            borderColor: 'yellow',
            emphasis: {
              label: {color: 'white'},
              areaColor: '#5470C6',
            },
          }
        },
        {
          type: 'map',
          mapType: 'CN', // 自定义扩展图表类型
          data: [
            {name: '青海省', value: 100},
          ],
          itemStyle: {
            color:'#BB31F7',
            areaColor: '#010D3D',
            borderColor: '#01A7F7',
            emphasis: {
              label: {color: 'white'},
              areaColor: '#5470C6',
            },
          }
        },
		]
      },
    };
  },
  mounted() {
    this.initEcharts();
  },
  methods: {
    initEcharts() {
      const mycharts = echarts.init(this.$refs.echart6);
      echarts.registerMap("CN", china);
      mycharts.setOption(this.option);
    },
    pxToRem(n) {
      return (n / 2420) * window.pageWidth;
    },
  },
};
</script>

<style lang="scss">
@function pxToRem($x) {
  @return $x / 2420 * 100rem;
}
.dt {
  height: pxToRem(753);
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
  > .echart6 {
    flex-grow: 1;
    width: 100%;
    height: 400px;
  }
  >.legend {
          position: absolute;top: pxToRem(40);left: pxToRem(20);display: flex;
          align-items: center;
          font-size: pxToRem(22); padding: pxToRem(20) pxToRem(10) pxToRem(20) 0;
          border-radius: 0;
          .icon {
            margin: 0 pxToRem(10);
            display: inline-block;
            width: pxToRem(16);
            height: pxToRem(16);
            border-radius: 50%;
            // background: #1cecd9;
          }
        }
        .notes{
          position: absolute;
          bottom: pxToRem(10);
          right: pxToRem(10);
        }
}
</style>