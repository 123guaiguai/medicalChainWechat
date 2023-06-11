// pages/personal/modifyInfo/modifyInfo.js
import {
  areaList
} from '@vant/area-data';
import Dialog from '@vant/weapp/dialog/dialog';

const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "",
    identityID: "",
    phone: "",
    sexRadio: 1,
    areaList,
    show: false,
    showDate: false, //是否展示生日弹窗
    fieldValue: "",
    fieldValueDate: '',
    uniqueId: "",
    errorPhone: "",
    currentDate: new Date().getTime(),
    minDate: new Date().getTime(),
    birthDay:"",
    formatter(type, value) {
      if (type === 'year') {
        return `${value}年`;
      }
      if (type === 'month') {
        return `${value}月`;
      }
      return value;
    },
  },
  formatTimestamp(timestamp) {
    var date = new Date(timestamp); // 创建一个新的 Date 对象，传入时间戳
  
    var year = date.getFullYear(); // 获取年份
    var month = ("0" + (date.getMonth() + 1)).slice(-2); // 获取月份，注意月份是从 0 开始计数的，因此要加 1
    var day = ("0" + date.getDate()).slice(-2); // 获取日期
    // var hours = ("0" + date.getHours()).slice(-2); // 获取小时
    // var minutes = ("0" + date.getMinutes()).slice(-2); // 获取分钟
    // var seconds = ("0" + date.getSeconds()).slice(-2); // 获取秒数
  
    // 将上述获取到的值组合成一个格式化的字符串
    var formattedDate = year + "-" + month + "-" + day ;
  
    return formattedDate;
  },
  changeInputField(e) {
    let type = e.currentTarget.dataset.inputtype;
    let value = e.detail;
    this.setData({
      [type]: value
    })
  },
  changeSex(event) {
    this.setData({
      sexRadio: event.detail,
    });
  },
  produceID() {
    let myreg = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
    if (!myreg.test(this.data.identityID)) {
      return Dialog.confirm({
          message: '身份证号格式错误！',
        })
        .then(() => {
          // on confirm
        })
    }
    if (!this.data.name || !this.data.identityID) {
      Dialog.confirm({
          message: '未完整填写姓名和身份证号，唯一ID生成失败!',
        })
        .then(() => {
          // on confirm
        })
    } else {
      app.globalData.name = this.data.name;
      app.globalData.identityID = this.data.identityID;
      app.globalData.uniqueID = "123abcWER";
      this.setData({
        uniqueId: "123abcWER"
      })
      Dialog.confirm({
        message: '唯一ID生成成功！',
      })
    }
  },
  checkPhone() {
    let myreg = /^1[3-9]\d{9}$/;
    if (myreg.test(this.data.phone)) {
      this.setData({
        errorPhone: ""
      })
    } else {
      this.setData({
        errorPhone: "手机号格式错误或为空"
      })
    }
  },
  showPop() {
    this.setData({
      show: true
    })
  },
  showPopDate() {
    this.setData({
      showDate: true
    })
  },
  inputDate(event) {
    this.setData({
      currentDate: event.detail,
    });
  },
  clickSex(event) {
    const {
      name
    } = event.currentTarget.dataset;
    this.setData({
      sexRadio: name,
    });
  },
  confirmArea(value) {
    let feildStr = value.detail.values.map(item => {
      return item.name;
    })
    this.setData({
      fieldValue: feildStr.join('-'),
    })
    this.setData({
      show: false
    })
  },
  cancelArea() {
    this.setData({
      fieldValue: '',
      show: false
    })
  },
  confirmDate(value){
    this.setData({
      showDate:false,
      birthDay:this.formatTimestamp(value.detail)
    })

  },
  cancelDate(value){
    this.setData({
      showDate:false,
      birthDay:''
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})