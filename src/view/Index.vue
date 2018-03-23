<template>
  <div class="indexpage">
    <tphd title="SFA" iconclass="icon-user" backurl="/" rurlto="/user"></tphd>
    <p class="pg-title">{{ NDate | dateFormat('yyyy年MM月') }}</p>
    <div class="cp-wrap">
      <template v-for="(item, index) in indexData.circleData">
        <cirlce-progress :key="index" v-bind:tagname="item.tagname" class="cp-item" v-bind:pval="item.pval" v-bind:msg="item.msg" v-bind:plus="item.plus" v-bind:persents="item.persents"></cirlce-progress>
      </template>
    </div>
    <keep-alive>
      <menu-grid></menu-grid>
    </keep-alive>
  </div>
</template>
<script>
import { indexService } from '../service/loadData';
import { dateFormat } from '../filters/allFilters';
import tphd from '../components/TopHd';
import menuGrid from '../components/MenuGrid';
import cirlceProgress from '../components/index/CircleProgress';

export default {
  name: 'sfa-index',
  data() {
    return {
      indexData: {
        circleData: []
      },
      NDate: '2018/04/17'
    };
  },
  components: {
    'cirlce-progress': cirlceProgress,
    tphd: tphd,
    'menu-grid': menuGrid
  },
  created: function() {
    this.getIndexData();
  },
  mounted: function() {},
  methods: {
    getIndexData() {
      indexService().then(res => {
        this.NDate = res.date;
        this.indexData.circleData = res.circleData;
      });
    }
  },
  filters: {
    dateFormat
  }
};
</script>

<style lang="scss" scoped>
@import '../style/mixin';

.indexpage {
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
}
.cp-wrap {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
}
.pg-title {
  font-size: px2rem(28);
  color: #000;
  line-height: px2rem(28);
  padding-top: px2rem(40);
  padding-bottom: px2rem(26);
  text-align: center;
}
</style>
