# egg-translate

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-translate.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-translate
[travis-image]: https://img.shields.io/travis/eggjs/egg-translate.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-translate
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-translate.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-translate?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-translate.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-translate
[snyk-image]: https://snyk.io/test/npm/egg-translate/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-translate
[download-image]: https://img.shields.io/npm/dm/egg-translate.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-translate

<!--
Description here.
-->

> [使用百度开放平台通用翻译 API](https://api.fanyi.baidu.com/api/trans/product/prodinfo)

<!--

如果有依赖其它插件，请在这里特别说明。如

- md5

-->

## 开启插件

```js
// config/plugin.js
exports.translate = {
  enable: true,
  package: "egg-translate",
}
```

## 使用场景

- 翻译文本

## 详细配置

```js
// {app_root}/config/config.default.js
exports.translate = {
  appId: "xxxxx", // 申请的key
  secret: "xxxxx", // 密匙
}
```

## 使用

```js
// 在Controller 中
const { ctx } = this
// 可以使用 \n 多个一起翻译  苹果\n香蕉
// await ctx.translate("苹果\n香蕉")
let data = await ctx.translate("苹果")
// 或 转换成指定语言  默认为英语
let data1 = await ctx.translate("苹果", "kor")
```

| 简写 | 名称         |
| ---- | ------------ |
| zh   | 中文         |
| en   | 英语         |
| yue  | 粤语         |
| wyw  | 文言文       |
| jp   | 日语         |
| kor  | 韩语         |
| fra  | 法语         |
| spa  | 西班牙语     |
| th   | 泰语         |
| ara  | 阿拉伯语     |
| ru   | 俄语         |
| pt   | 葡萄牙语     |
| de   | 德语         |
| it   | 意大利语     |
| el   | 希腊语       |
| nl   | 荷兰语       |
| pl   | 波兰语       |
| bul  | 保加利亚语   |
| est  | 爱沙尼亚语   |
| dan  | 丹麦语       |
| fin  | 芬兰语       |
| cs   | 捷克语       |
| rom  | 罗马尼亚语   |
| slo  | 斯洛文尼亚语 |
| swe  | 瑞典语       |
| hu   | 匈牙利语     |
| cht  | 繁体中文     |
| vie  | 越南语       |

## 单元测试

<!-- 描述如何在单元测试中使用此插件，例如 schedule 如何触发。无则省略。-->

## 提问交流

请到 [egg issues](https://github.com/XXllXX/egg-translate/issues) 异步交流。

## License

[MIT](LICENSE)
