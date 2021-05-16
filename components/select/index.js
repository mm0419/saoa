//index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    propArray: {
      type: Array,
    }
  },
  lifetimes: {
    attached: function() {
      var that = this;
      var nowData = that.properties.propArray;
      this.setData({
        selectText: nowData[0].text,
        w: nowData[0].w,
        h: nowData[0].h
      })
    }
  },
  data: {
    selectShow: false,//初始option不显示
    selectText: "请选择",//初始内容
    selectIndex:0,
    w:170,
    h:70
  },
  /**
   * 组件的方法列表
   */
  methods: {
    //option的显示与否
    selectToggle: function () {
      var nowShow = this.data.selectShow;//获取当前option显示的状态

      this.setData({
        selectShow: !nowShow
      })
    },
    //设置内容
    setText: function (e) {
      var nowData = this.properties.propArray;//当前option的数据是引入组件的页面传过来的，所以这里获取数据只有通过this.properties
      var nowIdx = e.target.dataset.index;//当前点击的索引
      var nowText = nowData[nowIdx].text || nowData[nowIdx].value || nowData[nowIdx];//当前点击的内容
      //再次执行动画，注意这里一定，一定，一定是this.animation来使用动画
      this.setData({
        selectShow: false,
        selectText: nowText,
        selectIndex:nowIdx
      })
      this.triggerEvent('select', nowData[nowIdx])
    }
  }
})