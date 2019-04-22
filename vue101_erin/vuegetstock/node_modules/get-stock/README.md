# get-stock

> Nodejs module for getting stock from finance.yahoo.com api

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]

## Installation

```
  npm install --save get-stock
```

## Requirements

**Nodejs** >= 0.12

## Usage

```js
var getStock = require('get-stock')

var stocks = ['YHOO', 'TFSC']
getStock(stocks).then(function (res) {
  // do something
})

```

Return object:

* `count`: number of stocks
* `results`: results of stocks

## Getting To Know Yeoman

Yeoman has a heart of gold. He&#39;s a person with feelings and opinions, but he&#39;s very easy to work with. If you think he&#39;s too opinionated, he can be easily convinced. Feel free to [learn more about him](http://yeoman.io/).

## Created with
[Yeoman](https://npmjs.org/package/yo) and [Generator-simple-package](https://npmjs.org/package/generator-simple-package)

## License
MIT © [NghiaTTran]()

[npm-image]: https://badge.fury.io/js/get-stock.svg
[npm-url]: https://npmjs.org/package/get-stock
[travis-image]: https://travis-ci.org/nghiattran/get-stock.svg?branch=master
[travis-url]: https://travis-ci.org/nghiattran/get-stock
[daviddm-image]: https://david-dm.org/nghiattran/get-stock.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/nghiattran/get-stock
[coveralls-image]: https://coveralls.io/repos/nghiattran/get-stock/badge.svg
[coveralls-url]: https://coveralls.io/github/nghiattran/get-stock
