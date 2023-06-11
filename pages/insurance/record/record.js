const app = getApp();
import Dialog from '@vant/weapp/dialog/dialog';

Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    ColorList: app.globalData.ColorList,    
    loadProgress:0,
    loadModal:false
  },
  isLoading (e) {
    this.setData({
      isLoad: e.detail.value
    })
  },
  loadModal () {
    this.setData({
      loadModal: true
    })
    setTimeout(()=> {
      this.setData({
        loadModal: false
      })
    }, 3000)
  },
  loadProgress(){
    this.setData({
      loadProgress: this.data.loadProgress+3
    })
    if (this.data.loadProgress<100){
      setTimeout(() => {
        this.loadProgress();
      }, 100)
    }else{
      this.setData({
        loadProgress: 0
      })
    }
  },
  showModal(e) {
    Dialog.confirm({
      title: '确认销毁',
      message: '保单销毁后不可恢复，确认销毁？',
    })
      .then(() => {
        // on confirm
      })
      .catch(() => {
        // on cancel
      });
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
  showQrcode() {
    
    setTimeout(()=> {
      wx.previewImage({
        //urls: ['https://z3.ax1x.com/2021/04/25/cxAXv9.jpg'],
        //current: 'https://z3.ax1x.com/2021/04/25/cxAXv9.jpg' // 当前显示图片的http链接      
      })
    }, 3500)
  
  },
  detail: function(e){
    this.setData({
      loadProgress: this.data.loadProgress+3
    })
    if (this.data.loadProgress<100){
      setTimeout(() => {
        this.loadProgress();
      }, 100)
    }else{
      this.setData({
        loadProgress: 0
      })
    }
    setTimeout(()=> {
      wx.navigateTo({
        url:'/pages/case/check/check'
      })
    }, 3500)
    
  },
  onLoad: function () { },
  pageBack() {
    wx.navigateBack({
      delta: 1
    });
  }
});
