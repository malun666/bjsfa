<template>
  <div class="tab">
    <div class="tab-hd">
      <div class="tab-hd-item" v-for="(item, index) in tabTitleArr" :key="index" :class="{'active': index==activeTabIndex}" @click="activeIndex(index)">
        {{ item }}
      </div>
    </div>
    <div class="tab-bd">
    </div>
  </div>
</template>

<script>
export default {
  name: 'tab',
  data() {
    return {
      activeTabIndex: 0
    };
  },
  props: {
    tabTitleArr: {
      default: () => ['tab1'],
      type: Array
    }
  },
  methods: {
    activeIndex(index) {
      this.activeTabIndex = index;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../style/mixin';

.tab {
  * {
    box-sizing: border-box;
  }
  display: flex;
  flex-direction: column;
  .tab-hd {
    display: flex;
    height: px2rem(108);
    .tab-hd-item {
      flex: 1 1 auto;
      border-right: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
      font-size: px2rem(28);
      color: #000;
      line-height: px2rem(108);
      text-align: center;
    }
    .tab-hd-item.active {
      border-bottom: px2rem(6) solid rgb(16, 144, 61);
    }
  }
  .tab-bd {
    flex: 1;
  }
}
</style>
