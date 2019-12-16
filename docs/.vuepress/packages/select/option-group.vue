<template>
  <ul class="sc-select-group__wrap" v-show="visible">
    <li class="sc-select-group__title">{{ label }}</li>
    <li>
      <ul class="sc-select-group">
        <slot></slot>
      </ul>
    </li>
  </ul>
</template>

<script>
import Emitter from '../mixins/emitter'

export default {
  name: 'ScOptionGroup',
  mixins: [Emitter],

  componentName: 'ScOptionGroup',

  props: {
    label: String,
    disabled: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      visible: true
    }
  },

  watch: {
    disabled(val) {
      this.broadcast('ScOption', 'handleGroupDisabled', val)
    }
  },

  created() {
    this.$on('queryChange', this.queryChange)
  },

  mounted() {
    if (this.disabled) {
      this.broadcast('ScOption', 'handleGroupDisabled', this.disabled)
    }
  },

  methods: {
    queryChange() {
      this.visible = this.$children && Array.isArray(this.$children) && this.$children.some(option => option.visible === true)
    }
  }
}
</script>
