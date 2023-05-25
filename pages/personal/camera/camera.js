Page({
  onLoad() {
    this.ctx = wx.createCameraContext()
  },
  error(e) {
    console.log(e.detail)
  }
})