import Vue from 'vue';
import Router from 'vue-router';
import SFAIndex from '@/components/SFAIndex';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SFAIndex',
      component: SFAIndex
    }
  ]
});
