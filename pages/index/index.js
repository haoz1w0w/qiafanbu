//index.js
//获取应用实例
const app = getApp()
var base64 = require("../../images/base64");

Page({
  data: {
    list: [{
      'name': '张京京',
      'desc': '我是一个大吃货',
      'text': '我今天吃了好多好吃的,好开心噢噢噢噢噢噢噢噢哦哦哦哦哦哦哦哦哦',
       'ifImg':true
    }, {
      'name': '齐明浩',
      'desc': '我真滴不爱吃饭',
      'text': '我真滴不喜欢吃饭嗷铁汁们',
      'ifImg': false
      }, {
        'name': '齐明浩',
        'desc': '我真滴不爱吃饭',
        'text': '我真滴不喜欢吃饭嗷铁汁们',
        'ifImg': false
      }, {
        'name': '齐明浩',
        'desc': '我真滴不爱吃饭',
        'text': '我真滴不喜欢吃饭嗷铁汁们',
        'ifImg': false
      }, {
        'name': '齐明浩',
        'desc': '我真滴不爱吃饭',
        'text': '我真滴不喜欢吃饭嗷铁汁们',
        'ifImg': false
      }, {
        'name': '齐明浩',
        'desc': '我真滴不爱吃饭',
        'text': '我真滴不喜欢吃饭嗷铁汁们',
        'ifImg': false
      }, {
        'name': '齐明浩',
        'desc': '我真滴不爱吃饭',
        'text': '我真滴不喜欢吃饭嗷铁汁们',
        'ifImg': false
      }],
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function() {
    this.setData({
      icon20: base64.icon20,
      icon60: base64.icon60
    });
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})