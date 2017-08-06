var harness = require('./jsdom-harness')

harness('initial', function(LARF, test) {

  test('it renders something', function(t) {
    t.plan(1)
    LARF({
      mount: 'body',
      template: '<div id="el"></div>'
    })
    t.ok(document.querySelector('#el'), 'renders template to body')
  })
})
