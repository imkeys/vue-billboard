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
        <h3>07.满意度统计</h3>
      </div>
      <div class="tbody">
        <div>
          <div class="tongji">
            <div>
              <div class="total">
                <span>{{tongji.total}}</span>
              </div>
              <div class="right">
                <div
                  v-for="(item, index) in tongji.status"
                  :key="index"
                  class="process">
                  <el-progress
                    type="circle"
                    :width="80"
                    :percentage="item.value"
                    :color="item.color">
                  </el-progress>
                  <div class="status">
                    <dl>
                      <dt :style="'color: '+ item.color +';'">{{item.value}}%</dt>
                      <dd>{{item.label}}</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tongji: {
        total: '99.3%',
        status: [
          {
            label: '不满意',
            value: 8.5,
            color: '#7ebdc2'
          },
          {
            label: '满意',
            value: 21.5,
            color: '#c6b25b'
          },
          {
            label: '非常满意',
            value: 78,
            color: '#dc3755'
          }
        ]
      }
    }
  }
}
</script>

<style lang="less" scoped>
  @height: 80px;

  .el-box {
    right: 30px;
    top: 100px;
    width: 25vw;
    .tbody {
      height: @height;
    }
  }

  .tongji {
    position: relative;
    overflow: hidden;
    height: @height;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    .total {
      float: left;
      line-height: 80px;
      font-size: 36px;
      color: #fcb82f;
      font-weight: bold;
    }
    .right {
      display: flex;
      margin: 0 0 0 120px;
    }
    .process {
      flex: 1;
      position: relative;
      margin: 0 0 0 15px;
      .el-progress {
        position: relative;
        z-index: 1;
        /deep/ .el-progress__text {
          display: none;
        }
        /deep/ svg {
          path:first-child {
            stroke: fade(#ffffff, 10%);
          }
        }
      }
      .status {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 0;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        dt {
          line-height: 24px;
          font-size: 18px;
        }
        dd {
          line-height: 30px;
          font-size: 14px;
        }
      }
    }
  }
</style>
