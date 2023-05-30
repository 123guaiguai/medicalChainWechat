const app = getApp();
import Dialog from '@vant/weapp/dialog/dialog';
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar
  },
  isCard(e) {
    this.setData({
      isCard: e.detail.value
    })
  },
  showModal(e) {
    if(!app.globalData.name&&!app.globalData.identityID){
      return  Dialog.confirm({
        message: '尚未填写个人信息，预约失败！请前往个人中心填写个人信息',
      })
    }
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
});
