var harness = require('../jsdom-harness')

harness('lf-list: basic', function(LARF, test) {

  test('renders basic list', function(t) {
    t.plan(1)
    LARF({
      mount: 'body',
      template: '<ul id="el"><li lf-for="i:items"></li></ul>',
      model: {
        items: ['first', 'second', 'third']
      }
    })
    t.equal(window.document.querySelectorAll('li').length, 3, 'renders three "li" elements')
  })

})