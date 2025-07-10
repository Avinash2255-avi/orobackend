const validUrl = require('valid-url')

function isValidHttpUrl(url) {
  return validUrl.isWebUri(url)
}

module.exports = isValidHttpUrl
