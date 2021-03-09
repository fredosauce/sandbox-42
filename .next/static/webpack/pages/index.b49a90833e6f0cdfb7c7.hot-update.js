webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_HeroBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/HeroBox */ \"./components/HeroBox.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! node-fetch */ \"./node_modules/node-fetch/browser.js\");\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Ticker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Ticker */ \"./components/Ticker.js\");\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/NavBar */ \"./components/NavBar.jsx\");\n/* harmony import */ var _sandbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sandbox */ \"./pages/sandbox.jsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _components_Links__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Links */ \"./components/Links.jsx\");\n\n\nvar _jsxFileName = \"/Users/fredo/Desktop/projects/sandbox-42/pages/index.jsx\",\n    _this = undefined;\n\n\n\n\n\n\n\n\n\n\n\n\nvar Pill = function Pill(_ref) {\n  var text = _ref.text;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    \"class\": \"text-sm py-1 px-3 bg-gray-50 text-gray-700 inline-block font-semibold tech-pill mb-4 rounded-xl\",\n    children: text\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Pill;\n\nvar List = function List(_ref2) {\n  var workItems = _ref2.workItems;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n    \"class\": \"pl-4 flex flex-row space-x-6\",\n    children: workItems.map(function (item, index) {\n      var primaryMediaPath = item.media[0];\n      var key = 'work-' + index;\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        \"class\": \"relative\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          \"class\": \"overflow-hidden relative work-item-wrapper  border-white border-2\",\n          layoutId: item.id + 'Border',\n          layout: true,\n          transition: {\n            duration: 0.35\n          },\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            \"class\": \"work-media-wrapper absolute z-0\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_8__[\"motion\"].img, {\n              layoutId: item.id + 'Media',\n              \"class\": \"gray-filter relative\",\n              src: primaryMediaPath\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 35,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 34,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            \"class\": \"flex flex-col flex-nowrap items-center work-item-wrapper cursor-pointer hover:border-yellow-200 duration-400 ease-out space-x-4 bg-black bg-opacity-70 hover:bg-opacity-30 relative z-10 justify-center\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              \"class\": \"work-title-wrapper pt-6\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_9__[\"Link\"], {\n                to: '/work/' + item.id,\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n                  \"class\": \"text-2xl font-semibold cursor-pointer \",\n                  dangerouslySetInnerHTML: {\n                    __html: item.title\n                  }\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 44,\n                  columnNumber: 19\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 43,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 42,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            \"class\": \"px-8 lg:my-48 work-detail-outer mx-auto flex flex-col-reverse items-center lg:flex-row lg:space-x-8 my-16 absolute\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_8__[\"motion\"].div, {\n              \"class\": \"text-box\",\n              initial: {\n                opacity: 0,\n                x: -180\n              },\n              animate: {\n                opacity: 1,\n                x: 0\n              },\n              transition: {\n                duration: 0.35,\n                delay: 0.25\n              },\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_8__[\"motion\"].h1, {\n                \"class\": \"text-3xl cursor-pointer my-1\",\n                dangerouslySetInnerHTML: {\n                  __html: item.title\n                },\n                layoutId: item.title + 'Header'\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 58,\n                columnNumber: 17\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                \"class\": \"text-gray-400 text-xl\",\n                children: [item.group, \" \\xA0\", item.year, \"\\xA0\", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Links__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                  selectedWork: item\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 65,\n                  columnNumber: 19\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 63,\n                columnNumber: 17\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                \"class\": \"text-xl mt-5\",\n                children: item.blurb\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 67,\n                columnNumber: 17\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                \"class\": \"mt-8 flex flex-row flex-wrap space-x-5 \",\n                children: item.tech.map(function (techName, index) {\n                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Pill, {\n                    text: techName\n                  }, techName + index, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 70,\n                    columnNumber: 21\n                  }, _this);\n                })\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 68,\n                columnNumber: 17\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 52,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_8__[\"motion\"].div, {\n              transition: {\n                duration: 0.15,\n                delay: 0.6\n              },\n              initial: {\n                opacity: 0\n              },\n              animate: {\n                opacity: 1\n              },\n              \"class\": \"media-box border-gray-50 border-1\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_8__[\"motion\"].img, {\n                src: primaryMediaPath\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 80,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 74,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 11\n        }, _this)\n      }, key, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 3\n  }, _this);\n};\n\n_c2 = List;\n\nvar HomePage = function HomePage(_ref3) {\n  var workItems = _ref3.workItems;\n  // const [coins, setCoins] = useState([]);\n  // console.log('data from homepage: ', data);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    \"class\": \"flex flex-col px-6 mx-auto\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      \"class\": \"hero-section outer-wrapper py-12\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          \"class\": \"text-2xl mb-24 pl-4\",\n          children: [\"Hi! I'm Fredo,\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 108,\n            columnNumber: 13\n          }, _this), \"a creative technologist\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 110,\n            columnNumber: 13\n          }, _this), \"based in Los Angeles\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 106,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 105,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          \"class\": \"text-2xl pl-4\",\n          children: \"I specialize in front-end software engineering and creative web development.\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 115,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 114,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      \"class\": \"work-section outer-wrapper\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        \"class\": \"text-2xl my-12 pl-4\",\n        children: \"Check out some of my work:\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 122,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_9__[\"BrowserRouter\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(List, {\n          workItems: workItems\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 124,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 123,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 95,\n    columnNumber: 5\n  }, _this);\n};\n\n_c3 = HomePage;\n// useEffect(async () => {\n//   await getCoinDataWithFetch();\n//   console.log(coins);\n// }, []);\n// const getCoinDataWithFetch = async () => {\n//   console.log(data);\n//   setCoins(data);\n// };\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Pill\");\n$RefreshReg$(_c2, \"List\");\n$RefreshReg$(_c3, \"HomePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4PzcwYzUiXSwibmFtZXMiOlsiUGlsbCIsInRleHQiLCJMaXN0Iiwid29ya0l0ZW1zIiwibWFwIiwiaXRlbSIsImluZGV4IiwicHJpbWFyeU1lZGlhUGF0aCIsIm1lZGlhIiwia2V5IiwiaWQiLCJkdXJhdGlvbiIsIl9faHRtbCIsInRpdGxlIiwib3BhY2l0eSIsIngiLCJkZWxheSIsImdyb3VwIiwieWVhciIsImJsdXJiIiwidGVjaCIsInRlY2hOYW1lIiwiSG9tZVBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFjO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQ3pCLHNCQUNFO0FBQUssYUFBTSxpR0FBWDtBQUFBLGNBQ0dBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBS0QsQ0FORDs7S0FBTUQsSTs7QUFRTixJQUFNRSxJQUFJLEdBQUcsU0FBUEEsSUFBTztBQUFBLE1BQUdDLFNBQUgsU0FBR0EsU0FBSDtBQUFBLHNCQUNYO0FBQUksYUFBTSw4QkFBVjtBQUFBLGNBQ0dBLFNBQVMsQ0FBQ0MsR0FBVixDQUFjLFVBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUM5QixVQUFNQyxnQkFBZ0IsR0FBR0YsSUFBSSxDQUFDRyxLQUFMLENBQVcsQ0FBWCxDQUF6QjtBQUNBLFVBQU1DLEdBQUcsR0FBRyxVQUFVSCxLQUF0QjtBQUNBLDBCQUNFO0FBQUksaUJBQU0sVUFBVjtBQUFBLCtCQUNFO0FBQ0UsbUJBQU0sbUVBRFI7QUFFRSxrQkFBUSxFQUFFRCxJQUFJLENBQUNLLEVBQUwsR0FBVSxRQUZ0QjtBQUdFLGdCQUFNLE1BSFI7QUFJRSxvQkFBVSxFQUFFO0FBQUVDLG9CQUFRLEVBQUU7QUFBWixXQUpk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Ii4vcGFnZXMvaW5kZXguanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlcm9Cb3ggZnJvbSAnLi4vY29tcG9uZW50cy9IZXJvQm94JztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnbm9kZS1mZXRjaCc7XG5pbXBvcnQgVGlja2VyIGZyb20gJy4uL2NvbXBvbmVudHMvVGlja2VyJztcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZCYXInO1xuaW1wb3J0IFNhbmRib3ggZnJvbSAnLi9zYW5kYm94JztcbmltcG9ydCBOZXh0TGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgeyB3b3JrSXRlbXMgfSBmcm9tICcuLi9wdWJsaWMvd29yayc7XG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IExpbmtzIGZyb20gJy4uL2NvbXBvbmVudHMvTGlua3MnO1xuXG5jb25zdCBQaWxsID0gKHsgdGV4dCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzcz0ndGV4dC1zbSBweS0xIHB4LTMgYmctZ3JheS01MCB0ZXh0LWdyYXktNzAwIGlubGluZS1ibG9jayBmb250LXNlbWlib2xkIHRlY2gtcGlsbCBtYi00IHJvdW5kZWQteGwnPlxuICAgICAge3RleHR9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBMaXN0ID0gKHsgd29ya0l0ZW1zIH0pID0+IChcbiAgPHVsIGNsYXNzPSdwbC00IGZsZXggZmxleC1yb3cgc3BhY2UteC02Jz5cbiAgICB7d29ya0l0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHByaW1hcnlNZWRpYVBhdGggPSBpdGVtLm1lZGlhWzBdO1xuICAgICAgY29uc3Qga2V5ID0gJ3dvcmstJyArIGluZGV4O1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGxpIGNsYXNzPSdyZWxhdGl2ZScga2V5PXtrZXl9PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzPSdvdmVyZmxvdy1oaWRkZW4gcmVsYXRpdmUgd29yay1pdGVtLXdyYXBwZXIgIGJvcmRlci13aGl0ZSBib3JkZXItMidcbiAgICAgICAgICAgIGxheW91dElkPXtpdGVtLmlkICsgJ0JvcmRlcid9XG4gICAgICAgICAgICBsYXlvdXRcbiAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuMzUgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSd3b3JrLW1lZGlhLXdyYXBwZXIgYWJzb2x1dGUgei0wJz5cbiAgICAgICAgICAgICAgPG1vdGlvbi5pbWdcbiAgICAgICAgICAgICAgICBsYXlvdXRJZD17aXRlbS5pZCArICdNZWRpYSd9XG4gICAgICAgICAgICAgICAgY2xhc3M9J2dyYXktZmlsdGVyIHJlbGF0aXZlJ1xuICAgICAgICAgICAgICAgIHNyYz17cHJpbWFyeU1lZGlhUGF0aH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmxleCBmbGV4LWNvbCBmbGV4LW5vd3JhcCBpdGVtcy1jZW50ZXIgd29yay1pdGVtLXdyYXBwZXIgY3Vyc29yLXBvaW50ZXIgaG92ZXI6Ym9yZGVyLXllbGxvdy0yMDAgZHVyYXRpb24tNDAwIGVhc2Utb3V0IHNwYWNlLXgtNCBiZy1ibGFjayBiZy1vcGFjaXR5LTcwIGhvdmVyOmJnLW9wYWNpdHktMzAgcmVsYXRpdmUgei0xMCBqdXN0aWZ5LWNlbnRlcic+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3dvcmstdGl0bGUtd3JhcHBlciBwdC02Jz5cbiAgICAgICAgICAgICAgICA8TGluayB0bz17Jy93b3JrLycgKyBpdGVtLmlkfT5cbiAgICAgICAgICAgICAgICAgIDxoMVxuICAgICAgICAgICAgICAgICAgICBjbGFzcz0ndGV4dC0yeGwgZm9udC1zZW1pYm9sZCBjdXJzb3ItcG9pbnRlciAnXG4gICAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogaXRlbS50aXRsZSB9fVxuICAgICAgICAgICAgICAgICAgPjwvaDE+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0ncHgtOCBsZzpteS00OCB3b3JrLWRldGFpbC1vdXRlciBteC1hdXRvIGZsZXggZmxleC1jb2wtcmV2ZXJzZSBpdGVtcy1jZW50ZXIgbGc6ZmxleC1yb3cgbGc6c3BhY2UteC04IG15LTE2IGFic29sdXRlJz5cbiAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICBjbGFzcz0ndGV4dC1ib3gnXG4gICAgICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB4OiAtMTgwIH19XG4gICAgICAgICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB4OiAwIH19XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC4zNSwgZGVsYXk6IDAuMjUgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxtb3Rpb24uaDFcbiAgICAgICAgICAgICAgICAgIGNsYXNzPSd0ZXh0LTN4bCBjdXJzb3ItcG9pbnRlciBteS0xJ1xuICAgICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBpdGVtLnRpdGxlIH19XG4gICAgICAgICAgICAgICAgICBsYXlvdXRJZD17aXRlbS50aXRsZSArICdIZWFkZXInfVxuICAgICAgICAgICAgICAgID48L21vdGlvbi5oMT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz0ndGV4dC1ncmF5LTQwMCB0ZXh0LXhsJz5cbiAgICAgICAgICAgICAgICAgIHtpdGVtLmdyb3VwfSAmbmJzcDt7aXRlbS55ZWFyfSZuYnNwO3snICd9XG4gICAgICAgICAgICAgICAgICA8TGlua3Mgc2VsZWN0ZWRXb3JrPXtpdGVtfSAvPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz0ndGV4dC14bCBtdC01Jz57aXRlbS5ibHVyYn08L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbXQtOCBmbGV4IGZsZXgtcm93IGZsZXgtd3JhcCBzcGFjZS14LTUgJz5cbiAgICAgICAgICAgICAgICAgIHtpdGVtLnRlY2gubWFwKCh0ZWNoTmFtZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPFBpbGwgdGV4dD17dGVjaE5hbWV9IGtleT17dGVjaE5hbWUgKyBpbmRleH0gLz5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC4xNSwgZGVsYXk6IDAuNiB9fVxuICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fVxuICAgICAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSB9fVxuICAgICAgICAgICAgICAgIGNsYXNzPSdtZWRpYS1ib3ggYm9yZGVyLWdyYXktNTAgYm9yZGVyLTEnXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8bW90aW9uLmltZyBzcmM9e3ByaW1hcnlNZWRpYVBhdGh9IC8+XG4gICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2xpPlxuICAgICAgKTtcbiAgICB9KX1cbiAgPC91bD5cbik7XG5cbmNvbnN0IEhvbWVQYWdlID0gKHsgd29ya0l0ZW1zIH0pID0+IHtcbiAgLy8gY29uc3QgW2NvaW5zLCBzZXRDb2luc10gPSB1c2VTdGF0ZShbXSk7XG4gIC8vIGNvbnNvbGUubG9nKCdkYXRhIGZyb20gaG9tZXBhZ2U6ICcsIGRhdGEpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzcz0nZmxleCBmbGV4LWNvbCBweC02IG14LWF1dG8nPlxuICAgICAgey8qIDxOYXZCYXIgbmF2U3RhdGU9J2hvbWUnPjwvTmF2QmFyPiAqL31cbiAgICAgIHsvKiA8bW90aW9uLmRpdlxuICAgICAgICBjbGFzcz0nYm9yZGVyLWJsYWNrIGJvcmRlci10LTIgYm9yZGVyLWItMidcbiAgICAgICAgbGF5b3V0SWQ9J3N1Yk5hdkJhcidcbiAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC4zNSB9fVxuICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIGhlaWdodDogMTAwIH19XG4gICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgaGVpZ2h0OiAwIH19XG4gICAgICA+PC9tb3Rpb24uZGl2PiAqL31cbiAgICAgIDxkaXYgY2xhc3M9J2hlcm8tc2VjdGlvbiBvdXRlci13cmFwcGVyIHB5LTEyJz5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8cCBjbGFzcz0ndGV4dC0yeGwgbWItMjQgcGwtNCc+XG4gICAgICAgICAgICBIaSEgSSdtIEZyZWRvLFxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICBhIGNyZWF0aXZlIHRlY2hub2xvZ2lzdFxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICBiYXNlZCBpbiBMb3MgQW5nZWxlc1xuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHAgY2xhc3M9J3RleHQtMnhsIHBsLTQnPlxuICAgICAgICAgICAgSSBzcGVjaWFsaXplIGluIGZyb250LWVuZCBzb2Z0d2FyZSBlbmdpbmVlcmluZyBhbmQgY3JlYXRpdmUgd2ViXG4gICAgICAgICAgICBkZXZlbG9wbWVudC5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPSd3b3JrLXNlY3Rpb24gb3V0ZXItd3JhcHBlcic+XG4gICAgICAgIDxkaXYgY2xhc3M9J3RleHQtMnhsIG15LTEyIHBsLTQnPkNoZWNrIG91dCBzb21lIG9mIG15IHdvcms6PC9kaXY+XG4gICAgICAgIDxSb3V0ZXI+XG4gICAgICAgICAgPExpc3Qgd29ya0l0ZW1zPXt3b3JrSXRlbXN9IC8+XG4gICAgICAgIDwvUm91dGVyPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHdvcmtJdGVtcyxcbiAgICB9LFxuICB9O1xufTtcblxuLy8gdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcbi8vICAgYXdhaXQgZ2V0Q29pbkRhdGFXaXRoRmV0Y2goKTtcbi8vICAgY29uc29sZS5sb2coY29pbnMpO1xuLy8gfSwgW10pO1xuLy8gY29uc3QgZ2V0Q29pbkRhdGFXaXRoRmV0Y2ggPSBhc3luYyAoKSA9PiB7XG5cbi8vICAgY29uc29sZS5sb2coZGF0YSk7XG4vLyAgIHNldENvaW5zKGRhdGEpO1xuXG4vLyB9O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ })

})