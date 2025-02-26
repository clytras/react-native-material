"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTheme = exports.ThemeProvider = exports.ThemeContext = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _defaultTheme = require("./defaultTheme");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const ThemeContext = /*#__PURE__*/(0, _react.createContext)(_defaultTheme.defaultTheme);
exports.ThemeContext = ThemeContext;
const useTheme = () => (0, _react.useContext)(ThemeContext);
exports.useTheme = useTheme;
const ThemeProvider = _ref => {
  let {
    theme,
    children
  } = _ref;
  const colorScheme = (0, _reactNative.useColorScheme)();
  const value = (0, _react.useMemo)(() => theme ? theme : colorScheme === 'dark' ? _defaultTheme.darkTheme : _defaultTheme.defaultTheme, [colorScheme, theme]);
  return /*#__PURE__*/_react.default.createElement(ThemeContext.Provider, {
    value: value
  }, children);
};
exports.ThemeProvider = ThemeProvider;
//# sourceMappingURL=ThemeContext.js.map