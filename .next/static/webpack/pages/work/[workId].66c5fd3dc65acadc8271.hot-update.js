webpackHotUpdate_N_E("pages/work/[workId]",{

/***/ "./pages/work/[workId].jsx":
/*!*********************************!*\
  !*** ./pages/work/[workId].jsx ***!
  \*********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/esm/index.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n\n\n\nvar _jsxFileName = \"/Users/fredo/Desktop/projects/sandbox-42/pages/work/[workId].jsx\",\n    _this = undefined;\n\n\n\n\n\n\nvar Pill = function Pill(_ref) {\n  var text = _ref.text;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    \"class\": \"text-sm py-1 px-3 bg-gray-50 text-gray-700 inline-block font-semibold tech-pill mb-4 rounded-xl\",\n    children: text\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Pill;\n\nvar Work = function Work(_ref2) {\n  var selectedWork = _ref2.selectedWork;\n  var primaryMediaPath = selectedWork.media[0];\n\n  var RepoLink = function RepoLink() {\n    return selectedWork.repo ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n      \"class\": \"text-gray-400 text-sm hover:text-blue-400\",\n      href: selectedWork.repo,\n      target: \"_blank\",\n      children: \"\\xA0REPO\\xA0\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, _this) : null;\n  };\n\n  var SiteLink = function SiteLink() {\n    return selectedWork.siteUrl ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n      \"class\": \"text-gray-400 text-sm hover:text-blue-400\",\n      href: selectedWork.siteUrl,\n      children: \"\\xA0SITE\\xA0\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, _this) : null;\n  };\n\n  var generateLinks = function generateLinks() {\n    console.log('is repo null? ' + RepoLink());\n    console.log(RepoLink() === null ? 'yes' : 'no');\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        \"class\": \"text-gray-100\",\n        children: RepoLink() !== null && SiteLink() !== null ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n          children: [\"[\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(RepoLink, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 45,\n            columnNumber: 16\n          }, _this), \"] [\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(SiteLink, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 45,\n            columnNumber: 31\n          }, _this), \"]\"]\n        }, void 0, true) : RepoLink() !== null ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n          children: [\"[\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(RepoLink, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 49,\n            columnNumber: 16\n          }, _this), \"]\"]\n        }, void 0, true) : SiteLink() !== null ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n          children: [\"[\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(SiteLink, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 16\n          }, _this), \"]\"]\n        }, void 0, true) : null\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false);\n  };\n\n  var links = generateLinks();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].div, {\n    \"class\": \"border-white border-2 work-detail-background\",\n    layoutId: selectedWork.id + 'Border',\n    initial: {\n      opacity: 0\n    },\n    animate: {\n      opacity: 1\n    },\n    exit: {\n      opacity: 0,\n      transition: {\n        duration: 0.15\n      }\n    },\n    transition: {\n      duration: 0.45\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      \"class\": \"ml-8 mt-4 sm:mt-8 absolute\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        href: \"/\",\n        \"class\": \"\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          \"class\": \"text-3xl cursor-pointer\",\n          children: '<<'\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      \"class\": \"px-8 lg:my-48 work-detail-outer mx-auto flex flex-col-reverse items-center lg:flex-row lg:space-x-8 my-16\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].div, {\n        \"class\": \"text-box\",\n        initial: {\n          opacity: 0,\n          x: -180\n        },\n        animate: {\n          opacity: 1,\n          x: 0\n        },\n        transition: {\n          duration: 0.35,\n          delay: 0.25\n        },\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].h1, {\n          \"class\": \"text-3xl cursor-pointer my-1\",\n          dangerouslySetInnerHTML: {\n            __html: selectedWork.title\n          },\n          layoutId: selectedWork.title + 'Header'\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          \"class\": \"text-gray-400 text-xl\",\n          children: [selectedWork.group, \" \\xA0\", selectedWork.year, \"\\xA0 \", links]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          \"class\": \"text-xl mt-5\",\n          children: selectedWork.blurb\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          \"class\": \"mt-8 flex flex-row flex-wrap space-x-5 \",\n          children: selectedWork.tech.map(function (techName, index) {\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Pill, {\n              text: techName\n            }, techName + index, false, {\n              fileName: _jsxFileName,\n              lineNumber: 94,\n              columnNumber: 15\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].div, {\n        transition: {\n          duration: 0.15,\n          delay: 0.6\n        },\n        initial: {\n          opacity: 0\n        },\n        animate: {\n          opacity: 1\n        },\n        \"class\": \"media-box border-gray-50 border-1\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].img, {\n          layoutId: selectedWork.id + 'Media',\n          src: primaryMediaPath\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 104,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 63,\n    columnNumber: 5\n  }, _this);\n};\n\n_c2 = Work;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Work);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Pill\");\n$RefreshReg$(_c2, \"Work\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd29yay9bd29ya0lkXS5qc3g/NTNjNyJdLCJuYW1lcyI6WyJQaWxsIiwidGV4dCIsIldvcmsiLCJzZWxlY3RlZFdvcmsiLCJwcmltYXJ5TWVkaWFQYXRoIiwibWVkaWEiLCJSZXBvTGluayIsInJlcG8iLCJTaXRlTGluayIsInNpdGVVcmwiLCJnZW5lcmF0ZUxpbmtzIiwiY29uc29sZSIsImxvZyIsImxpbmtzIiwiaWQiLCJvcGFjaXR5IiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwieCIsImRlbGF5IiwiX19odG1sIiwidGl0bGUiLCJncm91cCIsInllYXIiLCJibHVyYiIsInRlY2giLCJtYXAiLCJ0ZWNoTmFtZSIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBYztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUN6QixzQkFDRTtBQUFLLGFBQU0saUdBQVg7QUFBQSxjQUNHQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUtELENBTkQ7O0tBQU1ELEk7O0FBUU4sSUFBTUUsSUFBSSxHQUFHLFNBQVBBLElBQU8sUUFBc0I7QUFBQSxNQUFuQkMsWUFBbUIsU0FBbkJBLFlBQW1CO0FBQ2pDLE1BQU1DLGdCQUFnQixHQUFHRCxZQUFZLENBQUNFLEtBQWIsQ0FBbUIsQ0FBbkIsQ0FBekI7O0FBQ0EsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVc7QUFBQSxXQUNmSCxZQUFZLENBQUNJLElBQWIsZ0JBQ0U7QUFDRSxlQUFNLDJDQURSO0FBRUUsVUFBSSxFQUFFSixZQUFZLENBQUNJLElBRnJCO0FBR0UsWUFBTSxFQUFDLFFBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixHQVFJLElBVFc7QUFBQSxHQUFqQjs7QUFVQSxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFB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LEtBRHhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFYRixlQWNFO0FBQUcsbUJBQU0sY0FBVDtBQUFBLG9CQUF5QlYsWUFBWSxDQUFDcUI7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFkRixlQWVFO0FBQUssbUJBQU0seUNBQVg7QUFBQSxvQkFDR3JCLFlBQVksQ0FBQ3NCLElBQWIsQ0FBa0JDLEdBQWxCLENBQXNCLFVBQUNDLFFBQUQsRUFBV0MsS0FBWDtBQUFBLGdDQUNyQixxRUFBQyxJQUFEO0FBQU0sa0JBQUksRUFBRUQ7QUFBWixlQUEyQkEsUUFBUSxHQUFHQyxLQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURxQjtBQUFBLFdBQXRCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQXNCRSxxRUFBQyxvREFBRCxDQUFRLEdBQVI7QUFDRSxrQkFBVSxFQUFFO0FBQUVYLGtCQUFRLEVBQUUsSUFBWjtBQUFrQkUsZUFBSyxFQUFFO0FBQXpCLFNBRGQ7QUFFRSxlQUFPLEVBQUU7QUFBRUosaUJBQU8sRUFBRTtBQUFYLFNBRlg7QUFHRSxlQUFPLEVBQUU7QUFBRUEsaUJBQU8sRUFBRTtBQUFYLFNBSFg7QUFJRSxpQkFBTSxtQ0FKUjtBQUFBLCtCQU1FLHFFQUFDLG9EQUFELENBQVEsR0FBUjtBQUNFLGtCQUFRLEVBQUVaLFlBQVksQ0FBQ1csRUFBYixHQUFrQixPQUQ5QjtBQUVFLGFBQUcsRUFBRVY7QUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXRCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWtERCxDQWpHRDs7TUFBTUYsSTs7QUE0SFNBLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvd29yay9bd29ya0lkXS5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgd29ya0l0ZW1zIH0gZnJvbSAnLi4vLi4vcHVibGljL3dvcmsnO1xuaW1wb3J0IE5leHRMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBBcnJvd0JhY2tJY29uIH0gZnJvbSAnQGNoYWtyYS11aS9pY29ucyc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcblxuY29uc3QgUGlsbCA9ICh7IHRleHQgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9J3RleHQtc20gcHktMSBweC0zIGJnLWdyYXktNTAgdGV4dC1ncmF5LTcwMCBpbmxpbmUtYmxvY2sgZm9udC1zZW1pYm9sZCB0ZWNoLXBpbGwgbWItNCByb3VuZGVkLXhsJz5cbiAgICAgIHt0ZXh0fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgV29yayA9ICh7IHNlbGVjdGVkV29yayB9KSA9PiB7XG4gIGNvbnN0IHByaW1hcnlNZWRpYVBhdGggPSBzZWxlY3RlZFdvcmsubWVkaWFbMF07XG4gIGNvbnN0IFJlcG9MaW5rID0gKCkgPT5cbiAgICBzZWxlY3RlZFdvcmsucmVwbyA/IChcbiAgICAgIDxhXG4gICAgICAgIGNsYXNzPSd0ZXh0LWdyYXktNDAwIHRleHQtc20gaG92ZXI6dGV4dC1ibHVlLTQwMCdcbiAgICAgICAgaHJlZj17c2VsZWN0ZWRXb3JrLnJlcG99XG4gICAgICAgIHRhcmdldD0nX2JsYW5rJ1xuICAgICAgPlxuICAgICAgICAmbmJzcDtSRVBPJm5ic3A7XG4gICAgICA8L2E+XG4gICAgKSA6IG51bGw7XG4gIGNvbnN0IFNpdGVMaW5rID0gKCkgPT5cbiAgICBzZWxlY3RlZFdvcmsuc2l0ZVVybCA/IChcbiAgICAgIDxhXG4gICAgICAgIGNsYXNzPSd0ZXh0LWdyYXktNDAwIHRleHQtc20gaG92ZXI6dGV4dC1ibHVlLTQwMCdcbiAgICAgICAgaHJlZj17c2VsZWN0ZWRXb3JrLnNpdGVVcmx9XG4gICAgICA+XG4gICAgICAgICZuYnNwO1NJVEUmbmJzcDtcbiAgICAgIDwvYT5cbiAgICApIDogbnVsbDtcblxuICBjb25zdCBnZW5lcmF0ZUxpbmtzID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdpcyByZXBvIG51bGw/ICcgKyBSZXBvTGluaygpKTtcbiAgICBjb25zb2xlLmxvZyhSZXBvTGluaygpID09PSBudWxsID8gJ3llcycgOiAnbm8nKTtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPHNwYW4gY2xhc3M9J3RleHQtZ3JheS0xMDAnPlxuICAgICAgICAgIHtSZXBvTGluaygpICE9PSBudWxsICYmIFNpdGVMaW5rKCkgIT09IG51bGwgPyAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICBbPFJlcG9MaW5rIC8+XSBbPFNpdGVMaW5rIC8+XVxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKSA6IFJlcG9MaW5rKCkgIT09IG51bGwgPyAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICBbPFJlcG9MaW5rIC8+XVxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKSA6IFNpdGVMaW5rKCkgIT09IG51bGwgPyAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICBbPFNpdGVMaW5rIC8+XVxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvPlxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgbGlua3MgPSBnZW5lcmF0ZUxpbmtzKCk7XG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5kaXZcbiAgICAgIGNsYXNzPSdib3JkZXItd2hpdGUgYm9yZGVyLTIgd29yay1kZXRhaWwtYmFja2dyb3VuZCdcbiAgICAgIGxheW91dElkPXtzZWxlY3RlZFdvcmsuaWQgKyAnQm9yZGVyJ31cbiAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fVxuICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxIH19XG4gICAgICBleGl0PXt7IG9wYWNpdHk6IDAsIHRyYW5zaXRpb246IHsgZHVyYXRpb246IDAuMTUgfSB9fVxuICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC40NSB9fVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3M9J21sLTggbXQtNCBzbTptdC04IGFic29sdXRlJz5cbiAgICAgICAgPE5leHRMaW5rIGhyZWY9Jy8nIGNsYXNzPScnPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPSd0ZXh0LTN4bCBjdXJzb3ItcG9pbnRlcic+eyc8PCd9PC9zcGFuPlxuICAgICAgICA8L05leHRMaW5rPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPSdweC04IGxnOm15LTQ4IHdvcmstZGV0YWlsLW91dGVyIG14LWF1dG8gZmxleCBmbGV4LWNvbC1yZXZlcnNlIGl0ZW1zLWNlbnRlciBsZzpmbGV4LXJvdyBsZzpzcGFjZS14LTggbXktMTYnPlxuICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgIGNsYXNzPSd0ZXh0LWJveCdcbiAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHg6IC0xODAgfX1cbiAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHg6IDAgfX1cbiAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjM1LCBkZWxheTogMC4yNSB9fVxuICAgICAgICA+XG4gICAgICAgICAgPG1vdGlvbi5oMVxuICAgICAgICAgICAgY2xhc3M9J3RleHQtM3hsIGN1cnNvci1wb2ludGVyIG15LTEnXG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHNlbGVjdGVkV29yay50aXRsZSB9fVxuICAgICAgICAgICAgbGF5b3V0SWQ9e3NlbGVjdGVkV29yay50aXRsZSArICdIZWFkZXInfVxuICAgICAgICAgID48L21vdGlvbi5oMT5cbiAgICAgICAgICA8cCBjbGFzcz0ndGV4dC1ncmF5LTQwMCB0ZXh0LXhsJz5cbiAgICAgICAgICAgIHtzZWxlY3RlZFdvcmsuZ3JvdXB9ICZuYnNwO3tzZWxlY3RlZFdvcmsueWVhcn0mbmJzcDsge2xpbmtzfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cCBjbGFzcz0ndGV4dC14bCBtdC01Jz57c2VsZWN0ZWRXb3JrLmJsdXJifTwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzPSdtdC04IGZsZXggZmxleC1yb3cgZmxleC13cmFwIHNwYWNlLXgtNSAnPlxuICAgICAgICAgICAge3NlbGVjdGVkV29yay50ZWNoLm1hcCgodGVjaE5hbWUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxQaWxsIHRleHQ9e3RlY2hOYW1lfSBrZXk9e3RlY2hOYW1lICsgaW5kZXh9IC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuMTUsIGRlbGF5OiAwLjYgfX1cbiAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEgfX1cbiAgICAgICAgICBjbGFzcz0nbWVkaWEtYm94IGJvcmRlci1ncmF5LTUwIGJvcmRlci0xJ1xuICAgICAgICA+XG4gICAgICAgICAgPG1vdGlvbi5pbWdcbiAgICAgICAgICAgIGxheW91dElkPXtzZWxlY3RlZFdvcmsuaWQgKyAnTWVkaWEnfVxuICAgICAgICAgICAgc3JjPXtwcmltYXJ5TWVkaWFQYXRofVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbW90aW9uLmRpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XG4gIGNvbnN0IHsgd29ya0lkIH0gPSBjb250ZXh0LnBhcmFtcztcblxuICBjb25zdCBwcm9qZWN0cyA9IFsncmVhY3R5cGUnLCAnc2hpZnRlcnMnLCAnYW1wbScsICdhcmNvJ107XG5cbiAgLy8gZ3JhYnMgdGhlIHRhcmdldCB3b3JrIG9iamVjdCBmcm9tIGxpc3RcbiAgY29uc3Qgc2VsZWN0ZWRXb3JrID0gd29ya0l0ZW1zW3Byb2plY3RzLmluZGV4T2Yod29ya0lkKV07XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBzZWxlY3RlZFdvcmsgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCBwcm9qZWN0cyA9IFsncmVhY3R5cGUnLCAnc2hpZnRlcnMnLCAnYW1wbScsICdhcmNvJ107XG4gIGNvbnN0IHBhdGhzID0gcHJvamVjdHMubWFwKCh3b3JrSWQpID0+ICh7XG4gICAgcGFyYW1zOiB7IHdvcmtJZCB9LFxuICB9KSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwYXRocyxcbiAgICBmYWxsYmFjazogZmFsc2UsXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdvcms7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/work/[workId].jsx\n");

/***/ })

})