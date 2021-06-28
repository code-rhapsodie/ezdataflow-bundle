(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ezplatform-richtext-onlineeditor-js"],{

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/base/ez-blocktextalign.js":
/*!****************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/base/ez-blocktextalign.js ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EzBlockTextAlign; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! alloyeditor */ "alloyeditor");
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(alloyeditor__WEBPACK_IMPORTED_MODULE_2__);
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





var EzBlockTextAlign = /*#__PURE__*/function (_Component) {
  _inherits(EzBlockTextAlign, _Component);

  var _super = _createSuper(EzBlockTextAlign);

  function EzBlockTextAlign(props) {
    var _this;

    _classCallCheck(this, EzBlockTextAlign);

    _this = _super.call(this, props);
    _this.getStateClasses = alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.ButtonStateClasses.getStateClasses;
    return _this;
  }
  /**
   * Finds active block.
   *
   * @method findBlock
   * @return {Object}
   */


  _createClass(EzBlockTextAlign, [{
    key: "findBlock",
    value: function findBlock() {
      return this.props.editor.get('nativeEditor').elementPath().block;
    }
    /**
     * Checks whether the element holding the caret already has the current
     * text align style
     *
     * @method isActive
     * @return {Boolean}
     */

  }, {
    key: "isActive",
    value: function isActive() {
      return this.findBlock().getStyle('textAlign') === this.props.textAlign;
    }
    /**
     * Applies or removes the text align style
     *
     * @method applyStyle
     */

  }, {
    key: "applyStyle",
    value: function applyStyle() {
      var block = this.findBlock();
      var editor = this.props.editor.get('nativeEditor');

      if (this.isActive()) {
        block.removeStyle('text-align');
      } else {
        block.setStyle('text-align', this.props.textAlign);
      }

      editor.fire('actionPerformed', this);
      editor.fire('customUpdate');
    }
    /**
     * Lifecycle. Renders the UI of the button.
     *
     * @method render
     * @return {Object} The content which should be rendered.
     */

  }, {
    key: "render",
    value: function render() {
      var cssClass = 'ae-button ez-btn-ae ez-btn-ae--' + this.props.cssClassSuffix + ' ' + this.getStateClasses();
      var icon = window.eZ.helpers.icon.getIconPath(this.props.iconName);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: cssClass,
        onClick: this.applyStyle.bind(this),
        tabIndex: this.props.tabIndex,
        title: this.props.label
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        className: "ez-icon ez-btn-ae__icon"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: icon
      })));
    }
  }]);

  return EzBlockTextAlign;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


EzBlockTextAlign.propTypes = {
  editor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  textAlign: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  iconName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  cssClassSuffix: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/base/ez-button.js":
/*!********************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/base/ez-button.js ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EzButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! alloyeditor */ "alloyeditor");
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(alloyeditor__WEBPACK_IMPORTED_MODULE_2__);
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





var EzButton = /*#__PURE__*/function (_Component) {
  _inherits(EzButton, _Component);

  var _super = _createSuper(EzButton);

  function EzButton(props) {
    var _this;

    _classCallCheck(this, EzButton);

    _this = _super.call(this, props);
    _this.getStateClasses = alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.ButtonStateClasses.getStateClasses;
    _this.execCommand = alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.ButtonCommand.execCommand.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(EzButton, [{
    key: "findSelectedBlock",
    value: function findSelectedBlock() {
      var nativeEditor = this.props.editor.get('nativeEditor');
      var path = nativeEditor.elementPath();
      var block = path.lastElement;

      if (block.hasClass('cke_widget_wrapper')) {
        block = nativeEditor.widgets.getByElement(block).element;
      }

      if (this.block) {
        return this.block;
      }

      this.block = block;
      return block;
    }
  }]);

  return EzButton;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/base/ez-embedalign.js":
/*!************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/base/ez-embedalign.js ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EzEmbedAlign; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! alloyeditor */ "alloyeditor");
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(alloyeditor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ez_widgetbutton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ez-widgetbutton */ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/base/ez-widgetbutton.js");
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






var EzEmbedAlign = /*#__PURE__*/function (_WidgetButton) {
  _inherits(EzEmbedAlign, _WidgetButton);

  var _super = _createSuper(EzEmbedAlign);

  function EzEmbedAlign() {
    _classCallCheck(this, EzEmbedAlign);

    return _super.apply(this, arguments);
  }

  _createClass(EzEmbedAlign, [{
    key: "isActive",
    value:
    /**
     * Checks if the configured alignment is active on the focused embed
     * element.
     *
     * @method isActive
     * @return {Boolean}
     */
    function isActive() {
      return this.getWidget().isAligned(this.props.alignment);
    }
    /**
     * Applies or un-applies the alignment on the currently focused embed
     * element.
     *
     * @method applyStyle
     */

  }, {
    key: "applyStyle",
    value: function applyStyle() {
      var widget = this.getWidget();

      if (this.isActive()) {
        widget.unsetAlignment();
      } else {
        widget.setAlignment(this.props.alignment);
      }
    }
    /**
     * Lifecycle. Renders the UI of the button.
     *
     * @method render
     * @return {Object} The content which should be rendered.
     */

  }, {
    key: "render",
    value: function render() {
      var cssClass = 'ae-button ez-btn-ae ez-btn-ae--' + this.props.cssClassSuffix + ' ' + this.getStateClasses();
      var icon = window.eZ.helpers.icon.getIconPath(this.props.iconName);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: cssClass,
        onClick: this.applyStyle.bind(this),
        tabIndex: this.props.tabIndex,
        title: this.props.label
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        className: "ez-icon ez-btn-ae__icon"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: icon
      })));
    }
  }]);

  return EzEmbedAlign;
}(_ez_widgetbutton__WEBPACK_IMPORTED_MODULE_3__["default"]);


EzEmbedAlign.propTypes = {
  editor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  alignment: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  iconName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  cssClassSuffix: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/base/ez-embeddiscovercontent.js":
/*!**********************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/base/ez-embeddiscovercontent.js ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EzEmbedDiscoverContentButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ez_widgetbutton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ez-widgetbutton */ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/base/ez-widgetbutton.js");
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






var EzEmbedDiscoverContentButton = /*#__PURE__*/function (_EzWidgetButton) {
  _inherits(EzEmbedDiscoverContentButton, _EzWidgetButton);

  var _super = _createSuper(EzEmbedDiscoverContentButton);

  function EzEmbedDiscoverContentButton(props) {
    var _this;

    _classCallCheck(this, EzEmbedDiscoverContentButton);

    _this = _super.call(this, props);
    _this.confirmHandler = _this.confirmHandler.bind(_assertThisInitialized(_this));
    _this.cancelHandler = _this.cancelHandler.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(EzEmbedDiscoverContentButton, [{
    key: "confirmHandler",
    value: function confirmHandler() {
      var _this$props = this.props,
          editor = _this$props.editor,
          udwContentDiscoveredMethod = _this$props.udwContentDiscoveredMethod;
      editor.get('nativeEditor').unlockSelection(true);
      this[udwContentDiscoveredMethod].apply(this, arguments);
    }
  }, {
    key: "cancelHandler",
    value: function cancelHandler() {
      this.props.editor.get('nativeEditor').unlockSelection(true);
    }
    /**
     * Triggers the UDW to choose the content to embed.
     *
     * @method chooseContent
     */

  }, {
    key: "chooseContent",
    value: function chooseContent() {
      var _this$props2 = this.props,
          udwConfigName = _this$props2.udwConfigName,
          udwTitle = _this$props2.udwTitle,
          editor = _this$props2.editor;
      var languageCode = document.querySelector('meta[name="LanguageCode"]').content;
      var config = JSON.parse(document.querySelector("[data-udw-config-name=\"".concat(udwConfigName, "\"]")).dataset.udwConfig);
      var selectContent = eZ.richText.alloyEditor.callbacks.selectContent;
      var mergedConfig = Object.assign({
        onConfirm: this.confirmHandler,
        onCancel: this.cancelHandler,
        title: udwTitle,
        multiple: false
      }, config, {
        contentOnTheFly: {
          allowedLanguages: [languageCode]
        }
      });
      editor.get('nativeEditor').lockSelection();

      if (typeof selectContent === 'function') {
        selectContent(mergedConfig);
      }
    }
    /**
     * Sets the href of the ezembed widget based on the given content info
     *
     * @method setContentInfo
     * @param {eZ.ContentInfo} contentInfo
     */

  }, {
    key: "setContentInfo",
    value: function setContentInfo(contentId) {
      var embedWidget = this.getWidget();
      embedWidget.setHref('ezcontent://' + contentId);
      embedWidget.focus();
    }
  }]);

  return EzEmbedDiscoverContentButton;
}(_ez_widgetbutton__WEBPACK_IMPORTED_MODULE_3__["default"]);



/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/base/ez-embedimage.js":
/*!************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/base/ez-embedimage.js ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EzEmbedImageButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ez_embeddiscovercontent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ez-embeddiscovercontent */ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/base/ez-embeddiscovercontent.js");
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





var EzEmbedImageButton = /*#__PURE__*/function (_EzEmbedDiscoverConte) {
  _inherits(EzEmbedImageButton, _EzEmbedDiscoverConte);

  var _super = _createSuper(EzEmbedImageButton);

  function EzEmbedImageButton() {
    _classCallCheck(this, EzEmbedImageButton);

    return _super.apply(this, arguments);
  }

  _createClass(EzEmbedImageButton, [{
    key: "isImage",
    value:
    /**
     * Checks whether the current selection can be considered as an image.
     * This is the case if the content type has an ezimage field definition
     * and if the corresponding field is not empty. This method is meant to
     * be used as a `isSelectable` function implementation for the UDW.
     *
     * @method isImage
     * @param {Object} selection the UDW potential selection
     * @param {Function} callback
     */
    function isImage(selection, callback) {
      console.warn('[DEPRECATED] isImage method is deprecated');
      console.warn('[DEPRECATED] it will be removed from ezplatform-admin-ui 2.0');
      console.warn('[DEPRECATED] please use richtext_embed_image.content_on_the_fly.allowed_content_types in the UDW config');
      var siteaccess = document.querySelector('meta[name="SiteAccess"]').content;
      var request = new Request(selection.item.ContentInfo.Content.ContentType._href, {
        method: 'GET',
        headers: {
          'Accept': 'application/vnd.ez.api.ContentType+json',
          'X-Siteaccess': siteaccess
        },
        mode: 'same-origin',
        credentials: 'same-origin'
      });
      fetch(request).then(function (response) {
        return response.json();
      }).then(function (data) {
        return callback(!!data.ContentType.FieldDefinitions.FieldDefinition.find(function (field) {
          return field.fieldType === 'ezimage';
        }));
      });
    }
  }]);

  return EzEmbedImageButton;
}(_ez_embeddiscovercontent__WEBPACK_IMPORTED_MODULE_2__["default"]);



/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/base/ez-widgetbutton.js":
/*!**************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/base/ez-widgetbutton.js ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EzWidgetButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ez_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ez-button */ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/base/ez-button.js");
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





var EzWidgetButton = /*#__PURE__*/function (_EzButton) {
  _inherits(EzWidgetButton, _EzButton);

  var _super = _createSuper(EzWidgetButton);

  function EzWidgetButton() {
    _classCallCheck(this, EzWidgetButton);

    return _super.apply(this, arguments);
  }

  _createClass(EzWidgetButton, [{
    key: "getWidget",
    value:
    /**
     * Returns the ezembed widget instance for the current selection.
     *
     * @method getWidget
     * @return CKEDITOR.plugins.widget
     */
    function getWidget() {
      var editor = this.props.editor.get('nativeEditor');
      var wrapper = editor.getSelection().getStartElement();
      return editor.widgets.getByElement(wrapper);
    }
  }]);

  return EzWidgetButton;
}(_ez_button__WEBPACK_IMPORTED_MODULE_2__["default"]);



/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-anchor.js":
/*!*******************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-anchor.js ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EzBtnAnchor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! alloyeditor */ "alloyeditor");
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(alloyeditor__WEBPACK_IMPORTED_MODULE_2__);
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





var EzBtnAnchor = /*#__PURE__*/function (_Component) {
  _inherits(EzBtnAnchor, _Component);

  var _super = _createSuper(EzBtnAnchor);

  function EzBtnAnchor(props) {
    var _this;

    _classCallCheck(this, EzBtnAnchor);

    _this = _super.call(this, props);
    _this.getStateClasses = alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.ButtonStateClasses.getStateClasses;
    return _this;
  }

  _createClass(EzBtnAnchor, [{
    key: "render",
    value:
    /**
     * Lifecycle. Renders the UI of the button.
     *
     * @method render
     * @return {Object} The content which should be rendered.
     */
    function render() {
      if (this.props.renderExclusive) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.EzBtnAnchorEdit, this.props);
      }

      var cssClass = "ae-button ez-btn-ae--anchor ez-btn-ae ".concat(this.getStateClasses());
      var label = Translator.trans(
      /*@Desc("Anchor")*/
      'anchor_btn.label', {}, 'alloy_editor');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        "aria-pressed": cssClass.indexOf('pressed') !== -1,
        className: cssClass,
        onClick: this.props.requestExclusive,
        tabIndex: this.props.tabIndex,
        title: label
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        className: "ez-icon ez-btn-ae__icon"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: window.eZ.helpers.icon.getIconPath('link-anchor')
      })));
    }
  }], [{
    key: "key",
    get: function get() {
      return 'ezanchor';
    }
  }]);

  return EzBtnAnchor;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.Buttons[EzBtnAnchor.key] = alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.EzBtnAnchor = EzBtnAnchor;
var eZ = window.eZ = window.eZ || {};
eZ.ezAlloyEditor = eZ.ezAlloyEditor || {};
eZ.ezAlloyEditor.ezBtnAnchor = EzBtnAnchor;

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-anchoredit.js":
/*!***********************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-anchoredit.js ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EzBtnAnchorEdit; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! alloyeditor */ "alloyeditor");
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(alloyeditor__WEBPACK_IMPORTED_MODULE_1__);
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



var CLASS_HAS_ANCHOR = 'ez-has-anchor';
var CLASS_ICON_ANCHOR = 'ez-icon--anchor';
var ANCHOR_PATTERN = /^[A-Za-z][A-Za-z0-9\-_:\.]*$/;

var EzBtnAnchorEdit = /*#__PURE__*/function (_Component) {
  _inherits(EzBtnAnchorEdit, _Component);

  var _super = _createSuper(EzBtnAnchorEdit);

  function EzBtnAnchorEdit(props) {
    var _this;

    _classCallCheck(this, EzBtnAnchorEdit);

    _this = _super.call(this, props);
    _this.updateValue = _this.updateValue.bind(_assertThisInitialized(_this));
    _this.saveAnchor = _this.saveAnchor.bind(_assertThisInitialized(_this));
    _this.removeAnchor = _this.removeAnchor.bind(_assertThisInitialized(_this));
    _this.fireCustomUpdateEvent = _this.fireCustomUpdateEvent.bind(_assertThisInitialized(_this));
    _this.hasError = _this.hasError.bind(_assertThisInitialized(_this));
    _this.getStateClasses = alloyeditor__WEBPACK_IMPORTED_MODULE_1___default.a.ButtonStateClasses.getStateClasses;
    _this.block = null;
    _this.state = {
      value: '',
      isValueUnique: false,
      isValueValid: false
    };
    return _this;
  }

  _createClass(EzBtnAnchorEdit, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var block = this.findBlock();
      var value = block.getId();
      var isValueUnique = this.isValueUnique(value);
      var isValueValid = this.isValueValid(value);
      this.setState(function () {
        return {
          value: value,
          isValueUnique: isValueUnique,
          isValueValid: isValueValid
        };
      });
    }
  }, {
    key: "findBlock",
    value: function findBlock() {
      var nativeEditor = this.props.editor.get('nativeEditor');
      var selected = nativeEditor.widgets.selected[0];
      var path = nativeEditor.elementPath();
      var block = path.block;

      if (this.block) {
        return this.block;
      }

      if (!block && selected) {
        block = selected.element;
      }

      if (block && block.is('li')) {
        block = block.getParent();
      }

      if (!block && path.contains('table')) {
        block = path.elements.find(function (element) {
          return element.is('table');
        });
      }

      this.block = block;
      return block;
    }
  }, {
    key: "findIcon",
    value: function findIcon() {
      var block = this.findBlock();
      return _toConsumableArray(block.getChildren().$).find(function (child) {
        return child.classList && child.classList.contains(CLASS_ICON_ANCHOR);
      });
    }
  }, {
    key: "updateValue",
    value: function updateValue(_ref) {
      var nativeEvent = _ref.nativeEvent;
      var value = nativeEvent.target.value;
      var isValueUnique = this.isValueUnique(value);
      var isValueValid = this.isValueValid(value);
      this.setState(function () {
        return {
          value: value,
          isValueUnique: isValueUnique,
          isValueValid: isValueValid
        };
      });
    }
  }, {
    key: "isValueUnique",
    value: function isValueUnique(value) {
      var block = this.findBlock();
      return Object.values(CKEDITOR.instances).every(function (editor) {
        var data = editor.getData();
        var container = document.createElement('div');
        container.insertAdjacentHTML('afterbegin', data);
        /*
            Using [id="value"] instead of just #value in querySelectorAll because with the latter this function
            accepts only CSS valid id instead of valid HTML id selector.
            JIRA ref: https://jira.ez.no/browse/EZP-30485
        */

        return value && _toConsumableArray(container.querySelectorAll("[id=\"".concat(value, "\"]"))).every(function (element) {
          var ckeditorElement = new CKEDITOR.dom.element(element);
          block.removeClass('is-block-focused');
          return ckeditorElement.isIdentical(block);
        });
      });
    }
  }, {
    key: "isValueValid",
    value: function isValueValid(value) {
      return ANCHOR_PATTERN.test(value);
    }
  }, {
    key: "hasError",
    value: function hasError() {
      return this.state.value && (!this.state.isValueUnique || !this.state.isValueValid);
    }
  }, {
    key: "fireCustomUpdateEvent",
    value: function fireCustomUpdateEvent() {
      var nativeEditor = this.props.editor.get('nativeEditor');
      nativeEditor.fire('customUpdate');
    }
  }, {
    key: "removeAnchor",
    value: function removeAnchor() {
      var block = this.findBlock();
      var icon = this.findIcon();
      block.removeAttribute('id');
      block.removeClass(CLASS_HAS_ANCHOR);

      if (icon) {
        icon.remove();
      }

      this.props.cancelExclusive();
      block.focus();
      this.fireCustomUpdateEvent();
    }
  }, {
    key: "saveAnchor",
    value: function saveAnchor() {
      var value = this.state.value;
      var block = this.findBlock();
      var icon = this.findIcon();
      block.setAttribute('id', value);
      block.addClass(CLASS_HAS_ANCHOR);

      if (!icon) {
        this.renderIcon();
      }

      this.props.cancelExclusive();
      block.focus();
      this.fireCustomUpdateEvent();
    }
  }, {
    key: "renderIcon",
    value: function renderIcon() {
      var block = this.findBlock();
      var container = document.createElement('div');
      var icon = "\n            <svg class=\"ez-icon ez-icon--small ez-icon--secondary ".concat(CLASS_ICON_ANCHOR, "\">\n                <use xlink:href=\"").concat(window.eZ.helpers.icon.getIconPath('link-anchor'), "\"></use>\n            </svg>");
      container.insertAdjacentHTML('afterbegin', icon);
      var svg = new CKEDITOR.dom.element(container.querySelector('svg'));
      block.append(svg, true);
    }
  }, {
    key: "renderError",
    value: function renderError() {
      if (!this.hasError()) {
        return null;
      }

      var _this$state = this.state,
          value = _this$state.value,
          isValueUnique = _this$state.isValueUnique,
          isValueValid = _this$state.isValueValid;
      var errorMessage;

      if (value && !isValueUnique) {
        errorMessage = Translator.trans(
        /*@Desc("Anchor name must be unique.")*/
        'anchor_btn.error.unique', {}, 'alloy_editor');
      } else if (value && !isValueValid) {
        errorMessage = Translator.trans(
        /*@Desc("A valid anchor link is needed.")*/
        'anchor_btn.error.valid', {}, 'alloy_editor');
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em", {
        className: "ez-ae-anchor-edit__error"
      }, errorMessage);
    }
    /**
     * Lifecycle. Renders the UI of the button.
     *
     * @method render
     * @return {Object} The content which should be rendered.
     */

  }, {
    key: "render",
    value: function render() {
      var nameLabel = Translator.trans(
      /*@Desc("Name:")*/
      'anchor_edit.input.label', {}, 'alloy_editor');
      var removeBtnTitle = Translator.trans(
      /*@Desc("Remove")*/
      'anchor_edit.btn.remove.title', {}, 'alloy_editor');
      var saveBtnTitle = Translator.trans(
      /*@Desc("Save")*/
      'anchor_edit.btn.save.title', {}, 'alloy_editor');
      var value = this.state.value;
      var hasError = this.hasError();
      var isRemoveBtnDisabled = !value;
      var isSaveBtnDisabled = !value || hasError;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "ez-ae-anchor-edit ".concat(hasError ? 'is-invalid' : '')
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "ez-ae-anchor-edit__input-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "ez-ae-anchor-edit__input-label"
      }, nameLabel, this.renderError()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        className: "ez-ae-anchor-edit__input form-control",
        onChange: this.updateValue,
        value: value
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "ez-ae-anchor-edit__actions"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        title: removeBtnTitle,
        className: "btn btn-icon ez-ae-anchor-edit__btn ez-ae-anchor-edit__btn--trash",
        onClick: this.removeAnchor,
        disabled: isRemoveBtnDisabled
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        className: "ez-icon ez-icon--light ez-icon--medium ez-btn-ae__icon"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: window.eZ.helpers.icon.getIconPath('trash')
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        title: saveBtnTitle,
        className: "btn btn-icon ez-ae-anchor-edit__btn ez-ae-anchor-edit__btn--save",
        onClick: this.saveAnchor,
        disabled: isSaveBtnDisabled
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        className: "ez-icon ez-icon--light ez-icon--medium ez-btn-ae__icon"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: window.eZ.helpers.icon.getIconPath('checkmark')
      })))));
    }
  }], [{
    key: "key",
    get: function get() {
      return 'ezanchoredit';
    }
  }]);

  return EzBtnAnchorEdit;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


alloyeditor__WEBPACK_IMPORTED_MODULE_1___default.a.Buttons[EzBtnAnchorEdit.key] = alloyeditor__WEBPACK_IMPORTED_MODULE_1___default.a.EzBtnAnchorEdit = EzBtnAnchorEdit;
var eZ = window.eZ = window.eZ || {};
eZ.ezAlloyEditor = eZ.ezAlloyEditor || {};
eZ.ezAlloyEditor.ezBtnAnchorEdit = EzBtnAnchorEdit;

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-attributes-edit.js":
/*!****************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-attributes-edit.js ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EzBtnAttributesEdit; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! alloyeditor */ "alloyeditor");
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(alloyeditor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base_ez_widgetbutton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base/ez-widgetbutton */ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/base/ez-widgetbutton.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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






var EzBtnAttributesEdit = /*#__PURE__*/function (_EzWidgetButton) {
  _inherits(EzBtnAttributesEdit, _EzWidgetButton);

  var _super = _createSuper(EzBtnAttributesEdit);

  function EzBtnAttributesEdit(props) {
    var _this;

    _classCallCheck(this, EzBtnAttributesEdit);

    _this = _super.call(this, props);
    _this.setDefaultAttributesMethods = {
      tr: _this.setDefaultAttributesOnTableRows,
      td: _this.setDefaultAttributesOnTableCells,
      li: _this.setDefaultAttributesOnListItems
    };
    _this.setDefaultClassesMethods = {
      tr: _this.setDefaultClassesOnTableRows,
      td: _this.setDefaultClassesOnTableCells,
      li: _this.setDefaultClassesOnListItems
    };
    _this.nativeAttributes = window.eZ.richText.alloyEditor.nativeAttributes;
    return _this;
  }

  _createClass(EzBtnAttributesEdit, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var block = this.findSelectedBlock();

      if (!block.$.getAttribute('data-ez-node-initialized')) {
        this.removeClasses(block);
        this.removeAttributes(block);
      }

      this.setDefaultClasses(block);
      this.setDefaultAttributes(block);
      block.$.setAttribute('data-ez-node-initialized', true);
      this.beforeCommandExecHandler = this.props.editor.get('nativeEditor').on('beforeCommandExec', this.toggleNodeInitialized.bind(this, block, false));
      this.afterCommandExecHandler = this.props.editor.get('nativeEditor').on('afterCommandExec', function (event) {
        var add = true;

        if (event.data.name === 'removeFormat') {
          _this2.toggleNodeInitialized(block, add);

          add = false;
          _this2.block = null;
        }

        _this2.toggleNodeInitialized(_this2.findSelectedBlock(), add);
      });
    }
  }, {
    key: "toggleNodeInitialized",
    value: function toggleNodeInitialized(block, add) {
      var methodName = add ? 'setAttribute' : 'removeAttribute';
      block.$[methodName]('data-ez-node-initialized', true);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.block = null;
      var block = this.findSelectedBlock();

      if (!block.$.getAttribute('data-ez-node-initialized')) {
        this.removeClasses(block);
        this.removeAttributes(block);
        this.setDefaultClasses(block);
        this.setDefaultAttributes(block);
        block.$.setAttribute('data-ez-node-initialized', true);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.beforeCommandExecHandler.removeListener();
      this.afterCommandExecHandler.removeListener();
    }
  }, {
    key: "removeClasses",
    value: function removeClasses(block) {
      var classes = _toConsumableArray(block.$.classList);

      var classesToRemain = ['is-block-focused', 'ez-embed-type-image', 'is-linked'];
      classes.forEach(function (className) {
        if (!classesToRemain.includes(className)) {
          block.$.classList.remove(className);
        }
      });
    }
  }, {
    key: "removeAttributes",
    value: function removeAttributes(block) {
      Object.values(block.$.attributes).forEach(function (attribute) {
        if (attribute.name.startsWith('data-ezattribute')) {
          block.removeAttribute(attribute.name);
        }
      });
    }
  }, {
    key: "setDefaultClasses",
    value: function setDefaultClasses(block) {
      if (!Object.keys(this.classes).length || block.$.classList.contains('ez-classes-added') || !this.classes.defaultValue) {
        return;
      }

      var defaultValue = this.classes.defaultValue.split(',');
      var setDefaultClassesMethod = this.setDefaultClassesMethods[this.toolbarName] ? this.setDefaultClassesMethods[this.toolbarName] : this.setDefaultClassesOnBlock;
      setDefaultClassesMethod(block, defaultValue);
    }
  }, {
    key: "setDefaultClassesOnBlock",
    value: function setDefaultClassesOnBlock(block, value) {
      var _block$$$classList;

      (_block$$$classList = block.$.classList).add.apply(_block$$$classList, _toConsumableArray(value));
    }
  }, {
    key: "setDefaultClassesOnTableRows",
    value: function setDefaultClassesOnTableRows(block, value) {
      var rows = block.$.closest('table').querySelectorAll('tr');
      rows.forEach(function (row) {
        var _row$classList;

        return (_row$classList = row.classList).add.apply(_row$classList, _toConsumableArray(value));
      });
    }
  }, {
    key: "setDefaultClassesOnTableCells",
    value: function setDefaultClassesOnTableCells(block, value) {
      var cells = block.$.closest('table').querySelectorAll('td');
      cells.forEach(function (cell) {
        var _cell$classList;

        return (_cell$classList = cell.classList).add.apply(_cell$classList, _toConsumableArray(value));
      });
    }
  }, {
    key: "setDefaultClassesOnListItems",
    value: function setDefaultClassesOnListItems(block, value) {
      var list = block.$.closest('ul') || block.$.closest('ol');
      var listItems = list.querySelectorAll('li');
      listItems.forEach(function (listItem) {
        var _listItem$classList;

        return (_listItem$classList = listItem.classList).add.apply(_listItem$classList, _toConsumableArray(value));
      });
    }
  }, {
    key: "setDefaultAttributes",
    value: function setDefaultAttributes(block) {
      var _this3 = this;

      Object.entries(this.attributes).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            attributeName = _ref2[0],
            config = _ref2[1];

        var attributeValue = _this3.getAttributeValue(block, attributeName, config);

        if (attributeValue !== null) {
          return;
        }

        var defaultValue = config.defaultValue;

        if (defaultValue !== undefined && defaultValue !== null) {
          var setDefaultAttributesMethod = _this3.setDefaultAttributesMethods[_this3.toolbarName] ? _this3.setDefaultAttributesMethods[_this3.toolbarName] : _this3.setDefaultAttributesOnBlock;
          setDefaultAttributesMethod.bind(_this3)(block, attributeName, defaultValue);
        }
      });
    }
  }, {
    key: "setDefaultAttributesOnBlock",
    value: function setDefaultAttributesOnBlock(block, attributeName, value) {
      this.setAttributeValue(block, attributeName, value);
    }
  }, {
    key: "setDefaultAttributesOnTableRows",
    value: function setDefaultAttributesOnTableRows(block, attributeName, value) {
      var _this4 = this;

      var rows = block.$.closest('table').querySelectorAll('tr');
      rows.forEach(function (row) {
        return _this4.setAttributeValue(row, attributeName, value);
      });
    }
  }, {
    key: "setDefaultAttributesOnTableCells",
    value: function setDefaultAttributesOnTableCells(block, attributeName, value) {
      var _this5 = this;

      var cells = block.$.closest('table').querySelectorAll('td');
      cells.forEach(function (cell) {
        return _this5.setAttributeValue(cell, attributeName, value);
      });
    }
  }, {
    key: "setDefaultAttributesOnListItems",
    value: function setDefaultAttributesOnListItems(block, attributeName, value) {
      var _this6 = this;

      var list = block.$.closest('ul') || block.$.closest('ol');
      var listItems = list.querySelectorAll('li');
      listItems.forEach(function (listItem) {
        return _this6.setAttributeValue(listItem, attributeName, value);
      });
    }
  }, {
    key: "getAttributesValues",
    value: function getAttributesValues() {
      var _this7 = this;

      return Object.entries(this.attributes).reduce(function (total, _ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            attributeName = _ref4[0],
            config = _ref4[1];

        var block = _this7.findSelectedBlock();

        var value = _this7.getAttributeValue(block, attributeName, config);

        total[attributeName] = {
          value: value
        };
        return total;
      }, {});
    }
  }, {
    key: "getAttributeValue",
    value: function getAttributeValue(element, name, config) {
      var nativeAttributes = this.nativeAttributes[element.getName()] || [];

      if (nativeAttributes.includes(name)) {
        return element.getAttribute(name);
      }

      var value = element.getAttribute("data-ezattribute-".concat(name));
      var isValueDefined = value !== null;
      var defaultValue = config.defaultValue;

      if (config.type === 'choice' && !isValueDefined && !config.multiple) {
        value = config.choices[0];
      }

      if (!isValueDefined && defaultValue !== undefined && defaultValue !== null) {
        value = defaultValue;
      }

      if (config.type === 'boolean' && isValueDefined) {
        value = value === 'true';
      }

      return value;
    }
  }, {
    key: "setAttributeValue",
    value: function setAttributeValue(element, name, value) {
      var nativeAttributes = this.nativeAttributes[element.getName()] || [];

      if (!nativeAttributes.includes(name)) {
        name = "data-ezattribute-".concat(name);
      }

      element.setAttribute(name, value);
    }
  }, {
    key: "getClassesValue",
    value: function getClassesValue() {
      var _this8 = this;

      var block = this.findSelectedBlock();
      var value = block.$.classList.value.split(' ').filter(function (className) {
        return Array.isArray(_this8.classes.choices) && _this8.classes.choices.includes(className);
      }).join();

      if (!value && !this.classes.multiple && Array.isArray(this.classes.choices)) {
        value = this.classes.choices[0];
      }

      return value;
    }
  }, {
    key: "getUpdateBtnName",
    value: function getUpdateBtnName() {
      return "ezBtn".concat(this.toolbarName.charAt(0).toUpperCase() + this.toolbarName.slice(1), "Update");
    }
    /**
     * Lifecycle. Renders the UI of the button.
     *
     * @method render
     * @return {Object} The content which should be rendered.
     */

  }, {
    key: "render",
    value: function render() {
      if (this.props.renderExclusive) {
        var buttonName = this.getUpdateBtnName();
        var ButtonComponent = alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a[buttonName];
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonComponent, _extends({
          attributesValues: this.getAttributesValues(),
          classesValue: this.getClassesValue()
        }, this.props));
      }

      var css = "ae-button ez-btn-ae ez-btn-ae--".concat(this.toolbarName, "-edit");
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: css,
        onClick: this.props.requestExclusive,
        tabIndex: this.props.tabIndex
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        className: "ez-icon ez-btn-ae__icon"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: window.eZ.helpers.icon.getIconPath('edit')
      })));
    }
  }]);

  return EzBtnAttributesEdit;
}(_base_ez_widgetbutton__WEBPACK_IMPORTED_MODULE_3__["default"]);


