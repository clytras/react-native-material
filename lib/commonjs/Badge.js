"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _Text = _interopRequireDefault(require("./Text"));
var _usePaletteColor = require("./hooks/use-palette-color");
var _useStyles = require("./hooks/use-styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const Badge = _ref => {
  let {
    label,
    showZero = false,
    max = 99,
    visible = true,
    color = 'secondary',
    tintColor,
    style,
    labelStyle,
    children
  } = _ref;
  const palette = (0, _usePaletteColor.usePaletteColor)(color, tintColor);
  const styles = (0, _useStyles.useStyles)(() => ({
    container: {
      minWidth: 20,
      height: 20,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 6,
      backgroundColor: palette.main,
      borderRadius: 10
    }
  }), [palette]);
  const isVisible = (0, _react.useMemo)(() => label === 0 ? visible && showZero : visible, [label, showZero, visible]);
  const animated = (0, _react.useRef)(new _reactNative.Animated.Value(isVisible ? 1 : 0)).current;
  (0, _react.useEffect)(() => {
    _reactNative.Animated.timing(animated, {
      toValue: isVisible ? 1 : 0,
      duration: 200,
      useNativeDriver: true
    }).start();
  }, [isVisible]);
  const getLabel = () => {
    switch (typeof label) {
      case 'number':
      case 'string':
        return /*#__PURE__*/_react.default.createElement(_Text.default, {
          variant: "body2",
          style: [{
            color: palette.on
          }, labelStyle]
        }, typeof label === 'number' && label > max ? `${max}+` : label);
      case 'function':
        return label({
          color: palette.on
        });
      default:
        return label;
    }
  };
  return /*#__PURE__*/_react.default.createElement(_reactNative.Animated.View, {
    style: [styles.container, {
      transform: [{
        scale: animated
      }]
    }, style]
  }, getLabel(), children);
};
var _default = Badge;
exports.default = _default;
//# sourceMappingURL=Badge.js.map