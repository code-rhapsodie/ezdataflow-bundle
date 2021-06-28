(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ezplatform-admin-ui-link-manager-view-js"],{

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

/***/ 22:
/*!******************************************************************************************************************!*\
  !*** multi ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/button.content.edit.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/button.content.edit.js */"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/button.content.edit.js");


/***/ })

},[[22,"runtime"]]]);