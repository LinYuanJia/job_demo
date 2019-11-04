const TOKEN = "token"

App({
  globalData: {
    token:""
  },

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    this.login();
    
  },

  /* 自定义登录函数*/

  login(){
    wx.login({
      success:(res) => {
        //获取code
        const code = res.code;
        //获取位置
        let latitude = "";
        let longitude = "";
        wx.getLocation({
          success: (res) => {
            latitude = res.latitude;
            longitude = res.longitude;
          },
        })

        //将code传递给后台服务器
        wx.request({
          url: 'http://job.dongdongidea.com/index/Index/userlogin',
          data: {
            code,
            latitude,
            longitude
          },
          method: "post",
          success: (res) => {
            const token = res.data.data.id
            //将userid存储到全局变量中
            this.globalData.token = token
            //将userid存储到storage中
            wx.setStorage({
              key: TOKEN,
              data: token
            })
          }
        })
      }
    })
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  }
})
