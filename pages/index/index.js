Page({

  /**
   * 页面的初始数据
   */
  data: {
    photoList: ["../../imgs/nav01.jpg", "../../imgs/nav02.jpg", "../../imgs/nav03.jpg", "../../imgs/nav04.jpg"],
    redbag: 7.01,
    isFalse: false
    
  },
  redClick(){
    this.setData({
      isFalse: !this.data.isFalse
    })
  },
  redExit(){
    this.setData({
      isFalse: !this.data.isFalse
    })
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
    
  }
})