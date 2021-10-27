/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body, html, #content {\\n  height: 100%;\\n  background-color: #f0f0f0;\\n  margin: 0;\\n}\\n.navbar {\\n  background-color: #023047;\\n  width: 100%;\\n  margin: 0 auto;\\n  display: flex;\\n  justify-content: space-around;\\n  /* position: fixed; */\\n}\\n.nav {\\n  display: flex;\\n  justify-content: space-evenly;\\n  width: 300px;\\n  align-items: center;\\n}\\n.home-nav, .menu-nav, .contact-nav, .title {\\n  color: #f0f0f0;\\n}\\n.home-nav:hover, .menu-nav:hover, .contact-nav:hover, .title:hover {\\n  color: #ffb703;\\n  cursor: pointer;\\n}\\n\\n\\n.main {\\n  height: 100%;\\n  width: 100%;\\n  margin: 0;\\n}\\n.home {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n.home-title {\\n  margin-top: 2em;\\n}\\n.about-us {\\n  margin-bottom: 5em;\\n}\\n.description {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  color: #023047;\\n  background-color: #ffb703;\\n  font-weight: 900;\\n}\\n.values {\\n  width: 100%;\\n  height: 100%;\\n  background-color: #023047;\\n  color: #f0f0f0;\\n  display: flex;\\n  flex-direction: column;\\n  padding: 3em 0em;\\n}\\n.values h2 {\\n  align-self: center;\\n}\\n.list-values {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: space-evenly;\\n}\\n.food, .fun, .family-values {\\n  width: 200px;\\n  color: #f0f0f0;\\n  font-weight: 900;\\n}\\n.value-title {\\n  color: #ffb703;\\n}\\n\\n\\n.menu {\\n  background-color: #ffb703;\\n  margin: 0 auto;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n.menu p {\\n  text-align: center;\\n}\\n.all-cards {\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: space-evenly;\\n}\\n.card {\\n  width: 400px;\\n  height: 550px;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n.card-img {\\n  width: 70%;\\n  height: 60%;\\n  overflow: hidden;\\n  object-fit: cover;\\n  border-radius: 10px;\\n  box-shadow: 0px 0px 10px 1px #f0f0f0;\\n}\\n.card-description {\\n  margin: 2em auto;\\n  width: 80%;\\n  text-align: center;\\n}\\n\\n\\n.contact {\\n  background-color: #ffb703;\\n  height: 100%;\\n  width: 80%;\\n  margin: 0 auto;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n.map {\\n  margin-top: 2em;\\n  width: 500px;\\n  height: 350px;\\n}\\n.contact p {\\n  text-align: center;\\n}\\n\\n\\n@media (max-width: 665px) {\\n  .list-values {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n  }\\n\\n  .food, .fun, .family-values {\\n    margin-bottom: 2em;\\n  }\\n\\n  .map {\\n    width: 300px;\\n    height: 200px;\\n  }\\n}\\n\\n@media (max-width: 992px) {\\n  .family {\\n    height: 100%;\\n    width: 100%;\\n  }\\n\\n  .about-us, .menu {\\n    width: 80%;\\n  }\\n\\n  .grill {\\n    width: 100%;\\n  }\\n\\n  .all-cards {\\n    display: flex;\\n    flex-direction: row;\\n    width: 80%;\\n    flex-wrap: wrap;\\n    justify-content: space-evenly;\\n  }\\n\\n  .card-img {\\n    width: 70%;\\n    height: 60%;\\n    overflow: hidden;\\n    object-fit: cover;\\n    border-radius: 10px;\\n    box-shadow: 0px 0px 10px 1px #f0f0f0;  }\\n}\\n\\n@media (min-width: 993px) {\\n  .family {\\n    height: 732px;\\n    width: 992px;\\n    margin: 0 auto;\\n  }\\n\\n  .about-us {\\n    width: 645px;\\n  }\\n\\n  .grill {\\n    height: 732px;\\n    width: 992px;\\n    margin: 0 auto;\\n  }\\n\\n  .values, .description, .menu, .contact {\\n    width: 992px;\\n  }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var _i = 0; _i < this.length; _i++) {\n        var id = this[_i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i2 = 0; _i2 < modules.length; _i2++) {\n      var item = [].concat(modules[_i2]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/comps/contact.js":
/*!******************************!*\
  !*** ./src/comps/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst contact = document.createElement('div');\ncontact.classList.add('contact')\n\nconst h1 = document.createElement('h1');\nh1.textContent = 'Contact Us';\ncontact.append(h1);\n\nconst p = document.createElement('p');\np.textContent = 'Feel free to text, call or email with comments, or critiques. Thank You!';\ncontact.append(p);\n\nconst phone = document.createElement('h4');\nphone.textContent = 'Call Us: (123) 456-7890'\ncontact.append(phone);\n\nconst email = document.createElement('h4');\nemail.textContent = 'Email Us: homeburger@gmail.com'\ncontact.append(email);\n\nconst map = document.createElement('iframe');\nmap.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217.19341813985798!2d-98.48606167588675!3d29.426028771911177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c5f5536a2af7b%3A0x39a5b98b5af44b66!2s300%20Alamo%20Plaza%2C%20San%20Antonio%2C%20TX%2078205!5e0!3m2!1sen!2sus!4v1635354633455!5m2!1sen!2sus';\nmap.classList.add('map');\ncontact.append(map);\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);\n\n{/* <iframe src=\"\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\"></iframe> */}\n\n//# sourceURL=webpack://restaurant-page/./src/comps/contact.js?");

