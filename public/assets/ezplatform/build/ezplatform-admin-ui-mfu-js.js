(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ezplatform-admin-ui-mfu-js"],{

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

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/tooltip-popup/tooltip.popup.component.js":
/*!****************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/tooltip-popup/tooltip.popup.component.js ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icon_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icon/icon */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var INITIAL_HEIGHT = 'initial';
var HEADER_HEIGHT = 35;

var TooltipPopupComponent = function TooltipPopupComponent(props) {
  var contentRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(INITIAL_HEIGHT),
      _useState2 = _slicedToArray(_useState, 2),
      maxHeight = _useState2[0],
      setMaxHeight = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(function () {
    var _contentRef$current$g = contentRef.current.getBoundingClientRect(),
        top = _contentRef$current$g.top,
        height = _contentRef$current$g.height;

    var topRounded = Math.round(top);

    if (topRounded < HEADER_HEIGHT) {
      setMaxHeight(height + topRounded - HEADER_HEIGHT);
    } else if (topRounded > HEADER_HEIGHT) {
      setMaxHeight(INITIAL_HEIGHT);
    }
  });
  var attrs = {
    className: 'c-tooltip-popup',
    hidden: !props.visible
  };
  var contentStyle = maxHeight === INITIAL_HEIGHT ? {} : {
    maxHeight: maxHeight,
    overflowY: 'scroll'
  };
  var closeLabel = Translator.trans(
  /*@Desc("Close")*/
  'tooltip.close_label', {}, 'content');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", attrs, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-tooltip-popup__header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-tooltip-popup__title"
  }, props.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-tooltip-popup__close",
    title: closeLabel,
    onClick: props.onClose,
    tabIndex: "-1",
    "data-tooltip-container-selector": ".c-tooltip-popup__header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "discard",
    extraClasses: "ez-icon--small"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-tooltip-popup__content",
    ref: contentRef,
    style: contentStyle
  }, props.children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-tooltip-popup__footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    "class": "btn btn-secondary",
    onClick: props.onClose
  }, closeLabel)));
};

TooltipPopupComponent.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired,
  visible: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
TooltipPopupComponent.defaultProps = {
  onClose: function onClose() {}
};
/* harmony default export */ __webpack_exports__["default"] = (TooltipPopupComponent);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/multi-file-upload/components/drop-area/drop.area.component.js":
/*!******************************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/multi-file-upload/components/drop-area/drop.area.component.js ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DropAreaComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_text_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/text.helper */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/multi-file-upload/helpers/text.helper.js");
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






var DropAreaComponent = /*#__PURE__*/function (_Component) {
  _inherits(DropAreaComponent, _Component);

  var _super = _createSuper(DropAreaComponent);

  function DropAreaComponent(props) {
    var _this;

    _classCallCheck(this, DropAreaComponent);

    _this = _super.call(this, props);
    _this._refFileInput = null;
    _this.openFileSelector = _this.openFileSelector.bind(_assertThisInitialized(_this));
    _this.handleUpload = _this.handleUpload.bind(_assertThisInitialized(_this));
    return _this;
  }
  /**
   * Opens a browser native file selector
   *
   * @method openFileSelector
   * @param {Event} event
   * @memberof DropAreaComponent
   */


  _createClass(DropAreaComponent, [{
    key: "openFileSelector",
    value: function openFileSelector(event) {
      event.preventDefault();

      this._refFileInput.click();
    }
    /**
     * Handles file upload
     *
     * @method handleUpload
     * @param {Event} event
     * @memberof DropAreaComponent
     */

  }, {
    key: "handleUpload",
    value: function handleUpload(event) {
      this.props.preventDefaultAction(event);
      this.props.onDrop(this.props.processUploadedFiles(event));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('drop', this.props.preventDefaultAction, false);
      window.addEventListener('dragover', this.props.preventDefaultAction, false);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('drop', this.props.preventDefaultAction, false);
      window.removeEventListener('dragover', this.props.preventDefaultAction, false);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var maxFileSizeMessage = Translator.trans(
      /*@Desc("Max file size:")*/
      'max_file_size.message', {}, 'multi_file_upload');
      var dropActionMessage = Translator.trans(
      /*@Desc("Drag your files to the browser window or select them")*/
      'drop_action.message', {}, 'multi_file_upload');
      var uploadBtnLabel = Translator.trans(
      /*@Desc("Upload sub-items")*/
      'upload_btn.label', {}, 'multi_file_upload');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        className: "c-drop-area",
        multiple: true,
        onDrop: this.handleUpload
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-drop-area__message c-drop-area__message--main"
      }, dropActionMessage), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        "class": "btn btn-primary c-drop-area__btn-select",
        onClick: this.openFileSelector,
        tabIndex: "-1"
      }, uploadBtnLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-drop-area__message c-drop-area__message--filesize"
      }, "(", maxFileSizeMessage, " ", Object(_helpers_text_helper__WEBPACK_IMPORTED_MODULE_2__["fileSizeToString"])(this.props.maxFileSize), ")"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "c-drop-area__input--hidden",
        ref: function ref(_ref) {
          return _this2._refFileInput = _ref;
        },
        id: "mfu-files",
        type: "file",
        name: "files[]",
        hidden: true,
        multiple: true,
        onChange: this.handleUpload
      }));
    }
  }]);

  return DropAreaComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


