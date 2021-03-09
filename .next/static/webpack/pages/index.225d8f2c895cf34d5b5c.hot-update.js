webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_HeroBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/HeroBox */ \"./components/HeroBox.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! node-fetch */ \"./node_modules/node-fetch/browser.js\");\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Ticker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Ticker */ \"./components/Ticker.js\");\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/NavBar */ \"./components/NavBar.jsx\");\n/* harmony import */ var _sandbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sandbox */ \"./pages/sandbox.jsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _components_Links__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Links */ \"./components/Links.jsx\");\n\n\nvar _jsxFileName = \"/Users/fredo/Desktop/projects/sandbox-42/pages/index.jsx\",\n    _this = undefined;\n\n\n\n\n\n\n\n\n\n\n\n\nvar List = function List(_ref) {\n  var workItems = _ref.workItems;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n    \"class\": \"pl-4 flex flex-row space-x-6\",\n    children: workItems.map(function (item, index) {\n      var primaryMediaPath = item.media[0];\n      var key = 'work-' + index;\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        \"class\": \"relative\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_9__[\"Link\"], {\n          to: '/work/' + item.id,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_8__[\"motion\"].div, {\n            \"class\": \"overflow-hidden relative\",\n            layoutId: item.id + 'Border',\n            layout: true,\n            transition: {\n              duration: 0.35\n            },\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              \"class\": \"work-media-wrapper absolute z-0\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_8__[\"motion\"].img, {\n                layoutId: item.id + 'Media',\n                \"class\": \"gray-filter relative\",\n                src: primaryMediaPath\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 28,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 27,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              \"class\": \"flex flex-col flex-nowrap items-center border-white border-2 work-item-wrapper cursor-pointer hover:border-yellow-200 hover:text-shadow hover:scale-105 duration-400 ease-out space-x-4 bg-black bg-opacity-70 hover:bg-opacity-30 relative z-10 justify-center\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                \"class\": \"work-title-wrapper pt-6\",\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n                  \"class\": \"text-2xl font-semibold cursor-pointer \",\n                  dangerouslySetInnerHTML: {\n                    __html: item.title\n                  }\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 36,\n                  columnNumber: 19\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 35,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 34,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              \"class\": \"px-8 lg:my-48 work-detail-outer mx-auto flex flex-col-reverse items-center lg:flex-row lg:space-x-8 my-16\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_8__[\"motion\"].div, {\n                \"class\": \"text-box\",\n                initial: {\n                  opacity: 0,\n                  x: -180\n                },\n                animate: {\n                  opacity: 1,\n                  x: 0\n                },\n                transition: {\n                  duration: 0.35,\n                  delay: 0.25\n                },\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_8__[\"motion\"].h1, {\n                  \"class\": \"text-3xl cursor-pointer my-1\",\n                  dangerouslySetInnerHTML: {\n                    __html: item.title\n                  },\n                  layoutId: item.title + 'Header'\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 49,\n                  columnNumber: 19\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                  \"class\": \"text-gray-400 text-xl\",\n                  children: [item.group, \" \\xA0\", item.year, \"\\xA0\", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Links__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                    selectedWork: item\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 56,\n                    columnNumber: 21\n                  }, _this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 54,\n                  columnNumber: 19\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                  \"class\": \"text-xl mt-5\",\n                  children: item.blurb\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 58,\n                  columnNumber: 19\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                  \"class\": \"mt-8 flex flex-row flex-wrap space-x-5 \",\n                  children: item.tech.map(function (techName, index) {\n                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Pill, {\n                      text: techName\n                    }, techName + index, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 61,\n                      columnNumber: 23\n                    }, _this);\n                  })\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 59,\n                  columnNumber: 19\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 43,\n                columnNumber: 17\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_8__[\"motion\"].div, {\n                transition: {\n                  duration: 0.15,\n                  delay: 0.6\n                },\n                initial: {\n                  opacity: 0\n                },\n                animate: {\n                  opacity: 1\n                },\n                \"class\": \"media-box border-gray-50 border-1\",\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_8__[\"motion\"].img, {\n                  layoutId: selectedWork.id + 'Media',\n                  src: primaryMediaPath\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 71,\n                  columnNumber: 19\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 65,\n                columnNumber: 17\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 42,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 21,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 11\n        }, _this)\n      }, key, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 3\n  }, _this);\n};\n\n_c = List;\n\nvar HomePage = function HomePage(_ref2) {\n  var workItems = _ref2.workItems;\n  // const [coins, setCoins] = useState([]);\n  // console.log('data from homepage: ', data);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    \"class\": \"flex flex-col px-6 mx-auto\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      \"class\": \"hero-section outer-wrapper py-12\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          \"class\": \"text-2xl mb-24 pl-4\",\n          children: [\"Hi! I'm Fredo,\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 103,\n            columnNumber: 13\n          }, _this), \"a creative technologist\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 105,\n            columnNumber: 13\n          }, _this), \"based in Los Angeles\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 101,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 100,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          \"class\": \"text-2xl pl-4\",\n          children: \"I specialize in front-end software engineering and creative web development.\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 110,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 109,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      \"class\": \"work-section outer-wrapper\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        \"class\": \"text-2xl my-12 pl-4\",\n        children: \"Check out some of my work:\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 117,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_9__[\"BrowserRouter\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(List, {\n          workItems: workItems\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 119,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 118,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 90,\n    columnNumber: 5\n  }, _this);\n};\n\n_c2 = HomePage;\n// useEffect(async () => {\n//   await getCoinDataWithFetch();\n//   console.log(coins);\n// }, []);\n// const getCoinDataWithFetch = async () => {\n//   console.log(data);\n//   setCoins(data);\n// };\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"List\");\n$RefreshReg$(_c2, \"HomePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4PzcwYzUiXSwibmFtZXMiOlsiTGlzdCIsIndvcmtJdGVtcyIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInByaW1hcnlNZWRpYVBhdGgiLCJtZWRpYSIsImtleSIsImlkIiwiZHVyYXRpb24iLCJfX2h0bWwiLCJ0aXRsZSIsIm9wYWNpdHkiLCJ4IiwiZGVsYXkiLCJncm91cCIsInllYXIiLCJibHVyYiIsInRlY2giLCJ0ZWNoTmFtZSIsInNlbGVjdGVkV29yayIsIkhvbWVQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU87QUFBQSxNQUFHQyxTQUFILFFBQUdBLFNBQUg7QUFBQSxzQkFDWDtBQUFJLGFBQU0sOEJBQVY7QUFBQSxjQUNHQSxTQUFTLENBQUNDLEdBQVYsQ0FBYyxVQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBaUI7QUFDOUIsVUFBTUMsZ0JBQWdCLEdBQUdGLElBQUksQ0FBQ0csS0FBTCxDQUFXLENBQVgsQ0FBekI7QUFDQSxVQUFNQyxHQUFHLEdBQUcsVUFBVUgsS0FBdEI7QUFDQSwwQkFDRTtBQUFJLGlCQUFNLFVBQVY7QUFBQSwrQkFDRSxxRUFBQyxxREFBRDtBQUFNLFlBQUUsRUFBRSxXQUFXRCxJQUFJLENBQUNLLEVBQTFCO0FBQUEsaUNBQ0UscUVBQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQ0UscUJBQU0sMEJBRFI7QUFFRSxvQkFBUSxFQUFFTCxJQUFJLENBQUNLLEVBQUwsR0FBVSxRQUZ0QjtBQUdFLGtCQUFNLE1BSFI7QUFJRSxzQkFBVSxFQUFFO0FBQUVDLHNCQUFRLEVBQUU7QUFBWixhQUpkO0FBQUEsb0NBTUU7QUFBSyx1QkFBTSxpQ0FBWDtBQUFBLHFDQUNFLHFFQUFDLG9EQUFELENBQVEsR0FBUjtBQUNFLHdC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QWxFQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEVztBQUFBLENBQWI7O0tBQU1QLEk7O0FBd0VOLElBQU1xQixRQUFRLEdBQUcsU0FBWEEsUUFBVyxRQUFtQjtBQUFBLE1BQWhCcEIsU0FBZ0IsU0FBaEJBLFNBQWdCO0FBQ2xDO0FBQ0E7QUFFQSxzQkFDRTtBQUFLLGFBQU0sNEJBQVg7QUFBQSw0QkFTRTtBQUFLLGVBQU0sa0NBQVg7QUFBQSw4QkFDRTtBQUFBLCtCQUNFO0FBQUcsbUJBQU0scUJBQVQ7QUFBQSxvREFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLDBDQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBVUU7QUFBQSwrQkFDRTtBQUFHLG1CQUFNLGVBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVEYsZUEwQkU7QUFBSyxlQUFNLDRCQUFYO0FBQUEsOEJBQ0U7QUFBSyxpQkFBTSxxQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUUscUVBQUMsOERBQUQ7QUFBQSwrQkFDRSxxRUFBQyxJQUFEO0FBQU0sbUJBQVMsRUFBRUE7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUExQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFtQ0QsQ0F2Q0Q7O01BQU1vQixRO0FBaUROO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7O0FBRWVBLHVFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlcm9Cb3ggZnJvbSAnLi4vY29tcG9uZW50cy9IZXJvQm94JztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnbm9kZS1mZXRjaCc7XG5pbXBvcnQgVGlja2VyIGZyb20gJy4uL2NvbXBvbmVudHMvVGlja2VyJztcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZCYXInO1xuaW1wb3J0IFNhbmRib3ggZnJvbSAnLi9zYW5kYm94JztcbmltcG9ydCBOZXh0TGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgeyB3b3JrSXRlbXMgfSBmcm9tICcuLi9wdWJsaWMvd29yayc7XG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IExpbmtzIGZyb20gJy4uL2NvbXBvbmVudHMvTGlua3MnO1xuXG5jb25zdCBMaXN0ID0gKHsgd29ya0l0ZW1zIH0pID0+IChcbiAgPHVsIGNsYXNzPSdwbC00IGZsZXggZmxleC1yb3cgc3BhY2UteC02Jz5cbiAgICB7d29ya0l0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHByaW1hcnlNZWRpYVBhdGggPSBpdGVtLm1lZGlhWzBdO1xuICAgICAgY29uc3Qga2V5ID0gJ3dvcmstJyArIGluZGV4O1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGxpIGNsYXNzPSdyZWxhdGl2ZScga2V5PXtrZXl9PlxuICAgICAgICAgIDxMaW5rIHRvPXsnL3dvcmsvJyArIGl0ZW0uaWR9PlxuICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgY2xhc3M9J292ZXJmbG93LWhpZGRlbiByZWxhdGl2ZSdcbiAgICAgICAgICAgICAgbGF5b3V0SWQ9e2l0ZW0uaWQgKyAnQm9yZGVyJ31cbiAgICAgICAgICAgICAgbGF5b3V0XG4gICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuMzUgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nd29yay1tZWRpYS13cmFwcGVyIGFic29sdXRlIHotMCc+XG4gICAgICAgICAgICAgICAgPG1vdGlvbi5pbWdcbiAgICAgICAgICAgICAgICAgIGxheW91dElkPXtpdGVtLmlkICsgJ01lZGlhJ31cbiAgICAgICAgICAgICAgICAgIGNsYXNzPSdncmF5LWZpbHRlciByZWxhdGl2ZSdcbiAgICAgICAgICAgICAgICAgIHNyYz17cHJpbWFyeU1lZGlhUGF0aH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmxleCBmbGV4LWNvbCBmbGV4LW5vd3JhcCBpdGVtcy1jZW50ZXIgYm9yZGVyLXdoaXRlIGJvcmRlci0yIHdvcmstaXRlbS13cmFwcGVyIGN1cnNvci1wb2ludGVyIGhvdmVyOmJvcmRlci15ZWxsb3ctMjAwIGhvdmVyOnRleHQtc2hhZG93IGhvdmVyOnNjYWxlLTEwNSBkdXJhdGlvbi00MDAgZWFzZS1vdXQgc3BhY2UteC00IGJnLWJsYWNrIGJnLW9wYWNpdHktNzAgaG92ZXI6Ymctb3BhY2l0eS0zMCByZWxhdGl2ZSB6LTEwIGp1c3RpZnktY2VudGVyJz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSd3b3JrLXRpdGxlLXdyYXBwZXIgcHQtNic+XG4gICAgICAgICAgICAgICAgICA8aDFcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9J3RleHQtMnhsIGZvbnQtc2VtaWJvbGQgY3Vyc29yLXBvaW50ZXIgJ1xuICAgICAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGl0ZW0udGl0bGUgfX1cbiAgICAgICAgICAgICAgICAgID48L2gxPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ncHgtOCBsZzpteS00OCB3b3JrLWRldGFpbC1vdXRlciBteC1hdXRvIGZsZXggZmxleC1jb2wtcmV2ZXJzZSBpdGVtcy1jZW50ZXIgbGc6ZmxleC1yb3cgbGc6c3BhY2UteC04IG15LTE2Jz5cbiAgICAgICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3M9J3RleHQtYm94J1xuICAgICAgICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB4OiAtMTgwIH19XG4gICAgICAgICAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHg6IDAgfX1cbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuMzUsIGRlbGF5OiAwLjI1IH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPG1vdGlvbi5oMVxuICAgICAgICAgICAgICAgICAgICBjbGFzcz0ndGV4dC0zeGwgY3Vyc29yLXBvaW50ZXIgbXktMSdcbiAgICAgICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBpdGVtLnRpdGxlIH19XG4gICAgICAgICAgICAgICAgICAgIGxheW91dElkPXtpdGVtLnRpdGxlICsgJ0hlYWRlcid9XG4gICAgICAgICAgICAgICAgICA+PC9tb3Rpb24uaDE+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzcz0ndGV4dC1ncmF5LTQwMCB0ZXh0LXhsJz5cbiAgICAgICAgICAgICAgICAgICAge2l0ZW0uZ3JvdXB9ICZuYnNwO3tpdGVtLnllYXJ9Jm5ic3A7eycgJ31cbiAgICAgICAgICAgICAgICAgICAgPExpbmtzIHNlbGVjdGVkV29yaz17aXRlbX0gLz5cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPSd0ZXh0LXhsIG10LTUnPntpdGVtLmJsdXJifTwvcD5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J210LTggZmxleCBmbGV4LXJvdyBmbGV4LXdyYXAgc3BhY2UteC01ICc+XG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLnRlY2gubWFwKCh0ZWNoTmFtZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8UGlsbCB0ZXh0PXt0ZWNoTmFtZX0ga2V5PXt0ZWNoTmFtZSArIGluZGV4fSAvPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC4xNSwgZGVsYXk6IDAuNiB9fVxuICAgICAgICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEgfX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzPSdtZWRpYS1ib3ggYm9yZGVyLWdyYXktNTAgYm9yZGVyLTEnXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPG1vdGlvbi5pbWdcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0SWQ9e3NlbGVjdGVkV29yay5pZCArICdNZWRpYSd9XG4gICAgICAgICAgICAgICAgICAgIHNyYz17cHJpbWFyeU1lZGlhUGF0aH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvbGk+XG4gICAgICApO1xuICAgIH0pfVxuICA8L3VsPlxuKTtcblxuY29uc3QgSG9tZVBhZ2UgPSAoeyB3b3JrSXRlbXMgfSkgPT4ge1xuICAvLyBjb25zdCBbY29pbnMsIHNldENvaW5zXSA9IHVzZVN0YXRlKFtdKTtcbiAgLy8gY29uc29sZS5sb2coJ2RhdGEgZnJvbSBob21lcGFnZTogJywgZGF0YSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzPSdmbGV4IGZsZXgtY29sIHB4LTYgbXgtYXV0byc+XG4gICAgICB7LyogPE5hdkJhciBuYXZTdGF0ZT0naG9tZSc+PC9OYXZCYXI+ICovfVxuICAgICAgey8qIDxtb3Rpb24uZGl2XG4gICAgICAgIGNsYXNzPSdib3JkZXItYmxhY2sgYm9yZGVyLXQtMiBib3JkZXItYi0yJ1xuICAgICAgICBsYXlvdXRJZD0nc3ViTmF2QmFyJ1xuICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjM1IH19XG4gICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgaGVpZ2h0OiAxMDAgfX1cbiAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCBoZWlnaHQ6IDAgfX1cbiAgICAgID48L21vdGlvbi5kaXY+ICovfVxuICAgICAgPGRpdiBjbGFzcz0naGVyby1zZWN0aW9uIG91dGVyLXdyYXBwZXIgcHktMTInPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxwIGNsYXNzPSd0ZXh0LTJ4bCBtYi0yNCBwbC00Jz5cbiAgICAgICAgICAgIEhpISBJJ20gRnJlZG8sXG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIGEgY3JlYXRpdmUgdGVjaG5vbG9naXN0XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIGJhc2VkIGluIExvcyBBbmdlbGVzXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8cCBjbGFzcz0ndGV4dC0yeGwgcGwtNCc+XG4gICAgICAgICAgICBJIHNwZWNpYWxpemUgaW4gZnJvbnQtZW5kIHNvZnR3YXJlIGVuZ2luZWVyaW5nIGFuZCBjcmVhdGl2ZSB3ZWJcbiAgICAgICAgICAgIGRldmVsb3BtZW50LlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9J3dvcmstc2VjdGlvbiBvdXRlci13cmFwcGVyJz5cbiAgICAgICAgPGRpdiBjbGFzcz0ndGV4dC0yeGwgbXktMTIgcGwtNCc+Q2hlY2sgb3V0IHNvbWUgb2YgbXkgd29yazo8L2Rpdj5cbiAgICAgICAgPFJvdXRlcj5cbiAgICAgICAgICA8TGlzdCB3b3JrSXRlbXM9e3dvcmtJdGVtc30gLz5cbiAgICAgICAgPC9Sb3V0ZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgd29ya0l0ZW1zLFxuICAgIH0sXG4gIH07XG59O1xuXG4vLyB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xuLy8gICBhd2FpdCBnZXRDb2luRGF0YVdpdGhGZXRjaCgpO1xuLy8gICBjb25zb2xlLmxvZyhjb2lucyk7XG4vLyB9LCBbXSk7XG4vLyBjb25zdCBnZXRDb2luRGF0YVdpdGhGZXRjaCA9IGFzeW5jICgpID0+IHtcblxuLy8gICBjb25zb2xlLmxvZyhkYXRhKTtcbi8vICAgc2V0Q29pbnMoZGF0YSk7XG5cbi8vIH07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ })

})