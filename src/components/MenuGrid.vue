<template>
  <div class="menu-cell-wrap">
    <div v-for="(rowArr, rowIndex) in menuList" :key="rowIndex" class="row">
      <div class="menu-cell" v-for="(item, cellIndex) in rowArr" :key="cellIndex" :class="{'border-r-none': cellIndex == 2, 'border-b-none': rowIndex==2}">
        <router-link :to="item.url" class="menu-box" v-if="item.img">
          <div class="img-box">
            <img :src="item.img" :alt="item.title">
          </div>
          <h3>{{ item.title }}</h3>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
const MenuList = [
  [
    {
      img: require('../assets/index/gstg.png'),
      title: '公司通告',
      url: '/companymsg'
    },
    {
      img: require('../assets/index/jdbf.png'),
      title: '进店拜访',
      url: '/ShopVisiting'
    },
    {
      img: require('../assets/index/dhdd.png'),
      title: '电话订单',
      url: '/companymsg'
    }
  ],
  [
    {
      img: require('../assets/index/ddzt.png'),
      title: '订单状态',
      url: '/companymsg'
    },
    {
      img: require('../assets/index/pxzl.png'),
      title: '培训资料',
      url: '/companymsg'
    },
    {
      img: require('../assets/index/xxzx.png'),
      title: '信息中心',
      url: '/companymsg'
    }
  ],
  [
    {
      img: require('../assets/index/xzmd.png'),
      title: '新增门店',
      url: '/companymsg'
    },
    {
      img: require('../assets/index/sjtb.png'),
      title: '数据同步',
      url: '/companymsg'
    },
    {
      img: null,
      title: '',
      url: ''
    }
  ]
];

export default {
  name: 'menu-grid',
  data() {
    return {
      menuList: MenuList
    };
  },
  mounted() {}
};
</script>

<style lang="scss" scoped type="text/css">
@import '../style/mixin';
.menu-cell-wrap {
  flex: 1 1;
  border-top: 1px solid #ccc;
  // padding-top: px2rem(28);
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  padding: 0 px2rem(28);
  .row {
    box-sizing: border-box;
    flex: 1 1;
    display: flex;
    justify-content: flex-start;
  }
}
.menu-cell {
  flex: 1 1 px2rem(250);
  border: 1px solid #ccc;

  border-left: 1px solid transparent;
  border-top: 1px solid transparent;

  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .menu-box {
    text-align: center;
    display: block;
    .img-box {
      img {
        width: px2rem(62);
        height: px2rem(62);
        vertical-align: top;
      }
    }
    h3 {
      color: #000;
      font-size: px2rem(24);
      text-align: center;
      line-height: px2rem(24);
      padding-top: px2rem(36);
    }
  }
}
</style>
