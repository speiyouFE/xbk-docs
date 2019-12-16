<template>
  <div class="sc-select-dropdown sc-popper" :class="[{ 'is-multiple': $parent.multiple }, popperClass, customClass]" :style="{ minWidth: minWidth }">
    <slot></slot>
  </div>
</template>

<script>
import popper from '../utils/vue-popper'

export default {
  name: 'ScSelectDropdown',
  componentName: 'ScSelectDropdown',
  mixins: [popper],
  props: {
    placement: {
      default: 'bottom-start'
    },
    boundariesPadding: {
      default: 0
    },
    popperOptions: {
      default() {
        return {
          gpuAcceleration: false
        }
      }
    },
    visibleArrow: {
      default: true
    },
    appendToBody: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      minWidth: ''
    }
  },
  computed: {
    popperClass() {
      return this.$parent.popperClass
    },
    customClass() {
      return this.$parent.dropdownClass
    }
  },
  watch: {
    '$parent.inputWidth'() {
      this.minWidth = this.$parent.$el.getBoundingClientRect().width + 'px'
    }
  },
  mounted() {
    this.referenceElm = this.$parent.$refs.reference.$el
    this.$parent.popperElm = this.popperElm = this.$el
    this.$on('updatePopper', () => {
      if (this.$parent.visible) this.updatePopper()
    })
    this.$on('destroyPopper', this.destroyPopper)
  }
}
</script>
