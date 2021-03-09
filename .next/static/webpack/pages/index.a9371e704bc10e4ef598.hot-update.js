webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_HeroBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/HeroBox */ \"./components/HeroBox.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! node-fetch */ \"./node_modules/node-fetch/browser.js\");\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Ticker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Ticker */ \"./components/Ticker.js\");\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/NavBar */ \"./components/NavBar.jsx\");\n/* harmony import */ var _sandbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sandbox */ \"./pages/sandbox.jsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _components_Links__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Links */ \"./components/Links.jsx\");\n/* harmony import */ var _utils_use_inverted_border_radius__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/use-inverted-border-radius */ \"./utils/use-inverted-border-radius.js\");\n\n\nvar _jsxFileName = \"/Users/fredo/Desktop/projects/sandbox-42/pages/index.jsx\",\n    _this = undefined;\n\n\n\n\n\n\n\n\n\n\n\n\nvar openSpring = {\n  type: 'spring',\n  duration: 0.6,\n  bounce: 0.3\n};\nvar closeSpring = {\n  type: 'spring',\n  duration: 0.45,\n  bounce: 0.3\n};\n\nvar Pill = function Pill(_ref) {\n  var text = _ref.text;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    \"class\": \"text-sm py-1 px-3 bg-gray-50 text-gray-700 inline-block font-semibold tech-pill mb-4 rounded-xl\",\n    children: text\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Pill;\n\nvar Overlay = function Overlay(_ref2) {\n  var isSelected = _ref2.isSelected;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_8__[\"motion\"].div, {\n    initial: false,\n    animate: {\n      opacity: isSelected ? 1 : 0\n    },\n    transition: {\n      duration: 0.35\n    },\n    style: {\n      pointerEvents: isSelected ? 'auto' : 'none'\n    },\n    className: \"overlay\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_9__[\"Link\"], {\n      to: \"/\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 3\n  }, _this);\n};\n\n_c2 = Overlay;\n\nvar List = function List(_ref3) {\n  var _s = $RefreshSig$();\n\n  var workItems = _ref3.workItems,\n      match = _ref3.match;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n    \"class\": \"pl-4 flex flex-col space-y-6\",\n    children: workItems.map(_s(function (item, index) {\n      _s();\n\n      // const isSelected =\n      var isSelected = match.params.id === item.id;\n      var primaryMediaPath = item.media[0];\n      var key = 'work-' + index;\n      var y = Object(framer_motion__WEBPACK_IMPORTED_MODULE_8__[\"useMotionValue\"])(0);\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        \"class\": \"work-item\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Overlay, {\n          isSelected: isSelected\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_8__[\"motion\"].div, {\n          className: \"overflow-hidden relative work-item-wrapper  border-transparent duration-400 rounded-md \".concat(isSelected && 'open rounded-3xl'),\n          transition: isSelected ? openSpring : closeSpring,\n          layout: true,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            \"class\": \"work-media-wrapper absolute z-0\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_8__[\"motion\"].img, {\n              layoutId: item.id + 'Media',\n              \"class\": \"gray-filter relative\",\n              src: primaryMediaPath,\n              layout: true\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 62,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_8__[\"motion\"].div, {\n            \"class\": \"flex flex-col flex-nowrap items-center work-item-detail-wrapper cursor-pointer ease-out space-x-4 bg-black bg-opacity-70 hover:bg-opacity-30 relative z-0 justify-center \".concat(isSelected && ''),\n            layout: true,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              \"class\": \"work-title-wrapper\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_9__[\"Link\"], {\n                to: '/' + item.id,\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n                  \"class\": \"text-xl font-semibold italic cursor-pointer tracking-wider spectral\",\n                  dangerouslySetInnerHTML: {\n                    __html: item.title\n                  }\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 77,\n                  columnNumber: 21\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 76,\n                columnNumber: 19\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 75,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 69,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_8__[\"motion\"].div, {\n            \"class\": \"px-8 lg:my-48 work-detail-outer mx-auto flex flex-col-reverse lg:flex-row items-center space-x-8 my-16\",\n            transition: {\n              duration: 0.3\n            },\n            layout: true,\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_8__[\"motion\"].div, {\n              \"class\": \"text-box\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n                \"class\": \"text-3xl cursor-pointer my-1 spectral\",\n                dangerouslySetInnerHTML: {\n                  __html: item.title\n                }\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 90,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                \"class\": \"text-gray-400 text-xl\",\n                children: [item.group, \" \\xA0\", item.year, \"\\xA0\", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Links__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                  selectedWork: item\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 96,\n                  columnNumber: 21\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 94,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                \"class\": \"text-md leading-5 mt-4\",\n                children: item.blurb\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 98,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                \"class\": \"mt-6 flex flex-row flex-wrap space-x-5 \",\n                children: item.tech.map(function (techName, index) {\n                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Pill, {\n                    text: techName\n                  }, techName + index, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 101,\n                    columnNumber: 23\n                  }, _this);\n                })\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 99,\n                columnNumber: 19\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 89,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_8__[\"motion\"].div, {\n              layout: true,\n              \"class\": \"media-box border-gray-50 border-1\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_8__[\"motion\"].img, {\n                src: primaryMediaPath\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 106,\n                columnNumber: 19\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 105,\n              columnNumber: 17\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 84,\n            columnNumber: 15\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 13\n        }, _this)]\n      }, key, true, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 11\n      }, _this);\n    }, \"767kVZ58CuuyC/DJlU9EmP8z1u0=\", false, function () {\n      return [framer_motion__WEBPACK_IMPORTED_MODULE_8__[\"useMotionValue\"]];\n    }))\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 43,\n    columnNumber: 5\n  }, _this);\n};\n\n_c3 = List;\n\nvar HomePage = function HomePage(_ref4) {\n  var workItems = _ref4.workItems;\n  // const [coins, setCoins] = useState([]);\n  // console.log('data from homepage: ', data);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    \"class\": \"flex flex-col mx-auto page-wrapper pl-6 md:pl-8\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      \"class\": \"hero-section py-12  mx-auto\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        \"class\": \"hero-inner\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          \"class\": \"text-2xl pl-4 font-medium\",\n          children: [\"Fredo Chen is a\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 136,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n            \"class\": \"\",\n            children: \"frontend engineer\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 137,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 138,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n            \"class\": \"\",\n            children: \"& creative developer\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 139,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 140,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n            \"class\": \"\",\n            children: \"based in Los Angeles\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 141,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 134,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 143,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 133,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 132,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      \"class\": \"work-section mx-auto\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        \"class\": \"text-2xl tracking-wide mt-12 pl-4\",\n        children: \"Selected works\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 147,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_9__[\"BrowserRouter\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_9__[\"Route\"], {\n          path: ['/:id', '/'],\n          children: function children(_ref5) {\n            var match = _ref5.match;\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(List, {\n              match: match,\n              workItems: workItems\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 152,\n              columnNumber: 15\n            }, _this);\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 149,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 148,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 146,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      \"class\": \"contact-section mx-auto my-24\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        \"class\": \"text-2xl tracking-wide pl-4\",\n        children: \"Contact me\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 158,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 157,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 122,\n    columnNumber: 5\n  }, _this);\n};\n\n_c4 = HomePage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"Pill\");\n$RefreshReg$(_c2, \"Overlay\");\n$RefreshReg$(_c3, \"List\");\n$RefreshReg$(_c4, \"HomePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4PzcwYzUiXSwibmFtZXMiOlsib3BlblNwcmluZyIsInR5cGUiLCJkdXJhdGlvbiIsImJvdW5jZSIsImNsb3NlU3ByaW5nIiwiUGlsbCIsInRleHQiLCJPdmVybGF5IiwiaXNTZWxlY3RlZCIsIm9wYWNpdHkiLCJwb2ludGVyRXZlbnRzIiwiTGlzdCIsIndvcmtJdGVtcyIsIm1hdGNoIiwibWFwIiwiaXRlbSIsImluZGV4IiwicGFyYW1zIiwiaWQiLCJwcmltYXJ5TWVkaWFQYXRoIiwibWVkaWEiLCJrZXkiLCJ5IiwidXNlTW90aW9uVmFsdWUiLCJfX2h0bWwiLCJ0aXRsZSIsImdyb3VwIiwieWVhciIsImJsdXJiIiwidGVjaCIsInRlY2hOYW1lIiwiSG9tZVBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFVBQVUsR0FBRztBQUFFQyxNQUFJLEVBQUUsUUFBUjtBQUFrQkMsVUFBUSxFQUFFLEdBQTVCO0FBQWlDQyxRQUFNLEVBQUU7QUFBekMsQ0FBbkI7QUFDQSxJQUFNQyxXQUFXLEdBQUc7QUFDbEJILE1BQUksRUFBRSxRQURZO0FBRWxCQyxVQUFRLEVBQUUsSUFGUTtBQUdsQkMsUUFBTSxFQUFFO0FBSFUsQ0FBcEI7O0FBTUEsSUFBTUUsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBYztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUN6QixzQkFDRTtBQUFLLGFBQU0saUdBQVg7QUFBQSxjQUNHQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUtELENBTkQ7O0tBQU1ELEk7O0FBUU4sSUFBTUUsT0FBTyxHQUFHLFNBQVZBLE9BQVU7QUFBQSxNQUFHQyxVQUFILFNBQUdBLFVBQUg7QUFBQSxzQkFDZCxxRUFBQyxvREFBRCxDQUFRLEdBQVI7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O0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF4QkYsZUFtQ0U7QUFBSyxlQUFNLCtCQUFYO0FBQUEsNkJBQ0U7QUFBSyxpQkFBTSw2QkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFuQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF5Q0QsQ0E3Q0Q7O01BQU1tQixROztBQXVEU0EsdUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVyb0JveCBmcm9tICcuLi9jb21wb25lbnRzL0hlcm9Cb3gnO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBmZXRjaCBmcm9tICdub2RlLWZldGNoJztcbmltcG9ydCBUaWNrZXIgZnJvbSAnLi4vY29tcG9uZW50cy9UaWNrZXInO1xuaW1wb3J0IE5hdkJhciBmcm9tICcuLi9jb21wb25lbnRzL05hdkJhcic7XG5pbXBvcnQgU2FuZGJveCBmcm9tICcuL3NhbmRib3gnO1xuaW1wb3J0IE5leHRMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBtb3Rpb24sIHVzZU1vdGlvblZhbHVlIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgeyB3b3JrSXRlbXMgfSBmcm9tICcuLi9wdWJsaWMvd29yayc7XG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgTGluaywgUm91dGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBMaW5rcyBmcm9tICcuLi9jb21wb25lbnRzL0xpbmtzJztcbmltcG9ydCB7IHVzZUludmVydGVkQm9yZGVyUmFkaXVzIH0gZnJvbSAnLi4vdXRpbHMvdXNlLWludmVydGVkLWJvcmRlci1yYWRpdXMnO1xuXG5jb25zdCBvcGVuU3ByaW5nID0geyB0eXBlOiAnc3ByaW5nJywgZHVyYXRpb246IDAuNiwgYm91bmNlOiAwLjMgfTtcbmNvbnN0IGNsb3NlU3ByaW5nID0ge1xuICB0eXBlOiAnc3ByaW5nJyxcbiAgZHVyYXRpb246IDAuNDUsXG4gIGJvdW5jZTogMC4zLFxufTtcblxuY29uc3QgUGlsbCA9ICh7IHRleHQgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9J3RleHQtc20gcHktMSBweC0zIGJnLWdyYXktNTAgdGV4dC1ncmF5LTcwMCBpbmxpbmUtYmxvY2sgZm9udC1zZW1pYm9sZCB0ZWNoLXBpbGwgbWItNCByb3VuZGVkLXhsJz5cbiAgICAgIHt0ZXh0fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgT3ZlcmxheSA9ICh7IGlzU2VsZWN0ZWQgfSkgPT4gKFxuICA8bW90aW9uLmRpdlxuICAgIGluaXRpYWw9e2ZhbHNlfVxuICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogaXNTZWxlY3RlZCA/IDEgOiAwIH19XG4gICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC4zNSB9fVxuICAgIHN0eWxlPXt7IHBvaW50ZXJFdmVudHM6IGlzU2VsZWN0ZWQgPyAnYXV0bycgOiAnbm9uZScgfX1cbiAgICBjbGFzc05hbWU9J292ZXJsYXknXG4gID5cbiAgICA8TGluayB0bz0nLycgLz5cbiAgPC9tb3Rpb24uZGl2PlxuKTtcblxuY29uc3QgTGlzdCA9ICh7IHdvcmtJdGVtcywgbWF0Y2ggfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDx1bCBjbGFzcz0ncGwtNCBmbGV4IGZsZXgtY29sIHNwYWNlLXktNic+XG4gICAgICB7d29ya0l0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgLy8gY29uc3QgaXNTZWxlY3RlZCA9XG4gICAgICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSBtYXRjaC5wYXJhbXMuaWQgPT09IGl0ZW0uaWQ7XG4gICAgICAgIGNvbnN0IHByaW1hcnlNZWRpYVBhdGggPSBpdGVtLm1lZGlhWzBdO1xuICAgICAgICBjb25zdCBrZXkgPSAnd29yay0nICsgaW5kZXg7XG5cbiAgICAgICAgY29uc3QgeSA9IHVzZU1vdGlvblZhbHVlKDApO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxsaSBjbGFzcz0nd29yay1pdGVtJyBrZXk9e2tleX0+XG4gICAgICAgICAgICA8T3ZlcmxheSBpc1NlbGVjdGVkPXtpc1NlbGVjdGVkfSAvPlxuICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgb3ZlcmZsb3ctaGlkZGVuIHJlbGF0aXZlIHdvcmstaXRlbS13cmFwcGVyICBib3JkZXItdHJhbnNwYXJlbnQgZHVyYXRpb24tNDAwIHJvdW5kZWQtbWQgJHtcbiAgICAgICAgICAgICAgICBpc1NlbGVjdGVkICYmICdvcGVuIHJvdW5kZWQtM3hsJ1xuICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgdHJhbnNpdGlvbj17aXNTZWxlY3RlZCA/IG9wZW5TcHJpbmcgOiBjbG9zZVNwcmluZ31cbiAgICAgICAgICAgICAgbGF5b3V0XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3dvcmstbWVkaWEtd3JhcHBlciBhYnNvbHV0ZSB6LTAnPlxuICAgICAgICAgICAgICAgIDxtb3Rpb24uaW1nXG4gICAgICAgICAgICAgICAgICBsYXlvdXRJZD17aXRlbS5pZCArICdNZWRpYSd9XG4gICAgICAgICAgICAgICAgICBjbGFzcz0nZ3JheS1maWx0ZXIgcmVsYXRpdmUnXG4gICAgICAgICAgICAgICAgICBzcmM9e3ByaW1hcnlNZWRpYVBhdGh9XG4gICAgICAgICAgICAgICAgICBsYXlvdXRcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICBjbGFzcz17YGZsZXggZmxleC1jb2wgZmxleC1ub3dyYXAgaXRlbXMtY2VudGVyIHdvcmstaXRlbS1kZXRhaWwtd3JhcHBlciBjdXJzb3ItcG9pbnRlciBlYXNlLW91dCBzcGFjZS14LTQgYmctYmxhY2sgYmctb3BhY2l0eS03MCBob3ZlcjpiZy1vcGFjaXR5LTMwIHJlbGF0aXZlIHotMCBqdXN0aWZ5LWNlbnRlciAke1xuICAgICAgICAgICAgICAgICAgaXNTZWxlY3RlZCAmJiAnJ1xuICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgIGxheW91dFxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nd29yay10aXRsZS13cmFwcGVyJz5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXsnLycgKyBpdGVtLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgPGgxXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M9J3RleHQteGwgZm9udC1zZW1pYm9sZCBpdGFsaWMgY3Vyc29yLXBvaW50ZXIgdHJhY2tpbmctd2lkZXIgc3BlY3RyYWwnXG4gICAgICAgICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBpdGVtLnRpdGxlIH19XG4gICAgICAgICAgICAgICAgICAgID48L2gxPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgICAgY2xhc3M9J3B4LTggbGc6bXktNDggd29yay1kZXRhaWwtb3V0ZXIgbXgtYXV0byBmbGV4IGZsZXgtY29sLXJldmVyc2UgbGc6ZmxleC1yb3cgaXRlbXMtY2VudGVyIHNwYWNlLXgtOCBteS0xNidcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjMgfX1cbiAgICAgICAgICAgICAgICBsYXlvdXRcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2IGNsYXNzPSd0ZXh0LWJveCc+XG4gICAgICAgICAgICAgICAgICA8aDFcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9J3RleHQtM3hsIGN1cnNvci1wb2ludGVyIG15LTEgc3BlY3RyYWwnXG4gICAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogaXRlbS50aXRsZSB9fVxuICAgICAgICAgICAgICAgICAgPjwvaDE+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzcz0ndGV4dC1ncmF5LTQwMCB0ZXh0LXhsJz5cbiAgICAgICAgICAgICAgICAgICAge2l0ZW0uZ3JvdXB9ICZuYnNwO3tpdGVtLnllYXJ9Jm5ic3A7eycgJ31cbiAgICAgICAgICAgICAgICAgICAgPExpbmtzIHNlbGVjdGVkV29yaz17aXRlbX0gLz5cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPSd0ZXh0LW1kIGxlYWRpbmctNSBtdC00Jz57aXRlbS5ibHVyYn08L3A+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdtdC02IGZsZXggZmxleC1yb3cgZmxleC13cmFwIHNwYWNlLXgtNSAnPlxuICAgICAgICAgICAgICAgICAgICB7aXRlbS50ZWNoLm1hcCgodGVjaE5hbWUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPFBpbGwgdGV4dD17dGVjaE5hbWV9IGtleT17dGVjaE5hbWUgKyBpbmRleH0gLz5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICAgPG1vdGlvbi5kaXYgbGF5b3V0IGNsYXNzPSdtZWRpYS1ib3ggYm9yZGVyLWdyYXktNTAgYm9yZGVyLTEnPlxuICAgICAgICAgICAgICAgICAgPG1vdGlvbi5pbWcgc3JjPXtwcmltYXJ5TWVkaWFQYXRofSAvPlxuICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8L3VsPlxuICApO1xufTtcblxuY29uc3QgSG9tZVBhZ2UgPSAoeyB3b3JrSXRlbXMgfSkgPT4ge1xuICAvLyBjb25zdCBbY29pbnMsIHNldENvaW5zXSA9IHVzZVN0YXRlKFtdKTtcbiAgLy8gY29uc29sZS5sb2coJ2RhdGEgZnJvbSBob21lcGFnZTogJywgZGF0YSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzPSdmbGV4IGZsZXgtY29sIG14LWF1dG8gcGFnZS13cmFwcGVyIHBsLTYgbWQ6cGwtOCc+XG4gICAgICB7LyogPE5hdkJhciBuYXZTdGF0ZT0naG9tZSc+PC9OYXZCYXI+ICovfVxuICAgICAgey8qIDxtb3Rpb24uZGl2XG4gICAgICAgIGNsYXNzPSdib3JkZXItYmxhY2sgYm9yZGVyLXQtMiBib3JkZXItYi0yJ1xuICAgICAgICBsYXlvdXRJZD0nc3ViTmF2QmFyJ1xuICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjM1IH19XG4gICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgaGVpZ2h0OiAxMDAgfX1cbiAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCBoZWlnaHQ6IDAgfX1cbiAgICAgID48L21vdGlvbi5kaXY+ICovfVxuICAgICAgey8qIDxkaXYgY2xhc3M9J3NwbGFzaC1pbWFnZSc+PC9kaXY+ICovfVxuICAgICAgPGRpdiBjbGFzcz0naGVyby1zZWN0aW9uIHB5LTEyICBteC1hdXRvJz5cbiAgICAgICAgPGRpdiBjbGFzcz0naGVyby1pbm5lcic+XG4gICAgICAgICAgPHAgY2xhc3M9J3RleHQtMnhsIHBsLTQgZm9udC1tZWRpdW0nPlxuICAgICAgICAgICAgRnJlZG8gQ2hlbiBpcyBhXG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPScnPmZyb250ZW5kIGVuZ2luZWVyPC9zcGFuPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz0nJz4mIGNyZWF0aXZlIGRldmVsb3Blcjwvc3Bhbj5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9Jyc+YmFzZWQgaW4gTG9zIEFuZ2VsZXM8L3NwYW4+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPSd3b3JrLXNlY3Rpb24gbXgtYXV0byc+XG4gICAgICAgIDxkaXYgY2xhc3M9J3RleHQtMnhsIHRyYWNraW5nLXdpZGUgbXQtMTIgcGwtNCc+U2VsZWN0ZWQgd29ya3M8L2Rpdj5cbiAgICAgICAgPFJvdXRlcj5cbiAgICAgICAgICA8Um91dGVcbiAgICAgICAgICAgIHBhdGg9e1snLzppZCcsICcvJ119XG4gICAgICAgICAgICBjaGlsZHJlbj17KHsgbWF0Y2ggfSkgPT4gKFxuICAgICAgICAgICAgICA8TGlzdCBtYXRjaD17bWF0Y2h9IHdvcmtJdGVtcz17d29ya0l0ZW1zfSAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L1JvdXRlcj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz0nY29udGFjdC1zZWN0aW9uIG14LWF1dG8gbXktMjQnPlxuICAgICAgICA8ZGl2IGNsYXNzPSd0ZXh0LTJ4bCB0cmFja2luZy13aWRlIHBsLTQnPkNvbnRhY3QgbWU8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICB3b3JrSXRlbXMsXG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ })

})