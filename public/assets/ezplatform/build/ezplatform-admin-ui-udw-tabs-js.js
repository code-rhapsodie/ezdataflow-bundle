(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ezplatform-admin-ui-udw-tabs-js"],{

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

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/pagination/pagination.button.js":
/*!*******************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/pagination/pagination.button.js ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var PaginationButton = function PaginationButton(_ref) {
  var label = _ref.label,
      disabled = _ref.disabled,
      additionalClasses = _ref.additionalClasses,
      buttonAdditionalClasses = _ref.buttonAdditionalClasses,
      onPageChange = _ref.onPageChange,
      pageIndex = _ref.pageIndex;

  var handleClick = function handleClick() {
    if (!disabled && Number.isInteger(pageIndex)) {
      onPageChange(pageIndex);
    }
  };

  var className = "c-pagination-button page-item ".concat(additionalClasses);
  className = disabled ? "".concat(className, " disabled") : className;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: className
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "page-link ".concat(buttonAdditionalClasses),
    onClick: handleClick,
    type: "button"
  }, label));
};

PaginationButton.propTypes = {
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  onPageChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  pageIndex: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  additionalClasses: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  buttonAdditionalClasses: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
PaginationButton.defaultProps = {
  disabled: false,
  additionalClasses: '',
  buttonAdditionalClasses: '',
  onPageChange: function onPageChange() {}
};
/* harmony default export */ __webpack_exports__["default"] = (PaginationButton);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/pagination/pagination.js":
/*!************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/pagination/pagination.js ***!
  \************************************************************************************************************/
/*! exports provided: computePages, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computePages", function() { return computePages; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pagination_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pagination.button */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/pagination/pagination.button.js");



var DOTS = '...';
/**
 * Computes array with pagination pages.
 *
 * Example 1: [ 1, "...", 5, 6, 7, 8, 9, 10 ] (for: proximity = 2; pagesNumber = 10; activePageIndex = 7)
 * Example 2: [ 1, "...", 3, 4, 5, 6, 7, "...", 10 ] (for: proximity = 2; pagesNumber = 10; activePageIndex = 5)
 * Example 3: [ 1, "...", 8, 9, 10, 11, 12, "...", 20 ] (for: proximity = 2; pagesNumber = 20; activePageIndex = 10)
 *
 * @param {Object} params
 * @param {Number} params.proximity
 * @param {Number} params.activePageIndex
 * @param {Number} params.pagesCount
 * @param {String} params.separator
 *
 * @returns {Array}
 */

var computePages = function computePages(_ref) {
  var proximity = _ref.proximity,
      activePageIndex = _ref.activePageIndex,
      pagesCount = _ref.pagesCount,
      separator = _ref.separator;
  var pages = [];
  var wasSeparator = false;

  for (var i = 1; i <= pagesCount; i++) {
    var isFirstPage = i === 1;
    var isLastPage = i === pagesCount;
    var isInRange = i >= activePageIndex + 1 - proximity && i <= activePageIndex + 1 + proximity;

    if (isFirstPage || isLastPage || isInRange) {
      pages.push(i);
      wasSeparator = false;
    } else if (!wasSeparator) {
      pages.push(separator);
      wasSeparator = true;
    }
  }

  return pages;
};

var Pagination = function Pagination(_ref2) {
  var totalCount = _ref2.totalCount,
      itemsPerPage = _ref2.itemsPerPage,
      proximity = _ref2.proximity,
      activePageIndex = _ref2.activePageIndex,
      onPageChange = _ref2.onPageChange,
      paginationDisabled = _ref2.disabled;
  var pagesCount = Math.ceil(totalCount / itemsPerPage);

  if (pagesCount <= 1) {
    return null;
  }

  var backLabel = Translator.trans(
  /*@Desc("Back")*/
  'pagination.back', {}, 'sub_items');
  var nextLabel = Translator.trans(
  /*@Desc("Next")*/
  'pagination.next', {}, 'sub_items');
  var previousPage = activePageIndex - 1;
  var nextPage = activePageIndex + 1;
  var isFirstPage = activePageIndex === 0;
  var isLastPage = activePageIndex + 1 === pagesCount;
  var pages = computePages({
    proximity: proximity,
    activePageIndex: activePageIndex,
    pagesCount: pagesCount,
    separator: DOTS
  });
  var paginationButtons = pages.map(function (page, index) {
    if (page === DOTS) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pagination_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
        key: "dots-".concat(index),
        label: DOTS,
        disabled: true
      });
    }

    var isCurrentPage = page === activePageIndex + 1;
    var additionalClasses = isCurrentPage ? 'active' : '';
    var label = '' + page;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pagination_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: page,
      pageIndex: page - 1,
      label: label,
      additionalClasses: additionalClasses,
      onPageChange: onPageChange,
      disabled: paginationDisabled
    });
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "c-pagination pagination"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pagination_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    pageIndex: previousPage,
    label: backLabel,
    additionalClasses: "prev",
    disabled: isFirstPage || paginationDisabled,
    onPageChange: onPageChange
  }), paginationButtons, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pagination_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    pageIndex: nextPage,
    label: nextLabel,
    additionalClasses: "next",
    disabled: isLastPage || paginationDisabled,
    onPageChange: onPageChange
  }));
};

Pagination.propTypes = {
  proximity: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  itemsPerPage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  activePageIndex: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  totalCount: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  onPageChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Pagination);

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

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/content-tree/components/content-tree/content.tree.js":
/*!*********************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/content-tree/components/content-tree/content.tree.js ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContentTree; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../list/list.component */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/content-tree/components/list/list.component.js");
/* harmony import */ var _common_icon_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/icon/icon */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var CLASS_IS_TREE_RESIZING = 'ez-is-tree-resizing';

var ContentTree = /*#__PURE__*/function (_Component) {
  _inherits(ContentTree, _Component);

  var _super = _createSuper(ContentTree);

  function ContentTree(props) {
    var _this;

    _classCallCheck(this, ContentTree);

    _this = _super.call(this, props);
    _this.changeContainerWidth = _this.changeContainerWidth.bind(_assertThisInitialized(_this));
    _this.addWidthChangeListener = _this.addWidthChangeListener.bind(_assertThisInitialized(_this));
    _this.handleResizeEnd = _this.handleResizeEnd.bind(_assertThisInitialized(_this));
    _this._refTreeContainer = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    _this.scrollTimeout = null;
    _this.scrollPositionRestored = false;
    _this.state = {
      resizeStartPositionX: 0,
      containerWidth: _this.getConfig('width'),
      resizedContainerWidth: 0,
      isResizing: false
    };
    return _this;
  }

  _createClass(ContentTree, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.clearDocumentResizingListeners();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.containerScrollRef.addEventListener('scroll', function (event) {
        window.clearTimeout(_this2.scrollTimeout);
        _this2.scrollTimeout = window.setTimeout(function (scrollTop) {
          _this2.saveConfig('scrollTop', scrollTop);
        }, 50, event.currentTarget.scrollTop);
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevState) {
      if (this.state.containerWidth !== prevState.containerWidth) {
        this.saveConfig('width', this.state.containerWidth);
        document.body.dispatchEvent(new CustomEvent('ez-content-tree-resized'));
      }

      if (this.props.items && this.props.items.length && !this.scrollPositionRestored) {
        this.scrollPositionRestored = true;
        this.containerScrollRef.scrollTo(0, this.getConfig('scrollTop'));
      }
    }
  }, {
    key: "saveConfig",
    value: function saveConfig(id, value) {
      var userId = this.props.userId;
      var data = JSON.parse(window.localStorage.getItem('ez-content-tree-state') || '{}');

      if (!data[userId]) {
        data[userId] = {};
      }

      data[userId][id] = value;
      window.localStorage.setItem('ez-content-tree-state', JSON.stringify(data));
    }
  }, {
    key: "getConfig",
    value: function getConfig(id) {
      var _data$userId;

      var userId = this.props.userId;
      var data = JSON.parse(window.localStorage.getItem('ez-content-tree-state') || '{}');
      return (_data$userId = data[userId]) === null || _data$userId === void 0 ? void 0 : _data$userId[id];
    }
  }, {
    key: "changeContainerWidth",
    value: function changeContainerWidth(_ref) {
      var clientX = _ref.clientX;
      var currentPositionX = clientX;
      this.setState(function (state) {
        return {
          resizedContainerWidth: state.containerWidth + (currentPositionX - state.resizeStartPositionX)
        };
      });
    }
  }, {
    key: "addWidthChangeListener",
    value: function addWidthChangeListener(_ref2) {
      var nativeEvent = _ref2.nativeEvent;
      var resizeStartPositionX = nativeEvent.clientX;

      var containerWidth = this._refTreeContainer.current.getBoundingClientRect().width;

      window.document.addEventListener('mousemove', this.changeContainerWidth, false);
      window.document.addEventListener('mouseup', this.handleResizeEnd, false);
      window.document.body.classList.add(CLASS_IS_TREE_RESIZING);
      this.setState(function () {
        return {
          resizeStartPositionX: resizeStartPositionX,
          containerWidth: containerWidth,
          isResizing: true
        };
      });
    }
  }, {
    key: "handleResizeEnd",
    value: function handleResizeEnd() {
      this.clearDocumentResizingListeners();
      this.setState(function (state) {
        return {
          resizeStartPositionX: 0,
          containerWidth: state.resizedContainerWidth,
          isResizing: false
        };
      });
    }
  }, {
    key: "clearDocumentResizingListeners",
    value: function clearDocumentResizingListeners() {
      window.document.removeEventListener('mousemove', this.changeContainerWidth);
      window.document.removeEventListener('mouseup', this.handleResizeEnd);
      window.document.body.classList.remove(CLASS_IS_TREE_RESIZING);
    }
  }, {
    key: "renderCollapseAllBtn",
    value: function renderCollapseAllBtn() {
      var collapseAllLabel = Translator.trans(
      /*@Desc("Collapse all")*/
      'collapse_all', {}, 'content_tree');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        tabIndex: -1,
        className: "m-tree__collapse-all-btn",
        onClick: this.props.onCollapseAllItems
      }, collapseAllLabel);
    }
  }, {
    key: "renderList",
    value: function renderList() {
      var _this3 = this;

      var _this$props = this.props,
          items = _this$props.items,
          loadMoreSubitems = _this$props.loadMoreSubitems,
          currentLocationId = _this$props.currentLocationId,
          onClickItem = _this$props.onClickItem,
          subitemsLoadLimit = _this$props.subitemsLoadLimit,
          subitemsLimit = _this$props.subitemsLimit,
          treeMaxDepth = _this$props.treeMaxDepth,
          afterItemToggle = _this$props.afterItemToggle;
      var attrs = {
        items: items,
        path: '',
        loadMoreSubitems: loadMoreSubitems,
        currentLocationId: currentLocationId,
        subitemsLimit: subitemsLimit,
        subitemsLoadLimit: subitemsLoadLimit,
        treeMaxDepth: treeMaxDepth,
        afterItemToggle: afterItemToggle,
        isRoot: true,
        onClickItem: onClickItem
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "m-tree__scrollable-wrapper",
        ref: function ref(_ref3) {
          return _this3.containerScrollRef = _ref3;
        }
      }, !items || !items.length ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_list_list_component__WEBPACK_IMPORTED_MODULE_2__["default"], attrs));
    }
  }, {
    key: "renderLoadingSpinner",
    value: function renderLoadingSpinner() {
      var items = this.props.items;

      if (items && items.length) {
        return;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "m-tree__loading-spinner"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
        name: "spinner",
        extraClasses: "ez-icon--medium ez-spin"
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          isResizing = _this$state.isResizing,
          containerWidth = _this$state.containerWidth,
          resizedContainerWidth = _this$state.resizedContainerWidth;
      var width = isResizing ? resizedContainerWidth : containerWidth;
      var containerAttrs = {
        className: 'm-tree',
        ref: this._refTreeContainer
      };

      if (width) {
        containerAttrs.style = {
          width: "".concat(width, "px")
        };
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", containerAttrs, this.renderList(), this.renderLoadingSpinner(), this.renderCollapseAllBtn(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "m-tree__resize-handler",
        onMouseDown: this.addWidthChangeListener
      }));
    }
  }]);

  return ContentTree;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


ContentTree.propTypes = {
  items: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  loadMoreSubitems: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  currentLocationId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  subitemsLimit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  subitemsLoadLimit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  treeMaxDepth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  afterItemToggle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  onCollapseAllItems: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  onClickItem: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  userId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
};

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/content-tree/components/list-item/list.item.component.js":
/*!*************************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/content-tree/components/list-item/list.item.component.js ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_icon_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/icon/icon */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var ListItem = /*#__PURE__*/function (_Component) {
  _inherits(ListItem, _Component);

  var _super = _createSuper(ListItem);

  function ListItem(props) {
    var _this;

    _classCallCheck(this, ListItem);

    _this = _super.call(this, props);
    _this.toggleExpandedState = _this.toggleExpandedState.bind(_assertThisInitialized(_this));
    _this.cancelLoadingState = _this.cancelLoadingState.bind(_assertThisInitialized(_this));
    _this.loadMoreSubitems = _this.loadMoreSubitems.bind(_assertThisInitialized(_this));
    _this.handleAfterExpandedStateChange = _this.handleAfterExpandedStateChange.bind(_assertThisInitialized(_this));
    _this.sortedActions = _this.getSortedActions();
    _this.state = {
      isExpanded: !!props.subitems.length,
      isLoading: false
    };
    return _this;
  }

  _createClass(ListItem, [{
    key: "getSortedActions",
    value: function getSortedActions() {
      var itemActions = window.eZ.adminUiConfig.contentTreeWidget.itemActions;
      var actions = itemActions ? _toConsumableArray(itemActions) : [];
      return actions.sort(function (actionA, actionB) {
        return actionB.priority - actionA.priority;
      });
    }
  }, {
    key: "cancelLoadingState",
    value: function cancelLoadingState() {
      this.setState(function () {
        return {
          isLoading: false
        };
      });
    }
  }, {
    key: "toggleExpandedState",
    value: function toggleExpandedState() {
      var _this2 = this;

      var _this$props = this.props,
          path = _this$props.path,
          treeMaxDepth = _this$props.treeMaxDepth;
      var currentDepth = path.split(',').length - 1;

      if (currentDepth >= treeMaxDepth) {
        var notificationMessage = Translator.trans(
        /*@Desc("Cannot load sub-items for this Location because you reached max tree depth.")*/
        'expand_item.limit.message', {}, 'content_tree');
        window.eZ.helpers.notification.showWarningNotification(notificationMessage);
        return;
      }

      this.setState(function (state) {
        return {
          isExpanded: !state.isExpanded
        };
      }, function () {
        var _this2$props = _this2.props,
            afterItemToggle = _this2$props.afterItemToggle,
            path = _this2$props.path;
        afterItemToggle(path, _this2.state.isExpanded);

        _this2.handleAfterExpandedStateChange();
      });
    }
  }, {
    key: "handleAfterExpandedStateChange",
    value: function handleAfterExpandedStateChange() {
      var loadInitialItems = this.state.isExpanded && !this.props.subitems.length;

      if (loadInitialItems) {
        this.loadMoreSubitems();
      }
    }
  }, {
    key: "loadMoreSubitems",
    value: function loadMoreSubitems() {
      var _this3 = this;

      var _this$props2 = this.props,
          subitems = _this$props2.subitems,
          subitemsLimit = _this$props2.subitemsLimit;
      var subitemsLimitReached = subitems.length >= subitemsLimit;

      if (this.state.isLoading || subitemsLimitReached) {
        return;
      }

      var _this$props3 = this.props,
          path = _this$props3.path,
          locationId = _this$props3.locationId,
          subitemsLoadLimit = _this$props3.subitemsLoadLimit,
          loadMoreSubitems = _this$props3.loadMoreSubitems;
      this.setState(function () {
        return {
          isLoading: true
        };
      }, function () {
        return loadMoreSubitems({
          path: path,
          parentLocationId: locationId,
          offset: subitems.length,
          limit: subitemsLoadLimit
        }, _this3.cancelLoadingState);
      });
    }
  }, {
    key: "checkCanLoadMore",
    value: function checkCanLoadMore() {
      var _this$props4 = this.props,
          subitems = _this$props4.subitems,
          totalSubitemsCount = _this$props4.totalSubitemsCount;
      return subitems.length < totalSubitemsCount;
    }
  }, {
    key: "renderIcon",
    value: function renderIcon() {
      var _this$props5 = this.props,
          contentTypeIdentifier = _this$props5.contentTypeIdentifier,
          selected = _this$props5.selected,
          locationId = _this$props5.locationId;
      var iconAttrs = {
        extraClasses: "ez-icon--small ez-icon--".concat(selected ? 'primary' : 'dark')
      };

      if (!this.state.isLoading || this.props.subitems.length) {
        if (locationId === 1) {
          iconAttrs.customPath = eZ.helpers.contentType.getContentTypeIconUrl('folder');
        } else {
          iconAttrs.customPath = eZ.helpers.contentType.getContentTypeIconUrl(contentTypeIdentifier) || eZ.helpers.contentType.getContentTypeIconUrl('file');
        }
      } else {
        iconAttrs.name = 'spinner';
        iconAttrs.extraClasses = "".concat(iconAttrs.extraClasses, " ez-spin");
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "c-list-item__icon"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], iconAttrs));
    }
  }, {
    key: "renderLoadMoreBtn",
    value: function renderLoadMoreBtn() {
      var _this$props6 = this.props,
          subitems = _this$props6.subitems,
          subitemsLimit = _this$props6.subitemsLimit;
      var subitemsLimitReached = subitems.length >= subitemsLimit;

      if (!this.state.isExpanded || subitemsLimitReached || !this.checkCanLoadMore() || !subitems.length) {
        return null;
      }

      var isLoading = this.state.isLoading;
      var showMoreLabel = Translator.trans(
      /*@Desc("Show more")*/
      'show_more', {}, 'content_tree');
      var loadingMoreLabel = Translator.trans(
      /*@Desc("Loading more...")*/
      'loading_more', {}, 'content_tree');
      var btnLabel = isLoading ? loadingMoreLabel : showMoreLabel;
      var loadingSpinner = null;

      if (isLoading) {
        loadingSpinner = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
          name: "spinner",
          extraClasses: "ez-spin ez-icon--small c-list-item__load-more-btn-spinner"
        });
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        className: "c-list-item__load-more-btn btn ez-btn",
        onClick: this.loadMoreSubitems
      }, loadingSpinner, " ", btnLabel);
    }
  }, {
    key: "renderSubitemsLimitReachedInfo",
    value: function renderSubitemsLimitReachedInfo() {
      var _this$props7 = this.props,
          subitems = _this$props7.subitems,
          subitemsLimit = _this$props7.subitemsLimit;
      var subitemsLimitReached = subitems.length >= subitemsLimit;

      if (!this.state.isExpanded || !subitemsLimitReached) {
        return null;
      }

      var message = Translator.trans(
      /*@Desc("Loading limit reached")*/
      'show_more.limit_reached', {}, 'content_tree');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-list-item__load-more-limit-info"
      }, message);
    }
  }, {
    key: "renderItemLabel",
    value: function renderItemLabel() {
      var _this4 = this;

      var _this$props8 = this.props,
          totalSubitemsCount = _this$props8.totalSubitemsCount,
          href = _this$props8.href,
          name = _this$props8.name,
          selected = _this$props8.selected,
          locationId = _this$props8.locationId,
          onClick = _this$props8.onClick;

      if (locationId === 1) {
        return null;
      }

      var togglerClassName = 'c-list-item__toggler';
      var togglerAttrs = {
        className: togglerClassName,
        onClick: this.toggleExpandedState,
        hidden: !totalSubitemsCount,
        tabIndex: -1
      };

      if (selected) {
        togglerAttrs.className = "".concat(togglerAttrs.className, " ").concat(togglerClassName, "--light");
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-list-item__label"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", togglerAttrs), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "c-list-item__link",
        href: href,
        onClick: onClick
      }, this.renderIcon(), " ", name), this.sortedActions.map(function (action) {
        var Component = action.component;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _extends({
          key: action.id
        }, _this4.props));
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props9 = this.props,
          totalSubitemsCount = _this$props9.totalSubitemsCount,
          children = _this$props9.children,
          isInvisible = _this$props9.isInvisible,
          selected = _this$props9.selected;
      var itemClassName = 'c-list-item';
      var itemAttrs = {
        className: itemClassName
      };

      if (totalSubitemsCount) {
        itemAttrs.className = "".concat(itemAttrs.className, " ").concat(itemClassName, "--has-sub-items");
      }

      if (this.checkCanLoadMore()) {
        itemAttrs.className = "".concat(itemAttrs.className, " ").concat(itemClassName, "--can-load-more");
      }

      if (this.state.isExpanded) {
        itemAttrs.className = "".concat(itemAttrs.className, " ").concat(itemClassName, "--is-expanded");
      }

      if (isInvisible) {
        itemAttrs.className = "".concat(itemAttrs.className, " ").concat(itemClassName, "--is-hidden");
      }

      if (selected) {
        itemAttrs.className = "".concat(itemAttrs.className, " ").concat(itemClassName, "--is-selected");
      }

      if (this.props.isRootItem) {
        itemAttrs.className = "".concat(itemAttrs.className, " ").concat(itemClassName, "--is-root-item");
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", itemAttrs, this.renderItemLabel(), children, this.renderLoadMoreBtn(), this.renderSubitemsLimitReachedInfo());
    }
  }]);

  return ListItem;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