DropAreaComponent.propTypes = {
  onDrop: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  maxFileSize: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  processUploadedFiles: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  preventDefaultAction: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/multi-file-upload/components/progress-bar/progress.bar.component.js":
/*!************************************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/multi-file-upload/components/progress-bar/progress.bar.component.js ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var ProgressBarComponent = function ProgressBarComponent(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-progress-bar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-progress-bar__value",
    style: {
      width: "".concat(props.progress, "%")
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-progress-bar__label"
  }, "".concat(props.progress, "%")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-progress-bar__uploaded"
  }, props.uploaded, " of ", props.total));
};

ProgressBarComponent.propTypes = {
  progress: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  uploaded: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  total: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ProgressBarComponent);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/multi-file-upload/components/upload-list/upload.item.component.js":
/*!**********************************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/multi-file-upload/components/upload-list/upload.item.component.js ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UploadItemComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../progress-bar/progress.bar.component */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/multi-file-upload/components/progress-bar/progress.bar.component.js");
/* harmony import */ var _helpers_text_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/text.helper */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/multi-file-upload/helpers/text.helper.js");
/* harmony import */ var _common_icon_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/icon/icon */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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







var UploadItemComponent = /*#__PURE__*/function (_Component) {
  _inherits(UploadItemComponent, _Component);

  var _super = _createSuper(UploadItemComponent);

  function UploadItemComponent(props) {
    var _this;

    _classCallCheck(this, UploadItemComponent);

    _this = _super.call(this, props);
    _this.handleFileSizeNotAllowed = _this.handleFileSizeNotAllowed.bind(_assertThisInitialized(_this));
    _this.handleFileTypeNotAllowed = _this.handleFileTypeNotAllowed.bind(_assertThisInitialized(_this));
    _this.handleContentTypeNotAllowed = _this.handleContentTypeNotAllowed.bind(_assertThisInitialized(_this));
    _this.handleEditBtnClick = _this.handleEditBtnClick.bind(_assertThisInitialized(_this));
    _this.handleUploadAbort = _this.handleUploadAbort.bind(_assertThisInitialized(_this));
    _this.handleUploadError = _this.handleUploadError.bind(_assertThisInitialized(_this));
    _this.handleUploadLoad = _this.handleUploadLoad.bind(_assertThisInitialized(_this));
    _this.handleUploadProgress = _this.handleUploadProgress.bind(_assertThisInitialized(_this));
    _this.handleUploadEnd = _this.handleUploadEnd.bind(_assertThisInitialized(_this));
    _this.handleLoadStart = _this.handleLoadStart.bind(_assertThisInitialized(_this));
    _this.handleFileDeleted = _this.handleFileDeleted.bind(_assertThisInitialized(_this));
    _this.abortUploading = _this.abortUploading.bind(_assertThisInitialized(_this));
    _this.deleteFile = _this.deleteFile.bind(_assertThisInitialized(_this));
    _this.contentInfoInput = null;
    _this.contentVersionInfoInput = null;
    _this.contentVersionNoInput = null;
    _this.contentEditBtn = null;
    _this.state = {
      uploading: false,
      uploaded: props.isUploaded,
      disallowed: false,
      disallowedType: false,
      disallowedSize: false,
      disallowedContentType: false,
      aborted: false,
      failed: false,
      deleted: false,
      progress: 0,
      xhr: null,
      struct: props.data.struct || null,
      totalSize: Object(_helpers_text_helper__WEBPACK_IMPORTED_MODULE_3__["fileSizeToString"])(props.data.file.size),
      uploadedSize: '0'
    };
    return _this;
  }

  _createClass(UploadItemComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          data = _this$props.data,
          adminUiConfig = _this$props.adminUiConfig,
          parentInfo = _this$props.parentInfo,
          createFileStruct = _this$props.createFileStruct,
          isUploaded = _this$props.isUploaded,
          checkCanUpload = _this$props.checkCanUpload,
          contentCreatePermissionsConfig = _this$props.contentCreatePermissionsConfig,
          currentLanguage = _this$props.currentLanguage;
      this.contentInfoInput = window.document.querySelector('#form_subitems_content_edit_content_info');
      this.contentVersionInfoInput = window.document.querySelector('#form_subitems_content_edit_version_info_content_info');
      this.contentVersionNoInput = window.document.querySelector('#form_subitems_content_edit_version_info_version_no');
      this.contentEditBtn = window.document.querySelector('#form_subitems_content_edit_create');

      if (isUploaded) {
        return;
      }

      var config = _objectSpread(_objectSpread({}, adminUiConfig.multiFileUpload), {}, {
        contentCreatePermissionsConfig: contentCreatePermissionsConfig
      });

      var callbacks = {
        fileTypeNotAllowedCallback: this.handleFileTypeNotAllowed,
        fileSizeNotAllowedCallback: this.handleFileSizeNotAllowed,
        contentTypeNotAllowedCallback: this.handleContentTypeNotAllowed
      };

      if (!checkCanUpload(data.file, parentInfo, config, callbacks)) {
        this.setState(function () {
          return {
            uploading: false,
            disallowed: true,
            uploaded: false,
            aborted: false,
            failed: true
          };
        });
        return;
      }

      createFileStruct(data.file, {
        parentInfo: parentInfo,
        config: adminUiConfig,
        languageCode: currentLanguage
      }).then(this.initPublishFile.bind(this, adminUiConfig));
    }
    /**
     * Initializes file-based content publishing
     *
     * @method initPublishFile
     * @param {Object} restInfo config object containing token and siteaccess properties
     * @param {Object} struct
     * @memberof UploadItemComponent
     */

  }, {
    key: "initPublishFile",
    value: function initPublishFile(_ref, struct) {
      var token = _ref.token,
          siteaccess = _ref.siteaccess;
      this.props.publishFile({
        struct: struct,
        token: token,
        siteaccess: siteaccess
      }, {
        upload: {
          onabort: this.handleUploadAbort,
          onerror: this.handleUploadError,
          onload: this.handleUploadLoad,
          onprogress: this.handleUploadProgress
        },
        onloadstart: this.handleLoadStart,
        onerror: this.handleUploadError
      }, this.handleUploadEnd);
    }
    /**
     * Handles the case when a file cannot be upload because of file type
     *
     * @method handleFileTypeNotAllowed
     * @memberof UploadItemComponent
     */

  }, {
    key: "handleFileTypeNotAllowed",
    value: function handleFileTypeNotAllowed() {
      this.setState(function () {
        return {
          uploading: false,
          disallowed: true,
          disallowedType: true,
          disallowedSize: false,
          disallowedContentType: false,
          uploaded: false,
          aborted: false,
          failed: true
        };
      });
    }
    /**
     * Handles the case when a file cannot be upload because of file size
     *
     * @method handleFileSizeNotAllowed
     * @memberof UploadItemComponent
     */

  }, {
    key: "handleFileSizeNotAllowed",
    value: function handleFileSizeNotAllowed() {
      this.setState(function () {
        return {
          uploading: false,
          disallowed: true,
          disallowedType: false,
          disallowedSize: true,
          disallowedContentType: false,
          uploaded: false,
          aborted: false,
          failed: true
        };
      });
    }
  }, {
    key: "handleContentTypeNotAllowed",
    value: function handleContentTypeNotAllowed() {
      this.setState(function () {
        return {
          uploading: false,
          disallowed: true,
          disallowedType: false,
          disallowedSize: false,
          disallowedContentType: true,
          uploaded: false,
          aborted: false,
          failed: true
        };
      });
    }
    /**
     * Handles the upload load start event
     *
     * @method handleLoadStart
     * @param {Event} event
     * @memberof UploadItemComponent
     */

  }, {
    key: "handleLoadStart",
    value: function handleLoadStart(event) {
      this.setState(function () {
        return {
          uploading: true,
          disallowed: false,
          disallowedType: false,
          disallowedSize: false,
          disallowedContentType: false,
          uploaded: false,
          aborted: false,
          failed: false,
          xhr: event.target
        };
      });
    }
    /**
     * Handles the upload abort event
     *
     * @method handleUploadAbort
     * @memberof UploadItemComponent
     */

  }, {
    key: "handleUploadAbort",
    value: function handleUploadAbort() {
      this.setState(function () {
        return {
          uploading: false,
          disallowed: false,
          disallowedType: false,
          disallowedSize: false,
          disallowedContentType: false,
          uploaded: false,
          aborted: true,
          failed: false
        };
      });
    }
    /**
     * Handles the upload error event
     *
     * @method handleUploadError
     * @memberof UploadItemComponent
     */

  }, {
    key: "handleUploadError",
    value: function handleUploadError() {
      this.setState(function (state) {
        return {
          uploading: false,
          disallowed: state.disallowed,
          disallowedSize: state.disallowedSize,
          disallowedType: state.disallowedType,
          disallowedContentType: state.disallowedContentType,
          uploaded: false,
          aborted: state.aborted,
          failed: true
        };
      });
    }
    /**
     * Handles the upload load event
     *
     * @method handleUploadLoad
     * @memberof UploadItemComponent
     */

  }, {
    key: "handleUploadLoad",
    value: function handleUploadLoad() {
      this.setState(function () {
        return {
          uploading: false,
          disallowed: false,
          disallowedType: false,
          disallowedSize: false,
          disallowedContentType: false,
          uploaded: true,
          aborted: false,
          failed: false
        };
      });
    }
    /**
     * Handles the upload progress event
     *
     * @method handleUploadProgress
     * @param {Event} event
     * @memberof UploadItemComponent
     */

  }, {
    key: "handleUploadProgress",
    value: function handleUploadProgress(event) {
      var _this2 = this;

      var fraction = event.loaded / event.total;
      var progress = parseInt(fraction * 100, 10);
      this.setState(function () {
        return {
          uploadedSize: Object(_helpers_text_helper__WEBPACK_IMPORTED_MODULE_3__["fileSizeToString"])(fraction * parseInt(_this2.props.data.file.size, 10)),
          uploading: true,
          disallowed: false,
          disallowedType: false,
          disallowedSize: false,
          disallowedContentType: false,
          uploaded: false,
          aborted: false,
          failed: false,
          progress: progress
        };
      });
    }
    /**
     * Handles the upload end event
     *
     * @method handleUploadEnd
     * @memberof UploadItemComponent
     */

  }, {
    key: "handleUploadEnd",
    value: function handleUploadEnd() {
      var _this3 = this;

      this.setState(function (state) {
        var struct = JSON.parse(state.xhr.response);
        return {
          struct: struct,
          uploading: false,
          disallowed: false,
          disallowedType: false,
          disallowedSize: false,
          disallowedContentType: false,
          uploaded: true,
          aborted: false,
          failed: false
        };
      }, function () {
        var data = _this3.props.data;

        _this3.props.onAfterUpload(_objectSpread(_objectSpread({}, data), {}, {
          struct: _this3.state.struct
        }));
      });
    }
    /**
     * Aborts file upload
     *
     * @method abortUploading
     * @memberof UploadItemComponent
     */

  }, {
    key: "abortUploading",
    value: function abortUploading() {
      this.state.xhr.abort();
      this.props.onAfterAbort(this.props.data);
    }
    /**
     * Deletes a file
     *
     * @method deleteFile
     * @memberof UploadItemComponent
     */

  }, {
    key: "deleteFile",
    value: function deleteFile() {
      var _this4 = this;

      this.setState(function () {
        return {
          deleted: true
        };
      }, function () {
        return _this4.props.deleteFile(_this4.props.adminUiConfig, _this4.state.struct, _this4.handleFileDeleted);
      });
    }
    /**
     * Handles the file deleted event
     *
     * @method handleFileDeleted
     * @memberof UploadItemComponent
     */

  }, {
    key: "handleFileDeleted",
    value: function handleFileDeleted() {
      this.props.onAfterDelete(this.props.data);
    }
    /**
     * Returns content type identifier
     * based on Content object returned from server after upload
     *
     * @method getContentTypeIdentifier
     * @memberof UploadItemComponent
     * @returns {String|null}
     */

  }, {
    key: "getContentTypeIdentifier",
    value: function getContentTypeIdentifier() {
      var _this$props2 = this.props,
          contentTypesMap = _this$props2.contentTypesMap,
          data = _this$props2.data;

      if (!data.struct || !data.struct.Content) {
        return null;
      }

      var contentTypeHref = data.struct.Content.ContentType._href;
      var contentType = contentTypesMap ? contentTypesMap[contentTypeHref] : null;
      var contentTypeIdentifier = contentType ? contentType.identifier : null;
      return contentTypeIdentifier;
    }
    /**
     * Renders an icon of a content type
     *
     * @method renderIcon
     * @returns {JSX.Element|null}
     */

  }, {
    key: "renderIcon",
    value: function renderIcon() {
      var contentTypeIdentifier = this.getContentTypeIdentifier();

      if (!contentTypeIdentifier) {
        return null;
      }

      var contentTypeIconUrl = eZ.helpers.contentType.getContentTypeIconUrl(contentTypeIdentifier);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
        customPath: contentTypeIconUrl,
        extraClasses: "ez-icon--small-medium ez-icon--base-dark"
      });
    }
    /**
     * Renders a progress bar
     *
     * @method renderProgressBar
     * @memberof UploadItemComponent
     * @returns {null|Element}
     */

  }, {
    key: "renderProgressBar",
    value: function renderProgressBar() {
      var _this$state = this.state,
          uploaded = _this$state.uploaded,
          aborted = _this$state.aborted,
          progress = _this$state.progress,
          totalSize = _this$state.totalSize,
          uploadedSize = _this$state.uploadedSize,
          disallowed = _this$state.disallowed;

      if (this.props.isUploaded || uploaded || aborted || disallowed) {
        return null;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_2__["default"], {
        progress: progress,
        uploaded: uploadedSize,
        total: totalSize
      });
    }
    /**
     * Renders an error message
     *
     * @method renderErrorMessage
     * @memberof UploadItemComponent
     * @returns {null|Element}
     */

  }, {
    key: "renderErrorMessage",
    value: function renderErrorMessage() {
      var _this$state2 = this.state,
          uploaded = _this$state2.uploaded,
          aborted = _this$state2.aborted,
          disallowedType = _this$state2.disallowedType,
          disallowedSize = _this$state2.disallowedSize,
          failed = _this$state2.failed,
          uploading = _this$state2.uploading,
          disallowedContentType = _this$state2.disallowedContentType;
      var isError = !uploaded && !aborted && (disallowedSize || disallowedType || disallowedContentType) && failed && !uploading;
      var cannotUploadMessage = Translator.trans(
      /*@Desc("Cannot upload file")*/
      'cannot_upload.message', {}, 'multi_file_upload');
      var disallowedTypeMessage = Translator.trans(
      /*@Desc("File type is not allowed")*/
      'disallowed_type.message', {}, 'multi_file_upload');
      var disallowedSizeMessage = Translator.trans(
      /*@Desc("File size is not allowed")*/
      'disallowed_size.message', {}, 'multi_file_upload');
      var disallowedContentTypeMessage = Translator.trans(
      /*@Desc("You do not have permission to create this Content item")*/
      'disallowed_content_type.message', {}, 'multi_file_upload');
      var msg = cannotUploadMessage;

      if (disallowedType) {
        msg = disallowedTypeMessage;
      }

      if (disallowedSize) {
        msg = disallowedSizeMessage;
      }

      if (disallowedContentType) {
        msg = disallowedContentTypeMessage;
      }

      return isError ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-upload-list-item__message c-upload-list-item__message--error"
      }, msg) : null;
    }
    /**
     * Renders an error message
     *
     * @method renderErrorMessage
     * @memberof UploadItemComponent
     * @returns {null|Element}
     */

  }, {
    key: "renderSuccessMessage",
    value: function renderSuccessMessage() {
      var _this$state3 = this.state,
          uploaded = _this$state3.uploaded,
          aborted = _this$state3.aborted,
          disallowedSize = _this$state3.disallowedSize,
          disallowedType = _this$state3.disallowedType,
          failed = _this$state3.failed,
          uploading = _this$state3.uploading;
      var isSuccess = uploaded && !aborted && !(disallowedSize || disallowedType) && !failed && !uploading;
      var message = Translator.trans(
      /*@Desc("Uploaded")*/
      'upload.success.message', {}, 'multi_file_upload');
      return isSuccess ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-upload-list-item__message c-upload-list-item__message--success"
      }, message) : null;
    }
    /**
     * Renders an abort upload button
     *
     * @method renderAbortBtn
     * @memberof UploadItemComponent
     * @returns {null|Element}
     */

  }, {
    key: "renderAbortBtn",
    value: function renderAbortBtn() {
      var _this$state4 = this.state,
          uploaded = _this$state4.uploaded,
          aborted = _this$state4.aborted,
          disallowedSize = _this$state4.disallowedSize,
          disallowedType = _this$state4.disallowedType,
          failed = _this$state4.failed,
          uploading = _this$state4.uploading;
      var canAbort = !uploaded && !aborted && !disallowedSize && !disallowedType && !failed && uploading;

      if (!canAbort) {
        return null;
      }

      var label = Translator.trans(
      /*@Desc("Abort")*/
      'abort.label', {}, 'multi_file_upload');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-upload-list-item__action c-upload-list-item__action--abort",
        onClick: this.abortUploading,
        title: label,
        tabIndex: "-1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
        name: "circle-close",
        extraClasses: "ez-icon--small-medium"
      }));
    }
    /**
     * Handles the edit button click event. Fills in the hidden form to redirect a user to a correct content edit location.
     *
     * @method handleEditBtnClick
     * @memberof UploadItemComponent
     * @param {Event} event
     */

  }, {
    key: "handleEditBtnClick",
    value: function handleEditBtnClick(event) {
      event.preventDefault();
      var struct = this.state.struct;
      var content = struct.Content;
      var contentId = content._id;
      var languageCode = content.CurrentVersion.Version.VersionInfo.VersionTranslationInfo.Language['0'].languageCode;
      var versionNo = content.CurrentVersion.Version.VersionInfo.versionNo;
      this.contentInfoInput.value = contentId;
      this.contentVersionInfoInput.value = contentId;
      this.contentVersionNoInput.value = versionNo;
      window.document.querySelector("#form_subitems_content_edit_language_".concat(languageCode)).checked = true;
      this.contentEditBtn.click();
    }
    /**
     * Renders an edit content button
     *
     * @method renderEditBtn
     * @memberof UploadItemComponent
     * @returns {null|Element}
     */

  }, {
    key: "renderEditBtn",
    value: function renderEditBtn() {
      var _this$state5 = this.state,
          uploaded = _this$state5.uploaded,
          aborted = _this$state5.aborted,
          disallowedSize = _this$state5.disallowedSize,
          disallowedType = _this$state5.disallowedType,
          failed = _this$state5.failed,
          uploading = _this$state5.uploading;
      var canEdit = this.props.isUploaded || uploaded && !aborted && !(disallowedSize || disallowedType) && !failed && !uploading;

      if (!canEdit) {
        return null;
      }

      var label = Translator.trans(
      /*@Desc("Edit")*/
      'edit.label', {}, 'multi_file_upload');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-upload-list-item__action c-upload-list-item__action--edit",
        title: label,
        onClick: this.handleEditBtnClick,
        tabIndex: "-1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
        name: "edit",
        extraClasses: "ez-icon--small-medium"
      }));
    }
    /**
     * Renders an delete content button
     *
     * @method renderDeleteBtn
     * @memberof UploadItemComponent
     * @returns {null|Element}
     */

  }, {
    key: "renderDeleteBtn",
    value: function renderDeleteBtn() {
      var _this$state6 = this.state,
          uploaded = _this$state6.uploaded,
          aborted = _this$state6.aborted,
          disallowedSize = _this$state6.disallowedSize,
          disallowedType = _this$state6.disallowedType,
          failed = _this$state6.failed,
          uploading = _this$state6.uploading;
      var canDelete = this.props.isUploaded || uploaded && !aborted && !(disallowedSize || disallowedType) && !failed && !uploading;

      if (!canDelete) {
        return null;
      }

      var label = Translator.trans(
      /*@Desc("Delete")*/
      'delete.label', {}, 'multi_file_upload');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-upload-list-item__action c-upload-list-item__action--delete",
        onClick: this.deleteFile,
        title: label,
        tabIndex: "-1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
        name: "trash",
        extraClasses: "ez-icon--small-medium"
      }));
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.deleted) {
        return null;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-upload-list-item"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-upload-list-item__icon-wrapper"
      }, this.renderIcon()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-upload-list-item__meta"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-upload-list-item__name"
      }, this.props.data.file.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-upload-list-item__size"
      }, this.state.uploaded ? this.state.totalSize : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-upload-list-item__info"
      }, this.renderErrorMessage(), this.renderSuccessMessage(), this.renderProgressBar()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-upload-list-item__actions"
      }, this.renderAbortBtn(), this.renderEditBtn(), this.renderDeleteBtn()));
    }
  }]);

  return UploadItemComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


