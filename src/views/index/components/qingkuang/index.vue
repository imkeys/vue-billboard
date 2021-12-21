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
        <h3>情况统计</h3>
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
    right: 30px;
    top: calc(100px + (100vh - 260px) * .5 * .3 - 40px + 80px);
    width: 25vw;
    .tbody {
      height: calc((100vh - 260px) * .5 * .3 - 40px);
    }
  }
</style>
