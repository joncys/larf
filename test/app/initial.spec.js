var harness = require('../jsdom-harness')

harness('initial', function(LARF, clearDOM, test) {

  test('it renders something', function(t) {
    t.plan(1)
    clearDOM()
    LARF({
      mount: 'body',
      template: '<div id="el"></div>'
    })
    t.ok(document.querySelector('#el'), 'renders template to body')
  })

  test('it returns model', function(t) {
    t.plan(1)
    clearDOM()
    var app = LARF({
      mount: 'body',
      template: '<div></div>',
      model: {
        name: 'Joseph'
      }
    })
    t.ok(app.name, 'Joseph', 'returns model object')
  })
})
