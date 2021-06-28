(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ezplatform-admin-ui-role-assignment-create-js"],{

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.role_assignment.add.js":
/*!******************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.role_assignment.add.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(function (global, doc, eZ, React, ReactDOM) {
  var _this = this;

  var udwContainer = doc.getElementById('react-udw');
  var limitationsRadio = doc.querySelectorAll('.ez-limitations__radio');

  var closeUDW = function closeUDW() {
    return ReactDOM.unmountComponentAtNode(udwContainer);
  };

  var selectSubtreeConfirm = function selectSubtreeConfirm(data) {
    var selectedItems = data.reduce(function (total, item) {
      return "".concat(total, "<li>").concat(item.ContentInfo.Content.TranslatedName, "</li>");
    }, '');
    doc.querySelector('#role_assignment_create_locations').value = data.map(function (item) {
      return item.id;
    }).join();
    doc.querySelector('.ez-limitations__selected-subtree').innerHTML = selectedItems;
    closeUDW();
  };

  var selectSubtree = function selectSubtree(event) {
    event.preventDefault();
    var config = JSON.parse(event.currentTarget.dataset.udwConfig);
    var inputSelector = event.currentTarget.dataset.inputSelector;
    var selectedLocations = doc.querySelector(inputSelector).value;
    var selectedLocationsIds = selectedLocations ? selectedLocations.split(',') : [];
    ReactDOM.render(React.createElement(eZ.modules.UniversalDiscovery, _objectSpread({
      onConfirm: selectSubtreeConfirm.bind(_this),
      onCancel: closeUDW,
      multiple: true,
      selectedLocations: selectedLocationsIds
    }, config)), udwContainer);
  };

  var toggleDisabledState = function toggleDisabledState() {
    limitationsRadio.forEach(function (radio) {
      var disableNode = doc.querySelector(radio.dataset.disableSelector);
      var methodName = radio.checked ? 'removeAttribute' : 'setAttribute';

      if (disableNode) {
        disableNode[methodName]('disabled', 'disabled');
      }
    });
  };

  doc.querySelector('.ez-btn--select-subtree').addEventListener('click', selectSubtree, false);
  limitationsRadio.forEach(function (radio) {
    return radio.addEventListener('change', toggleDisabledState, false);
  });

  var addContentToInput = function addContentToInput(selectBtn, selectedItems) {
    var input = doc.querySelector(selectBtn.dataset.inputSelector);
    var selectedContentIds = selectedItems.map(function (item) {
      return item.ContentInfo.Content._id;
    }).join(',');
    input.value = selectedContentIds;
  };

  var removeContentFromInput = function removeContentFromInput(selectBtn, removedContentId) {
    var input = doc.querySelector(selectBtn.dataset.inputSelector);
    var contentIdsWithoutRemoved = input.value.split(',').filter(function (contentId) {
      return contentId !== removedContentId;
    });
    input.value = contentIdsWithoutRemoved.join(',');
  };

  var addContentTags = function addContentTags(selectBtn, selectedItems) {
    var tagsList = doc.querySelector(selectBtn.dataset.selectedContentListSelector);
    var tagTemplate = selectBtn.dataset.tagTemplate;
    var fragment = doc.createDocumentFragment();
    selectedItems.forEach(function (location) {
      var _location$ContentInfo = location.ContentInfo.Content,
          contentId = _location$ContentInfo._id,
          contentName = _location$ContentInfo.Name;
      var container = doc.createElement('ul');
      var renderedItem = tagTemplate.replace('{{ content_id }}', contentId).replace('{{ content_name }}', contentName);
      container.insertAdjacentHTML('beforeend', renderedItem);
      var listItemNode = container.querySelector('li');
      var tagNode = listItemNode.querySelector('.ez-tag');
      attachTagEventHandlers(selectBtn, tagNode);
      fragment.append(listItemNode);
    });
    tagsList.innerHTML = '';
    tagsList.append(fragment);
  };

  var handleTagRemove = function handleTagRemove(selectBtn, tag) {
    var removedContentId = tag.dataset.contentId;
    removeContentFromInput(selectBtn, removedContentId);
    tag.remove();
  };

  var attachTagEventHandlers = function attachTagEventHandlers(selectBtn, tag) {
    var removeTagBtn = tag.querySelector('.ez-tag__remove-btn');
    removeTagBtn.addEventListener('click', function () {
      return handleTagRemove(selectBtn, tag);
    }, false);
  };

  var handleUdwConfirm = function handleUdwConfirm(selectBtn, selectedItems) {
    if (selectedItems.length) {
      addContentToInput(selectBtn, selectedItems);
      addContentTags(selectBtn, selectedItems);
      selectBtn.setAttribute('data-selected-locations', selectedItems.map(function (item) {
        return item.id;
      }).join());
    }

    closeUDW();
  };

  var openUDW = function openUDW(event) {
    event.preventDefault();
    var selectBtn = event.currentTarget;
    var selectedLocations = selectBtn.dataset.selectedLocations;
    var selectedLocationsIds = selectedLocations ? selectedLocations.split(',') : [];
    var config = JSON.parse(selectBtn.dataset.udwConfig);
    ReactDOM.render(React.createElement(eZ.modules.UniversalDiscovery, _objectSpread({
      onConfirm: handleUdwConfirm.bind(_this, selectBtn),
      onCancel: function onCancel() {
        return ReactDOM.unmountComponentAtNode(udwContainer);
      },
      title: selectBtn.dataset.universaldiscoveryTitle,
      multiple: true,
      selectedLocations: selectedLocationsIds
    }, config)), udwContainer);
  };

  var selectUsersBtn = doc.querySelector('#role_assignment_create_users__btn');
  var selectGroupsBtn = doc.querySelector('#role_assignment_create_groups__btn');
  [selectUsersBtn, selectGroupsBtn].forEach(function (selectBtn) {
    selectBtn.addEventListener('click', openUDW, false);
    var tagsList = doc.querySelector(selectBtn.dataset.selectedContentListSelector);
    var tags = tagsList.querySelectorAll('.ez-tag');
    tags.forEach(function (tag) {
      attachTagEventHandlers(selectBtn, tag);
    });
  });
})(window, window.document, window.eZ, window.React, window.ReactDOM);

/***/ }),

/***/ 10:
/*!************************************************************************************************************************!*\
  !*** multi ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.role_assignment.add.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.role_assignment.add.js */"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.role_assignment.add.js");


/***/ })

},[[10,"runtime"]]]);