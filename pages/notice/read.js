// pages/notice/read.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navArr:[
      {
        "id":1,
        "name":"已读200",
        "index":1,
      },
      {
        "id":2,
        "name":"未读57",
        "index":2,
      } 
    ],
    navArray:{
      "index":1,
      "isNew":false
    }
  },

  leaJump: function(e){
    if(e.detail.index == 1){
      wx.navigateTo({
        url: '/pages/notice/read',
      })
    }
    if(e.detail.index == 2){
      wx.navigateTo({
        url: '/pages/notice/unread',
      })
    }
  },
  onMyEvent: function(e){
    app.gloRoute(e.detail.index) // 自定义组件触发事件时提供的detail对象
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})