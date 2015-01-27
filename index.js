module.exports = nwFn 
 
function nwFn(obj) {
  var res = {}
  Object.keys(obj).forEach(function(key) {
    const sym = Symbol(key)
    Object.defineProperty(res, key, {
      get: getterFn(sym),
      set: setterFn(sym)
    })
    res[key] = obj[key]
  })
  return Object.freeze(res)
}
 
function setterFn(key) {
  var self = this
  return function(val) {
    self[key] = val 
  }
}
 
function getterFn(key) {
  var self = this
  return function(val) {
    return self[key]
  }
}
