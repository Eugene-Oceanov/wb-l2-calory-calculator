/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\r\n    --main-color: rgb(120, 122, 254);\r\n    --main-color-opacity: rgba(169, 171, 252, 0.3);\r\n}\r\n\r\n/* reset start */\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-size: 16px;\r\n    line-height: 1.3em;\r\n    font-weight: normal;\r\n}\r\n\r\nbody {\r\n    height: 100vh;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n}\r\n\r\n/* reset end */\r\n\r\n/* default start */\r\n.d-block {\r\n    display: block;\r\n}\r\n\r\n.d-none {\r\n    display: none;\r\n}\r\n\r\n.d-flex {\r\n    display: flex;\r\n}\r\n\r\n.jc-space-between {\r\n    justify-content: space-between;\r\n}\r\n\r\n.jc-center {\r\n    justify-content: center;\r\n}\r\n\r\n.ai-center {\r\n    align-items: center;\r\n}\r\n\r\n.fd-column {\r\n    flex-direction: column;\r\n}\r\n\r\ninput[type=\"text\"] {\r\n    padding: 7px 15px;\r\n    outline: none;\r\n    border: none;\r\n    border-radius: 3px;\r\n}\r\n\r\nbutton {\r\n    padding: 10px 15px;\r\n    background: none;\r\n    outline: none;\r\n    border: 2px solid #fff;\r\n    color: #fff;\r\n    font-weight: 700;\r\n    cursor: pointer;\r\n    transition: .2s ease;\r\n}\r\n\r\nbutton:hover {\r\n    background: #fff;\r\n    color: var(--main-color);\r\n}\r\n\r\n/* default end */\r\n\r\n/* app start */\r\n#app {\r\n    height: 100%;\r\n}\r\n\r\n/* sidebar start */\r\n#sidebar {\r\n    width: 20%;\r\n    height: 100%;\r\n    background: #fff;\r\n    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);\r\n    z-index: 1;\r\n}\r\n\r\n.sidebar__title {\r\n    padding: 20px;\r\n    margin-bottom: 20px;\r\n    font-size: 1.3em;\r\n    font-weight: bold;\r\n}\r\n\r\n.sidebar-list {\r\n    overflow-y: auto;\r\n}\r\n\r\n.sidebar-list__item {\r\n    padding: 7px 20px;\r\n    cursor: pointer;\r\n}\r\n\r\n.sidebar-list__item:hover {\r\n    background: rgba(160, 162, 255, 0.5);\r\n}\r\n\r\n/* sidebar end */\r\n\r\n/* main start */\r\nmain {\r\n    width: 80%;\r\n}\r\n\r\nmain>section {\r\n    height: 100%;\r\n    width: 100%;\r\n    padding: 30px;\r\n    background: var(--main-color);\r\n    color: #fff;\r\n}\r\n\r\n.section-title {\r\n    font-size: 32px;\r\n    font-weight: 700;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n/* main screen start */\r\n.main-screen-greetings {\r\n    width: 80%;\r\n    margin: 0 auto;\r\n}\r\n\r\n.main-screen-greetings__title {\r\n    text-align: center;\r\n    margin-bottom: 50px;\r\n    font-size: 3em;\r\n    font-weight: 700;\r\n}\r\n\r\n.main-screen-greetings_form {\r\n    width: 50%;\r\n    margin: 0 auto;\r\n}\r\n\r\n.main-screen-greetings_form>input {\r\n    display: block;\r\n    width: 100%;\r\n    margin: 0 auto;\r\n    margin-bottom: 20px;\r\n    padding: 10px 15px;\r\n}\r\n\r\n/* ?????????????????????????????????????????????????????????? */\r\n/* main screen end */\r\n\r\n/* ingestion screen start */\r\n.ingestion-screen-add {\r\n    width: 50%;\r\n}\r\n\r\n.search-product-wrapper {\r\n    width: 100%;\r\n    position: relative;\r\n}\r\n\r\n.search-results {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 90%;\r\n    width: 100%;\r\n    min-height: 30px;\r\n    max-height: 150px;\r\n    overflow-y: auto;\r\n    background: #fff;\r\n    color: #000;\r\n    box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.search-item {\r\n    padding: 5px 7px;\r\n    cursor: pointer;\r\n}\r\n\r\n.search-item:hover {\r\n    background: var(--main-color-opacity);\r\n}\r\n\r\n.add-ingestion__input {\r\n    width: 100%;\r\n}\r\n\r\n.add-ingestion__weight {\r\n    margin: 15px 0;\r\n}\r\n\r\n/* ingestion screen end */\r\n\r\n/* food screen start */\r\n.food-screen-add-product {\r\n    width: 50%;\r\n}\r\n\r\n.add-product__input {\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.add-product__category {\r\n    padding: 7px 15px;\r\n    outline: none;\r\n    border: none;\r\n    border-radius: 3px;\r\n    background: #fff;\r\n    margin-bottom: 15px;\r\n    cursor: pointer;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://wb-l2-5projects/./src/assets/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://wb-l2-5projects/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://wb-l2-5projects/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/assets/style.css":
/*!******************************!*\
  !*** ./src/assets/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/assets/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://wb-l2-5projects/./src/assets/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://wb-l2-5projects/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://wb-l2-5projects/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://wb-l2-5projects/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://wb-l2-5projects/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://wb-l2-5projects/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://wb-l2-5projects/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/js/layouts.js":
/*!***************************!*\
  !*** ./src/js/layouts.js ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const searchAndSort = __webpack_require__(/*! ./searchAndSort.js */ \"./src/js/searchAndSort.js\");\r\n\r\nmodule.exports = {\r\n    greetingsScreen: function () {\r\n        const greetingsWrapper = document.createElement(\"DIV\");\r\n        greetingsWrapper.classList.add(\"main-screen-greetings\");\r\n        greetingsWrapper.innerHTML = `<h2 class=\"main-screen-greetings__title\">ПРИВЕТ! <br> Давай познакомимся!</h2>\r\n                                    <div class=\"main-screen-greetings_form d-flex fd-column\">\r\n                                        <input type=\"text\" class=\"greetings-name-input greetings__input\" placeholder=\"Как Вас зовут?\">\r\n                                        <input type=\"text\" class=\"greetings-weight-input greetings__input\" placeholder=\"Каков Ваш текущий вес?\">\r\n                                        <input type=\"text\" class=\"greetings-calory-input greetings__input\" placeholder=\"Какова Ваша дневная норма калорий?\">\r\n                                        <button class=\"greetings__save-user-btn\">Сохранить</button>\r\n                                    </div>`;\r\n        return greetingsWrapper;\r\n    },\r\n\r\n    mainScreen: function (user) {\r\n        const mainScreen = document.createElement(\"DIV\");\r\n        mainScreen.innerHTML = `<h2>Привет, ${user.name}!</h2>\r\n                                <p>Твоя норма калорий на сегодня${user.calory}</p>`;\r\n        return mainScreen;\r\n    },\r\n\r\n    searchResults: function (item) {\r\n        let searchItem = document.createElement(\"P\");\r\n        searchItem.classList.add(\"search-item\");\r\n        searchItem.innerText = `${item.title} (${item.calories} кал. на 100 гр.)`;\r\n        return searchItem;\r\n    }\r\n    //     searchResults: function (input, resultsNode, arr) {\r\n    //         resultsNode.innerHTML = \"\";\r\n    //         let filteredFood = searchAndSort.search(input.value, arr);\r\n    //         if (filteredFood.length > 0 && input.value) {\r\n    //             resultsNode.style.display = \"block\";\r\n    //             filteredFood.forEach(item => {\r\n    //                 let searchItem = document.createElement(\"P\");\r\n    //                 searchItem.classList.add(\"search-item\");\r\n    //                 searchItem.innerText = `${item.title} (${item.calories} кал. на 100 гр.)`;\r\n    //                 resultsNode.append(searchItem);\r\n    //                 searchItem.onclick = () => input.value = item.title;\r\n    //             })\r\n    //         } else resultsNode.style.display = \"none\";\r\n    //         return filteredFood;\r\n    //     }\r\n}\n\n//# sourceURL=webpack://wb-l2-5projects/./src/js/layouts.js?");

