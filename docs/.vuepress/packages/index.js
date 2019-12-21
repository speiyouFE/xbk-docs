import Card from './card/index.js'
import Button from './button/index.js'
import Toast from './toast/index.js'
import Lottie from './lottie/index.js'
import Dialog from './dialog/index.js'
import Tabs from './tabs/index.js'
import TabPane from './tab-pane/index.js'
import Input from './input/index.js'
// import Icon from './icon/index.js'
import Select from './select/index.js'
import Option from './select/option.js'
import OptionGroup from './select/option-group.js'
import Scrollbar from './scrollbar/index.js'
import Dropdown from './dropdown/index.js'
import DropdownMenu from './dropdown-menu/index.js'
import DropdownItem from './dropdown-item/index.js'
import Popover from './popover/index.js'
import Countup from './countup/index.js'
import Countdown from './countdown/index.js'
import QrCode from './qrcode/index.js'

const components = [Card, Button, Dialog, Tabs, TabPane, Input, Select, Option, OptionGroup, Scrollbar, Lottie, Dropdown, DropdownMenu, DropdownItem, Popover, Countup, Countdown, QrCode]
const version = '1.0.1'
const install = function(Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
  Vue.prototype.$TAL_SC = {
    size: opts.size || '',
    zIndex: opts.zIndex || 1000
  }
  Vue.prototype.$toast = Toast
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version,
  install,
  Card,
  Button,
  Dialog,
  Tabs,
  TabPane,
  Input,
  Select,
  Option,
  OptionGroup,
  Scrollbar,
  Lottie,
  QrCode
}
