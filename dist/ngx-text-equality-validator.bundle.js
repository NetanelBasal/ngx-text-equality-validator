(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/forms"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/forms"], factory);
	else if(typeof exports === 'object')
		exports["ngx-text-equality-validator"] = factory(require("@angular/core"), require("@angular/forms"));
	else
		root["ngx-text-equality-validator"] = factory(root["@angular/core"], root["@angular/forms"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_4__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("@angular/core");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextEqualityValidatorDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_forms__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TextEqualityValidatorDirective = TextEqualityValidatorDirective_1 = (function () {
    function TextEqualityValidatorDirective() {
    }
    TextEqualityValidatorDirective.prototype.registerOnValidatorChange = function (fn) {
        this._onChange = fn;
    };
    /**
     *
     * @param c
     * @returns {{validateEqual: boolean}|null}
     */
    TextEqualityValidatorDirective.prototype.validate = function (c) {
        var _this = this;
        var passwordVal = c.value;
        var repeatEle = c.root.get(this.validateEqualTo);
        if (repeatEle) {
            this.oldVal = repeatEle.value;
        }
        c.root.valueChanges.subscribe(function (changes) {
            if (_this.oldVal !== changes[_this.validateEqualTo]) {
                _this._onChange();
            }
        });
        return this.checkEquality(passwordVal, repeatEle);
    };
    /**
     *
     * @param passwordVal
     * @param repeatEle
     * @returns {any}
     */
    TextEqualityValidatorDirective.prototype.checkEquality = function (passwordVal, repeatEle) {
        if (repeatEle && passwordVal !== repeatEle.value)
            return {
                validateEqual: true
            };
        return null;
    };
    return TextEqualityValidatorDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], TextEqualityValidatorDirective.prototype, "validateEqualTo", void 0);
TextEqualityValidatorDirective = TextEqualityValidatorDirective_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[validateEqualTo][ngModel],[validateEqualTo][formControlName]',
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALIDATORS"], useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return TextEqualityValidatorDirective_1; }), multi: true }
        ]
    })
], TextEqualityValidatorDirective);

var TextEqualityValidatorDirective_1;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextEqualityValidatorModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directives_ngx_text_equality_validator_directive__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TextEqualityValidatorModule = TextEqualityValidatorModule_1 = (function () {
    function TextEqualityValidatorModule() {
    }
    TextEqualityValidatorModule.forRoot = function () {
        return {
            ngModule: TextEqualityValidatorModule_1,
            providers: []
        };
    };
    return TextEqualityValidatorModule;
}());
TextEqualityValidatorModule = TextEqualityValidatorModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [__WEBPACK_IMPORTED_MODULE_1__directives_ngx_text_equality_validator_directive__["a" /* TextEqualityValidatorDirective */]],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__directives_ngx_text_equality_validator_directive__["a" /* TextEqualityValidatorDirective */]
        ]
    })
], TextEqualityValidatorModule);

var TextEqualityValidatorModule_1;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngx_text_equality_validator_module__ = __webpack_require__(2);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TextEqualityValidatorModule", function() { return __WEBPACK_IMPORTED_MODULE_0__ngx_text_equality_validator_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directives_ngx_text_equality_validator_directive__ = __webpack_require__(1);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TextEqualityValidatorDirective", function() { return __WEBPACK_IMPORTED_MODULE_1__directives_ngx_text_equality_validator_directive__["a"]; });




/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@angular/forms");

/***/ })
/******/ ]);
});
//# sourceMappingURL=ngx-text-equality-validator.bundle.js.map