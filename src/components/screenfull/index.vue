<template>
  <div class="icon">
    <div
      class="button"
      @click="click">
      <i
        v-if="isFullscreen"
        class="iconfont icon-suoxiao"></i>
      <i
        v-else
        class="iconfont icon-quanping">全屏</i>
    </div>
  </div>
</template>

<script>
import screenfull from 'screenfull'

export default {
  data () {
    return {
      isFullscreen: false
    }
  },
  mounted () {
    this.init()
  },
  beforeDestroy () {
    this.destroy()
  },
  methods: {
    click () {
      if (!screenfull.isEnabled) {
        this.$message({
          message: 'you browser can not work',
          type: 'warning'
        })
        return false
      }
      screenfull.toggle()
    },
    change () {
      this.isFullscreen = screenfull.isFullscreen
    },
    init () {
      if (screenfull.isEnabled) {
        screenfull.on('change', this.change)
      }
    },
    destroy () {
      if (screenfull.isEnabled) {
        screenfull.off('change', this.change)
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .icon {
    .button {
      padding: 10px;
      opacity: .4;
      cursor: pointer;
      &:hover {
        opacity: .5;
      }
    }
  }
</style>
