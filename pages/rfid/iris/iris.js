Page({
  onLoad() {
    this.ctx = wx.createCameraContext()
  },
  error(e) {
    console.log(e.detail)
  },
  showQrcode() {
    
    wx.previewImage({
      urls: ['https://z3.ax1x.com/2021/04/25/cxAXv9.jpg'],
      current: 'https://z3.ax1x.com/2021/04/25/cxAXv9.jpg' // 当前显示图片的http链接      
    })
  
  },

  detail: function(e){
    wx.navigateTo({
      url:'/pages/case/check/check'
    })
  }
})