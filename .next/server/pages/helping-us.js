module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/helping-us/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/helping-us/helping-us.module.scss":
/*!*************************************************!*\
  !*** ./pages/helping-us/helping-us.module.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"helpingParent\": \"helping-us_helpingParent__2K1vE\",\n\t\"myanmar\": \"helping-us_myanmar__4Lq9i\",\n\t\"abroad\": \"helping-us_abroad__2OFAt\",\n\t\"backButton\": \"helping-us_backButton__3Mm-T\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9oZWxwaW5nLXVzL2hlbHBpbmctdXMubW9kdWxlLnNjc3M/M2QxNyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3BhZ2VzL2hlbHBpbmctdXMvaGVscGluZy11cy5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImhlbHBpbmdQYXJlbnRcIjogXCJoZWxwaW5nLXVzX2hlbHBpbmdQYXJlbnRfXzJLMXZFXCIsXG5cdFwibXlhbm1hclwiOiBcImhlbHBpbmctdXNfbXlhbm1hcl9fNExxOWlcIixcblx0XCJhYnJvYWRcIjogXCJoZWxwaW5nLXVzX2Ficm9hZF9fMk9GQXRcIixcblx0XCJiYWNrQnV0dG9uXCI6IFwiaGVscGluZy11c19iYWNrQnV0dG9uX18zTW0tVFwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/helping-us/helping-us.module.scss\n");

/***/ }),