ListItem.propTypes = {
  path: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  href: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  contentTypeIdentifier: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  totalSubitemsCount: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  subitems: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element,
  hidden: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  isContainer: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  selected: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  locationId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  isInvisible: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  loadMoreSubitems: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  subitemsLimit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  subitemsLoadLimit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  treeMaxDepth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  afterItemToggle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  isRootItem: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
ListItem.defaultProps = {
  hidden: false,
  isRootItem: false,
  onClick: function onClick() {}
};
/* harmony default export */ __webpack_exports__["default"] = (ListItem);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/content-tree/components/list/list.component.js":
/*!***************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/content-tree/components/list/list.component.js ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _list_item_list_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../list-item/list.item.component */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/content-tree/components/list-item/list.item.component.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var List = function List(_ref) {
  var items = _ref.items,
      loadMoreSubitems = _ref.loadMoreSubitems,
      currentLocationId = _ref.currentLocationId,
      path = _ref.path,
      subitemsLoadLimit = _ref.subitemsLoadLimit,
      subitemsLimit = _ref.subitemsLimit,
      treeMaxDepth = _ref.treeMaxDepth,
      afterItemToggle = _ref.afterItemToggle,
      isRoot = _ref.isRoot,
      onClickItem = _ref.onClickItem;
  var commonAttrs = {
    loadMoreSubitems: loadMoreSubitems,
    subitemsLoadLimit: subitemsLoadLimit,
    subitemsLimit: subitemsLimit,
    treeMaxDepth: treeMaxDepth,
    afterItemToggle: afterItemToggle,
    onClickItem: onClickItem
  };

  var listAttrs = _objectSpread(_objectSpread({}, commonAttrs), {}, {
    currentLocationId: currentLocationId
  });

  var listItemAttrs = commonAttrs;

  var renderNoSubitemMessage = function renderNoSubitemMessage() {
    var rootLocation = items[0];
    var isRootLoaded = rootLocation;
    var noSubitemsMessage = Translator.trans(
    /*@Desc("This Location has no sub-items")*/
    'no_subitems', {}, 'content_tree');

    if (!isRoot || !isRootLoaded || rootLocation.subitems && rootLocation.subitems.length) {
      return;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "c-list__no-items-message"
    }, noSubitemsMessage);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "c-list"
  }, items.map(function (item) {
    var hasPreviousPath = path && path.length;
    var locationHref = window.Routing.generate('_ez_content_view', {
      contentId: item.contentId,
      locationId: item.locationId
    });
    var itemPath = "".concat(hasPreviousPath ? path + ',' : '').concat(item.locationId);
    var subitems = item.subitems;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, item, listItemAttrs, {
      key: item.locationId,
      selected: item.locationId === currentLocationId,
      href: locationHref,
      isRootItem: isRoot,
      onClick: onClickItem.bind(null, item),
      path: itemPath
    }), subitems.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(List, _extends({
      path: itemPath,
      items: subitems,
      isRoot: false
    }, listAttrs)) : renderNoSubitemMessage());
  }));
};

List.propTypes = {
  path: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  items: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  loadMoreSubitems: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  currentLocationId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  subitemsLimit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  subitemsLoadLimit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  treeMaxDepth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  afterItemToggle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  isRoot: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  onClickItem: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
List.defaultProps = {
  isRoot: false,
  onClickItem: function onClickItem() {}
};
/* harmony default export */ __webpack_exports__["default"] = (List);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/content-tree/content.tree.module.js":
/*!****************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/content-tree/content.tree.module.js ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContentTreeModule; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_content_tree_content_tree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/content-tree/content.tree */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/content-tree/components/content-tree/content.tree.js");
/* harmony import */ var _services_content_tree_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/content.tree.service */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/content-tree/services/content.tree.service.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var KEY_CONTENT_TREE_SUBTREE = 'ez-content-tree-subtrees';

var ContentTreeModule = /*#__PURE__*/function (_Component) {
  _inherits(ContentTreeModule, _Component);

  var _super = _createSuper(ContentTreeModule);

  function ContentTreeModule(props) {
    var _this;

    _classCallCheck(this, ContentTreeModule);

    _this = _super.call(this, props);
    _this.setInitialItemsState = _this.setInitialItemsState.bind(_assertThisInitialized(_this));
    _this.loadMoreSubitems = _this.loadMoreSubitems.bind(_assertThisInitialized(_this));
    _this.updateSubtreeAfterItemToggle = _this.updateSubtreeAfterItemToggle.bind(_assertThisInitialized(_this));
    _this.handleCollapseAllItems = _this.handleCollapseAllItems.bind(_assertThisInitialized(_this));
    _this.limitSubitemsInSubtree = _this.limitSubitemsInSubtree.bind(_assertThisInitialized(_this));
    _this.refreshContentTree = _this.refreshContentTree.bind(_assertThisInitialized(_this));
    _this.getLoadSubtreeParams = _this.getLoadSubtreeParams.bind(_assertThisInitialized(_this));

    try {
      var savedSubtree = _this.readSubtree();

      _this.items = props.preloadedLocations;
      _this.subtree = savedSubtree ? savedSubtree : _this.generateInitialSubtree();

      _this.expandCurrentLocationInSubtree();

      _this.clipTooDeepSubtreeBranches(_this.subtree[0], props.treeMaxDepth - 1);

      _this.subtree[0].children.forEach(_this.limitSubitemsInSubtree);

      _this.saveSubtree();
    } catch (error) {
      _this.items = [];
      _this.subtree = _this.generateInitialSubtree();

      _this.saveSubtree();
    }

    return _this;
  }

  _createClass(ContentTreeModule, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      document.body.addEventListener('ez-content-tree-refresh', this.refreshContentTree, false);

      if (this.items.length) {
        this.subtree = this.generateSubtree(this.items, true);
        this.saveSubtree();
        return;
      }

      Object(_services_content_tree_service__WEBPACK_IMPORTED_MODULE_3__["loadSubtree"])(this.getLoadSubtreeParams(), function (loadedSubtree) {
        _this2.setInitialItemsState(loadedSubtree[0]);
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this3 = this;

      if (prevProps.sort.sortClause !== this.props.sort.sortClause || prevProps.sort.sortOrder !== this.props.sort.sortOrder) {
        Object(_services_content_tree_service__WEBPACK_IMPORTED_MODULE_3__["loadSubtree"])(this.getLoadSubtreeParams(), function (loadedSubtree) {
          _this3.setInitialItemsState(loadedSubtree[0]);
        });
      }
    }
  }, {
    key: "setInitialItemsState",
    value: function setInitialItemsState(location) {
      this.items = [location];
      this.subtree = this.generateSubtree(this.items, true);
      this.saveSubtree();
      this.forceUpdate();
    }
  }, {
    key: "loadMoreSubitems",
    value: function loadMoreSubitems(_ref, successCallback) {
      var parentLocationId = _ref.parentLocationId,
          offset = _ref.offset,
          limit = _ref.limit,
          path = _ref.path;
      Object(_services_content_tree_service__WEBPACK_IMPORTED_MODULE_3__["loadLocationItems"])(this.props.restInfo, parentLocationId, this.updateLocationsStateAfterLoadingMoreItems.bind(this, path, successCallback), limit, offset);
    }
  }, {
    key: "refreshContentTree",
    value: function refreshContentTree() {
      var _this4 = this;

      this.items = [];
      this.forceUpdate();
      Object(_services_content_tree_service__WEBPACK_IMPORTED_MODULE_3__["loadSubtree"])(this.getLoadSubtreeParams(), function (loadedSubtree) {
        _this4.setInitialItemsState(loadedSubtree[0]);
      });
    }
  }, {
    key: "updateLocationsStateAfterLoadingMoreItems",
    value: function updateLocationsStateAfterLoadingMoreItems(path, successCallback, location) {
      var item = this.findItem(this.items, path.split(','));

      if (!item) {
        return;
      }

      item.subitems = [].concat(_toConsumableArray(item.subitems), _toConsumableArray(location.subitems));
      this.updateSubtreeAfterLoadMoreItems(path);
      successCallback();
      this.forceUpdate();
    }
  }, {
    key: "updateSubtreeAfterLoadMoreItems",
    value: function updateSubtreeAfterLoadMoreItems(path) {
      var item = this.findItem(this.items, path.split(','));
      this.updateItemInSubtree(this.subtree[0], item, path.split(','));
      this.saveSubtree();
    }
  }, {
    key: "updateSubtreeAfterItemToggle",
    value: function updateSubtreeAfterItemToggle(path, isExpanded) {
      var item = this.findItem(this.items, path.split(','));

      if (isExpanded) {
        this.addItemToSubtree(this.subtree[0], item, path.split(','));
      } else {
        this.removeItemFromSubtree(this.subtree[0], item, path.split(','));
      }

      this.saveSubtree();
      this.props.afterItemToggle(item, isExpanded);
    }
  }, {
    key: "addItemToSubtree",
    value: function addItemToSubtree(subtree, item, path) {
      var parentSubtree = this.findParentSubtree(subtree, path);

      if (!parentSubtree) {
        return;
      }

      var _this$props = this.props,
          subitemsLoadLimit = _this$props.subitemsLoadLimit,
          subitemsLimit = _this$props.subitemsLimit;
      var limit = Math.ceil(item.subitems.length / subitemsLoadLimit) * subitemsLoadLimit;
      parentSubtree.children.push({
        '_media-type': 'application/vnd.ez.api.ContentTreeLoadSubtreeRequestNode',
        locationId: item.locationId,
        limit: Math.min(subitemsLimit, limit),
        offset: 0,
        children: []
      });
    }
  }, {
    key: "removeItemFromSubtree",
    value: function removeItemFromSubtree(subtree, item, path) {
      var parentSubtree = this.findParentSubtree(subtree, path);

      if (!parentSubtree) {
        return;
      }

      var index = parentSubtree.children.findIndex(function (element) {
        return element.locationId === item.locationId;
      });

      if (index > -1) {
        parentSubtree.children.splice(index, 1);
      }
    }
  }, {
    key: "updateItemInSubtree",
    value: function updateItemInSubtree(subtree, item, path) {
      var parentSubtree = this.findParentSubtree(subtree, path);

      if (!parentSubtree) {
        return;
      }

      var index = parentSubtree.children.findIndex(function (element) {
        return element.locationId === item.locationId;
      });

      if (index > -1) {
        parentSubtree.children[index].limit = item.subitems.length;
      }
    }
  }, {
    key: "readSubtree",
    value: function readSubtree() {
      var readSubtree = this.props.readSubtree;

      if (typeof readSubtree === 'function') {
        return readSubtree();
      }

      var _this$props2 = this.props,
          rootLocationId = _this$props2.rootLocationId,
          userId = _this$props2.userId;
      var savedSubtrees = localStorage.getItem(KEY_CONTENT_TREE_SUBTREE);
      var subtrees = savedSubtrees ? JSON.parse(savedSubtrees) : null;
      var userSubtrees = subtrees ? subtrees[userId] : null;
      var savedSubtree = userSubtrees ? userSubtrees[rootLocationId] : null;
      var subtree = savedSubtree ? JSON.parse(savedSubtree) : null;
      return subtree;
    }
  }, {
    key: "saveSubtree",
    value: function saveSubtree() {
      var _this$props3 = this.props,
          rootLocationId = _this$props3.rootLocationId,
          userId = _this$props3.userId;
      var savedSubtreesStringified = localStorage.getItem(KEY_CONTENT_TREE_SUBTREE);
      var subtrees = savedSubtreesStringified ? JSON.parse(savedSubtreesStringified) : {};

      if (!subtrees[userId]) {
        subtrees[userId] = {};
      }

      subtrees[userId][rootLocationId] = JSON.stringify(this.subtree);
      localStorage.setItem(KEY_CONTENT_TREE_SUBTREE, JSON.stringify(subtrees));
    }
  }, {
    key: "findParentSubtree",
    value: function findParentSubtree(subtree, path) {
      if (path.length < 2) {
        return;
      }

      path.shift();
      path.pop();
      return path.reduce(function (subtreeChild, locationId) {
        return subtreeChild.children.find(function (element) {
          return element.locationId === parseInt(locationId, 10);
        });
      }, subtree);
    }
  }, {
    key: "expandCurrentLocationInSubtree",
    value: function expandCurrentLocationInSubtree() {
      var _this$props4 = this.props,
          rootLocationId = _this$props4.rootLocationId,
          currentLocationPath = _this$props4.currentLocationPath;
      var path = currentLocationPath.split('/').filter(function (id) {
        return !!id;
      });
      var rootLocationIdIndex = path.findIndex(function (element) {
        return parseInt(element, 10) === rootLocationId;
      });

      if (rootLocationIdIndex === -1) {
        return;
      }

      var pathStartingAfterRootLocation = path.slice(rootLocationIdIndex - path.length + 1);
      var pathWithoutLeaf = pathStartingAfterRootLocation.slice(0, pathStartingAfterRootLocation.length - 1);
      this.expandPathInSubtree(this.subtree[0], pathWithoutLeaf);
    }
  }, {
    key: "expandPathInSubtree",
    value: function expandPathInSubtree(subtree, path) {
      if (!path.length) {
        return;
      }

      var locationId = parseInt(path[0], 10);
      var nextSubtree = subtree.children.find(function (element) {
        return element.locationId === locationId;
      });

      if (!nextSubtree) {
        nextSubtree = {
          '_media-type': 'application/vnd.ez.api.ContentTreeLoadSubtreeRequestNode',
          locationId: locationId,
          limit: this.props.subitemsLimit,
          offset: 0,
          children: []
        };
        subtree.children.push(nextSubtree);
      }

      path.shift();
      this.expandPathInSubtree(nextSubtree, path);
    }
  }, {
    key: "clipTooDeepSubtreeBranches",
    value: function clipTooDeepSubtreeBranches(subtree, maxDepth) {
      var _this5 = this;

      if (maxDepth <= 0) {
        subtree.children = [];
        return;
      }

      subtree.children.forEach(function (subtreeChild) {
        return _this5.clipTooDeepSubtreeBranches(subtreeChild, maxDepth - 1);
      });
    }
  }, {
    key: "limitSubitemsInSubtree",
    value: function limitSubitemsInSubtree(subtree) {
      subtree.limit = Math.min(this.props.subitemsLimit, subtree.limit);
      subtree.children.forEach(this.limitSubitemsInSubtree);
    }
  }, {
    key: "generateInitialSubtree",
    value: function generateInitialSubtree() {
      return [{
        '_media-type': 'application/vnd.ez.api.ContentTreeLoadSubtreeRequestNode',
        locationId: this.props.rootLocationId,
        limit: this.props.subitemsLoadLimit,
        offset: 0,
        children: []
      }];
    }
  }, {
    key: "generateSubtree",
    value: function generateSubtree(items, isRoot) {
      var itemsWithoutLeafs = [];
      var _this$props5 = this.props,
          subitemsLoadLimit = _this$props5.subitemsLoadLimit,
          subitemsLimit = _this$props5.subitemsLimit;

      var _iterator = _createForOfIteratorHelper(items),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;
          var subitemsCount = item.subitems.length;
          var isLeaf = !subitemsCount;

          if (!isLeaf || isRoot) {
            var limit = subitemsCount ? Math.ceil(subitemsCount / subitemsLoadLimit) * subitemsLoadLimit : subitemsLoadLimit;
            itemsWithoutLeafs.push({
              '_media-type': 'application/vnd.ez.api.ContentTreeLoadSubtreeRequestNode',
              locationId: item.locationId,
              limit: Math.min(subitemsLimit, limit),
              offset: 0,
              children: this.generateSubtree(item.subitems, false)
            });
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return itemsWithoutLeafs;
    }
  }, {
    key: "findItem",
    value: function findItem(items, path) {
      var isLast = path.length === 1;
      var item = items.find(function (element) {
        return element.locationId === parseInt(path[0], 10);
      });

      if (!item) {
        return null;
      }

      if (isLast) {
        return item;
      }

      if (!(item.hasOwnProperty('subitems') && Array.isArray(item.subitems))) {
        return null;
      }

      path.shift();
      return this.findItem(item.subitems, path);
    }
  }, {
    key: "getCurrentLocationId",
    value: function getCurrentLocationId() {
      var currentLocationIdString = this.props.currentLocationPath.split('/').filter(function (id) {
        return !!id;
      }).pop();
      return parseInt(currentLocationIdString, 10);
    }
  }, {
    key: "handleCollapseAllItems",
    value: function handleCollapseAllItems() {
      var _this6 = this;

      this.items = [];
      this.forceUpdate();
      this.subtree = this.generateInitialSubtree();
      this.saveSubtree();
      Object(_services_content_tree_service__WEBPACK_IMPORTED_MODULE_3__["loadSubtree"])(this.getLoadSubtreeParams(), function (loadedSubtree) {
        _this6.setInitialItemsState(loadedSubtree[0]);
      });
    }
  }, {
    key: "getLoadSubtreeParams",
    value: function getLoadSubtreeParams() {
      return {
        token: this.props.restInfo.token,
        siteaccess: this.props.restInfo.siteaccess,
        subtree: this.subtree,
        sortClause: this.props.sort.sortClause,
        sortOrder: this.props.sort.sortOrder
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props6 = this.props,
          onClickItem = _this$props6.onClickItem,
          subitemsLimit = _this$props6.subitemsLimit,
          subitemsLoadLimit = _this$props6.subitemsLoadLimit,
          treeMaxDepth = _this$props6.treeMaxDepth,
          userId = _this$props6.userId;
      var attrs = {
        items: this.items,
        currentLocationId: this.getCurrentLocationId(),
        subitemsLimit: subitemsLimit,
        subitemsLoadLimit: subitemsLoadLimit,
        treeMaxDepth: treeMaxDepth,
        loadMoreSubitems: this.loadMoreSubitems,
        afterItemToggle: this.updateSubtreeAfterItemToggle,
        onCollapseAllItems: this.handleCollapseAllItems,
        onClickItem: onClickItem,
        userId: userId
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_content_tree_content_tree__WEBPACK_IMPORTED_MODULE_2__["default"], attrs);
    }
  }]);

  return ContentTreeModule;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


eZ.addConfig('modules.ContentTree', ContentTreeModule);
ContentTreeModule.propTypes = {
  rootLocationId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  currentLocationPath: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  userId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  preloadedLocations: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object),
  subitemsLimit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  subitemsLoadLimit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  treeMaxDepth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  restInfo: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    token: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    siteaccess: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
  }).isRequired,
  onClickItem: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  readSubtree: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  afterItemToggle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  sort: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    sortClause: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    sortOrder: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  })
};
ContentTreeModule.defaultProps = {
  preloadedLocations: [],
  rootLocationId: window.eZ.adminUiConfig.contentTree.treeRootLocationId,
  subitemsLimit: window.eZ.adminUiConfig.contentTree.childrenLoadMaxLimit,
  subitemsLoadLimit: window.eZ.adminUiConfig.contentTree.loadMoreLimit,
  treeMaxDepth: window.eZ.adminUiConfig.contentTree.treeMaxDepth,
  afterItemToggle: function afterItemToggle() {},
  sort: {}
};

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/content-tree/services/content.tree.service.js":
/*!**************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/content-tree/services/content.tree.service.js ***!
  \**************************************************************************************************************************/
