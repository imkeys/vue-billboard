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
        <h3>02.办结统计</h3>
      </div>
      <div class="tbody">
        <div>
          <div class="table">
            <dl>
              <dd
                v-for="(item, index) in lister"
                :key="index">
                <i
                  v-if="index == 0 || index == 3"
                  class="iconfont icon-question">
                </i>
                <i
                  v-else-if="index == 1 || index == 4"
                  class="iconfont icon-shouli">
                </i>
                <i
                  v-if="index == 2 || index == 5"
                  class="iconfont icon-icon_A">
                </i>
                <label>{{item.label}}</label>
                <span>{{item.value}}</span>
              </dd>
            </dl>
          </div>
          <div class="chart"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      lister: [
        { label: '今日受理', value: 1659 },
        { label: '今日办结', value: 1519 },
        { label: '累计受理', value: 1880 },
        { label: '累计办结', value: 1605 }
      ],
      data: [1.2, 1.6, 1.8, 2.2, 3, 4, 4.5, 3, 2, 4, 3.5, 2.6]
    }
  },
  mounted () {
    this.drawLine()
  },
  methods: {
    drawLine () {
      const chart = document.querySelector('.chart')
      const { clientWidth } = chart
      const $chart = this.$echarts.init(chart)
      $chart.setOption({
        title: {
          text: '2021年度统计大厅办件量',
          textStyle: {
            fontSize: 16,
            fontWeight: 'normal',
            color: '#ffffff'
          },
          right: 0,
          textAlign: 'right'
        },
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
          type: 'line',
          smooth: true,
          color: '#f45400',
          data: this.data
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
  @height: calc((100vh - 260px) * .5);

  .el-box {
    left: 30px;
    top: 100px;
    width: 25vw;
    .tbody {
      height: calc(@height);
      & > div {
        padding: 20px 0 0;
      }
    }
  }

  .table {
    dl {
      position: relative;
      overflow: hidden;
      padding: 0 0 40px 30px;
      dd {
        float: left;
        width: 50%;
        font-size: 16px;
        line-height: 40px;
        i {
          margin: 0 10px 0 0;
          font-size: 16px;
          color: #c3dbfd;
        }
        label {
          color: #c3dbfd;
          &::after {
            content: '：';
          }
        }
        span {
          color: #ffbc26;
        }
      }
    }
  }

  .chart {
    height: calc(@height - 120px);
  }
</style>
