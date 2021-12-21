<template>
  <div class="container">
    <el-tools></el-tools>
    <el-header></el-header>
    <el-flash></el-flash>
    <el-banjie></el-banjie>
    <el-remen></el-remen>
    <el-yewu></el-yewu>
    <el-manyi></el-manyi>
    <el-qingkuang></el-qingkuang>
    <el-yewu2></el-yewu2>
    <el-bumen></el-bumen>
    <el-banjie2></el-banjie2>
  </div>
</template>

<script>
import elTools from './components/tools/'
import elHeader from './components/header/'
import elBanjie from './components/banjie/'
import elBanjie2 from './components/banjie2/'
import elRemen from './components/remen/'
import elYewu from './components/yewu/'
import elYewu2 from './components/yewu2/'
import elManyi from './components/manyi/'
import elQingkuang from './components/qingkuang/'
import elBumen from './components/bumen/'

export default {
  components: {
    elTools,
    elHeader,
    elBanjie,
    elBanjie2,
    elRemen,
    elYewu,
    elYewu2,
    elManyi,
    elBumen,
    elQingkuang
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
    background: url(~@/assets/billboard/billboard-bj.jpg) center center no-repeat #0a2366;
    background-size: cover;
    color: #ffffff;
    box-shadow: 0 0 2000px rgba(0, 0, 0, .3) inset;
  }
</style>