UploadItemComponent.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  onAfterUpload: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  onAfterAbort: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  onAfterDelete: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  isUploaded: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  createFileStruct: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  publishFile: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  deleteFile: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  checkCanUpload: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  adminUiConfig: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    multiFileUpload: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      defaultMappings: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object).isRequired,
      fallbackContentType: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
      locationMappings: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object).isRequired,
      maxFileSize: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
    }).isRequired,
    token: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    siteaccess: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
  }).isRequired,
  parentInfo: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    contentTypeIdentifier: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    contentTypeId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    locationPath: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    language: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
  }).isRequired,
  contentCreatePermissionsConfig: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  contentTypesMap: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  currentLanguage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
UploadItemComponent.defaultProps = {
  isUploaded: false,
  currentLanguage: ''
};

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/multi-file-upload/components/upload-list/upload.list.component.js":
/*!**********************************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/multi-file-upload/components/upload-list/upload.list.component.js ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UploadListComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _upload_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upload.item.component */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/multi-file-upload/components/upload-list/upload.item.component.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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





var UploadListComponent = /*#__PURE__*/function (_Component) {
  _inherits(UploadListComponent, _Component);

  var _super = _createSuper(UploadListComponent);

  function UploadListComponent(props) {
    var _this;

    _classCallCheck(this, UploadListComponent);

    _this = _super.call(this, props);
    _this.state = {
      itemsToUpload: props.itemsToUpload,
      items: []
    };
    return _this;
  }

  _createClass(UploadListComponent, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(props) {
      this.setState(function (state) {
        var stateItems = state.itemsToUpload.filter(function (stateItem) {
          return !props.itemsToUpload.find(function (propItem) {
            return propItem.id === stateItem.id;
          });
        });
        return {
          itemsToUpload: [].concat(_toConsumableArray(stateItems), _toConsumableArray(props.itemsToUpload))
        };
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.props.onAfterUpload(this.state.items);
    }
    /**
     * Handles after file upload event
     *
     * @method handleAfterUpload
     * @param {Object} item
     * @memberof UploadListComponent
     */

  }, {
    key: "handleAfterUpload",
    value: function handleAfterUpload(item) {
      this.setState(function (state) {
        return {
          itemsToUpload: state.itemsToUpload.filter(function (data) {
            return data.id !== item.id;
          }),
          items: [].concat(_toConsumableArray(state.items), [item])
        };
      });
    }
    /**
     * Handles after file upload abort event
     *
     * @method handleAfterAbort
     * @param {Object} item
     * @memberof UploadListComponent
     */

  }, {
    key: "handleAfterAbort",
    value: function handleAfterAbort(item) {
      this.setState(function (state) {
        var items = state.items.filter(function (data) {
          return data.id !== item.id;
        });
        var itemsToUpload = state.itemsToUpload.filter(function (data) {
          return data.id !== item.id;
        });
        return Object.assign({}, state, {
          uploaded: items.length,
          total: items.length + itemsToUpload.length,
          itemsToUpload: itemsToUpload,
          items: items
        });
      });
    }
    /**
     * Handles after file delete event
     *
     * @method handleAfterDelete
     * @param {Object} item
     * @memberof UploadListComponent
     */

  }, {
    key: "handleAfterDelete",
    value: function handleAfterDelete(item) {
      this.setState(function (state) {
        var items = state.items.filter(function (data) {
          return data.id !== item.id;
        });
        var itemsToUpload = state.itemsToUpload.filter(function (data) {
          return data.id !== item.id;
        });
        return Object.assign({}, state, {
          uploaded: items.length,
          total: items.length + itemsToUpload.length,
          itemsToUpload: itemsToUpload,
          items: items
        });
      });
    }
    /**
     * Renders an item to upload
     *
     * @method renderItemToUpload
     * @param {Object} item
     * @memberof UploadListComponent
     * @returns {Element}
     */

  }, {
    key: "renderItemToUpload",
    value: function renderItemToUpload(item) {
      return this.renderItem(item, {
        isUploaded: false,
        createFileStruct: this.props.createFileStruct,
        publishFile: this.props.publishFile,
        onAfterAbort: this.handleAfterAbort.bind(this),
        onAfterUpload: this.handleAfterUpload.bind(this),
        checkCanUpload: this.props.checkCanUpload
      });
    }
    /**
     * Renders an uploaded item
     *
     * @method renderUploadedItem
     * @param {Object} item
     * @memberof UploadListComponent
     * @returns {Element}
     */

  }, {
    key: "renderUploadedItem",
    value: function renderUploadedItem(item) {
      return this.renderItem(item, {
        isUploaded: true,
        deleteFile: this.props.deleteFile,
        onAfterDelete: this.handleAfterDelete.bind(this)
      });
    }
    /**
     * Renders an item
     *
     * @method renderItem
     * @param {Object} item
     * @param {Object} customAttrs component's custom attrs
     * @memberof UploadListComponent
     * @returns {Element}
     */

  }, {
    key: "renderItem",
    value: function renderItem(item, customAttrs) {
      var _this$props = this.props,
          adminUiConfig = _this$props.adminUiConfig,
          parentInfo = _this$props.parentInfo,
          contentCreatePermissionsConfig = _this$props.contentCreatePermissionsConfig,
          contentTypesMap = _this$props.contentTypesMap,
          currentLanguage = _this$props.currentLanguage;
      var attrs = Object.assign({
        key: item.id,
        data: item,
        adminUiConfig: adminUiConfig,
        parentInfo: parentInfo,
        contentCreatePermissionsConfig: contentCreatePermissionsConfig,
        contentTypesMap: contentTypesMap,
        currentLanguage: currentLanguage
      }, customAttrs);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_upload_item_component__WEBPACK_IMPORTED_MODULE_2__["default"], attrs);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          items = _this$state.items,
          itemsToUpload = _this$state.itemsToUpload;
      var uploaded = items.length;
      var total = uploaded + itemsToUpload.length;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-upload-list"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-upload-list__title"
      }, this.props.uploadedItemsListTitle, " (", uploaded, "/", total, ")"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-upload-list__items"
      }, itemsToUpload.map(this.renderItemToUpload.bind(this)), items.map(this.renderUploadedItem.bind(this))));
    }
  }]);

  return UploadListComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


