Page({
  data: {
    PageCur: 'insurance'
  },
  NavChange(e) {
    this.setData({
      PageCur: e.currentTarget.dataset.cur
    })
    
  },
  onShareAppMessage() {
    return {
      title: '医链网',
      imageUrl: '/images/share.jpg',
      path: '/pages/index/index'
    }
  },
})