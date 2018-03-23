const state = {
  added: [],
  checkoutStatus: null,
  currShop: null
};

// getters
const getters = {
  cartTotalPrice: (state, getters) => {},
  currShop: state => state.currShop
};

// actions
const actions = {};

// mutations
const mutations = {
  setCurrShop(state, shop) {
    if (shop != null) {
      state.currShop = shop;
    }
  },

  /**
   *  添加商品到购物车
   * @param {Object} state 购物车的状态对象
   * @param {Object} playload，给突变添加额外数据： 包括商品信息、数量等
   */
  addProduct(state, pInfo) {
    // state.added.push();
    // pInfo: {Product: {}, Quantity: 10, ShopId: 100092}
    // 判断是否已经添加到了当前数组，如果是直接用添加数量
    var p = state.added.find(
      item =>
        item.ShopId === pInfo.ShopId &&
        item.Product.GoodsId === pInfo.Product.GoodsId
    );
    if (p !== null) {
      p.Quantity += pInfo.Quantity;
    } else {
      state.added.push(pInfo);
    }
  },

  /**
   * 从购物车中移除元素
   * @param {any} pInfo给突变添加额外数据： 包括商品信息、数量等
   */
  removeProduct(state, pInfo) {
    // 移除当前购物车中的商品信息
    var index = state.added.findIndex(
      item =>
        item.ShopId === pInfo.ShopId &&
        item.Product.GoodsId === pInfo.Product.GoodsId
    );
    index !== -1 && state.added.splice(index, 1);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
