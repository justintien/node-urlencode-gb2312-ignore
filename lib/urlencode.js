/** !
 * gb2312ignore - lib/gb2312ignore.js
 *
 * MIT Licensed
 *
 * Authors:
 *   Justin Tien <thitbbeb@gmail.com>
 */

'use strict'

/**
 * Module dependencies.
 */
const urlencode = require('urlencode')

const gb2323 = require('./gb2312.js')

function gb2312ignore (str) {
  str = str || ''
  let result = ''
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) < 128) {
      result += str.substr(i, 1)
    } else {
      if (gb2323.unicode_table.indexOf(str.charCodeAt(i)) > -1) {
        result += str.substr(i, 1)
      }
    }
  }

  return result
}

function encode (str, charset) {
  charset = charset || 'utf8'
  if (charset.toLowerCase() === 'gb2312') {
    str = gb2312ignore(str)
  }
  return urlencode.encode(str, charset)
}

function stringify (obj, prefix, options) {
  let charset = 'utf-8'
  if (options && options.charset) {
    charset = options.charset
  }
  if (typeof prefix !== 'string') {
    if (prefix && prefix.charset) {
      charset = prefix.charset
    }
  }

  if (charset.toLowerCase() === 'gb2312') {
    obj = JSON.parse(gb2312ignore(JSON.stringify(obj)))
  }
  return urlencode.stringify(obj, prefix, options)
}

module.exports = encode
module.exports.encode = encode
module.exports.decode = urlencode.decode
module.exports.parse = urlencode.parse
module.exports.stringify = stringify
