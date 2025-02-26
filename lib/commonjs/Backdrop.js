"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _Surface = _interopRequireDefault(require("./Surface"));
var _useStyles = require("./hooks/use-styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const Backdrop = _ref => {
  let {
    revealed = false,
    header,
    headerHeight,
    backLayer,
    backLayerHeight,
    subheader,
    subheaderHeight,
    style,
    headerContainerStyle,
    backLayerContainerStyle,
    frontLayerContainerStyle,
    subheaderContainerStyle,
    children
  } = _ref;
  const [currentHeaderHeight, setCurrentHeaderHeight] = (0, _react.useState)(headerHeight ?? 0);
  const [currentBackLayerHeight, setCurrentBackLayerHeight] = (0, _react.useState)(backLayerHeight ?? 0);
  const [currentSubheaderHeight, setCurrentSubheaderHeight] = (0, _react.useState)(subheaderHeight ?? 0);
  const styles = (0, _useStyles.useStyles)(_ref2 => {
    let {
      palette
    } = _ref2;
    return {
      container: {
        flex: 1,
        backgroundColor: palette.primary.main,
        overflow: 'hidden'
      },
      frontLayer: {
        position: 'absolute',
        start: 0,
        end: 0,
        bottom: 0,
        backgroundColor: palette.surface.main,
        borderTopStartRadius: 16,
        borderTopEndRadius: 16,
        borderBottomStartRadius: 0,
        borderBottomEndRadius: 0,
        elevation: 1
      }
    };
  });
  const animated = (0, _react.useRef)(new _reactNative.Animated.Value(revealed ? 1 : 0)).current;
  (0, _react.useEffect)(() => {
    _reactNative.Animated.timing(animated, {
      toValue: revealed ? 1 : 0,
      duration: 300,
      useNativeDriver: true
    }).start();
  }, [revealed]);
  const dimensions = (0, _reactNative.useWindowDimensions)();
  const translateY = animated.interpolate({
    inputRange: [0, 1],
    outputRange: [0, dimensions.height < currentHeaderHeight + currentBackLayerHeight ? dimensions.height - currentHeaderHeight - currentSubheaderHeight : currentBackLayerHeight]
  });
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles.container, style]
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [headerContainerStyle, {
      height: headerHeight
    }],
    onLayout: e => {
      if (!headerHeight) setCurrentHeaderHeight(e.nativeEvent.layout.height);
    }
  }, header), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [backLayerContainerStyle, {
      height: backLayerHeight
    }],
    onLayout: e => {
      if (!backLayerHeight) setCurrentBackLayerHeight(e.nativeEvent.layout.height);
    }
  }, backLayer), /*#__PURE__*/_react.default.createElement(_Surface.default, {
    style: [styles.frontLayer, {
      top: currentHeaderHeight,
      transform: [{
        translateY
      }]
    }, frontLayerContainerStyle]
  }, subheader && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [subheaderContainerStyle, {
      height: subheaderHeight
    }],
    onLayout: e => {
      if (!subheaderHeight) setCurrentSubheaderHeight(e.nativeEvent.layout.height);
    }
  }, subheader), children));
};
var _default = Backdrop;
exports.default = _default;
//# sourceMappingURL=Backdrop.js.map