UploadListComponent.propTypes = {
  itemsToUpload: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object),
  onAfterUpload: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  createFileStruct: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  publishFile: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  deleteFile: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  checkCanUpload: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  adminUiConfig: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    multiFileUpload: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      defaultMappings: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object).isRequired,
      fallbackContentType: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
      locationMappings: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object).isRequired,
      maxFileSize: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
    }).isRequired,
    token: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    siteaccess: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
  }).isRequired,
  parentInfo: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    contentTypeIdentifier: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    contentTypeId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    locationPath: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    language: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
  }).isRequired,
  uploadedItemsListTitle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  contentCreatePermissionsConfig: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  contentTypesMap: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  currentLanguage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
UploadListComponent.defaultProps = {
  itemsToUpload: [],
  currentLanguage: ''
};

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/multi-file-upload/components/upload-popup/upload.popup.component.js":
/*!************************************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/multi-file-upload/components/upload-popup/upload.popup.component.js ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UploadPopupModule; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_tooltip_popup_tooltip_popup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/tooltip-popup/tooltip.popup.component */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/tooltip-popup/tooltip.popup.component.js");
/* harmony import */ var _drop_area_drop_area_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../drop-area/drop.area.component */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/multi-file-upload/components/drop-area/drop.area.component.js");
/* harmony import */ var _upload_list_upload_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../upload-list/upload.list.component */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/multi-file-upload/components/upload-list/upload.list.component.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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






