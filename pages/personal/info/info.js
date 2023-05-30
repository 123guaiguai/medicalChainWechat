const app = getApp();
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    iconList: [{
      icon: 'unlock',
      color: 'brown',
      name: '修改个人信息'
    }, {
      icon: 'phone',
      color: 'cyan',
      name: '修改电话'
    }, {
      icon: 'location',
      color: 'yellow',
      name: '修改家庭地址'
    }, {
      icon: 'bad',
      color: 'olive',
      name: '修改过敏药物'
    }],
    gridCol:2,
    skin: false
  },
  modifyInfo(e){
    let tap=e.currentTarget.dataset.tap;
    if(tap==='修改个人信息'){
      console.log(tap);
      wx.navigateTo({
        url: '/pages/personal/modifyInfo/modifyInfo',
      })
    }
  },
  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
  gridchange: function (e) {
    this.setData({
      gridCol: e.detail.value
    });
  },
  gridswitch: function (e) {
    this.setData({
      gridBorder: e.detail.value
    });
  },
  

  // ListTouch触摸开始
  ListTouchStart(e) {
    this.setData({
      ListTouchStart: e.touches[0].pageX
    })
  },

  // ListTouch计算方向
  ListTouchMove(e) {
    this.setData({
      ListTouchDirection: e.touches[0].pageX - this.data.ListTouchStart > 0 ? 'right' : 'left'
    })
  },

  // ListTouch计算滚动
  ListTouchEnd(e) {
    if (this.data.ListTouchDirection =='left'){
      this.setData({
        modalName: e.currentTarget.dataset.target
      })
    } else {
      this.setData({
        modalName: null
      })
    }
    this.setData({
      ListTouchDirection: null
    })
  },
})