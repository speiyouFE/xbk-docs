import Vue from 'vue'
import ToastOptions from './main'

/**
 * Toast factory
 *
 * @param {Object} props
 * @return {Toast}
 */
const Toast = ({ msg = '', icon = '', duration = 3000, position = 'center', modal = true, callback = null, parentNode = document.body, isTip = false }) => {
  let vm = Toast._instance

  if (!vm) {
    const ToastConstructor = Vue.extend(ToastOptions)
    vm = Toast._instance = new ToastConstructor({
      propsData: {
        msg,
        icon,
        duration,
        position,
        modal,
        callback,
        isTip
      }
    }).$mount()
  }

  if (!vm.$el.parentNode) {
    parentNode.appendChild(vm.$el)
  }

  vm.msg = msg
  vm.icon = icon
  vm.duration = icon === 'loading' ? 0 : duration
  vm.position = position
  vm.modal = modal
  vm.callback = callback
  vm.isTip = isTip
  vm.showToast()

  return vm
}

Toast._instance = null

Toast.close = () => {
  const ToastConstructor = Vue.extend(ToastOptions)
  if (Toast._instance instanceof ToastConstructor && Toast._instance.visible) {
    Toast._instance.closeToast()
  }
}
Toast.tip = (msg = '', duration = 3000, modal = true, parentNode = document.body) => {
  return Toast({
    msg,
    duration,
    modal,
    parentNode,
    isTip: true
  })
}
Toast.info = (msg = '', duration = 3000, modal = true, parentNode = document.body) => {
  return Toast({
    icon: 'info-circle',
    msg,
    duration,
    modal,
    parentNode
  })
}

Toast.success = (msg = '成功啦...', duration = 3000, modal = true, parentNode = document.body) => {
  return Toast({
    icon: 'success-circle',
    msg,
    duration,
    modal,
    parentNode
  })
}

Toast.error = (msg = '出错啦...', duration = 3000, modal = true, parentNode = document.body) => {
  return Toast({
    icon: 'error-circle',
    msg,
    duration,
    modal,
    parentNode
  })
}

Toast.loading = (msg = '加载中...', duration = 0, modal = true, parentNode = document.body) => {
  return Toast({
    icon: 'loading',
    msg,
    duration,
    modal,
    parentNode
  })
}

Toast.component = ToastOptions

export default Toast
