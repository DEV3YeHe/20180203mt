// pages/mWork/mWork.js
var app =getApp()
var that = this
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isBottom:true,
    moveBG:{},
    actionBtnAni:{},
    faceAni:{},
    showTimeId:null,
    actShow:{},
    notActting:true,
    categories: [
      {
        "id": "XH",
        "description": "喜欢",
        "img_src": "https://image.houseside.xyz/hart.png"
      },
      {
        "id": "ZJ",
        "description": "震惊",
        "img_src": "https://image.houseside.xyz/amazing.png"
      },
      {
        "id": "WL",
        "description": "无聊",
        "img_src": "https://image.houseside.xyz/boring.png"
      },
      {
        "id": "GX",
        "description": "搞笑",
        "img_src": "https://image.houseside.xyz/smile.png"
      }
    ],
    isBig:false,
    workInfo:{
      "can_break":1,
      "topic":"李小明的十五个字",
      "id": "",//作品Id
      "img_src": "https://image.houseside.xyz/20161007100742dfgdfggfg.jpg",//图片地址
      "img_desc": "一个小描述是简单划分接受度就客户收到橘黄色度好",//图片描述
      "floor": 10,//楼号
      "anon": 1,　//是否匿名
      "is_break": 0, //是否脱离话题
      "total_interactions": '2340',//总互动记录数
      "is_collect": 1, //当前用户是否收藏
      "created": "",//创建时间
      //作品作者信息,匿名时该项不存在
      "user": {
        "id": "",//用户Id
        "avatar": "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIQJlbUdj67UOibJUkGicR97fnJaOA4uWZclfHp5ffdFvMsSeyUyvtNvLYnIyjdGKjMX2icF7bGXMmsw/0",//头像信息
        "nick_name": "一只小猪"//用户昵称
      },
      //互动记录
      "interactions": [
        {
          "category": "",//互动类型
          "total": 100 //互动总数
        }
      ],
      "userCurrentAction":{
        "category":""
      }
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    console.log(options)
    // 请求数据
    // var token = wx.getStorageSync('X-MT-Token')
    // wx.showLoading({
    //   title: '加载中',
    // })
    // if (token){
    //   wx.request({
    //     method: "GET",
    //     url: 'https://mystect.houseside.xyz/v1/mstect/works/' + options,
    //     header: {
    //       "X-MT-Token": token    //3rd_session
    //     },
    //     success: function (res) {
    //       wx.hideLoading()
    //       console.log(res.data)
    //       // that.setData({
    //       //   workInfo: res.data
    //       // })
    //     },
    //     fail: function () {
    //       console.log(res)
    //     }
    //   })
    // }else{
    //   wx.showModal({
    //     content: '内部错误，请尝试重启',
    //   })
    // }

    wx.setNavigationBarTitle({
      title: '· '+app.globalData.currentFloor+' ·'
    })

    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.actShow = wx.createAnimation({ duration: 0 })
    this.actShow.opacity(0).translateY(-22).step()
    this.setData({
      actShow: this.actShow.export()
    })

    this.faceAni = wx.createAnimation({ duration: 0 })
    this.moveBG = wx.createAnimation({ duration: 0 })
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
  intoTopic:function(){
    wx.reLaunch({
      url: '/pages/topic/topic',
    })
  },
  moreTap:function(){
    const that = this
    wx.showActionSheet({
      itemList: [ "脱离话题"],
      itemColor: "#FF2121",
      success: function (res) {
        wx.showModal({
          title: '脱离话题',
          content: '内容脱离话题后仅上传者自己可见',
          success:function(res){
            if (res.confirm){
              // 执行脱离话题！！
              console.log('执行脱离话题')
            }
          },
          fail:function(){
            console.log('中断')
          }
        })
      }
    })
  },
  saveImg:function(){
    wx.downloadFile({
      url: this.data.workInfo.img_src,
      success: function (res) {
        console.log(res)
        var path = res.tempFilePath
        // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
        console.log("00056")
        wx.getSetting({
          success: (res) => {
            console.log(res)
            wx.saveImageToPhotosAlbum({
              filePath: path,
              success:function(){
                wx.showToast({
                  title: '妥了',
                  icon: 'success',
                  duration: 2000
                })
              },
              fail: function (res){
                console.log(res)
                wx.showModal({
                  title: '请授权',
                  content: '请允许小程序将图片存到你的手机里',
                  success: function (res) {
                    if (res.confirm) {
                      wx.openSetting({
                        success: (res) => {
                          console.log(res)
                          if (res.authSetting['scope.writePhotosAlbum']) {
                            wx.showToast({
                              title: '再存试试',
                              icon: 'success',
                              duration: 2000
                            })
                            wx.getSetting({
                              success: (res) => {
                                /*
                                 * res.authSetting = {
                                 *   "scope.userInfo": true,
                                 *   "scope.userLocation": true
                                 * }
                                 */
                              }
                            })
                          }else{
                            wx.showToast({
                              title: '没搞定..',
                              icon: 'none',
                              duration: 2000
                            })
                          }
                          
                        },
                        fail:function(res){
                          console.log(res)
                        }
                      })
                    } else if (res.cancel) {
                      wx.showToast({
                        title: '没权限..',
                        icon: 'none',
                        duration: 2000
                      })
                    }
                  }
                })
              }
            })
          }
        })

      },
      fail: () => {
        wx.showModal({
          title: 'oops',
          content: '不知道为什么导致不能存图片，截屏吧...',
          showCancel: false,
          success: function (res) {
            if (res.confirm) {
              console.log('用户点击确定')
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
        })
      }
    })
  },
  closeActLine:function(){
    

    setTimeout(function () {
      //this.faceAni.translateY(0).scale(1, 1).step({ duration: 0 })

      this.setData({
        //faceAni: this.faceAni.export(),
        notActting: true,
        showTimeId: null,
      })
    }.bind(this), 400)

    this.actShow.opacity(0).translateY(-22).step({ duration: 400, timingFunction: 'ease' })
    this.moveBG.opacity(0).step({ duration: 400, timingFunction: 'ease' })
    this.setData({
      actShow: this.actShow.export(),
      moveBG: this.moveBG.export()
    })
  },
  bigShow:function(){
    // var that = this
    // if (that.data.isBig){
    //   console.log('chulai ')
    //   that.setData({
    //     isBig: false,
    //   })
    // }else{
    //   console.log('yincang ')
    //   that.setData({
    //     isBig: true,
    //   })
    // }
    wx.previewImage({
      current: this.data.workInfo.img_src, // 当前显示图片的http链接
      urls: [this.data.workInfo.img_src] // 需要预览的图片http链接列表
    })
      
  },
  doActting:function(){
    var actShow = wx.createAnimation({duration: 0})
    actShow.opacity(0).translateY(-25).step()
    if (this.data.notActting){
      this.setData({
        notActting:false,
      })
      this.actShow.opacity(1).translateY(0).step({ duration: 400, timingFunction: 'ease' })
      this.moveBG.opacity(1).step({ duration: 400, timingFunction: 'ease' })
      this.setData({
        actShow: this.actShow.export(),
        moveBG: this.moveBG.export()
      })

    }else{
      this.closeActLine()
    }
  },
  chooseOne:function(res){
    console.log(res.currentTarget.id)
    if (res.currentTarget.id){
      this.setData({
        showTimeId: res.currentTarget.id
      })
      console.log(this.data.showTimeId)
      this.faceAni.translateY(-82).scale(1.05, 1.05).step({ duration: 350})
      this.faceAni.scale(0.9, 0.9).step({ duration:50 })
      this.faceAni.scale(1.6, 1.6).step({ duration: 80 })
      this.faceAni.scale(1.65, 1.65).step({ duration: 350 })
      this.faceAni.translateY(45).scale(0,0).step({ duration: 200 })
      this.faceAni.translateY(0).scale(1, 1).step({ duration: 0 })
      this.setData({
        faceAni: this.faceAni.export(),
      })
      setTimeout(function(){
        this.closeActLine()
      }.bind(this),1030)
      //
    }
  }
})