import Vue from 'vue';
import Router from 'vue-router';
import Index from '../view/Index';
import GoodsList from '../view/GoodsList';
import User from '../view/User';
import CompanyMsg from '../view/CompanyMsg';
import ComMsgDetail from '../view/ComMsgDetail';
import ShopVisiting from '../view/ShopVisiting';
import OrderGoods from '../view/OrderGoods';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/User',
      name: 'User',
      component: User
    },
    {
      path: '/CompanyMsg',
      name: 'CompanyMsg',
      component: CompanyMsg
    },
    {
      path: '/CompanyMsg/:id',
      name: 'ComMsgDetial',
      component: ComMsgDetail
    },
    {
      path: '/ShopVisiting',
      name: 'ShopVisiting',
      component: ShopVisiting
    },
    {
      path: '/goods/:shopid',
      name: 'GoodsList',
      component: GoodsList
    },
    {
      path: '/OrderGoods/:shopId/:goodsId',
      name: 'OrderGoods',
      component: OrderGoods
    }
  ]
});
