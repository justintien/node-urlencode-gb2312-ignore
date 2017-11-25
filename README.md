# urlencode-gb2312-ignore

`某些第三方 api 只支援 gb2312 参数, 但碍于又不想装 iconv (alpine 需要装 python), 所以采用 urlencode (iconv-lite based) charset = 'gb2312' 时触发 ignore`

## Install

```bash
$ npm install urlencode-gb2312-ignore
```

## Usage

```js
var urlencode = require('urlencode-gb2312-ignore');

console.log(urlencode('测', 'gb2312')); // '%B2%E2'
console.log(urlencode('測', 'gb2312')); // '', 因为 '測' 不在 gb2312 list

// 其余用法请参考 https://github.com/node-modules/urlencode
```

## License

[MIT](LICENSE.txt)

## GB2312 of unicode list
- see https://haible.de/bruno/charsets/conversion-tables/GB2312.html
