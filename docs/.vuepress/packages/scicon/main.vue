<template>
  <i class="sc-icon" :class="[name ? 'sc-icon-' + name : '', customClass]" @click.self="handleClick"></i>
</template>

<script>
export default {
  name: 'ScIcon',
  props: {
    name: {
      type: String,
      default: ''
    },
    customClass: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleClick() {
      this.$emit('click')
    }
  }
}
</script>
