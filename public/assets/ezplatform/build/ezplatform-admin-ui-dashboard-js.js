(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ezplatform-admin-ui-dashboard-js"],{

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.version.edit.conflict.js":
/*!********************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.version.edit.conflict.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (global, doc, $, eZ, Translator, Routing) {
  var editVersion = function editVersion(event) {
    var showErrorNotification = eZ.helpers.notification.showErrorNotification;
    var contentDraftEditUrl = event.currentTarget.dataset.contentDraftEditUrl;
    var versionHasConflictUrl = event.currentTarget.dataset.versionHasConflictUrl;
    var contentId = event.currentTarget.dataset.contentId;
    var languageCode = event.currentTarget.dataset.languageCode;
    var checkEditPermissionLink = Routing.generate('ezplatform.content.check_edit_permission', {
      contentId: contentId,
      languageCode: languageCode
    });
    var errorMessage = Translator.trans(
    /*@Desc("You don't have permission to edit this Content item")*/
    'content.edit.permission.error', {}, 'content');

    var handleCanEditCheck = function handleCanEditCheck(response) {
      if (response.canEdit) {
        return fetch(versionHasConflictUrl, {
          mode: 'same-origin',
          credentials: 'same-origin'
        });
      }

      throw new Error(errorMessage);
    };

    var handleVersionDraftConflict = function handleVersionDraftConflict(response) {
      // Status 409 means that a draft conflict has occurred and the modal must be displayed.
      // Otherwise we can go to Content Item edit page.
      if (response.status === 409) {
        doc.querySelector('#edit-conflicted-draft').href = contentDraftEditUrl;
        $('#version-conflict-modal').modal('show');
      }

      if (response.status === 403) {
        response.text().then(showErrorNotification);
      }

      if (response.status === 200) {
        global.location.href = contentDraftEditUrl;
      }
    };

    event.preventDefault();
    fetch(checkEditPermissionLink, {
      mode: 'same-origin',
      credentials: 'same-origin'
    }).then(eZ.helpers.request.getJsonFromResponse).then(handleCanEditCheck).then(handleVersionDraftConflict)["catch"](showErrorNotification);
  };

  doc.querySelectorAll('.ez-btn--content-draft-edit').forEach(function (button) {
    return button.addEventListener('click', editVersion, false);
  });
})(window, window.document, window.jQuery, window.eZ, window.Translator, window.Routing);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/button.content.edit.js":
/*!************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/button.content.edit.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (global, doc, $, eZ, Translator, Routing) {
  var FORM_EDIT = 'form.ez-edit-content-form';
  var showErrorNotification = eZ.helpers.notification.showErrorNotification;

  var editVersion = function editVersion(event) {
    var versionEditForm = doc.querySelector(FORM_EDIT);
    var versionEditFormName = versionEditForm.name;
    var _event$currentTarget$ = event.currentTarget.dataset,
        contentId = _event$currentTarget$.contentId,
        versionNo = _event$currentTarget$.versionNo,
        languageCode = _event$currentTarget$.languageCode;
    var contentInfoInput = versionEditForm.querySelector("input[name=\"".concat(versionEditFormName, "[content_info]\"]"));
    var versionInfoContentInfoInput = versionEditForm.querySelector("input[name=\"".concat(versionEditFormName, "[version_info][content_info]\"]"));
    var versionInfoVersionNoInput = versionEditForm.querySelector("input[name=\"".concat(versionEditFormName, "[version_info][version_no]\"]"));
    var languageInput = versionEditForm.querySelector("#".concat(versionEditFormName, "_language_").concat(languageCode));
    var checkVersionDraftLink = Routing.generate('ezplatform.version_draft.has_no_conflict', {
      contentId: contentId,
      languageCode: languageCode
    });
    var checkEditPermissionLink = Routing.generate('ezplatform.content.check_edit_permission', {
      contentId: contentId,
      languageCode: languageCode
    });
    var errorMessage = Translator.trans(
    /*@Desc("You don't have permission to edit this Content item")*/
    'content.edit.permission.error', {}, 'content');

    var submitVersionEditForm = function submitVersionEditForm() {
      contentInfoInput.value = contentId;
      versionInfoContentInfoInput.value = contentId;
      versionInfoVersionNoInput.value = versionNo !== undefined ? versionNo : null;
      languageInput.checked = true;
      versionEditForm.submit();
    };

    var addDraft = function addDraft() {
      submitVersionEditForm();
      $('#version-draft-conflict-modal').modal('hide');
    };

    var showModal = function showModal(modalHtml) {
      var wrapper = doc.querySelector('.ez-modal-wrapper');
      wrapper.innerHTML = modalHtml;
      var addDraftButton = wrapper.querySelector('.ez-btn--add-draft');

      if (addDraftButton) {
        addDraftButton.addEventListener('click', addDraft, false);
      }

      wrapper.querySelectorAll('.ez-btn--prevented').forEach(function (btn) {
        return btn.addEventListener('click', function (event) {
          return event.preventDefault();
        }, false);
      });
      $('#version-draft-conflict-modal').modal('show');
    };

    var handleCanEditCheck = function handleCanEditCheck(response) {
      if (response.canEdit) {
        return fetch(checkVersionDraftLink, {
          mode: 'same-origin',
          credentials: 'same-origin'
        });
      }

      throw new Error(errorMessage);
    };

    var handleDraftConflict = function handleDraftConflict(response) {
      // Status 409 means that a draft conflict has occurred and the modal must be displayed.
      // Otherwise we can go to Content Item edit page.
      if (response.status === 409) {
        response.text().then(showModal);
      } else if (response.status === 403) {
        response.text().then(showErrorNotification);
      } else if (response.status === 200) {
        submitVersionEditForm();
      }
    };

    event.preventDefault();
    fetch(checkEditPermissionLink, {
      mode: 'same-origin',
      credentials: 'same-origin'
    }).then(eZ.helpers.request.getJsonFromResponse).then(handleCanEditCheck).then(handleDraftConflict)["catch"](showErrorNotification);
  };

  doc.querySelectorAll('.ez-btn--content-edit').forEach(function (button) {
    return button.addEventListener('click', editVersion, false);
  });
})(window, window.document, window.jQuery, window.eZ, window.Translator, window.Routing);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/button.translation.edit.js":
/*!****************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/button.translation.edit.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(function (global, doc, eZ) {
  var EditTranslation = /*#__PURE__*/function () {
    "use strict";

    function EditTranslation(config) {
      _classCallCheck(this, EditTranslation);

      this.container = config.container;
      this.toggler = config.container.querySelector('.ez-btn--translations-list-toggler');
      this.translationsList = config.container.querySelector('.ez-translation-selector__list-wrapper');
      this.hideTranslationsList = this.hideTranslationsList.bind(this);
      this.showTranslationsList = this.showTranslationsList.bind(this);
      this.setPosition = this.setPosition.bind(this);
    }

    _createClass(EditTranslation, [{
      key: "setPosition",
      value: function setPosition() {
        var topOffset = parseInt(this.translationsList.dataset.topOffset, 10);
        var topPosition = window.scrollY > topOffset ? 0 : topOffset - window.scrollY;
        var height = window.scrollY > topOffset ? window.innerHeight : window.innerHeight + window.scrollY - topOffset;
        this.translationsList.style.top = "".concat(topPosition, "px");
        this.translationsList.style.height = "".concat(height, "px");
      }
    }, {
      key: "hideTranslationsList",
      value: function hideTranslationsList(event) {
        var closestTranslationSelector = event.target.closest('.ez-translation-selector');
        var clickedOnTranslationsList = closestTranslationSelector && closestTranslationSelector.isSameNode(this.container);
        var clickedOnDraftConflictModal = event.target.closest('.ez-modal--version-draft-conflict');

        if (clickedOnTranslationsList || clickedOnDraftConflictModal) {
          return;
        }

        this.translationsList.classList.add('ez-translation-selector__list-wrapper--hidden');
        global.removeEventListener('scroll', this.setPosition, false);
        doc.removeEventListener('click', this.hideTranslationsList, false);
      }
    }, {
      key: "showTranslationsList",
      value: function showTranslationsList() {
        this.translationsList.classList.remove('ez-translation-selector__list-wrapper--hidden');
        this.setPosition();
        global.addEventListener('scroll', this.setPosition, false);
        doc.addEventListener('click', this.hideTranslationsList, false);
        eZ.helpers.tooltips.hideAll();
      }
    }, {
      key: "init",
      value: function init() {
        this.toggler.addEventListener('click', this.showTranslationsList, false);
      }
    }]);

    return EditTranslation;
  }();

  var translationSelectors = doc.querySelectorAll('.ez-translation-selector');
  translationSelectors.forEach(function (translationSelector) {
    var editTranslation = new EditTranslation({
      container: translationSelector
    });
    editTranslation.init();
  });
})(window, document, window.eZ);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/cotf/create.js":
/*!****************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/cotf/create.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(function (global, doc, eZ, React, ReactDOM, Translator, Routing) {
  var btns = doc.querySelectorAll('.ez-btn--cotf-create');
  var udwContainer = doc.getElementById('react-udw');

  var closeUDW = function closeUDW() {
    return ReactDOM.unmountComponentAtNode(udwContainer);
  };

  var onConfirm = function onConfirm(items) {
    closeUDW();
    global.location.href = Routing.generate('_ez_content_view', {
      contentId: items[0].ContentInfo.Content._id,
      locationId: items[0].id
    });
  };

  var onCancel = function onCancel() {
    return closeUDW();
  };

  var openUDW = function openUDW(event) {
    event.preventDefault();
    var config = JSON.parse(event.currentTarget.dataset.udwConfig);
    var title = Translator.trans(
    /*@Desc("Create content")*/
    'dashboard.create.title', {}, 'universal_discovery_widget');
    ReactDOM.render(React.createElement(eZ.modules.UniversalDiscovery, _objectSpread({
      onConfirm: onConfirm,
      onCancel: onCancel,
      title: title,
      activeTab: 'create',
      multiple: false
    }, config)), udwContainer);
  };

  btns.forEach(function (btn) {
    return btn.addEventListener('click', openUDW, false);
  });
})(window, window.document, window.eZ, window.React, window.ReactDOM, window.Translator, window.Routing);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/table.checkbox.js":
/*!*******************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/table.checkbox.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (global, doc, eZ) {
  eZ.helpers.table.parseCheckbox('.ez-table__cell .form-check-input, .c-table-view-item .ez-input--checkbox', 'ez-table__row--active');
})(window, document, window.eZ);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/udw/browse.js":
/*!***************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/udw/browse.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(function (global, doc, eZ, React, ReactDOM, Translator, Routing) {
  var btns = doc.querySelectorAll('.btn--udw-browse');
  var udwContainer = doc.getElementById('react-udw');

  var closeUDW = function closeUDW() {
    return ReactDOM.unmountComponentAtNode(udwContainer);
  };

  var onConfirm = function onConfirm(items) {
    closeUDW();
    global.location.href = Routing.generate('_ez_content_view', {
      contentId: items[0].ContentInfo.Content._id,
      locationId: items[0].id
    });
  };

  var onCancel = function onCancel() {
    return closeUDW();
  };

  var openUDW = function openUDW(event) {
    event.preventDefault();
    var config = JSON.parse(event.currentTarget.dataset.udwConfig);
    var title = Translator.trans(
    /*@Desc("Browse content")*/
    'browse.title', {}, 'universal_discovery_widget');
    ReactDOM.render(React.createElement(eZ.modules.UniversalDiscovery, _objectSpread({
      onConfirm: onConfirm,
      onCancel: onCancel,
      title: title,
      multiple: false
    }, config)), udwContainer);
  };

  btns.forEach(function (btn) {
    return btn.addEventListener('click', openUDW, false);
  });
})(window, window.document, window.eZ, window.React, window.ReactDOM, window.Translator, window.Routing);

/***/ }),

/***/ 20:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/udw/browse.js ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/cotf/create.js ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/button.content.edit.js ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.version.edit.conflict.js ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/button.translation.edit.js ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/table.checkbox.js ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/udw/browse.js */"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/udw/browse.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/cotf/create.js */"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/cotf/create.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/button.content.edit.js */"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/button.content.edit.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.version.edit.conflict.js */"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.version.edit.conflict.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/button.translation.edit.js */"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/button.translation.edit.js");
module.exports = __webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/table.checkbox.js */"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/table.checkbox.js");


/***/ })

},[[20,"runtime"]]]);