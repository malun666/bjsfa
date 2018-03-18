<template>
  <div class="hello">
    <h1>{{ mainTitle }}</h1>
    <h2>{{ subTitle }}</h2>
    <cirlce-progress pval="16" msg="月时间进度" plus="true" persents="false"></cirlce-progress>
    <cirlce-progress pval="16" msg="月时间进度" plus="true" persents="false"></cirlce-progress>
    <cirlce-progress pval="16" msg="月时间进度" plus="true" persents="false"></cirlce-progress>
  </div>
</template>

<script>
import cirlceProgress from './CircleProgress';
export default {
  name: 'SFAIndex',
  data () {
    return {
      mainTitle: '宝洁SFA首页',
      subTitle: '干你想干的，成就辉煌业绩！'
    };
  },
  components: {
    'cirlce-progress': cirlceProgress
  }
};
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
