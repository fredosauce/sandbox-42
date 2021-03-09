webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_HeroBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/HeroBox */ \"./components/HeroBox.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! node-fetch */ \"./node_modules/node-fetch/browser.js\");\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Ticker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Ticker */ \"./components/Ticker.js\");\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/NavBar */ \"./components/NavBar.jsx\");\n/* harmony import */ var _sandbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sandbox */ \"./pages/sandbox.jsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n/* harmony import */ var _public_work__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../public/work */ \"./public/work.js\");\n\n\nvar _jsxFileName = \"/Users/fredo/Desktop/projects/sandbox-42/pages/index.jsx\",\n    _this = undefined;\n\n\n\n\n\n\n\n\n\n\n\n\nvar List = function List(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n    \"class\": \"pl-4 flex flex-row space-x-6\",\n    children: _public_work__WEBPACK_IMPORTED_MODULE_9__[\"workItems\"].map(function (item, index) {\n      var workList = _public_work__WEBPACK_IMPORTED_MODULE_9__[\"workItems\"].map(function (item, index) {\n        var primaryMediaPath = item.media[0];\n        var key = 'work-' + index;\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          \"class\": \"relative\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {\n            href: '/work/' + item.id,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_8__[\"motion\"].div, {\n              \"class\": \"overflow-hidden relative\",\n              layoutId: item.id + 'Border',\n              layout: true,\n              transition: {\n                duration: 0.35\n              },\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                \"class\": \"work-media-wrapper absolute z-0\",\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_8__[\"motion\"].img, {\n                  layoutId: item.id + 'Media',\n                  \"class\": \"gray-filter relative\",\n                  src: primaryMediaPath\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 28,\n                  columnNumber: 19\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 27,\n                columnNumber: 17\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                \"class\": \"flex flex-col flex-nowrap items-center border-white border-2 work-item-wrapper cursor-pointer hover:border-yellow-200 hover:text-shadow hover:scale-105 duration-400 ease-out space-x-4 bg-black bg-opacity-70 hover:bg-opacity-30 relative z-10 justify-center\",\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                  \"class\": \"work-title-wrapper pt-6\",\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n                    \"class\": \"text-2xl font-semibold cursor-pointer \",\n                    dangerouslySetInnerHTML: {\n                      __html: item.title\n                    }\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 36,\n                    columnNumber: 21\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 35,\n                  columnNumber: 19\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 34,\n                columnNumber: 17\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 21,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 20,\n            columnNumber: 13\n          }, _this)\n        }, key, false, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 11\n        }, _this);\n      });\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 3\n  }, _this);\n};\n\n_c = List;\n\nvar HomePage = function HomePage(_ref) {\n  var workItems = _ref.workItems;\n  // const [coins, setCoins] = useState([]);\n  // console.log('data from homepage: ', data);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    \"class\": \"flex flex-col px-6 mx-auto\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      \"class\": \"hero-section outer-wrapper py-12\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          \"class\": \"text-2xl mb-24 pl-4\",\n          children: [\"Hi! I'm Fredo,\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 69,\n            columnNumber: 13\n          }, _this), \"a creative technologist\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 71,\n            columnNumber: 13\n          }, _this), \"based in Los Angeles\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          \"class\": \"text-2xl pl-4\",\n          children: \"I specialize in front-end software engineering and creative web development.\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      \"class\": \"work-section outer-wrapper\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        \"class\": \"text-2xl my-12 pl-4\",\n        children: \"Check out some of my work:\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 56,\n    columnNumber: 5\n  }, _this);\n};\n\n_c2 = HomePage;\n// useEffect(async () => {\n//   await getCoinDataWithFetch();\n//   console.log(coins);\n// }, []);\n// const getCoinDataWithFetch = async () => {\n//   console.log(data);\n//   setCoins(data);\n// };\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"List\");\n$RefreshReg$(_c2, \"HomePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4PzcwYzUiXSwibmFtZXMiOlsiTGlzdCIsInByb3BzIiwid29ya0l0ZW1zIiwibWFwIiwiaXRlbSIsImluZGV4Iiwid29ya0xpc3QiLCJwcmltYXJ5TWVkaWFQYXRoIiwibWVkaWEiLCJrZXkiLCJpZCIsImR1cmF0aW9uIiwiX19odG1sIiwidGl0bGUiLCJIb21lUGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRDtBQUFBLHNCQUNYO0FBQUksYUFBTSw4QkFBVjtBQUFBLGNBQ0dDLHNEQUFTLENBQUNDLEdBQVYsQ0FBYyxVQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBaUI7QUFDOUIsVUFBTUMsUUFBUSxHQUFHSixzREFBUyxDQUFDQyxHQUFWLENBQWMsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWlCO0FBQzlDLFlBQU1FLGdCQUFnQixHQUFHSCxJQUFJLENBQUNJLEtBQUwsQ0FBVyxDQUFYLENBQXpCO0FBQ0EsWUFBTUMsR0FBRyxHQUFHLFVBQVVKLEtBQXRCO0FBQ0EsNEJBQ0U7QUFBSSxtQkFBTSxVQUFWO0FBQUEsaUNBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxnQkFBSSxFQUFFLFdBQVdELElBQUksQ0FBQ00sRUFBNUI7QUFBQSxtQ0FDRSxxRUFBQyxvREFBRCxDQUFRLEdBQVI7QUFDRSx1QkFBTSwwQkFEUjtBQUVFLHNCQUFRLEVBQUVOLElBQUksQ0FBQ00sRUFBTCxHQUFVLFFBRnRCO0FBR0Usb0JBQU0sTUFIUjtBQUlFLHdCQUFVLEVBQUU7QUFBRUMsd0JBQVEsRUFBRTtBQUFaLGVBSmQ7QUFBQSxzQ0FNRTtBQUFLLHlCQUFNLGlDQUFYO0FBQUEsdUNBQ0UscUVBQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQ0UsMEJBQVEsRUFBRVAsSUFBSSxDQUFDTSxFQUFMLEdBQVUsT0FEdEI7QUFFRSwyQkFBTSxzQkFGUjtBQUdFLHFCQUFHLEVBQUVIO0FBSFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTkYsZUFhRTtBQUFLLHlCQUFNLGlRQUFYO0FBQUEsdUNBQ0U7QUFBSywyQkFBTSx5QkFBWDtBQUFBLHlDQUNFO0FBQ0UsNkJBQU0sd0NBRFI7QUFFRSwyQ0FBdUIsRUFBRTtBQUFFSyw0QkFBTSxFQUFFUixJQUFJLENBQUNTO0FBQWY7QUFGM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixXQUEwQkosR0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQTRCRCxPQS9CZ0IsQ0FBakI7QUFnQ0QsS0FqQ0E7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRFc7QUFBQSxDQUFiOztLQUFNVCxJOztBQXVDTixJQUFNYyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFtQjtBQUFBLE1BQWhCWixTQUFnQixRQUFoQkEsU0FBZ0I7QUFDbEM7QUFDQTtBQUVBLHNCQUNFO0FBQUssYUFBTSw0QkFBWDtBQUFBLDRCQVNFO0FBQUssZUFBTSxrQ0FBWDtBQUFBLDhCQUNFO0FBQUEsK0JBQ0U7QUFBRyxtQkFBTSxxQkFBVDtBQUFBLG9EQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsMENBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFVRTtBQUFBLCtCQUNFO0FBQUcsbUJBQU0sZUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFURixlQTBCRTtBQUFLLGVBQU0sNEJBQVg7QUFBQSw2QkFDRTtBQUFLLGlCQUFNLHFCQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTFCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWdDRCxDQXBDRDs7TUFBTVksUTtBQThDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOztBQUVlQSx1RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZXJvQm94IGZyb20gJy4uL2NvbXBvbmVudHMvSGVyb0JveCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGZldGNoIGZyb20gJ25vZGUtZmV0Y2gnO1xuaW1wb3J0IFRpY2tlciBmcm9tICcuLi9jb21wb25lbnRzL1RpY2tlcic7XG5pbXBvcnQgTmF2QmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2QmFyJztcbmltcG9ydCBTYW5kYm94IGZyb20gJy4vc2FuZGJveCc7XG5pbXBvcnQgTmV4dExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgd29ya0l0ZW1zIH0gZnJvbSAnLi4vcHVibGljL3dvcmsnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY29uc3QgTGlzdCA9IChwcm9wcykgPT4gKFxuICA8dWwgY2xhc3M9J3BsLTQgZmxleCBmbGV4LXJvdyBzcGFjZS14LTYnPlxuICAgIHt3b3JrSXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3Qgd29ya0xpc3QgPSB3b3JrSXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBwcmltYXJ5TWVkaWFQYXRoID0gaXRlbS5tZWRpYVswXTtcbiAgICAgICAgY29uc3Qga2V5ID0gJ3dvcmstJyArIGluZGV4O1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxsaSBjbGFzcz0ncmVsYXRpdmUnIGtleT17a2V5fT5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvd29yay8nICsgaXRlbS5pZH0+XG4gICAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgICAgY2xhc3M9J292ZXJmbG93LWhpZGRlbiByZWxhdGl2ZSdcbiAgICAgICAgICAgICAgICBsYXlvdXRJZD17aXRlbS5pZCArICdCb3JkZXInfVxuICAgICAgICAgICAgICAgIGxheW91dFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuMzUgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3dvcmstbWVkaWEtd3JhcHBlciBhYnNvbHV0ZSB6LTAnPlxuICAgICAgICAgICAgICAgICAgPG1vdGlvbi5pbWdcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0SWQ9e2l0ZW0uaWQgKyAnTWVkaWEnfVxuICAgICAgICAgICAgICAgICAgICBjbGFzcz0nZ3JheS1maWx0ZXIgcmVsYXRpdmUnXG4gICAgICAgICAgICAgICAgICAgIHNyYz17cHJpbWFyeU1lZGlhUGF0aH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmxleCBmbGV4LWNvbCBmbGV4LW5vd3JhcCBpdGVtcy1jZW50ZXIgYm9yZGVyLXdoaXRlIGJvcmRlci0yIHdvcmstaXRlbS13cmFwcGVyIGN1cnNvci1wb2ludGVyIGhvdmVyOmJvcmRlci15ZWxsb3ctMjAwIGhvdmVyOnRleHQtc2hhZG93IGhvdmVyOnNjYWxlLTEwNSBkdXJhdGlvbi00MDAgZWFzZS1vdXQgc3BhY2UteC00IGJnLWJsYWNrIGJnLW9wYWNpdHktNzAgaG92ZXI6Ymctb3BhY2l0eS0zMCByZWxhdGl2ZSB6LTEwIGp1c3RpZnktY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3dvcmstdGl0bGUtd3JhcHBlciBwdC02Jz5cbiAgICAgICAgICAgICAgICAgICAgPGgxXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M9J3RleHQtMnhsIGZvbnQtc2VtaWJvbGQgY3Vyc29yLXBvaW50ZXIgJ1xuICAgICAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogaXRlbS50aXRsZSB9fVxuICAgICAgICAgICAgICAgICAgICA+PC9oMT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH0pfVxuICA8L3VsPlxuKTtcblxuY29uc3QgSG9tZVBhZ2UgPSAoeyB3b3JrSXRlbXMgfSkgPT4ge1xuICAvLyBjb25zdCBbY29pbnMsIHNldENvaW5zXSA9IHVzZVN0YXRlKFtdKTtcbiAgLy8gY29uc29sZS5sb2coJ2RhdGEgZnJvbSBob21lcGFnZTogJywgZGF0YSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzPSdmbGV4IGZsZXgtY29sIHB4LTYgbXgtYXV0byc+XG4gICAgICB7LyogPE5hdkJhciBuYXZTdGF0ZT0naG9tZSc+PC9OYXZCYXI+ICovfVxuICAgICAgey8qIDxtb3Rpb24uZGl2XG4gICAgICAgIGNsYXNzPSdib3JkZXItYmxhY2sgYm9yZGVyLXQtMiBib3JkZXItYi0yJ1xuICAgICAgICBsYXlvdXRJZD0nc3ViTmF2QmFyJ1xuICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjM1IH19XG4gICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgaGVpZ2h0OiAxMDAgfX1cbiAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCBoZWlnaHQ6IDAgfX1cbiAgICAgID48L21vdGlvbi5kaXY+ICovfVxuICAgICAgPGRpdiBjbGFzcz0naGVyby1zZWN0aW9uIG91dGVyLXdyYXBwZXIgcHktMTInPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxwIGNsYXNzPSd0ZXh0LTJ4bCBtYi0yNCBwbC00Jz5cbiAgICAgICAgICAgIEhpISBJJ20gRnJlZG8sXG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIGEgY3JlYXRpdmUgdGVjaG5vbG9naXN0XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIGJhc2VkIGluIExvcyBBbmdlbGVzXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8cCBjbGFzcz0ndGV4dC0yeGwgcGwtNCc+XG4gICAgICAgICAgICBJIHNwZWNpYWxpemUgaW4gZnJvbnQtZW5kIHNvZnR3YXJlIGVuZ2luZWVyaW5nIGFuZCBjcmVhdGl2ZSB3ZWJcbiAgICAgICAgICAgIGRldmVsb3BtZW50LlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9J3dvcmstc2VjdGlvbiBvdXRlci13cmFwcGVyJz5cbiAgICAgICAgPGRpdiBjbGFzcz0ndGV4dC0yeGwgbXktMTIgcGwtNCc+Q2hlY2sgb3V0IHNvbWUgb2YgbXkgd29yazo8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICB3b3JrSXRlbXMsXG4gICAgfSxcbiAgfTtcbn07XG5cbi8vIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XG4vLyAgIGF3YWl0IGdldENvaW5EYXRhV2l0aEZldGNoKCk7XG4vLyAgIGNvbnNvbGUubG9nKGNvaW5zKTtcbi8vIH0sIFtdKTtcbi8vIGNvbnN0IGdldENvaW5EYXRhV2l0aEZldGNoID0gYXN5bmMgKCkgPT4ge1xuXG4vLyAgIGNvbnNvbGUubG9nKGRhdGEpO1xuLy8gICBzZXRDb2lucyhkYXRhKTtcblxuLy8gfTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ }),

