'use strict';

exports.__esModule = true;

var _routerWarning = require('./routerWarning');

var _routerWarning2 = _interopRequireDefault(_routerWarning);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var object = _react2.default.PropTypes.object;

/**
 * The RouteContext mixin provides a convenient way for route
 * components to set the route in context. This is needed for
 * routes that render elements that want to use the Lifecycle
 * mixin to prevent transitions.
 */

var RouteContext = {

  propTypes: {
    route: object.isRequired
  },

  childContextTypes: {
    route: object.isRequired
  },

  getChildContext: function getChildContext() {
    return {
      route: this.props.route
    };
  },
  componentWillMount: function componentWillMount() {
    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'The `RouteContext` mixin is deprecated. You can provide `this.props.route` on context with your own `contextTypes`. http://tiny.cc/router-routecontextmixin') : void 0;
  }
};

exports.default = RouteContext;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3B1YmxpYy9yZWFjdC1yb3V0ZXIvbGliL1JvdXRlQ29udGV4dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQSxRQUFRLFVBQVIsR0FBcUIsSUFBckI7O0FBRUEsSUFBSSxpQkFBaUIsUUFBUSxpQkFBUixDQUFyQjs7QUFFQSxJQUFJLGtCQUFrQix1QkFBdUIsY0FBdkIsQ0FBdEI7O0FBRUEsSUFBSSxTQUFTLFFBQVEsT0FBUixDQUFiOztBQUVBLElBQUksVUFBVSx1QkFBdUIsTUFBdkIsQ0FBZDs7QUFFQSxTQUFTLHNCQUFULENBQWdDLEdBQWhDLEVBQXFDO0FBQUUsU0FBTyxPQUFPLElBQUksVUFBWCxHQUF3QixHQUF4QixHQUE4QixFQUFFLFNBQVMsR0FBWCxFQUFyQztBQUF3RDs7QUFFL0YsSUFBSSxTQUFTLFFBQVEsT0FBUixDQUFnQixTQUFoQixDQUEwQixNQUF2Qzs7QUFFQTs7Ozs7OztBQU9BLElBQUksZUFBZTs7QUFFakIsYUFBVztBQUNULFdBQU8sT0FBTztBQURMLEdBRk07O0FBTWpCLHFCQUFtQjtBQUNqQixXQUFPLE9BQU87QUFERyxHQU5GOztBQVVqQixtQkFBaUIsU0FBUyxlQUFULEdBQTJCO0FBQzFDLFdBQU87QUFDTCxhQUFPLEtBQUssS0FBTCxDQUFXO0FBRGIsS0FBUDtBQUdELEdBZGdCO0FBZWpCLHNCQUFvQixTQUFTLGtCQUFULEdBQThCO0FBQ2hELFlBQVEsR0FBUixDQUFZLFFBQVosS0FBeUIsWUFBekIsR0FBd0MsQ0FBQyxHQUFHLGdCQUFnQixPQUFwQixFQUE2QixLQUE3QixFQUFvQyw2SkFBcEMsQ0FBeEMsR0FBNk8sS0FBSyxDQUFsUDtBQUNEO0FBakJnQixDQUFuQjs7QUFvQkEsUUFBUSxPQUFSLEdBQWtCLFlBQWxCO0FBQ0EsT0FBTyxPQUFQLEdBQWlCLFFBQVEsU0FBUixDQUFqQiIsImZpbGUiOiJSb3V0ZUNvbnRleHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfcm91dGVyV2FybmluZyA9IHJlcXVpcmUoJy4vcm91dGVyV2FybmluZycpO1xuXG52YXIgX3JvdXRlcldhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcm91dGVyV2FybmluZyk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIG9iamVjdCA9IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMub2JqZWN0O1xuXG4vKipcbiAqIFRoZSBSb3V0ZUNvbnRleHQgbWl4aW4gcHJvdmlkZXMgYSBjb252ZW5pZW50IHdheSBmb3Igcm91dGVcbiAqIGNvbXBvbmVudHMgdG8gc2V0IHRoZSByb3V0ZSBpbiBjb250ZXh0LiBUaGlzIGlzIG5lZWRlZCBmb3JcbiAqIHJvdXRlcyB0aGF0IHJlbmRlciBlbGVtZW50cyB0aGF0IHdhbnQgdG8gdXNlIHRoZSBMaWZlY3ljbGVcbiAqIG1peGluIHRvIHByZXZlbnQgdHJhbnNpdGlvbnMuXG4gKi9cblxudmFyIFJvdXRlQ29udGV4dCA9IHtcblxuICBwcm9wVHlwZXM6IHtcbiAgICByb3V0ZTogb2JqZWN0LmlzUmVxdWlyZWRcbiAgfSxcblxuICBjaGlsZENvbnRleHRUeXBlczoge1xuICAgIHJvdXRlOiBvYmplY3QuaXNSZXF1aXJlZFxuICB9LFxuXG4gIGdldENoaWxkQ29udGV4dDogZnVuY3Rpb24gZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgIHJldHVybiB7XG4gICAgICByb3V0ZTogdGhpcy5wcm9wcy5yb3V0ZVxuICAgIH07XG4gIH0sXG4gIGNvbXBvbmVudFdpbGxNb3VudDogZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyAoMCwgX3JvdXRlcldhcm5pbmcyLmRlZmF1bHQpKGZhbHNlLCAnVGhlIGBSb3V0ZUNvbnRleHRgIG1peGluIGlzIGRlcHJlY2F0ZWQuIFlvdSBjYW4gcHJvdmlkZSBgdGhpcy5wcm9wcy5yb3V0ZWAgb24gY29udGV4dCB3aXRoIHlvdXIgb3duIGBjb250ZXh0VHlwZXNgLiBodHRwOi8vdGlueS5jYy9yb3V0ZXItcm91dGVjb250ZXh0bWl4aW4nKSA6IHZvaWQgMDtcbiAgfVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gUm91dGVDb250ZXh0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107Il19