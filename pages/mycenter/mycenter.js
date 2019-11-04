// pages/mycenter/mycenter.js
const app=getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    navlist: [{
      img_url:"../../imgs/shangjin.png",
      name:"赏金猎人",
      nav_url:"/pages/shangjin/shangjin"
    },
    {
      img_url: "../../imgs/qiyetu.png",
      name: "企业中心",
      nav_url: "/pages/qiye/qiye"
    }
    ],
    mydetail: [{
      img_urla:"../../imgs/zhiwei.png",
      message:"我的职位列表",
      img_urlb: "../../imgs/right_arrow.png",
      share_url: "/pages/myJob_list/myJob_list"
    },
    {
      img_urla: "../../imgs/fenxiang.png",
      message: "我的分享",
      img_urlb: "../../imgs/right_arrow.png",
      share_url: "/pages/myJob_list/myJob_list"
    },
    {
      img_urla: "../../imgs/shoucang.png",
      message: "我的收藏",
      img_urlb: "../../imgs/right_arrow.png",
      share_url: "/pages/myJob_list/myJob_list"
    },
    {
      img_urla: "../../imgs/fankui.png",
      message: "意见反馈",
      img_urlb: "../../imgs/right_arrow.png",
      share_url: "/pages/fankui/fankui"
    }
    ]
  },

  getUserInfo(event){
    console.log(event)
    const userInfo = event.detail.userInfo
    let latitude = "";
    let longitude = "";
    wx.getLocation({
      success: (res) => {
        latitude = res.latitude;
        longitude = res.longitude;
      },
    })
    wx.request({
      url: "http://job.dongdongidea.com/index/Index/userset",
      method:"post",
      data: {
        user_id: app.globalData.token,
        avatarUrl: userInfo.avatarUrl,
        nickName: userInfo.nickName,
        longitude,
        latitude,
        city: userInfo.city
      },
      success: (res) => {
        console.log(res)
      }
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