/***/ }),

/***/ "./src/js/localStorage.js":
/*!********************************!*\
  !*** ./src/js/localStorage.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const layouts = __webpack_require__(/*! ./layouts.js */ \"./src/js/layouts.js\");\r\n\r\nmodule.exports = {\r\n    date: new Date(),\r\n\r\n    user: {\r\n        name: \"\",\r\n        weight: null,\r\n        calory: null,\r\n        ingestion: [],\r\n        food: [],\r\n    },\r\n\r\n    getUser: function () {\r\n        if (localStorage.getItem(\"user\")) {\r\n            this.user = JSON.parse(localStorage.getItem(\"user\"));\r\n        }\r\n    },\r\n\r\n    loadMainScreen: function (node) {\r\n        if (!localStorage.getItem(\"user\")) {\r\n            const greetingsScreen = layouts.greetingsScreen()\r\n            node.append(greetingsScreen)\r\n            greetingsScreen.querySelector(\".greetings__save-user-btn\").onclick = () => {\r\n                if (greetingsScreen.querySelector(\".greetings-name-input\").value &&\r\n                    greetingsScreen.querySelector(\".greetings-weight-input\").value &&\r\n                    greetingsScreen.querySelector(\".greetings-calory-input\").value) {\r\n                    this.user.name = greetingsScreen.querySelector(\".greetings-name-input\").value;\r\n                    this.user.weight = greetingsScreen.querySelector(\".greetings-weight-input\").value;\r\n                    this.user.calory = greetingsScreen.querySelector(\".greetings-calory-input\").value;\r\n                    localStorage.setItem(\"user\", JSON.stringify(this.user));\r\n                    node.innerHTML = ``;\r\n                    node.append(layouts.mainScreen(this.user));\r\n                } else alert(\"Заполните данные о себе\")\r\n            }\r\n        } else {\r\n            this.getUser();\r\n            const mainScreen = layouts.mainScreen(this.user);\r\n            node.append(mainScreen);\r\n        }\r\n    },\r\n\r\n    addIngestion: function (arr) {\r\n        let ingestion = {\r\n            date: new Date(),\r\n            products: arr\r\n        }\r\n        this.user.ingestion.push(ingestion);\r\n        localStorage.setItem(\"user\", JSON.stringify(this.user));\r\n    },\r\n\r\n\r\n\r\n    addProduct: function (title, calories, category) {\r\n        let product = {\r\n            title: title,\r\n            calories: calories,\r\n            category: category\r\n        }\r\n        this.user.food.push(product);\r\n        localStorage.setItem(\"user\", JSON.stringify(this.user));\r\n    },\r\n\r\n\r\n\r\n\r\n\r\n    removeUser: function () {\r\n        localStorage.removeItem(\"user\");\r\n    }\r\n}\n\n//# sourceURL=webpack://wb-l2-5projects/./src/js/localStorage.js?");

