const app = getApp();
Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    list: [{
        title: '医疗投保',
        img:"https://img95.699pic.com/xsj/0r/hi/vz.jpg!/fw/700/watermark/url/L3hzai93YXRlcl9kZXRhaWwyLnBuZw/align/southeast",
        url: '/insure/insure'
    },
      {
        title: '报销记录',
        img:"https://img95.699pic.com/xsj/0s/e0/7i.jpg!/fw/700/watermark/url/L3hzai93YXRlcl9kZXRhaWwyLnBuZw/align/southeast",
        url: '/record/record'
      },
    ]
  },
  methods: {
    toChild(e) {
      wx.navigateTo({
        url: '/pages/insurance' + e.currentTarget.dataset.url
      })
    },
  }
});