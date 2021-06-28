(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ezplatform-admin-ui-udw-extras-js"],{

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js":
/*!**************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js ***!
  \**************************************************************************************************************/
/*! exports provided: createCssClassNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCssClassNames", function() { return createCssClassNames; });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var createCssClassNames = function createCssClassNames(classes) {
  if (Object.prototype.toString.call(classes) !== '[object Object]') {
    return '';
  }

  return Object.entries(classes).reduce(function (total, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        name = _ref2[0],
        condition = _ref2[1];

    return "".concat(total, " ").concat(condition ? name : '');
  }, '').trim();
};

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/deep.clone.helper.js":
/*!****************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/deep.clone.helper.js ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Clones any object. Faster alternative to `JSON.parse(JSON.stringify)`
 *
 * @function deepClone
 * @param {Any} data
 * @returns {Any} cloned data
 */
var deepClone = function deepClone(data) {
  var clonedData;

  if (_typeof(data) !== 'object') {
    return data;
  }

  if (!data) {
    return data;
  }

  if (Object.prototype.toString.apply(data) === '[object Array]') {
    clonedData = [];

    for (var i = 0; i < data.length; i++) {
      clonedData[i] = deepClone(data[i]);
    }

    return clonedData;
  }

  clonedData = {};

  for (var _i in data) {
    if (data.hasOwnProperty(_i)) {
      clonedData[_i] = deepClone(data[_i]);
    }
  }

  return clonedData;
};

/* harmony default export */ __webpack_exports__["default"] = (deepClone);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/request.helper.js":
/*!*************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/request.helper.js ***!
  \*************************************************************************************************************/
/*! exports provided: getBasicRequestInit, handleRequestError, handleRequestResponse, handleRequestResponseStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBasicRequestInit", function() { return getBasicRequestInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleRequestError", function() { return handleRequestError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleRequestResponse", function() { return handleRequestResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleRequestResponseStatus", function() { return handleRequestResponseStatus; });
/**
 * Returns basic RequestInit object for Request
 *
 * @function getBasicRequestInit
 * @param {Object} restInfo REST config hash containing: token and siteaccess properties
 * @returns {RequestInit}
 */
var getBasicRequestInit = function getBasicRequestInit(_ref) {
  var token = _ref.token,
      siteaccess = _ref.siteaccess;
  return {
    headers: {
      'X-Siteaccess': siteaccess,
      'X-CSRF-Token': token
    },
    mode: 'same-origin',
    credentials: 'same-origin'
  };
};
/**
 * Handles request error
 *
 * @function handleRequestResponse
 * @param {Response} response
 * @returns {Response}
 */

var handleRequestError = function handleRequestError(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }

  return response;
};
/**
 * Handles request response
 *
 * @function handleRequestResponse
 * @param {Response} response
 * @returns {Error|Promise}
 */

var handleRequestResponse = function handleRequestResponse(response) {
  return handleRequestError(response).json();
};
/**
 * Handles request response; returns status if response is OK
 *
 * @function handleRequestResponseStatus
 * @param {Response} response
 * @returns {number}
 */

var handleRequestResponseStatus = function handleRequestResponseStatus(response) {
  return handleRequestError(response).status;
};

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js":
/*!************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var Icon = function Icon(props) {
  var linkHref = props.customPath ? props.customPath : window.eZ.helpers.icon.getIconPath(props.name);
  var className = 'ez-icon';

  if (props.extraClasses) {
    className = "".concat(className, " ").concat(props.extraClasses);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: className
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    xlinkHref: linkHref
  }));
};

Icon.propTypes = {
  extraClasses: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  customPath: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
Icon.defaultProps = {
  customPath: null,
  name: null,
  extraClasses: null
};
/* harmony default export */ __webpack_exports__["default"] = (Icon);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/services/notification.service.js":
/*!********************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/services/notification.service.js ***!
  \********************************************************************************************************************/
/*! exports provided: NOTIFICATION_INFO_LABEL, NOTIFICATION_SUCCESS_LABEL, NOTIFICATION_WARNING_LABEL, NOTIFICATION_ERROR_LABEL, showNotification, showInfoNotification, showSuccessNotification, showWarningNotification, showErrorNotification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOTIFICATION_INFO_LABEL", function() { return NOTIFICATION_INFO_LABEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOTIFICATION_SUCCESS_LABEL", function() { return NOTIFICATION_SUCCESS_LABEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOTIFICATION_WARNING_LABEL", function() { return NOTIFICATION_WARNING_LABEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOTIFICATION_ERROR_LABEL", function() { return NOTIFICATION_ERROR_LABEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showNotification", function() { return showNotification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showInfoNotification", function() { return showInfoNotification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showSuccessNotification", function() { return showSuccessNotification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showWarningNotification", function() { return showWarningNotification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showErrorNotification", function() { return showErrorNotification; });
var NOTIFICATION_INFO_LABEL = 'info';
var NOTIFICATION_SUCCESS_LABEL = 'success';
var NOTIFICATION_WARNING_LABEL = 'warning';
var NOTIFICATION_ERROR_LABEL = 'error';
/**
 * Dispatches notification event
 *
 * @method showNotification
 * @param {{message: string, label: string}} detail
 */

var showNotification = function showNotification(detail) {
  var event = new CustomEvent('ez-notify', {
    detail: detail
  });
  document.body.dispatchEvent(event);
};
/**
 * Dispatches info notification event
 *
 * @method showInfoNotification
 * @param {String} message
 */

var showInfoNotification = function showInfoNotification(message) {
  showNotification({
    message: message,
    label: NOTIFICATION_INFO_LABEL
  });
};
/**
 * Dispatches success notification event
 *
 * @method showSuccessNotification
 * @param {String} message
 */

var showSuccessNotification = function showSuccessNotification(message) {
  showNotification({
    message: message,
    label: NOTIFICATION_SUCCESS_LABEL
  });
};
/**
 * Dispatches warning notification event
 *
 * @method showWarningNotification
 * @param {String} message
 */

var showWarningNotification = function showWarningNotification(message) {
  showNotification({
    message: message,
    label: NOTIFICATION_WARNING_LABEL
  });
};
/**
 * Dispatches error notification event
 *
 * @method showErrorNotification
 * @param {(string|Error)} error
 */

var showErrorNotification = function showErrorNotification(error) {
  var isErrorObj = error instanceof Error;
  var message = isErrorObj ? error.message : error;
  showNotification({
    message: message,
    label: NOTIFICATION_ERROR_LABEL
  });
};

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/thumbnail/thumbnail.js":
/*!**********************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/thumbnail/thumbnail.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icon_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icon/icon */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");




var Thumbnail = function Thumbnail(_ref) {
  var thumbnailData = _ref.thumbnailData,
      iconExtraClasses = _ref.iconExtraClasses,
      contentTypeIconPath = _ref.contentTypeIconPath;

  var renderContentTypeIcon = function renderContentTypeIcon() {
    if (!contentTypeIconPath) {
      return null;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "c-thumbnail__icon-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
      extraClasses: "ez-icon--small",
      customPath: contentTypeIconPath
    }));
  };

  if (thumbnailData.mimeType === 'image/svg+xml') {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "c-thumbnail"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
      extraClasses: iconExtraClasses,
      customPath: thumbnailData.resource
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-thumbnail"
  }, renderContentTypeIcon(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: thumbnailData.resource
  }));
};

Thumbnail.propTypes = {
  thumbnailData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    mimeType: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    resource: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
  }).isRequired,
  iconExtraClasses: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  contentTypeIconPath: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
Thumbnail.defaultProps = {
  iconExtraClasses: null,
  contentTypeIconPath: null
};
/* harmony default export */ __webpack_exports__["default"] = (Thumbnail);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/content-create-button/content.create.button.js":
/*!**********************************************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/content-create-button/content.create.button.js ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_icon_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/icon/icon */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _universal_discovery_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../universal.discovery.module */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var ContentCreateButton = function ContentCreateButton(_ref) {
  var isDisabled = _ref.isDisabled;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_3__["MarkedLocationIdContext"]),
      _useContext2 = _slicedToArray(_useContext, 2),
      markedLocationId = _useContext2[0],
      setMarkedLocationId = _useContext2[1];

  var _useContext3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_3__["LoadedLocationsMapContext"]),
      _useContext4 = _slicedToArray(_useContext3, 2),
      loadedLocationsMap = _useContext4[0],
      dispatchLoadedLocationsAction = _useContext4[1];

  var _useContext5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_3__["CreateContentWidgetContext"]),
      _useContext6 = _slicedToArray(_useContext5, 2),
      createContentVisible = _useContext6[0],
      setCreateContentVisible = _useContext6[1];

  var _useContext7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_3__["SelectedLocationsContext"]),
      _useContext8 = _slicedToArray(_useContext7, 2),
      selectedLocations = _useContext8[0],
      dispatchSelectedLocationsAction = _useContext8[1];

  var _useContext9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_3__["MultipleConfigContext"]),
      _useContext10 = _slicedToArray(_useContext9, 2),
      multiple = _useContext10[0],
      multipleItemsLimit = _useContext10[1];

  var _useContext11 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_3__["ContentOnTheFlyConfigContext"]),
      hidden = _useContext11.hidden,
      allowedLocations = _useContext11.allowedLocations;

  var createLabel = Translator.trans(
  /*@Desc("Create")*/
  'create_content.create', {}, 'universal_discovery_widget');

  var toggleContentCreateVisibility = function toggleContentCreateVisibility() {
    window.eZ.helpers.tooltips.hideAll();
    setCreateContentVisible(function (prevState) {
      return !prevState;
    });
  };

  var selectedLocation = loadedLocationsMap.find(function (loadedLocation) {
    return loadedLocation.parentLocationId === markedLocationId;
  });

  if (!selectedLocation && loadedLocationsMap.length) {
    selectedLocation = loadedLocationsMap[loadedLocationsMap.length - 1].subitems.find(function (subitem) {
      return subitem.location.id === markedLocationId;
    });
  }

  var isAllowedLocation = selectedLocation && (!allowedLocations || allowedLocations.includes(selectedLocation.parentLocationId));
  var hasAccess = !selectedLocation || !selectedLocation.permissions || selectedLocation.permissions && selectedLocation.permissions.create.hasAccess;
  var isLimitReached = multiple && multipleItemsLimit !== 0 && selectedLocations.length >= multipleItemsLimit;

  if (hidden) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-content-create-button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "c-content-create-button__btn btn btn-link",
    disabled: isDisabled || !hasAccess || !isAllowedLocation || isLimitReached,
    onClick: toggleContentCreateVisibility,
    "data-tooltip-container-selector": ".c-top-menu",
    title: createLabel
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "create",
    extraClasses: "ez-icon--small-medium ez-icon--primary"
  }), " ", createLabel));
};

