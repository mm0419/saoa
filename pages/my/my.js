var WXBizDataCrypt = require('../../utils/RdWXBizDataCrypt.js');
var AppId = 'wxe4f6e924b936edb0'
var AppSecret = '0fe126f34b8333f27cf60f9f78647642'

const app = getApp()

Page({

  
// 获取用户手机号码
getPhoneNumber(e) {
  console.log(e.detail.errMsg)
  console.log(e.detail.iv)
  console.log(e.detail.encryptedData)
  wx.login({
    success: function (res) {
      console.log(res)
      console.log(res.code)
      var code = res.code
      wx.request({
        url: 'https://cs1.ejiubo.net/demoOa/php.php',
        data: {
          code
        },
        success: function (res2) {
          console.log("openid" + res2.data.openid)
          console.log("session_key" + res2.data.session_key)
          var pc = new WXBizDataCrypt(AppId, res2.data.session_key)
          wx.getUserInfo({
            success: function (res) {
              var data = pc.decryptData(e.detail.encryptedData, e.detail.iv)
              console.log('解密后data: ', data)
              console.log('手机号码: ', data.phoneNumber)
            }
          })
        },
        fail:function(res3){
          console.log(res3);
        }
      })
    }
  })
},

  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    session_key:'123'
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },

  // 获取用户信息
  getUserProfile(e) {
    wx.getUserProfile({
      desc: '用于完善用户资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res.userInfo)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },


})
