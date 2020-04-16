"use strict"
const md5 = require("md5")

module.exports = {
  /**
   *
   * @param {string} query 翻译文本
   * @param {string} to 翻译语言
   */
  async translate(query, to = "en") {
    let from = "auto"
    let { appId, secret } = this.app.config.translate
    let baseUrl = "https://fanyi-api.baidu.com/api/trans/vip/translate?"

    let salt = Date.now()
    let sign = md5(appId + query + salt + secret)
    let url = `${baseUrl}q=${encodeURI(
      query
    )}&appid=${appId}&salt=${salt}&from=${from}&to=${to}&sign=${sign}`

    try {
      let data = await this.curl(url, {
        dataType: "json",
        timeout: 30000,
      })
      return data.data
    } catch (error) {
      return error
    }
  },
}