var eZ = window.eZ = window.eZ || {};
eZ.ezAlloyEditor = eZ.ezAlloyEditor || {};
eZ.ezAlloyEditor.ezBtnAttributesEdit = EzBtnAttributesEdit;
EzBtnAttributesEdit.propTypes = {
  editor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
};

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-attributes-update.js":
/*!******************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-attributes-update.js ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EzBtnAttributesUpdate; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! alloyeditor */ "alloyeditor");
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(alloyeditor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base_ez_widgetbutton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base/ez-widgetbutton */ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/base/ez-widgetbutton.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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






var EzBtnAttributesUpdate = /*#__PURE__*/function (_EzWidgetButton) {
  _inherits(EzBtnAttributesUpdate, _EzWidgetButton);

  var _super = _createSuper(EzBtnAttributesUpdate);

  function EzBtnAttributesUpdate(props) {
    var _this;

    _classCallCheck(this, EzBtnAttributesUpdate);

    _this = _super.call(this, props);
    _this.updateValue = _this.updateValue.bind(_assertThisInitialized(_this));
    _this.updateCheckboxValue = _this.updateCheckboxValue.bind(_assertThisInitialized(_this));
    _this.udpateSelecValue = _this.udpateSelecValue.bind(_assertThisInitialized(_this));
    _this.renderAttribute = _this.renderAttribute.bind(_assertThisInitialized(_this));
    _this.saveValues = _this.saveValues.bind(_assertThisInitialized(_this));
    _this.updateClassesValue = _this.updateClassesValue.bind(_assertThisInitialized(_this));
    _this.state = {
      attributesValues: props.attributesValues,
      classesValue: props.classesValue
    };
    _this.nativeAttributes = window.eZ.richText.alloyEditor.nativeAttributes;
    return _this;
  }

  _createClass(EzBtnAttributesUpdate, [{
    key: "renderString",
    value: function renderString(attrName, config, value) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "ez-ae-attribute__wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "ez-ae-attribute__label form-control-label"
      }, config.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        defaultValue: config.defaultValue,
        required: config.required,
        className: "ez-ae-attribute__input form-control",
        value: value,
        onChange: this.updateValue,
        "data-attr-name": attrName
      }));
    }
  }, {
    key: "renderCheckbox",
    value: function renderCheckbox(attrName, config, value) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "ez-ae-attribute__wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "ez-ae-attribute__label form-control-label"
      }, config.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "checkbox",
        defaultChecked: config.defaultValue,
        required: config.required,
        className: "ez-ae-attribute__input form-control",
        checked: value,
        onChange: this.updateCheckboxValue,
        "data-attr-name": attrName
      }));
    }
  }, {
    key: "renderNumber",
    value: function renderNumber(attrName, config, value) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "ez-ae-attribute__wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "ez-ae-attribute__label form-control-label"
      }, config.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "number",
        defaultValue: config.defaultValue,
        required: config.required,
        className: "ez-ae-attribute__input form-control",
        value: value,
        onChange: this.updateValue,
        "data-attr-name": attrName
      }));
    }
  }, {
    key: "renderSelect",
    value: function renderSelect(attrName, config, value) {
      var updateValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.udpateSelecValue;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "ez-ae-attribute__wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "ez-ae-attribute__label form-control-label"
      }, config.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
        className: "ez-ae-attribute__input form-control",
        value: config.multiple && value !== null ? value.split(',') : value,
        defaultValue: config.multiple && config.defaultValue !== null && config.defaultValue !== undefined ? [config.defaultValue.split(',')] : config.defaultValue,
        onChange: updateValue,
        "data-attr-name": attrName,
        multiple: config.multiple
      }, config.choices.map(this.renderChoice)));
    }
  }, {
    key: "renderChoice",
    value: function renderChoice(choice) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: choice
      }, choice);
    }
  }, {
    key: "renderAttribute",
    value: function renderAttribute(_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          attributeName = _ref2[0],
          attributeConfig = _ref2[1];

      var renderMethods = this.getAttributeRenderMethods();
      var methodName = renderMethods[attributeConfig.type];
      var value = this.state.attributesValues[attributeName].value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "ez-ae-attribute"
      }, this[methodName](attributeName, attributeConfig, value));
    }
  }, {
    key: "renderClass",
    value: function renderClass() {
      if (!Object.keys(this.classes).length) {
        return null;
      }

      return this.renderSelect('classes', this.classes, this.state.classesValue, this.updateClassesValue);
    }
  }, {
    key: "render",
    value: function render() {
      var saveLabel = Translator.trans(
      /*@Desc("Save")*/
      'custom_attributes_update_btn.save_btn.label', {}, 'alloy_editor');
      var isValid = this.isValid();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "ez-ae-attributes"
      }, this.renderClass(), Object.entries(this.attributes).map(this.renderAttribute), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "ez-btn-ae btn btn-secondary ez-btn-ae--attributes-save float-right",
        onClick: this.saveValues,
        disabled: !isValid
      }, saveLabel));
    }
  }, {
    key: "isValid",
    value: function isValid() {
      var _this2 = this;

      return Object.keys(this.attributes).every(function (attr) {
        return _this2.attributes[attr].required ? !!_this2.state.attributesValues[attr].value : true;
      });
    }
  }, {
    key: "clearClasses",
    value: function clearClasses() {
      var block = this.findSelectedBlock();

      if (!Object.keys(this.classes).length) {
        return;
      }

      var classList = block.$.classList;
      this.classes.choices.forEach(function (className) {
        if (classList.contains(className)) {
          classList.remove(className);
        }
      });
    }
  }, {
    key: "saveValues",
    value: function saveValues() {
      var block = this.findSelectedBlock();
      var _this$state = this.state,
          attributesValues = _this$state.attributesValues,
          classesValue = _this$state.classesValue;
      var _this$props = this.props,
          editor = _this$props.editor,
          cancelExclusive = _this$props.cancelExclusive;
      var nativeAttributes = this.nativeAttributes[block.getName()] || [];
      var nativeEditor = editor.get('nativeEditor');
      Object.entries(attributesValues).forEach(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            attribute = _ref4[0],
            attributeData = _ref4[1];

        if (!nativeAttributes.includes(attribute)) {
          attribute = "data-ezattribute-".concat(attribute);
        }

        block.setAttribute(attribute, attributeData.value);
      });
      this.clearClasses();

      if (classesValue) {
        var _block$$$classList;

        (_block$$$classList = block.$.classList).add.apply(_block$$$classList, _toConsumableArray(classesValue.split(',')).concat(['ez-classes-added']));
      }

      nativeEditor.unlockSelection(true);
      nativeEditor.fire('customUpdate');
      cancelExclusive();
    }
  }, {
    key: "getSelectedOptions",
    value: function getSelectedOptions(options) {
      return options.filter(function (_ref5) {
        var selected = _ref5.selected;
        return selected;
      }).map(function (_ref6) {
        var value = _ref6.value;
        return value;
      }).join();
    }
  }, {
    key: "updateClassesValue",
    value: function updateClassesValue(_ref7) {
      var target = _ref7.target;
      var classesValue = this.getSelectedOptions(_toConsumableArray(target.options));
      this.setState({
        classesValue: classesValue
      });
    }
  }, {
    key: "udpateSelecValue",
    value: function udpateSelecValue(_ref8) {
      var target = _ref8.target;
      var selectedValues = this.getSelectedOptions(_toConsumableArray(target.options));
      this.setAttributesValues(target.dataset.attrName, selectedValues);
    }
  }, {
    key: "updateCheckboxValue",
    value: function updateCheckboxValue(_ref9) {
      var target = _ref9.target;
      this.setAttributesValues(target.dataset.attrName, target.checked);
    }
  }, {
    key: "updateValue",
    value: function updateValue(_ref10) {
      var target = _ref10.target;
      this.setAttributesValues(target.dataset.attrName, target.value);
    }
  }, {
    key: "setAttributesValues",
    value: function setAttributesValues(attrName, value) {
      var attributesValues = Object.assign({}, this.state.attributesValues);
      attributesValues[attrName].value = value;
      this.setState({
        attributesValues: attributesValues
      });
    }
  }, {
    key: "getAttributeRenderMethods",
    value: function getAttributeRenderMethods() {
      return {
        string: 'renderString',
        "boolean": 'renderCheckbox',
        number: 'renderNumber',
        choice: 'renderSelect'
      };
    }
  }]);

  return EzBtnAttributesUpdate;
}(_base_ez_widgetbutton__WEBPACK_IMPORTED_MODULE_3__["default"]);


var eZ = window.eZ = window.eZ || {};
eZ.ezAlloyEditor = eZ.ezAlloyEditor || {};
eZ.ezAlloyEditor.ezBtnAttributesUpdate = EzBtnAttributesUpdate;
EzBtnAttributesUpdate.propTypes = {
  editor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
};

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-blocktextaligncenter.js":
/*!*********************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-blocktextaligncenter.js ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EzBtnBlockTextAlignCenter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! alloyeditor */ "alloyeditor");
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(alloyeditor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base_ez_blocktextalign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base/ez-blocktextalign */ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/base/ez-blocktextalign.js");
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






var EzBtnBlockTextAlignCenter = /*#__PURE__*/function (_EzBlockTextAlign) {
  _inherits(EzBtnBlockTextAlignCenter, _EzBlockTextAlign);

  var _super = _createSuper(EzBtnBlockTextAlignCenter);

  function EzBtnBlockTextAlignCenter() {
    _classCallCheck(this, EzBtnBlockTextAlignCenter);

    return _super.apply(this, arguments);
  }

  _createClass(EzBtnBlockTextAlignCenter, null, [{
    key: "key",
    get: function get() {
      return 'ezblocktextaligncenter';
    }
  }]);

  return EzBtnBlockTextAlignCenter;
}(_base_ez_blocktextalign__WEBPACK_IMPORTED_MODULE_3__["default"]);


alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.Buttons[EzBtnBlockTextAlignCenter.key] = alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.EzBtnBlockTextAlignCenter = EzBtnBlockTextAlignCenter;
var eZ = window.eZ = window.eZ || {};
eZ.ezAlloyEditor = eZ.ezAlloyEditor || {};
eZ.ezAlloyEditor.ezBtnBlockTextAlignCenter = EzBtnBlockTextAlignCenter;
EzBtnBlockTextAlignCenter.defaultProps = {
  textAlign: 'center',
  iconName: 'align-center',
  cssClassSuffix: 'align-center',
  label: Translator.trans(
  /*@Desc("Center")*/
  'block_text_align_center_btn.label', {}, 'alloy_editor')
};

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-blocktextalignjustify.js":
/*!**********************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-blocktextalignjustify.js ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EzBtnBlockTextAlignJustify; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! alloyeditor */ "alloyeditor");
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(alloyeditor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base_ez_blocktextalign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base/ez-blocktextalign */ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/base/ez-blocktextalign.js");
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






var EzBtnBlockTextAlignJustify = /*#__PURE__*/function (_EzBlockTextAlign) {
  _inherits(EzBtnBlockTextAlignJustify, _EzBlockTextAlign);

  var _super = _createSuper(EzBtnBlockTextAlignJustify);

  function EzBtnBlockTextAlignJustify() {
    _classCallCheck(this, EzBtnBlockTextAlignJustify);

    return _super.apply(this, arguments);
  }

  _createClass(EzBtnBlockTextAlignJustify, null, [{
    key: "key",
    get: function get() {
      return 'ezblocktextalignjustify';
    }
  }]);

  return EzBtnBlockTextAlignJustify;
}(_base_ez_blocktextalign__WEBPACK_IMPORTED_MODULE_3__["default"]);


alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.Buttons[EzBtnBlockTextAlignJustify.key] = alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.EzBtnBlockTextAlignJustify = EzBtnBlockTextAlignJustify;
var eZ = window.eZ = window.eZ || {};
eZ.ezAlloyEditor = eZ.ezAlloyEditor || {};
eZ.ezAlloyEditor.ezBtnBlockTextAlignJustify = EzBtnBlockTextAlignJustify;
EzBtnBlockTextAlignJustify.defaultProps = {
  textAlign: 'justify',
  iconName: 'align-justify',
  cssClassSuffix: 'align-justify',
  label: Translator.trans(
  /*@Desc("Justify")*/
  'blocktext_align_justify_btn.label', {}, 'alloy_editor')
};

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-blocktextalignleft.js":
/*!*******************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-blocktextalignleft.js ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EzBtnBlockTextAlignLeft; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! alloyeditor */ "alloyeditor");
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(alloyeditor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base_ez_blocktextalign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base/ez-blocktextalign */ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/base/ez-blocktextalign.js");
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






var EzBtnBlockTextAlignLeft = /*#__PURE__*/function (_EzBlockTextAlign) {
  _inherits(EzBtnBlockTextAlignLeft, _EzBlockTextAlign);

  var _super = _createSuper(EzBtnBlockTextAlignLeft);

  function EzBtnBlockTextAlignLeft() {
    _classCallCheck(this, EzBtnBlockTextAlignLeft);

    return _super.apply(this, arguments);
  }

  _createClass(EzBtnBlockTextAlignLeft, null, [{
    key: "key",
    get: function get() {
      return 'ezblocktextalignleft';
    }
  }]);

  return EzBtnBlockTextAlignLeft;
}(_base_ez_blocktextalign__WEBPACK_IMPORTED_MODULE_3__["default"]);


alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.Buttons[EzBtnBlockTextAlignLeft.key] = alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.EzBtnBlockTextAlignLeft = EzBtnBlockTextAlignLeft;
var eZ = window.eZ = window.eZ || {};
eZ.ezAlloyEditor = eZ.ezAlloyEditor || {};
eZ.ezAlloyEditor.ezBtnBlockTextAlignLeft = EzBtnBlockTextAlignLeft;
EzBtnBlockTextAlignLeft.defaultProps = {
  textAlign: 'left',
  iconName: 'align-left',
  cssClassSuffix: 'align-left',
  label: Translator.trans(
  /*@Desc("Left")*/
  'blocktext_align_left_btn.label', {}, 'alloy_editor')
};

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-blocktextalignright.js":
/*!********************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-blocktextalignright.js ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EzBtnBlockTextAlignRight; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! alloyeditor */ "alloyeditor");
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(alloyeditor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base_ez_blocktextalign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base/ez-blocktextalign */ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/base/ez-blocktextalign.js");
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






var EzBtnBlockTextAlignRight = /*#__PURE__*/function (_EzBlockTextAlign) {
  _inherits(EzBtnBlockTextAlignRight, _EzBlockTextAlign);

  var _super = _createSuper(EzBtnBlockTextAlignRight);

  function EzBtnBlockTextAlignRight() {
    _classCallCheck(this, EzBtnBlockTextAlignRight);

    return _super.apply(this, arguments);
  }

  _createClass(EzBtnBlockTextAlignRight, null, [{
    key: "key",
    get: function get() {
      return 'ezblocktextalignright';
    }
  }]);

  return EzBtnBlockTextAlignRight;
}(_base_ez_blocktextalign__WEBPACK_IMPORTED_MODULE_3__["default"]);


alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.Buttons[EzBtnBlockTextAlignRight.key] = alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.EzBtnBlockTextAlignRight = EzBtnBlockTextAlignRight;
var eZ = window.eZ = window.eZ || {};
eZ.ezAlloyEditor = eZ.ezAlloyEditor || {};
eZ.ezAlloyEditor.ezBtnBlockTextAlignRight = EzBtnBlockTextAlignRight;
EzBtnBlockTextAlignRight.defaultProps = {
  textAlign: 'right',
  iconName: 'align-right',
  cssClassSuffix: 'align-right',
  label: Translator.trans(
  /*@Desc("Right")*/
  'blocktext_align_right_btn.label', {}, 'alloy_editor')
};

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-bold.js":
/*!*****************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-bold.js ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EzBtnBold; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! alloyeditor */ "alloyeditor");
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(alloyeditor__WEBPACK_IMPORTED_MODULE_2__);
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





var EzBtnBold = /*#__PURE__*/function (_AlloyEditor$ButtonBo) {
  _inherits(EzBtnBold, _AlloyEditor$ButtonBo);

  var _super = _createSuper(EzBtnBold);

  function EzBtnBold() {
    _classCallCheck(this, EzBtnBold);

    return _super.apply(this, arguments);
  }

  _createClass(EzBtnBold, [{
    key: "render",
    value:
    /**
     * Lifecycle. Renders the UI of the button.
     *
     * @method render
     * @return {Object} The content which should be rendered.
     */
    function render() {
      var cssClass = 'ae-button ez-btn-ae ' + this.getStateClasses();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        "aria-label": alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.Strings.bold,
        "aria-pressed": cssClass.indexOf('pressed') !== -1,
        className: cssClass,
        "data-type": "button-bold",
        onClick: this.execCommand,
        tabIndex: this.props.tabIndex,
        title: alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.Strings.bold
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        className: "ez-icon ez-btn-ae__icon"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: window.eZ.helpers.icon.getIconPath('bold')
      })));
    }
  }], [{
    key: "key",
    get: function get() {
      return 'ezbold';
    }
  }]);

  return EzBtnBold;
}(alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.ButtonBold);


alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.Buttons[EzBtnBold.key] = alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.EzBtnBold = EzBtnBold;
var eZ = window.eZ = window.eZ || {};
eZ.ezAlloyEditor = eZ.ezAlloyEditor || {};
eZ.ezAlloyEditor.ezBtnBold = EzBtnBold;

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-customtag-edit.js":
/*!***************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-customtag-edit.js ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EzBtnCustomTagEdit; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! alloyeditor */ "alloyeditor");
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(alloyeditor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base_ez_widgetbutton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base/ez-widgetbutton */ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/base/ez-widgetbutton.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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






var EzBtnCustomTagEdit = /*#__PURE__*/function (_EzWidgetButton) {
  _inherits(EzBtnCustomTagEdit, _EzWidgetButton);

  var _super = _createSuper(EzBtnCustomTagEdit);

  function EzBtnCustomTagEdit() {
    _classCallCheck(this, EzBtnCustomTagEdit);

    return _super.apply(this, arguments);
  }

  _createClass(EzBtnCustomTagEdit, [{
    key: "getValues",
    value:
    /**
     * Gets values for the configuration.
     *
     * @method getValues
     * @return {Object} The configuration values.
     */
    function getValues() {
      var _this = this;

      return Object.keys(this.attributes).reduce(function (total, attr) {
        var value = _this.getWidget().getConfig(attr);

        if (_this.attributes[attr].type === 'boolean') {
          value = value === 'true';
        }

        total[attr] = {
          value: value
        };
        return total;
      }, {});
    }
  }, {
    key: "getUpdateBtnName",
    value: function getUpdateBtnName() {
      return "ezBtn".concat(this.customTagName.charAt(0).toUpperCase() + this.customTagName.slice(1), "Update");
    }
    /**
     * Lifecycle. Renders the UI of the button.
     *
     * @method render
     * @return {Object} The content which should be rendered.
     */

  }, {
    key: "render",
    value: function render() {
      if (this.props.renderExclusive) {
        var buttonName = this.getUpdateBtnName();
        var ButtonComponent = alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a[buttonName];
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonComponent, _extends({
          values: this.getValues()
        }, this.props));
      }

      var css = "ae-button ez-btn-ae ez-btn-ae--".concat(this.customTagName, "-edit");
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: css,
        onClick: this.props.requestExclusive,
        tabIndex: this.props.tabIndex
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        className: "ez-icon ez-btn-ae__icon"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: window.eZ.helpers.icon.getIconPath('edit')
      })));
    }
  }]);

  return EzBtnCustomTagEdit;
}(_base_ez_widgetbutton__WEBPACK_IMPORTED_MODULE_3__["default"]);


var eZ = window.eZ = window.eZ || {};
eZ.ezAlloyEditor = eZ.ezAlloyEditor || {};
eZ.ezAlloyEditor.ezBtnCustomTagEdit = EzBtnCustomTagEdit;
EzBtnCustomTagEdit.propTypes = {
  editor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
};

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-customtag-update.js":
/*!*****************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-customtag-update.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EzBtnCustomTagUpdate; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! alloyeditor */ "alloyeditor");
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(alloyeditor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base_ez_widgetbutton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base/ez-widgetbutton */ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/base/ez-widgetbutton.js");
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






var EzBtnCustomTagUpdate = /*#__PURE__*/function (_EzWidgetButton) {
  _inherits(EzBtnCustomTagUpdate, _EzWidgetButton);

  var _super = _createSuper(EzBtnCustomTagUpdate);

  function EzBtnCustomTagUpdate(props) {
    var _this;

    _classCallCheck(this, EzBtnCustomTagUpdate);

    _this = _super.call(this, props);
    _this.widget = _this.getWidget();
    props.editor.get('nativeEditor').lockSelection();
    _this.state = {
      values: props.values
    };
    return _this;
  }

  _createClass(EzBtnCustomTagUpdate, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!Object.keys(this.attributes).length) {
        this.saveCustomTag();
      }
    }
    /**
     * Renders the text input.
     *
     * @method renderString
     * @param {Object} config
     * @param {String} attrName
     * @return {Object} The rendered text input.
     */

  }, {
    key: "renderString",
    value: function renderString(config, attrName) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "attribute__wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "attribute__label form-control-label"
      }, config.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        defaultValue: config.defaultValue,
        required: config.required,
        className: "attribute__input form-control",
        value: this.state.values[attrName].value,
        onChange: this.updateValues.bind(this),
        "data-attr-name": attrName
      }));
    }
    /**
     * Renders the checkbox input.
     *
     * @method renderCheckbox
     * @param {Object} config
     * @param {String} attrName
     * @return {Object} The rendered checkbox input.
     */

  }, {
    key: "renderCheckbox",
    value: function renderCheckbox(config, attrName) {
      var isChecked = this.state.values[attrName].value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "attribute__wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "attribute__label form-control-label"
      }, config.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "class": "ez-ae-switcher",
        title: ""
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        "class": "ez-ae-switcher__label ".concat(isChecked ? 'is-checked' : '')
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        "class": "ez-ae-switcher__indicator"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "checkbox",
        defaultValue: config.defaultValue,
        required: config.required,
        className: "attribute__input form-control ez-ae-switcher__input",
        checked: isChecked,
        onChange: this.updateValues.bind(this),
        "data-attr-name": attrName
      }))));
    }
    /**
     * Renders the number input.
     *
     * @method renderNumber
     * @param {Object} config
     * @param {String} attrName
     * @return {Object} The rendered number input.
     */

  }, {
    key: "renderNumber",
    value: function renderNumber(config, attrName) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "attribute__wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "attribute__label form-control-label"
      }, config.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "number",
        defaultValue: config.defaultValue,
        required: config.required,
        className: "attribute__input form-control",
        value: this.state.values[attrName].value,
        onChange: this.updateValues.bind(this),
        "data-attr-name": attrName
      }));
    }
    /**
     * Renders the select.
     *
     * @method renderSelect
     * @param {Object} config
     * @param {String} attrName
     * @return {Object} The rendered select.
     */

  }, {
    key: "renderSelect",
    value: function renderSelect(config, attrName) {
      var _this2 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "attribute__wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "attribute__label form-control-label"
      }, config.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
        className: "attribute__input form-control",
        value: this.state.values[attrName].value,
        onChange: this.updateValues.bind(this),
        "data-attr-name": attrName
      }, config.choices.map(function (choice) {
        return _this2.renderChoice(choice, config.choicesLabel[choice]);
      })));
    }
    /**
     * Renders the link.
     *
     * @method renderLink
     * @param {Object} config
     * @param {String} attrName
     * @return {Object} The rendered link.
     */

  }, {
    key: "renderLink",
    value: function renderLink(config, attrName) {
      // @todo provide dedicated support for link attribute type
      return this.renderString(config, attrName);
    }
    /**
     * Renders the option.
     *
     * @method renderChoice
     * @param {String} choice
     * @param {String} label
     * @return {Object} The rendered option.
     */

  }, {
    key: "renderChoice",
    value: function renderChoice(choice, label) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: choice
      }, label);
    }
    /**
     * Renders the attribute.
     *
     * @method renderAttribute
     * @param {Object} attribute
     * @return {Object} The rendered attribute.
     */

  }, {
    key: "renderAttribute",
    value: function renderAttribute(attribute) {
      var attributeConfig = this.attributes[attribute];
      var renderMethods = this.getAttributeRenderMethods();
      var methodName = renderMethods[attributeConfig.type];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "ez-ae-custom-tag__attributes ez-ae-custom-tag__attributes--".concat(attributeConfig.type, " ez-ae-custom-tag__attributes--").concat(attribute)
      }, this[methodName](attributeConfig, attribute));
    }
    /**
     * Lifecycle. Renders the UI of the button.
     *
     * @method render
     * @return {Object} The content which should be rendered.
     */

  }, {
    key: "render",
    value: function render() {
      var cancelLabel = Translator.trans(
      /*@Desc("Cancel")*/
      'custom_tag_update_btn.cancel_btn.label', {}, 'alloy_editor');
      var saveLabel = Translator.trans(
      /*@Desc("Save")*/
      'custom_tag_update_btn.save_btn.label', {}, 'alloy_editor');
      var attrs = Object.keys(this.attributes);
      var isValid = this.isValid();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "ez-ae-custom-tag ez-ae-custom-tag--".concat(this.customTagName)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "ez-ae-custom-tag__header"
      }, this.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "ez-ae-custom-tag__attributes-list"
      }, attrs.map(this.renderAttribute.bind(this))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "ez-ae-custom-tag__footer"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btn btn-primary ez-btn-ae",
        onClick: this.saveCustomTag.bind(this),
        disabled: !isValid
      }, saveLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btn btn-link ez-btn-ae ez-btn-ae--cancel",
        onClick: this.cancelCustomTagEdit.bind(this)
      }, cancelLabel)));
    }
    /**
     * Checks if values are valid.
     *
     * @method isValid
     * @return {Boolean} are values valid
     */

  }, {
    key: "isValid",
    value: function isValid() {
      var _this3 = this;

      return Object.keys(this.attributes).every(function (attr) {
        return _this3.attributes[attr].required ? !!_this3.state.values[attr].value : true;
      });
    }
    /**
     * Creates the custom tag in AlloyEditor.
     *
     * @method saveCustomTag
     */

  }, {
    key: "saveCustomTag",
    value: function saveCustomTag() {
      var _this$props = this.props,
          createNewTag = _this$props.createNewTag,
          editor = _this$props.editor;
      editor.get('nativeEditor').unlockSelection(true);

      if (createNewTag) {
        this.execCommand();
      }

      var widget = this.getWidget() || this.widget;
      var configValues = Object.assign({}, this.state.values);
      widget.setFocused(true);
      widget.setName(this.customTagName);
      widget.setWidgetAttributes(this.createAttributes());
      widget.renderHeader();
      widget.clearConfig();
      Object.keys(this.attributes).forEach(function (key) {
        widget.setConfig(key, configValues[key].value);
      });
    }
    /**
     * Cancels the custom tag editing in AlloyEditor.
     *
     * @method cancelCustomTagEdit
     */

  }, {
    key: "cancelCustomTagEdit",
    value: function cancelCustomTagEdit() {
      var widget = this.getWidget() || this.widget;
      widget.setFocused(true);
      this.props.cancelExclusive();
    }
    /**
     * Creates attributes.
     *
     * @method createAttributes
     * @return {String} the ezattributes
     */

  }, {
    key: "createAttributes",
    value: function createAttributes() {
      var _this4 = this;

      return Object.keys(this.attributes).reduce(function (total, attr) {
        return "".concat(total, "<p>").concat(_this4.attributes[attr].label, ": ").concat(_this4.state.values[attr].value, "</p>");
      }, '');
    }
    /**
     * Update values.
     *
     * @method updateValues
     * @param {Object} event
     */

  }, {
    key: "updateValues",
    value: function updateValues(event) {
      var values = Object.assign({}, this.state.values);
      var value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
      values[event.target.dataset.attrName].value = value;
      this.setState({
        values: values
      });
    }
    /**
     * Gets the render method map.
     *
     * @method getAttributeRenderMethods
     * @return {Object} the render method map
     */

  }, {
    key: "getAttributeRenderMethods",
    value: function getAttributeRenderMethods() {
      return {
        string: 'renderString',
        "boolean": 'renderCheckbox',
        number: 'renderNumber',
        choice: 'renderSelect',
        link: 'renderLink'
      };
    }
  }]);

  return EzBtnCustomTagUpdate;
}(_base_ez_widgetbutton__WEBPACK_IMPORTED_MODULE_3__["default"]);


var eZ = window.eZ = window.eZ || {};
eZ.ezAlloyEditor = eZ.ezAlloyEditor || {};
eZ.ezAlloyEditor.ezBtnCustomTagUpdate = EzBtnCustomTagUpdate;
EzBtnCustomTagUpdate.defaultProps = {
  command: 'ezcustomtag',
  modifiesSelection: true
};
EzBtnCustomTagUpdate.propTypes = {
  editor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  cancelExclusive: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-customtag.js":
/*!**********************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-customtag.js ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EzBtnCustomTag; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! alloyeditor */ "alloyeditor");
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(alloyeditor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base_ez_widgetbutton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base/ez-widgetbutton */ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/base/ez-widgetbutton.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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






var EzBtnCustomTag = /*#__PURE__*/function (_EzWidgetButton) {
  _inherits(EzBtnCustomTag, _EzWidgetButton);

  var _super = _createSuper(EzBtnCustomTag);

  function EzBtnCustomTag() {
    _classCallCheck(this, EzBtnCustomTag);

    return _super.apply(this, arguments);
  }

  _createClass(EzBtnCustomTag, [{
    key: "getUpdateBtnName",
    value: function getUpdateBtnName() {
      return "ezBtn".concat(this.customTagName.charAt(0).toUpperCase() + this.customTagName.slice(1), "Update");
    }
    /**
     * Lifecycle. Renders the UI of the button.
     *
     * @method render
     * @return {Object} The content which should be rendered.
     */

  }, {
    key: "render",
    value: function render() {
      if (this.props.renderExclusive) {
        var buttonName = this.getUpdateBtnName();
        var ButtonComponent = alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a[buttonName];
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonComponent, _extends({
          createNewTag: "true",
          values: this.values
        }, this.props));
      }

      var css = "ae-button ez-btn-ae ez-btn-ae--".concat(this.customTagName);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: css,
        onClick: this.props.requestExclusive,
        tabIndex: this.props.tabIndex,
        title: this.label
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        className: "ez-icon ez-btn-ae__icon"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: this.icon
      })));
    }
  }]);

  return EzBtnCustomTag;
}(_base_ez_widgetbutton__WEBPACK_IMPORTED_MODULE_3__["default"]);


var eZ = window.eZ = window.eZ || {};
eZ.ezAlloyEditor = eZ.ezAlloyEditor || {};
eZ.ezAlloyEditor.ezBtnCustomTag = EzBtnCustomTag;
EzBtnCustomTag.propTypes = {
  editor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
};

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-dropdown.js":
/*!*********************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-dropdown.js ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EzBtnDropdown; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! alloyeditor */ "alloyeditor");
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(alloyeditor__WEBPACK_IMPORTED_MODULE_1__);
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




var EzBtnDropdown = /*#__PURE__*/function (_AlloyEditor$ButtonDr) {
  _inherits(EzBtnDropdown, _AlloyEditor$ButtonDr);

  var _super = _createSuper(EzBtnDropdown);

  function EzBtnDropdown() {
    _classCallCheck(this, EzBtnDropdown);

    return _super.apply(this, arguments);
  }

  _createClass(EzBtnDropdown, [{
    key: "render",
    value:
    /**
     * Lifecycle. Renders the UI of the button.
     *
     * @instance
     * @memberof ButtonDropdown
     * @method render
     * @return {Object} The content which should be rendered.
     */
    function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "ae-dropdown ae-arrow-box ae-arrow-box-top-left",
        onKeyDown: this.handleKey,
        tabIndex: "0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "ae-listbox",
        role: "listbox"
      }, this.props.children));
    }
  }]);

  return EzBtnDropdown;
}(alloyeditor__WEBPACK_IMPORTED_MODULE_1___default.a.ButtonDropdown);


var eZ = window.eZ = window.eZ || {};
eZ.ezAlloyEditor = eZ.ezAlloyEditor || {};
eZ.ezAlloyEditor.EzBtnDropdown = EzBtnDropdown;

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-embed.js":
/*!******************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-embed.js ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EzBtnEmbed; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! alloyeditor */ "alloyeditor");
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(alloyeditor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base_ez_embeddiscovercontent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base/ez-embeddiscovercontent */ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/base/ez-embeddiscovercontent.js");
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






var EzBtnEmbed = /*#__PURE__*/function (_EzEmbedDiscoverConte) {
  _inherits(EzBtnEmbed, _EzEmbedDiscoverConte);

  var _super = _createSuper(EzBtnEmbed);

  function EzBtnEmbed() {
    _classCallCheck(this, EzBtnEmbed);

    return _super.apply(this, arguments);
  }

  _createClass(EzBtnEmbed, [{
    key: "isDisabled",
    value:
    /**
     * Checks if the command is disabled in the current selection.
     *
     * @method isDisabled
     * @return {Boolean} True if the command is disabled, false otherwise.
     */
    function isDisabled() {
      return !this.props.editor.get('nativeEditor').ezembed.canBeAdded();
    }
    /**
     * Executes the command generated by the ezembed plugin and set the
     * correct value based on the choosen content.
     *
     * @method addEmbed
     * @param {Object} items the result of the choice in the UDW
     */

  }, {
    key: "addEmbed",
    value: function addEmbed(items) {
      var contentInfo = items[0].ContentInfo.Content._id;

      if (navigator.userAgent.indexOf('Chrome') > -1) {
        var scrollY = window.pageYOffset;
        this.execCommand();
        window.scroll(window.pageXOffset, scrollY);
      } else {
        this.execCommand();
      }

      this.setContentInfo(contentInfo);
      var widget = this.getWidget();
      widget.setWidgetContent('');
      widget.renderEmbedPreview(items[0].ContentInfo.Content.Name);
      widget.setFocused(true);
      ReactDOM.unmountComponentAtNode(document.querySelector('#react-udw'));
    }
    /**
     * Lifecycle. Renders the UI of the button.
     *
     * @method render
     * @return {Object} The content which should be rendered.
     */

  }, {
    key: "render",
    value: function render() {
      var css = 'ae-button ez-btn-ae ez-btn-ae--embed ' + this.getStateClasses();
      var disabled = this.isDisabled();
      var label = Translator.trans(
      /*@Desc("Embed")*/
      'embed_btn.label', {}, 'alloy_editor');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: css,
        disabled: disabled,
        onClick: this.chooseContent.bind(this),
        tabIndex: this.props.tabIndex,
        title: label
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        className: "ez-icon ez-btn-ae__icon"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: window.eZ.helpers.icon.getIconPath('embed')
      })));
    }
  }], [{
    key: "key",
    get: function get() {
      return 'ezembed';
    }
  }]);

  return EzBtnEmbed;
}(_base_ez_embeddiscovercontent__WEBPACK_IMPORTED_MODULE_3__["default"]);


alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.Buttons[EzBtnEmbed.key] = alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.EzBtnEmbed = EzBtnEmbed;
var eZ = window.eZ = window.eZ || {};
eZ.ezAlloyEditor = eZ.ezAlloyEditor || {};
eZ.ezAlloyEditor.ezBtnEmbed = EzBtnEmbed;
EzBtnEmbed.defaultProps = {
  command: 'ezembed',
  modifiesSelection: true,
  udwTitle: Translator.trans(
  /*@Desc("Select a Content item to embed")*/
  'embed_btn.udw.title', {}, 'alloy_editor'),
  udwContentDiscoveredMethod: 'addEmbed',
  udwConfigName: 'richtext_embed'
};

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-embedaligncenter.js":
/*!*****************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-embedaligncenter.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EzEmbedAlignCenter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! alloyeditor */ "alloyeditor");
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(alloyeditor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base_ez_embedalign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base/ez-embedalign */ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/base/ez-embedalign.js");
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






var EzEmbedAlignCenter = /*#__PURE__*/function (_EzEmbedAlign) {
  _inherits(EzEmbedAlignCenter, _EzEmbedAlign);

  var _super = _createSuper(EzEmbedAlignCenter);

  function EzEmbedAlignCenter() {
    _classCallCheck(this, EzEmbedAlignCenter);

    return _super.apply(this, arguments);
  }

  _createClass(EzEmbedAlignCenter, null, [{
    key: "key",
    get: function get() {
      return 'ezembedcenter';
    }
  }]);

  return EzEmbedAlignCenter;
}(_base_ez_embedalign__WEBPACK_IMPORTED_MODULE_3__["default"]);


alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.Buttons[EzEmbedAlignCenter.key] = alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.EzEmbedAlignCenter = EzEmbedAlignCenter;
var eZ = window.eZ = window.eZ || {};
eZ.ezAlloyEditor = eZ.ezAlloyEditor || {};
eZ.ezAlloyEditor.ezEmbedAlignCenter = EzEmbedAlignCenter;
EzEmbedAlignCenter.defaultProps = {
  alignment: 'center',
  iconName: 'image-center',
  cssClassSuffix: 'embed-center',
  label: Translator.trans(
  /*@Desc("Center")*/
  'embed_align_center_btn.label', {}, 'alloy_editor')
};

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-embedalignleft.js":
/*!***************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-embedalignleft.js ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EzEmbedAlignLeft; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! alloyeditor */ "alloyeditor");
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(alloyeditor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base_ez_embedalign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base/ez-embedalign */ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/base/ez-embedalign.js");
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






var EzEmbedAlignLeft = /*#__PURE__*/function (_EzEmbedAlign) {
  _inherits(EzEmbedAlignLeft, _EzEmbedAlign);

  var _super = _createSuper(EzEmbedAlignLeft);

  function EzEmbedAlignLeft() {
    _classCallCheck(this, EzEmbedAlignLeft);

    return _super.apply(this, arguments);
  }

  _createClass(EzEmbedAlignLeft, null, [{
    key: "key",
    get: function get() {
      return 'ezembedleft';
    }
  }]);

  return EzEmbedAlignLeft;
}(_base_ez_embedalign__WEBPACK_IMPORTED_MODULE_3__["default"]);


alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.Buttons[EzEmbedAlignLeft.key] = alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.EzEmbedAlignLeft = EzEmbedAlignLeft;
var eZ = window.eZ = window.eZ || {};
eZ.ezAlloyEditor = eZ.ezAlloyEditor || {};
eZ.ezAlloyEditor.ezEmbedAlignLeft = EzEmbedAlignLeft;
EzEmbedAlignLeft.defaultProps = {
  alignment: 'left',
  iconName: 'image-left',
  cssClassSuffix: 'embed-left',
  label: Translator.trans(
  /*@Desc("Left")*/
  'embed_align_left_btn.label', {}, 'alloy_editor')
};

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-embedalignright.js":
/*!****************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-embedalignright.js ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EzEmbedAlignRight; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! alloyeditor */ "alloyeditor");
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(alloyeditor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base_ez_embedalign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base/ez-embedalign */ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/base/ez-embedalign.js");
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






var EzEmbedAlignRight = /*#__PURE__*/function (_EzEmbedAlign) {
  _inherits(EzEmbedAlignRight, _EzEmbedAlign);

  var _super = _createSuper(EzEmbedAlignRight);

  function EzEmbedAlignRight() {
    _classCallCheck(this, EzEmbedAlignRight);

    return _super.apply(this, arguments);
  }

  _createClass(EzEmbedAlignRight, null, [{
    key: "key",
    get: function get() {
      return 'ezembedright';
    }
  }]);

  return EzEmbedAlignRight;
}(_base_ez_embedalign__WEBPACK_IMPORTED_MODULE_3__["default"]);


alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.Buttons[EzEmbedAlignRight.key] = alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.EzEmbedAlignRight = EzEmbedAlignRight;
var eZ = window.eZ = window.eZ || {};
eZ.ezAlloyEditor = eZ.ezAlloyEditor || {};
eZ.ezAlloyEditor.ezEmbedAlignRight = EzEmbedAlignRight;
EzEmbedAlignRight.defaultProps = {
  alignment: 'right',
  iconName: 'image-right',
  cssClassSuffix: 'embed-right',
  label: Translator.trans(
  /*@Desc("Right")*/
  'embed_align_right_btn.label', {}, 'alloy_editor')
};

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-embedinline.js":
/*!************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-embedinline.js ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EzBtnEmbedInline; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! alloyeditor */ "alloyeditor");
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(alloyeditor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ez_btn_embed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ez-btn-embed */ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-embed.js");
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






var EzBtnEmbedInline = /*#__PURE__*/function (_EzBtnEmbed) {
  _inherits(EzBtnEmbedInline, _EzBtnEmbed);

  var _super = _createSuper(EzBtnEmbedInline);

  function EzBtnEmbedInline() {
    _classCallCheck(this, EzBtnEmbedInline);

    return _super.apply(this, arguments);
  }

  _createClass(EzBtnEmbedInline, [{
    key: "render",
    value:
    /**
     * Lifecycle. Renders the UI of the button.
     *
     * @method render
     * @return {Object} The content which should be rendered.
     */
    function render() {
      var css = 'ae-button ez-btn-ae ez-btn-ae--embed-inline';
      var label = Translator.trans(
      /*@Desc("Embed")*/
      'embed_btn.label', {}, 'alloy_editor');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: css,
        onClick: this.chooseContent.bind(this),
        tabIndex: this.props.tabIndex,
        title: label
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        className: "ez-icon ez-btn-ae__icon"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: window.eZ.helpers.icon.getIconPath('embed')
      })));
    }
  }], [{
    key: "key",
    get: function get() {
      return 'ezembedinline';
    }
  }]);

  return EzBtnEmbedInline;
}(_ez_btn_embed__WEBPACK_IMPORTED_MODULE_3__["default"]);


alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.Buttons[EzBtnEmbedInline.key] = alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.EzBtnEmbedInline = EzBtnEmbedInline;
var eZ = window.eZ = window.eZ || {};
eZ.ezAlloyEditor = eZ.ezAlloyEditor || {};
eZ.ezAlloyEditor.ezBtnEmbedInline = EzBtnEmbedInline;
EzBtnEmbedInline.defaultProps = {
  command: 'ezembedinline',
  modifiesSelection: true,
  udwTitle: Translator.trans(
  /*@Desc("Select a Content item to embed")*/
  'embed_btn.udw.title', {}, 'alloy_editor'),
  udwContentDiscoveredMethod: 'addEmbed',
  udwConfigName: 'richtext_embed'
};

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-embedupdate.js":
/*!************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-embedupdate.js ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EzBtnEmbedUpdate; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! alloyeditor */ "alloyeditor");
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(alloyeditor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base_ez_embeddiscovercontent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base/ez-embeddiscovercontent */ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/base/ez-embeddiscovercontent.js");
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






var EzBtnEmbedUpdate = /*#__PURE__*/function (_EzEmbedDiscoverConte) {
  _inherits(EzBtnEmbedUpdate, _EzEmbedDiscoverConte);

  var _super = _createSuper(EzBtnEmbedUpdate);

  function EzBtnEmbedUpdate() {
    _classCallCheck(this, EzBtnEmbedUpdate);

    return _super.apply(this, arguments);
  }

  _createClass(EzBtnEmbedUpdate, [{
    key: "updateEmbed",
    value:
    /**
     * Updates the emebed element with the selected content in UDW.
     *
     * @method updateEmbed
     * @param {EventFacade} e the contentDiscovered event facade
     * @protected
     */
    function updateEmbed(items) {
      var contentId = items[0].ContentInfo.Content._id;
      var widget = this.getWidget();
      this.setContentInfo(contentId);
      widget.focus();
      widget.setWidgetContent('');
      widget.renderEmbedPreview(items[0].ContentInfo.Content.Name);
      ReactDOM.unmountComponentAtNode(document.querySelector('#react-udw'));
    }
    /**
     * Lifecycle. Renders the UI of the button.
     *
     * @method render
     * @return {Object} The content which should be rendered.
     */

  }, {
    key: "render",
    value: function render() {
      var css = 'ae-button ez-btn-ae ez-btn-ae--embedupdate ' + this.getStateClasses();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: css,
        onClick: this.chooseContent.bind(this),
        tabIndex: this.props.tabIndex
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        className: "ez-icon ez-btn-ae__icon"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: window.eZ.helpers.icon.getIconPath('embed')
      })));
    }
  }], [{
    key: "key",
    get: function get() {
      return 'ezembedupdate';
    }
  }]);

  return EzBtnEmbedUpdate;
}(_base_ez_embeddiscovercontent__WEBPACK_IMPORTED_MODULE_3__["default"]);


alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.Buttons[EzBtnEmbedUpdate.key] = alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.EzBtnEmbedUpdate = EzBtnEmbedUpdate;
var eZ = window.eZ = window.eZ || {};
eZ.ezAlloyEditor = eZ.ezAlloyEditor || {};
eZ.ezAlloyEditor.ezBtnEmbedUpdate = EzBtnEmbedUpdate;
EzBtnEmbedUpdate.defaultProps = {
  udwTitle: Translator.trans(
  /*@Desc("Select a Content item to embed")*/
  'embed_update_btn.udw.title', {}, 'alloy_editor'),
  udwContentDiscoveredMethod: 'updateEmbed',
  udwConfigName: 'richtext_embed',
  label: Translator.trans(
  /*@Desc("Select another Content item")*/
  'embed_update_btn.label', {}, 'alloy_editor')
};

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-heading.js":
/*!********************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-heading.js ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EzBtnHeading; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! alloyeditor */ "alloyeditor");
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(alloyeditor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base_ez_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base/ez-button */ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/base/ez-button.js");
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






var EzBtnHeading = /*#__PURE__*/function (_EzButton) {
  _inherits(EzBtnHeading, _EzButton);

  var _super = _createSuper(EzBtnHeading);

  function EzBtnHeading() {
    _classCallCheck(this, EzBtnHeading);

    return _super.apply(this, arguments);
  }

  _createClass(EzBtnHeading, [{
    key: "addHeading",
    value:
    /**
     * Executes the eZAppendContent to add a heading element in the editor.
     *
     * @method addHeading
     */
    function addHeading() {
      this.execCommand({
        tagName: 'h1'
      });
    }
    /**
     * Lifecycle. Renders the UI of the button.
     *
     * @method render
     * @return {Object} The content which should be rendered.
     */

  }, {
    key: "render",
    value: function render() {
      var css = 'ae-button ez-btn-ae ez-btn-ae--heading ' + this.getStateClasses();
      var label = Translator.trans(
      /*@Desc("Heading")*/
      'heading_btn.label', {}, 'alloy_editor');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: css,
        onClick: this.addHeading.bind(this),
        tabIndex: this.props.tabIndex,
        title: label
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        className: "ez-icon ez-btn-ae__icon"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: window.eZ.helpers.icon.getIconPath('h1')
      })));
    }
  }], [{
    key: "key",
    get: function get() {
      return 'ezheading';
    }
  }]);

  return EzBtnHeading;
}(_base_ez_button__WEBPACK_IMPORTED_MODULE_3__["default"]);


alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.Buttons[EzBtnHeading.key] = alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.EzBtnHeading = EzBtnHeading;
var eZ = window.eZ = window.eZ || {};
eZ.ezAlloyEditor = eZ.ezAlloyEditor || {};
eZ.ezAlloyEditor.ezBtnHeading = EzBtnHeading;
EzBtnHeading.propTypes = {
  command: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  modifiesSelection: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
EzBtnHeading.defaultProps = {
  command: 'eZAddContent',
  modifiesSelection: true
};

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-image.js":
/*!******************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-image.js ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EzBtnImage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! alloyeditor */ "alloyeditor");
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(alloyeditor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base_ez_embedimage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base/ez-embedimage */ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/base/ez-embedimage.js");
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






var EzBtnImage = /*#__PURE__*/function (_EzEmbedImageButton) {
  _inherits(EzBtnImage, _EzEmbedImageButton);

  var _super = _createSuper(EzBtnImage);

  function EzBtnImage() {
    _classCallCheck(this, EzBtnImage);

    return _super.apply(this, arguments);
  }

  _createClass(EzBtnImage, [{
    key: "isDisabled",
    value:
    /**
     * Checks if the command is disabled in the current selection.
     *
     * @method isDisabled
     * @return {Boolean} True if the command is disabled, false otherwise.
     */
    function isDisabled() {
      return !this.props.editor.get('nativeEditor').ezembed.canBeAdded();
    }
    /**
     * Executes the command generated by the ezembed plugin and set the
     * correct value based on the choosen image.
     *
     * @method addImage
     * @param {Array} items the result of the choice in the UDW
     */

  }, {
    key: "addImage",
    value: function addImage(items) {
      var content = items[0].ContentInfo.Content;

      if (navigator.userAgent.indexOf('Chrome') > -1) {
        var scrollY = window.pageYOffset;
        this.execCommand();
        window.scroll(window.pageXOffset, scrollY);
      } else {
        this.execCommand();
      }

      this.setContentInfo(content._id);
      var widget = this.getWidget().setConfig('size', 'medium').setImageType().setWidgetContent('');
      widget.loadImagePreviewFromCurrentVersion(content.CurrentVersion._href, content.Name);
      widget.setFocused(true);
      ReactDOM.unmountComponentAtNode(document.querySelector('#react-udw'));
    }
    /**
     * Lifecycle. Renders the UI of the button.
     *
     * @method render
     * @return {Object} The content which should be rendered.
     */

  }, {
    key: "render",
    value: function render() {
      var css = 'ae-button ez-btn-ae ez-btn-ae--image ' + this.getStateClasses(),
          disabled = this.isDisabled();
      var label = Translator.trans(
      /*@Desc("Image")*/
      'image_btn.label', {}, 'alloy_editor');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: css,
        disabled: disabled,
        onClick: this.chooseContent.bind(this),
        tabIndex: this.props.tabIndex,
        title: label
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        className: "ez-icon ez-btn-ae__icon"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: window.eZ.helpers.icon.getIconPath('image')
      })));
    }
  }], [{
    key: "key",
    get: function get() {
      return 'ezimage';
    }
  }]);

  return EzBtnImage;
}(_base_ez_embedimage__WEBPACK_IMPORTED_MODULE_3__["default"]);


alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.Buttons[EzBtnImage.key] = alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.EzBtnImage = EzBtnImage;
var eZ = window.eZ = window.eZ || {};
eZ.ezAlloyEditor = eZ.ezAlloyEditor || {};
eZ.ezAlloyEditor.ezBtnImage = EzBtnImage;
EzBtnImage.defaultProps = {
  command: 'ezembed',
  modifiesSelection: true,
  udwTitle: Translator.trans(
  /*@Desc("Select an image")*/
  'image_btn.udw.label', {}, 'alloy_editor'),
  udwContentDiscoveredMethod: 'addImage',
  udwConfigName: 'richtext_embed_image',
  udwLoadContent: true
};

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-imagelink.js":
/*!**********************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-imagelink.js ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EzBtnImageLink; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! alloyeditor */ "alloyeditor");
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(alloyeditor__WEBPACK_IMPORTED_MODULE_2__);
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





var EzBtnImageLink = /*#__PURE__*/function (_AlloyEditor$ButtonLi) {
  _inherits(EzBtnImageLink, _AlloyEditor$ButtonLi);

  var _super = _createSuper(EzBtnImageLink);

  function EzBtnImageLink(props) {
    var _this;

    _classCallCheck(this, EzBtnImageLink);

    _this = _super.call(this, props);
    _this.requestExclusive = _this.requestExclusive.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(EzBtnImageLink, [{
    key: "getWidget",
    value: function getWidget() {
      var editor = this.props.editor.get('nativeEditor');
      var wrapper = editor.getSelection().getStartElement();
      return editor.widgets.getByElement(wrapper);
    }
  }, {
    key: "requestExclusive",
    value: function requestExclusive() {
      var widget = this.getWidget();
      widget.setLinkEditState();
      widget.setFocused(true);
    }
    /**
     * Lifecycle. Renders the UI of the button.
     *
     * @method render
     * @return {Object} The content which should be rendered.
     */

  }, {
    key: "render",
    value: function render() {
      var cssClass = 'ae-button ez-btn-ae ' + this.getStateClasses();

      if (this.getWidget().isEditingLink()) {
        var props = this.mergeButtonCfgProps();
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.EzBtnImageLinkEdit, props);
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        "aria-label": alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.Strings.link,
        className: cssClass,
        "data-type": "button-link",
        onClick: this.requestExclusive,
        tabIndex: this.props.tabIndex,
        title: alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.Strings.link
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        className: "ez-icon ez-btn-ae__icon"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: window.eZ.helpers.icon.getIconPath('link')
      })));
    }
  }], [{
    key: "key",
    get: function get() {
      return 'ezimagelink';
    }
  }]);

  return EzBtnImageLink;
}(alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.ButtonLink);


alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.Buttons[EzBtnImageLink.key] = alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.EzBtnImageLink = EzBtnImageLink;
var eZ = window.eZ = window.eZ || {};
eZ.ezAlloyEditor = eZ.ezAlloyEditor || {};
eZ.ezAlloyEditor.ezBtnImageLink = EzBtnImageLink;

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-imagelinkedit.js":
/*!**************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-imagelinkedit.js ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EzBtnImageLinkEdit; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! alloyeditor */ "alloyeditor");
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(alloyeditor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ez_btn_linkedit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ez-btn-linkedit */ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-linkedit.js");
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






var EzBtnImageLinkEdit = /*#__PURE__*/function (_EzBtnLinkEdit) {
  _inherits(EzBtnImageLinkEdit, _EzBtnLinkEdit);

  var _super = _createSuper(EzBtnImageLinkEdit);

  function EzBtnImageLinkEdit(props) {
    var _this;

    _classCallCheck(this, EzBtnImageLinkEdit);

    _this = _super.call(this, props);
    _this.widget = _this.getWidget();
    return _this;
  }

  _createClass(EzBtnImageLinkEdit, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (!this.state.discoveringContent && this.state.isTemporary) {
        this.removeLink();
      }

      this.widget.removeLinkEditState();
      this.props.cancelExclusive();
    }
  }, {
    key: "getInitialState",
    value: function getInitialState() {
      var widget = this.getWidget();
      var linkHref = widget.getEzLinkAttribute('href');
      var linkTarget = widget.getEzLinkAttribute('target');
      var linkTitle = widget.getEzLinkAttribute('title');
      var isTemporary = widget.getEzLinkAttribute('data-ez-temporary-link');
      return {
        linkHref: linkHref || '',
        linkTarget: linkTarget || '',
        linkTitle: linkTitle || '',
        isTemporary: isTemporary || false
      };
    }
  }, {
    key: "getWidget",
    value: function getWidget() {
      var editor = this.props.editor.get('nativeEditor');
      var wrapper = editor.getSelection().getStartElement();
      return editor.widgets.getByElement(wrapper);
    }
  }, {
    key: "udwOnConfirm",
    value: function udwOnConfirm(items) {
      this.widget.setEzLinkAttribute('href', 'ezlocation://' + items[0].id);
      this.widget.setLinkEditState();
      this.widget.setFocused(true);
    }
  }, {
    key: "udwOnCancel",
    value: function udwOnCancel(udwContainer, items) {
      this.widget.setLinkEditState();
      this.widget.setFocused(true);
      ReactDOM.unmountComponentAtNode(udwContainer);
    }
  }, {
    key: "removeLink",
    value: function removeLink() {
      var link = this.widget.getEzLinkElement();
      var editor = this.props.editor.get('nativeEditor');
      link.remove();
      this.widget.removeLinkEditState();
      this.widget.removeIsLinkedState();
      this.widget.setFocused(true);
      this.props.cancelExclusive();
      editor.fire('customUpdate');
    }
  }, {
    key: "updateLink",
    value: function updateLink() {
      var _this$state = this.state,
          linkHref = _this$state.linkHref,
          linkTarget = _this$state.linkTarget,
          linkTitle = _this$state.linkTitle;
      var hrefMethodName = linkHref === '' ? 'removeEzLinkAttribute' : 'setEzLinkAttribute';
      var targetMethodName = linkTarget === '' ? 'removeEzLinkAttribute' : 'setEzLinkAttribute';
      var titleMethodName = linkTitle === '' ? 'removeEzLinkAttribute' : 'setEzLinkAttribute';
      this.widget[hrefMethodName]('href', linkHref);
      this.widget[hrefMethodName]('data-cke-saved-href', linkHref);
      this.widget[targetMethodName]('target', linkTarget);
      this.widget[titleMethodName]('title', linkTitle);
      this.widget.removeEzLinkAttribute('data-ez-temporary-link');
      this.widget.removeLinkEditState();
      this.widget.setIsLinkedState();
      this.widget.setFocused(true);
      this.props.cancelExclusive();
    }
  }], [{
    key: "key",
    get: function get() {
      return 'ezimagelinkedit';
    }
  }]);

  return EzBtnImageLinkEdit;
}(_ez_btn_linkedit__WEBPACK_IMPORTED_MODULE_3__["default"]);


alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.Buttons[EzBtnImageLinkEdit.key] = alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.EzBtnImageLinkEdit = EzBtnImageLinkEdit;
var eZ = window.eZ = window.eZ || {};
eZ.ezAlloyEditor = eZ.ezAlloyEditor || {};
eZ.ezAlloyEditor.ezBtnImageLinkEdit = EzBtnImageLinkEdit;

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-imageupdate.js":
/*!************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-imageupdate.js ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EzBtnImageUpdate; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! alloyeditor */ "alloyeditor");
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(alloyeditor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base_ez_embedimage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base/ez-embedimage */ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/base/ez-embedimage.js");
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






var EzBtnImageUpdate = /*#__PURE__*/function (_EzEmbedImageButton) {
  _inherits(EzBtnImageUpdate, _EzEmbedImageButton);

  var _super = _createSuper(EzBtnImageUpdate);

  function EzBtnImageUpdate() {
    _classCallCheck(this, EzBtnImageUpdate);

    return _super.apply(this, arguments);
  }

  _createClass(EzBtnImageUpdate, [{
    key: "updateImage",
    value:
    /**
     * Updates the image element with the selected content in UDW.
     *
     * @method updateImage
     * @param {Array} items the result of the choice in the UDW
     * @protected
     */
    function updateImage(items) {
      var contentId = items[0].ContentInfo.Content._id;
      var content = items[0].ContentInfo.Content;
      var widget = this.getWidget();
      this.setContentInfo(contentId);
      widget.focus();
      widget.setWidgetContent('');
      widget.loadImagePreviewFromCurrentVersion(content.CurrentVersion._href, content.Name);
      ReactDOM.unmountComponentAtNode(document.querySelector('#react-udw'));
      this.fireCustomUpdateEvent();
    }
    /**
     * Fires a custom event to reflect changes in the RichText field.
     *
     * @method fireCustomUpdateEvent
     */

  }, {
    key: "fireCustomUpdateEvent",
    value: function fireCustomUpdateEvent() {
      var nativeEditor = this.props.editor.get('nativeEditor');
      nativeEditor.fire('customUpdate');
    }
    /**
     * Lifecycle. Renders the UI of the button.
     *
     * @method render
     * @return {Object} The content which should be rendered.
     */

  }, {
    key: "render",
    value: function render() {
      var css = 'ae-button ez-btn-ae ez-btn-ae--imageupdate ' + this.getStateClasses();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: css,
        onClick: this.chooseContent.bind(this),
        tabIndex: this.props.tabIndex
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        className: "ez-icon ez-btn-ae__icon"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: window.eZ.helpers.icon.getIconPath('image')
      })));
    }
  }], [{
    key: "key",
    get: function get() {
      return 'ezimageupdate';
    }
  }]);

  return EzBtnImageUpdate;
}(_base_ez_embedimage__WEBPACK_IMPORTED_MODULE_3__["default"]);


alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.Buttons[EzBtnImageUpdate.key] = alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.EzBtnImageUpdate = EzBtnImageUpdate;
var eZ = window.eZ = window.eZ || {};
eZ.ezAlloyEditor = eZ.ezAlloyEditor || {};
eZ.ezAlloyEditor.ezBtnImageUpdate = EzBtnImageUpdate;
EzBtnImageUpdate.defaultProps = {
  udwTitle: Translator.trans(
  /*@Desc("Select an image")*/
  'image_update_btn.udw.title', {}, 'alloy_editor'),
  udwContentDiscoveredMethod: 'updateImage',
  udwConfigName: 'richtext_embed_image',
  label: Translator.trans(
  /*@Desc("Select another image")*/
  'image_update_btn.label', {}, 'alloy_editor')
};

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-imagevariation.js":
/*!***************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-imagevariation.js ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EzBtnImageVariation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! alloyeditor */ "alloyeditor");
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(alloyeditor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base_ez_embedimage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base/ez-embedimage */ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/base/ez-embedimage.js");
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






var EzBtnImageVariation = /*#__PURE__*/function (_EzEmbedImageButton) {
  _inherits(EzBtnImageVariation, _EzEmbedImageButton);

  var _super = _createSuper(EzBtnImageVariation);

  function EzBtnImageVariation() {
    _classCallCheck(this, EzBtnImageVariation);

    return _super.apply(this, arguments);
  }

  _createClass(EzBtnImageVariation, [{
    key: "updateImage",
    value:
    /**
     * Change event handler. It updates the image in the editor so that the
     * newly choosen variation is used.
     *
     * @method updateImage
     * @protected
     * @param {Object} event
     */
    function updateImage(event) {
      var widget = this.getWidget();
      var newVariation = event.target.value;
      widget.setConfig('size', newVariation).setWidgetContent('');
      widget.focus();
      widget.loadImageVariation(widget.variations[newVariation].href);
    }
    /**
     * Returns the options to add to the drop down list.
     *
     * @method getImageVariationOptions
     * @return Array
     */

  }, {
    key: "getImageVariationOptions",
    value: function getImageVariationOptions() {
      return Object.keys(eZ.adminUiConfig.imageVariations).map(function (variation) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          key: variation,
          value: variation
        }, variation);
      });
    }
    /**
     * Lifecycle. Renders the UI of the button.
     *
     * @method render
     * @return {Object} The content which should be rendered.
     */

  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
        className: "form-control ae-select ae-select--imagevariation",
        defaultValue: this.getWidget().getConfig('size'),
        onChange: this.updateImage.bind(this),
        tabIndex: this.props.tabIndex
      }, this.getImageVariationOptions());
    }
  }], [{
    key: "key",
    get: function get() {
      return 'ezimagevariation';
    }
  }]);

  return EzBtnImageVariation;
}(_base_ez_embedimage__WEBPACK_IMPORTED_MODULE_3__["default"]);


alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.Buttons[EzBtnImageVariation.key] = alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.EzBtnImageVariation = EzBtnImageVariation;
var eZ = window.eZ = window.eZ || {};
eZ.ezAlloyEditor = eZ.ezAlloyEditor || {};
eZ.ezAlloyEditor.ezBtnImageVariation = EzBtnImageVariation;

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-inlinecustomtag-edit.js":
/*!*********************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-inlinecustomtag-edit.js ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EzBtnInlineCustomTagEdit; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ez_btn_customtag_edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ez-btn-customtag-edit */ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-customtag-edit.js");
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




var EzBtnInlineCustomTagEdit = /*#__PURE__*/function (_EzBtnCustomTagEdit) {
  _inherits(EzBtnInlineCustomTagEdit, _EzBtnCustomTagEdit);

  var _super = _createSuper(EzBtnInlineCustomTagEdit);

  function EzBtnInlineCustomTagEdit() {
    _classCallCheck(this, EzBtnInlineCustomTagEdit);

    return _super.apply(this, arguments);
  }

  _createClass(EzBtnInlineCustomTagEdit, [{
    key: "getUpdateBtnName",
    value: function getUpdateBtnName() {
      return "ezBtn".concat(this.customTagName.charAt(0).toUpperCase() + this.customTagName.slice(1), "Update");
    }
  }]);

  return EzBtnInlineCustomTagEdit;
}(_ez_btn_customtag_edit__WEBPACK_IMPORTED_MODULE_1__["default"]);


var eZ = window.eZ = window.eZ || {};
eZ.ezAlloyEditor = eZ.ezAlloyEditor || {};
eZ.ezAlloyEditor.ezBtnInlineCustomTagEdit = EzBtnInlineCustomTagEdit;
EzBtnInlineCustomTagEdit.propTypes = {
  editor: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object.isRequired,
  label: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired
};

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-inlinecustomtag-update.js":
/*!***********************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-inlinecustomtag-update.js ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EzBtnInlineCustomTagUpdate; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ez_btn_customtag_update__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ez-btn-customtag-update */ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-customtag-update.js");
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




var EzBtnInlineCustomTagUpdate = /*#__PURE__*/function (_EzBtnCustomTagUpdate) {
  _inherits(EzBtnInlineCustomTagUpdate, _EzBtnCustomTagUpdate);

  var _super = _createSuper(EzBtnInlineCustomTagUpdate);

  function EzBtnInlineCustomTagUpdate() {
    _classCallCheck(this, EzBtnInlineCustomTagUpdate);

    return _super.apply(this, arguments);
  }

  _createClass(EzBtnInlineCustomTagUpdate, [{
    key: "saveCustomTag",
    value:
    /**
     * Creates the custom tag in AlloyEditor.
     *
     * @method saveCustomTag
     */
    function saveCustomTag() {
      var _this$props = this.props,
          createNewTag = _this$props.createNewTag,
          editor = _this$props.editor;
      var nativeEditor = editor.get('nativeEditor');
      var selection = nativeEditor.getSelectedHtml();
      nativeEditor.unlockSelection(true);

      if (createNewTag) {
        this.execCommand();
      }

      var widget = this.getWidget() || this.widget;
      var configValues = Object.assign({}, this.state.values);
      widget.setFocused(true);

      if (createNewTag) {
        var firstChild = selection.getFirst();
        var isNodeElement = firstChild && firstChild.type === CKEDITOR.NODE_ELEMENT;
        var content = isNodeElement && firstChild.is('table') ? selection.$.textContent : selection.getHtml();
        widget.setName(this.customTagName);
        widget.setWidgetContent(content);
        widget.renderIcon();
      }

      widget.clearConfig();
      Object.keys(this.attributes).forEach(function (key) {
        widget.setConfig(key, configValues[key].value);
      });
    }
  }]);

  return EzBtnInlineCustomTagUpdate;
}(_ez_btn_customtag_update__WEBPACK_IMPORTED_MODULE_1__["default"]);


var eZ = window.eZ = window.eZ || {};
eZ.ezAlloyEditor = eZ.ezAlloyEditor || {};
eZ.ezAlloyEditor.ezBtnInlineCustomTagUpdate = EzBtnInlineCustomTagUpdate;
EzBtnInlineCustomTagUpdate.defaultProps = {
  command: 'ezinlinecustomtag',
  modifiesSelection: true
};
EzBtnInlineCustomTagUpdate.propTypes = {
  editor: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object.isRequired,
  label: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired
};

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-inlinecustomtag.js":
/*!****************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-inlinecustomtag.js ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EzBtnInlineCustomTag; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ez_btn_customtag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ez-btn-customtag */ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-customtag.js");
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




var EzBtnInlineCustomTag = /*#__PURE__*/function (_EzBtnCustomTag) {
  _inherits(EzBtnInlineCustomTag, _EzBtnCustomTag);

  var _super = _createSuper(EzBtnInlineCustomTag);

  function EzBtnInlineCustomTag() {
    _classCallCheck(this, EzBtnInlineCustomTag);

    return _super.apply(this, arguments);
  }

  _createClass(EzBtnInlineCustomTag, [{
    key: "getUpdateBtnName",
    value: function getUpdateBtnName() {
      return "ezBtn".concat(this.customTagName.charAt(0).toUpperCase() + this.customTagName.slice(1), "Update");
    }
  }]);

  return EzBtnInlineCustomTag;
}(_ez_btn_customtag__WEBPACK_IMPORTED_MODULE_1__["default"]);


var eZ = window.eZ = window.eZ || {};
eZ.ezAlloyEditor = eZ.ezAlloyEditor || {};
eZ.ezAlloyEditor.ezBtnInlineCustomTag = EzBtnInlineCustomTag;
EzBtnInlineCustomTag.propTypes = {
  editor: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object.isRequired,
  label: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired
};

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-italic.js":
/*!*******************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-italic.js ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EzBtnItalic; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! alloyeditor */ "alloyeditor");
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(alloyeditor__WEBPACK_IMPORTED_MODULE_2__);
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





var EzBtnItalic = /*#__PURE__*/function (_AlloyEditor$ButtonIt) {
  _inherits(EzBtnItalic, _AlloyEditor$ButtonIt);

  var _super = _createSuper(EzBtnItalic);

  function EzBtnItalic() {
    _classCallCheck(this, EzBtnItalic);

    return _super.apply(this, arguments);
  }

  _createClass(EzBtnItalic, [{
    key: "render",
    value:
    /**
     * Lifecycle. Renders the UI of the button.
     *
     * @method render
     * @return {Object} The content which should be rendered.
     */
    function render() {
      var cssClass = 'ae-button ez-btn-ae ' + this.getStateClasses();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        "aria-label": alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.Strings.italic,
        "aria-pressed": cssClass.indexOf('pressed') !== -1,
        className: cssClass,
        "data-type": "button-italic",
        onClick: this.execCommand,
        tabIndex: this.props.tabIndex,
        title: alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.Strings.italic
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        className: "ez-icon ez-btn-ae__icon"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: window.eZ.helpers.icon.getIconPath('italic')
      })));
    }
  }], [{
    key: "key",
    get: function get() {
      return 'ezitalic';
    }
  }]);

  return EzBtnItalic;
}(alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.ButtonItalic);


alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.Buttons[EzBtnItalic.key] = alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.EzBtnItalic = EzBtnItalic;
var eZ = window.eZ = window.eZ || {};
eZ.ezAlloyEditor = eZ.ezAlloyEditor || {};
eZ.ezAlloyEditor.ezBtnItalic = EzBtnItalic;

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-link.js":
/*!*****************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-link.js ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EzBtnLink; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! alloyeditor */ "alloyeditor");
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(alloyeditor__WEBPACK_IMPORTED_MODULE_2__);
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





var EzBtnLink = /*#__PURE__*/function (_AlloyEditor$ButtonLi) {
  _inherits(EzBtnLink, _AlloyEditor$ButtonLi);

  var _super = _createSuper(EzBtnLink);

  function EzBtnLink() {
    _classCallCheck(this, EzBtnLink);

    return _super.apply(this, arguments);
  }

  _createClass(EzBtnLink, [{
    key: "render",
    value:
    /**
     * Lifecycle. Renders the UI of the button.
     *
     * @method render
     * @return {Object} The content which should be rendered.
     */
    function render() {
      var cssClass = 'ae-button ez-btn-ae ' + this.getStateClasses();

      if (this.props.renderExclusive) {
        var props = this.mergeButtonCfgProps();
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.ButtonLinkEdit, props);
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        "aria-label": alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.Strings.link,
        className: cssClass,
        "data-type": "button-link",
        onClick: this._requestExclusive,
        tabIndex: this.props.tabIndex,
        title: alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.Strings.link
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        className: "ez-icon ez-btn-ae__icon"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: window.eZ.helpers.icon.getIconPath('link')
      })));
    }
  }], [{
    key: "key",
    get: function get() {
      return 'ezlink';
    }
  }]);

  return EzBtnLink;
}(alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.ButtonLink);


alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.Buttons[EzBtnLink.key] = alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.EzBtnLink = EzBtnLink;
var eZ = window.eZ = window.eZ || {};
eZ.ezAlloyEditor = eZ.ezAlloyEditor || {};
eZ.ezAlloyEditor.ezBtnLink = EzBtnLink;

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-linkedit.js":
/*!*********************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-linkedit.js ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EzBtnLinkEdit; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! alloyeditor */ "alloyeditor");
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(alloyeditor__WEBPACK_IMPORTED_MODULE_2__);
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