ContentCreateButton.propTypes = {
  isDisabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
ContentCreateButton.defaultProps = {
  isDisabled: false
};
eZ.addConfig('adminUiConfig.universalDiscoveryWidget.topMenuActions', [{
  id: 'content-create-button',
  priority: 30,
  component: ContentCreateButton
}], true);
/* harmony default export */ __webpack_exports__["default"] = (ContentCreateButton);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/content-edit-button/content.edit.button.js":
/*!******************************************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/content-edit-button/content.edit.button.js ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_icon_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/icon/icon */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _translation_selector_translation_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../translation-selector/translation.selector */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/translation-selector/translation.selector.js");
/* harmony import */ var _services_universal_discovery_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../..//services/universal.discovery.service */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/services/universal.discovery.service.js");
/* harmony import */ var _universal_discovery_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../..//universal.discovery.module */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var ContentEditButton = function ContentEditButton(_ref) {
  var version = _ref.version,
      location = _ref.location,
      isDisabled = _ref.isDisabled;
  var restInfo = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_5__["RestInfoContext"]);
  var allowRedirects = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_5__["AllowRedirectsContext"]);

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_5__["EditOnTheFlyDataContext"]),
      _useContext2 = _slicedToArray(_useContext, 2),
      editOnTheFlyData = _useContext2[0],
      setEditOnTheFlyData = _useContext2[1];

  var _useContext3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_5__["ActiveTabContext"]),
      _useContext4 = _slicedToArray(_useContext3, 2),
      activeTab = _useContext4[0],
      setActiveTab = _useContext4[1];

  var contentTypesMap = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_5__["ContentTypesMapContext"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      isTranslationSelectorVisible = _useState2[0],
      setIsTranslationSelectorVisible = _useState2[1];

  var contentTypeInfo = contentTypesMap[location.ContentInfo.Content.ContentType._href];
  var isUserContentType = window.eZ.adminUiConfig.userContentTypes.includes(contentTypeInfo.identifier);
  var editLabel = Translator.trans(
  /*@Desc("Edit")*/
  'meta_preview.edit', {}, 'universal_discovery_widget');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setIsTranslationSelectorVisible(false);
  }, [version]);

  var hideTranslationSelector = function hideTranslationSelector() {
    setIsTranslationSelectorVisible(false);
  };

  var toggleTranslationSelectorVisibility = function toggleTranslationSelectorVisibility() {
    var languageCodes = version.VersionInfo.languageCodes.split(',');

    if (languageCodes.length === 1) {
      editContent(languageCodes[0]);
    } else {
      setIsTranslationSelectorVisible(true);
    }
  };

  var redirectToContentEdit = function redirectToContentEdit(contentId, versionNo, language, locationId) {
    if (allowRedirects) {
      var href = isUserContentType ? window.Routing.generate('ezplatform.user.update', {
        contentId: contentId,
        versionNo: versionNo,
        language: language
      }, true) : window.Routing.generate('ezplatform.content.draft.edit', {
        contentId: contentId,
        versionNo: versionNo,
        language: language,
        locationId: locationId
      }, true);
      window.location.href = href;
      return;
    }

    setEditOnTheFlyData({
      contentId: contentId,
      versionNo: versionNo,
      languageCode: language,
      locationId: locationId
    });
    setActiveTab('content-edit');
  };

  var editContent = function editContent(languageCode) {
    var contentId = location.ContentInfo.Content._id;

    if (isUserContentType) {
      redirectToContentEdit(contentId, version.VersionInfo.versionNo, languageCode, location.id);
      return;
    }

    Object(_services_universal_discovery_service__WEBPACK_IMPORTED_MODULE_4__["createDraft"])(_objectSpread(_objectSpread({}, restInfo), {}, {
      contentId: contentId
    }), function (response) {
      return redirectToContentEdit(contentId, response.Version.VersionInfo.versionNo, languageCode, location.id);
    });
  };

  var renderTranslationSelector = function renderTranslationSelector() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_translation_selector_translation_selector__WEBPACK_IMPORTED_MODULE_3__["default"], {
      hideTranslationSelector: hideTranslationSelector,
      selectTranslation: editContent,
      version: version,
      isOpen: isTranslationSelectorVisible && version
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-content-edit-button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "c-content-edit-button__btn btn btn-icon",
    disabled: !version || isDisabled,
    onClick: toggleTranslationSelectorVisibility,
    "data-tooltip-container-selector": ".c-udw-tab",
    title: editLabel
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "edit",
    extraClasses: "ez-icon--small-medium ez-icon--secondary"
  })), renderTranslationSelector());
};

ContentEditButton.propTypes = {
  location: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  version: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  isDisabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ContentEditButton);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/content-edit-button/selected.item.edit.button.js":
/*!************************************************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/content-edit-button/selected.item.edit.button.js ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _content_edit_button_content_edit_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../content-edit-button/content.edit.button */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/content-edit-button/content.edit.button.js");




var SelectedItemEditButton = function SelectedItemEditButton(_ref) {
  var location = _ref.location,
      permissions = _ref.permissions;
  var hasAccess = permissions && permissions.edit.hasAccess;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-selected-item-edit-button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_content_edit_button_content_edit_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    version: location.ContentInfo.Content.CurrentVersion.Version,
    location: location,
    isDisabled: !hasAccess
  }));
};

eZ.addConfig('adminUiConfig.universalDiscoveryWidget.selectedItemActions', [{
  id: 'content-edit-button',
  priority: 30,
  component: SelectedItemEditButton
}], true);
SelectedItemEditButton.propTypes = {
  location: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  permissions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (SelectedItemEditButton);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/menu-button/menu.button.js":
/*!**************************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/menu-button/menu.button.js ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/helpers/css.class.names */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var MenuButton = function MenuButton(_ref) {
  var extraClasses = _ref.extraClasses,
      onClick = _ref.onClick,
      isDisabled = _ref.isDisabled,
      title = _ref.title,
      children = _ref.children;
  var className = Object(_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__["createCssClassNames"])(_defineProperty({
    'c-menu-button': true
  }, extraClasses, !!extraClasses));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: className,
    onClick: onClick,
    disabled: isDisabled,
    title: title,
    "data-tooltip-container-selector": ".c-udw-tab"
  }, children);
};

MenuButton.propTypes = {
  extraClasses: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  isDisabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any
};
MenuButton.defaultProps = {
  children: [],
  extraClasses: '',
  isDisabled: false,
  title: ''
};
/* harmony default export */ __webpack_exports__["default"] = (MenuButton);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/pure-toggle-selection-button/pure.toggle.selection.button.js":
/*!************************************************************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/pure-toggle-selection-button/pure.toggle.selection.button.js ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_icon_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/icon/icon */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/helpers/css.class.names */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _universal_discovery_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../universal.discovery.module */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var PureToggleSelectionButton = function PureToggleSelectionButton(_ref) {
  var isSelected = _ref.isSelected,
      toggleSelection = _ref.toggleSelection;
  var refPureToggleSelectionButton = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_4__["SelectedLocationsContext"]),
      _useContext2 = _slicedToArray(_useContext, 2),
      selectedLocations = _useContext2[0],
      dispatchSelectedLocationsAction = _useContext2[1];

  var _useContext3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_4__["MultipleConfigContext"]),
      _useContext4 = _slicedToArray(_useContext3, 2),
      multiple = _useContext4[0],
      multipleItemsLimit = _useContext4[1];

  var addLabel = Translator.trans(
  /*@Desc("Add")*/
  'browser.add', {}, 'universal_discovery_widget');
  var selectedLabel = Translator.trans(
  /*@Desc("Selected")*/
  'browser.selected', {}, 'universal_discovery_widget');
  var toggleSelectionLabel = isSelected ? selectedLabel : addLabel;
  var iconName = isSelected ? 'checkmark' : 'create';
  var className = Object(_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__["createCssClassNames"])({
    'c-toggle-selection-button': true,
    'c-toggle-selection-button--selected': isSelected
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.eZ.helpers.tooltips.hideAll(window.document.querySelector('.c-udw-tab')); // Title on toggler selection button is dynamic, for this we have to change 'data-original-title'.
    // Remove title is neccessary to prevent situation when we have bootsrap and native title.

    if (refPureToggleSelectionButton.current.getAttribute('data-original-title')) {
      refPureToggleSelectionButton.current.removeAttribute('title');
    }

    refPureToggleSelectionButton.current.setAttribute('data-original-title', toggleSelectionLabel);
  }, [isSelected]);

  if (multiple && !isSelected && selectedLocations.length >= multipleItemsLimit && multipleItemsLimit !== 0) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    ref: refPureToggleSelectionButton,
    className: className,
    onClick: toggleSelection,
    title: toggleSelectionLabel,
    "data-tooltip-container-selector": ".c-udw-tab"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: iconName,
    extraClasses: "ez-icon--small"
  }));
};

