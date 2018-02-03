//var common = require('pages/common/common.js')

//app.js
App({
  globalData: {
    currentFloor:'25',
    newTopicContent:null,
    redirectTo:"",
    windowWidth: null,
    windowHeight: null,
    targetAnything:null
  },
  onLaunch: function () {
    // 0.获取设备信息——窗口宽高；
    var that = this
    wx.getSystemInfo({
      success: function (res) {
        that.globalData.windowWidth = res.windowWidth
        that.globalData.windowHeight = res.windowHeight
      }
    })
  },
  knowTheUser: function () {
    wx.getUserInfo({
      success: res => {
        console.log('取到了info √ --> ')
        console.log(res)
        // 可以将 res 发送给后台解码出 unionId
        wx.setStorageSync('userInfo', res.userInfo)

        this.welcomeRedirectTo()
        this.signUpUserInfo()
      },
      fail: res => {
        console.log('用户没给info授权 ×')
        wx.redirectTo({
          url: '/pages/unAuthorize/unAuthorize'
        })
      }
    })
  },
  // 要去哪，写在这！！！！！！！！！！！！！！！！！
  welcomeRedirectTo:function(){
    var that = this
      var rdrt = that.globalData.redirectTo
      if (rdrt) {
        wx.redirectTo({
          url: rdrt,
        })
      } else {
        wx.redirectTo({
          url: '/pages/index/index'
        })
      }
  },
  signUpUserInfo:function(){
    var token = wx.getStorageSync('X-MT-Token')
    var userId = wx.getStorageSync('userId')
    var avatar = wx.getStorageSync('userInfo').avatarUrl
    var nikename = wx.getStorageSync('userInfo').nikeName
    // 3.发送用户信息给后台
    if (token){
      wx.request({
        method: "PUT",
        url: 'https://mystect.houseside.xyz/v1/mstect/user/' + userId,
        header: {
          "X-MT-Token": token    //3rd_session
        },
        data: { 'avatar': avatar, 'nike_name': nikename},
        success:function(res){

          console.log(res)
        },
        fail: function (res){
          console.log(res)
        }
      })
    }
  }
  
})