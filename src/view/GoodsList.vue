<template>
  <div class="goods-wrap">
    <tophd title="下单"></tophd>
    <ul class="goods-list">
      <li class="goods-list-item" v-for="(item, index) in goodsList" :key="index" @click="goAddCart(item.GoodsId)">
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
      </li>
    </ul>
  </div>
</template>

<script>
import TopHd from '../components/TopHd';
import { loadGoodsListService } from '../service/loadData';

export default {
  name: 'goodslist',
  data() {
    return {
      goodsList: []
    };
  },
  components: {
    tophd: TopHd
  },
  methods: {
    goAddCart(id) {
      this.$router.push({
        name: 'OrderGoods',
        params: {
          shopId: this.$route.params.shopId,
          goodsId: id
        }
      });
    }
  },
  created: function() {
    loadGoodsListService().then(res => {
      this.goodsList.push(...res.GoodsList);
    });
  }
};
</script>

<style lang="scss" scoped>
@import '../style/mixin.scss';

.goods-wrap {
  * {
    box-sizing: border-box;
  }
  .goods-list {
    padding: 0 px2rem(28);
    .goods-list-item {
      border-bottom: 1px solid #ccc;
      height: px2rem(164);
      padding: px2rem(20) 0;
      display: flex;
      line-height: 1.2;
      .img-box {
        border: 1px solid #ccc;
        img {
          height: px2rem(124);
          width: px2rem(124);
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
}
</style>
