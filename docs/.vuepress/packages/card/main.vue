<template>
  <div class="sc-card" :class="[{ 'is-shadow': shadow }, customClass, classes]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ScCard',
  props: {
    header: {},
    bodyStyle: {},
    shadow: {
      type: Boolean
    },
    type: {
      type: String
    },
    start: {
      type: Boolean,
      default: false
    },
    customClass: {
      type: String,
      default: ''
    }
  },
  computed: {
    classes() {
      let classes = this.start ? 'is-start' : 'is-stop'
      return classes
    }
  }
}
</script>