var CLASS_SCROLL_DISABLED = 'ez-scroll-disabled';

var UploadPopupModule = /*#__PURE__*/function (_Component) {
  _inherits(UploadPopupModule, _Component);

  var _super = _createSuper(UploadPopupModule);

  function UploadPopupModule(props) {
    var _this;

    _classCallCheck(this, UploadPopupModule);

    _this = _super.call(this, props);
    _this.uploadFiles = _this.uploadFiles.bind(_assertThisInitialized(_this));
    _this.refTooltip = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    _this.state = {
      itemsToUpload: props.itemsToUpload
    };
    return _this;
  }

  _createClass(UploadPopupModule, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.document.body.classList.add(CLASS_SCROLL_DISABLED);
      window.eZ.helpers.tooltips.parse(this.refTooltip.current);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.document.body.classList.remove(CLASS_SCROLL_DISABLED);
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(props) {
      this.setState(function (state) {
        var stateItems = state.itemsToUpload.filter(function (stateItem) {
          return !props.itemsToUpload.find(function (propItem) {
            return propItem.id === stateItem.id;
          });
        });
        return {
          itemsToUpload: [].concat(_toConsumableArray(stateItems), _toConsumableArray(props.itemsToUpload))
        };
      });
    }
    /**
     * Uploads files
     *
     * @method uploadFiles
     * @param {Array} itemsToUpload
     * @memberof UploadPopupModule
     */

  }, {
    key: "uploadFiles",
    value: function uploadFiles(itemsToUpload) {
      this.setState(function () {
        return {
          itemsToUpload: itemsToUpload
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var tooltipAttrs = this.props;

      var listAttrs = _objectSpread(_objectSpread({}, tooltipAttrs), {}, {
        itemsToUpload: this.state.itemsToUpload
      });

      var title = Translator.trans(
      /*@Desc("Multi-file upload")*/
      'upload_popup.close', {}, 'multi_file_upload');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "c-upload-popup",
        ref: this.refTooltip
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_tooltip_popup_tooltip_popup_component__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
        title: title
      }, tooltipAttrs), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_drop_area_drop_area_component__WEBPACK_IMPORTED_MODULE_3__["default"], {
        onDrop: this.uploadFiles,
        maxFileSize: this.props.adminUiConfig.multiFileUpload.maxFileSize,
        preventDefaultAction: this.props.preventDefaultAction,
        processUploadedFiles: this.props.processUploadedFiles
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_upload_list_upload_list_component__WEBPACK_IMPORTED_MODULE_4__["default"], listAttrs)));
    }
  }]);

  return UploadPopupModule;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


UploadPopupModule.propTypes = {
  popupTitle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  visible: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  onUpload: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onUploadEnd: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onUploadFail: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onItemEdit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onItemRemove: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  itemsToUpload: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  onAfterUpload: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  createFileStruct: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  publishFile: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  deleteFile: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  checkCanUpload: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  adminUiConfig: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    multiFileUpload: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      defaultMappings: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object).isRequired,
      fallbackContentType: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
      locationMappings: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object).isRequired,
      maxFileSize: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
    }).isRequired,
    token: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    siteaccess: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
  }).isRequired,
  parentInfo: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    contentTypeIdentifier: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    contentTypeId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    locationPath: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    language: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
  }).isRequired,
  preventDefaultAction: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  processUploadedFiles: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  contentTypesMap: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  currentLanguage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
UploadPopupModule.defaultProps = {
  visible: true,
  itemsToUpload: [],
  currentLanguage: ''
};

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/multi-file-upload/helpers/text.helper.js":
/*!*********************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/multi-file-upload/helpers/text.helper.js ***!
  \*********************************************************************************************************************/
/*! exports provided: fileSizeToString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fileSizeToString", function() { return fileSizeToString; });
/**
 * Returns a filesize as a formatted string
 *
 * @function fileSizeToString
 * @param {Number} filesize
 * @returns {String}
 */
