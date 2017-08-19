function str2el(str) {
  var el = window.document.createElement('div')
  el.innerHTML = str.trim()
  return el.firstChild
}

function toArray(arrayLike) {
  return Array.prototype.slice.call(arrayLike)
}

function select(obj, path) {
  var names = path.split('.')
  while (obj !== undefined && names.length > 0) {
    obj = obj[names.shift()]
  }
  return obj
}

function element(el, model) {
  if (el.nodeType === window.Node.TEXT_NODE && el.textContent.trim() !== '') {
    var template = el.textContent
    el.textContent = template.replace(/{{(.+)}}/g, function(match, g1) {
      return select(model, g1)
    })
  } else if (el.nodeType === window.Node.ELEMENT_NODE) {
    toArray(el.attributes).forEach(function(attr) {
      switch (attr.name.toLowerCase()) {
        case 'lf-for':
          el.removeAttribute('lf-for')
          var parent = el.parentNode
          var parts = attr.value.split(':')
          var list = model[parts[1]]
          list.forEach(function(item) {
            var cloned = el.cloneNode(true)
            var itemModel = {}
            itemModel[parts[0]] = item
            element(cloned, itemModel)
            parent.appendChild(cloned)
          })
          parent.removeChild(el)
          break
      }
    })
    toArray(el.childNodes).forEach(function(child) {
      element(child, model)
    })
  }
}

module.exports = function(descriptor) {
  var el = str2el(descriptor.template)
  window.document.querySelector(descriptor.mount).appendChild(el)
  element(el, descriptor.model)
}
