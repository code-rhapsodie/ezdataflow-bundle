(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ezplatform-admin-ui-search-js"],{

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

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.search.filters.js":
/*!*************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.search.filters.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(function (global, doc, eZ, $, flatpickr) {
  var getUsersTimeout;
  var CLASS_DATE_RANGE = 'ez-filters__range-wrapper';
  var CLASS_VISIBLE_DATE_RANGE = 'ez-filters__range-wrapper--visible';
  var SELECTOR_TAG = '.ez-tag';
  var token = doc.querySelector('meta[name="CSRF-Token"]').content;
  var siteaccess = doc.querySelector('meta[name="SiteAccess"]').content;
  var filterBtn = doc.querySelector('.ez-btn--filter');
  var filters = doc.querySelector('.ez-filters');
  var searchCriteriaTags = doc.querySelector('.ez-search-criteria-tags');
  var clearBtn = filters.querySelector('.ez-btn-clear');
  var applyBtn = filters.querySelector('.ez-btn-apply');
  var dateFields = doc.querySelectorAll('.ez-filters__range-select');
  var contentTypeSelector = doc.querySelector('.ez-content-type-selector');
  var contentTypeSelect = doc.querySelector('.ez-filters__item--content-type .ez-filters__select');
  var sectionSelect = doc.querySelector('.ez-filters__item--section .ez-filters__select');
  var lastModifiedSelect = doc.querySelector('.ez-filters__item--modified .ez-filters__select');
  var lastModifiedDateRange = doc.querySelector('.ez-filters__item--modified .ez-filters__range-select');
  var lastCreatedSelect = doc.querySelector('.ez-filters__item--created .ez-filters__select');
  var lastCreatedDateRange = doc.querySelector('.ez-filters__item--created .ez-filters__range-select');
  var creatorInput = doc.querySelector('.ez-filters__item--creator .ez-filters__input');
  var searchCreatorInput = doc.querySelector('#search_creator');
  var usersList = doc.querySelector('.ez-filters__item--creator .ez-filters__user-list');
  var resetCreatorBtn = doc.querySelector('.ez-filters__item--creator .ez-icon--reset');
  var listGroupsTitle = doc.querySelectorAll('.ez-content-type-selector__group-title');
  var contentTypeCheckboxes = doc.querySelectorAll('.ez-content-type-selector__item [type="checkbox"]');
  var subtreeInput = doc.querySelector('#search_subtree');
  var dateConfig = {
    mode: 'range',
    locale: {
      rangeSeparator: ' - '
    },
    formatDate: function formatDate(date) {
      return eZ.helpers.timezone.formatShortDateTime(date, null, eZ.adminUiConfig.dateFormat.shortDate);
    }
  };

  var clearFilters = function clearFilters(event) {
    event.preventDefault();
    var option = contentTypeSelect.querySelector('option');
    var defaultText = option.dataset["default"];
    var lastModifiedDataRange = doc.querySelector(lastModifiedSelect.dataset.targetSelector);
    var lastCreatedDataRange = doc.querySelector(lastCreatedSelect.dataset.targetSelector);
    var lastModifiedPeriod = doc.querySelector(lastModifiedDataRange.dataset.periodSelector);
    var lastModifiedEnd = doc.querySelector(lastModifiedDataRange.dataset.endSelector);
    var lastCreatedPeriod = doc.querySelector(lastCreatedDataRange.dataset.periodSelector);
    var lastCreatedEnd = doc.querySelector(lastCreatedDataRange.dataset.endSelector);
    option.innerHTML = defaultText;
    contentTypeCheckboxes.forEach(function (checkbox) {
      checkbox.removeAttribute('checked');
      checkbox.checked = false;
    });

    if (sectionSelect) {
      sectionSelect[0].selected = true;
    }

    lastModifiedSelect[0].selected = true;
    lastCreatedSelect[0].selected = true;
    lastModifiedSelect.querySelector('option').selected = true;
    lastModifiedPeriod.value = '';
    lastModifiedEnd.value = '';
    lastCreatedPeriod.value = '';
    lastCreatedEnd.value = '';
    subtreeInput.value = '';
    handleResetUser();
    event.target.closest('form').submit();
  };

  var toggleDisabledStateOnApplyBtn = function toggleDisabledStateOnApplyBtn() {
    var contentTypeOption = contentTypeSelect.querySelector('option');
    var isContentTypeSelected = contentTypeOption.innerHTML !== contentTypeOption.dataset["default"];
    var isSectionSelected = sectionSelect ? !!sectionSelect.value : false;
    var isCreatorSelected = !!searchCreatorInput.value;
    var isSubtreeSelected = !!subtreeInput.value.trim().length;
    var isModifiedSelected = !!lastModifiedSelect.value;
    var isCreatedSelected = !!lastCreatedSelect.value;

    if (lastModifiedSelect.value === 'custom_range') {
      var lastModifiedWrapper = lastModifiedDateRange.closest(".".concat(CLASS_DATE_RANGE));
      var _lastModifiedWrapper$ = lastModifiedWrapper.dataset,
          periodSelector = _lastModifiedWrapper$.periodSelector,
          endSelector = _lastModifiedWrapper$.endSelector;
      var lastModifiedPeriodValue = doc.querySelector(periodSelector).value;
      var lastModifiedEndDate = doc.querySelector(endSelector).value;

      if (!lastModifiedPeriodValue || !lastModifiedEndDate) {
        isModifiedSelected = false;
      }
    }

    if (lastCreatedSelect.value === 'custom_range') {
      var lastCreatedWrapper = lastCreatedDateRange.closest(".".concat(CLASS_DATE_RANGE));
      var _lastCreatedWrapper$d = lastCreatedWrapper.dataset,
          _periodSelector = _lastCreatedWrapper$d.periodSelector,
          _endSelector = _lastCreatedWrapper$d.endSelector;
      var lastCreatedPeriodValue = doc.querySelector(_periodSelector).value;
      var lastCreatedEndDate = doc.querySelector(_endSelector).value;

      if (!lastCreatedPeriodValue || !lastCreatedEndDate) {
        isCreatedSelected = false;
      }
    }

    var isEnabled = isContentTypeSelected || isSectionSelected || isModifiedSelected || isCreatedSelected || isCreatorSelected || isSubtreeSelected;
    var methodName = isEnabled ? 'removeAttribute' : 'setAttribute';
    applyBtn[methodName]('disabled', !isEnabled);
  };

  var toggleFiltersVisibility = function toggleFiltersVisibility(event) {
    event.preventDefault();
    filters.classList.toggle('ez-filters--collapsed');
    searchCriteriaTags.classList.toggle('ez-search-criteria-tags--collapsed');
  };

  var handleClickOutside = function handleClickOutside(event) {
    if (event.target.closest('.ez-content-type-selector') || event.target.closest('.ez-filters__select--content-type')) {
      return;
    }

    toggleContentTypeSelectorVisibility();
  };

  var toggleContentTypeSelectorVisibility = function toggleContentTypeSelectorVisibility(event) {
    event.preventDefault();
    var methodName = contentTypeSelector.classList.contains('ez-content-type-selector--collapsed') ? 'addEventListener' : 'removeEventListener';
    contentTypeSelector.classList.toggle('ez-content-type-selector--collapsed');
    doc.querySelector('body')[methodName]('click', handleClickOutside, false);
  };

  var toggleDatesSelectVisibility = function toggleDatesSelectVisibility(event) {
    var datesRangeNode = doc.querySelector(event.target.dataset.targetSelector);

    if (event.target.value !== 'custom_range') {
      doc.querySelector(datesRangeNode.dataset.periodSelector).value = event.target.value;
      doc.querySelector(datesRangeNode.dataset.endSelector).value = '';
      datesRangeNode.classList.remove(CLASS_VISIBLE_DATE_RANGE);
      toggleDisabledStateOnApplyBtn();
      return;
    }

    datesRangeNode.classList.add(CLASS_VISIBLE_DATE_RANGE);
  };

  var toggleGroupState = function toggleGroupState(event) {
    event.preventDefault();
    event.currentTarget.closest('.ez-content-type-selector__group').classList.toggle('ez-content-type-selector__group--collapsed');
  };

  var filterByContentType = function filterByContentType() {
    var selectedCheckboxes = _toConsumableArray(contentTypeCheckboxes).filter(function (checkbox) {
      return checkbox.checked;
    });

    var contentTypesText = selectedCheckboxes.map(function (checkbox) {
      return checkbox.dataset.name;
    }).join(', ');
    var option = contentTypeSelect[0];
    var defaultText = option.dataset["default"];
    option.innerHTML = contentTypesText || defaultText;
    toggleDisabledStateOnApplyBtn();
  };

  var setSelectedDateRange = function setSelectedDateRange(selectedDates, dateString, instance) {
    var dateRange = instance.input.closest('.ez-filters__range-wrapper');

    if (selectedDates.length === 2) {
      var startDate = getUnixTimestampUTC(selectedDates[0]);
      var endDate = getUnixTimestampUTC(selectedDates[1]);
      var secondsInDay = 86400;
      var days = (endDate - startDate) / secondsInDay;
      doc.querySelector(dateRange.dataset.periodSelector).value = "P0Y0M".concat(days, "D");
      doc.querySelector(dateRange.dataset.endSelector).value = endDate;
    }

    toggleDisabledStateOnApplyBtn();
  };

  var getUnixTimestampUTC = function getUnixTimestampUTC(dateObject) {
    var date = new Date(Date.UTC(dateObject.getFullYear(), dateObject.getMonth(), dateObject.getDate()));
    date = Math.floor(date.getTime() / 1000);
    return date;
  };

  var getUsersList = function getUsersList(value) {
    var body = JSON.stringify({
      ViewInput: {
        identifier: "find-user-by-name-".concat(value),
        "public": false,
        ContentQuery: {
          FacetBuilders: {},
          SortClauses: {},
          Query: {
            FullTextCriterion: "".concat(value, "*"),
            ContentTypeIdentifierCriterion: creatorInput.dataset.contentTypeIdentifiers.split(',')
          },
          limit: 50,
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
    }).then(showUsersList);
  };

  var createUsersListItem = function createUsersListItem(user) {
    return "<li data-id=\"".concat(user._id, "\" data-name=\"").concat(user.TranslatedName, "\" class=\"ez-filters__user-item\">").concat(user.TranslatedName, "</li>");
  };

  var showUsersList = function showUsersList(data) {
    var hits = data.View.Result.searchHits.searchHit;
    var users = hits.reduce(function (total, hit) {
      return total + createUsersListItem(hit.value.Content);
    }, '');
    var methodName = users ? 'addEventListener' : 'removeEventListener';
    usersList.innerHTML = users;
    usersList.classList.remove('ez-filters__user-list--hidden');
    doc.querySelector('body')[methodName]('click', handleClickOutsideUserList, false);
  };

  var handleTyping = function handleTyping(event) {
    var value = event.target.value.trim();
    window.clearTimeout(getUsersTimeout);

    if (value.length > 2) {
      getUsersTimeout = window.setTimeout(getUsersList.bind(null, value), 200);
    } else {
      usersList.classList.add('ez-filters__user-list--hidden');
      doc.querySelector('body').removeEventListener('click', handleClickOutsideUserList, false);
    }
  };

  var handleSelectUser = function handleSelectUser(event) {
    searchCreatorInput.value = event.target.dataset.id;
    usersList.classList.add('ez-filters__user-list--hidden');
    creatorInput.value = event.target.dataset.name;
    creatorInput.setAttribute('disabled', true);
    doc.querySelector('body').removeEventListener('click', handleClickOutsideUserList, false);
    toggleDisabledStateOnApplyBtn();
  };

  var handleResetUser = function handleResetUser() {
    searchCreatorInput.value = '';
    creatorInput.value = '';
    creatorInput.removeAttribute('disabled');
    toggleDisabledStateOnApplyBtn();
  };

  var handleClickOutsideUserList = function handleClickOutsideUserList(event) {
    if (event.target.closest('.ez-filters__item--creator')) {
      return;
    }

    creatorInput.value = '';
    usersList.classList.add('ez-filters__user-list--hidden');
    doc.querySelector('body').removeEventListener('click', handleClickOutsideUserList, false);
  };

  var initFlatPickr = function initFlatPickr(dateRangePickerNode) {
    var _dateRangePickerNode$ = dateRangePickerNode.dataset,
        start = _dateRangePickerNode$.start,
        end = _dateRangePickerNode$.end;
    var defaultDate = start && end ? [start, end] : [];
    flatpickr(dateRangePickerNode, _objectSpread(_objectSpread({}, dateConfig), {}, {
      onChange: setSelectedDateRange,
      defaultDate: defaultDate
    }));
  };

  var removeSearchTag = function removeSearchTag(event) {
    var tag = event.currentTarget.closest(SELECTOR_TAG);
    var form = event.currentTarget.closest('form');
    eZ.helpers.tooltips.hideAll();
    tag.remove();
    form.submit();
  };

  var clearContentType = function clearContentType(event) {
    var checkbox = doc.querySelector(event.currentTarget.dataset.targetSelector);
    checkbox.checked = false;
    removeSearchTag(event);
  };

  var clearSection = function clearSection(event) {
    sectionSelect[0].selected = true;
    removeSearchTag(event);
  };

  var clearSubtree = function clearSubtree(event) {
    doc.querySelector('#search_subtree-content-breadcrumbs').hidden = true;
    doc.querySelector('.ez-btn--udw-select-location').hidden = false;
    subtreeInput.value = '';
    removeSearchTag(event);
  };

  var clearDataRange = function clearDataRange(event, selector) {
    var dataRange = doc.querySelector(selector);
    var rangeSelect = dataRange.parentNode.querySelector('.ez-filters__select');
    var periodInput = doc.querySelector(dataRange.dataset.periodSelector);
    var endDateInput = doc.querySelector(dataRange.dataset.endSelector);
    rangeSelect[0].selected = true;
    periodInput.value = '';
    endDateInput.vaue = '';
    dataRange.classList.remove(CLASS_VISIBLE_DATE_RANGE);
    removeSearchTag(event);
  };

  var clearCreator = function clearCreator(event) {
    handleResetUser();
    removeSearchTag(event);
  };

  var clearSearchTagBtnMethods = {
    section: function section(event) {
      return clearSection(event);
    },
    subtree: function subtree(event) {
      return clearSubtree(event);
    },
    creator: function creator(event) {
      return clearCreator(event);
    },
    'content-types': function contentTypes(event) {
      return clearContentType(event);
    },
    'last-modified': function lastModified(event) {
      return clearDataRange(event, lastModifiedSelect.dataset.targetSelector);
    },
    'last-created': function lastCreated(event) {
      return clearDataRange(event, lastCreatedSelect.dataset.targetSelector);
    }
  };
  dateFields.forEach(initFlatPickr);
  filterByContentType();
  clearBtn.addEventListener('click', clearFilters, false);
  filterBtn.addEventListener('click', toggleFiltersVisibility, false);
  contentTypeSelect.addEventListener('mousedown', toggleContentTypeSelectorVisibility, false);

  if (sectionSelect) {
    sectionSelect.addEventListener('change', toggleDisabledStateOnApplyBtn, false);
  }

  var _loop = function _loop(tagType) {
    var tagBtns = doc.querySelectorAll(".ez-tag__remove-btn--".concat(tagType));
    tagBtns.forEach(function (btn) {
      return btn.addEventListener('click', clearSearchTagBtnMethods[tagType], false);
    });
  };

  for (var tagType in clearSearchTagBtnMethods) {
    _loop(tagType);
  }

  subtreeInput.addEventListener('change', toggleDisabledStateOnApplyBtn, false);
  lastModifiedSelect.addEventListener('change', toggleDatesSelectVisibility, false);
  lastCreatedSelect.addEventListener('change', toggleDatesSelectVisibility, false);
  creatorInput.addEventListener('keyup', handleTyping, false);
  usersList.addEventListener('click', handleSelectUser, false);
  resetCreatorBtn.addEventListener('click', handleResetUser, false);
  listGroupsTitle.forEach(function (group) {
    return group.addEventListener('click', toggleGroupState, false);
  });
  contentTypeCheckboxes.forEach(function (checkbox) {
    return checkbox.addEventListener('change', filterByContentType, false);
  });
})(window, window.document, window.eZ, window.jQuery, window.flatpickr);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.search.js":
/*!*****************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.search.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (global, doc) {
  var languageSelector = doc.querySelector('.ez-search-form__language-selector');

  var submitForm = function submitForm(event) {
    event.target.closest('form').submit();
  };

  if (!languageSelector) {
    return;
  }

  languageSelector.addEventListener('change', submitForm, false);
})(window, document);

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

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/udw/select.location.js":
/*!************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/udw/select.location.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(function (global, doc, eZ, React, ReactDOM, Translator) {
  var btns = doc.querySelectorAll('.ez-btn--udw-select-location');
  var udwContainer = doc.getElementById('react-udw');
  var token = doc.querySelector('meta[name="CSRF-Token"]').content;
  var siteaccess = doc.querySelector('meta[name="SiteAccess"]').content;

  var findLocationsByIdList = function findLocationsByIdList(idList, callback) {
    var body = JSON.stringify({
      ViewInput: {
        identifier: "udw-locations-by-path-string-".concat(idList.join('-')),
        "public": false,
        LocationQuery: {
          FacetBuilders: {},
          SortClauses: {
            SectionIdentifier: 'ascending'
          },
          Filter: {
            LocationIdCriterion: idList.join(',')
          },
          limit: 50,
          offset: 0
        }
      }
    });
    var request = new Request('/api/ezp/v2/views', {
      method: 'POST',
      headers: {
        Accept: 'application/vnd.ez.api.View+json; version=1.1',
        'Content-Type': 'application/vnd.ez.api.ViewInput+json; version=1.1',
        'X-Requested-With': 'XMLHttpRequest',
        'X-Siteaccess': siteaccess,
        'X-CSRF-Token': token
      },
      body: body,
      mode: 'same-origin',
      credentials: 'same-origin'
    });
    var errorMessage = Translator.trans(
    /*@Desc("Cannot find children Locations with ID %idList%")*/
    'select_location.error', {
      idList: idList.join(',')
    }, 'universal_discovery_widget');
    fetch(request).then(eZ.helpers.request.getJsonFromResponse).then(callback)["catch"](function () {
      return eZ.helpers.notification.showErrorNotification(errorMessage);
    });
  };

  var removeRootFromPathString = function removeRootFromPathString(pathString) {
    var pathArray = pathString.split('/').filter(function (val) {
      return val;
    });
    return pathArray.splice(1, pathArray.length - 1);
  };

  var buildBreadcrumbsString = function buildBreadcrumbsString(viewData) {
    var searchHitList = viewData.View.Result.searchHits.searchHit;
    return searchHitList.map(function (searchHit) {
      return searchHit.value.Location.ContentInfo.Content.TranslatedName;
    }).join(' / ');
  };

  var toggleVisibility = function toggleVisibility(btn, isLocationSelected) {
    var contentBreadcrumbsWrapper = doc.querySelector(btn.dataset.contentBreadcrumbsSelector);
    btn.hidden = isLocationSelected;

    if (contentBreadcrumbsWrapper) {
      contentBreadcrumbsWrapper.hidden = !isLocationSelected;
    }
  };

  var updateBreadcrumbsState = function updateBreadcrumbsState(btn, pathString) {
    var pathStringInput = doc.querySelector(btn.dataset.locationPathInputSelector);
    var contentBreadcrumbsContainer = doc.querySelector(btn.dataset.contentBreadcrumbsSelector);
    var contentBreadcrumbs = contentBreadcrumbsContainer.querySelector('.ez-tag__content');
    var contentBreadcrumbsSpinner = contentBreadcrumbsContainer.querySelector('.ez-tag__spinner');
    pathStringInput.value = pathString;
    pathStringInput.dispatchEvent(new Event('change'));

    if (!contentBreadcrumbs || !contentBreadcrumbsSpinner) {
      return;
    }

    if (!pathString) {
      contentBreadcrumbs.innerHTML = '';
      contentBreadcrumbs.hidden = true;
    } else {
      contentBreadcrumbsSpinner.hidden = false;
      findLocationsByIdList(removeRootFromPathString(pathString), function (data) {
        contentBreadcrumbs.innerHTML = buildBreadcrumbsString(data);
        contentBreadcrumbsSpinner.hidden = true;
        contentBreadcrumbs.hidden = false;
      });
    }
  };

  var closeUDW = function closeUDW() {
    return ReactDOM.unmountComponentAtNode(udwContainer);
  };

  var onConfirm = function onConfirm(btn, items) {
    closeUDW();
    var pathString = items[0].pathString;
    updateBreadcrumbsState(btn, pathString);
    toggleVisibility(btn, !!pathString);
  };

  var onCancel = function onCancel() {
    return closeUDW();
  };

  var openUDW = function openUDW(event) {
    event.preventDefault();
    var config = JSON.parse(event.currentTarget.dataset.udwConfig);
    ReactDOM.render(React.createElement(eZ.modules.UniversalDiscovery, _objectSpread({
      onConfirm: onConfirm.bind(null, event.currentTarget),
      onCancel: onCancel,
      title: event.currentTarget.dataset.universalDiscoveryTitle,
      multiple: false
    }, config)), udwContainer);
  };

  var clearSelection = function clearSelection(btn) {
    updateBreadcrumbsState(btn, '');
    toggleVisibility(btn, false);
  };

  btns.forEach(function (btn) {
    btn.addEventListener('click', openUDW, false);
    var tag = doc.querySelector(btn.dataset.contentBreadcrumbsSelector);
    var clearBtn = tag.querySelector('.ez-tag__remove-btn');

    if (clearBtn) {
      clearBtn.addEventListener('click', clearSelection.bind(null, btn), false);
    }
  });
})(window, window.document, window.eZ, window.React, window.ReactDOM, window.Translator);

/***/ }),

/***/ 11:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/button.content.edit.js ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.search.filters.js ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.search.js ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/udw/select.location.js ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.content.tree.js ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/button.translation.edit.js ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/button.content.edit.js */"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/button.content.edit.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.search.filters.js */"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.search.filters.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.search.js */"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.search.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/udw/select.location.js */"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/udw/select.location.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.content.tree.js */"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.content.tree.js");
module.exports = __webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/button.translation.edit.js */"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/button.translation.edit.js");


/***/ })

},[[11,"runtime"]]]);