var fileSizeToString = function fileSizeToString(filesize) {
  var units = ['bytes', 'KB', 'MB', 'GB'];
  var kilobyte = 1024;
  var size = parseInt(filesize, 10) || 0;
  var unitIndex = 0;
  var decimalUnits;

  while (size >= kilobyte) {
    size = size / kilobyte;
    unitIndex++;
  }

  decimalUnits = unitIndex < 1 ? 0 : 1;
  return size.toFixed(size >= 10 || decimalUnits) + ' ' + units[unitIndex];
};

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/multi-file-upload/multi.file.upload.module.js":
/*!**************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/multi-file-upload/multi.file.upload.module.js ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MultiFileUploadModule; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_upload_popup_upload_popup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/upload-popup/upload.popup.component */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/multi-file-upload/components/upload-popup/upload.popup.component.js");
/* harmony import */ var _services_multi_file_upload_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/multi.file.upload.service */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/multi-file-upload/services/multi.file.upload.service.js");
/* harmony import */ var _common_icon_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/icon/icon */ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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







var MultiFileUploadModule = /*#__PURE__*/function (_Component) {
  _inherits(MultiFileUploadModule, _Component);

  var _super = _createSuper(MultiFileUploadModule);

  function MultiFileUploadModule(props) {
    var _this;

    _classCallCheck(this, MultiFileUploadModule);

    _this = _super.call(this, props);
    var popupVisible = true;
    _this._itemsUploaded = [];

    if (!props.itemsToUpload || !props.itemsToUpload.length) {
      popupVisible = false;
    }

    _this.handleDropOnWindow = _this.handleDropOnWindow.bind(_assertThisInitialized(_this));
    _this.handleAfterUpload = _this.handleAfterUpload.bind(_assertThisInitialized(_this));
    _this.showUploadPopup = _this.showUploadPopup.bind(_assertThisInitialized(_this));
    _this.hidePopup = _this.hidePopup.bind(_assertThisInitialized(_this));
    _this.processUploadedFiles = _this.processUploadedFiles.bind(_assertThisInitialized(_this));
    _this.setUdwStateOpened = _this.setUdwStateOpened.bind(_assertThisInitialized(_this));
    _this.setUdwStateClosed = _this.setUdwStateClosed.bind(_assertThisInitialized(_this));
    _this.state = {
      udwOpened: false,
      popupVisible: popupVisible,
      itemsToUpload: props.itemsToUpload,
      allowDropOnWindow: true,
      uploadDisabled: Object.values(props.contentCreatePermissionsConfig).every(function (isEnabled) {
        return !isEnabled;
      })
    };
    return _this;
  }

  _createClass(MultiFileUploadModule, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.manageDropEvent();
      window.document.body.addEventListener('ez-udw-opened', this.setUdwStateOpened, false);
      window.document.body.addEventListener('ez-udw-closed', this.setUdwStateClosed, false);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.manageDropEvent();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.document.body.removeEventListener('ez-udw-opened', this.setUdwStateOpened, false);
      window.document.body.removeEventListener('ez-udw-closed', this.setUdwStateClosed, false);
    }
    /**
     * Set udw state as open
     *
     * @method setUdwStateOpened
     * @memberof MultiFileUploadModule
     */

  }, {
    key: "setUdwStateOpened",
    value: function setUdwStateOpened() {
      this.setState({
        udwOpened: true
      });
    }
    /**
     * Set udw state as closed
     *
     * @method setUdwStateClosed
     * @memberof MultiFileUploadModule
     */

  }, {
    key: "setUdwStateClosed",
    value: function setUdwStateClosed() {
      this.setState({
        udwOpened: false
      });
    }
    /**
     * Attaches `drop` and `dragover` events handlers on window
     *
     * @method manageDropEvent
     * @memberof MultiFileUploadModule
     */

  }, {
    key: "manageDropEvent",
    value: function manageDropEvent() {
      var _this$state = this.state,
          uploadDisabled = _this$state.uploadDisabled,
          popupVisible = _this$state.popupVisible,
          itemsToUpload = _this$state.itemsToUpload;

      if (!uploadDisabled && !popupVisible && !itemsToUpload.length) {
        window.addEventListener('drop', this.handleDropOnWindow, false);
        window.addEventListener('dragover', this.preventDefaultAction, false);
      }
    }
    /**
     * Hides multi file upload popup
     *
     * @method hidePopup
     * @memberof MultiFileUploadModule
     */

  }, {
    key: "hidePopup",
    value: function hidePopup() {
      this.setState(function (state) {
        return Object.assign({}, state, {
          popupVisible: false
        });
      });
      this.props.onPopupClose(this._itemsUploaded);
    }
    /**
     * Displays multi file upload popup
     *
     * @method showUploadPopup
     * @memberof MultiFileUploadModule
     */

  }, {
    key: "showUploadPopup",
    value: function showUploadPopup() {
      this.setState(function (state) {
        return Object.assign({}, state, {
          popupVisible: true,
          itemsToUpload: []
        });
      });
    }
    /**
     * Keeps information about uploaded files.
     * We want to avoid component rerendering so it's stored in an object instance property.
     *
     * @method handleAfterUpload
     * @param {Array} itemsUploaded
     * @memberof MultiFileUploadModule
     */

  }, {
    key: "handleAfterUpload",
    value: function handleAfterUpload(itemsUploaded) {
      this._itemsUploaded = itemsUploaded;
    }
    /**
     * Handles dropping on window.
     * When file/files are dropped onto window the `drop` and `dragover` event handlers are removed.
     *
     * @method handleDropOnWindow
     * @param {Event} event
     * @memberof MultiFileUploadModule
     */

  }, {
    key: "handleDropOnWindow",
    value: function handleDropOnWindow(event) {
      this.preventDefaultAction(event);
      var itemsToUpload = this.processUploadedFiles(event); // Covers the case when dragging and dropping page elements inside the browser,
      // like links, images, etc.

      if (!this.state.allowDropOnWindow || !itemsToUpload.length || this.state.udwOpened) {
        return;
      }

      window.removeEventListener('drop', this.handleDropOnWindow, false);
      window.removeEventListener('dragover', this.preventDefaultAction, false);
      this.setState(function (state) {
        return Object.assign({}, state, {
          itemsToUpload: itemsToUpload,
          popupVisible: true,
          allowDropOnWindow: false
        });
      });
    }
    /**
     * Extracts information about dropped files
     *
     * @method extractDroppedFilesList
     * @param {Event} event
     * @returns {undefined|Array}
     * @memberof MultiFileUploadModule
     */

  }, {
    key: "extractDroppedFilesList",
    value: function extractDroppedFilesList(event) {
      var list;

      if (event.nativeEvent) {
        list = event.nativeEvent.dataTransfer || event.nativeEvent.target;
      } else {
        list = event.dataTransfer;
      }

      return list;
    }
    /**
     * Processes uploaded files and generates an unique file id
     *
     * @method processUploadedFiles
     * @param {Event} event
     * @returns {Array}
     * @memberof MultiFileUploadModule
     */

  }, {
    key: "processUploadedFiles",
    value: function processUploadedFiles(event) {
      var list = this.extractDroppedFilesList(event);
      return Array.from(list.files).map(function (file) {
        return {
          id: Math.floor(Math.random() * Date.now()),
          file: file
        };
      });
    }
    /**
     * Prevents default event actions
     *
     * @method preventDefaultAction
     * @param {Event} event
     * @memberof MultiFileUploadModule
     */

  }, {
    key: "preventDefaultAction",
    value: function preventDefaultAction(event) {
      event.preventDefault();
      event.stopPropagation();
    }
    /**
     * Renders multi file upload button,
     * that allows to open multi file upload popup.
     *
     * @method renderBtn
     * @returns {null|Element}
     * @memberof MultiFileUploadModule
     */

  }, {
    key: "renderBtn",
    value: function renderBtn() {
      if (!this.props.withUploadButton) {
        return null;
      }

      var uploadDisabled = this.state.uploadDisabled;
      var title = Translator.trans(
      /*@Desc("Upload sub-items")*/
      'multi_file_upload_open_btn.label', {}, 'multi_file_upload');
      var attrs = {
        className: 'm-mfu__btn--upload',
        title: title,
        onClick: this.showUploadPopup,
        type: 'button'
      };

      if (uploadDisabled) {
        delete attrs.onClick;
        attrs.disabled = true;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", attrs, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
        name: "upload",
        extraClasses: "ez-icon--base-dark ez-icon--small-medium"
      }));
    }
    /**
     * Renders a popup
     *
     * @method renderPopup
     * @returns {null|Element}
     * @memberof MultiFileUploadModule
     */

  }, {
    key: "renderPopup",
    value: function renderPopup() {
      if (!this.state.popupVisible) {
        return null;
      }

      var attrs = _objectSpread(_objectSpread({}, this.props), {}, {
        visible: true,
        onClose: this.hidePopup,
        itemsToUpload: this.state.itemsToUpload,
        onAfterUpload: this.handleAfterUpload,
        preventDefaultAction: this.preventDefaultAction,
        processUploadedFiles: this.processUploadedFiles
      });

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_upload_popup_upload_popup_component__WEBPACK_IMPORTED_MODULE_2__["default"], attrs);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "m-mfu"
      }, this.renderBtn(), this.renderPopup());
    }
  }]);

  return MultiFileUploadModule;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


