// components/detail/job_detail.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    jobList: {
      type:Object,
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
   
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleTalk(){
      console.log("------")
      this.triggerEvent('talk', {}, {})
    },
    handleApply(){
      this.triggerEvent('apply', {}, {})
    }
  }
})
