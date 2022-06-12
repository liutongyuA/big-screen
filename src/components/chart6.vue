<template>
    <div class="dt border" ref="chart6">
  </div>
</template>

<script>
import * as echarts from "echarts";
import china from '../geo/china.json';
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
            {name: '甘肃省', value: 1},
          ],
          label: {show: false, color: 'white'},
          itemStyle: {
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
    }
  },
  mounted() {
    this.initEcharts();
  },
  methods: {
    initEcharts() {
      const mycharts = echarts.init(this.$refs.echart6);
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
}
</style>