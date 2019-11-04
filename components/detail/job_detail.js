// components/detail/job_detail.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    job_list:{
        message: "苹果手机客服",
        salary: "3500.00/月",
        condition: "靖江区 | 男女不限 | 18岁~25岁",
        fuli: ["五险一金", "交通补贴", "年终奖", "加班补贴"],
        time: "2小时前发布"
      }
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
