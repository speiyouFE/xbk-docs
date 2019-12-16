<template>
  <transition name="dialog-fade" @after-leave="afterLeave">
    <div class="sc-dialog__wrapper" v-show="visible" @click.self="handleWrapperClick" :id="'dialog_' + uuid">
      <div class="sc-dialog" :class="[{ 'is-fullscreen': fullscreen, 'is-center': center }, customClass]" ref="dialog" :style="style">
        <div class="sc-dialog__header">
          <slot name="title" v-if="$slots.title">
            <span class="sc-dialog__title">{{ title }}</span>
          </slot>
          <button type="button" class="sc-dialog__headerbtn" v-if="showClose" @click="handleClose">
            <sc-icon class="sc-dialog__close sc-icon-close" style="width:16px"></sc-icon>
          </button>
        </div>
        <div class="sc-dialog__body" v-if="rendered"><slot></slot></div>
        <div class="sc-dialog__footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import popup from '../utils/popup'
import emitter from '../mixins/emitter'
import uuid from '../utils/util'
export default {
  name: 'ScDialog',
  mixins: [uuid, popup, emitter],
  props: {
    title: {
      type: String,
      default: ''
    },

    modal: {
      type: Boolean,
      default: true
    },

    modalAppendToBody: {
      type: Boolean,
      default: true
    },

    appendToBody: {
      type: Boolean,
      default: true
    },

    lockScroll: {
      type: Boolean,
      default: true
    },

    closeOnClickModal: {
      type: Boolean,
      default: false
    },

    closeOnPressEscape: {
      type: Boolean,
      default: true
    },

    showClose: {
      type: Boolean,
      default: true
    },

    width: String,

    fullscreen: Boolean,

    customClass: {
      type: String,
      default: ''
    },

    beforeClose: Function,
    center: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      closed: false
    }
  },
  computed: {
    style() {
      let style = {}
      if (!this.fullscreen) {
        // style.marginTop = this.top
        if (this.width) {
          style.width = this.width
        }
      }
      return style
    }
  },
  watch: {
    visible(val) {
      if (val) {
        this.closed = false
        this.$emit('open')
        this.$el.addEventListener('scroll', this.updatePopper)
        this.$nextTick(() => {
          this.$refs.dialog.scrollTop = 0
        })
        if (this.appendToBody) {
          document.body.appendChild(this.$el)
        }
      } else {
        this.$el.removeEventListener('scroll', this.updatePopper)
        if (!this.closed) this.$emit('close')
      }
    }
  },

  mounted() {
    if (this.visible) {
      this.rendered = true
      this.open()
      if (this.appendToBody) {
        document.body.appendChild(this.$el)
      }
    }
  },

  destroyed() {
    // if appendToBody is true, remove DOM node after destroy
    if (this.appendToBody && this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el)
    }
  },
  methods: {
    handleWrapperClick() {
      if (!this.closeOnClickModal) return
      this.handleClose()
    },
    handleClose() {
      if (typeof this.beforeClose === 'function') {
        this.beforeClose(this.hide)
      } else {
        this.hide()
      }
    },
    hide(cancel) {
      if (cancel !== false) {
        this.$emit('update:visible', false)
        this.$emit('close')
        this.closed = true
      }
    },
    updatePopper() {
      this.broadcast('ScSelectDropdown', 'updatePopper')
      this.broadcast('ScDropdownMenu', 'updatePopper')
    },
    afterLeave() {
      this.$emit('closed')
    }
  }
}
</script>
