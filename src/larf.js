function str2el(str) {
  var el = window.document.createElement('div')
  el.innerHTML = str.trim()
  return el.firstChild
}

module.exports = function(descriptor) {
  var el = str2el(descriptor.template)
  window.document.querySelector(descriptor.mount).appendChild(el)
}
