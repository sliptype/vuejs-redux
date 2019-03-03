var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var index = {
  props: {
    mapDispatchToProps: {
      required: false,
      default: function _default() {
        return {};
      },
      type: Function
    },

    mapStateToProps: {
      required: false,
      default: function _default() {
        return {};
      },
      type: Function
    },

    store: {
      required: true,
      type: Object
    },

    ownProps: {
      required: false,
      type: Object
    }
  },

  data: function data(ctx) {
    return {
      state: ctx.store.getState()
    };
  },

  created: function created() {
    var _this = this;

    this.unsubscribe = this.store.subscribe(function () {
      _this.state = _this.store.getState();
    });
  },
  destroyed: function destroyed() {
    this.unsubscribe();
  },
  render: function render() {
    var nodes = this.$scopedSlots.default(_extends({}, this.mapDispatchToProps(this.store.dispatch)(this.ownProps), this.mapStateToProps(this.state)(this.ownProps)));
    if (Array.isArray(nodes)) {
      return nodes[0];
    } else {
      return nodes;
    }
  }
};

export default index;