PureToggleSelectionButton.propTypes = {
  isSelected: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  toggleSelection: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PureToggleSelectionButton);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/sort-switcher/sort.switcher.js":
/*!******************************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/sort-switcher/sort.switcher.js ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _menu_button_menu_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu-button/menu.button */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/menu-button/menu.button.js");
/* harmony import */ var _common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/helpers/css.class.names */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _universal_discovery_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../universal.discovery.module */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var ASCENDING_ORDER = 'ascending';
var DESCENDING_ORDER = 'descending';

var SortSwitcher = function SortSwitcher(_ref) {
  var isDisabled = _ref.isDisabled;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_4__["SortingContext"]),
      _useContext2 = _slicedToArray(_useContext, 2),
      sorting = _useContext2[0],
      setSorting = _useContext2[1];

  var _useContext3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_4__["SortOrderContext"]),
      _useContext4 = _slicedToArray(_useContext3, 2),
      sortOrder = _useContext4[0],
      setSortOrder = _useContext4[1];

  var className = Object(_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__["createCssClassNames"])({
    'c-sort-switcher': true,
    'c-sort-switcher--disabled': isDisabled
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: className
  }, _universal_discovery_module__WEBPACK_IMPORTED_MODULE_4__["SORTING_OPTIONS"].map(function (option) {
    var extraClasses = Object(_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__["createCssClassNames"])({
      'c-menu-button--selected': option.sortClause === sorting,
      'c-menu-button--sorted-asc': sortOrder === ASCENDING_ORDER,
      'c-menu-button--sorted-desc': sortOrder === DESCENDING_ORDER
    });

    var onClick = function onClick() {
      setSorting(option.sortClause);

      if (sorting === option.sortClause) {
        setSortOrder(sortOrder === ASCENDING_ORDER ? DESCENDING_ORDER : ASCENDING_ORDER);
      }
    };

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_menu_button_menu_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: option.sortClause,
      extraClasses: extraClasses,
      onClick: onClick,
      isDisabled: isDisabled,
      title: option.tooltipLabel
    }, option.label);
  }));
};

SortSwitcher.propTypes = {
  isDisabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
SortSwitcher.defaultProps = {
  isDisabled: false
};
eZ.addConfig('adminUiConfig.universalDiscoveryWidget.topMenuActions', [{
  id: 'sort-switcher',
  priority: 20,
  component: SortSwitcher
}], true);
/* harmony default export */ __webpack_exports__["default"] = (SortSwitcher);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/translation-selector/translation.selector.js":
/*!********************************************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/translation-selector/translation.selector.js ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/helpers/css.class.names */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _common_icon_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/icon/icon */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
var _this = undefined;






var TranslationSelectorButton = function TranslationSelectorButton(_ref) {
  var hideTranslationSelector = _ref.hideTranslationSelector,
      selectTranslation = _ref.selectTranslation,
      version = _ref.version,
      isOpen = _ref.isOpen;
  var languageCodes = version ? version.VersionInfo.languageCodes.split(',') : [];
  var editTranslationLabel = Translator.trans(
  /*@Desc("Edit translation")*/
  'meta_preview.edit_translation', {}, 'universal_discovery_widget');
  var className = Object(_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__["createCssClassNames"])({
    'c-translation-selector': true,
    'c-translation-selector--hidden': !isOpen
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: className
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-translation-selector__header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "c-translation-selector__title"
  }, "".concat(editTranslationLabel, " (").concat(languageCodes.length, ")")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "c-translation-selector__close-button btn",
    onClick: hideTranslationSelector
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "discard",
    extraClasses: "ez-icon--small"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-translation-selector__languages-wrapper"
  }, languageCodes.map(function (languageCode) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: languageCode,
      className: "c-translation-selector__language",
      onClick: selectTranslation.bind(_this, languageCode)
    }, window.eZ.adminUiConfig.languages.mappings[languageCode].name);
  })));
};

TranslationSelectorButton.propTypes = {
  hideTranslationSelector: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  selectTranslation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  version: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (TranslationSelectorButton);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/tree-item-toggle-selection-button/tree.item.toggle.selection.button.js":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/tree-item-toggle-selection-button/tree.item.toggle.selection.button.js ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _universal_discovery_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../universal.discovery.module */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js");
/* harmony import */ var _services_universal_discovery_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/universal.discovery.service */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/services/universal.discovery.service.js");
/* harmony import */ var _pure_toggle_selection_button_pure_toggle_selection_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pure-toggle-selection-button/pure.toggle.selection.button */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/pure-toggle-selection-button/pure.toggle.selection.button.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var TreeItemToggleSelectionButton = function TreeItemToggleSelectionButton(_ref) {
  var locationId = _ref.locationId,
      isContainer = _ref.isContainer,
      contentTypeIdentifier = _ref.contentTypeIdentifier;
  var isUDW = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_2__["UDWContext"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.eZ.helpers.tooltips.parse(window.document.querySelector('.c-list'));
  }, []);

  if (!isUDW) {
    return null;
  }

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_2__["SelectedLocationsContext"]),
      _useContext2 = _slicedToArray(_useContext, 2),
      selectedLocations = _useContext2[0],
      dispatchSelectedLocationsAction = _useContext2[1];

  var _useContext3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_2__["MultipleConfigContext"]),
      _useContext4 = _slicedToArray(_useContext3, 2),
      multiple = _useContext4[0],
      multipleItemsLimit = _useContext4[1];

  var containersOnly = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_2__["ContainersOnlyContext"]);
  var allowedContentTypes = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_2__["AllowedContentTypesContext"]);
  var restInfo = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_2__["RestInfoContext"]);
  var isNotSelectable = containersOnly && !isContainer || allowedContentTypes && !allowedContentTypes.includes(contentTypeIdentifier);
  var isSelected = selectedLocations.some(function (selectedItem) {
    return selectedItem.location.id === locationId;
  });

  var toggleSelection = function toggleSelection() {
    if (isSelected) {
      dispatchSelectedLocationsAction({
        type: 'REMOVE_SELECTED_LOCATION',
        id: locationId
      });
    } else {
      Object(_services_universal_discovery_service__WEBPACK_IMPORTED_MODULE_3__["findLocationsById"])(_objectSpread(_objectSpread({}, restInfo), {}, {
        id: locationId
      }), function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 1),
            location = _ref3[0];

        dispatchSelectedLocationsAction({
          type: 'ADD_SELECTED_LOCATION',
          location: location
        });
      });
    }
  };

  if (!multiple || isNotSelectable) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pure_toggle_selection_button_pure_toggle_selection_button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    isSelected: isSelected,
    toggleSelection: toggleSelection
  });
};

eZ.addConfig('adminUiConfig.contentTreeWidget.itemActions', [{
  id: 'toggle-selection-button',
  priority: 30,
  component: TreeItemToggleSelectionButton
}], true);
TreeItemToggleSelectionButton.propTypes = {
  locationId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  isContainer: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  contentTypeIdentifier: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (TreeItemToggleSelectionButton);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/view-switcher/view.switcher.js":
/*!******************************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/view-switcher/view.switcher.js ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_icon_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/icon/icon */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _menu_button_menu_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../menu-button/menu.button */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/menu-button/menu.button.js");
/* harmony import */ var _common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/helpers/css.class.names */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _universal_discovery_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../universal.discovery.module */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var ViewSwitcher = function ViewSwitcher(_ref) {
  var isDisabled = _ref.isDisabled;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_5__["CurrentViewContext"]),
      _useContext2 = _slicedToArray(_useContext, 2),
      currentView = _useContext2[0],
      setCurrentView = _useContext2[1];

  var className = Object(_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_4__["createCssClassNames"])({
    'c-udw-view-switcher': true,
    'c-udw-view-switcher--disabled': isDisabled
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: className
  }, _universal_discovery_module__WEBPACK_IMPORTED_MODULE_5__["VIEWS"].map(function (view) {
    var extraClasses = view.id === currentView ? 'c-menu-button--selected' : '';

    var onClick = function onClick() {
      setCurrentView(view.id);
      window.eZ.helpers.tooltips.hideAll();
    };

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_menu_button_menu_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: view.id,
      extraClasses: extraClasses,
      onClick: onClick,
      isDisabled: isDisabled,
      title: view.tooltipLabel
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
      name: view.icon,
      extraClasses: "ez-icon--small-medium"
    }));
  }));
};

