// pages/insurance/input/input.js

import Dialog from '@vant/weapp/dialog/dialog';
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    insuranceObjective: 0,
    insuranceObjectiveList: ['本人', '配偶', '父母', '子女'],
    medicalInsurance: true,
    payWay: true,
    name: "",
    identityID: "",
  },
  changeName(e) {
    this.setData({
      name: e.detail
    })
  },
  changeIdentityID(e) {
    this.setData({
      identityID: e.detail
    })
  },
  changeInsuranceObjective(e) { //切换投保人
    this.setData({
      insuranceObjective: e.currentTarget.dataset.objective
    })
  },
  changeMedicalInsurance(e) { //切换是否有医保
    this.setData({
      medicalInsurance: e.currentTarget.dataset.medicalinsurance
    })
  },
  changePayWay(e) { //切换付款方式
    this.setData({
      payWay: e.currentTarget.dataset.payway
    })
  },
  insure() {
    if (this.data.insuranceObjective === 0) {
      if (!app.globalData.name || !app.globalData.identityID) {
        return Dialog.confirm({
          message: this.data.insuranceObjective === 0 ? '尚未填写本人姓名和身份证号！请返回个人中心页面填写' : '尚未填写姓名和身份证号!',
        })
      }
    } else {
      let myreg = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
      if (!myreg.test(this.data.identityID)) {
        return Dialog.confirm({
            message: '身份证号格式错误！',
          })
      }
      if (!this.data.name || !this.data.identityID) {
        return Dialog.confirm({
          message: this.data.insuranceObjective === 0 ? '尚未填写本人姓名和身份证号！请返回个人中心页面填写' : '尚未填写姓名和身份证号!',
        })
      }
    }
    wx.navigateTo({
      url: '/pages/insurance/pay/pay',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // if(app.globalData.name&&app.globalData.identityID){
    //   this.setData({
    //     name:app.globalData.name,
    //     identityID:app.globalData.identityID
    //   })
    // }
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