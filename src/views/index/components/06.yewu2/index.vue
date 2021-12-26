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
        <h3>各部门业务统计</h3>
      </div>
      <div class="tbody">
        <div>
          <div class="table">
            <dl class="head">
              <dd>
                <span>ID</span>
                <span>书籍名称</span>
                <span>作者</span>
                <span>商城</span>
                <span>价格</span>
                <span>加入时间</span>
              </dd>
            </dl>
            <dl class="list">
              <dd
                v-for="(item, index) in lister"
                :key="index">
                <span>{{item.id}}</span>
                <span>{{item.title}}</span>
                <span>{{item.author}}</span>
                <span>{{item.shop}}</span>
                <span>{{item.price}}</span>
                <span>{{item.addTime}}</span>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      lister: [
        {
          id: 1001,
          title: '星髓',
          author: '[美]罗布特·里德',
          shop: '京东',
          price: 99.00,
          addTime: '2021/12/12 12:15:15'
        },
        {
          id: 1002,
          title: '三体全集+超新星纪元+球状闪电',
          author: '[中国]刘慈欣',
          shop: '淘宝',
          price: 199.00,
          addTime: '2021/10/10 12:15:15'
        },
        {
          id: 1003,
          title: '沙丘全套 六部曲',
          author: '[美] 弗兰克·赫伯特',
          shop: '京东',
          price: 1299.00,
          addTime: '2021/05/02 12:15:15'
        },
        {
          id: 1004,
          title: '心安即是归处',
          author: '[中国]季羡林',
          shop: '京东',
          price: 99.00,
          addTime: '2021/12/12 12:15:15'
        },
        {
          id: 1005,
          title: '鬼谷子书籍',
          author: '[中国]鬼谷子',
          shop: '京东',
          price: 99.00,
          addTime: '2021/12/12 12:15:15'
        },
        {
          id: 1006,
          title: '中国国家地理百科全书',
          author: '[中国]张妙弟',
          shop: '京东',
          price: 99.00,
          addTime: '2021/12/12 12:15:15'
        },
        {
          id: 1007,
          title: '西游记+红楼梦+水浒传+三国演义',
          author: '[中国]罗贯中，施耐庵，吴承恩，曹雪芹',
          shop: '京东',
          price: 99.00,
          addTime: '2021/12/12 12:15:15'
        },
        {
          id: 1008,
          title: '故宫六百年',
          author: '[中国]阎崇年',
          shop: '京东',
          price: 99.00,
          addTime: '2021/12/12 12:15:15'
        },
        {
          id: 1009,
          title: '自律的人生更自由 彻底摆脱杂、乱、忙，做自己人生的掌控者',
          author: '[中国]小椰子',
          shop: '京东',
          price: 99.00,
          addTime: '2021/12/12 12:15:15'
        },
        {
          id: 1010,
          title: '中国式应酬：应酬是门技术活',
          author: '[中国]武敬敏',
          shop: '京东',
          price: 99.00,
          addTime: '2021/12/12 12:15:15'
        },
        {
          id: 1011,
          title: '枕上诗书',
          author: '[中国]徐若央，蓝风，方慧颖，赵小峦',
          shop: '京东',
          price: 99.00,
          addTime: '2021/12/12 12:15:15'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
  @height: calc((100vh - 260px) * .5);

  .el-box {
    left: calc(25vw + 60px);
    bottom: 30px;
    width: calc(100vw - 50vw - 120px);
    .tbody {
      height: @height;
      & > div {
        padding: 20px 0 0;
      }
    }
  }

  .table {
    position: relative;
    overflow: hidden;
    height: @height;
    .head,
    .list {
      position: relative;
      dd {
        position: relative;
        overflow: hidden;
        background: fade(#ffffff, 10%);
        display: flex;
        span {
          flex: 1;
          height: calc(@height * .08);
          line-height: calc(@height * .08);
          padding: 0 20px;
          color: #c2dcfd;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          &:nth-child(1) {
            flex: none;
            width: 100px;
          }
          &:nth-child(3) {
            flex: none;
            width: 160px;
          }
          &:nth-child(4) {
            flex: none;
            width: 80px;
          }
          &:nth-child(5) {
            flex: none;
            width: 80px;
          }
          &:nth-child(6) {
            flex: none;
            width: 180px;
          }
        }
      }
    }
    .list {
      dd {
        &:nth-child(odd) {
          background: none;
        }
      }
    }
  }
</style>
