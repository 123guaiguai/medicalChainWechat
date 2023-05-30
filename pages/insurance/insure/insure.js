// pages/insurance/insure/insure.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    switchCardIndex:0,//切换展示卡片的样式
    switchCardList:[
      {
        text1:"问诊保障",
        text2:"报销小病医药费",
        text3:"未保障"
      },
      {
        text1:"住院保障",
        text2:"报销看病住院费",
        text3:"未保障"
      },
      {
        text1:"大病保障",
        text2:"确诊赔付大笔钱",
        text3:"未保障"
      }
    ],
    switchDescList:[
      {
        title:"问诊险",
        text1:"好医保.问诊险",
        text2:"医院看病线上买药能赔钱",
        text3:"30000元",
        textAddition1:"问诊报销有保障",
      },
      {
        title:"住院医疗险",
        text1:"好医保",
        text2:"推荐补充1份",
        text3:"600万",
        textAddition1:"超过3500万家庭的选择",
        textAddition2:"百万医疗险"
      },
      {
        title:"重疾险",
        text1:"健康福.重疾险(保一年)",
        text2:"高性价比",
        text3:"50万",
        textAddition1:"弥补养病经济损失",
        textAddition2:"优选重疾保障"
      }
    ],
    insuranceList:[
      {
        img:"https://img95.699pic.com/xsj/0c/44/9s.jpg!/fw/700/watermark/url/L3hzai93YXRlcl9kZXRhaWwyLnBuZw/align/southeast",
        title:"好医保.长期医保(20年)",
        text1:"20年",
        text2:"400万",
        text3:"28天-60岁",
        minMoney:"10.69元起",
        bottomDesc:"成人住院 | 保证20年续保，给自己和家人长久保障"
      },
      {
        img:"https://img95.699pic.com/xsj/0b/5y/v4.jpg!/fw/700/watermark/url/L3hzai93YXRlcl9kZXRhaWwyLnBuZw/align/southeast",
        title:"好医保.终身防癌医疗险",
        text1:"终身",
        text2:"400万",
        text3:"28天-70岁",
        minMoney:"7.42元起",
        bottomDesc:"老年防癌 | 三高，老年人也能投保，可终身续保"
      },
      {
        img:"https://img95.699pic.com/xsj/1f/w9/kt.jpg!/fw/700/watermark/url/L3hzai93YXRlcl9kZXRhaWwyLnBuZw/align/southeast",
        title:"好医保.长期医疗",
        text1:"6年",
        text2:"400万",
        text3:"28天-60岁",
        minMoney:"10.69元起",
        bottomDesc:"成人住院 | 医保目录内外都可报，最高报销400万"
      },
      {
        img:"https://img95.699pic.com/xsj/3a/cl/8e.jpg!/fw/700/watermark/url/L3hzai93YXRlcl9kZXRhaWwyLnBuZw/align/southeast",
        title:"健康福.重疾险(20年)",
        text1:"10年",
        text2:"最高50万",
        text3:"28天-50岁",
        minMoney:"2.80元起",
        bottomDesc:"成人大病 | 长期稳定保障更安心，轻中症多次赔付"
      },
      {
        img:"https://img95.699pic.com/xsj/3a/cl/lm.jpg!/fw/700/watermark/url/L3hzai93YXRlcl9kZXRhaWwyLnBuZw/align/southeast",
        title:"好医保.门诊险",
        text1:"1年",
        text2:"30000",
        text3:"6岁-60岁",
        minMoney:"19.00元起",
        bottomDesc:"成人门诊 | 24小时在线问医生，购药报销还能送上门"
      },
      {
        img:"https://img95.699pic.com/xsj/3a/cm/3x.jpg!/fw/700/watermark/url/L3hzai93YXRlcl9kZXRhaWwyLnBuZw/align/southeast",
        title:"好医保.少儿长期医疗",
        text1:"到18岁",
        text2:"400万",
        text3:"0天-17岁",
        minMoney:"31.00元起",
        bottomDesc:"少儿专属 | 特定重疾VIP部也能报"
      },
    ]
  },
  changeBorderStyle(e){
    let index=e.currentTarget.dataset.index;
    this.setData({
      switchCardIndex:index
    })
  },
  chooseInsurance(){
    wx.navigateTo({
      url: '/pages/insurance/input/input',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})