/*! exports provided: loadLocationItems, loadSubtree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadLocationItems", function() { return loadLocationItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadSubtree", function() { return loadSubtree; });
/* harmony import */ var _common_helpers_request_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/helpers/request.helper */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/request.helper.js");
/* harmony import */ var _common_services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/services/notification.service */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/services/notification.service.js");


var ENDPOINT_LOAD_SUBITEMS = '/api/ezp/v2/location/tree/load-subitems';
var ENDPOINT_LOAD_SUBTREE = '/api/ezp/v2/location/tree/load-subtree';
var loadLocationItems = function loadLocationItems(_ref, parentLocationId, callback) {
  var siteaccess = _ref.siteaccess;
  var limit = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 50;
  var offset = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var request = new Request("".concat(ENDPOINT_LOAD_SUBITEMS, "/").concat(parentLocationId, "/").concat(limit, "/").concat(offset), {
    method: 'GET',
    mode: 'same-origin',
    credentials: 'same-origin',
    headers: {
      Accept: 'application/vnd.ez.api.ContentTreeNode+json',
      'X-Siteaccess': siteaccess
    }
  });
  fetch(request).then(_common_helpers_request_helper__WEBPACK_IMPORTED_MODULE_0__["handleRequestResponse"]).then(function (data) {
    var location = data.ContentTreeNode;
    location.children = location.children.map(mapChildrenToSubitems);
    return mapChildrenToSubitems(location);
  }).then(callback)["catch"](_common_services_notification_service__WEBPACK_IMPORTED_MODULE_1__["showErrorNotification"]);
};
var loadSubtree = function loadSubtree(_ref2, callback) {
  var token = _ref2.token,
      siteaccess = _ref2.siteaccess,
      subtree = _ref2.subtree,
      sortClause = _ref2.sortClause,
      sortOrder = _ref2.sortOrder;
  var path = ENDPOINT_LOAD_SUBTREE;

  if (sortClause && sortOrder) {
    path += "?sortClause=".concat(sortClause, "&sortOrder=").concat(sortOrder);
  }

  var request = new Request(path, {
    method: 'POST',
    mode: 'same-origin',
    credentials: 'same-origin',
    body: JSON.stringify({
      LoadSubtreeRequest: {
        '_media-type': 'application/vnd.ez.api.ContentTreeLoadSubtreeRequest',
        nodes: subtree
      }
    }),
    headers: {
      Accept: 'application/vnd.ez.api.ContentTreeRoot+json',
      'Content-Type': 'application/vnd.ez.api.ContentTreeLoadSubtreeRequest+json',
      'X-Siteaccess': siteaccess,
      'X-CSRF-Token': token
    }
  });
  fetch(request).then(_common_helpers_request_helper__WEBPACK_IMPORTED_MODULE_0__["handleRequestResponse"]).then(function (data) {
    var loadedSubtree = data.ContentTreeRoot.ContentTreeNodeList;
    return mapChildrenToSubitemsDeep(loadedSubtree);
  }).then(callback)["catch"](_common_services_notification_service__WEBPACK_IMPORTED_MODULE_1__["showErrorNotification"]);
};

var mapChildrenToSubitemsDeep = function mapChildrenToSubitemsDeep(tree) {
  return tree.map(function (subtree) {
    mapChildrenToSubitems(subtree);
    subtree.subitems = mapChildrenToSubitemsDeep(subtree.subitems);
    return subtree;
  });
};

var mapChildrenToSubitems = function mapChildrenToSubitems(location) {
  location.totalSubitemsCount = location.totalChildrenCount;
  location.subitems = location.children;
  delete location.totalChildrenCount;
  delete location.children;
  delete location.displayLimit;
  return location;
};

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/bookmarks.tab.module.js":
/*!************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/bookmarks.tab.module.js ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_tab_tab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/tab/tab */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/tab/tab.js");
/* harmony import */ var _components_bookmarks_list_bookmarks_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/bookmarks-list/bookmarks.list */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/bookmarks-list/bookmarks.list.js");
/* harmony import */ var _components_grid_view_grid_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/grid-view/grid.view */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/grid-view/grid.view.js");
/* harmony import */ var _components_finder_finder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/finder/finder */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/finder/finder.js");
/* harmony import */ var _components_tree_view_tree_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/tree-view/tree.view */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/tree-view/tree.view.js");
/* harmony import */ var _universal_discovery_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./universal.discovery.module */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js");
/* harmony import */ var _services_universal_discovery_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/universal.discovery.service */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/services/universal.discovery.service.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var BookmarksTabModule = function BookmarksTabModule() {
  var restInfo = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_6__["RestInfoContext"]);
  var tabsConfig = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_6__["TabsConfigContext"]);

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_6__["CurrentViewContext"]),
      _useContext2 = _slicedToArray(_useContext, 2),
      currentView = _useContext2[0],
      setCurrentView = _useContext2[1];

  var _useContext3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_6__["MarkedLocationIdContext"]),
      _useContext4 = _slicedToArray(_useContext3, 2),
      markedLocationId = _useContext4[0],
      setMarkedLocationId = _useContext4[1];

  var _useContext5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_6__["SortingContext"]),
      _useContext6 = _slicedToArray(_useContext5, 2),
      sorting = _useContext6[0],
      setSorting = _useContext6[1];

  var _useContext7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_6__["SortOrderContext"]),
      _useContext8 = _slicedToArray(_useContext7, 2),
      sortOrder = _useContext8[0],
      setSortOrder = _useContext8[1];

  var rootLocationId = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_6__["RootLocationIdContext"]);

  var _useContext9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_6__["LoadedLocationsMapContext"]),
      _useContext10 = _slicedToArray(_useContext9, 2),
      loadedLocationsMap = _useContext10[0],
      dispatchLoadedLocationsAction = _useContext10[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      bookmarkedLocationMarked = _useState2[0],
      setBookmarkedLocationMarked = _useState2[1];

  var views = {
    grid: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_grid_view_grid_view__WEBPACK_IMPORTED_MODULE_3__["default"], {
      itemsPerPage: tabsConfig.bookmarks.itemsPerPage
    }),
    finder: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_finder_finder__WEBPACK_IMPORTED_MODULE_4__["default"], {
      itemsPerPage: tabsConfig.bookmarks.itemsPerPage
    }),
    tree: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_tree_view_tree_view__WEBPACK_IMPORTED_MODULE_5__["default"], {
      itemsPerPage: tabsConfig.bookmarks.itemsPerPage
    })
  };

  var renderBrowseLocations = function renderBrowseLocations() {
    if (!markedLocationId) {
      return null;
    }

    return views[currentView];
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!bookmarkedLocationMarked) {
      return;
    }

    setMarkedLocationId(bookmarkedLocationMarked);
    Object(_services_universal_discovery_service__WEBPACK_IMPORTED_MODULE_7__["loadAccordionData"])(_objectSpread(_objectSpread({}, restInfo), {}, {
      parentLocationId: bookmarkedLocationMarked,
      sortClause: sorting,
      sortOrder: sortOrder,
      gridView: currentView === 'grid',
      rootLocationId: rootLocationId
    }), function (locationsMap) {
      dispatchLoadedLocationsAction({
        type: 'SET_LOCATIONS',
        data: locationsMap
      });
    });
  }, [bookmarkedLocationMarked, currentView, restInfo, dispatchLoadedLocationsAction, setMarkedLocationId]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (markedLocationId !== bookmarkedLocationMarked) {
      dispatchLoadedLocationsAction({
        type: 'CUT_LOCATIONS',
        locationId: markedLocationId
      });
      setBookmarkedLocationMarked(null);
    }
  }, [markedLocationId, setBookmarkedLocationMarked, bookmarkedLocationMarked, dispatchLoadedLocationsAction]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "m-bookmarks-tab"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_tab_tab__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_bookmarks_list_bookmarks_list__WEBPACK_IMPORTED_MODULE_2__["default"], {
    itemsPerPage: tabsConfig.bookmarks.itemsPerPage,
    setBookmarkedLocationMarked: setBookmarkedLocationMarked
  }), renderBrowseLocations()));
};

eZ.addConfig('adminUiConfig.universalDiscoveryWidget.tabs', [{
  id: 'bookmarks',
  component: BookmarksTabModule,
  label: Translator.trans(
  /*@Desc("Bookmarks")*/
  'bookmarks.label', {}, 'universal_discovery_widget'),
  icon: window.eZ.helpers.icon.getIconPath('bookmark')
}], true);
/* harmony default export */ __webpack_exports__["default"] = (BookmarksTabModule);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/browse.tab.module.js":
/*!*********************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/browse.tab.module.js ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_tab_tab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/tab/tab */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/tab/tab.js");
/* harmony import */ var _components_grid_view_grid_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/grid-view/grid.view */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/grid-view/grid.view.js");
/* harmony import */ var _components_finder_finder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/finder/finder */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/finder/finder.js");
/* harmony import */ var _components_tree_view_tree_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/tree-view/tree.view */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/tree-view/tree.view.js");
/* harmony import */ var _universal_discovery_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./universal.discovery.module */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var BrowseTabModule = function BrowseTabModule() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_5__["CurrentViewContext"]),
      _useContext2 = _slicedToArray(_useContext, 2),
      currentView = _useContext2[0],
      setCurrentView = _useContext2[1];

  var tabsConfig = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_5__["TabsConfigContext"]);
  var views = {
    grid: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_grid_view_grid_view__WEBPACK_IMPORTED_MODULE_2__["default"], {
      itemsPerPage: tabsConfig.browse.itemsPerPage
    }),
    finder: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_finder_finder__WEBPACK_IMPORTED_MODULE_3__["default"], {
      itemsPerPage: tabsConfig.browse.itemsPerPage
    }),
    tree: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_tree_view_tree_view__WEBPACK_IMPORTED_MODULE_4__["default"], {
      itemsPerPage: tabsConfig.browse.itemsPerPage
    })
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "m-browse-tab"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_tab_tab__WEBPACK_IMPORTED_MODULE_1__["default"], null, views[currentView]));
};

eZ.addConfig('adminUiConfig.universalDiscoveryWidget.tabs', [{
  id: 'browse',
  component: BrowseTabModule,
  label: Translator.trans(
  /*@Desc("Browse")*/
  'browse.label', {}, 'universal_discovery_widget'),
  icon: window.eZ.helpers.icon.getIconPath('browse')
}], true);
/* harmony default export */ __webpack_exports__["default"] = (BrowseTabModule);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/bookmarks-list/bookmarks.list.js":
/*!********************************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/bookmarks-list/bookmarks.list.js ***!
  \********************************************************************************************************************************************/
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
/* harmony import */ var _hooks_useLoadBookmarksFetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useLoadBookmarksFetch */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/hooks/useLoadBookmarksFetch.js");
/* harmony import */ var _universal_discovery_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../universal.discovery.module */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var SCROLL_OFFSET = 200;

var BookmarksList = function BookmarksList(_ref) {
  var setBookmarkedLocationMarked = _ref.setBookmarkedLocationMarked,
      itemsPerPage = _ref.itemsPerPage;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState2 = _slicedToArray(_useState, 2),
      offset = _useState2[0],
      setOffset = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState4 = _slicedToArray(_useState3, 2),
      bookmarks = _useState4[0],
      setBookmarks = _useState4[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_5__["MarkedLocationIdContext"]),
      _useContext2 = _slicedToArray(_useContext, 2),
      markedLocationId = _useContext2[0],
      setMarkedLocationId = _useContext2[1];

  var _useContext3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_5__["LoadedLocationsMapContext"]),
      _useContext4 = _slicedToArray(_useContext3, 2),
      loadedLocationsMap = _useContext4[0],
      dispatchLoadedLocationsAction = _useContext4[1];

  var _useContext5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_5__["SelectedLocationsContext"]),
      _useContext6 = _slicedToArray(_useContext5, 2),
      selectedLocations = _useContext6[0],
      dispatchSelectedLocationsAction = _useContext6[1];

  var _useContext7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_5__["MultipleConfigContext"]),
      _useContext8 = _slicedToArray(_useContext7, 2),
      multiple = _useContext8[0],
      multipleItemsLimit = _useContext8[1];

  var allowedContentTypes = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_5__["AllowedContentTypesContext"]);
  var contentTypesMap = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_5__["ContentTypesMapContext"]);
  var containersOnly = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_5__["ContainersOnlyContext"]);

  var _useLoadBookmarksFetc = Object(_hooks_useLoadBookmarksFetch__WEBPACK_IMPORTED_MODULE_4__["useLoadBookmarksFetch"])(itemsPerPage, offset),
      _useLoadBookmarksFetc2 = _slicedToArray(_useLoadBookmarksFetc, 2),
      data = _useLoadBookmarksFetc2[0],
      isLoading = _useLoadBookmarksFetc2[1];

  var loadMore = function loadMore(_ref2) {
    var target = _ref2.target;
    var areAllItemsLoaded = bookmarks.length >= data.count;
    var isOffsetReached = target.scrollHeight - target.clientHeight - target.scrollTop < SCROLL_OFFSET;

    if (areAllItemsLoaded || !isOffsetReached || isLoading) {
      return;
    }

    setOffset(offset + itemsPerPage);
  };

  var renderLoadingSpinner = function renderLoadingSpinner() {
    if (!isLoading) {
      return null;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "c-bookmarks-list__spinner-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
      name: "spinner",
      extraClasses: "m-sub-items__spinner ez-icon--medium ez-spin"
    }));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (isLoading) {
      return;
    }

    setBookmarks(function (prevState) {
      return [].concat(_toConsumableArray(prevState), _toConsumableArray(data.items));
    });
  }, [data.items, isLoading]);

  if (!bookmarks.length) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-bookmarks-list",
    onScroll: loadMore
  }, bookmarks.map(function (bookmark) {
    var isMarked = bookmark.id === markedLocationId;
    var contentTypeInfo = contentTypesMap[bookmark.ContentInfo.Content.ContentType._href];
    var isContainer = contentTypeInfo.isContainer;
    var isNotSelectable = containersOnly && !isContainer || allowedContentTypes && !allowedContentTypes.includes(contentTypeInfo.identifier);
    var className = Object(_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__["createCssClassNames"])({
      'c-bookmarks-list__item': true,
      'c-bookmarks-list__item--marked': isMarked,
      'c-bookmarks-list__item--not-selectable': isNotSelectable
    });

    var markLocation = function markLocation() {
      if (isMarked) {
        return;
      }

      dispatchLoadedLocationsAction({
        type: 'CLEAR_LOCATIONS'
      });
      setBookmarkedLocationMarked(bookmark.id);

      if (!multiple && !isNotSelectable) {
        dispatchSelectedLocationsAction({
          type: 'CLEAR_SELECTED_LOCATIONS'
        });
        dispatchSelectedLocationsAction({
          type: 'ADD_SELECTED_LOCATION',
          location: bookmark
        });
      }
    };

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: bookmark.id,
      className: className,
      onClick: markLocation
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
      extraClasses: "ez-icon--small",
      customPath: contentTypeInfo.thumbnail
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "c-bookmarks-list__item-name"
    }, bookmark.ContentInfo.Content.TranslatedName));
  }), renderLoadingSpinner());
};

