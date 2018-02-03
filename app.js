var common = require('pages/common/common.js')

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

    // 1.【login】检测身份链接状态，有效：拿着之前的3ed_session正常走；失效：重新wx.login；
    wx.checkSession({
      success: function (res){
        console.log('身份链接【有效】√')
      },
      fail:function(){
        console.log('身份链接【失效】×')
        // 重新登录
        that.allLogin()
      }
    }) 
    wx.getSetting({
      success: (res) => {
        if (res.authSetting['scope.userInfo'] !== undefined) {
          if (res.authSetting['scope.userInfo']){
            wx.redirectTo({
              // 该去哪去哪
              url: '/pages/index/index'
            })
          }else{
            wx.redirectTo({
              url: '/pages/unAuthorize/unAuthorize'
            })
          }
        }else{
          wx.redirectTo({
            url: '/pages/welcome/welcome'
          })
        }
      }
    })
      
  },
  knowTheUser:function(){
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
  onShow: function (options) {

  },

  allLogin:function(){
    var that = this
    wx.login({
      success: function (res) {
        if (res.code) {
          console.log('获取用户登录态成功 √')
          //发起网络请求
          wx.request({
            method: "POST",
            url: 'https://mystect.houseside.xyz/v1/mstect/auth/login',
            data: {
              code: res.code
            },
            success: function (res) {
              //console.log(res.statusCode)
              console.log('发送code成功 √')
              if (res.statusCode == 200) {
                wx.setStorageSync('X-MT-Token', res.header['X-MT-Token'])
                wx.setStorageSync('userId', res.data.entity['id'])
                console.log(res)
              } else {
                wx.showModal({
                  title: '提示',
                  content: '居然没找到服务器？！快检查一下网络',
                  success: function (res) {
                    if (res.confirm) {
                      console.log('用户点击确定')
                    } else if (res.cancel) {
                      console.log('用户点击取消')
                    }
                  }
                })
              }
            }
          })
        } else {
          wx.showModal({
                  title: '提示',
                  content: '居然没找到服务器？！快检查一下网络',
                  success: function (res) {
                    if (res.confirm) {
                      console.log('用户点击确定')
                    } else if (res.cancel) {
                      console.log('用户点击取消')
                    }
                  }
                })
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    })
  },

  welcomeRedirectTo:function(){
    var that = this
    setTimeout(function () {
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
    }.bind(this), 1300)
    
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