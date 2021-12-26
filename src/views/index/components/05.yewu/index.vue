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
        <h3>业务统计</h3>
      </div>
      <div class="tbody">
        <div>
          <div class="yewu2"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: [
        {
          value: 555,
          itemStyle: {
            color: '#11b9f8'
          }
        },
        {
          value: 328,
          itemStyle: {
            color: '#ff6b6b'
          }
        },
        {
          value: 225,
          itemStyle: {
            color: '#8fed7d'
          }
        },
        {
          value: 400,
          itemStyle: {
            color: '#8286e9'
          }
        }
      ]
    }
  },
  mounted () {
    this.drawLine()
  },
  methods: {
    drawLine () {
      const chart = document.querySelector('.yewu2')
      const { clientWidth } = chart
      const $chart = this.$echarts.init(chart)
      $chart.setOption({
        xAxis: {
          type: 'category',
          axisLine: {
            lineStyle: {
              color: '#aed3ee'
            }
          },
          data: ['社会保险', '卫计委', '住房公积金', '建设规划']
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
              type: 'solid',
              opacity: 0.3
            }
          },
          splitNumber: 3
        },
        series: [{
          name: '单位（万件）',
          type: 'bar',
          smooth: true,
          data: this.data
        }]
      })
      window.onresize = () => {
        $chart.resize()
      }
    }
  }
}
</script>

<style lang="less" scoped>
  @height: calc((100vh - 160px) * .5 - 400px);

  .el-box {
    right: 30px;
    top: 450px;
    width: 25vw;
    .tbody {
      height: @height;
    }
  }

  .yewu2 {
    height: calc(@height + 50px);
  }
</style>
