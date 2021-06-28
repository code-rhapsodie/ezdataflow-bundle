(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ezplatform-admin-ui-content-type-edit-js"],{

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

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.contenttype.relation.default.location.js":
/*!************************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.contenttype.relation.default.location.js ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(function (global, doc, eZ, React, ReactDOM) {
  var btns = doc.querySelectorAll('.btn--udw-relation-default-location');
  var udwContainer = doc.getElementById('react-udw');

  var closeUDW = function closeUDW() {
    return ReactDOM.unmountComponentAtNode(udwContainer);
  };

  var onConfirm = function onConfirm(btn, items) {
    closeUDW();
    var locationId = items[0].id;
    var locationName = items[0].ContentInfo.Content.TranslatedName;
    var objectRelationListSettingsWrapper = btn.closest('.ezobjectrelationlist-settings');
    var objectRelationSettingsWrapper = btn.closest('.ezobjectrelation-settings');

    if (objectRelationListSettingsWrapper) {
      objectRelationListSettingsWrapper.querySelector(btn.dataset.relationRootInputSelector).value = locationId;
      objectRelationListSettingsWrapper.querySelector(btn.dataset.relationSelectedRootNameSelector).innerHTML = locationName;
    } else {
      objectRelationSettingsWrapper.querySelector(btn.dataset.relationRootInputSelector).value = locationId;
      objectRelationSettingsWrapper.querySelector(btn.dataset.relationSelectedRootNameSelector).innerHTML = locationName;
    }
  };

  var onCancel = function onCancel() {
    return closeUDW();
  };

  var openUDW = function openUDW(event) {
    event.preventDefault();
    var config = JSON.parse(event.currentTarget.dataset.udwConfig);
    ReactDOM.render(React.createElement(eZ.modules.UniversalDiscovery, _objectSpread({
      onConfirm: onConfirm.bind(null, event.currentTarget),
      onCancel: onCancel,
      title: event.currentTarget.dataset.universaldiscoveryTitle,
      multiple: false
    }, config)), udwContainer);
  };

  btns.forEach(function (btn) {
    return btn.addEventListener('click', openUDW, false);
  });
})(window, window.document, window.eZ, window.React, window.ReactDOM);

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

/***/ "./vendor/ezsystems/ezplatform-matrix-fieldtype/src/bundle/Resources/public/js/scripts/admin.contenttype.matrix.js":
/*!*************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-matrix-fieldtype/src/bundle/Resources/public/js/scripts/admin.contenttype.matrix.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (global, doc) {
  var SELECTOR_SETTINGS_COLUMNS = '.ez-matrix-settings__columns';
  var SELECTOR_COLUMN = '.ez-matrix-settings__column';
  var SELECTOR_COLUMNS_CONTAINER = '.ez-table__body';
  var SELECTOR_COLUMN_CHECKBOX = '.ez-matrix-settings__column-checkbox';
  var SELECTOR_ADD_COLUMN = '.ez-btn--add-column';
  var SELECTOR_REMOVE_COLUMN = '.ez-btn--remove-column';
  var SELECTOR_TEMPLATE = '.ez-matrix-settings__column-template';
  var NUMBER_PLACEHOLDER = /__number__/g;

  if (!doc.querySelector(SELECTOR_SETTINGS_COLUMNS)) {
    return;
  }

  doc.querySelectorAll(SELECTOR_SETTINGS_COLUMNS).forEach(function (container) {
    var getNextIndex = function getNextIndex(parentNode) {
      return parentNode.dataset.nextIndex++;
    };

    var findCheckedColumns = function findCheckedColumns(parentNode) {
      return parentNode.querySelectorAll("".concat(SELECTOR_COLUMN_CHECKBOX, ":checked"));
    };

    var updateDisabledState = function updateDisabledState(parentNode) {
      var isEnabled = findCheckedColumns(parentNode).length > 0;
      var methodName = isEnabled ? 'removeAttribute' : 'setAttribute';
      parentNode.querySelectorAll(SELECTOR_REMOVE_COLUMN).forEach(function (btn) {
        return btn[methodName]('disabled', !isEnabled);
      });
    };

    var addItem = function addItem(event) {
      var settingsNode = event.target.closest(SELECTOR_SETTINGS_COLUMNS);
      var template = settingsNode.querySelector(SELECTOR_TEMPLATE).innerHTML;
      var node = settingsNode.querySelector(SELECTOR_COLUMNS_CONTAINER);
      node.insertAdjacentHTML('beforeend', template.replace(NUMBER_PLACEHOLDER, getNextIndex(node)));
      initColumns(settingsNode);
    };

    var removeItems = function removeItems(event) {
      var settingsNode = event.target.closest(SELECTOR_SETTINGS_COLUMNS);
      findCheckedColumns(settingsNode).forEach(function (btn) {
        return btn.closest(SELECTOR_COLUMN).remove();
      });
      initColumns(settingsNode);
    };

    var checkColumn = function checkColumn(event) {
      var settingsNode = event.target.closest(SELECTOR_SETTINGS_COLUMNS);
      updateDisabledState(settingsNode);
    };

    var initColumns = function initColumns(parentNode) {
      updateDisabledState(parentNode);
      parentNode.querySelectorAll(SELECTOR_COLUMN_CHECKBOX).forEach(function (btn) {
        btn.removeEventListener('click', checkColumn, false);
        btn.addEventListener('click', checkColumn, false);
      });
    };

    container.querySelector(SELECTOR_ADD_COLUMN).addEventListener('click', addItem, false);
    container.querySelector(SELECTOR_REMOVE_COLUMN).addEventListener('click', removeItems, false);
    initColumns(container);
  });
})(window, document);

/***/ }),

/***/ 4:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.contenttype.selection.js ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.card.toggle.group.js ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.contenttype.relation.default.location.js ./vendor/ezsystems/ezplatform-matrix-fieldtype/src/bundle/Resources/public/js/scripts/admin.contenttype.matrix.js ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.contenttype.selection.js */"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.contenttype.selection.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.card.toggle.group.js */"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.card.toggle.group.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.contenttype.relation.default.location.js */"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.contenttype.relation.default.location.js");
module.exports = __webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-matrix-fieldtype/src/bundle/Resources/public/js/scripts/admin.contenttype.matrix.js */"./vendor/ezsystems/ezplatform-matrix-fieldtype/src/bundle/Resources/public/js/scripts/admin.contenttype.matrix.js");


/***/ })

},[[4,"runtime"]]]);