webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_HeroBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/HeroBox */ \"./components/HeroBox.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! node-fetch */ \"./node_modules/node-fetch/browser.js\");\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Ticker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Ticker */ \"./components/Ticker.js\");\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/NavBar */ \"./components/NavBar.jsx\");\n/* harmony import */ var _sandbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sandbox */ \"./pages/sandbox.jsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n\n\nvar _jsxFileName = \"/Users/fredo/Desktop/projects/sandbox-42/pages/index.jsx\",\n    _this = undefined;\n\n\n\n\n\n\n\n\n\n\n\nvar List = function List(_ref) {\n  var workItems = _ref.workItems;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n    \"class\": \"pl-4 flex flex-row space-x-6\",\n    children: workItems.map(function (item, index) {\n      var primaryMediaPath = item.media[0];\n      var key = 'work-' + index;\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        \"class\": \"relative\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_9__[\"Link\"], {\n          to: '/work/' + item.id,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_8__[\"motion\"].div, {\n            \"class\": \"overflow-hidden relative\",\n            layoutId: item.id + 'Border',\n            layout: true,\n            transition: {\n              duration: 0.35\n            },\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              \"class\": \"work-media-wrapper absolute z-0\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_8__[\"motion\"].img, {\n                layoutId: item.id + 'Media',\n                \"class\": \"gray-filter relative\",\n                src: primaryMediaPath\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 27,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 26,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              \"class\": \"flex flex-col flex-nowrap items-center border-white border-2 work-item-wrapper cursor-pointer hover:border-yellow-200 hover:text-shadow hover:scale-105 duration-400 ease-out space-x-4 bg-black bg-opacity-70 hover:bg-opacity-30 relative z-10 justify-center\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                \"class\": \"work-title-wrapper pt-6\",\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n                  \"class\": \"text-2xl font-semibold cursor-pointer \",\n                  dangerouslySetInnerHTML: {\n                    __html: item.title\n                  }\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 35,\n                  columnNumber: 19\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 34,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 33,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              \"class\": \"px-8 lg:my-48 work-detail-outer mx-auto flex flex-col-reverse items-center lg:flex-row lg:space-x-8 my-16\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_8__[\"motion\"].div, {\n                \"class\": \"text-box\",\n                initial: {\n                  opacity: 0,\n                  x: -180\n                },\n                animate: {\n                  opacity: 1,\n                  x: 0\n                },\n                transition: {\n                  duration: 0.35,\n                  delay: 0.25\n                },\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_8__[\"motion\"].h1, {\n                  \"class\": \"text-3xl cursor-pointer my-1\",\n                  dangerouslySetInnerHTML: {\n                    __html: item.title\n                  },\n                  layoutId: item.title + 'Header'\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 48,\n                  columnNumber: 19\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                  \"class\": \"text-gray-400 text-xl\",\n                  children: [item.group, \" \\xA0\", item.year, \"\\xA0\", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Links, {\n                    selectedWork: item\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 55,\n                    columnNumber: 21\n                  }, _this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 53,\n                  columnNumber: 19\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                  \"class\": \"text-xl mt-5\",\n                  children: item.blurb\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 57,\n                  columnNumber: 19\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                  \"class\": \"mt-8 flex flex-row flex-wrap space-x-5 \",\n                  children: item.tech.map(function (techName, index) {\n                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Pill, {\n                      text: techName\n                    }, techName + index, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 60,\n                      columnNumber: 23\n                    }, _this);\n                  })\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 58,\n                  columnNumber: 19\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 42,\n                columnNumber: 17\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_8__[\"motion\"].div, {\n                transition: {\n                  duration: 0.15,\n                  delay: 0.6\n                },\n                initial: {\n                  opacity: 0\n                },\n                animate: {\n                  opacity: 1\n                },\n                \"class\": \"media-box border-gray-50 border-1\",\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_8__[\"motion\"].img, {\n                  layoutId: selectedWork.id + 'Media',\n                  src: primaryMediaPath\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 70,\n                  columnNumber: 19\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 64,\n                columnNumber: 17\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 41,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 20,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 11\n        }, _this)\n      }, key, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 9\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 3\n  }, _this);\n};\n\n_c = List;\n\nvar HomePage = function HomePage(_ref2) {\n  var workItems = _ref2.workItems;\n  // const [coins, setCoins] = useState([]);\n  // console.log('data from homepage: ', data);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    \"class\": \"flex flex-col px-6 mx-auto\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      \"class\": \"hero-section outer-wrapper py-12\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          \"class\": \"text-2xl mb-24 pl-4\",\n          children: [\"Hi! I'm Fredo,\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 102,\n            columnNumber: 13\n          }, _this), \"a creative technologist\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 104,\n            columnNumber: 13\n          }, _this), \"based in Los Angeles\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 100,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 99,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          \"class\": \"text-2xl pl-4\",\n          children: \"I specialize in front-end software engineering and creative web development.\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 109,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 108,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      \"class\": \"work-section outer-wrapper\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        \"class\": \"text-2xl my-12 pl-4\",\n        children: \"Check out some of my work:\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 116,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_9__[\"BrowserRouter\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(List, {\n          workItems: workItems\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 118,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 117,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 89,\n    columnNumber: 5\n  }, _this);\n};\n\n_c2 = HomePage;\n// useEffect(async () => {\n//   await getCoinDataWithFetch();\n//   console.log(coins);\n// }, []);\n// const getCoinDataWithFetch = async () => {\n//   console.log(data);\n//   setCoins(data);\n// };\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"List\");\n$RefreshReg$(_c2, \"HomePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4PzcwYzUiXSwibmFtZXMiOlsiTGlzdCIsIndvcmtJdGVtcyIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInByaW1hcnlNZWRpYVBhdGgiLCJtZWRpYSIsImtleSIsImlkIiwiZHVyYXRpb24iLCJfX2h0bWwiLCJ0aXRsZSIsIm9wYWNpdHkiLCJ4IiwiZGVsYXkiLCJncm91cCIsInllYXIiLCJibHVyYiIsInRlY2giLCJ0ZWNoTmFtZSIsInNlbGVjdGVkV29yayIsIkhvbWVQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU87QUFBQSxNQUFHQyxTQUFILFFBQUdBLFNBQUg7QUFBQSxzQkFDWDtBQUFJLGFBQU0sOEJBQVY7QUFBQSxjQUNHQSxTQUFTLENBQUNDLEdBQVYsQ0FBYyxVQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBaUI7QUFDOUIsVUFBTUMsZ0JBQWdCLEdBQUdGLElBQUksQ0FBQ0csS0FBTCxDQUFXLENBQVgsQ0FBekI7QUFDQSxVQUFNQyxHQUFHLEdBQUcsVUFBVUgsS0FBdEI7QUFDQSwwQkFDRTtBQUFJLGlCQUFNLFVBQVY7QUFBQSwrQkFDRSxxRUFBQyxxREFBRDtBQUFNLFlBQUUsRUFBRSxXQUFXRCxJQUFJLENBQUNLLEVBQTFCO0FBQUEsaUNBQ0UscUVBQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQ0UscUJBQU0sMEJBRFI7QUFFRSxvQkFBUSxFQUFFTCxJQUFJLENBQUNLLEVBQUwsR0FBVSxRQUZ0QjtBQUdFLGtCQUFNLE1BSFI7QUFJRSxzQkFBVSxFQUFFO0FBQUVDLHNCQUFRLEVBQUU7QUFBWixhQUpkO0FBQUEsb0NBTUU7QUFBSyx1QkFBTSxpQ0FBWDtBQUFBLHFDQUNFLHFFQUFDLG9EQUFELENBQVEsR0FBUjtBQUNFLHdCQUFRLEVB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REg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURXO0FBQUEsQ0FBYjs7S0FBTVAsSTs7QUF3RU4sSUFBTXFCLFFBQVEsR0FBRyxTQUFYQSxRQUFXLFFBQW1CO0FBQUEsTUFBaEJwQixTQUFnQixTQUFoQkEsU0FBZ0I7QUFDbEM7QUFDQTtBQUVBLHNCQUNFO0FBQUssYUFBTSw0QkFBWDtBQUFBLDRCQVNFO0FBQUssZUFBTSxrQ0FBWDtBQUFBLDhCQUNFO0FBQUEsK0JBQ0U7QUFBRyxtQkFBTSxxQkFBVDtBQUFBLG9EQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsMENBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFVRTtBQUFBLCtCQUNFO0FBQUcsbUJBQU0sZUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFURixlQTBCRTtBQUFLLGVBQU0sNEJBQVg7QUFBQSw4QkFDRTtBQUFLLGlCQUFNLHFCQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRSxxRUFBQyw4REFBRDtBQUFBLCtCQUNFLHFFQUFDLElBQUQ7QUFBTSxtQkFBUyxFQUFFQTtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTFCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW1DRCxDQXZDRDs7TUFBTW9CLFE7QUFpRE47QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7QUFFZUEsdUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVyb0JveCBmcm9tICcuLi9jb21wb25lbnRzL0hlcm9Cb3gnO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBmZXRjaCBmcm9tICdub2RlLWZldGNoJztcbmltcG9ydCBUaWNrZXIgZnJvbSAnLi4vY29tcG9uZW50cy9UaWNrZXInO1xuaW1wb3J0IE5hdkJhciBmcm9tICcuLi9jb21wb25lbnRzL05hdkJhcic7XG5pbXBvcnQgU2FuZGJveCBmcm9tICcuL3NhbmRib3gnO1xuaW1wb3J0IE5leHRMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IHdvcmtJdGVtcyB9IGZyb20gJy4uL3B1YmxpYy93b3JrJztcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLCBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmNvbnN0IExpc3QgPSAoeyB3b3JrSXRlbXMgfSkgPT4gKFxuICA8dWwgY2xhc3M9J3BsLTQgZmxleCBmbGV4LXJvdyBzcGFjZS14LTYnPlxuICAgIHt3b3JrSXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgcHJpbWFyeU1lZGlhUGF0aCA9IGl0ZW0ubWVkaWFbMF07XG4gICAgICBjb25zdCBrZXkgPSAnd29yay0nICsgaW5kZXg7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8bGkgY2xhc3M9J3JlbGF0aXZlJyBrZXk9e2tleX0+XG4gICAgICAgICAgPExpbmsgdG89eycvd29yay8nICsgaXRlbS5pZH0+XG4gICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICBjbGFzcz0nb3ZlcmZsb3ctaGlkZGVuIHJlbGF0aXZlJ1xuICAgICAgICAgICAgICBsYXlvdXRJZD17aXRlbS5pZCArICdCb3JkZXInfVxuICAgICAgICAgICAgICBsYXlvdXRcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC4zNSB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSd3b3JrLW1lZGlhLXdyYXBwZXIgYWJzb2x1dGUgei0wJz5cbiAgICAgICAgICAgICAgICA8bW90aW9uLmltZ1xuICAgICAgICAgICAgICAgICAgbGF5b3V0SWQ9e2l0ZW0uaWQgKyAnTWVkaWEnfVxuICAgICAgICAgICAgICAgICAgY2xhc3M9J2dyYXktZmlsdGVyIHJlbGF0aXZlJ1xuICAgICAgICAgICAgICAgICAgc3JjPXtwcmltYXJ5TWVkaWFQYXRofVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdmbGV4IGZsZXgtY29sIGZsZXgtbm93cmFwIGl0ZW1zLWNlbnRlciBib3JkZXItd2hpdGUgYm9yZGVyLTIgd29yay1pdGVtLXdyYXBwZXIgY3Vyc29yLXBvaW50ZXIgaG92ZXI6Ym9yZGVyLXllbGxvdy0yMDAgaG92ZXI6dGV4dC1zaGFkb3cgaG92ZXI6c2NhbGUtMTA1IGR1cmF0aW9uLTQwMCBlYXNlLW91dCBzcGFjZS14LTQgYmctYmxhY2sgYmctb3BhY2l0eS03MCBob3ZlcjpiZy1vcGFjaXR5LTMwIHJlbGF0aXZlIHotMTAganVzdGlmeS1jZW50ZXInPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3dvcmstdGl0bGUtd3JhcHBlciBwdC02Jz5cbiAgICAgICAgICAgICAgICAgIDxoMVxuICAgICAgICAgICAgICAgICAgICBjbGFzcz0ndGV4dC0yeGwgZm9udC1zZW1pYm9sZCBjdXJzb3ItcG9pbnRlciAnXG4gICAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogaXRlbS50aXRsZSB9fVxuICAgICAgICAgICAgICAgICAgPjwvaDE+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdweC04IGxnOm15LTQ4IHdvcmstZGV0YWlsLW91dGVyIG14LWF1dG8gZmxleCBmbGV4LWNvbC1yZXZlcnNlIGl0ZW1zLWNlbnRlciBsZzpmbGV4LXJvdyBsZzpzcGFjZS14LTggbXktMTYnPlxuICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgICAgICBjbGFzcz0ndGV4dC1ib3gnXG4gICAgICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHg6IC0xODAgfX1cbiAgICAgICAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeDogMCB9fVxuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC4zNSwgZGVsYXk6IDAuMjUgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8bW90aW9uLmgxXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPSd0ZXh0LTN4bCBjdXJzb3ItcG9pbnRlciBteS0xJ1xuICAgICAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGl0ZW0udGl0bGUgfX1cbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0SWQ9e2l0ZW0udGl0bGUgKyAnSGVhZGVyJ31cbiAgICAgICAgICAgICAgICAgID48L21vdGlvbi5oMT5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPSd0ZXh0LWdyYXktNDAwIHRleHQteGwnPlxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5ncm91cH0gJm5ic3A7e2l0ZW0ueWVhcn0mbmJzcDt7JyAnfVxuICAgICAgICAgICAgICAgICAgICA8TGlua3Mgc2VsZWN0ZWRXb3JrPXtpdGVtfSAvPlxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9J3RleHQteGwgbXQtNSc+e2l0ZW0uYmx1cmJ9PC9wPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbXQtOCBmbGV4IGZsZXgtcm93IGZsZXgtd3JhcCBzcGFjZS14LTUgJz5cbiAgICAgICAgICAgICAgICAgICAge2l0ZW0udGVjaC5tYXAoKHRlY2hOYW1lLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxQaWxsIHRleHQ9e3RlY2hOYW1lfSBrZXk9e3RlY2hOYW1lICsgaW5kZXh9IC8+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjE1LCBkZWxheTogMC42IH19XG4gICAgICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSB9fVxuICAgICAgICAgICAgICAgICAgY2xhc3M9J21lZGlhLWJveCBib3JkZXItZ3JheS01MCBib3JkZXItMSdcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8bW90aW9uLmltZ1xuICAgICAgICAgICAgICAgICAgICBsYXlvdXRJZD17c2VsZWN0ZWRXb3JrLmlkICsgJ01lZGlhJ31cbiAgICAgICAgICAgICAgICAgICAgc3JjPXtwcmltYXJ5TWVkaWFQYXRofVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9saT5cbiAgICAgICk7XG4gICAgfSl9XG4gIDwvdWw+XG4pO1xuXG5jb25zdCBIb21lUGFnZSA9ICh7IHdvcmtJdGVtcyB9KSA9PiB7XG4gIC8vIGNvbnN0IFtjb2lucywgc2V0Q29pbnNdID0gdXNlU3RhdGUoW10pO1xuICAvLyBjb25zb2xlLmxvZygnZGF0YSBmcm9tIGhvbWVwYWdlOiAnLCBkYXRhKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9J2ZsZXggZmxleC1jb2wgcHgtNiBteC1hdXRvJz5cbiAgICAgIHsvKiA8TmF2QmFyIG5hdlN0YXRlPSdob21lJz48L05hdkJhcj4gKi99XG4gICAgICB7LyogPG1vdGlvbi5kaXZcbiAgICAgICAgY2xhc3M9J2JvcmRlci1ibGFjayBib3JkZXItdC0yIGJvcmRlci1iLTInXG4gICAgICAgIGxheW91dElkPSdzdWJOYXZCYXInXG4gICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuMzUgfX1cbiAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCBoZWlnaHQ6IDEwMCB9fVxuICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIGhlaWdodDogMCB9fVxuICAgICAgPjwvbW90aW9uLmRpdj4gKi99XG4gICAgICA8ZGl2IGNsYXNzPSdoZXJvLXNlY3Rpb24gb3V0ZXItd3JhcHBlciBweS0xMic+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHAgY2xhc3M9J3RleHQtMnhsIG1iLTI0IHBsLTQnPlxuICAgICAgICAgICAgSGkhIEknbSBGcmVkbyxcbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgYSBjcmVhdGl2ZSB0ZWNobm9sb2dpc3RcbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgYmFzZWQgaW4gTG9zIEFuZ2VsZXNcbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxwIGNsYXNzPSd0ZXh0LTJ4bCBwbC00Jz5cbiAgICAgICAgICAgIEkgc3BlY2lhbGl6ZSBpbiBmcm9udC1lbmQgc29mdHdhcmUgZW5naW5lZXJpbmcgYW5kIGNyZWF0aXZlIHdlYlxuICAgICAgICAgICAgZGV2ZWxvcG1lbnQuXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz0nd29yay1zZWN0aW9uIG91dGVyLXdyYXBwZXInPlxuICAgICAgICA8ZGl2IGNsYXNzPSd0ZXh0LTJ4bCBteS0xMiBwbC00Jz5DaGVjayBvdXQgc29tZSBvZiBteSB3b3JrOjwvZGl2PlxuICAgICAgICA8Um91dGVyPlxuICAgICAgICAgIDxMaXN0IHdvcmtJdGVtcz17d29ya0l0ZW1zfSAvPlxuICAgICAgICA8L1JvdXRlcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICB3b3JrSXRlbXMsXG4gICAgfSxcbiAgfTtcbn07XG5cbi8vIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XG4vLyAgIGF3YWl0IGdldENvaW5EYXRhV2l0aEZldGNoKCk7XG4vLyAgIGNvbnNvbGUubG9nKGNvaW5zKTtcbi8vIH0sIFtdKTtcbi8vIGNvbnN0IGdldENvaW5EYXRhV2l0aEZldGNoID0gYXN5bmMgKCkgPT4ge1xuXG4vLyAgIGNvbnNvbGUubG9nKGRhdGEpO1xuLy8gICBzZXRDb2lucyhkYXRhKTtcblxuLy8gfTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ })

})