<template>
  <div class="screenMain">
    <div class="section1">
      <chart title="案发派出所管辖统计" :option="option1"></chart>
      <chart title="案件破获排名" :option="option2" height="423">
        <div class="legend">
          <span class="first" /> 破案排名1 <span class="second" /> 破案排名2
        </div>
      </chart>
    </div>
    <div class="section2">
      <chart title="发案趋势分析" :option="option3" height="363"></chart>
      <chart title="案发时段分析" :option="option4" height="363"></chart>
    </div>
    <div class="section3">
      <chart title="往年战果数对比" height="365" isChart>
        <table>
          <thead>
            <tr>
              <th>年份</th>
              <th>破案数</th>
              <th>抓获嫌疑人</th>
              <th>并串案件</th>
              <th>现勘录入</th>
              <th>视侦录入</th>
              <th>合成案件数</th>
              <th>合计</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2015</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td>7</td>
              <td>8</td>
            </tr>
            <tr>
              <td>2016</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td>7</td>
              <td>8</td>
            </tr>
            <tr>
              <td>2017</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td>7</td>
              <td>8</td>
            </tr>
          </tbody>
        </table>
      </chart>
    </div>
    <div class="section4">
      <chart6 />
      <chart7 />
    </div>
    <div class="section5">
      <!-- <chart8/> -->
      <chart8 :option="option5" title="案发类型统计" row="row1"></chart8>
      <chart8 :option="option6" title="案发街道统计" row="row2"></chart8>
      <chart8 :option="option7" title="作案手段分析" row="row3"></chart8>
      <!-- <chart title="案发类型统计"/> -->
      <!-- <div class="border row2 案发街道">
            <h2>案发街道统计</h2>
            <div class="charts">
            </div>
          </div>
          <div class="border row3 作案手段">
            <h2>作案手段分析</h2>
          </div> -->
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import chart from "@/components/chart";
import chart6 from "@/components/chart6";
import chart7 from "./chart7.vue";
import chart8 from "./chart8.vue";
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
      option3: {
        textStyle: {
          fontSize: this.px(12),
          color: "#79839E",
        },
        title: { show: false },
        legend: {
          bottom: this.px(10),
          textStyle: { color: "white" },
          itemWidth: this.px(30),
          itemHeight: this.px(16),
        },
        grid: {
          x: this.px(20),
          x2: this.px(20),
          y: this.px(20),
          y2: this.px(70),
          containLabel: true,
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018],
          splitLine: { show: true, lineStyle: { color: "#073E78" } },
          axisTick: { show: false },
          axisLine: { show: false },
        },
        yAxis: {
          type: "value",
          splitLine: { lineStyle: { color: "#073E78" } },
          axisLabel: {
            formatter(val) {
              return val * 100 + "%";
            },
          },
        },
        series: [
          {
            name: "抢劫",
            type: "line",
            data: [
              0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09,
            ].reverse(),
          },
          {
            name: "醉驾",
            type: "line",
            data: [
              0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.1,
            ].reverse(),
          },
          {
            name: "盗窃",
            type: "line",
            data: [
              0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.1, 0.11,
            ].reverse(),
          },
          {
            name: "故意杀人",
            type: "line",
            data: [
              0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.1, 0.11, 0.12,
            ].reverse(),
          },
          {
            name: "故意伤人",
            type: "line",
            data: [
              0.05, 0.06, 0.07, 0.08, 0.09, 0.1, 0.11, 0.12, 0.13,
            ].reverse(),
          },
        ].map((obj) => ({
          ...obj,
          symbol: "circle",
          symbolSize: this.px(12),
          lineStyle: { width: this.px(2) },
        })),
      },
      option4: {
        textStyle: {
          fontSize: this.px(12),
          color: "#79839E",
        },
        title: { show: false },
        legend: { show: false },
        grid: {
          x: this.px(20),
          x2: this.px(20),
          y: this.px(20),
          y2: this.px(40),
          containLabel: true,
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24],
          splitLine: { show: true, lineStyle: { color: "#073E78" } },
          axisTick: { show: false },
          axisLine: { show: false },
        },
        yAxis: {
          type: "value",
          splitLine: { lineStyle: { color: "#073E78" } },
          axisLabel: {
            formatter(val) {
              return val * 100 + "%";
            },
          },
        },
        series: [
          {
            name: "故意伤人",
            type: "line",
            data: [
              0.15, 0.13, 0.11, 0.13, 0.14, 0.15, 0.16, 0.18, 0.21, 0.19, 0.17,
              0.16, 0.15,
            ],
            symbol: "circle",
            symbolSize: this.px(12),
            lineStyle: { width: this.px(2) },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "#414a9f",
                },
                {
                  offset: 1,
                  color: "#1b1d52",
                },
              ]),
            },
          },
        ],
      },
      option5: {
        textStyle: {
          fontSize: this.px(12),
          color: "#79839E",
        },
        title: { show: false },
        legend: { show: false },
        grid: {
          x: this.px(20),
          y: this.px(50),
          x2: this.px(20),
          y2: this.px(20),
          containLabel: true,
        },
        xAxis: {
          data: ["入室抢劫", "当街偷盗", "团伙诈骗", "刑事案件", "民事案件"],
          axisTick: { show: false },
          axisLine: {
            lineStyle: { color: "#083B70" },
          },
          axisLabel: {
            formatter(val) {
              if (val.length > 2) {
                const array = val.split("");
                array.splice(2, 0, "\n");
                return array.join("");
              } else {
                return val;
              }
            },
          },
        },

        yAxis: {
          splitLine: { show: false },
          axisLine: {
            show: true,
            lineStyle: { color: "#083B70" },
          },
        },
        series: [
          {
            type: "bar",
            data: [40, 22, 20, 18, 32],
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "#0A97FB",
              },
              {
                offset: 1,
                color: "#1E34FA",
              },
            ]),
          },
        ],
      },
      option6: {
        textStyle: {
          fontSize: this.px(12),
          color: "#79839E",
        },
        title: { show: false },
        xAxis: { show: false },
        yAxis: { show: false },
        grid: { x: 0, x2: 0, y: 0, y2: 0, containLabel: true },
        legend: {
          orient: "vertical",
          left: "left",
          top: "center",
          textStyle: { color: "white" },
          itemWidth: this.px(10),
          itemHeight: this.px(10),
          formatter(name) {
            const value =
               [
        { value: 0.08, name: "东岗路" },
        { value: 0.06, name: "段家滩" },
        { value: 0.11, name: "雁北" },
        { value: 0.09, name: "五泉山" },
        { value: 0.12, name: "中山路" },
        { value: 0.06, name: "庆阳路" },
        { value: 0.08, name: "武都路" },
        { value: 0.08, name: "酒泉路" },
        { value: 0.08, name: "天水路" },
      ].find((i) => i.name === name)?.value * 100 + "%";
            return name + " " + value;
          },
        },
        series: [
          {
            center: ["60%", "50%"],
            type: "pie",
            radius: "80%",
            label: { show: false },
            labelLine: { show: false },
            data: [
        { value: 0.08, name: "东岗路" },
        { value: 0.06, name: "段家滩" },
        { value: 0.11, name: "雁北" },
        { value: 0.09, name: "五泉山" },
        { value: 0.12, name: "中山路" },
        { value: 0.06, name: "庆阳路" },
        { value: 0.08, name: "武都路" },
        { value: 0.08, name: "酒泉路" },
        { value: 0.08, name: "天水路" },
      ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      },
      option7:{
        	  textStyle: {
    fontSize: this.px(12),
    color: '#79839E'
  },
  //  grid: {
  //         x: this.px(0),
  //         y: this.px(0),
  //         x2: this.px(0),
  //         y2: this.px(0),
  //         containLabel: true,
  //       },
	color: ['#F46064', '#F38E1C', '#1CDB7C', '#8D70F8', '#33A4FA'],
      xAxis: {show: false},
      yAxis: {show: false},
      // legend: {show: false},
        legend: {
          textStyle: {
    fontSize: this.px(12),
    color: 'white'
  },
    top: 'bottom'
  },
      series: [
        {
          startAngle: -20,
          type: 'pie',
          radius: ['25%', '60%'],
          avoidLabelOverlap: false,
          label: {
            show: true, position: 'outside', textStyle: {color: 'white', fontSize: this.px(20)},
            distanceToLabelLine: 0,
            formatter(options) {
              return options.value * 100 + '%';
            }
          },
          labelLine: {show: true, length: 0},
          roseType: 'area',
          itemStyle: {
            shadowBlur: this.px(200),
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          },
          data: [
            {value: 0.34, name: '盗窃'},
            {value: 0.19, name: '抢夺'},
            {value: 0.11, name: '扒窃'},
            {value: 0.20, name: '诈骗'},
            {value: 0.04, name: '杀人'},
            {value: 0.10, name: '纵火'},
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
  components: { chart, chart6, chart7, chart8 },
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
  > .section1,
  .section2,
  .section4,
  .section5 {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  > .section1 {
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
    color: white;
    > .row1 {
      height: pxToRem(317);
    }
    > .row2 {
      height: pxToRem(317);
    }
    > .row3 {
      height: pxToRem(455);
    }
  }
}
</style>