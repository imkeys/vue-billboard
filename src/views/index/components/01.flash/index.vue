<template>
  <div class="el-box">
    <div class="flash">
      <div class="tbody">
        <div>
          <dl class="tabed">
            <dd class="active">中国地图</dd>
            <dd>春节人口流动情况</dd>
          </dl>
          <china-map class="china" />
          <fly-map class="china" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import flyMap from './components/fly-map/'
import chinaMap from './components/china-map/'

export default {
  components: {
    flyMap,
    chinaMap
  },
  data () {
    return {
    }
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

  .tabed {
    position: relative;
    top: 20px;
    left: 20px;
    z-index: 10;
    dd {
      display: inline-block;
      vertical-align: middle;
      margin: 0 0 20px 10px;
      padding: 0 10px;
      line-height: 28px;
      background: rgba(0, 70, 255, .5);
      font-size: 12px;
      border-radius: 5px;
      cursor: pointer;
      &:hover {
        background: rgba(0, 70, 255, .7);
      }
      &.active {
        background: rgba(0, 70, 255, 1);
      }
    }
  }

  .china {
    height: calc(@height - 60px);
  }
</style>
