/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../../../../../DevEco_Projects/JsApp/entry/src/main/js/default/pages/index/index.hml?entry");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../DevEco_Projects/JsApp/entry/src/main/js/default/pages/index/index.hml?entry":
/*!****************************************************************************************************!*\
  !*** d:/DevEco_Studio/DevEco_Projects/JsApp/entry/src/main/js/default/pages/index/index.hml?entry ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../../../../../../../../Harmony OS SDK/js/2.1.1.21/build-tools/ace-loader/lib/json.js!../../../../../../../../../Harmony OS SDK/js/2.1.1.21/build-tools/ace-loader/lib/template.js!./index.hml */ "./lib/json.js!./lib/template.js!../../../../../DevEco_Projects/JsApp/entry/src/main/js/default/pages/index/index.hml")
var $app_style$ = __webpack_require__(/*! !../../../../../../../../../Harmony OS SDK/js/2.1.1.21/build-tools/ace-loader/lib/json.js!../../../../../../../../../Harmony OS SDK/js/2.1.1.21/build-tools/ace-loader/lib/style.js!./index.css */ "./lib/json.js!./lib/style.js!../../../../../DevEco_Projects/JsApp/entry/src/main/js/default/pages/index/index.css")
var $app_script$ = __webpack_require__(/*! !../../../../../../../../../Harmony OS SDK/js/2.1.1.21/build-tools/ace-loader/lib/script.js!../../../../../../../../../Harmony OS SDK/js/2.1.1.21/build-tools/ace-loader/node_modules/babel-loader?presets[]=D:/DevEco_Studio/Harmony OS SDK/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=D:/DevEco_Studio/Harmony OS SDK/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!./index.js */ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=D:\\DevEco_Studio\\Harmony OS SDK\\js\\2.1.1.21\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=D:\\DevEco_Studio\\Harmony OS SDK\\js\\2.1.1.21\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!../../../../../DevEco_Projects/JsApp/entry/src/main/js/default/pages/index/index.js")

$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$) {

$app_script$($app_module$, $app_exports$, $app_require$)
if ($app_exports$.__esModule && $app_exports$.default) {
$app_module$.exports = $app_exports$.default
}

$app_module$.exports.template = $app_template$

$app_module$.exports.style = $app_style$

})
$app_bootstrap$('@app-component/index',undefined,undefined)

/***/ }),

/***/ "./lib/json.js!./lib/style.js!../../../../../DevEco_Projects/JsApp/entry/src/main/js/default/pages/index/index.css":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** d:/DevEco_Studio/Harmony OS SDK/js/2.1.1.21/build-tools/ace-loader/lib/json.js!d:/DevEco_Studio/Harmony OS SDK/js/2.1.1.21/build-tools/ace-loader/lib/style.js!d:/DevEco_Studio/DevEco_Projects/JsApp/entry/src/main/js/default/pages/index/index.css ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".container": {
    "flexDirection": "column"
  },
  ".title": {
    "alignItems": "flex-start",
    "flexDirection": "column",
    "marginTop": "10px",
    "paddingLeft": "60px",
    "paddingRight": "160px"
  },
  ".name": {
    "fontSize": "20px"
  },
  ".sub-title": {
    "fontSize": "15px",
    "color": "#7a787d",
    "marginTop": "10px"
  },
  ".swiper-style": {
    "height": "250px",
    "width": "350px",
    "indicatorColor": "#4682b4",
    "indicatorSelectedColor": "#f0e68c",
    "indicatorSize": "10px",
    "marginLeft": "50px"
  },
  ".image-mode": {
    "objectFit": "contain"
  },
  ".color-column": {
    "flexDirection": "row",
    "alignContent": "center",
    "marginTop": "20px"
  },
  ".color-item": {
    "height": "50px",
    "width": "50px",
    "marginLeft": "50px",
    "paddingLeft": "10px",
    "backgroundColor:focus": "#000000"
  },
  ".description-first-paragraph": {
    "paddingLeft": "60px",
    "paddingRight": "60px",
    "paddingTop": "60px"
  },
  ".description": {
    "color": "#7a787d",
    "fontSize": "15px"
  },
  ".cart": {
    "justifyContent": "center",
    "marginTop": "10px"
  },
  ".cart-text": {
    "fontSize": "20px",
    "textAlign": "center",
    "width": "300px",
    "height": "50px",
    "backgroundColor": "#6495ed",
    "color": "#FFFFFF"
  },
  ".cart-text-focus": {
    "fontSize": "20px",
    "textAlign": "center",
    "width": "300px",
    "height": "50px",
    "backgroundColor": "#4169e1",
    "color": "#FFFFFF"
  },
  ".add-cart-text": {
    "fontSize": "20px",
    "textAlign": "center",
    "width": "300px",
    "height": "50px",
    "backgroundColor": "#ffd700",
    "color": "#FFFFFF"
  },
  ".show-text": {
    "fontSize": "50px",
    "textAlign": "center",
    "width": "500px",
    "height": "500px",
    "backgroundColor": "#ADD8E6",
    "color": "#000000",
    "justifyContent": "center"
  },
  ".name-label": {
    "color": "#7a787d",
    "fontSize": "20px"
  }
}

