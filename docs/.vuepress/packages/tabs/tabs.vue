<script>
import TabNav from './tab-nav'

export default {
  name: 'ScTabs',

  components: {
    TabNav
  },

  props: {
    type: String,
    activeName: String,
    closable: Boolean,
    addable: Boolean,
    value: {},
    editable: Boolean,
    tabPosition: {
      type: String,
      default: 'top'
    },
    beforeLeave: Function,
    stretch: Boolean,
    customClass: {
      type: String,
      default: ''
    }
  },

  provide() {
    return {
      rootTabs: this
    }
  },

  data() {
    return {
      currentName: this.value || this.activeName,
      panes: []
    }
  },

  watch: {
    activeName(value) {
      this.setCurrentName(value)
    },
    value(value) {
      this.setCurrentName(value)
    },
    currentName() {
      if (this.$refs.nav) {
        this.$nextTick(() => {
          this.$refs.nav.scrollToActiveTab()
        })
      }
    }
  },
  created() {
    if (!this.currentName) {
      this.setCurrentName('0')
    }
  },
  methods: {
    handleTabClick(tab, tabName, event) {
      if (tab.disabled) return
      this.setCurrentName(tabName)
      this.$emit('tab-click', tab, event)
    },
    handleTabRemove(pane, ev) {
      if (pane.disabled) return
      ev.stopPropagation()
      this.$emit('edit', pane.name, 'remove')
      this.$emit('tab-remove', pane.name)
    },
    handleTabAdd() {
      this.$emit('edit', null, 'add')
      this.$emit('tab-add')
    },
    setCurrentName(value) {
      const changeCurrentName = () => {
        this.currentName = value
        this.$emit('input', value)
      }
      if (this.currentName !== value && this.beforeLeave) {
        const before = this.beforeLeave(value, this.currentName)
        if (before && before.then) {
          before.then(() => {
            changeCurrentName()

            this.$refs.nav && this.$refs.nav.removeFocus()
          })
        } else if (before !== false) {
          changeCurrentName()
        }
      } else {
        changeCurrentName()
      }
    },
    addPanes(item) {
      const index = this.$slots.default
        .filter(item => {
          return (item.elm.nodeType === 1 && /\bsc-tab__pane\b/.test(item.elm.className)) || item.elm.nodeType === 8
        })
        .indexOf(item.$vnode)
      this.panes.splice(index, 0, item)
    },
    removePanes(item) {
      const panes = this.panes
      const index = panes.indexOf(item)
      if (index > -1) {
        panes.splice(index, 1)
      }
    }
  },
  render() {
    let { type, handleTabClick, handleTabRemove, handleTabAdd, currentName, panes, editable, addable, tabPosition, stretch, customClass } = this

    const newButton =
      editable || addable ? (
        <span
          class="sc-tabs__new-tab"
          on-click={handleTabAdd}
          tabindex="0"
          on-keydown={ev => {
            if (ev.keyCode === 13) {
              handleTabAdd()
            }
          }}
        >
          <i class="sc-icon-plus"></i>
        </span>
      ) : null

    const navData = {
      props: {
        currentName,
        onTabClick: handleTabClick,
        onTabRemove: handleTabRemove,
        editable,
        type,
        panes,
        stretch,
        customClass
      },
      ref: 'nav'
    }
    const header = (
      <div class={['sc-tabs__header', `is-${tabPosition}`]}>
        {newButton}
        <tab-nav {...navData}></tab-nav>
      </div>
    )
    const panels = <div class="sc-tabs__content">{this.$slots.default}</div>

    return (
      <div
        class={{
          'sc-tabs': true,
          'sc-tabs--card': type === 'card',
          [`sc-tabs--${tabPosition}`]: true,
          'sc-tabs--border-card': type === 'border-card',
          [`${customClass}`]: true
        }}
      >
        {tabPosition !== 'bottom' ? [header, panels] : [panels, header]}
      </div>
    )
  }
}
</script>