/***/ }),

/***/ "./src/comps/home.js":
/*!***************************!*\
  !*** ./src/comps/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _imgs_familyPhoto_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../imgs/familyPhoto.jpg */ \"./src/imgs/familyPhoto.jpg\");\n/* harmony import */ var _values__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./values */ \"./src/comps/values.js\");\n/* harmony import */ var _imgs_grill2_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../imgs/grill2.jpeg */ \"./src/imgs/grill2.jpeg\");\n\n\n\n\nconst home = document.createElement('div');\nhome.classList.add('home');\n\nconst family = new Image();\nfamily.src = _imgs_familyPhoto_jpg__WEBPACK_IMPORTED_MODULE_0__;\nfamily.alt = 'my son, my wife, and I';\nfamily.classList.add('family');\n\nconst homeTitle = document.createElement('h1');\nhomeTitle.textContent = 'HOMEBURGER';\nhomeTitle.classList.add('home-title');\n\nconst aboutUs = document.createElement('p');\naboutUs.textContent = 'Here at Homeburger, we don\\'t strive for perfection, we simply strive for happiness. Although Burgers are our passion, we don\\'t want fancy awards, we just want every bite to taste like home. Whether you\\'re enjoying our BBQ brisket burger dripping with ranch and onion rings, or enjoying the original Homeburger, it should be enjoyed with friend\\'s and family. So, come on down to Homeburger and stay a while. The first round is on us.';\naboutUs.classList.add('about-us');\n\nconst description = document.createElement('div');\ndescription.classList.add('description');\ndescription.append(homeTitle)\ndescription.append(aboutUs)\n\nconst grill = new Image();\ngrill.src = _imgs_grill2_jpeg__WEBPACK_IMPORTED_MODULE_2__;\ngrill.alt = 'burgers being flipped';\ngrill.classList.add('grill');\n\nconst valuesDiv = document.createElement('div');\nvaluesDiv.append(_values__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n\nhome.append(grill);\nhome.append(description);\nhome.append(family);\nhome.append(_values__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);\n\n//# sourceURL=webpack://restaurant-page/./src/comps/home.js?");

/***/ }),

