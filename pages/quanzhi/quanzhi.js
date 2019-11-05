// pages/quanzhi/quanzhi.js
import {
  get_listData
} from "../../service/qzRequest.js"

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


    detail_list:[],
    pageNo: 1
  },
  /*优化从后台请求来的数据 */
  handle_detailList(event){
    let list = []
    for(var item of event){
      item.welfare=item.welfare.split(",")
      switch(item.sex){
        case 1:
          item.sex = "男";
          break;
        case 2:
          item.sex = "女";
          break;
        case 3:
          item.sex = "男女不限"
          break;
      }
      list.push(item)
    }
    return list
  },
  
  _get_listData(){
    const page = this.data.pageNo
    get_listData(page).then(res => {
      const list = this.handle_detailList(res.data.data)
      const oldList = this.data.detail_list
      oldList.push(...list)
      this.setData({
        detail_list: oldList,
        pageNo: this.data.pageNo+1
      })
    }).catch(err => {
      console.log(err)
    })
  },
  /**
   * 生命周期函数--监听页面加载
    */
  onLoad: function (options) {
    this._get_listData()
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this._get_listData()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this._get_listData()
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
  }


})