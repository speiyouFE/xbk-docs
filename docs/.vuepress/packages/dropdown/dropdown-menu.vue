<template>
  <transition name="sc-zoom-in-top" @after-leave="doDestroy">
    <ul class="sc-dropdown-menu sc-popper" :class="[size && `sc-dropdown-menu--${size}`]" v-show="showPopper">
      <slot></slot>
    </ul>
  </transition>
</template>
<script>
import Popper from '../utils/vue-popper'
export default {
  name: 'ScDropdownMenu',
  componentName: 'ScDropdownMenu',
  mixins: [Popper],
  props: {
    visibleArrow: {
      type: Boolean,
      default: true
    },
    arrowOffset: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      size: this.dropdown.dropdownSize
    }
  },
  inject: ['dropdown'],
  watch: {
    'dropdown.placement': {
      immediate: true,
      handler(val) {
        this.currentPlacement = val
      }
    }
  },
  created() {
    this.$on('updatePopper', () => {
      if (this.showPopper) this.updatePopper()
    })
    this.$on('visible', val => {
      this.showPopper = val
    })
  },
  mounted() {
    this.dropdown.popperElm = this.popperElm = this.$el
    this.referenceElm = this.dropdown.$el
    this.dropdown.initDomOperation()
  }
}
</script>