/***/ "./src/comps/menu.js":
/*!***************************!*\
  !*** ./src/comps/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _imgs_bbqBurger_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../imgs/bbqBurger.jpeg */ \"./src/imgs/bbqBurger.jpeg\");\n/* harmony import */ var _imgs_cheeseCheeseCheese_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../imgs/cheeseCheeseCheese.jpeg */ \"./src/imgs/cheeseCheeseCheese.jpeg\");\n/* harmony import */ var _imgs_breakfastBurger_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../imgs/breakfastBurger.jpeg */ \"./src/imgs/breakfastBurger.jpeg\");\n/* harmony import */ var _imgs_chickyFingers_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../imgs/chickyFingers.jpeg */ \"./src/imgs/chickyFingers.jpeg\");\n/* harmony import */ var _imgs_yuckycluck_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../imgs/yuckycluck.jpeg */ \"./src/imgs/yuckycluck.jpeg\");\n/* harmony import */ var _imgs_buffalochicken_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../imgs/buffalochicken.jpeg */ \"./src/imgs/buffalochicken.jpeg\");\n\n\n\n\n\n\n\nconst images = (imgTitle, src, alt) => {\n  imgTitle = new Image();\n  imgTitle.src = src;\n  imgTitle.alt = alt;\n  imgTitle.classList.add('card-img')\n  return imgTitle;\n};\n\nconst card = (title, titleName, formal) => {\n  title = document.createElement('div');\n  titleName = document.createElement('h2');\n  titleName.textContent = formal;\n  titleName.classList.add('card-title');\n  title.classList.add('card');\n  title.append(titleName);\n  return title;\n}\n\nconst final = (title, titleName, formal, imgTitle, src, alt, description) => {\n  const cardScription = document.createElement('h4');\n  cardScription.textContent = description;\n  cardScription.classList.add('card-description');\n  title = card(title, titleName, formal);\n  imgTitle = images(imgTitle, src, alt);\n  title.append(imgTitle);\n  title.append(cardScription);\n  cards.append(title);\n}\n\nconst menu = document.createElement('div');\nmenu.classList.add('menu');\n\nconst h1 = document.createElement('h1');\nh1.textContent = 'Menu'\nmenu.append(h1);\n\nconst p = document.createElement('p');\np.textContent = '** All burgers come with all-beef patties cooked to order, deep fried onions, pickles, and lettuce. **'\nmenu.append(p);\n\nconst cards = document.createElement('div');\ncards.classList.add('all-cards');\n\nfinal('bbq', 'titleBbq', 'BBQ Burger',\n  'bbb', _imgs_bbqBurger_jpeg__WEBPACK_IMPORTED_MODULE_0__, 'bbq burger',\n  'Two patties made to order, with your choice of brisket, sausage, rib meat or all of the above.');\nfinal('cheesey', 'titleCheesey', 'Cheesey McCheeseface',\n  'cheese', _imgs_cheeseCheeseCheese_jpeg__WEBPACK_IMPORTED_MODULE_1__, 'cheesey burger',\n  'Cheddar, PepperJack, and Blue Cheese, with our special sauce for a kick. I give you... the Cheesey McCheeseface');\nfinal('breakfast', 'titleBreakfast', 'The Breakfast Burger',\n  'breakfast', _imgs_breakfastBurger_jpeg__WEBPACK_IMPORTED_MODULE_2__, 'breakfast burger',\n  'Egg, Ham, Cheese, two Beef patties. It is what it is... as long as you aren\\'t worried about your cholesterol.');\nfinal('chickenStrips', 'titleChickenStrips', 'Chickey Strips', \n  'chickey', _imgs_chickyFingers_jpeg__WEBPACK_IMPORTED_MODULE_3__, 'chicken strips',\n  'I wish there was some twist on these chicken strips, but no, they\\'re just darn good chicken strips.');\nfinal('grilled', 'titleGrilled', 'The Yucky Cluck',\n  'cluck', _imgs_yuckycluck_jpeg__WEBPACK_IMPORTED_MODULE_4__, 'grilled chicken sandwich',\n  'There\\'s nothing yucky about it, this is our grilled chicken sandwich. We\\'ll leave the fried ones up to the fast food joints. ');\nfinal('buffalo', 'titleBuffalo', 'Little John',\n  'buffaloChicken', _imgs_buffalochicken_jpeg__WEBPACK_IMPORTED_MODULE_5__, 'buffalo ranch chicken sandwhich',\n  'Okay, we lied. We do make a friend chicken sandwich. We call it the Little John because it\\'s big, bold and packs a punch with our buffalo, ranch, and special sauce.');\n\nmenu.append(cards);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/comps/menu.js?");

