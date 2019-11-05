// pages/detail/detail.js
import request from "../../service/netWork.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    applyHide: true,
    job_list: {}
  },

  handleTalk(){
    console.log("----------")
  },

  handleApply(){
    this.setData({
      applyHide: !this.data.applyHide
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    request({
      url: "http://job.dongdongidea.com/index/Position/details",
      method: "get",
      data: {
        id: options.id,
        user_id: options.user_id
      }
    }).then(res => {
      const oldData = res.data.data
      oldData.welfare = oldData.welfare.split(",")
      switch(oldData.sex){
        case 1:
          oldData.sex = "男";
          break;
        case 2:
          oldData.sex = "女";
          break;
        case 3:
          oldData.sex = "男女不限"
          break;
      }
      this.setData({
        job_list: oldData
      })
      console.log(oldData)
    })
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

  }
})