BookmarksList.propTypes = {
  setBookmarkedLocationMarked: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  itemsPerPage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
};
BookmarksList.defaultProps = {
  itemsPerPage: 50
};
/* harmony default export */ __webpack_exports__["default"] = (BookmarksList);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/breadcrumbs/breadcrumbs.js":
/*!**************************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/breadcrumbs/breadcrumbs.js ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_icon_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/icon/icon */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/helpers/css.class.names */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _universal_discovery_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../universal.discovery.module */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js");
var _this = undefined;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var Breadcrumbs = function Breadcrumbs() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_3__["LoadedLocationsMapContext"]),
      _useContext2 = _slicedToArray(_useContext, 2),
      loadedLocationsMap = _useContext2[0],
      dispatchLoadedLocationsAction = _useContext2[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      hiddenListVisible = _useState2[0],
      setHiddenListVisible = _useState2[1];

  var _useMemo = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return loadedLocationsMap.reduce(function (splittedItems, loadedLocation, index) {
      if (loadedLocationsMap.length - 3 <= index) {
        splittedItems.visibleItems.push(loadedLocation);
      } else {
        splittedItems.hiddenItems.push(loadedLocation);
      }

      return splittedItems;
    }, {
      visibleItems: [],
      hiddenItems: []
    });
  }, [loadedLocationsMap]),
      visibleItems = _useMemo.visibleItems,
      hiddenItems = _useMemo.hiddenItems;

  var goToLocation = function goToLocation(locationId) {
    var itemIndex = loadedLocationsMap.findIndex(function (data) {
      return data.parentLocationId === locationId;
    });
    var updatedLoadedLocations = loadedLocationsMap.slice(0, itemIndex + 1);
    updatedLoadedLocations[updatedLoadedLocations.length - 1].subitems = [];
    dispatchLoadedLocationsAction({
      type: 'SET_LOCATIONS',
      data: updatedLoadedLocations
    });
  };

  var toggleHiddenListVisible = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setHiddenListVisible(!hiddenListVisible);
  }, [setHiddenListVisible, hiddenListVisible]);

  var renderHiddenList = function renderHiddenList() {
    if (!hiddenItems.length) {
      return null;
    }

    var hiddenListClassNames = Object(_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__["createCssClassNames"])({
      'c-breadcrumbs__hidden-list': true,
      'c-breadcrumbs__hidden-list--visible': hiddenListVisible
    });
    var toggleClassNames = Object(_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__["createCssClassNames"])({
      'c-breadcrumbs__hidden-list-toggler': true,
      'c-breadcrumbs__hidden-list-toggler--active': hiddenListVisible
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "c-breadcrumbs__hidden-list-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: toggleClassNames,
      onClick: toggleHiddenListVisible
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
      name: "options",
      extraClasses: "ez-icon--small-medium"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: hiddenListClassNames
    }, hiddenItems.map(function (item) {
      var locationId = item.parentLocationId;
      var locationName = locationId === 1 ? Translator.trans(
      /*@Desc("Root Location")*/
      'breadcrumbs.root_location', {}, 'universal_discovery_widget') : item.location.ContentInfo.Content.TranslatedName;
      var onClickHandler = goToLocation.bind(_this, locationId);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        key: locationId,
        onClick: onClickHandler,
        className: "c-breadcrumbs__hidden-list-item"
      }, locationName);
    })));
  };

  var renderSeparator = function renderSeparator() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "c-breadcrumbs__list-item-separator"
    }, "/");
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (hiddenListVisible) {
      window.document.body.addEventListener('click', toggleHiddenListVisible, false);
    } else {
      window.document.body.removeEventListener('click', toggleHiddenListVisible, false);
    }

    return function () {
      return window.document.body.removeEventListener('click', toggleHiddenListVisible, false);
    };
  }, [hiddenListVisible, toggleHiddenListVisible]);

  if (loadedLocationsMap.some(function (loadedLocation) {
    return loadedLocation.parentLocationId !== 1 && !loadedLocation.location;
  })) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-breadcrumbs"
  }, renderHiddenList(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-breadcrumbs__list-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "c-breadcrumbs__list"
  }, visibleItems.map(function (item, index) {
    var locationId = item.parentLocationId;
    var locationName = locationId === 1 ? Translator.trans(
    /*@Desc("Root Location")*/
    'breadcrumbs.root_location', {}, 'universal_discovery_widget') : item.location.ContentInfo.Content.TranslatedName;
    var isLast = index === visibleItems.length - 1;
    var onClickHandler = goToLocation.bind(_this, locationId);
    var className = Object(_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__["createCssClassNames"])({
      'c-breadcrumbs__list-item': true,
      'c-breadcrumbs__list-item--last': isLast
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: locationId,
      onClick: onClickHandler,
      className: className
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "c-breadcrumbs__list-item-text"
    }, locationName), !isLast && renderSeparator());
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Breadcrumbs);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/content-create-widget/content.create.widget.js":
/*!**********************************************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/content-create-widget/content.create.widget.js ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_icon_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/icon/icon */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/helpers/css.class.names */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _universal_discovery_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../universal.discovery.module */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var languages = Object.values(window.eZ.adminUiConfig.languages.mappings);
var contentTypes = Object.entries(window.eZ.adminUiConfig.contentTypes);

var ContentCreateWidget = function ContentCreateWidget() {
  var refContentTree = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_3__["MarkedLocationIdContext"]),
      _useContext2 = _slicedToArray(_useContext, 2),
      markedLocationId = _useContext2[0],
      setMarkedLocationId = _useContext2[1];

  var _useContext3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_3__["LoadedLocationsMapContext"]),
      _useContext4 = _slicedToArray(_useContext3, 2),
      loadedLocationsMap = _useContext4[0],
      dispatchLoadedLocationsAction = _useContext4[1];

  var _useContext5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_3__["ContentOnTheFlyConfigContext"]),
      allowedLanguages = _useContext5.allowedLanguages,
      preselectedLanguage = _useContext5.preselectedLanguage,
      preselectedContentType = _useContext5.preselectedContentType;

  var allowedContentTypes = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_3__["AllowedContentTypesContext"]);
  var selectedLocation = loadedLocationsMap.find(function (loadedLocation) {
    return loadedLocation.parentLocationId === markedLocationId;
  });
  var filteredLanguages = languages.filter(function (language) {
    var userHasPermission = !selectedLocation || !selectedLocation.permissions || !selectedLocation.permissions.create.restrictedLanguageCodes.length || selectedLocation.permissions.create.restrictedLanguageCodes.includes(language.languageCode);
    var isAllowedLanguage = !allowedLanguages || allowedLanguages.includes(language.languageCode);
    return userHasPermission && isAllowedLanguage;
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState2 = _slicedToArray(_useState, 2),
      filterQuery = _useState2[0],
      setFilterQuery = _useState2[1];

  var firstLanguageCode = filteredLanguages.length ? filteredLanguages[0].languageCode : '';

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(preselectedLanguage || firstLanguageCode),
      _useState4 = _slicedToArray(_useState3, 2),
      selectedLanguage = _useState4[0],
      setSelectedLanguage = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(preselectedContentType),
      _useState6 = _slicedToArray(_useState5, 2),
      selectedContentType = _useState6[0],
      setSelectedContentType = _useState6[1];

  var _useContext6 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_3__["ActiveTabContext"]),
      _useContext7 = _slicedToArray(_useContext6, 2),
      activeTab = _useContext7[0],
      setActiveTab = _useContext7[1];

  var _useContext8 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_3__["CreateContentWidgetContext"]),
      _useContext9 = _slicedToArray(_useContext8, 2),
      createContentVisible = _useContext9[0],
      setCreateContentVisible = _useContext9[1];

  var _useContext10 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_3__["ContentOnTheFlyDataContext"]),
      _useContext11 = _slicedToArray(_useContext10, 2),
      contentOnTheFlyData = _useContext11[0],
      setContentOnTheFlyData = _useContext11[1];

  var close = function close() {
    setCreateContentVisible(false);
  };

  var updateFilterQuery = function updateFilterQuery(event) {
    var query = event.target.value.toLowerCase();
    setFilterQuery(query);
  };

  var updateSelectedLanguage = function updateSelectedLanguage(event) {
    return setSelectedLanguage(event.target.value);
  };

  var isConfirmDisabled = !selectedContentType || !selectedLanguage || markedLocationId === 1;

  var createContent = function createContent() {
    setContentOnTheFlyData({
      locationId: markedLocationId,
      languageCode: selectedLanguage,
      contentTypeIdentifier: selectedContentType
    });
    setActiveTab('content-create');
  };

  var createContentLabel = Translator.trans(
  /*@Desc("Create new content")*/
  'create_content.label', {}, 'universal_discovery_widget');
  var selectLanguageLabel = Translator.trans(
  /*@Desc("Select a language")*/
  'create_content.select_language', {}, 'universal_discovery_widget');
  var selectContentType = Translator.trans(
  /*@Desc("Select a Content Type")*/
  'create_content.select_content_type', {}, 'universal_discovery_widget');
  var createLabel = Translator.trans(
  /*@Desc("Create")*/
  'create_content.create', {}, 'universal_discovery_widget');
  var closeLabel = Translator.trans(
  /*@Desc("Close")*/
  'popup.close.label', {}, 'universal_discovery_widget');
  var cancelLabel = Translator.trans(
  /*@Desc("Cancel")*/
  'content_create.cancel.label', {}, 'universal_discovery_widget');
  var widgetClassName = Object(_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__["createCssClassNames"])({
    'c-content-create': true,
    'c-content-create--hidden': !createContentVisible
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.eZ.helpers.tooltips.parse(refContentTree.current);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: widgetClassName,
    ref: refContentTree
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-content-create__header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-content-create__header-title"
  }, createContentLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "c-content-create__close-button",
    onClick: close,
    title: closeLabel,
    "data-tooltip-container-selector": ".c-udw-tab"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: "discard",
    extraClasses: "ez-icon--small"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-content-create__language-selector-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-content-create__language-selector-label"
  }, selectLanguageLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    className: "form-control",
    onChange: updateSelectedLanguage,
    value: selectedLanguage
  }, filteredLanguages.map(function (language) {
    if (!language.enabled) {
      return null;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      key: language.id,
      value: language.languageCode,
      onChange: updateSelectedLanguage
    }, language.name);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-content-create__select-content-type-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-content-create__select-content-type-label"
  }, selectContentType), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    autoFocus: true,
    className: "form-control",
    type: "text",
    placeholder: "Type to refine",
    onChange: updateFilterQuery
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-content-create__content-type-list"
  }, contentTypes.map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        groupName = _ref2[0],
        groupItems = _ref2[1];

    var isHidden = groupItems.every(function (groupItem) {
      return filterQuery && !groupItem.name.toLowerCase().includes(filterQuery) || selectedLocation && selectedLocation.permissions && selectedLocation.permissions.create.restrictedContentTypeIds.length && !selectedLocation.permissions.create.restrictedContentTypeIds.includes(groupItem.id.toString()) || allowedContentTypes && !allowedContentTypes.includes(groupItem.identifier);
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "c-content-create__group",
      key: groupName
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "c-content-create__group-name",
      hidden: isHidden
    }, groupName), groupItems.map(function (_ref3) {
      var name = _ref3.name,
          thumbnail = _ref3.thumbnail,
          identifier = _ref3.identifier,
          id = _ref3.id;
      var isHidden = filterQuery && !name.toLowerCase().includes(filterQuery) || selectedLocation && selectedLocation.permissions && selectedLocation.permissions.create.restrictedContentTypeIds.length && !selectedLocation.permissions.create.restrictedContentTypeIds.includes(id.toString()) || allowedContentTypes && !allowedContentTypes.includes(identifier);
      var className = Object(_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__["createCssClassNames"])({
        'c-content-create__group-item': true,
        'c-content-create__group-item--selected': identifier === selectedContentType
      });

      var updateSelectedContentType = function updateSelectedContentType() {
        return setSelectedContentType(identifier);
      };

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        hidden: isHidden,
        key: identifier,
        className: className,
        onClick: updateSelectedContentType
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-content-create__group-item-icon"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
        customPath: thumbnail,
        extraClasses: "ez-icon--small"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-content-create__group-item-name"
      }, name));
    }));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-content-create__confirm-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "c-content-create__confirm-button btn btn-primary",
    onClick: createContent,
    disabled: isConfirmDisabled
  }, createLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "ez-btn ez-btn--no-border",
    onClick: close
  }, cancelLabel)));
};

/* harmony default export */ __webpack_exports__["default"] = (ContentCreateWidget);

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

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/content-table/content.table.item.js":
/*!***********************************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/content-table/content.table.item.js ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _toggle_selection_button_toggle_selection_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toggle-selection-button/toggle.selection.button */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/toggle-selection-button/toggle.selection.button.js");
/* harmony import */ var _common_icon_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/icon/icon */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/helpers/css.class.names */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _services_universal_discovery_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/universal.discovery.service */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/services/universal.discovery.service.js");
/* harmony import */ var _universal_discovery_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../universal.discovery.module */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var ContentTableItem = function ContentTableItem(_ref) {
  var location = _ref.location;
  var restInfo = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_6__["RestInfoContext"]);

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_6__["CurrentViewContext"]),
      _useContext2 = _slicedToArray(_useContext, 2),
      currentView = _useContext2[0],
      setCurrentView = _useContext2[1];

  var _useContext3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_6__["SortingContext"]),
      _useContext4 = _slicedToArray(_useContext3, 2),
      sorting = _useContext4[0],
      setSorting = _useContext4[1];

  var _useContext5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_6__["SortOrderContext"]),
      _useContext6 = _slicedToArray(_useContext5, 2),
      sortOrder = _useContext6[0],
      setSortOrder = _useContext6[1];

  var _useContext7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_6__["LoadedLocationsMapContext"]),
      _useContext8 = _slicedToArray(_useContext7, 2),
      loadedLocationsMap = _useContext8[0],
      dispatchLoadedLocationsAction = _useContext8[1];

  var _useContext9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_6__["MarkedLocationIdContext"]),
      _useContext10 = _slicedToArray(_useContext9, 2),
      markedLocationId = _useContext10[0],
      setMarkedLocationId = _useContext10[1];

  var contentTypesMap = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_6__["ContentTypesMapContext"]);

  var _useContext11 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_6__["SelectedLocationsContext"]),
      _useContext12 = _slicedToArray(_useContext11, 2),
      selectedLocations = _useContext12[0],
      dispatchSelectedLocationsAction = _useContext12[1];

  var _useContext13 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_6__["MultipleConfigContext"]),
      _useContext14 = _slicedToArray(_useContext13, 2),
      multiple = _useContext14[0],
      multipleItemsLimit = _useContext14[1];

  var rootLocationId = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_6__["RootLocationIdContext"]);
  var formatShortDateTime = window.eZ.helpers.timezone.formatShortDateTime;
  var allowedContentTypes = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_6__["AllowedContentTypesContext"]);
  var contentTypeInfo = contentTypesMap[location.ContentInfo.Content.ContentType._href];
  var containersOnly = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_6__["ContainersOnlyContext"]);
  var isContainer = contentTypeInfo.isContainer;
  var isNotSelectable = containersOnly && !isContainer || allowedContentTypes && !allowedContentTypes.includes(contentTypeInfo.identifier);
  var className = Object(_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_4__["createCssClassNames"])({
    'c-content-table-item': true,
    'c-content-table-item--marked': markedLocationId === location.id,
    'c-content-table-item--not-selectable': isNotSelectable
  });

  var markLocation = function markLocation(_ref2) {
    var nativeEvent = _ref2.nativeEvent;
    var isSelectionButtonClicked = nativeEvent.target.closest('.c-toggle-selection-button');

    if (isSelectionButtonClicked) {
      return;
    }

    setMarkedLocationId(location.id);
    Object(_services_universal_discovery_service__WEBPACK_IMPORTED_MODULE_5__["loadAccordionData"])(_objectSpread(_objectSpread({}, restInfo), {}, {
      parentLocationId: location.id,
      sortClause: sorting,
      sortOrder: sortOrder,
      gridView: currentView === 'grid',
      rootLocationId: rootLocationId
    }), function (locationsMap) {
      dispatchLoadedLocationsAction({
        type: 'SET_LOCATIONS',
        data: locationsMap
      });
    });

    if (!multiple && !isNotSelectable) {
      dispatchSelectedLocationsAction({
        type: 'CLEAR_SELECTED_LOCATIONS'
      });
      dispatchSelectedLocationsAction({
        type: 'ADD_SELECTED_LOCATION',
        location: location
      });
    }
  };

  var renderToggleSelectionButton = function renderToggleSelectionButton() {
    if (!multiple || isNotSelectable) {
      return null;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_toggle_selection_button_toggle_selection_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
      location: location
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    className: className,
    onClick: markLocation
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "c-content-table-item__icon-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    extraClasses: "ez-icon--small",
    customPath: contentTypeInfo.thumbnail
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, location.ContentInfo.Content.TranslatedName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, formatShortDateTime(new Date(location.ContentInfo.Content.lastModificationDate))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, contentTypeInfo.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "c-content-table-item__toggle-button-wrapper"
  }, renderToggleSelectionButton()));
};

ContentTableItem.propTypes = {
  location: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ContentTableItem);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/content-table/content.table.js":
/*!******************************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/content-table/content.table.js ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _content_table_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content.table.item */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/content-table/content.table.item.js");
/* harmony import */ var _common_pagination_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/pagination/pagination */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/pagination/pagination.js");





var ContentTable = function ContentTable(_ref) {
  var count = _ref.count,
      itemsPerPage = _ref.itemsPerPage,
      items = _ref.items,
      activePageIndex = _ref.activePageIndex,
      title = _ref.title,
      onPageChange = _ref.onPageChange;
  var refContentTable = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var nameLabel = Translator.trans(
  /*@Desc("Name")*/
  'content_table.name', {}, 'universal_discovery_widget');
  var modifiedLabel = Translator.trans(
  /*@Desc("Modified")*/
  'content_table.modified', {}, 'universal_discovery_widget');
  var contentTypeLabel = Translator.trans(
  /*@Desc("Content Type")*/
  'content_table.content_type', {}, 'universal_discovery_widget');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.eZ.helpers.tooltips.parse(refContentTable.current);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-content-table",
    ref: refContentTable
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-content-table__title"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-content-table__items"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: "table table-hover"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, nameLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, modifiedLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, contentTypeLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, items.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_content_table_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: item.id,
      location: item
    });
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-content-table__pagination"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_pagination_pagination__WEBPACK_IMPORTED_MODULE_3__["default"], {
    proximity: 1,
    itemsPerPage: itemsPerPage,
    activePageIndex: activePageIndex,
    totalCount: count,
    onPageChange: onPageChange,
    disabled: false
  })));
};

ContentTable.propTypes = {
  count: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  itemsPerPage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  activePageIndex: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  items: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  onPageChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ContentTable);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/content-type-selector/content.type.selector.js":
/*!**********************************************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/content-type-selector/content.type.selector.js ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/helpers/css.class.names */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _search_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../search/search */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/search/search.js");
/* harmony import */ var _universal_discovery_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../universal.discovery.module */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var ContentTypeSelector = function ContentTypeSelector() {
  var contentTypesMap = window.eZ.adminUiConfig.contentTypes;
  var allowedContentTypes = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_3__["AllowedContentTypesContext"]);

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_search_search__WEBPACK_IMPORTED_MODULE_2__["SelectedContentTypesContext"]),
      _useContext2 = _slicedToArray(_useContext, 2),
      selectedContentTypes = _useContext2[0],
      dispatchSelectedContentTypesAction = _useContext2[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(function () {
    return Object.keys(contentTypesMap).reduce(function (collapsedGroups, contentTypeGroup, index) {
      return _objectSpread(_objectSpread({}, collapsedGroups), {}, _defineProperty({}, contentTypeGroup, !!index));
    }, {});
  }),
      _useState2 = _slicedToArray(_useState, 2),
      collapsedGroups = _useState2[0],
      setCollapsedGroups = _useState2[1];

  var toggleCollapsed = function toggleCollapsed(_ref) {
    var nativeEvent = _ref.nativeEvent;
    var contentTypeGroup = nativeEvent.target.dataset.id;
    setCollapsedGroups(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, _defineProperty({}, contentTypeGroup, !prevState[contentTypeGroup]));
    });
  };

  var handleContentTypeSelect = function handleContentTypeSelect(_ref2) {
    var nativeEvent = _ref2.nativeEvent;
    var contentTypeIdentifier = nativeEvent.target.dataset.contentTypeIdentifier;
    var action = {
      contentTypeIdentifier: contentTypeIdentifier
    };
    action.type = selectedContentTypes.includes(contentTypeIdentifier) ? 'REMOVE_CONTENT_TYPE' : 'ADD_CONTENT_TYPE';
    dispatchSelectedContentTypesAction(action);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ez-content-type-selector c-content-type-selector"
  }, Object.entries(contentTypesMap).map(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        contentTypeGroup = _ref4[0],
        contentTypes = _ref4[1];

    var isHidden = contentTypes.every(function (contentType) {
      return allowedContentTypes && !allowedContentTypes.includes(contentType.identifier);
    });

    if (isHidden) {
      return null;
    }

    var groupSelectorClassName = Object(_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_1__["createCssClassNames"])({
      'ez-content-type-selector__group': true,
      'ez-content-type-selector__group--collapsed': collapsedGroups[contentTypeGroup]
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: contentTypeGroup,
      className: groupSelectorClassName
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "ez-content-type-selector__group-title",
      "data-id": contentTypeGroup,
      onClick: toggleCollapsed
    }, contentTypeGroup), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "ez-content-type-selector__list"
    }, contentTypes.map(function (contentType) {
      var isHidden = allowedContentTypes && !allowedContentTypes.includes(contentType.identifier);

      if (isHidden) {
        return null;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        key: contentType.identifier,
        className: "ez-content-type-selector__item"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-check form-check-inline"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "checkbox",
        id: "ez-search-content-type-".concat(contentType.identifier),
        className: "ez-input ez-input--checkbox",
        value: contentType.identifier,
        "data-content-type-identifier": contentType.identifier,
        onChange: handleContentTypeSelect,
        checked: selectedContentTypes.includes(contentType.identifier)
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "checkbox-inline form-check-label",
        htmlFor: "ez-search-content-type-".concat(contentType.identifier)
      }, contentType.name)));
    })));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ContentTypeSelector);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/filters/filters.js":
