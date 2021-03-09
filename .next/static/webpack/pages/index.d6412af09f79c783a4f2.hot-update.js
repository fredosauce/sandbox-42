webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_HeroBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/HeroBox */ \"./components/HeroBox.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! node-fetch */ \"./node_modules/node-fetch/browser.js\");\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Ticker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Ticker */ \"./components/Ticker.js\");\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/NavBar */ \"./components/NavBar.jsx\");\n/* harmony import */ var _sandbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sandbox */ \"./pages/sandbox.jsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _components_Links__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Links */ \"./components/Links.jsx\");\n/* harmony import */ var _utils_use_inverted_border_radius__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/use-inverted-border-radius */ \"./utils/use-inverted-border-radius.js\");\n\n\nvar _jsxFileName = \"/Users/fredo/Desktop/projects/sandbox-42/pages/index.jsx\",\n    _this = undefined;\n\n\n\n\n\n\n\n\n\n\n\n\nvar openSpring = {\n  type: 'spring',\n  duration: 0.6,\n  bounce: 0.3\n};\nvar closeSpring = {\n  type: 'spring',\n  duration: 0.45,\n  bounce: 0.3\n};\n\nvar Pill = function Pill(_ref) {\n  var text = _ref.text;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    \"class\": \"text-sm py-1 px-3 bg-gray-50 text-gray-700 inline-block font-semibold tech-pill mb-4 rounded-xl\",\n    children: text\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Pill;\n\nvar Overlay = function Overlay(_ref2) {\n  var isSelected = _ref2.isSelected;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_8__[\"motion\"].div, {\n    initial: false,\n    animate: {\n      opacity: isSelected ? 1 : 0\n    },\n    transition: {\n      duration: 0.35\n    },\n    style: {\n      pointerEvents: isSelected ? 'auto' : 'none'\n    },\n    className: \"overlay\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_9__[\"Link\"], {\n      to: \"/\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 3\n  }, _this);\n};\n\n_c2 = Overlay;\n\nvar List = function List(_ref3) {\n  var _s = $RefreshSig$();\n\n  var workItems = _ref3.workItems,\n      match = _ref3.match;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n    \"class\": \"pl-4 flex flex-row space-x-6\",\n    children: workItems.map(_s(function (item, index) {\n      _s();\n\n      // const isSelected =\n      var isSelected = match.params.id === item.id;\n      var primaryMediaPath = item.media[0];\n      var key = 'work-' + index;\n      var y = Object(framer_motion__WEBPACK_IMPORTED_MODULE_8__[\"useMotionValue\"])(0);\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        \"class\": \"work-item\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Overlay, {\n          isSelected: isSelected\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_8__[\"motion\"].div, {\n          className: \"overflow-hidden relative work-item-wrapper  border-white border-2 hover:border-yellow-200 duration-400 \".concat(isSelected && 'open'),\n          transition: isSelected ? openSpring : closeSpring,\n          layout: true,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            \"class\": \"work-media-wrapper absolute z-0\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_8__[\"motion\"].img, {\n              layoutId: item.id + 'Media',\n              \"class\": \"gray-filter relative\",\n              src: primaryMediaPath,\n              layout: true\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 62,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_8__[\"motion\"].div, {\n            \"class\": \"flex flex-col flex-nowrap items-center work-item-detail-wrapper cursor-pointer ease-out space-x-4 bg-black bg-opacity-70 hover:bg-opacity-30 relative z-0 justify-center\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              \"class\": \"work-title-wrapper pt-6\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_9__[\"Link\"], {\n                to: '/' + item.id,\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n                  \"class\": \"text-2xl font-semibold cursor-pointer \",\n                  dangerouslySetInnerHTML: {\n                    __html: item.title\n                  }\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 72,\n                  columnNumber: 21\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 71,\n                columnNumber: 19\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 70,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 69,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_8__[\"motion\"].div, {\n            \"class\": \"px-8 lg:my-48 work-detail-outer mx-auto flex flex-col-reverse items-center lg:flex-row lg:space-x-8 my-16\",\n            transition: {\n              duration: 0.3\n            },\n            layout: true,\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_8__[\"motion\"].div, {\n              \"class\": \"text-box\",\n              layout: true,\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n                \"class\": \"text-3xl cursor-pointer my-1\",\n                dangerouslySetInnerHTML: {\n                  __html: item.title\n                }\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 85,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                \"class\": \"text-gray-400 text-xl\",\n                children: [item.group, \" \\xA0\", item.year, \"\\xA0\", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Links__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                  selectedWork: item\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 91,\n                  columnNumber: 21\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 89,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                \"class\": \"text-md leading-5 mt-4\",\n                children: item.blurb\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 93,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                \"class\": \"mt-6 flex flex-row flex-wrap space-x-5 \",\n                children: item.tech.map(function (techName, index) {\n                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Pill, {\n                    text: techName\n                  }, techName + index, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 96,\n                    columnNumber: 23\n                  }, _this);\n                })\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 94,\n                columnNumber: 19\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 84,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_8__[\"motion\"].div, {\n              layout: true,\n              \"class\": \"media-box border-gray-50 border-1\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_8__[\"motion\"].img, {\n                src: primaryMediaPath\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 101,\n                columnNumber: 19\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 100,\n              columnNumber: 17\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 79,\n            columnNumber: 15\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 13\n        }, _this)]\n      }, key, true, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 11\n      }, _this);\n    }, \"767kVZ58CuuyC/DJlU9EmP8z1u0=\", false, function () {\n      return [framer_motion__WEBPACK_IMPORTED_MODULE_8__[\"useMotionValue\"]];\n    }))\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 43,\n    columnNumber: 5\n  }, _this);\n};\n\n_c3 = List;\n\nvar HomePage = function HomePage(_ref4) {\n  var workItems = _ref4.workItems;\n  // const [coins, setCoins] = useState([]);\n  // console.log('data from homepage: ', data);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    \"class\": \"flex flex-col mx-auto page-wrapper\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      \"class\": \"hero-section py-12 bg-gradient-to-r from-white  to-transparent\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          \"class\": \"text-5xl mb-24 pl-4 font-bold tracking-normal\",\n          children: [\"Hi! I'm Fredo,\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 130,\n            columnNumber: 13\n          }, _this), \"a creative developer\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 132,\n            columnNumber: 13\n          }, _this), \"based in Los Angeles\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 128,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 127,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 136,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      \"class\": \"work-section outer-wrapper\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        \"class\": \"text-3xl font-semibold tracking-wide my-12 pl-4\",\n        children: \"Some of my work:\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 149,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_9__[\"BrowserRouter\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_9__[\"Route\"], {\n          path: ['/:id', '/'],\n          children: function children(_ref5) {\n            var match = _ref5.match;\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(List, {\n              match: match,\n              workItems: workItems\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 156,\n              columnNumber: 15\n            }, _this);\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 153,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 152,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 148,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 117,\n    columnNumber: 5\n  }, _this);\n};\n\n_c4 = HomePage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"Pill\");\n$RefreshReg$(_c2, \"Overlay\");\n$RefreshReg$(_c3, \"List\");\n$RefreshReg$(_c4, \"HomePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4PzcwYzUiXSwibmFtZXMiOlsib3BlblNwcmluZyIsInR5cGUiLCJkdXJhdGlvbiIsImJvdW5jZSIsImNsb3NlU3ByaW5nIiwiUGlsbCIsInRleHQiLCJPdmVybGF5IiwiaXNTZWxlY3RlZCIsIm9wYWNpdHkiLCJwb2ludGVyRXZlbnRzIiwiTGlzdCIsIndvcmtJdGVtcyIsIm1hdGNoIiwibWFwIiwiaXRlbSIsImluZGV4IiwicGFyYW1zIiwiaWQiLCJwcmltYXJ5TWVkaWFQYXRoIiwibWVkaWEiLCJrZXkiLCJ5IiwidXNlTW90aW9uVmFsdWUiLCJfX2h0bWwiLCJ0aXRsZSIsImdyb3VwIiwieWVhciIsImJsdXJiIiwidGVjaCIsInRlY2hOYW1lIiwiSG9tZVBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFVBQVUsR0FBRztBQUFFQyxNQUFJLEVBQUUsUUFBUjtBQUFrQkMsVUFBUSxFQUFFLEdBQTVCO0FBQWlDQyxRQUFNLEVBQUU7QUFBekMsQ0FBbkI7QUFDQSxJQUFNQyxXQUFXLEdBQUc7QUFDbEJILE1BQUksRUFBRSxRQURZO0FBRWxCQyxVQUFRLEVBQUUsSUFGUTtBQUdsQkMsUUFBTSxFQUFFO0FBSFUsQ0FBcEI7O0FBTUEsSUFBTUUsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBYztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUN6QixzQkFDRTtBQUFLLGFBQU0saUdBQVg7QUFBQSxjQUNHQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUtELENBTkQ7O0tBQU1ELEk7O0FBUU4sSUFBTUUsT0FBTyxHQUFHLFNBQVZBLE9BQVU7QUFBQSxNQUFHQyxVQUFILFNBQUdBLFVBQUg7QUFBQSxzQkFDZCxxRUFBQyxvREFBRCxDQUFRLEdBQVI7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TUFBaEJuQixTQUFnQixTQUFoQkEsU0FBZ0I7QUFDbEM7QUFDQTtBQUVBLHNCQUNFO0FBQUssYUFBTSxvQ0FBWDtBQUFBLDRCQVNFO0FBQUssZUFBTSxnRUFBWDtBQUFBLDhCQUNFO0FBQUEsK0JBQ0U7QUFBRyxtQkFBTSwrQ0FBVDtBQUFBLG9EQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsdUNBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFVRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVEYsZUErQkU7QUFBSyxlQUFNLDRCQUFYO0FBQUEsOEJBQ0U7QUFBSyxpQkFBTSxpREFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBSUUscUVBQUMsOERBQUQ7QUFBQSwrQkFDRSxxRUFBQyxzREFBRDtBQUNFLGNBQUksRUFBRSxDQUFDLE1BQUQsRUFBUyxHQUFULENBRFI7QUFFRSxrQkFBUSxFQUFFO0FBQUEsZ0JBQUdDLEtBQUgsU0FBR0EsS0FBSDtBQUFBLGdDQUNSLHFFQUFDLElBQUQ7QUFBTSxtQkFBSyxFQUFFQSxLQUFiO0FBQW9CLHVCQUFTLEVBQUVEO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRFE7QUFBQTtBQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBL0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBK0NELENBbkREOztNQUFNbUIsUTs7QUE2RFNBLHVFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlcm9Cb3ggZnJvbSAnLi4vY29tcG9uZW50cy9IZXJvQm94JztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnbm9kZS1mZXRjaCc7XG5pbXBvcnQgVGlja2VyIGZyb20gJy4uL2NvbXBvbmVudHMvVGlja2VyJztcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZCYXInO1xuaW1wb3J0IFNhbmRib3ggZnJvbSAnLi9zYW5kYm94JztcbmltcG9ydCBOZXh0TGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgbW90aW9uLCB1c2VNb3Rpb25WYWx1ZSB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgd29ya0l0ZW1zIH0gZnJvbSAnLi4vcHVibGljL3dvcmsnO1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsIExpbmssIFJvdXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgTGlua3MgZnJvbSAnLi4vY29tcG9uZW50cy9MaW5rcyc7XG5pbXBvcnQgeyB1c2VJbnZlcnRlZEJvcmRlclJhZGl1cyB9IGZyb20gJy4uL3V0aWxzL3VzZS1pbnZlcnRlZC1ib3JkZXItcmFkaXVzJztcblxuY29uc3Qgb3BlblNwcmluZyA9IHsgdHlwZTogJ3NwcmluZycsIGR1cmF0aW9uOiAwLjYsIGJvdW5jZTogMC4zIH07XG5jb25zdCBjbG9zZVNwcmluZyA9IHtcbiAgdHlwZTogJ3NwcmluZycsXG4gIGR1cmF0aW9uOiAwLjQ1LFxuICBib3VuY2U6IDAuMyxcbn07XG5cbmNvbnN0IFBpbGwgPSAoeyB0ZXh0IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzPSd0ZXh0LXNtIHB5LTEgcHgtMyBiZy1ncmF5LTUwIHRleHQtZ3JheS03MDAgaW5saW5lLWJsb2NrIGZvbnQtc2VtaWJvbGQgdGVjaC1waWxsIG1iLTQgcm91bmRlZC14bCc+XG4gICAgICB7dGV4dH1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IE92ZXJsYXkgPSAoeyBpc1NlbGVjdGVkIH0pID0+IChcbiAgPG1vdGlvbi5kaXZcbiAgICBpbml0aWFsPXtmYWxzZX1cbiAgICBhbmltYXRlPXt7IG9wYWNpdHk6IGlzU2VsZWN0ZWQgPyAxIDogMCB9fVxuICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuMzUgfX1cbiAgICBzdHlsZT17eyBwb2ludGVyRXZlbnRzOiBpc1NlbGVjdGVkID8gJ2F1dG8nIDogJ25vbmUnIH19XG4gICAgY2xhc3NOYW1lPSdvdmVybGF5J1xuICA+XG4gICAgPExpbmsgdG89Jy8nIC8+XG4gIDwvbW90aW9uLmRpdj5cbik7XG5cbmNvbnN0IExpc3QgPSAoeyB3b3JrSXRlbXMsIG1hdGNoIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8dWwgY2xhc3M9J3BsLTQgZmxleCBmbGV4LXJvdyBzcGFjZS14LTYnPlxuICAgICAge3dvcmtJdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIC8vIGNvbnN0IGlzU2VsZWN0ZWQgPVxuICAgICAgICBjb25zdCBpc1NlbGVjdGVkID0gbWF0Y2gucGFyYW1zLmlkID09PSBpdGVtLmlkO1xuICAgICAgICBjb25zdCBwcmltYXJ5TWVkaWFQYXRoID0gaXRlbS5tZWRpYVswXTtcbiAgICAgICAgY29uc3Qga2V5ID0gJ3dvcmstJyArIGluZGV4O1xuXG4gICAgICAgIGNvbnN0IHkgPSB1c2VNb3Rpb25WYWx1ZSgwKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8bGkgY2xhc3M9J3dvcmstaXRlbScga2V5PXtrZXl9PlxuICAgICAgICAgICAgPE92ZXJsYXkgaXNTZWxlY3RlZD17aXNTZWxlY3RlZH0gLz5cbiAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YG92ZXJmbG93LWhpZGRlbiByZWxhdGl2ZSB3b3JrLWl0ZW0td3JhcHBlciAgYm9yZGVyLXdoaXRlIGJvcmRlci0yIGhvdmVyOmJvcmRlci15ZWxsb3ctMjAwIGR1cmF0aW9uLTQwMCAke1xuICAgICAgICAgICAgICAgIGlzU2VsZWN0ZWQgJiYgJ29wZW4nXG4gICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICB0cmFuc2l0aW9uPXtpc1NlbGVjdGVkID8gb3BlblNwcmluZyA6IGNsb3NlU3ByaW5nfVxuICAgICAgICAgICAgICBsYXlvdXRcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nd29yay1tZWRpYS13cmFwcGVyIGFic29sdXRlIHotMCc+XG4gICAgICAgICAgICAgICAgPG1vdGlvbi5pbWdcbiAgICAgICAgICAgICAgICAgIGxheW91dElkPXtpdGVtLmlkICsgJ01lZGlhJ31cbiAgICAgICAgICAgICAgICAgIGNsYXNzPSdncmF5LWZpbHRlciByZWxhdGl2ZSdcbiAgICAgICAgICAgICAgICAgIHNyYz17cHJpbWFyeU1lZGlhUGF0aH1cbiAgICAgICAgICAgICAgICAgIGxheW91dFxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8bW90aW9uLmRpdiBjbGFzcz0nZmxleCBmbGV4LWNvbCBmbGV4LW5vd3JhcCBpdGVtcy1jZW50ZXIgd29yay1pdGVtLWRldGFpbC13cmFwcGVyIGN1cnNvci1wb2ludGVyIGVhc2Utb3V0IHNwYWNlLXgtNCBiZy1ibGFjayBiZy1vcGFjaXR5LTcwIGhvdmVyOmJnLW9wYWNpdHktMzAgcmVsYXRpdmUgei0wIGp1c3RpZnktY2VudGVyJz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSd3b3JrLXRpdGxlLXdyYXBwZXIgcHQtNic+XG4gICAgICAgICAgICAgICAgICA8TGluayB0bz17Jy8nICsgaXRlbS5pZH0+XG4gICAgICAgICAgICAgICAgICAgIDxoMVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPSd0ZXh0LTJ4bCBmb250LXNlbWlib2xkIGN1cnNvci1wb2ludGVyICdcbiAgICAgICAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGl0ZW0udGl0bGUgfX1cbiAgICAgICAgICAgICAgICAgICAgPjwvaDE+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICBjbGFzcz0ncHgtOCBsZzpteS00OCB3b3JrLWRldGFpbC1vdXRlciBteC1hdXRvIGZsZXggZmxleC1jb2wtcmV2ZXJzZSBpdGVtcy1jZW50ZXIgbGc6ZmxleC1yb3cgbGc6c3BhY2UteC04IG15LTE2J1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuMyB9fVxuICAgICAgICAgICAgICAgIGxheW91dFxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPG1vdGlvbi5kaXYgY2xhc3M9J3RleHQtYm94JyBsYXlvdXQ+XG4gICAgICAgICAgICAgICAgICA8aDFcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9J3RleHQtM3hsIGN1cnNvci1wb2ludGVyIG15LTEnXG4gICAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogaXRlbS50aXRsZSB9fVxuICAgICAgICAgICAgICAgICAgPjwvaDE+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzcz0ndGV4dC1ncmF5LTQwMCB0ZXh0LXhsJz5cbiAgICAgICAgICAgICAgICAgICAge2l0ZW0uZ3JvdXB9ICZuYnNwO3tpdGVtLnllYXJ9Jm5ic3A7eycgJ31cbiAgICAgICAgICAgICAgICAgICAgPExpbmtzIHNlbGVjdGVkV29yaz17aXRlbX0gLz5cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPSd0ZXh0LW1kIGxlYWRpbmctNSBtdC00Jz57aXRlbS5ibHVyYn08L3A+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdtdC02IGZsZXggZmxleC1yb3cgZmxleC13cmFwIHNwYWNlLXgtNSAnPlxuICAgICAgICAgICAgICAgICAgICB7aXRlbS50ZWNoLm1hcCgodGVjaE5hbWUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPFBpbGwgdGV4dD17dGVjaE5hbWV9IGtleT17dGVjaE5hbWUgKyBpbmRleH0gLz5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICAgPG1vdGlvbi5kaXYgbGF5b3V0IGNsYXNzPSdtZWRpYS1ib3ggYm9yZGVyLWdyYXktNTAgYm9yZGVyLTEnPlxuICAgICAgICAgICAgICAgICAgPG1vdGlvbi5pbWcgc3JjPXtwcmltYXJ5TWVkaWFQYXRofSAvPlxuICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8L3VsPlxuICApO1xufTtcblxuY29uc3QgSG9tZVBhZ2UgPSAoeyB3b3JrSXRlbXMgfSkgPT4ge1xuICAvLyBjb25zdCBbY29pbnMsIHNldENvaW5zXSA9IHVzZVN0YXRlKFtdKTtcbiAgLy8gY29uc29sZS5sb2coJ2RhdGEgZnJvbSBob21lcGFnZTogJywgZGF0YSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzPSdmbGV4IGZsZXgtY29sIG14LWF1dG8gcGFnZS13cmFwcGVyJz5cbiAgICAgIHsvKiA8TmF2QmFyIG5hdlN0YXRlPSdob21lJz48L05hdkJhcj4gKi99XG4gICAgICB7LyogPG1vdGlvbi5kaXZcbiAgICAgICAgY2xhc3M9J2JvcmRlci1ibGFjayBib3JkZXItdC0yIGJvcmRlci1iLTInXG4gICAgICAgIGxheW91dElkPSdzdWJOYXZCYXInXG4gICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuMzUgfX1cbiAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCBoZWlnaHQ6IDEwMCB9fVxuICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIGhlaWdodDogMCB9fVxuICAgICAgPjwvbW90aW9uLmRpdj4gKi99XG4gICAgICA8ZGl2IGNsYXNzPSdoZXJvLXNlY3Rpb24gcHktMTIgYmctZ3JhZGllbnQtdG8tciBmcm9tLXdoaXRlICB0by10cmFuc3BhcmVudCc+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHAgY2xhc3M9J3RleHQtNXhsIG1iLTI0IHBsLTQgZm9udC1ib2xkIHRyYWNraW5nLW5vcm1hbCc+XG4gICAgICAgICAgICBIaSEgSSdtIEZyZWRvLFxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICBhIGNyZWF0aXZlIGRldmVsb3BlclxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICBiYXNlZCBpbiBMb3MgQW5nZWxlc1xuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgey8qIDxwIGNsYXNzPSd0ZXh0LTJ4bCBwbC00Jz5cbiAgICAgICAgICAgIEkgbGlrZSBicmluZ2luZyBpZGVhcyB0byBsaWZlIHRocm91Z2ggY29kZSwgaW4gdGhlIGZvcm0gb2ZcbiAgICAgICAgICAgIG9wZW4tc291cmNlIHNvZnR3YXJlLCB3ZWJzaXRlcywgd2ViIGFwcHMsIHJpY2ggbWVkaWEgYmFubmVycywgYW5kXG4gICAgICAgICAgICBtb3JlIVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cCBjbGFzcz0ndGV4dC0yeGwgcGwtNCc+XG4gICAgICAgICAgICBJJ20gYSBmdWxsLXN0YWNrIEphdmFzU2NyaXB0IGVuZ2luZWVyIHNwZWNpYWxpemluZyBpbiBidWlsZGluZ1xuICAgICAgICAgICAgcGVyZm9ybWFudCBhbmQgaW50dWl0aXZlIHVzZXIgaW50ZXJmYWNlcyBpbiB0aGUgb3Blbi1zb3VyY2UgY29tbXVuaXR5IGFuZCBkaWdpdGFsIGFkdmVydGlzaW5nIHNwYWNlLlxuICAgICAgICAgIDwvcD4gKi99XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPSd3b3JrLXNlY3Rpb24gb3V0ZXItd3JhcHBlcic+XG4gICAgICAgIDxkaXYgY2xhc3M9J3RleHQtM3hsIGZvbnQtc2VtaWJvbGQgdHJhY2tpbmctd2lkZSBteS0xMiBwbC00Jz5cbiAgICAgICAgICBTb21lIG9mIG15IHdvcms6XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Um91dGVyPlxuICAgICAgICAgIDxSb3V0ZVxuICAgICAgICAgICAgcGF0aD17WycvOmlkJywgJy8nXX1cbiAgICAgICAgICAgIGNoaWxkcmVuPXsoeyBtYXRjaCB9KSA9PiAoXG4gICAgICAgICAgICAgIDxMaXN0IG1hdGNoPXttYXRjaH0gd29ya0l0ZW1zPXt3b3JrSXRlbXN9IC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvUm91dGVyPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHdvcmtJdGVtcyxcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ })

})