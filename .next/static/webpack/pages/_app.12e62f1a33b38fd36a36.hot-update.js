webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./styles/global.scss":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-7-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-7-2!(webpack)/resolve-url-loader??ref--5-oneOf-7-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-7-4!./styles/global.scss ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"html {\\n  background-color: #171516dc;\\n  color: #f3f3ff;\\n}\\n\\n.work-logo-wrapper {\\n  max-width: 250px;\\n}\\n\\n.work-media-wrapper {\\n  top: 20%;\\n  transform: scale(2.25);\\n}\\n\\n.gray-filter {\\n  filter: grayscale(100%);\\n}\\n\\n.nav-main,\\n.outer-wrapper {\\n  max-width: 1024px;\\n  min-width: 360px;\\n}\\n\\n.work-detail-background {\\n  height: 100vh;\\n  will-change: opacity;\\n}\\n\\n.work-detail-outer {\\n  max-width: 1079px;\\n}\\n\\n.media-box {\\n  max-width: 600px;\\n}\\n\\n.text-box {\\n  min-width: 375px;\\n  max-width: 475px;\\n}\\n\\n.work-item {\\n  position: relative;\\n  height: 280px;\\n  flex: 0 0 25%;\\n  max-width: 25%;\\n}\\n\\n.work-item-wrapper {\\n  width: 100%;\\n  height: 100%;\\n}\\n\\n.work-item-detail-wrapper {\\n  width: 100%;\\n  height: 100%;\\n}\\n\\n.work-item-wrapper.open {\\n  top: 0;\\n  left: 0;\\n  right: 0;\\n  position: fixed;\\n  z-index: 1;\\n  overflow: hidden;\\n  width: 100%;\\n  height: 100%;\\n}\\n\\n.content-box {\\n  height: 720px;\\n}\\n\\n.custom-wrapper, .custom-wrapper-2 {\\n  max-width: 900px;\\n}\\n\\n.custom-wrapper-2 {\\n  background-color: white;\\n}\\n\\n.hero-section {\\n  background-color: #555;\\n}\\n\\nbody {\\n  font-family: system-ui, \\\"Univers LT Std\\\", Helvetica, sans-serif;\\n  overflow-x: hidden;\\n}\\n\\n.work-detail {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  right: 0;\\n  bottom: 0;\\n}\\n\\n@media (max-width: 1024px) {\\n  .media-box {\\n    max-width: 500px;\\n    margin-bottom: 20px;\\n  }\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://global.scss\"],\"names\":[],\"mappings\":\"AAGA;EACE,2BAAA;EACA,cAAA;AAFF;;AAQA;EACE,gBAAA;AALF;;AAQA;EACE,QAAA;EACA,sBAAA;AALF;;AAQA;EAEE,uBAAA;AALF;;AAQA;;EAEE,iBA3BU;EA4BV,gBA3BU;AAsBZ;;AAQA;EACE,aAAA;EACA,oBAAA;AALF;;AAQA;EACE,iBAAA;AALF;;AAQA;EACE,gBAAA;AALF;;AAQA;EACE,gBAAA;EACA,gBAAA;AALF;;AAQA;EACE,kBAAA;EACA,aAAA;EACA,aAAA;EACA,cAAA;AALF;;AAQA;EACE,WAAA;EACA,YAAA;AALF;;AAQA;EACE,WAAA;EACA,YAAA;AALF;;AAQA;EACE,MAAA;EACA,OAAA;EACA,QAAA;EACA,eAAA;EACA,UAAA;EACA,gBAAA;EACA,WAAA;EACA,YAAA;AALF;;AAQA;EACE,aAAA;AALF;;AAQA;EACE,gBAAA;AALF;;AAQA;EAGE,uBAAA;AAPF;;AAUA;EACE,sBAAA;AAPF;;AAUA;EACE,+DAAA;EACA,kBAAA;AAPF;;AAUA;EACE,kBAAA;EACA,MAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;AAPF;;AAUA;EACE;IACE,gBAAA;IACA,mBAAA;EAPF;AACF\",\"sourcesContent\":[\"$max-width: 1024px;\\n$min-width: 360px;\\n\\nhtml {\\n  background-color: #171516dc;\\n  color: #f3f3ff;\\n}\\n\\n.tech-pill {\\n}\\n\\n.work-logo-wrapper {\\n  max-width: 250px;\\n}\\n\\n.work-media-wrapper {\\n  top: 20%;\\n  transform: scale(2.25);\\n}\\n\\n.gray-filter {\\n  -webkit-filter: grayscale(100%);\\n  filter: grayscale(100%);\\n}\\n\\n.nav-main,\\n.outer-wrapper {\\n  max-width: $max-width;\\n  min-width: $min-width;\\n}\\n\\n.work-detail-background {\\n  height: 100vh;\\n  will-change: opacity;\\n}\\n\\n.work-detail-outer {\\n  max-width: ($max-width + 55px);\\n}\\n\\n.media-box {\\n  max-width: 600px;\\n}\\n\\n.text-box {\\n  min-width: 375px;\\n  max-width: 475px;\\n}\\n\\n.work-item {\\n  position: relative;\\n  height: 280px;\\n  flex: 0 0 25%;\\n  max-width: 25%;\\n}\\n\\n.work-item-wrapper {\\n  width: 100%;\\n  height: 100%;\\n}\\n\\n.work-item-detail-wrapper {\\n  width: 100%;\\n  height: 100%;\\n}\\n\\n.work-item-wrapper.open {\\n  top: 0;\\n  left: 0;\\n  right: 0;\\n  position: fixed;\\n  z-index: 1;\\n  overflow: hidden;\\n  width: 100%;\\n  height: 100%;\\n}\\n\\n.content-box {\\n  height: 720px;\\n}\\n\\n.custom-wrapper {\\n  max-width: 900px;\\n}\\n\\n.custom-wrapper-2 {\\n  @extend .custom-wrapper;\\n\\n  background-color: white;\\n}\\n\\n.hero-section {\\n  background-color: #555;\\n}\\n\\nbody {\\n  font-family: system-ui, 'Univers LT Std', Helvetica, sans-serif;\\n  overflow-x: hidden;\\n}\\n\\n.work-detail {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  right: 0;\\n  bottom: 0;\\n}\\n\\n@media (max-width: $max-width) {\\n  .media-box {\\n    max-width: 500px;\\n    margin-bottom: 20px;\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2dsb2JhbC5zY3NzPzI1ZGIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDK0Y7QUFDL0YsOEJBQThCLHlGQUEyQjtBQUN6RDtBQUNBLDhCQUE4QixRQUFTLFNBQVMsZ0NBQWdDLG1CQUFtQixHQUFHLHdCQUF3QixxQkFBcUIsR0FBRyx5QkFBeUIsYUFBYSwyQkFBMkIsR0FBRyxrQkFBa0IsNEJBQTRCLEdBQUcsZ0NBQWdDLHNCQUFzQixxQkFBcUIsR0FBRyw2QkFBNkIsa0JBQWtCLHlCQUF5QixHQUFHLHdCQUF3QixzQkFBc0IsR0FBRyxnQkFBZ0IscUJBQXFCLEdBQUcsZUFBZSxxQkFBcUIscUJBQXFCLEdBQUcsZ0JBQWdCLHVCQUF1QixrQkFBa0Isa0JBQWtCLG1CQUFtQixHQUFHLHdCQUF3QixnQkFBZ0IsaUJBQWlCLEdBQUcsK0JBQStCLGdCQUFnQixpQkFBaUIsR0FBRyw2QkFBNkIsV0FBVyxZQUFZLGFBQWEsb0JBQW9CLGVBQWUscUJBQXFCLGdCQUFnQixpQkFBaUIsR0FBRyxrQkFBa0Isa0JBQWtCLEdBQUcsd0NBQXdDLHFCQUFxQixHQUFHLHVCQUF1Qiw0QkFBNEIsR0FBRyxtQkFBbUIsMkJBQTJCLEdBQUcsVUFBVSxzRUFBc0UsdUJBQXVCLEdBQUcsa0JBQWtCLHVCQUF1QixXQUFXLFlBQVksYUFBYSxjQUFjLEdBQUcsZ0NBQWdDLGdCQUFnQix1QkFBdUIsMEJBQTBCLEtBQUssR0FBRyxPQUFPLDRFQUE0RSxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssNENBQTRDLG9CQUFvQixVQUFVLGdDQUFnQyxtQkFBbUIsR0FBRyxnQkFBZ0IsR0FBRyx3QkFBd0IscUJBQXFCLEdBQUcseUJBQXlCLGFBQWEsMkJBQTJCLEdBQUcsa0JBQWtCLG9DQUFvQyw0QkFBNEIsR0FBRyxnQ0FBZ0MsMEJBQTBCLDBCQUEwQixHQUFHLDZCQUE2QixrQkFBa0IseUJBQXlCLEdBQUcsd0JBQXdCLG1DQUFtQyxHQUFHLGdCQUFnQixxQkFBcUIsR0FBRyxlQUFlLHFCQUFxQixxQkFBcUIsR0FBRyxnQkFBZ0IsdUJBQXVCLGtCQUFrQixrQkFBa0IsbUJBQW1CLEdBQUcsd0JBQXdCLGdCQUFnQixpQkFBaUIsR0FBRywrQkFBK0IsZ0JBQWdCLGlCQUFpQixHQUFHLDZCQUE2QixXQUFXLFlBQVksYUFBYSxvQkFBb0IsZUFBZSxxQkFBcUIsZ0JBQWdCLGlCQUFpQixHQUFHLGtCQUFrQixrQkFBa0IsR0FBRyxxQkFBcUIscUJBQXFCLEdBQUcsdUJBQXVCLDRCQUE0Qiw4QkFBOEIsR0FBRyxtQkFBbUIsMkJBQTJCLEdBQUcsVUFBVSxvRUFBb0UsdUJBQXVCLEdBQUcsa0JBQWtCLHVCQUF1QixXQUFXLFlBQVksYUFBYSxjQUFjLEdBQUcsb0NBQW9DLGdCQUFnQix1QkFBdUIsMEJBQTBCLEtBQUssR0FBRyxxQkFBcUI7QUFDenVIO0FBQ2Usc0ZBQXVCLEVBQUMiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPyEuL3N0eWxlcy9nbG9iYWwuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTUxNmRjO1xcbiAgY29sb3I6ICNmM2YzZmY7XFxufVxcblxcbi53b3JrLWxvZ28td3JhcHBlciB7XFxuICBtYXgtd2lkdGg6IDI1MHB4O1xcbn1cXG5cXG4ud29yay1tZWRpYS13cmFwcGVyIHtcXG4gIHRvcDogMjAlO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgyLjI1KTtcXG59XFxuXFxuLmdyYXktZmlsdGVyIHtcXG4gIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xcbn1cXG5cXG4ubmF2LW1haW4sXFxuLm91dGVyLXdyYXBwZXIge1xcbiAgbWF4LXdpZHRoOiAxMDI0cHg7XFxuICBtaW4td2lkdGg6IDM2MHB4O1xcbn1cXG5cXG4ud29yay1kZXRhaWwtYmFja2dyb3VuZCB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lsbC1jaGFuZ2U6IG9wYWNpdHk7XFxufVxcblxcbi53b3JrLWRldGFpbC1vdXRlciB7XFxuICBtYXgtd2lkdGg6IDEwNzlweDtcXG59XFxuXFxuLm1lZGlhLWJveCB7XFxuICBtYXgtd2lkdGg6IDYwMHB4O1xcbn1cXG5cXG4udGV4dC1ib3gge1xcbiAgbWluLXdpZHRoOiAzNzVweDtcXG4gIG1heC13aWR0aDogNDc1cHg7XFxufVxcblxcbi53b3JrLWl0ZW0ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiAyODBweDtcXG4gIGZsZXg6IDAgMCAyNSU7XFxuICBtYXgtd2lkdGg6IDI1JTtcXG59XFxuXFxuLndvcmstaXRlbS13cmFwcGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ud29yay1pdGVtLWRldGFpbC13cmFwcGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ud29yay1pdGVtLXdyYXBwZXIub3BlbiB7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uY29udGVudC1ib3gge1xcbiAgaGVpZ2h0OiA3MjBweDtcXG59XFxuXFxuLmN1c3RvbS13cmFwcGVyLCAuY3VzdG9tLXdyYXBwZXItMiB7XFxuICBtYXgtd2lkdGg6IDkwMHB4O1xcbn1cXG5cXG4uY3VzdG9tLXdyYXBwZXItMiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmhlcm8tc2VjdGlvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIFxcXCJVbml2ZXJzIExUIFN0ZFxcXCIsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuLndvcmstZGV0YWlsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xcbiAgLm1lZGlhLWJveCB7XFxuICAgIG1heC13aWR0aDogNTAwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9nbG9iYWwuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTtFQUNFLDJCQUFBO0VBQ0EsY0FBQTtBQUZGOztBQVFBO0VBQ0UsZ0JBQUE7QUFMRjs7QUFRQTtFQUNFLFFBQUE7RUFDQSxzQkFBQTtBQUxGOztBQVFBO0VBRUUsdUJBQUE7QUFMRjs7QUFRQTs7RUFFRSxpQkEzQlU7RUE0QlYsZ0JBM0JVO0FBc0JaOztBQVFBO0VBQ0UsYUFBQTtFQUNBLG9CQUFBO0FBTEY7O0FBUUE7RUFDRSxpQkFBQTtBQUxGOztBQVFBO0VBQ0UsZ0JBQUE7QUFMRjs7QUFRQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUFMRjs7QUFRQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FBTEY7O0FBUUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUxGOztBQVFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFMRjs7QUFRQTtFQUNFLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUxGOztBQVFBO0VBQ0UsYUFBQTtBQUxGOztBQVFBO0VBQ0UsZ0JBQUE7QUFMRjs7QUFRQTtFQUdFLHVCQUFBO0FBUEY7O0FBVUE7RUFDRSxzQkFBQTtBQVBGOztBQVVBO0VBQ0UsK0RBQUE7RUFDQSxrQkFBQTtBQVBGOztBQVVBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FBUEY7O0FBVUE7RUFDRTtJQUNFLGdCQUFBO0lBQ0EsbUJBQUE7RUFQRjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiRtYXgtd2lkdGg6IDEwMjRweDtcXG4kbWluLXdpZHRoOiAzNjBweDtcXG5cXG5odG1sIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzE1MTZkYztcXG4gIGNvbG9yOiAjZjNmM2ZmO1xcbn1cXG5cXG4udGVjaC1waWxsIHtcXG59XFxuXFxuLndvcmstbG9nby13cmFwcGVyIHtcXG4gIG1heC13aWR0aDogMjUwcHg7XFxufVxcblxcbi53b3JrLW1lZGlhLXdyYXBwZXIge1xcbiAgdG9wOiAyMCU7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDIuMjUpO1xcbn1cXG5cXG4uZ3JheS1maWx0ZXIge1xcbiAgLXdlYmtpdC1maWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcXG4gIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xcbn1cXG5cXG4ubmF2LW1haW4sXFxuLm91dGVyLXdyYXBwZXIge1xcbiAgbWF4LXdpZHRoOiAkbWF4LXdpZHRoO1xcbiAgbWluLXdpZHRoOiAkbWluLXdpZHRoO1xcbn1cXG5cXG4ud29yay1kZXRhaWwtYmFja2dyb3VuZCB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lsbC1jaGFuZ2U6IG9wYWNpdHk7XFxufVxcblxcbi53b3JrLWRldGFpbC1vdXRlciB7XFxuICBtYXgtd2lkdGg6ICgkbWF4LXdpZHRoICsgNTVweCk7XFxufVxcblxcbi5tZWRpYS1ib3gge1xcbiAgbWF4LXdpZHRoOiA2MDBweDtcXG59XFxuXFxuLnRleHQtYm94IHtcXG4gIG1pbi13aWR0aDogMzc1cHg7XFxuICBtYXgtd2lkdGg6IDQ3NXB4O1xcbn1cXG5cXG4ud29yay1pdGVtIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogMjgwcHg7XFxuICBmbGV4OiAwIDAgMjUlO1xcbiAgbWF4LXdpZHRoOiAyNSU7XFxufVxcblxcbi53b3JrLWl0ZW0td3JhcHBlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLndvcmstaXRlbS1kZXRhaWwtd3JhcHBlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLndvcmstaXRlbS13cmFwcGVyLm9wZW4ge1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmNvbnRlbnQtYm94IHtcXG4gIGhlaWdodDogNzIwcHg7XFxufVxcblxcbi5jdXN0b20td3JhcHBlciB7XFxuICBtYXgtd2lkdGg6IDkwMHB4O1xcbn1cXG5cXG4uY3VzdG9tLXdyYXBwZXItMiB7XFxuICBAZXh0ZW5kIC5jdXN0b20td3JhcHBlcjtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uaGVyby1zZWN0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgJ1VuaXZlcnMgTFQgU3RkJywgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG4ud29yay1kZXRhaWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogJG1heC13aWR0aCkge1xcbiAgLm1lZGlhLWJveCB7XFxuICAgIG1heC13aWR0aDogNTAwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./styles/global.scss\n");

/***/ })

})