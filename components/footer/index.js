//index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    propArray: {
      type: JSON,
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    isNew:false,
    index:1
  },
  lifetimes: {
    attached: function() {
      var that = this;
      var nowData = that.properties.propArray;
      this.setData({
        isNew: nowData.isNew,
        index: nowData.index,
      })
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    jumIndex: function(e){
      if(e.currentTarget.dataset.index == this.data.index) return false
      var myEventDetail = {
        index:e.currentTarget.dataset.index
      } 
      var myEventOption = {} // 触发事件的选项
      this.triggerEvent('myevent', myEventDetail, myEventOption)
    }
  }
})