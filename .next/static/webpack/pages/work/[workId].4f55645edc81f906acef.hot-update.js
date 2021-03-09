webpackHotUpdate_N_E("pages/work/[workId]",{

/***/ "./pages/work/[workId].jsx":
/*!*********************************!*\
  !*** ./pages/work/[workId].jsx ***!
  \*********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/esm/index.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n\n\n\nvar _jsxFileName = \"/Users/fredo/Desktop/projects/sandbox-42/pages/work/[workId].jsx\",\n    _this = undefined;\n\n\n\n\n\n\nvar Pill = function Pill(_ref) {\n  var text = _ref.text;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    \"class\": \"text-sm py-1 px-3 bg-gray-50 text-gray-700 inline-block font-semibold tech-pill mb-4 rounded-xl\",\n    children: text\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Pill;\n\nvar Work = function Work(_ref2) {\n  var selectedWork = _ref2.selectedWork;\n  var primaryMediaPath = selectedWork.media[0];\n\n  var RepoLink = function RepoLink() {\n    return selectedWork.repo ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n      \"class\": \"text-gray-400 text-sm hover:text-blue-400\",\n      href: selectedWork.repo,\n      target: \"_blank\",\n      children: \"\\xA0REPO\\xA0\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, _this) : null;\n  };\n\n  var SiteLink = function SiteLink() {\n    return selectedWork.siteUrl ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n      \"class\": \"text-gray-400 text-sm hover:text-blue-400\",\n      href: selectedWork.siteUrl,\n      target: \"_blank\",\n      children: \"\\xA0SITE\\xA0\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, _this) : null;\n  };\n\n  var generateLinks = function generateLinks() {\n    console.log('is repo null? ' + RepoLink());\n    console.log(RepoLink() === null ? 'yes' : 'no');\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        \"class\": \"text-gray-100\",\n        children: RepoLink() !== null && SiteLink() !== null ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n          children: [\"[\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(RepoLink, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 46,\n            columnNumber: 16\n          }, _this), \"] [\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(SiteLink, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 46,\n            columnNumber: 31\n          }, _this), \"]\"]\n        }, void 0, true) : RepoLink() !== null ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n          children: [\"[\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(RepoLink, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 16\n          }, _this), \"]\"]\n        }, void 0, true) : SiteLink() !== null ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n          children: [\"[\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(SiteLink, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 16\n          }, _this), \"]\"]\n        }, void 0, true) : null\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false);\n  };\n\n  var links = generateLinks();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].div, {\n    \"class\": \"border-white border-2 work-detail-background\",\n    layoutId: selectedWork.id + 'Border',\n    initial: {\n      opacity: 0\n    },\n    animate: {\n      opacity: 1\n    },\n    exit: {\n      opacity: 0,\n      transition: {\n        duration: 0.15\n      }\n    },\n    transition: {\n      duration: 0.45\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      \"class\": \"ml-8 mt-4 sm:mt-8 absolute\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        href: \"/\",\n        \"class\": \"\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          \"class\": \"text-3xl cursor-pointer\",\n          children: '<<'\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      \"class\": \"px-8 lg:my-48 work-detail-outer mx-auto flex flex-col-reverse items-center lg:flex-row lg:space-x-8 my-16\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].div, {\n        \"class\": \"text-box\",\n        initial: {\n          opacity: 0,\n          x: -180\n        },\n        animate: {\n          opacity: 1,\n          x: 0\n        },\n        transition: {\n          duration: 0.35,\n          delay: 0.25\n        },\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].h1, {\n          \"class\": \"text-3xl cursor-pointer my-1\",\n          dangerouslySetInnerHTML: {\n            __html: selectedWork.title\n          },\n          layoutId: selectedWork.title + 'Header'\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          \"class\": \"text-gray-400 text-xl\",\n          children: [selectedWork.group, \" \\xA0\", selectedWork.year, \"\\xA0 \", links]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          \"class\": \"text-xl mt-5\",\n          children: selectedWork.blurb\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          \"class\": \"mt-8 flex flex-row flex-wrap space-x-5 \",\n          children: selectedWork.tech.map(function (techName, index) {\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Pill, {\n              text: techName\n            }, techName + index, false, {\n              fileName: _jsxFileName,\n              lineNumber: 95,\n              columnNumber: 15\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].div, {\n        transition: {\n          duration: 0.15,\n          delay: 0.6\n        },\n        initial: {\n          opacity: 0\n        },\n        animate: {\n          opacity: 1\n        },\n        \"class\": \"media-box border-gray-50 border-1\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].img, {\n          layoutId: selectedWork.id + 'Media',\n          src: primaryMediaPath\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 105,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 99,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 64,\n    columnNumber: 5\n  }, _this);\n};\n\n_c2 = Work;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Work);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Pill\");\n$RefreshReg$(_c2, \"Work\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd29yay9bd29ya0lkXS5qc3g/NTNjNyJdLCJuYW1lcyI6WyJQaWxsIiwidGV4dCIsIldvcmsiLCJzZWxlY3RlZFdvcmsiLCJwcmltYXJ5TWVkaWFQYXRoIiwibWVkaWEiLCJSZXBvTGluayIsInJlcG8iLCJTaXRlTGluayIsInNpdGVVcmwiLCJnZW5lcmF0ZUxpbmtzIiwiY29uc29sZSIsImxvZyIsImxpbmtzIiwiaWQiLCJvcGFjaXR5IiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwieCIsImRlbGF5IiwiX19odG1sIiwidGl0bGUiLCJncm91cCIsInllYXIiLCJibHVyYiIsInRlY2giLCJtYXAiLCJ0ZWNoTmFtZSIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBYztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUN6QixzQkFDRTtBQUFLLGFBQU0saUdBQVg7QUFBQSxjQUNHQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUtELENBTkQ7O0tBQU1ELEk7O0FBUU4sSUFBTUUsSUFBSSxHQUFHLFNBQVBBLElBQU8sUUFBc0I7QUFBQSxNQUFuQkMsWUFBbUIsU0FBbkJBLFlBQW1CO0FBQ2pDLE1BQU1DLGdCQUFnQixHQUFHRCxZQUFZLENBQUNFLEtBQWIsQ0FBbUIsQ0FBbkIsQ0FBekI7O0FBQ0EsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVc7QUFBQSxXQUNmSCxZQUFZLENBQUNJLElBQWIsZ0JBQ0U7QUFDRSxlQUFNLDJDQURSO0FBRUUsVUFBSSxFQUFFSixZQUFZLENBQUNJLElBRnJCO0FBR0UsWUFBTSxFQUFDLFFBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixHQVFJLElBVFc7QUFBQSxHQUFqQjs7QUFVQSxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFB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dCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB3b3JrSXRlbXMgfSBmcm9tICcuLi8uLi9wdWJsaWMvd29yayc7XG5pbXBvcnQgTmV4dExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IEFycm93QmFja0ljb24gfSBmcm9tICdAY2hha3JhLXVpL2ljb25zJztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuXG5jb25zdCBQaWxsID0gKHsgdGV4dCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzcz0ndGV4dC1zbSBweS0xIHB4LTMgYmctZ3JheS01MCB0ZXh0LWdyYXktNzAwIGlubGluZS1ibG9jayBmb250LXNlbWlib2xkIHRlY2gtcGlsbCBtYi00IHJvdW5kZWQteGwnPlxuICAgICAge3RleHR9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBXb3JrID0gKHsgc2VsZWN0ZWRXb3JrIH0pID0+IHtcbiAgY29uc3QgcHJpbWFyeU1lZGlhUGF0aCA9IHNlbGVjdGVkV29yay5tZWRpYVswXTtcbiAgY29uc3QgUmVwb0xpbmsgPSAoKSA9PlxuICAgIHNlbGVjdGVkV29yay5yZXBvID8gKFxuICAgICAgPGFcbiAgICAgICAgY2xhc3M9J3RleHQtZ3JheS00MDAgdGV4dC1zbSBob3Zlcjp0ZXh0LWJsdWUtNDAwJ1xuICAgICAgICBocmVmPXtzZWxlY3RlZFdvcmsucmVwb31cbiAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXG4gICAgICA+XG4gICAgICAgICZuYnNwO1JFUE8mbmJzcDtcbiAgICAgIDwvYT5cbiAgICApIDogbnVsbDtcbiAgY29uc3QgU2l0ZUxpbmsgPSAoKSA9PlxuICAgIHNlbGVjdGVkV29yay5zaXRlVXJsID8gKFxuICAgICAgPGFcbiAgICAgICAgY2xhc3M9J3RleHQtZ3JheS00MDAgdGV4dC1zbSBob3Zlcjp0ZXh0LWJsdWUtNDAwJ1xuICAgICAgICBocmVmPXtzZWxlY3RlZFdvcmsuc2l0ZVVybH1cbiAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXG4gICAgICA+XG4gICAgICAgICZuYnNwO1NJVEUmbmJzcDtcbiAgICAgIDwvYT5cbiAgICApIDogbnVsbDtcblxuICBjb25zdCBnZW5lcmF0ZUxpbmtzID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdpcyByZXBvIG51bGw/ICcgKyBSZXBvTGluaygpKTtcbiAgICBjb25zb2xlLmxvZyhSZXBvTGluaygpID09PSBudWxsID8gJ3llcycgOiAnbm8nKTtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPHNwYW4gY2xhc3M9J3RleHQtZ3JheS0xMDAnPlxuICAgICAgICAgIHtSZXBvTGluaygpICE9PSBudWxsICYmIFNpdGVMaW5rKCkgIT09IG51bGwgPyAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICBbPFJlcG9MaW5rIC8+XSBbPFNpdGVMaW5rIC8+XVxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKSA6IFJlcG9MaW5rKCkgIT09IG51bGwgPyAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICBbPFJlcG9MaW5rIC8+XVxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKSA6IFNpdGVMaW5rKCkgIT09IG51bGwgPyAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICBbPFNpdGVMaW5rIC8+XVxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvPlxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgbGlua3MgPSBnZW5lcmF0ZUxpbmtzKCk7XG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5kaXZcbiAgICAgIGNsYXNzPSdib3JkZXItd2hpdGUgYm9yZGVyLTIgd29yay1kZXRhaWwtYmFja2dyb3VuZCdcbiAgICAgIGxheW91dElkPXtzZWxlY3RlZFdvcmsuaWQgKyAnQm9yZGVyJ31cbiAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fVxuICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxIH19XG4gICAgICBleGl0PXt7IG9wYWNpdHk6IDAsIHRyYW5zaXRpb246IHsgZHVyYXRpb246IDAuMTUgfSB9fVxuICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC40NSB9fVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3M9J21sLTggbXQtNCBzbTptdC04IGFic29sdXRlJz5cbiAgICAgICAgPE5leHRMaW5rIGhyZWY9Jy8nIGNsYXNzPScnPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPSd0ZXh0LTN4bCBjdXJzb3ItcG9pbnRlcic+eyc8PCd9PC9zcGFuPlxuICAgICAgICA8L05leHRMaW5rPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPSdweC04IGxnOm15LTQ4IHdvcmstZGV0YWlsLW91dGVyIG14LWF1dG8gZmxleCBmbGV4LWNvbC1yZXZlcnNlIGl0ZW1zLWNlbnRlciBsZzpmbGV4LXJvdyBsZzpzcGFjZS14LTggbXktMTYnPlxuICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgIGNsYXNzPSd0ZXh0LWJveCdcbiAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHg6IC0xODAgfX1cbiAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHg6IDAgfX1cbiAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjM1LCBkZWxheTogMC4yNSB9fVxuICAgICAgICA+XG4gICAgICAgICAgPG1vdGlvbi5oMVxuICAgICAgICAgICAgY2xhc3M9J3RleHQtM3hsIGN1cnNvci1wb2ludGVyIG15LTEnXG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHNlbGVjdGVkV29yay50aXRsZSB9fVxuICAgICAgICAgICAgbGF5b3V0SWQ9e3NlbGVjdGVkV29yay50aXRsZSArICdIZWFkZXInfVxuICAgICAgICAgID48L21vdGlvbi5oMT5cbiAgICAgICAgICA8cCBjbGFzcz0ndGV4dC1ncmF5LTQwMCB0ZXh0LXhsJz5cbiAgICAgICAgICAgIHtzZWxlY3RlZFdvcmsuZ3JvdXB9ICZuYnNwO3tzZWxlY3RlZFdvcmsueWVhcn0mbmJzcDsge2xpbmtzfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cCBjbGFzcz0ndGV4dC14bCBtdC01Jz57c2VsZWN0ZWRXb3JrLmJsdXJifTwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzPSdtdC04IGZsZXggZmxleC1yb3cgZmxleC13cmFwIHNwYWNlLXgtNSAnPlxuICAgICAgICAgICAge3NlbGVjdGVkV29yay50ZWNoLm1hcCgodGVjaE5hbWUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxQaWxsIHRleHQ9e3RlY2hOYW1lfSBrZXk9e3RlY2hOYW1lICsgaW5kZXh9IC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuMTUsIGRlbGF5OiAwLjYgfX1cbiAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEgfX1cbiAgICAgICAgICBjbGFzcz0nbWVkaWEtYm94IGJvcmRlci1ncmF5LTUwIGJvcmRlci0xJ1xuICAgICAgICA+XG4gICAgICAgICAgPG1vdGlvbi5pbWdcbiAgICAgICAgICAgIGxheW91dElkPXtzZWxlY3RlZFdvcmsuaWQgKyAnTWVkaWEnfVxuICAgICAgICAgICAgc3JjPXtwcmltYXJ5TWVkaWFQYXRofVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbW90aW9uLmRpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XG4gIGNvbnN0IHsgd29ya0lkIH0gPSBjb250ZXh0LnBhcmFtcztcblxuICBjb25zdCBwcm9qZWN0cyA9IFsncmVhY3R5cGUnLCAnc2hpZnRlcnMnLCAnYW1wbScsICdhcmNvJ107XG5cbiAgLy8gZ3JhYnMgdGhlIHRhcmdldCB3b3JrIG9iamVjdCBmcm9tIGxpc3RcbiAgY29uc3Qgc2VsZWN0ZWRXb3JrID0gd29ya0l0ZW1zW3Byb2plY3RzLmluZGV4T2Yod29ya0lkKV07XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBzZWxlY3RlZFdvcmsgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCBwcm9qZWN0cyA9IFsncmVhY3R5cGUnLCAnc2hpZnRlcnMnLCAnYW1wbScsICdhcmNvJ107XG4gIGNvbnN0IHBhdGhzID0gcHJvamVjdHMubWFwKCh3b3JrSWQpID0+ICh7XG4gICAgcGFyYW1zOiB7IHdvcmtJZCB9LFxuICB9KSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwYXRocyxcbiAgICBmYWxsYmFjazogZmFsc2UsXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdvcms7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/work/[workId].jsx\n");

/***/ })

})