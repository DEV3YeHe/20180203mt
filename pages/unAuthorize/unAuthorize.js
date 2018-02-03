// pages/unAuthorize/unAuthorize.js
var app = getApp()
Page({

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  doAuthorize:function(){
    wx.openSetting({
      success: (res) => {
        if (res.authSetting['scope.userInfo']){
          console.log('用户手动开启info权限')
          app.knowTheUser()
        }
      }
    })
  }
})