/***/ }),

/***/ "./lib/json.js!./lib/template.js!../../../../../DevEco_Projects/JsApp/entry/src/main/js/default/pages/index/index.hml":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** d:/DevEco_Studio/Harmony OS SDK/js/2.1.1.21/build-tools/ace-loader/lib/json.js!d:/DevEco_Studio/Harmony OS SDK/js/2.1.1.21/build-tools/ace-loader/lib/template.js!d:/DevEco_Studio/DevEco_Projects/JsApp/entry/src/main/js/default/pages/index/index.hml ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "attr": {
    "debugLine": "pages/index/index:16",
    "className": "container"
  },
  "type": "div",
  "classList": [
    "container"
  ],
  "children": [
    {
      "attr": {
        "debugLine": "pages/index/index:17",
        "className": "title"
      },
      "type": "div",
      "classList": [
        "title"
      ],
      "children": [
        {
          "attr": {
            "debugLine": "pages/index/index:18",
            "className": "name",
            "value": "Merchandise"
          },
          "type": "text",
          "classList": [
            "name"
          ]
        },
        {
          "attr": {
            "debugLine": "pages/index/index:19",
            "className": "sub-title",
            "value": "Choose What You Like"
          },
          "type": "text",
          "classList": [
            "sub-title"
          ]
        }
      ]
    },
    {
      "attr": {
        "debugLine": "pages/index/index:21"
      },
      "type": "div",
      "children": [
        {
          "attr": {
            "debugLine": "pages/index/index:22",
            "id": "swiperImage",
            "className": "swiper-style"
          },
          "type": "swiper",
          "id": "swiperImage",
          "classList": [
            "swiper-style"
          ],
          "events": {
            "change": "swiperChange"
          },
          "children": [
            {
              "attr": {
                "debugLine": "pages/index/index:23",
                "src": function () {return this.$item},
                "className": "image-mode",
                "focusable": "true"
              },
              "type": "image",
              "classList": [
                "image-mode"
              ],
              "repeat": function () {return this.imageList}
            }
          ]
        },
        {
          "attr": {
            "debugLine": "pages/index/index:25",
            "className": "container"
          },
          "type": "div",
          "classList": [
            "container"
          ],
          "children": [
            {
              "attr": {
                "debugLine": "pages/index/index:26",
                "className": "description-first-paragraph"
              },
              "type": "div",
              "classList": [
                "description-first-paragraph"
              ],
              "children": [
                {
                  "attr": {
                    "debugLine": "pages/index/index:27",
                    "className": "description",
                    "value": function () {return this.descriptionFirstParagraph}
                  },
                  "type": "text",
                  "classList": [
                    "description"
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "attr": {
        "debugLine": "pages/index/index:31",
        "className": "cart"
      },
      "type": "div",
      "classList": [
        "cart"
      ],
      "children": [
        {
          "attr": {
            "debugLine": "pages/index/index:32",
            "className": "{{cartStyle}}",
            "focusable": "true",
            "value": function () {return this.cartText}
          },
          "type": "text",
          "classList": function () {return [this.cartStyle]},
          "events": {
            "click": "addCart",
            "focus": "getFocus",
            "blur": "lostFocus"
          }
        }
      ]
    },
    {
      "attr": {
        "debugLine": "pages/index/index:35",
        "className": "show-text"
      },
      "type": "div",
      "classList": [
        "show-text"
      ],
      "children": [
        {
          "attr": {
            "debugLine": "pages/index/index:36",
            "value": "current product:"
          },
          "type": "text"
        },
        {
          "attr": {
            "debugLine": "pages/index/index:37",
            "value": function () {return this.stringToShow}
          },
          "type": "text"
        }
      ]
    }
  ]
}

/***/ }),

/***/ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=D:\\DevEco_Studio\\Harmony OS SDK\\js\\2.1.1.21\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=D:\\DevEco_Studio\\Harmony OS SDK\\js\\2.1.1.21\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!../../../../../DevEco_Projects/JsApp/entry/src/main/js/default/pages/index/index.js":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** d:/DevEco_Studio/Harmony OS SDK/js/2.1.1.21/build-tools/ace-loader/lib/script.js!d:/DevEco_Studio/Harmony OS SDK/js/2.1.1.21/build-tools/ace-loader/node_modules/babel-loader/lib?presets[]=D:/DevEco_Studio/Harmony OS SDK/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=D:/DevEco_Studio/Harmony OS SDK/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!d:/DevEco_Studio/DevEco_Projects/JsApp/entry/src/main/js/default/pages/index/index.js ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  data: {
    cartText: 'Add To Cart',
    cartStyle: 'cart-text',
    isCartEmpty: true,
    descriptionFirstParagraph: 'This is the merchandise page that includes fresh fruit, meat, snacks, merchandise, and more. \nYou can pick anything you like and add it to your cart. \nYour order will arrive within 48 hours. We guarantee that we are organic and healthy. \n Feel free to ask our 24-hour online service to learn more about our platforms and products.',
    imageList: ['/common/item_000.png', '/common/item_001.png', '/common/item_002.png', '/common/item_003.png'],
    currentIndex: 1,
    stringToShow: ''
  },
  swipeToIndex: function swipeToIndex(index) {
    this.$element('swiperImage').swipeTo({
      index: index
    });
  },
  swiperChange: function swiperChange() {
    this.currentIndex = (this.currentIndex + 1) % 3 + 1;
  },
  addCart: function addCart() {
    if (this.isCartEmpty) {
      this.cartText = 'Cart + 1';
      this.cartStyle = 'add-cart-text';
      this.isCartEmpty = false;
    }

    this.stringToShow = this.stringToShow + 'Phone' + this.currentIndex;
  },
  getFocus: function getFocus() {
    if (this.isCartEmpty) {
      this.cartStyle = 'cart-text-focus';
    }
  },
  lostFocus: function lostFocus() {
    if (this.isCartEmpty) {
      this.cartStyle = 'cart-text';
    }
  }
};
exports["default"] = _default;
var moduleOwn = exports.default || module.exports;
var accessors = ['public', 'protected', 'private'];
if (moduleOwn.data && accessors.some(function (acc) {
    return moduleOwn[acc];
  })) {
  throw new Error('For VM objects, attribute data must not coexist with public, protected, or private. Please replace data with public.');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function(acc) {
    var accType = typeof moduleOwn[acc];
    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
      for (var name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = {access : acc};
      }
    } else if (accType === 'function') {
      console.warn('For VM objects, attribute ' + acc + ' value must not be a function. Change the value to an object.');
    }
  });
}}
/* generated by ace-loader */


/***/ })

/******/ });
//# sourceMappingURL=index.js.map