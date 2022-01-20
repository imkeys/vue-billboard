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
        <h3>08.情况统计</h3>
      </div>
      <div class="tbody">
        <div>
          <div class="lister">
            <dl class="list">
              <dd>
                <i class="iconfont icon-alarm"></i>
                <p>紧急<b>26</b></p>
              </dd>
              <dd>
                <i class="iconfont icon-zhengchang"></i>
                <p>正常<b>16</b></p>
              </dd>
              <dd>
                <i class="iconfont icon-jinggao"></i>
                <p>黄牌<b>16</b></p>
              </dd>
              <dd>
                <i class="iconfont icon-weixianpin"></i>
                <p>红牌<b>28</b></p>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  @height: 80px;

  .el-box {
    right: 30px;
    top: 260px;
    width: 25vw;
    .tbody {
      height: @height;
    }
  }

  .lister {
    position: relative;
    overflow: hidden;
    height: @height;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    .list {
      display: flex;
      dd {
        flex: 1;
        margin: 10px;
        position: relative;
        padding: 10px 10px 10px 10px;
        background: fade(#b9b9b9, 10%);
        i {
          display: block;
          margin: 0 auto;
          color: #076ae2;
          font-size: 30px;
          width: 40px;
          height: 40px;
          line-height: 40px;
          text-align: center;
        }
        p {
          color: #bedfff;
          line-height: 25px;
          font-size: 14px;
          font-weight: normal;
          b {
            color: #f8b725;
            line-height: 25px;
            font-size: 14px;
            &::after {
              content: '件';
              color: #bedfff;
            }
          }
        }
      }
    }
  }
</style>