/*!******************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/filters/filters.js ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/helpers/css.class.names */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _search_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../search/search */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/search/search.js");
/* harmony import */ var _services_universal_discovery_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/universal.discovery.service */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/services/universal.discovery.service.js");
/* harmony import */ var _universal_discovery_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../universal.discovery.module */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js");
/* harmony import */ var _content_type_selector_content_type_selector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../content-type-selector/content.type.selector */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/content-type-selector/content.type.selector.js");
/* harmony import */ var _common_icon_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/icon/icon */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











var Filters = function Filters(_ref) {
  var isCollapsed = _ref.isCollapsed,
      search = _ref.search;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_search_search__WEBPACK_IMPORTED_MODULE_4__["SelectedContentTypesContext"]),
      _useContext2 = _slicedToArray(_useContext, 2),
      selectedContentTypes = _useContext2[0],
      dispatchSelectedContentTypesAction = _useContext2[1];

  var _useContext3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_search_search__WEBPACK_IMPORTED_MODULE_4__["SelectedSectionContext"]),
      _useContext4 = _slicedToArray(_useContext3, 2),
      selectedSection = _useContext4[0],
      setSelectedSection = _useContext4[1];

  var _useContext5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_search_search__WEBPACK_IMPORTED_MODULE_4__["SelectedSubtreeContext"]),
      _useContext6 = _slicedToArray(_useContext5, 2),
      selectedSubtree = _useContext6[0],
      setSelectedSubtree = _useContext6[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState2 = _slicedToArray(_useState, 2),
      subtreeBreadcrumbs = _useState2[0],
      setSubtreeBreadcrumbs = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      filtersCleared = _useState4[0],
      setFiltersCleared = _useState4[1];

  var restInfo = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_6__["RestInfoContext"]);

  var clearFilters = function clearFilters() {
    dispatchSelectedContentTypesAction({
      type: 'CLEAR_CONTENT_TYPES'
    });
    setSelectedSection('');
    clearSelectedSubree();
    setFiltersCleared(true);
  };

  var clearSelectedSubree = function clearSelectedSubree() {
    setSelectedSubtree('');
    setSubtreeBreadcrumbs('');
  };

  var wrapperClassName = Object(_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__["createCssClassNames"])({
    'c-filters': true,
    'ez-filters': true,
    'ez-filters--collapsed': isCollapsed
  });

  var updateSection = function updateSection(event) {
    var value = event.target.value;
    setSelectedSection(value);
  };

  var openUdw = function openUdw() {
    var udwContainer = window.document.createElement('div');
    var config = JSON.parse(window.document.querySelector('#react-udw').dataset.filterSubtreeUdwConfig);

    var closeUDW = function closeUDW() {
      react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.unmountComponentAtNode(udwContainer);
      udwContainer.remove();
    };

    var onConfirm = function onConfirm(items) {
      var pathString = items[0].pathString;
      var pathArray = pathString.split('/').filter(function (val) {
        return val;
      });
      var id = pathArray.splice(1, pathArray.length - 1).join();
      Object(_services_universal_discovery_service__WEBPACK_IMPORTED_MODULE_5__["findLocationsById"])(_objectSpread(_objectSpread({}, restInfo), {}, {
        id: id
      }), function (locations) {
        var breadcrumbs = locations.map(function (location) {
          return location.ContentInfo.Content.TranslatedName;
        }).join(' / ');
        setSubtreeBreadcrumbs(breadcrumbs);
      });
      setSelectedSubtree(pathString);
      closeUDW();
    };

    window.document.body.append(udwContainer);

    var mergedConfig = _objectSpread({
      onConfirm: onConfirm,
      onCancel: closeUDW,
      tabs: window.eZ.adminUiConfig.universalDiscoveryWidget.tabs,
      title: 'Browsing content'
    }, config);

    react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(eZ.modules.UniversalDiscovery, mergedConfig), udwContainer);
  };

  var makeSearch = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    return search(0);
  }, [search]);
  var isApplyButtonEnabled = !!selectedContentTypes.length || !!selectedSection || !!selectedSubtree;

  var renderSelectContentButton = function renderSelectContentButton() {
    if (selectedSubtree) {
      return null;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "btn btn-secondary ez-btn--udw-select-location",
      type: "button",
      onClick: openUdw
    }, "Select content");
  };

  var renderSubtreeBreadcrumbs = function renderSubtreeBreadcrumbs() {
    if (!subtreeBreadcrumbs) {
      return null;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "ez-tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "ez-tag__content"
    }, subtreeBreadcrumbs), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "button",
      className: "ez-tag__remove-btn",
      onClick: clearSelectedSubree
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
      name: "discard",
      extraClasses: "ez-icon--small ez-icon--dark"
    })));
  };

  var contentTypeLabel = Translator.trans(
  /*@Desc("Content Type")*/
  'filters.content_type', {}, 'universal_discovery_widget');
  var sectionLabel = Translator.trans(
  /*@Desc("Section")*/
  'filters.section', {}, 'universal_discovery_widget');
  var anySectionLabel = Translator.trans(
  /*@Desc("Any section")*/
  'filters.any_section', {}, 'universal_discovery_widget');
  var subtreeLabel = Translator.trans(
  /*@Desc("Subtree")*/
  'filters.subtree', {}, 'universal_discovery_widget');
  var clearLabel = Translator.trans(
  /*@Desc("Clear")*/
  'filters.clear', {}, 'universal_discovery_widget');
  var applyLabel = Translator.trans(
  /*@Desc("Apply")*/
  'filters.apply', {}, 'universal_discovery_widget');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (filtersCleared) {
      setFiltersCleared(false);
      makeSearch();
    }
  }, [filtersCleared, makeSearch]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: wrapperClassName
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ez-filters__row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ez-filters__item ez-filters__item--content-type"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "ez-label"
  }, contentTypeLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_content_type_selector_content_type_selector__WEBPACK_IMPORTED_MODULE_7__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ez-filters__row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ez-filters__item ez-filters__item--section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "ez-label"
  }, sectionLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    className: "ez-filters__select form-control",
    onChange: updateSection,
    value: selectedSection
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: ''
  }, anySectionLabel), Object.entries(window.eZ.adminUiConfig.sections).map(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
        sectionIdentifier = _ref3[0],
        sectionName = _ref3[1];

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      key: sectionIdentifier,
      value: sectionIdentifier
    }, sectionName);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ez-filters__item ez-filters__item--subtree"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "ez-label"
  }, subtreeLabel, ":"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, renderSelectContentButton(), renderSubtreeBreadcrumbs()))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ez-filters__btns"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    className: "btn btn-primary ez-btn-apply",
    onClick: makeSearch,
    disabled: !isApplyButtonEnabled
  }, applyLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "ez-btn ez-btn--no-border",
    onClick: clearFilters
  }, clearLabel)));
};

Filters.propTypes = {
  isCollapsed: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  search: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Filters);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/finder/finder.branch.js":
/*!***********************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/finder/finder.branch.js ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _finder_leaf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./finder.leaf */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/finder/finder.leaf.js");
/* harmony import */ var _common_icon_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/icon/icon */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/helpers/css.class.names */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _hooks_useFindLocationsByParentLocationIdFetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useFindLocationsByParentLocationIdFetch */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/hooks/useFindLocationsByParentLocationIdFetch.js");
/* harmony import */ var _universal_discovery_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../universal.discovery.module */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var CLASS_IS_BRANCH_RESIZING = 'ez-is-branch-resizing';
var SCROLL_OFFSET = 200;

var FinderBranch = function FinderBranch(_ref) {
  var locationData = _ref.locationData,
      itemsPerPage = _ref.itemsPerPage;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState2 = _slicedToArray(_useState, 2),
      offset = _useState2[0],
      setOffset = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState4 = _slicedToArray(_useState3, 2),
      branchWidth = _useState4[0],
      setBranchWidth = _useState4[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_6__["LoadedLocationsMapContext"]),
      _useContext2 = _slicedToArray(_useContext, 2),
      loadedLocationsMap = _useContext2[0],
      dispatchLoadedLocationsAction = _useContext2[1];

  var _useContext3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_6__["SortingContext"]),
      _useContext4 = _slicedToArray(_useContext3, 2),
      sorting = _useContext4[0],
      setSorting = _useContext4[1];

  var _useContext5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_6__["SortOrderContext"]),
      _useContext6 = _slicedToArray(_useContext5, 2),
      sortOrder = _useContext6[0],
      setSortOrder = _useContext6[1];

  var contentTypesMap = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_6__["ContentTypesMapContext"]);

  var _useContext7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_6__["MarkedLocationIdContext"]),
      _useContext8 = _slicedToArray(_useContext7, 2),
      markedLocationId = _useContext8[0],
      setMarkedLocationId = _useContext8[1];

  var branchRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var sortingOptions = _universal_discovery_module__WEBPACK_IMPORTED_MODULE_6__["SORTING_OPTIONS"].find(function (option) {
    return option.sortClause === sorting;
  });

  var _useFindLocationsByPa = Object(_hooks_useFindLocationsByParentLocationIdFetch__WEBPACK_IMPORTED_MODULE_5__["useFindLocationsByParentLocationIdFetch"])(locationData, {
    sortClause: sortingOptions.sortClause,
    sortOrder: sortOrder
  }, itemsPerPage, offset),
      _useFindLocationsByPa2 = _slicedToArray(_useFindLocationsByPa, 2),
      loadedLocations = _useFindLocationsByPa2[0],
      isLoading = _useFindLocationsByPa2[1];

  var subitems = locationData.subitems,
      collapsed = locationData.collapsed;
  var resizeStartPositionX = 0;
  var branchCurrentWidth = 0;

  var loadMore = function loadMore(_ref2) {
    var target = _ref2.target;
    var areAllItemsLoaded = locationData.subitems.length >= loadedLocations.totalCount;
    var isOffsetReached = target.scrollHeight - target.clientHeight - target.scrollTop < SCROLL_OFFSET;

    if (areAllItemsLoaded || !isOffsetReached || isLoading) {
      return;
    }

    setOffset(offset + itemsPerPage);
  };

  var expandBranch = function expandBranch() {
    dispatchLoadedLocationsAction({
      type: 'UPDATE_LOCATIONS',
      data: _objectSpread(_objectSpread({}, locationData), {}, {
        collapsed: false
      })
    });
  };

  var changeBranchWidth = function changeBranchWidth(_ref3) {
    var clientX = _ref3.clientX;
    var newBranchWidth = branchCurrentWidth + (clientX - resizeStartPositionX);

    if (newBranchWidth < 50) {
      dispatchLoadedLocationsAction({
        type: 'UPDATE_LOCATIONS',
        data: _objectSpread(_objectSpread({}, locationData), {}, {
          collapsed: true
        })
      });
      newBranchWidth = 0;
      removeResizeListeners();
    }

    setBranchWidth(newBranchWidth);
  };

  var removeResizeListeners = function removeResizeListeners() {
    window.document.removeEventListener('mousemove', changeBranchWidth);
    window.document.removeEventListener('mouseup', removeResizeListeners);
    window.document.body.classList.remove(CLASS_IS_BRANCH_RESIZING);
  };

  var addResizeListeners = function addResizeListeners(_ref4) {
    var nativeEvent = _ref4.nativeEvent;
    resizeStartPositionX = nativeEvent.clientX;
    branchCurrentWidth = branchRef.current.getBoundingClientRect().width;
    window.document.addEventListener('mousemove', changeBranchWidth, false);
    window.document.addEventListener('mouseup', removeResizeListeners, false);
    window.document.body.classList.add(CLASS_IS_BRANCH_RESIZING);
  };

  var renderCollapsedBranch = function renderCollapsedBranch() {
    if (!collapsed) {
      return null;
    }

    var selectedLocation = subitems.find(function (subitem) {
      return loadedLocationsMap.find(function (loadedLocation) {
        return loadedLocation.parentLocationId === subitem.location.id;
      }) || subitem.location.id === markedLocationId;
    });
    var contentName = selectedLocation ? selectedLocation.location.ContentInfo.Content.TranslatedName : '';
    var iconPath = locationData.location ? contentTypesMap[locationData.location.ContentInfo.Content.ContentType._href].thumbnail : window.eZ.helpers.icon.getIconPath('folder');
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "c-finder-branch__info-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "c-finder-branch__icon-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      extraClasses: "ez-icon--small ez-icon--primary",
      customPath: iconPath
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "c-finder-branch__name"
    }, contentName));
  };

  var renderDragHandler = function renderDragHandler() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "c-finder-branch__resize-handler",
      onMouseDown: addResizeListeners
    });
  };

  var renderSubitems = function renderSubitems() {
    if (collapsed) {
      return null;
    }

    var width = branchWidth ? branchWidth : null;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "c-finder-branch__items-wrapper",
      onScroll: loadMore,
      style: {
        width: width
      }
    }, renderLoadingSpinner(), subitems.map(function (_ref5) {
      var location = _ref5.location;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_finder_leaf__WEBPACK_IMPORTED_MODULE_2__["default"], {
        key: location.id,
        location: location
      });
    })), renderDragHandler());
  };

  var renderLoadingSpinner = function renderLoadingSpinner() {
    if (!isLoading) {
      return;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "c-finder-branch__loading-spinner"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "spinner",
      extraClasses: "ez-icon--medium ez-spin"
    }));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (loadedLocations.subitems) {
      var data = _objectSpread(_objectSpread(_objectSpread({}, locationData), loadedLocations), {}, {
        subitems: [].concat(_toConsumableArray(locationData.subitems), _toConsumableArray(loadedLocations.subitems))
      });

      dispatchLoadedLocationsAction({
        type: 'UPDATE_LOCATIONS',
        data: data
      });
    }
  }, [loadedLocations, dispatchLoadedLocationsAction, isLoading]);

  if (!subitems.length && !collapsed && !isLoading) {
    return null;
  }

  var className = Object(_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_4__["createCssClassNames"])({
    'c-finder-branch': true,
    'c-finder-branch--collapsed': collapsed
  });
  var onClick = collapsed ? expandBranch : null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: className,
    onClick: onClick,
    ref: branchRef
  }, renderCollapsedBranch(), renderSubitems());
};

FinderBranch.propTypes = {
  locationData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    parentLocationId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    subitems: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
    location: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
    collapsed: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
  }).isRequired,
  itemsPerPage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
};
FinderBranch.defaultProps = {
  itemsPerPage: 50
};
/* harmony default export */ __webpack_exports__["default"] = (FinderBranch);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/finder/finder.js":
/*!****************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/finder/finder.js ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _finder_branch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./finder.branch */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/finder/finder.branch.js");
/* harmony import */ var _universal_discovery_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../universal.discovery.module */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var Finder = function Finder(_ref) {
  var itemsPerPage = _ref.itemsPerPage;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_3__["LoadedLocationsMapContext"]),
      _useContext2 = _slicedToArray(_useContext, 2),
      loadedLocationsMap = _useContext2[0],
      dispatchLoadedLocationsAction = _useContext2[1];

  var finderRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var container = finderRef.current;
    container.scrollLeft = container.scrollWidth - container.clientWidth;
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-finder",
    ref: finderRef
  }, loadedLocationsMap.map(function (loadedLocation) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_finder_branch__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: loadedLocation.parentLocationId,
      itemsPerPage: itemsPerPage,
      locationData: loadedLocation
    });
  }));
};

Finder.propTypes = {
  itemsPerPage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
};
Finder.defaultProps = {
  itemsPerPage: 50
};
/* harmony default export */ __webpack_exports__["default"] = (Finder);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/finder/finder.leaf.js":
/*!*********************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/finder/finder.leaf.js ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _toggle_selection_button_toggle_selection_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toggle-selection-button/toggle.selection.button */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/toggle-selection-button/toggle.selection.button.js");
/* harmony import */ var _common_icon_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/icon/icon */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/helpers/css.class.names */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _universal_discovery_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../universal.discovery.module */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var FinderLeaf = function FinderLeaf(_ref) {
  var location = _ref.location;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_5__["MarkedLocationIdContext"]),
      _useContext2 = _slicedToArray(_useContext, 2),
      markedLocationId = _useContext2[0],
      setMarkedLocationId = _useContext2[1];

  var _useContext3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_5__["LoadedLocationsMapContext"]),
      _useContext4 = _slicedToArray(_useContext3, 2),
      loadedLocationsMap = _useContext4[0],
      dispatchLoadedLocationsAction = _useContext4[1];

  var contentTypesMap = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_5__["ContentTypesMapContext"]);

  var _useContext5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_5__["SelectedLocationsContext"]),
      _useContext6 = _slicedToArray(_useContext5, 2),
      selectedLocations = _useContext6[0],
      dispatchSelectedLocationsAction = _useContext6[1];

  var _useContext7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_5__["MultipleConfigContext"]),
      _useContext8 = _slicedToArray(_useContext7, 2),
      multiple = _useContext8[0],
      multipleItemsLimit = _useContext8[1];

  var containersOnly = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_5__["ContainersOnlyContext"]);
  var allowedContentTypes = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_5__["AllowedContentTypesContext"]);
  var contentTypeInfo = contentTypesMap[location.ContentInfo.Content.ContentType._href];
  var isContainer = contentTypeInfo.isContainer;
  var isNotSelectable = containersOnly && !isContainer || allowedContentTypes && !allowedContentTypes.includes(contentTypeInfo.identifier);

  var markLocation = function markLocation(_ref2) {
    var nativeEvent = _ref2.nativeEvent;
    var isSelectionButtonClicked = nativeEvent.target.closest('.c-toggle-selection-button');
    var isMarkedLocationClicked = location.id === markedLocationId;

    if (isSelectionButtonClicked || isMarkedLocationClicked) {
      return;
    }

    setMarkedLocationId(location.id);
    dispatchLoadedLocationsAction({
      type: 'CUT_LOCATIONS',
      locationId: location.id
    });
    dispatchLoadedLocationsAction({
      type: 'UPDATE_LOCATIONS',
      data: {
        parentLocationId: location.id,
        subitems: []
      }
    });

    if (!multiple && !isNotSelectable) {
      dispatchSelectedLocationsAction({
        type: 'CLEAR_SELECTED_LOCATIONS'
      });
      dispatchSelectedLocationsAction({
        type: 'ADD_SELECTED_LOCATION',
        location: location
      });
    }
  };

  var renderToggleSelectionButton = function renderToggleSelectionButton() {
    if (!multiple || isNotSelectable) {
      return null;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_toggle_selection_button_toggle_selection_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
      location: location
    });
  };

  var className = Object(_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_4__["createCssClassNames"])({
    'c-finder-leaf': true,
    'c-finder-leaf--marked': !!loadedLocationsMap.find(function (loadedLocation) {
      return loadedLocation.parentLocationId === location.id;
    }),
    'c-finder-leaf--has-children': !!location.childCount,
    'c-finder-leaf--not-selectable': isNotSelectable
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.eZ.helpers.tooltips.parse(window.document.querySelector('.c-udw-tab'));
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: className,
    onClick: markLocation
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "c-finder-leaf__name"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "c-finder-leaf__icon-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    extraClasses: "ez-icon--small ez-icon--base-dark",
    customPath: contentTypesMap[location.ContentInfo.Content.ContentType._href].thumbnail
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    title: location.ContentInfo.Content.TranslatedName,
    "data-tooltip-container-selector": ".c-udw-tab"
  }, location.ContentInfo.Content.TranslatedName)), renderToggleSelectionButton());
};