ViewSwitcher.propTypes = {
  isDisabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
ViewSwitcher.defaultProps = {
  isDisabled: false
};
eZ.addConfig('adminUiConfig.universalDiscoveryWidget.topMenuActions', [{
  id: 'view-switcher',
  priority: 10,
  component: ViewSwitcher
}], true);
/* harmony default export */ __webpack_exports__["default"] = (ViewSwitcher);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/content.meta.preview.module.js":
/*!*******************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/content.meta.preview.module.js ***!
  \*******************************************************************************************************************************/
/*! exports provided: getLocationData, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocationData", function() { return getLocationData; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_icon_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/icon/icon */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _common_thumbnail_thumbnail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/thumbnail/thumbnail */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/thumbnail/thumbnail.js");
/* harmony import */ var _components_translation_selector_translation_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/translation-selector/translation.selector */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/translation-selector/translation.selector.js");
/* harmony import */ var _components_content_edit_button_content_edit_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/content-edit-button/content.edit.button */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/content-edit-button/content.edit.button.js");
/* harmony import */ var _services_universal_discovery_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/universal.discovery.service */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/services/universal.discovery.service.js");
/* harmony import */ var _universal_discovery_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./universal.discovery.module */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var getLocationData = function getLocationData(loadedLocationsMap, markedLocationId) {
  return loadedLocationsMap.find(function (loadedLocation) {
    return loadedLocation.parentLocationId === markedLocationId;
  }) || loadedLocationsMap.length && loadedLocationsMap[loadedLocationsMap.length - 1].subitems.find(function (subitem) {
    return subitem.location.id === markedLocationId;
  });
};

var ContentMetaPreview = function ContentMetaPreview() {
  var refContentMetaPreview = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_6__["MarkedLocationIdContext"]),
      _useContext2 = _slicedToArray(_useContext, 2),
      markedLocationId = _useContext2[0],
      setMarkedLocationId = _useContext2[1];

  var _useContext3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_6__["LoadedLocationsMapContext"]),
      _useContext4 = _slicedToArray(_useContext3, 2),
      loadedLocationsMap = _useContext4[0],
      dispatchLoadedLocationsAction = _useContext4[1];

  var contentTypesMap = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_6__["ContentTypesMapContext"]);
  var restInfo = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_6__["RestInfoContext"]);
  var allowRedirects = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_6__["AllowRedirectsContext"]);
  var formatShortDateTime = window.eZ.helpers.timezone.formatShortDateTime;
  var locationData = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return getLocationData(loadedLocationsMap, markedLocationId);
  }, [markedLocationId, loadedLocationsMap]);
  var bookmarkLabel = Translator.trans(
  /*@Desc("Bookmark")*/
  'meta_preview.bookmark', {}, 'universal_discovery_widget');
  var previewLabel = Translator.trans(
  /*@Desc("Preview")*/
  'meta_preview.preview', {}, 'universal_discovery_widget');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.eZ.helpers.tooltips.parse(refContentMetaPreview.current);
  });

  if (!locationData || !locationData.location || !locationData.version || markedLocationId === 1) {
    return null;
  }

  var bookmarked = locationData.bookmarked,
      location = locationData.location,
      version = locationData.version,
      permissions = locationData.permissions;
  var bookmarkIconName = bookmarked ? 'bookmark-active' : 'bookmark';

  var toggleBookmarked = function toggleBookmarked() {
    var toggleBookmark = bookmarked ? _services_universal_discovery_service__WEBPACK_IMPORTED_MODULE_5__["removeBookmark"] : _services_universal_discovery_service__WEBPACK_IMPORTED_MODULE_5__["addBookmark"];
    toggleBookmark(_objectSpread(_objectSpread({}, restInfo), {}, {
      locationId: location.id
    }), function () {
      dispatchLoadedLocationsAction({
        type: 'UPDATE_LOCATIONS',
        data: _objectSpread(_objectSpread({}, locationData), {}, {
          bookmarked: !bookmarked
        })
      });
    });
  };

  var previewContent = function previewContent() {
    window.location.href = window.Routing.generate('_ez_content_view', {
      contentId: location.ContentInfo.Content._id,
      locationId: location.id
    }, true);
  };

  var renderActions = function renderActions() {
    var previewButton = allowRedirects ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "c-content-meta-preview__preview-button btn btn-icon",
      onClick: previewContent,
      "data-tooltip-container-selector": ".c-udw-tab",
      title: previewLabel
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
      name: "view",
      extraClasses: "ez-icon--small-medium ez-icon--secondary"
    })) : null;
    var hasAccess = permissions && permissions.edit.hasAccess;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "c-content-meta-preview__actions"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_content_edit_button_content_edit_button__WEBPACK_IMPORTED_MODULE_4__["default"], {
      location: location,
      version: version,
      isDisabled: !hasAccess
    }), previewButton);
  };

  var lastModifiedLabel = Translator.trans(
  /*@Desc("Last Modified")*/
  'meta_preview.last_modified', {}, 'universal_discovery_widget');
  var creationDateLabel = Translator.trans(
  /*@Desc("Creation Date")*/
  'meta_preview.creation_date', {}, 'universal_discovery_widget');
  var translationsLabel = Translator.trans(
  /*@Desc("Translations")*/
  'meta_preview.translations', {}, 'universal_discovery_widget');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-content-meta-preview",
    ref: refContentMetaPreview
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-content-meta-preview__preview"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_thumbnail_thumbnail__WEBPACK_IMPORTED_MODULE_2__["default"], {
    thumbnailData: version.Thumbnail,
    iconExtraClasses: "ez-icon--extra-large"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-content-meta-preview__header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "c-content-meta-preview__content-name"
  }, location.ContentInfo.Content.TranslatedName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "c-content-meta-preview__toggle-bookmark-button btn btn-icon",
    onClick: toggleBookmarked,
    title: bookmarkLabel,
    "data-placement": "left",
    "data-tooltip-container-selector": ".c-content-meta-preview"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: bookmarkIconName,
    extraClasses: "ez-icon--small ez-icon--secondary"
  }))), renderActions(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-content-meta-preview__info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-content-meta-preview__content-type-name"
  }, contentTypesMap[location.ContentInfo.Content.ContentType._href].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-content-meta-preview__details"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-content-meta-preview__details-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, lastModifiedLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, formatShortDateTime(new Date(location.ContentInfo.Content.lastModificationDate)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-content-meta-preview__details-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, creationDateLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, formatShortDateTime(new Date(location.ContentInfo.Content.publishedDate)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-content-meta-preview__details-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, translationsLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-content-meta-preview__translations-wrapper"
  }, version.VersionInfo.languageCodes.split(',').map(function (languageCode) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      key: languageCode,
      className: "c-content-meta-preview__translation"
    }, window.eZ.adminUiConfig.languages.mappings[languageCode].name);
  }))))));
};

eZ.addConfig('adminUiConfig.universalDiscoveryWidget.contentMetaPreview', ContentMetaPreview);
/* harmony default export */ __webpack_exports__["default"] = (ContentMetaPreview);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/hooks/useLoadedLocationsReducer.js":
/*!***********************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/hooks/useLoadedLocationsReducer.js ***!
  \***********************************************************************************************************************************/
/*! exports provided: useLoadedLocationsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLoadedLocationsReducer", function() { return useLoadedLocationsReducer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


var initialState = [{
  parentLocationId: 1,
  subitems: []
}];

var cutLocationsAfter = function cutLocationsAfter(state, action) {
  var itemIndex = state.findIndex(function (data) {
    return data.parentLocationId === action.locationId;
  });

  if (itemIndex === -1) {
    return state;
  }

  return state.slice(0, itemIndex + 1);
};

var updateLocationsMap = function updateLocationsMap(state, action) {
  var parentLocationIndex = state.findIndex(function (location) {
    return location.parentLocationId === action.data.parentLocationId;
  });

  var updatedState = _toConsumableArray(state);

  if (parentLocationIndex !== -1) {
    updatedState[parentLocationIndex] = action.data;
    return updatedState;
  }

  var childrenIndex = state.findIndex(function (data) {
    return data.subitems.find(function (item) {
      return item.location.id === action.data.parentLocationId;
    });
  });

  if (childrenIndex !== -1) {
    updatedState = updatedState.slice(0, childrenIndex + 1);
  }

  updatedState.push(action.data);
  return updatedState;
};

var setLocations = function setLocations(state, action) {
  return action.data;
};

var clearLoactions = function clearLoactions() {
  return [];
};

var loadedLocationsReducer = function loadedLocationsReducer(state, action) {
  switch (action.type) {
    case 'CUT_LOCATIONS':
      return cutLocationsAfter(state, action);

    case 'UPDATE_LOCATIONS':
      return updateLocationsMap(state, action);

    case 'SET_LOCATIONS':
      return setLocations(state, action);

    case 'CLEAR_LOCATIONS':
      return clearLoactions();

    default:
      throw new Error();
  }
};

var useLoadedLocationsReducer = function useLoadedLocationsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(loadedLocationsReducer, state),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      loadedLocationsMap = _useReducer2[0],
      dispatchLoadedLocationsAction = _useReducer2[1];

  return [loadedLocationsMap, dispatchLoadedLocationsAction];
};

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/hooks/useSelectedLocationsReducer.js":
/*!*************************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/hooks/useSelectedLocationsReducer.js ***!
  \*************************************************************************************************************************************/
