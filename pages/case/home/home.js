const app = getApp();
Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    list: [{
        title: '远程授权',
        img: 'https://z3.ax1x.com/2021/03/23/6HndKA.png',
        url: '/empower/empower'
    },
      {
        title: '病历操作',
        img: 'https://z3.ax1x.com/2021/03/23/6Hnhbq.png',
        url: '/operation/operation'
      },
      // {
      //   title: '病例销毁',
      //   img: 'https://z3.ax1x.com/2021/03/23/6Hmv4S.png',
      //   url: ''
      // }
      //  {
      //   title: '垂直导航',
      //   img: 'https://image.weilanwl.com/color2.0/plugin/qpczdh2307.jpg',
      //   url: '/verticalnav/verticalnav'
      // }
    ]
  },
  methods: {
    toChild(e) {
      wx.navigateTo({
        url: '/pages/case' + e.currentTarget.dataset.url
      })
    },
  }
});