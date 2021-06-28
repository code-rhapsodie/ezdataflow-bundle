(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ezplatform-admin-ui-content-draft-list-js"],{

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.content.tree.js":
/*!***********************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.content.tree.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (global, doc, React, ReactDOM, eZ, localStorage) {
  var KEY_CONTENT_TREE_EXPANDED = 'ez-content-tree-expanded';
  var CLASS_CONTENT_TREE_EXPANDED = 'ez-content-tree-container--expanded';
  var CLASS_CONTENT_TREE_ANIMATE = 'ez-content-tree-container--animate';
  var CLASS_BTN_CONTENT_TREE_EXPANDED = 'ez-btn--content-tree-expanded';
  var token = doc.querySelector('meta[name="CSRF-Token"]').content;
  var siteaccess = doc.querySelector('meta[name="SiteAccess"]').content;
  var contentTreeContainer = doc.querySelector('.ez-content-tree-container');
  var contentTreeWrapper = doc.querySelector('.ez-content-tree-container__wrapper');
  var btn = doc.querySelector('.ez-btn--toggle-content-tree');
  var _contentTreeContainer = contentTreeContainer.dataset,
      currentLocationPath = _contentTreeContainer.currentLocationPath,
      treeRootLocationId = _contentTreeContainer.treeRootLocationId;
  var userId = window.eZ.helpers.user.getId();
  var frame = null;

  var toggleContentTreePanel = function toggleContentTreePanel() {
    doc.activeElement.blur();
    contentTreeContainer.classList.toggle(CLASS_CONTENT_TREE_EXPANDED);
    contentTreeContainer.classList.add(CLASS_CONTENT_TREE_ANIMATE);
    btn.classList.toggle(CLASS_BTN_CONTENT_TREE_EXPANDED);
    updateContentTreeWrapperHeight();
    var isContentTreeExpanded = contentTreeContainer.classList.contains(CLASS_CONTENT_TREE_EXPANDED);
    saveContentTreeExpandedState(userId, isContentTreeExpanded);
    eZ.helpers.tooltips.hideAll();
  };

  var updateContentTreeWrapperHeight = function updateContentTreeWrapperHeight() {
    var height = Math.min(window.innerHeight - contentTreeContainer.getBoundingClientRect().top, window.innerHeight);
    contentTreeWrapper.style.height = "".concat(height, "px");
  };

  var handleViewportChange = function handleViewportChange() {
    if (frame) {
      cancelAnimationFrame(frame);
    }

    frame = requestAnimationFrame(updateContentTreeWrapperHeight);
  };

  var saveContentTreeExpandedState = function saveContentTreeExpandedState(userId, isExpanded) {
    var expandedState = JSON.parse(localStorage.getItem(KEY_CONTENT_TREE_EXPANDED));

    if (!(expandedState instanceof Object)) {
      expandedState = {};
    }

    expandedState[userId] = isExpanded;
    localStorage.setItem(KEY_CONTENT_TREE_EXPANDED, JSON.stringify(expandedState));
  };

  var isContentTreeExpanded = function isContentTreeExpanded(userId) {
    var expandedState = JSON.parse(localStorage.getItem(KEY_CONTENT_TREE_EXPANDED));
    return expandedState && expandedState[userId];
  };

  ReactDOM.render(React.createElement(eZ.modules.ContentTree, {
    userId: userId,
    currentLocationPath: currentLocationPath,
    rootLocationId: parseInt(treeRootLocationId, 10),
    restInfo: {
      token: token,
      siteaccess: siteaccess
    }
  }), contentTreeWrapper);
  btn.addEventListener('click', toggleContentTreePanel, false);

  if (isContentTreeExpanded(userId)) {
    contentTreeContainer.classList.add(CLASS_CONTENT_TREE_EXPANDED);
    btn.classList.add(CLASS_BTN_CONTENT_TREE_EXPANDED);
  }

  updateContentTreeWrapperHeight();
  doc.addEventListener('scroll', handleViewportChange, {
    capture: false,
    passive: true
  });
  window.addEventListener('resize', handleViewportChange, {
    capture: false,
    passive: true
  });
})(window, window.document, window.React, window.ReactDOM, window.eZ, window.localStorage);

/***/ }),

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

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/button.state.toggle.js":
/*!************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/button.state.toggle.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(function (global, doc) {
  var toggleForms = doc.querySelectorAll('.ez-toggle-btn-state');
  toggleForms.forEach(function (toggleForm) {
    var checkboxes = _toConsumableArray(toggleForm.querySelectorAll('.ez-table__cell.ez-table__cell--has-checkbox input[type="checkbox"]'));

    var buttonRemove = doc.querySelector(toggleForm.dataset.toggleButtonId);

    if (!buttonRemove) {
      return;
    }

    var toggleButtonState = function toggleButtonState() {
      var isAnythingSelected = checkboxes.some(function (el) {
        return el.checked;
      });
      buttonRemove.disabled = !isAnythingSelected;
    };

    toggleButtonState();
    checkboxes.forEach(function (checkbox) {
      return checkbox.addEventListener('change', toggleButtonState, false);
    });
  });
})(window, window.document);

/***/ }),

/***/ 2:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/button.state.toggle.js ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/button.content.edit.js ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.version.edit.conflict.js ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.content.tree.js ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/button.state.toggle.js */"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/button.state.toggle.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/button.content.edit.js */"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/button.content.edit.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.version.edit.conflict.js */"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.version.edit.conflict.js");
module.exports = __webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.content.tree.js */"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.content.tree.js");


/***/ })

},[[2,"runtime"]]]);