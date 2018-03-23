<template>
  <header class="hd">
    <div class="hd-wrap">
      <a class="tp-l" @click="goback()">
        <img src="../assets/Direction.svg">
      </a>
      <span class="t"> {{ title }} </span>
      <router-link class="tp-r" :to="rurlto">
        <i v-if="iconclass !== ''" :class="iconclass"></i>
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'tphd',
  data() {
    return {
      msg: ''
    };
  },
  props: {
    iconclass: {
      type: String,
      default: ''
    },
    backurl: {
      type: String,
      default: ''
    },
    rurlto: {
      type: String,
      default: ''
    },
    title: {
      default: '',
      type: String
    }
  },
  methods: {
    goback() {
      if (this.backurl) {
        this.$router.push(this.backurl);
      } else {
        this.$router.go(-1);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../style/mixin';

.hd {
  .hd-wrap {
    height: px2rem(36*3);
    font-size: px2rem(36);
    line-height: px2rem(36);
    background: $hd-color;
    color: #fff;
    padding: 0 px2rem(30);
    line-height: px2rem(36*3);
    display: flex;
    justify-content: space-between;
    i {
      font-size: px2rem(48);
    }
    .tp-l img {
      width: px2rem(48);
    }
    .tp-r {
      i {
        width: px2rem(48);
        height: px2rem(48);
        line-height: px2rem(48);
        display: inline-block;
        color: #fff;
      }
      .icon-user {
        background: url(../assets/user.svg);
        background-size: cover;
      }
    }
  }
}
</style>
