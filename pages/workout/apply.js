// pages/learep/apply.js
const app = getApp()

//时间日期选择器(start)
const date = new Date();
const years = [];
const months = [];
const days = [];
const hours = [];
const minutes = [];
//获取年
for (let i = 2000; i <= date.getFullYear() + 999; i++) {
  years.push("" + i); 
}
//获取月份
for (let i = 1; i <= 12; i++) {
  if (i < 10) {
    i = "0" + i;
  }
  months.push("" + i); 
}
//获取日期
for (let i = 1; i <= 31; i++) {
  if (i < 10) {
    i = "0" + i;
  }
  days.push("" + i);
}
//获取小时
for (let i = 0; i < 24; i++) {
  if (i < 10) {
    i = "0" + i;
  }
  hours.push("" + i);
}
//获取分钟
for (let i = 0; i < 60; i++) {
  if (i < 10) {
    i = "0" + i;
  }
  minutes.push("" + i);
}
 var mrmonth = date.getMonth()+1;
 var mrmintue = date.getMinutes();
 if(mrmonth < 10){
   mrmonth = '0' + mrmonth
 }
 if(mrmintue < 10){
  mrmintue = '0' + mrmintue;
 }
//时间日期选择器(end)
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navArr:[
      {
        "id":1,
        "name":"外出申请",
        "index":1
      },
      {
        "id":2,
        "name":"外出数据",
        "index":2,
      }
    ],
    sArr1: [{
      "id": "1",
      "text": "是",
      "value": "1",
      "w":400,
      "h":80
    }, {
      "id": "2",
      "text": "否",
      "value": "2"
    }],
    sArr2: [{
      "id": "1",
      "text": "是",
      "value": "1",
      "w":400,
      "h":80
    }, {
      "id": "2",
      "text": "否",
      "value": "2"
    }],
     // start时间日期选择器(加班开始时间)
     time: date.getFullYear() + '.' + mrmonth + '.' + date.getDate() + ' ' + date.getHours() + ':' +mrmintue,
     multiArray: [years, months, days, hours, minutes],
     multiIndex: [date.getFullYear()-2000, date.getMonth(), date.getDate()-1, date.getHours(), date.getMinutes()],
     choose_year: '',
     //  start时间日期选择器(加班结束时间)
     endtime: date.getFullYear() + '.' + mrmonth + '.' + date.getDate() + ' ' + date.getHours() + ':' +mrmintue,
     multiEndArray: [years, months, days, hours, minutes],
     multiEndIndex: [date.getFullYear()-2000, date.getMonth(), date.getDate()-1, date.getHours(), date.getMinutes()],
     choosex_year: '',
     // 加班时长
     timeDifference: 0,
     max: 15,
     inputVal:"不超过15个字",
     seaTextVal:"不超过15个字"

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
        url: 'index',
      })
    }
  },
  cleDefault:function(){
    var that = this;
    that.setData({
      seaTextVal:''  
    })
  },
  addDefault:function(e){
    if(e.detail.value) return false
    var that = this;
    that.setData({
      seaTextVal:'不超过15个字'  
    })
  },
  jumpMai:function(){
    wx.navigateTo({
      url: '/pages/mailist/index',
    })
  },
  // start 时间日期选择器改变触发(加班开始时间)
//获取时间日期 确定按钮
bindMultiPickerChange: function(e) {
  // console.log('picker发送选择改变，携带值为', e.detail.value)
  this.setData({
    multiIndex: e.detail.value
  })
  // console.log(multiIndex)
  const index = this.data.multiIndex;
  const year = this.data.multiArray[0][index[0]];
  const month = this.data.multiArray[1][index[1]];
  const day = this.data.multiArray[2][index[2]];
  const hour = this.data.multiArray[3][index[3]];
  const minute = this.data.multiArray[4][index[4]];
  // console.log(`${year}-${month}-${day}-${hour}-${minute}`);
  this.setData({
    time: year + '.' + month + '.' + day + ' ' + hour + ':' + minute
  })
  console.log(this.data.time);
},
//监听picker的滚动事件
bindMultiPickerColumnChange: function(e) {
  // console.log(e.detail.column)
  //获取年份
  if (e.detail.column == 0) {
    let choose_year = this.data.multiArray[e.detail.column][e.detail.value];
    console.log(choose_year);
    this.setData({
      choose_year
    }) 
  }else{
    let choose_year = date.getFullYear();
    console.log(choose_year);
    this.setData({
      choose_year
    }) 
  } 
  //console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
  if (e.detail.column == 1) {
    let num = parseInt(this.data.multiArray[e.detail.column][e.detail.value]);
    let temp = [];
    if (num == 1 || num == 3 || num == 5 || num == 7 || num == 8 || num == 10 || num == 12) { //判断31天的月份
      for (let i = 1; i <= 31; i++) {
        if (i < 10) {
          i = "0" + i;
        }
        temp.push("" + i);
      }
      this.setData({
        ['multiArray[2]']: temp
      });
    } else if (num == 4 || num == 6 || num == 9 || num == 11) { //判断30天的月份
      for (let i = 1; i <= 30; i++) {
        if (i < 10) {
          i = "0" + i;
        }
        temp.push("" + i);
      }
      this.setData({
        ['multiArray[2]']: temp
      });
    } else if (num == 2) { //判断2月份天数
      let year = parseInt(this.data.choose_year);
      console.log(year);
      if (((year % 400 == 0) || (year % 100 != 0)) && (year % 4 == 0)) {
        for (let i = 1; i <= 29; i++) {
          if (i < 10) {
            i = "0" + i;
          }
          temp.push("" + i);
        }
        this.setData({
          ['multiArray[2]']: temp
        });
      } else {
        for (let i = 1; i <= 28; i++) {
          if (i < 10) {
            i = "0" + i;
          }
          temp.push("" + i);
        }
        this.setData({
          ['multiArray[2]']: temp
        });
      }
    }
    console.log(this.data.multiArray[2]);
  }
  var data = {
    multiArray: this.data.multiArray,
    multiIndex: this.data.multiIndex
  };
  data.multiIndex[e.detail.column] = e.detail.value;
  this.setData(data);
},





