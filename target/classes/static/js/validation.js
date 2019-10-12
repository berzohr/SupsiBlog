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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validation */ \"./src/validation.js\");\n\nObject(_validation__WEBPACK_IMPORTED_MODULE_0__[\"loadEvent\"])();\n\n//# sourceURL=webpack:///./src/main-validation.js?");

/***/ }),

/***/ "./src/validation.js":
/*!***************************!*\
  !*** ./src/validation.js ***!
  \***************************/
/*! exports provided: allIsValid, checkName, checkUser, checkEmail, loadEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"allIsValid\", function() { return allIsValid; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkName\", function() { return checkName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkUser\", function() { return checkUser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkEmail\", function() { return checkEmail; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadEvent\", function() { return loadEvent; });\n// <button type=\"submit\" class=\"btn btn-primary btn-block\">Register</button>\nvar isNameValid = false;\nvar isSurnameValid = false;\nvar isUsernameValid = false;\nvar isPasswordValid = false;\nvar isConfirmPasswordValid = false;\nvar isEmailValid = false;\nvar isSubmitShowed = false;\nfunction allIsValid() {\n  if (isNameValid && isSurnameValid && isUsernameValid && isPasswordValid && isConfirmPasswordValid && isEmailValid && !isSubmitShowed) {\n    isSubmitShowed = true;\n    var newnode = document.createElement(\"div\");\n    newnode.innerHTML = '<button type=\"submit\" class=\"btn btn-primary btn-block\">Register</button>';\n    document.getElementById(\"registerForm\").appendChild(newnode);\n    return true;\n  } else if ((!isNameValid || !isSurnameValid || !isUsernameValid || !isPasswordValid || !isConfirmPasswordValid || !isEmailValid) && isSubmitShowed) {\n    isSubmitShowed = false;\n    var parentNode = document.getElementById(\"registerForm\");\n    parentNode.removeChild(parentNode.lastChild);\n    return false;\n  }\n}\nfunction checkName(text) {\n  var RegExpression = /^[a-zA-Z\\s]*$/;\n\n  if (RegExpression.test(text)) {\n    return true;\n  } else {\n    return false;\n  }\n}\nfunction checkUser(text) {\n  var RegExpression = /^[a-zA-Z\\d_]*$/;\n\n  if (RegExpression.test(text)) {\n    return true;\n  } else {\n    return false;\n  }\n}\nfunction checkEmail(text) {\n  var RegExpression = /^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/;\n\n  if (RegExpression.test(text)) {\n    return true;\n  } else {\n    return false;\n  }\n}\n\nfunction validName() {\n  var node = document.getElementById(\"nameValid\");\n\n  if (checkName(this.value) && this.value.length != 0) {\n    isNameValid = true;\n    node.classList.remove(\"invalid\");\n    node.classList.add(\"valid\");\n    node.innerHTML = '<i class=\\\"fas fa-check\\\"></i>';\n  } else {\n    isNameValid = false;\n    node.classList.remove(\"valid\");\n    node.classList.add(\"invalid\");\n    node.innerHTML = '<i class=\"fas fa-times\"></i>';\n  }\n\n  allIsValid();\n}\n\nfunction validSurname() {\n  var node = document.getElementById(\"surnameValid\");\n\n  if (checkName(this.value) && this.value.length != 0) {\n    isSurnameValid = true;\n    node.classList.remove(\"invalid\");\n    node.classList.add(\"valid\");\n    node.innerHTML = '<i class=\\\"fas fa-check\\\"></i>';\n  } else {\n    isSurnameValid = false;\n    node.classList.remove(\"valid\");\n    node.classList.add(\"invalid\");\n    node.innerHTML = '<i class=\"fas fa-times\"></i>';\n  }\n\n  allIsValid();\n}\n\nfunction validUsername() {\n  var node = document.getElementById(\"usernameValid\");\n\n  if (checkUser(this.value) && this.value.length != 0) {\n    isUsernameValid = true;\n    node.classList.remove(\"invalid\");\n    node.classList.add(\"valid\");\n    node.innerHTML = '<i class=\\\"fas fa-check\\\"></i>';\n  } else {\n    isUsernameValid = false;\n    node.classList.remove(\"valid\");\n    node.classList.add(\"invalid\");\n    node.innerHTML = '<i class=\"fas fa-times\"></i>';\n  }\n\n  allIsValid();\n}\n\nfunction validPassword() {\n  var node = document.getElementById(\"passwordValid\");\n\n  if (checkUser(this.value) && this.value.length > 7 && this.value.length < 16) {\n    isPasswordValid = true;\n    node.classList.remove(\"invalid\");\n    node.classList.add(\"valid\");\n    node.innerHTML = '<i class=\\\"fas fa-check\\\"></i>';\n  } else {\n    isPasswordValid = false;\n    node.classList.remove(\"valid\");\n    node.classList.add(\"invalid\");\n    node.innerHTML = '<i class=\"fas fa-times\"></i>';\n  }\n\n  allIsValid();\n}\n\nfunction validConfirmPassword() {\n  var node = document.getElementById(\"confirmPasswordValid\");\n  var passwordNode = document.getElementById(\"password\").value;\n\n  if (checkUser(this.value) && this.value.length > 7 && this.value.length < 16 && this.value == passwordNode) {\n    isConfirmPasswordValid = true;\n    node.classList.remove(\"invalid\");\n    node.classList.add(\"valid\");\n    node.innerHTML = '<i class=\\\"fas fa-check\\\"></i>';\n  } else {\n    isConfirmPasswordValid = false;\n    node.classList.remove(\"valid\");\n    node.classList.add(\"invalid\");\n    node.innerHTML = '<i class=\"fas fa-times\"></i>';\n  }\n\n  allIsValid();\n}\n\nfunction validEmail() {\n  var node = document.getElementById(\"emailValid\");\n\n  if (checkEmail(this.value)) {\n    isEmailValid = true;\n    node.classList.remove(\"invalid\");\n    node.classList.add(\"valid\");\n    node.innerHTML = '<i class=\\\"fas fa-check\\\"></i>';\n  } else {\n    isEmailValid = false;\n    node.classList.remove(\"valid\");\n    node.classList.add(\"invalid\");\n    node.innerHTML = '<i class=\"fas fa-times\"></i>';\n  }\n\n  allIsValid();\n}\n\nvar loadEvent = function loadEvent() {\n  document.getElementById(\"name\").addEventListener('input', validName);\n  document.getElementById(\"surname\").addEventListener('input', validSurname);\n  document.getElementById(\"username\").addEventListener('input', validUsername);\n  document.getElementById(\"password\").addEventListener('input', validPassword);\n  document.getElementById(\"confirmPassword\").addEventListener('input', validConfirmPassword);\n  document.getElementById(\"email\").addEventListener('input', validEmail);\n};\n\n//# sourceURL=webpack:///./src/validation.js?");

/***/ })

/******/ });