/*! exports provided: useSelectedLocationsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSelectedLocationsReducer", function() { return useSelectedLocationsReducer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


var initialState = [];

var selectedLocationsReducer = function selectedLocationsReducer(state, action) {
  switch (action.type) {
    case 'ADD_SELECTED_LOCATION':
      return [].concat(_toConsumableArray(state), [{
        location: action.location,
        permissions: action.permissions
      }]);

    case 'REMOVE_SELECTED_LOCATION':
      return state.filter(function (selectedItem) {
        return selectedItem.location.id !== action.id;
      });

    case 'CLEAR_SELECTED_LOCATIONS':
      return [];

    case 'REPLACE_SELECTED_LOCATIONS':
      return action.locations;

    default:
      throw new Error();
  }
};

var useSelectedLocationsReducer = function useSelectedLocationsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(selectedLocationsReducer, state),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      selectedLocations = _useReducer2[0],
      dispatchSelectedLocationsAction = _useReducer2[1];

  return [selectedLocations, dispatchSelectedLocationsAction];
};

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/services/universal.discovery.service.js":
/*!****************************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/services/universal.discovery.service.js ***!
  \****************************************************************************************************************************************/
/*! exports provided: QUERY_LIMIT, findLocationsByParentLocationId, loadAccordionData, findLocationsBySearchQuery, findLocationsById, findContentInfo, loadBookmarks, addBookmark, removeBookmark, loadContentTypes, createDraft, loadContentInfo, loadLocationsWithPermissions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUERY_LIMIT", function() { return QUERY_LIMIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findLocationsByParentLocationId", function() { return findLocationsByParentLocationId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadAccordionData", function() { return loadAccordionData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findLocationsBySearchQuery", function() { return findLocationsBySearchQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findLocationsById", function() { return findLocationsById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findContentInfo", function() { return findContentInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadBookmarks", function() { return loadBookmarks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addBookmark", function() { return addBookmark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeBookmark", function() { return removeBookmark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadContentTypes", function() { return loadContentTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDraft", function() { return createDraft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadContentInfo", function() { return loadContentInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadLocationsWithPermissions", function() { return loadLocationsWithPermissions; });
/* harmony import */ var _common_services_notification_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/services/notification.service */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/services/notification.service.js");
/* harmony import */ var _common_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/helpers/request.helper.js */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/request.helper.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var HEADERS_CREATE_VIEW = {
  Accept: 'application/vnd.ez.api.View+json; version=1.1',
  'Content-Type': 'application/vnd.ez.api.ViewInput+json; version=1.1'
};
var ENDPOINT_CREATE_VIEW = '/api/ezp/v2/views';
var ENDPOINT_BOOKMARK = '/api/ezp/v2/bookmark';
var QUERY_LIMIT = 50;

var mapSubitems = function mapSubitems(subitems) {
  return subitems.locations.map(function (location) {
    var mappedSubitems = {
      location: location.Location
    };

    if (subitems.versions) {
      var version = subitems.versions.find(function (version) {
        return version.Version.VersionInfo.Content._href === location.Location.Content._href;
      });
      mappedSubitems.version = version.Version;
    }

    return mappedSubitems;
  });
};

var findLocationsByParentLocationId = function findLocationsByParentLocationId(_ref, callback) {
  var token = _ref.token,
      parentLocationId = _ref.parentLocationId,
      _ref$limit = _ref.limit,
      limit = _ref$limit === void 0 ? QUERY_LIMIT : _ref$limit,
      _ref$offset = _ref.offset,
      offset = _ref$offset === void 0 ? 0 : _ref$offset,
      _ref$sortClause = _ref.sortClause,
      sortClause = _ref$sortClause === void 0 ? 'DatePublished' : _ref$sortClause,
      _ref$sortOrder = _ref.sortOrder,
      sortOrder = _ref$sortOrder === void 0 ? 'ascending' : _ref$sortOrder,
      _ref$gridView = _ref.gridView,
      gridView = _ref$gridView === void 0 ? false : _ref$gridView;
  var routeName = gridView ? 'ezplatform.udw.location_gridview.data' : 'ezplatform.udw.location.data';
  var url = window.Routing.generate(routeName, {
    locationId: parentLocationId
  });
  var request = new Request("".concat(url, "?limit=").concat(limit, "&offset=").concat(offset, "&sortClause=").concat(sortClause, "&sortOrder=").concat(sortOrder), {
    method: 'GET',
    headers: {
      'X-CSRF-Token': token
    },
    mode: 'same-origin',
    credentials: 'same-origin'
  });
  fetch(request).then(_common_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_1__["handleRequestResponse"]).then(function (response) {
    var bookmarked = response.bookmarked,
        location = response.location,
        permissions = response.permissions,
        subitems = response.subitems,
        version = response.version;
    var subitemsData = mapSubitems(subitems);
    var locationData = {
      location: location ? location.Location : null,
      version: version ? version.Version : null,
      totalCount: subitems.totalCount,
      subitems: subitemsData,
      bookmarked: bookmarked,
      permissions: permissions,
      parentLocationId: parentLocationId
    };
    callback(locationData);
  })["catch"](_common_services_notification_service__WEBPACK_IMPORTED_MODULE_0__["showErrorNotification"]);
};
var loadAccordionData = function loadAccordionData(_ref2, callback) {
  var token = _ref2.token,
      parentLocationId = _ref2.parentLocationId,
      _ref2$limit = _ref2.limit,
      limit = _ref2$limit === void 0 ? QUERY_LIMIT : _ref2$limit,
      _ref2$sortClause = _ref2.sortClause,
      sortClause = _ref2$sortClause === void 0 ? 'DatePublished' : _ref2$sortClause,
      _ref2$sortOrder = _ref2.sortOrder,
      sortOrder = _ref2$sortOrder === void 0 ? 'ascending' : _ref2$sortOrder,
      _ref2$gridView = _ref2.gridView,
      gridView = _ref2$gridView === void 0 ? false : _ref2$gridView,
      _ref2$rootLocationId = _ref2.rootLocationId,
      rootLocationId = _ref2$rootLocationId === void 0 ? 1 : _ref2$rootLocationId;
  var routeName = gridView ? 'ezplatform.udw.accordion_gridview.data' : 'ezplatform.udw.accordion.data';
  var url = window.Routing.generate(routeName, {
    locationId: parentLocationId
  });
  var request = new Request("".concat(url, "?limit=").concat(limit, "&sortClause=").concat(sortClause, "&sortOrder=").concat(sortOrder, "&rootLocationId=").concat(rootLocationId), {
    method: 'GET',
    headers: {
      'X-CSRF-Token': token
    },
    mode: 'same-origin',
    credentials: 'same-origin'
  });
  fetch(request).then(_common_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_1__["handleRequestResponse"]).then(function (response) {
    var mappedItems = response.breadcrumb.map(function (item) {
      var location = item.Location;
      var itemData = response.columns[location.id];
      var mappedItem = {
        location: location,
        totalCount: itemData ? itemData.subitems.totalCount : undefined,
        subitems: itemData ? mapSubitems(itemData.subitems) : [],
        parentLocationId: location.id,
        collapsed: !response.columns[location.id]
      };
      return mappedItem;
    });
    var rootLocationData = response.columns[1];
    var lastLocationData = response.columns[parentLocationId];

    if (rootLocationData) {
      mappedItems.unshift({
        totalCount: rootLocationData ? rootLocationData.subitems.totalCount : undefined,
        subitems: rootLocationData ? mapSubitems(rootLocationData.subitems) : [],
        parentLocationId: 1,
        collapsed: false
      });
    }

    mappedItems.push({
      location: lastLocationData.location.Location,
      version: lastLocationData.version.Version,
      totalCount: lastLocationData ? lastLocationData.subitems.totalCount : undefined,
      subitems: lastLocationData ? mapSubitems(lastLocationData.subitems) : [],
      bookmarked: lastLocationData.bookmarked,
      permissions: lastLocationData.permissions,
      parentLocationId: parentLocationId
    });
    callback(mappedItems);
  })["catch"](_common_services_notification_service__WEBPACK_IMPORTED_MODULE_0__["showErrorNotification"]);
};
var findLocationsBySearchQuery = function findLocationsBySearchQuery(_ref3, callback) {
  var token = _ref3.token,
      siteaccess = _ref3.siteaccess,
      query = _ref3.query,
      _ref3$limit = _ref3.limit,
      limit = _ref3$limit === void 0 ? QUERY_LIMIT : _ref3$limit,
      _ref3$offset = _ref3.offset,
      offset = _ref3$offset === void 0 ? 0 : _ref3$offset,
      _ref3$languageCode = _ref3.languageCode,
      languageCode = _ref3$languageCode === void 0 ? null : _ref3$languageCode;
  var useAlwaysAvailable = true;
  var body = JSON.stringify({
    ViewInput: {
      identifier: "udw-locations-by-search-query-".concat(query.FullTextCriterion),
      "public": false,
      languageCode: languageCode,
      useAlwaysAvailable: useAlwaysAvailable,
      LocationQuery: {
        FacetBuilders: {},
        SortClauses: {},
        Query: query,
        limit: limit,
        offset: offset
      }
    }
  });
  var request = new Request(ENDPOINT_CREATE_VIEW, {
    method: 'POST',
    headers: _objectSpread(_objectSpread({}, HEADERS_CREATE_VIEW), {}, {
      'X-Siteaccess': siteaccess,
      'X-CSRF-Token': token
    }),
    body: body,
    mode: 'same-origin',
    credentials: 'same-origin'
  });
  fetch(request).then(_common_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_1__["handleRequestResponse"]).then(function (response) {
    var _response$View$Result = response.View.Result,
        count = _response$View$Result.count,
        searchHits = _response$View$Result.searchHits;
    var items = searchHits.searchHit.map(function (searchHit) {
      return searchHit.value.Location;
    });
    callback({
      items: items,
      count: count
    });
  })["catch"](_common_services_notification_service__WEBPACK_IMPORTED_MODULE_0__["showErrorNotification"]);
};
var findLocationsById = function findLocationsById(_ref4, callback) {
  var token = _ref4.token,
      siteaccess = _ref4.siteaccess,
      id = _ref4.id,
      _ref4$limit = _ref4.limit,
      limit = _ref4$limit === void 0 ? QUERY_LIMIT : _ref4$limit,
      _ref4$offset = _ref4.offset,
      offset = _ref4$offset === void 0 ? 0 : _ref4$offset;
  var body = JSON.stringify({
    ViewInput: {
      identifier: "udw-locations-by-id-".concat(id),
      "public": false,
      LocationQuery: {
        FacetBuilders: {},
        SortClauses: {
          SectionIdentifier: 'ascending'
        },
        Filter: {
          LocationIdCriterion: id
        },
        limit: limit,
        offset: offset
      }
    }
  });
  var request = new Request(ENDPOINT_CREATE_VIEW, {
    method: 'POST',
    headers: _objectSpread(_objectSpread({}, HEADERS_CREATE_VIEW), {}, {
      'X-Siteaccess': siteaccess,
      'X-CSRF-Token': token
    }),
    body: body,
    mode: 'same-origin',
    credentials: 'same-origin'
  });
  fetch(request).then(_common_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_1__["handleRequestResponse"]).then(function (response) {
    var items = response.View.Result.searchHits.searchHit.map(function (searchHit) {
      return searchHit.value.Location;
    });
    callback(items);
  })["catch"](_common_services_notification_service__WEBPACK_IMPORTED_MODULE_0__["showErrorNotification"]);
};
var findContentInfo = function findContentInfo(_ref5, callback) {
  var token = _ref5.token,
      siteaccess = _ref5.siteaccess,
      contentId = _ref5.contentId,
      _ref5$limit = _ref5.limit,
      limit = _ref5$limit === void 0 ? QUERY_LIMIT : _ref5$limit,
      _ref5$offset = _ref5.offset,
      offset = _ref5$offset === void 0 ? 0 : _ref5$offset;
  var body = JSON.stringify({
    ViewInput: {
      identifier: "udw-load-content-info-".concat(contentId),
      "public": false,
      ContentQuery: {
        FacetBuilders: {},
        SortClauses: {},
        Filter: {
          ContentIdCriterion: "".concat(contentId)
        },
        limit: limit,
        offset: offset
      }
    }
  });
  var request = new Request(ENDPOINT_CREATE_VIEW, {
    method: 'POST',
    headers: _objectSpread(_objectSpread({}, HEADERS_CREATE_VIEW), {}, {
      'X-Siteaccess': siteaccess,
      'X-CSRF-Token': token
    }),
    body: body,
    mode: 'same-origin',
    credentials: 'same-origin'
  });
  fetch(request).then(_common_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_1__["handleRequestResponse"]).then(function (response) {
    var items = response.View.Result.searchHits.searchHit.map(function (searchHit) {
      return searchHit.value.Content;
    });
    callback(items);
  })["catch"](_common_services_notification_service__WEBPACK_IMPORTED_MODULE_0__["showErrorNotification"]);
};
var loadBookmarks = function loadBookmarks(_ref6, callback) {
  var token = _ref6.token,
      siteaccess = _ref6.siteaccess,
      limit = _ref6.limit,
      offset = _ref6.offset;
  var request = new Request("".concat(ENDPOINT_BOOKMARK, "?limit=").concat(limit, "&offset=").concat(offset), {
    method: 'GET',
    headers: {
      'X-Siteaccess': siteaccess,
      'X-CSRF-Token': token,
      Accept: 'application/vnd.ez.api.ContentTypeInfoList+json'
    },
    mode: 'same-origin',
    credentials: 'same-origin'
  });
  fetch(request).then(_common_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_1__["handleRequestResponse"]).then(function (response) {
    var count = response.BookmarkList.count;
    var items = response.BookmarkList.items.map(function (item) {
      return item.Location;
    });
    callback({
      count: count,
      items: items
    });
  })["catch"](_common_services_notification_service__WEBPACK_IMPORTED_MODULE_0__["showErrorNotification"]);
};

