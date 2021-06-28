(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ezplatform-admin-ui-content-preview-js"],{

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.preview.js":
/*!******************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.preview.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (global, doc) {
  var CLASS_BTN_SELECTED = 'ez-preview__action--selected';
  var SELECTOR_BTN_ACTION = '.ez-preview__action';
  var SELECTOR_PREVIEW_SITEACCESS_SELECT = '.ez-preview__item--siteaccess select';

  var removeSelectedState = function removeSelectedState() {
    return doc.querySelectorAll(SELECTOR_BTN_ACTION).forEach(function (btn) {
      return btn.classList.remove(CLASS_BTN_SELECTED);
    });
  };

  var changePreviewMode = function changePreviewMode(event) {
    var btn = event.target.closest(SELECTOR_BTN_ACTION);
    var iframeWrapper = doc.querySelector('.ez-preview__iframe');
    removeSelectedState();
    btn.classList.add(CLASS_BTN_SELECTED);
    iframeWrapper.classList.remove('ez-preview__iframe--desktop', 'ez-preview__iframe--tablet', 'ez-preview__iframe--mobile');
    iframeWrapper.classList.add("ez-preview__iframe--".concat(btn.dataset.previewMode));
  };

  var changePreviewSiteaccess = function changePreviewSiteaccess(event) {
    var iframeWrapper = doc.querySelector('.ez-preview__iframe iframe');
    var siteaccessPreviewUrl = event.target.value;
    iframeWrapper.setAttribute('src', siteaccessPreviewUrl);
  };

  doc.querySelectorAll(SELECTOR_BTN_ACTION).forEach(function (btn) {
    return btn.addEventListener('click', changePreviewMode, false);
  });
  doc.querySelectorAll(SELECTOR_PREVIEW_SITEACCESS_SELECT).forEach(function (select) {
    return select.addEventListener('change', changePreviewSiteaccess, false);
  });
})(window, window.document);

/***/ }),

/***/ 15:
/*!************************************************************************************************************!*\
  !*** multi ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.preview.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.preview.js */"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.preview.js");


/***/ })

},[[15,"runtime"]]]);