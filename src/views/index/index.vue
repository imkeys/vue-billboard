<template>
  <div class="container">
    <tools></tools>
  </div>
</template>

<script>
import tools from './components/tools/'

export default {
  components: {
    tools
  },
  data () {
    return {}
  },
  created () {},
  methods: {}
}
</script>

<style lang="less" scoped>
  .container {
    width: 100vw;
    height: 100vh;
    background: #050e27;
    color: #ffffff;
  }
</style>
