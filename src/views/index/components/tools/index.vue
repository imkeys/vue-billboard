<template>
  <div class="tools">
    <screenfull />
  </div>
</template>

<script>
import screenfull from '@/components/screenfull'

export default ({
  components: {
    screenfull
  }
})
</script>

<style lang="less" scoped>
  .tools {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 101;
  }
</style>
