// pages/quanzhi/quanzhi.js
import request from "../../service/netWork.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {

    currentIndex: "",

    textIndex:0,

    jobIndex:0,

    cityHide:true,

    jobHide:true,

    select_list:[{
      message:"全城市"
    },
    {
      message: "职位类别"
    },
    {
      message: "排序"
    }
    ],

    select_function:[
      "handleCity","handleJob"
    ],

    cityList:["全城市","锦江区","高新区","温江区","双流区"],

    jobList: ["全部", "广告设计", "电商淘宝", "装饰装修", "工业设计", "电脑维修","广告设计", "电商淘宝", "装饰装修", "工业设计"],


    detail_list:[]
  },

  /*---------------------------------事件监听函数-------------------------------------*/

  handleCity(event){
    this.setData({
      currentIndex: event.currentTarget.dataset.index,
      cityHide: !this.data.cityHide
    })
    if (this.data.jobHide==false){
      this.setData({
        jobHide:true
      })
    }
  },

  textTap(event){
    this.setData({
      textIndex: event.currentTarget.dataset.index
    })
  },

  handleJob(event){
    this.setData({
      currentIndex: event.currentTarget.dataset.index,
      jobHide: !this.data.jobHide
    })
    if (this.data.cityHide == false) {
      this.setData({
        cityHide: true
      })
    }
  },

  jobTap(event){
    this.setData({
      jobIndex: event.currentTarget.dataset.index
    })
  },

  /**
   * 生命周期函数--监听页面加载
    */
  onLoad: function (options) {
    request({
      url:"http://job.dongdongidea.com/index/Position/index",
      data:{
        pageno:1
      }
    }).then(res => {
      const list = res.data.data
      this.setData({
        detail_list:list
      })
    }).catch(err => {
      console.log(err);
    })

    /* 优化后端数据，在前台显示 */
    console.log(list)

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

  }

})