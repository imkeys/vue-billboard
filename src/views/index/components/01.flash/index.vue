<template>
  <div class="el-box">
    <div class="flash">
      <div class="tbody">
        <div>
          <div class=""></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  @height: calc((100vh - 260px) * .5 + 30px);

  .el-box {
    left: calc(25vw + 30px);
    top: 100px;
    width: calc(50vw - 60px);
    .tbody {
      height: @height;
    }
  }
</style>
