// pages/index/index.js
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{},
    notAnyMore:true,
    noList:false,
    isLoading:true,
    //frontMask:'NONE',
    maskHidden:true,
    isCome:{},
    //isForm: false,
    submit:null,
    newBtn:'newBtnDisable',
    typeNotify: '击鼓传画传统规则：题主发一作品，参与者根据画面内容进行再创作，此活动是绘画新人成触的最佳手段~',
    jiguStyle:'k2',
    shenzuoStyle:'k1',
    nandongStyle:'k1',
    JIGUon: true,
    SHENZUOon: null,
    NAODONGon: null,
    uploadNab:74,
    beChuNab:23709,
    //noContent:'NONE',
    longStyle:'SHOW',
    bigStyle:'NONE',
    listContent:[
      {
        id: 'i001',
        src: "http://images.houseside.cn/i001.jpg",
        pieceDit: "三十个字三十个字三十个字三十个字三十个字三十个字三十个字12",
        pFloor: 1,
        interChu: 3253,
        onTopic:'应用中的那些小插画',
      },
      {
        id: 'i002',
        src: "http://images.houseside.cn/i002.jpg",
        pieceDit: "作品描述详情~",
        pFloor: 1,
        interChu: 3253,
        onTopic: '应用中的那些小插画',
      },
      {
        id: 'i003',
        src: "http://images.houseside.cn/i003.jpg",
        pieceDit: "作品描述详情~",
        pFloor: 1,
        interChu: 3253,
        onTopic: '应用中的那些小插画',
      },
      {
        id: 'i004',
        src: "",
        pieceDit: "作品描述详情~",
        pFloor: 1,
        interChu: 3253,
        onTopic: '应用中的那些小插画',
      },
      {
        id: 'i005',
        src: "http://images.houseside.cn/i005.jpg",
        pieceDit: "作品描述详情~",
        pFloor: 1,
        interChu: 3253,
        onTopic: '应用中的那些小插画',
      },
      {
        id: 'i006',
        src: "http://images.houseside.cn/i006.jpg",
        pieceDit: "作品描述详情~",
        pFloor: 1,
        interChu: 3253,
        onTopic: '应用中的那些小插画',
      },
      {
        id: 'i007',
        src: "http://images.houseside.cn/i011.gif",
        pieceDit: "作品描述详情~",
        pFloor: 1,
        interChu: 3253,
        onTopic: '应用中的那些小插画',
      },
    ],
    vColor01:'color:#44D8CE;',
    vColor02:'color:#979797;',
    vColor03:'color:#979797;'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this
    wx.getStorage({
      key: 'userInfo',
      success: function (res) {
        that.setData({
          userInfo: res.data
        })
        console.log(that.data.userInfo)
      },
      fail: function (res) {
        wx.getUserInfo({
          success: res => {
            console.log('取到了info √ --> ')
            console.log(res)
            // 可以将 res 发送给后台解码出 unionId
            wx.setStorageSync('userInfo', res.userInfo)
          },
          fail: res => {
            console.log('用户没给info授权 ×')
            wx.redirectTo({
              url: '/pages/unAuthorize/unAuthorize'
            })
          }
        })
        console.log(res)
      }
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    const isCome = wx.createAnimation({})
    this.isCome = isCome
    isCome.scale(0.85, 0.85).opacity(0).step({ duration: 0 })
    this.setData({
      isLoading:false,
      isCome: isCome.export()
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  longStyle:function(){
    if (this.data.longStyle != 'SHOW'){
      this.setData({
        longStyle: 'SHOW',
        bigStyle: 'NONE',
        vColor01: 'color:#44D8CE;',
        vColor02: 'color:#979797;'
      })
    }
    
  },
  bigStyle: function () {
    if (this.data.bigStyle != 'SHOW') {
      this.setData({
        longStyle: 'NONE',
        bigStyle: 'SHOW',
        vColor01: 'color:#979797;',
        vColor02: 'color:#44D8CE;'
      })
    }
  },
  intoFavorite:function(){
    wx.navigateTo({
      url: '/pages/favorite/favorite',
    })
  },
  tapJIGU: function (e) {
    if (this.data.jiguStyle != 'k2'){
      console.log('JGCH')
      this.setData({
        JIGUon: true,
        SHENZUOon: null,
        NAODONGon: null,
        jiguStyle: 'k2',
        shenzuoStyle: 'k1',
        nandongStyle: 'k1',
        typeNotify: '击鼓传画传统规则：题主发一作品，参与者根据画面内容进行再创作，此活动是绘画新人成触的最佳手段~',
      })
    }
    
  },
  tapSHENZUO: function () {
    if (this.data.shenzuoStyle != 'k2') {
      console.log('SZXX')
      this.setData({
        JIGUon: null,
        SHENZUOon: true,
        NAODONGon: null,
        jiguStyle: 'k1',
        shenzuoStyle: 'k2',
        nandongStyle: 'k1',
        typeNotify: '神作续写传统规则：题主创作故事开头，参与者编写接下来可能发生的情节，此活动是编剧新人成触最佳手段~',
      })
    }
  },
  tapNAODONG: function () {
    if (this.data.nandongStyle != 'k2') {
      console.log('NDSK')
      this.setData({
        JIGUon: null,
        SHENZUOon: null,
        NAODONGon: true,
        jiguStyle: 'k1',
        shenzuoStyle: 'k1',
        nandongStyle: 'k2',
        typeNotify: '脑洞神侃规则：没有规则，随心开车，O(∩_∩)O~',
      })
    }
  },
  showFrom:function(){
    var isCome = wx.createAnimation({ duration: 0, transformOrigin: "50% 50% 0" })
    this.isCome = isCome
    if (this.data.maskHidden){
      this.setData({
        maskHidden:false,
      })
        isCome.scale(1, 1).opacity(1).step({ duration: 400, timingFunction: 'ease-in'})
        this.setData({
          isCome: isCome.export()
        })
      
    }else{
      isCome.scale(0.85, 0.85).opacity(0).step({ duration: 300, timingFunction: 'ease-in' })
      this.setData({
        isCome: isCome.export()
      })
      setTimeout(function(){
        this.setData({
          maskHidden: true,
        })
      }.bind(this),300)
      
      
    }
  },
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    // 存入全局变量！！
    app.globalData.newTopicContent = e.detail.value
    console.log(app.globalData.newTopicContent)
    if (app.globalData.newTopicContent){
      this.setData({
        maskHidden: true,
      })
      // wx.showModal({
      //   content: '成功了，跳新建作品页面',
      //   showCancel:false
      // })
      wx.navigateTo({
        url: '/pages/newPiece/newPiece',
      })
      this.formReset()
    }else{
      wx.showModal({
        title: 'woc!',
        content: '数据没存上，重启下小程序试试？',
        showCancel: false
      })
    }
  },
  formReset:function(){
    console.log('表单已reset')
  },
  titleCheck: function (event){
    if (event.detail.value) {
      this.setData({
        newBtn: 'newBtn',
        submit:'submit'
      })
    }else{
      this.setData({
        newBtn: 'newBtnDisable',
        submit:null
      })
    }
  },
  intoTopic:function(){
    wx.reLaunch({
      url: '/pages/topic/topic',
    })
  },
  intoMwork: function () {
    wx.navigateTo({
      url: '/pages/mWork/mWork',
    })
  },
  showORG:function(){
    wx.navigateTo({
      url: '/pages/ORGInfo/ORGInfo',
    })
  }
})