FinderLeaf.propTypes = {
  location: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (FinderLeaf);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/grid-view/grid.view.item.js":
/*!***************************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/grid-view/grid.view.item.js ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _toggle_selection_button_toggle_selection_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toggle-selection-button/toggle.selection.button */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/toggle-selection-button/toggle.selection.button.js");
/* harmony import */ var _common_icon_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/icon/icon */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _common_thumbnail_thumbnail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/thumbnail/thumbnail */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/thumbnail/thumbnail.js");
/* harmony import */ var _common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/helpers/css.class.names */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _universal_discovery_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../universal.discovery.module */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var isSelectionButtonClicked = function isSelectionButtonClicked(event) {
  return event.target.closest('.c-toggle-selection-button');
};

var GridViewItem = function GridViewItem(_ref) {
  var location = _ref.location,
      version = _ref.version;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_6__["MarkedLocationIdContext"]),
      _useContext2 = _slicedToArray(_useContext, 2),
      markedLocationId = _useContext2[0],
      setMarkedLocationId = _useContext2[1];

  var _useContext3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_6__["LoadedLocationsMapContext"]),
      _useContext4 = _slicedToArray(_useContext3, 2),
      loadedLocationsMap = _useContext4[0],
      dispatchLoadedLocationsAction = _useContext4[1];

  var contentTypesMap = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_6__["ContentTypesMapContext"]);

  var _useContext5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_6__["SelectedLocationsContext"]),
      _useContext6 = _slicedToArray(_useContext5, 2),
      selectedLocations = _useContext6[0],
      dispatchSelectedLocationsAction = _useContext6[1];

  var _useContext7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_6__["MultipleConfigContext"]),
      _useContext8 = _slicedToArray(_useContext7, 2),
      multiple = _useContext8[0],
      multipleItemsLimit = _useContext8[1];

  var containersOnly = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_6__["ContainersOnlyContext"]);
  var allowedContentTypes = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_6__["AllowedContentTypesContext"]);
  var contentTypeInfo = contentTypesMap[location.ContentInfo.Content.ContentType._href];
  var isContainer = contentTypeInfo.isContainer;
  var isNotSelectable = containersOnly && !isContainer || allowedContentTypes && !allowedContentTypes.includes(contentTypeInfo.identifier);
  var className = Object(_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_5__["createCssClassNames"])({
    'c-grid-item': true,
    'c-grid-item--marked': markedLocationId === location.id,
    'c-grid-item--not-selectable': isNotSelectable
  });

  var markLocation = function markLocation(_ref2) {
    var nativeEvent = _ref2.nativeEvent;

    if (isSelectionButtonClicked(nativeEvent)) {
      return;
    }

    setMarkedLocationId(location.id);

    if (!multiple && !isNotSelectable) {
      dispatchSelectedLocationsAction({
        type: 'CLEAR_SELECTED_LOCATIONS'
      });
      dispatchSelectedLocationsAction({
        type: 'ADD_SELECTED_LOCATION',
        location: location
      });
    }
  };

  var loadLocation = function loadLocation(_ref3) {
    var nativeEvent = _ref3.nativeEvent;

    if (isSelectionButtonClicked(nativeEvent) || containersOnly && !isContainer) {
      return;
    }

    dispatchLoadedLocationsAction({
      type: 'UPDATE_LOCATIONS',
      data: {
        parentLocationId: location.id,
        subitems: []
      }
    });
  };

  var renderToggleSelectionButton = function renderToggleSelectionButton() {
    if (!multiple || isNotSelectable) {
      return null;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_toggle_selection_button_toggle_selection_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
      location: location
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: className,
    onClick: markLocation,
    onDoubleClick: loadLocation
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-grid-item__preview"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_thumbnail_thumbnail__WEBPACK_IMPORTED_MODULE_4__["default"], {
    thumbnailData: version.Thumbnail,
    iconExtraClasses: "ez-icon--extra-large",
    contentTypeIconPath: contentTypesMap[location.ContentInfo.Content.ContentType._href].thumbnail
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-grid-item__name"
  }, location.ContentInfo.Content.TranslatedName), renderToggleSelectionButton());
};

GridViewItem.propTypes = {
  location: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  version: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
GridViewItem.defaultProps = {
  version: {}
};
/* harmony default export */ __webpack_exports__["default"] = (GridViewItem);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/grid-view/grid.view.js":
/*!**********************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/grid-view/grid.view.js ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grid_view_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grid.view.item */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/grid-view/grid.view.item.js");
/* harmony import */ var _breadcrumbs_breadcrumbs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../breadcrumbs/breadcrumbs */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/breadcrumbs/breadcrumbs.js");
/* harmony import */ var _hooks_useFindLocationsByParentLocationIdFetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useFindLocationsByParentLocationIdFetch */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/hooks/useFindLocationsByParentLocationIdFetch.js");
/* harmony import */ var _universal_discovery_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../universal.discovery.module */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var SCROLL_OFFSET = 200;

var GridView = function GridView(_ref) {
  var itemsPerPage = _ref.itemsPerPage;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState2 = _slicedToArray(_useState, 2),
      offset = _useState2[0],
      setOffset = _useState2[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_5__["LoadedLocationsMapContext"]),
      _useContext2 = _slicedToArray(_useContext, 2),
      loadedLocationsMap = _useContext2[0],
      dispatchLoadedLocationsAction = _useContext2[1];

  var _useContext3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_5__["SortingContext"]),
      _useContext4 = _slicedToArray(_useContext3, 2),
      sorting = _useContext4[0],
      setSorting = _useContext4[1];

  var _useContext5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_5__["SortOrderContext"]),
      _useContext6 = _slicedToArray(_useContext5, 2),
      sortOrder = _useContext6[0],
      setSortOrder = _useContext6[1];

  var sortingOptions = _universal_discovery_module__WEBPACK_IMPORTED_MODULE_5__["SORTING_OPTIONS"].find(function (option) {
    return option.sortClause === sorting;
  });
  var locationData = loadedLocationsMap.length ? loadedLocationsMap[loadedLocationsMap.length - 1] : {
    subitems: []
  };

  var _useFindLocationsByPa = Object(_hooks_useFindLocationsByParentLocationIdFetch__WEBPACK_IMPORTED_MODULE_4__["useFindLocationsByParentLocationIdFetch"])(locationData, {
    sortClause: sortingOptions.sortClause,
    sortOrder: sortOrder
  }, itemsPerPage, offset, true),
      _useFindLocationsByPa2 = _slicedToArray(_useFindLocationsByPa, 2),
      loadedLocations = _useFindLocationsByPa2[0],
      isLoading = _useFindLocationsByPa2[1];

  var loadMore = function loadMore(_ref2) {
    var target = _ref2.target;
    var areAllItemsLoaded = locationData.subitems.length >= loadedLocations.totalCount;
    var isOffsetReached = target.scrollHeight - target.clientHeight - target.scrollTop < SCROLL_OFFSET;

    if (areAllItemsLoaded || !isOffsetReached || isLoading) {
      return;
    }

    setOffset(offset + itemsPerPage);
  };

  var renderItem = function renderItem(itemData) {
    if (!itemData.version) {
      return null;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grid_view_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: itemData.location.id,
      location: itemData.location,
      version: itemData.version
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (isLoading || !loadedLocations.subitems) {
      return;
    }

    var data = _objectSpread(_objectSpread(_objectSpread({}, locationData), loadedLocations), {}, {
      subitems: [].concat(_toConsumableArray(locationData.subitems), _toConsumableArray(loadedLocations.subitems))
    });

    setOffset(0);
    dispatchLoadedLocationsAction({
      type: 'UPDATE_LOCATIONS',
      data: data
    });
  }, [loadedLocations, dispatchLoadedLocationsAction, isLoading]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-grid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_breadcrumbs_breadcrumbs__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-grid__items-wrapper",
    onScroll: loadMore
  }, locationData.subitems.map(renderItem)));
};

GridView.propTypes = {
  itemsPerPage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
};
GridView.defaultProps = {
  itemsPerPage: 50
};
/* harmony default export */ __webpack_exports__["default"] = (GridView);

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

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/search/search.js":
/*!****************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/search/search.js ***!
  \****************************************************************************************************************************/
/*! exports provided: SelectedContentTypesContext, SelectedSectionContext, SelectedSubtreeContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectedContentTypesContext", function() { return SelectedContentTypesContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectedSectionContext", function() { return SelectedSectionContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectedSubtreeContext", function() { return SelectedSubtreeContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_icon_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/icon/icon */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _content_table_content_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../content-table/content.table */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/content-table/content.table.js");
/* harmony import */ var _filters_filters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../filters/filters */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/filters/filters.js");
/* harmony import */ var _hooks_useSearchByQueryFetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useSearchByQueryFetch */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/hooks/useSearchByQueryFetch.js");
/* harmony import */ var _universal_discovery_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../universal.discovery.module */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js");
var _this = undefined;

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



var SelectedContentTypesContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
var SelectedSectionContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
var SelectedSubtreeContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();





var ENTER_CHAR_CODE = 13;

var selectedContentTypesReducer = function selectedContentTypesReducer(state, action) {
  switch (action.type) {
    case 'ADD_CONTENT_TYPE':
      return [].concat(_toConsumableArray(state), [action.contentTypeIdentifier]);

    case 'REMOVE_CONTENT_TYPE':
      return state.filter(function (contentTypeIdentifier) {
        return contentTypeIdentifier !== action.contentTypeIdentifier;
      });

    case 'CLEAR_CONTENT_TYPES':
      return [];

    default:
      throw new Error();
  }
};

var languages = Object.values(window.eZ.adminUiConfig.languages.mappings);

var Search = function Search(_ref) {
  var itemsPerPage = _ref.itemsPerPage;
  var filtersLabel = Translator.trans(
  /*@Desc("Filters")*/
  'search.filters', {}, 'universal_discovery_widget');
  var searchLabel = Translator.trans(
  /*@Desc("Search")*/
  'search.search', {}, 'universal_discovery_widget');
  var allowedContentTypes = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_6__["AllowedContentTypesContext"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState2 = _slicedToArray(_useState, 2),
      searchText = _useState2[0],
      setSearchText = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState4 = _slicedToArray(_useState3, 2),
      offset = _useState4[0],
      setOffset = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      _useState6 = _slicedToArray(_useState5, 2),
      filtersCollapsed = _useState6[0],
      setFiltersCollapsed = _useState6[1];

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(selectedContentTypesReducer, []),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      selectedContentTypes = _useReducer2[0],
      dispatchSelectedContentTypesAction = _useReducer2[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState8 = _slicedToArray(_useState7, 2),
      selectedSection = _useState8[0],
      setSelectedSection = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState10 = _slicedToArray(_useState9, 2),
      selectedSubtree = _useState10[0],
      setSelectedSubtree = _useState10[1];

  var firstLanguageCode = languages.length ? languages[0].languageCode : '';

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(firstLanguageCode),
      _useState12 = _slicedToArray(_useState11, 2),
      selectedLanguage = _useState12[0],
      setSelectedLanguage = _useState12[1];

  var updateSelectedLanguage = function updateSelectedLanguage(event) {
    return setSelectedLanguage(event.target.value);
  };

  var _useSearchByQueryFetc = Object(_hooks_useSearchByQueryFetch__WEBPACK_IMPORTED_MODULE_5__["useSearchByQueryFetch"])(),
      _useSearchByQueryFetc2 = _slicedToArray(_useSearchByQueryFetc, 3),
      isLoading = _useSearchByQueryFetc2[0],
      data = _useSearchByQueryFetc2[1],
      searchByQuery = _useSearchByQueryFetc2[2];

  var updateSearchQuery = function updateSearchQuery(_ref2) {
    var value = _ref2.target.value;
    return setSearchText(value);
  };

  var search = function search(forcedOffset) {
    if (!searchText) {
      return;
    }

    if (forcedOffset !== undefined && forcedOffset !== offset) {
      setOffset(forcedOffset);
      return;
    }

    var contentTypes = !!selectedContentTypes.length ? _toConsumableArray(selectedContentTypes) : allowedContentTypes;
    searchByQuery(searchText, contentTypes, selectedSection, selectedSubtree, itemsPerPage, offset, selectedLanguage);
  };

  var handleKeyPressed = function handleKeyPressed(_ref3) {
    var charCode = _ref3.charCode;

    if (charCode === ENTER_CHAR_CODE) {
      search(0);
    }
  };

  var changePage = function changePage(pageIndex) {
    return setOffset(pageIndex * itemsPerPage);
  };

  var toggleFiltersCollapsed = function toggleFiltersCollapsed() {
    return setFiltersCollapsed(function (prevState) {
      return !prevState;
    });
  };

  var renderSearchResults = function renderSearchResults() {
    var searchResultsLabel = Translator.trans(
    /*@Desc("Search results")*/
    'search.search_results', {}, 'universal_discovery_widget');
    var noResultsLabel = Translator.trans(
    /*@Desc("Sorry, no results were found for")*/
    'search.no_results', {}, 'universal_discovery_widget');
    var tipsLabel = Translator.trans(
    /*@Desc("Some helpful search tips")*/
    'search.tips', {}, 'universal_discovery_widget');
    var checkSpellingLabel = Translator.trans(
    /*@Desc("Check spelling of keywords.")*/
    'search.check_spelling', {}, 'universal_discovery_widget');
    var differentKeywordsLabel = Translator.trans(
    /*@Desc("Try different keywords.")*/
    'search.different_keywords', {}, 'universal_discovery_widget');
    var moreGeneralLabel = Translator.trans(
    /*@Desc("Try more general keywords.")*/
    'search.more_general', {}, 'universal_discovery_widget');
    var fewerKeywordsLabel = Translator.trans(
    /*@Desc("Try fewer keywords. Reducing keywords result in more matches.")*/
    'search.fewer_keywords', {}, 'universal_discovery_widget');
    var title = "".concat(searchResultsLabel, " (").concat(data.count, ")");

    if (data.count) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_content_table_content_table__WEBPACK_IMPORTED_MODULE_3__["default"], {
        count: data.count,
        items: data.items,
        itemsPerPage: itemsPerPage,
        activePageIndex: offset ? offset / itemsPerPage : 0,
        title: title,
        onPageChange: changePage
      });
    } else if (!!data.items) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-search__no-results"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-search__no-results-title"
      }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
        className: "table table-hover"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "".concat(noResultsLabel, " \"").concat(searchText, "\".")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, tipsLabel, ":"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, checkSpellingLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, differentKeywordsLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, moreGeneralLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, fewerKeywordsLabel)));
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(search, [offset]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-search"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-search__tools-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-search__input-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "search",
    className: "c-search__input form-control",
    onChange: updateSearchQuery,
    onKeyPress: handleKeyPressed,
    value: searchText
  })), languages.length > 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-search__selector-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    className: "form-control c-search__select-language",
    onChange: updateSelectedLanguage,
    value: selectedLanguage
  }, languages.map(function (language) {
    if (!language.enabled) {
      return null;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      key: language.id,
      value: language.languageCode,
      onChange: updateSelectedLanguage
    }, language.name);
  }))) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "c-search__search-btn btn btn-primary",
    onClick: search.bind(_this, 0)
  }, searchLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-search__filters-btn-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "c-search__toggle-filters-btn btn btn-secondary",
    onClick: toggleFiltersCollapsed
  }, filtersLabel))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SelectedContentTypesContext.Provider, {
    value: [selectedContentTypes, dispatchSelectedContentTypesAction]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SelectedSectionContext.Provider, {
    value: [selectedSection, setSelectedSection]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SelectedSubtreeContext.Provider, {
    value: [selectedSubtree, setSelectedSubtree]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_filters_filters__WEBPACK_IMPORTED_MODULE_4__["default"], {
    isCollapsed: filtersCollapsed,
    search: search
  })))), renderSearchResults());
};

Search.propTypes = {
  itemsPerPage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
};
Search.defaultProps = {
  itemsPerPage: 50
};
/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/selected-locations/selected.locations.item.js":
/*!*********************************************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/selected-locations/selected.locations.item.js ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_icon_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/icon/icon */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _common_thumbnail_thumbnail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/thumbnail/thumbnail */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/thumbnail/thumbnail.js");
/* harmony import */ var _universal_discovery_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../universal.discovery.module */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var SelectedLocationsItem = function SelectedLocationsItem(_ref) {
  var location = _ref.location,
      permissions = _ref.permissions;
  var refSelectedLocationsItem = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_4__["SelectedLocationsContext"]),
      _useContext2 = _slicedToArray(_useContext, 2),
      selectedLocations = _useContext2[0],
      dispatchSelectedLocationsAction = _useContext2[1];

  var contentTypesMap = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_4__["ContentTypesMapContext"]);
  var clearLabel = Translator.trans(
  /*@Desc("Clear selection")*/
  'selected_locations.clear_selection', {}, 'universal_discovery_widget');

  var removeFromSelection = function removeFromSelection() {
    window.eZ.helpers.tooltips.hideAll(refSelectedLocationsItem.current);
    dispatchSelectedLocationsAction({
      type: 'REMOVE_SELECTED_LOCATION',
      id: location.id
    });
  };

  var sortedActions = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    var selectedItemActions = window.eZ.adminUiConfig.universalDiscoveryWidget.selectedItemActions;
    var actions = selectedItemActions ? _toConsumableArray(selectedItemActions) : [];
    return actions.sort(function (actionA, actionB) {
      return actionB.priority - actionA.priority;
    });
  }, []);
  var version = location.ContentInfo.Content.CurrentVersion.Version;
  var thumbnailData = version ? version.Thumbnail : {};
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.eZ.helpers.tooltips.parse(refSelectedLocationsItem.current);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-selected-locations-item",
    ref: refSelectedLocationsItem
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-selected-locations-item__image-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_thumbnail_thumbnail__WEBPACK_IMPORTED_MODULE_3__["default"], {
    thumbnailData: thumbnailData
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-selected-locations-item__info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "c-selected-locations-item__info-name"
  }, location.ContentInfo.Content.TranslatedName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "c-selected-locations-item__info-description"
  }, contentTypesMap[location.ContentInfo.Content.ContentType._href].name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-selected-locations-item__actions-wrapper"
  }, sortedActions.map(function (action) {
    var Component = action.component;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, {
      key: action.id,
      location: location,
      permissions: permissions
    });
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "c-selected-locations-item__remove-button btn btn-icon",
    onClick: removeFromSelection,
    title: clearLabel,
    "data-tooltip-container-selector": ".c-udw-tab"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "trash",
    extraClasses: "ez-icon--small-medium"
  }))));
};

