(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ezplatform-admin-ui-content-type-create-js"],{

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.card.toggle.group.js":
/*!****************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.card.toggle.group.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (global, doc) {
  var togglers = doc.querySelectorAll('.ez-card__body-display-toggler');

  var toggleFieldTypeView = function toggleFieldTypeView(event) {
    event.preventDefault();
    event.currentTarget.closest('.ez-card--toggle-group').classList.toggle('ez-card--collapsed');
  };

  var attachToggleField = function attachToggleField(btn) {
    return btn.addEventListener('click', toggleFieldTypeView);
  };

  togglers.forEach(function (btn) {
    return attachToggleField(btn);
  });
  doc.body.addEventListener('ez-initialize-card-toggle-group', function (event) {
    return attachToggleField(event.detail.button);
  });
})(window, window.document);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.contenttype.selection.js":
/*!********************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.contenttype.selection.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (global, doc) {
  var SELECTOR_TEMPLATE = '.ezselection-settings-option-value-prototype';
  var SELECTOR_OPTION = '.ezselection-settings-option-value';
  var SELECTOR_OPTIONS_LIST = '.ezselection-settings-option-list';
  var SELECTOR_BTN_REMOVE = '.ezselection-settings-option-remove';
  var SELECTOR_BTN_ADD = '.ezselection-settings-option-add';
  var NUMBER_PLACEHOLDER = /__number__/g;
  doc.querySelectorAll('.ezselection-settings.options').forEach(function (container) {
    var findCheckedOptions = function findCheckedOptions() {
      return container.querySelectorAll('.ezselection-settings-option-checkbox:checked');
    };

    var toggleDisableState = function toggleDisableState() {
      var disabledState = !!findCheckedOptions().length;
      var methodName = disabledState ? 'removeAttribute' : 'setAttribute';
      container.querySelector(SELECTOR_BTN_REMOVE)[methodName]('disabled', disabledState);
    };

    var addOption = function addOption() {
      var template = container.querySelector(SELECTOR_TEMPLATE).innerHTML;
      var optionsList = container.querySelector(SELECTOR_OPTIONS_LIST);
      var nextId = parseInt(optionsList.dataset.nextOptionId, 10);
      optionsList.dataset.nextOptionId = nextId + 1;
      optionsList.insertAdjacentHTML('beforeend', template.replace(NUMBER_PLACEHOLDER, nextId));
    };

    var removeOptions = function removeOptions() {
      findCheckedOptions().forEach(function (element) {
        return element.closest(SELECTOR_OPTION).remove();
      });
      toggleDisableState();
    };

    container.querySelector(SELECTOR_OPTIONS_LIST).addEventListener('click', toggleDisableState, false);
    container.querySelector(SELECTOR_BTN_ADD).addEventListener('click', addOption, false);
    container.querySelector(SELECTOR_BTN_REMOVE).addEventListener('click', removeOptions, false);
  });
})(window, window.document);

/***/ }),

/***/ 3:
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.contenttype.selection.js ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.card.toggle.group.js ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.contenttype.selection.js */"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.contenttype.selection.js");
module.exports = __webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.card.toggle.group.js */"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.card.toggle.group.js");


/***/ })

},[[3,"runtime"]]]);