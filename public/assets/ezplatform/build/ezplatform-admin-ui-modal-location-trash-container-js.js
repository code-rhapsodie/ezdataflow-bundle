(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ezplatform-admin-ui-modal-location-trash-container-js"],{

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.trash.container.js":
/*!**************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.trash.container.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (global, doc, $) {
  var toggleForm = doc.querySelector('form[name="location_trash_container"]');
  var hasAsset = toggleForm.dataset.hasAsset;
  var hasUniqueAsset = toggleForm.dataset.hasUniqueAsset;

  var openTrashImageAssetModal = function openTrashImageAssetModal(event) {
    if (!hasAsset && !hasUniqueAsset) {
      return;
    }

    event.preventDefault();
    $('#trash-container-modal').modal('hide');
    $('#trash-with-asset-modal').modal('show');
  };

  toggleForm.addEventListener('submit', openTrashImageAssetModal, false);
})(window, window.document, window.jQuery);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/button.state.checkbox.toggle.js":
/*!*********************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/button.state.checkbox.toggle.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(function (global, doc) {
  var toggleForms = doc.querySelectorAll('.ez-toggle-btn-state-checkbox');
  var ALL_CHECKED = 'all-checked';
  var ANY_CHECKED = 'any-checked';

  var toggleButtonState = function toggleButtonState(button, validateCheckboxStatus) {
    var methodName = 'setAttribute';

    if (validateCheckboxStatus()) {
      methodName = 'removeAttribute';
    }

    button[methodName]('disabled', true);
  };

  toggleForms.forEach(function (toggleForm) {
    var checkboxInputs = _toConsumableArray(toggleForm.querySelectorAll('input[type="checkbox"]'));

    var button = doc.querySelector(toggleForm.dataset.toggleButtonId);
    var toggleMode = toggleForm.dataset.toggleMode || ANY_CHECKED;

    var validateCheckboxStatus = function validateCheckboxStatus() {
      return checkboxInputs.some(function (el) {
        return el.checked;
      }) && ALL_CHECKED === toggleMode || checkboxInputs.every(function (el) {
        return el.checked;
      }) && ANY_CHECKED === toggleMode;
    };

    checkboxInputs.forEach(function (input) {
      return input.addEventListener('change', toggleButtonState.bind(input, button, validateCheckboxStatus), false);
    });
  });
})(window, window.document);

/***/ }),

/***/ 18:
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/button.state.checkbox.toggle.js ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.trash.container.js ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/button.state.checkbox.toggle.js */"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/button.state.checkbox.toggle.js");
module.exports = __webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.trash.container.js */"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.trash.container.js");


/***/ })

},[[18,"runtime"]]]);