SelectedLocationsItem.propTypes = {
  location: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  permissions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (SelectedLocationsItem);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/selected-locations/selected.locations.js":
/*!****************************************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/selected-locations/selected.locations.js ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_icon_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/icon/icon */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _selected_locations_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selected.locations.item */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/selected-locations/selected.locations.item.js");
/* harmony import */ var _common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/helpers/css.class.names */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _universal_discovery_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../universal.discovery.module */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var SelectedLocations = function SelectedLocations() {
  var refSelectedLocations = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var refTogglerButton = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_4__["SelectedLocationsContext"]),
      _useContext2 = _slicedToArray(_useContext, 2),
      selectedLocations = _useContext2[0],
      dispatchSelectedLocationsAction = _useContext2[1];

  var allowConfirmation = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_4__["AllowConfirmationContext"]);
  var onConfirm = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_4__["ConfirmContext"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      isExpanded = _useState2[0],
      setIsExpanded = _useState2[1];

  var className = Object(_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__["createCssClassNames"])({
    'c-selected-locations': true,
    'c-selected-locations--expanded': isExpanded
  });
  var expandLabel = Translator.trans(
  /*@Desc("Expand sidebar")*/
  'selected_locations.expand.sidebar', {}, 'universal_discovery_widget');
  var collapseLabel = Translator.trans(
  /*@Desc("Collapse sidebar")*/
  'selected_locations.collapse.sidebar', {}, 'universal_discovery_widget');
  var togglerLabel = isExpanded ? collapseLabel : expandLabel;

  var clearSelection = function clearSelection() {
    window.eZ.helpers.tooltips.hideAll(refSelectedLocations.current);
    dispatchSelectedLocationsAction({
      type: 'CLEAR_SELECTED_LOCATIONS'
    });
  };

  var toggleExpanded = function toggleExpanded() {
    setIsExpanded(!isExpanded);
  };

  var renderSelectionCounter = function renderSelectionCounter() {
    var selectedLabel = Translator.trans(
    /*@Desc("selected")*/
    'selected_locations.selected', {}, 'universal_discovery_widget');
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "c-selected-locations__selection-counter"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "c-selected-locations__selection-count"
    }, selectedLocations.length), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "c-selected-locations__selection-count-label"
    }, selectedLabel));
  };

  var renderToggleButton = function renderToggleButton() {
    var iconName = isExpanded ? 'caret-next' : 'caret-back';
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      ref: refTogglerButton,
      type: "button",
      className: "c-selected-locations__toggle-button btn btn-icon",
      onClick: toggleExpanded,
      title: togglerLabel,
      "data-tooltip-container-selector": ".c-udw-tab"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
      name: iconName,
      extraClasses: "ez-icon--small ez-icon--secondary"
    }));
  };

  var renderActionButtons = function renderActionButtons() {
    var confirmSelectionLabel = Translator.trans(
    /*@Desc("Confirm selection")*/
    'selected_locations.confirm_selection', {}, 'universal_discovery_widget');
    var clearAllLabel = Translator.trans(
    /*@Desc("Clear all")*/
    'selected_locations.clear_all', {}, 'universal_discovery_widget');
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "button",
      className: "c-selected-locations__confirm-button btn btn-icon",
      onClick: function onClick() {
        return onConfirm();
      },
      title: confirmSelectionLabel,
      "data-tooltip-container-selector": ".c-udw-tab"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
      name: "checkmark",
      extraClasses: "ez-icon--small-medium ez-icon--secondary"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "button",
      className: "c-selected-locations__clear-selection-button btn btn-icon",
      onClick: clearSelection,
      title: clearAllLabel,
      "data-tooltip-container-selector": ".c-udw-tab"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
      name: "trash",
      extraClasses: "ez-icon--small-medium ez-icon--secondary"
    })));
  };

  var renderLocationsList = function renderLocationsList() {
    if (!isExpanded) {
      return null;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "c-selected-locations__items-wrapper"
    }, selectedLocations.map(function (selectedLocation) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_selected_locations_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
        key: selectedLocation.location.id,
        location: selectedLocation.location,
        permissions: selectedLocation.permissions
      });
    }));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.eZ.helpers.tooltips.parse(refSelectedLocations.current);
    window.eZ.helpers.tooltips.hideAll();

    if (refTogglerButton.current) {
      refTogglerButton.current.dataset.originalTitle = togglerLabel;
    }
  }, [isExpanded]);

  if (!allowConfirmation) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: className,
    ref: refSelectedLocations
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-selected-locations__header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-selected-locations__actions-wrapper"
  }, renderToggleButton(), !isExpanded && renderActionButtons(), isExpanded && renderSelectionCounter(), isExpanded && renderActionButtons()), !isExpanded && renderSelectionCounter()), renderLocationsList());
};

/* harmony default export */ __webpack_exports__["default"] = (SelectedLocations);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/tab-selector/tab.selector.js":
/*!****************************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/tab-selector/tab.selector.js ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_icon_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/icon/icon */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/helpers/css.class.names */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _universal_discovery_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../universal.discovery.module */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var TabSelector = function TabSelector() {
  var tabs = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_3__["TabsContext"]);
  var tabsConfig = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_3__["TabsConfigContext"]);

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_3__["ActiveTabContext"]),
      _useContext2 = _slicedToArray(_useContext, 2),
      activeTab = _useContext2[0],
      setActiveTab = _useContext2[1];

  var sortedTabs = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return tabs.sort(function (tabA, tabB) {
      if (!tabsConfig[tabB.id] || !tabsConfig[tabA.id]) {
        return 0;
      }

      return tabsConfig[tabB.id].priority - tabsConfig[tabA.id].priority;
    });
  }, [tabs, tabsConfig]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-tab-selector"
  }, sortedTabs.map(function (tab) {
    if (tab.isHiddenOnList || tabsConfig[tab.id] && tabsConfig[tab.id].hidden) {
      return null;
    }

    var onClick = function onClick() {
      return setActiveTab(tab.id);
    };

    var className = Object(_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__["createCssClassNames"])({
      'c-tab-selector__item': true,
      'c-tab-selector__item--selected': tab.id === activeTab
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: className,
      key: tab.id,
      onClick: onClick
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
      customPath: tab.icon,
      extraClasses: "ez-icon--small-medium"
    }), tab.label);
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (TabSelector);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/tab/tab.js":
/*!**********************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/tab/tab.js ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _top_menu_top_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../top-menu/top.menu */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/top-menu/top.menu.js");
/* harmony import */ var _tab_selector_tab_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tab-selector/tab.selector */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/tab-selector/tab.selector.js");
/* harmony import */ var _selected_locations_selected_locations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../selected-locations/selected.locations */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/selected-locations/selected.locations.js");
/* harmony import */ var _content_create_widget_content_create_widget__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../content-create-widget/content.create.widget */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/content-create-widget/content.create.widget.js");
/* harmony import */ var _universal_discovery_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../universal.discovery.module */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var Tab = function Tab(_ref) {
  var children = _ref.children,
      actionsDisabledMap = _ref.actionsDisabledMap;
  var ContentMetaPreview = window.eZ.adminUiConfig.universalDiscoveryWidget.contentMetaPreview;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_6__["SelectedLocationsContext"]),
      _useContext2 = _slicedToArray(_useContext, 2),
      selectedLocations = _useContext2[0],
      dispatchSelectedLocationsAction = _useContext2[1];

  var selectedLocationsComponent = !!selectedLocations.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_selected_locations_selected_locations__WEBPACK_IMPORTED_MODULE_4__["default"], null) : null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-udw-tab"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-udw-tab__top-bar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_top_menu_top_menu__WEBPACK_IMPORTED_MODULE_2__["default"], {
    actionsDisabledMap: actionsDisabledMap
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-udw-tab__left-sidebar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_content_create_widget_content_create_widget__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tab_selector_tab_selector__WEBPACK_IMPORTED_MODULE_3__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-udw-tab__main"
  }, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-udw-tab__right-sidebar"
  }, ContentMetaPreview && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContentMetaPreview, null), selectedLocationsComponent));
};

Tab.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any.isRequired,
  actionsDisabledMap: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
Tab.defaultProps = {
  actionsDisabledMap: {
    'content-create-button': false,
    'sort-switcher': false,
    'view-switcher': false
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Tab);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/toggle-selection-button/toggle.selection.button.js":
/*!**************************************************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/toggle-selection-button/toggle.selection.button.js ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _universal_discovery_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../universal.discovery.module */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js");
/* harmony import */ var _pure_toggle_selection_button_pure_toggle_selection_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pure-toggle-selection-button/pure.toggle.selection.button */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/pure-toggle-selection-button/pure.toggle.selection.button.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var ToggleSelectionButton = function ToggleSelectionButton(_ref) {
  var location = _ref.location;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_2__["SelectedLocationsContext"]),
      _useContext2 = _slicedToArray(_useContext, 2),
      selectedLocations = _useContext2[0],
      dispatchSelectedLocationsAction = _useContext2[1];

  var isSelected = selectedLocations.some(function (selectedItem) {
    return selectedItem.location.id === location.id;
  });

  var toggleSelection = function toggleSelection() {
    var action = isSelected ? {
      type: 'REMOVE_SELECTED_LOCATION',
      id: location.id
    } : {
      type: 'ADD_SELECTED_LOCATION',
      location: location
    };
    dispatchSelectedLocationsAction(action);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pure_toggle_selection_button_pure_toggle_selection_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    isSelected: isSelected,
    toggleSelection: toggleSelection
  });
};

ToggleSelectionButton.propTypes = {
  location: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ToggleSelectionButton);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/top-menu/top.menu.js":
/*!********************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/top-menu/top.menu.js ***!
  \********************************************************************************************************************************/
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
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }






var TopMenu = function TopMenu(_ref) {
  var actionsDisabledMap = _ref.actionsDisabledMap;
  var title = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_3__["TitleContext"]);
  var cancelUDW = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_3__["CancelContext"]);
  var sortedActions = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    var actions = _toConsumableArray(window.eZ.adminUiConfig.universalDiscoveryWidget.topMenuActions);

    return actions.sort(function (actionA, actionB) {
      return actionB.priority - actionA.priority;
    });
  }, []);
  var backTitle = Translator.trans(
  /*@Desc("Back")*/
  'back.label', {}, 'universal_discovery_widget');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-top-menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "c-top-menu__cancel-btn-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "c-top-menu__cancel-btn btn btn-icon",
    type: "button",
    onClick: cancelUDW,
    title: backTitle,
    "data-tooltip-container-selector": ".c-top-menu__cancel-btn-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "caret-back",
    extraClasses: "ez-icon--secondary ez-icon--small"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "c-top-menu__title-wrapper"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-top-menu__actions-wrapper"
  }, sortedActions.map(function (action) {
    var Component = action.component;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, {
      key: action.id,
      isDisabled: actionsDisabledMap[action.id]
    });
  })));
};

TopMenu.propTypes = {
  actionsDisabledMap: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
TopMenu.defaultProps = {
  actionsDisabledMap: {
    'content-create-button': false,
    'sort-switcher': false,
    'view-switcher': false
  }
};
/* harmony default export */ __webpack_exports__["default"] = (TopMenu);

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

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/tree-view/tree.view.js":
/*!**********************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/tree-view/tree.view.js ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _content_tree_content_tree_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../content-tree/content.tree.module */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/content-tree/content.tree.module.js");
/* harmony import */ var _services_universal_discovery_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/universal.discovery.service */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/services/universal.discovery.service.js");
/* harmony import */ var _content_meta_preview_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../content.meta.preview.module */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/content.meta.preview.module.js");
/* harmony import */ var _universal_discovery_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../universal.discovery.module */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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








var flattenTree = function flattenTree(tree) {
  return tree.reduce(function (output, branch) {
    return [].concat(_toConsumableArray(output), [branch.locationId], _toConsumableArray(flattenTree(branch.subitems)));
  }, []);
};

var TreeView = function TreeView(_ref) {
  var itemsPerPage = _ref.itemsPerPage;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_5__["LoadedLocationsMapContext"]),
      _useContext2 = _slicedToArray(_useContext, 2),
      loadedLocationsMap = _useContext2[0],
      dispatchLoadedLocationsAction = _useContext2[1];

  var _useContext3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_5__["MarkedLocationIdContext"]),
      _useContext4 = _slicedToArray(_useContext3, 2),
      markedLocationId = _useContext4[0],
      setMarkedLocationId = _useContext4[1];

  var _useContext5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_5__["MultipleConfigContext"]),
      _useContext6 = _slicedToArray(_useContext5, 2),
      multiple = _useContext6[0],
      multipleItemsLimit = _useContext6[1];

  var _useContext7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_5__["SelectedLocationsContext"]),
      _useContext8 = _slicedToArray(_useContext7, 2),
      selectedLocations = _useContext8[0],
      dispatchSelectedLocationsAction = _useContext8[1];

  var _useContext9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_5__["SortOrderContext"]),
      _useContext10 = _slicedToArray(_useContext9, 2),
      sortOrder = _useContext10[0],
      setSortOrder = _useContext10[1];

  var _useContext11 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_5__["SortingContext"]),
      _useContext12 = _slicedToArray(_useContext11, 2),
      sorting = _useContext12[0],
      setSorting = _useContext12[1];

  var allowedContentTypes = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_5__["AllowedContentTypesContext"]);
  var containersOnly = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_5__["ContainersOnlyContext"]);
  var contentTypesMap = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_5__["ContentTypesMapContext"]);
  var restInfo = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_5__["RestInfoContext"]);
  var rootLocationId = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_5__["RootLocationIdContext"]);
  var locationData = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return Object(_content_meta_preview_module__WEBPACK_IMPORTED_MODULE_4__["getLocationData"])(loadedLocationsMap, markedLocationId);
  }, [markedLocationId, loadedLocationsMap]);
  var userId = window.eZ.helpers.user.getId();

  var expandItem = function expandItem(item, event) {
    event.preventDefault();
    event.currentTarget.closest('.c-list-item__label').querySelector('.c-list-item__toggler').click();
  };

  var markLocation = function markLocation(item) {
    var locationId = item.locationId;

    if (locationId === markedLocationId) {
      return;
    }

    Object(_services_universal_discovery_service__WEBPACK_IMPORTED_MODULE_3__["loadAccordionData"])(_objectSpread(_objectSpread({}, restInfo), {}, {
      parentLocationId: locationId,
      sortClause: sorting,
      sortOrder: sortOrder,
      rootLocationId: rootLocationId
    }), function (locationsMap) {
      var location = locationsMap[locationsMap.length - 1].location;
      var contentTypeInfo = contentTypesMap[location.ContentInfo.Content.ContentType._href];
      var isContainer = contentTypeInfo.isContainer;
      var isNotSelectable = containersOnly && !isContainer || allowedContentTypes && !allowedContentTypes.includes(contentTypeInfo.identifier);
      setMarkedLocationId(locationId);
      dispatchLoadedLocationsAction({
        type: 'SET_LOCATIONS',
        data: locationsMap
      });

      if (!multiple && !isNotSelectable) {
        dispatchSelectedLocationsAction({
          type: 'REPLACE_SELECTED_LOCATIONS',
          locations: [{
            location: location
          }]
        });
      }
    });
  };

  var readSubtreeRecursive = function readSubtreeRecursive(tree) {
    if (tree.length === 0) {
      return [];
    }

    var location = tree.shift();
    return [{
      children: readSubtreeRecursive(tree),
      limit: itemsPerPage,
      locationId: location.parentLocationId,
      offset: 0,
      '_media-type': 'application/vnd.ez.api.ContentTreeLoadSubtreeRequestNode'
    }];
  };

  var readSubtree = function readSubtree() {
    return readSubtreeRecursive(_toConsumableArray(loadedLocationsMap));
  };

  var currentLocationPath = locationData && locationData.location ? locationData.location.pathString : '/1/';
  var locationsLoaded = loadedLocationsMap.length > 1 || loadedLocationsMap.length === 1 && loadedLocationsMap[0].subitems.length > 0;
  var contentTreeVisible = markedLocationId !== null && locationsLoaded || markedLocationId === null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-tree"
  }, contentTreeVisible && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_content_tree_content_tree_module__WEBPACK_IMPORTED_MODULE_2__["default"], {
    userId: userId,
    currentLocationPath: currentLocationPath,
    rootLocationId: rootLocationId,
    restInfo: restInfo,
    onClickItem: expandItem,
    readSubtree: readSubtree,
    afterItemToggle: markLocation,
    sort: {
      sortClause: sorting,
      sortOrder: sortOrder
    }
  }));
};

TreeView.propTypes = {
  itemsPerPage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
};
TreeView.defaultProps = {
  itemsPerPage: 50
};
/* harmony default export */ __webpack_exports__["default"] = (TreeView);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/content.create.tab.module.js":
/*!*****************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/content.create.tab.module.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _universal_discovery_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./universal.discovery.module */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js");
/* harmony import */ var _services_universal_discovery_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/universal.discovery.service */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/services/universal.discovery.service.js");
/* harmony import */ var _common_helpers_deep_clone_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/helpers/deep.clone.helper */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/deep.clone.helper.js");
/* harmony import */ var _common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/helpers/css.class.names */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var generateIframeUrl = function generateIframeUrl(_ref) {
  var locationId = _ref.locationId,
      languageCode = _ref.languageCode,
      contentTypeIdentifier = _ref.contentTypeIdentifier;
  return window.Routing.generate('ezplatform.content_on_the_fly.create', {
    locationId: locationId,
    languageCode: languageCode,
    contentTypeIdentifier: contentTypeIdentifier
  });
};

