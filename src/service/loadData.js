import { APIURL } from '../js/config';
import fetch from '../js/fetch';

// 首页数据获取
export const indexService = () => fetch(APIURL.GET_INDEX, {});

// 获取公司通告
export const loadMsgListService = pageIndex =>
  fetch(APIURL.LOAD_COMP_MSG_LIST, {
    page: pageIndex
  });
// 获取单个公告信息
export const loadMsgByIdService = id =>
  fetch(APIURL.LOAD_COMP_MSG_ID, {
    id: id
  });
// 获取整个商铺的信息
export const loadShopListService = () => fetch(APIURL.LOAD_SHOP_LIST, {});
// 获取所有商品的信息
export const loadGoodsListService = () => fetch(APIURL.LOAD_GOODS_LIST, {});
export const loadGoodsByIdService = id =>
  fetch(APIURL.LOAD_GOODS_ID, { id: id });
// LOAD_GOODS_ID
