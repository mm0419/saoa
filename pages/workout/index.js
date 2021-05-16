Page({

  /**
   * 页面的初始数据
   */
  data: {
    navArr:[
      {
        "id":1,
        "name":"外出申请",
        "index":2
      },
      {
        "id":2,
        "name":"外出数据",
        "index":2,
      }
    ],
    sArr1: [{
      "id": "1",
      "text": "今天",
      "value": "20210508",
      "w":170,
      "h":70
    }, {
      "id": "2",
      "text": "最近一周",
      "value": "7"
    }, {
      "id": "3",
      "text": "最近一个月",
      "value": "30"
    }, {
      "id": "4",
      "text": "最近三个月",
      "value": "90"
    }],
    sArr2: [{
      "id": "1",
      "text": "全部",
      "value": "1",
      "w":170,
      "h":70
    }, {
      "id": "2",
      "text": "病假",
      "value": "2"
    }, {
      "id": "3",
      "text": "产假",
      "value": "30"
    }],
    onOff:false
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
  leaJump: function(e){
    if(e.detail.index){
      wx.navigateTo({
        url: 'apply',
      })
    }
  },
  touchStart: function (e) {
    if (e.touches.length == 1) {
      this.setData({
        startX: e.touches[0].clientX
      });
    }
  },
  touchMove: function (e) {
    if (e.touches.length == 1) {
      var moveX = e.touches[0].clientX;
      var diffX = this.data.startX - moveX;
      if (diffX < 0) { //向右
        if( this.data.onOff ){
          this.setData({
            onOff:false
          })
        }
      } else if (diffX > 0) { //向左
        if( this.data.onOff ) return false;
        this.setData({
          onOff:true
        })
        console.log('向左')
      }else{
        
        console.log('没动')
      }
    }
  },
  touchEnd: function (e) {
    if (e.changedTouches.length == 1) {
      var endX = e.changedTouches[0].clientX;
      var diffX = this.data.startX - endX;
      console.log(diffX);
      if( diffX ) return false;
      console.log('没动')
      wx.navigateTo({
        url: 'detail',
      })
    }
  },
})



  

