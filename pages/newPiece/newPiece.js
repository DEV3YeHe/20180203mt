var common = require('../../pages/common/common.js')

// pages/newPiece/newPiece.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    submit:null,
    newBtn: 'newBtnDisable',
    maskHidden:true,
//    cannotSubmit:true,
    imgIn:false,
    topicName:'李小明的传画贴',
    img:'http://images.houseside.cn/i002.jpg',
    tempFilePath:''
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
  uploadImg:function(){
    var that = this
    console.log('选择图片！！。。。')
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        that.setData({
          tempFilePath: res.tempFilePaths,
          imgIn:true,
//          cannotSubmit:false,
          newBtn: 'newBtn',
          submit: 'submit'
        })
        // var tempFilePaths = res.tempFilePaths

      }
    })
    
    
  },
  formSubmit: function (e) {
    var that = this
    var impt = this.data.tempFilePath[0]
    var imnm = impt.slice(30, 50)
    console.log(impt)

    wx.showLoading({
      title: '上传中...',
    })

      wx.setStorage({
        key: 'formValue',
        data: e.detail.value,
        success: function () {
          console.log('存成功了')
          // 存成功之后读出来看看
          wx.getStorage({
            key: 'formValue',
            success: function (res) {
              console.log('取到了storage')
              console.log(res.data)
            }
          })
        },
        fail: function () {
          console.log('没存上图片')
        }
      })

      // 发送数据给服务器

      // var token = ''
      // wx.getStorage({
      //   key: 'X-MT-Token',
      //   success: function(res) {
      //     token = res
      //   },
      // })

      wx.uploadFile({
        // header:{
        //   'X-MT-Token':''
        // },
        url: 'https://mystect.houseside.xyz/v1/mstect/file/uploadimage',
        filePath: impt,
        name: 'worksImg',
        formData: {
          'formData': e.detail.value
        },
        success: function (res) {
          var data = res.data
          //do something
          console.log(data)
          wx.hideLoading()
          console.log('done!!!!')
          that.setData({
            maskHidden:false,
          })
        }
      })

    // } else {
    //   console.log('没写全')
    // }
    console.log('图片临时路径：' + this.data.tempFilePath)

    //console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },
  intoMwork:function(){
    wx.reLaunch({
      url: '/pages/mWork/mWork',
    })
  }
})