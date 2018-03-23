// 设置服务器是本地服务器还是阿里的远程服务器，还是生产环境服务器

const baseUrl = (() => {
  if (
    process.env.NODE_ENV === 'development' ||
    process.env.NODE_ENV === 'testing'
  ) {
    // 使用阿里在线服务器的api地址
    // return 'http://rapapi.org/mockjsdata/32555';
    // 已经设置代理
    return '';
    // 本地服务器API测试地址
    // return 'http://127.0.0.1:9898';
  }

  return 'http://api.aicoder.com/bjasf';
})();

const APIURL = (() => {
  // 阿里的api地址，如果是需要用本地的地址，请修改url
  var urlArray = {
    GET_INDEX: '/api/index',
    LOAD_COMP_MSG_LIST: '/api/compmsglist',
    LOAD_COMP_MSG_ID: '/api/compmsg',
    LOAD_SHOP_LIST: '/api/shoplist',
    LOAD_GOODS_LIST: '/api/goods/list',
    LOAD_GOODS_ID: '/api/goods/getbyid'
  };

  // rap2如果是本地地址。
  // if (baseUrl !== 'http://rap2api.taobao.org/app/mock/7894') {
  //   Object.keys(urlArray).forEach((item, index) => {
  //     // 去掉第一个请求的方法
  //     urlArray[item] = urlArray[item].replay(/^\/[^/]+/, '');
  //   });
  // }
  return urlArray;
})();
export { baseUrl, APIURL };
