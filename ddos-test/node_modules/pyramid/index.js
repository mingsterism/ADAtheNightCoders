var area = function (o) {
  if (!(o.hasOwnProperty('width') && o.hasOwnProperty('height'))) {
    throw new Error('Object needs width and height')
  }
  return o.width * o.height
}

var stack = function () {
  var args =  Array.prototype.slice.call(arguments)

  return args.sort(function (a, b) {
    return area(b) - area(a)
  })
}

module.exports = stack
