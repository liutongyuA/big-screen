<template>
  <div class="screenMain">
      <div class="section1">
          <div class="gxtj border">
              <div class="title">案发派出所管辖统计</div>
              <div class="echart" ref="echart1"></div>
          </div>
      </div>
      <div class="section2 border"></div>
      <div class="section3 border"></div>
  </div>
</template>

<script>
import * as echarts from "echarts"
export default {
    name:'screenMain',
    data(){
        return{
    option:{
        textStyle:{
            color:'#4B5273',
            fontSize:this.px(20)
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
          axisTick:{show:false},
          axisLabel:{
              fontSize:this.px(20),
              formatter(val){
                  if(val.length > 2){
                      const arr = val.split('')
                      arr.splice(2,0,'\n')
                      return arr.join('')
                  }else{
                      return val
                  }
              }
          },
        },
        title:{show:false},
        legend:{show:false},
        yAxis: {
            show:true,
            splitLine:{
                show:false
            },
            axisLine:{
                show:true,
                LineStyle:{color:'#083B70'}
            },
            axisLabel:{fontSize:this.px(20)}
        },
        grid:{
            x:this.px(40),y:this.px(40),x2:this.px(40),y2:this.px(55)
        },
        series: [
          {
            name: "销量",
            type: "bar", //类型为柱状图
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
        }
    }
    },
    mounted(){
        this.initEcharts()
    },
    methods:{
        initEcharts(){
            const mycharts = echarts.init(this.$refs.echart1)
            mycharts.setOption(this.option)
        },
        px(n){
            return n /  2420 * window.pageWidth
        }
    }
}
</script>

<style lang="scss" scoped>
@function pxToRem($x){
    @return $x / 2420 * 100rem
}
.screenMain{
    flex:1;
    display: grid;
    grid-template: 
    ".box1  .box2 .box3" 1fr/14fr 168fr 20fr 318fr 20fr 168fr 14fr;
    .border{
        border: 1px solid #0764bc;
        border-radius: 4px;
        position: relative;
        background-color: #051218;
        opacity:0.7; 
        &::before{
            content: '';
            position: absolute;
            left: 0;right: 0;top: 0;bottom: 0;
            border-radius: 4px;
            box-shadow: 
            21px 0 0 -20px #0f3361,
            -21px 0 0 -20px #0f3361,
            0 21px 0 -20px #0f3361,
            0 -21px 0 -20px #0f3361,
            11px 0 0 -10px #0d4483,
            -11px 0 0 -10px #0d4483,
            0 11px 0 -10px #0d4483,
            0 -11px 0 -10px #0d4483;

        }
    }
    >.section1{
        grid-area: box1;
        >.gxtj{
            height: pxToRem(315);
            display: flex;
            flex-direction: column;
            >.title{
                color: white;
                border-bottom:1px solid #0a5299;
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
            >.echart{
                flex-grow: 1;
                width:100%;
                height: 400px;
            }
        }
    }
    >.section2{
        grid-area: box2;
    }
    >.section3{
        grid-area: box3;
    }
}
</style>