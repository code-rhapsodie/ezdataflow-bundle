(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ezplatform-admin-ui-content-tree-js"],{

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

/***/ 31:
/*!**********************************************************************************************************************!*\
  !*** multi ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/content-tree/content.tree.module.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/content-tree/content.tree.module.js */"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/content-tree/content.tree.module.js");


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

},[[31,"runtime"]]]);