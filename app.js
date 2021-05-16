// app.js
App({
  api_url: 'https://cs.miyuejk.com:4093',
  api_encryptedData:'',
  api_iv:'',
  api_code:'',
  api_img:"",
  onLaunch() {
    var that = this;
    // 登录
    wx.login({
      success: res => {
        if(res.errMsg === "login:ok"){
          that.api_code = res.code;
        }
      }
    })
  },
  globalData: {
    userInfo: null
  },
  gloRoute(e){
    switch(e){
      case "0":
        wx.redirectTo({
          url: '/pages/new/index',
        })
      break;
      case "1":
        wx.redirectTo({
          url: '/pages/index/index',
        })
      break;
      case "2":
        wx.redirectTo({
          url: '/pages/my/index',
        })
      break;  
    }
  },

  /* get请求 */
  get_ajax: function (url, data, fu) {
    wx.request({
      url: this.api_url + url,
      method: 'GET',
      data: data,
      header: {
        'content-type': 'application/json'
      },
      success: fu
    });
  },

  /* post请求 */
  post_ajax: function (url, data, fu) {
    wx.request({
      url: this.api_url + url,
      method: 'POST',
      data: data,
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: fu
    });
  },
  
})