// start 时间日期选择器改变触发(加班结束时间)
//获取时间日期 确定按钮
bindMultiEndPickerChange: function(e) {
  // console.log('picker发送选择改变，携带值为', e.detail.value)
  this.setData({
    multiEndIndex: e.detail.value
  })
  // console.log(multiIndex)
  const index = this.data.multiEndIndex;
  const year = this.data.multiEndArray[0][index[0]];
  const month = this.data.multiEndArray[1][index[1]];
  const day = this.data.multiEndArray[2][index[2]];
  const hour = this.data.multiEndArray[3][index[3]];
  const minute = this.data.multiEndArray[4][index[4]];
  // console.log(`${year}-${month}-${day}-${hour}-${minute}`);
  this.setData({
    endtime: year + '.' + month + '.' + day + ' ' + hour + ':' + minute
  })
  // console.log(this.data.endtime);
  let stime = new Date(this.data.time)
  let startTime = stime.getTime(stime);
  console.log(startTime);
  let etime = new Date(this.data.endtime);
  let endTime = etime.getTime(etime);
  console.log(endTime);
  var ctime = endTime - startTime;
  var timecha = Math.floor(ctime / (1000 * 60 * 60));
  console.log(timecha);
  if(timecha <= 0){
    console.log("结束时间应大于开始时间")
  }else{
    this.setData({
      timeDifference: timecha
    })
  }
},
//监听picker的滚动事件
bindMultiEndPickerColumnChange: function(e) {
  //获取年份
  let choosex_year = this.data.multiEndArray[e.detail.column][e.detail.value];
    console.log(choosex_year);
    this.setData({
      choosex_year
    })
  // if (e.detail.column == 0) {
  //   let choosex_year = this.data.multiEndArray[e.detail.column][e.detail.value];
  //   console.log(choosex_year);
  //   this.setData({
  //     choosex_year
  //   })  
  // }
  //console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
  if (e.detail.column == 1) {
    let num = parseInt(this.data.multiEndArray[e.detail.column][e.detail.value]);
    let temp = [];
    if (num == 1 || num == 3 || num == 5 || num == 7 || num == 8 || num == 10 || num == 12) { //判断31天的月份
      for (let i = 1; i <= 31; i++) {
        if (i < 10) {
          i = "0" + i;
        }
        temp.push("" + i);
      }
      this.setData({
        ['multiEndArray[2]']: temp
      });
    } else if (num == 4 || num == 6 || num == 9 || num == 11) { //判断30天的月份
      for (let i = 1; i <= 30; i++) {
        if (i < 10) {
          i = "0" + i;
        }
        temp.push("" + i);
      }
      this.setData({
        ['multiEndArray[2]']: temp
      });
    } else if (num == 2) { //判断2月份天数
      let year = parseInt(this.data.choosex_year);
      console.log(year); 
      if (((year % 400 == 0) || (year % 100 != 0)) && (year % 4 == 0)) {
        for (let i = 1; i <= 29; i++) {
          if (i < 10) {
            i = "0" + i;
          }
          temp.push("" + i);
        }
        this.setData({
          ['multiEndArray[2]']: temp
        });
      } else {
        for (let i = 1; i <= 28; i++) {
          if (i < 10) {
            i = "0" + i;
          }
          temp.push("" + i);
        }
        this.setData({
          ['multiEndArray[2]']: temp
        });
      }
    }
    console.log(this.data.multiEndArray[2]);
  }
  var data = {
    multiEndArray: this.data.multiEndArray,
    multiEndIndex: this.data.multiEndIndex
  };
  data.multiEndIndex[e.detail.column] = e.detail.value;
  this.setData(data);
},

//多行文本框字数限制  
inputs: function (e) {
  // 获取输入框的内容
  var value = e.detail.value;
  var x = value.trim();
  //var x = x.replace(/\s*/g, '');
  // 获取输入框内容的长
  var len = parseInt(x.length);
  console.log(len);
  //最多字数限制
  if (len > this.data.max) {
    wx.showToast({
      title: '加班原因最多15个字',
    })
  }
}
})