var EzBtnLinkEdit = /*#__PURE__*/function (_Component) {
  _inherits(EzBtnLinkEdit, _Component);

  var _super = _createSuper(EzBtnLinkEdit);

  function EzBtnLinkEdit(props) {
    var _this;

    _classCallCheck(this, EzBtnLinkEdit);

    _this = _super.call(this, props);
    _this.state = _this.getInitialState();
    return _this;
  }

  _createClass(EzBtnLinkEdit, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      this.setState(this.getInitialState());
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (!this.state.discoveringContent && this.state.isTemporary) {
        this.removeLink();
      }
    }
    /**
     * Lifecycle. Invoked once before the component is mounted.
     * The return value will be used as the initial value of this.state.
     *
     * @method getInitialState
     */

  }, {
    key: "getInitialState",
    value: function getInitialState() {
      var linkUtils = new CKEDITOR.Link(this.props.editor.get('nativeEditor'), {
        appendProtocol: false
      });
      var link = linkUtils.getFromSelection();
      var href = '';
      var target = '';
      var title = '';
      var isTemporary = false;

      if (link) {
        href = link.getAttribute('href');
        target = link.hasAttribute('target') ? link.getAttribute('target') : target;
        title = link.getAttribute('title');
        isTemporary = link.hasAttribute('data-ez-temporary-link');
      } else {
        linkUtils.create(href, {
          'data-ez-temporary-link': true
        });
        link = linkUtils.getFromSelection();
        isTemporary = true;
      }

      return {
        element: link,
        linkHref: href,
        linkTarget: target,
        linkTitle: title,
        isTemporary: isTemporary
      };
    }
  }, {
    key: "udwOnConfirm",
    value: function udwOnConfirm(items) {
      var _this2 = this;

      this.state.element.setAttribute('href', 'ezlocation://' + items[0].id);
      this.invokeWithFixedScrollbar(function () {
        _this2.focusEditedLink();
      });
    }
  }, {
    key: "udwOnCancel",
    value: function udwOnCancel(udwContainer) {
      var _this3 = this;

      this.invokeWithFixedScrollbar(function () {
        _this3.focusEditedLink();
      });
      ReactDOM.unmountComponentAtNode(udwContainer);
    }
    /**
     * Runs the Universal Discovery Widget so that the user can pick a
     * Content.
     *
     * @method selectContent
     * @protected
     */

  }, {
    key: "selectContent",
    value: function selectContent() {
      var _this4 = this;

      var openUDW = function openUDW() {
        var udwContainer = document.querySelector('#react-udw');
        var config = JSON.parse(document.querySelector("[data-udw-config-name=\"richtext_embed\"]").dataset.udwConfig);
        var title = Translator.trans(
        /*@Desc("Select content")*/
        'link_edit_btn.udw.title', {}, 'alloy_editor');
        var selectContent = eZ.richText.alloyEditor.callbacks.selectContent;
        var mergedConfig = Object.assign({
          onConfirm: _this4.udwOnConfirm.bind(_this4),
          onCancel: _this4.udwOnCancel.bind(_this4, udwContainer),
          title: title,
          multiple: false
        }, config);

        if (typeof selectContent === 'function') {
          selectContent(mergedConfig);
        }
      };

      this.setState({
        discoveringContent: true
      }, openUDW.bind(this));
    }
    /**
     * Gives the focus to the edited link by moving the caret in it.
     *
     * @method focusEditedLink
     * @protected
     */

  }, {
    key: "focusEditedLink",
    value: function focusEditedLink() {
      var editor = this.props.editor.get('nativeEditor');
      editor.focus();
      editor.eZ.moveCaretToElement(editor, this.state.element);
      editor.fire('actionPerformed', this);
      this.showUI();
    }
    /**
     * Fires the editorInteraction event so that AlloyEditor editor
     * UI remains visible and is updated.
     *
     * @method showUI
     */

  }, {
    key: "showUI",
    value: function showUI() {
      var nativeEditor = this.props.editor.get('nativeEditor');
      var eventOptions = {
        editor: this.props.editor,
        selectionData: {
          element: this.state.element,
          region: this.getRegion()
        }
      };
      var path = nativeEditor.elementPath();

      if (path) {
        eventOptions.nativeEvent = {
          editor: this.props.editor,
          target: path.lastElement.$
        };
      }

      nativeEditor.fire('editorInteraction', eventOptions);
    }
    /**
     * Returns the element region.
     *
     * @method getRegion
     * @return {Object}
     */

  }, {
    key: "getRegion",
    value: function getRegion() {
      var scroll = this.state.element.getWindow().getScrollPosition();
      var region = this.state.element.getClientRect();
      region.top += scroll.y;
      region.bottom += scroll.y;
      region.left += scroll.x;
      region.right += scroll.x;
      region.direction = CKEDITOR.SELECTION_TOP_TO_BOTTOM;
      return region;
    }
    /**
     * Lifecycle. Renders the row of the button.
     *
     * @method renderUDWRow
     * @return {Object} The content which should be rendered.
     */

  }, {
    key: "renderUDWRow",
    value: function renderUDWRow() {
      var selectContentLabel = Translator.trans(
      /*@Desc("Select content")*/
      'link_edit_btn.button_row.select_content', {}, 'alloy_editor');
      var separatorLabel = Translator.trans(
      /*@Desc("or")*/
      'link_edit_btn.button_row.separator', {}, 'alloy_editor');
      var linkToLabel = Translator.trans(
      /*@Desc("Link to:")*/
      'link_edit_btn.button_row.link_to', {}, 'alloy_editor');
      var selectLabel = Translator.trans(
      /*@Desc("Select:")*/
      'link_edit_btn.button_row.select', {}, 'alloy_editor');
      var blockPlaceholderText = Translator.trans(
      /*@Desc("Type or paste link here")*/
      'link_edit_btn.button_row.block.placeholder.text', {}, 'alloy_editor');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "ez-ae-edit-link__row ez-ae-edit-link__row--udw"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "ez-ae-edit-link__block ez-ae-edit-link__block--udw"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "ez-ae-edit-link__label"
      }, selectLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "ez-btn-ae ez-btn-ae--udw btn btn-primary",
        onClick: this.selectContent.bind(this)
      }, selectContentLabel)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "ez-ae-edit-link__block ez-ae-edit-link__block--separator"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "ez-ae-edit-link__text"
      }, separatorLabel)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "ez-ae-edit-link__block ez-ae-edit-link__block--url"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "ez-ae-edit-link__label"
      }, linkToLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "ae-input ez-ae-edit-link__input form-control",
        onChange: this.setHref.bind(this),
        onKeyDown: this.handleKeyDown.bind(this),
        placeholder: blockPlaceholderText,
        type: "text",
        value: this.state.linkHref
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        "aria-label": alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.Strings.clearInput,
        className: "ez-btn-ae ez-btn-ae--clear-link ae-button ae-icon-remove",
        onClick: this.clearLink.bind(this),
        title: alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.Strings.clear
      })));
    }
    /**
     * Lifecycle. Renders the row of the button.
     *
     * @method renderInfoRow
     * @return {Object} The content which should be rendered.
     */

  }, {
    key: "renderInfoRow",
    value: function renderInfoRow() {
      var target = this.state.linkTarget;
      var title = Translator.trans(
      /*@Desc("Title:")*/
      'link_edit_btn.info_row.title', {}, 'alloy_editor');
      var openInLabel = Translator.trans(
      /*@Desc("Open in:")*/
      'link_edit_btn.info_row.open_in.label', {}, 'alloy_editor');
      var sameTabLabel = Translator.trans(
      /*@Desc("Same tab")*/
      'link_edit_btn.info_row.same_tab', {}, 'alloy_editor');
      var newTabLabel = Translator.trans(
      /*@Desc("New tab")*/
      'link_edit_btn.info_row.new_tab', {}, 'alloy_editor');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "ez-ae-edit-link__row ez-ae-edit-link__row--info"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "ez-ae-edit-link__block ez-ae-edit-link__block--title"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "ez-ae-edit-link__label"
      }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        className: "ae-input ez-ae-edit-link__input form-control",
        onChange: this.setTitle.bind(this),
        value: this.state.linkTitle
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "ez-ae-edit-link__block ez-ae-edit-link__block--target"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "ez-ae-edit-link__text"
      }, openInLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "ez-ae-edit-link__choice"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "ez-ae-link-target-same",
        className: "ez-ae-edit-link__label ez-ae-edit-link__label--same-tab",
        title: sameTabLabel
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "radio",
        name: "target",
        id: "ez-ae-link-target-same",
        value: "",
        defaultChecked: target === '',
        onChange: this.setTarget.bind(this)
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "ez-btn-ae__icon-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        className: "ez-icon ez-btn-ae__icon"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: window.eZ.helpers.icon.getIconPath('open-sametab')
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "ez-ae-link-target-blank",
        className: "ez-ae-edit-link__label ez-ae-edit-link__label--new-tab",
        title: newTabLabel
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "radio",
        name: "target",
        id: "ez-ae-link-target-blank",
        value: "_blank",
        defaultChecked: target === '_blank',
        onChange: this.setTarget.bind(this)
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "ez-btn-ae__icon-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        className: "ez-icon ez-btn-ae__icon"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: window.eZ.helpers.icon.getIconPath('open-newtab')
      })))))));
    }
    /**
     * Lifecycle. Renders the row of the button.
     *
     * @method renderActionRow
     * @return {Object} The content which should be rendered.
     */

  }, {
    key: "renderActionRow",
    value: function renderActionRow() {
      var removeLabel = Translator.trans(
      /*@Desc("Remove")*/
      'link_edit_btn.action_row.remove', {}, 'alloy_editor');
      var saveLabel = Translator.trans(
      /*@Desc("Save")*/
      'link_edit_btn.action_row.save', {}, 'alloy_editor');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "ez-ae-edit-link__row ez-ae-edit-link__row--actions"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "ez-ae-edit-link__block ez-ae-edit-link__block--actions"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "ez-btn-ae ez-btn-ae--remove-link btn btn-icon",
        disabled: this.state.isTemporary,
        onClick: this.removeLink.bind(this),
        title: removeLabel
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        className: "ez-icon ez-btn-ae__icon"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: window.eZ.helpers.icon.getIconPath('link-remove')
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "ez-btn-ae ez-btn-ae--save-link btn btn-icon",
        disabled: !this.state.linkHref,
        onClick: this.saveLink.bind(this),
        title: saveLabel
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        className: "ez-icon ez-btn-ae__icon"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: window.eZ.helpers.icon.getIconPath('checkmark')
      })))));
    }
    /**
     * Lifecycle. Renders the UI of the button.
     *
     * @method render
     * @return {Object} The content which should be rendered.
     */

  }, {
    key: "render",
    value: function render() {
      var containerClass = 'ez-ae-edit-link';

      if (this.state.linkHref) {
        containerClass += ' is-linked';
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: containerClass
      }, this.renderUDWRow(), this.renderInfoRow(), this.renderActionRow());
    }
    /**
     * Clears the link input. This only changes the component internal
     * state, but does not affect the link element of the editor. Only the
     * removeLink and updateLink methods are translated to the editor
     * element.
     *
     * @method clearLink
     */

  }, {
    key: "clearLink",
    value: function clearLink() {
      this.setState({
        linkHref: ''
      });
    }
    /**
     * Monitors key interaction inside the input element to respond to the
     * keys:
     * - Enter: Creates/updates the link.
     * - Escape: Discards the changes.
     *
     * @method handleKeyDown
     * @param {SyntheticEvent} event The keyboard event.
     */

  }, {
    key: "handleKeyDown",
    value: function handleKeyDown(event) {
      var _this5 = this;

      if (event.keyCode === 13 || event.keyCode === 27) {
        event.preventDefault();
      }

      if (event.keyCode === 13 && event.target.value) {
        this.saveLink();
      } else if (event.keyCode === 27) {
        var editor = this.props.editor.get('nativeEditor');
        new CKEDITOR.Link(editor).advanceSelection();
        this.invokeWithFixedScrollbar(function () {
          editor.fire('actionPerformed', _this5);
        });
      }
    }
    /**
     * Updates the component state when the link input changes on user
     * interaction.
     *
     * @method setHref
     * @param {SyntheticEvent} event The change event.
     */

  }, {
    key: "setHref",
    value: function setHref(event) {
      this.setState({
        linkHref: event.target.value
      });
    }
    /**
     * Sets the link title
     *
     * @method setTitle
     * @param {SyntheticEvent} event The change event.
     */

  }, {
    key: "setTitle",
    value: function setTitle(event) {
      this.setState({
        linkTitle: event.target.value
      });
    }
    /**
     * Sets the target of the link
     *
     * @method setTarget
     * @param {SyntheticEvent} event The change event.
     */

  }, {
    key: "setTarget",
    value: function setTarget(event) {
      this.setState({
        linkTarget: event.target.value
      });
    }
    /**
     * Removes the link in the editor element.
     *
     * @method removeLink
     */

  }, {
    key: "removeLink",
    value: function removeLink() {
      var _this6 = this;

      var editor = this.props.editor.get('nativeEditor');
      var linkUtils = new CKEDITOR.Link(editor);
      var selection = editor.getSelection();
      var bookmarks = selection.createBookmarks();
      linkUtils.remove(this.state.element, {
        advance: true
      });
      selection.selectBookmarks(bookmarks);
      this.props.cancelExclusive();
      this.invokeWithFixedScrollbar(function () {
        editor.fire('actionPerformed', _this6);
      });
      editor.fire('customUpdate');
    }
    /**
     * Saves the link with the current href, title and target.
     *
     * @method saveLink
     */

  }, {
    key: "saveLink",
    value: function saveLink() {
      var _this7 = this;

      this.setState({
        isTemporary: false
      }, function () {
        return _this7.updateLink();
      });
    }
    /**
     * Updates the link in the editor element. If the element didn't exist
     * previously, it will create a new <a> element with the href specified
     * in the link input.
     *
     * @method updateLink
     */

  }, {
    key: "updateLink",
    value: function updateLink() {
      var _this8 = this;

      var editor = this.props.editor.get('nativeEditor');
      var linkUtils = new CKEDITOR.Link(editor);
      var linkAttrs = {
        target: this.state.linkTarget,
        title: this.state.linkTitle,
        'data-ez-temporary-link': this.state.isTemporary ? true : null
      };
      var modifySelection = {
        advance: true
      };

      if (this.state.linkHref) {
        linkAttrs.href = this.state.linkHref;
        linkUtils.update(linkAttrs, this.state.element, modifySelection);
        this.invokeWithFixedScrollbar(function () {
          editor.fire('actionPerformed', _this8);
          var path = editor.elementPath();

          if (path && path.lastElement.getName() === 'br') {
            var parent = path.lastElement.getParent();

            if (parent.getName() === 'td' || parent.getName() === 'th') {
              editor.eZ.moveCaretToElement(editor, parent);
            }
          }
        });
      } // We need to cancelExclusive with the bound parameters in case the
      // button is used inside another component in exclusive mode (such
      // is the case of the link button)


      this.props.cancelExclusive();
      this.showUI();
    }
    /**
     * Saves current scrollbar position, invokes callback function and scrolls
     * to the saved position afterward.
     *
     * @method invokeWithFixedScrollbar
     * @param {Function} callback invoked after saving current scrollbar position
     */

  }, {
    key: "invokeWithFixedScrollbar",
    value: function invokeWithFixedScrollbar(callback) {
      if (navigator.userAgent.indexOf('Chrome') > -1) {
        var scrollY = window.pageYOffset;
        callback();
        window.scroll(window.pageXOffset, scrollY);
      } else {
        callback();
      }
    }
  }], [{
    key: "key",
    get: function get() {
      return 'ezlinkedit';
    }
  }]);

  return EzBtnLinkEdit;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.Buttons[EzBtnLinkEdit.key] = alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.ButtonLinkEdit = EzBtnLinkEdit;
var eZ = window.eZ = window.eZ || {};
eZ.ezAlloyEditor = eZ.ezAlloyEditor || {};
eZ.ezAlloyEditor.ezBtnLinkEdit = EzBtnLinkEdit;

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-movedown.js":
/*!*********************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-movedown.js ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EzBtnMoveDown; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! alloyeditor */ "alloyeditor");
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(alloyeditor__WEBPACK_IMPORTED_MODULE_1__);
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




var EzBtnMoveDown = /*#__PURE__*/function (_Component) {
  _inherits(EzBtnMoveDown, _Component);

  var _super = _createSuper(EzBtnMoveDown);

  function EzBtnMoveDown() {
    _classCallCheck(this, EzBtnMoveDown);

    return _super.apply(this, arguments);
  }

  _createClass(EzBtnMoveDown, [{
    key: "moveDown",
    value:
    /**
     * Executes the eZMoveDown command.
     *
     * @method moveDown
     */
    function moveDown() {
      var editor = this.props.editor.get('nativeEditor');
      editor.execCommand('eZMoveDown');
    }
    /**
     * Lifecycle. Renders the UI of the button.
     *
     * @method render
     * @return {Object} The content which should be rendered.
     */

  }, {
    key: "render",
    value: function render() {
      var title = Translator.trans(
      /*@Desc("Move down")*/
      'move_down_btn.title', {}, 'alloy_editor');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "ae-button ez-btn-ae ez-btn-ae--move-down",
        onClick: this.moveDown.bind(this),
        tabIndex: this.props.tabIndex,
        title: title
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        className: "ez-icon ez-btn-ae__icon"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: window.eZ.helpers.icon.getIconPath('circle-caret-down')
      })));
    }
  }], [{
    key: "key",
    get: function get() {
      return 'ezmovedown';
    }
  }]);

  return EzBtnMoveDown;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


alloyeditor__WEBPACK_IMPORTED_MODULE_1___default.a.Buttons[EzBtnMoveDown.key] = alloyeditor__WEBPACK_IMPORTED_MODULE_1___default.a.EzBtnMoveDown = EzBtnMoveDown;
var eZ = window.eZ = window.eZ || {};
eZ.ezAlloyEditor = eZ.ezAlloyEditor || {};
eZ.ezAlloyEditor.ezBtnMoveDown = EzBtnMoveDown;

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-moveup.js":
/*!*******************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-moveup.js ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EzBtnMoveUp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! alloyeditor */ "alloyeditor");
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(alloyeditor__WEBPACK_IMPORTED_MODULE_1__);
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




var EzBtnMoveUp = /*#__PURE__*/function (_Component) {
  _inherits(EzBtnMoveUp, _Component);

  var _super = _createSuper(EzBtnMoveUp);

  function EzBtnMoveUp() {
    _classCallCheck(this, EzBtnMoveUp);

    return _super.apply(this, arguments);
  }

  _createClass(EzBtnMoveUp, [{
    key: "moveUp",
    value:
    /**
     * Executes the eZMoveUp command.
     *
     * @method moveUp
     */
    function moveUp() {
      var editor = this.props.editor.get('nativeEditor');
      editor.execCommand('eZMoveUp');
    }
    /**
     * Lifecycle. Renders the UI of the button.
     *
     * @method render
     * @return {Object} The content which should be rendered.
     */

  }, {
    key: "render",
    value: function render() {
      var title = Translator.trans(
      /*@Desc("Move up")*/
      'move_up_btn.title', {}, 'alloy_editor');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "ae-button ez-btn-ae ez-btn-ae--move-up",
        onClick: this.moveUp.bind(this),
        tabIndex: this.props.tabIndex,
        title: title
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        className: "ez-icon ez-btn-ae__icon"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: window.eZ.helpers.icon.getIconPath('circle-caret-up')
      })));
    }
  }], [{
    key: "key",
    get: function get() {
      return 'ezmoveup';
    }
  }]);

  return EzBtnMoveUp;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


alloyeditor__WEBPACK_IMPORTED_MODULE_1___default.a.Buttons[EzBtnMoveUp.key] = alloyeditor__WEBPACK_IMPORTED_MODULE_1___default.a.EzBtnMoveUp = EzBtnMoveUp;
var eZ = window.eZ = window.eZ || {};
eZ.ezAlloyEditor = eZ.ezAlloyEditor || {};
eZ.ezAlloyEditor.ezBtnMoveUp = EzBtnMoveUp;

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-orderedlist.js":
/*!************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-orderedlist.js ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EzBtnOrderedList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! alloyeditor */ "alloyeditor");
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(alloyeditor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base_ez_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base/ez-button */ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/base/ez-button.js");
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






var EzBtnOrderedList = /*#__PURE__*/function (_EzButton) {
  _inherits(EzBtnOrderedList, _EzButton);

  var _super = _createSuper(EzBtnOrderedList);

  function EzBtnOrderedList() {
    _classCallCheck(this, EzBtnOrderedList);

    return _super.apply(this, arguments);
  }

  _createClass(EzBtnOrderedList, [{
    key: "addList",
    value:
    /**
     * Executes the eZAppendContent command to add an unordered list containing
     * an empty list item.
     *
     * @method addList
     */
    function addList() {
      this.execCommand({
        tagName: 'ol',
        content: '<li></li>',
        focusElement: 'li'
      });
    }
    /**
     * Lifecycle. Renders the UI of the button.
     *
     * @method render
     * @return {Object} The content which should be rendered.
     */

  }, {
    key: "render",
    value: function render() {
      var label = Translator.trans(
      /*@Desc("List")*/
      'ordered_list_btn.label', {}, 'alloy_editor');
      var css = 'ae-button ez-btn-ae ez-btn-ae--ordered-list ' + this.getStateClasses();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: css,
        onClick: this.addList.bind(this),
        tabIndex: this.props.tabIndex,
        title: label
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        className: "ez-icon ez-btn-ae__icon"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: window.eZ.helpers.icon.getIconPath('list-numbered')
      })));
    }
  }], [{
    key: "key",
    get: function get() {
      return 'ezorderedlist';
    }
  }]);

  return EzBtnOrderedList;
}(_base_ez_button__WEBPACK_IMPORTED_MODULE_3__["default"]);


alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.Buttons[EzBtnOrderedList.key] = alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.EzBtnOrderedList = EzBtnOrderedList;
var eZ = window.eZ = window.eZ || {};
eZ.ezAlloyEditor = eZ.ezAlloyEditor || {};
eZ.ezAlloyEditor.ezBtnOrderedList = EzBtnOrderedList;
EzBtnOrderedList.propTypes = {
  command: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  modifiesSelection: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
EzBtnOrderedList.defaultProps = {
  command: 'eZAddContent',
  modifiesSelection: true
};

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-paragraph.js":
/*!**********************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-paragraph.js ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EzBtnParagraph; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! alloyeditor */ "alloyeditor");
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(alloyeditor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base_ez_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base/ez-button */ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/base/ez-button.js");
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






var EzBtnParagraph = /*#__PURE__*/function (_EzButton) {
  _inherits(EzBtnParagraph, _EzButton);

  var _super = _createSuper(EzBtnParagraph);

  function EzBtnParagraph() {
    _classCallCheck(this, EzBtnParagraph);

    return _super.apply(this, arguments);
  }

  _createClass(EzBtnParagraph, [{
    key: "addParagraph",
    value:
    /**
     * Executes the eZAppendContent to add a paragraph element in the editor.
     *
     * @method addParagraph
     */
    function addParagraph() {
      this.execCommand({
        tagName: 'p',
        content: '<br>'
      });
    }
    /**
     * Lifecycle. Renders the UI of the button.
     *
     * @method render
     * @return {Object} The content which should be rendered.
     */

  }, {
    key: "render",
    value: function render() {
      var label = Translator.trans(
      /*@Desc("Paragraph")*/
      'paragraph_btn.label', {}, 'alloy_editor');
      var css = 'ae-button ez-btn-ae ez-btn-ae--paragraph ' + this.getStateClasses();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: css,
        onClick: this.addParagraph.bind(this),
        tabIndex: this.props.tabIndex,
        title: label
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        className: "ez-icon ez-btn-ae__icon"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: window.eZ.helpers.icon.getIconPath('paragraph-add')
      })));
    }
  }], [{
    key: "key",
    get: function get() {
      return 'ezparagraph';
    }
  }]);

  return EzBtnParagraph;
}(_base_ez_button__WEBPACK_IMPORTED_MODULE_3__["default"]);


alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.Buttons[EzBtnParagraph.key] = alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.EzBtnParagraph = EzBtnParagraph;
var eZ = window.eZ = window.eZ || {};
eZ.ezAlloyEditor = eZ.ezAlloyEditor || {};
eZ.ezAlloyEditor.ezBtnParagraph = EzBtnParagraph;
EzBtnParagraph.propTypes = {
  command: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  modifiesSelection: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
EzBtnParagraph.defaultProps = {
  command: 'eZAddContent',
  modifiesSelection: true
};

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-quote.js":
/*!******************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-quote.js ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EzBtnQuote; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! alloyeditor */ "alloyeditor");
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(alloyeditor__WEBPACK_IMPORTED_MODULE_2__);
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





var EzBtnQuote = /*#__PURE__*/function (_AlloyEditor$ButtonQu) {
  _inherits(EzBtnQuote, _AlloyEditor$ButtonQu);

  var _super = _createSuper(EzBtnQuote);

  function EzBtnQuote() {
    _classCallCheck(this, EzBtnQuote);

    return _super.apply(this, arguments);
  }

  _createClass(EzBtnQuote, [{
    key: "render",
    value:
    /**
     * Lifecycle. Renders the UI of the button.
     *
     * @method render
     * @return {Object} The content which should be rendered.
     */
    function render() {
      var cssClass = 'ae-button ez-btn-ae ' + this.getStateClasses();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        "aria-label": alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.Strings.quote,
        "aria-pressed": cssClass.indexOf('pressed') !== -1,
        className: cssClass,
        "data-type": "button-quote",
        onClick: this.execCommand,
        tabIndex: this.props.tabIndex,
        title: alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.Strings.quote
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        className: "ez-icon ez-btn-ae__icon"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: window.eZ.helpers.icon.getIconPath('quote')
      })));
    }
  }], [{
    key: "key",
    get: function get() {
      return 'ezquote';
    }
  }]);

  return EzBtnQuote;
}(alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.ButtonQuote);


alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.Buttons[EzBtnQuote.key] = alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.EzBtnQuote = EzBtnQuote;
var eZ = window.eZ = window.eZ || {};
eZ.ezAlloyEditor = eZ.ezAlloyEditor || {};
eZ.ezAlloyEditor.ezBtnQuote = EzBtnQuote;

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-removeblock.js":
/*!************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-removeblock.js ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EzBtnBlockRemove; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! alloyeditor */ "alloyeditor");
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(alloyeditor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base_ez_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base/ez-button */ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/base/ez-button.js");
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






var EzBtnBlockRemove = /*#__PURE__*/function (_EzButton) {
  _inherits(EzBtnBlockRemove, _EzButton);

  var _super = _createSuper(EzBtnBlockRemove);

  function EzBtnBlockRemove() {
    _classCallCheck(this, EzBtnBlockRemove);

    return _super.apply(this, arguments);
  }

  _createClass(EzBtnBlockRemove, [{
    key: "removeBlock",
    value:
    /**
     * Executes the eZRemoveBlock to remove block.
     *
     * @method removeBlock
     * @protected
     */
    function removeBlock(data) {
      this.execCommand(data);
    }
    /**
     * Lifecycle. Renders the UI of the button.
     *
     * @method render
     * @return {Object} The content which should be rendered.
     */

  }, {
    key: "render",
    value: function render() {
      var title = Translator.trans(
      /*@Desc("Remove block")*/
      'remove_block_btn.title', {}, 'alloy_editor');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "ae-button ez-btn-ae ez-btn-ae--remove-block",
        onClick: this.removeBlock.bind(this),
        tabIndex: this.props.tabIndex,
        title: title
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        className: "ez-icon ez-btn-ae__icon"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: window.eZ.helpers.icon.getIconPath('trash')
      })));
    }
  }], [{
    key: "key",
    get: function get() {
      return 'ezblockremove';
    }
  }]);

  return EzBtnBlockRemove;
}(_base_ez_button__WEBPACK_IMPORTED_MODULE_3__["default"]);


alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.Buttons[EzBtnBlockRemove.key] = alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.EzBtnBlockRemove = EzBtnBlockRemove;
var eZ = window.eZ = window.eZ || {};
eZ.ezAlloyEditor = eZ.ezAlloyEditor || {};
eZ.ezAlloyEditor.ezBtnBlockRemove = EzBtnBlockRemove;
EzBtnBlockRemove.propTypes = {
  command: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  modifiesSelection: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
EzBtnBlockRemove.defaultProps = {
  command: 'eZRemoveBlock',
  modifiesSelection: true
};

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-strike.js":
/*!*******************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-strike.js ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EzBtnStrike; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! alloyeditor */ "alloyeditor");
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(alloyeditor__WEBPACK_IMPORTED_MODULE_2__);
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





var EzBtnStrike = /*#__PURE__*/function (_AlloyEditor$ButtonSt) {
  _inherits(EzBtnStrike, _AlloyEditor$ButtonSt);

  var _super = _createSuper(EzBtnStrike);

  function EzBtnStrike() {
    _classCallCheck(this, EzBtnStrike);

    return _super.apply(this, arguments);
  }

  _createClass(EzBtnStrike, [{
    key: "render",
    value:
    /**
     * Lifecycle. Renders the UI of the button.
     *
     * @method render
     * @return {Object} The content which should be rendered.
     */
    function render() {
      var cssClass = 'ae-button ez-btn-ae ' + this.getStateClasses();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        "aria-label": alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.Strings.strike,
        "aria-pressed": cssClass.indexOf('pressed') !== -1,
        className: cssClass,
        "data-type": "button-strike",
        onClick: this.execCommand,
        tabIndex: this.props.tabIndex,
        title: alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.Strings.strike
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        className: "ez-icon ez-btn-ae__icon"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: window.eZ.helpers.icon.getIconPath('strikethrough')
      })));
    }
  }], [{
    key: "key",
    get: function get() {
      return 'ezstrike';
    }
  }]);

  return EzBtnStrike;
}(alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.ButtonStrike);


alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.Buttons[EzBtnStrike.key] = alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.EzBtnStrike = EzBtnStrike;
var eZ = window.eZ = window.eZ || {};
eZ.ezAlloyEditor = eZ.ezAlloyEditor || {};
eZ.ezAlloyEditor.ezBtnStrike = EzBtnStrike;

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-styleslist.js":
/*!***********************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-styleslist.js ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EzButtonStylesList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! alloyeditor */ "alloyeditor");
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(alloyeditor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ez_btn_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ez-btn-dropdown */ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-dropdown.js");
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





var EzButtonStylesList = /*#__PURE__*/function (_AlloyEditor$ButtonSt) {
  _inherits(EzButtonStylesList, _AlloyEditor$ButtonSt);

  var _super = _createSuper(EzButtonStylesList);

  function EzButtonStylesList() {
    _classCallCheck(this, EzButtonStylesList);

    return _super.apply(this, arguments);
  }

  _createClass(EzButtonStylesList, [{
    key: "render",
    value:
    /**
     * Lifecycle. Renders the UI of the list.
     *
     * @instance
     * @memberof ButtonStylesList
     * @method render
     * @return {Object} The content which should be rendered.
     */
    function render() {
      var removeStylesItem;

      if (this.props.showRemoveStylesItem) {
        removeStylesItem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(alloyeditor__WEBPACK_IMPORTED_MODULE_1___default.a.ButtonStylesListItemRemove, {
          editor: this.props.editor,
          onDismiss: this.props.toggleDropdown
        });
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ez_btn_dropdown__WEBPACK_IMPORTED_MODULE_2__["default"], this.props, removeStylesItem, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(alloyeditor__WEBPACK_IMPORTED_MODULE_1___default.a.ButtonsStylesListHeader, {
        name: alloyeditor__WEBPACK_IMPORTED_MODULE_1___default.a.Strings.blockStyles,
        styles: this._blockStyles
      }), this._renderStylesItems(this._blockStyles), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(alloyeditor__WEBPACK_IMPORTED_MODULE_1___default.a.ButtonsStylesListHeader, {
        name: alloyeditor__WEBPACK_IMPORTED_MODULE_1___default.a.Strings.inlineStyles,
        styles: this._inlineStyles
      }), this._renderStylesItems(this._inlineStyles), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(alloyeditor__WEBPACK_IMPORTED_MODULE_1___default.a.ButtonsStylesListHeader, {
        name: alloyeditor__WEBPACK_IMPORTED_MODULE_1___default.a.Strings.objectStyles,
        styles: this._objectStyles
      }), this._renderStylesItems(this._objectStyles));
    }
  }]);

  return EzButtonStylesList;
}(alloyeditor__WEBPACK_IMPORTED_MODULE_1___default.a.ButtonStylesList);


alloyeditor__WEBPACK_IMPORTED_MODULE_1___default.a.ButtonStylesList = alloyeditor__WEBPACK_IMPORTED_MODULE_1___default.a.EzButtonStylesList = EzButtonStylesList;
var eZ = window.eZ = window.eZ || {};
eZ.ezAlloyEditor = eZ.ezAlloyEditor || {};
eZ.ezAlloyEditor.EzButtonStylesList = EzButtonStylesList;

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-styleslistitem.js":
/*!***************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-styleslistitem.js ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EzBtnStylesListItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! alloyeditor */ "alloyeditor");
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(alloyeditor__WEBPACK_IMPORTED_MODULE_1__);
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




var EzBtnStylesListItem = /*#__PURE__*/function (_AlloyEditor$ButtonSt) {
  _inherits(EzBtnStylesListItem, _AlloyEditor$ButtonSt);

  var _super = _createSuper(EzBtnStylesListItem);

  function EzBtnStylesListItem() {
    _classCallCheck(this, EzBtnStylesListItem);

    return _super.apply(this, arguments);
  }

  _createClass(EzBtnStylesListItem, [{
    key: "render",
    value:
    /**
     * Lifecycle. Renders the UI of the button.
     *
     * @instance
     * @memberof ButtonStylesListItem
     * @method render
     * @return {Object} The content which should be rendered.
     */
    function render() {
      var _this = this;

      var className = this.props.name === this.props.activeStyle ? 'ae-toolbar-element active' : 'ae-toolbar-element';
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: className,
        dangerouslySetInnerHTML: {
          __html: this._preview
        },
        onClick: function onClick() {
          _this.clearEzAttributes();

          _this._onClick();

          _this.fireCustomUpdateEvent();
        },
        tabIndex: this.props.tabIndex
      });
    }
  }, {
    key: "clearEzAttributes",
    value: function clearEzAttributes() {
      var nativeEditor = this.props.editor.get('nativeEditor');
      var block = nativeEditor.elementPath().block;
      var attrsToRemove = ['ezelement', 'eztype', 'ezname'];
      var targetName = this.props.style.attributes ? this.props.style.attributes['data-ezname'] : '';

      if (block.$.dataset.eztype === 'style' && block.$.dataset.ezname !== targetName) {
        attrsToRemove.forEach(function (attr) {
          return block.$.removeAttribute("data-".concat(attr));
        });
      }
    }
  }, {
    key: "fireCustomUpdateEvent",
    value: function fireCustomUpdateEvent() {
      var nativeEditor = this.props.editor.get('nativeEditor');
      nativeEditor.fire('customUpdate');
    }
  }]);

  return EzBtnStylesListItem;
}(alloyeditor__WEBPACK_IMPORTED_MODULE_1___default.a.ButtonStylesListItem);


alloyeditor__WEBPACK_IMPORTED_MODULE_1___default.a.ButtonStylesListItem = alloyeditor__WEBPACK_IMPORTED_MODULE_1___default.a.EzBtnStylesListItem = EzBtnStylesListItem;
var eZ = window.eZ = window.eZ || {};
eZ.ezAlloyEditor = eZ.ezAlloyEditor || {};
eZ.ezAlloyEditor.ezBtnStylesListItem = EzBtnStylesListItem;

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-subscript.js":
/*!**********************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-subscript.js ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EzBtnSubscript; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! alloyeditor */ "alloyeditor");
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(alloyeditor__WEBPACK_IMPORTED_MODULE_2__);
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





var EzBtnSubscript = /*#__PURE__*/function (_AlloyEditor$ButtonSu) {
  _inherits(EzBtnSubscript, _AlloyEditor$ButtonSu);

  var _super = _createSuper(EzBtnSubscript);

  function EzBtnSubscript() {
    _classCallCheck(this, EzBtnSubscript);

    return _super.apply(this, arguments);
  }

  _createClass(EzBtnSubscript, [{
    key: "render",
    value:
    /**
     * Lifecycle. Renders the UI of the button.
     *
     * @method render
     * @return {Object} The content which should be rendered.
     */
    function render() {
      var cssClass = 'ae-button ez-btn-ae ' + this.getStateClasses();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        "aria-label": alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.Strings.subscript,
        "aria-pressed": cssClass.indexOf('pressed') !== -1,
        className: cssClass,
        "data-type": "button-subscript",
        onClick: this.execCommand,
        tabIndex: this.props.tabIndex,
        title: alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.Strings.subscript
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        className: "ez-icon ez-btn-ae__icon"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: window.eZ.helpers.icon.getIconPath('subscript')
      })));
    }
  }], [{
    key: "key",
    get: function get() {
      return 'ezsubscript';
    }
  }]);

  return EzBtnSubscript;
}(alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.ButtonSubscript);


alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.Buttons[EzBtnSubscript.key] = alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.EzBtnSubscript = EzBtnSubscript;
var eZ = window.eZ = window.eZ || {};
eZ.ezAlloyEditor = eZ.ezAlloyEditor || {};
eZ.ezAlloyEditor.ezBtnSubscript = EzBtnSubscript;

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-superscript.js":
/*!************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-superscript.js ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EzBtnSuperscript; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! alloyeditor */ "alloyeditor");
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(alloyeditor__WEBPACK_IMPORTED_MODULE_2__);
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





var EzBtnSuperscript = /*#__PURE__*/function (_AlloyEditor$ButtonSu) {
  _inherits(EzBtnSuperscript, _AlloyEditor$ButtonSu);

  var _super = _createSuper(EzBtnSuperscript);

  function EzBtnSuperscript() {
    _classCallCheck(this, EzBtnSuperscript);

    return _super.apply(this, arguments);
  }

  _createClass(EzBtnSuperscript, [{
    key: "render",
    value:
    /**
     * Lifecycle. Renders the UI of the button.
     *
     * @method render
     * @return {Object} The content which should be rendered.
     */
    function render() {
      var cssClass = 'ae-button ez-btn-ae ' + this.getStateClasses();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        "aria-label": alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.Strings.superscript,
        "aria-pressed": cssClass.indexOf('pressed') !== -1,
        className: cssClass,
        "data-type": "button-superscript",
        onClick: this.execCommand,
        tabIndex: this.props.tabIndex,
        title: alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.Strings.superscript
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        className: "ez-icon ez-btn-ae__icon"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: window.eZ.helpers.icon.getIconPath('superscript')
      })));
    }
  }], [{
    key: "key",
    get: function get() {
      return 'ezsuperscript';
    }
  }]);

  return EzBtnSuperscript;
}(alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.ButtonSuperscript);


alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.Buttons[EzBtnSuperscript.key] = alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.EzBtnSuperscript = EzBtnSuperscript;
var eZ = window.eZ = window.eZ || {};
eZ.ezAlloyEditor = eZ.ezAlloyEditor || {};
eZ.ezAlloyEditor.ezBtnSuperscript = EzBtnSuperscript;

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-table.js":
/*!******************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-table.js ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EzBtnTable; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! alloyeditor */ "alloyeditor");
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(alloyeditor__WEBPACK_IMPORTED_MODULE_2__);
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





var EzBtnTable = /*#__PURE__*/function (_Component) {
  _inherits(EzBtnTable, _Component);

  var _super = _createSuper(EzBtnTable);

  function EzBtnTable() {
    _classCallCheck(this, EzBtnTable);

    return _super.apply(this, arguments);
  }

  _createClass(EzBtnTable, [{
    key: "render",
    value:
    /**
     * Lifecycle. Renders the UI of the button.
     *
     * @method render
     * @return {Object} The content which should be rendered.
     */
    function render() {
      if (this.props.renderExclusive) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.ButtonTableEdit, this.props);
      }

      var label = Translator.trans(
      /*@Desc("Table")*/
      'table_btn.label', {}, 'alloy_editor');
      var css = 'ae-button ez-btn-ae ez-btn-ae--table';
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: css,
        onClick: this.props.requestExclusive,
        tabIndex: this.props.tabIndex,
        title: label
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        className: "ez-icon ez-btn-ae__icon"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: window.eZ.helpers.icon.getIconPath('table-add')
      })));
    }
  }], [{
    key: "key",
    get: function get() {
      return 'eztable';
    }
  }]);

  return EzBtnTable;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.Buttons[EzBtnTable.key] = alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.EzBtnTable = EzBtnTable;
var eZ = window.eZ = window.eZ || {};
eZ.ezAlloyEditor = eZ.ezAlloyEditor || {};
eZ.ezAlloyEditor.ezBtnTable = EzBtnTable;
EzBtnTable.propTypes = {
  editor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
};

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-tablecell.js":
/*!**********************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-tablecell.js ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EzBtnTableCell; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! alloyeditor */ "alloyeditor");
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(alloyeditor__WEBPACK_IMPORTED_MODULE_2__);
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





var EzBtnTableCell = /*#__PURE__*/function (_AlloyEditor$ButtonTa) {
  _inherits(EzBtnTableCell, _AlloyEditor$ButtonTa);

  var _super = _createSuper(EzBtnTableCell);

  function EzBtnTableCell() {
    _classCallCheck(this, EzBtnTableCell);

    return _super.apply(this, arguments);
  }

  _createClass(EzBtnTableCell, [{
    key: "render",
    value: function render() {
      var buttonCommandsList;
      var buttonCommandsListId;

      if (this.props.expanded) {
        buttonCommandsListId = 'tableCellList';
        buttonCommandsList = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.ButtonCommandsList, {
          commands: this._getCommands(),
          editor: this.props.editor,
          listId: buttonCommandsListId,
          onDismiss: this.props.toggleDropdown
        });
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "ae-container ae-has-dropdown"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        "aria-expanded": this.props.expanded,
        "aria-label": alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.Strings.cell,
        "aria-owns": buttonCommandsListId,
        className: "ae-button ez-btn-ae",
        onClick: this.props.toggleDropdown,
        tabIndex: this.props.tabIndex,
        title: alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.Strings.cell
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        className: "ez-icon ez-btn-ae__icon"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: window.eZ.helpers.icon.getIconPath('table-cell')
      }))), buttonCommandsList);
    }
  }], [{
    key: "key",
    get: function get() {
      return 'eztablecell';
    }
  }]);

  return EzBtnTableCell;
}(alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.ButtonTableCell);


alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.Buttons[EzBtnTableCell.key] = alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.EzBtnTableCell = EzBtnTableCell;
var eZ = window.eZ = window.eZ || {};
eZ.ezAlloyEditor = eZ.ezAlloyEditor || {};
eZ.ezAlloyEditor.ezBtnTableCell = EzBtnTableCell;

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-tablecolumn.js":
/*!************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-tablecolumn.js ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EzBtnTableColumn; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! alloyeditor */ "alloyeditor");
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(alloyeditor__WEBPACK_IMPORTED_MODULE_2__);
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





var EzBtnTableColumn = /*#__PURE__*/function (_AlloyEditor$ButtonTa) {
  _inherits(EzBtnTableColumn, _AlloyEditor$ButtonTa);

  var _super = _createSuper(EzBtnTableColumn);

  function EzBtnTableColumn() {
    _classCallCheck(this, EzBtnTableColumn);

    return _super.apply(this, arguments);
  }

  _createClass(EzBtnTableColumn, [{
    key: "render",
    value: function render() {
      var buttonCommandsList;
      var buttonCommandsListId;

      if (this.props.expanded) {
        buttonCommandsListId = 'tableColumnList';
        buttonCommandsList = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.ButtonCommandsList, {
          commands: this._getCommands(),
          editor: this.props.editor,
          listId: buttonCommandsListId,
          onDismiss: this.props.toggleDropdown
        });
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "ae-container ae-has-dropdown"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        "aria-expanded": this.props.expanded,
        "aria-label": alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.Strings.column,
        "aria-owns": buttonCommandsListId,
        className: "ae-button ez-btn-ae",
        onClick: this.props.toggleDropdown,
        role: "listbox",
        tabIndex: this.props.tabIndex,
        title: alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.Strings.column
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        className: "ez-icon ez-btn-ae__icon"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: window.eZ.helpers.icon.getIconPath('table-column')
      }))), buttonCommandsList);
    }
  }], [{
    key: "key",
    get: function get() {
      return 'eztablecolumn';
    }
  }]);

  return EzBtnTableColumn;
}(alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.ButtonTableColumn);


alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.Buttons[EzBtnTableColumn.key] = alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.EzBtnTableColumn = EzBtnTableColumn;
var eZ = window.eZ = window.eZ || {};
eZ.ezAlloyEditor = eZ.ezAlloyEditor || {};
eZ.ezAlloyEditor.ezBtnTableColumn = EzBtnTableColumn;

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-tableremove.js":
/*!************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-tableremove.js ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EzBtnTableRemove; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! alloyeditor */ "alloyeditor");
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(alloyeditor__WEBPACK_IMPORTED_MODULE_2__);
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





var EzBtnTableRemove = /*#__PURE__*/function (_AlloyEditor$ButtonTa) {
  _inherits(EzBtnTableRemove, _AlloyEditor$ButtonTa);

  var _super = _createSuper(EzBtnTableRemove);

  function EzBtnTableRemove() {
    _classCallCheck(this, EzBtnTableRemove);

    return _super.apply(this, arguments);
  }

  _createClass(EzBtnTableRemove, [{
    key: "render",
    value: function render() {
      var _this = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        "aria-label": alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.Strings.deleteTable,
        className: "ae-button ez-btn-ae",
        "data-type": "button-table-remove",
        onClick: function onClick() {
          _this._removeTable();

          _this.fireCustomUpdateEvent();
        },
        tabIndex: this.props.tabIndex,
        title: alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.Strings.deleteTable
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        className: "ez-icon ez-btn-ae__icon"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: window.eZ.helpers.icon.getIconPath('trash')
      })));
    }
  }, {
    key: "fireCustomUpdateEvent",
    value: function fireCustomUpdateEvent() {
      var nativeEditor = this.props.editor.get('nativeEditor');
      nativeEditor.fire('customUpdate');
    }
  }], [{
    key: "key",
    get: function get() {
      return 'eztableremove';
    }
  }]);

  return EzBtnTableRemove;
}(alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.ButtonTableRemove);


alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.Buttons[EzBtnTableRemove.key] = alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.EzBtnTableRemove = EzBtnTableRemove;
var eZ = window.eZ = window.eZ || {};
eZ.ezAlloyEditor = eZ.ezAlloyEditor || {};
eZ.ezAlloyEditor.ezBtnTableRemove = EzBtnTableRemove;

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-tablerow.js":
/*!*********************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-tablerow.js ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EzBtnTableRow; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! alloyeditor */ "alloyeditor");
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(alloyeditor__WEBPACK_IMPORTED_MODULE_2__);
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





var EzBtnTableRow = /*#__PURE__*/function (_AlloyEditor$ButtonTa) {
  _inherits(EzBtnTableRow, _AlloyEditor$ButtonTa);

  var _super = _createSuper(EzBtnTableRow);

  function EzBtnTableRow() {
    _classCallCheck(this, EzBtnTableRow);

    return _super.apply(this, arguments);
  }

  _createClass(EzBtnTableRow, [{
    key: "render",
    value: function render() {
      var buttonCommandsList;
      var buttonCommandsListId;

      if (this.props.expanded) {
        buttonCommandsListId = 'tableRowList';
        buttonCommandsList = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.ButtonCommandsList, {
          commands: this._getCommands(),
          editor: this.props.editor,
          listId: buttonCommandsListId,
          onDismiss: this.props.toggleDropdown
        });
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "ae-container ae-has-dropdown"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        "aria-expanded": this.props.expanded,
        "aria-label": alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.Strings.row,
        "aria-owns": buttonCommandsListId,
        className: "ae-button ez-btn-ae",
        onClick: this.props.toggleDropdown,
        role: "combobox",
        tabIndex: this.props.tabIndex,
        title: alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.Strings.row
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        className: "ez-icon ez-btn-ae__icon"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: window.eZ.helpers.icon.getIconPath('table-row')
      }))), buttonCommandsList);
    }
  }], [{
    key: "key",
    get: function get() {
      return 'eztablerow';
    }
  }]);

  return EzBtnTableRow;
}(alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.ButtonTableRow);


alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.Buttons[EzBtnTableRow.key] = alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.EzBtnTableRow = EzBtnTableRow;
var eZ = window.eZ = window.eZ || {};
eZ.ezAlloyEditor = eZ.ezAlloyEditor || {};
eZ.ezAlloyEditor.ezBtnTableRow = EzBtnTableRow;

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-underline.js":
/*!**********************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-underline.js ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EzBtnUnderline; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! alloyeditor */ "alloyeditor");
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(alloyeditor__WEBPACK_IMPORTED_MODULE_2__);
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





var EzBtnUnderline = /*#__PURE__*/function (_AlloyEditor$ButtonUn) {
  _inherits(EzBtnUnderline, _AlloyEditor$ButtonUn);

  var _super = _createSuper(EzBtnUnderline);

  function EzBtnUnderline() {
    _classCallCheck(this, EzBtnUnderline);

    return _super.apply(this, arguments);
  }

  _createClass(EzBtnUnderline, [{
    key: "render",
    value:
    /**
     * Lifecycle. Renders the UI of the button.
     *
     * @method render
     * @return {Object} The content which should be rendered.
     */
    function render() {
      var cssClass = 'ae-button ez-btn-ae ' + this.getStateClasses();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        "aria-label": alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.Strings.underline,
        "aria-pressed": cssClass.indexOf('pressed') !== -1,
        className: cssClass,
        "data-type": "button-underline",
        onClick: this.execCommand,
        tabIndex: this.props.tabIndex,
        title: alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.Strings.underline
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        className: "ez-icon ez-btn-ae__icon"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: window.eZ.helpers.icon.getIconPath('underscore')
      })));
    }
  }], [{
    key: "key",
    get: function get() {
      return 'ezunderline';
    }
  }]);

  return EzBtnUnderline;
}(alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.ButtonUnderline);


alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.Buttons[EzBtnUnderline.key] = alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.EzBtnUnderline = EzBtnUnderline;
var eZ = window.eZ = window.eZ || {};
eZ.ezAlloyEditor = eZ.ezAlloyEditor || {};
eZ.ezAlloyEditor.ezBtnUnderline = EzBtnUnderline;

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-unorderedlist.js":
/*!**************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-unorderedlist.js ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EzBtnUnorderedList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! alloyeditor */ "alloyeditor");
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(alloyeditor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base_ez_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base/ez-button */ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/base/ez-button.js");
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






var EzBtnUnorderedList = /*#__PURE__*/function (_EzButton) {
  _inherits(EzBtnUnorderedList, _EzButton);

  var _super = _createSuper(EzBtnUnorderedList);

  function EzBtnUnorderedList() {
    _classCallCheck(this, EzBtnUnorderedList);

    return _super.apply(this, arguments);
  }

  _createClass(EzBtnUnorderedList, [{
    key: "addList",
    value:
    /**
     * Executes the eZAppendContent command to add an unordered list containing
     * an empty list item.
     *
     * @method addList
     * @protected
     */
    function addList() {
      this.execCommand({
        tagName: 'ul',
        content: '<li></li>',
        focusElement: 'li'
      });
    }
    /**
     * Lifecycle. Renders the UI of the button.
     *
     * @method render
     * @return {Object} The content which should be rendered.
     */

  }, {
    key: "render",
    value: function render() {
      var label = Translator.trans(
      /*@Desc("List")*/
      'unordered_list_btn.label', {}, 'alloy_editor');
      var css = 'ae-button ez-btn-ae ez-btn-ae--unordered-list ' + this.getStateClasses();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: css,
        onClick: this.addList.bind(this),
        tabIndex: this.props.tabIndex,
        title: label
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        className: "ez-icon ez-btn-ae__icon"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: window.eZ.helpers.icon.getIconPath('list')
      })));
    }
  }], [{
    key: "key",
    get: function get() {
      return 'ezunorderedlist';
    }
  }]);

  return EzBtnUnorderedList;
}(_base_ez_button__WEBPACK_IMPORTED_MODULE_3__["default"]);


alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.Buttons[EzBtnUnorderedList.key] = alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.EzBtnUnorderedList = EzBtnUnorderedList;
var eZ = window.eZ = window.eZ || {};
eZ.ezAlloyEditor = eZ.ezAlloyEditor || {};
eZ.ezAlloyEditor.ezBtnUnorderedList = EzBtnUnorderedList;
EzBtnUnorderedList.propTypes = {
  command: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  modifiesSelection: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
EzBtnUnorderedList.defaultProps = {
  command: 'eZAddContent',
  modifiesSelection: true
};

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/core/base-richtext.js":
/*!****************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/core/base-richtext.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(function (global, doc, eZ, CKEDITOR, AlloyEditor) {
  var TABLE_TAG_NAME = 'table';
  var SVG_TAG_NAME = 'svg';
  var HTML_NODE = 1;
  var TEXT_NODE = 3;
  var notInitializeElements = ['strong', 'em', 'u', 'sup', 'sub', 's'];

  var BaseRichText = /*#__PURE__*/function () {
    "use strict";

    function BaseRichText() {
      _classCallCheck(this, BaseRichText);

      this.ezNamespace = 'http://ez.no/namespaces/ezpublish5/xhtml5/edit';
      this.xhtmlNamespace = 'http://www.w3.org/1999/xhtml';
      this.customTags = Object.keys(eZ.richText.customTags).filter(function (key) {
        return !eZ.richText.customTags[key].isInline;
      });
      this.inlineCustomTags = Object.keys(eZ.richText.customTags).filter(function (key) {
        return eZ.richText.customTags[key].isInline;
      });
      this.attributes = global.eZ.richText.alloyEditor.attributes;
      this.classes = global.eZ.richText.alloyEditor.classes;
      this.customTagsToolbars = this.customTags.map(function (customTag) {
        var alloyEditorConfig = eZ.richText.customTags[customTag];
        return new eZ.ezAlloyEditor.ezCustomTagConfig({
          name: customTag,
          alloyEditor: alloyEditorConfig
        });
      });
      this.inlineCustomTagsToolbars = this.inlineCustomTags.map(function (customTag) {
        var alloyEditorConfig = eZ.richText.customTags[customTag];
        return new eZ.ezAlloyEditor.ezInlineCustomTagConfig({
          name: customTag,
          alloyEditor: alloyEditorConfig
        });
      });
      this.customStylesConfigurations = Object.entries(eZ.richText.customStyles).map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            customStyleName = _ref2[0],
            customStyleConfig = _ref2[1];

        return {
          name: customStyleConfig.label,
          style: {
            element: customStyleConfig.inline ? 'span' : 'div',
            attributes: {
              'data-ezelement': customStyleConfig.inline ? 'eztemplateinline' : 'eztemplate',
              'data-eztype': 'style',
              'data-ezname': customStyleName
            }
          }
        };
      });
      this.alloyEditorExtraPlugins = eZ.richText.alloyEditor.extraPlugins;
      this.customStyleSelections = global.eZ.ezAlloyEditor.customSelections ? Object.values(global.eZ.ezAlloyEditor.customSelections) : [];
      this.xhtmlify = this.xhtmlify.bind(this);
    }

    _createClass(BaseRichText, [{
      key: "getHTMLDocumentFragment",
      value: function getHTMLDocumentFragment(data) {
        var fragment = doc.createDocumentFragment();
        var root = fragment.ownerDocument.createElement('div');
        var parsedHTML = new DOMParser().parseFromString(data, 'text/xml');

        var importChildNodes = function importChildNodes(parent, element, skipElement) {
          var i;
          var newElement;

          if (skipElement) {
            newElement = parent;
          } else {
            if (element.nodeType === Node.ELEMENT_NODE) {
              newElement = parent.ownerDocument.createElement(element.localName);

              for (i = 0; i !== element.attributes.length; i++) {
                importChildNodes(newElement, element.attributes[i], false);
              }

              if (element.localName === 'a' && parent.dataset.ezelement === 'ezembed') {
                element.setAttribute('data-cke-survive', '1');
              }

              parent.appendChild(newElement);
            } else if (element.nodeType === Node.TEXT_NODE) {
              parent.appendChild(parent.ownerDocument.createTextNode(element.nodeValue));
              return;
            } else if (element.nodeType === Node.ATTRIBUTE_NODE) {
              parent.setAttribute(element.localName, element.value);
              return;
            } else {
              return;
            }
          }

          for (i = 0; i !== element.childNodes.length; i++) {
            importChildNodes(newElement, element.childNodes[i], false);
          }
        };

        if (!parsedHTML || !parsedHTML.documentElement || parsedHTML.querySelector('parsererror')) {
          console.warn('Unable to parse the content of the RichText field');
          return fragment;
        }

        fragment.appendChild(root);
        importChildNodes(root, parsedHTML.documentElement, true);
        return fragment;
      }
    }, {
      key: "emptyEmbed",
      value: function emptyEmbed(embedNode) {
        var element = embedNode.firstChild;
        var next;

        var removeClass = function removeClass() {};

        while (element) {
          next = element.nextSibling;

          if (!element.getAttribute || !element.getAttribute('data-ezelement')) {
            embedNode.removeChild(element);
          }

          element = next;
        }

        embedNode.classList.forEach(function (cl) {
          var prevRemoveClass = removeClass;

          if (cl.indexOf('is-embed-') === 0) {
            removeClass = function removeClass() {
              embedNode.classList.remove(cl);
              prevRemoveClass();
            };
          }
        });
        removeClass();
      }
    }, {
      key: "xhtmlify",
      value: function xhtmlify(data) {
        var xmlDocument = doc.implementation.createDocument(this.xhtmlNamespace, 'html', null);
        var htmlDoc = doc.implementation.createHTMLDocument('');
        var section = htmlDoc.createElement('section');
        var body = htmlDoc.createElement('body');
        section.innerHTML = data;
        body.appendChild(section);
        body = xmlDocument.importNode(body, true);
        xmlDocument.documentElement.appendChild(body);
        return body.innerHTML;
      }
    }, {
      key: "clearCustomTag",
      value: function clearCustomTag(customTag) {
        var attributesNodes = customTag.querySelectorAll('[data-ezelement="ezattributes"]');
        var headers = customTag.querySelectorAll('.ez-custom-tag__header');
        attributesNodes.forEach(function (attributesNode) {
          return attributesNode.remove();
        });
        headers.forEach(function (header) {
          return header.remove();
        });
      }
    }, {
      key: "clearAnchor",
      value: function clearAnchor(element) {
        var icon = element.querySelector('.ez-icon--anchor');
        var elementPreviousSibling = element.previousSibling;
        var isTableWithAnchor = element.tagName.toLowerCase() === TABLE_TAG_NAME && (elementPreviousSibling === null || elementPreviousSibling === void 0 ? void 0 : elementPreviousSibling.tagName.toLowerCase()) === SVG_TAG_NAME;

        if (isTableWithAnchor) {
          elementPreviousSibling.remove();
        } else if (icon) {
          icon.remove();
        } else {
          element.classList.remove('ez-has-anchor');
        }
      }
    }, {
      key: "appendAnchorIcon",
      value: function appendAnchorIcon(element) {
        var container = doc.createElement('div');
        var icon = "\n                <svg class=\"ez-icon ez-icon--small ez-icon--secondary ez-icon--anchor\">\n                    <use xlink:href=".concat(window.eZ.helpers.icon.getIconPath('link-anchor'), "></use>\n                </svg>");
        container.insertAdjacentHTML('afterbegin', icon);
        var svg = new CKEDITOR.dom.element(container.querySelector('svg'));
        var ckeditorElement = new CKEDITOR.dom.element(element);
        ckeditorElement.append(svg, true);
      }
    }, {
      key: "clearInlineCustomTag",
      value: function clearInlineCustomTag(inlineCustomTag) {
        var icons = inlineCustomTag.querySelectorAll('.ez-custom-tag__icon-wrapper');
        icons.forEach(function (icon) {
          return icon.remove();
        });
      }
    }, {
      key: "init",
      value: function init(container) {
        var _this = this;

        var toolbarProps = {
          attributes: this.attributes,
          classes: this.classes
        };
        var customSelections = this.customStyleSelections.map(function (Selection) {
          return new Selection(toolbarProps);
        });
        var alloyEditor = AlloyEditor.editable(container.getAttribute('id'), {
          toolbars: {
            ezadd: {
              buttons: eZ.richText.alloyEditor.toolbars.ezadd.buttons,
              tabIndex: 2
            },
            styles: {
              selections: [].concat(_toConsumableArray(this.customTagsToolbars), [new eZ.ezAlloyEditor.ezLinkConfig(toolbarProps), new eZ.ezAlloyEditor.ezTextConfig(_objectSpread({
                customStyles: this.customStylesConfigurations,
                inlineCustomTags: this.inlineCustomTags
              }, toolbarProps))], _toConsumableArray(this.inlineCustomTagsToolbars), [new eZ.ezAlloyEditor.ezParagraphConfig(_objectSpread({
                customStyles: this.customStylesConfigurations
              }, toolbarProps)), new eZ.ezAlloyEditor.ezFormattedConfig(_objectSpread({
                customStyles: this.customStylesConfigurations
              }, toolbarProps)), new eZ.ezAlloyEditor.ezCustomStyleConfig(_objectSpread({
                customStyles: this.customStylesConfigurations
              }, toolbarProps)), new eZ.ezAlloyEditor.ezHeadingConfig(_objectSpread({
                customStyles: this.customStylesConfigurations
              }, toolbarProps)), new eZ.ezAlloyEditor.ezListOrderedConfig(_objectSpread({
                customStyles: this.customStylesConfigurations
              }, toolbarProps)), new eZ.ezAlloyEditor.ezListUnorderedConfig(_objectSpread({
                customStyles: this.customStylesConfigurations
              }, toolbarProps)), new eZ.ezAlloyEditor.ezListItemConfig(_objectSpread({
                customStyles: this.customStylesConfigurations
              }, toolbarProps)), new eZ.ezAlloyEditor.ezEmbedInlineConfig(toolbarProps), new eZ.ezAlloyEditor.ezTableConfig(toolbarProps), new eZ.ezAlloyEditor.ezTableRowConfig(toolbarProps), new eZ.ezAlloyEditor.ezTableCellConfig(toolbarProps), new eZ.ezAlloyEditor.ezTableHeaderConfig(toolbarProps), new eZ.ezAlloyEditor.ezEmbedImageLinkConfig(toolbarProps), new eZ.ezAlloyEditor.ezEmbedImageConfig(toolbarProps), new eZ.ezAlloyEditor.ezEmbedConfig(toolbarProps)], _toConsumableArray(customSelections)),
              tabIndex: 1
            }
          },
          extraPlugins: AlloyEditor.Core.ATTRS.extraPlugins.value + ',' + ['ezaddcontent', 'ezmoveelement', 'ezremoveblock', 'ezembed', 'ezembedinline', 'ezfocusblock', 'ezcustomtag', 'ezinlinecustomtag', 'ezelementspath'].concat(_toConsumableArray(this.alloyEditorExtraPlugins)).join(',')
        });
        var wrapper = this.getHTMLDocumentFragment(container.closest('.ez-data-source').querySelector('textarea').value);
        var section = wrapper.childNodes[0];
        var nativeEditor = alloyEditor.get('nativeEditor');

        var saveRichText = function saveRichText() {
          var data = alloyEditor.get('nativeEditor').getData();
          var documentFragment = doc.createDocumentFragment();
          var root = doc.createElement('div');
          root.innerHTML = data;
          documentFragment.appendChild(root);
          documentFragment.querySelectorAll('[data-ezelement="ezembed"]').forEach(_this.emptyEmbed);
          documentFragment.querySelectorAll('[data-ezelement="ezembedinline"]').forEach(_this.emptyEmbed);
          documentFragment.querySelectorAll('[data-ezelement="eztemplate"]:not([data-eztype="style"])').forEach(_this.clearCustomTag);
          documentFragment.querySelectorAll('.ez-has-anchor').forEach(_this.clearAnchor);
          documentFragment.querySelectorAll('[data-ezelement="eztemplateinline"]:not([data-eztype="style"])').forEach(_this.clearInlineCustomTag);

          _this.iterateThroughChildNodes(documentFragment, _this.removeNodeInitializedState);

          container.closest('.ez-data-source').querySelector('textarea').value = _this.xhtmlify(root.innerHTML).replace(_this.xhtmlNamespace, _this.ezNamespace);

          _this.countWordsCharacters(container, documentFragment);
        };

        if (!section.hasChildNodes()) {
          section.appendChild(doc.createElement('p'));
        }

        nativeEditor.once('dataReady', function () {
          return container.querySelectorAll('.ez-has-anchor').forEach(_this.appendAnchorIcon);
        });
        this.iterateThroughChildNodes(section, this.setNodeInitializedState);
        this.countWordsCharacters(container, section);
        nativeEditor.setData(section.innerHTML);
        nativeEditor.on('blur', saveRichText);
        nativeEditor.on('change', saveRichText);
        nativeEditor.on('customUpdate', saveRichText);
        nativeEditor.on('editorInteraction', saveRichText);
        nativeEditor.on('afterPaste', function () {
          _this.setLinksProtocol(container);
        });
        return alloyEditor;
      }
    }, {
      key: "setNodeInitializedState",
      value: function setNodeInitializedState(node) {
        if (node.nodeType === HTML_NODE && !notInitializeElements.includes(node.nodeName.toLowerCase())) {
          node.setAttribute('data-ez-node-initialized', true);
        }
      }
    }, {
      key: "removeNodeInitializedState",
      value: function removeNodeInitializedState(node) {
        if (node.nodeType === HTML_NODE) {
          node.removeAttribute('data-ez-node-initialized');
        }
      }
    }, {
      key: "countWordsCharacters",
      value: function countWordsCharacters(container, editorHtml) {
        var counterWrapper = container.parentElement.querySelector('.ez-character-counter');

        if (counterWrapper) {
          var wordWrapper = counterWrapper.querySelector('.ez-character-counter__word-count');
          var charactersWrapper = counterWrapper.querySelector('.ez-character-counter__character-count');
          var words = this.getTextNodeValues(editorHtml);
          wordWrapper.innerText = words.length;
          charactersWrapper.innerText = words.join(' ').length;
        }
      }
    }, {
      key: "getTextNodeValues",
      value: function getTextNodeValues(node) {
        var _this2 = this;

        var values = [];

        var pushValue = function pushValue(node) {
          if (node.nodeType === TEXT_NODE) {
            var nodeValue = _this2.sanitize(node.nodeValue);

            values = values.concat(_this2.splitIntoWords(nodeValue));
          }
        };

        this.iterateThroughChildNodes(node, pushValue);
        return values;
      }
    }, {
      key: "iterateThroughChildNodes",
      value: function iterateThroughChildNodes(node, callback) {
        if (typeof node.getAttribute === 'function' && node.getAttribute('data-ezelement') === 'ezconfig') {
          return;
        }

        callback(node);
        node = node.firstChild;

        while (node) {
          this.iterateThroughChildNodes(node, callback);
          node = node.nextSibling;
        }
      }
    }, {
      key: "sanitize",
      value: function sanitize(text) {
        return text.replace(/[\u200B-\u200D\uFEFF]/g, '');
      }
    }, {
      key: "splitIntoWords",
      value: function splitIntoWords(text) {
        return text.split(' ').filter(function (word) {
          return word.trim();
        });
      }
    }, {
      key: "setLinksProtocol",
      value: function setLinksProtocol(container) {
        var links = container.querySelectorAll('a');
        var anchorPrefix = '#';
        var protocolPrefix = 'http://';
        links.forEach(function (link) {
          var href = link.getAttribute('href');
          var schemaPattern = /^[a-z0-9]+:\/?\/?/i;
          var protocolHref = protocolPrefix.concat(href);

          if (!href) {
            return;
          }

          if (href.indexOf(anchorPrefix) === 0) {
            return;
          }

          if (schemaPattern.test(href)) {
            return;
          }

          link.setAttribute('href', protocolHref);
          link.setAttribute('data-cke-saved-href', protocolHref);
        });
      }
    }]);

    return BaseRichText;
  }();

  eZ.BaseRichText = BaseRichText;
})(window, window.document, window.eZ, window.CKEDITOR, window.AlloyEditor);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/core/ez-attributes.js":
/*!****************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/core/ez-attributes.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(function (global, doc, eZ, AlloyEditor) {
  var _eZ$richText$alloyEdi = eZ.richText.alloyEditor,
      attributes = _eZ$richText$alloyEdi.attributes,
      classes = _eZ$richText$alloyEdi.classes;
  var toolbarNames = new Set([].concat(_toConsumableArray(Object.keys(attributes)), _toConsumableArray(Object.keys(classes))));
  toolbarNames.forEach(function (toolbarName) {
    var componentClassName = "ezBtn".concat(toolbarName.charAt(0).toUpperCase() + toolbarName.slice(1));
    var editComponentClassName = "".concat(componentClassName, "Edit");
    var updateComponentClassName = "".concat(componentClassName, "Update");
    var toolbarClasses = classes[toolbarName] || {};
    var toolbarAttributes = attributes[toolbarName];

    var ButtonAttributesEdit = /*#__PURE__*/function (_eZ$ezAlloyEditor$ezB) {
      "use strict";

      _inherits(ButtonAttributesEdit, _eZ$ezAlloyEditor$ezB);

      var _super = _createSuper(ButtonAttributesEdit);

      function ButtonAttributesEdit(props) {
        var _this;

        _classCallCheck(this, ButtonAttributesEdit);

        _this = _super.call(this, props);
        _this.toolbarName = toolbarName;
        _this.classes = toolbarClasses;
        _this.attributes = toolbarAttributes || {};
        return _this;
      }

      _createClass(ButtonAttributesEdit, null, [{
        key: "key",
        get: function get() {
          return "".concat(toolbarName, "edit");
        }
      }]);

      return ButtonAttributesEdit;
    }(eZ.ezAlloyEditor.ezBtnAttributesEdit);

    var ButtonAttributesUpdate = /*#__PURE__*/function (_eZ$ezAlloyEditor$ezB2) {
      "use strict";

      _inherits(ButtonAttributesUpdate, _eZ$ezAlloyEditor$ezB2);

      var _super2 = _createSuper(ButtonAttributesUpdate);

      function ButtonAttributesUpdate(props) {
        var _this2;

        _classCallCheck(this, ButtonAttributesUpdate);

        _this2 = _super2.call(this, props);
        _this2.toolbarName = toolbarName;
        _this2.classes = toolbarClasses;
        _this2.attributes = toolbarAttributes || {};
        return _this2;
      }

      _createClass(ButtonAttributesUpdate, null, [{
        key: "key",
        get: function get() {
          return "".concat(toolbarName, "update");
        }
      }]);

      return ButtonAttributesUpdate;
    }(eZ.ezAlloyEditor.ezBtnAttributesUpdate);

    AlloyEditor.Buttons[ButtonAttributesEdit.key] = AlloyEditor[editComponentClassName] = ButtonAttributesEdit;
    AlloyEditor.Buttons[ButtonAttributesUpdate.key] = AlloyEditor[updateComponentClassName] = ButtonAttributesUpdate;
  });
})(window, window.document, window.eZ, window.AlloyEditor);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/core/ez-custom-tags.js":
/*!*****************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/core/ez-custom-tags.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

(function (global, doc, eZ, AlloyEditor) {
  Object.entries(eZ.richText.customTags).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        customTag = _ref2[0],
        tagConfig = _ref2[1];

    var isInline = tagConfig.isInline;
    var componentClassName = "ezBtn".concat(customTag.charAt(0).toUpperCase() + customTag.slice(1));
    var editComponentClassName = "".concat(componentClassName, "Edit");
    var updateComponentClassName = "".concat(componentClassName, "Update");
    var buttonCustomTagBaseClass = isInline ? eZ.ezAlloyEditor.ezBtnInlineCustomTag : eZ.ezAlloyEditor.ezBtnCustomTag;
    var buttonCustomTagEditBaseClass = isInline ? eZ.ezAlloyEditor.ezBtnInlineCustomTagEdit : eZ.ezAlloyEditor.ezBtnCustomTagEdit;
    var buttonCustomTagUpdateBaseClass = isInline ? eZ.ezAlloyEditor.ezBtnInlineCustomTagUpdate : eZ.ezAlloyEditor.ezBtnCustomTagUpdate;

    var ButtonCustomTag = /*#__PURE__*/function (_buttonCustomTagBaseC) {
      "use strict";

      _inherits(ButtonCustomTag, _buttonCustomTagBaseC);

      var _super = _createSuper(ButtonCustomTag);

      function ButtonCustomTag(props) {
        var _this;

        _classCallCheck(this, ButtonCustomTag);

        _this = _super.call(this, props);
        var values = {};

        if (tagConfig.attributes) {
          Object.entries(tagConfig.attributes).forEach(function (_ref3) {
            var _ref4 = _slicedToArray(_ref3, 2),
                attr = _ref4[0],
                value = _ref4[1];

            values[attr] = {
              value: value.defaultValue
            };
          });
        }

        _this.label = tagConfig.label;
        _this.icon = tagConfig.icon || window.eZ.helpers.icon.getIconPath('tag');
        _this.customTagName = customTag;
        _this.values = values;
        return _this;
      }

      _createClass(ButtonCustomTag, null, [{
        key: "key",
        get: function get() {
          return customTag;
        }
      }]);

      return ButtonCustomTag;
    }(buttonCustomTagBaseClass);

    var ButtonCustomTagEdit = /*#__PURE__*/function (_buttonCustomTagEditB) {
      "use strict";

      _inherits(ButtonCustomTagEdit, _buttonCustomTagEditB);

      var _super2 = _createSuper(ButtonCustomTagEdit);

      function ButtonCustomTagEdit(props) {
        var _this2;

        _classCallCheck(this, ButtonCustomTagEdit);

        _this2 = _super2.call(this, props);
        _this2.customTagName = customTag;
        _this2.attributes = tagConfig.attributes || {};
        return _this2;
      }

      _createClass(ButtonCustomTagEdit, null, [{
        key: "key",
        get: function get() {
          return "".concat(customTag, "edit");
        }
      }]);

      return ButtonCustomTagEdit;
    }(buttonCustomTagEditBaseClass);

    var ButtonCustomTagUpdate = /*#__PURE__*/function (_buttonCustomTagUpdat) {
      "use strict";

      _inherits(ButtonCustomTagUpdate, _buttonCustomTagUpdat);

      var _super3 = _createSuper(ButtonCustomTagUpdate);

      function ButtonCustomTagUpdate(props) {
        var _this3;

        _classCallCheck(this, ButtonCustomTagUpdate);

        _this3 = _super3.call(this, props);
        _this3.customTagName = customTag;
        _this3.attributes = tagConfig.attributes || {};
        _this3.name = tagConfig.label;
        return _this3;
      }

      _createClass(ButtonCustomTagUpdate, null, [{
        key: "key",
        get: function get() {
          return "".concat(customTag, "update");
        }
      }]);

      return ButtonCustomTagUpdate;
    }(buttonCustomTagUpdateBaseClass);

    AlloyEditor.Buttons[ButtonCustomTag.key] = AlloyEditor[componentClassName] = ButtonCustomTag;
    AlloyEditor.Buttons[ButtonCustomTagEdit.key] = AlloyEditor[editComponentClassName] = ButtonCustomTagEdit;
    AlloyEditor.Buttons[ButtonCustomTagUpdate.key] = AlloyEditor[updateComponentClassName] = ButtonCustomTagUpdate;
  });
})(window, window.document, window.eZ, window.AlloyEditor);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/core/table.js":
/*!********************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/core/table.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (global, doc, CKEDITOR) {
  if (!CKEDITOR.Table) {
    return;
  }

  var originalCreate = CKEDITOR.Table.prototype.create;

  CKEDITOR.Table.prototype.create = function (config) {
    if (this._editor.widgets && this._editor.widgets.selected.length) {
      this._editor.execCommand('eZAddContent', {
        tagName: 'p',
        content: '<br>'
      });

      this._editor.selectionChange(true);
    }

    return originalCreate.call(this, config);
  };
})(window, window.document, window.CKEDITOR);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/plugins/base/ez-custom-tag-base.js":
/*!*****************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/plugins/base/ez-custom-tag-base.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var DATA_ALIGNMENT_ATTR = 'ezalign';
var ENTER_KEY_CODE = 13;
var customTagBaseDefinition = {
  defaults: {
    name: 'customtag',
    content: ''
  },
  draggable: false,
  template: '<div class="ez-custom-tag ez-custom-tag--attributes-visible" data-ezelement="eztemplate" data-ezname="{name}"><div data-ezelement="ezcontent">{content}</div></div>',
  requiredContent: 'div',
  editables: {
    content: {
      selector: '[data-ezelement="ezcontent"]'
    }
  },
  setNameFireEditorInteractionTimeout: null,
  setAlignmentFireEditorInteractionTimeout: null,
  unsetAlignmentFireEditorInteractionTimeout: null,
  setConfigFireEditorInteractionTimeout: null,
  clearConfigFireEditorInteractionTimeout: null,
  upcast: function upcast(element) {
    return element.name === 'div' && element.attributes['data-ezelement'] === 'eztemplate' && !element.attributes['data-eztype'];
  },
  insertWrapper: function insertWrapper(wrapper) {
    this.editor.eZ.appendElement(wrapper);
  },

  /**
   * Insert an `ezembed` widget in the editor. It overrides the
   * default implementation to make sure that in the case where an
   * embed widget is focused, a new one is added after it.
   *
   * @method insert
   */
  insert: function insert() {
    var element = CKEDITOR.dom.element.createFromHtml(this.template.output(this.defaults));
    var wrapper = this.editor.widgets.wrapElement(element, this.name);
    this.editor.widgets.initOn(element, this.name);
    this.insertWrapper(wrapper);
    var instance = this.editor.widgets.getByElement(wrapper);
    instance.ready = true;
    instance.fire('ready');
    instance.focus();
  },

  /**
   * It's not possible to *edit* an embed widget in AlloyEditor,
   * so `edit` directly calls `insert` instead. This is needed
   * because by default, the CKEditor engine calls this method
   * when an embed widget has the focus and the `ezcustomtag` command
   * is executed. In AlloyEditor, we want to insert a new widget,
   * not to `edit` the focused widget as the editing process is
   * provided by the style toolbar.
   *
   * @method edit
   */
  edit: function edit() {
    this.insert();
  },
  init: function init() {
    this.on('focus', this.fireEditorInteraction);
    this.syncAlignment(true);
    this.renderAttributes();
    this.renderHeader();
    this.getEzContentElement();
    this.getEzConfigElement();
    this.cancelEditEvents();
    this.toggleState({
      currentTarget: {
        dataset: {
          target: 'attributes'
        }
      }
    });
    this.initEnterHandler();
  },
  initEnterHandler: function initEnterHandler() {
    var enterNewLine = this.enterNewLine.bind(this);
    this.editor.on('selectionChange', function (event) {
      var isCustomTag = event.data.path.lastElement.$.classList.contains('cke_widget_wrapper_ez-custom-tag');
      var methodName = isCustomTag ? 'addEventListener' : 'removeEventListener';
      document.body[methodName]('keyup', enterNewLine, false);
    });
  },
  enterNewLine: function enterNewLine(event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      this.editor.execCommand('eZAddContent', {
        tagName: 'p',
        content: '<br>'
      });
    }
  },
  getIdentifier: function getIdentifier() {
    return 'ezcustomtag';
  },

  /**
   * Clear the node.
   *
   * @method clearNode
   * @param {Element} node
   */
  clearNode: function clearNode(node) {
    var element = node.getFirst();
    var next;

    while (element) {
      next = element.getNext();
      element.remove();
      element = next;
    }
  },

  /**
   * Renders the custom tag header.
   *
   * @method renderHeader
   */
  renderHeader: function renderHeader() {
    var customTagConfig = global.eZ.richText.customTags[this.getName()];

    if (!customTagConfig) {
      return;
    }

    var header = this.getHeader();
    var template = "\n                <div class=\"ez-custom-tag__header-label\">\n                    ".concat(customTagConfig.label, "\n                </div>\n                <div class=\"ez-custom-tag__header-btns\">\n                    <button class=\"btn ez-custom-tag__header-btn ez-custom-tag__header-btn--attributes\" data-target=\"attributes\">\n                        <svg class=\"ez-icon ez-icon--small\">\n                            <use xlink:href=").concat(window.eZ.helpers.icon.getIconPath('list'), "></use>\n                        </svg>\n                    </button>\n                    <button class=\"btn ez-custom-tag__header-btn ez-custom-tag__header-btn--content\" data-target=\"content\">\n                        <svg class=\"ez-icon ez-icon--small\">\n                            <use xlink:href=").concat(window.eZ.helpers.icon.getIconPath('edit'), "></use>\n                        </svg>\n                    </button>\n                </div>\n        ");
    this.clearNode(header);
    header.appendHtml(template);
    this.attachButtonsListeners();
  },

  /**
   * Attaches event listeners to toggle state buttons.
   *
   * @method attachButtonsListeners
   */
  attachButtonsListeners: function attachButtonsListeners() {
    var _this = this;

    var header = this.getHeader();
    var attributesBtn = header.findOne('.ez-custom-tag__header-btn--attributes');
    var contentBtn = header.findOne('.ez-custom-tag__header-btn--content');
    [attributesBtn, contentBtn].forEach(function (btn) {
      return btn.$.addEventListener('click', _this.toggleState.bind(_this), false);
    });
  },

  /**
   * Toggles the custom tag state.
   *
   * @method toggleState
   * @param {Event} event
   */
  toggleState: function toggleState(event) {
    var _this2 = this;

    var visibleElement = event.currentTarget.dataset.target;
    var classes = {
      attributes: 'ez-custom-tag--attributes-visible',
      content: 'ez-custom-tag--content-visible'
    };
    Object.entries(classes).forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          className = _ref2[1];

      return _this2.element.$.classList.toggle(className, key === visibleElement);
    });
  },

  /**
   * Renders the custom tag attributes.
   *
   * @method renderAttributes
   */
  renderAttributes: function renderAttributes() {
    var _this3 = this;

    var customTagConfig = global.eZ.richText.customTags[this.getName()];

    if (!customTagConfig || !customTagConfig.attributes) {
      return;
    }

    var attributes = Object.keys(customTagConfig.attributes).reduce(function (total, attr) {
      var value = _this3.getConfig(attr);

      return "".concat(total, "<p>").concat(customTagConfig.attributes[attr].label, ": ").concat(value, "</p>");
    }, '');
    this.setWidgetAttributes(attributes);
  },

  /**
   * Sets the `name` of the custom tag.
   *
   * @method setName
   * @param {String} name
   * @return {CKEDITOR.plugins.widget}
   */
  setName: function setName(name) {
    this.element.data('ezname', name);
    window.clearTimeout(this.setNameFireEditorInteractionTimeout);
    this.setNameFireEditorInteractionTimeout = window.setTimeout(this.fireEditorInteraction.bind(this, 'nameUpdated'), 50);
    return this;
  },

  /**
   * Gets the `name` of the custom tag.
   *
   * @method getName
   * @return {CKEDITOR.plugins.widget}
   */
  getName: function getName() {
    return this.element.data('ezname');
  },

  /**
   * Cancels the widget events that trigger the `edit` event as
   * an embed widget can not be edited in a *CKEditor way*.
   *
   * @method cancelEditEvents
   */
  cancelEditEvents: function cancelEditEvents() {
    var cancel = function cancel(event) {
      return event.cancel();
    };

    this.on('doubleclick', cancel, null, null, 5);
    this.on('key', cancel, null, null, 5);
  },

  /**
   * Initializes the alignment on the widget wrapper if the widget
   * is aligned.
   *
   * @method syncAlignment
   * @param {Boolean} fireEditorInteractionPrevented
   */
  syncAlignment: function syncAlignment(fireEditorInteractionPrevented) {
    var align = this.element.data(DATA_ALIGNMENT_ATTR);

    if (align) {
      this.setAlignment(align, fireEditorInteractionPrevented);
    } else {
      this.unsetAlignment(fireEditorInteractionPrevented);
    }
  },

  /**
   * Sets the alignment of the embed widget to `type` and fires
   * the corresponding `editorInteraction` event.
   *
   * @method setAlignment
   * @param {String} type
   * @param {Boolean} fireEditorInteractionPrevented
   */
  setAlignment: function setAlignment(type, fireEditorInteractionPrevented) {
    this.wrapper.data(DATA_ALIGNMENT_ATTR, type);
    this.element.data(DATA_ALIGNMENT_ATTR, type);

    if (!fireEditorInteractionPrevented) {
      window.clearTimeout(this.setAlignmentFireEditorInteractionTimeout);
      this.setAlignmentFireEditorInteractionTimeout = window.setTimeout(this.fireEditorInteraction.bind(this, 'aligmentUpdated'), 50);
    }
  },

  /**
   * Removes the alignment of the widget and fires the
   * corresponding `editorInteraction` event.
   *
   * @method unsetAlignment
   * @param {Boolean} fireEditorInteractionPrevented
   */
  unsetAlignment: function unsetAlignment(fireEditorInteractionPrevented) {
    this.wrapper.data(DATA_ALIGNMENT_ATTR, false);
    this.element.data(DATA_ALIGNMENT_ATTR, false);

    if (!fireEditorInteractionPrevented) {
      window.clearTimeout(this.unsetAlignmentFireEditorInteractionTimeout);
      this.unsetAlignmentFireEditorInteractionTimeout = window.setTimeout(this.fireEditorInteraction.bind(this, 'aligmentRemoved'), 50);
    }
  },

  /**
   * Checks whether the embed is aligned with `type` alignment.
   *
   * @method isAligned
   * @param {String} type
   * @return {Boolean}
   */
  isAligned: function isAligned(type) {
    return this.wrapper.data(DATA_ALIGNMENT_ATTR) === type;
  },

  /**
   * Sets the widget content.
   *
   * @method setWidgetContent
   * @param {String|CKEDITOR.dom.node} content
   * @return {CKEDITOR.plugins.widget}
   */
  setWidgetContent: function setWidgetContent(content) {
    var ezContent = this.getEzContentElement();
    var element = ezContent.getFirst();
    var next;

    while (element) {
      next = element.getNext();
      element.remove();
      element = next;
    }

    if (content instanceof CKEDITOR.dom.node) {
      ezContent.append(content);
    } else {
      ezContent.appendHtml(content);
    }

    return this;
  },

  /**
   * Sets a config value under the `key` for the custom tag.
   *
   * @method setConfig
   * @param {String} key
   * @param {String} value
   * @return {CKEDITOR.plugins.widget}
   */
  setConfig: function setConfig(key, value) {
    var valueElement = this.getValueElement(key);

    if (!valueElement) {
      valueElement = new CKEDITOR.dom.element('span');
      valueElement.data('ezelement', 'ezvalue');
      valueElement.data('ezvalue-key', key);
      this.getEzConfigElement().append(valueElement);
    }

    valueElement.setText(value);
    window.clearTimeout(this.setConfigFireEditorInteractionTimeout);
    this.setConfigFireEditorInteractionTimeout = window.setTimeout(this.fireEditorInteraction.bind(this, 'configUpdated'), 50);
    return this;
  },

  /**
   * Sets the widget attributes.
   *
   * @method setWidgetAttributes
   * @param {String|CKEDITOR.dom.node} attributes
   * @return {CKEDITOR.plugins.widget}
   */
  setWidgetAttributes: function setWidgetAttributes(attributes) {
    var ezAttributes = this.getEzAttributesElement();
    var element = ezAttributes.getFirst();
    var next;

    while (element) {
      next = element.getNext();
      element.remove();
      element = next;
    }

    if (attributes instanceof CKEDITOR.dom.node) {
      ezAttributes.append(attributes);
    } else {
      ezAttributes.appendHtml(attributes);
    }

    return this;
  },

  /**
   * Returns the config value for the `key` or empty string if the
   * config key is not found.
   *
   * @method getConfig
   * @return {String}
   */
  getConfig: function getConfig(key) {
    var valueElement = this.getValueElement(key);
    return valueElement ? valueElement.getText() : '';
  },
  clearConfig: function clearConfig() {
    var config = this.getEzConfigElement();

    while (config.firstChild) {
      config.removeChild(config.firstChild);
    }

    window.clearTimeout(this.clearConfigFireEditorInteractionTimeout);
    this.clearConfigFireEditorInteractionTimeout = window.setTimeout(this.fireEditorInteraction.bind(this, 'configCleared'), 50);
  },

  /**
   * Returns the Element holding the config under `key`
   *
   * @method getValueElement
   * @param {String} key
   * @return {CKEDITOR.dom.element}
   */
  getValueElement: function getValueElement(key) {
    return this.getEzConfigElement().findOne('[data-ezelement="ezvalue"][data-ezvalue-key="' + key + '"]');
  },

  /**
   * Returns the element used as a container the config values. if
   * it does not exist, it is created.
   *
   * @method getEzConfigElement
   * @return {CKEDITOR.dom.element}
   */
  getEzConfigElement: function getEzConfigElement() {
    var config = _toConsumableArray(this.element.getChildren().$).find(function (child) {
      return child.dataset && child.dataset.ezelement === 'ezconfig';
    });

    if (!config) {
      config = new CKEDITOR.dom.element('span');
      config.data('ezelement', 'ezconfig');
      this.element.append(config);
    } else {
      config = new CKEDITOR.dom.element(config);
    }

    return config;
  },

  /**
   * Returns the element used as a container the content values. if
   * it does not exist, it is created.
   *
   * @method getEzContentElement
   * @return {CKEDITOR.dom.element}
   */
  getEzContentElement: function getEzContentElement() {
    var content = _toConsumableArray(this.element.getChildren().$).find(function (child) {
      return child.dataset && child.dataset.ezelement === 'ezcontent';
    });

    if (!content) {
      var para = new CKEDITOR.dom.element('p');
      content = new CKEDITOR.dom.element('div');
      content.data('ezelement', 'ezcontent');
      content.append(para);
      this.element.append(content, true);
    } else {
      content = new CKEDITOR.dom.element(content);
    }

    return content;
  },

  /**
   * Returns the element used as a container the attributes values. if
   * it does not exist, it is created.
   *
   * @method getEzAttributesElement
   * @return {CKEDITOR.dom.element}
   */
  getEzAttributesElement: function getEzAttributesElement() {
    var attributes = _toConsumableArray(this.element.getChildren().$).find(function (child) {
      return child.dataset && child.dataset.ezelement === 'ezattributes';
    });

    if (!attributes) {
      attributes = new CKEDITOR.dom.element('div');
      attributes.data('ezelement', 'ezattributes');
      this.element.append(attributes, true);
    } else {
      attributes = new CKEDITOR.dom.element(attributes);
    }

    return attributes;
  },

  /**
   * Returns the element used as a container the header. if
   * it does not exist, it is created.
   *
   * @method getHeader
   * @return {CKEDITOR.dom.element}
   */
  getHeader: function getHeader() {
    var header = _toConsumableArray(this.element.getChildren().$).find(function (child) {
      return child.dataset && child.classList.contains('ez-custom-tag__header');
    });

    if (!header) {
      header = new CKEDITOR.dom.element('div');
      header.addClass('ez-custom-tag__header');
      this.element.append(header, true);
    } else {
      header = new CKEDITOR.dom.element(header);
    }

    return header;
  },

  /**
   * Fires the editorInteraction event so that AlloyEditor editor
   * UI remains visible and is updated. This method also computes
   * `selectionData.region` and the `pageX` and `pageY` properties
   * so that the add toolbar is correctly positioned on the
   * widget.
   *
   * @method fireEditorInteraction
   * @param {Object|String} evt this initial event info object or
   * the event name for which the `editorInteraction` is fired.
   */
  fireEditorInteraction: function fireEditorInteraction(evt) {
    var wrapperRegion = this.getWrapperRegion();
    var name = evt.name || evt;
    var event = {
      editor: this.editor,
      target: this.element.$,
      name: 'widget' + name,
      pageX: wrapperRegion.left,
      pageY: wrapperRegion.top + wrapperRegion.height
    };
    this.editor.focus();
    this.focus();
    this.editor.fire('editorInteraction', {
      nativeEvent: event,
      selectionData: {
        element: this.element,
        region: wrapperRegion
      }
    });
  },

  /**
   * Moves the widget after the given element. It also fires the
   * `editorInteraction` event so that the UI can respond to that
   * change.
   *
   * @method moveAfter
   * @param {CKEDITOR.dom.element} element
   */
  moveAfter: function moveAfter(element) {
    this.wrapper.insertAfter(element);
    this.fireEditorInteraction('moveAfter');
  },

  /**
   * Moves the widget before the given element. It also fires the
   * `editorInteraction` event so that the UI can respond to that
   * change.
   *
   * @method moveAfter
   * @param {CKEDITOR.dom.element} element
   */
  moveBefore: function moveBefore(element) {
    this.wrapper.insertBefore(element);
    this.fireEditorInteraction('moveBefore');
  },

  /**
   * Returns the wrapper element region.
   *
   * @method getWrapperRegion
   * @private
   * @return {Object}
   */
  getWrapperRegion: function getWrapperRegion() {
    var scroll = this.wrapper.getWindow().getScrollPosition();
    var region = this.wrapper.getClientRect();
    region.top += scroll.y;
    region.bottom += scroll.y;
    region.left += scroll.x;
    region.right += scroll.x;
    region.direction = CKEDITOR.SELECTION_TOP_TO_BOTTOM;
    return region;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (customTagBaseDefinition);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/plugins/base/ez-embed-base.js":
/*!************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/plugins/base/ez-embed-base.js ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var IMAGE_TYPE_CLASS = 'ez-embed-type-image';
var IS_LINKED_CLASS = 'is-linked';
var SHOW_EDIT_LINK_TOOLBAR_ATTR = 'data-show-edit-link-toolbar';
var DATA_ALIGNMENT_ATTR = 'ezalign';
var ENTER_KEY_CODE = 13;
var embedBaseDefinition = {
  defaults: {
    href: 'ezcontent://',
    content: 'home',
    view: 'embed'
  },
  draggable: false,
  template: '<div data-ezelement="ezembed" data-href="{href}" data-ezview="{view}">{content}</div>',
  requiredContent: 'div',
  upcast: function upcast(element) {
    return element.name === 'div' && element.attributes['data-ezelement'] === 'ezembed';
  },
  insertWrapper: function insertWrapper(wrapper) {
    this.editor.eZ.appendElement(wrapper);
  },

  /**
   * Insert an `ezembed` widget in the editor. It overrides the
   * default implementation to make sure that in the case where an
   * embed widget is focused, a new one is added after it.
   *
   * @method insert
   */
  insert: function insert() {
    var element = CKEDITOR.dom.element.createFromHtml(this.template.output(this.defaults));
    var wrapper = this.editor.widgets.wrapElement(element, this.name);
    this.editor.widgets.initOn(element, this.name);
    this.insertWrapper(wrapper);
    var instance = this.editor.widgets.getByElement(wrapper);
    instance.ready = true;
    instance.fire('ready');
    instance.focus();
  },

  /**
   * It's not possible to *edit* an embed widget in AlloyEditor,
   * so `edit` directly calls `insert` instead. This is needed
   * because by default, the CKEditor engine calls this method
   * when an embed widget has the focus and the `ezembed` command
   * is executed. In AlloyEditor, we want to insert a new widget,
   * not to `edit` the focused widget as the editing process is
   * provided by the style toolbar.
   *
   * @method edit
   */
  edit: function edit() {
    this.insert();
  },
  init: function init() {
    this.on('focus', this.fireEditorInteraction);
    this.syncAlignment();
    this.getEzConfigElement();
    this.setWidgetContent('');
    this.cancelEditEvents();
    this.initEditMode();
    this.initEnterHandler();
  },
  initEnterHandler: function initEnterHandler() {
    var enterNewLine = this.enterNewLine.bind(this);
    this.editor.on('selectionChange', function (event) {
      var lastElement = event.data.path.lastElement;
      var isEmbed = lastElement.$.classList.contains('cke_widget_ezembed') || lastElement.$.classList.contains('cke_widget_ezembedinline');
      var methodName = isEmbed ? 'addEventListener' : 'removeEventListener';
      document.body[methodName]('keyup', enterNewLine, false);
    });
  },
  enterNewLine: function enterNewLine(event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      this.editor.execCommand('eZAddContent', {
        tagName: 'p',
        content: '<br>'
      });
    }
  },
  getIdentifier: function getIdentifier() {
    return this.isImage() ? 'ezembedimage' : 'ezembed';
  },

  /**
   * Initializes the edit mode.
   *
   * @method initEditMode
   */
  initEditMode: function initEditMode() {
    var href = this.getHref();
    var hasEzLocation = href.includes('ezlocation://');
    var contentId = href.replace('ezcontent://', '');

    if (hasEzLocation) {
      var ezLocationError = Translator.trans(
      /*@Desc("This embedded item relies on 'ezlocation' imported from Legacy. It isn't supported by Online Editor yet.")*/
      'embed.ezlocation.error', {}, 'alloy_editor');
      this.renderEmbedPreview(ezLocationError);
      return;
    }

    if (!contentId) {
      return;
    }

    this.loadContent(contentId);
  },

  /**
   * Loads the content info.
   *
   * @method loadContent
   * @param {String} contentId The content id
   */
  loadContent: function loadContent(contentId) {
    var token = document.querySelector('meta[name="CSRF-Token"]').content;
    var siteaccess = document.querySelector('meta[name="SiteAccess"]').content;
    var body = JSON.stringify({
      ViewInput: {
        identifier: "embed-load-content-info-".concat(contentId),
        "public": false,
        ContentQuery: {
          FacetBuilders: {},
          SortClauses: {},
          Filter: {
            ContentIdCriterion: "".concat(contentId)
          },
          limit: 1,
          offset: 0
        }
      }
    });
    var request = new Request('/api/ezp/v2/views', {
      method: 'POST',
      headers: {
        Accept: 'application/vnd.ez.api.View+json; version=1.1',
        'Content-Type': 'application/vnd.ez.api.ViewInput+json; version=1.1',
        'X-Siteaccess': siteaccess,
        'X-CSRF-Token': token
      },
      body: body,
      mode: 'same-origin',
      credentials: 'same-origin'
    });
    fetch(request).then(function (response) {
      return response.json();
    }).then(this.handleContentLoaded.bind(this))["catch"](function (error) {
      return window.eZ.helpers.notification.showErrorNotification(error);
    });
  },

  /**
   * Loads the image variation.
   *
   * @method loadImageVariation
   * @param {String} variationHref The variation href
   */
  loadImageVariation: function loadImageVariation(variationHref) {
    var _this = this;

    var token = document.querySelector('meta[name="CSRF-Token"]').content;
    var siteaccess = document.querySelector('meta[name="SiteAccess"]').content;
    var request = new Request(variationHref, {
      method: 'GET',
      headers: {
        Accept: 'application/vnd.ez.api.ContentImageVariation+json',
        'X-Siteaccess': siteaccess,
        'X-CSRF-Token': token
      },
      credentials: 'same-origin',
      mode: 'same-origin'
    });
    fetch(request).then(function (response) {
      return response.json();
    }).then(function (imageData) {
      return _this.renderEmbedImagePreview(imageData.ContentImageVariation.uri);
    });
  },

  /**
   * Finds the ezimage field.
   *
   * @method findEzimageField
   * @returns {Object}
   */
  findEzimageField: function findEzimageField(fields) {
    return fields.find(function (field) {
      return field.fieldTypeIdentifier === 'ezimage';
    });
  },

  /**
   * Handles loading the content info.
   *
   * @method handleContentLoaded
   * @param {Object} hits The result of content search
   */
  handleContentLoaded: function handleContentLoaded(hits) {
    if (hits.View.Result.searchHits.searchHit.length === 0) {
      var title = Translator.trans(
      /*@Desc("Removed")*/
      'removed_content.label', {}, 'alloy_editor');
      this.renderEmbedPreview(title);
      return;
    }

    var isEmbedImage = this.element.$.classList.contains(IMAGE_TYPE_CLASS);
    var content = hits.View.Result.searchHits.searchHit[0].value.Content;

    if (isEmbedImage) {
      var fieldImage = this.findEzimageField(content.CurrentVersion.Version.Fields.field);

      if (!fieldImage || !fieldImage.fieldValue) {
        this.renderEmbedPreview(content.Name);
        return;
      }

      var size = this.getConfig('size');
      var variationHref = fieldImage.fieldValue.variations[size].href;
      this.variations = fieldImage.fieldValue.variations;
      this.loadImageVariation(variationHref);
    } else {
      this.renderEmbedPreview(content.Name);
    }
  },

  /**
   * Loads image preview from current version href
   *
   * @method loadImagePreviewFromCurrentVersion
   * @param {String} currentVersionHref The current version href
   * @param {String} contnetName The content name
   */
  loadImagePreviewFromCurrentVersion: function loadImagePreviewFromCurrentVersion(currentVersionHref, contentName) {
    var _this2 = this;

    var token = document.querySelector('meta[name="CSRF-Token"]').content;
    var siteaccess = document.querySelector('meta[name="SiteAccess"]').content;
    var request = new Request(currentVersionHref, {
      method: 'GET',
      headers: {
        Accept: 'application/vnd.ez.api.Version+json',
        'X-Siteaccess': siteaccess,
        'X-CSRF-Token': token
      },
      credentials: 'same-origin',
      mode: 'same-origin'
    });
    fetch(request).then(function (response) {
      return response.json();
    }).then(function (data) {
      var fieldImage = _this2.findEzimageField(data.Version.Fields.field);

      if (!fieldImage || !fieldImage.fieldValue) {
        contentName = contentName ? contentName : '';

        _this2.renderEmbedPreview(contentName);

        return;
      }

      var size = _this2.getConfig('size');

      var variationHref = fieldImage.fieldValue.variations[size].href;
      _this2.variations = fieldImage.fieldValue.variations;

      _this2.loadImageVariation(variationHref);
    });
  },
  createEmbedPreviewNode: function createEmbedPreviewNode() {
    return document.createElement('p');
  },
  createEmbedPreview: function createEmbedPreview(title) {
    return "\n            <svg class=\"ez-icon ez-icon--medium ez-icon--secondary\">\n                <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href={window.eZ.helpers.icon.getIconPath('embed')}></use>\n            </svg>\n            <span class=\"ez-embed-content__title\">".concat(title, "</span>\n        ");
  },

  /**
   * Renders the embed preview
   *
   * @method renderEmbedPreview
   * @param {String} title The content title
   */
  renderEmbedPreview: function renderEmbedPreview(title) {
    var elementNode = this.createEmbedPreviewNode();
    var escapedTitle = eZ.helpers.text.escapeHTML(title);
    var template = this.createEmbedPreview(escapedTitle);
    elementNode.classList.add('ez-embed-content');
    elementNode.innerHTML = template;
    this.setWidgetContent(elementNode);
  },

  /**
   * Renders the embed image preview
   *
   * @method renderEmbedImagePreview
   * @param {String} imageUri The image uri
   */
  renderEmbedImagePreview: function renderEmbedImagePreview(imageUri) {
    var elementNode = document.createElement('img');
    elementNode.setAttribute('src', imageUri);
    this.setWidgetContent(elementNode);

    if (this.element.hasClass(IS_LINKED_CLASS)) {
      this.renderLinkedIcon();
    }
  },

  /**
   * Cancels the widget events that trigger the `edit` event as
   * an embed widget can not be edited in a *CKEditor way*.
   *
   * @method cancelEditEvents
   */
  cancelEditEvents: function cancelEditEvents() {
    var cancel = function cancel(event) {
      return event.cancel();
    };

    this.on('doubleclick', cancel, null, null, 5);
    this.on('key', cancel, null, null, 5);
  },

  /**
   * Initializes the alignment on the widget wrapper if the widget
   * is aligned.
   *
   * @method syncAlignment
   */
  syncAlignment: function syncAlignment() {
    var align = this.element.data(DATA_ALIGNMENT_ATTR);

    if (align) {
      this._setAlignment(align);
    } else {
      this._unsetAlignment();
    }
  },

  /**
   * Sets the alignment of the embed widget to `type`. The
   * alignment is set by adding the `data-ezalign` attribute
   * on the widget wrapper and the widget element.
   *
   * @method _setAlignment
   * @param {String} type
   */
  _setAlignment: function _setAlignment(type) {
    this.wrapper.data(DATA_ALIGNMENT_ATTR, type);
    this.element.data(DATA_ALIGNMENT_ATTR, type);
  },

  /**
   * Sets the alignment of the embed widget to `type` and fires
   * the corresponding `editorInteraction` event.
   *
   * @method setAlignment
   * @param {String} type
   */
  setAlignment: function setAlignment(type) {
    this._setAlignment(type);

    this.fireEditorInteraction('setAlignment' + type);
  },

  /**
   * Removes the alignment of the widget.
   *
   * @method _unsetAlignment
   */
  _unsetAlignment: function _unsetAlignment() {
    this.wrapper.data(DATA_ALIGNMENT_ATTR, false);
    this.element.data(DATA_ALIGNMENT_ATTR, false);
  },

  /**
   * Removes the alignment of the widget and fires the
   * corresponding `editorInteraction` event.
   *
   * @method unsetAlignment
   */
  unsetAlignment: function unsetAlignment() {
    this._unsetAlignment();

    this.fireEditorInteraction('unsetAlignment');
  },

  /**
   * Checks whether the embed is aligned with `type` alignment.
   *
   * @method isAligned
   * @param {String} type
   * @return {Boolean}
   */
  isAligned: function isAligned(type) {
    return this.wrapper.data(DATA_ALIGNMENT_ATTR) === type;
  },

  /**
   * Set the embed as an embed representing an image
   *
   * @method setImageType
   * @return {CKEDITOR.plugins.widget}
   */
  setImageType: function setImageType() {
    this.element.addClass(IMAGE_TYPE_CLASS);
    return this;
  },

  /**
   * Check whether the embed widget represents an image or not.
   *
   * @method isImage
   * @return {Boolean}
   */
  isImage: function isImage() {
    return this.element.hasClass(IMAGE_TYPE_CLASS);
  },

  /**
   * Sets the `href` of the embed is URI to the embed content or
   * location. (ezcontent://32 for instance).
   *
   * @method setHref
   * @param {String} href
   * @return {CKEDITOR.plugins.widget}
   */
  setHref: function setHref(href) {
    this.element.data('href', href);
    return this;
  },

  /**
   * Returns the `href`of the embed.
   *
   * @method getHref
   * @return {String}
   */
  getHref: function getHref() {
    return this.element.data('href');
  },

  /**
   * Sets the widget content. It makes sure the config element is
   * not overwritten.
   *
   * @method setWidgetContent
   * @param {String|CKEDITOR.dom.node} content
   * @return {CKEDITOR.plugins.widget}
   */
  setWidgetContent: function setWidgetContent(content) {
    var element = this.element.getFirst();
    var next;

    while (element) {
      next = element.getNext();
      var isEzElement = element.data && element.data('ezelement');
      var isAnchorIcon = element.$.classList && element.$.classList.contains('ez-icon--anchor');
      var shouldRemove = !(isEzElement || isAnchorIcon);

      if (shouldRemove) {
        element.remove();
      }

      element = next;
    }

    if (content instanceof CKEDITOR.dom.node) {
      this.element.append(content);
    } else {
      this.element.appendText(content);
    }

    return this;
  },

  /**
   * Moves the widget after the given element. It also fires the
   * `editorInteraction` event so that the UI can respond to that
   * change.
   *
   * @method moveAfter
   * @param {CKEDITOR.dom.element} element
   */
  moveAfter: function moveAfter(element) {
    this.wrapper.insertAfter(element);
    this.fireEditorInteraction('moveAfter');
  },

  /**
   * Moves the widget before the given element. It also fires the
   * `editorInteraction` event so that the UI can respond to that
   * change.
   *
   * @method moveAfter
   * @param {CKEDITOR.dom.element} element
   */
  moveBefore: function moveBefore(element) {
    this.wrapper.insertBefore(element);
    this.fireEditorInteraction('moveBefore');
  },

  /**
   * Sets a config value under the `key` for the embed.
   *
   * @method setConfig
   * @param {String} key
   * @param {String} value
   * @return {CKEDITOR.plugins.widget}
   */
  setConfig: function setConfig(key, value) {
    var valueElement = this.getValueElement(key);

    if (!valueElement) {
      valueElement = new CKEDITOR.dom.element('span');
      valueElement.data('ezelement', 'ezvalue');
      valueElement.data('ezvalue-key', key);
      this.getEzConfigElement().append(valueElement);
    }

    valueElement.setText(value);
    return this;
  },

  /**
   * Returns the config value for the `key` or undefined if the
   * config key is not found.
   *
   * @method getConfig
   * @return {String}
   */
  getConfig: function getConfig(key) {
    var valueElement = this.getValueElement(key);
    return valueElement ? valueElement.getText() : undefined;
  },

  /**
   * Returns the Element holding the config under `key`
   *
   * @method getValueElement
   * @param {String} key
   * @return {CKEDITOR.dom.element}
   */
  getValueElement: function getValueElement(key) {
    return this.element.findOne('[data-ezelement="ezvalue"][data-ezvalue-key="' + key + '"]');
  },

  /**
   * Returns the element used as a container the config values. if
   * it does not exist, it is created.
   *
   * @method getEzConfigElement
   * @return {CKEDITOR.dom.element}
   */
  getEzConfigElement: function getEzConfigElement() {
    var config = this.element.findOne('[data-ezelement="ezconfig"]');

    if (!config) {
      config = new CKEDITOR.dom.element('span');
      config.data('ezelement', 'ezconfig');
      this.element.append(config, true);
    }

    return config;
  },

  /**
   * Returns the element used as a container the link values. if
   * it does not exist, it is created.
   *
   * @method getEzLinkElement
   * @return {CKEDITOR.dom.element}
   */
  getEzLinkElement: function getEzLinkElement() {
    var link = this.element.findOne('[data-ezelement="ezlink"]');

    if (!link) {
      link = new CKEDITOR.dom.element('a');
      link.$.innerHTML = ' ';
      link.setAttribute('data-ezelement', 'ezlink');
      link.setAttribute('data-ez-temporary-link', true);
      this.element.append(link);
    }

    return link;
  },

  /**
   * Gets the link attribute
   *
   * @method getEzLinkAttribute
   * @param {String} attribute
   * @return {String}
   */
  getEzLinkAttribute: function getEzLinkAttribute(attribute) {
    var link = this.getEzLinkElement();
    return link.getAttribute(attribute);
  },

  /**
   * Sets the link attribute
   *
   * @method getEzLinkAttribute
   * @param {String} attribute
   * @param {String} value
   */
  setEzLinkAttribute: function setEzLinkAttribute(attribute, value) {
    var link = this.getEzLinkElement();
    link.setAttribute(attribute, value);
  },

  /**
   * Removes the link attribute
   *
   * @method removeEzLinkAttribute
   * @param {String} attribute
   */
  removeEzLinkAttribute: function removeEzLinkAttribute(attribute) {
    var link = this.getEzLinkElement();
    link.removeAttribute(attribute);
  },

  /**
   * Sets the link edit state
   *
   * @method setLinkEditState
   */
  setLinkEditState: function setLinkEditState() {
    this.element.setAttribute(SHOW_EDIT_LINK_TOOLBAR_ATTR, true);
  },

  /**
   * Removes the link edit state
   *
   * @method removeLinkEditState
   */
  removeLinkEditState: function removeLinkEditState() {
    this.element.removeAttribute(SHOW_EDIT_LINK_TOOLBAR_ATTR);
  },

  /**
   * Checks if widget is in link edit state
   *
   * @method isEditingLink
   * @return {Boolean}
   */
  isEditingLink: function isEditingLink() {
    return this.element.hasAttribute(SHOW_EDIT_LINK_TOOLBAR_ATTR);
  },

  /**
   * Sets the is linked state
   *
   * @method setIsLinkedState
   */
  setIsLinkedState: function setIsLinkedState() {
    this.element.$.classList.add(IS_LINKED_CLASS);
    this.renderLinkedIcon();
  },

  /**
   * Removes the is linked state
   *
   * @method removeIsLinkedState
   */
  removeIsLinkedState: function removeIsLinkedState() {
    this.element.$.classList.remove(IS_LINKED_CLASS);
    this.removeLinkedIcon();
  },

  /**
   * Renders the linked icon
   *
   * @method renderLinkedIcon
   */
  renderLinkedIcon: function renderLinkedIcon() {
    var iconWrapper = new CKEDITOR.dom.element('span');
    var icon = "\n            <svg class=\"ez-icon ez-icon--medium ez-icon--light\">\n                <use xlink:href={window.eZ.helpers.icon.getIconPath('link')}></use>\n            </svg>\n        ";

    if (this.element.findOne('.ez-embed__icon-wrapper')) {
      return;
    }

    iconWrapper.$.classList.add('ez-embed__icon-wrapper');
    iconWrapper.$.innerHTML = icon;
    this.element.append(iconWrapper);
  },

  /**
   * Removes the linked icon
   *
   * @method removeLinkedIcon
   */
  removeLinkedIcon: function removeLinkedIcon() {
    var iconWrapper = this.element.findOne('.ez-embed__icon-wrapper');

    if (iconWrapper) {
      iconWrapper.remove();
    }
  },

  /**
   * Fires the editorInteraction event so that AlloyEditor editor
   * UI remains visible and is updated. This method also computes
   * `selectionData.region` and the `pageX` and `pageY` properties
   * so that the add toolbar is correctly positioned on the
   * widget.
   *
   * @method fireEditorInteraction
   * @param {Object|String} evt this initial event info object or
   * the event name for which the `editorInteraction` is fired.
   */
  fireEditorInteraction: function fireEditorInteraction(evt) {
    var wrapperRegion = this.getWrapperRegion();
    var name = evt.name || evt;
    var event = {
      editor: this.editor,
      target: this.element.$,
      name: 'widget' + name,
      pageX: wrapperRegion.left,
      pageY: wrapperRegion.top + wrapperRegion.height
    };
    this.editor.focus();
    this.focus();
    this.editor.fire('editorInteraction', {
      nativeEvent: event,
      selectionData: {
        element: this.element,
        region: wrapperRegion
      }
    });
  },

  /**
   * Returns the wrapper element region.
   *
   * @method getWrapperRegion
   * @private
   * @return {Object}
   */
  getWrapperRegion: function getWrapperRegion() {
    var scroll = this.wrapper.getWindow().getScrollPosition();
    var region = this.wrapper.getClientRect();
    region.top += scroll.y;
    region.bottom += scroll.y;
    region.left += scroll.x;
    region.right += scroll.x;
    region.direction = CKEDITOR.SELECTION_TOP_TO_BOTTOM;
    return region;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (embedBaseDefinition);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/plugins/ez-add-content.js":
/*!********************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/plugins/ez-add-content.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (global) {
  if (global.CKEDITOR.plugins.get('ezaddcontent')) {
    return;
  }
  /**
   * Creates a given HTMLElement
   *
   * @method createElement
   * @return HTMLElement
   */


  var createElement = function createElement(doc, tagName, content, attributes) {
    var element = doc.createElement(tagName);
    element.setAttributes(attributes);
    element.setHtml(content ? content : '<br>');
    return element;
  };
  /**
   * Fires the `editorInteraction` event this is done to make sure the
   * AlloyEditor's UI remains visible
   *
   * @method fireEditorInteractionEvent
   */


  var fireEditorInteractionEvent = function fireEditorInteractionEvent(editor, element) {
    var event = {
      editor: editor,
      target: element.$,
      name: 'eZAddContentDone'
    };
    editor.fire('editorInteraction', {
      nativeEvent: event,
      selectionData: editor.getSelectionData()
    });
  };

  var isCustomTag = function isCustomTag(el) {
    return !!el.findOne('[data-ezelement="eztemplate"]');
  };
  /**
   * Appends the element to the editor content. Depending on the editor's
   * state, the element is added at a different place:
   *
   * - if nothing is selected, editor.insertElement is called and the element
   *   is added at the beginning of the editor
   * - if a block element is selected (not a widget), the element is added
   *   after the element or after the first block in the element path (after
   *   the ul element if a li has the focus)
   * - if a widget has the focus, the element is added right after it
   *
   * @method appendElement
   * @param {CKEDITOR.editor} editor
   * @param {CKEDITOR.dom.element} element
   */


  var appendElement = function appendElement(editor, element) {
    var elementPath = editor.elementPath();

    if (elementPath && elementPath.block) {
      var elements = elementPath.elements;
      var insertIndex = !elementPath.contains(isCustomTag, true) ? elements.length - 2 : 0;
      element.insertAfter(elements[insertIndex]);
    } else if (editor.widgets && editor.widgets.focused) {
      element.insertAfter(editor.widgets.focused.wrapper);
    } else {
      editor.insertElement(element);
    }
  };

  var addContentCommand = {
    exec: function exec(editor, data) {
      var element = createElement(editor.document, data.tagName, data.content, data.attributes);
      var focusElement = element;
      appendElement(editor, focusElement);

      if (data.focusElement) {
        focusElement = element.findOne(data.focusElement);
      }

      editor.eZ.moveCaretToElement(editor, focusElement);
      fireEditorInteractionEvent(editor, focusElement);
    }
  };
  /**
   * CKEditor plugin providing the eZAddContent command. This command
   * allows to add content  to the editor content in the editable region
   * pointed by the selector available under `eZ.editableRegion` in the
   * configuration.
   *
   * @class ezaddcontent
   * @namespace CKEDITOR.plugins
   * @constructor
   */

  global.CKEDITOR.plugins.add('ezaddcontent', {
    requires: ['ezcaret'],
    init: function init(editor) {
      editor.eZ = editor.eZ || {};
      editor.eZ.appendElement = appendElement.bind(editor, editor);
      editor.addCommand('eZAddContent', addContentCommand);
    }
  });
})(window);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/plugins/ez-caret.js":
/*!**************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/plugins/ez-caret.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (global) {
  if (CKEDITOR.plugins.get('ezcaret')) {
    return;
  }
  /**
   * Moves caret to the element.
   *
   * @method moveCaretToElement
   */


  var moveCaretToElement = function moveCaretToElement(editor, element) {
    var range = editor.createRange();
    range.moveToPosition(element, CKEDITOR.POSITION_AFTER_START);
    editor.getSelection().selectRanges([range]);
  };
  /**
   * Finds caret element.
   *
   * @method findCaretElement
   * @return HTMLElement
   */


  var findCaretElement = function findCaretElement(element) {
    var child = element.getChild(0);

    if (child && child.type !== CKEDITOR.NODE_TEXT) {
      return findCaretElement(child);
    }

    return element;
  };
  /**
   * CKEDITOR plugin providing an API to handle the caret in the editor.
   *
   * @class ezcaret
   * @namespace CKEDITOR.plugins
   * @constructor
   */


  CKEDITOR.plugins.add('ezcaret', {
    init: function init(editor) {
      editor.eZ = editor.eZ || {};
      /**
       * Moves the caret in the editor to the given element
       *
       * @method eZ.moveCaretToElement
       * @param {CKEDITOR.editor} editor
       * @param {CKEDITOR.dom.element} element
       */

      editor.eZ.moveCaretToElement = moveCaretToElement;
      /**
       * Finds the "caret element" for the given element. For some elements,
       * like ul or table, moving the caret inside them actually means finding
       * the first element that can be filled by the user.
       *
       * @method eZ.findCaretElement
       * @protected
       * @param {CKEDITOR.dom.element} element
       * @return {CKEDITOR.dom.element}
       */

      editor.eZ.findCaretElement = findCaretElement;
    }
  });
})(window);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/plugins/ez-custom-tag.js":
/*!*******************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/plugins/ez-custom-tag.js ***!
  \*******************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_ez_custom_tag_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base/ez-custom-tag-base */ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/plugins/base/ez-custom-tag-base.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