/***/ }),

/***/ "./src/js/navigation.js":
/*!******************************!*\
  !*** ./src/js/navigation.js ***!
  \******************************/
/***/ ((module) => {

eval("const openMainScreenBtn = document.querySelector(\".sidebar-list__item-main\"),\r\n    openIngestionScreenBtn = document.querySelector(\".sidebar-list__item-ingestion\"),\r\n    openFoodScreenBtn = document.querySelector(\".sidebar-list__item-food\"),\r\n    openSettingsScreenBtn = document.querySelector(\".sidebar-list__item-settings\"),\r\n    mainScreen = document.querySelector(\"#main-screen\"),\r\n    ingestionScreen = document.getElementById(\"ingestion-screen\"),\r\n    foodScreen = document.getElementById(\"food-screen\"),\r\n    settingsScreen = document.getElementById(\"settings-screen\");\r\n\r\n\r\nfunction navigation() {\r\n    openMainScreenBtn.onclick = () => {\r\n        if (localStorage.getItem(\"user\")) {\r\n            mainScreen.style.display = \"flex\";\r\n            ingestionScreen.style.display = \"none\";\r\n            foodScreen.style.display = \"none\";\r\n            settingsScreen.style.display = \"none\";\r\n        } else return;\r\n    }\r\n\r\n    openIngestionScreenBtn.onclick = () => {\r\n        if (localStorage.getItem(\"user\")) {\r\n            ingestionScreen.style.display = \"block\";\r\n            mainScreen.style.display = \"none\";\r\n            foodScreen.style.display = \"none\";\r\n            settingsScreen.style.display = \"none\";\r\n        } else return;\r\n    }\r\n\r\n    openFoodScreenBtn.onclick = () => {\r\n        if (localStorage.getItem(\"user\")) {\r\n            foodScreen.style.display = \"block\";\r\n            mainScreen.style.display = \"none\";\r\n            ingestionScreen.style.display = \"none\";\r\n            settingsScreen.style.display = \"none\";\r\n\r\n        } else return;\r\n    }\r\n\r\n    openSettingsScreenBtn.onclick = () => {\r\n        if (localStorage.getItem(\"user\")) {\r\n            settingsScreen.style.display = \"block\";\r\n            mainScreen.style.display = \"none\";\r\n            ingestionScreen.style.display = \"none\";\r\n            foodScreen.style.display = \"none\";\r\n        } else return;\r\n    }\r\n}\r\n\r\nfunction restart() {\r\n    mainScreen.innerHTML = \"\";\r\n    mainScreen.style.display = \"flex\";\r\n    ingestionScreen.style.display = \"none\";\r\n    foodScreen.style.display = \"none\";\r\n    settingsScreen.style.display = \"none\";\r\n}\r\n\r\nmodule.exports = { navigation, restart };\n\n//# sourceURL=webpack://wb-l2-5projects/./src/js/navigation.js?");

/***/ }),

