(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["itslog"] = factory();
	else
		root["itslog"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _constants = __webpack_require__(1);
	
	var _util = __webpack_require__(2);
	
	var env = (0, _util.getEnv)();
	var consolePointer = (0, _util.getConsoleObject)();
	var wrapper = {};
	
	/**
	 * @param   {String} prefix
	 * @returns {Object} A console wrapper.
	 */
	module.exports = function itslog(prefix) {
	  // Use "module.exports" instead of "export default" so people who aren't using
	  // ES6 don't have to use Logger.default. The people who use ES6 will still be
	  // able to do "import Logger from 'logger'".
	
	  // Attach all simple methods to the wrapper object.
	  _constants.METHODS_SIMPLE.forEach(function (method) {
	    wrapper[method] = function () {
	      var prefixItems = (0, _util.getPrefixes)(env, prefix);
	      var args = (0, _util.convertArgsToArray)(arguments);
	      args = (0, _util.prependItemsToArray)(prefixItems, args);
	
	      return consolePointer[method].apply(consolePointer, args);
	    };
	  });
	
	  // Attach all complex methods to the wrapper object.
	  _constants.METHODS_COMPLEX.forEach(function (method) {
	    wrapper[method] = function () {
	      consolePointer.log.apply(consolePointer, (0, _util.getPrefixes)(env, prefix));
	      return consolePointer[method](arguments);
	    };
	  });
	
	  // Pass down remaining methods to the console object.
	  for (var method in consolePointer) {
	    if (!wrapper[method]) {
	      wrapper[method] = consolePointer[method];
	    }
	  }
	
	  return wrapper;
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var METHODS_SIMPLE = exports.METHODS_SIMPLE = ['count', 'error', 'info', 'log', 'warn'];
	
	var METHODS_COMPLEX = exports.METHODS_COMPLEX = ['assert', 'dir', 'dirxml', 'group', 'groupCollapsed', 'groupEnd', 'table', 'timeEnd', 'trace'];
	
	var NAME = exports.NAME = 'logger';
	
	var STYLES = exports.STYLES = {
	  BROWSER: 'font-style: italic;font-weight: bold;',
	  NODE: '\u001b[36m%s\u001b[0m'
	};
	
	var ENVS = exports.ENVS = {
	  BROWSER: 'browser',
	  NODE: 'node'
	};
	
	exports.default = {
	  ENVS: ENVS,
	  METHODS_COMPLEX: METHODS_COMPLEX,
	  METHODS_SIMPLE: METHODS_SIMPLE,
	  NAME: NAME,
	  STYLES: STYLES
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	exports.getEnv = getEnv;
	exports.getPrefixes = getPrefixes;
	exports.convertArgsToArray = convertArgsToArray;
	exports.prependItemsToArray = prependItemsToArray;
	exports.getConsoleObject = getConsoleObject;
	
	var _constants = __webpack_require__(1);
	
	function noop() {
	  return false;
	}
	
	function getEnv() {
	  if (typeof window !== 'undefined') {
	    return _constants.ENVS.BROWSER;
	  }
	
	  return _constants.ENVS.NODE;
	}
	
	function getPrefixes(env, prefix) {
	  if (env === _constants.ENVS.BROWSER) {
	    return ['%c[' + prefix + ']: ', _constants.STYLES.BROWSER];
	  }
	
	  return [_constants.STYLES.NODE, '[' + prefix + ']: '];
	}
	
	function convertArgsToArray(_args) {
	  var args = Array.prototype.slice.call(_args);
	  return args;
	}
	
	function prependItemsToArray(items, arr) {
	  arr.unshift.apply(arr, items);
	  return arr;
	}
	
	function getConsoleObject() {
	  if ((typeof console === 'undefined' ? 'undefined' : _typeof(console)) !== undefined) {
	    return console;
	  }
	
	  var _console = {};
	  var allMethods = _constants.METHODS_SIMPLE.concat(_constants.METHODS_COMPLEX);
	
	  allMethods.forEach(function (method) {
	    _console[method] = noop;
	  });
	
	  return _console;
	}

/***/ }
/******/ ])
});
;
//# sourceMappingURL=itslog.sourcemap.js