/***/ }),

/***/ "./src/comps/navbar.js":
/*!*****************************!*\
  !*** ./src/comps/navbar.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst navbar = document.createElement('div');\nconst nav = document.createElement('div');\nconst title = document.createElement('h2');\nconst homeBtn = document.createElement('h3');\nconst menuBtn = document.createElement('h3');\nconst contactBtn = document.createElement('h3');\n\nnavbar.classList.add('navbar');\nnav.classList.add('nav');\ntitle.classList.add('title');\nhomeBtn.classList.add('home-nav');\nmenuBtn.classList.add('menu-nav');\ncontactBtn.classList.add('contact-nav');\n\ntitle.textContent = 'HOMEBURGER';\nhomeBtn.textContent = 'Home';\nmenuBtn.textContent = 'Menu';\ncontactBtn.textContent = 'Contact';\n\nnav.appendChild(homeBtn);\nnav.appendChild(menuBtn);\nnav.appendChild(contactBtn);\n\nnavbar.appendChild(title);\nnavbar.appendChild(nav);\ncontent.appendChild(navbar);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navbar);\n\n//# sourceURL=webpack://restaurant-page/./src/comps/navbar.js?");

/***/ }),

/***/ "./src/comps/values.js":
/*!*****************************!*\
  !*** ./src/comps/values.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst values = document.createElement('div');\nvalues.classList.add('values');\n\nconst h2 = document.createElement('h2');\nh2.textContent = 'Our Values';\n\nconst valuesList = document.createElement('div')\nvaluesList.classList.add('list-values');\n\nconst food = document.createElement('div');\nconst foodTitle = document.createElement('h2');\nconst foodP = document.createElement('p');\nfood.classList.add('food');\nfoodTitle.textContent = 'FOOD';\nfoodTitle.classList.add('value-title')\nfoodP.textContent = 'As a cook in the Texas Army National Guard, I learned the value of a hot meal. Bad food can make a bad day worse, but good food can turn a bad day around. So, our goal here is not awards or achievement, but some darn good food, in hopes of turning your day around.';\nfood.append(foodTitle);\nfood.append(foodP);\n\nconst fun = document.createElement('div');\nconst funTitle = document.createElement('h2');\nconst funP = document.createElement('p');\nfun.classList.add('fun');\nfunTitle.textContent = 'FUN';\nfunTitle.classList.add('value-title')\nfunP.textContent =  'Life is hard. It sucks sometimes. But, I\\'ve found that it sucks a little less when you\\'re having fun. Whether it\\'s a live band, family night, or game night, we will always make sure there is fun to be had.';\nfun.append(funTitle);\nfun.append(funP);\n\nconst family = document.createElement('div');\nconst familyTitle = document.createElement('h2');\nconst familyP = document.createElement('p');\nfamily.classList.add('family-values');\nfamilyTitle.textContent = 'FAMILY';\nfamilyTitle.classList.add('value-title')\nfamilyP.textContent = 'While the whole \"family\" theme from Fast and Furious may have become a meme this past year, They\\'ve got a point. Family is one of the most important things in life. You can count on Homeburger to always be family friendly.';\nfamily.append(familyTitle);\nfamily.append(familyP)\n\n\nvaluesList.append(food);\nvaluesList.append(fun);\nvaluesList.append(family);\n\nvalues.append(h2);\nvalues.append(valuesList);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (values);\n\n//# sourceURL=webpack://restaurant-page/./src/comps/values.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _comps_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comps/home */ \"./src/comps/home.js\");\n/* harmony import */ var _comps_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comps/navbar */ \"./src/comps/navbar.js\");\n/* harmony import */ var _comps_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comps/menu */ \"./src/comps/menu.js\");\n/* harmony import */ var _comps_contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comps/contact */ \"./src/comps/contact.js\");\n\n\n\n\n\n\nfunction content() {\n  const content = document.querySelector('#content');\n  const titleBtn = document.querySelector('.title');\n  const homeBtn = document.querySelector('.home-nav');\n  const menuBtn = document.querySelector('.menu-nav');\n  const contactBtn = document.querySelector('.contact-nav');\n\n  const main = document.createElement('div');\n  main.classList.add('main');\n  \n  main.append(_comps_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n  content.append(_comps_navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n  content.append(main);\n  \n  titleBtn.addEventListener('click', e => {\n    content.append(main);\n    _comps_menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"].remove();\n    _comps_contact__WEBPACK_IMPORTED_MODULE_4__[\"default\"].remove();\n  });\n\n  homeBtn.addEventListener('click', e => {\n    content.append(main);\n    _comps_menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"].remove();\n    _comps_contact__WEBPACK_IMPORTED_MODULE_4__[\"default\"].remove();\n  });\n\n  menuBtn.addEventListener('click', e => {\n    content.append(_comps_menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n    main.remove();\n    _comps_contact__WEBPACK_IMPORTED_MODULE_4__[\"default\"].remove();\n  });\n\n  contactBtn.addEventListener('click', e => {\n    content.append(_comps_contact__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n    main.remove();\n    _comps_menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"].remove();\n  });\n\n\n\n  return content;\n}\n\ndocument.body.append(content());\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/imgs/bbqBurger.jpeg":