/***/ "./src/js/searchAndSort.js":
/*!*********************************!*\
  !*** ./src/js/searchAndSort.js ***!
  \*********************************/
/***/ ((module) => {

eval("module.exports = {\r\n    search: function (value, arr) {\r\n        const searchValue = value.toLowerCase();\r\n        const filtered = arr.filter((item) => {\r\n            const title = item.title.toLowerCase();\r\n            return title.includes(searchValue);\r\n        });\r\n        return filtered;\r\n    }\r\n}\n\n//# sourceURL=webpack://wb-l2-5projects/./src/js/searchAndSort.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/style.css */ \"./src/assets/style.css\");\n\r\nconst layouts = __webpack_require__(/*! ./js/layouts.js */ \"./src/js/layouts.js\");\r\n\r\nconst { navigation } = __webpack_require__(/*! ./js/navigation.js */ \"./src/js/navigation.js\");\r\nconst { restart } = __webpack_require__(/*! ./js/navigation.js */ \"./src/js/navigation.js\")\r\n\r\nconst LS = __webpack_require__(/*! ./js/localStorage.js */ \"./src/js/localStorage.js\")\r\nconst searchAndSort = __webpack_require__(/*! ./js/searchAndSort.js */ \"./src/js/searchAndSort.js\");\r\n\r\nconst mainScreen = document.querySelector(\"#main-screen\"),\r\n    addIngestionTitleInput = document.querySelector(\".add-ingestion__title\"),\r\n    foodSearchResult = document.querySelector(\".search-results\"),\r\n    addIngestionWeightInput = document.querySelector(\".add-ingestion__weight\"),\r\n    adIngestionBtn = document.querySelector(\".add-ignestion-btn\"),\r\n    addProductTitleInput = document.querySelector(\".add-product__title\"),\r\n    addProductCaloryInput = document.querySelector(\".add-product__calory\"),\r\n    addProductCategoryInput = document.querySelector(\".add-product__category\"),\r\n    addProductBtn = document.querySelector(\".add-product-btn\"),\r\n    removeUserBtn = document.querySelector(\".remove-user-btn\");\r\n\r\n\r\nnavigation();\r\n\r\nwindow.onload = () => {\r\n    LS.loadMainScreen(mainScreen);\r\n    addProductBtn.onclick = () => {\r\n        if (addProductTitleInput.value && addProductCaloryInput.value && addProductCategoryInput.value) {\r\n            LS.addProduct(addProductTitleInput.value, addProductCaloryInput.value, addProductCategoryInput.value);\r\n            addProductTitleInput.value = \"\";\r\n            addProductCaloryInput.value = \"\";\r\n            addProductCategoryInput.value = \"Категория\";\r\n        } else alert(\"Заполните данные о продукте\");\r\n    }\r\n\r\n    addIngestionTitleInput.oninput = () => {\r\n        let filteredFood = searchAndSort.search(addIngestionTitleInput.value, LS.user.food);\r\n        if (filteredFood.length > 0) {\r\n            foodSearchResult.style.display = \"block\";\r\n            filteredFood.forEach(item => {\r\n                foodSearchResult.append(layouts.searchResults(item));\r\n            })\r\n        }\r\n    }\r\n\r\n    removeUserBtn.onclick = () => {\r\n        LS.removeUser();\r\n        restart();\r\n        LS.loadMainScreen(mainScreen);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://wb-l2-5projects/./src/main.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;