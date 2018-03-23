import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';
import cart from './modules/cart';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    AppName: '宝洁快消品移动管理端'
  },
  actions,
  mutations,
  getters: {
    getAppName: state => {
      return state.AppName;
    }
  },
  modules: {
    cart
  }
});