var toggleBookmark = function toggleBookmark(_ref7, callback, method) {
  var siteaccess = _ref7.siteaccess,
      token = _ref7.token,
      locationId = _ref7.locationId;
  var request = new Request("".concat(ENDPOINT_BOOKMARK, "/").concat(locationId), {
    method: method,
    headers: {
      'X-Siteaccess': siteaccess,
      'X-CSRF-Token': token
    },
    mode: 'same-origin',
    credentials: 'same-origin'
  });
  fetch(request).then(_common_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_1__["handleRequestResponseStatus"]).then(callback)["catch"](_common_services_notification_service__WEBPACK_IMPORTED_MODULE_0__["showErrorNotification"]);
};

var addBookmark = function addBookmark(options, callback) {
  toggleBookmark(options, callback, 'POST');
};
var removeBookmark = function removeBookmark(options, callback) {
  toggleBookmark(options, callback, 'DELETE');
};
var loadContentTypes = function loadContentTypes(_ref8, callback) {
  var token = _ref8.token,
      siteaccess = _ref8.siteaccess;
  var request = new Request('/api/ezp/v2/content/types', {
    method: 'GET',
    headers: {
      Accept: 'application/vnd.ez.api.ContentTypeInfoList+json',
      'X-Siteaccess': siteaccess,
      'X-CSRF-Token': token
    },
    mode: 'same-origin',
    credentials: 'same-origin'
  });
  fetch(request).then(_common_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_1__["handleRequestResponse"]).then(callback)["catch"](_common_services_notification_service__WEBPACK_IMPORTED_MODULE_0__["showErrorNotification"]);
};
var createDraft = function createDraft(_ref9, callback) {
  var token = _ref9.token,
      siteaccess = _ref9.siteaccess,
      contentId = _ref9.contentId;
  var request = new Request("/api/ezp/v2/content/objects/".concat(contentId, "/currentversion"), {
    method: 'COPY',
    headers: {
      Accept: 'application/vnd.ez.api.VersionUpdate+json',
      'X-Siteaccess': siteaccess,
      'X-CSRF-Token': token
    },
    mode: 'same-origin',
    credentials: 'same-origin'
  });
  fetch(request).then(_common_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_1__["handleRequestResponse"]).then(callback)["catch"](_common_services_notification_service__WEBPACK_IMPORTED_MODULE_0__["showErrorNotification"]);
};
var loadContentInfo = function loadContentInfo(_ref10, callback) {
  var token = _ref10.token,
      siteaccess = _ref10.siteaccess,
      contentId = _ref10.contentId,
      _ref10$limit = _ref10.limit,
      limit = _ref10$limit === void 0 ? QUERY_LIMIT : _ref10$limit,
      _ref10$offset = _ref10.offset,
      offset = _ref10$offset === void 0 ? 0 : _ref10$offset;
  var body = JSON.stringify({
    ViewInput: {
      identifier: "udw-load-content-info-".concat(contentId),
      "public": false,
      ContentQuery: {
        FacetBuilders: {},
        SortClauses: {},
        Filter: {
          ContentIdCriterion: "".concat(contentId)
        },
        limit: limit,
        offset: offset
      }
    }
  });
  var request = new Request(ENDPOINT_CREATE_VIEW, {
    method: 'POST',
    headers: Object.assign({}, HEADERS_CREATE_VIEW, {
      'X-Siteaccess': siteaccess,
      'X-CSRF-Token': token
    }),
    body: body,
    mode: 'same-origin',
    credentials: 'same-origin'
  });
  fetch(request).then(_common_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_1__["handleRequestResponse"]).then(function (response) {
    var items = response.View.Result.searchHits.searchHit.map(function (searchHit) {
      return searchHit.value.Content;
    });
    callback(items);
  })["catch"](_common_services_notification_service__WEBPACK_IMPORTED_MODULE_0__["showErrorNotification"]);
};
var loadLocationsWithPermissions = function loadLocationsWithPermissions(_ref11, callback) {
  var locationIds = _ref11.locationIds;
  var url = window.Routing.generate('ezplatform.udw.locations.data');
  var request = new Request("".concat(url, "?locationIds=").concat(locationIds), {
    method: 'GET',
    mode: 'same-origin',
    credentials: 'same-origin'
  });
  fetch(request).then(_common_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_1__["handleRequestResponse"]).then(callback)["catch"](_common_services_notification_service__WEBPACK_IMPORTED_MODULE_0__["showErrorNotification"]);
};

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js":
/*!******************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js ***!
  \******************************************************************************************************************************/
