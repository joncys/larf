var test = require('tape')
var JSDOM = require('jsdom').JSDOM
var LARF = require('../src/larf')

var clearDOM = function() {
  var dom = new JSDOM('<!DOCTYPE html><html><body></body></html>')
  global.window = dom.window
  global.document = dom.window.document
}

module.exports = function(groupName, groupCallback) {
  test('LARF: ' + groupName, function(t) {
    groupCallback(LARF, clearDOM, t.test)
  })
}
