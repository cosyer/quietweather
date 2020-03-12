# QuietWeather
一款天气应用微信小程序

## 数据来源
气象数据为[和风天气](http://www.heweather.com/)，**使用的是个人开发者认证版**。

## 运行前准备
> * [注册微信小程序](https://mp.weixin.qq.com/wxopen/waregister?action=step1)，获取 `appid`，配置域名白名单(在小程序后台将使用到的 `API` 添加到域名白名单)；
> * 注册[和风天气](http://www.heweather.com/)账号，获取 'key`；
> * ~~在 `app.js` 中替换 `globalData` 中的 `ak` 为自己的 `ak`；~~
> * 在 `app.js` 中替换 `globalData` 中的 `key` 为你的 `key`；
> * Run and Enjoy!

- 云函数调用注意点
1. npm init -y
2. wx:for-index='index' wx:key='index'
3. 目录

```json
  "miniprogramRoot": "miniprogram/",
  "cloudfunctionRoot": "cloudfunctions/"
```

- 修复原项目目录结构
- 修复原项目wx:key="{{index}}"
- 分享缩略图 210宽 168高 5:4

## 小程序二维码
[天气速查quiet](http://cdn.mydearest.cn/code.png)

## 文章教程地址
[两天撸一个天气应用微信小程序](https://juejin.im/post/5b39bbcc5188252ce018c745)
