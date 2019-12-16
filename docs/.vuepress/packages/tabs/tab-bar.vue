<template>
  <div class="sc-tabs__active-bar" :class="`is-${rootTabs.tabPosition}`" :style="barStyle"></div>
</template>
<script>
import { changeCase } from '../utils/util'

export default {
  name: 'TabBar',

  props: {
    tabs: Array
  },

  inject: ['rootTabs'],

  computed: {
    barStyle: {
      cache: false,
      get() {
        let style = {}
        let offset = 0
        let tabSize = 0
        const difference = 36
        const sizeName = ['top', 'bottom'].indexOf(this.rootTabs.tabPosition) !== -1 ? 'width' : 'height'
        const sizeDir = sizeName === 'width' ? 'x' : 'y'

        this.tabs.every((tab, index) => {
          let $el = this.$parent.$refs.tabs[index]
          if (!$el) {
            return false
          }

          if (!tab.active) {
            offset += $el[`client${changeCase(sizeName, 1)}`]
            return true
          } else {
            tabSize = $el[`client${changeCase(sizeName, 1)}`]
            if (sizeName === 'width' && this.tabs.length > 1) {
              tabSize -= index === 0 || index === this.tabs.length - 1 ? 20 : 40
            }
            return false
          }
        })

        if (sizeName === 'width' && offset !== 0) {
          offset += 20
        }

        const transform = `translate${changeCase(sizeDir, 1)}(${offset + difference / 2}px)`
        style[sizeName] = tabSize - difference + 'px'
        style.transform = transform
        style.msTransform = transform
        style.webkitTransform = transform

        return style
      }
    }
  }
}
</script>