CKEDITOR.dtd.$editable.span = 1;

(function (global) {
  if (CKEDITOR.plugins.get('ezcustomtag') && CKEDITOR.plugins.get('ezinlinecustomtag')) {
    return;
  }

  CKEDITOR.plugins.add('ezcustomtag', {
    requires: 'widget,ezaddcontent',
    init: function init(editor) {
      var customTagDefinition = Object.assign({}, _base_ez_custom_tag_base__WEBPACK_IMPORTED_MODULE_0__["default"], {
        editor: editor,
        global: global
      });
      editor.widgets.add('ezcustomtag', customTagDefinition);
    }
  });
  CKEDITOR.plugins.add('ezinlinecustomtag', {
    requires: 'widget,ezaddcontent',
    init: function init(editor) {
      var inlineCustomTagDefinition = Object.assign({}, _base_ez_custom_tag_base__WEBPACK_IMPORTED_MODULE_0__["default"], {
        editor: editor,
        global: global,
        template: "<span class=\"ez-custom-tag ez-custom-tag--content-visible\" data-ezelement=\"eztemplateinline\" data-ezname=\"{name}\">\n                        <span class=\"ez-custom-tag__icon-wrapper\"></span>\n                        <span data-ezelement=\"ezcontent\">{content}</span>\n                    </span>",
        requiredContent: 'div',
        upcast: function upcast(element) {
          return element.name === 'span' && element.attributes['data-ezelement'] === 'eztemplateinline' && !element.attributes['data-eztype'];
        },
        init: function init() {
          this.on('focus', this.fireEditorInteraction);
          this.syncAlignment(true);
          this.getEzConfigElement();
          this.cancelEditEvents();
          this.renderIcon();
          this.initEnterHandler();
        },
        getIdentifier: function getIdentifier() {
          return 'ezinlinecustomtag';
        },
        insertWrapper: function insertWrapper(wrapper) {
          this.editor.insertElement(wrapper);
        },
        renderIcon: function renderIcon() {
          var customTagConfig = global.eZ.richText.customTags[this.getName()];

          if (!customTagConfig) {
            return;
          }

          var iconWrapper = this.getIconWrapper();
          var icon = "\n                        <svg class=\"ez-icon ez-icon--small ez-icon--secondary\">\n                            <use xlink:href=".concat(customTagConfig.icon, " />\n                        </svg>\n                    ");
          iconWrapper.appendHtml(icon);
        },
        getIconWrapper: function getIconWrapper() {
          var iconWrapper = _toConsumableArray(this.element.getChildren().$).find(function (child) {
            return child.dataset && child.classList.contains('ez-custom-tag__icon-wrapper');
          });

          if (!iconWrapper) {
            iconWrapper = new CKEDITOR.dom.element('span');
            iconWrapper.addClass('ez-custom-tag__icon-wrapper');
            this.element.append(iconWrapper, true);
          } else {
            iconWrapper = new CKEDITOR.dom.element(iconWrapper);
          }

          return iconWrapper;
        }
      });
      editor.widgets.add('ezinlinecustomtag', inlineCustomTagDefinition);
    }
  });
})(window);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/plugins/ez-elements-path.js":
/*!**********************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/plugins/ez-elements-path.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(function (global) {
  var _this = this;

  if (CKEDITOR.plugins.get('ezelementspath')) {
    return;
  }

  var elementsLabel = {
    ezcustomtag: 'Custom Tag',
    ezinlinecustomtag: 'Inline Custom Tag',
    ezembed: 'Embed',
    ezembedinline: 'Embed Inline',
    ezembedimage: 'Embed Image'
  };
  var skipElementsSelectors = ['.cke_widget_element', '.cke_widget_editable'];

  var getLabel = function getLabel(elementIdentifier) {
    return elementsLabel[elementIdentifier] ? elementsLabel[elementIdentifier] : elementIdentifier;
  };

  var itemPathTemplate = new CKEDITOR.template('<li class="ez-elements-path__item">{label}</li>');

  var updatePath = function updatePath(event) {
    var editor = event.editor,
        data = event.data;

    var elements = _toConsumableArray(data.path.elements).reverse().slice(1).map(removeSkippedElements).filter(function (element) {
      return !!element;
    });

    var pathItems = elements.map(createPathItem.bind(_this, editor));
    var pathContainer = editor.container.getParent().findOne('.ez-elements-path');

    if (!pathContainer) {
      return;
    }

    pathContainer.setHtml('');
    pathItems.forEach(function (pathItem) {
      return pathContainer.append(pathItem);
    });
  };

  var removeSkippedElements = function removeSkippedElements(element) {
    var container = new CKEDITOR.dom.element('div');
    var containerWrapper = new CKEDITOR.dom.element('div');
    var clonedElement = element.clone(true);
    container.addClass('ez-cloned');
    container.append(clonedElement);
    containerWrapper.append(container);
    var shouldBeSkipped = skipElementsSelectors.some(function (selector) {
      return containerWrapper.findOne(".ez-cloned > ".concat(selector));
    });
    return shouldBeSkipped ? null : element;
  };

  var createPathItem = function createPathItem(editor, element) {
    var label = getElementLabel(editor, element);
    var pathItem = CKEDITOR.dom.element.createFromHtml(itemPathTemplate.output({
      label: label
    }));
    pathItem.on('click', selectElement.bind(_this, editor, element));
    return pathItem;
  };

  var selectElement = function selectElement(editor, element) {
    var selection = editor.getSelection();
    selection.selectElement(element);

    if (isWidgetElement(editor, element)) {
      return;
    }

    editor.fire('editorInteraction', {
      nativeEvent: {
        editor: editor,
        target: element.$
      },
      selectionData: editor.getSelectionData()
    });
  };

  var getElementLabel = function getElementLabel(editor, element) {
    var widgetIdentifier = getWidgetIdentifier(editor, element);
    var label = widgetIdentifier ? getLabel(widgetIdentifier) : getLabel(element.getName());
    return label;
  };

  var getWidgetIdentifier = function getWidgetIdentifier(editor, element) {
    var widget = editor.widgets.getByElement(element);
    var widgetIdentifier = isWidgetElement(editor, element) && typeof widget.getIdentifier === 'function' ? widget.getIdentifier() : null;
    return widgetIdentifier;
  };

  var isWidgetElement = function isWidgetElement(editor, element) {
    var widget = editor.widgets.getByElement(element);
    var elementFirstChild = element.getFirst();
    return widget && elementFirstChild.type === 1 && widget.element.isIdentical(elementFirstChild);
  };

  CKEDITOR.plugins.add('ezelementspath', {
    init: function init(editor) {
      editor.on('selectionChange', updatePath);
    }
  });
})(window);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/plugins/ez-embed.js":
/*!**************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/plugins/ez-embed.js ***!
  \**************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_ez_embed_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base/ez-embed-base */ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/plugins/base/ez-embed-base.js");


