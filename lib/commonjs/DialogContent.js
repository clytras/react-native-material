"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _chromaJs = _interopRequireDefault(require("chroma-js"));
var _useSurfaceColor = require("./hooks/use-surface-color");
var _ThemeContext = require("./base/ThemeContext");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const DialogContent = _ref => {
  let {
    children
  } = _ref;
  const theme = (0, _ThemeContext.useTheme)();
  const backgroundColor = (0, _useSurfaceColor.useSurfaceColorValue)(24);
  const scale = (0, _react.useMemo)(() => _chromaJs.default.scale([backgroundColor, theme.palette.surface.on]), [backgroundColor, theme.palette.surface.on]);
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles.container, {
      borderColor: scale(0.08).hex()
    }]
  }, children);
};
const styles = _reactNative.StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingBottom: 20
    // borderTopWidth: 1,
    // borderBottomWidth: 1,
  }
});
var _default = DialogContent;
exports.default = _default;
//# sourceMappingURL=DialogContent.js.map