/*! exports provided: SORTING_OPTIONS, VIEWS, UDWContext, RestInfoContext, AllowRedirectsContext, AllowConfirmationContext, ContentTypesMapContext, ContentTypesInfoMapContext, MultipleConfigContext, ContainersOnlyContext, AllowedContentTypesContext, ActiveTabContext, TabsConfigContext, TabsContext, TitleContext, CancelContext, ConfirmContext, SortingContext, SortOrderContext, CurrentViewContext, MarkedLocationIdContext, LoadedLocationsMapContext, RootLocationIdContext, SelectedLocationsContext, CreateContentWidgetContext, ContentOnTheFlyDataContext, ContentOnTheFlyConfigContext, EditOnTheFlyDataContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SORTING_OPTIONS", function() { return SORTING_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIEWS", function() { return VIEWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UDWContext", function() { return UDWContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestInfoContext", function() { return RestInfoContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllowRedirectsContext", function() { return AllowRedirectsContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllowConfirmationContext", function() { return AllowConfirmationContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentTypesMapContext", function() { return ContentTypesMapContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentTypesInfoMapContext", function() { return ContentTypesInfoMapContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultipleConfigContext", function() { return MultipleConfigContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainersOnlyContext", function() { return ContainersOnlyContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllowedContentTypesContext", function() { return AllowedContentTypesContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveTabContext", function() { return ActiveTabContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsConfigContext", function() { return TabsConfigContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsContext", function() { return TabsContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleContext", function() { return TitleContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelContext", function() { return CancelContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmContext", function() { return ConfirmContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortingContext", function() { return SortingContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortOrderContext", function() { return SortOrderContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentViewContext", function() { return CurrentViewContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkedLocationIdContext", function() { return MarkedLocationIdContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadedLocationsMapContext", function() { return LoadedLocationsMapContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootLocationIdContext", function() { return RootLocationIdContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectedLocationsContext", function() { return SelectedLocationsContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateContentWidgetContext", function() { return CreateContentWidgetContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentOnTheFlyDataContext", function() { return ContentOnTheFlyDataContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentOnTheFlyConfigContext", function() { return ContentOnTheFlyConfigContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditOnTheFlyDataContext", function() { return EditOnTheFlyDataContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_helpers_deep_clone_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/helpers/deep.clone.helper */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/deep.clone.helper.js");
/* harmony import */ var _common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/helpers/css.class.names */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _hooks_useLoadedLocationsReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hooks/useLoadedLocationsReducer */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/hooks/useLoadedLocationsReducer.js");
/* harmony import */ var _hooks_useSelectedLocationsReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hooks/useSelectedLocationsReducer */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/hooks/useSelectedLocationsReducer.js");
/* harmony import */ var _services_universal_discovery_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/universal.discovery.service */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/services/universal.discovery.service.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var CLASS_SCROLL_DISABLED = 'ez-scroll-disabled';
var SORTING_OPTIONS = [{
  label: Translator.trans(
  /*@Desc("Date")*/
  'sorting.date.label', {}, 'universal_discovery_widget'),
  tooltipLabel: Translator.trans(
  /*@Desc("Sort by Date")*/
  'sorting.date.tooltip', {}, 'universal_discovery_widget'),
  sortClause: 'DatePublished'
}, {
  label: Translator.trans(
  /*@Desc("Name")*/
  'sorting.name.label', {}, 'universal_discovery_widget'),
  tooltipLabel: Translator.trans(
  /*@Desc("Sort by Name")*/
  'sorting.name.tooltip', {}, 'universal_discovery_widget'),
  sortClause: 'ContentName'
}];
var VIEWS = [{
  id: 'grid',
  icon: 'view-grid',
  tooltipLabel: Translator.trans(
  /*@Desc("Grid view")*/
  'sorting.grid.view', {}, 'universal_discovery_widget')
}, {
  id: 'finder',
  icon: 'panels',
  tooltipLabel: Translator.trans(
  /*@Desc("Panels view")*/
  'sorting.panels.view', {}, 'universal_discovery_widget')
}, {
  id: 'tree',
  icon: 'content-tree',
  tooltipLabel: Translator.trans(
  /*@Desc("Tree view")*/
  'sorting.tree.view', {}, 'universal_discovery_widget')
}];
var restInfo = {
  token: document.querySelector('meta[name="CSRF-Token"]').content,
  siteaccess: document.querySelector('meta[name="SiteAccess"]').content
};
var contentTypesMap = Object.values(eZ.adminUiConfig.contentTypes).reduce(function (contentTypesMap, contentTypesGroup) {
  contentTypesGroup.forEach(function (contentType) {
    contentTypesMap[contentType.href] = contentType;
  });
  return contentTypesMap;
}, {});
var UDWContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
var RestInfoContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
var AllowRedirectsContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
var AllowConfirmationContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
var ContentTypesMapContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
var ContentTypesInfoMapContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
var MultipleConfigContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
var ContainersOnlyContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
var AllowedContentTypesContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
var ActiveTabContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
var TabsConfigContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
var TabsContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
var TitleContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
var CancelContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
var ConfirmContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
var SortingContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
var SortOrderContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
var CurrentViewContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
var MarkedLocationIdContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
var LoadedLocationsMapContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
var RootLocationIdContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
var SelectedLocationsContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
var CreateContentWidgetContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
var ContentOnTheFlyDataContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
var ContentOnTheFlyConfigContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
var EditOnTheFlyDataContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();

