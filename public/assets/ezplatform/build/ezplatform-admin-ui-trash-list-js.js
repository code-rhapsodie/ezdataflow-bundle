(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ezplatform-admin-ui-trash-list-js"],{

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

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.trash.list.js":
/*!*********************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.trash.list.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(function (global, doc, eZ, React, ReactDOM, Translator) {
  var _this = this;

  var getUsersTimeout;
  var CLASS_SORTED_ASC = 'ez-table__sort-column--asc';
  var CLASS_SORTED_DESC = 'ez-table__sort-column--desc';
  var CLASS_VISIBLE_DATE_RANGE = 'ez-trash-search-form__range-wrapper--visible';
  var sortedActiveField = doc.querySelector('#trash_search_sort_field').value;
  var sortedActiveDirection = doc.querySelector('#trash_search_sort_direction').value;
  var dateFields = doc.querySelectorAll('.ez-trash-search-form__range-select');
  var trashedTypeInput = doc.querySelector('#trash_search_trashed');
  var token = doc.querySelector('meta[name="CSRF-Token"]').content;
  var siteaccess = doc.querySelector('meta[name="SiteAccess"]').content;
  var formSearch = doc.querySelector('form[name="trash_search"]');
  var sortField = doc.querySelector('#trash_search_sort_field');
  var sortDirection = doc.querySelector('#trash_search_sort_direction');
  var creatorInput = doc.querySelector('.ez-trash-search-form__item--creator .ez-trash-search-form__input');
  var usersList = doc.querySelector('.ez-trash-search-form__item--creator .ez-trash-search-form__user-list');
  var resetCreatorBtn = doc.querySelector('.ez-btn--reset-creator');
  var searchCreatorInput = doc.querySelector('#trash_search_creator');
  var sortableColumns = doc.querySelectorAll('.ez-table__sort-column');
  var btns = doc.querySelectorAll('.btn--open-udw');
  var udwContainer = doc.getElementById('react-udw');
  var autoSendNodes = doc.querySelectorAll('.ez-trash-search-form__item--auto-send');
  var errorMessage = Translator.trans(
  /*@Desc("Cannot fetch user list")*/
  'trash.user_list.error', {}, 'trash_ui');
  var dateConfig = {
    mode: 'range',
    locale: {
      rangeSeparator: ' - '
    },
    formatDate: function formatDate(date) {
      return eZ.helpers.timezone.formatShortDateTime(date, null, eZ.adminUiConfig.dateFormat.shortDate);
    }
  };

  var closeUDW = function closeUDW() {
    return ReactDOM.unmountComponentAtNode(udwContainer);
  };

  var onConfirm = function onConfirm(form, content) {
    var field = form.querySelector('#trash_item_restore_location_location');
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
    var form = event.target.closest('form[name="trash_item_restore"]');
    var config = JSON.parse(event.currentTarget.dataset.udwConfig);
    var title = Translator.trans(
    /*@Desc("Select a Location to restore the Content item(s)")*/
    'restore_under_new_location.title', {}, 'universal_discovery_widget');
    ReactDOM.render(React.createElement(eZ.modules.UniversalDiscovery, _objectSpread({
      onConfirm: onConfirm.bind(_this, form),
      onCancel: onCancel,
      title: title,
      containersOnly: true,
      multiple: false
    }, config)), udwContainer);
  };

  btns.forEach(function (btn) {
    return btn.addEventListener('click', openUDW, false);
  });

  var checkboxes = _toConsumableArray(doc.querySelectorAll('form[name="trash_item_restore"] input[type="checkbox"]'));

  var buttonRestore = doc.querySelector('#trash_item_restore_restore');
  var buttonRestoreUnderNewParent = doc.querySelector('#trash_item_restore_location_select_content');
  var buttonDelete = doc.querySelector('#delete-trash-items');

  var enableButtons = function enableButtons() {
    var isEmptySelection = checkboxes.every(function (el) {
      return !el.checked;
    });
    var isMissingParent = checkboxes.some(function (el) {
      return el.checked && parseInt(el.dataset.isParentInTrash, 10) === 1;
    });

    if (buttonRestore) {
      buttonRestore.disabled = isEmptySelection || isMissingParent;
    }

    if (buttonDelete) {
      buttonDelete.disabled = isEmptySelection;
    }

    if (buttonRestoreUnderNewParent) {
      buttonRestoreUnderNewParent.disabled = isEmptySelection;
    }
  };

  var updateTrashForm = function updateTrashForm(checkboxes) {
    checkboxes.forEach(function (checkbox) {
      var trashFormCheckbox = doc.querySelector("form[name=\"trash_item_delete\"] input[type=\"checkbox\"][value=\"".concat(checkbox.value, "\"]"));

      if (trashFormCheckbox) {
        trashFormCheckbox.checked = checkbox.checked;
      }
    });
  };

  var handleCheckboxChange = function handleCheckboxChange(event) {
    updateTrashForm([event.target]);
    enableButtons();
  };

  var handleResetUser = function handleResetUser() {
    searchCreatorInput.value = '';
    creatorInput.value = '';
    creatorInput.removeAttribute('disabled');
  };

  var handleClickOutsideUserList = function handleClickOutsideUserList(event) {
    if (event.target.closest('.ez-trash-search-form__item--creator')) {
      return;
    }

    creatorInput.value = '';
    usersList.classList.add('ez-trash-search-form__item__user-list--hidden');
    doc.querySelector('body').removeEventListener('click', handleClickOutsideUserList, false);
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
    fetch(request).then(eZ.helpers.request.getJsonFromResponse).then(showUsersList)["catch"](function () {
      return eZ.helpers.notification.showErrorNotification(errorMessage);
    });
  };

  var createUsersListItem = function createUsersListItem(user) {
    return "<li data-id=\"".concat(user._id, "\" data-name=\"").concat(user.TranslatedName, "\" class=\"ez-trash-search-form__user-item\">").concat(user.TranslatedName, "</li>");
  };

  var showUsersList = function showUsersList(data) {
    var hits = data.View.Result.searchHits.searchHit;
    var users = hits.reduce(function (total, hit) {
      return total + createUsersListItem(hit.value.Content);
    }, '');
    var methodName = users ? 'addEventListener' : 'removeEventListener';
    usersList.innerHTML = users;
    usersList.classList.remove('ez-trash-search-form__user-list--hidden');
    doc.querySelector('body')[methodName]('click', handleClickOutsideUserList, false);
  };

  var handleTyping = function handleTyping(event) {
    var value = event.target.value.trim();
    global.clearTimeout(getUsersTimeout);

    if (value.length > 2) {
      getUsersTimeout = global.setTimeout(getUsersList.bind(null, value), 200);
    } else {
      usersList.classList.add('ez-trash-search-form__user-list--hidden');
      doc.querySelector('body').removeEventListener('click', handleClickOutsideUserList, false);
    }
  };

  var handleSelectUser = function handleSelectUser(event) {
    searchCreatorInput.value = event.target.dataset.id;
    usersList.classList.add('ez-trash-search-form__user-list--hidden');
    creatorInput.value = event.target.dataset.name;
    creatorInput.setAttribute('disabled', true);
    doc.querySelector('body').removeEventListener('click', handleClickOutsideUserList, false);
    formSearch.submit();
  };

  var sortTrashItems = function sortTrashItems(event) {
    var target = event.target;
    var _target$dataset = target.dataset,
        field = _target$dataset.field,
        direction = _target$dataset.direction;
    sortField.value = field;
    target.dataset.direction = direction === 'ASC' ? 'DESC' : 'ASC';
    sortDirection.setAttribute('value', direction === 'DESC' ? 1 : 0);
    formSearch.submit();
  };

  var toggleDatesSelectVisibility = function toggleDatesSelectVisibility(event) {
    var datesRangeNode = doc.querySelector(event.target.dataset.targetSelector);

    if (event.target.value !== 'custom_range') {
      doc.querySelector(datesRangeNode.dataset.periodSelector).value = event.target.value;
      doc.querySelector(datesRangeNode.dataset.endSelector).value = '';
      datesRangeNode.classList.remove(CLASS_VISIBLE_DATE_RANGE);
      formSearch.submit();
      return;
    }

    datesRangeNode.classList.add(CLASS_VISIBLE_DATE_RANGE);
  };

  var setSelectedDateRange = function setSelectedDateRange(selectedDates, dateString, instance) {
    var dateRange = instance.input.closest('.ez-trash-search-form__range-wrapper');

    if (selectedDates.length === 2) {
      var startDate = getUnixTimestampUTC(selectedDates[0]);
      var endDate = getUnixTimestampUTC(selectedDates[1]);
      var secondsInDay = 86400;
      var days = (endDate - startDate) / secondsInDay;
      doc.querySelector(dateRange.dataset.periodSelector).value = "P0Y0M".concat(days, "D");
      doc.querySelector(dateRange.dataset.endSelector).value = endDate;
      formSearch.submit();
    }
  };

  var getUnixTimestampUTC = function getUnixTimestampUTC(dateObject) {
    var date = new Date(Date.UTC(dateObject.getFullYear(), dateObject.getMonth(), dateObject.getDate()));
    date = Math.floor(date.getTime() / 1000);
    return date;
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

  var handleAutoSubmitNodes = function handleAutoSubmitNodes(event) {
    event.preventDefault();

    if (event.target.value !== 'custom_range') {
      formSearch.submit();
    }
  };

  var setSortedClass = function setSortedClass() {
    doc.querySelectorAll('.ez-table__sort-column').forEach(function (node) {
      node.classList.remove(CLASS_SORTED_ASC, CLASS_SORTED_DESC);
    });

    if (sortedActiveField) {
      var sortedFieldNode = doc.querySelector(".ez-table__sort-column--".concat(sortedActiveField));

      if (parseInt(sortedActiveDirection) === 1) {
        sortedFieldNode.classList.add(CLASS_SORTED_ASC);
      } else {
        sortedFieldNode.classList.add(CLASS_SORTED_DESC);
      }
    }
  };

  setSortedClass();
  dateFields.forEach(initFlatPickr);
  autoSendNodes.forEach(function (node) {
    return node.addEventListener('change', handleAutoSubmitNodes, false);
  });
  sortableColumns.forEach(function (column) {
    return column.addEventListener('click', sortTrashItems, false);
  });
  trashedTypeInput.addEventListener('change', toggleDatesSelectVisibility, false);
  creatorInput.addEventListener('keyup', handleTyping, false);
  usersList.addEventListener('click', handleSelectUser, false);
  resetCreatorBtn.addEventListener('click', handleResetUser, false);
  updateTrashForm(checkboxes);
  enableButtons();
  checkboxes.forEach(function (checkbox) {
    return checkbox.addEventListener('change', handleCheckboxChange, false);
  });
})(window, window.document, window.eZ, window.React, window.ReactDOM, window.Translator);

/***/ }),

/***/ 14:
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** multi ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.trash.list.js ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.content.tree.js ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.trash.list.js */"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.trash.list.js");
module.exports = __webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.content.tree.js */"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.content.tree.js");


/***/ })

},[[14,"runtime"]]]);