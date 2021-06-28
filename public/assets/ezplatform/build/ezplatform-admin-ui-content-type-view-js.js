(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ezplatform-admin-ui-content-type-view-js"],{

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.location.change.language.js":
/*!***********************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.location.change.language.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (global, doc) {
  var changeLocationLanguage = function changeLocationLanguage(event) {
    global.location = event.currentTarget.value;
  };

  var locationLanguageSwitchers = doc.querySelectorAll('.ez-location-language-change');
  locationLanguageSwitchers.forEach(function (locationLanguageSwitcher) {
    locationLanguageSwitcher.addEventListener('change', changeLocationLanguage, false);
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

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/sidebar/btn/contenttype.edit.js":
/*!*********************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/sidebar/btn/contenttype.edit.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (global, doc) {
  var editButton = doc.querySelector('.ez-btn--edit');
  var languageRadioOption = doc.querySelector('.ez-extra-actions--edit.ez-extra-actions--prevent-show [type="radio"]');
  var editActions = doc.querySelector('.ez-extra-actions--edit');
  var btns = editActions.querySelectorAll('.form-check [type="radio"]');

  var changeHandler = function changeHandler() {
    var form = doc.querySelector('.ez-extra-actions--edit form');
    form.submit();
  };

  btns.forEach(function (btn) {
    return btn.addEventListener('change', changeHandler, false);
  });

  if (!languageRadioOption) {
    return;
  }

  editButton.addEventListener('click', function () {
    languageRadioOption.checked = true;
    changeHandler();
  }, false);
})(window, window.document);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/sidebar/extra.actions.js":
/*!**************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/sidebar/extra.actions.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(function (global, doc) {
  var CLASS_HIDDEN = 'ez-extra-actions--hidden';
  var CLASS_EXPANDED = 'ez-context-menu--expanded';
  var CLASS_ACTIVE_BUTTON = 'ez-btn--active-button';
  var CLASS_PREVENT_SHOW = 'ez-extra-actions--prevent-show';
  var ACTIONS_CONTAINER_MARGIN = 8;
  var RESIZE_AND_SCROLL_TIMEOUT = 50;

  var btns = _toConsumableArray(doc.querySelectorAll('.ez-btn--extra-actions'));

  var menu = doc.querySelector('.ez-context-menu');
  var footer = doc.querySelector('.ez-footer');
  var containerHeightTimeout;

  var haveHiddenPart = function haveHiddenPart(element) {
    return element.classList.contains(CLASS_HIDDEN) && !element.classList.contains(CLASS_PREVENT_SHOW);
  };

  var setContainerHeight = function setContainerHeight() {
    var container = doc.querySelector('.ez-extra-actions:not(.ez-extra-actions--hidden)');
    var bottomPosition = Math.min(footer.getBoundingClientRect().top, global.innerHeight);
    var containerHeight = bottomPosition - container.getBoundingClientRect().top - ACTIONS_CONTAINER_MARGIN;
    container.style.height = "".concat(containerHeight, "px");
  };

  var setContainerHeightTimeout = function setContainerHeightTimeout() {
    clearTimeout(containerHeightTimeout);
    containerHeightTimeout = setTimeout(setContainerHeight, RESIZE_AND_SCROLL_TIMEOUT);
  };

  var addContainerHeightListeners = function addContainerHeightListeners() {
    global.addEventListener('scroll', setContainerHeightTimeout, false);
    global.addEventListener('resize', setContainerHeightTimeout, false);
  };

  var removeContainerHeightListeners = function removeContainerHeightListeners() {
    global.removeEventListener('scroll', setContainerHeightTimeout, false);
    global.removeEventListener('resize', setContainerHeightTimeout, false);
  };

  btns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var actions = doc.querySelector(".ez-extra-actions[data-actions=\"".concat(btn.dataset.actions, "\"]"));
      var isHidden = haveHiddenPart(actions);
      var methodNameButton = isHidden ? 'add' : 'remove';
      var methodNameContainer = isHidden ? 'remove' : 'add';
      var methodNameMenu = isHidden ? 'add' : 'remove';
      var focusElement = actions.querySelector(btn.dataset.focusElement);

      var detectClickOutside = function detectClickOutside(event) {
        var isNotButton = !btn.contains(event.target);
        var shouldCollapseMenu = !btns.includes(event.target);
        var isNotExtraActions = !event.target.closest('.ez-extra-actions');
        var isNotCalendar = !event.target.closest('.flatpickr-calendar');

        if (isNotButton && isNotExtraActions && isNotCalendar) {
          btn.classList.remove(CLASS_ACTIVE_BUTTON);
          actions.classList.add(CLASS_HIDDEN);

          if (shouldCollapseMenu) {
            menu.classList.remove(CLASS_EXPANDED);
          }

          doc.body.removeEventListener('click', detectClickOutside, false);
          removeContainerHeightListeners();
        }
      };

      btn.classList[methodNameButton](CLASS_ACTIVE_BUTTON);
      actions.classList[methodNameContainer](CLASS_HIDDEN);
      menu.classList[methodNameMenu](CLASS_EXPANDED);

      if (!actions.classList.contains(CLASS_HIDDEN)) {
        doc.body.addEventListener('click', detectClickOutside, false);
        setContainerHeight();
        addContainerHeightListeners();
      } else {
        doc.body.removeEventListener('click', detectClickOutside);
        removeContainerHeightListeners();
      }

      if (focusElement) {
        focusElement.focus();
      }
    }, false);
  });
})(window, window.document);

/***/ }),

/***/ 6:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.location.change.language.js ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/sidebar/extra.actions.js ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/sidebar/btn/contenttype.edit.js ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/button.state.toggle.js ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.location.change.language.js */"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.location.change.language.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/sidebar/extra.actions.js */"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/sidebar/extra.actions.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/sidebar/btn/contenttype.edit.js */"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/sidebar/btn/contenttype.edit.js");
module.exports = __webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/button.state.toggle.js */"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/button.state.toggle.js");


/***/ })

},[[6,"runtime"]]]);