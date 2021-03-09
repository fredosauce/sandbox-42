webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_HeroBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/HeroBox */ \"./components/HeroBox.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! node-fetch */ \"./node_modules/node-fetch/browser.js\");\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Ticker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Ticker */ \"./components/Ticker.js\");\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/NavBar */ \"./components/NavBar.jsx\");\n/* harmony import */ var _sandbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sandbox */ \"./pages/sandbox.jsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _components_Links__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Links */ \"./components/Links.jsx\");\n\n\nvar _jsxFileName = \"/Users/fredo/Desktop/projects/sandbox-42/pages/index.jsx\",\n    _this = undefined;\n\n\n\n\n\n\n\n\n\n\n\n\nvar Pill = function Pill(_ref) {\n  var text = _ref.text;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    \"class\": \"text-sm py-1 px-3 bg-gray-50 text-gray-700 inline-block font-semibold tech-pill mb-4 rounded-xl\",\n    children: text\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Pill;\n\nvar List = function List(_ref2) {\n  var workItems = _ref2.workItems;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n    \"class\": \"pl-4 flex flex-row space-x-6\",\n    children: workItems.map(function (item, index) {\n      // const isSelected =\n      var primaryMediaPath = item.media[0];\n      var key = 'work-' + index;\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        \"class\": \"relative\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"overflow-hidden relative work-item-wrapper  border-white border-2 hover:border-yellow-200 duration-400 \".concat(isSelected && 'open'),\n          layoutId: item.id + 'Border',\n          layout: true,\n          transition: {\n            duration: 0.35\n          },\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            \"class\": \"work-media-wrapper absolute z-0\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_8__[\"motion\"].img, {\n              layoutId: item.id + 'Media',\n              \"class\": \"gray-filter relative\",\n              src: primaryMediaPath\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 38,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            \"class\": \"flex flex-col flex-nowrap items-center work-item-wrapper cursor-pointer  ease-out space-x-4 bg-black bg-opacity-70 hover:bg-opacity-30 relative z-10 justify-center\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              \"class\": \"work-title-wrapper pt-6\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_9__[\"Link\"], {\n                to: '/' + item.id,\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n                  \"class\": \"text-2xl font-semibold cursor-pointer \",\n                  dangerouslySetInnerHTML: {\n                    __html: item.title\n                  }\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 47,\n                  columnNumber: 19\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 46,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 45,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            \"class\": \"px-8 lg:my-48 work-detail-outer mx-auto flex flex-col-reverse items-center lg:flex-row lg:space-x-8 my-16 absolute\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_8__[\"motion\"].div, {\n              \"class\": \"text-box\",\n              initial: {\n                opacity: 0,\n                x: -180\n              },\n              animate: {\n                opacity: 1,\n                x: 0\n              },\n              transition: {\n                duration: 0.35,\n                delay: 0.25\n              },\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_8__[\"motion\"].h1, {\n                \"class\": \"text-3xl cursor-pointer my-1\",\n                dangerouslySetInnerHTML: {\n                  __html: item.title\n                },\n                layoutId: item.title + 'Header'\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 61,\n                columnNumber: 17\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                \"class\": \"text-gray-400 text-xl\",\n                children: [item.group, \" \\xA0\", item.year, \"\\xA0\", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Links__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                  selectedWork: item\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 68,\n                  columnNumber: 19\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 66,\n                columnNumber: 17\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                \"class\": \"text-xl mt-5\",\n                children: item.blurb\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 70,\n                columnNumber: 17\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                \"class\": \"mt-8 flex flex-row flex-wrap space-x-5 \",\n                children: item.tech.map(function (techName, index) {\n                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Pill, {\n                    text: techName\n                  }, techName + index, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 73,\n                    columnNumber: 21\n                  }, _this);\n                })\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 71,\n                columnNumber: 17\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 55,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_8__[\"motion\"].div, {\n              transition: {\n                duration: 0.15,\n                delay: 0.6\n              },\n              initial: {\n                opacity: 0\n              },\n              animate: {\n                opacity: 1\n              },\n              \"class\": \"media-box border-gray-50 border-1\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_8__[\"motion\"].img, {\n                src: primaryMediaPath\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 83,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 77,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 11\n        }, _this)\n      }, key, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 3\n  }, _this);\n};\n\n_c2 = List;\n\nvar HomePage = function HomePage(_ref3) {\n  var workItems = _ref3.workItems;\n  // const [coins, setCoins] = useState([]);\n  // console.log('data from homepage: ', data);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    \"class\": \"flex flex-col px-6 mx-auto\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      \"class\": \"hero-section outer-wrapper py-12\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          \"class\": \"text-2xl mb-24 pl-4\",\n          children: [\"Hi! I'm Fredo,\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 111,\n            columnNumber: 13\n          }, _this), \"a creative technologist\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 113,\n            columnNumber: 13\n          }, _this), \"based in Los Angeles\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 109,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 108,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          \"class\": \"text-2xl pl-4\",\n          children: \"I specialize in front-end software engineering and creative web development.\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 118,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 117,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      \"class\": \"work-section outer-wrapper\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        \"class\": \"text-2xl my-12 pl-4\",\n        children: \"Check out some of my work:\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 125,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_9__[\"BrowserRouter\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Route, {\n          path: ['/:id', '/'],\n          component: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(List, {\n            workItems: workItems\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 129,\n            columnNumber: 24\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 127,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 126,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 124,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 98,\n    columnNumber: 5\n  }, _this);\n};\n\n_c3 = HomePage;\n// useEffect(async () => {\n//   await getCoinDataWithFetch();\n//   console.log(coins);\n// }, []);\n// const getCoinDataWithFetch = async () => {\n//   console.log(data);\n//   setCoins(data);\n// };\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Pill\");\n$RefreshReg$(_c2, \"List\");\n$RefreshReg$(_c3, \"HomePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4PzcwYzUiXSwibmFtZXMiOlsiUGlsbCIsInRleHQiLCJMaXN0Iiwid29ya0l0ZW1zIiwibWFwIiwiaXRlbSIsImluZGV4IiwicHJpbWFyeU1lZGlhUGF0aCIsIm1lZGlhIiwia2V5IiwiaXNTZWxlY3RlZCIsImlkIiwiZHVyYXRpb24iLCJfX2h0bWwiLCJ0aXRsZSIsIm9wYWNpdHkiLCJ4IiwiZGVsYXkiLCJncm91cCIsInllYXIiLCJibHVyYiIsInRlY2giLCJ0ZWNoTmFtZSIsIkhvbWVQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBYztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUN6QixzQkFDRTtBQUFLLGFBQU0saUdBQVg7QUFBQSxjQUNHQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUtELENBTkQ7O0tBQU1ELEk7O0FBUU4sSUFBTUUsSUFBSSxHQUFHLFNBQVBBLElBQU87QUFBQSxNQUFHQyxTQUFILFNBQUdBLFNBQUg7QUFBQSxzQkFDWDtBQUFJLGFBQU0sOEJBQVY7QUFBQSxjQUNHQSxTQUFTLENBQUNDLEdBQVYsQ0FBYyxVQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBaUI7QUFDOUI7QUFDQSxVQUFNQyxnQkFBZ0IsR0FBR0YsSUFBSSxDQUFDRyxLQUFMLENBQVcsQ0FBWCxDQUF6QjtBQUNBLFVBQU1DLEdBQUcsR0FBRyxVQUFVSCxLQUF0QjtBQUNBLDBCQUNFO0FBQUksaUJBQU0sVUFBVjtBQUFBLCtCQUNFO0FBQ0UsbUJBQVMsbUhBQ1BJLFVBQVUsSUFBSSxNQURQLENBRFg7QUFJRSxrQkFBUSxFQUFFTCxJQUFJLENBQUNNLEVBQUwsR0FBVSxRQUp0QjtBQUtFLGdCQUFNLE1BTFI7QUFN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QUFBQTtBQUFBO0FBQUEsYUExQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFzQ0QsQ0ExQ0Q7O01BQU1vQixRO0FBb0ROO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7O0FBRWVBLHVFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlcm9Cb3ggZnJvbSAnLi4vY29tcG9uZW50cy9IZXJvQm94JztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnbm9kZS1mZXRjaCc7XG5pbXBvcnQgVGlja2VyIGZyb20gJy4uL2NvbXBvbmVudHMvVGlja2VyJztcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZCYXInO1xuaW1wb3J0IFNhbmRib3ggZnJvbSAnLi9zYW5kYm94JztcbmltcG9ydCBOZXh0TGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgeyB3b3JrSXRlbXMgfSBmcm9tICcuLi9wdWJsaWMvd29yayc7XG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IExpbmtzIGZyb20gJy4uL2NvbXBvbmVudHMvTGlua3MnO1xuXG5jb25zdCBQaWxsID0gKHsgdGV4dCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzcz0ndGV4dC1zbSBweS0xIHB4LTMgYmctZ3JheS01MCB0ZXh0LWdyYXktNzAwIGlubGluZS1ibG9jayBmb250LXNlbWlib2xkIHRlY2gtcGlsbCBtYi00IHJvdW5kZWQteGwnPlxuICAgICAge3RleHR9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBMaXN0ID0gKHsgd29ya0l0ZW1zIH0pID0+IChcbiAgPHVsIGNsYXNzPSdwbC00IGZsZXggZmxleC1yb3cgc3BhY2UteC02Jz5cbiAgICB7d29ya0l0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgIC8vIGNvbnN0IGlzU2VsZWN0ZWQgPVxuICAgICAgY29uc3QgcHJpbWFyeU1lZGlhUGF0aCA9IGl0ZW0ubWVkaWFbMF07XG4gICAgICBjb25zdCBrZXkgPSAnd29yay0nICsgaW5kZXg7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8bGkgY2xhc3M9J3JlbGF0aXZlJyBrZXk9e2tleX0+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgb3ZlcmZsb3ctaGlkZGVuIHJlbGF0aXZlIHdvcmstaXRlbS13cmFwcGVyICBib3JkZXItd2hpdGUgYm9yZGVyLTIgaG92ZXI6Ym9yZGVyLXllbGxvdy0yMDAgZHVyYXRpb24tNDAwICR7XG4gICAgICAgICAgICAgIGlzU2VsZWN0ZWQgJiYgJ29wZW4nXG4gICAgICAgICAgICB9YH1cbiAgICAgICAgICAgIGxheW91dElkPXtpdGVtLmlkICsgJ0JvcmRlcid9XG4gICAgICAgICAgICBsYXlvdXRcbiAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuMzUgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSd3b3JrLW1lZGlhLXdyYXBwZXIgYWJzb2x1dGUgei0wJz5cbiAgICAgICAgICAgICAgPG1vdGlvbi5pbWdcbiAgICAgICAgICAgICAgICBsYXlvdXRJZD17aXRlbS5pZCArICdNZWRpYSd9XG4gICAgICAgICAgICAgICAgY2xhc3M9J2dyYXktZmlsdGVyIHJlbGF0aXZlJ1xuICAgICAgICAgICAgICAgIHNyYz17cHJpbWFyeU1lZGlhUGF0aH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmxleCBmbGV4LWNvbCBmbGV4LW5vd3JhcCBpdGVtcy1jZW50ZXIgd29yay1pdGVtLXdyYXBwZXIgY3Vyc29yLXBvaW50ZXIgIGVhc2Utb3V0IHNwYWNlLXgtNCBiZy1ibGFjayBiZy1vcGFjaXR5LTcwIGhvdmVyOmJnLW9wYWNpdHktMzAgcmVsYXRpdmUgei0xMCBqdXN0aWZ5LWNlbnRlcic+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3dvcmstdGl0bGUtd3JhcHBlciBwdC02Jz5cbiAgICAgICAgICAgICAgICA8TGluayB0bz17Jy8nICsgaXRlbS5pZH0+XG4gICAgICAgICAgICAgICAgICA8aDFcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9J3RleHQtMnhsIGZvbnQtc2VtaWJvbGQgY3Vyc29yLXBvaW50ZXIgJ1xuICAgICAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGl0ZW0udGl0bGUgfX1cbiAgICAgICAgICAgICAgICAgID48L2gxPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J3B4LTggbGc6bXktNDggd29yay1kZXRhaWwtb3V0ZXIgbXgtYXV0byBmbGV4IGZsZXgtY29sLXJldmVyc2UgaXRlbXMtY2VudGVyIGxnOmZsZXgtcm93IGxnOnNwYWNlLXgtOCBteS0xNiBhYnNvbHV0ZSc+XG4gICAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgICAgY2xhc3M9J3RleHQtYm94J1xuICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeDogLTE4MCB9fVxuICAgICAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeDogMCB9fVxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuMzUsIGRlbGF5OiAwLjI1IH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8bW90aW9uLmgxXG4gICAgICAgICAgICAgICAgICBjbGFzcz0ndGV4dC0zeGwgY3Vyc29yLXBvaW50ZXIgbXktMSdcbiAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogaXRlbS50aXRsZSB9fVxuICAgICAgICAgICAgICAgICAgbGF5b3V0SWQ9e2l0ZW0udGl0bGUgKyAnSGVhZGVyJ31cbiAgICAgICAgICAgICAgICA+PC9tb3Rpb24uaDE+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9J3RleHQtZ3JheS00MDAgdGV4dC14bCc+XG4gICAgICAgICAgICAgICAgICB7aXRlbS5ncm91cH0gJm5ic3A7e2l0ZW0ueWVhcn0mbmJzcDt7JyAnfVxuICAgICAgICAgICAgICAgICAgPExpbmtzIHNlbGVjdGVkV29yaz17aXRlbX0gLz5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9J3RleHQteGwgbXQtNSc+e2l0ZW0uYmx1cmJ9PC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J210LTggZmxleCBmbGV4LXJvdyBmbGV4LXdyYXAgc3BhY2UteC01ICc+XG4gICAgICAgICAgICAgICAgICB7aXRlbS50ZWNoLm1hcCgodGVjaE5hbWUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxQaWxsIHRleHQ9e3RlY2hOYW1lfSBrZXk9e3RlY2hOYW1lICsgaW5kZXh9IC8+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuMTUsIGRlbGF5OiAwLjYgfX1cbiAgICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEgfX1cbiAgICAgICAgICAgICAgICBjbGFzcz0nbWVkaWEtYm94IGJvcmRlci1ncmF5LTUwIGJvcmRlci0xJ1xuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPG1vdGlvbi5pbWcgc3JjPXtwcmltYXJ5TWVkaWFQYXRofSAvPlxuICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9saT5cbiAgICAgICk7XG4gICAgfSl9XG4gIDwvdWw+XG4pO1xuXG5jb25zdCBIb21lUGFnZSA9ICh7IHdvcmtJdGVtcyB9KSA9PiB7XG4gIC8vIGNvbnN0IFtjb2lucywgc2V0Q29pbnNdID0gdXNlU3RhdGUoW10pO1xuICAvLyBjb25zb2xlLmxvZygnZGF0YSBmcm9tIGhvbWVwYWdlOiAnLCBkYXRhKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9J2ZsZXggZmxleC1jb2wgcHgtNiBteC1hdXRvJz5cbiAgICAgIHsvKiA8TmF2QmFyIG5hdlN0YXRlPSdob21lJz48L05hdkJhcj4gKi99XG4gICAgICB7LyogPG1vdGlvbi5kaXZcbiAgICAgICAgY2xhc3M9J2JvcmRlci1ibGFjayBib3JkZXItdC0yIGJvcmRlci1iLTInXG4gICAgICAgIGxheW91dElkPSdzdWJOYXZCYXInXG4gICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuMzUgfX1cbiAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCBoZWlnaHQ6IDEwMCB9fVxuICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIGhlaWdodDogMCB9fVxuICAgICAgPjwvbW90aW9uLmRpdj4gKi99XG4gICAgICA8ZGl2IGNsYXNzPSdoZXJvLXNlY3Rpb24gb3V0ZXItd3JhcHBlciBweS0xMic+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHAgY2xhc3M9J3RleHQtMnhsIG1iLTI0IHBsLTQnPlxuICAgICAgICAgICAgSGkhIEknbSBGcmVkbyxcbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgYSBjcmVhdGl2ZSB0ZWNobm9sb2dpc3RcbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgYmFzZWQgaW4gTG9zIEFuZ2VsZXNcbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxwIGNsYXNzPSd0ZXh0LTJ4bCBwbC00Jz5cbiAgICAgICAgICAgIEkgc3BlY2lhbGl6ZSBpbiBmcm9udC1lbmQgc29mdHdhcmUgZW5naW5lZXJpbmcgYW5kIGNyZWF0aXZlIHdlYlxuICAgICAgICAgICAgZGV2ZWxvcG1lbnQuXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz0nd29yay1zZWN0aW9uIG91dGVyLXdyYXBwZXInPlxuICAgICAgICA8ZGl2IGNsYXNzPSd0ZXh0LTJ4bCBteS0xMiBwbC00Jz5DaGVjayBvdXQgc29tZSBvZiBteSB3b3JrOjwvZGl2PlxuICAgICAgICA8Um91dGVyPlxuICAgICAgICAgIDxSb3V0ZVxuICAgICAgICAgICAgcGF0aD17WycvOmlkJywgJy8nXX1cbiAgICAgICAgICAgIGNvbXBvbmVudD17PExpc3Qgd29ya0l0ZW1zPXt3b3JrSXRlbXN9IC8+fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvUm91dGVyPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHdvcmtJdGVtcyxcbiAgICB9LFxuICB9O1xufTtcblxuLy8gdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcbi8vICAgYXdhaXQgZ2V0Q29pbkRhdGFXaXRoRmV0Y2goKTtcbi8vICAgY29uc29sZS5sb2coY29pbnMpO1xuLy8gfSwgW10pO1xuLy8gY29uc3QgZ2V0Q29pbkRhdGFXaXRoRmV0Y2ggPSBhc3luYyAoKSA9PiB7XG5cbi8vICAgY29uc29sZS5sb2coZGF0YSk7XG4vLyAgIHNldENvaW5zKGRhdGEpO1xuXG4vLyB9O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ })

})