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

## Install

```bash
$ npm i egg-translate --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.translate = {
  enable: true,
  package: "egg-translate",
}
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.translate = {
  appId: "xxxxx",
  secret: "xxxxx",
}
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/XXllXX/egg-translate/issues).

## License

[MIT](LICENSE)
