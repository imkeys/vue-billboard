<template>
  <div class="el-box">
    <div class="border">
      <i class="line line1"></i>
      <i class="line line2"></i>
      <i class="line line3"></i>
      <i class="line line4"></i>
      <i class="line line5"></i>
      <i class="line line6"></i>
    </div>
    <div class="inner">
      <div class="thead">
        <h3>办结统计</h3>
      </div>
      <div class="tbody">
        <div>
          <div
            id="myChart"
            class="chart">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  mounted () {
    this.drawLine()
  },
  methods: {
    drawLine () {
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      myChart.setOption({
        darkMode: true,
        title: {
          text: '2021年度统计大厅办件量',
          textStyle: {
            fontSize: 14,
            color: '#ffffff'
          }
        },
        tooltip: {},
        xAxis: {
          type: 'category',
          axisLine: {
            lineStyle: {
              color: '#aed3ee'
            }
          },
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        },
        yAxis: {
          type: 'value',
          name: '单位（万件）',
          axisLine: {
            lineStyle: {
              color: '#aed3ee'
            }
          }
        },
        series: [{
          name: '单位（万件）',
          type: 'line',
          smooth: true,
          color: '#f45400',
          data: [1.2, 1.6, 1.8, 2.2, 3, 4, 4.5, 3, 2, 4, 3.5, 2.6]
        }]
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .el-box {
    left: 30px;
    top: 100px;
    width: 25vw;
    .tbody {
      height: calc((100vh - 260px) * .5);
    }
  }

  .chart {
    height: calc((100vh - 260px) * .5);
  }
</style>
