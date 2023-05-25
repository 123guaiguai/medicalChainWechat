const app = getApp();
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    iconList: [{
      name: '王建国',
      hospital: '成都市第六人民医院',
      department: '心血管科诊室',
      no: '2018091618',
      time: '2021/02/11 20:20',
      hp: 'https://z3.ax1x.com/2021/03/22/6T9Jtx.png',
    }, {
      name: '周琳',
      hospital: '成都市第三人民医院',
      department: '心血管科诊室',
      no: '1013091014',
      time: '2021/02/03 10:11',
      hp: 'https://z3.ax1x.com/2021/03/22/6oQVXR.png',
    }, {
      name: '张祥',
      hospital: '成都市第二人民医院',
      department: '皮肤科诊室',
      no: '2849503950',
      time: '2021/02/11 20:20',
      hp: 'https://z3.ax1x.com/2021/03/31/cAkXGD.png',
    }, {
      name: '李湘兰',
      hospital: '四川大学华西医院',
      department: '消化内科诊室',
      no: '4370050313',
      time: '2020/11/05 12:01',
      hp: 'https://z3.ax1x.com/2021/03/22/6T9Fmj.png',
    }, {
      name: '王润静',
      hospital: '四川大学华西医院',
      department: '消化内科诊室',
      no: '1204056380',
      time: '2019/10/24 14:34',
      hp: 'https://z3.ax1x.com/2021/03/31/cAAae1.png',
    }],
    gridCol:3,
    skin: false
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
  menuBorder: function (e) {
    this.setData({
      menuBorder: e.detail.value
    });
  },
  menuArrow: function (e) {
    this.setData({
      menuArrow: e.detail.value
    });
  },
  menuCard: function (e) {
    this.setData({
      menuCard: e.detail.value
    });
  },
  switchSex: function (e) {
    this.setData({
      skin: e.detail.value
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