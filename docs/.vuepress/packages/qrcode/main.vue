<template>
  <canvas ref="sealqrcode" :style="styleRadius"></canvas>
</template>

<script>
import QR from 'qrious'
export default {
  name: 'ScQrcode',
  props: {
    radius: {
      type: Number,
      default: 6
    },
    logo: {
      type: String,
      default: ''
    },
    background: {
      type: String,
      default: '#ffffff'
    },
    backgroundAlpha: {
      type: Number,
      default: 1
    },
    color: {
      type: String,
      default: 'black'
    },
    colorAlpha: {
      type: Number,
      default: 1
    },
    level: {
      type: String,
      default: 'L'
    },
    mime: {
      type: String,
      default: 'image/png'
    },
    padding: {
      type: Number,
      default: 10
    },
    size: {
      type: Number,
      default: 180
    },
    value: {
      type: String,
      required: true
    }
  },
  data() {
    return { qrious: null }
  },

  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    styleRadius() {
      if (this.radius && this.padding >= 5) {
        return {
          borderRadius: `${this.radius}px`
        }
      }
    },
    styles() {
      return {
        width: `${this.size}px`,
        height: `${this.size}px`
      }
    }
  },
  watch: {
    background() {
      this.qrious.background = this.background
    },
    backgroundAlpha() {
      this.qrious.backgroundAlpha = this.backgroundAlpha
    },
    color() {
      this.qrious.foreground = this.color
    },
    foregroundAlpha() {
      this.qrious.foregroundAlpha = this.colorAlpha
    },
    level() {
      this.qrious.level = this.level
    },
    mime() {
      this.qrious.mime = this.mime
    },
    padding() {
      this.qrious.padding = this.padding
    },
    size() {
      this.qrious.size = this.size
    },
    value() {
      this.qrious.value = this.value
    },
    logo() {
      this.qrious.logo = this.logo
    }
  },
  mounted() {
    const element = this.$refs.sealqrcode
    const background = this.background
    const backgroundAlpha = this.backgroundAlpha
    const foreground = this.color
    const foregroundAlpha = this.colorAlpha
    const level = this.level
    const mime = this.mime
    // const padding = this.padding
    const size = this.size
    const value = this.value
    // const logo = this.logo

    this.qrious = new QR({
      element,
      background,
      backgroundAlpha,
      foreground,
      foregroundAlpha,
      level,
      mime,

      size,
      value
    })
  }
}
</script>
<style lang="scss">
.sc-qrcode {
  display: inline-block;
  canvas {
    display: block;
  }
}
</style>
