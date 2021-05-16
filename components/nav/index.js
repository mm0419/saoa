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
  /**
   * 组件的初始数据
   */
  data: {
    arr:[],
    dataInx:2
  },
  lifetimes: {
    attached: function() {
      var that = this;
      var nowData = that.properties.propArray;
      this.setData({
        arr:nowData,
        dataInx: nowData[0].index,
      })
    }
  },
  methods: {
    jumIndex: function(e){
      if(e.currentTarget.dataset.index == this.data.dataInx) return false
      var myEventDetail = {
        index:e.currentTarget.dataset.index
      } 
      var myEventOption = {} // 触发事件的选项
      this.triggerEvent('leaJump', myEventDetail, myEventOption)
    }
  }
})