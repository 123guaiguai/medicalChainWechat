Page({
  data: {
    PageCur: 'personal'
  },
  NavChange(e) {
    this.setData({
      PageCur: e.currentTarget.dataset.cur
    })
  },
  onShareAppMessage() {
    return {
      title: '医链1.0',
      imageUrl: '/images/share.jpg',
      path: '/pages/index/index'
    }
  },
})