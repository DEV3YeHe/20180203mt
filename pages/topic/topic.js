// pages/topic/topic.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isBottom:true,
    notAnyMore:true,
    topic:{},
    favInfo:true,
    id:null,
    longStyle:true,
    topicNavAct: "topicNavAct",
    navUser: 'http://images.houseside.cn/001.jpg',
    workList:[
      {
        id:'i001',
        src:"http://images.houseside.cn/i001.jpg?imageView2/1/w/150/h/110/q/75|imageslim",
        pieceDit:"三十个字三十个字三十个字三十个字三十个字三十个字三十个字12",
        pFloor:1,
        interChu:3253,
      },
      {
        id: 'i002',
        src: "http://images.houseside.cn/i002.jpg?imageView2/1/w/150/h/110/q/75|imageslim",
        pieceDit: "作品描述详情~",
        pFloor: 1,
        interChu: 3253,
      },
      {
        id: 'i003',
        src: "http://images.houseside.cn/i003.jpg?imageView2/1/w/150/h/110/q/75|imageslim",
        pieceDit: "作品描述详情~",
        pFloor: 1,
        interChu: 3253,
      },
      {
        id: 'i004',
        src: "",
        pieceDit: "作品描述详情~",
        pFloor: 1,
        interChu: 3253,
      },
      {
        id: 'i005',
        src: "http://images.houseside.cn/i005.jpg",
        pieceDit: "作品描述详情~",
        pFloor: 1,
        interChu: 3253,
      },
      {
        id: 'i006',
        src: "http://images.houseside.cn/i006.jpg",
        pieceDit: "作品描述详情~",
        pFloor: 1,
        interChu: 3253,
      },
      {
        id: 'i007',
        src: "http://images.houseside.cn/i011.gif",
        pieceDit: "作品描述详情~",
        pFloor: 1,
        interChu: 3253,
      },
    ],
    animationData: {},
    topic:{
      topicName:"李小明十五个字",
      topicDis:"击鼓传画每日一班车！"
    },
    shuqian: "icon-shuqian shuqianColWt",
    shuqianlab: "收藏"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // res JSON 数据转换
    var haha = {
      "id": "432",//话题Id
      "title": "李小明的传画贴",
      "description": "李小明三十个字李小明小明李李晓明洗洗小小明",
      "category": "JGCH",
      "permission": "PUBLIC",//参与权限
      "created": "",//创建时间
      "updated": "",//更新时间
      //话题作品信息
      "works": [
        {
          "id": "243",//作品Id
          "img_src": "http://images.houseside.cn/i001.jpg",//图片地址
          "img_desc": "这里有一个图片呵呵呵图片图片，哈哈",//图片描述
          "floor": 10,//楼号
          "anon": 0,　//是否匿名
          "is_break": 0, //是否脱离话题
          "total_interactions": 100,//总互动记录数
          "is_collect": 1, //当前用户是否收藏
          "created": "",//创建时间
          //作品作者信息,匿名时该项不存在
          "user": {
            "id": "",//用户Id
            "avatar": "",//头像信息
            "nick_name": ""//用户昵称
          }
        },
        {
          "id": "345",//作品Id
          "img_src": "http://images.houseside.cn/i002.jpg",//图片地址
          "img_desc": "这里有一个图片呵呵呵图片图片，哈哈",//图片描述
          "floor": 10,//楼号
          "anon": 0,　//是否匿名
          "is_break": 0, //是否脱离话题
          "total_interactions": 100,//总互动记录数
          "is_collect": 1, //当前用户是否收藏
          "created": "",//创建时间
          //作品作者信息,匿名时该项不存在
          "user": {
            "id": "",//用户Id
            "avatar": "",//头像信息
            "nick_name": ""//用户昵称
          }
        },
        {
          "id": "567",//作品Id
          "img_src": "http://images.houseside.cn/i003.jpg",//图片地址
          "img_desc": "这里有一个图片呵呵呵图片图片，哈哈",//图片描述
          "floor": 10,//楼号
          "anon": 0,　//是否匿名
          "is_break": 0, //是否脱离话题
          "total_interactions": 100,//总互动记录数
          "is_collect": 1, //当前用户是否收藏
          "created": "",//创建时间
          //作品作者信息,匿名时该项不存在
          "user": {
            "id": "",//用户Id
            "avatar": "",//头像信息
            "nick_name": ""//用户昵称
          }
        },
        {
          "id": "876",//作品Id
          "img_src": "http://images.houseside.cn/i004.jpg",//图片地址
          "img_desc": "这里有一个图片呵呵呵图片图片，哈哈",//图片描述
          "floor": 10,//楼号
          "anon": 0,　//是否匿名
          "is_break": 0, //是否脱离话题
          "total_interactions": 100,//总互动记录数
          "is_collect": 1, //当前用户是否收藏
          "created": "",//创建时间
          //作品作者信息,匿名时该项不存在
          "user": {
            "id": "",//用户Id
            "avatar": "",//头像信息
            "nick_name": ""//用户昵称
          }
        },
        {
          "id": "548",//作品Id
          "img_src": "http://images.houseside.cn/i005.jpg",//图片地址
          "img_desc": "这里有一个图片呵呵呵图片图片，哈哈ertg regrth rth rth trh rt rt3534543543543",//图片描述
          "floor": 10,//楼号
          "anon": 0,　//是否匿名
          "is_break": 0, //是否脱离话题
          "total_interactions": 100,//总互动记录数
          "is_collect": 1, //当前用户是否收藏
          "created": "",//创建时间
          //作品作者信息,匿名时该项不存在
          "user": {
            "id": "",//用户Id
            "avatar": "",//头像信息
            "nick_name": ""//用户昵称
          }

        }
      ],
      //话题作者信息
      "user": {
        "id": "",//用户Id
        "avatar": "",//头像信息
        "nick_name": ""//用户昵称
      }
    }

    this.setData({
      topic: haha
    })
    //console.log(this.data.topic.works.img_src)
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
  intoMwork:function(){
    wx.navigateTo({
      url: '/pages/mWork/mWork',
    })
  },
  favBtn:function(){
    if (this.data.favInfo){
      this.setData({
        favInfo: false,
      })
    }else{
      this.setData({
        favInfo: true,
      })
    }
  },
  intoIndex:function(){
    wx.redirectTo({
      url: '/pages/index/index',
    })
  },
  listStyle:function(){
    if (this.data.longStyle){
      console.log('111')
      this.setData({
        longStyle: false,
      })
    }else{
      console.log('222')
      this.setData({
        longStyle: true,
      })
    }
  },
  newWork:function(){
    wx.navigateTo({
      url: '/pages/newPiece/newPiece',
    })
  }

})