var UniversalDiscoveryModule = function UniversalDiscoveryModule(props) {
  var tabs = window.eZ.adminUiConfig.universalDiscoveryWidget.tabs;
  var defaultMarkedLocationId = props.startingLocationId || props.rootLocationId;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.activeTab),
      _useState2 = _slicedToArray(_useState, 2),
      activeTab = _useState2[0],
      setActiveTab = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.activeSortClause),
      _useState4 = _slicedToArray(_useState3, 2),
      sorting = _useState4[0],
      setSorting = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.activeSortOrder),
      _useState6 = _slicedToArray(_useState5, 2),
      sortOrder = _useState6[0],
      setSortOrder = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.activeView),
      _useState8 = _slicedToArray(_useState7, 2),
      currentView = _useState8[0],
      setCurrentView = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(defaultMarkedLocationId !== 1 ? defaultMarkedLocationId : null),
      _useState10 = _slicedToArray(_useState9, 2),
      markedLocationId = _useState10[0],
      setMarkedLocationId = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState12 = _slicedToArray(_useState11, 2),
      createContentVisible = _useState12[0],
      setCreateContentVisible = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      _useState14 = _slicedToArray(_useState13, 2),
      contentOnTheFlyData = _useState14[0],
      setContentOnTheFlyData = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      _useState16 = _slicedToArray(_useState15, 2),
      editOnTheFlyData = _useState16[0],
      setEditOnTheFlyData = _useState16[1];

  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      _useState18 = _slicedToArray(_useState17, 2),
      contentTypesInfoMap = _useState18[0],
      setContentTypesInfoMap = _useState18[1];

  var _useLoadedLocationsRe = Object(_hooks_useLoadedLocationsReducer__WEBPACK_IMPORTED_MODULE_4__["useLoadedLocationsReducer"])([{
    parentLocationId: props.rootLocationId,
    subitems: []
  }]),
      _useLoadedLocationsRe2 = _slicedToArray(_useLoadedLocationsRe, 2),
      loadedLocationsMap = _useLoadedLocationsRe2[0],
      dispatchLoadedLocationsAction = _useLoadedLocationsRe2[1];

  var _useSelectedLocations = Object(_hooks_useSelectedLocationsReducer__WEBPACK_IMPORTED_MODULE_5__["useSelectedLocationsReducer"])(),
      _useSelectedLocations2 = _slicedToArray(_useSelectedLocations, 2),
      selectedLocations = _useSelectedLocations2[0],
      dispatchSelectedLocationsAction = _useSelectedLocations2[1];

  var activeTabConfig = tabs.find(function (tab) {
    return tab.id === activeTab;
  });
  var Tab = activeTabConfig.component;
  var className = Object(_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__["createCssClassNames"])({
    'm-ud': true,
    'm-ud--locations-selected': !!selectedLocations.length && props.allowConfirmation
  });

  var onConfirm = function onConfirm() {
    var selectedItems = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : selectedLocations;
    var updatedLocations = selectedItems.map(function (selectedItem) {
      var clonedLocation = Object(_common_helpers_deep_clone_helper__WEBPACK_IMPORTED_MODULE_2__["default"])(selectedItem.location);
      var contentType = clonedLocation.ContentInfo.Content.ContentType;
      clonedLocation.ContentInfo.Content.ContentTypeInfo = contentTypesInfoMap[contentType._href];
      return clonedLocation;
    });
    props.onConfirm(updatedLocations);
  };

  var addPermissionsToSelectedLocations = function addPermissionsToSelectedLocations(response) {
    var clonedSelectedLocation = Object(_common_helpers_deep_clone_helper__WEBPACK_IMPORTED_MODULE_2__["default"])(selectedLocations);
    response.forEach(function (item) {
      var locationWithoutPermissions = clonedSelectedLocation.find(function (selectedItem) {
        return selectedItem.location.id === item.location.Location.id;
      });

      if (locationWithoutPermissions) {
        locationWithoutPermissions.permissions = item.permissions;
      }
    });
    dispatchSelectedLocationsAction({
      type: 'REPLACE_SELECTED_LOCATIONS',
      locations: clonedSelectedLocation
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var handleLoadContentTypes = function handleLoadContentTypes(response) {
      var contentTypesMap = response.ContentTypeInfoList.ContentType.reduce(function (contentTypesList, item) {
        contentTypesList[item._href] = item;
        return contentTypesList;
      }, {});
      setContentTypesInfoMap(contentTypesMap);
    };

    Object(_services_universal_discovery_service__WEBPACK_IMPORTED_MODULE_6__["loadContentTypes"])(restInfo, handleLoadContentTypes);
    window.document.body.dispatchEvent(new CustomEvent('ez-udw-opened'));
    window.eZ.helpers.tooltips.parse(window.document.querySelector('.c-udw-tab'));
    return function () {
      window.document.body.dispatchEvent(new CustomEvent('ez-udw-closed'));
    };
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!props.selectedLocations.length) {
      return;
    }

    Object(_services_universal_discovery_service__WEBPACK_IMPORTED_MODULE_6__["findLocationsById"])(_objectSpread(_objectSpread({}, restInfo), {}, {
      id: props.selectedLocations.join(',')
    }), function (locations) {
      var mappedLocation = props.selectedLocations.map(function (locationId) {
        var location = locations.find(function (location) {
          return location.id === parseInt(locationId, 10);
        });
        return {
          location: location
        };
      });
      dispatchSelectedLocationsAction({
        type: 'REPLACE_SELECTED_LOCATIONS',
        locations: mappedLocation
      });
    });
  }, [props.selectedLocations]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var locationIds = selectedLocations.filter(function (item) {
      return !item.permissions;
    }).map(function (item) {
      return item.location.id;
    }).join(',');

    if (!locationIds) {
      return;
    }

    Object(_services_universal_discovery_service__WEBPACK_IMPORTED_MODULE_6__["loadLocationsWithPermissions"])({
      locationIds: locationIds
    }, addPermissionsToSelectedLocations);
  }, [selectedLocations]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var locationsWithoutVersion = selectedLocations.filter(function (selectedItem) {
      return !selectedItem.location.ContentInfo.Content.CurrentVersion.Version;
    });

    if (!locationsWithoutVersion.length) {
      return;
    }

    var contentId = locationsWithoutVersion.map(function (item) {
      return item.location.ContentInfo.Content._id;
    }).join(',');
    Object(_services_universal_discovery_service__WEBPACK_IMPORTED_MODULE_6__["loadContentInfo"])(_objectSpread(_objectSpread({}, restInfo), {}, {
      contentId: contentId
    }), function (response) {
      var clonedLocations = selectedLocations;
      response.forEach(function (content) {
        var clonedLocation = clonedLocations.find(function (clonedItem) {
          return clonedItem.location.ContentInfo.Content._id === content._id;
        });

        if (clonedLocation) {
          clonedLocation.location.ContentInfo.Content.CurrentVersion.Version = content.CurrentVersion.Version;
        }
      });
      dispatchSelectedLocationsAction({
        type: 'REPLACE_SELECTED_LOCATIONS',
        locations: clonedLocations
      });
    });
  }, [selectedLocations]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.document.body.classList.add(CLASS_SCROLL_DISABLED);
    return function () {
      window.document.body.classList.remove(CLASS_SCROLL_DISABLED);
    };
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (currentView === 'grid') {
      loadedLocationsMap[loadedLocationsMap.length - 1].subitems = [];
      dispatchLoadedLocationsAction({
        type: 'SET_LOCATIONS',
        data: loadedLocationsMap
      });
    } else if ((currentView === 'finder' || currentView === 'tree') && !!markedLocationId && markedLocationId !== loadedLocationsMap[loadedLocationsMap.length - 1].parentLocationId && loadedLocationsMap[loadedLocationsMap.length - 1].subitems.find(function (subitem) {
      return subitem.location.id === markedLocationId;
    })) {
      dispatchLoadedLocationsAction({
        type: 'UPDATE_LOCATIONS',
        data: {
          parentLocationId: markedLocationId,
          subitems: []
        }
      });
    }
  }, [currentView]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!props.startingLocationId || props.startingLocationId === 1) {
      return;
    }

    Object(_services_universal_discovery_service__WEBPACK_IMPORTED_MODULE_6__["loadAccordionData"])(_objectSpread(_objectSpread({}, restInfo), {}, {
      parentLocationId: props.startingLocationId,
      sortClause: sorting,
      sortOrder: sortOrder,
      gridView: currentView === 'grid',
      rootLocationId: props.rootLocationId
    }), function (locationsMap) {
      dispatchLoadedLocationsAction({
        type: 'SET_LOCATIONS',
        data: locationsMap
      });
      setMarkedLocationId(props.startingLocationId);
    });
  }, [props.startingLocationId]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var locationsMap = loadedLocationsMap.map(function (loadedLocation) {
      loadedLocation.subitems = [];
      return loadedLocation;
    });
    dispatchLoadedLocationsAction({
      type: 'SET_LOCATIONS',
      data: locationsMap
    });
  }, [sorting, sortOrder]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: className
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UDWContext.Provider, {
    value: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RestInfoContext.Provider, {
    value: restInfo
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AllowRedirectsContext.Provider, {
    value: props.allowRedirects
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AllowConfirmationContext.Provider, {
    value: props.allowConfirmation
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContentTypesInfoMapContext.Provider, {
    value: contentTypesInfoMap
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContentTypesMapContext.Provider, {
    value: contentTypesMap
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MultipleConfigContext.Provider, {
    value: [props.multiple, props.multipleItemsLimit]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContainersOnlyContext.Provider, {
    value: props.containersOnly
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AllowedContentTypesContext.Provider, {
    value: props.allowedContentTypes
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ActiveTabContext.Provider, {
    value: [activeTab, setActiveTab]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TabsContext.Provider, {
    value: tabs
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TabsConfigContext.Provider, {
    value: props.tabsConfig
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TitleContext.Provider, {
    value: props.title
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CancelContext.Provider, {
    value: props.onCancel
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ConfirmContext.Provider, {
    value: onConfirm
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SortingContext.Provider, {
    value: [sorting, setSorting]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SortOrderContext.Provider, {
    value: [sortOrder, setSortOrder]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CurrentViewContext.Provider, {
    value: [currentView, setCurrentView]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MarkedLocationIdContext.Provider, {
    value: [markedLocationId, setMarkedLocationId]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LoadedLocationsMapContext.Provider, {
    value: [loadedLocationsMap, dispatchLoadedLocationsAction]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RootLocationIdContext.Provider, {
    value: props.rootLocationId
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SelectedLocationsContext.Provider, {
    value: [selectedLocations, dispatchSelectedLocationsAction]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CreateContentWidgetContext.Provider, {
    value: [createContentVisible, setCreateContentVisible]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContentOnTheFlyDataContext.Provider, {
    value: [contentOnTheFlyData, setContentOnTheFlyData]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContentOnTheFlyConfigContext.Provider, {
    value: props.contentOnTheFly
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(EditOnTheFlyDataContext.Provider, {
    value: [editOnTheFlyData, setEditOnTheFlyData]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tab, null))))))))))))))))))))))))))));
};

UniversalDiscoveryModule.propTypes = {
  onConfirm: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  onCancel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  activeTab: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  rootLocationId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  startingLocationId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  multiple: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  multipleItemsLimit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  containersOnly: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  allowedContentTypes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  activeSortClause: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  activeSortOrder: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  activeView: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  contentOnTheFly: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    allowedLanguages: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
    allowedLocations: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
    preselectedLocation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    preselectedContentType: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    hidden: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
    autoConfirmAfterPublish: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired
  }).isRequired,
  tabsConfig: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    itemsPerPage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    priority: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    hidden: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired
  })).isRequired,
  selectedLocations: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  allowRedirects: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  allowConfirmation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired
};
UniversalDiscoveryModule.defaultProps = {
  activeTab: 'browse',
  rootLocationId: 1,
  startingLocationId: null,
  multiple: false,
  multipleItemsLimit: 1,
  containersOnly: false,
  activeSortClause: 'date',
  activeSortOrder: 'ascending',
  activeView: 'finder',
  tabs: window.eZ.adminUiConfig.universalDiscoveryWidget.tabs,
  selectedLocations: []
};
eZ.addConfig('modules.UniversalDiscovery', UniversalDiscoveryModule);
/* harmony default export */ __webpack_exports__["default"] = (UniversalDiscoveryModule);

/***/ }),

/***/ 28:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/content.meta.preview.module.js ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/content-create-button/content.create.button.js ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/content-edit-button/selected.item.edit.button.js ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/sort-switcher/sort.switcher.js ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/view-switcher/view.switcher.js ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/tree-item-toggle-selection-button/tree.item.toggle.selection.button.js ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/content.meta.preview.module.js */"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/content.meta.preview.module.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/content-create-button/content.create.button.js */"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/content-create-button/content.create.button.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/content-edit-button/selected.item.edit.button.js */"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/content-edit-button/selected.item.edit.button.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/sort-switcher/sort.switcher.js */"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/sort-switcher/sort.switcher.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/view-switcher/view.switcher.js */"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/view-switcher/view.switcher.js");
module.exports = __webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/tree-item-toggle-selection-button/tree.item.toggle.selection.button.js */"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/tree-item-toggle-selection-button/tree.item.toggle.selection.button.js");


/***/ }),

/***/ "prop-types":
/*!****************************!*\
  !*** external "PropTypes" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = PropTypes;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ })

},[[28,"runtime"]]]);