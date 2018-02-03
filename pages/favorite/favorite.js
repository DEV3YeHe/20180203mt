// pages/favourite/favorite.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listContent:[
      {
        topicId:'6',
        topicName: '李小明的传画贴',
        topicType: '击鼓传画',
        floorNub: '435',
        beFav: '5465',
        picShow: ['http://images.houseside.cn/i002.jpg', 'http://images.houseside.cn/i004.jpg', 'http://images.houseside.cn/i006.jpg']
      },
      {
        topicId: '7',
        topicName: '李小明的传画贴',
        topicType: '击鼓传画',
        floorNub: '435',
        beFav: '5465',
        picShow: ['http://images.houseside.cn/i002.jpg', 'http://images.houseside.cn/i004.jpg', 'http://images.houseside.cn/i006.jpg']
      },
      {
        topicId: '99',
        topicName: '李小明的传画贴',
        topicType: '击鼓传画',
        floorNub: '435',
        beFav: '5465',
        picShow: ['http://images.houseside.cn/i002.jpg', 'http://images.houseside.cn/i004.jpg', 'http://images.houseside.cn/i006.jpg']
      }
    ]
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
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
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
  intoTopic: function () {
    wx.reLaunch({
      url: '/pages/topic/topic',
    })
  },
})