var ContentCreateTabModule = function ContentCreateTabModule() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      _useState2 = _slicedToArray(_useState, 2),
      footerVisible = _useState2[0],
      setFooterVisible = _useState2[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_1__["ContentOnTheFlyDataContext"]),
      _useContext2 = _slicedToArray(_useContext, 2),
      contentOnTheFlyData = _useContext2[0],
      setContentOnTheFlyData = _useContext2[1];

  var tabs = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_1__["TabsContext"]);
  var contentOnTheFlyConfig = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_1__["ContentOnTheFlyConfigContext"]);
  var onConfirm = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_1__["ConfirmContext"]);
  var restInfo = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_1__["RestInfoContext"]);

  var _useContext3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_1__["ActiveTabContext"]),
      _useContext4 = _slicedToArray(_useContext3, 2),
      activeTab = _useContext4[0],
      setActiveTab = _useContext4[1];

  var _useContext5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_1__["CreateContentWidgetContext"]),
      _useContext6 = _slicedToArray(_useContext5, 2),
      createContentVisible = _useContext6[0],
      setCreateContentVisible = _useContext6[1];

  var _useContext7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_1__["SelectedLocationsContext"]),
      _useContext8 = _slicedToArray(_useContext7, 2),
      selectedLocations = _useContext8[0],
      dispatchSelectedLocationsAction = _useContext8[1];

  var _useContext9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_1__["LoadedLocationsMapContext"]),
      _useContext10 = _slicedToArray(_useContext9, 2),
      loadedLocationsMap = _useContext10[0],
      dispatchLoadedLocationsAction = _useContext10[1];

  var _useContext11 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_1__["MultipleConfigContext"]),
      _useContext12 = _slicedToArray(_useContext11, 2),
      multiple = _useContext12[0],
      multipleItemsLimit = _useContext12[1];

  var iframeUrl = generateIframeUrl(contentOnTheFlyData);
  var iframeRef = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])();

  var cancelContentCreate = function cancelContentCreate() {
    setCreateContentVisible(false);
    setContentOnTheFlyData({});
    setActiveTab(tabs[0].id);
  };

  var publishContent = function publishContent() {
    var submitButton = iframeRef.current.contentWindow.document.body.querySelector('[data-action="publish"]');

    if (submitButton) {
      submitButton.click();
    }
  };

  var handleIframeLoad = function handleIframeLoad() {
    var locationId = iframeRef.current.contentWindow.document.querySelector('meta[name="LocationID"]');

    if (locationId) {
      Object(_services_universal_discovery_service__WEBPACK_IMPORTED_MODULE_2__["findLocationsById"])(_objectSpread(_objectSpread({}, restInfo), {}, {
        id: parseInt(locationId.content, 10)
      }), function (createdItems) {
        if (contentOnTheFlyConfig.autoConfirmAfterPublish) {
          var items = multiple ? [].concat(_toConsumableArray(selectedLocations), [{
            location: createdItems[0]
          }]) : [{
            location: createdItems[0]
          }];
          onConfirm(items);
          return;
        }

        var clonedLoadedLocations = Object(_common_helpers_deep_clone_helper__WEBPACK_IMPORTED_MODULE_3__["default"])(loadedLocationsMap);
        var parentLocationData = clonedLoadedLocations[clonedLoadedLocations.length - 1];
        var action = multiple ? {
          type: 'ADD_SELECTED_LOCATION',
          location: createdItems[0]
        } : {
          type: 'REPLACE_SELECTED_LOCATIONS',
          locations: [{
            location: createdItems[0]
          }]
        };
        parentLocationData.subitems = [];
        parentLocationData.totalCount = parentLocationData.totalCount + 1;
        dispatchLoadedLocationsAction({
          type: 'SET_LOCATIONS',
          data: clonedLoadedLocations
        });
        dispatchSelectedLocationsAction(action);
        cancelContentCreate();
      });
    }

    iframeRef.current.contentWindow.document.body.addEventListener('ez-udw-opened', hideFooter, false);
    iframeRef.current.contentWindow.document.body.addEventListener('ez-udw-closed', showFooter, false);
  };

  var hideFooter = function hideFooter() {
    return setFooterVisible(false);
  };

  var showFooter = function showFooter() {
    return setFooterVisible(true);
  };

  var cancelLabel = Translator.trans(
  /*@Desc("Cancel")*/
  'content_create.cancel.label', {}, 'universal_discovery_widget');
  var confirmLabel = Translator.trans(
  /*@Desc("Confirm")*/
  'content_create.confirm.label', {}, 'universal_discovery_widget');
  var className = Object(_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_4__["createCssClassNames"])({
    'm-content-create': true,
    'm-content-create--footer-visible': footerVisible
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.document.body.addEventListener('ez-udw-hide-footer', hideFooter, false);
    window.document.body.addEventListener('ez-udw-show-footer', showFooter, false);
    return function () {
      window.document.body.removeEventListener('ez-udw-hide-footer', hideFooter, false);
      window.document.body.removeEventListener('ez-udw-show-footer', showFooter, false);
    };
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: className
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
    src: iframeUrl,
    className: "m-content-create__iframe",
    ref: iframeRef,
    onLoad: handleIframeLoad
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "m-content-create__actions"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "m-content-create__cancel-button btn btn-gray",
    onClick: cancelContentCreate
  }, cancelLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "m-content-create__confirm-button btn btn-primary",
    onClick: publishContent
  }, confirmLabel)));
};

eZ.addConfig('adminUiConfig.universalDiscoveryWidget.tabs', [{
  id: 'content-create',
  component: ContentCreateTabModule,
  label: Translator.trans(
  /*@Desc("Content create")*/
  'content_create.label', {}, 'universal_discovery_widget'),
  icon: window.eZ.helpers.icon.getIconPath('search'),
  isHiddenOnList: true
}], true);
/* harmony default export */ __webpack_exports__["default"] = (ContentCreateTabModule);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/content.edit.tab.module.js":
/*!***************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/content.edit.tab.module.js ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _universal_discovery_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./universal.discovery.module */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js");
/* harmony import */ var _services_universal_discovery_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/universal.discovery.service */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/services/universal.discovery.service.js");
/* harmony import */ var _common_helpers_deep_clone_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/helpers/deep.clone.helper */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/deep.clone.helper.js");
/* harmony import */ var _common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/helpers/css.class.names */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var ContentEditTabModule = function ContentEditTabModule() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      _useState2 = _slicedToArray(_useState, 2),
      footerVisible = _useState2[0],
      setFooterVisible = _useState2[1];

  var restInfo = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_1__["RestInfoContext"]);
  var tabs = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_1__["TabsContext"]);

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_1__["ActiveTabContext"]),
      _useContext2 = _slicedToArray(_useContext, 2),
      activeTab = _useContext2[0],
      setActiveTab = _useContext2[1];

  var _useContext3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_1__["LoadedLocationsMapContext"]),
      _useContext4 = _slicedToArray(_useContext3, 2),
      loadedLocationsMap = _useContext4[0],
      dispatchLoadedLocationsAction = _useContext4[1];

  var _useContext5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_1__["SelectedLocationsContext"]),
      _useContext6 = _slicedToArray(_useContext5, 2),
      selectedLocations = _useContext6[0],
      dispatchSelectedLocationsAction = _useContext6[1];

  var _useContext7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_1__["EditOnTheFlyDataContext"]),
      _useContext8 = _slicedToArray(_useContext7, 2),
      editOnTheFlyData = _useContext8[0],
      setEditOnTheFlyData = _useContext8[1];

  var cancelLabel = Translator.trans(
  /*@Desc("Cancel")*/
  'content_edit.cancel.label', {}, 'universal_discovery_widget');
  var confirmLabel = Translator.trans(
  /*@Desc("Confirm")*/
  'content_edit.confirm.label', {}, 'universal_discovery_widget');
  var iframeRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  var publishContent = function publishContent() {
    var submitButton = iframeRef.current.contentWindow.document.body.querySelector('[data-action="publish"]');

    if (submitButton) {
      submitButton.click();
    }
  };

  var cancelContentEdit = function cancelContentEdit() {
    setActiveTab(tabs[0].id);
    setEditOnTheFlyData({});
  };

  var handleContentPublished = function handleContentPublished(locationId) {
    var clonedLocationsMap = Object(_common_helpers_deep_clone_helper__WEBPACK_IMPORTED_MODULE_3__["default"])(loadedLocationsMap);
    var isInSubitems = false;
    Object(_services_universal_discovery_service__WEBPACK_IMPORTED_MODULE_2__["findLocationsByParentLocationId"])(_objectSpread(_objectSpread({}, restInfo), {}, {
      parentLocationId: locationId
    }), function (response) {
      var clonedSelectedLocation = Object(_common_helpers_deep_clone_helper__WEBPACK_IMPORTED_MODULE_3__["default"])(selectedLocations);
      var index = clonedSelectedLocation.findIndex(function (clonedLocation) {
        return clonedLocation.location.id === locationId;
      });

      if (index !== -1) {
        clonedSelectedLocation[index].location = response.location;
        dispatchSelectedLocationsAction({
          type: 'REPLACE_SELECTED_LOCATIONS',
          locations: clonedSelectedLocation
        });
      }

      dispatchLoadedLocationsAction({
        type: 'UPDATE_LOCATIONS',
        data: response
      });
    });
    clonedLocationsMap.forEach(function (clonedLocation) {
      var subitem = clonedLocation.subitems.find(function (subitem) {
        return subitem.location.id === locationId;
      });

      if (subitem) {
        clonedLocation.subitems = [];
        isInSubitems = true;
      }
    });

    if (isInSubitems) {
      dispatchLoadedLocationsAction({
        type: 'SET_LOCATIONS',
        data: clonedLocationsMap
      });
    }

    cancelContentEdit();
  };

  var handleIframeLoad = function handleIframeLoad() {
    var locationId = iframeRef.current.contentWindow.document.querySelector('meta[name="LocationID"]');

    if (locationId) {
      handleContentPublished(parseInt(locationId.content, 10));
    }

    iframeRef.current.contentWindow.document.body.addEventListener('ez-udw-opened', hideFooter, false);
    iframeRef.current.contentWindow.document.body.addEventListener('ez-udw-closed', showFooter, false);
  };

  var hideFooter = function hideFooter() {
    return setFooterVisible(false);
  };

  var showFooter = function showFooter() {
    return setFooterVisible(true);
  };

  var iframeUrl = window.Routing.generate('ezplatform.content_on_the_fly.edit', {
    contentId: editOnTheFlyData.contentId,
    versionNo: editOnTheFlyData.versionNo,
    languageCode: editOnTheFlyData.languageCode,
    locationId: editOnTheFlyData.locationId
  }, true);
  var className = Object(_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_4__["createCssClassNames"])({
    'c-content-edit': true,
    'c-content-edit--footer-visible': footerVisible
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.document.body.addEventListener('ez-udw-hide-footer', hideFooter, false);
    window.document.body.addEventListener('ez-udw-show-footer', showFooter, false);
    return function () {
      window.document.body.removeEventListener('ez-udw-hide-footer', hideFooter, false);
      window.document.body.removeEventListener('ez-udw-show-footer', showFooter, false);
    };
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: className
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
    src: iframeUrl,
    className: "c-content-edit__iframe",
    ref: iframeRef,
    onLoad: handleIframeLoad
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-content-edit__actions"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "c-content-edit__cancel-button btn btn-gray",
    onClick: cancelContentEdit
  }, cancelLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "c-content-edit__confirm-button btn btn-primary",
    onClick: publishContent
  }, confirmLabel)));
};

eZ.addConfig('adminUiConfig.universalDiscoveryWidget.tabs', [{
  id: 'content-edit',
  component: ContentEditTabModule,
  label: Translator.trans(
  /*@Desc("Content edit")*/
  'content_edit.label', {}, 'universal_discovery_widget'),
  isHiddenOnList: true
}], true);
/* harmony default export */ __webpack_exports__["default"] = (ContentEditTabModule);

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

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/hooks/useFindLocationsByParentLocationIdFetch.js":
/*!*************************************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/hooks/useFindLocationsByParentLocationIdFetch.js ***!
  \*************************************************************************************************************************************************/
/*! exports provided: useFindLocationsByParentLocationIdFetch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFindLocationsByParentLocationIdFetch", function() { return useFindLocationsByParentLocationIdFetch; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_universal_discovery_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/universal.discovery.service */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/services/universal.discovery.service.js");
/* harmony import */ var _universal_discovery_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../universal.discovery.module */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var fetchInitialState = {
  dataFetched: false,
  data: {}
};

var fetchReducer = function fetchReducer(state, action) {
  switch (action.type) {
    case 'FETCH_START':
      return fetchInitialState;

    case 'FETCH_END':
      return {
        data: action.data,
        dataFetched: true
      };

    default:
      throw new Error();
  }
};

var useFindLocationsByParentLocationIdFetch = function useFindLocationsByParentLocationIdFetch(locationData, _ref, limit, offset) {
  var sortClause = _ref.sortClause,
      sortOrder = _ref.sortOrder;
  var gridView = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var restInfo = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_2__["RestInfoContext"]);

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(fetchReducer, fetchInitialState),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var effectCleaned = false;

    if (!locationData.parentLocationId || locationData.collapsed || locationData.subitems.length >= locationData.totalCount || locationData.subitems.length >= limit + offset) {
      dispatch({
        type: 'FETCH_END',
        data: {}
      });
      return;
    }

    dispatch({
      type: 'FETCH_START'
    });
    Object(_services_universal_discovery_service__WEBPACK_IMPORTED_MODULE_1__["findLocationsByParentLocationId"])(_objectSpread(_objectSpread({}, restInfo), {}, {
      parentLocationId: locationData.parentLocationId,
      sortClause: sortClause,
      sortOrder: sortOrder,
      limit: limit,
      offset: offset,
      gridView: gridView
    }), function (response) {
      if (effectCleaned) {
        return;
      }

      dispatch({
        type: 'FETCH_END',
        data: response
      });
    });
    return function () {
      effectCleaned = true;
    };
  }, [restInfo, sortClause, sortOrder, locationData.parentLocationId, locationData.subitems.length, limit, offset, gridView, locationData.collapsed]);
  return [state.data, !state.dataFetched];
};

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/hooks/useLoadBookmarksFetch.js":
/*!*******************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/hooks/useLoadBookmarksFetch.js ***!
  \*******************************************************************************************************************************/
/*! exports provided: useLoadBookmarksFetch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLoadBookmarksFetch", function() { return useLoadBookmarksFetch; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_universal_discovery_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/universal.discovery.service */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/services/universal.discovery.service.js");
/* harmony import */ var _universal_discovery_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../universal.discovery.module */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var fetchInitialState = {
  dataFetched: false,
  data: {}
};

var fetchReducer = function fetchReducer(state, action) {
  switch (action.type) {
    case 'FETCH_START':
      return fetchInitialState;

    case 'FETCH_END':
      return {
        data: action.data,
        dataFetched: true
      };

    default:
      throw new Error();
  }
};

var useLoadBookmarksFetch = function useLoadBookmarksFetch(limit, offset) {
  var restInfo = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_2__["RestInfoContext"]);

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(fetchReducer, fetchInitialState),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var effectCleaned = false;
    dispatch({
      type: 'FETCH_START'
    });
    Object(_services_universal_discovery_service__WEBPACK_IMPORTED_MODULE_1__["loadBookmarks"])(_objectSpread(_objectSpread({}, restInfo), {}, {
      limit: limit,
      offset: offset
    }), function (response) {
      if (effectCleaned) {
        return;
      }

      dispatch({
        type: 'FETCH_END',
        data: response
      });
    });
    return function () {
      effectCleaned = true;
    };
  }, [restInfo, limit, offset]);
  return [state.data, !state.dataFetched];
};

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

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/hooks/useSearchByQueryFetch.js":
/*!*******************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/hooks/useSearchByQueryFetch.js ***!
  \*******************************************************************************************************************************/
/*! exports provided: useSearchByQueryFetch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSearchByQueryFetch", function() { return useSearchByQueryFetch; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_universal_discovery_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/universal.discovery.service */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/services/universal.discovery.service.js");
/* harmony import */ var _universal_discovery_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../universal.discovery.module */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var SEARCH_START = 'SEARCH_START';
var SEARCH_END = 'SEARCH_END';

var startSearch = function startSearch() {
  return {
    isLoading: true,
    data: {}
  };
};

var endSearch = function endSearch(_ref) {
  var response = _ref.response;
  return {
    isLoading: false,
    data: response
  };
};

var searchByQueryReducer = function searchByQueryReducer(state, action) {
  switch (action.type) {
    case SEARCH_START:
      return startSearch();

    case SEARCH_END:
      return endSearch(action);

    default:
      throw new Error();
  }
};

var useSearchByQueryFetch = function useSearchByQueryFetch() {
  var restInfo = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_2__["RestInfoContext"]);

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(searchByQueryReducer, {
    isLoading: false,
    data: {}
  }),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      _useReducer2$ = _useReducer2[0],
      isLoading = _useReducer2$.isLoading,
      data = _useReducer2$.data,
      dispatch = _useReducer2[1];

  var searchByQuery = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (searchText, contentTypesIdentifiers, sectionIdentifier, subtreePathString, limit, offset, languageCode) {
    var handleFetch = function handleFetch(response) {
      dispatch({
        type: SEARCH_END,
        response: response
      });
    };

    var query = {
      FullTextCriterion: "".concat(searchText, "*")
    };

    if (contentTypesIdentifiers && contentTypesIdentifiers.length) {
      query.ContentTypeIdentifierCriterion = contentTypesIdentifiers;
    }

    if (sectionIdentifier) {
      query.SectionIdentifierCriterion = sectionIdentifier;
    }

    if (subtreePathString) {
      query.SubtreeCriterion = subtreePathString;
    }

    dispatch({
      type: SEARCH_START
    });
    Object(_services_universal_discovery_service__WEBPACK_IMPORTED_MODULE_1__["findLocationsBySearchQuery"])(_objectSpread(_objectSpread({}, restInfo), {}, {
      query: query,
      limit: limit,
      offset: offset,
      languageCode: languageCode
    }), handleFetch);
  }, [restInfo, dispatch]);
  return [isLoading, data, searchByQuery];
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

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/search.tab.module.js":
/*!*********************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/search.tab.module.js ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_tab_tab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/tab/tab */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/tab/tab.js");
/* harmony import */ var _components_search_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/search/search */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/search/search.js");
/* harmony import */ var _universal_discovery_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./universal.discovery.module */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js");





var SearchTabModule = function SearchTabModule() {
  var tabsConfig = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_3__["TabsConfigContext"]);
  var actionsDisabledMap = {
    'content-create-button': true,
    'sort-switcher': true,
    'view-switcher': true
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "m-search-tab"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_tab_tab__WEBPACK_IMPORTED_MODULE_1__["default"], {
    actionsDisabledMap: actionsDisabledMap
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_search_search__WEBPACK_IMPORTED_MODULE_2__["default"], {
    itemsPerPage: tabsConfig.search.itemsPerPage
  })));
};

eZ.addConfig('adminUiConfig.universalDiscoveryWidget.tabs', [{
  id: 'search',
  component: SearchTabModule,
  label: Translator.trans(
  /*@Desc("Search")*/
  'search.label', {}, 'universal_discovery_widget'),
  icon: window.eZ.helpers.icon.getIconPath('search')
}], true);
/* harmony default export */ __webpack_exports__["default"] = (SearchTabModule);

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

/***/ 27:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/browse.tab.module.js ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/bookmarks.tab.module.js ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/search.tab.module.js ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/content.create.tab.module.js ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/content.edit.tab.module.js ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/browse.tab.module.js */"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/browse.tab.module.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/bookmarks.tab.module.js */"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/bookmarks.tab.module.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/search.tab.module.js */"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/search.tab.module.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/content.create.tab.module.js */"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/content.create.tab.module.js");
module.exports = __webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/content.edit.tab.module.js */"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/content.edit.tab.module.js");


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

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ })

},[[27,"runtime"]]]);