<template>
  <button
    class="sc-button"
    @click="handleClick"
    :disabled="buttonDisabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
    :class="[
      type ? 'sc-button--' + type : '',
      buttonSize ? 'sc-button--' + buttonSize : '',
      {
        'is-disabled': buttonDisabled,
        'is-loading': loading,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle
      },
      customClass
    ]"
    :style="buttonStyle"
  >
    <sc-icon name="loading" v-if="loading"></sc-icon>
    <sc-icon :name="icon" v-if="icon && !loading"></sc-icon>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: 'ScButton',
  inject: {
    scForm: {
      default: ''
    },
    scFormItem: {
      default: ''
    }
  },
  props: {
    type: {
      type: String,
      default: 'default'
    },
    color: {
      type: String,
      default: ''
    },
    size: String,
    icon: {
      type: String,
      default: ''
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    autofocus: Boolean,
    round: Boolean,
    circle: Boolean,
    customClass: {
      type: String,
      default: ''
    }
  },
  computed: {
    _scFormItemSize() {
      return (this.scFormItem || {}).scFormItemSize
    },
    buttonSize() {
      return this.size || this._scFormItemSize || (this.$TAL_SC || {}).size
    },
    buttonDisabled() {
      return this.disabled || (this.scForm || {}).disabled
    },
    buttonStyle() {
      const style = {}
      if (this.color) {
        style.color = this.plain ? this.color : '#fff'
        if (!this.plain) {
          style.background = this.color
        }
        if (this.color.indexOf('gradient') !== -1) {
          style.border = 0
        } else {
          style.borderColor = this.color
        }
      }
      return style
    }
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt)
    }
  }
}
</script>
