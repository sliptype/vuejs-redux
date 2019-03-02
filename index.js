export default {
  props: {
    mapDispatchToProps: {
      required: false,
      default: () => ({}),
      type: Function,
    },

    mapStateToProps: {
      required: false,
      default: () => ({}),
      type: Function,
    },

    store: {
      required: true,
      type: Object,
    },

    ownProps: {
      required: false,
      type: Object,
    },
  },

  data: ctx => ({
    state: ctx.store.getState(),
  }),

  created() {
    this.unsubscribe = this.store.subscribe(() => {
      this.state = this.store.getState()
    })
  },

  destroyed() {
    this.unsubscribe()
  },

  render() {
    const nodes = this.$scopedSlots.default({
      ...this.mapDispatchToProps(this.store.dispatch, this.ownProps),
      ...this.mapStateToProps(this.state, this.ownProps),
    })
    if (Array.isArray(nodes)) {
      return nodes[0]
    } else {
      return nodes
    }
  },
}
