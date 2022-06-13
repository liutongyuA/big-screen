<template>
  <div class="warp border" :style="{height:heightRem }">
    <div class="title">{{title}}</div>
    <div class="echart" ref="echart" v-if="!isChart"></div>
    <slot></slot>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {
      mycharts:'',
        heightRem:this.height / 2420 * 100 +'rem'
    };
  },
  props:{
    title:{
      type:String
    },
    option:{
      type:Object
    },
    isChart:{
      default:false,
      type:Boolean
    },
    height:{
    }
  },
  mounted() {
    if(this.$refs.echart){
    this.initEcharts();
    //新加的添加动态数据
      setInterval(()=>{
      this.mycharts.setOption(this.option);
    },1000)
    }
  },
  methods: {
    initEcharts() {
      // const mycharts = echarts.init(this.$refs.echart);
       this.mycharts = echarts.init(this.$refs.echart);
       this.mycharts.setOption(this.option);
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
  //chart3折线
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
  // chart5表格
   > table {
        color: white;
        margin-top: pxToRem(40);
        border-collapse: collapse;
        text-align:center;
        th, td {
          border: 1px solid #1a3671;
        }
        thead {
          th {
            height: pxToRem(70);
            box-shadow: inset 0 0 pxToRem(60) 0 #1f3d85;
          }
        }
        tbody {
          td {height: pxToRem(60); width: pxToRem(110);
            background: #1c2456;
          }

        }
		}
}
</style>