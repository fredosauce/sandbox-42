webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./styles/global.scss":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-7-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-7-2!(webpack)/resolve-url-loader??ref--5-oneOf-7-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-7-4!./styles/global.scss ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"html {\\n  background-color: #171516dc;\\n  color: #f3f3ff;\\n}\\n\\n.work-logo-wrapper {\\n  max-width: 250px;\\n}\\n\\n.work-media-wrapper {\\n  top: 20%;\\n  transform: scale(2.25);\\n}\\n\\n.gray-filter {\\n  filter: grayscale(100%);\\n}\\n\\n.nav-main,\\n.outer-wrapper {\\n  max-width: 1024px;\\n  min-width: 360px;\\n}\\n\\n.work-detail-background {\\n  height: 100vh;\\n  will-change: opacity;\\n}\\n\\n.work-detail-outer {\\n  max-width: 1079px;\\n}\\n\\n.media-box {\\n  max-width: 600px;\\n}\\n\\n.text-box {\\n  min-width: 375px;\\n  max-width: 475px;\\n}\\n\\n.work-item-wrapper {\\n  width: 220px;\\n  height: 280px;\\n}\\n\\n.content-box {\\n  height: 720px;\\n}\\n\\n.custom-wrapper, .custom-wrapper-2 {\\n  max-width: 900px;\\n}\\n\\n.custom-wrapper-2 {\\n  background-color: white;\\n}\\n\\n.hero-section {\\n  background-color: #555;\\n}\\n\\nbody {\\n  font-family: system-ui, \\\"Univers LT Std\\\", Helvetica, sans-serif;\\n  overflow-x: hidden;\\n}\\n\\n.work-detail {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  right: 0;\\n  bottom: 0;\\n}\\n\\n@media (max-width: 1024px) {\\n  .media-box {\\n    max-width: 500px;\\n    margin-bottom: 20px;\\n  }\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://global.scss\"],\"names\":[],\"mappings\":\"AAGA;EACE,2BAAA;EACA,cAAA;AAFF;;AAQA;EACE,gBAAA;AALF;;AAQA;EACE,QAAA;EACA,sBAAA;AALF;;AAQA;EAEE,uBAAA;AALF;;AAQA;;EAEE,iBA3BU;EA4BV,gBA3BU;AAsBZ;;AAQA;EACE,aAAA;EACA,oBAAA;AALF;;AAQA;EACE,iBAAA;AALF;;AAQA;EACE,gBAAA;AALF;;AAQA;EACE,gBAAA;EACA,gBAAA;AALF;;AAQA;EACE,YAAA;EACA,aAAA;AALF;;AAQA;EACE,aAAA;AALF;;AAQA;EACE,gBAAA;AALF;;AAQA;EAGE,uBAAA;AAPF;;AAUA;EACE,sBAAA;AAPF;;AAUA;EACE,+DAAA;EACA,kBAAA;AAPF;;AAUA;EACE,kBAAA;EACA,MAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;AAPF;;AAUA;EACE;IACE,gBAAA;IACA,mBAAA;EAPF;AACF\",\"sourcesContent\":[\"$max-width: 1024px;\\n$min-width: 360px;\\n\\nhtml {\\n  background-color: #171516dc;\\n  color: #f3f3ff;\\n}\\n\\n.tech-pill {\\n}\\n\\n.work-logo-wrapper {\\n  max-width: 250px;\\n}\\n\\n.work-media-wrapper {\\n  top: 20%;\\n  transform: scale(2.25);\\n}\\n\\n.gray-filter {\\n  -webkit-filter: grayscale(100%);\\n  filter: grayscale(100%);\\n}\\n\\n.nav-main,\\n.outer-wrapper {\\n  max-width: $max-width;\\n  min-width: $min-width;\\n}\\n\\n.work-detail-background {\\n  height: 100vh;\\n  will-change: opacity;\\n}\\n\\n.work-detail-outer {\\n  max-width: ($max-width + 55px);\\n}\\n\\n.media-box {\\n  max-width: 600px;\\n}\\n\\n.text-box {\\n  min-width: 375px;\\n  max-width: 475px;\\n}\\n\\n.work-item-wrapper {\\n  width: 220px;\\n  height: 280px;\\n}\\n\\n.content-box {\\n  height: 720px;\\n}\\n\\n.custom-wrapper {\\n  max-width: 900px;\\n}\\n\\n.custom-wrapper-2 {\\n  @extend .custom-wrapper;\\n\\n  background-color: white;\\n}\\n\\n.hero-section {\\n  background-color: #555;\\n}\\n\\nbody {\\n  font-family: system-ui, 'Univers LT Std', Helvetica, sans-serif;\\n  overflow-x: hidden;\\n}\\n\\n.work-detail {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  right: 0;\\n  bottom: 0;\\n}\\n\\n@media (max-width: $max-width) {\\n  .media-box {\\n    max-width: 500px;\\n    margin-bottom: 20px;\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2dsb2JhbC5zY3NzPzI1ZGIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDK0Y7QUFDL0YsOEJBQThCLHlGQUEyQjtBQUN6RDtBQUNBLDhCQUE4QixRQUFTLFNBQVMsZ0NBQWdDLG1CQUFtQixHQUFHLHdCQUF3QixxQkFBcUIsR0FBRyx5QkFBeUIsYUFBYSwyQkFBMkIsR0FBRyxrQkFBa0IsNEJBQTRCLEdBQUcsZ0NBQWdDLHNCQUFzQixxQkFBcUIsR0FBRyw2QkFBNkIsa0JBQWtCLHlCQUF5QixHQUFHLHdCQUF3QixzQkFBc0IsR0FBRyxnQkFBZ0IscUJBQXFCLEdBQUcsZUFBZSxxQkFBcUIscUJBQXFCLEdBQUcsd0JBQXdCLGlCQUFpQixrQkFBa0IsR0FBRyxrQkFBa0Isa0JBQWtCLEdBQUcsd0NBQXdDLHFCQUFxQixHQUFHLHVCQUF1Qiw0QkFBNEIsR0FBRyxtQkFBbUIsMkJBQTJCLEdBQUcsVUFBVSxzRUFBc0UsdUJBQXVCLEdBQUcsa0JBQWtCLHVCQUF1QixXQUFXLFlBQVksYUFBYSxjQUFjLEdBQUcsZ0NBQWdDLGdCQUFnQix1QkFBdUIsMEJBQTBCLEtBQUssR0FBRyxPQUFPLDRFQUE0RSxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyw0Q0FBNEMsb0JBQW9CLFVBQVUsZ0NBQWdDLG1CQUFtQixHQUFHLGdCQUFnQixHQUFHLHdCQUF3QixxQkFBcUIsR0FBRyx5QkFBeUIsYUFBYSwyQkFBMkIsR0FBRyxrQkFBa0Isb0NBQW9DLDRCQUE0QixHQUFHLGdDQUFnQywwQkFBMEIsMEJBQTBCLEdBQUcsNkJBQTZCLGtCQUFrQix5QkFBeUIsR0FBRyx3QkFBd0IsbUNBQW1DLEdBQUcsZ0JBQWdCLHFCQUFxQixHQUFHLGVBQWUscUJBQXFCLHFCQUFxQixHQUFHLHdCQUF3QixpQkFBaUIsa0JBQWtCLEdBQUcsa0JBQWtCLGtCQUFrQixHQUFHLHFCQUFxQixxQkFBcUIsR0FBRyx1QkFBdUIsNEJBQTRCLDhCQUE4QixHQUFHLG1CQUFtQiwyQkFBMkIsR0FBRyxVQUFVLG9FQUFvRSx1QkFBdUIsR0FBRyxrQkFBa0IsdUJBQXVCLFdBQVcsWUFBWSxhQUFhLGNBQWMsR0FBRyxvQ0FBb0MsZ0JBQWdCLHVCQUF1QiwwQkFBMEIsS0FBSyxHQUFHLHFCQUFxQjtBQUM1N0Y7QUFDZSxzRkFBdUIsRUFBQyIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/IS4vc3R5bGVzL2dsb2JhbC5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNTE2ZGM7XFxuICBjb2xvcjogI2YzZjNmZjtcXG59XFxuXFxuLndvcmstbG9nby13cmFwcGVyIHtcXG4gIG1heC13aWR0aDogMjUwcHg7XFxufVxcblxcbi53b3JrLW1lZGlhLXdyYXBwZXIge1xcbiAgdG9wOiAyMCU7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDIuMjUpO1xcbn1cXG5cXG4uZ3JheS1maWx0ZXIge1xcbiAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XFxufVxcblxcbi5uYXYtbWFpbixcXG4ub3V0ZXItd3JhcHBlciB7XFxuICBtYXgtd2lkdGg6IDEwMjRweDtcXG4gIG1pbi13aWR0aDogMzYwcHg7XFxufVxcblxcbi53b3JrLWRldGFpbC1iYWNrZ3JvdW5kIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWxsLWNoYW5nZTogb3BhY2l0eTtcXG59XFxuXFxuLndvcmstZGV0YWlsLW91dGVyIHtcXG4gIG1heC13aWR0aDogMTA3OXB4O1xcbn1cXG5cXG4ubWVkaWEtYm94IHtcXG4gIG1heC13aWR0aDogNjAwcHg7XFxufVxcblxcbi50ZXh0LWJveCB7XFxuICBtaW4td2lkdGg6IDM3NXB4O1xcbiAgbWF4LXdpZHRoOiA0NzVweDtcXG59XFxuXFxuLndvcmstaXRlbS13cmFwcGVyIHtcXG4gIHdpZHRoOiAyMjBweDtcXG4gIGhlaWdodDogMjgwcHg7XFxufVxcblxcbi5jb250ZW50LWJveCB7XFxuICBoZWlnaHQ6IDcyMHB4O1xcbn1cXG5cXG4uY3VzdG9tLXdyYXBwZXIsIC5jdXN0b20td3JhcHBlci0yIHtcXG4gIG1heC13aWR0aDogOTAwcHg7XFxufVxcblxcbi5jdXN0b20td3JhcHBlci0yIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uaGVyby1zZWN0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgXFxcIlVuaXZlcnMgTFQgU3RkXFxcIiwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG4ud29yay1kZXRhaWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XFxuICAubWVkaWEtYm94IHtcXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL2dsb2JhbC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VBQ0UsMkJBQUE7RUFDQSxjQUFBO0FBRkY7O0FBUUE7RUFDRSxnQkFBQTtBQUxGOztBQVFBO0VBQ0UsUUFBQTtFQUNBLHNCQUFBO0FBTEY7O0FBUUE7RUFFRSx1QkFBQTtBQUxGOztBQVFBOztFQUVFLGlCQTNCVTtFQTRCVixnQkEzQlU7QUFzQlo7O0FBUUE7RUFDRSxhQUFBO0VBQ0Esb0JBQUE7QUFMRjs7QUFRQTtFQUNFLGlCQUFBO0FBTEY7O0FBUUE7RUFDRSxnQkFBQTtBQUxGOztBQVFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQUxGOztBQVFBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUFMRjs7QUFRQTtFQUNFLGFBQUE7QUFMRjs7QUFRQTtFQUNFLGdCQUFBO0FBTEY7O0FBUUE7RUFHRSx1QkFBQTtBQVBGOztBQVVBO0VBQ0Usc0JBQUE7QUFQRjs7QUFVQTtFQUNFLCtEQUFBO0VBQ0Esa0JBQUE7QUFQRjs7QUFVQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQVBGOztBQVVBO0VBQ0U7SUFDRSxnQkFBQTtJQUNBLG1CQUFBO0VBUEY7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkbWF4LXdpZHRoOiAxMDI0cHg7XFxuJG1pbi13aWR0aDogMzYwcHg7XFxuXFxuaHRtbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNTE2ZGM7XFxuICBjb2xvcjogI2YzZjNmZjtcXG59XFxuXFxuLnRlY2gtcGlsbCB7XFxufVxcblxcbi53b3JrLWxvZ28td3JhcHBlciB7XFxuICBtYXgtd2lkdGg6IDI1MHB4O1xcbn1cXG5cXG4ud29yay1tZWRpYS13cmFwcGVyIHtcXG4gIHRvcDogMjAlO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgyLjI1KTtcXG59XFxuXFxuLmdyYXktZmlsdGVyIHtcXG4gIC13ZWJraXQtZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XFxuICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcXG59XFxuXFxuLm5hdi1tYWluLFxcbi5vdXRlci13cmFwcGVyIHtcXG4gIG1heC13aWR0aDogJG1heC13aWR0aDtcXG4gIG1pbi13aWR0aDogJG1pbi13aWR0aDtcXG59XFxuXFxuLndvcmstZGV0YWlsLWJhY2tncm91bmQge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpbGwtY2hhbmdlOiBvcGFjaXR5O1xcbn1cXG5cXG4ud29yay1kZXRhaWwtb3V0ZXIge1xcbiAgbWF4LXdpZHRoOiAoJG1heC13aWR0aCArIDU1cHgpO1xcbn1cXG5cXG4ubWVkaWEtYm94IHtcXG4gIG1heC13aWR0aDogNjAwcHg7XFxufVxcblxcbi50ZXh0LWJveCB7XFxuICBtaW4td2lkdGg6IDM3NXB4O1xcbiAgbWF4LXdpZHRoOiA0NzVweDtcXG59XFxuXFxuLndvcmstaXRlbS13cmFwcGVyIHtcXG4gIHdpZHRoOiAyMjBweDtcXG4gIGhlaWdodDogMjgwcHg7XFxufVxcblxcbi5jb250ZW50LWJveCB7XFxuICBoZWlnaHQ6IDcyMHB4O1xcbn1cXG5cXG4uY3VzdG9tLXdyYXBwZXIge1xcbiAgbWF4LXdpZHRoOiA5MDBweDtcXG59XFxuXFxuLmN1c3RvbS13cmFwcGVyLTIge1xcbiAgQGV4dGVuZCAuY3VzdG9tLXdyYXBwZXI7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmhlcm8tc2VjdGlvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksICdVbml2ZXJzIExUIFN0ZCcsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuLndvcmstZGV0YWlsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6ICRtYXgtd2lkdGgpIHtcXG4gIC5tZWRpYS1ib3gge1xcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./styles/global.scss\n");

/***/ })

})