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
        <h3>03.办结时间</h3>
      </div>
      <div class="tbody">
        <div>
          <div class="banjie2"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: {
        label: [],
        value: [],
        list: [
          { label: '2018-01', value: 1.2 },
          { label: '2018-02', value: 2.5 },
          { label: '2018-03', value: 2.9 },
          { label: '2018-04', value: 4 },
          { label: '2018-05', value: 6 },
          { label: '2018-06', value: 4.5 },
          { label: '2018-07', value: 6.3 },
          { label: '2018-08', value: 2.5 },
          { label: '2018-09', value: 1.2 },
          { label: '2018-10', value: 2.5 },
          { label: '2018-11', value: 3.5 },
          { label: '2018-12', value: 5 }
        ]
      }
    }
  },
  mounted () {
    const labels = []
    const values = []
    this.data.list.map(item => {
      labels.push(item.label)
      values.push(item.value)
    })
    this.data.label = labels
    this.data.value = values
    this.drawLine()
  },
  methods: {
    drawLine () {
      const chart = document.querySelector('.banjie2')
      const { clientWidth } = chart
      const $chart = this.$echarts.init(chart)
      $chart.setOption({
        dataset: {
          source: this.data
        },
        xAxis: {
          type: 'category',
          axisLine: {
            lineStyle: {
              color: '#aed3ee'
            }
          },
          data: this.data.label
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
          },
          splitNumber: 2
        },
        series: [{
          name: '单位（万件）',
          type: 'line',
          smooth: true,
          data: this.data.value,
          areaStyle: {
            color: this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgba(58,77,233,0.8)'
              },
              {
                offset: 1,
                color: 'rgba(58,77,233,0.3)'
              }
            ])
          }
        }]
      })
      window.addEventListener('resize', () => {
        $chart.resize()
      })
    }
  }
}
</script>

<style lang="less" scoped>
  @height: calc(((100vh - 160px) * .5 - 30px) * .5 - 120px);

  .el-box {
    right: 30px;
    bottom: 30px;
    width: 25vw;
    .tbody {
      height: @height;
    }
  }

  .banjie2 {
    position: relative;
    top: -20px;
    height: calc(@height + 50px);
  }
</style>