eZ.addConfig('modules.MultiFileUpload', MultiFileUploadModule);
MultiFileUploadModule.propTypes = {
  adminUiConfig: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    multiFileUpload: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      defaultMappings: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object).isRequired,
      fallbackContentType: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
      locationMappings: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object).isRequired,
      maxFileSize: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
    }).isRequired,
    token: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    siteaccess: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
  }).isRequired,
  parentInfo: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    contentTypeIdentifier: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    contentTypeId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    locationPath: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    language: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
  }).isRequired,
  checkCanUpload: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  createFileStruct: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  deleteFile: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onPopupClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  publishFile: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  itemsToUpload: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  withUploadButton: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  contentCreatePermissionsConfig: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  contentTypesMap: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  currentLanguage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
MultiFileUploadModule.defaultProps = {
  checkCanUpload: _services_multi_file_upload_service__WEBPACK_IMPORTED_MODULE_3__["checkCanUpload"],
  createFileStruct: _services_multi_file_upload_service__WEBPACK_IMPORTED_MODULE_3__["createFileStruct"],
  deleteFile: _services_multi_file_upload_service__WEBPACK_IMPORTED_MODULE_3__["deleteFile"],
  onPopupClose: function onPopupClose() {},
  publishFile: _services_multi_file_upload_service__WEBPACK_IMPORTED_MODULE_3__["publishFile"],
  itemsToUpload: [],
  withUploadButton: true,
  currentLanguage: ''
};

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/multi-file-upload/services/multi.file.upload.service.js":
/*!************************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/multi-file-upload/services/multi.file.upload.service.js ***!
  \************************************************************************************************************************************/
/*! exports provided: checkCanUpload, createFileStruct, publishFile, deleteFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkCanUpload", function() { return checkCanUpload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFileStruct", function() { return createFileStruct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "publishFile", function() { return publishFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteFile", function() { return deleteFile; });
/**
 * Handles ready state change of request
 *
 * @function handleOnReadyStateChange
 * @param {XMLHttpRequest} xhr
 * @param {Function} onSuccess
 * @param {Function} onError
 */
var handleOnReadyStateChange = function handleOnReadyStateChange(xhr, onSuccess, onError) {
  if (xhr.readyState !== 4) {
    return;
  }

  if (xhr.status === 0 && xhr.statusText === '') {
    // request aborted
    return;
  }

  if (xhr.status >= 400 || !xhr.status) {
    onError(xhr);
    return;
  }

  onSuccess(JSON.parse(xhr.response));
};
/**
 * Handles request response
 *
 * @function handleRequestResponse
 * @param {Response} response
 * @returns {String|Response}
 */


var handleRequestResponse = function handleRequestResponse(response) {
  if (!response.ok) {
    throw Error(response.text());
  }

  return response;
};
/**
 * Read file handler
 *
 * @function readFile
 * @param {File} file
 * @param {Function} resolve
 * @param {Function} reject
 */


var readFile = function readFile(file, resolve, reject) {
  var _this = this;

  this.addEventListener('load', function () {
    return resolve({
      fileReader: _this,
      file: file
    });
  }, false);
  this.addEventListener('error', function () {
    return reject();
  }, false);
  this.readAsDataURL(file);
};
/**
 * Finds a content type mapping based on a file type
 *
 * @function findFileTypeMapping
 * @param {Array} mappings
 * @param {File} file
 * @returns {Object|undefined}
 */


var findFileTypeMapping = function findFileTypeMapping(mappings, file) {
  return mappings.find(function (item) {
    return item.mimeTypes.find(function (type) {
      return type === file.type;
    });
  });
};
/**
 * Checks if file's MIME Type is allowed
 *
 * @function isMimeTypeAllowed
 * @param {Array} mappings
 * @param {File} file
 * @returns {Boolean}
 */


var isMimeTypeAllowed = function isMimeTypeAllowed(mappings, file) {
  return !!findFileTypeMapping(mappings, file);
};
/**
 * Checks if file type is allowed
 *
 * @function checkFileTypeAllowed
 * @param {File} file
 * @param {Object} locationMapping
 * @returns {Boolean}
 */


var checkFileTypeAllowed = function checkFileTypeAllowed(file, locationMapping) {
  return !locationMapping ? true : isMimeTypeAllowed(locationMapping.mappings, file);
};
/**
 * Detects a content type for a given file
 *
 * @function detectContentTypeMapping
 * @param {File} file
 * @param {Object} parentInfo
 * @param {Object} config
 * @returns {Object} detected content type config
 */


var detectContentTypeMapping = function detectContentTypeMapping(file, parentInfo, config) {
  var locationMapping = config.locationMappings.find(function (item) {
    return item.contentTypeIdentifier === parentInfo.contentTypeIdentifier;
  });
  var mappings = locationMapping ? locationMapping.mappings : config.defaultMappings;
  return findFileTypeMapping(mappings, file) || config.fallbackContentType;
};
/**
 * Gets content type identifier
 *
 * @function getContentTypeByIdentifier
 * @param {Object} params params object containing token and siteaccess properties
 * @param {String} identifier content type identifier
 * @returns {Promise}
 */


var getContentTypeByIdentifier = function getContentTypeByIdentifier(_ref, identifier) {
  var token = _ref.token,
      siteaccess = _ref.siteaccess;
  var request = new Request("/api/ezp/v2/content/types?identifier=".concat(identifier), {
    method: 'GET',
    headers: {
      Accept: 'application/vnd.ez.api.ContentTypeInfoList+json',
      'X-Siteaccess': siteaccess,
      'X-CSRF-Token': token
    },
    credentials: 'same-origin',
    mode: 'cors'
  });
  return fetch(request).then(handleRequestResponse);
};
/**
 * Prepares a ContentCreate struct based on an uploaded file type
 *
 * @function prepareStruct
 * @param {Object} params params object containing parentInfo and config properties
 * @param {Object} data file data containing File object and FileReader object
 * @returns {Promise}
 */


