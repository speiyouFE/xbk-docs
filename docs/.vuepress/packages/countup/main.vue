<template>
  <span></span>
</template>

<script>
import CountUp from './main.js'
export default {
  name: 'ScCountup',
  props: {
    start: {
      type: Boolean,
      default: true
    },
    startnum: {
      validator(val) {
        return /^([0]|[1-9]\d*)(\.\d*)?$/.test(val)
      },
      default: 0
    },
    endnum: {
      validator(val) {
        return /^([0]|[1-9]\d*)(\.\d*)?$/.test(val)
      },
      required: true
    },
    decimals: {
      validator(val) {
        return /^\d*$/.test(val)
      },
      default: 0
    },
    duration: {
      validator(val) {
        return /^([0]|[1-9]\d*)(\.\d*)?$/.test(val)
      },
      default: 2
    },
    useEasing: {
      type: Boolean,
      default: false
    },
    separator: {
      type: String,
      default: ''
    },
    prefix: {
      type: String,
      default: ''
    },
    suffix: {
      type: String,
      default: ''
    },
    callback: {
      type: Function
    }
  },
  data() {
    return {
      instance: null
    }
  },
  watch: {
    start(val) {
      if (val) {
        this.instance.start(() => {
          this.callback && this.callback(this.instance)
        })
      }
    },
    endnum(value) {
      this.instance && this.instance.update && this.instance.update(value)
    }
  },
  mounted() {
    this.init()
  },
  beforeDestroy() {
    this.instance = null
  },
  methods: {
    init() {
      if (!this.instance) {
        const options = {
          decimal: '.',
          useEasing: this.useEasing,
          separator: this.separator,
          prefix: this.prefix,
          suffix: this.suffix
        }
        this.instance = new CountUp(this.$el, this.startnum, this.endnum, this.decimals, this.duration, options)
        if (this.start) {
          this.instance.start(() => {
            this.callback && this.callback(this.instance)
          })
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
span {
  font-size: 60px;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, Helvetica Neue, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
}
</style>
