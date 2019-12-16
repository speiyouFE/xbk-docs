<template>
  <div class="sc-toast" :class="['is-' + position, tipsClass]" :id="'toast_' + uuid" v-show="visible">
    <div class="sc-toast__content" v-if="$slots.default">
      <slot></slot>
    </div>
    <div class="sc-toast__content" v-else>
      <i v-if="icon" class="sc-icon" :class="iconsClass"></i>
      <div class="sc-toast__content--text" :class="icon ? 'sc-toast__content--text-icon' : ''" v-if="msg" v-text="msg"></div>
    </div>
  </div>
</template>

<script>
import popup from '../utils/popup'
import uuid from '../utils/util'
export default {
  name: 'ScToast',
  mixins: [uuid, popup],
  props: {
    modal: {
      default: true
    },
    icon: {
      type: String,
      default: ''
    },
    msg: {
      type: [String, Number],
      default: ''
    },
    duration: {
      type: Number,
      default: 0
    },
    position: {
      // top, left, bottom
      type: String,
      default: 'center'
    },
    callback: Function,
    visible: Boolean,
    isTip: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    iconsClass() {
      let _icon
      if (this.icon === 'loading') {
        _icon = 'sc-icon-' + this.icon
      } else {
        _icon = 'sc-toast__content--icon sc-icon-' + this.icon
      }
      return _icon
    },
    tipsClass() {
      let tipClass = ''
      if (this.isTip) {
        tipClass = 'sc-toast--tip'
      }
      return tipClass
    }
  },
  beforeDestroy() {
    if (this.$_timer) {
      clearTimeout(this.$_timer)
    }
    if (this.visible) {
      this.closeToast()
    }
  },
  methods: {
    fire() {
      if (this.$_timer) {
        clearTimeout(this.$_timer)
      }
      if (this.visible && this.duration) {
        this.$_timer = setTimeout(() => {
          this.closeToast()
        }, this.duration)
      }
    },
    showToast() {
      this.visible = true
      this.fire()
    },
    closeToast() {
      this.visible = false
      typeof this.callback == 'function' && this.callback()
    }
  }
}
</script>
