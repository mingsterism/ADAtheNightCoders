'use strict';

var querystring = require('querystring')
var http = require('http')

module.exports = function (symbols){

  return new Promise(function (fulfill, reject) {

    if (!(symbols instanceof Array)) {
      reject({
        error: 'All stock symbols have to be passed in as an array.'
      })
    } else if (symbols.length === 0){
      reject({
        error: 'Stock symbol array cannot be empty.'
      })
    }

    var symbolsString = ''
    for (var i = 0; i < symbols.length; i++) {
      if (i > 0) {
        symbolsString += ','
      }

      symbolsString += '"symbol"'.replace('symbol', symbols[i])
    }

    var cmd = ('Select * from yahoo.finance.quotes where symbol in (array);')
      .replace('array', symbolsString)

    var query = {
      q: cmd,
      format: 'json',
      diagnostics: 'false',
      env: 'http://datatables.org/alltables.env',
      callback: ''
    }
    var queryString = querystring.stringify(query)

    var options = {
      hostname: 'query.yahooapis.com',
      path: '/v1/public/yql?' + queryString
    }

    http.get(options, function (res) {
      var data = ''
      res
        .setEncoding('utf8')
        .on('data', function (chunk) {
          data += chunk
        })
        .on('end', function (){
          try{
            data = JSON.parse(data)
            fulfill({
              results: data.query.results.quote,
              count: data.query.count
            })
          } catch(err) {
            reject({
              error : err
            })
          }
        })
    })
  })
}