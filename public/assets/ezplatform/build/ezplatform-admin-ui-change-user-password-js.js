(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ezplatform-admin-ui-change-user-password-js"],{

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/user_password.change.js":
/*!*************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/user_password.change.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(function (global, doc, eZ) {
  var form = doc.querySelector('form[name="user_password_change"]');
  var submitBtns = form.querySelectorAll('[type="submit"]:not([formnovalidate])');
  var oldPasswordInput = form.querySelector('#user_password_change_oldPassword');
  var newPasswordInput = form.querySelector('#user_password_change_newPassword_first');
  var confirmPasswordInput = form.querySelector('#user_password_change_newPassword_second');
  var SELECTOR_FIELD = '.ez-field';
  var SELECTOR_LABEL = '.ez-field__label';
  var SELECTOR_LABEL_WRAPPER = '.ez-field__label-wrapper';
  var CLASS_INVALID = 'is-invalid';
  /**
   * Creates an error node
   *
   * @method createErrorNode
   * @param {String} message
   * @returns {HTMLElement}
   */

  var createErrorNode = function createErrorNode(message) {
    var errorNode = doc.createElement('em');
    errorNode.classList.add('ez-field__error');
    errorNode.innerHTML = message;
    return errorNode;
  };
  /**
   * Toggles the error
   *
   * @method toggleError
   * @param {Boolean} isError
   * @param {String} message
   * @param {HTMLElement} target
   */


  var toggleError = function toggleError(isError, message, target) {
    var methodName = isError ? 'add' : 'remove';
    var field = target.closest(SELECTOR_FIELD);
    var labelWrapper = field.querySelector(SELECTOR_LABEL_WRAPPER);
    var errorNodes = labelWrapper.querySelectorAll('.ez-field__error');
    field.classList[methodName](CLASS_INVALID);
    target.classList[methodName](CLASS_INVALID);
    errorNodes.forEach(function (el) {
      return el.remove();
    });

    if (isError) {
      labelWrapper.append(createErrorNode(message));
    }
  };
  /**
   * Compares passwords
   *
   * @method comparePasswords
   * @return {Boolean}
   */


  var comparePasswords = function comparePasswords() {
    var newPassword = newPasswordInput.value.trim();
    var confirmPassword = confirmPasswordInput.value.trim();
    var isNotEmptyPassword = checkIsNotEmpty(newPasswordInput) && checkIsNotEmpty(confirmPasswordInput);
    var passwordMatch = newPassword === confirmPassword;
    var message = eZ.errors.notSamePasswords;

    if (!passwordMatch) {
      toggleError(!passwordMatch, message, confirmPasswordInput);
    }

    return passwordMatch && isNotEmptyPassword;
  };
  /**
   * Checks if input has not empty value
   *
   * @method checkIsNotEmpty
   * @param {HTMLElement} target
   * @return {Boolean}
   */


  var checkIsNotEmpty = function checkIsNotEmpty(target) {
    var isRequired = target.required;
    var isEmpty = !target.value.trim();
    var isError = isRequired && isEmpty;
    var fieldContainer = target.closest(SELECTOR_FIELD);
    var message = eZ.errors.emptyField.replace('{fieldName}', fieldContainer.querySelector(SELECTOR_LABEL).innerHTML);
    toggleError(isError, message, target);
    return !isError;
  };

  form.setAttribute('novalidate', true);
  submitBtns.forEach(function (btn) {
    var clickHandler = function clickHandler(event) {
      if (!parseInt(btn.dataset.isFormValid, 10)) {
        event.preventDefault();

        var requiredFields = _toConsumableArray(form.querySelectorAll('.ez-field input[required]'));

        var isFormValid = requiredFields.map(checkIsNotEmpty).every(function (result) {
          return result;
        }) && comparePasswords();

        if (isFormValid) {
          btn.dataset.isFormValid = 1; // for some reason trying to fire click event inside the event handler flow is impossible
          // the following line breaks the flow so it's possible to fire click event on a button again.

          global.setTimeout(function () {
            return btn.click();
          }, 0);
        }
      }
    };

    btn.dataset.isFormValid = 0;
    btn.addEventListener('click', clickHandler, false);
  });
  oldPasswordInput.addEventListener('blur', function (event) {
    return checkIsNotEmpty(event.currentTarget);
  }, false);
  newPasswordInput.addEventListener('blur', function (event) {
    return checkIsNotEmpty(event.currentTarget);
  }, false);
  confirmPasswordInput.addEventListener('blur', function (event) {
    return checkIsNotEmpty(event.currentTarget);
  }, false);
  confirmPasswordInput.addEventListener('blur', comparePasswords, false);
})(window, window.document, window.eZ);

/***/ }),

/***/ 23:
/*!*******************************************************************************************************************!*\
  !*** multi ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/user_password.change.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/user_password.change.js */"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/user_password.change.js");


/***/ })

},[[23,"runtime"]]]);