/***/ "./public/work.js":
/*!************************!*\
  !*** ./public/work.js ***!
  \************************/
/*! exports provided: workItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"workItems\", function() { return workItems; });\nvar workItems = [{\n  title: 'ReacType',\n  id: 'reactype',\n  year: '2020',\n  group: 'OS Labs',\n  media: ['/reactype-lg.gif'],\n  client: null,\n  blurb: 'Visual prototyping tool that allows users to export their creations as TypeScript code templates. My role involved rebuilding the GUI as a drag-and-drop canvas, implementing the Next.js project export option, and validating development with unit testing',\n  siteUrl: 'https://reactype.io/',\n  repo: 'https://github.com/open-source-labs/ReacType',\n  tech: ['react', 'typescript', 'materialui', 'jest', 'node', 'electron'],\n  logo: '/logo-reactype.png'\n}, {\n  title: 'Identity Shifters',\n  id: 'shifters',\n  year: '2019',\n  group: 'rpa',\n  media: ['/shifters-lg.png'],\n  client: 'In-house',\n  blurb: 'Built long-scrolling, fully-responsive microsite to showcase agency research and insights on demographic profile of Generation Z',\n  siteUrl: 'https://identityshifters.rpa.com/',\n  repo: null,\n  tech: ['html', 'sass', 'javascript', 'jquery', 'bootstrap', 'aos.js'],\n  logo: '/logo-rpa.png'\n}, {\n  title: '<span class=\"italic\">ampm</span>',\n  id: 'ampm',\n  year: '2018',\n  group: 'rpa',\n  media: ['/ampm-lg.png'],\n  client: '<span class=\"italic\">ampm</span>',\n  blurb: 'Total site refresh for ampm during the summer of 2018. Served as front-end lead and developed fully-responsive layouts with customizable gradient-based color themes. Worked closely with creatives and back-end engineers to integrate and launch',\n  siteUrl: 'https://www.ampm.com',\n  repo: null,\n  tech: ['html', 'sass', 'bootstrap', 'javascript', 'masonry.js', 'slick.js'],\n  logo: '/logo-ampm.png'\n}, {\n  title: 'Arco MX',\n  id: 'arco',\n  year: '2017-2018',\n  group: 'rpa',\n  media: ['/arco-mx-lg.png'],\n  client: 'Arco MX',\n  blurb: 'Front-end development of regional Arco Mexico site, as well as regular and promotional site updates for Arco national website.',\n  siteUrl: 'https://www.arco.com/en-mx/mexico/',\n  repo: null,\n  tech: ['html', 'sass', 'bootstrap', 'angularjs', 'lodash'],\n  logo: '/logo-arco.png'\n} // {\n//   title: 'FairPay',\n//   year: '2020',\n//   group: 'Open source / ',\n//   media: null,\n//   client: null,\n//   blurb:\n//     'Platform for industry professionals to anonymously share and analyze salary and compensation by demographic data.',\n//   link: '',\n// },\n// {\n//   title: 'Southwest Airlines',\n//   year: '2017-2019',\n//   group: 'rpa',\n//   media: null,\n//   client: null,\n//   blurb:\n//     'Built an interactive kiosk display for SWA business conferences, dynamically generating animated flight paths on a map for user-selected origins and destinations',\n//   link: '',\n// },\n// {\n//   title: 'Honda',\n//   year: '2017-2019',\n//   group: 'rpa',\n//   media: null,\n//   client: null,\n//   blurb:\n//     'Built \"Which Civic Are You?\" microsite & personality quiz, rich media banners for Happy Honda Days and 2017 Ridgeline launch, and contributed to Honda Certified Pre-Owned Vehicles site',\n//   link: '',\n// },\n];\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL3dvcmsuanM/MDNmMSJdLCJuYW1lcyI6WyJ3b3JrSXRlbXMiLCJ0aXRsZSIsImlkIiwieWVhciIsImdyb3VwIiwibWVkaWEiLCJjbGllbnQiLCJibHVyYiIsInNpdGVVcmwiLCJyZXBvIiwidGVjaCIsImxvZ28iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBTyxJQUFNQSxTQUFTLEdBQUcsQ0FDdkI7QUFDRUMsT0FBSyxFQUFFLFVBRFQ7QUFFRUMsSUFBRSxFQUFFLFVBRk47QUFHRUMsTUFBSSxFQUFFLE1BSFI7QUFJRUMsT0FBSyxFQUFFLFNBSlQ7QUFLRUMsT0FBSyxFQUFFLENBQUMsa0JBQUQsQ0FMVDtBQU1FQyxRQUFNLEVBQUUsSUFOVjtBQU9FQyxPQUFLLEVBQ0gsK1BBUko7QUFTRUMsU0FBTyxFQUFFLHNCQVRYO0FBVUVDLE1BQUksRUFBRSw4Q0FWUjtBQVdFQyxNQUFJLEVBQUUsQ0FBQyxPQUFELEVBQVUsWUFBVixFQUF3QixZQUF4QixFQUFzQyxNQUF0QyxFQUE4QyxNQUE5QyxFQUFzRCxVQUF0RCxDQVhSO0FBWUVDLE1BQUksRUFBRTtBQVpSLENBRHVCLEVBZXZCO0FBQ0VWLE9BQUssRUFBRSxtQkFEVDtBQUVFQyxJQUFFLEVBQUUsVUFGTjtBQUdFQyxNQUFJLEVBQUUsTUFIUjtBQUlFQyxPQUFLLEVBQUUsS0FKVDtBQUtFQyxPQUFLLEVBQUUsQ0FBQyxrQkFBRCxDQUxUO0FBTUVDLFFBQU0sRUFBRSxVQU5WO0FBT0VDLE9BQUssRUFDSCxrSUFSSjtBQVNFQyxTQUFPLEVBQUUsbUNBVFg7QUFVRUMsTUFBSSxFQUFFLElBVlI7QUFXRUMsTUFBSSxFQUFFLENBQUMsTUFBRCxFQUFTLE1BQVQsRUFBaUIsWUFBakIsRUFBK0IsUUFBL0IsRUFBeUMsV0FBekMsRUFBc0QsUUFBdEQsQ0FYUjtBQVlFQyxNQUFJLEVBQUU7QUFaUixDQWZ1QixFQTZCdkI7QUFDRVYsT0FBSyxFQUFFLGtDQURUO0FBRUVDLElBQUUsRUFBRSxNQUZOO0FBR0VDLE1BQUksRUFBRSxNQUhSO0FBSUVDLE9BQUssRUFBRSxLQUpUO0FBS0VDLE9BQUssRUFBRSxDQUFDLGNBQUQsQ0FMVDtBQU1FQyxRQUFNLEVBQUUsa0NBTlY7QUFPRUMsT0FBSyxFQUNILG9QQVJKO0FBU0VDLFNBQU8sRUFBRSxzQkFUWDtBQVVFQyxNQUFJLEVBQUUsSUFWUjtBQVdFQyxNQUFJLEVBQUUsQ0FBQyxNQUFELEVBQVMsTUFBVCxFQUFpQixXQUFqQixFQUE4QixZQUE5QixFQUE0QyxZQUE1QyxFQUEwRCxVQUExRCxDQVhSO0FBWUVDLE1BQUksRUFBRTtBQVpSLENBN0J1QixFQTJDdkI7QUFDRVYsT0FBSyxFQUFFLFNBRFQ7QUFFRUMsSUFBRSxFQUFFLE1BRk47QUFHRUMsTUFBSSxFQUFFLFdBSFI7QUFJRUMsT0FBSyxFQUFFLEtBSlQ7QUFLRUMsT0FBSyxFQUFFLENBQUMsaUJBQUQsQ0FMVDtBQU1FQyxRQUFNLEVBQUUsU0FOVjtBQU9FQyxPQUFLLEVBQ0gsZ0lBUko7QUFTRUMsU0FBTyxFQUFFLG9DQVRYO0FBVUVDLE1BQUksRUFBRSxJQVZSO0FBV0VDLE1BQUksRUFBRSxDQUFDLE1BQUQsRUFBUyxNQUFULEVBQWlCLFdBQWpCLEVBQThCLFdBQTlCLEVBQTJDLFFBQTNDLENBWFI7QUFZRUMsTUFBSSxFQUFFO0FBWlIsQ0EzQ3VCLENBeUR2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF0RnVCLENBQWxCIiwiZmlsZSI6Ii4vcHVibGljL3dvcmsuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgd29ya0l0ZW1zID0gW1xuICB7XG4gICAgdGl0bGU6ICdSZWFjVHlwZScsXG4gICAgaWQ6ICdyZWFjdHlwZScsXG4gICAgeWVhcjogJzIwMjAnLFxuICAgIGdyb3VwOiAnT1MgTGFicycsXG4gICAgbWVkaWE6IFsnL3JlYWN0eXBlLWxnLmdpZiddLFxuICAgIGNsaWVudDogbnVsbCxcbiAgICBibHVyYjpcbiAgICAgICdWaXN1YWwgcHJvdG90eXBpbmcgdG9vbCB0aGF0IGFsbG93cyB1c2VycyB0byBleHBvcnQgdGhlaXIgY3JlYXRpb25zIGFzIFR5cGVTY3JpcHQgY29kZSB0ZW1wbGF0ZXMuIE15IHJvbGUgaW52b2x2ZWQgcmVidWlsZGluZyB0aGUgR1VJIGFzIGEgZHJhZy1hbmQtZHJvcCBjYW52YXMsIGltcGxlbWVudGluZyB0aGUgTmV4dC5qcyBwcm9qZWN0IGV4cG9ydCBvcHRpb24sIGFuZCB2YWxpZGF0aW5nIGRldmVsb3BtZW50IHdpdGggdW5pdCB0ZXN0aW5nJyxcbiAgICBzaXRlVXJsOiAnaHR0cHM6Ly9yZWFjdHlwZS5pby8nLFxuICAgIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vb3Blbi1zb3VyY2UtbGFicy9SZWFjVHlwZScsXG4gICAgdGVjaDogWydyZWFjdCcsICd0eXBlc2NyaXB0JywgJ21hdGVyaWFsdWknLCAnamVzdCcsICdub2RlJywgJ2VsZWN0cm9uJ10sXG4gICAgbG9nbzogJy9sb2dvLXJlYWN0eXBlLnBuZycsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0lkZW50aXR5IFNoaWZ0ZXJzJyxcbiAgICBpZDogJ3NoaWZ0ZXJzJyxcbiAgICB5ZWFyOiAnMjAxOScsXG4gICAgZ3JvdXA6ICdycGEnLFxuICAgIG1lZGlhOiBbJy9zaGlmdGVycy1sZy5wbmcnXSxcbiAgICBjbGllbnQ6ICdJbi1ob3VzZScsXG4gICAgYmx1cmI6XG4gICAgICAnQnVpbHQgbG9uZy1zY3JvbGxpbmcsIGZ1bGx5LXJlc3BvbnNpdmUgbWljcm9zaXRlIHRvIHNob3djYXNlIGFnZW5jeSByZXNlYXJjaCBhbmQgaW5zaWdodHMgb24gZGVtb2dyYXBoaWMgcHJvZmlsZSBvZiBHZW5lcmF0aW9uIFonLFxuICAgIHNpdGVVcmw6ICdodHRwczovL2lkZW50aXR5c2hpZnRlcnMucnBhLmNvbS8nLFxuICAgIHJlcG86IG51bGwsXG4gICAgdGVjaDogWydodG1sJywgJ3Nhc3MnLCAnamF2YXNjcmlwdCcsICdqcXVlcnknLCAnYm9vdHN0cmFwJywgJ2Fvcy5qcyddLFxuICAgIGxvZ286ICcvbG9nby1ycGEucG5nJyxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnPHNwYW4gY2xhc3M9XCJpdGFsaWNcIj5hbXBtPC9zcGFuPicsXG4gICAgaWQ6ICdhbXBtJyxcbiAgICB5ZWFyOiAnMjAxOCcsXG4gICAgZ3JvdXA6ICdycGEnLFxuICAgIG1lZGlhOiBbJy9hbXBtLWxnLnBuZyddLFxuICAgIGNsaWVudDogJzxzcGFuIGNsYXNzPVwiaXRhbGljXCI+YW1wbTwvc3Bhbj4nLFxuICAgIGJsdXJiOlxuICAgICAgJ1RvdGFsIHNpdGUgcmVmcmVzaCBmb3IgYW1wbSBkdXJpbmcgdGhlIHN1bW1lciBvZiAyMDE4LiBTZXJ2ZWQgYXMgZnJvbnQtZW5kIGxlYWQgYW5kIGRldmVsb3BlZCBmdWxseS1yZXNwb25zaXZlIGxheW91dHMgd2l0aCBjdXN0b21pemFibGUgZ3JhZGllbnQtYmFzZWQgY29sb3IgdGhlbWVzLiBXb3JrZWQgY2xvc2VseSB3aXRoIGNyZWF0aXZlcyBhbmQgYmFjay1lbmQgZW5naW5lZXJzIHRvIGludGVncmF0ZSBhbmQgbGF1bmNoJyxcbiAgICBzaXRlVXJsOiAnaHR0cHM6Ly93d3cuYW1wbS5jb20nLFxuICAgIHJlcG86IG51bGwsXG4gICAgdGVjaDogWydodG1sJywgJ3Nhc3MnLCAnYm9vdHN0cmFwJywgJ2phdmFzY3JpcHQnLCAnbWFzb25yeS5qcycsICdzbGljay5qcyddLFxuICAgIGxvZ286ICcvbG9nby1hbXBtLnBuZycsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0FyY28gTVgnLFxuICAgIGlkOiAnYXJjbycsXG4gICAgeWVhcjogJzIwMTctMjAxOCcsXG4gICAgZ3JvdXA6ICdycGEnLFxuICAgIG1lZGlhOiBbJy9hcmNvLW14LWxnLnBuZyddLFxuICAgIGNsaWVudDogJ0FyY28gTVgnLFxuICAgIGJsdXJiOlxuICAgICAgJ0Zyb250LWVuZCBkZXZlbG9wbWVudCBvZiByZWdpb25hbCBBcmNvIE1leGljbyBzaXRlLCBhcyB3ZWxsIGFzIHJlZ3VsYXIgYW5kIHByb21vdGlvbmFsIHNpdGUgdXBkYXRlcyBmb3IgQXJjbyBuYXRpb25hbCB3ZWJzaXRlLicsXG4gICAgc2l0ZVVybDogJ2h0dHBzOi8vd3d3LmFyY28uY29tL2VuLW14L21leGljby8nLFxuICAgIHJlcG86IG51bGwsXG4gICAgdGVjaDogWydodG1sJywgJ3Nhc3MnLCAnYm9vdHN0cmFwJywgJ2FuZ3VsYXJqcycsICdsb2Rhc2gnXSxcbiAgICBsb2dvOiAnL2xvZ28tYXJjby5wbmcnLFxuICB9LFxuICAvLyB7XG4gIC8vICAgdGl0bGU6ICdGYWlyUGF5JyxcbiAgLy8gICB5ZWFyOiAnMjAyMCcsXG4gIC8vICAgZ3JvdXA6ICdPcGVuIHNvdXJjZSAvICcsXG4gIC8vICAgbWVkaWE6IG51bGwsXG4gIC8vICAgY2xpZW50OiBudWxsLFxuICAvLyAgIGJsdXJiOlxuICAvLyAgICAgJ1BsYXRmb3JtIGZvciBpbmR1c3RyeSBwcm9mZXNzaW9uYWxzIHRvIGFub255bW91c2x5IHNoYXJlIGFuZCBhbmFseXplIHNhbGFyeSBhbmQgY29tcGVuc2F0aW9uIGJ5IGRlbW9ncmFwaGljIGRhdGEuJyxcbiAgLy8gICBsaW5rOiAnJyxcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHRpdGxlOiAnU291dGh3ZXN0IEFpcmxpbmVzJyxcbiAgLy8gICB5ZWFyOiAnMjAxNy0yMDE5JyxcbiAgLy8gICBncm91cDogJ3JwYScsXG4gIC8vICAgbWVkaWE6IG51bGwsXG4gIC8vICAgY2xpZW50OiBudWxsLFxuICAvLyAgIGJsdXJiOlxuICAvLyAgICAgJ0J1aWx0IGFuIGludGVyYWN0aXZlIGtpb3NrIGRpc3BsYXkgZm9yIFNXQSBidXNpbmVzcyBjb25mZXJlbmNlcywgZHluYW1pY2FsbHkgZ2VuZXJhdGluZyBhbmltYXRlZCBmbGlnaHQgcGF0aHMgb24gYSBtYXAgZm9yIHVzZXItc2VsZWN0ZWQgb3JpZ2lucyBhbmQgZGVzdGluYXRpb25zJyxcbiAgLy8gICBsaW5rOiAnJyxcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHRpdGxlOiAnSG9uZGEnLFxuICAvLyAgIHllYXI6ICcyMDE3LTIwMTknLFxuICAvLyAgIGdyb3VwOiAncnBhJyxcbiAgLy8gICBtZWRpYTogbnVsbCxcbiAgLy8gICBjbGllbnQ6IG51bGwsXG4gIC8vICAgYmx1cmI6XG4gIC8vICAgICAnQnVpbHQgXCJXaGljaCBDaXZpYyBBcmUgWW91P1wiIG1pY3Jvc2l0ZSAmIHBlcnNvbmFsaXR5IHF1aXosIHJpY2ggbWVkaWEgYmFubmVycyBmb3IgSGFwcHkgSG9uZGEgRGF5cyBhbmQgMjAxNyBSaWRnZWxpbmUgbGF1bmNoLCBhbmQgY29udHJpYnV0ZWQgdG8gSG9uZGEgQ2VydGlmaWVkIFByZS1Pd25lZCBWZWhpY2xlcyBzaXRlJyxcbiAgLy8gICBsaW5rOiAnJyxcbiAgLy8gfSxcbl07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/work.js\n");

/***/ })

})