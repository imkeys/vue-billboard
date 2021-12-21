<template>
  <div class="el-box">
    <div class="border">
      <i class="line line1"></i>
      <i class="line line2"></i>
      <i class="line line3"></i>
      <i class="line line4"></i>
      <i class="line line5"></i>
      <i class="line line6"></i>
    </div>
    <div class="inner">
      <div class="thead">
        <h3>热门事项</h3>
      </div>
      <div class="tbody">
        <div>

        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .el-box {
    left: 30px;
    bottom: 30px;
    width: 25vw;
    .tbody {
      height: calc((100vh - 260px) * .5);
      @media (max-width: 1280px) {
        height: calc((100vh - 230px) * .5);
      }
    }
  }
</style>