var prepareStruct = function prepareStruct(_ref2, data) {
  var parentInfo = _ref2.parentInfo,
      config = _ref2.config,
      languageCode = _ref2.languageCode;
  var parentLocation = "/api/ezp/v2/content/locations".concat(parentInfo.locationPath);
  parentLocation = parentLocation.endsWith('/') ? parentLocation.slice(0, -1) : parentLocation;
  var mapping = detectContentTypeMapping(data.file, parentInfo, config.multiFileUpload);
  return getContentTypeByIdentifier(config, mapping.contentTypeIdentifier).then(function (response) {
    return response.json();
  })["catch"](function () {
    return window.eZ.helpers.notification.showErrorNotification('Cannot get content type by identifier');
  }).then(function (response) {
    var fields = [{
      fieldDefinitionIdentifier: mapping.nameFieldIdentifier,
      fieldValue: data.file.name
    }, {
      fieldDefinitionIdentifier: mapping.contentFieldIdentifier,
      fieldValue: {
        fileName: data.file.name,
        data: data.fileReader.result.replace(/^.*;base64,/, '')
      }
    }];
    var struct = {
      ContentCreate: {
        ContentType: {
          _href: response.ContentTypeInfoList.ContentType[0]._href
        },
        mainLanguageCode: languageCode || parentInfo.language,
        LocationCreate: {
          ParentLocation: {
            _href: parentLocation
          },
          sortField: 'PATH',
          sortOrder: 'ASC'
        },
        Section: null,
        alwaysAvailable: true,
        remoteId: null,
        modificationDate: new Date().toISOString(),
        fields: {
          field: fields
        }
      }
    };
    return struct;
  })["catch"](function () {
    return window.eZ.helpers.notification.showErrorNotification('Cannot create content structure');
  });
};
/**
 * Creates a content draft
 *
 * @function createDraft
 * @param {Object} params params object containing struct, token and siteaccess properties
 * @param {Object} requestEventHandlers object containing a list of callbacks
 * @returns {Promise}
 */


var createDraft = function createDraft(_ref3, requestEventHandlers) {
  var struct = _ref3.struct,
      token = _ref3.token,
      siteaccess = _ref3.siteaccess;
  var xhr = new XMLHttpRequest();
  var body = JSON.stringify(struct);
  var headers = {
    Accept: 'application/vnd.ez.api.Content+json',
    'Content-Type': 'application/vnd.ez.api.ContentCreate+json',
    'X-CSRF-Token': token,
    'X-Siteaccess': siteaccess
  };
  return new Promise(function (resolve, reject) {
    xhr.open('POST', '/api/ezp/v2/content/objects', true);
    xhr.onreadystatechange = handleOnReadyStateChange.bind(null, xhr, resolve, reject);

    if (requestEventHandlers && Object.keys(requestEventHandlers).length) {
      var uploadEvents = requestEventHandlers.upload;

      if (uploadEvents && Object.keys(uploadEvents).length) {
        xhr.upload.onabort = uploadEvents.onabort;
        xhr.upload.onerror = reject;
        xhr.upload.onload = uploadEvents.onload;
        xhr.upload.onprogress = uploadEvents.onprogress;
        xhr.upload.ontimeout = uploadEvents.ontimeout;
      }

      xhr.onerror = reject;
      xhr.onloadstart = requestEventHandlers.onloadstart;
    }

    for (var headerType in headers) {
      if (headers.hasOwnProperty(headerType)) {
        xhr.setRequestHeader(headerType, headers[headerType]);
      }
    }

    xhr.send(body);
  });
};
/**
 * Publishes a content draft
 *
 * @function publishDraft
 * @param {Object} params params object containing token and siteaccess properties
 * @param {Object} response object containing created draft struct
 * @returns {Promise}
 */


var publishDraft = function publishDraft(_ref4, response) {
  var token = _ref4.token,
      siteaccess = _ref4.siteaccess;

  if (!response || !response.hasOwnProperty('Content')) {
    return Promise.reject('Cannot publish content based on an uploaded file');
  }

  var request = new Request(response.Content.CurrentVersion.Version._href, {
    method: 'POST',
    headers: {
      'X-Siteaccess': siteaccess,
      'X-CSRF-Token': token,
      'X-HTTP-Method-Override': 'PUBLISH'
    },
    mode: 'cors',
    credentials: 'same-origin'
  });
  return fetch(request).then(handleRequestResponse);
};
/**
 * Checks whether a content based on an uploaded file can be created
 *
 * @function canCreateContent
 * @param {File} file
 * @param {Object} parentInfo parent info hash
 * @param {Object} config multi file upload config
 * @returns {Boolean}
 */


var canCreateContent = function canCreateContent(file, parentInfo, config) {
  if (!config.hasOwnProperty('contentCreatePermissionsConfig') || !config.contentCreatePermissionsConfig) {
    return true;
  }

  var contentTypeConfig = detectContentTypeMapping(file, parentInfo, config);
  return config.contentCreatePermissionsConfig[contentTypeConfig.contentTypeIdentifier];
};
/**
 * Checks if a file can be uploaded
 *
 * @function checkCanUpload
 * @param {File} file
 * @param {Object} parentInfo parent info hash
 * @param {Object} config multi file upload config
 * @param {Object} callbacks a list of callbacks
 * @returns {Boolean}
 */


var checkCanUpload = function checkCanUpload(file, parentInfo, config, callbacks) {
  var locationMapping = config.locationMappings.find(function (item) {
    return item.contentTypeIdentifier === parentInfo.contentTypeIdentifier;
  });

  if (!canCreateContent(file, parentInfo, config)) {
    callbacks.contentTypeNotAllowedCallback();
    return false;
  }

  if (!checkFileTypeAllowed(file, locationMapping)) {
    callbacks.fileTypeNotAllowedCallback();
    return false;
  }

  if (file.size > config.maxFileSize) {
    callbacks.fileSizeNotAllowedCallback();
    return false;
  }

  return true;
};
/**
 * Creates a ContentCreate struct based on a file
 *
 * @function createFileStruct
 * @param {File} file
 * @param {Object} params struct params
 * @returns {Promise}
 */

var createFileStruct = function createFileStruct(file, params) {
  return new Promise(readFile.bind(new FileReader(), file)).then(prepareStruct.bind(null, params));
};
/**
 * Publishes file
 *
 * @function publishFile
 * @param {Object} data file data
 * @param {Object} requestEventHandlers a list of request event handlers
 * @param {Function} callback a success callback
 */

var publishFile = function publishFile(data, requestEventHandlers, callback) {
  createDraft(data, requestEventHandlers).then(publishDraft.bind(null, data)).then(callback)["catch"](function () {
    return window.eZ.helpers.notification.showErrorNotification('An error occurred while publishing a file');
  });
};
/**
 * Deletes file
 *
 * @function deleteFile
 * @param {Object} systemInfo system info containing: token and siteaccess info.
 * @param {Object} struct Content struct
 * @param {Function} callback file deleted callback
 */

var deleteFile = function deleteFile(_ref5, struct, callback) {
  var token = _ref5.token,
      siteaccess = _ref5.siteaccess;
  var request = new Request(struct.Content._href, {
    method: 'DELETE',
    headers: {
      'X-Siteaccess': siteaccess,
      'X-CSRF-Token': token
    },
    mode: 'cors',
    credentials: 'same-origin'
  });
  fetch(request).then(handleRequestResponse).then(callback)["catch"](function () {
    return window.eZ.helpers.notification.showErrorNotification('An error occurred while deleting a file');
  });
};

/***/ }),

/***/ 29:
/*!********************************************************************************************************************************!*\
  !*** multi ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/multi-file-upload/multi.file.upload.module.js ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/multi-file-upload/multi.file.upload.module.js */"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/ui-dev/src/modules/multi-file-upload/multi.file.upload.module.js");


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

},[[29,"runtime"]]]);