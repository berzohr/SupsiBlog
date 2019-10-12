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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main-validation.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main-validation.js":
/*!********************************!*\
  !*** ./src/main-validation.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validation */ "./src/validation.js");

Object(_validation__WEBPACK_IMPORTED_MODULE_0__["loadEvent"])();

/***/ }),

/***/ "./src/validation.js":
/*!***************************!*\
  !*** ./src/validation.js ***!
  \***************************/
/*! exports provided: allIsValid, checkName, checkUser, checkEmail, loadEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allIsValid", function() { return allIsValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkName", function() { return checkName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkUser", function() { return checkUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkEmail", function() { return checkEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadEvent", function() { return loadEvent; });
// <button type="submit" class="btn btn-primary btn-block">Register</button>
var isNameValid = false;
var isSurnameValid = false;
var isUsernameValid = false;
var isPasswordValid = false;
var isConfirmPasswordValid = false;
var isEmailValid = false;
var isSubmitShowed = false;
function allIsValid() {
  if (isNameValid && isSurnameValid && isUsernameValid && isPasswordValid && isConfirmPasswordValid && isEmailValid && !isSubmitShowed) {
    isSubmitShowed = true;
    var newnode = document.createElement("div");
    newnode.innerHTML = '<button type="submit" class="btn btn-primary btn-block">Register</button>';
    document.getElementById("registerForm").appendChild(newnode);
    return true;
  } else if ((!isNameValid || !isSurnameValid || !isUsernameValid || !isPasswordValid || !isConfirmPasswordValid || !isEmailValid) && isSubmitShowed) {
    isSubmitShowed = false;
    var parentNode = document.getElementById("registerForm");
    parentNode.removeChild(parentNode.lastChild);
    return false;
  }
}
function checkName(text) {
  var RegExpression = /^[a-zA-Z\s]*$/;

  if (RegExpression.test(text)) {
    return true;
  } else {
    return false;
  }
}
function checkUser(text) {
  var RegExpression = /^[a-zA-Z\d_]*$/;

  if (RegExpression.test(text)) {
    return true;
  } else {
    return false;
  }
}
function checkEmail(text) {
  var RegExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (RegExpression.test(text)) {
    return true;
  } else {
    return false;
  }
}

function validName() {
  var node = document.getElementById("nameValid");

  if (checkName(this.value) && this.value.length != 0) {
    isNameValid = true;
    node.classList.remove("invalid");
    node.classList.add("valid");
    node.innerHTML = '<i class=\"fas fa-check\"></i>';
  } else {
    isNameValid = false;
    node.classList.remove("valid");
    node.classList.add("invalid");
    node.innerHTML = '<i class="fas fa-times"></i>';
  }

  allIsValid();
}

function validSurname() {
  var node = document.getElementById("surnameValid");

  if (checkName(this.value) && this.value.length != 0) {
    isSurnameValid = true;
    node.classList.remove("invalid");
    node.classList.add("valid");
    node.innerHTML = '<i class=\"fas fa-check\"></i>';
  } else {
    isSurnameValid = false;
    node.classList.remove("valid");
    node.classList.add("invalid");
    node.innerHTML = '<i class="fas fa-times"></i>';
  }

  allIsValid();
}

function validUsername() {
  var node = document.getElementById("usernameValid");

  if (checkUser(this.value) && this.value.length != 0) {
    isUsernameValid = true;
    node.classList.remove("invalid");
    node.classList.add("valid");
    node.innerHTML = '<i class=\"fas fa-check\"></i>';
  } else {
    isUsernameValid = false;
    node.classList.remove("valid");
    node.classList.add("invalid");
    node.innerHTML = '<i class="fas fa-times"></i>';
  }

  allIsValid();
}

function validPassword() {
  var node = document.getElementById("passwordValid");

  if (checkUser(this.value) && this.value.length > 7 && this.value.length < 16) {
    isPasswordValid = true;
    node.classList.remove("invalid");
    node.classList.add("valid");
    node.innerHTML = '<i class=\"fas fa-check\"></i>';
  } else {
    isPasswordValid = false;
    node.classList.remove("valid");
    node.classList.add("invalid");
    node.innerHTML = '<i class="fas fa-times"></i>';
  }

  allIsValid();
}

function validConfirmPassword() {
  var node = document.getElementById("confirmPasswordValid");
  var passwordNode = document.getElementById("password").value;

  if (checkUser(this.value) && this.value.length > 7 && this.value.length < 16 && this.value == passwordNode) {
    isConfirmPasswordValid = true;
    node.classList.remove("invalid");
    node.classList.add("valid");
    node.innerHTML = '<i class=\"fas fa-check\"></i>';
  } else {
    isConfirmPasswordValid = false;
    node.classList.remove("valid");
    node.classList.add("invalid");
    node.innerHTML = '<i class="fas fa-times"></i>';
  }

  allIsValid();
}

function validEmail() {
  var node = document.getElementById("emailValid");

  if (checkEmail(this.value)) {
    isEmailValid = true;
    node.classList.remove("invalid");
    node.classList.add("valid");
    node.innerHTML = '<i class=\"fas fa-check\"></i>';
  } else {
    isEmailValid = false;
    node.classList.remove("valid");
    node.classList.add("invalid");
    node.innerHTML = '<i class="fas fa-times"></i>';
  }

  allIsValid();
}

const loadEvent = function loadEvent() {
  document.getElementById("name").addEventListener('input', validName);
  document.getElementById("surname").addEventListener('input', validSurname);
  document.getElementById("username").addEventListener('input', validUsername);
  document.getElementById("password").addEventListener('input', validPassword);
  document.getElementById("confirmPassword").addEventListener('input', validConfirmPassword);
  document.getElementById("email").addEventListener('input', validEmail);
};

/***/ })

/******/ });
//# sourceMappingURL=validation.mjs.map