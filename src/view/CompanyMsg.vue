<template>
  <div class="p-wrap">
    <tophd backurl="/" title="公司通告" rulrto=""></tophd>
    <ul class="msg-list">
      <li class="msg-item" v-for="(item, index) in msgList" :key="index">
        <div class="l-read">
          <i :class="{'readed': item.IsRead }"></i>
        </div>
        <div class="r-msg">
          <p class="title">{{ item.MsgTitle }}</p>
          <p class="date">{{ item.Date }}</p>
        </div>
        <div class="detail">
          <router-link :to="'/CompanyMsg/' + item.MsgId" @click="item.IsRead=true">
            <img src="../assets/r.png" alt="">
          </router-link>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import TopHd from '../components/TopHd';
import { loadMsgListService } from '../service/loadData';

let timer = 0;
let pageIndex = 1;

export default {
  name: 'company-msg',
  data() {
    return {
      msgList: []
    };
  },
  components: {
    tophd: TopHd
  },
  methods: {
    loadMsgData() {
      pageIndex++;
      loadMsgListService(pageIndex).then(res => {
        this.msgList.push(...res.MsgList);
      });
    },
    doScroll() {
      var vm = this;
      if (timer === 0) {
        timer = setTimeout(() => {
          // 拿到滚动的距离
          var scrollH =
            document.documentElement.scrollTop || document.body.scrollTop;
          // 整个网页的高度
          var pageH = document.body.scrollHeight;

          // 拿到整个视口的高度。
          var viewportH = document.documentElement.clientHeight;

          console.log(pageH, scrollH, document.body.clientHeight, viewportH);
          // 底部剩余的高度 = 整个网页高度- 滚动高度-视口高度
          var bottomH = pageH - scrollH - viewportH;
          if (bottomH < 120) {
            vm.loadMsgData();
          }
          // 核心代码让时钟可以继续执行。
          clearTimeout(timer);
          timer = 0;
        }, 100);
      }
    }
  },
  created: function() {
    var vm = this;
    this.loadMsgData();
    // 页面加载完成后，先进行一次加载
    vm.doScroll();
    // 页面滚动到底部加载新数据
    window.onscroll = () => {
      vm.doScroll();
    };
  },
  mounted: function() {}
};
</script>

<style lang="scss" scoped>
@import '../style/mixin.scss';

.msg-list {
  overflow: auto;
  .msg-item {
    display: flex;
    height: px2rem(124);
    border-bottom: 1px solid #ccc;
    position: relative;
    .l-read {
      width: px2rem(80);
      text-align: center;
      font-size: px2rem(30);
      i {
        display: inline-block;
        line-height: px2rem(12);
        margin-top: px2rem(40);
        height: px2rem(12);
        width: px2rem(12);
        border-radius: 50%;
        background-color: #f00;
      }
      i.readed {
        background-color: #6c6c6c;
      }
    }
    .r-msg {
      box-sizing: border-box;
      padding: px2rem(32) 0;
      .title {
        font-size: px2rem(28);
        color: #000;
      }
      .date {
        margin-top: px2rem(16);
        font-size: px2rem(22);
        color: #757575;
      }
    }
    .detail {
      position: absolute;
      right: px2rem(40);
      top: 50%;
      transform: translate(0, -50%);
    }
  }
}
</style>
