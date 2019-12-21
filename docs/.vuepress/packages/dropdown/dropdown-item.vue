<template>
  <li
    class="sc-dropdown-menu__item"
    :class="{
      'is-disabled': disabled,
      'sc-dropdown-menu__item--divided': divided
    }"
    @click="handleClick"
    :aria-disabled="disabled"
    :tabindex="disabled ? null : -1"
  >
    <!-- <ScIcon :name="icon" v-if="icon" /> -->
    <slot></slot>
  </li>
</template>
<script>
import Emitter from '../mixins/emitter'
// import ScIcon from '../icon'
export default {
  name: 'ScDropdownItem',
  // components: { ScIcon },
  mixins: [Emitter],
  props: {
    value: {},
    disabled: Boolean,
    divided: Boolean,
    icon: String
  },
  methods: {
    handleClick() {
      this.dispatch('ScDropdown', 'menu-item-click', [this.value, this])
    }
  }
}
</script>
