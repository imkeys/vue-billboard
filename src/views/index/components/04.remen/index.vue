<template>
  <div class="el-box">
    <div class="border">
      <i class="line line1"></i>
      <i class="line line2"></i>
      <i class="line line3"></i>
      <i class="line line4"></i>
      <i class="line line5"></i>
      <i class="line line6">
        <em></em>
      </i>
    </div>
    <div class="inner">
      <div class="thead">
        <h3>04.热门事项</h3>
      </div>
      <div class="tbody">
        <div>
          <div class="chart3"></div>
          <div class="chart2"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: [1.5, 3.6, 4.2, 2.5, 3.5],
      data2: [
        ['score', 'amount', 'product'],
        [100, 224, '医疗保险报销'],
        [75, 153, '企业保险'],
        [50, 102, '就业人员退休办理'],
        [25, 84, '社会保障卡领取'],
        [0, 63, '居民补充养老保险']
      ]
    }
  },
  mounted () {
    this.drawLine()
    this.drawLine2()
  },
  methods: {
    drawLine () {
      const chart = document.querySelector('.chart2')
      const { clientWidth } = chart
      const $chart = this.$echarts.init(chart)
      $chart.setOption({
        title: {
          text: '累计热门事项',
          textStyle: {
            fontSize: 16,
            fontWeight: 'normal',
            color: '#ffffff'
          }
        },
        xAxis: {
          type: 'category',
          axisLine: {
            lineStyle: {
              color: '#aed3ee'
            }
          },
          data: ['医疗保险', '企业保险', '退休办理', '社会保障卡', '居民养老']
        },
        yAxis: {
          type: 'value',
          name: '单位（万件）',
          nameTextStyle: {
            align: 'right',
            padding: [0, 100 - clientWidth, 0, 0]
          },
          axisLine: {
            lineStyle: {
              color: '#aed3ee'
            }
          },
          splitLine: {
            lineStyle: {
              type: 'dashed',
              opacity: 0.3
            }
          }
        },
        series: [{
          name: '单位（万件）',
          type: 'bar',
          smooth: true,
          itemStyle: {
            color: this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#43b06f' },
              { offset: 1, color: '#229acc' }
            ])
          },
          data: this.data
        }]
      })
      window.addEventListener('resize', () => {
        $chart.resize()
      })
    },
    drawLine2 () {
      const chart = document.querySelector('.chart3')
      const $chart = this.$echarts.init(chart)
      $chart.setOption({
        title: {
          text: '今日热门事项TOP5',
          textStyle: {
            fontSize: 16,
            fontWeight: 'normal',
            color: '#ffffff'
          }
        },
        dataset: {
          source: this.data2
        },
        grid: {
          containLabel: true
        },
        xAxis: {
          name: 'amount',
          show: false,
          inverse: true
        },
        yAxis: {
          type: 'category',
          axisLine: {
            show: false,
            lineStyle: {
              color: '#aed3ee'
            }
          },
          axisTick: {
            show: false
          },
          nameTextStyle: {
            align: 'right'
          }
        },
        visualMap: {
          show: false,
          min: 0,
          max: 100,
          dimension: 0,
          inRange: {
            color: ['#f22721', '#edac1c']
          }
        },
        series: [
          {
            type: 'bar',
            encode: {
              x: 'amount',
              y: 'product'
            }
          }
        ]
      })
      window.addEventListener('resize', () => {
        $chart.resize()
      })
    }
  }
}
</script>

<style lang="less" scoped>
  @height: calc((100vh - 260px) * .5);

  .el-box {
    left: 30px;
    bottom: 30px;
    width: 25vw;
    .tbody {
      height: calc(@height);
      & > div {
        padding: 20px 0 0;
      }
    }
  }

  .chart3 {
    height: 280px;
    margin: 0 0 -40px;
  }

  .chart2 {
    height: calc(@height - 230px);
  }
</style>
