(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ezplatform-admin-ui-url-management-js"],{

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.location.tab.js":
/*!***********************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.location.tab.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (global, doc, $) {
  $(".ez-tabs a[href=\"#".concat(global.location.hash.split('#')[1], "\"]")).tab('show'); // Change hash for page-reload

  $('.ez-tabs a').on('shown.bs.tab', function (event) {
    global.location.hash = "".concat(event.target.hash, "#tab");
  });
})(window, window.document, window.jQuery);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.url.wildcards.create.js":
/*!*******************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.url.wildcards.create.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(function (global, doc) {
  var modal = doc.querySelector('#create-wildcards-modal');

  if (!modal) {
    return;
  }

  var discardBtns = modal.querySelectorAll('[data-dismiss="modal"]');
  var submitBtn = modal.querySelector('[type="submit"]');

  var inputs = _toConsumableArray(modal.querySelectorAll('[required="required"]'));

  var checkboxes = modal.querySelectorAll('.ez-field-edit--ezboolean input');

  var toggleButtonState = function toggleButtonState() {
    var isInvalid = inputs.some(function (input) {
      return input.value.trim().length === 0;
    });
    var methodName = isInvalid ? 'setAttribute' : 'removeAttribute';
    submitBtn[methodName]('disabled', true);
  };

  var toggleCheckbox = function toggleCheckbox(event) {
    var checkbox = event.target;
    checkbox.closest('.ez-data-source__label').classList.toggle('is-checked', checkbox.checked);
  };

  var clearValues = function clearValues() {
    inputs.forEach(function (input) {
      input.value = '';
    });
    toggleButtonState();
  };

  inputs.forEach(function (input) {
    return input.addEventListener('input', toggleButtonState, false);
  });
  checkboxes.forEach(function (checkbox) {
    return checkbox.addEventListener('change', toggleCheckbox, false);
  });
  discardBtns.forEach(function (btn) {
    return btn.addEventListener('click', clearValues, false);
  });
})(window, window.document);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/button.state.toggle.js":
/*!************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/button.state.toggle.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(function (global, doc) {
  var toggleForms = doc.querySelectorAll('.ez-toggle-btn-state');
  toggleForms.forEach(function (toggleForm) {
    var checkboxes = _toConsumableArray(toggleForm.querySelectorAll('.ez-table__cell.ez-table__cell--has-checkbox input[type="checkbox"]'));

    var buttonRemove = doc.querySelector(toggleForm.dataset.toggleButtonId);

    if (!buttonRemove) {
      return;
    }

    var toggleButtonState = function toggleButtonState() {
      var isAnythingSelected = checkboxes.some(function (el) {
        return el.checked;
      });
      buttonRemove.disabled = !isAnythingSelected;
    };

    toggleButtonState();
    checkboxes.forEach(function (checkbox) {
      return checkbox.addEventListener('change', toggleButtonState, false);
    });
  });
})(window, window.document);

/***/ }),

/***/ 32:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.location.tab.js ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/button.state.toggle.js ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.url.wildcards.create.js ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.location.tab.js */"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.location.tab.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/button.state.toggle.js */"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/button.state.toggle.js");
module.exports = __webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.url.wildcards.create.js */"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.url.wildcards.create.js");


/***/ })

},[[32,"runtime"]]]);