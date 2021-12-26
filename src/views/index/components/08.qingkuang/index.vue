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
        <h3>情况统计</h3>
      </div>
      <div class="tbody">
        <div>
          <div class="lister">
            <dl class="list">
              <dd>
                <i class="iconfont icon-alarm"></i>
                <h3>今日紧急</h3>
                <p>26</p>
              </dd>
              <dd>
                <i class="iconfont icon-zhengchang"></i>
                <h3>今日正常</h3>
                <p>278</p>
              </dd>
              <dd>
                <i class="iconfont icon-jinggao"></i>
                <h3>今日黄牌</h3>
                <p>13</p>
              </dd>
              <dd>
                <i class="iconfont icon-weixianpin"></i>
                <h3>今日红牌</h3>
                <p>8</p>
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
    top: 290px;
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
        text-align: left;
        padding: 10px 0 10px 50px;
        background: fade(#b9b9b9, 10%);
        i {
          position: absolute;
          left: 0;
          top: 50%;
          margin: -20px 0 0 0;
          color: #076ae2;
          font-size: 32px;
          width: 50px;
          height: 40px;
          line-height: 40px;
          text-align: center;
        }
        h3 {
          color: #bedfff;
          line-height: 25px;
          font-size: 16px;
          font-weight: normal;
        }
        p {
          color: #f8b725;
          line-height: 25px;
          font-size: 16px;
          &::after {
            content: '件';
            color: #bedfff;
          }
        }
      }
    }
  }
</style>
