const cloud = require("wx-server-sdk");
cloud.init();
exports.main = async (event, context) => {
  // return {
  //   title: "cosyer's Blog - 陈宇的博客",
  //   path: "https://mydearest.cn/",
  //   imageUrl: "https://mydearest.cn/images/avatar.jpg"
  // };
  return {
    title: "",
    path: "",
    imageUrl: ""
  };
};
