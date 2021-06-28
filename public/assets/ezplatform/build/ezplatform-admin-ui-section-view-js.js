(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ezplatform-admin-ui-section-view-js"],{

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.section.view.js":
/*!***********************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.section.view.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(function (global, doc, eZ, React, ReactDOM) {
  var _this = this;

  var btns = doc.querySelectorAll('.btn--open-udw');
  var udwContainer = doc.getElementById('react-udw');

  var closeUDW = function closeUDW() {
    return ReactDOM.unmountComponentAtNode(udwContainer);
  };

  var onConfirm = function onConfirm(form, content) {
    var field = form.querySelector("#".concat(form.getAttribute('name'), "_locations_location"));
    field.value = content.map(function (item) {
      return item.id;
    }).join();
    closeUDW();
    form.submit();
  };

  var onCancel = function onCancel() {
    return closeUDW();
  };

  var openUDW = function openUDW(event) {
    event.preventDefault();
    var form = event.target.closest('form');
    var config = JSON.parse(event.currentTarget.dataset.udwConfig);
    ReactDOM.render(React.createElement(eZ.modules.UniversalDiscovery, _objectSpread({
      onConfirm: onConfirm.bind(_this, form),
      onCancel: onCancel
    }, config)), udwContainer);
  };

  btns.forEach(function (btn) {
    return btn.addEventListener('click', openUDW, false);
  });
})(window, window.document, window.eZ, window.React, window.ReactDOM);

/***/ }),

/***/ 13:
/*!*****************************************************************************************************************!*\
  !*** multi ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.section.view.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.section.view.js */"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.section.view.js");


/***/ })

},[[13,"runtime"]]]);