(function (global) {
  if (CKEDITOR.plugins.get('ezembed') && CKEDITOR.plugins.get('ezembedinline')) {
    return;
  }
  /**
   * CKEditor plugin to configure the widget plugin so that it recognizes the
   * `div[data-ezelement="embed"]` elements as widget.
   *
   * @class ezembed
   * @namespace CKEDITOR.plugins
   * @constructor
   */


  CKEDITOR.plugins.add('ezembed', {
    requires: 'widget,ezaddcontent',
    init: function init(editor) {
      editor.ezembed = {
        canBeAdded: function canBeAdded() {
          var path = editor.elementPath();
          return !path || path.contains('table', true) === null;
        }
      };
      var embedDefinition = Object.assign({}, _base_ez_embed_base__WEBPACK_IMPORTED_MODULE_0__["default"], {
        editor: editor
      });
      editor.widgets.add('ezembed', embedDefinition);
    }
  });
  /**
   * CKEditor plugin to configure the widget plugin so that it recognizes the
   * `div[data-ezelement="embedinline"]` elements as widget.
   *
   * @class ezembedinline
   * @namespace CKEDITOR.plugins
   * @constructor
   */

  CKEDITOR.plugins.add('ezembedinline', {
    requires: 'widget,ezaddcontent',
    init: function init(editor) {
      var embedInlineDefinition = Object.assign({}, _base_ez_embed_base__WEBPACK_IMPORTED_MODULE_0__["default"], {
        editor: editor,
        defaults: {
          href: 'ezcontent://',
          content: 'home',
          view: 'embed-inline'
        },
        template: '<span data-ezelement="ezembedinline" data-href="{href}" data-ezview="{view}">{content}</span>',
        requiredContent: 'span',
        upcast: function upcast(element) {
          return element.name === 'span' && element.attributes['data-ezelement'] === 'ezembedinline';
        },
        getIdentifier: function getIdentifier() {
          return 'ezembedinline';
        },
        insertWrapper: function insertWrapper(wrapper) {
          this.editor.insertElement(wrapper);
        },
        createEmbedPreviewNode: function createEmbedPreviewNode() {
          return document.createElement('span');
        }
      });
      editor.widgets.add('ezembedinline', embedInlineDefinition);
    }
  });
})(window);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/plugins/ez-focus-block.js":
/*!********************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/plugins/ez-focus-block.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (global) {
  var FOCUSED_CLASS = 'is-block-focused';

  if (CKEDITOR.plugins.get('ezfocusblock')) {
    return;
  }
  /**
   * Finds the focused blocks.
   *
   * @method findFocusedBlock
   * @param {Object} editor the CKEditor
   */


  var findFocusedBlock = function findFocusedBlock(editor) {
    return editor.element.findOne('.' + FOCUSED_CLASS);
  };
  /**
   * Finds blocks to focus.
   *
   * @method findNewFocusedBlock
   * @param {Object} elementPath the element path
   */


  var findNewFocusedBlock = function findNewFocusedBlock(elementPath) {
    var block = elementPath.block;
    var elements = elementPath.elements;

    if (!block) {
      return null;
    }

    return elements[elements.length - 2];
  };
  /**
   * Updates the focused blocks.
   *
   * @method updateFocusedBlock
   * @param {Event} event the event object
   */


  var updateFocusedBlock = function updateFocusedBlock(event) {
    var block = findNewFocusedBlock(event.data.path);
    var oldBlock = findFocusedBlock(event.editor);

    if (oldBlock && (!block || block.$ !== oldBlock.$)) {
      oldBlock.removeClass(FOCUSED_CLASS);
    }

    if (block) {
      block.addClass(FOCUSED_CLASS);
    }
  };
  /**
   * Clear the focus from block.
   *
   * @method clearFocusedBlock
   * @param {Event} event the event object
   */


  var clearFocusedBlock = function clearFocusedBlock(event) {
    var oldBlock = findFocusedBlock(event.editor);

    if (oldBlock) {
      oldBlock.removeClass(FOCUSED_CLASS);
    }
  };
  /**
   * Clear the focus blocks from data.
   *
   * @method clearFocusedBlockFromData
   * @param {Event} event the event object
   */


  var clearFocusedBlockFromData = function clearFocusedBlockFromData(event) {
    var doc = document.createDocumentFragment();
    var root = document.createElement('div');
    var i;
    doc.appendChild(root);
    root.innerHTML = event.data.dataValue;
    var list = root.querySelectorAll('.' + FOCUSED_CLASS);

    if (list.length) {
      for (i = 0; i != list.length; ++i) {
        var element = list[i];
        element.classList.remove(FOCUSED_CLASS);

        if (!element.getAttribute('class')) {
          element.removeAttribute('class');
        }
      }

      event.data.dataValue = root.innerHTML;
    }
  };
  /**
   * CKEditor plugin to add/remove the focused class on the block holding the
   * caret.
   *
   * @class ezfocusblock
   * @namespace CKEDITOR.plugins
   * @constructor
   */


  CKEDITOR.plugins.add('ezfocusblock', {
    init: function init(editor) {
      editor.on('selectionChange', updateFocusedBlock);
      editor.on('blur', clearFocusedBlock);
      editor.on('getData', clearFocusedBlockFromData);
    }
  });
})(window);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/plugins/ez-move-element.js":
/*!*********************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/plugins/ez-move-element.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (global) {
  if (CKEDITOR.plugins.get('ezmoveelement')) {
    return;
  }
  /**
   * Fires the editorInteraction event.
   *
   * @method fireEditorInteraction
   * @param {Object} editor the CKEditor
   * @param {Event} evt the event object
   * @param {Object} target the target
   */


  var fireEditorInteraction = function fireEditorInteraction(editor, evt, target) {
    var event = {
      editor: editor,
      target: target.$,
      name: evt
    };
    editor.fire('editorInteraction', {
      nativeEvent: event,
      selectionData: editor.getSelectionData()
    });
  };

  var findElements = function findElements(editor) {
    var path = editor.elementPath();
    var focused = path.block;
    var widget;

    if (!focused) {
      widget = editor.widgets.focused;
      focused = widget ? widget.wrapper : null;
    }

    if (!focused && path.contains('table')) {
      focused = path.elements.find(function (element) {
        return element.is('table');
      });
    }

    if (focused.is('li')) {
      focused = focused.getParent();
    }

    return {
      focused: focused,
      widget: widget
    };
  };

  var moveUpCommand = {
    exec: function exec(editor, data) {
      var _findElements = findElements(editor),
          focused = _findElements.focused,
          widget = _findElements.widget;

      var previous = focused.getPrevious();

      if (previous) {
        if (widget) {
          widget.moveBefore(previous);
        } else {
          focused.insertBefore(previous);
          editor.eZ.moveCaretToElement(editor, editor.eZ.findCaretElement(focused));
          fireEditorInteraction(editor, 'eZMoveUpDone', focused);
        }
      }
    }
  };
  var moveDownCommand = {
    exec: function exec(editor, data) {
      var _findElements2 = findElements(editor),
          focused = _findElements2.focused,
          widget = _findElements2.widget;

      var next = focused.getNext();

      if (next) {
        if (widget) {
          widget.moveAfter(next);
        } else {
          focused.insertAfter(next);
          editor.eZ.moveCaretToElement(editor, editor.eZ.findCaretElement(focused));
          fireEditorInteraction(editor, 'eZMoveDownDone', focused);
        }
      }
    }
  };
  /**
   * CKEditor plugin providing the eZMoveUp and eZMoveDown commands. These
   * commands allow to move the element having the focus in the editor.
   *
   * @class ezmoveelement
   * @namespace CKEDITOR.plugins
   * @constructor
   */

  CKEDITOR.plugins.add('ezmoveelement', {
    requires: ['ezcaret'],
    init: function init(editor) {
      editor.addCommand('eZMoveUp', moveUpCommand);
      editor.addCommand('eZMoveDown', moveDownCommand);
    }
  });
})(window);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/plugins/ez-remove-block.js":
/*!*********************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/plugins/ez-remove-block.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (global) {
  if (CKEDITOR.plugins.get('ezremoveblock')) {
    return;
  }

  var removeBlockCommand = {
    /**
     * Moves the caret to the element
     *
     * @method moveCaretToElement
     * @param {CKEDITOR.editor} editor
     * @param {CKEDITOR.dom.element} element
     */
    moveCaretToElement: function moveCaretToElement(editor, element) {
      var caretElement = editor.eZ.findCaretElement(element);
      editor.eZ.moveCaretToElement(editor, caretElement);
      this.fireEditorInteraction(editor, caretElement);
    },

    /**
     * Fires the editorInteraction event so that AlloyEditor's UI is updated
     * for the newly focused element
     *
     * @method fireEditorInteraction
     * @param {CKEDITOR.editor} editor
     * @param {CKEDITOR.dom.element} removedElement
     * @param {CKEDITOR.dom.element} newFocus
     */
    fireEditorInteraction: function fireEditorInteraction(editor, newFocus) {
      var event = {
        editor: editor,
        target: newFocus.$,
        name: 'eZRemoveBlockDone'
      };
      editor.fire('editorInteraction', {
        nativeEvent: event,
        selectionData: editor.getSelectionData()
      });
    },

    /**
     * Changes the focused element in the editor to the given newFocus
     * element
     *
     * @param {CKEDITOR.editor} editor
     * @param {CKEDITOR.dom.element} newFocus
     * @protected
     * @method changeFocus
     */
    changeFocus: function changeFocus(editor, newFocus) {
      var widget = editor.widgets.getByElement(newFocus);

      if (widget) {
        widget.focus();
      } else {
        this.moveCaretToElement(editor, newFocus);
      }
    },
    getElementToRemove: function getElementToRemove(editor) {
      var path = editor.elementPath();
      var toRemove = editor.widgets.focused ? editor.widgets.focused.wrapper : path.block;

      if (!toRemove) {
        toRemove = path.elements.find(function (element) {
          return element.$.dataset.ezelement === 'eztemplateinline';
        });
      }

      return toRemove.is('li') ? toRemove.getParent() : toRemove;
    },
    getElementToFocus: function getElementToFocus(elementToRemove) {
      var elementToFocus = elementToRemove.getNext();

      if (!elementToFocus || elementToFocus.type === CKEDITOR.NODE_TEXT || elementToFocus.hasAttribute('data-cke-temp')) {
        elementToFocus = elementToRemove.getPrevious();
      }

      if (elementToFocus && elementToFocus.type === CKEDITOR.NODE_TEXT) {
        elementToFocus = elementToFocus.getParent();
      }

      if (!elementToFocus) {
        elementToFocus = elementToRemove.getParent();
      }

      return elementToFocus;
    },
    exec: function exec(editor) {
      var elementToRemove = this.getElementToRemove(editor);
      var elementToFocus = this.getElementToFocus(elementToRemove);
      elementToRemove.remove();

      if (elementToFocus) {
        if (elementToFocus.hasClass('ez-data-source__richtext')) {
          elementToFocus = new CKEDITOR.dom.element('p');
          editor.insertElement(elementToFocus);
        }

        this.changeFocus(editor, elementToFocus);
      }
    }
  };
  /**
   * CKEditor plugin providing the eZRemoveBlock command. This command
   * allows to remove the block element holding the caret or the focused
   * widget
   *
   * @class ezremoveblock
   * @namespace CKEDITOR.plugins
   * @constructor
   */

  CKEDITOR.plugins.add('ezremoveblock', {
    requires: ['widget', 'ezcaret'],
    init: function init(editor) {
      return editor.addCommand('eZRemoveBlock', removeBlockCommand);
    }
  });
})(window);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/base-buttons.js":
/*!**************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/base-buttons.js ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EzConfigButtonsBase; });
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! alloyeditor */ "alloyeditor");
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(alloyeditor__WEBPACK_IMPORTED_MODULE_0__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var EzConfigButtonsBase = /*#__PURE__*/function () {
  function EzConfigButtonsBase() {
    _classCallCheck(this, EzConfigButtonsBase);
  }

  _createClass(EzConfigButtonsBase, [{
    key: "getButtons",
    value: function getButtons(config) {
      var toolbarConfig = window.eZ.richText.alloyEditor.toolbars[this.name];

      if (!toolbarConfig) {
        return [];
      }

      var buttons = _toConsumableArray(toolbarConfig.buttons);

      var attributesEditIndex = buttons.indexOf('ezattributesedit');
      var stylesIndex = buttons.indexOf('ezstyles');

      if (attributesEditIndex > -1) {
        buttons[attributesEditIndex] = this.getEditAttributesButton(config);
      }

      if (stylesIndex > -1) {
        buttons[stylesIndex] = this.getStyles(config.customStyles);
      }

      return buttons;
    }
  }, {
    key: "getStyles",
    value: function getStyles() {
      var customStyles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var headingLabel = Translator.trans(
      /*@Desc("Heading")*/
      'toolbar_config_base.heading_label', {}, 'alloy_editor');
      var paragraphLabel = Translator.trans(
      /*@Desc("Paragraph")*/
      'toolbar_config_base.paragraph_label', {}, 'alloy_editor');
      var formattedLabel = Translator.trans(
      /*@Desc("Formatted")*/
      'toolbar_config_base.formatted_label', {}, 'alloy_editor');
      return {
        name: 'styles',
        cfg: {
          showRemoveStylesItem: false,
          styles: [{
            name: "".concat(headingLabel, " 1"),
            style: {
              element: 'h1'
            }
          }, {
            name: "".concat(headingLabel, " 2"),
            style: {
              element: 'h2'
            }
          }, {
            name: "".concat(headingLabel, " 3"),
            style: {
              element: 'h3'
            }
          }, {
            name: "".concat(headingLabel, " 4"),
            style: {
              element: 'h4'
            }
          }, {
            name: "".concat(headingLabel, " 5"),
            style: {
              element: 'h5'
            }
          }, {
            name: "".concat(headingLabel, " 6"),
            style: {
              element: 'h6'
            }
          }, {
            name: paragraphLabel,
            style: {
              element: 'p'
            }
          }, {
            name: formattedLabel,
            style: {
              element: 'pre'
            }
          }].concat(_toConsumableArray(customStyles))
        }
      };
    }
  }, {
    key: "getEditAttributesButton",
    value: function getEditAttributesButton(config) {
      return config.attributes[this.name] || config.classes[this.name] ? "".concat(this.name, "edit") : '';
    }
  }]);

  return EzConfigButtonsBase;
}();



/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/base-fixed.js":
/*!************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/base-fixed.js ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EzConfigFixedBase; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/base.js");
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


var TOOLBAR_OFFSET = 10;
var isScrollEventAdded = false;
var originalComponentWillUnmount = null;

var EzConfigFixedBase = /*#__PURE__*/function (_EzConfigBase) {
  _inherits(EzConfigFixedBase, _EzConfigBase);

  var _super = _createSuper(EzConfigFixedBase);

  function EzConfigFixedBase() {
    _classCallCheck(this, EzConfigFixedBase);

    return _super.apply(this, arguments);
  }

  _createClass(EzConfigFixedBase, [{
    key: "getArrowBoxClasses",
    value: function getArrowBoxClasses() {
      return 'ae-toolbar-floating ae-arrow-box ez-ae-arrow-box-left';
    }
  }, {
    key: "setPosition",
    value: function setPosition(payload) {
      var editor = payload.editor.get('nativeEditor');
      var block = EzConfigFixedBase.getBlockElement(payload);

      if (!isScrollEventAdded) {
        originalComponentWillUnmount = this.componentWillUnmount.bind(this);
        this.componentWillUnmount = EzConfigFixedBase.componentWillUnmount.bind(this);
        isScrollEventAdded = true;
        window.addEventListener('scroll', this._updatePosition, false);
      }

      return EzConfigFixedBase.setPositionFor.call(this, block, editor, EzConfigFixedBase.getTopPosition.bind(this));
    }
  }], [{
    key: "getTopPosition",
    value: function getTopPosition(block, editor) {
      var toolbar = document.querySelector('.ae-toolbar-floating');
      var editorRect = editor.element.getClientRect();
      var toolbarHeight = toolbar ? toolbar.getBoundingClientRect().height : 0;
      var shouldBeFixed = editorRect.top - toolbarHeight - 2 * TOOLBAR_OFFSET < 0;
      var header = document.querySelector('.ez-edit-header__content-type-name');
      var top = shouldBeFixed ? TOOLBAR_OFFSET + (header ? header.offsetHeight : 0) : editorRect.top + editor.element.getWindow().getScrollPosition().y - toolbarHeight - TOOLBAR_OFFSET;

      if (toolbar) {
        toolbar.classList.toggle('ae-toolbar-floating--fixed', shouldBeFixed);
      }

      return top;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (typeof originalComponentWillUnmount === 'function') {
        originalComponentWillUnmount();
      }

      isScrollEventAdded = false;
      window.removeEventListener('scroll', this._updatePosition, false);
    }
  }]);

  return EzConfigFixedBase;
}(_base__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/base-list.js":
/*!***********************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/base-list.js ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EzListBaseConfig; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/base.js");
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



var EzListBaseConfig = /*#__PURE__*/function (_EzConfigBase) {
  _inherits(EzListBaseConfig, _EzConfigBase);

  var _super = _createSuper(EzListBaseConfig);

  function EzListBaseConfig(config) {
    var _this;

    _classCallCheck(this, EzListBaseConfig);

    _this = _super.call(this, config);
    _this.name = _this.getConfigName();
    _this.buttons = _this.getButtons(config);
    return _this;
  }

  _createClass(EzListBaseConfig, [{
    key: "getConfigName",
    value: function getConfigName() {
      return '';
    }
  }]);

  return EzListBaseConfig;
}(_base__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/base-table.js":
/*!************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/base-table.js ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EzConfigTableBase; });
/* harmony import */ var _base_fixed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-fixed */ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/base-fixed.js");
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



var EzConfigTableBase = /*#__PURE__*/function (_EzConfigFixedBase) {
  _inherits(EzConfigTableBase, _EzConfigFixedBase);

  var _super = _createSuper(EzConfigTableBase);

  function EzConfigTableBase(config) {
    var _this;

    _classCallCheck(this, EzConfigTableBase);

    _this = _super.call(this, config);
    _this.name = _this.getConfigName();
    _this.buttons = _this.getButtons(config);
    return _this;
  }

  _createClass(EzConfigTableBase, [{
    key: "getConfigName",
    value: function getConfigName() {
      return '';
    }
  }, {
    key: "getArrowBoxClasses",
    value: function getArrowBoxClasses() {
      return 'ae-toolbar-floating';
    }
  }]);

  return EzConfigTableBase;
}(_base_fixed__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/base.js":
/*!******************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/base.js ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EzConfigBase; });
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _base_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base-buttons */ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/base-buttons.js");
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




var EzConfigBase = /*#__PURE__*/function (_EzConfigButtonsBase) {
  _inherits(EzConfigBase, _EzConfigButtonsBase);

  var _super = _createSuper(EzConfigBase);

  function EzConfigBase() {
    _classCallCheck(this, EzConfigBase);

    return _super.apply(this, arguments);
  }

  _createClass(EzConfigBase, [{
    key: "getArrowBoxClasses",
    value:
    /**
     * Returns the arrow box classes for the toolbar. The toolbar is
     * always positioned above its related block and has a special class to
     * move its tail on the left.
     *
     * @method getArrowBoxClasses
     * @return {String}
     */
    function getArrowBoxClasses() {
      return 'ae-arrow-box ae-arrow-box-bottom ez-ae-arrow-box-left';
    }
    /**
     * Sets the position of the toolbar. It overrides the default styles
     * toolbar positioning to position the toolbar just above its related
     * block element. The related block element is the block indicated in
     * CKEditor's path or the target of the editorEvent event.
     *
     * @method setPosition
     * @param {Object} payload
     * @param {AlloyEditor.Core} payload.editor
     * @param {Object} payload.selectionData
     * @param {Object} payload.editorEvent
     * @return {Boolean} true if the method was able to position the
     * toolbar
     */

  }, {
    key: "setPosition",
    value: function setPosition(payload) {
      var editor = payload.editor.get('nativeEditor');
      var block = EzConfigBase.getBlockElement(payload);
      return EzConfigBase.setPositionFor.call(this, block, editor, EzConfigBase.getTopPosition.bind(this));
    }
  }], [{
    key: "outlineTotalWidth",
    value: function outlineTotalWidth(block) {
      var outlineOffset = parseInt(block.getComputedStyle('outline-offset'), 10);
      var outlineWidth = parseInt(block.getComputedStyle('outline-width'), 10);

      if (isNaN(outlineOffset)) {
        // Edge does not support offset-offset yet
        // 1 comes from the stylesheet, see theme/alloyeditor/content.css
        outlineOffset = 1;
      }

      return outlineOffset + outlineWidth;
    }
  }, {
    key: "isEmpty",
    value: function isEmpty(block) {
      var nodes = _toConsumableArray(block.$.childNodes);

      var count = nodes.length;
      var areAllTextNodesEmpty = !!count && nodes.every(function (node) {
        return node.nodeName === '#text' && !node.data.replace(/\u200B/g, '');
      });
      var isOnlyBreakLine = count === 1 && block.$.childNodes.item(0).localName === 'br';
      return count === 0 || isOnlyBreakLine || areAllTextNodesEmpty;
    }
  }, {
    key: "setPositionFor",
    value: function setPositionFor(block, editor, getTopPosition) {
      var blockRect = block.getClientRect();
      var outlineWidth = EzConfigBase.outlineTotalWidth(block);
      var empty = EzConfigBase.isEmpty(block);
      var positionReference = block;
      var left = 0;

      if (editor.widgets.getByElement(block)) {
        left = blockRect.left;
      } else {
        if (empty) {
          block.appendHtml('<span>&nbsp;</span>');
          positionReference = block.findOne('span');
        }

        var range = document.createRange();
        var scrollLeft = parseInt(block.$.scrollLeft, 10);
        range.selectNodeContents(positionReference.$);
        left = range.getBoundingClientRect().left + scrollLeft;

        if (empty) {
          positionReference.remove();
        }
      }

      var topPosition = getTopPosition(block, editor);
      var domElement = new CKEDITOR.dom.element(react_dom__WEBPACK_IMPORTED_MODULE_0___default.a.findDOMNode(this));
      domElement.addClass('ae-toolbar-transition');
      domElement.setStyles({
        left: left - outlineWidth + 'px',
        top: topPosition + 'px'
      });
      return true;
    }
  }, {
    key: "getTopPosition",
    value: function getTopPosition(block, editor) {
      var blockRect = block.getClientRect();
      var outlineWidth = EzConfigBase.outlineTotalWidth(block);
      var xy = this.getWidgetXYPoint(blockRect.left - outlineWidth, blockRect.top + block.getWindow().getScrollPosition().y - outlineWidth, CKEDITOR.SELECTION_BOTTOM_TO_TOP);
      return xy[1];
    }
  }, {
    key: "getBlockElement",
    value: function getBlockElement(payload) {
      var editor = payload.editor.get('nativeEditor');
      var nativeEvent = payload.editorEvent.data.nativeEvent;
      var targetElement = nativeEvent ? new CKEDITOR.dom.element(payload.editorEvent.data.nativeEvent.target) : null;
      var isWidgetElement = targetElement ? editor.widgets.getByElement(targetElement) : false;
      var path = editor.elementPath();
      var block = path.block;

      if (isWidgetElement) {
        var inlineCustomTag = path.elements.find(function (element) {
          return element.$.dataset.ezelement === 'eztemplateinline';
        });
        block = inlineCustomTag || targetElement;
      }

      if (!block) {
        block = path.lastElement;
      }

      if (block.is('li')) {
        block = block.getParent();
      }

      if (block.is('td') || block.is('th')) {
        var _iterator = _createForOfIteratorHelper(block.getParents()),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var parent = _step.value;

            if (parent.getName() === 'table') {
              block = parent;
              break;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      return block;
    }
  }]);

  return EzConfigBase;
}(_base_buttons__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-custom-style.js":
/*!*****************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-custom-style.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EzCustomStyleConfig; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/base.js");
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



var EzCustomStyleConfig = /*#__PURE__*/function (_EzConfigBase) {
  _inherits(EzCustomStyleConfig, _EzConfigBase);

  var _super = _createSuper(EzCustomStyleConfig);

  function EzCustomStyleConfig(config) {
    var _this;

    _classCallCheck(this, EzCustomStyleConfig);

    _this = _super.call(this, config);
    _this.name = 'custom_style';
    _this.buttons = _this.getButtons(config);
    return _this;
  }
  /**
   * Tests whether the `custom style` toolbar should be visible. It is
   * visible when an existing custom style gets the focus.
   *
   * @method test
   * @param {Object} payload
   * @param {AlloyEditor.Core} payload.editor
   * @param {Object} payload.data
   * @param {Object} payload.data.selectionData
   * @param {Event} payload.data.nativeEvent
   * @return {Boolean}
   */


  _createClass(EzCustomStyleConfig, [{
    key: "test",
    value: function test(payload) {
      var nativeEditor = payload.editor.get('nativeEditor');
      var path = nativeEditor.elementPath();
      var isInTable = path && path.contains(function (element) {
        return element.is('table');
      });
      return nativeEditor.isSelectionEmpty() && path && path.contains(function (element) {
        var ezElement = element.getAttribute('data-ezelement');
        return (ezElement === 'eztemplate' || ezElement === 'eztemplateinline') && element.getAttribute('data-eztype') === 'style' && !isInTable;
      });
    }
  }]);

  return EzCustomStyleConfig;
}(_base__WEBPACK_IMPORTED_MODULE_0__["default"]);


var eZ = window.eZ = window.eZ || {};
eZ.ezAlloyEditor = eZ.ezAlloyEditor || {};
eZ.ezAlloyEditor.ezCustomStyleConfig = EzCustomStyleConfig;

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-custom-tag.js":
/*!***************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-custom-tag.js ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EzCustomTagConfig; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/base.js");
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



var EzCustomTagConfig = /*#__PURE__*/function (_EzConfigBase) {
  _inherits(EzCustomTagConfig, _EzConfigBase);

  var _super = _createSuper(EzCustomTagConfig);

  function EzCustomTagConfig(config) {
    var _this;

    _classCallCheck(this, EzCustomTagConfig);

    _this = _super.call(this, config);
    _this.name = config.name;

    var buttons = _this.getButtons(config);

    var customTagEditIndex = buttons.indexOf('ezcustomtagedit');

    if (customTagEditIndex > -1) {
      buttons[customTagEditIndex] = !!config.alloyEditor.attributes ? "".concat(config.name, "edit") : '';
    }

    _this.buttons = buttons;
    _this.test = _this.test.bind(_assertThisInitialized(_this));
    return _this;
  }
  /**
   * Tests whether the `embed` toolbar should be visible, it is visible
   * when an ezembed widget gets the focus.
   *
   * @method test
   * @param {Object} payload
   * @param {AlloyEditor.Core} payload.editor
   * @param {Object} payload.data
   * @param {Object} payload.data.selectionData
   * @param {Event} payload.data.nativeEvent
   * @return {Boolean}
   */


  _createClass(EzCustomTagConfig, [{
    key: "test",
    value: function test(payload) {
      var element = payload.data.selectionData.element;
      return !!(element && element.$.dataset.ezname == this.name);
    }
  }]);

  return EzCustomTagConfig;
}(_base__WEBPACK_IMPORTED_MODULE_0__["default"]);


var eZ = window.eZ = window.eZ || {};
eZ.ezAlloyEditor = eZ.ezAlloyEditor || {};
eZ.ezAlloyEditor.ezCustomTagConfig = EzCustomTagConfig;

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-embed-inline.js":
/*!*****************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-embed-inline.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EzEmbedInlineConfig; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/base.js");
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


var EMBED_INLINE_NAME = 'ezembedinline';

var EzEmbedInlineConfig = /*#__PURE__*/function (_EzConfigBase) {
  _inherits(EzEmbedInlineConfig, _EzConfigBase);

  var _super = _createSuper(EzEmbedInlineConfig);

  function EzEmbedInlineConfig(config) {
    var _this;

    _classCallCheck(this, EzEmbedInlineConfig);

    _this = _super.call(this, config);
    _this.name = 'embedinline';
    _this.buttons = _this.getButtons(config);
    return _this;
  }
  /**
   * Tests whether the `embedinline` toolbar should be visible, it is visible
   * when an ezembed widget gets the focus.
   *
   * @method test
   * @param {Object} payload
   * @param {AlloyEditor.Core} payload.editor
   * @param {Object} payload.data
   * @param {Object} payload.data.selectionData
   * @param {Event} payload.data.nativeEvent
   * @return {Boolean}
   */


  _createClass(EzEmbedInlineConfig, [{
    key: "test",
    value: function test(payload) {
      var nativeEvent = payload.data.nativeEvent;

      if (!nativeEvent) {
        return false;
      }

      var target = new CKEDITOR.dom.element(nativeEvent.target);
      var widget = payload.editor.get('nativeEditor').widgets.getByElement(target);
      return !!(widget && widget.name === EMBED_INLINE_NAME);
    }
  }]);

  return EzEmbedInlineConfig;
}(_base__WEBPACK_IMPORTED_MODULE_0__["default"]);


var eZ = window.eZ = window.eZ || {};
eZ.ezAlloyEditor = eZ.ezAlloyEditor || {};
eZ.ezAlloyEditor.ezEmbedInlineConfig = EzEmbedInlineConfig;

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-embed.js":
/*!**********************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-embed.js ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EzEmbedConfig; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/base.js");
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



var EzEmbedConfig = /*#__PURE__*/function (_EzConfigBase) {
  _inherits(EzEmbedConfig, _EzConfigBase);

  var _super = _createSuper(EzEmbedConfig);

  function EzEmbedConfig(config) {
    var _this;

    _classCallCheck(this, EzEmbedConfig);

    _this = _super.call(this, config);
    _this.name = 'embed';
    _this.buttons = _this.getButtons(config);
    return _this;
  }
  /**
   * Tests whether the `embed` toolbar should be visible, it is visible
   * when an ezembed widget gets the focus.
   *
   * @method test
   * @param {Object} payload
   * @param {AlloyEditor.Core} payload.editor
   * @param {Object} payload.data
   * @param {Object} payload.data.selectionData
   * @param {Event} payload.data.nativeEvent
   * @return {Boolean}
   */


  _createClass(EzEmbedConfig, [{
    key: "test",
    value: function test(payload) {
      var nativeEvent = payload.data.nativeEvent;

      if (!nativeEvent) {
        return false;
      }

      var target = new CKEDITOR.dom.element(nativeEvent.target);
      var widget = payload.editor.get('nativeEditor').widgets.getByElement(target);
      return !!(widget && widget.name === 'ezembed');
    }
  }]);

  return EzEmbedConfig;
}(_base__WEBPACK_IMPORTED_MODULE_0__["default"]);


var eZ = window.eZ = window.eZ || {};
eZ.ezAlloyEditor = eZ.ezAlloyEditor || {};
eZ.ezAlloyEditor.ezEmbedConfig = EzEmbedConfig;

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-formatted.js":
/*!**************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-formatted.js ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EzFormattedConfig; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/base.js");
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



var EzFormattedConfig = /*#__PURE__*/function (_EzConfigBase) {
  _inherits(EzFormattedConfig, _EzConfigBase);

  var _super = _createSuper(EzFormattedConfig);

  function EzFormattedConfig(config) {
    var _this;

    _classCallCheck(this, EzFormattedConfig);

    _this = _super.call(this, config);
    _this.name = 'formatted';
    _this.buttons = _this.getButtons(config);
    return _this;
  }
  /**
   * Tests whether the `pre` toolbar should be visible. It is
   * visible when the selection is empty and when the caret is inside a
   * formatted tag (<pre>).
   *
   * @method test
   * @param {Object} payload
   * @param {AlloyEditor.Core} payload.editor
   * @param {Object} payload.data
   * @param {Object} payload.data.selectionData
   * @param {Event} payload.data.nativeEvent
   * @return {Boolean}
   */


  _createClass(EzFormattedConfig, [{
    key: "test",
    value: function test(payload) {
      var nativeEditor = payload.editor.get('nativeEditor');
      var path = nativeEditor.elementPath();
      return nativeEditor.isSelectionEmpty() && path && path.contains('pre');
    }
  }]);

  return EzFormattedConfig;
}(_base__WEBPACK_IMPORTED_MODULE_0__["default"]);


var eZ = window.eZ = window.eZ || {};
eZ.ezAlloyEditor = eZ.ezAlloyEditor || {};
eZ.ezAlloyEditor.ezFormattedConfig = EzFormattedConfig;

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-heading.js":
/*!************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-heading.js ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EzHeadingConfig; });
/* harmony import */ var _base_fixed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-fixed */ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/base-fixed.js");
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



var EzHeadingConfig = /*#__PURE__*/function (_EzConfigFixedBase) {
  _inherits(EzHeadingConfig, _EzConfigFixedBase);

  var _super = _createSuper(EzHeadingConfig);

  function EzHeadingConfig(config) {
    var _this;

    _classCallCheck(this, EzHeadingConfig);

    _this = _super.call(this, config);
    _this.name = 'heading';
    _this.buttons = _this.getButtons(config);
    return _this;
  }
  /**
   * Tests whether the `paragraph` toolbar should be visible. It is
   * visible when the selection is empty and when the caret is inside a
   * paragraph.
   *
   * @method test
   * @param {Object} payload
   * @param {AlloyEditor.Core} payload.editor
   * @param {Object} payload.data
   * @param {Object} payload.data.selectionData
   * @param {Event} payload.data.nativeEvent
   * @return {Boolean}
   */


  _createClass(EzHeadingConfig, [{
    key: "test",
    value: function test(payload) {
      var nativeEditor = payload.editor.get('nativeEditor');
      var path = nativeEditor.elementPath();
      return nativeEditor.isSelectionEmpty() && path && path.contains(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']);
    }
  }]);

  return EzHeadingConfig;
}(_base_fixed__WEBPACK_IMPORTED_MODULE_0__["default"]);


var eZ = window.eZ = window.eZ || {};
eZ.ezAlloyEditor = eZ.ezAlloyEditor || {};
eZ.ezAlloyEditor.ezHeadingConfig = EzHeadingConfig;

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-image-link.js":
/*!***************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-image-link.js ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EzEmbedImageLinkConfig; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/base.js");
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



var EzEmbedImageLinkConfig = /*#__PURE__*/function (_EzConfigBase) {
  _inherits(EzEmbedImageLinkConfig, _EzConfigBase);

  var _super = _createSuper(EzEmbedImageLinkConfig);

  function EzEmbedImageLinkConfig(config) {
    var _this;

    _classCallCheck(this, EzEmbedImageLinkConfig);

    _this = _super.call(this, config);
    _this.name = 'embedimagelink';
    _this.buttons = _this.getButtons(config);
    return _this;
  }
  /**
   * Tests whether the `image` toolbar should be visible, it is visible
   * when an ezembed widget containing an <img> is visible.
   *
   * @method test
   * @param {Object} payload
   * @param {AlloyEditor.Core} payload.editor
   * @param {Object} payload.data
   * @param {Object} payload.data.selectionData
   * @param {Event} payload.data.nativeEvent
   * @return {Boolean}
   */


  _createClass(EzEmbedImageLinkConfig, [{
    key: "test",
    value: function test(payload) {
      var nativeEvent = payload.data.nativeEvent;

      if (!nativeEvent) {
        return false;
      }

      var target = new CKEDITOR.dom.element(nativeEvent.target);
      var widget = payload.editor.get('nativeEditor').widgets.getByElement(target);
      return !!(widget && widget.name === 'ezembed' && widget.isImage() && widget.isEditingLink());
    }
  }]);

  return EzEmbedImageLinkConfig;
}(_base__WEBPACK_IMPORTED_MODULE_0__["default"]);


var eZ = window.eZ = window.eZ || {};
eZ.ezAlloyEditor = eZ.ezAlloyEditor || {};
eZ.ezAlloyEditor.ezEmbedImageLinkConfig = EzEmbedImageLinkConfig;

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-image.js":
/*!**********************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-image.js ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EzEmbedImageConfig; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/base.js");
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



var EzEmbedImageConfig = /*#__PURE__*/function (_EzConfigBase) {
  _inherits(EzEmbedImageConfig, _EzConfigBase);

  var _super = _createSuper(EzEmbedImageConfig);

  function EzEmbedImageConfig(config) {
    var _this;

    _classCallCheck(this, EzEmbedImageConfig);

    _this = _super.call(this, config);
    _this.name = 'embedimage';
    _this.buttons = _this.getButtons(config);
    return _this;
  }
  /**
   * Tests whether the `image` toolbar should be visible, it is visible
   * when an ezembed widget containing an <img> is visible.
   *
   * @method test
   * @param {Object} payload
   * @param {AlloyEditor.Core} payload.editor
   * @param {Object} payload.data
   * @param {Object} payload.data.selectionData
   * @param {Event} payload.data.nativeEvent
   * @return {Boolean}
   */


  _createClass(EzEmbedImageConfig, [{
    key: "test",
    value: function test(payload) {
      var nativeEvent = payload.data.nativeEvent;

      if (!nativeEvent) {
        return false;
      }

      var target = new CKEDITOR.dom.element(nativeEvent.target);
      var widget = payload.editor.get('nativeEditor').widgets.getByElement(target);
      return !!(widget && widget.name === 'ezembed' && widget.isImage());
    }
  }]);

  return EzEmbedImageConfig;
}(_base__WEBPACK_IMPORTED_MODULE_0__["default"]);


var eZ = window.eZ = window.eZ || {};
eZ.ezAlloyEditor = eZ.ezAlloyEditor || {};
eZ.ezAlloyEditor.ezEmbedImageConfig = EzEmbedImageConfig;

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-inline-custom-tag.js":
/*!**********************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-inline-custom-tag.js ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EzInlineCustomTagConfig; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/base.js");
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



var EzInlineCustomTagConfig = /*#__PURE__*/function (_EzConfigBase) {
  _inherits(EzInlineCustomTagConfig, _EzConfigBase);

  var _super = _createSuper(EzInlineCustomTagConfig);

  function EzInlineCustomTagConfig(config) {
    var _this;

    _classCallCheck(this, EzInlineCustomTagConfig);

    _this = _super.call(this, config);
    _this.name = config.name;

    var buttons = _this.getButtons(config);

    var customTagEditIndex = buttons.indexOf('ezcustomtagedit');

    if (customTagEditIndex > -1) {
      buttons[customTagEditIndex] = !!config.alloyEditor.attributes ? "".concat(config.name, "edit") : '';
    }

    _this.buttons = buttons;
    _this.test = _this.test.bind(_assertThisInitialized(_this));
    return _this;
  }
  /**
   * Tests whether the `inline custom tag` toolbar should be visible, it is visible
   * when an ezinlinecustomtag widget gets the focus.
   *
   * @method test
   * @param {Object} payload
   * @param {AlloyEditor.Core} payload.editor
   * @param {Object} payload.data
   * @param {Object} payload.data.selectionData
   * @param {Event} payload.data.nativeEvent
   * @return {Boolean}
   */


  _createClass(EzInlineCustomTagConfig, [{
    key: "test",
    value: function test(payload) {
      var _this2 = this;

      var element = payload.data.selectionData.element;
      var path = payload.editor.get('nativeEditor').elementPath();
      var isInlineCustomTag = path.contains(function (element) {
        return element.$.dataset.ezelement === 'eztemplateinline' && element.$.dataset.ezname === _this2.name;
      });
      return !!(element && element.$.dataset.ezname === this.name || isInlineCustomTag);
    }
  }]);

  return EzInlineCustomTagConfig;
}(_base__WEBPACK_IMPORTED_MODULE_0__["default"]);


var eZ = window.eZ = window.eZ || {};
eZ.ezAlloyEditor = eZ.ezAlloyEditor || {};
eZ.ezAlloyEditor.ezInlineCustomTagConfig = EzInlineCustomTagConfig;

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-link.js":
/*!*********************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-link.js ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EzLinkConfig; });
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! alloyeditor */ "alloyeditor");
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(alloyeditor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _base_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base-buttons */ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/base-buttons.js");
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




var EzLinkConfig = /*#__PURE__*/function (_EzConfigButtonsBase) {
  _inherits(EzLinkConfig, _EzConfigButtonsBase);

  var _super = _createSuper(EzLinkConfig);

  function EzLinkConfig(config) {
    var _this;

    _classCallCheck(this, EzLinkConfig);

    _this = _super.call(this, config);
    _this.name = 'link';
    _this.buttons = _this.getButtons(config);
    _this.test = alloyeditor__WEBPACK_IMPORTED_MODULE_0___default.a.SelectionTest.link;
    return _this;
  }
  /**
   * Returns the arrow box classes for the toolbar. The toolbar is
   * always positioned above its related block and has a special class to
   * move its tail on the left.
   *
   * @method getArrowBoxClasses
   * @return {String}
   */


  _createClass(EzLinkConfig, [{
    key: "getArrowBoxClasses",
    value: function getArrowBoxClasses() {
      return 'ae-arrow-box ae-arrow-box-bottom';
    }
    /**
     * Sets the position of the toolbar. It overrides the default styles
     * toolbar positioning to position the toolbar just above its related
     * block element. The related block element is the block indicated in
     * CKEditor's path or the target of the editorEvent event.
     *
     * @method setPosition
     * @param {Object} payload
     * @param {AlloyEditor.Core} payload.editor
     * @param {Object} payload.selectionData
     * @param {Object} payload.editorEvent
     * @return {Boolean} true if the method was able to position the
     * toolbar
     */

  }, {
    key: "setPosition",
    value: function setPosition(payload) {
      var domElement = new CKEDITOR.dom.element(ReactDOM.findDOMNode(this));
      var region = payload.selectionData.region;
      var xy = this.getWidgetXYPoint(region.left, region.top, CKEDITOR.SELECTION_BOTTOM_TO_TOP);
      domElement.addClass('ae-toolbar-transition');
      domElement.setStyles({
        left: xy[0] + 'px',
        top: xy[1] + 'px'
      });
      return true;
    }
  }]);

  return EzLinkConfig;
}(_base_buttons__WEBPACK_IMPORTED_MODULE_1__["default"]);


var eZ = window.eZ = window.eZ || {};
eZ.ezAlloyEditor = eZ.ezAlloyEditor || {};
eZ.ezAlloyEditor.ezLinkConfig = EzLinkConfig;

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-list-item.js":
/*!**************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-list-item.js ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EzListItemConfig; });
/* harmony import */ var _base_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-list */ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/base-list.js");
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



var EzListItemConfig = /*#__PURE__*/function (_EzConfigListBase) {
  _inherits(EzListItemConfig, _EzConfigListBase);

  var _super = _createSuper(EzListItemConfig);

  function EzListItemConfig() {
    _classCallCheck(this, EzListItemConfig);

    return _super.apply(this, arguments);
  }

  _createClass(EzListItemConfig, [{
    key: "getConfigName",
    value: function getConfigName() {
      return 'li';
    }
  }, {
    key: "test",
    value: function test(payload) {
      var nativeEditor = payload.editor.get('nativeEditor');
      var path = nativeEditor.elementPath();
      return path && path.lastElement.is('li');
    }
  }]);

  return EzListItemConfig;
}(_base_list__WEBPACK_IMPORTED_MODULE_0__["default"]);


eZ.addConfig('ezAlloyEditor.ezListItemConfig', EzListItemConfig);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-list-ordered.js":
/*!*****************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-list-ordered.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EzListOrderedConfig; });
/* harmony import */ var _base_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-list */ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/base-list.js");
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



var EzListOrderedConfig = /*#__PURE__*/function (_EzConfigListBase) {
  _inherits(EzListOrderedConfig, _EzConfigListBase);

  var _super = _createSuper(EzListOrderedConfig);

  function EzListOrderedConfig() {
    _classCallCheck(this, EzListOrderedConfig);

    return _super.apply(this, arguments);
  }

  _createClass(EzListOrderedConfig, [{
    key: "getConfigName",
    value: function getConfigName() {
      return 'ol';
    }
  }, {
    key: "test",
    value: function test(payload) {
      var nativeEditor = payload.editor.get('nativeEditor');
      var path = nativeEditor.elementPath();
      return path && path.lastElement.is('ol');
    }
  }]);

  return EzListOrderedConfig;
}(_base_list__WEBPACK_IMPORTED_MODULE_0__["default"]);


eZ.addConfig('ezAlloyEditor.ezListOrderedConfig', EzListOrderedConfig);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-list-unordered.js":
/*!*******************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-list-unordered.js ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EzListUnorderedConfig; });
/* harmony import */ var _base_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-list */ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/base-list.js");
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



var EzListUnorderedConfig = /*#__PURE__*/function (_EzConfigListBase) {
  _inherits(EzListUnorderedConfig, _EzConfigListBase);

  var _super = _createSuper(EzListUnorderedConfig);

  function EzListUnorderedConfig() {
    _classCallCheck(this, EzListUnorderedConfig);

    return _super.apply(this, arguments);
  }

  _createClass(EzListUnorderedConfig, [{
    key: "getConfigName",
    value: function getConfigName() {
      return 'ul';
    }
  }, {
    key: "test",
    value: function test(payload) {
      var nativeEditor = payload.editor.get('nativeEditor');
      var path = nativeEditor.elementPath();
      return path && path.lastElement.is('ul');
    }
  }]);

  return EzListUnorderedConfig;
}(_base_list__WEBPACK_IMPORTED_MODULE_0__["default"]);


eZ.addConfig('ezAlloyEditor.ezListUnorderedConfig', EzListUnorderedConfig);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-paragraph.js":
/*!**************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-paragraph.js ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EzParagraphConfig; });
/* harmony import */ var _base_fixed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-fixed */ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/base-fixed.js");
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



var EzParagraphConfig = /*#__PURE__*/function (_EzConfigFixedBase) {
  _inherits(EzParagraphConfig, _EzConfigFixedBase);

  var _super = _createSuper(EzParagraphConfig);

  function EzParagraphConfig(config) {
    var _this;

    _classCallCheck(this, EzParagraphConfig);

    _this = _super.call(this, config);
    _this.name = 'paragraph';
    _this.buttons = _this.getButtons(config);
    return _this;
  }
  /**
   * Tests whether the `paragraph` toolbar should be visible. It is
   * visible when the selection is empty and when the caret is inside a
   * paragraph.
   *
   * @method test
   * @param {Object} payload
   * @param {AlloyEditor.Core} payload.editor
   * @param {Object} payload.data
   * @param {Object} payload.data.selectionData
   * @param {Event} payload.data.nativeEvent
   * @return {Boolean}
   */


  _createClass(EzParagraphConfig, [{
    key: "test",
    value: function test(payload) {
      var nativeEditor = payload.editor.get('nativeEditor');
      var path = nativeEditor.elementPath();
      return nativeEditor.isSelectionEmpty() && path && path.contains('p');
    }
  }]);

  return EzParagraphConfig;
}(_base_fixed__WEBPACK_IMPORTED_MODULE_0__["default"]);


var eZ = window.eZ = window.eZ || {};
eZ.ezAlloyEditor = eZ.ezAlloyEditor || {};
eZ.ezAlloyEditor.ezParagraphConfig = EzParagraphConfig;

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-table-cell.js":
/*!***************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-table-cell.js ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EzTableCellConfig; });
/* harmony import */ var _base_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-table */ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/base-table.js");
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



var EzTableCellConfig = /*#__PURE__*/function (_EzConfigTableBase) {
  _inherits(EzTableCellConfig, _EzConfigTableBase);

  var _super = _createSuper(EzTableCellConfig);

  function EzTableCellConfig(config) {
    var _this;

    _classCallCheck(this, EzTableCellConfig);

    _this = _super.call(this, config);
    _this.buttons = _this.getButtons(config);
    return _this;
  }

  _createClass(EzTableCellConfig, [{
    key: "getConfigName",
    value: function getConfigName() {
      return 'td';
    }
  }, {
    key: "test",
    value: function test(payload) {
      var nativeEditor = payload.editor.get('nativeEditor');
      var path = nativeEditor.elementPath();
      return path && path.lastElement.is('td');
    }
  }]);

  return EzTableCellConfig;
}(_base_table__WEBPACK_IMPORTED_MODULE_0__["default"]);


eZ.addConfig('ezAlloyEditor.ezTableCellConfig', EzTableCellConfig);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-table-header.js":
/*!*****************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-table-header.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EzTableHeaderConfig; });
/* harmony import */ var _ez_table_cell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ez-table-cell */ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-table-cell.js");
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



var EzTableHeaderConfig = /*#__PURE__*/function (_EzTableCellConfig) {
  _inherits(EzTableHeaderConfig, _EzTableCellConfig);

  var _super = _createSuper(EzTableHeaderConfig);

  function EzTableHeaderConfig() {
    _classCallCheck(this, EzTableHeaderConfig);

    return _super.apply(this, arguments);
  }

  _createClass(EzTableHeaderConfig, [{
    key: "getConfigName",
    value: function getConfigName() {
      return 'th';
    }
  }, {
    key: "test",
    value: function test(payload) {
      var nativeEditor = payload.editor.get('nativeEditor');
      var path = nativeEditor.elementPath();
      return path && path.lastElement.is('th');
    }
  }]);

  return EzTableHeaderConfig;
}(_ez_table_cell__WEBPACK_IMPORTED_MODULE_0__["default"]);


eZ.addConfig('ezAlloyEditor.ezTableHeaderConfig', EzTableHeaderConfig);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-table-row.js":
/*!**************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-table-row.js ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EzTableRowConfig; });
/* harmony import */ var _base_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-table */ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/base-table.js");
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



var EzTableRowConfig = /*#__PURE__*/function (_EzConfigTableBase) {
  _inherits(EzTableRowConfig, _EzConfigTableBase);

  var _super = _createSuper(EzTableRowConfig);

  function EzTableRowConfig() {
    _classCallCheck(this, EzTableRowConfig);

    return _super.apply(this, arguments);
  }

  _createClass(EzTableRowConfig, [{
    key: "getConfigName",
    value: function getConfigName() {
      return 'tr';
    }
  }, {
    key: "test",
    value: function test(payload) {
      var nativeEditor = payload.editor.get('nativeEditor');
      var path = nativeEditor.elementPath();
      return path && path.lastElement.is('tr');
    }
  }]);

  return EzTableRowConfig;
}(_base_table__WEBPACK_IMPORTED_MODULE_0__["default"]);


eZ.addConfig('ezAlloyEditor.ezTableRowConfig', EzTableRowConfig);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-table.js":
/*!**********************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-table.js ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EzTableConfig; });
/* harmony import */ var _base_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-table */ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/base-table.js");
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



var EzTableConfig = /*#__PURE__*/function (_EzConfigTableBase) {
  _inherits(EzTableConfig, _EzConfigTableBase);

  var _super = _createSuper(EzTableConfig);

  function EzTableConfig() {
    _classCallCheck(this, EzTableConfig);

    return _super.apply(this, arguments);
  }

  _createClass(EzTableConfig, [{
    key: "getConfigName",
    value: function getConfigName() {
      return 'table';
    }
  }, {
    key: "test",
    value: function test(payload) {
      var nativeEditor = payload.editor.get('nativeEditor');
      var path = nativeEditor.elementPath();
      return path && path.lastElement.is('table');
    }
  }]);

  return EzTableConfig;
}(_base_table__WEBPACK_IMPORTED_MODULE_0__["default"]);


var eZ = window.eZ = window.eZ || {};
eZ.ezAlloyEditor = eZ.ezAlloyEditor || {};
eZ.ezAlloyEditor.ezTableConfig = EzTableConfig;

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-text.js":
/*!*********************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-text.js ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EzTextConfig; });
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! alloyeditor */ "alloyeditor");
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(alloyeditor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _base_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base-buttons */ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/base-buttons.js");
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




var EzTextConfig = /*#__PURE__*/function (_EzConfigButtonsBase) {
  _inherits(EzTextConfig, _EzConfigButtonsBase);

  var _super = _createSuper(EzTextConfig);

  function EzTextConfig(config) {
    var _this;

    _classCallCheck(this, EzTextConfig);

    _this = _super.call(this, config);
    _this.name = 'text';
    _this.buttons = _this.getButtons(config);
    _this.test = alloyeditor__WEBPACK_IMPORTED_MODULE_0___default.a.SelectionTest.text;
    return _this;
  }

  _createClass(EzTextConfig, [{
    key: "getStyles",
    value: function getStyles() {
      var customStyles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      return {
        name: 'styles',
        cfg: {
          showRemoveStylesItem: true,
          styles: _toConsumableArray(customStyles)
        }
      };
    }
  }]);

  return EzTextConfig;
}(_base_buttons__WEBPACK_IMPORTED_MODULE_1__["default"]);


var eZ = window.eZ = window.eZ || {};
eZ.ezAlloyEditor = eZ.ezAlloyEditor || {};
eZ.ezAlloyEditor.ezTextConfig = EzTextConfig;

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/ez-add.js":
/*!*************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/ez-add.js ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EzToolbarAdd; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! alloyeditor */ "alloyeditor");
/* harmony import */ var alloyeditor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(alloyeditor__WEBPACK_IMPORTED_MODULE_2__);
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





var EzToolbarAdd = /*#__PURE__*/function (_AlloyEditor$Toolbars) {
  _inherits(EzToolbarAdd, _AlloyEditor$Toolbars);

  var _super = _createSuper(EzToolbarAdd);

  function EzToolbarAdd(props) {
    var _this;

    _classCallCheck(this, EzToolbarAdd);

    _this = _super.call(this, props);
    _this.setPosition = _this.setPosition.bind(_assertThisInitialized(_this));
    _this.setTopPosition = _this.setTopPosition.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(EzToolbarAdd, [{
    key: "setPosition",
    value: function setPosition() {
      var domNode = ReactDOM.findDOMNode(this);
      var rect = this.props.editor.get('nativeEditor').element.$.getBoundingClientRect();
      new CKEDITOR.dom.element(domNode).setStyles({
        left: "".concat(rect.left, "px")
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this$props = this.props,
          selectionData = _this$props.selectionData,
          renderExclusive = _this$props.renderExclusive;

      this._updatePosition();

      if (!renderExclusive && selectionData && !selectionData.region.top) {
        this.setTopPosition();
      } // In case of exclusive rendering, focus the first descendant (button)
      // so the user will be able to start interacting with the buttons immediately.


      if (renderExclusive) {
        this.focus();

        if (selectionData && !selectionData.region.top) {
          this._animate(this.setTopPosition);
        }

        this._animate(this.setPosition);
      }
    }
  }, {
    key: "setTopPosition",
    value: function setTopPosition() {
      var editor = this.props.editor;
      var domNode = ReactDOM.findDOMNode(this);
      var nativeEditor = editor.get('nativeEditor');
      var path = nativeEditor.elementPath();
      var table = path && path.elements.find(function (element) {
        return element.is('table');
      });
      var element = table || nativeEditor.element;
      var rect = element.$.getBoundingClientRect();
      var topPosition = rect.top;

      if (!table) {
        topPosition += window.pageYOffset;
      }

      new CKEDITOR.dom.element(domNode).setStyles({
        top: "".concat(topPosition, "px")
      });
    }
    /**
     * Lifecycle. Renders the UI of the button.
     *
     * @method render
     * @return {Object} The content which should be rendered.
     */

  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          selectionData = _this$props2.selectionData,
          editor = _this$props2.editor;
      var path = editor.get('nativeEditor').elementPath();
      var isInlineCustomTag = path && path.contains(function (element) {
        return element.$.dataset.ezelement === 'eztemplateinline';
      });

      if (selectionData && selectionData.text || isInlineCustomTag) {
        return null;
      }

      var buttons = this._getButtons();

      var className = this._getToolbarClassName();

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "aria-label": alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.Strings.add,
        className: className,
        "data-tabindex": this.props.config.tabIndex || 0,
        onFocus: this.focus,
        onKeyDown: this.handleKey,
        role: "toolbar",
        tabIndex: "-1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "ae-container"
      }, buttons));
    }
  }], [{
    key: "key",
    get: function get() {
      return 'ezadd';
    }
  }]);

  return EzToolbarAdd;
}(alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.Toolbars.add);


alloyeditor__WEBPACK_IMPORTED_MODULE_2___default.a.Toolbars[EzToolbarAdd.key] = EzToolbarAdd;
var eZ = window.eZ = window.eZ || {};
eZ.ezAlloyEditor = eZ.ezAlloyEditor || {};
eZ.ezAlloyEditor.ezToolbarAdd = EzToolbarAdd;

/***/ }),

/***/ 0:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-anchor.js ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-anchoredit.js ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-paragraph.js ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-heading.js ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-movedown.js ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-moveup.js ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-blocktextaligncenter.js ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-blocktextalignjustify.js ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-blocktextalignleft.js ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-blocktextalignright.js ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-removeblock.js ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-unorderedlist.js ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-orderedlist.js ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-table.js ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-tablecell.js ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-tablerow.js ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-tablecolumn.js ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-tableremove.js ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-bold.js ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-italic.js ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-underline.js ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-subscript.js ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-superscript.js ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-dropdown.js ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-styleslist.js ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-styleslistitem.js ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-quote.js ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-strike.js ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-link.js ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-linkedit.js ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-image.js ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-imageupdate.js ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-imagevariation.js ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-imagelink.js ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-imagelinkedit.js ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-embed.js ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-embedinline.js ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-embedupdate.js ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-embedaligncenter.js ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-embedalignleft.js ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-embedalignright.js ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-customtag.js ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-customtag-edit.js ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-customtag-update.js ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-inlinecustomtag.js ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-inlinecustomtag-edit.js ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-inlinecustomtag-update.js ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-attributes-edit.js ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-attributes-update.js ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/ez-add.js ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/plugins/ez-add-content.js ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/plugins/ez-move-element.js ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/plugins/ez-caret.js ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/plugins/ez-remove-block.js ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/plugins/ez-embed.js ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/plugins/ez-focus-block.js ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/plugins/ez-custom-tag.js ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/plugins/ez-elements-path.js ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-paragraph.js ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-formatted.js ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-text.js ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-list-ordered.js ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-list-unordered.js ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-list-item.js ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-table.js ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-table-row.js ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-table-cell.js ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-table-header.js ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-link.js ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-heading.js ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-embed.js ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-embed-inline.js ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-image.js ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-image-link.js ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-custom-tag.js ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-inline-custom-tag.js ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-custom-style.js ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/core/table.js ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/core/ez-custom-tags.js ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/core/ez-attributes.js ./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/core/base-richtext.js ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-anchor.js */"./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-anchor.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-anchoredit.js */"./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-anchoredit.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-paragraph.js */"./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-paragraph.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-heading.js */"./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-heading.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-movedown.js */"./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-movedown.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-moveup.js */"./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-moveup.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-blocktextaligncenter.js */"./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-blocktextaligncenter.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-blocktextalignjustify.js */"./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-blocktextalignjustify.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-blocktextalignleft.js */"./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-blocktextalignleft.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-blocktextalignright.js */"./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-blocktextalignright.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-removeblock.js */"./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-removeblock.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-unorderedlist.js */"./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-unorderedlist.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-orderedlist.js */"./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-orderedlist.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-table.js */"./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-table.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-tablecell.js */"./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-tablecell.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-tablerow.js */"./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-tablerow.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-tablecolumn.js */"./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-tablecolumn.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-tableremove.js */"./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-tableremove.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-bold.js */"./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-bold.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-italic.js */"./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-italic.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-underline.js */"./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-underline.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-subscript.js */"./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-subscript.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-superscript.js */"./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-superscript.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-dropdown.js */"./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-dropdown.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-styleslist.js */"./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-styleslist.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-styleslistitem.js */"./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-styleslistitem.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-quote.js */"./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-quote.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-strike.js */"./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-strike.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-link.js */"./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-link.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-linkedit.js */"./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-linkedit.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-image.js */"./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-image.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-imageupdate.js */"./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-imageupdate.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-imagevariation.js */"./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-imagevariation.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-imagelink.js */"./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-imagelink.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-imagelinkedit.js */"./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-imagelinkedit.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-embed.js */"./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-embed.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-embedinline.js */"./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-embedinline.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-embedupdate.js */"./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-embedupdate.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-embedaligncenter.js */"./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-embedaligncenter.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-embedalignleft.js */"./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-embedalignleft.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-embedalignright.js */"./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-embedalignright.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-customtag.js */"./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-customtag.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-customtag-edit.js */"./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-customtag-edit.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-customtag-update.js */"./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-customtag-update.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-inlinecustomtag.js */"./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-inlinecustomtag.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-inlinecustomtag-edit.js */"./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-inlinecustomtag-edit.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-inlinecustomtag-update.js */"./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-inlinecustomtag-update.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-attributes-edit.js */"./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-attributes-edit.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-attributes-update.js */"./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/buttons/ez-btn-attributes-update.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/ez-add.js */"./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/ez-add.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/plugins/ez-add-content.js */"./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/plugins/ez-add-content.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/plugins/ez-move-element.js */"./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/plugins/ez-move-element.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/plugins/ez-caret.js */"./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/plugins/ez-caret.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/plugins/ez-remove-block.js */"./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/plugins/ez-remove-block.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/plugins/ez-embed.js */"./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/plugins/ez-embed.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/plugins/ez-focus-block.js */"./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/plugins/ez-focus-block.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/plugins/ez-custom-tag.js */"./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/plugins/ez-custom-tag.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/plugins/ez-elements-path.js */"./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/plugins/ez-elements-path.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-paragraph.js */"./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-paragraph.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-formatted.js */"./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-formatted.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-text.js */"./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-text.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-list-ordered.js */"./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-list-ordered.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-list-unordered.js */"./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-list-unordered.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-list-item.js */"./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-list-item.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-table.js */"./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-table.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-table-row.js */"./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-table-row.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-table-cell.js */"./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-table-cell.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-table-header.js */"./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-table-header.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-link.js */"./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-link.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-heading.js */"./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-heading.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-embed.js */"./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-embed.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-embed-inline.js */"./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-embed-inline.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-image.js */"./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-image.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-image-link.js */"./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-image-link.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-custom-tag.js */"./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-custom-tag.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-inline-custom-tag.js */"./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-inline-custom-tag.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-custom-style.js */"./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/toolbars/config/ez-custom-style.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/core/table.js */"./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/core/table.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/core/ez-custom-tags.js */"./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/core/ez-custom-tags.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/core/ez-attributes.js */"./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/core/ez-attributes.js");
module.exports = __webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/core/base-richtext.js */"./vendor/ezsystems/ezplatform-richtext/src/bundle/Resources/public/js/OnlineEditor/core/base-richtext.js");


/***/ }),

/***/ "alloyeditor":
/*!******************************!*\
  !*** external "AlloyEditor" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = AlloyEditor;

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

},[[0,"runtime"]]]);