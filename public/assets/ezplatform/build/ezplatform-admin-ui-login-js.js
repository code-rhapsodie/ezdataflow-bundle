(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ezplatform-admin-ui-login-js"],{

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/login.js":
/*!**********************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/login.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (global, doc) {
  var passwordInputNode = doc.querySelector('.ez-login__input--password');
  var viewIconNode = doc.querySelector('.ez-login__password-visibility-toggler .ez-icon--view');
  var viewHideIconNode = doc.querySelector('.ez-login__password-visibility-toggler .ez-icon--view-hide');
  doc.querySelector('.ez-login__password-visibility-toggler').addEventListener('click', function (event) {
    if (passwordInputNode) {
      var inputTypeToSet = passwordInputNode.type === 'password' ? 'text' : 'password';
      passwordInputNode.type = inputTypeToSet;
      viewIconNode.classList.toggle('d-none');
      viewHideIconNode.classList.toggle('d-none');
    }
  });
})(window, window.document);

/***/ }),

/***/ 34:
/*!****************************************************************************************************!*\
  !*** multi ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/login.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/login.js */"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/login.js");


/***/ })

},[[34,"runtime"]]]);