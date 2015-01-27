
const index = require('./')
const test  = require('tape')

test('it should create an immutable object', function(t) {
  t.plan(2)
  var baz = index({foo: 'bar'})
  t.equal(baz.foo, 'bar')
  baz.bin = 3
  t.equal(baz.bin, undefined)
})
