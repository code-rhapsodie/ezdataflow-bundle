(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ezplatform-admin-ui-url-management-update-js"],{

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.url.wildcards.update.js":
/*!*******************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.url.wildcards.update.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (global, doc) {
  var checkboxes = doc.querySelectorAll('.ez-field-edit--ezboolean input');

  var toggleCheckbox = function toggleCheckbox(event) {
    var checkbox = event.target;
    checkbox.closest('.ez-data-source__label').classList.toggle('is-checked', checkbox.checked);
  };

  checkboxes.forEach(function (checkbox) {
    return checkbox.addEventListener('change', toggleCheckbox, false);
  });
})(window, window.document);

/***/ }),

/***/ 33:
/*!*************************************************************************************************************************!*\
  !*** multi ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.url.wildcards.update.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.url.wildcards.update.js */"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.url.wildcards.update.js");


/***/ })

},[[33,"runtime"]]]);