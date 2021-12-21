<template>
  <div class="header">
    <h2>政府部门大数据统计分析</h2>
  </div>
</template>

<style lang="less" scoped>
  .header {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 100;
    height: 100px;
    background: url(~@/assets/billboard/billboard-head.png) center bottom no-repeat;
    background-size: 100% 100%;
    @media (max-width: 1280px) {
      height: 70px;
    }
    h2 {
      position: relative;
      padding: 20px 0 30px;
      line-height: 50px;
      font-size: 40px;
      text-align: center;
      background-image: linear-gradient(180deg, #ffffff 0, #ffffff 30%, #000000 100%);
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
      @media (max-width: 1280px) {
        padding: 10px 0 20px;
        line-height: 40px;
        font-size: 30px;
      }
    }
  }
</style>
