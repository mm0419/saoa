// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    navInfor:[
      {
        "id":"1",
        "icon":"/img/icon-1@2x.png",
        "title":"请假",
      //  "url":"/pages/list_xte/list_xte"
      },{
        "id": "2",
        "icon": "/img/icon-2@2x.png",
        "title": "请假报备",
       // "url":"/pages/list/list"
      },{
        "id": "3",
        "icon": "/img/icon-3@2x.png",
        "title": "公告",
       // "url":"/pages/notice/notice"
      },{
        "id":"4",
        "icon":"/img/icon-4@2x.png",
        "title":"加班",
       // "url":"/pages/list_xte/list_xte"
      },{
        "id": "5",
        "icon": "/img/icon-5@2x.png",
        "title": "调休",
       // "url":"/pages/list/list"
      },{
        "id": "6",
        "icon": "/img/icon-6@2x.png",
        "title": "换班",
        //"url":"/pages/list_share/list_share"
      },{
        "id":"7",
        "icon":"/img/icon-7@2x.png",

        "title":"外出",
        //"url":"/pages/list_xte/list_xte"
      },{
        "id": "8",
        "icon": "/img/icon-8@2x.png",
        "title": "补卡申请",
        //"url":"/pages/list/list"
      },{
        "id": "9",
        "icon": "/img/icon-9@2x.png",
        "title": "办公用品",
        //"url":"/pages/list_share/list_share"
      },
    ],

  },

  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },

  //分享给好友
  onShareAppMessage(res) {
    return {
      title: '圣安OA',
      path: '/pages/work/work',
      imageUrl: "/img/icon-9@2x.png",
      success: (res) => {
        console.log("转发成功", res);
      },
      fail: (res) => {
        console.log("转发失败", res);
      }
    }
  },

  //分享到朋友圈
	onShareTimeline() {
		return {
	      title: '圣安OA',  //标题
	      query: {
	        key: '/pages/work/work'  //路径
	      },
	      imageUrl: '/img/icon-9@2x.png'  //图标
	    }
	},


})