/***/ "./pages/helping-us/index.js":
/*!***********************************!*\
  !*** ./pages/helping-us/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return index; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _helping_us_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helping-us.module.scss */ \"./pages/helping-us/helping-us.module.scss\");\n/* harmony import */ var _helping_us_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_helping_us_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/zwenyan/Desktop/save-myanmar/pages/helping-us/index.js\";\n\n\n\nfunction index() {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"mw-1440\",\n    style: {\n      height: \"100%\"\n    },\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _helping_us_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.helpingParent,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _helping_us_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.backButton,\n        onClick: () => router.push(\"/\"),\n        children: \"\\u2190\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _helping_us_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.myanmar,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"mw-400\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n            children: \"Are you from Myanmar?\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 15,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 16,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: [\"Support each other - this doesn't get stressed enough.\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 19,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 20,\n              columnNumber: 15\n            }, this), \"Raise awareness. This doesn't just mean changing your profile picture to red and smacking yourself on the back and calling it a day.\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 24,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 25,\n              columnNumber: 15\n            }, this), \"Don't spam the comment sections of public figures from abroad. As much as you might think it helps, it doesn't.\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 28,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 29,\n              columnNumber: 15\n            }, this), \"Support Civil Disobedience as much as you can. If you're too young to, try to convince people around you.\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 32,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 33,\n              columnNumber: 15\n            }, this), \"Don't believe everything you hear. Don't spread everything you hear.\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 36,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 37,\n              columnNumber: 15\n            }, this), \"Don't protest on the streets. \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 38,\n              columnNumber: 45\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 39,\n              columnNumber: 15\n            }, this), \"Every little bit helps.\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 17,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 14,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _helping_us_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.abroad,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"mw-400\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n            children: \"Are you from abroad?\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 46,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 47,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: [\"Keep in contact with those of us here.\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 50,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 51,\n              columnNumber: 15\n            }, this), \"Do everything you can to let people around you know. More likely than not, there's probably a protest going on near you.\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 54,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 55,\n              columnNumber: 15\n            }, this), \"These early few days will be the most critical. We cannot afford to have people stop caring.\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 58,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 59,\n              columnNumber: 15\n            }, this), \"Get the leaders of your respective countries to care. A resolution has to be reached.\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 62,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 63,\n              columnNumber: 15\n            }, this), \"Every little bit helps.\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9oZWxwaW5nLXVzL2luZGV4LmpzPzJlMWMiXSwibmFtZXMiOlsiaW5kZXgiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJoZWlnaHQiLCJzdHlsZXMiLCJoZWxwaW5nUGFyZW50IiwiYmFja0J1dHRvbiIsInB1c2giLCJteWFubWFyIiwiYWJyb2FkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxLQUFULEdBQWlCO0FBQzlCLFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQXlCLFNBQUssRUFBRTtBQUFFQyxZQUFNLEVBQUU7QUFBVixLQUFoQztBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFFQyw4REFBTSxDQUFDQyxhQUF2QjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBRUQsOERBQU0sQ0FBQ0UsVUFBdkI7QUFBbUMsZUFBTyxFQUFFLE1BQU1MLE1BQU0sQ0FBQ00sSUFBUCxDQUFZLEdBQVosQ0FBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUlFO0FBQUssaUJBQVMsRUFBRUgsOERBQU0sQ0FBQ0ksT0FBdkI7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUMsUUFBZjtBQUFBLGtDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRixlQUdFO0FBQUEsOEZBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRixlQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSEYsdUpBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFQRixlQVFFO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBUkYsa0lBV0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFYRixlQVlFO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBWkYsNEhBZUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFmRixlQWdCRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQWhCRix1RkFtQkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFuQkYsZUFvQkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFwQkYsaURBcUJnQztBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQXJCaEMsZUFzQkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkF0QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRixlQW1DRTtBQUFLLGlCQUFTLEVBQUVKLDhEQUFNLENBQUNLLE1BQXZCO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFDLFFBQWY7QUFBQSxrQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkYsZUFHRTtBQUFBLDhFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkYsZUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUhGLDJJQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBTkYsZUFPRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVBGLCtHQVVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBVkYsZUFXRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVhGLHdHQWNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBZEYsZUFlRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBbkNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWdFRCIsImZpbGUiOiIuL3BhZ2VzL2hlbHBpbmctdXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vaGVscGluZy11cy5tb2R1bGUuc2Nzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbmRleCgpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtdy0xNDQwXCIgc3R5bGU9e3sgaGVpZ2h0OiBcIjEwMCVcIiB9fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVscGluZ1BhcmVudH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFja0J1dHRvbn0gb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvXCIpfT5cbiAgICAgICAgICDihpBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubXlhbm1hcn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdy00MDBcIj5cbiAgICAgICAgICAgIDxoMj5BcmUgeW91IGZyb20gTXlhbm1hcj88L2gyPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgU3VwcG9ydCBlYWNoIG90aGVyIC0gdGhpcyBkb2Vzbid0IGdldCBzdHJlc3NlZCBlbm91Z2guXG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgUmFpc2UgYXdhcmVuZXNzLiBUaGlzIGRvZXNuJ3QganVzdCBtZWFuIGNoYW5naW5nIHlvdXIgcHJvZmlsZVxuICAgICAgICAgICAgICBwaWN0dXJlIHRvIHJlZCBhbmQgc21hY2tpbmcgeW91cnNlbGYgb24gdGhlIGJhY2sgYW5kIGNhbGxpbmcgaXQgYVxuICAgICAgICAgICAgICBkYXkuXG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgRG9uJ3Qgc3BhbSB0aGUgY29tbWVudCBzZWN0aW9ucyBvZiBwdWJsaWMgZmlndXJlcyBmcm9tIGFicm9hZC4gQXNcbiAgICAgICAgICAgICAgbXVjaCBhcyB5b3UgbWlnaHQgdGhpbmsgaXQgaGVscHMsIGl0IGRvZXNuJ3QuXG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgU3VwcG9ydCBDaXZpbCBEaXNvYmVkaWVuY2UgYXMgbXVjaCBhcyB5b3UgY2FuLiBJZiB5b3UncmUgdG9vIHlvdW5nXG4gICAgICAgICAgICAgIHRvLCB0cnkgdG8gY29udmluY2UgcGVvcGxlIGFyb3VuZCB5b3UuXG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgRG9uJ3QgYmVsaWV2ZSBldmVyeXRoaW5nIHlvdSBoZWFyLiBEb24ndCBzcHJlYWQgZXZlcnl0aGluZyB5b3VcbiAgICAgICAgICAgICAgaGVhci5cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICBEb24ndCBwcm90ZXN0IG9uIHRoZSBzdHJlZXRzLiA8YnIgLz5cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIEV2ZXJ5IGxpdHRsZSBiaXQgaGVscHMuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFicm9hZH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdy00MDBcIj5cbiAgICAgICAgICAgIDxoMj5BcmUgeW91IGZyb20gYWJyb2FkPzwvaDI+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBLZWVwIGluIGNvbnRhY3Qgd2l0aCB0aG9zZSBvZiB1cyBoZXJlLlxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIERvIGV2ZXJ5dGhpbmcgeW91IGNhbiB0byBsZXQgcGVvcGxlIGFyb3VuZCB5b3Uga25vdy4gTW9yZSBsaWtlbHlcbiAgICAgICAgICAgICAgdGhhbiBub3QsIHRoZXJlJ3MgcHJvYmFibHkgYSBwcm90ZXN0IGdvaW5nIG9uIG5lYXIgeW91LlxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIFRoZXNlIGVhcmx5IGZldyBkYXlzIHdpbGwgYmUgdGhlIG1vc3QgY3JpdGljYWwuIFdlIGNhbm5vdCBhZmZvcmRcbiAgICAgICAgICAgICAgdG8gaGF2ZSBwZW9wbGUgc3RvcCBjYXJpbmcuXG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgR2V0IHRoZSBsZWFkZXJzIG9mIHlvdXIgcmVzcGVjdGl2ZSBjb3VudHJpZXMgdG8gY2FyZS4gQSByZXNvbHV0aW9uXG4gICAgICAgICAgICAgIGhhcyB0byBiZSByZWFjaGVkLlxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIEV2ZXJ5IGxpdHRsZSBiaXQgaGVscHMuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/helping-us/index.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });