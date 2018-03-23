<template>
  <div id="app">
    <router-view class="route-view-wrap" />
  </div>
</template>

<script>
// import 'http://rapapi.org/rap.plugin.js?projectId=32555';
import './plugin/hotcss';
export default {
  name: 'App'
};
</script>

<style lang="scss">
@import './style/common.scss';
html,
body {
  height: 100%;
}
#app {
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  .route-view-wrap {
    flex: 1;
  }
}
</style>
