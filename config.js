module.exports = {
  version: '14.14.0',
  note: '关于我们，帮助中心页面，增加转发及分享朋友圈', // 这个为版本描述，无需修改
  subDomain: 'tz', // 此处改成你自己的专属域名。什么是专属域名？请看教程 https://www.it120.cc/help/qr6l4m.html
  merchantId: 951, // 商户ID，可在后台工厂设置-->商户信息查看
  sdkAppID: 1400450467, // 腾讯实时音视频应用编号，请看教程 https://www.it120.cc/help/nxoqsl.html
  bindSeller: false, // true 开启三级分销抢客； false 为不开启
  customerServiceType: 'QW' // 客服类型，QW为企业微信，需要在后台系统参数配置企业ID和客服URL，否则为小程序的默认客服
}