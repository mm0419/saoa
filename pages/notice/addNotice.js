// pages/notice/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: { 
    navArr:[
      {
        "id":1,
        "name":"我要发布",
        "index":1,
      },
      {
        "id":2,
        "name":"我收到的",
        "index":2,
      },
      {
        "id":3,
        "name":"我发出的",
        "index":3,
      }
    ],
    items: [
      { name: 'CHN', value: '是', checked: 'true' },
      { name: 'USA', value: '否' },
     ],
     radioStr: '是',

  },
  radioChange: function (e) {
    var str = null;
    for (var value of this.data.items) {
     if (value.name === e.detail.value) {
      str = value.value;
      break;
     }
    }
    this.setData({ radioStr: str });
   },
  leaJump: function(e){
    if(e.detail.index == 1){
      wx.navigateTo({
        url: '/pages/notice/addNotice',
      })
    }
    if(e.detail.index == 2){
      wx.navigateTo({
        url: '/pages/notice/index',
      })
    }
    if(e.detail.index == 3){
      wx.navigateTo({
        url: '/pages/notice/sendNotice',
      })
    }
  },
  lookDetails:function(e){
    wx.navigateTo({
      url: '/pages/notice/selectDepartment',
    })
  },



   /**
   * 生命周期函数--监听页面加载
   */
  // onLoad: function (options) {

  // },

  // /**
  //  * 生命周期函数--监听页面初次渲染完成
  //  */
  // onReady: function () {

  // },

  // /**
  //  * 生命周期函数--监听页面显示
  //  */
  // onShow: function () {

  // },

  // /**
  //  * 生命周期函数--监听页面隐藏
  //  */
  // onHide: function () {

  // },

  // /**
  //  * 生命周期函数--监听页面卸载
  //  */
  // onUnload: function () {

  // },

  // /**
  //  * 页面相关事件处理函数--监听用户下拉动作
  //  */
  // onPullDownRefresh: function () {

  // },

  // /**
  //  * 页面上拉触底事件的处理函数
  //  */
  // onReachBottom: function () {

  // },

  // /**
  //  * 用户点击右上角分享
  //  */
  // onShareAppMessage: function () {

  // },
})