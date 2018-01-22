import Button from './components/button'

const chaosUI = {
  Button
}

const install = function (Vue, opts = {}) {
  Object
    .keys(chaosUI)
    .forEach((key) => {
      Vue.component(key, chaosUI[key])
    })
}

console.log(window.Vue)
// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default Object.assign(chaosUI, {install}) // eslint-disable-line no-undef
