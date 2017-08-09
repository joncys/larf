function str2el(str) {
  var el = window.document.createElement('div')
  el.innerHTML = str.trim()
  return el.firstChild
}

function toArray(arrayLike) {
  return Array.prototype.slice.call(arrayLike)
}

function element(el, model) {
  if (el.nodeType === window.Node.ELEMENT_NODE) {
    toArray(el.attributes).forEach(function(attr) {
      switch (attr.name.toLowerCase()) {
        case 'lf-for':
          var parent = el.parentNode
          var parts = attr.value.split(':')
          var list = model[parts[1]]
          list.forEach(function(item) {
            var cloned = el.cloneNode(true)
            parent.appendChild(cloned)
          })
          parent.removeChild(el)
          break
      }
    })
    toArray(el.children).forEach(function(child) {
      element(child, model)
    })
  }
}

module.exports = function(descriptor) {
  var el = str2el(descriptor.template)
  window.document.querySelector(descriptor.mount).appendChild(el)
  element(el, descriptor.model)
}
