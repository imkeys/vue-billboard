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
        <h3>部门业务统计</h3>
      </div>
      <div class="tbody">
        <div>
          <div class="bumen"></div>
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
          { name: '社会保障局', value: 279 },
          { name: '市民中心', value: 377 },
          { name: '卫计委', value: 284 },
          { name: '人力资源', value: 135 },
          { name: '综合执法局', value: 114 },
          { name: '残疾人联合会', value: 212 },
          { name: '民政局', value: 110 },
          { name: '住房公积金', value: 48 },
          { name: '环卫所', value: 362 }
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
    console.log(this.data)
    this.drawLine()
  },
  methods: {
    drawLine () {
      const chart = document.querySelector('.bumen')
      const { clientWidth } = chart
      const $chart = this.$echarts.init(chart)
      $chart.setOption({
        legend: {
          right: 'right',
          textStyle: {
            color: '#c3e8f1'
          }
        },
        series: [{
          type: 'pie',
          radius: [0, clientWidth * 0.2],
          center: ['40%', '50%'],
          itemStyle: {
            borderRadius: 10
          },
          label: {
            textBorderColor: '',
            color: '#c3e8f1'
          },
          data: this.data.list
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
  @height: calc(((100vh - 160px) * .5 - 30px) * .5 + 20px);

  .el-box {
    right: 30px;
    bottom: calc(((100vh - 160px) * .5 - 30px) * .5 - 10px);
    width: 25vw;
    .tbody {
      height: @height;
    }
  }

  .bumen {
    position: relative;
    height: @height;
  }
</style>
