let utils = require("../../utils/utils");
Page({
  data: {
    projectAddress: "https://github.com/cosyer/quietweather",
    github: "https://github.com/cosyer",
    email: "535509852@qq.com",
    qq: "535509852",
    swiperHeight: "auto",
    bannerImgList: []
  },
  onLoad() {
    this.initSwiper();
  },
  previewImages(e) {
    let index = e.currentTarget.dataset.index || 0;
    let urls = this.data.bannerImgList;
    let arr = [];
    let imgs = urls.forEach(item => {
      arr.push(item.src);
    });
    wx.previewImage({
      current: arr[index],
      urls: arr,
      success: function(res) {},
      fail: function(res) {
        console.error("previewImage fail: ", res);
      }
    });
  },
  initSwiper() {
    let systeminfo = getApp().globalData.systeminfo;
    if (utils.isEmptyObject(systeminfo)) {
      wx.getSystemInfo({
        success: res => {
          this.setSwiperHeight(res);
        }
      });
    } else {
      this.setSwiperHeight(systeminfo);
    }
  },
  setSwiperHeight(res) {
    this.setData({
      swiperHeight: `${((res.windowWidth || res.screenWidth) / 375) * 200}px`
    });
  },
  copy(e) {
    let dataset = (e.currentTarget || {}).dataset || {};
    let title = dataset.title || "";
    let content = dataset.content || "";
    wx.setClipboardData({
      data: content,
      success() {
        wx.showToast({
          title: `已复制${title}`,
          duration: 2000
        });
      }
    });
  }
});
