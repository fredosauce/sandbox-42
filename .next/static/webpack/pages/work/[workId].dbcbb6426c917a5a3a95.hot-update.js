webpackHotUpdate_N_E("pages/work/[workId]",{

/***/ "./pages/work/[workId].jsx":
/*!*********************************!*\
  !*** ./pages/work/[workId].jsx ***!
  \*********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/esm/index.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n\n\n\nvar _jsxFileName = \"/Users/fredo/Desktop/projects/sandbox-42/pages/work/[workId].jsx\",\n    _this = undefined;\n\n\n\n\n\n\nvar Pill = function Pill(_ref) {\n  var text = _ref.text;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    \"class\": \"text-sm py-1 px-3 bg-gray-50 text-gray-700 inline-block font-semibold tech-pill mb-4 rounded-xl\",\n    children: text\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Pill;\n\nvar Work = function Work(_ref2) {\n  var selectedWork = _ref2.selectedWork;\n  var primaryMediaPath = selectedWork.media[0];\n\n  var RepoLink = function RepoLink() {\n    return selectedWork.repo ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n      \"class\": \"text-gray-400 text-sm hover:text-blue-400\",\n      href: selectedWork.repo,\n      target: \"_blank\",\n      children: \"\\xA0REPO\\xA0\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, _this) : null;\n  };\n\n  var SiteLink = function SiteLink() {\n    return selectedWork.siteUrl ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n      \"class\": \"text-gray-400 text-sm hover:text-blue-400\",\n      href: selectedWork.siteUrl,\n      children: \"\\xA0SITE\\xA0\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, _this) : null;\n  };\n\n  var generateLinks = function generateLinks() {\n    console.log('is repo null? ' + RepoLink());\n    console.log(RepoLink() === null ? 'yes' : 'no');\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        \"class\": \"text-gray-100\",\n        children: RepoLink() !== null && SiteLink() !== null ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n          children: [\"[\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(RepoLink, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 45,\n            columnNumber: 16\n          }, _this), \"] [\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(SiteLink, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 45,\n            columnNumber: 31\n          }, _this), \"]\"]\n        }, void 0, true) : RepoLink() !== null ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n          children: [\"[\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(RepoLink, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 49,\n            columnNumber: 16\n          }, _this), \"]\"]\n        }, void 0, true) : SiteLink() !== null ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n          children: [\"[\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(SiteLink, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 16\n          }, _this), \"]\"]\n        }, void 0, true) : null\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false);\n  };\n\n  var links = generateLinks();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].div, {\n    \"class\": \"border-white border-2 work-detail-background\",\n    layoutId: selectedWork.id + 'Border',\n    initial: {\n      opacity: 0\n    },\n    animate: {\n      opacity: 1\n    },\n    exit: {\n      opacity: 0,\n      transition: {\n        duration: 0.15\n      }\n    },\n    transition: {\n      duration: 0.45\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      \"class\": \"ml-8 mt-4 sm:mt-8 absolute\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        href: \"/\",\n        \"class\": \"\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          \"class\": \"text-3xl cursor-pointer\",\n          children: '<<'\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      \"class\": \"px-8 lg:my-48 work-detail-outer mx-auto flex flex-col-reverse items-center lg:flex-row lg:space-x-8 my-16\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].div, {\n        \"class\": \"text-box\",\n        initial: {\n          opacity: 0,\n          x: -200\n        },\n        animate: {\n          opacity: 1,\n          x: 0\n        },\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].h1, {\n          \"class\": \"text-3xl cursor-pointer my-1\",\n          dangerouslySetInnerHTML: {\n            __html: selectedWork.title\n          },\n          layoutId: selectedWork.title + 'Header'\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          \"class\": \"text-gray-400 text-xl\",\n          children: [selectedWork.group, \" \\xA0\", selectedWork.year, \"\\xA0 \", links]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          \"class\": \"text-xl mt-5\",\n          children: selectedWork.blurb\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 90,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          \"class\": \"mt-8 flex flex-row flex-wrap space-x-5 \",\n          children: selectedWork.tech.map(function (techName, index) {\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Pill, {\n              text: techName\n            }, techName + index, false, {\n              fileName: _jsxFileName,\n              lineNumber: 93,\n              columnNumber: 15\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        \"class\": \"media-box border-gray-50 border-1\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].img, {\n          transition: {\n            duration: 0.15\n          },\n          initial: {\n            opacity: 0.7\n          },\n          animate: {\n            opacity: 1\n          },\n          layoutId: selectedWork.id + 'Media',\n          src: primaryMediaPath\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 98,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 63,\n    columnNumber: 5\n  }, _this);\n};\n\n_c2 = Work;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Work);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Pill\");\n$RefreshReg$(_c2, \"Work\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd29yay9bd29ya0lkXS5qc3g/NTNjNyJdLCJuYW1lcyI6WyJQaWxsIiwidGV4dCIsIldvcmsiLCJzZWxlY3RlZFdvcmsiLCJwcmltYXJ5TWVkaWFQYXRoIiwibWVkaWEiLCJSZXBvTGluayIsInJlcG8iLCJTaXRlTGluayIsInNpdGVVcmwiLCJnZW5lcmF0ZUxpbmtzIiwiY29uc29sZSIsImxvZyIsImxpbmtzIiwiaWQiLCJvcGFjaXR5IiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwieCIsIl9faHRtbCIsInRpdGxlIiwiZ3JvdXAiLCJ5ZWFyIiwiYmx1cmIiLCJ0ZWNoIiwibWFwIiwidGVjaE5hbWUiLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQWM7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDekIsc0JBQ0U7QUFBSyxhQUFNLGlHQUFYO0FBQUEsY0FDR0E7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFLRCxDQU5EOztLQUFNRCxJOztBQVFOLElBQU1FLElBQUksR0FBRyxTQUFQQSxJQUFPLFFBQXNCO0FBQUEsTUFBbkJDLFlBQW1CLFNBQW5CQSxZQUFtQjtBQUNqQyxNQUFNQyxnQkFBZ0IsR0FBR0QsWUFBWSxDQUFDRSxLQUFiLENBQW1CLENBQW5CLENBQXpCOztBQUNBLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXO0FBQUEsV0FDZkgsWUFBWSxDQUFDSSxJQUFiLGdCQUNFO0FBQ0UsZUFBTSwyQ0FEUjtBQUVFLFVBQUksRUFBRUosWUFBWSxDQUFDSSxJQUZyQjtBQUdFLFlBQU0sRUFBQyxRQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsR0FRSSxJQVRXO0FBQUEsR0FBakI7O0FBVUEsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVc7QUFBQSxX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QVksQ0FBQ29CO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBYkYsZUFjRTtBQUFLLG1CQUFNLHlDQUFYO0FBQUEsb0JBQ0dwQixZQUFZLENBQUNxQixJQUFiLENBQWtCQyxHQUFsQixDQUFzQixVQUFDQyxRQUFELEVBQVdDLEtBQVg7QUFBQSxnQ0FDckIscUVBQUMsSUFBRDtBQUFNLGtCQUFJLEVBQUVEO0FBQVosZUFBMkJBLFFBQVEsR0FBR0MsS0FBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEcUI7QUFBQSxXQUF0QjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFxQkU7QUFBSyxpQkFBTSxtQ0FBWDtBQUFBLCtCQUNFLHFFQUFDLG9EQUFELENBQVEsR0FBUjtBQUNFLG9CQUFVLEVBQUU7QUFBRVYsb0JBQVEsRUFBRTtBQUFaLFdBRGQ7QUFFRSxpQkFBTyxFQUFFO0FBQUVGLG1CQUFPLEVBQUU7QUFBWCxXQUZYO0FBR0UsaUJBQU8sRUFBRTtBQUFFQSxtQkFBTyxFQUFFO0FBQVgsV0FIWDtBQUlFLGtCQUFRLEVBQUVaLFlBQVksQ0FBQ1csRUFBYixHQUFrQixPQUo5QjtBQUtFLGFBQUcsRUFBRVY7QUFMUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXJCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQStDRCxDQTlGRDs7TUFBTUYsSTs7QUF5SFNBLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvd29yay9bd29ya0lkXS5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgd29ya0l0ZW1zIH0gZnJvbSAnLi4vLi4vcHVibGljL3dvcmsnO1xuaW1wb3J0IE5leHRMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBBcnJvd0JhY2tJY29uIH0gZnJvbSAnQGNoYWtyYS11aS9pY29ucyc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcblxuY29uc3QgUGlsbCA9ICh7IHRleHQgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9J3RleHQtc20gcHktMSBweC0zIGJnLWdyYXktNTAgdGV4dC1ncmF5LTcwMCBpbmxpbmUtYmxvY2sgZm9udC1zZW1pYm9sZCB0ZWNoLXBpbGwgbWItNCByb3VuZGVkLXhsJz5cbiAgICAgIHt0ZXh0fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgV29yayA9ICh7IHNlbGVjdGVkV29yayB9KSA9PiB7XG4gIGNvbnN0IHByaW1hcnlNZWRpYVBhdGggPSBzZWxlY3RlZFdvcmsubWVkaWFbMF07XG4gIGNvbnN0IFJlcG9MaW5rID0gKCkgPT5cbiAgICBzZWxlY3RlZFdvcmsucmVwbyA/IChcbiAgICAgIDxhXG4gICAgICAgIGNsYXNzPSd0ZXh0LWdyYXktNDAwIHRleHQtc20gaG92ZXI6dGV4dC1ibHVlLTQwMCdcbiAgICAgICAgaHJlZj17c2VsZWN0ZWRXb3JrLnJlcG99XG4gICAgICAgIHRhcmdldD0nX2JsYW5rJ1xuICAgICAgPlxuICAgICAgICAmbmJzcDtSRVBPJm5ic3A7XG4gICAgICA8L2E+XG4gICAgKSA6IG51bGw7XG4gIGNvbnN0IFNpdGVMaW5rID0gKCkgPT5cbiAgICBzZWxlY3RlZFdvcmsuc2l0ZVVybCA/IChcbiAgICAgIDxhXG4gICAgICAgIGNsYXNzPSd0ZXh0LWdyYXktNDAwIHRleHQtc20gaG92ZXI6dGV4dC1ibHVlLTQwMCdcbiAgICAgICAgaHJlZj17c2VsZWN0ZWRXb3JrLnNpdGVVcmx9XG4gICAgICA+XG4gICAgICAgICZuYnNwO1NJVEUmbmJzcDtcbiAgICAgIDwvYT5cbiAgICApIDogbnVsbDtcblxuICBjb25zdCBnZW5lcmF0ZUxpbmtzID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdpcyByZXBvIG51bGw/ICcgKyBSZXBvTGluaygpKTtcbiAgICBjb25zb2xlLmxvZyhSZXBvTGluaygpID09PSBudWxsID8gJ3llcycgOiAnbm8nKTtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPHNwYW4gY2xhc3M9J3RleHQtZ3JheS0xMDAnPlxuICAgICAgICAgIHtSZXBvTGluaygpICE9PSBudWxsICYmIFNpdGVMaW5rKCkgIT09IG51bGwgPyAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICBbPFJlcG9MaW5rIC8+XSBbPFNpdGVMaW5rIC8+XVxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKSA6IFJlcG9MaW5rKCkgIT09IG51bGwgPyAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICBbPFJlcG9MaW5rIC8+XVxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKSA6IFNpdGVMaW5rKCkgIT09IG51bGwgPyAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICBbPFNpdGVMaW5rIC8+XVxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvPlxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgbGlua3MgPSBnZW5lcmF0ZUxpbmtzKCk7XG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5kaXZcbiAgICAgIGNsYXNzPSdib3JkZXItd2hpdGUgYm9yZGVyLTIgd29yay1kZXRhaWwtYmFja2dyb3VuZCdcbiAgICAgIGxheW91dElkPXtzZWxlY3RlZFdvcmsuaWQgKyAnQm9yZGVyJ31cbiAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fVxuICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxIH19XG4gICAgICBleGl0PXt7IG9wYWNpdHk6IDAsIHRyYW5zaXRpb246IHsgZHVyYXRpb246IDAuMTUgfSB9fVxuICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC40NSB9fVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3M9J21sLTggbXQtNCBzbTptdC04IGFic29sdXRlJz5cbiAgICAgICAgPE5leHRMaW5rIGhyZWY9Jy8nIGNsYXNzPScnPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPSd0ZXh0LTN4bCBjdXJzb3ItcG9pbnRlcic+eyc8PCd9PC9zcGFuPlxuICAgICAgICA8L05leHRMaW5rPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPSdweC04IGxnOm15LTQ4IHdvcmstZGV0YWlsLW91dGVyIG14LWF1dG8gZmxleCBmbGV4LWNvbC1yZXZlcnNlIGl0ZW1zLWNlbnRlciBsZzpmbGV4LXJvdyBsZzpzcGFjZS14LTggbXktMTYnPlxuICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgIGNsYXNzPSd0ZXh0LWJveCdcbiAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHg6IC0yMDAgfX1cbiAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHg6IDAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxtb3Rpb24uaDFcbiAgICAgICAgICAgIGNsYXNzPSd0ZXh0LTN4bCBjdXJzb3ItcG9pbnRlciBteS0xJ1xuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBzZWxlY3RlZFdvcmsudGl0bGUgfX1cbiAgICAgICAgICAgIGxheW91dElkPXtzZWxlY3RlZFdvcmsudGl0bGUgKyAnSGVhZGVyJ31cbiAgICAgICAgICA+PC9tb3Rpb24uaDE+XG4gICAgICAgICAgPHAgY2xhc3M9J3RleHQtZ3JheS00MDAgdGV4dC14bCc+XG4gICAgICAgICAgICB7c2VsZWN0ZWRXb3JrLmdyb3VwfSAmbmJzcDt7c2VsZWN0ZWRXb3JrLnllYXJ9Jm5ic3A7IHtsaW5rc31cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHAgY2xhc3M9J3RleHQteGwgbXQtNSc+e3NlbGVjdGVkV29yay5ibHVyYn08L3A+XG4gICAgICAgICAgPGRpdiBjbGFzcz0nbXQtOCBmbGV4IGZsZXgtcm93IGZsZXgtd3JhcCBzcGFjZS14LTUgJz5cbiAgICAgICAgICAgIHtzZWxlY3RlZFdvcmsudGVjaC5tYXAoKHRlY2hOYW1lLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8UGlsbCB0ZXh0PXt0ZWNoTmFtZX0ga2V5PXt0ZWNoTmFtZSArIGluZGV4fSAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgPGRpdiBjbGFzcz0nbWVkaWEtYm94IGJvcmRlci1ncmF5LTUwIGJvcmRlci0xJz5cbiAgICAgICAgICA8bW90aW9uLmltZ1xuICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC4xNSB9fVxuICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLjcgfX1cbiAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSB9fVxuICAgICAgICAgICAgbGF5b3V0SWQ9e3NlbGVjdGVkV29yay5pZCArICdNZWRpYSd9XG4gICAgICAgICAgICBzcmM9e3ByaW1hcnlNZWRpYVBhdGh9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L21vdGlvbi5kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xuICBjb25zdCB7IHdvcmtJZCB9ID0gY29udGV4dC5wYXJhbXM7XG5cbiAgY29uc3QgcHJvamVjdHMgPSBbJ3JlYWN0eXBlJywgJ3NoaWZ0ZXJzJywgJ2FtcG0nLCAnYXJjbyddO1xuXG4gIC8vIGdyYWJzIHRoZSB0YXJnZXQgd29yayBvYmplY3QgZnJvbSBsaXN0XG4gIGNvbnN0IHNlbGVjdGVkV29yayA9IHdvcmtJdGVtc1twcm9qZWN0cy5pbmRleE9mKHdvcmtJZCldO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgc2VsZWN0ZWRXb3JrIH0sXG4gIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgY29uc3QgcHJvamVjdHMgPSBbJ3JlYWN0eXBlJywgJ3NoaWZ0ZXJzJywgJ2FtcG0nLCAnYXJjbyddO1xuICBjb25zdCBwYXRocyA9IHByb2plY3RzLm1hcCgod29ya0lkKSA9PiAoe1xuICAgIHBhcmFtczogeyB3b3JrSWQgfSxcbiAgfSkpO1xuXG4gIHJldHVybiB7XG4gICAgcGF0aHMsXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBXb3JrO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/work/[workId].jsx\n");

/***/ })

})