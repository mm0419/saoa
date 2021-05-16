// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    classList:[
      {
        "icon":"/img/index/icon_1.jpg",
        "name":"请假"
      },
      {
        "icon":"/img/index/icon_2.jpg",
        "name":"请假报备"
      },
      {
        "icon":"/img/index/icon_3.jpg",
        "name":"公告"
      },
      {
        "icon":"/img/index/icon_4.jpg",
        "name":"加班"
      },
      {
        "icon":"/img/index/icon_6.jpg",
        "name":"调休"
      },
      {
        "icon":"/img/index/icon_5.jpg",
        "name":"换班"
      },
      {
        "icon":"/img/index/icon_9.jpg",
        "name":"外出"
      },
      {
        "icon":"/img/index/icon_7.jpg",
        "name":"补卡申请"
      },
      {
        "icon":"/img/index/icon_8.jpg",
        "name":"办公用品"
      }
    ],
    navArray:{
      "index":1,
      "isNew":false
    }
  },
  onLoad() {
   
  },
  onMyEvent: function(e){
    app.gloRoute(e.detail.index) // 自定义组件触发事件时提供的detail对象
  },
  toIndex:function(e){
    var index = e.currentTarget.dataset.index;
    switch(index){
      case 0:
        wx.navigateTo({
          url: '/pages/leaman/index',
        })
      break;
      case 1:
        wx.navigateTo({
          url: '/pages/learep/index',
        })
      break;
      case 2:
        wx.navigateTo({
          url: '/pages/notice/index',
        })
      break;
      case 3:
        wx.navigateTo({
          url: '/pages/addwork/index',
        })
      break;
      case 4:
        wx.navigateTo({
          url: '/pages/comwork/index',
        })
      break;
      case 5:
        wx.navigateTo({
          url: '/pages/chawork/index',
        })
      break;
      case 6:
        wx.navigateTo({
          url: '/pages/workout/index',
        })
      break;
      case 7:
        wx.navigateTo({
          url: '/pages/repcard/index',
        })
      break;
      case 8:
        wx.navigateTo({
          url: '/pages/office/index',
        })
      break;  
    }
  }

})
