(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ezplatform-admin-ui-udw-js"],{

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

/***/ 26:
/*!************************************************************************************************************************************!*\
  !*** multi ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js */"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js");


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

},[[26,"runtime"]]]);