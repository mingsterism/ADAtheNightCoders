var pyramid = require('./index')
  , assert = require('assert')

describe('pyramid', function () {

  it('fails for invalid objects', function () {
    assert.throws(function () {
      pyramid({name: 'foo'}, {width: 100})
    })

    assert.throws(function () {
      pyramid({height: 'foo'}, {width: 100})
    })

    assert.throws(function () {
      pyramid({width: 'foo'}, {height: 100})
    })

    assert.throws(function () {
      pyramid({width: 100, height: 100}, {width: 100})
    })
  })

  it('stacks with largest at the base', function () {
    var stacked = pyramid({id: 1, width: 100, height: 100},
                          {id: 2, width: 200, height: 100},
                          {id: 3, width: 100, height: 100})

    assert.equal(stacked[0].id, 2)
  })

  it('stacks with smallest at the top', function () {
    var stacked = pyramid({id: 1, width: 10, height: 10},
                          {id: 2, width: 200, height: 100},
                          {id: 3, width: 100, height: 100})

    assert.equal(stacked[stacked.length - 1].id, 1)
  })

  it('stacks in order', function () {
    var stacked = pyramid({id: 1, width: 10, height: 10},
                          {id: 2, width: 1000, height: 100},
                          {id: 3, width: 200, height: 100},
                          {id: 4, width: 100, height: 100})

    assert.equal(stacked[0].id, 2)
    assert.equal(stacked[1].id, 3)
    assert.equal(stacked[2].id, 4)
    assert.equal(stacked[3].id, 1)
  })

})
