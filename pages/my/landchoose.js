// pages/my/landchoose.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

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

  },

  getPhoneNumber:function(res){
    if(res.detail.errMsg === "getPhoneNumber:ok"){
      app.api_encryptedData = res.detail.encryptedData;
      app.api_iv = res.detail.iv;
      console.log({
        code:app.api_code,
        encryptedData:app.api_encryptedData,
        iv:app.api_iv
      })
      // app.get_ajax('/samoa/userTableBean/getPhone',{
      //   code:app.api_code,
      //   encryptedData:app.api_encryptedData,
      //   iv:app.api_iv
      // },(res)=>{
      //   console.log(res)
      // }) 
    }
  },
  jumpTel:function(){
    wx.navigateTo({
      url: 'telland',
    })
  },
  jumpOa:function(){
    wx.navigateTo({
      url: 'oaland',
    })
  }

})