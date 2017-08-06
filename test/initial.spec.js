var test = require('tape')
var LARF = require('../src/larf')
var JSDOM = require('jsdom').JSDOM

test('it renders something', function(t) {
  t.plan(1)
  var dom = new JSDOM('<!DOCTYPE html><html><body></body></html>')
  global.window = dom.window
  global.document = dom.window.document
  LARF({
    mount: 'body',
    template: '<div id="el"></div>'
  })
  t.ok(document.querySelector('#el'), 'renders template to body')
})
