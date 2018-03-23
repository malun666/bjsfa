<template>
  <div class="shop-wrap">
    <tophd title="进店拜访"></tophd>
    <div class="tab">
      <div class="tab-hd">
        <div class="tab-hd-item" v-for="(item, index) in tabData.tabTitleArr" :key="index" :class="{'active': index==activeTabIndex}" @click="activeIndex(index)">
          {{ item }}
        </div>
      </div>
      <div class="tab-bd">
        <div class="tab-bd-item" v-show="0==activeTabIndex">
          <ul class="shop-list">
            <li class="shop-list-item" v-for="(item, index) in shopList" :key="index">
              <div class="shop-info">
                <h3>{{ item.ShopName }}</h3>
                <p>
                  <span class="shopid">ID:{{ item.ShopId }}</span>
                  <span class="shopdate">创建时间：{{ item.SubDate }}</span>
                </p>
                <p>{{ item.ShopMgr }}</p>
              </div>
              <div class="phone-info">
                <p><img src="../assets/phone.png">电话：
                  <span>{{item.Phone}}</span>
                </p>
              </div>
              <div class="detail">
                <!-- <router-link :to="{name: 'GoodsList', params: {shopid: item.ShopId}}"> -->
                <a @click="goToGoodsList(item.ShopId)">
                  <img src="../assets/r.png" alt="">
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div class="tab-bd-item" v-show="1==activeTabIndex">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import tophd from '../components/TopHd';
import tab from '../components/Tab';
import { loadShopListService } from '../service/loadData';

export default {
  name: 'shopvisiting',
  data() {
    return {
      tabData: {
        tabTitleArr: ['计划内', '计划外']
      },
      activeTabIndex: 0,
      shopList: []
    };
  },
  methods: {
    activeIndex(index) {
      this.activeTabIndex = index;
    },
    goToGoodsList(shopId) {
      let t = this.shopList.find(i => i.ShopId === shopId);
      console.log(t, shopId, this.shopList);
      // 把当前下订单的商铺添加到 store
      t && this.setCurrShop(t);
      this.$router.push({ name: 'GoodsList', params: { shopid: shopId } });
    },
    ...mapMutations('cart', ['setCurrShop'])
  },
  components: {
    tophd: tophd,
    tab: tab
  },
  created: function() {
    loadShopListService().then(res => {
      this.shopList.push(...res.ShopList);
    });
  }
};
</script>

<style lang="scss" scoped>
@import '../style/mixin.scss';

.shop-wrap {
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
  .tab {
    flex: 1;
    display: flex;
    flex-flow: column nowrap;
    .tab-hd {
      flex: 0 0 px2rem(108);
    }
    .tab-bd {
      flex: 1;
      .shop-list {
        .shop-list-item {
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid #ccc;
          height: px2rem(176);
          box-sizing: border-box;
          padding: px2rem(30) px2rem(20);
          line-height: 1.5;
          p {
            font-size: px2rem(24);
            color: #757575;
            padding-top: px2rem(6);
            span {
              margin-right: px2rem(30);
            }
          }
          .shop-info {
            h3 {
              font-size: px2rem(28);
              color: #000;
            }

            flex: 1;
          } // shop info
          .phone-info {
            flex: 0 0 auto;
            display: flex;
            flex-flow: column nowrap;
            justify-content: center;
            span {
              color: #10903d;
              margin-left: -10px;
            }
            img {
              vertical-align: middle;
            }
          }
          .detail {
            padding-left: px2rem(10);
            a {
              display: block;
            }
            flex: 0 0 px2rem(50);
            text-align: right;
            display: flex;
            align-items: center;
          }
        } // shop item
      } // shop list
    } // tab-bd
  }
}
</style>
