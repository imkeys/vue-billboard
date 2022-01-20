<template>
  <div class="el-box">
    <div class="flash">
      <div class="tbody">
        <div>
          <div class="china"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import './china.js'

export default {
  data () {
    return {
      options: {
        tooltip: {
          // mousemove or click
          triggerOn: 'mousemove',
          padding: 8,
          borderWidth: 1,
          borderColor: '#00cef2',
          backgroundColor: 'rgba(255, 255, 255, .8)',
          textStyle: {
            color: '#333333',
            fontSize: 12
          },
          formatter: (e, t, n) => {
            let data = e.data
            // 模拟数据
            data.specialImportant = Math.random() * 1000 | 0
            data.import = Math.random() * 1000 | 0
            data.compare = Math.random() * 1000 | 0
            data.common = Math.random() * 1000 | 0
            data.specail = Math.random() * 1000 | 0
            let context = `
              <div>
                <p>${data.name}(2000年第一季度)</p>
                <p>
                  <span>事件总数：</span><span>${data.value}</span>
                </p>
                <p>
                  <span>特大事件：</span><span>${data.specialImportant}</span>
                </p>
                <p>
                  <span>重大事件：</span><span>${data.import}</span>
                </p>
                <p>
                  <span>较大事件：</span><span>${data.compare}</span>
                </p>
                <p>
                  <span>一般事件：</span><span>${data.common}</span>
                </p>
                <p>
                  <span>特写事件：</span><span>${data.specail}</span>
                </p>
              </div>
            `
            return context
          }
        },
        visualMap: {
          show: true,
          left: 20,
          top: 100,
          showLabel: true,
          inRange: {
            color: ['#ffffff']
          },
          textStyle: {
            color: '#c3dbfd'
          },
          pieces: [
            {
              gte: 100,
              label: '>= 1000',
              color: '#596ec9'
            },
            {
              gte: 500,
              lt: 999,
              label: '500 - 999',
              color: '#3c57ce'
            },
            {
              gte: 100,
              lt: 499,
              label: '100 - 499',
              color: '#6f83db'
            },
            {
              gte: 10,
              lt: 99,
              label: '10 - 99',
              color: '#9face7'
            },
            {
              lt: 10,
              label: '<10',
              color: '#bcc5ee'
            }
          ]
        },
        geo: {
          map: 'china',
          scaleLimit: {
            min: 1,
            max: 2
          },
          zoom: 1,
          top: 40,
          label: {
            normal: {
              show: true,
              fontSize: 12,
              color: 'rgba(255, 255, 255, .8)'
            }
          },
          itemStyle: {
            normal: {
              borderColor: 'rgba(255, 255, 255, .2)'
            },
            emphasis: {
              areaColor: '#f2d5ad',
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              borderWidth: 0
            }
          }
        },
        series: [
          {
            name: '突发事件',
            type: 'map',
            geoIndex: 0,
            data: []
          }
        ]
      },
      dataList: [
        {
          name: '南海诸岛',
          value: 100
        },
        {
          name: '北京',
          value: 540
        },
        {
          name: '天津',
          value: 130
        },
        {
          name: '上海',
          value: 400
        },
        {
          name: '重庆',
          value: 750
        },
        {
          name: '河北',
          value: 130
        },
        {
          name: '河南',
          value: 830
        },
        {
          name: '云南',
          value: 110
        },
        {
          name: '辽宁',
          value: 19
        },
        {
          name: '黑龙江',
          value: 150
        },
        {
          name: '湖南',
          value: 690
        },
        {
          name: '安徽',
          value: 60
        },
        {
          name: '山东',
          value: 39
        },
        {
          name: '新疆',
          value: 4
        },
        {
          name: '江苏',
          value: 31
        },
        {
          name: '浙江',
          value: 104
        },
        {
          name: '江西',
          value: 36
        },
        {
          name: '湖北',
          value: 52
        },
        {
          name: '广西',
          value: 33
        },
        {
          name: '甘肃',
          value: 7
        },
        {
          name: '山西',
          value: 5
        },
        {
          name: '内蒙古',
          value: 778
        },
        {
          name: '陕西',
          value: 22
        },
        {
          name: '吉林',
          value: 4
        },
        {
          name: '福建',
          value: 18
        },
        {
          name: '贵州',
          value: 5
        },
        {
          name: '广东',
          value: 98
        },
        {
          name: '青海',
          value: 1
        },
        {
          name: '西藏',
          value: 1000
        },
        {
          name: '四川',
          value: 440
        },
        {
          name: '宁夏',
          value: 4
        },
        {
          name: '海南',
          value: 22
        },
        {
          name: '台湾',
          value: 3
        },
        {
          name: '香港',
          value: 5
        },
        {
          name: '澳门',
          value: 555
        }
      ]
    }
  },
  methods: {
    // 初始化中国地图
    initEchartMap () {
      let chart = document.querySelector('.china')
      let $chart = this.$echarts.init(chart)
      $chart.setOption(this.options)
      window.addEventListener('resize', () => {
        $chart.resize()
      })
    },
    // 修改echart配制
    setEchartOption () {
      this.options.series[0]['data'] = this.dataList
    }
  },
  created () {
    this.setEchartOption()
  },
  mounted () {
    this.$nextTick(() => {
      this.initEchartMap()
    })
  }
}
</script>

<style lang="less" scoped>
  @height: calc((100vh - 260px) * .5 + 60px);

  .el-box {
    left: calc(25vw + 30px);
    top: 100px;
    width: calc(50vw - 60px);
    .tbody {
      height: @height;
    }
  }

  .china {
    height: calc(@height);
  }
</style>
