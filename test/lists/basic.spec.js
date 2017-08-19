var harness = require('../jsdom-harness')

harness('lf-list: basic', function(LARF, clearDOM, test) {

  test('renders basic list', function(t) {
    t.plan(1)
    clearDOM()
    LARF({
      mount: 'body',
      template: '<ul id="el"><li lf-for="i:items"></li></ul>',
      model: {
        items: ['first', 'second', 'third']
      }
    })
    t.equal(window.document.querySelectorAll('li').length, 3, 'renders three "li" elements')
  })

  test('renders list templates', function(t) {
    t.plan(2)
    clearDOM()
    LARF({
      mount: 'body',
      template: '<ul><li class="item" lf-for="i:items">{{i.name}}</li></ul>',
      model: {
        items: [{ name: 'Tomato' }, { name: 'Potato' }]
      }
    })
    var elements = window.document.querySelectorAll('li')
    t.equal(elements[0].textContent, 'Tomato', 'renders first template')
    t.equal(elements[1].textContent, 'Potato', 'renders second element template')
  })
})
