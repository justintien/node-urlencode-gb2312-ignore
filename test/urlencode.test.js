/*!
 * urlencode - test/urlencode.test.js
 *
 * Copyright(c) 2012 - 2014 fengmk2 <fengmk2@gmail.com>
 * MIT Licensed
 */

'use strict'

/**
 * Module dependencies.
 */

const urlencode = require('../')
const chai = require('chai')
const expect = chai.expect

let text = '測' // 繁體
let text_utf8_urlencode = '%E6%B8%AC'
let text_gb2312_urlencode = ''

let obj = {text: '測'} // 繁體
let obj_utf8_urlencode = 'text=%E6%B8%AC'
let obj_gb2312_urlencode = 'text='

let text2 = '测' // 简体
let text2_utf8_urlencode = '%E6%B5%8B'
let text2_gb2312_urlencode = '%B2%E2'

describe('urlencode.test.js', () => {
  it('encode', () => {
    expect(urlencode.encode(text)).to.be.eq(text_utf8_urlencode)
    expect(urlencode.encode(text, 'gb2312')).to.be.eq(text_gb2312_urlencode)

    expect(urlencode.encode(text2)).to.be.eq(text2_utf8_urlencode)
    expect(urlencode.encode(text2, 'gb2312')).to.be.eq(text2_gb2312_urlencode)
  })
  it('stringify', () => {
    expect(urlencode.stringify(obj)).to.be.eq(obj_utf8_urlencode)
    expect(urlencode.stringify(obj, {
      charset: 'gb2312'
    })).to.be.eq(obj_gb2312_urlencode)
  })
})
