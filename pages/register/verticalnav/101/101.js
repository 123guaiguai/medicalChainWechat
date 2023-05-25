const app = getApp()
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    TabCur: 0,
    MainCur: 0,
    VerticalNavTop: 0,
    list: [{
      day:'周一',
      doctor: [{
        name: '王建国',
        ident: '主治医师',
        department: '心血管科诊室',
        num: '5',
        hp: 'https://z3.ax1x.com/2021/03/22/6T9Jtx.png',
      },{
        name: '吴燕',
        ident: '主任医师',
        department: '心血管科诊室',
        num: '3',
        hp: 'https://z3.ax1x.com/2021/03/22/6T9Fmj.png',
      }], 
    },{
      day:'周二',
      doctor: [{
        name: '王建国',
        ident: '主治医师',
        department: '心血管科诊室',
        num: '25',
        hp: 'https://z3.ax1x.com/2021/03/22/6T9Jtx.png',
      }, {
        name: '周琳',
        ident: '副主任医师',
        department: '心血管科诊室',
        num: '11',
        hp: 'https://z3.ax1x.com/2021/03/22/6oQVXR.png',
      }], 
    },{
      day:'周三',
      doctor: [{
        name: '无相关医生排班',
        hp: 'https://z3.ax1x.com/2021/03/31/cAJvrt.png',
      }], 
    },{
      day:'周四',
      doctor: [{
        name: '无相关医生排班',
        hp: 'https://z3.ax1x.com/2021/03/31/cAJvrt.png',
      }], 
    },{
      day:'周五',
      doctor: [{
        name: '周琳',
        ident: '副主任医师',
        department: '心血管科诊室',
        num: '13',
        hp: 'https://z3.ax1x.com/2021/03/22/6oQVXR.png',
      }, {
        name: '吴燕',
        ident: '主任医师',
        department: '心血管科诊室',
        num: '31',
        hp: 'https://z3.ax1x.com/2021/03/22/6T9Fmj.png',
      }], 
    },{
      day:'周六',
      doctor: [{
        name: '无相关医生排班',
        hp: 'https://z3.ax1x.com/2021/03/31/cAJvrt.png',
      }], 
    },{
      day:'周日',
      doctor: [{
        name: '无相关医生排班',
        hp: 'https://z3.ax1x.com/2021/03/31/cAJvrt.png',
      }], 
    }],
    load: true,
    
  },
  onLoad() {
    wx.showLoading({
      title: '加载中...',
      mask: true
    });
    let list = this.data.list;
    for (let i = 0; i < 7; i++) {
      list[i].id = i;
    }
    this.setData({
      list: list,
      listCur: list[0]
    })
  },
  onReady() {
    wx.hideLoading()
  },
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      MainCur: e.currentTarget.dataset.id,
      VerticalNavTop: (e.currentTarget.dataset.id - 1) * 50
    })
  },

  detail: function(e){
    // wx.setStorageSync('detailId', e.currentTarget.id);
    wx.navigateTo({
      url:'/pages/register/verticalnav/detail/detail'
    })
  },

  VerticalMain(e) {
    let that = this;
    let list = this.data.list;
    let tabHeight = 0;
    if (this.data.load) {
      for (let i = 0; i < list.length; i++) {
        let view = wx.createSelectorQuery().select("#main-" + list[i].id);
        view.fields({
          size: true
        }, data => {
          list[i].top = tabHeight;
          tabHeight = tabHeight + data.height;
          list[i].bottom = tabHeight;     
        }).exec();
      }
      that.setData({
        load: false,
        list: list
      })
    }
    let scrollTop = e.detail.scrollTop + 20;
    for (let i = 0; i < list.length; i++) {
      if (scrollTop > list[i].top && scrollTop < list[i].bottom) {
        that.setData({
          VerticalNavTop: (list[i].id - 1) * 50,
          TabCur: list[i].id
        })
        return false
      }
    }
  }
})