/*!*********************************!*\
  !*** ./src/imgs/bbqBurger.jpeg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f48bb6f3819750f04524.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/imgs/bbqBurger.jpeg?");

/***/ }),

/***/ "./src/imgs/breakfastBurger.jpeg":
/*!***************************************!*\
  !*** ./src/imgs/breakfastBurger.jpeg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0754067368032a35a620.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/imgs/breakfastBurger.jpeg?");

/***/ }),

/***/ "./src/imgs/buffalochicken.jpeg":
/*!**************************************!*\
  !*** ./src/imgs/buffalochicken.jpeg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2e7952d774bd80ecb4c4.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/imgs/buffalochicken.jpeg?");

/***/ }),

/***/ "./src/imgs/cheeseCheeseCheese.jpeg":
/*!******************************************!*\
  !*** ./src/imgs/cheeseCheeseCheese.jpeg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"859785470570294d0f80.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/imgs/cheeseCheeseCheese.jpeg?");

/***/ }),

/***/ "./src/imgs/chickyFingers.jpeg":
/*!*************************************!*\
  !*** ./src/imgs/chickyFingers.jpeg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f16c6cd5080f37194ab2.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/imgs/chickyFingers.jpeg?");

/***/ }),

/***/ "./src/imgs/familyPhoto.jpg":
/*!**********************************!*\
  !*** ./src/imgs/familyPhoto.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"39d0f42b96a855bba13c.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/imgs/familyPhoto.jpg?");

/***/ }),

/***/ "./src/imgs/grill2.jpeg":
/*!******************************!*\
  !*** ./src/imgs/grill2.jpeg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9efa9b25137843d44751.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/imgs/grill2.jpeg?");

/***/ }),

/***/ "./src/imgs/yuckycluck.jpeg":
/*!**********************************!*\
  !*** ./src/imgs/yuckycluck.jpeg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5f2b2d7b47e4bdefec91.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/imgs/yuckycluck.jpeg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;