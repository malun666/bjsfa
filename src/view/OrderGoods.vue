<template>
  <div class="p-wrap">
    <tophd title="产品选择" rulrto=""></tophd>
    <div class="goods-wrap">
      <div class="goods-item">
        <div class="img-box">
          <img :src="item.ImgUrl" :alt="item.GoodsName">
        </div>
        <div class="goods-des">
          <h3>{{ item.GoodsName }}</h3>
          <p class="goods-NO-box">
            <span>编码:{{ item.GoodsNO }}</span>
            <span>规格:{{ item.Specification }}</span>
          </p>
          <p class="price-box">
            <span>价格:
              <i>{{ item.Price }}</i>
            </span>
            <span class="kc">库存:{{ item.Storage }} {{ item.UnitName }}</span>
          </p>
        </div>
      </div>
    </div>
    <div class="stourage-box floor">
      <p class="l-txt">库存</p>
      <p class="r-txt">{{ item.Storage }}</p>
    </div>
    <div class="stourage-box floor">
      <p class="l-txt">数量</p>
      <p class="r-txt acount-box">
        <i class="minus"><img src="../assets/minus.png" alt="" @click="(count > 1) && (count-=1)"></i>
        <input type="text" v-model="count">
        <i class="add"><img src="../assets/plus.png" alt="" @click="count+=1"></i>
      </p>
    </div>
    <div class="btn-group">
      <div class="cancle" @click="$router.go(-1)">取消</div>
      <div class="add-cart" @click="addCart()">加入购物车</div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import TopHd from '../components/TopHd';
import { loadGoodsByIdService } from '../service/loadData';

export default {
  name: 'ordergoods',
  data() {
    return {
      item: {},
      count: 1,
      kname: ''
    };
  },
  components: {
    tophd: TopHd
  },
  methods: {
    addCart() {
      // 购物车需要的信息
      // var count = this.count; 下单数量
      // shop商铺的信息
      // 商铺的信息，包括商铺名、图片、数量
    },
    ...mapMutations(['changeAppName'])
  },
  created: function() {
    var id = this.$route.params.goodsId;
    // 更新最新的商品的信息
    loadGoodsByIdService(id).then(res => {
      this.item = Object.assign({}, this.item, res);
    });
  },
  computed: {
    ...mapGetters(['getAppName'])
  },
  mounted: function() {}
};
</script>

<style lang="scss" scoped>
@import '../style/mixin.scss';
* {
  box-sizing: border-box;
}
.goods-wrap {
  padding: 0 px2rem(28);
  .goods-item {
    border-bottom: 1px solid #ccc;
    height: px2rem(164);
    padding: px2rem(20) 0;
    display: flex;
    line-height: 1.2;
    .img-box {
      border: 1px solid #ccc;
      height: px2rem(124);
      width: px2rem(124);
      img {
        height: 100%;
        width: 100%;
        vertical-align: top;
      }
    }
    .goods-des {
      padding-left: px2rem(28);
      flex: 1;
      h3 {
        padding-bottom: px2rem(12);
      }
      p {
        display: flex;
        justify-content: space-between;
        & > span {
          flex: 0 0 px2rem(212);
        }
        i {
          font-size: px2rem(30);
          color: red;
          font-style: normal;
        }
      }
      .kc {
        align-self: flex-end;
      }
      .price-box {
        margin-top: px2rem(33);
      } // price-box
    } // goods-des
  } // goods-list-item
}

.floor {
  border-bottom: 1px solid #ccc;
  margin: 0 px2rem(28);
  height: px2rem(110);
  display: flex;
  justify-content: space-between;
  padding-top: px2rem(40);
  .l-txt,
  .r-txt {
    font-size: px2rem(30);
    color: #000;
  }
}
.acount-box {
  i {
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: px2rem(46);
    height: px2rem(46);
    font-style: normal;
    vertical-align: bottom;
    text-align: center;
    line-height: px2rem(46);
  }
  i.minus {
    line-height: px2rem(30);
  }
  input {
    border: 1px solid #ccc;
    width: px2rem(90);
    height: px2rem(46);
    border-radius: 5px;
    font-size: px2rem(28);
    padding-left: 1em;
  }
}
.btn-group {
  width: 100%;
  position: fixed;
  display: flex;
  bottom: 0;
  left: 0;
  z-index: 1000;
  height: px2rem(110);
  font-size: px2rem(36);
  text-align: center;
  div {
    flex: 1;
    border: 1px solid #ccc;
    line-height: px2rem(110);
  }
  .cancle {
    color: #ff0000;
  }
  .add-cart {
    color: #10903d;
  }
}
</style>
