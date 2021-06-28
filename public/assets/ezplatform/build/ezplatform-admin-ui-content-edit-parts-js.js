(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ezplatform-admin-ui-content-edit-parts-js"],{

/***/ "./vendor/ezsystems/ezplatform-admin-ui-assets/Resources/public/vendors/leaflet/dist/leaflet.js":
/*!******************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui-assets/Resources/public/vendors/leaflet/dist/leaflet.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* @preserve
 * Leaflet 1.7.1, a JS library for interactive maps. http://leafletjs.com
 * (c) 2010-2019 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */
!function (t, i) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? i(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (i),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function (t) {
  "use strict";

  function h(t) {
    for (var i, e, n = 1, o = arguments.length; n < o; n++) {
      for (i in e = arguments[n]) {
        t[i] = e[i];
      }
    }

    return t;
  }

  var s = Object.create || function (t) {
    return i.prototype = t, new i();
  };

  function i() {}

  function p(t, i) {
    var e = Array.prototype.slice;
    if (t.bind) return t.bind.apply(t, e.call(arguments, 1));
    var n = e.call(arguments, 2);
    return function () {
      return t.apply(i, n.length ? n.concat(e.call(arguments)) : arguments);
    };
  }

  var e = 0;

  function m(t) {
    return t._leaflet_id = t._leaflet_id || ++e, t._leaflet_id;
  }

  function n(t, i, e) {
    var n,
        o,
        s = function s() {
      n = !1, o && (r.apply(e, o), o = !1);
    },
        r = function r() {
      n ? o = arguments : (t.apply(e, arguments), setTimeout(s, i), n = !0);
    };

    return r;
  }

  function o(t, i, e) {
    var n = i[1],
        o = i[0],
        s = n - o;
    return t === n && e ? t : ((t - o) % s + s) % s + o;
  }

  function a() {
    return !1;
  }

  function r(t, i) {
    var e = Math.pow(10, void 0 === i ? 6 : i);
    return Math.round(t * e) / e;
  }

  function u(t) {
    return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
  }

  function l(t) {
    return u(t).split(/\s+/);
  }

  function c(t, i) {
    for (var e in Object.prototype.hasOwnProperty.call(t, "options") || (t.options = t.options ? s(t.options) : {}), i) {
      t.options[e] = i[e];
    }

    return t.options;
  }

  function _(t, i, e) {
    var n = [];

    for (var o in t) {
      n.push(encodeURIComponent(e ? o.toUpperCase() : o) + "=" + encodeURIComponent(t[o]));
    }

    return (i && -1 !== i.indexOf("?") ? "&" : "?") + n.join("&");
  }

  var d = /\{ *([\w_-]+) *\}/g;

  function f(t, n) {
    return t.replace(d, function (t, i) {
      var e = n[i];
      if (void 0 === e) throw new Error("No value provided for variable " + t);
      return "function" == typeof e && (e = e(n)), e;
    });
  }

  var g = Array.isArray || function (t) {
    return "[object Array]" === Object.prototype.toString.call(t);
  };

  function v(t, i) {
    for (var e = 0; e < t.length; e++) {
      if (t[e] === i) return e;
    }

    return -1;
  }

  var y = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";

  function x(t) {
    return window["webkit" + t] || window["moz" + t] || window["ms" + t];
  }

  var w = 0;

  function P(t) {
    var i = +new Date(),
        e = Math.max(0, 16 - (i - w));
    return w = i + e, window.setTimeout(t, e);
  }

  var b = window.requestAnimationFrame || x("RequestAnimationFrame") || P,
      T = window.cancelAnimationFrame || x("CancelAnimationFrame") || x("CancelRequestAnimationFrame") || function (t) {
    window.clearTimeout(t);
  };

  function M(t, i, e) {
    if (!e || b !== P) return b.call(window, p(t, i));
    t.call(i);
  }

  function z(t) {
    t && T.call(window, t);
  }

  var C = {
    extend: h,
    create: s,
    bind: p,
    lastId: e,
    stamp: m,
    throttle: n,
    wrapNum: o,
    falseFn: a,
    formatNum: r,
    trim: u,
    splitWords: l,
    setOptions: c,
    getParamString: _,
    template: f,
    isArray: g,
    indexOf: v,
    emptyImageUrl: y,
    requestFn: b,
    cancelFn: T,
    requestAnimFrame: M,
    cancelAnimFrame: z
  };

  function S() {}

  S.extend = function (t) {
    function i() {
      this.initialize && this.initialize.apply(this, arguments), this.callInitHooks();
    }

    var e = i.__super__ = this.prototype,
        n = s(e);

    for (var o in (n.constructor = i).prototype = n, this) {
      Object.prototype.hasOwnProperty.call(this, o) && "prototype" !== o && "__super__" !== o && (i[o] = this[o]);
    }

    return t.statics && (h(i, t.statics), delete t.statics), t.includes && (function (t) {
      if ("undefined" == typeof L || !L || !L.Mixin) return;
      t = g(t) ? t : [t];

      for (var i = 0; i < t.length; i++) {
        t[i] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", new Error().stack);
      }
    }(t.includes), h.apply(null, [n].concat(t.includes)), delete t.includes), n.options && (t.options = h(s(n.options), t.options)), h(n, t), n._initHooks = [], n.callInitHooks = function () {
      if (!this._initHooksCalled) {
        e.callInitHooks && e.callInitHooks.call(this), this._initHooksCalled = !0;

        for (var t = 0, i = n._initHooks.length; t < i; t++) {
          n._initHooks[t].call(this);
        }
      }
    }, i;
  }, S.include = function (t) {
    return h(this.prototype, t), this;
  }, S.mergeOptions = function (t) {
    return h(this.prototype.options, t), this;
  }, S.addInitHook = function (t) {
    var i = Array.prototype.slice.call(arguments, 1),
        e = "function" == typeof t ? t : function () {
      this[t].apply(this, i);
    };
    return this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(e), this;
  };
  var Z = {
    on: function on(t, i, e) {
      if ("object" == _typeof(t)) for (var n in t) {
        this._on(n, t[n], i);
      } else for (var o = 0, s = (t = l(t)).length; o < s; o++) {
        this._on(t[o], i, e);
      }
      return this;
    },
    off: function off(t, i, e) {
      if (t) {
        if ("object" == _typeof(t)) for (var n in t) {
          this._off(n, t[n], i);
        } else for (var o = 0, s = (t = l(t)).length; o < s; o++) {
          this._off(t[o], i, e);
        }
      } else delete this._events;
      return this;
    },
    _on: function _on(t, i, e) {
      this._events = this._events || {};
      var n = this._events[t];
      n || (n = [], this._events[t] = n), e === this && (e = void 0);

      for (var o = {
        fn: i,
        ctx: e
      }, s = n, r = 0, a = s.length; r < a; r++) {
        if (s[r].fn === i && s[r].ctx === e) return;
      }

      s.push(o);
    },
    _off: function _off(t, i, e) {
      var n, o, s;
      if (this._events && (n = this._events[t])) if (i) {
        if (e === this && (e = void 0), n) for (o = 0, s = n.length; o < s; o++) {
          var r = n[o];
          if (r.ctx === e && r.fn === i) return r.fn = a, this._firingCount && (this._events[t] = n = n.slice()), void n.splice(o, 1);
        }
      } else {
        for (o = 0, s = n.length; o < s; o++) {
          n[o].fn = a;
        }

        delete this._events[t];
      }
    },
    fire: function fire(t, i, e) {
      if (!this.listens(t, e)) return this;
      var n = h({}, i, {
        type: t,
        target: this,
        sourceTarget: i && i.sourceTarget || this
      });

      if (this._events) {
        var o = this._events[t];

        if (o) {
          this._firingCount = this._firingCount + 1 || 1;

          for (var s = 0, r = o.length; s < r; s++) {
            var a = o[s];
            a.fn.call(a.ctx || this, n);
          }

          this._firingCount--;
        }
      }

      return e && this._propagateEvent(n), this;
    },
    listens: function listens(t, i) {
      var e = this._events && this._events[t];
      if (e && e.length) return !0;
      if (i) for (var n in this._eventParents) {
        if (this._eventParents[n].listens(t, i)) return !0;
      }
      return !1;
    },
    once: function once(t, i, e) {
      if ("object" == _typeof(t)) {
        for (var n in t) {
          this.once(n, t[n], i);
        }

        return this;
      }

      var o = p(function () {
        this.off(t, i, e).off(t, o, e);
      }, this);
      return this.on(t, i, e).on(t, o, e);
    },
    addEventParent: function addEventParent(t) {
      return this._eventParents = this._eventParents || {}, this._eventParents[m(t)] = t, this;
    },
    removeEventParent: function removeEventParent(t) {
      return this._eventParents && delete this._eventParents[m(t)], this;
    },
    _propagateEvent: function _propagateEvent(t) {
      for (var i in this._eventParents) {
        this._eventParents[i].fire(t.type, h({
          layer: t.target,
          propagatedFrom: t.target
        }, t), !0);
      }
    }
  };
  Z.addEventListener = Z.on, Z.removeEventListener = Z.clearAllEventListeners = Z.off, Z.addOneTimeEventListener = Z.once, Z.fireEvent = Z.fire, Z.hasEventListeners = Z.listens;
  var E = S.extend(Z);

  function k(t, i, e) {
    this.x = e ? Math.round(t) : t, this.y = e ? Math.round(i) : i;
  }

  var B = Math.trunc || function (t) {
    return 0 < t ? Math.floor(t) : Math.ceil(t);
  };

  function A(t, i, e) {
    return t instanceof k ? t : g(t) ? new k(t[0], t[1]) : null == t ? t : "object" == _typeof(t) && "x" in t && "y" in t ? new k(t.x, t.y) : new k(t, i, e);
  }

  function I(t, i) {
    if (t) for (var e = i ? [t, i] : t, n = 0, o = e.length; n < o; n++) {
      this.extend(e[n]);
    }
  }

  function O(t, i) {
    return !t || t instanceof I ? t : new I(t, i);
  }

  function R(t, i) {
    if (t) for (var e = i ? [t, i] : t, n = 0, o = e.length; n < o; n++) {
      this.extend(e[n]);
    }
  }

  function N(t, i) {
    return t instanceof R ? t : new R(t, i);
  }

  function D(t, i, e) {
    if (isNaN(t) || isNaN(i)) throw new Error("Invalid LatLng object: (" + t + ", " + i + ")");
    this.lat = +t, this.lng = +i, void 0 !== e && (this.alt = +e);
  }

  function j(t, i, e) {
    return t instanceof D ? t : g(t) && "object" != _typeof(t[0]) ? 3 === t.length ? new D(t[0], t[1], t[2]) : 2 === t.length ? new D(t[0], t[1]) : null : null == t ? t : "object" == _typeof(t) && "lat" in t ? new D(t.lat, "lng" in t ? t.lng : t.lon, t.alt) : void 0 === i ? null : new D(t, i, e);
  }

  k.prototype = {
    clone: function clone() {
      return new k(this.x, this.y);
    },
    add: function add(t) {
      return this.clone()._add(A(t));
    },
    _add: function _add(t) {
      return this.x += t.x, this.y += t.y, this;
    },
    subtract: function subtract(t) {
      return this.clone()._subtract(A(t));
    },
    _subtract: function _subtract(t) {
      return this.x -= t.x, this.y -= t.y, this;
    },
    divideBy: function divideBy(t) {
      return this.clone()._divideBy(t);
    },
    _divideBy: function _divideBy(t) {
      return this.x /= t, this.y /= t, this;
    },
    multiplyBy: function multiplyBy(t) {
      return this.clone()._multiplyBy(t);
    },
    _multiplyBy: function _multiplyBy(t) {
      return this.x *= t, this.y *= t, this;
    },
    scaleBy: function scaleBy(t) {
      return new k(this.x * t.x, this.y * t.y);
    },
    unscaleBy: function unscaleBy(t) {
      return new k(this.x / t.x, this.y / t.y);
    },
    round: function round() {
      return this.clone()._round();
    },
    _round: function _round() {
      return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
    },
    floor: function floor() {
      return this.clone()._floor();
    },
    _floor: function _floor() {
      return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
    },
    ceil: function ceil() {
      return this.clone()._ceil();
    },
    _ceil: function _ceil() {
      return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
    },
    trunc: function trunc() {
      return this.clone()._trunc();
    },
    _trunc: function _trunc() {
      return this.x = B(this.x), this.y = B(this.y), this;
    },
    distanceTo: function distanceTo(t) {
      var i = (t = A(t)).x - this.x,
          e = t.y - this.y;
      return Math.sqrt(i * i + e * e);
    },
    equals: function equals(t) {
      return (t = A(t)).x === this.x && t.y === this.y;
    },
    contains: function contains(t) {
      return t = A(t), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y);
    },
    toString: function toString() {
      return "Point(" + r(this.x) + ", " + r(this.y) + ")";
    }
  }, I.prototype = {
    extend: function extend(t) {
      return t = A(t), this.min || this.max ? (this.min.x = Math.min(t.x, this.min.x), this.max.x = Math.max(t.x, this.max.x), this.min.y = Math.min(t.y, this.min.y), this.max.y = Math.max(t.y, this.max.y)) : (this.min = t.clone(), this.max = t.clone()), this;
    },
    getCenter: function getCenter(t) {
      return new k((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t);
    },
    getBottomLeft: function getBottomLeft() {
      return new k(this.min.x, this.max.y);
    },
    getTopRight: function getTopRight() {
      return new k(this.max.x, this.min.y);
    },
    getTopLeft: function getTopLeft() {
      return this.min;
    },
    getBottomRight: function getBottomRight() {
      return this.max;
    },
    getSize: function getSize() {
      return this.max.subtract(this.min);
    },
    contains: function contains(t) {
      var i, e;
      return (t = ("number" == typeof t[0] || t instanceof k ? A : O)(t)) instanceof I ? (i = t.min, e = t.max) : i = e = t, i.x >= this.min.x && e.x <= this.max.x && i.y >= this.min.y && e.y <= this.max.y;
    },
    intersects: function intersects(t) {
      t = O(t);
      var i = this.min,
          e = this.max,
          n = t.min,
          o = t.max,
          s = o.x >= i.x && n.x <= e.x,
          r = o.y >= i.y && n.y <= e.y;
      return s && r;
    },
    overlaps: function overlaps(t) {
      t = O(t);
      var i = this.min,
          e = this.max,
          n = t.min,
          o = t.max,
          s = o.x > i.x && n.x < e.x,
          r = o.y > i.y && n.y < e.y;
      return s && r;
    },
    isValid: function isValid() {
      return !(!this.min || !this.max);
    }
  }, R.prototype = {
    extend: function extend(t) {
      var i,
          e,
          n = this._southWest,
          o = this._northEast;
      if (t instanceof D) e = i = t;else {
        if (!(t instanceof R)) return t ? this.extend(j(t) || N(t)) : this;
        if (i = t._southWest, e = t._northEast, !i || !e) return this;
      }
      return n || o ? (n.lat = Math.min(i.lat, n.lat), n.lng = Math.min(i.lng, n.lng), o.lat = Math.max(e.lat, o.lat), o.lng = Math.max(e.lng, o.lng)) : (this._southWest = new D(i.lat, i.lng), this._northEast = new D(e.lat, e.lng)), this;
    },
    pad: function pad(t) {
      var i = this._southWest,
          e = this._northEast,
          n = Math.abs(i.lat - e.lat) * t,
          o = Math.abs(i.lng - e.lng) * t;
      return new R(new D(i.lat - n, i.lng - o), new D(e.lat + n, e.lng + o));
    },
    getCenter: function getCenter() {
      return new D((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2);
    },
    getSouthWest: function getSouthWest() {
      return this._southWest;
    },
    getNorthEast: function getNorthEast() {
      return this._northEast;
    },
    getNorthWest: function getNorthWest() {
      return new D(this.getNorth(), this.getWest());
    },
    getSouthEast: function getSouthEast() {
      return new D(this.getSouth(), this.getEast());
    },
    getWest: function getWest() {
      return this._southWest.lng;
    },
    getSouth: function getSouth() {
      return this._southWest.lat;
    },
    getEast: function getEast() {
      return this._northEast.lng;
    },
    getNorth: function getNorth() {
      return this._northEast.lat;
    },
    contains: function contains(t) {
      t = ("number" == typeof t[0] || t instanceof D || "lat" in t ? j : N)(t);
      var i,
          e,
          n = this._southWest,
          o = this._northEast;
      return t instanceof R ? (i = t.getSouthWest(), e = t.getNorthEast()) : i = e = t, i.lat >= n.lat && e.lat <= o.lat && i.lng >= n.lng && e.lng <= o.lng;
    },
    intersects: function intersects(t) {
      t = N(t);
      var i = this._southWest,
          e = this._northEast,
          n = t.getSouthWest(),
          o = t.getNorthEast(),
          s = o.lat >= i.lat && n.lat <= e.lat,
          r = o.lng >= i.lng && n.lng <= e.lng;
      return s && r;
    },
    overlaps: function overlaps(t) {
      t = N(t);
      var i = this._southWest,
          e = this._northEast,
          n = t.getSouthWest(),
          o = t.getNorthEast(),
          s = o.lat > i.lat && n.lat < e.lat,
          r = o.lng > i.lng && n.lng < e.lng;
      return s && r;
    },
    toBBoxString: function toBBoxString() {
      return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",");
    },
    equals: function equals(t, i) {
      return !!t && (t = N(t), this._southWest.equals(t.getSouthWest(), i) && this._northEast.equals(t.getNorthEast(), i));
    },
    isValid: function isValid() {
      return !(!this._southWest || !this._northEast);
    }
  };
  var W,
      H = {
    latLngToPoint: function latLngToPoint(t, i) {
      var e = this.projection.project(t),
          n = this.scale(i);
      return this.transformation._transform(e, n);
    },
    pointToLatLng: function pointToLatLng(t, i) {
      var e = this.scale(i),
          n = this.transformation.untransform(t, e);
      return this.projection.unproject(n);
    },
    project: function project(t) {
      return this.projection.project(t);
    },
    unproject: function unproject(t) {
      return this.projection.unproject(t);
    },
    scale: function scale(t) {
      return 256 * Math.pow(2, t);
    },
    zoom: function zoom(t) {
      return Math.log(t / 256) / Math.LN2;
    },
    getProjectedBounds: function getProjectedBounds(t) {
      if (this.infinite) return null;
      var i = this.projection.bounds,
          e = this.scale(t);
      return new I(this.transformation.transform(i.min, e), this.transformation.transform(i.max, e));
    },
    infinite: !(D.prototype = {
      equals: function equals(t, i) {
        return !!t && (t = j(t), Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng)) <= (void 0 === i ? 1e-9 : i));
      },
      toString: function toString(t) {
        return "LatLng(" + r(this.lat, t) + ", " + r(this.lng, t) + ")";
      },
      distanceTo: function distanceTo(t) {
        return F.distance(this, j(t));
      },
      wrap: function wrap() {
        return F.wrapLatLng(this);
      },
      toBounds: function toBounds(t) {
        var i = 180 * t / 40075017,
            e = i / Math.cos(Math.PI / 180 * this.lat);
        return N([this.lat - i, this.lng - e], [this.lat + i, this.lng + e]);
      },
      clone: function clone() {
        return new D(this.lat, this.lng, this.alt);
      }
    }),
    wrapLatLng: function wrapLatLng(t) {
      var i = this.wrapLng ? o(t.lng, this.wrapLng, !0) : t.lng;
      return new D(this.wrapLat ? o(t.lat, this.wrapLat, !0) : t.lat, i, t.alt);
    },
    wrapLatLngBounds: function wrapLatLngBounds(t) {
      var i = t.getCenter(),
          e = this.wrapLatLng(i),
          n = i.lat - e.lat,
          o = i.lng - e.lng;
      if (0 == n && 0 == o) return t;
      var s = t.getSouthWest(),
          r = t.getNorthEast();
      return new R(new D(s.lat - n, s.lng - o), new D(r.lat - n, r.lng - o));
    }
  },
      F = h({}, H, {
    wrapLng: [-180, 180],
    R: 6371e3,
    distance: function distance(t, i) {
      var e = Math.PI / 180,
          n = t.lat * e,
          o = i.lat * e,
          s = Math.sin((i.lat - t.lat) * e / 2),
          r = Math.sin((i.lng - t.lng) * e / 2),
          a = s * s + Math.cos(n) * Math.cos(o) * r * r,
          h = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      return this.R * h;
    }
  }),
      U = 6378137,
      V = {
    R: U,
    MAX_LATITUDE: 85.0511287798,
    project: function project(t) {
      var i = Math.PI / 180,
          e = this.MAX_LATITUDE,
          n = Math.max(Math.min(e, t.lat), -e),
          o = Math.sin(n * i);
      return new k(this.R * t.lng * i, this.R * Math.log((1 + o) / (1 - o)) / 2);
    },
    unproject: function unproject(t) {
      var i = 180 / Math.PI;
      return new D((2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * i, t.x * i / this.R);
    },
    bounds: new I([-(W = U * Math.PI), -W], [W, W])
  };

  function q(t, i, e, n) {
    if (g(t)) return this._a = t[0], this._b = t[1], this._c = t[2], void (this._d = t[3]);
    this._a = t, this._b = i, this._c = e, this._d = n;
  }

  function G(t, i, e, n) {
    return new q(t, i, e, n);
  }

  q.prototype = {
    transform: function transform(t, i) {
      return this._transform(t.clone(), i);
    },
    _transform: function _transform(t, i) {
      return i = i || 1, t.x = i * (this._a * t.x + this._b), t.y = i * (this._c * t.y + this._d), t;
    },
    untransform: function untransform(t, i) {
      return i = i || 1, new k((t.x / i - this._b) / this._a, (t.y / i - this._d) / this._c);
    }
  };
  var K,
      Y = h({}, F, {
    code: "EPSG:3857",
    projection: V,
    transformation: G(K = .5 / (Math.PI * V.R), .5, -K, .5)
  }),
      X = h({}, Y, {
    code: "EPSG:900913"
  });

  function J(t) {
    return document.createElementNS("http://www.w3.org/2000/svg", t);
  }

  function $(t, i) {
    for (var e, n, o, s, r = "", a = 0, h = t.length; a < h; a++) {
      for (e = 0, n = (o = t[a]).length; e < n; e++) {
        r += (e ? "L" : "M") + (s = o[e]).x + " " + s.y;
      }

      r += i ? Zt ? "z" : "x" : "";
    }

    return r || "M0 0";
  }

  var Q = document.documentElement.style,
      tt = ("ActiveXObject" in window),
      it = tt && !document.addEventListener,
      et = "msLaunchUri" in navigator && !("documentMode" in document),
      nt = kt("webkit"),
      ot = kt("android"),
      st = kt("android 2") || kt("android 3"),
      rt = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10),
      at = ot && kt("Google") && rt < 537 && !("AudioNode" in window),
      ht = !!window.opera,
      ut = !et && kt("chrome"),
      lt = kt("gecko") && !nt && !ht && !tt,
      ct = !ut && kt("safari"),
      _t = kt("phantom"),
      dt = ("OTransition" in Q),
      pt = 0 === navigator.platform.indexOf("Win"),
      mt = tt && "transition" in Q,
      ft = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix() && !st,
      gt = ("MozPerspective" in Q),
      vt = !window.L_DISABLE_3D && (mt || ft || gt) && !dt && !_t,
      yt = "undefined" != typeof orientation || kt("mobile"),
      xt = yt && nt,
      wt = yt && ft,
      Pt = !window.PointerEvent && window.MSPointerEvent,
      Lt = !(!window.PointerEvent && !Pt),
      bt = !window.L_NO_TOUCH && (Lt || "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
      Tt = yt && ht,
      Mt = yt && lt,
      zt = 1 < (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI),
      Ct = function () {
    var t = !1;

    try {
      var i = Object.defineProperty({}, "passive", {
        get: function get() {
          t = !0;
        }
      });
      window.addEventListener("testPassiveEventSupport", a, i), window.removeEventListener("testPassiveEventSupport", a, i);
    } catch (t) {}

    return t;
  }(),
      St = !!document.createElement("canvas").getContext,
      Zt = !(!document.createElementNS || !J("svg").createSVGRect),
      Et = !Zt && function () {
    try {
      var t = document.createElement("div");
      t.innerHTML = '<v:shape adj="1"/>';
      var i = t.firstChild;
      return i.style.behavior = "url(#default#VML)", i && "object" == _typeof(i.adj);
    } catch (t) {
      return !1;
    }
  }();

  function kt(t) {
    return 0 <= navigator.userAgent.toLowerCase().indexOf(t);
  }

  var Bt = {
    ie: tt,
    ielt9: it,
    edge: et,
    webkit: nt,
    android: ot,
    android23: st,
    androidStock: at,
    opera: ht,
    chrome: ut,
    gecko: lt,
    safari: ct,
    phantom: _t,
    opera12: dt,
    win: pt,
    ie3d: mt,
    webkit3d: ft,
    gecko3d: gt,
    any3d: vt,
    mobile: yt,
    mobileWebkit: xt,
    mobileWebkit3d: wt,
    msPointer: Pt,
    pointer: Lt,
    touch: bt,
    mobileOpera: Tt,
    mobileGecko: Mt,
    retina: zt,
    passiveEvents: Ct,
    canvas: St,
    svg: Zt,
    vml: Et
  },
      At = Pt ? "MSPointerDown" : "pointerdown",
      It = Pt ? "MSPointerMove" : "pointermove",
      Ot = Pt ? "MSPointerUp" : "pointerup",
      Rt = Pt ? "MSPointerCancel" : "pointercancel",
      Nt = {},
      Dt = !1;

  function jt(t, i, e, n) {
    function o(t) {
      Ut(t, r);
    }

    var s, r, a, h, u, l, c, _;

    function d(t) {
      t.pointerType === (t.MSPOINTER_TYPE_MOUSE || "mouse") && 0 === t.buttons || Ut(t, h);
    }

    return "touchstart" === i ? (u = t, l = e, c = n, _ = p(function (t) {
      t.MSPOINTER_TYPE_TOUCH && t.pointerType === t.MSPOINTER_TYPE_TOUCH && Ri(t), Ut(t, l);
    }), u["_leaflet_touchstart" + c] = _, u.addEventListener(At, _, !1), Dt || (document.addEventListener(At, Wt, !0), document.addEventListener(It, Ht, !0), document.addEventListener(Ot, Ft, !0), document.addEventListener(Rt, Ft, !0), Dt = !0)) : "touchmove" === i ? (h = e, (a = t)["_leaflet_touchmove" + n] = d, a.addEventListener(It, d, !1)) : "touchend" === i && (r = e, (s = t)["_leaflet_touchend" + n] = o, s.addEventListener(Ot, o, !1), s.addEventListener(Rt, o, !1)), this;
  }

  function Wt(t) {
    Nt[t.pointerId] = t;
  }

  function Ht(t) {
    Nt[t.pointerId] && (Nt[t.pointerId] = t);
  }

  function Ft(t) {
    delete Nt[t.pointerId];
  }

  function Ut(t, i) {
    for (var e in t.touches = [], Nt) {
      t.touches.push(Nt[e]);
    }

    t.changedTouches = [t], i(t);
  }

  var Vt = Pt ? "MSPointerDown" : Lt ? "pointerdown" : "touchstart",
      qt = Pt ? "MSPointerUp" : Lt ? "pointerup" : "touchend",
      Gt = "_leaflet_";
  var Kt,
      Yt,
      Xt,
      Jt,
      $t,
      Qt,
      ti = fi(["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]),
      ii = fi(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]),
      ei = "webkitTransition" === ii || "OTransition" === ii ? ii + "End" : "transitionend";

  function ni(t) {
    return "string" == typeof t ? document.getElementById(t) : t;
  }

  function oi(t, i) {
    var e,
        n = t.style[i] || t.currentStyle && t.currentStyle[i];
    return n && "auto" !== n || !document.defaultView || (n = (e = document.defaultView.getComputedStyle(t, null)) ? e[i] : null), "auto" === n ? null : n;
  }

  function si(t, i, e) {
    var n = document.createElement(t);
    return n.className = i || "", e && e.appendChild(n), n;
  }

  function ri(t) {
    var i = t.parentNode;
    i && i.removeChild(t);
  }

  function ai(t) {
    for (; t.firstChild;) {
      t.removeChild(t.firstChild);
    }
  }

  function hi(t) {
    var i = t.parentNode;
    i && i.lastChild !== t && i.appendChild(t);
  }

  function ui(t) {
    var i = t.parentNode;
    i && i.firstChild !== t && i.insertBefore(t, i.firstChild);
  }

  function li(t, i) {
    if (void 0 !== t.classList) return t.classList.contains(i);
    var e = pi(t);
    return 0 < e.length && new RegExp("(^|\\s)" + i + "(\\s|$)").test(e);
  }

  function ci(t, i) {
    var e;
    if (void 0 !== t.classList) for (var n = l(i), o = 0, s = n.length; o < s; o++) {
      t.classList.add(n[o]);
    } else li(t, i) || di(t, ((e = pi(t)) ? e + " " : "") + i);
  }

  function _i(t, i) {
    void 0 !== t.classList ? t.classList.remove(i) : di(t, u((" " + pi(t) + " ").replace(" " + i + " ", " ")));
  }

  function di(t, i) {
    void 0 === t.className.baseVal ? t.className = i : t.className.baseVal = i;
  }

  function pi(t) {
    return t.correspondingElement && (t = t.correspondingElement), void 0 === t.className.baseVal ? t.className : t.className.baseVal;
  }

  function mi(t, i) {
    "opacity" in t.style ? t.style.opacity = i : "filter" in t.style && function (t, i) {
      var e = !1,
          n = "DXImageTransform.Microsoft.Alpha";

      try {
        e = t.filters.item(n);
      } catch (t) {
        if (1 === i) return;
      }

      i = Math.round(100 * i), e ? (e.Enabled = 100 !== i, e.Opacity = i) : t.style.filter += " progid:" + n + "(opacity=" + i + ")";
    }(t, i);
  }

  function fi(t) {
    for (var i = document.documentElement.style, e = 0; e < t.length; e++) {
      if (t[e] in i) return t[e];
    }

    return !1;
  }

  function gi(t, i, e) {
    var n = i || new k(0, 0);
    t.style[ti] = (mt ? "translate(" + n.x + "px," + n.y + "px)" : "translate3d(" + n.x + "px," + n.y + "px,0)") + (e ? " scale(" + e + ")" : "");
  }

  function vi(t, i) {
    t._leaflet_pos = i, vt ? gi(t, i) : (t.style.left = i.x + "px", t.style.top = i.y + "px");
  }

  function yi(t) {
    return t._leaflet_pos || new k(0, 0);
  }

  function xi() {
    zi(window, "dragstart", Ri);
  }

  function wi() {
    Si(window, "dragstart", Ri);
  }

  function Pi(t) {
    for (; -1 === t.tabIndex;) {
      t = t.parentNode;
    }

    t.style && (Li(), Qt = ($t = t).style.outline, t.style.outline = "none", zi(window, "keydown", Li));
  }

  function Li() {
    $t && ($t.style.outline = Qt, Qt = $t = void 0, Si(window, "keydown", Li));
  }

  function bi(t) {
    for (; !((t = t.parentNode).offsetWidth && t.offsetHeight || t === document.body);) {
      ;
    }

    return t;
  }

  function Ti(t) {
    var i = t.getBoundingClientRect();
    return {
      x: i.width / t.offsetWidth || 1,
      y: i.height / t.offsetHeight || 1,
      boundingClientRect: i
    };
  }

  Jt = "onselectstart" in document ? (Xt = function Xt() {
    zi(window, "selectstart", Ri);
  }, function () {
    Si(window, "selectstart", Ri);
  }) : (Yt = fi(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]), Xt = function Xt() {
    var t;
    Yt && (t = document.documentElement.style, Kt = t[Yt], t[Yt] = "none");
  }, function () {
    Yt && (document.documentElement.style[Yt] = Kt, Kt = void 0);
  });
  var Mi = {
    TRANSFORM: ti,
    TRANSITION: ii,
    TRANSITION_END: ei,
    get: ni,
    getStyle: oi,
    create: si,
    remove: ri,
    empty: ai,
    toFront: hi,
    toBack: ui,
    hasClass: li,
    addClass: ci,
    removeClass: _i,
    setClass: di,
    getClass: pi,
    setOpacity: mi,
    testProp: fi,
    setTransform: gi,
    setPosition: vi,
    getPosition: yi,
    disableTextSelection: Xt,
    enableTextSelection: Jt,
    disableImageDrag: xi,
    enableImageDrag: wi,
    preventOutline: Pi,
    restoreOutline: Li,
    getSizedParentNode: bi,
    getScale: Ti
  };

  function zi(t, i, e, n) {
    if ("object" == _typeof(i)) for (var o in i) {
      ki(t, o, i[o], e);
    } else for (var s = 0, r = (i = l(i)).length; s < r; s++) {
      ki(t, i[s], e, n);
    }
    return this;
  }

  var Ci = "_leaflet_events";

  function Si(t, i, e, n) {
    if ("object" == _typeof(i)) for (var o in i) {
      Bi(t, o, i[o], e);
    } else if (i) for (var s = 0, r = (i = l(i)).length; s < r; s++) {
      Bi(t, i[s], e, n);
    } else {
      for (var a in t[Ci]) {
        Bi(t, a, t[Ci][a]);
      }

      delete t[Ci];
    }
    return this;
  }

  function Zi() {
    return Lt && !et && !ct;
  }

  var Ei = {
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    wheel: !("onwheel" in window) && "mousewheel"
  };

  function ki(i, t, e, n) {
    var o = t + m(e) + (n ? "_" + m(n) : "");
    if (i[Ci] && i[Ci][o]) return this;

    var s,
        r,
        a,
        h,
        u,
        l,
        c = function c(t) {
      return e.call(n || i, t || window.event);
    },
        _ = c;

    function d(t) {
      if (Lt) {
        if (!t.isPrimary) return;
        if ("mouse" === t.pointerType) return;
      } else if (1 < t.touches.length) return;

      var i = Date.now(),
          e = i - (h || i);
      u = t.touches ? t.touches[0] : t, l = 0 < e && e <= 250, h = i;
    }

    function p(t) {
      if (l && !u.cancelBubble) {
        if (Lt) {
          if ("mouse" === t.pointerType) return;
          var i,
              e,
              n = {};

          for (e in u) {
            i = u[e], n[e] = i && i.bind ? i.bind(u) : i;
          }

          u = n;
        }

        u.type = "dblclick", u.button = 0, r(u), h = null;
      }
    }

    Lt && 0 === t.indexOf("touch") ? jt(i, t, c, o) : bt && "dblclick" === t && !Zi() ? (r = c, l = !1, (s = i)[Gt + Vt + (a = o)] = d, s[Gt + qt + a] = p, s[Gt + "dblclick" + a] = r, s.addEventListener(Vt, d, !!Ct && {
      passive: !1
    }), s.addEventListener(qt, p, !!Ct && {
      passive: !1
    }), s.addEventListener("dblclick", r, !1)) : "addEventListener" in i ? "touchstart" === t || "touchmove" === t || "wheel" === t || "mousewheel" === t ? i.addEventListener(Ei[t] || t, c, !!Ct && {
      passive: !1
    }) : "mouseenter" === t || "mouseleave" === t ? (c = function c(t) {
      t = t || window.event, Vi(i, t) && _(t);
    }, i.addEventListener(Ei[t], c, !1)) : i.addEventListener(t, _, !1) : "attachEvent" in i && i.attachEvent("on" + t, c), i[Ci] = i[Ci] || {}, i[Ci][o] = c;
  }

  function Bi(t, i, e, n) {
    var o,
        s,
        r,
        a,
        h,
        u,
        l,
        c,
        _ = i + m(e) + (n ? "_" + m(n) : ""),
        d = t[Ci] && t[Ci][_];

    if (!d) return this;
    Lt && 0 === i.indexOf("touch") ? (c = (u = t)["_leaflet_" + (l = i) + _], "touchstart" === l ? u.removeEventListener(At, c, !1) : "touchmove" === l ? u.removeEventListener(It, c, !1) : "touchend" === l && (u.removeEventListener(Ot, c, !1), u.removeEventListener(Rt, c, !1))) : bt && "dblclick" === i && !Zi() ? (r = (o = t)[Gt + Vt + (s = _)], a = o[Gt + qt + s], h = o[Gt + "dblclick" + s], o.removeEventListener(Vt, r, !!Ct && {
      passive: !1
    }), o.removeEventListener(qt, a, !!Ct && {
      passive: !1
    }), o.removeEventListener("dblclick", h, !1)) : "removeEventListener" in t ? t.removeEventListener(Ei[i] || i, d, !1) : "detachEvent" in t && t.detachEvent("on" + i, d), t[Ci][_] = null;
  }

  function Ai(t) {
    return t.stopPropagation ? t.stopPropagation() : t.originalEvent ? t.originalEvent._stopped = !0 : t.cancelBubble = !0, Ui(t), this;
  }

  function Ii(t) {
    return ki(t, "wheel", Ai), this;
  }

  function Oi(t) {
    return zi(t, "mousedown touchstart dblclick", Ai), ki(t, "click", Fi), this;
  }

  function Ri(t) {
    return t.preventDefault ? t.preventDefault() : t.returnValue = !1, this;
  }

  function Ni(t) {
    return Ri(t), Ai(t), this;
  }

  function Di(t, i) {
    if (!i) return new k(t.clientX, t.clientY);
    var e = Ti(i),
        n = e.boundingClientRect;
    return new k((t.clientX - n.left) / e.x - i.clientLeft, (t.clientY - n.top) / e.y - i.clientTop);
  }

  var ji = pt && ut ? 2 * window.devicePixelRatio : lt ? window.devicePixelRatio : 1;

  function Wi(t) {
    return et ? t.wheelDeltaY / 2 : t.deltaY && 0 === t.deltaMode ? -t.deltaY / ji : t.deltaY && 1 === t.deltaMode ? 20 * -t.deltaY : t.deltaY && 2 === t.deltaMode ? 60 * -t.deltaY : t.deltaX || t.deltaZ ? 0 : t.wheelDelta ? (t.wheelDeltaY || t.wheelDelta) / 2 : t.detail && Math.abs(t.detail) < 32765 ? 20 * -t.detail : t.detail ? t.detail / -32765 * 60 : 0;
  }

  var Hi = {};

  function Fi(t) {
    Hi[t.type] = !0;
  }

  function Ui(t) {
    var i = Hi[t.type];
    return Hi[t.type] = !1, i;
  }

  function Vi(t, i) {
    var e = i.relatedTarget;
    if (!e) return !0;

    try {
      for (; e && e !== t;) {
        e = e.parentNode;
      }
    } catch (t) {
      return !1;
    }

    return e !== t;
  }

  var qi = {
    on: zi,
    off: Si,
    stopPropagation: Ai,
    disableScrollPropagation: Ii,
    disableClickPropagation: Oi,
    preventDefault: Ri,
    stop: Ni,
    getMousePosition: Di,
    getWheelDelta: Wi,
    fakeStop: Fi,
    skipped: Ui,
    isExternalTarget: Vi,
    addListener: zi,
    removeListener: Si
  },
      Gi = E.extend({
    run: function run(t, i, e, n) {
      this.stop(), this._el = t, this._inProgress = !0, this._duration = e || .25, this._easeOutPower = 1 / Math.max(n || .5, .2), this._startPos = yi(t), this._offset = i.subtract(this._startPos), this._startTime = +new Date(), this.fire("start"), this._animate();
    },
    stop: function stop() {
      this._inProgress && (this._step(!0), this._complete());
    },
    _animate: function _animate() {
      this._animId = M(this._animate, this), this._step();
    },
    _step: function _step(t) {
      var i = new Date() - this._startTime,
          e = 1e3 * this._duration;
      i < e ? this._runFrame(this._easeOut(i / e), t) : (this._runFrame(1), this._complete());
    },
    _runFrame: function _runFrame(t, i) {
      var e = this._startPos.add(this._offset.multiplyBy(t));

      i && e._round(), vi(this._el, e), this.fire("step");
    },
    _complete: function _complete() {
      z(this._animId), this._inProgress = !1, this.fire("end");
    },
    _easeOut: function _easeOut(t) {
      return 1 - Math.pow(1 - t, this._easeOutPower);
    }
  }),
      Ki = E.extend({
    options: {
      crs: Y,
      center: void 0,
      zoom: void 0,
      minZoom: void 0,
      maxZoom: void 0,
      layers: [],
      maxBounds: void 0,
      renderer: void 0,
      zoomAnimation: !0,
      zoomAnimationThreshold: 4,
      fadeAnimation: !0,
      markerZoomAnimation: !0,
      transform3DLimit: 8388608,
      zoomSnap: 1,
      zoomDelta: 1,
      trackResize: !0
    },
    initialize: function initialize(t, i) {
      i = c(this, i), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = !0, this._initContainer(t), this._initLayout(), this._onResize = p(this._onResize, this), this._initEvents(), i.maxBounds && this.setMaxBounds(i.maxBounds), void 0 !== i.zoom && (this._zoom = this._limitZoom(i.zoom)), i.center && void 0 !== i.zoom && this.setView(j(i.center), i.zoom, {
        reset: !0
      }), this.callInitHooks(), this._zoomAnimated = ii && vt && !Tt && this.options.zoomAnimation, this._zoomAnimated && (this._createAnimProxy(), zi(this._proxy, ei, this._catchTransitionEnd, this)), this._addLayers(this.options.layers);
    },
    setView: function setView(t, i, e) {
      if ((i = void 0 === i ? this._zoom : this._limitZoom(i), t = this._limitCenter(j(t), i, this.options.maxBounds), e = e || {}, this._stop(), this._loaded && !e.reset && !0 !== e) && (void 0 !== e.animate && (e.zoom = h({
        animate: e.animate
      }, e.zoom), e.pan = h({
        animate: e.animate,
        duration: e.duration
      }, e.pan)), this._zoom !== i ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, i, e.zoom) : this._tryAnimatedPan(t, e.pan))) return clearTimeout(this._sizeTimer), this;
      return this._resetView(t, i), this;
    },
    setZoom: function setZoom(t, i) {
      return this._loaded ? this.setView(this.getCenter(), t, {
        zoom: i
      }) : (this._zoom = t, this);
    },
    zoomIn: function zoomIn(t, i) {
      return t = t || (vt ? this.options.zoomDelta : 1), this.setZoom(this._zoom + t, i);
    },
    zoomOut: function zoomOut(t, i) {
      return t = t || (vt ? this.options.zoomDelta : 1), this.setZoom(this._zoom - t, i);
    },
    setZoomAround: function setZoomAround(t, i, e) {
      var n = this.getZoomScale(i),
          o = this.getSize().divideBy(2),
          s = (t instanceof k ? t : this.latLngToContainerPoint(t)).subtract(o).multiplyBy(1 - 1 / n),
          r = this.containerPointToLatLng(o.add(s));
      return this.setView(r, i, {
        zoom: e
      });
    },
    _getBoundsCenterZoom: function _getBoundsCenterZoom(t, i) {
      i = i || {}, t = t.getBounds ? t.getBounds() : N(t);
      var e = A(i.paddingTopLeft || i.padding || [0, 0]),
          n = A(i.paddingBottomRight || i.padding || [0, 0]),
          o = this.getBoundsZoom(t, !1, e.add(n));
      if ((o = "number" == typeof i.maxZoom ? Math.min(i.maxZoom, o) : o) === 1 / 0) return {
        center: t.getCenter(),
        zoom: o
      };
      var s = n.subtract(e).divideBy(2),
          r = this.project(t.getSouthWest(), o),
          a = this.project(t.getNorthEast(), o);
      return {
        center: this.unproject(r.add(a).divideBy(2).add(s), o),
        zoom: o
      };
    },
    fitBounds: function fitBounds(t, i) {
      if (!(t = N(t)).isValid()) throw new Error("Bounds are not valid.");

      var e = this._getBoundsCenterZoom(t, i);

      return this.setView(e.center, e.zoom, i);
    },
    fitWorld: function fitWorld(t) {
      return this.fitBounds([[-90, -180], [90, 180]], t);
    },
    panTo: function panTo(t, i) {
      return this.setView(t, this._zoom, {
        pan: i
      });
    },
    panBy: function panBy(t, i) {
      return i = i || {}, (t = A(t).round()).x || t.y ? (!0 === i.animate || this.getSize().contains(t) ? (this._panAnim || (this._panAnim = new Gi(), this._panAnim.on({
        step: this._onPanTransitionStep,
        end: this._onPanTransitionEnd
      }, this)), i.noMoveStart || this.fire("movestart"), !1 !== i.animate ? (ci(this._mapPane, "leaflet-pan-anim"), e = this._getMapPanePos().subtract(t).round(), this._panAnim.run(this._mapPane, e, i.duration || .25, i.easeLinearity)) : (this._rawPanBy(t), this.fire("move").fire("moveend"))) : this._resetView(this.unproject(this.project(this.getCenter()).add(t)), this.getZoom()), this) : this.fire("moveend");
      var e;
    },
    flyTo: function flyTo(s, r, t) {
      if (!1 === (t = t || {}).animate || !vt) return this.setView(s, r, t);

      this._stop();

      var a = this.project(this.getCenter()),
          h = this.project(s),
          i = this.getSize(),
          u = this._zoom;
      s = j(s), r = void 0 === r ? u : r;
      var l = Math.max(i.x, i.y),
          n = l * this.getZoomScale(u, r),
          c = h.distanceTo(a) || 1,
          _ = 1.42,
          o = _ * _;

      function e(t) {
        var i = (n * n - l * l + (t ? -1 : 1) * o * o * c * c) / (2 * (t ? n : l) * o * c),
            e = Math.sqrt(i * i + 1) - i;
        return e < 1e-9 ? -18 : Math.log(e);
      }

      function d(t) {
        return (Math.exp(t) - Math.exp(-t)) / 2;
      }

      function p(t) {
        return (Math.exp(t) + Math.exp(-t)) / 2;
      }

      var m = e(0);

      function f(t) {
        return l * (p(m) * (d(i = m + _ * t) / p(i)) - d(m)) / o;
        var i;
      }

      var g = Date.now(),
          v = (e(1) - m) / _,
          y = t.duration ? 1e3 * t.duration : 1e3 * v * .8;

      return this._moveStart(!0, t.noMoveStart), function t() {
        var i,
            e,
            n = (Date.now() - g) / y,
            o = (i = n, (1 - Math.pow(1 - i, 1.5)) * v);
        n <= 1 ? (this._flyToFrame = M(t, this), this._move(this.unproject(a.add(h.subtract(a).multiplyBy(f(o) / c)), u), this.getScaleZoom(l / (e = o, l * (p(m) / p(m + _ * e))), u), {
          flyTo: !0
        })) : this._move(s, r)._moveEnd(!0);
      }.call(this), this;
    },
    flyToBounds: function flyToBounds(t, i) {
      var e = this._getBoundsCenterZoom(t, i);

      return this.flyTo(e.center, e.zoom, i);
    },
    setMaxBounds: function setMaxBounds(t) {
      return (t = N(t)).isValid() ? (this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds), this.options.maxBounds = t, this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null, this.off("moveend", this._panInsideMaxBounds));
    },
    setMinZoom: function setMinZoom(t) {
      var i = this.options.minZoom;
      return this.options.minZoom = t, this._loaded && i !== t && (this.fire("zoomlevelschange"), this.getZoom() < this.options.minZoom) ? this.setZoom(t) : this;
    },
    setMaxZoom: function setMaxZoom(t) {
      var i = this.options.maxZoom;
      return this.options.maxZoom = t, this._loaded && i !== t && (this.fire("zoomlevelschange"), this.getZoom() > this.options.maxZoom) ? this.setZoom(t) : this;
    },
    panInsideBounds: function panInsideBounds(t, i) {
      this._enforcingBounds = !0;

      var e = this.getCenter(),
          n = this._limitCenter(e, this._zoom, N(t));

      return e.equals(n) || this.panTo(n, i), this._enforcingBounds = !1, this;
    },
    panInside: function panInside(t, i) {
      var e,
          n,
          o = A((i = i || {}).paddingTopLeft || i.padding || [0, 0]),
          s = A(i.paddingBottomRight || i.padding || [0, 0]),
          r = this.getCenter(),
          a = this.project(r),
          h = this.project(t),
          u = this.getPixelBounds(),
          l = u.getSize().divideBy(2),
          c = O([u.min.add(o), u.max.subtract(s)]);
      return c.contains(h) || (this._enforcingBounds = !0, e = a.subtract(h), n = A(h.x + e.x, h.y + e.y), (h.x < c.min.x || h.x > c.max.x) && (n.x = a.x - e.x, 0 < e.x ? n.x += l.x - o.x : n.x -= l.x - s.x), (h.y < c.min.y || h.y > c.max.y) && (n.y = a.y - e.y, 0 < e.y ? n.y += l.y - o.y : n.y -= l.y - s.y), this.panTo(this.unproject(n), i), this._enforcingBounds = !1), this;
    },
    invalidateSize: function invalidateSize(t) {
      if (!this._loaded) return this;
      t = h({
        animate: !1,
        pan: !0
      }, !0 === t ? {
        animate: !0
      } : t);
      var i = this.getSize();
      this._sizeChanged = !0, this._lastCenter = null;
      var e = this.getSize(),
          n = i.divideBy(2).round(),
          o = e.divideBy(2).round(),
          s = n.subtract(o);
      return s.x || s.y ? (t.animate && t.pan ? this.panBy(s) : (t.pan && this._rawPanBy(s), this.fire("move"), t.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(p(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", {
        oldSize: i,
        newSize: e
      })) : this;
    },
    stop: function stop() {
      return this.setZoom(this._limitZoom(this._zoom)), this.options.zoomSnap || this.fire("viewreset"), this._stop();
    },
    locate: function locate(t) {
      if (t = this._locateOptions = h({
        timeout: 1e4,
        watch: !1
      }, t), !("geolocation" in navigator)) return this._handleGeolocationError({
        code: 0,
        message: "Geolocation not supported."
      }), this;
      var i = p(this._handleGeolocationResponse, this),
          e = p(this._handleGeolocationError, this);
      return t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(i, e, t) : navigator.geolocation.getCurrentPosition(i, e, t), this;
    },
    stopLocate: function stopLocate() {
      return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = !1), this;
    },
    _handleGeolocationError: function _handleGeolocationError(t) {
      var i = t.code,
          e = t.message || (1 === i ? "permission denied" : 2 === i ? "position unavailable" : "timeout");
      this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", {
        code: i,
        message: "Geolocation error: " + e + "."
      });
    },
    _handleGeolocationResponse: function _handleGeolocationResponse(t) {
      var i,
          e = new D(t.coords.latitude, t.coords.longitude),
          n = e.toBounds(2 * t.coords.accuracy),
          o = this._locateOptions;
      o.setView && (i = this.getBoundsZoom(n), this.setView(e, o.maxZoom ? Math.min(i, o.maxZoom) : i));
      var s = {
        latlng: e,
        bounds: n,
        timestamp: t.timestamp
      };

      for (var r in t.coords) {
        "number" == typeof t.coords[r] && (s[r] = t.coords[r]);
      }

      this.fire("locationfound", s);
    },
    addHandler: function addHandler(t, i) {
      if (!i) return this;
      var e = this[t] = new i(this);
      return this._handlers.push(e), this.options[t] && e.enable(), this;
    },
    remove: function remove() {
      if (this._initEvents(!0), this.off("moveend", this._panInsideMaxBounds), this._containerId !== this._container._leaflet_id) throw new Error("Map container is being reused by another instance");

      try {
        delete this._container._leaflet_id, delete this._containerId;
      } catch (t) {
        this._container._leaflet_id = void 0, this._containerId = void 0;
      }

      var t;

      for (t in void 0 !== this._locationWatchId && this.stopLocate(), this._stop(), ri(this._mapPane), this._clearControlPos && this._clearControlPos(), this._resizeRequest && (z(this._resizeRequest), this._resizeRequest = null), this._clearHandlers(), this._loaded && this.fire("unload"), this._layers) {
        this._layers[t].remove();
      }

      for (t in this._panes) {
        ri(this._panes[t]);
      }

      return this._layers = [], this._panes = [], delete this._mapPane, delete this._renderer, this;
    },
    createPane: function createPane(t, i) {
      var e = si("div", "leaflet-pane" + (t ? " leaflet-" + t.replace("Pane", "") + "-pane" : ""), i || this._mapPane);
      return t && (this._panes[t] = e), e;
    },
    getCenter: function getCenter() {
      return this._checkIfLoaded(), this._lastCenter && !this._moved() ? this._lastCenter : this.layerPointToLatLng(this._getCenterLayerPoint());
    },
    getZoom: function getZoom() {
      return this._zoom;
    },
    getBounds: function getBounds() {
      var t = this.getPixelBounds();
      return new R(this.unproject(t.getBottomLeft()), this.unproject(t.getTopRight()));
    },
    getMinZoom: function getMinZoom() {
      return void 0 === this.options.minZoom ? this._layersMinZoom || 0 : this.options.minZoom;
    },
    getMaxZoom: function getMaxZoom() {
      return void 0 === this.options.maxZoom ? void 0 === this._layersMaxZoom ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom;
    },
    getBoundsZoom: function getBoundsZoom(t, i, e) {
      t = N(t), e = A(e || [0, 0]);

      var n = this.getZoom() || 0,
          o = this.getMinZoom(),
          s = this.getMaxZoom(),
          r = t.getNorthWest(),
          a = t.getSouthEast(),
          h = this.getSize().subtract(e),
          u = O(this.project(a, n), this.project(r, n)).getSize(),
          l = vt ? this.options.zoomSnap : 1,
          c = h.x / u.x,
          _ = h.y / u.y,
          d = i ? Math.max(c, _) : Math.min(c, _),
          n = this.getScaleZoom(d, n);

      return l && (n = Math.round(n / (l / 100)) * (l / 100), n = i ? Math.ceil(n / l) * l : Math.floor(n / l) * l), Math.max(o, Math.min(s, n));
    },
    getSize: function getSize() {
      return this._size && !this._sizeChanged || (this._size = new k(this._container.clientWidth || 0, this._container.clientHeight || 0), this._sizeChanged = !1), this._size.clone();
    },
    getPixelBounds: function getPixelBounds(t, i) {
      var e = this._getTopLeftPoint(t, i);

      return new I(e, e.add(this.getSize()));
    },
    getPixelOrigin: function getPixelOrigin() {
      return this._checkIfLoaded(), this._pixelOrigin;
    },
    getPixelWorldBounds: function getPixelWorldBounds(t) {
      return this.options.crs.getProjectedBounds(void 0 === t ? this.getZoom() : t);
    },
    getPane: function getPane(t) {
      return "string" == typeof t ? this._panes[t] : t;
    },
    getPanes: function getPanes() {
      return this._panes;
    },
    getContainer: function getContainer() {
      return this._container;
    },
    getZoomScale: function getZoomScale(t, i) {
      var e = this.options.crs;
      return i = void 0 === i ? this._zoom : i, e.scale(t) / e.scale(i);
    },
    getScaleZoom: function getScaleZoom(t, i) {
      var e = this.options.crs;
      i = void 0 === i ? this._zoom : i;
      var n = e.zoom(t * e.scale(i));
      return isNaN(n) ? 1 / 0 : n;
    },
    project: function project(t, i) {
      return i = void 0 === i ? this._zoom : i, this.options.crs.latLngToPoint(j(t), i);
    },
    unproject: function unproject(t, i) {
      return i = void 0 === i ? this._zoom : i, this.options.crs.pointToLatLng(A(t), i);
    },
    layerPointToLatLng: function layerPointToLatLng(t) {
      var i = A(t).add(this.getPixelOrigin());
      return this.unproject(i);
    },
    latLngToLayerPoint: function latLngToLayerPoint(t) {
      return this.project(j(t))._round()._subtract(this.getPixelOrigin());
    },
    wrapLatLng: function wrapLatLng(t) {
      return this.options.crs.wrapLatLng(j(t));
    },
    wrapLatLngBounds: function wrapLatLngBounds(t) {
      return this.options.crs.wrapLatLngBounds(N(t));
    },
    distance: function distance(t, i) {
      return this.options.crs.distance(j(t), j(i));
    },
    containerPointToLayerPoint: function containerPointToLayerPoint(t) {
      return A(t).subtract(this._getMapPanePos());
    },
    layerPointToContainerPoint: function layerPointToContainerPoint(t) {
      return A(t).add(this._getMapPanePos());
    },
    containerPointToLatLng: function containerPointToLatLng(t) {
      var i = this.containerPointToLayerPoint(A(t));
      return this.layerPointToLatLng(i);
    },
    latLngToContainerPoint: function latLngToContainerPoint(t) {
      return this.layerPointToContainerPoint(this.latLngToLayerPoint(j(t)));
    },
    mouseEventToContainerPoint: function mouseEventToContainerPoint(t) {
      return Di(t, this._container);
    },
    mouseEventToLayerPoint: function mouseEventToLayerPoint(t) {
      return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t));
    },
    mouseEventToLatLng: function mouseEventToLatLng(t) {
      return this.layerPointToLatLng(this.mouseEventToLayerPoint(t));
    },
    _initContainer: function _initContainer(t) {
      var i = this._container = ni(t);
      if (!i) throw new Error("Map container not found.");
      if (i._leaflet_id) throw new Error("Map container is already initialized.");
      zi(i, "scroll", this._onScroll, this), this._containerId = m(i);
    },
    _initLayout: function _initLayout() {
      var t = this._container;
      this._fadeAnimated = this.options.fadeAnimation && vt, ci(t, "leaflet-container" + (bt ? " leaflet-touch" : "") + (zt ? " leaflet-retina" : "") + (it ? " leaflet-oldie" : "") + (ct ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
      var i = oi(t, "position");
      "absolute" !== i && "relative" !== i && "fixed" !== i && (t.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos();
    },
    _initPanes: function _initPanes() {
      var t = this._panes = {};
      this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), vi(this._mapPane, new k(0, 0)), this.createPane("tilePane"), this.createPane("shadowPane"), this.createPane("overlayPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane("popupPane"), this.options.markerZoomAnimation || (ci(t.markerPane, "leaflet-zoom-hide"), ci(t.shadowPane, "leaflet-zoom-hide"));
    },
    _resetView: function _resetView(t, i) {
      vi(this._mapPane, new k(0, 0));
      var e = !this._loaded;
      this._loaded = !0, i = this._limitZoom(i), this.fire("viewprereset");
      var n = this._zoom !== i;
      this._moveStart(n, !1)._move(t, i)._moveEnd(n), this.fire("viewreset"), e && this.fire("load");
    },
    _moveStart: function _moveStart(t, i) {
      return t && this.fire("zoomstart"), i || this.fire("movestart"), this;
    },
    _move: function _move(t, i, e) {
      void 0 === i && (i = this._zoom);
      var n = this._zoom !== i;
      return this._zoom = i, this._lastCenter = t, this._pixelOrigin = this._getNewPixelOrigin(t), (n || e && e.pinch) && this.fire("zoom", e), this.fire("move", e);
    },
    _moveEnd: function _moveEnd(t) {
      return t && this.fire("zoomend"), this.fire("moveend");
    },
    _stop: function _stop() {
      return z(this._flyToFrame), this._panAnim && this._panAnim.stop(), this;
    },
    _rawPanBy: function _rawPanBy(t) {
      vi(this._mapPane, this._getMapPanePos().subtract(t));
    },
    _getZoomSpan: function _getZoomSpan() {
      return this.getMaxZoom() - this.getMinZoom();
    },
    _panInsideMaxBounds: function _panInsideMaxBounds() {
      this._enforcingBounds || this.panInsideBounds(this.options.maxBounds);
    },
    _checkIfLoaded: function _checkIfLoaded() {
      if (!this._loaded) throw new Error("Set map center and zoom first.");
    },
    _initEvents: function _initEvents(t) {
      this._targets = {};
      var i = t ? Si : zi;
      i((this._targets[m(this._container)] = this)._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup", this._handleDOMEvent, this), this.options.trackResize && i(window, "resize", this._onResize, this), vt && this.options.transform3DLimit && (t ? this.off : this.on).call(this, "moveend", this._onMoveEnd);
    },
    _onResize: function _onResize() {
      z(this._resizeRequest), this._resizeRequest = M(function () {
        this.invalidateSize({
          debounceMoveend: !0
        });
      }, this);
    },
    _onScroll: function _onScroll() {
      this._container.scrollTop = 0, this._container.scrollLeft = 0;
    },
    _onMoveEnd: function _onMoveEnd() {
      var t = this._getMapPanePos();

      Math.max(Math.abs(t.x), Math.abs(t.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom());
    },
    _findEventTargets: function _findEventTargets(t, i) {
      for (var e, n = [], o = "mouseout" === i || "mouseover" === i, s = t.target || t.srcElement, r = !1; s;) {
        if ((e = this._targets[m(s)]) && ("click" === i || "preclick" === i) && !t._simulated && this._draggableMoved(e)) {
          r = !0;
          break;
        }

        if (e && e.listens(i, !0)) {
          if (o && !Vi(s, t)) break;
          if (n.push(e), o) break;
        }

        if (s === this._container) break;
        s = s.parentNode;
      }

      return n.length || r || o || !Vi(s, t) || (n = [this]), n;
    },
    _handleDOMEvent: function _handleDOMEvent(t) {
      var i;
      this._loaded && !Ui(t) && ("mousedown" !== (i = t.type) && "keypress" !== i && "keyup" !== i && "keydown" !== i || Pi(t.target || t.srcElement), this._fireDOMEvent(t, i));
    },
    _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"],
    _fireDOMEvent: function _fireDOMEvent(t, i, e) {
      var n;

      if ("click" === t.type && ((n = h({}, t)).type = "preclick", this._fireDOMEvent(n, n.type, e)), !t._stopped && (e = (e || []).concat(this._findEventTargets(t, i))).length) {
        var o = e[0];
        "contextmenu" === i && o.listens(i, !0) && Ri(t);
        var s,
            r = {
          originalEvent: t
        };
        "keypress" !== t.type && "keydown" !== t.type && "keyup" !== t.type && (s = o.getLatLng && (!o._radius || o._radius <= 10), r.containerPoint = s ? this.latLngToContainerPoint(o.getLatLng()) : this.mouseEventToContainerPoint(t), r.layerPoint = this.containerPointToLayerPoint(r.containerPoint), r.latlng = s ? o.getLatLng() : this.layerPointToLatLng(r.layerPoint));

        for (var a = 0; a < e.length; a++) {
          if (e[a].fire(i, r, !0), r.originalEvent._stopped || !1 === e[a].options.bubblingMouseEvents && -1 !== v(this._mouseEvents, i)) return;
        }
      }
    },
    _draggableMoved: function _draggableMoved(t) {
      return (t = t.dragging && t.dragging.enabled() ? t : this).dragging && t.dragging.moved() || this.boxZoom && this.boxZoom.moved();
    },
    _clearHandlers: function _clearHandlers() {
      for (var t = 0, i = this._handlers.length; t < i; t++) {
        this._handlers[t].disable();
      }
    },
    whenReady: function whenReady(t, i) {
      return this._loaded ? t.call(i || this, {
        target: this
      }) : this.on("load", t, i), this;
    },
    _getMapPanePos: function _getMapPanePos() {
      return yi(this._mapPane) || new k(0, 0);
    },
    _moved: function _moved() {
      var t = this._getMapPanePos();

      return t && !t.equals([0, 0]);
    },
    _getTopLeftPoint: function _getTopLeftPoint(t, i) {
      return (t && void 0 !== i ? this._getNewPixelOrigin(t, i) : this.getPixelOrigin()).subtract(this._getMapPanePos());
    },
    _getNewPixelOrigin: function _getNewPixelOrigin(t, i) {
      var e = this.getSize()._divideBy(2);

      return this.project(t, i)._subtract(e)._add(this._getMapPanePos())._round();
    },
    _latLngToNewLayerPoint: function _latLngToNewLayerPoint(t, i, e) {
      var n = this._getNewPixelOrigin(e, i);

      return this.project(t, i)._subtract(n);
    },
    _latLngBoundsToNewLayerBounds: function _latLngBoundsToNewLayerBounds(t, i, e) {
      var n = this._getNewPixelOrigin(e, i);

      return O([this.project(t.getSouthWest(), i)._subtract(n), this.project(t.getNorthWest(), i)._subtract(n), this.project(t.getSouthEast(), i)._subtract(n), this.project(t.getNorthEast(), i)._subtract(n)]);
    },
    _getCenterLayerPoint: function _getCenterLayerPoint() {
      return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
    },
    _getCenterOffset: function _getCenterOffset(t) {
      return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint());
    },
    _limitCenter: function _limitCenter(t, i, e) {
      if (!e) return t;

      var n = this.project(t, i),
          o = this.getSize().divideBy(2),
          s = new I(n.subtract(o), n.add(o)),
          r = this._getBoundsOffset(s, e, i);

      return r.round().equals([0, 0]) ? t : this.unproject(n.add(r), i);
    },
    _limitOffset: function _limitOffset(t, i) {
      if (!i) return t;
      var e = this.getPixelBounds(),
          n = new I(e.min.add(t), e.max.add(t));
      return t.add(this._getBoundsOffset(n, i));
    },
    _getBoundsOffset: function _getBoundsOffset(t, i, e) {
      var n = O(this.project(i.getNorthEast(), e), this.project(i.getSouthWest(), e)),
          o = n.min.subtract(t.min),
          s = n.max.subtract(t.max);
      return new k(this._rebound(o.x, -s.x), this._rebound(o.y, -s.y));
    },
    _rebound: function _rebound(t, i) {
      return 0 < t + i ? Math.round(t - i) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(i));
    },
    _limitZoom: function _limitZoom(t) {
      var i = this.getMinZoom(),
          e = this.getMaxZoom(),
          n = vt ? this.options.zoomSnap : 1;
      return n && (t = Math.round(t / n) * n), Math.max(i, Math.min(e, t));
    },
    _onPanTransitionStep: function _onPanTransitionStep() {
      this.fire("move");
    },
    _onPanTransitionEnd: function _onPanTransitionEnd() {
      _i(this._mapPane, "leaflet-pan-anim"), this.fire("moveend");
    },
    _tryAnimatedPan: function _tryAnimatedPan(t, i) {
      var e = this._getCenterOffset(t)._trunc();

      return !(!0 !== (i && i.animate) && !this.getSize().contains(e)) && (this.panBy(e, i), !0);
    },
    _createAnimProxy: function _createAnimProxy() {
      var t = this._proxy = si("div", "leaflet-proxy leaflet-zoom-animated");
      this._panes.mapPane.appendChild(t), this.on("zoomanim", function (t) {
        var i = ti,
            e = this._proxy.style[i];
        gi(this._proxy, this.project(t.center, t.zoom), this.getZoomScale(t.zoom, 1)), e === this._proxy.style[i] && this._animatingZoom && this._onZoomTransitionEnd();
      }, this), this.on("load moveend", this._animMoveEnd, this), this._on("unload", this._destroyAnimProxy, this);
    },
    _destroyAnimProxy: function _destroyAnimProxy() {
      ri(this._proxy), this.off("load moveend", this._animMoveEnd, this), delete this._proxy;
    },
    _animMoveEnd: function _animMoveEnd() {
      var t = this.getCenter(),
          i = this.getZoom();
      gi(this._proxy, this.project(t, i), this.getZoomScale(i, 1));
    },
    _catchTransitionEnd: function _catchTransitionEnd(t) {
      this._animatingZoom && 0 <= t.propertyName.indexOf("transform") && this._onZoomTransitionEnd();
    },
    _nothingToAnimate: function _nothingToAnimate() {
      return !this._container.getElementsByClassName("leaflet-zoom-animated").length;
    },
    _tryAnimatedZoom: function _tryAnimatedZoom(t, i, e) {
      if (this._animatingZoom) return !0;
      if (e = e || {}, !this._zoomAnimated || !1 === e.animate || this._nothingToAnimate() || Math.abs(i - this._zoom) > this.options.zoomAnimationThreshold) return !1;

      var n = this.getZoomScale(i),
          o = this._getCenterOffset(t)._divideBy(1 - 1 / n);

      return !(!0 !== e.animate && !this.getSize().contains(o)) && (M(function () {
        this._moveStart(!0, !1)._animateZoom(t, i, !0);
      }, this), !0);
    },
    _animateZoom: function _animateZoom(t, i, e, n) {
      this._mapPane && (e && (this._animatingZoom = !0, this._animateToCenter = t, this._animateToZoom = i, ci(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", {
        center: t,
        zoom: i,
        noUpdate: n
      }), setTimeout(p(this._onZoomTransitionEnd, this), 250));
    },
    _onZoomTransitionEnd: function _onZoomTransitionEnd() {
      this._animatingZoom && (this._mapPane && _i(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = !1, this._move(this._animateToCenter, this._animateToZoom), M(function () {
        this._moveEnd(!0);
      }, this));
    }
  });

  function Yi(t) {
    return new Xi(t);
  }

  var Xi = S.extend({
    options: {
      position: "topright"
    },
    initialize: function initialize(t) {
      c(this, t);
    },
    getPosition: function getPosition() {
      return this.options.position;
    },
    setPosition: function setPosition(t) {
      var i = this._map;
      return i && i.removeControl(this), this.options.position = t, i && i.addControl(this), this;
    },
    getContainer: function getContainer() {
      return this._container;
    },
    addTo: function addTo(t) {
      this.remove(), this._map = t;
      var i = this._container = this.onAdd(t),
          e = this.getPosition(),
          n = t._controlCorners[e];
      return ci(i, "leaflet-control"), -1 !== e.indexOf("bottom") ? n.insertBefore(i, n.firstChild) : n.appendChild(i), this._map.on("unload", this.remove, this), this;
    },
    remove: function remove() {
      return this._map && (ri(this._container), this.onRemove && this.onRemove(this._map), this._map.off("unload", this.remove, this), this._map = null), this;
    },
    _refocusOnMap: function _refocusOnMap(t) {
      this._map && t && 0 < t.screenX && 0 < t.screenY && this._map.getContainer().focus();
    }
  });
  Ki.include({
    addControl: function addControl(t) {
      return t.addTo(this), this;
    },
    removeControl: function removeControl(t) {
      return t.remove(), this;
    },
    _initControlPos: function _initControlPos() {
      var n = this._controlCorners = {},
          o = "leaflet-",
          s = this._controlContainer = si("div", o + "control-container", this._container);

      function t(t, i) {
        var e = o + t + " " + o + i;
        n[t + i] = si("div", e, s);
      }

      t("top", "left"), t("top", "right"), t("bottom", "left"), t("bottom", "right");
    },
    _clearControlPos: function _clearControlPos() {
      for (var t in this._controlCorners) {
        ri(this._controlCorners[t]);
      }

      ri(this._controlContainer), delete this._controlCorners, delete this._controlContainer;
    }
  });
  var Ji = Xi.extend({
    options: {
      collapsed: !0,
      position: "topright",
      autoZIndex: !0,
      hideSingleBase: !1,
      sortLayers: !1,
      sortFunction: function sortFunction(t, i, e, n) {
        return e < n ? -1 : n < e ? 1 : 0;
      }
    },
    initialize: function initialize(t, i, e) {
      for (var n in c(this, e), this._layerControlInputs = [], this._layers = [], this._lastZIndex = 0, this._handlingClick = !1, t) {
        this._addLayer(t[n], n);
      }

      for (n in i) {
        this._addLayer(i[n], n, !0);
      }
    },
    onAdd: function onAdd(t) {
      this._initLayout(), this._update(), (this._map = t).on("zoomend", this._checkDisabledLayers, this);

      for (var i = 0; i < this._layers.length; i++) {
        this._layers[i].layer.on("add remove", this._onLayerChange, this);
      }

      return this._container;
    },
    addTo: function addTo(t) {
      return Xi.prototype.addTo.call(this, t), this._expandIfNotCollapsed();
    },
    onRemove: function onRemove() {
      this._map.off("zoomend", this._checkDisabledLayers, this);

      for (var t = 0; t < this._layers.length; t++) {
        this._layers[t].layer.off("add remove", this._onLayerChange, this);
      }
    },
    addBaseLayer: function addBaseLayer(t, i) {
      return this._addLayer(t, i), this._map ? this._update() : this;
    },
    addOverlay: function addOverlay(t, i) {
      return this._addLayer(t, i, !0), this._map ? this._update() : this;
    },
    removeLayer: function removeLayer(t) {
      t.off("add remove", this._onLayerChange, this);

      var i = this._getLayer(m(t));

      return i && this._layers.splice(this._layers.indexOf(i), 1), this._map ? this._update() : this;
    },
    expand: function expand() {
      ci(this._container, "leaflet-control-layers-expanded"), this._section.style.height = null;
      var t = this._map.getSize().y - (this._container.offsetTop + 50);
      return t < this._section.clientHeight ? (ci(this._section, "leaflet-control-layers-scrollbar"), this._section.style.height = t + "px") : _i(this._section, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this;
    },
    collapse: function collapse() {
      return _i(this._container, "leaflet-control-layers-expanded"), this;
    },
    _initLayout: function _initLayout() {
      var t = "leaflet-control-layers",
          i = this._container = si("div", t),
          e = this.options.collapsed;
      i.setAttribute("aria-haspopup", !0), Oi(i), Ii(i);
      var n = this._section = si("section", t + "-list");
      e && (this._map.on("click", this.collapse, this), ot || zi(i, {
        mouseenter: this.expand,
        mouseleave: this.collapse
      }, this));
      var o = this._layersLink = si("a", t + "-toggle", i);
      o.href = "#", o.title = "Layers", bt ? (zi(o, "click", Ni), zi(o, "click", this.expand, this)) : zi(o, "focus", this.expand, this), e || this.expand(), this._baseLayersList = si("div", t + "-base", n), this._separator = si("div", t + "-separator", n), this._overlaysList = si("div", t + "-overlays", n), i.appendChild(n);
    },
    _getLayer: function _getLayer(t) {
      for (var i = 0; i < this._layers.length; i++) {
        if (this._layers[i] && m(this._layers[i].layer) === t) return this._layers[i];
      }
    },
    _addLayer: function _addLayer(t, i, e) {
      this._map && t.on("add remove", this._onLayerChange, this), this._layers.push({
        layer: t,
        name: i,
        overlay: e
      }), this.options.sortLayers && this._layers.sort(p(function (t, i) {
        return this.options.sortFunction(t.layer, i.layer, t.name, i.name);
      }, this)), this.options.autoZIndex && t.setZIndex && (this._lastZIndex++, t.setZIndex(this._lastZIndex)), this._expandIfNotCollapsed();
    },
    _update: function _update() {
      if (!this._container) return this;
      ai(this._baseLayersList), ai(this._overlaysList), this._layerControlInputs = [];

      for (var t, i, e, n = 0, o = 0; o < this._layers.length; o++) {
        e = this._layers[o], this._addItem(e), i = i || e.overlay, t = t || !e.overlay, n += e.overlay ? 0 : 1;
      }

      return this.options.hideSingleBase && (t = t && 1 < n, this._baseLayersList.style.display = t ? "" : "none"), this._separator.style.display = i && t ? "" : "none", this;
    },
    _onLayerChange: function _onLayerChange(t) {
      this._handlingClick || this._update();

      var i = this._getLayer(m(t.target)),
          e = i.overlay ? "add" === t.type ? "overlayadd" : "overlayremove" : "add" === t.type ? "baselayerchange" : null;

      e && this._map.fire(e, i);
    },
    _createRadioElement: function _createRadioElement(t, i) {
      var e = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"' + (i ? ' checked="checked"' : "") + "/>",
          n = document.createElement("div");
      return n.innerHTML = e, n.firstChild;
    },
    _addItem: function _addItem(t) {
      var i,
          e = document.createElement("label"),
          n = this._map.hasLayer(t.layer);

      t.overlay ? ((i = document.createElement("input")).type = "checkbox", i.className = "leaflet-control-layers-selector", i.defaultChecked = n) : i = this._createRadioElement("leaflet-base-layers_" + m(this), n), this._layerControlInputs.push(i), i.layerId = m(t.layer), zi(i, "click", this._onInputClick, this);
      var o = document.createElement("span");
      o.innerHTML = " " + t.name;
      var s = document.createElement("div");
      return e.appendChild(s), s.appendChild(i), s.appendChild(o), (t.overlay ? this._overlaysList : this._baseLayersList).appendChild(e), this._checkDisabledLayers(), e;
    },
    _onInputClick: function _onInputClick() {
      var t,
          i,
          e = this._layerControlInputs,
          n = [],
          o = [];
      this._handlingClick = !0;

      for (var s = e.length - 1; 0 <= s; s--) {
        t = e[s], i = this._getLayer(t.layerId).layer, t.checked ? n.push(i) : t.checked || o.push(i);
      }

      for (s = 0; s < o.length; s++) {
        this._map.hasLayer(o[s]) && this._map.removeLayer(o[s]);
      }

      for (s = 0; s < n.length; s++) {
        this._map.hasLayer(n[s]) || this._map.addLayer(n[s]);
      }

      this._handlingClick = !1, this._refocusOnMap();
    },
    _checkDisabledLayers: function _checkDisabledLayers() {
      for (var t, i, e = this._layerControlInputs, n = this._map.getZoom(), o = e.length - 1; 0 <= o; o--) {
        t = e[o], i = this._getLayer(t.layerId).layer, t.disabled = void 0 !== i.options.minZoom && n < i.options.minZoom || void 0 !== i.options.maxZoom && n > i.options.maxZoom;
      }
    },
    _expandIfNotCollapsed: function _expandIfNotCollapsed() {
      return this._map && !this.options.collapsed && this.expand(), this;
    },
    _expand: function _expand() {
      return this.expand();
    },
    _collapse: function _collapse() {
      return this.collapse();
    }
  }),
      $i = Xi.extend({
    options: {
      position: "topleft",
      zoomInText: "+",
      zoomInTitle: "Zoom in",
      zoomOutText: "&#x2212;",
      zoomOutTitle: "Zoom out"
    },
    onAdd: function onAdd(t) {
      var i = "leaflet-control-zoom",
          e = si("div", i + " leaflet-bar"),
          n = this.options;
      return this._zoomInButton = this._createButton(n.zoomInText, n.zoomInTitle, i + "-in", e, this._zoomIn), this._zoomOutButton = this._createButton(n.zoomOutText, n.zoomOutTitle, i + "-out", e, this._zoomOut), this._updateDisabled(), t.on("zoomend zoomlevelschange", this._updateDisabled, this), e;
    },
    onRemove: function onRemove(t) {
      t.off("zoomend zoomlevelschange", this._updateDisabled, this);
    },
    disable: function disable() {
      return this._disabled = !0, this._updateDisabled(), this;
    },
    enable: function enable() {
      return this._disabled = !1, this._updateDisabled(), this;
    },
    _zoomIn: function _zoomIn(t) {
      !this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
    },
    _zoomOut: function _zoomOut(t) {
      !this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
    },
    _createButton: function _createButton(t, i, e, n, o) {
      var s = si("a", e, n);
      return s.innerHTML = t, s.href = "#", s.title = i, s.setAttribute("role", "button"), s.setAttribute("aria-label", i), Oi(s), zi(s, "click", Ni), zi(s, "click", o, this), zi(s, "click", this._refocusOnMap, this), s;
    },
    _updateDisabled: function _updateDisabled() {
      var t = this._map,
          i = "leaflet-disabled";
      _i(this._zoomInButton, i), _i(this._zoomOutButton, i), !this._disabled && t._zoom !== t.getMinZoom() || ci(this._zoomOutButton, i), !this._disabled && t._zoom !== t.getMaxZoom() || ci(this._zoomInButton, i);
    }
  });
  Ki.mergeOptions({
    zoomControl: !0
  }), Ki.addInitHook(function () {
    this.options.zoomControl && (this.zoomControl = new $i(), this.addControl(this.zoomControl));
  });
  var Qi = Xi.extend({
    options: {
      position: "bottomleft",
      maxWidth: 100,
      metric: !0,
      imperial: !0
    },
    onAdd: function onAdd(t) {
      var i = "leaflet-control-scale",
          e = si("div", i),
          n = this.options;
      return this._addScales(n, i + "-line", e), t.on(n.updateWhenIdle ? "moveend" : "move", this._update, this), t.whenReady(this._update, this), e;
    },
    onRemove: function onRemove(t) {
      t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this);
    },
    _addScales: function _addScales(t, i, e) {
      t.metric && (this._mScale = si("div", i, e)), t.imperial && (this._iScale = si("div", i, e));
    },
    _update: function _update() {
      var t = this._map,
          i = t.getSize().y / 2,
          e = t.distance(t.containerPointToLatLng([0, i]), t.containerPointToLatLng([this.options.maxWidth, i]));

      this._updateScales(e);
    },
    _updateScales: function _updateScales(t) {
      this.options.metric && t && this._updateMetric(t), this.options.imperial && t && this._updateImperial(t);
    },
    _updateMetric: function _updateMetric(t) {
      var i = this._getRoundNum(t),
          e = i < 1e3 ? i + " m" : i / 1e3 + " km";

      this._updateScale(this._mScale, e, i / t);
    },
    _updateImperial: function _updateImperial(t) {
      var i,
          e,
          n,
          o = 3.2808399 * t;
      5280 < o ? (i = o / 5280, e = this._getRoundNum(i), this._updateScale(this._iScale, e + " mi", e / i)) : (n = this._getRoundNum(o), this._updateScale(this._iScale, n + " ft", n / o));
    },
    _updateScale: function _updateScale(t, i, e) {
      t.style.width = Math.round(this.options.maxWidth * e) + "px", t.innerHTML = i;
    },
    _getRoundNum: function _getRoundNum(t) {
      var i = Math.pow(10, (Math.floor(t) + "").length - 1),
          e = t / i;
      return i * (e = 10 <= e ? 10 : 5 <= e ? 5 : 3 <= e ? 3 : 2 <= e ? 2 : 1);
    }
  }),
      te = Xi.extend({
    options: {
      position: "bottomright",
      prefix: '<a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'
    },
    initialize: function initialize(t) {
      c(this, t), this._attributions = {};
    },
    onAdd: function onAdd(t) {
      for (var i in (t.attributionControl = this)._container = si("div", "leaflet-control-attribution"), Oi(this._container), t._layers) {
        t._layers[i].getAttribution && this.addAttribution(t._layers[i].getAttribution());
      }

      return this._update(), this._container;
    },
    setPrefix: function setPrefix(t) {
      return this.options.prefix = t, this._update(), this;
    },
    addAttribution: function addAttribution(t) {
      return t && (this._attributions[t] || (this._attributions[t] = 0), this._attributions[t]++, this._update()), this;
    },
    removeAttribution: function removeAttribution(t) {
      return t && this._attributions[t] && (this._attributions[t]--, this._update()), this;
    },
    _update: function _update() {
      if (this._map) {
        var t = [];

        for (var i in this._attributions) {
          this._attributions[i] && t.push(i);
        }

        var e = [];
        this.options.prefix && e.push(this.options.prefix), t.length && e.push(t.join(", ")), this._container.innerHTML = e.join(" | ");
      }
    }
  });
  Ki.mergeOptions({
    attributionControl: !0
  }), Ki.addInitHook(function () {
    this.options.attributionControl && new te().addTo(this);
  });
  Xi.Layers = Ji, Xi.Zoom = $i, Xi.Scale = Qi, Xi.Attribution = te, Yi.layers = function (t, i, e) {
    return new Ji(t, i, e);
  }, Yi.zoom = function (t) {
    return new $i(t);
  }, Yi.scale = function (t) {
    return new Qi(t);
  }, Yi.attribution = function (t) {
    return new te(t);
  };
  var ie = S.extend({
    initialize: function initialize(t) {
      this._map = t;
    },
    enable: function enable() {
      return this._enabled || (this._enabled = !0, this.addHooks()), this;
    },
    disable: function disable() {
      return this._enabled && (this._enabled = !1, this.removeHooks()), this;
    },
    enabled: function enabled() {
      return !!this._enabled;
    }
  });

  ie.addTo = function (t, i) {
    return t.addHandler(i, this), this;
  };

  var ee,
      ne = {
    Events: Z
  },
      oe = bt ? "touchstart mousedown" : "mousedown",
      se = {
    mousedown: "mouseup",
    touchstart: "touchend",
    pointerdown: "touchend",
    MSPointerDown: "touchend"
  },
      re = {
    mousedown: "mousemove",
    touchstart: "touchmove",
    pointerdown: "touchmove",
    MSPointerDown: "touchmove"
  },
      ae = E.extend({
    options: {
      clickTolerance: 3
    },
    initialize: function initialize(t, i, e, n) {
      c(this, n), this._element = t, this._dragStartTarget = i || t, this._preventOutline = e;
    },
    enable: function enable() {
      this._enabled || (zi(this._dragStartTarget, oe, this._onDown, this), this._enabled = !0);
    },
    disable: function disable() {
      this._enabled && (ae._dragging === this && this.finishDrag(), Si(this._dragStartTarget, oe, this._onDown, this), this._enabled = !1, this._moved = !1);
    },
    _onDown: function _onDown(t) {
      var i, e;
      !t._simulated && this._enabled && (this._moved = !1, li(this._element, "leaflet-zoom-anim") || ae._dragging || t.shiftKey || 1 !== t.which && 1 !== t.button && !t.touches || ((ae._dragging = this)._preventOutline && Pi(this._element), xi(), Xt(), this._moving || (this.fire("down"), i = t.touches ? t.touches[0] : t, e = bi(this._element), this._startPoint = new k(i.clientX, i.clientY), this._parentScale = Ti(e), zi(document, re[t.type], this._onMove, this), zi(document, se[t.type], this._onUp, this))));
    },
    _onMove: function _onMove(t) {
      var i, e;
      !t._simulated && this._enabled && (t.touches && 1 < t.touches.length ? this._moved = !0 : ((e = new k((i = t.touches && 1 === t.touches.length ? t.touches[0] : t).clientX, i.clientY)._subtract(this._startPoint)).x || e.y) && (Math.abs(e.x) + Math.abs(e.y) < this.options.clickTolerance || (e.x /= this._parentScale.x, e.y /= this._parentScale.y, Ri(t), this._moved || (this.fire("dragstart"), this._moved = !0, this._startPos = yi(this._element).subtract(e), ci(document.body, "leaflet-dragging"), this._lastTarget = t.target || t.srcElement, window.SVGElementInstance && this._lastTarget instanceof window.SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), ci(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(e), this._moving = !0, z(this._animRequest), this._lastEvent = t, this._animRequest = M(this._updatePosition, this, !0))));
    },
    _updatePosition: function _updatePosition() {
      var t = {
        originalEvent: this._lastEvent
      };
      this.fire("predrag", t), vi(this._element, this._newPos), this.fire("drag", t);
    },
    _onUp: function _onUp(t) {
      !t._simulated && this._enabled && this.finishDrag();
    },
    finishDrag: function finishDrag() {
      for (var t in _i(document.body, "leaflet-dragging"), this._lastTarget && (_i(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null), re) {
        Si(document, re[t], this._onMove, this), Si(document, se[t], this._onUp, this);
      }

      wi(), Jt(), this._moved && this._moving && (z(this._animRequest), this.fire("dragend", {
        distance: this._newPos.distanceTo(this._startPos)
      })), this._moving = !1, ae._dragging = !1;
    }
  });

  function he(t, i) {
    if (!i || !t.length) return t.slice();
    var e = i * i;
    return t = function (t, i) {
      var e = t.length,
          n = new ((typeof Uint8Array === "undefined" ? "undefined" : _typeof(Uint8Array)) != void 0 + "" ? Uint8Array : Array)(e);
      n[0] = n[e - 1] = 1, function t(i, e, n, o, s) {
        var r,
            a,
            h,
            u = 0;

        for (a = o + 1; a <= s - 1; a++) {
          h = de(i[a], i[o], i[s], !0), u < h && (r = a, u = h);
        }

        n < u && (e[r] = 1, t(i, e, n, o, r), t(i, e, n, r, s));
      }(t, n, i, 0, e - 1);
      var o,
          s = [];

      for (o = 0; o < e; o++) {
        n[o] && s.push(t[o]);
      }

      return s;
    }(t = function (t, i) {
      for (var e = [t[0]], n = 1, o = 0, s = t.length; n < s; n++) {
        (function (t, i) {
          var e = i.x - t.x,
              n = i.y - t.y;
          return e * e + n * n;
        })(t[n], t[o]) > i && (e.push(t[n]), o = n);
      }

      o < s - 1 && e.push(t[s - 1]);
      return e;
    }(t, e), e);
  }

  function ue(t, i, e) {
    return Math.sqrt(de(t, i, e, !0));
  }

  function le(t, i, e, n, o) {
    var s,
        r,
        a,
        h = n ? ee : _e(t, e),
        u = _e(i, e);

    for (ee = u;;) {
      if (!(h | u)) return [t, i];
      if (h & u) return !1;
      a = _e(r = ce(t, i, s = h || u, e, o), e), s === h ? (t = r, h = a) : (i = r, u = a);
    }
  }

  function ce(t, i, e, n, o) {
    var s,
        r,
        a = i.x - t.x,
        h = i.y - t.y,
        u = n.min,
        l = n.max;
    return 8 & e ? (s = t.x + a * (l.y - t.y) / h, r = l.y) : 4 & e ? (s = t.x + a * (u.y - t.y) / h, r = u.y) : 2 & e ? (s = l.x, r = t.y + h * (l.x - t.x) / a) : 1 & e && (s = u.x, r = t.y + h * (u.x - t.x) / a), new k(s, r, o);
  }

  function _e(t, i) {
    var e = 0;
    return t.x < i.min.x ? e |= 1 : t.x > i.max.x && (e |= 2), t.y < i.min.y ? e |= 4 : t.y > i.max.y && (e |= 8), e;
  }

  function de(t, i, e, n) {
    var o,
        s = i.x,
        r = i.y,
        a = e.x - s,
        h = e.y - r,
        u = a * a + h * h;
    return 0 < u && (1 < (o = ((t.x - s) * a + (t.y - r) * h) / u) ? (s = e.x, r = e.y) : 0 < o && (s += a * o, r += h * o)), a = t.x - s, h = t.y - r, n ? a * a + h * h : new k(s, r);
  }

  function pe(t) {
    return !g(t[0]) || "object" != _typeof(t[0][0]) && void 0 !== t[0][0];
  }

  function me(t) {
    return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), pe(t);
  }

  var fe = {
    simplify: he,
    pointToSegmentDistance: ue,
    closestPointOnSegment: function closestPointOnSegment(t, i, e) {
      return de(t, i, e);
    },
    clipSegment: le,
    _getEdgeIntersection: ce,
    _getBitCode: _e,
    _sqClosestPointOnSegment: de,
    isFlat: pe,
    _flat: me
  };

  function ge(t, i, e) {
    for (var n, o, s, r, a, h, u, l = [1, 4, 2, 8], c = 0, _ = t.length; c < _; c++) {
      t[c]._code = _e(t[c], i);
    }

    for (s = 0; s < 4; s++) {
      for (h = l[s], n = [], c = 0, o = (_ = t.length) - 1; c < _; o = c++) {
        r = t[c], a = t[o], r._code & h ? a._code & h || ((u = ce(a, r, h, i, e))._code = _e(u, i), n.push(u)) : (a._code & h && ((u = ce(a, r, h, i, e))._code = _e(u, i), n.push(u)), n.push(r));
      }

      t = n;
    }

    return t;
  }

  var ve,
      ye = {
    clipPolygon: ge
  },
      xe = {
    project: function project(t) {
      return new k(t.lng, t.lat);
    },
    unproject: function unproject(t) {
      return new D(t.y, t.x);
    },
    bounds: new I([-180, -90], [180, 90])
  },
      we = {
    R: 6378137,
    R_MINOR: 6356752.314245179,
    bounds: new I([-20037508.34279, -15496570.73972], [20037508.34279, 18764656.23138]),
    project: function project(t) {
      var i = Math.PI / 180,
          e = this.R,
          n = t.lat * i,
          o = this.R_MINOR / e,
          s = Math.sqrt(1 - o * o),
          r = s * Math.sin(n),
          a = Math.tan(Math.PI / 4 - n / 2) / Math.pow((1 - r) / (1 + r), s / 2),
          n = -e * Math.log(Math.max(a, 1e-10));
      return new k(t.lng * i * e, n);
    },
    unproject: function unproject(t) {
      for (var i, e = 180 / Math.PI, n = this.R, o = this.R_MINOR / n, s = Math.sqrt(1 - o * o), r = Math.exp(-t.y / n), a = Math.PI / 2 - 2 * Math.atan(r), h = 0, u = .1; h < 15 && 1e-7 < Math.abs(u); h++) {
        i = s * Math.sin(a), i = Math.pow((1 - i) / (1 + i), s / 2), a += u = Math.PI / 2 - 2 * Math.atan(r * i) - a;
      }

      return new D(a * e, t.x * e / n);
    }
  },
      Pe = {
    LonLat: xe,
    Mercator: we,
    SphericalMercator: V
  },
      Le = h({}, F, {
    code: "EPSG:3395",
    projection: we,
    transformation: G(ve = .5 / (Math.PI * we.R), .5, -ve, .5)
  }),
      be = h({}, F, {
    code: "EPSG:4326",
    projection: xe,
    transformation: G(1 / 180, 1, -1 / 180, .5)
  }),
      Te = h({}, H, {
    projection: xe,
    transformation: G(1, 0, -1, 0),
    scale: function scale(t) {
      return Math.pow(2, t);
    },
    zoom: function zoom(t) {
      return Math.log(t) / Math.LN2;
    },
    distance: function distance(t, i) {
      var e = i.lng - t.lng,
          n = i.lat - t.lat;
      return Math.sqrt(e * e + n * n);
    },
    infinite: !0
  });
  H.Earth = F, H.EPSG3395 = Le, H.EPSG3857 = Y, H.EPSG900913 = X, H.EPSG4326 = be, H.Simple = Te;
  var Me = E.extend({
    options: {
      pane: "overlayPane",
      attribution: null,
      bubblingMouseEvents: !0
    },
    addTo: function addTo(t) {
      return t.addLayer(this), this;
    },
    remove: function remove() {
      return this.removeFrom(this._map || this._mapToAdd);
    },
    removeFrom: function removeFrom(t) {
      return t && t.removeLayer(this), this;
    },
    getPane: function getPane(t) {
      return this._map.getPane(t ? this.options[t] || t : this.options.pane);
    },
    addInteractiveTarget: function addInteractiveTarget(t) {
      return this._map._targets[m(t)] = this;
    },
    removeInteractiveTarget: function removeInteractiveTarget(t) {
      return delete this._map._targets[m(t)], this;
    },
    getAttribution: function getAttribution() {
      return this.options.attribution;
    },
    _layerAdd: function _layerAdd(t) {
      var i,
          e = t.target;
      e.hasLayer(this) && (this._map = e, this._zoomAnimated = e._zoomAnimated, this.getEvents && (i = this.getEvents(), e.on(i, this), this.once("remove", function () {
        e.off(i, this);
      }, this)), this.onAdd(e), this.getAttribution && e.attributionControl && e.attributionControl.addAttribution(this.getAttribution()), this.fire("add"), e.fire("layeradd", {
        layer: this
      }));
    }
  });
  Ki.include({
    addLayer: function addLayer(t) {
      if (!t._layerAdd) throw new Error("The provided object is not a Layer.");
      var i = m(t);
      return this._layers[i] || ((this._layers[i] = t)._mapToAdd = this, t.beforeAdd && t.beforeAdd(this), this.whenReady(t._layerAdd, t)), this;
    },
    removeLayer: function removeLayer(t) {
      var i = m(t);
      return this._layers[i] && (this._loaded && t.onRemove(this), t.getAttribution && this.attributionControl && this.attributionControl.removeAttribution(t.getAttribution()), delete this._layers[i], this._loaded && (this.fire("layerremove", {
        layer: t
      }), t.fire("remove")), t._map = t._mapToAdd = null), this;
    },
    hasLayer: function hasLayer(t) {
      return !!t && m(t) in this._layers;
    },
    eachLayer: function eachLayer(t, i) {
      for (var e in this._layers) {
        t.call(i, this._layers[e]);
      }

      return this;
    },
    _addLayers: function _addLayers(t) {
      for (var i = 0, e = (t = t ? g(t) ? t : [t] : []).length; i < e; i++) {
        this.addLayer(t[i]);
      }
    },
    _addZoomLimit: function _addZoomLimit(t) {
      !isNaN(t.options.maxZoom) && isNaN(t.options.minZoom) || (this._zoomBoundLayers[m(t)] = t, this._updateZoomLevels());
    },
    _removeZoomLimit: function _removeZoomLimit(t) {
      var i = m(t);
      this._zoomBoundLayers[i] && (delete this._zoomBoundLayers[i], this._updateZoomLevels());
    },
    _updateZoomLevels: function _updateZoomLevels() {
      var t = 1 / 0,
          i = -1 / 0,
          e = this._getZoomSpan();

      for (var n in this._zoomBoundLayers) {
        var o = this._zoomBoundLayers[n].options,
            t = void 0 === o.minZoom ? t : Math.min(t, o.minZoom),
            i = void 0 === o.maxZoom ? i : Math.max(i, o.maxZoom);
      }

      this._layersMaxZoom = i === -1 / 0 ? void 0 : i, this._layersMinZoom = t === 1 / 0 ? void 0 : t, e !== this._getZoomSpan() && this.fire("zoomlevelschange"), void 0 === this.options.maxZoom && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom), void 0 === this.options.minZoom && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom);
    }
  });
  var ze = Me.extend({
    initialize: function initialize(t, i) {
      var e, n;
      if (c(this, i), this._layers = {}, t) for (e = 0, n = t.length; e < n; e++) {
        this.addLayer(t[e]);
      }
    },
    addLayer: function addLayer(t) {
      var i = this.getLayerId(t);
      return this._layers[i] = t, this._map && this._map.addLayer(t), this;
    },
    removeLayer: function removeLayer(t) {
      var i = t in this._layers ? t : this.getLayerId(t);
      return this._map && this._layers[i] && this._map.removeLayer(this._layers[i]), delete this._layers[i], this;
    },
    hasLayer: function hasLayer(t) {
      return !!t && ("number" == typeof t ? t : this.getLayerId(t)) in this._layers;
    },
    clearLayers: function clearLayers() {
      return this.eachLayer(this.removeLayer, this);
    },
    invoke: function invoke(t) {
      var i,
          e,
          n = Array.prototype.slice.call(arguments, 1);

      for (i in this._layers) {
        (e = this._layers[i])[t] && e[t].apply(e, n);
      }

      return this;
    },
    onAdd: function onAdd(t) {
      this.eachLayer(t.addLayer, t);
    },
    onRemove: function onRemove(t) {
      this.eachLayer(t.removeLayer, t);
    },
    eachLayer: function eachLayer(t, i) {
      for (var e in this._layers) {
        t.call(i, this._layers[e]);
      }

      return this;
    },
    getLayer: function getLayer(t) {
      return this._layers[t];
    },
    getLayers: function getLayers() {
      var t = [];
      return this.eachLayer(t.push, t), t;
    },
    setZIndex: function setZIndex(t) {
      return this.invoke("setZIndex", t);
    },
    getLayerId: m
  }),
      Ce = ze.extend({
    addLayer: function addLayer(t) {
      return this.hasLayer(t) ? this : (t.addEventParent(this), ze.prototype.addLayer.call(this, t), this.fire("layeradd", {
        layer: t
      }));
    },
    removeLayer: function removeLayer(t) {
      return this.hasLayer(t) ? (t in this._layers && (t = this._layers[t]), t.removeEventParent(this), ze.prototype.removeLayer.call(this, t), this.fire("layerremove", {
        layer: t
      })) : this;
    },
    setStyle: function setStyle(t) {
      return this.invoke("setStyle", t);
    },
    bringToFront: function bringToFront() {
      return this.invoke("bringToFront");
    },
    bringToBack: function bringToBack() {
      return this.invoke("bringToBack");
    },
    getBounds: function getBounds() {
      var t = new R();

      for (var i in this._layers) {
        var e = this._layers[i];
        t.extend(e.getBounds ? e.getBounds() : e.getLatLng());
      }

      return t;
    }
  }),
      Se = S.extend({
    options: {
      popupAnchor: [0, 0],
      tooltipAnchor: [0, 0]
    },
    initialize: function initialize(t) {
      c(this, t);
    },
    createIcon: function createIcon(t) {
      return this._createIcon("icon", t);
    },
    createShadow: function createShadow(t) {
      return this._createIcon("shadow", t);
    },
    _createIcon: function _createIcon(t, i) {
      var e = this._getIconUrl(t);

      if (!e) {
        if ("icon" === t) throw new Error("iconUrl not set in Icon options (see the docs).");
        return null;
      }

      var n = this._createImg(e, i && "IMG" === i.tagName ? i : null);

      return this._setIconStyles(n, t), n;
    },
    _setIconStyles: function _setIconStyles(t, i) {
      var e = this.options,
          n = e[i + "Size"];
      "number" == typeof n && (n = [n, n]);
      var o = A(n),
          s = A("shadow" === i && e.shadowAnchor || e.iconAnchor || o && o.divideBy(2, !0));
      t.className = "leaflet-marker-" + i + " " + (e.className || ""), s && (t.style.marginLeft = -s.x + "px", t.style.marginTop = -s.y + "px"), o && (t.style.width = o.x + "px", t.style.height = o.y + "px");
    },
    _createImg: function _createImg(t, i) {
      return (i = i || document.createElement("img")).src = t, i;
    },
    _getIconUrl: function _getIconUrl(t) {
      return zt && this.options[t + "RetinaUrl"] || this.options[t + "Url"];
    }
  });
  var Ze = Se.extend({
    options: {
      iconUrl: "marker-icon.png",
      iconRetinaUrl: "marker-icon-2x.png",
      shadowUrl: "marker-shadow.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
      shadowSize: [41, 41]
    },
    _getIconUrl: function _getIconUrl(t) {
      return Ze.imagePath || (Ze.imagePath = this._detectIconPath()), (this.options.imagePath || Ze.imagePath) + Se.prototype._getIconUrl.call(this, t);
    },
    _detectIconPath: function _detectIconPath() {
      var t = si("div", "leaflet-default-icon-path", document.body),
          i = oi(t, "background-image") || oi(t, "backgroundImage");
      return document.body.removeChild(t), i = null === i || 0 !== i.indexOf("url") ? "" : i.replace(/^url\(["']?/, "").replace(/marker-icon\.png["']?\)$/, "");
    }
  }),
      Ee = ie.extend({
    initialize: function initialize(t) {
      this._marker = t;
    },
    addHooks: function addHooks() {
      var t = this._marker._icon;
      this._draggable || (this._draggable = new ae(t, t, !0)), this._draggable.on({
        dragstart: this._onDragStart,
        predrag: this._onPreDrag,
        drag: this._onDrag,
        dragend: this._onDragEnd
      }, this).enable(), ci(t, "leaflet-marker-draggable");
    },
    removeHooks: function removeHooks() {
      this._draggable.off({
        dragstart: this._onDragStart,
        predrag: this._onPreDrag,
        drag: this._onDrag,
        dragend: this._onDragEnd
      }, this).disable(), this._marker._icon && _i(this._marker._icon, "leaflet-marker-draggable");
    },
    moved: function moved() {
      return this._draggable && this._draggable._moved;
    },
    _adjustPan: function _adjustPan(t) {
      var i,
          e = this._marker,
          n = e._map,
          o = this._marker.options.autoPanSpeed,
          s = this._marker.options.autoPanPadding,
          r = yi(e._icon),
          a = n.getPixelBounds(),
          h = n.getPixelOrigin(),
          u = O(a.min._subtract(h).add(s), a.max._subtract(h).subtract(s));
      u.contains(r) || (i = A((Math.max(u.max.x, r.x) - u.max.x) / (a.max.x - u.max.x) - (Math.min(u.min.x, r.x) - u.min.x) / (a.min.x - u.min.x), (Math.max(u.max.y, r.y) - u.max.y) / (a.max.y - u.max.y) - (Math.min(u.min.y, r.y) - u.min.y) / (a.min.y - u.min.y)).multiplyBy(o), n.panBy(i, {
        animate: !1
      }), this._draggable._newPos._add(i), this._draggable._startPos._add(i), vi(e._icon, this._draggable._newPos), this._onDrag(t), this._panRequest = M(this._adjustPan.bind(this, t)));
    },
    _onDragStart: function _onDragStart() {
      this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup && this._marker.closePopup(), this._marker.fire("movestart").fire("dragstart");
    },
    _onPreDrag: function _onPreDrag(t) {
      this._marker.options.autoPan && (z(this._panRequest), this._panRequest = M(this._adjustPan.bind(this, t)));
    },
    _onDrag: function _onDrag(t) {
      var i = this._marker,
          e = i._shadow,
          n = yi(i._icon),
          o = i._map.layerPointToLatLng(n);

      e && vi(e, n), i._latlng = o, t.latlng = o, t.oldLatLng = this._oldLatLng, i.fire("move", t).fire("drag", t);
    },
    _onDragEnd: function _onDragEnd(t) {
      z(this._panRequest), delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", t);
    }
  }),
      ke = Me.extend({
    options: {
      icon: new Ze(),
      interactive: !0,
      keyboard: !0,
      title: "",
      alt: "",
      zIndexOffset: 0,
      opacity: 1,
      riseOnHover: !1,
      riseOffset: 250,
      pane: "markerPane",
      shadowPane: "shadowPane",
      bubblingMouseEvents: !1,
      draggable: !1,
      autoPan: !1,
      autoPanPadding: [50, 50],
      autoPanSpeed: 10
    },
    initialize: function initialize(t, i) {
      c(this, i), this._latlng = j(t);
    },
    onAdd: function onAdd(t) {
      this._zoomAnimated = this._zoomAnimated && t.options.markerZoomAnimation, this._zoomAnimated && t.on("zoomanim", this._animateZoom, this), this._initIcon(), this.update();
    },
    onRemove: function onRemove(t) {
      this.dragging && this.dragging.enabled() && (this.options.draggable = !0, this.dragging.removeHooks()), delete this.dragging, this._zoomAnimated && t.off("zoomanim", this._animateZoom, this), this._removeIcon(), this._removeShadow();
    },
    getEvents: function getEvents() {
      return {
        zoom: this.update,
        viewreset: this.update
      };
    },
    getLatLng: function getLatLng() {
      return this._latlng;
    },
    setLatLng: function setLatLng(t) {
      var i = this._latlng;
      return this._latlng = j(t), this.update(), this.fire("move", {
        oldLatLng: i,
        latlng: this._latlng
      });
    },
    setZIndexOffset: function setZIndexOffset(t) {
      return this.options.zIndexOffset = t, this.update();
    },
    getIcon: function getIcon() {
      return this.options.icon;
    },
    setIcon: function setIcon(t) {
      return this.options.icon = t, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup, this._popup.options), this;
    },
    getElement: function getElement() {
      return this._icon;
    },
    update: function update() {
      var t;
      return this._icon && this._map && (t = this._map.latLngToLayerPoint(this._latlng).round(), this._setPos(t)), this;
    },
    _initIcon: function _initIcon() {
      var t = this.options,
          i = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"),
          e = t.icon.createIcon(this._icon),
          n = !1;
      e !== this._icon && (this._icon && this._removeIcon(), n = !0, t.title && (e.title = t.title), "IMG" === e.tagName && (e.alt = t.alt || "")), ci(e, i), t.keyboard && (e.tabIndex = "0"), this._icon = e, t.riseOnHover && this.on({
        mouseover: this._bringToFront,
        mouseout: this._resetZIndex
      });
      var o = t.icon.createShadow(this._shadow),
          s = !1;
      o !== this._shadow && (this._removeShadow(), s = !0), o && (ci(o, i), o.alt = ""), this._shadow = o, t.opacity < 1 && this._updateOpacity(), n && this.getPane().appendChild(this._icon), this._initInteraction(), o && s && this.getPane(t.shadowPane).appendChild(this._shadow);
    },
    _removeIcon: function _removeIcon() {
      this.options.riseOnHover && this.off({
        mouseover: this._bringToFront,
        mouseout: this._resetZIndex
      }), ri(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null;
    },
    _removeShadow: function _removeShadow() {
      this._shadow && ri(this._shadow), this._shadow = null;
    },
    _setPos: function _setPos(t) {
      this._icon && vi(this._icon, t), this._shadow && vi(this._shadow, t), this._zIndex = t.y + this.options.zIndexOffset, this._resetZIndex();
    },
    _updateZIndex: function _updateZIndex(t) {
      this._icon && (this._icon.style.zIndex = this._zIndex + t);
    },
    _animateZoom: function _animateZoom(t) {
      var i = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();

      this._setPos(i);
    },
    _initInteraction: function _initInteraction() {
      var t;
      this.options.interactive && (ci(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), Ee && (t = this.options.draggable, this.dragging && (t = this.dragging.enabled(), this.dragging.disable()), this.dragging = new Ee(this), t && this.dragging.enable()));
    },
    setOpacity: function setOpacity(t) {
      return this.options.opacity = t, this._map && this._updateOpacity(), this;
    },
    _updateOpacity: function _updateOpacity() {
      var t = this.options.opacity;
      this._icon && mi(this._icon, t), this._shadow && mi(this._shadow, t);
    },
    _bringToFront: function _bringToFront() {
      this._updateZIndex(this.options.riseOffset);
    },
    _resetZIndex: function _resetZIndex() {
      this._updateZIndex(0);
    },
    _getPopupAnchor: function _getPopupAnchor() {
      return this.options.icon.options.popupAnchor;
    },
    _getTooltipAnchor: function _getTooltipAnchor() {
      return this.options.icon.options.tooltipAnchor;
    }
  });
  var Be = Me.extend({
    options: {
      stroke: !0,
      color: "#3388ff",
      weight: 3,
      opacity: 1,
      lineCap: "round",
      lineJoin: "round",
      dashArray: null,
      dashOffset: null,
      fill: !1,
      fillColor: null,
      fillOpacity: .2,
      fillRule: "evenodd",
      interactive: !0,
      bubblingMouseEvents: !0
    },
    beforeAdd: function beforeAdd(t) {
      this._renderer = t.getRenderer(this);
    },
    onAdd: function onAdd() {
      this._renderer._initPath(this), this._reset(), this._renderer._addPath(this);
    },
    onRemove: function onRemove() {
      this._renderer._removePath(this);
    },
    redraw: function redraw() {
      return this._map && this._renderer._updatePath(this), this;
    },
    setStyle: function setStyle(t) {
      return c(this, t), this._renderer && (this._renderer._updateStyle(this), this.options.stroke && t && Object.prototype.hasOwnProperty.call(t, "weight") && this._updateBounds()), this;
    },
    bringToFront: function bringToFront() {
      return this._renderer && this._renderer._bringToFront(this), this;
    },
    bringToBack: function bringToBack() {
      return this._renderer && this._renderer._bringToBack(this), this;
    },
    getElement: function getElement() {
      return this._path;
    },
    _reset: function _reset() {
      this._project(), this._update();
    },
    _clickTolerance: function _clickTolerance() {
      return (this.options.stroke ? this.options.weight / 2 : 0) + this._renderer.options.tolerance;
    }
  }),
      Ae = Be.extend({
    options: {
      fill: !0,
      radius: 10
    },
    initialize: function initialize(t, i) {
      c(this, i), this._latlng = j(t), this._radius = this.options.radius;
    },
    setLatLng: function setLatLng(t) {
      var i = this._latlng;
      return this._latlng = j(t), this.redraw(), this.fire("move", {
        oldLatLng: i,
        latlng: this._latlng
      });
    },
    getLatLng: function getLatLng() {
      return this._latlng;
    },
    setRadius: function setRadius(t) {
      return this.options.radius = this._radius = t, this.redraw();
    },
    getRadius: function getRadius() {
      return this._radius;
    },
    setStyle: function setStyle(t) {
      var i = t && t.radius || this._radius;
      return Be.prototype.setStyle.call(this, t), this.setRadius(i), this;
    },
    _project: function _project() {
      this._point = this._map.latLngToLayerPoint(this._latlng), this._updateBounds();
    },
    _updateBounds: function _updateBounds() {
      var t = this._radius,
          i = this._radiusY || t,
          e = this._clickTolerance(),
          n = [t + e, i + e];

      this._pxBounds = new I(this._point.subtract(n), this._point.add(n));
    },
    _update: function _update() {
      this._map && this._updatePath();
    },
    _updatePath: function _updatePath() {
      this._renderer._updateCircle(this);
    },
    _empty: function _empty() {
      return this._radius && !this._renderer._bounds.intersects(this._pxBounds);
    },
    _containsPoint: function _containsPoint(t) {
      return t.distanceTo(this._point) <= this._radius + this._clickTolerance();
    }
  });
  var Ie = Ae.extend({
    initialize: function initialize(t, i, e) {
      if ("number" == typeof i && (i = h({}, e, {
        radius: i
      })), c(this, i), this._latlng = j(t), isNaN(this.options.radius)) throw new Error("Circle radius cannot be NaN");
      this._mRadius = this.options.radius;
    },
    setRadius: function setRadius(t) {
      return this._mRadius = t, this.redraw();
    },
    getRadius: function getRadius() {
      return this._mRadius;
    },
    getBounds: function getBounds() {
      var t = [this._radius, this._radiusY || this._radius];
      return new R(this._map.layerPointToLatLng(this._point.subtract(t)), this._map.layerPointToLatLng(this._point.add(t)));
    },
    setStyle: Be.prototype.setStyle,
    _project: function _project() {
      var t,
          i,
          e,
          n,
          o,
          s,
          r,
          a,
          h = this._latlng.lng,
          u = this._latlng.lat,
          l = this._map,
          c = l.options.crs;
      c.distance === F.distance ? (t = Math.PI / 180, i = this._mRadius / F.R / t, e = l.project([u + i, h]), n = l.project([u - i, h]), o = e.add(n).divideBy(2), s = l.unproject(o).lat, r = Math.acos((Math.cos(i * t) - Math.sin(u * t) * Math.sin(s * t)) / (Math.cos(u * t) * Math.cos(s * t))) / t, !isNaN(r) && 0 !== r || (r = i / Math.cos(Math.PI / 180 * u)), this._point = o.subtract(l.getPixelOrigin()), this._radius = isNaN(r) ? 0 : o.x - l.project([s, h - r]).x, this._radiusY = o.y - e.y) : (a = c.unproject(c.project(this._latlng).subtract([this._mRadius, 0])), this._point = l.latLngToLayerPoint(this._latlng), this._radius = this._point.x - l.latLngToLayerPoint(a).x), this._updateBounds();
    }
  });
  var Oe = Be.extend({
    options: {
      smoothFactor: 1,
      noClip: !1
    },
    initialize: function initialize(t, i) {
      c(this, i), this._setLatLngs(t);
    },
    getLatLngs: function getLatLngs() {
      return this._latlngs;
    },
    setLatLngs: function setLatLngs(t) {
      return this._setLatLngs(t), this.redraw();
    },
    isEmpty: function isEmpty() {
      return !this._latlngs.length;
    },
    closestLayerPoint: function closestLayerPoint(t) {
      for (var i, e, n = 1 / 0, o = null, s = de, r = 0, a = this._parts.length; r < a; r++) {
        for (var h = this._parts[r], u = 1, l = h.length; u < l; u++) {
          var c = s(t, i = h[u - 1], e = h[u], !0);
          c < n && (n = c, o = s(t, i, e));
        }
      }

      return o && (o.distance = Math.sqrt(n)), o;
    },
    getCenter: function getCenter() {
      if (!this._map) throw new Error("Must add layer to map before using getCenter()");
      var t,
          i,
          e,
          n,
          o,
          s,
          r,
          a = this._rings[0],
          h = a.length;
      if (!h) return null;

      for (i = t = 0; t < h - 1; t++) {
        i += a[t].distanceTo(a[t + 1]) / 2;
      }

      if (0 === i) return this._map.layerPointToLatLng(a[0]);

      for (n = t = 0; t < h - 1; t++) {
        if (o = a[t], s = a[t + 1], i < (n += e = o.distanceTo(s))) return r = (n - i) / e, this._map.layerPointToLatLng([s.x - r * (s.x - o.x), s.y - r * (s.y - o.y)]);
      }
    },
    getBounds: function getBounds() {
      return this._bounds;
    },
    addLatLng: function addLatLng(t, i) {
      return i = i || this._defaultShape(), t = j(t), i.push(t), this._bounds.extend(t), this.redraw();
    },
    _setLatLngs: function _setLatLngs(t) {
      this._bounds = new R(), this._latlngs = this._convertLatLngs(t);
    },
    _defaultShape: function _defaultShape() {
      return pe(this._latlngs) ? this._latlngs : this._latlngs[0];
    },
    _convertLatLngs: function _convertLatLngs(t) {
      for (var i = [], e = pe(t), n = 0, o = t.length; n < o; n++) {
        e ? (i[n] = j(t[n]), this._bounds.extend(i[n])) : i[n] = this._convertLatLngs(t[n]);
      }

      return i;
    },
    _project: function _project() {
      var t = new I();
      this._rings = [], this._projectLatlngs(this._latlngs, this._rings, t), this._bounds.isValid() && t.isValid() && (this._rawPxBounds = t, this._updateBounds());
    },
    _updateBounds: function _updateBounds() {
      var t = this._clickTolerance(),
          i = new k(t, t);

      this._pxBounds = new I([this._rawPxBounds.min.subtract(i), this._rawPxBounds.max.add(i)]);
    },
    _projectLatlngs: function _projectLatlngs(t, i, e) {
      var n,
          o,
          s = t[0] instanceof D,
          r = t.length;

      if (s) {
        for (o = [], n = 0; n < r; n++) {
          o[n] = this._map.latLngToLayerPoint(t[n]), e.extend(o[n]);
        }

        i.push(o);
      } else for (n = 0; n < r; n++) {
        this._projectLatlngs(t[n], i, e);
      }
    },
    _clipPoints: function _clipPoints() {
      var t = this._renderer._bounds;
      if (this._parts = [], this._pxBounds && this._pxBounds.intersects(t)) if (this.options.noClip) this._parts = this._rings;else for (var i, e, n, o, s = this._parts, r = 0, a = 0, h = this._rings.length; r < h; r++) {
        for (i = 0, e = (o = this._rings[r]).length; i < e - 1; i++) {
          (n = le(o[i], o[i + 1], t, i, !0)) && (s[a] = s[a] || [], s[a].push(n[0]), n[1] === o[i + 1] && i !== e - 2 || (s[a].push(n[1]), a++));
        }
      }
    },
    _simplifyPoints: function _simplifyPoints() {
      for (var t = this._parts, i = this.options.smoothFactor, e = 0, n = t.length; e < n; e++) {
        t[e] = he(t[e], i);
      }
    },
    _update: function _update() {
      this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath());
    },
    _updatePath: function _updatePath() {
      this._renderer._updatePoly(this);
    },
    _containsPoint: function _containsPoint(t, i) {
      var e,
          n,
          o,
          s,
          r,
          a,
          h = this._clickTolerance();

      if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;

      for (e = 0, s = this._parts.length; e < s; e++) {
        for (n = 0, o = (r = (a = this._parts[e]).length) - 1; n < r; o = n++) {
          if ((i || 0 !== n) && ue(t, a[o], a[n]) <= h) return !0;
        }
      }

      return !1;
    }
  });
  Oe._flat = me;
  var Re = Oe.extend({
    options: {
      fill: !0
    },
    isEmpty: function isEmpty() {
      return !this._latlngs.length || !this._latlngs[0].length;
    },
    getCenter: function getCenter() {
      if (!this._map) throw new Error("Must add layer to map before using getCenter()");
      var t,
          i,
          e,
          n,
          o,
          s,
          r,
          a,
          h,
          u = this._rings[0],
          l = u.length;
      if (!l) return null;

      for (t = s = r = a = 0, i = l - 1; t < l; i = t++) {
        e = u[t], n = u[i], o = e.y * n.x - n.y * e.x, r += (e.x + n.x) * o, a += (e.y + n.y) * o, s += 3 * o;
      }

      return h = 0 === s ? u[0] : [r / s, a / s], this._map.layerPointToLatLng(h);
    },
    _convertLatLngs: function _convertLatLngs(t) {
      var i = Oe.prototype._convertLatLngs.call(this, t),
          e = i.length;

      return 2 <= e && i[0] instanceof D && i[0].equals(i[e - 1]) && i.pop(), i;
    },
    _setLatLngs: function _setLatLngs(t) {
      Oe.prototype._setLatLngs.call(this, t), pe(this._latlngs) && (this._latlngs = [this._latlngs]);
    },
    _defaultShape: function _defaultShape() {
      return pe(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
    },
    _clipPoints: function _clipPoints() {
      var t = this._renderer._bounds,
          i = this.options.weight,
          e = new k(i, i),
          t = new I(t.min.subtract(e), t.max.add(e));
      if (this._parts = [], this._pxBounds && this._pxBounds.intersects(t)) if (this.options.noClip) this._parts = this._rings;else for (var n, o = 0, s = this._rings.length; o < s; o++) {
        (n = ge(this._rings[o], t, !0)).length && this._parts.push(n);
      }
    },
    _updatePath: function _updatePath() {
      this._renderer._updatePoly(this, !0);
    },
    _containsPoint: function _containsPoint(t) {
      var i,
          e,
          n,
          o,
          s,
          r,
          a,
          h,
          u = !1;
      if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;

      for (o = 0, a = this._parts.length; o < a; o++) {
        for (s = 0, r = (h = (i = this._parts[o]).length) - 1; s < h; r = s++) {
          e = i[s], n = i[r], e.y > t.y != n.y > t.y && t.x < (n.x - e.x) * (t.y - e.y) / (n.y - e.y) + e.x && (u = !u);
        }
      }

      return u || Oe.prototype._containsPoint.call(this, t, !0);
    }
  });
  var Ne = Ce.extend({
    initialize: function initialize(t, i) {
      c(this, i), this._layers = {}, t && this.addData(t);
    },
    addData: function addData(t) {
      var i,
          e,
          n,
          o = g(t) ? t : t.features;

      if (o) {
        for (i = 0, e = o.length; i < e; i++) {
          ((n = o[i]).geometries || n.geometry || n.features || n.coordinates) && this.addData(n);
        }

        return this;
      }

      var s = this.options;
      if (s.filter && !s.filter(t)) return this;
      var r = De(t, s);
      return r ? (r.feature = qe(t), r.defaultOptions = r.options, this.resetStyle(r), s.onEachFeature && s.onEachFeature(t, r), this.addLayer(r)) : this;
    },
    resetStyle: function resetStyle(t) {
      return void 0 === t ? this.eachLayer(this.resetStyle, this) : (t.options = h({}, t.defaultOptions), this._setLayerStyle(t, this.options.style), this);
    },
    setStyle: function setStyle(i) {
      return this.eachLayer(function (t) {
        this._setLayerStyle(t, i);
      }, this);
    },
    _setLayerStyle: function _setLayerStyle(t, i) {
      t.setStyle && ("function" == typeof i && (i = i(t.feature)), t.setStyle(i));
    }
  });

  function De(t, i) {
    var e,
        n,
        o,
        s,
        r = "Feature" === t.type ? t.geometry : t,
        a = r ? r.coordinates : null,
        h = [],
        u = i && i.pointToLayer,
        l = i && i.coordsToLatLng || We;
    if (!a && !r) return null;

    switch (r.type) {
      case "Point":
        return je(u, t, e = l(a), i);

      case "MultiPoint":
        for (o = 0, s = a.length; o < s; o++) {
          e = l(a[o]), h.push(je(u, t, e, i));
        }

        return new Ce(h);

      case "LineString":
      case "MultiLineString":
        return n = He(a, "LineString" === r.type ? 0 : 1, l), new Oe(n, i);

      case "Polygon":
      case "MultiPolygon":
        return n = He(a, "Polygon" === r.type ? 1 : 2, l), new Re(n, i);

      case "GeometryCollection":
        for (o = 0, s = r.geometries.length; o < s; o++) {
          var c = De({
            geometry: r.geometries[o],
            type: "Feature",
            properties: t.properties
          }, i);
          c && h.push(c);
        }

        return new Ce(h);

      default:
        throw new Error("Invalid GeoJSON object.");
    }
  }

  function je(t, i, e, n) {
    return t ? t(i, e) : new ke(e, n && n.markersInheritOptions && n);
  }

  function We(t) {
    return new D(t[1], t[0], t[2]);
  }

  function He(t, i, e) {
    for (var n, o = [], s = 0, r = t.length; s < r; s++) {
      n = i ? He(t[s], i - 1, e) : (e || We)(t[s]), o.push(n);
    }

    return o;
  }

  function Fe(t, i) {
    return i = "number" == typeof i ? i : 6, void 0 !== t.alt ? [r(t.lng, i), r(t.lat, i), r(t.alt, i)] : [r(t.lng, i), r(t.lat, i)];
  }

  function Ue(t, i, e, n) {
    for (var o = [], s = 0, r = t.length; s < r; s++) {
      o.push(i ? Ue(t[s], i - 1, e, n) : Fe(t[s], n));
    }

    return !i && e && o.push(o[0]), o;
  }

  function Ve(t, i) {
    return t.feature ? h({}, t.feature, {
      geometry: i
    }) : qe(i);
  }

  function qe(t) {
    return "Feature" === t.type || "FeatureCollection" === t.type ? t : {
      type: "Feature",
      properties: {},
      geometry: t
    };
  }

  var Ge = {
    toGeoJSON: function toGeoJSON(t) {
      return Ve(this, {
        type: "Point",
        coordinates: Fe(this.getLatLng(), t)
      });
    }
  };

  function Ke(t, i) {
    return new Ne(t, i);
  }

  ke.include(Ge), Ie.include(Ge), Ae.include(Ge), Oe.include({
    toGeoJSON: function toGeoJSON(t) {
      var i = !pe(this._latlngs);
      return Ve(this, {
        type: (i ? "Multi" : "") + "LineString",
        coordinates: Ue(this._latlngs, i ? 1 : 0, !1, t)
      });
    }
  }), Re.include({
    toGeoJSON: function toGeoJSON(t) {
      var i = !pe(this._latlngs),
          e = i && !pe(this._latlngs[0]),
          n = Ue(this._latlngs, e ? 2 : i ? 1 : 0, !0, t);
      return i || (n = [n]), Ve(this, {
        type: (e ? "Multi" : "") + "Polygon",
        coordinates: n
      });
    }
  }), ze.include({
    toMultiPoint: function toMultiPoint(i) {
      var e = [];
      return this.eachLayer(function (t) {
        e.push(t.toGeoJSON(i).geometry.coordinates);
      }), Ve(this, {
        type: "MultiPoint",
        coordinates: e
      });
    },
    toGeoJSON: function toGeoJSON(n) {
      var t = this.feature && this.feature.geometry && this.feature.geometry.type;
      if ("MultiPoint" === t) return this.toMultiPoint(n);
      var o = "GeometryCollection" === t,
          s = [];
      return this.eachLayer(function (t) {
        var i, e;
        t.toGeoJSON && (i = t.toGeoJSON(n), o ? s.push(i.geometry) : "FeatureCollection" === (e = qe(i)).type ? s.push.apply(s, e.features) : s.push(e));
      }), o ? Ve(this, {
        geometries: s,
        type: "GeometryCollection"
      }) : {
        type: "FeatureCollection",
        features: s
      };
    }
  });
  var Ye = Ke,
      Xe = Me.extend({
    options: {
      opacity: 1,
      alt: "",
      interactive: !1,
      crossOrigin: !1,
      errorOverlayUrl: "",
      zIndex: 1,
      className: ""
    },
    initialize: function initialize(t, i, e) {
      this._url = t, this._bounds = N(i), c(this, e);
    },
    onAdd: function onAdd() {
      this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive && (ci(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)), this.getPane().appendChild(this._image), this._reset();
    },
    onRemove: function onRemove() {
      ri(this._image), this.options.interactive && this.removeInteractiveTarget(this._image);
    },
    setOpacity: function setOpacity(t) {
      return this.options.opacity = t, this._image && this._updateOpacity(), this;
    },
    setStyle: function setStyle(t) {
      return t.opacity && this.setOpacity(t.opacity), this;
    },
    bringToFront: function bringToFront() {
      return this._map && hi(this._image), this;
    },
    bringToBack: function bringToBack() {
      return this._map && ui(this._image), this;
    },
    setUrl: function setUrl(t) {
      return this._url = t, this._image && (this._image.src = t), this;
    },
    setBounds: function setBounds(t) {
      return this._bounds = N(t), this._map && this._reset(), this;
    },
    getEvents: function getEvents() {
      var t = {
        zoom: this._reset,
        viewreset: this._reset
      };
      return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
    },
    setZIndex: function setZIndex(t) {
      return this.options.zIndex = t, this._updateZIndex(), this;
    },
    getBounds: function getBounds() {
      return this._bounds;
    },
    getElement: function getElement() {
      return this._image;
    },
    _initImage: function _initImage() {
      var t = "IMG" === this._url.tagName,
          i = this._image = t ? this._url : si("img");
      ci(i, "leaflet-image-layer"), this._zoomAnimated && ci(i, "leaflet-zoom-animated"), this.options.className && ci(i, this.options.className), i.onselectstart = a, i.onmousemove = a, i.onload = p(this.fire, this, "load"), i.onerror = p(this._overlayOnError, this, "error"), !this.options.crossOrigin && "" !== this.options.crossOrigin || (i.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin), this.options.zIndex && this._updateZIndex(), t ? this._url = i.src : (i.src = this._url, i.alt = this.options.alt);
    },
    _animateZoom: function _animateZoom(t) {
      var i = this._map.getZoomScale(t.zoom),
          e = this._map._latLngBoundsToNewLayerBounds(this._bounds, t.zoom, t.center).min;

      gi(this._image, e, i);
    },
    _reset: function _reset() {
      var t = this._image,
          i = new I(this._map.latLngToLayerPoint(this._bounds.getNorthWest()), this._map.latLngToLayerPoint(this._bounds.getSouthEast())),
          e = i.getSize();
      vi(t, i.min), t.style.width = e.x + "px", t.style.height = e.y + "px";
    },
    _updateOpacity: function _updateOpacity() {
      mi(this._image, this.options.opacity);
    },
    _updateZIndex: function _updateZIndex() {
      this._image && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._image.style.zIndex = this.options.zIndex);
    },
    _overlayOnError: function _overlayOnError() {
      this.fire("error");
      var t = this.options.errorOverlayUrl;
      t && this._url !== t && (this._url = t, this._image.src = t);
    }
  }),
      Je = Xe.extend({
    options: {
      autoplay: !0,
      loop: !0,
      keepAspectRatio: !0,
      muted: !1
    },
    _initImage: function _initImage() {
      var t = "VIDEO" === this._url.tagName,
          i = this._image = t ? this._url : si("video");

      if (ci(i, "leaflet-image-layer"), this._zoomAnimated && ci(i, "leaflet-zoom-animated"), this.options.className && ci(i, this.options.className), i.onselectstart = a, i.onmousemove = a, i.onloadeddata = p(this.fire, this, "load"), t) {
        for (var e = i.getElementsByTagName("source"), n = [], o = 0; o < e.length; o++) {
          n.push(e[o].src);
        }

        this._url = 0 < e.length ? n : [i.src];
      } else {
        g(this._url) || (this._url = [this._url]), !this.options.keepAspectRatio && Object.prototype.hasOwnProperty.call(i.style, "objectFit") && (i.style.objectFit = "fill"), i.autoplay = !!this.options.autoplay, i.loop = !!this.options.loop, i.muted = !!this.options.muted;

        for (var s = 0; s < this._url.length; s++) {
          var r = si("source");
          r.src = this._url[s], i.appendChild(r);
        }
      }
    }
  });
  var $e = Xe.extend({
    _initImage: function _initImage() {
      var t = this._image = this._url;
      ci(t, "leaflet-image-layer"), this._zoomAnimated && ci(t, "leaflet-zoom-animated"), this.options.className && ci(t, this.options.className), t.onselectstart = a, t.onmousemove = a;
    }
  });
  var Qe = Me.extend({
    options: {
      offset: [0, 7],
      className: "",
      pane: "popupPane"
    },
    initialize: function initialize(t, i) {
      c(this, t), this._source = i;
    },
    onAdd: function onAdd(t) {
      this._zoomAnimated = t._zoomAnimated, this._container || this._initLayout(), t._fadeAnimated && mi(this._container, 0), clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container), this.update(), t._fadeAnimated && mi(this._container, 1), this.bringToFront();
    },
    onRemove: function onRemove(t) {
      t._fadeAnimated ? (mi(this._container, 0), this._removeTimeout = setTimeout(p(ri, void 0, this._container), 200)) : ri(this._container);
    },
    getLatLng: function getLatLng() {
      return this._latlng;
    },
    setLatLng: function setLatLng(t) {
      return this._latlng = j(t), this._map && (this._updatePosition(), this._adjustPan()), this;
    },
    getContent: function getContent() {
      return this._content;
    },
    setContent: function setContent(t) {
      return this._content = t, this.update(), this;
    },
    getElement: function getElement() {
      return this._container;
    },
    update: function update() {
      this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan());
    },
    getEvents: function getEvents() {
      var t = {
        zoom: this._updatePosition,
        viewreset: this._updatePosition
      };
      return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
    },
    isOpen: function isOpen() {
      return !!this._map && this._map.hasLayer(this);
    },
    bringToFront: function bringToFront() {
      return this._map && hi(this._container), this;
    },
    bringToBack: function bringToBack() {
      return this._map && ui(this._container), this;
    },
    _prepareOpen: function _prepareOpen(t, i, e) {
      if (i instanceof Me || (e = i, i = t), i instanceof Ce) for (var n in t._layers) {
        i = t._layers[n];
        break;
      }
      if (!e) if (i.getCenter) e = i.getCenter();else {
        if (!i.getLatLng) throw new Error("Unable to get source layer LatLng.");
        e = i.getLatLng();
      }
      return this._source = i, this.update(), e;
    },
    _updateContent: function _updateContent() {
      if (this._content) {
        var t = this._contentNode,
            i = "function" == typeof this._content ? this._content(this._source || this) : this._content;
        if ("string" == typeof i) t.innerHTML = i;else {
          for (; t.hasChildNodes();) {
            t.removeChild(t.firstChild);
          }

          t.appendChild(i);
        }
        this.fire("contentupdate");
      }
    },
    _updatePosition: function _updatePosition() {
      var t, i, e, n, o;
      this._map && (t = this._map.latLngToLayerPoint(this._latlng), i = A(this.options.offset), e = this._getAnchor(), this._zoomAnimated ? vi(this._container, t.add(e)) : i = i.add(t).add(e), n = this._containerBottom = -i.y, o = this._containerLeft = -Math.round(this._containerWidth / 2) + i.x, this._container.style.bottom = n + "px", this._container.style.left = o + "px");
    },
    _getAnchor: function _getAnchor() {
      return [0, 0];
    }
  }),
      tn = Qe.extend({
    options: {
      maxWidth: 300,
      minWidth: 50,
      maxHeight: null,
      autoPan: !0,
      autoPanPaddingTopLeft: null,
      autoPanPaddingBottomRight: null,
      autoPanPadding: [5, 5],
      keepInView: !1,
      closeButton: !0,
      autoClose: !0,
      closeOnEscapeKey: !0,
      className: ""
    },
    openOn: function openOn(t) {
      return t.openPopup(this), this;
    },
    onAdd: function onAdd(t) {
      Qe.prototype.onAdd.call(this, t), t.fire("popupopen", {
        popup: this
      }), this._source && (this._source.fire("popupopen", {
        popup: this
      }, !0), this._source instanceof Be || this._source.on("preclick", Ai));
    },
    onRemove: function onRemove(t) {
      Qe.prototype.onRemove.call(this, t), t.fire("popupclose", {
        popup: this
      }), this._source && (this._source.fire("popupclose", {
        popup: this
      }, !0), this._source instanceof Be || this._source.off("preclick", Ai));
    },
    getEvents: function getEvents() {
      var t = Qe.prototype.getEvents.call(this);
      return (void 0 !== this.options.closeOnClick ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this._close), this.options.keepInView && (t.moveend = this._adjustPan), t;
    },
    _close: function _close() {
      this._map && this._map.closePopup(this);
    },
    _initLayout: function _initLayout() {
      var t,
          i = "leaflet-popup",
          e = this._container = si("div", i + " " + (this.options.className || "") + " leaflet-zoom-animated"),
          n = this._wrapper = si("div", i + "-content-wrapper", e);
      this._contentNode = si("div", i + "-content", n), Oi(e), Ii(this._contentNode), zi(e, "contextmenu", Ai), this._tipContainer = si("div", i + "-tip-container", e), this._tip = si("div", i + "-tip", this._tipContainer), this.options.closeButton && ((t = this._closeButton = si("a", i + "-close-button", e)).href = "#close", t.innerHTML = "&#215;", zi(t, "click", this._onCloseButtonClick, this));
    },
    _updateLayout: function _updateLayout() {
      var t = this._contentNode,
          i = t.style;
      i.width = "", i.whiteSpace = "nowrap";
      var e = t.offsetWidth,
          e = Math.min(e, this.options.maxWidth);
      e = Math.max(e, this.options.minWidth), i.width = e + 1 + "px", i.whiteSpace = "", i.height = "";
      var n = t.offsetHeight,
          o = this.options.maxHeight,
          s = "leaflet-popup-scrolled";
      o && o < n ? (i.height = o + "px", ci(t, s)) : _i(t, s), this._containerWidth = this._container.offsetWidth;
    },
    _animateZoom: function _animateZoom(t) {
      var i = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center),
          e = this._getAnchor();

      vi(this._container, i.add(e));
    },
    _adjustPan: function _adjustPan() {
      var t, i, e, n, o, s, r, a, h, u, l, c;
      this.options.autoPan && (this._map._panAnim && this._map._panAnim.stop(), t = this._map, i = parseInt(oi(this._container, "marginBottom"), 10) || 0, e = this._container.offsetHeight + i, n = this._containerWidth, (o = new k(this._containerLeft, -e - this._containerBottom))._add(yi(this._container)), s = t.layerPointToContainerPoint(o), r = A(this.options.autoPanPadding), a = A(this.options.autoPanPaddingTopLeft || r), h = A(this.options.autoPanPaddingBottomRight || r), u = t.getSize(), c = l = 0, s.x + n + h.x > u.x && (l = s.x + n - u.x + h.x), s.x - l - a.x < 0 && (l = s.x - a.x), s.y + e + h.y > u.y && (c = s.y + e - u.y + h.y), s.y - c - a.y < 0 && (c = s.y - a.y), (l || c) && t.fire("autopanstart").panBy([l, c]));
    },
    _onCloseButtonClick: function _onCloseButtonClick(t) {
      this._close(), Ni(t);
    },
    _getAnchor: function _getAnchor() {
      return A(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]);
    }
  });
  Ki.mergeOptions({
    closePopupOnClick: !0
  }), Ki.include({
    openPopup: function openPopup(t, i, e) {
      return t instanceof tn || (t = new tn(e).setContent(t)), i && t.setLatLng(i), this.hasLayer(t) ? this : (this._popup && this._popup.options.autoClose && this.closePopup(), this._popup = t, this.addLayer(t));
    },
    closePopup: function closePopup(t) {
      return t && t !== this._popup || (t = this._popup, this._popup = null), t && this.removeLayer(t), this;
    }
  }), Me.include({
    bindPopup: function bindPopup(t, i) {
      return t instanceof tn ? (c(t, i), (this._popup = t)._source = this) : (this._popup && !i || (this._popup = new tn(i, this)), this._popup.setContent(t)), this._popupHandlersAdded || (this.on({
        click: this._openPopup,
        keypress: this._onKeyPress,
        remove: this.closePopup,
        move: this._movePopup
      }), this._popupHandlersAdded = !0), this;
    },
    unbindPopup: function unbindPopup() {
      return this._popup && (this.off({
        click: this._openPopup,
        keypress: this._onKeyPress,
        remove: this.closePopup,
        move: this._movePopup
      }), this._popupHandlersAdded = !1, this._popup = null), this;
    },
    openPopup: function openPopup(t, i) {
      return this._popup && this._map && (i = this._popup._prepareOpen(this, t, i), this._map.openPopup(this._popup, i)), this;
    },
    closePopup: function closePopup() {
      return this._popup && this._popup._close(), this;
    },
    togglePopup: function togglePopup(t) {
      return this._popup && (this._popup._map ? this.closePopup() : this.openPopup(t)), this;
    },
    isPopupOpen: function isPopupOpen() {
      return !!this._popup && this._popup.isOpen();
    },
    setPopupContent: function setPopupContent(t) {
      return this._popup && this._popup.setContent(t), this;
    },
    getPopup: function getPopup() {
      return this._popup;
    },
    _openPopup: function _openPopup(t) {
      var i = t.layer || t.target;
      this._popup && this._map && (Ni(t), i instanceof Be ? this.openPopup(t.layer || t.target, t.latlng) : this._map.hasLayer(this._popup) && this._popup._source === i ? this.closePopup() : this.openPopup(i, t.latlng));
    },
    _movePopup: function _movePopup(t) {
      this._popup.setLatLng(t.latlng);
    },
    _onKeyPress: function _onKeyPress(t) {
      13 === t.originalEvent.keyCode && this._openPopup(t);
    }
  });
  var en = Qe.extend({
    options: {
      pane: "tooltipPane",
      offset: [0, 0],
      direction: "auto",
      permanent: !1,
      sticky: !1,
      interactive: !1,
      opacity: .9
    },
    onAdd: function onAdd(t) {
      Qe.prototype.onAdd.call(this, t), this.setOpacity(this.options.opacity), t.fire("tooltipopen", {
        tooltip: this
      }), this._source && this._source.fire("tooltipopen", {
        tooltip: this
      }, !0);
    },
    onRemove: function onRemove(t) {
      Qe.prototype.onRemove.call(this, t), t.fire("tooltipclose", {
        tooltip: this
      }), this._source && this._source.fire("tooltipclose", {
        tooltip: this
      }, !0);
    },
    getEvents: function getEvents() {
      var t = Qe.prototype.getEvents.call(this);
      return bt && !this.options.permanent && (t.preclick = this._close), t;
    },
    _close: function _close() {
      this._map && this._map.closeTooltip(this);
    },
    _initLayout: function _initLayout() {
      var t = "leaflet-tooltip " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
      this._contentNode = this._container = si("div", t);
    },
    _updateLayout: function _updateLayout() {},
    _adjustPan: function _adjustPan() {},
    _setPosition: function _setPosition(t) {
      var i,
          e = this._map,
          n = this._container,
          o = e.latLngToContainerPoint(e.getCenter()),
          s = e.layerPointToContainerPoint(t),
          r = this.options.direction,
          a = n.offsetWidth,
          h = n.offsetHeight,
          u = A(this.options.offset),
          l = this._getAnchor(),
          c = "top" === r ? (i = a / 2, h) : "bottom" === r ? (i = a / 2, 0) : (i = "center" === r ? a / 2 : "right" === r ? 0 : "left" === r ? a : s.x < o.x ? (r = "right", 0) : (r = "left", a + 2 * (u.x + l.x)), h / 2);

      t = t.subtract(A(i, c, !0)).add(u).add(l), _i(n, "leaflet-tooltip-right"), _i(n, "leaflet-tooltip-left"), _i(n, "leaflet-tooltip-top"), _i(n, "leaflet-tooltip-bottom"), ci(n, "leaflet-tooltip-" + r), vi(n, t);
    },
    _updatePosition: function _updatePosition() {
      var t = this._map.latLngToLayerPoint(this._latlng);

      this._setPosition(t);
    },
    setOpacity: function setOpacity(t) {
      this.options.opacity = t, this._container && mi(this._container, t);
    },
    _animateZoom: function _animateZoom(t) {
      var i = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);

      this._setPosition(i);
    },
    _getAnchor: function _getAnchor() {
      return A(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0]);
    }
  });
  Ki.include({
    openTooltip: function openTooltip(t, i, e) {
      return t instanceof en || (t = new en(e).setContent(t)), i && t.setLatLng(i), this.hasLayer(t) ? this : this.addLayer(t);
    },
    closeTooltip: function closeTooltip(t) {
      return t && this.removeLayer(t), this;
    }
  }), Me.include({
    bindTooltip: function bindTooltip(t, i) {
      return t instanceof en ? (c(t, i), (this._tooltip = t)._source = this) : (this._tooltip && !i || (this._tooltip = new en(i, this)), this._tooltip.setContent(t)), this._initTooltipInteractions(), this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(), this;
    },
    unbindTooltip: function unbindTooltip() {
      return this._tooltip && (this._initTooltipInteractions(!0), this.closeTooltip(), this._tooltip = null), this;
    },
    _initTooltipInteractions: function _initTooltipInteractions(t) {
      var i, e;
      !t && this._tooltipHandlersAdded || (i = t ? "off" : "on", e = {
        remove: this.closeTooltip,
        move: this._moveTooltip
      }, this._tooltip.options.permanent ? e.add = this._openTooltip : (e.mouseover = this._openTooltip, e.mouseout = this.closeTooltip, this._tooltip.options.sticky && (e.mousemove = this._moveTooltip), bt && (e.click = this._openTooltip)), this[i](e), this._tooltipHandlersAdded = !t);
    },
    openTooltip: function openTooltip(t, i) {
      return this._tooltip && this._map && (i = this._tooltip._prepareOpen(this, t, i), this._map.openTooltip(this._tooltip, i), this._tooltip.options.interactive && this._tooltip._container && (ci(this._tooltip._container, "leaflet-clickable"), this.addInteractiveTarget(this._tooltip._container))), this;
    },
    closeTooltip: function closeTooltip() {
      return this._tooltip && (this._tooltip._close(), this._tooltip.options.interactive && this._tooltip._container && (_i(this._tooltip._container, "leaflet-clickable"), this.removeInteractiveTarget(this._tooltip._container))), this;
    },
    toggleTooltip: function toggleTooltip(t) {
      return this._tooltip && (this._tooltip._map ? this.closeTooltip() : this.openTooltip(t)), this;
    },
    isTooltipOpen: function isTooltipOpen() {
      return this._tooltip.isOpen();
    },
    setTooltipContent: function setTooltipContent(t) {
      return this._tooltip && this._tooltip.setContent(t), this;
    },
    getTooltip: function getTooltip() {
      return this._tooltip;
    },
    _openTooltip: function _openTooltip(t) {
      var i = t.layer || t.target;
      this._tooltip && this._map && this.openTooltip(i, this._tooltip.options.sticky ? t.latlng : void 0);
    },
    _moveTooltip: function _moveTooltip(t) {
      var i,
          e,
          n = t.latlng;
      this._tooltip.options.sticky && t.originalEvent && (i = this._map.mouseEventToContainerPoint(t.originalEvent), e = this._map.containerPointToLayerPoint(i), n = this._map.layerPointToLatLng(e)), this._tooltip.setLatLng(n);
    }
  });
  var nn = Se.extend({
    options: {
      iconSize: [12, 12],
      html: !1,
      bgPos: null,
      className: "leaflet-div-icon"
    },
    createIcon: function createIcon(t) {
      var i,
          e = t && "DIV" === t.tagName ? t : document.createElement("div"),
          n = this.options;
      return n.html instanceof Element ? (ai(e), e.appendChild(n.html)) : e.innerHTML = !1 !== n.html ? n.html : "", n.bgPos && (i = A(n.bgPos), e.style.backgroundPosition = -i.x + "px " + -i.y + "px"), this._setIconStyles(e, "icon"), e;
    },
    createShadow: function createShadow() {
      return null;
    }
  });
  Se.Default = Ze;
  var on = Me.extend({
    options: {
      tileSize: 256,
      opacity: 1,
      updateWhenIdle: yt,
      updateWhenZooming: !0,
      updateInterval: 200,
      zIndex: 1,
      bounds: null,
      minZoom: 0,
      maxZoom: void 0,
      maxNativeZoom: void 0,
      minNativeZoom: void 0,
      noWrap: !1,
      pane: "tilePane",
      className: "",
      keepBuffer: 2
    },
    initialize: function initialize(t) {
      c(this, t);
    },
    onAdd: function onAdd() {
      this._initContainer(), this._levels = {}, this._tiles = {}, this._resetView(), this._update();
    },
    beforeAdd: function beforeAdd(t) {
      t._addZoomLimit(this);
    },
    onRemove: function onRemove(t) {
      this._removeAllTiles(), ri(this._container), t._removeZoomLimit(this), this._container = null, this._tileZoom = void 0;
    },
    bringToFront: function bringToFront() {
      return this._map && (hi(this._container), this._setAutoZIndex(Math.max)), this;
    },
    bringToBack: function bringToBack() {
      return this._map && (ui(this._container), this._setAutoZIndex(Math.min)), this;
    },
    getContainer: function getContainer() {
      return this._container;
    },
    setOpacity: function setOpacity(t) {
      return this.options.opacity = t, this._updateOpacity(), this;
    },
    setZIndex: function setZIndex(t) {
      return this.options.zIndex = t, this._updateZIndex(), this;
    },
    isLoading: function isLoading() {
      return this._loading;
    },
    redraw: function redraw() {
      return this._map && (this._removeAllTiles(), this._update()), this;
    },
    getEvents: function getEvents() {
      var t = {
        viewprereset: this._invalidateAll,
        viewreset: this._resetView,
        zoom: this._resetView,
        moveend: this._onMoveEnd
      };
      return this.options.updateWhenIdle || (this._onMove || (this._onMove = n(this._onMoveEnd, this.options.updateInterval, this)), t.move = this._onMove), this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
    },
    createTile: function createTile() {
      return document.createElement("div");
    },
    getTileSize: function getTileSize() {
      var t = this.options.tileSize;
      return t instanceof k ? t : new k(t, t);
    },
    _updateZIndex: function _updateZIndex() {
      this._container && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._container.style.zIndex = this.options.zIndex);
    },
    _setAutoZIndex: function _setAutoZIndex(t) {
      for (var i, e = this.getPane().children, n = -t(-1 / 0, 1 / 0), o = 0, s = e.length; o < s; o++) {
        i = e[o].style.zIndex, e[o] !== this._container && i && (n = t(n, +i));
      }

      isFinite(n) && (this.options.zIndex = n + t(-1, 1), this._updateZIndex());
    },
    _updateOpacity: function _updateOpacity() {
      if (this._map && !it) {
        mi(this._container, this.options.opacity);
        var t = +new Date(),
            i = !1,
            e = !1;

        for (var n in this._tiles) {
          var o,
              s = this._tiles[n];
          s.current && s.loaded && (o = Math.min(1, (t - s.loaded) / 200), mi(s.el, o), o < 1 ? i = !0 : (s.active ? e = !0 : this._onOpaqueTile(s), s.active = !0));
        }

        e && !this._noPrune && this._pruneTiles(), i && (z(this._fadeFrame), this._fadeFrame = M(this._updateOpacity, this));
      }
    },
    _onOpaqueTile: a,
    _initContainer: function _initContainer() {
      this._container || (this._container = si("div", "leaflet-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container));
    },
    _updateLevels: function _updateLevels() {
      var t = this._tileZoom,
          i = this.options.maxZoom;

      if (void 0 !== t) {
        for (var e in this._levels) {
          e = Number(e), this._levels[e].el.children.length || e === t ? (this._levels[e].el.style.zIndex = i - Math.abs(t - e), this._onUpdateLevel(e)) : (ri(this._levels[e].el), this._removeTilesAtZoom(e), this._onRemoveLevel(e), delete this._levels[e]);
        }

        var n = this._levels[t],
            o = this._map;
        return n || ((n = this._levels[t] = {}).el = si("div", "leaflet-tile-container leaflet-zoom-animated", this._container), n.el.style.zIndex = i, n.origin = o.project(o.unproject(o.getPixelOrigin()), t).round(), n.zoom = t, this._setZoomTransform(n, o.getCenter(), o.getZoom()), a(n.el.offsetWidth), this._onCreateLevel(n)), this._level = n;
      }
    },
    _onUpdateLevel: a,
    _onRemoveLevel: a,
    _onCreateLevel: a,
    _pruneTiles: function _pruneTiles() {
      if (this._map) {
        var t,
            i,
            e,
            n = this._map.getZoom();

        if (n > this.options.maxZoom || n < this.options.minZoom) this._removeAllTiles();else {
          for (t in this._tiles) {
            (e = this._tiles[t]).retain = e.current;
          }

          for (t in this._tiles) {
            (e = this._tiles[t]).current && !e.active && (i = e.coords, this._retainParent(i.x, i.y, i.z, i.z - 5) || this._retainChildren(i.x, i.y, i.z, i.z + 2));
          }

          for (t in this._tiles) {
            this._tiles[t].retain || this._removeTile(t);
          }
        }
      }
    },
    _removeTilesAtZoom: function _removeTilesAtZoom(t) {
      for (var i in this._tiles) {
        this._tiles[i].coords.z === t && this._removeTile(i);
      }
    },
    _removeAllTiles: function _removeAllTiles() {
      for (var t in this._tiles) {
        this._removeTile(t);
      }
    },
    _invalidateAll: function _invalidateAll() {
      for (var t in this._levels) {
        ri(this._levels[t].el), this._onRemoveLevel(Number(t)), delete this._levels[t];
      }

      this._removeAllTiles(), this._tileZoom = void 0;
    },
    _retainParent: function _retainParent(t, i, e, n) {
      var o = Math.floor(t / 2),
          s = Math.floor(i / 2),
          r = e - 1,
          a = new k(+o, +s);
      a.z = +r;

      var h = this._tileCoordsToKey(a),
          u = this._tiles[h];

      return u && u.active ? u.retain = !0 : (u && u.loaded && (u.retain = !0), n < r && this._retainParent(o, s, r, n));
    },
    _retainChildren: function _retainChildren(t, i, e, n) {
      for (var o = 2 * t; o < 2 * t + 2; o++) {
        for (var s = 2 * i; s < 2 * i + 2; s++) {
          var r = new k(o, s);
          r.z = e + 1;

          var a = this._tileCoordsToKey(r),
              h = this._tiles[a];

          h && h.active ? h.retain = !0 : (h && h.loaded && (h.retain = !0), e + 1 < n && this._retainChildren(o, s, e + 1, n));
        }
      }
    },
    _resetView: function _resetView(t) {
      var i = t && (t.pinch || t.flyTo);

      this._setView(this._map.getCenter(), this._map.getZoom(), i, i);
    },
    _animateZoom: function _animateZoom(t) {
      this._setView(t.center, t.zoom, !0, t.noUpdate);
    },
    _clampZoom: function _clampZoom(t) {
      var i = this.options;
      return void 0 !== i.minNativeZoom && t < i.minNativeZoom ? i.minNativeZoom : void 0 !== i.maxNativeZoom && i.maxNativeZoom < t ? i.maxNativeZoom : t;
    },
    _setView: function _setView(t, i, e, n) {
      var o = Math.round(i),
          o = void 0 !== this.options.maxZoom && o > this.options.maxZoom || void 0 !== this.options.minZoom && o < this.options.minZoom ? void 0 : this._clampZoom(o),
          s = this.options.updateWhenZooming && o !== this._tileZoom;
      n && !s || (this._tileZoom = o, this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(), void 0 !== o && this._update(t), e || this._pruneTiles(), this._noPrune = !!e), this._setZoomTransforms(t, i);
    },
    _setZoomTransforms: function _setZoomTransforms(t, i) {
      for (var e in this._levels) {
        this._setZoomTransform(this._levels[e], t, i);
      }
    },
    _setZoomTransform: function _setZoomTransform(t, i, e) {
      var n = this._map.getZoomScale(e, t.zoom),
          o = t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(i, e)).round();

      vt ? gi(t.el, o, n) : vi(t.el, o);
    },
    _resetGrid: function _resetGrid() {
      var t = this._map,
          i = t.options.crs,
          e = this._tileSize = this.getTileSize(),
          n = this._tileZoom,
          o = this._map.getPixelWorldBounds(this._tileZoom);

      o && (this._globalTileRange = this._pxBoundsToTileRange(o)), this._wrapX = i.wrapLng && !this.options.noWrap && [Math.floor(t.project([0, i.wrapLng[0]], n).x / e.x), Math.ceil(t.project([0, i.wrapLng[1]], n).x / e.y)], this._wrapY = i.wrapLat && !this.options.noWrap && [Math.floor(t.project([i.wrapLat[0], 0], n).y / e.x), Math.ceil(t.project([i.wrapLat[1], 0], n).y / e.y)];
    },
    _onMoveEnd: function _onMoveEnd() {
      this._map && !this._map._animatingZoom && this._update();
    },
    _getTiledPixelBounds: function _getTiledPixelBounds(t) {
      var i = this._map,
          e = i._animatingZoom ? Math.max(i._animateToZoom, i.getZoom()) : i.getZoom(),
          n = i.getZoomScale(e, this._tileZoom),
          o = i.project(t, this._tileZoom).floor(),
          s = i.getSize().divideBy(2 * n);
      return new I(o.subtract(s), o.add(s));
    },
    _update: function _update(t) {
      var i = this._map;

      if (i) {
        var e = this._clampZoom(i.getZoom());

        if (void 0 === t && (t = i.getCenter()), void 0 !== this._tileZoom) {
          var n = this._getTiledPixelBounds(t),
              o = this._pxBoundsToTileRange(n),
              s = o.getCenter(),
              r = [],
              a = this.options.keepBuffer,
              h = new I(o.getBottomLeft().subtract([a, -a]), o.getTopRight().add([a, -a]));

          if (!(isFinite(o.min.x) && isFinite(o.min.y) && isFinite(o.max.x) && isFinite(o.max.y))) throw new Error("Attempted to load an infinite number of tiles");

          for (var u in this._tiles) {
            var l = this._tiles[u].coords;
            l.z === this._tileZoom && h.contains(new k(l.x, l.y)) || (this._tiles[u].current = !1);
          }

          if (1 < Math.abs(e - this._tileZoom)) this._setView(t, e);else {
            for (var c = o.min.y; c <= o.max.y; c++) {
              for (var _ = o.min.x; _ <= o.max.x; _++) {
                var d,
                    p = new k(_, c);
                p.z = this._tileZoom, this._isValidTile(p) && ((d = this._tiles[this._tileCoordsToKey(p)]) ? d.current = !0 : r.push(p));
              }
            }

            if (r.sort(function (t, i) {
              return t.distanceTo(s) - i.distanceTo(s);
            }), 0 !== r.length) {
              this._loading || (this._loading = !0, this.fire("loading"));

              for (var m = document.createDocumentFragment(), _ = 0; _ < r.length; _++) {
                this._addTile(r[_], m);
              }

              this._level.el.appendChild(m);
            }
          }
        }
      }
    },
    _isValidTile: function _isValidTile(t) {
      var i = this._map.options.crs;

      if (!i.infinite) {
        var e = this._globalTileRange;
        if (!i.wrapLng && (t.x < e.min.x || t.x > e.max.x) || !i.wrapLat && (t.y < e.min.y || t.y > e.max.y)) return !1;
      }

      if (!this.options.bounds) return !0;

      var n = this._tileCoordsToBounds(t);

      return N(this.options.bounds).overlaps(n);
    },
    _keyToBounds: function _keyToBounds(t) {
      return this._tileCoordsToBounds(this._keyToTileCoords(t));
    },
    _tileCoordsToNwSe: function _tileCoordsToNwSe(t) {
      var i = this._map,
          e = this.getTileSize(),
          n = t.scaleBy(e),
          o = n.add(e);
      return [i.unproject(n, t.z), i.unproject(o, t.z)];
    },
    _tileCoordsToBounds: function _tileCoordsToBounds(t) {
      var i = this._tileCoordsToNwSe(t),
          e = new R(i[0], i[1]);

      return this.options.noWrap || (e = this._map.wrapLatLngBounds(e)), e;
    },
    _tileCoordsToKey: function _tileCoordsToKey(t) {
      return t.x + ":" + t.y + ":" + t.z;
    },
    _keyToTileCoords: function _keyToTileCoords(t) {
      var i = t.split(":"),
          e = new k(+i[0], +i[1]);
      return e.z = +i[2], e;
    },
    _removeTile: function _removeTile(t) {
      var i = this._tiles[t];
      i && (ri(i.el), delete this._tiles[t], this.fire("tileunload", {
        tile: i.el,
        coords: this._keyToTileCoords(t)
      }));
    },
    _initTile: function _initTile(t) {
      ci(t, "leaflet-tile");
      var i = this.getTileSize();
      t.style.width = i.x + "px", t.style.height = i.y + "px", t.onselectstart = a, t.onmousemove = a, it && this.options.opacity < 1 && mi(t, this.options.opacity), ot && !st && (t.style.WebkitBackfaceVisibility = "hidden");
    },
    _addTile: function _addTile(t, i) {
      var e = this._getTilePos(t),
          n = this._tileCoordsToKey(t),
          o = this.createTile(this._wrapCoords(t), p(this._tileReady, this, t));

      this._initTile(o), this.createTile.length < 2 && M(p(this._tileReady, this, t, null, o)), vi(o, e), this._tiles[n] = {
        el: o,
        coords: t,
        current: !0
      }, i.appendChild(o), this.fire("tileloadstart", {
        tile: o,
        coords: t
      });
    },
    _tileReady: function _tileReady(t, i, e) {
      i && this.fire("tileerror", {
        error: i,
        tile: e,
        coords: t
      });

      var n = this._tileCoordsToKey(t);

      (e = this._tiles[n]) && (e.loaded = +new Date(), this._map._fadeAnimated ? (mi(e.el, 0), z(this._fadeFrame), this._fadeFrame = M(this._updateOpacity, this)) : (e.active = !0, this._pruneTiles()), i || (ci(e.el, "leaflet-tile-loaded"), this.fire("tileload", {
        tile: e.el,
        coords: t
      })), this._noTilesToLoad() && (this._loading = !1, this.fire("load"), it || !this._map._fadeAnimated ? M(this._pruneTiles, this) : setTimeout(p(this._pruneTiles, this), 250)));
    },
    _getTilePos: function _getTilePos(t) {
      return t.scaleBy(this.getTileSize()).subtract(this._level.origin);
    },
    _wrapCoords: function _wrapCoords(t) {
      var i = new k(this._wrapX ? o(t.x, this._wrapX) : t.x, this._wrapY ? o(t.y, this._wrapY) : t.y);
      return i.z = t.z, i;
    },
    _pxBoundsToTileRange: function _pxBoundsToTileRange(t) {
      var i = this.getTileSize();
      return new I(t.min.unscaleBy(i).floor(), t.max.unscaleBy(i).ceil().subtract([1, 1]));
    },
    _noTilesToLoad: function _noTilesToLoad() {
      for (var t in this._tiles) {
        if (!this._tiles[t].loaded) return !1;
      }

      return !0;
    }
  });
  var sn = on.extend({
    options: {
      minZoom: 0,
      maxZoom: 18,
      subdomains: "abc",
      errorTileUrl: "",
      zoomOffset: 0,
      tms: !1,
      zoomReverse: !1,
      detectRetina: !1,
      crossOrigin: !1
    },
    initialize: function initialize(t, i) {
      this._url = t, (i = c(this, i)).detectRetina && zt && 0 < i.maxZoom && (i.tileSize = Math.floor(i.tileSize / 2), i.zoomReverse ? (i.zoomOffset--, i.minZoom++) : (i.zoomOffset++, i.maxZoom--), i.minZoom = Math.max(0, i.minZoom)), "string" == typeof i.subdomains && (i.subdomains = i.subdomains.split("")), ot || this.on("tileunload", this._onTileRemove);
    },
    setUrl: function setUrl(t, i) {
      return this._url === t && void 0 === i && (i = !0), this._url = t, i || this.redraw(), this;
    },
    createTile: function createTile(t, i) {
      var e = document.createElement("img");
      return zi(e, "load", p(this._tileOnLoad, this, i, e)), zi(e, "error", p(this._tileOnError, this, i, e)), !this.options.crossOrigin && "" !== this.options.crossOrigin || (e.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin), e.alt = "", e.setAttribute("role", "presentation"), e.src = this.getTileUrl(t), e;
    },
    getTileUrl: function getTileUrl(t) {
      var i,
          e = {
        r: zt ? "@2x" : "",
        s: this._getSubdomain(t),
        x: t.x,
        y: t.y,
        z: this._getZoomForUrl()
      };
      return this._map && !this._map.options.crs.infinite && (i = this._globalTileRange.max.y - t.y, this.options.tms && (e.y = i), e["-y"] = i), f(this._url, h(e, this.options));
    },
    _tileOnLoad: function _tileOnLoad(t, i) {
      it ? setTimeout(p(t, this, null, i), 0) : t(null, i);
    },
    _tileOnError: function _tileOnError(t, i, e) {
      var n = this.options.errorTileUrl;
      n && i.getAttribute("src") !== n && (i.src = n), t(e, i);
    },
    _onTileRemove: function _onTileRemove(t) {
      t.tile.onload = null;
    },
    _getZoomForUrl: function _getZoomForUrl() {
      var t = this._tileZoom,
          i = this.options.maxZoom;
      return this.options.zoomReverse && (t = i - t), t + this.options.zoomOffset;
    },
    _getSubdomain: function _getSubdomain(t) {
      var i = Math.abs(t.x + t.y) % this.options.subdomains.length;
      return this.options.subdomains[i];
    },
    _abortLoading: function _abortLoading() {
      var t, i;

      for (t in this._tiles) {
        this._tiles[t].coords.z !== this._tileZoom && ((i = this._tiles[t].el).onload = a, i.onerror = a, i.complete || (i.src = y, ri(i), delete this._tiles[t]));
      }
    },
    _removeTile: function _removeTile(t) {
      var i = this._tiles[t];
      if (i) return at || i.el.setAttribute("src", y), on.prototype._removeTile.call(this, t);
    },
    _tileReady: function _tileReady(t, i, e) {
      if (this._map && (!e || e.getAttribute("src") !== y)) return on.prototype._tileReady.call(this, t, i, e);
    }
  });

  function rn(t, i) {
    return new sn(t, i);
  }

  var an = sn.extend({
    defaultWmsParams: {
      service: "WMS",
      request: "GetMap",
      layers: "",
      styles: "",
      format: "image/jpeg",
      transparent: !1,
      version: "1.1.1"
    },
    options: {
      crs: null,
      uppercase: !1
    },
    initialize: function initialize(t, i) {
      this._url = t;
      var e = h({}, this.defaultWmsParams);

      for (var n in i) {
        n in this.options || (e[n] = i[n]);
      }

      var o = (i = c(this, i)).detectRetina && zt ? 2 : 1,
          s = this.getTileSize();
      e.width = s.x * o, e.height = s.y * o, this.wmsParams = e;
    },
    onAdd: function onAdd(t) {
      this._crs = this.options.crs || t.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
      var i = 1.3 <= this._wmsVersion ? "crs" : "srs";
      this.wmsParams[i] = this._crs.code, sn.prototype.onAdd.call(this, t);
    },
    getTileUrl: function getTileUrl(t) {
      var i = this._tileCoordsToNwSe(t),
          e = this._crs,
          n = O(e.project(i[0]), e.project(i[1])),
          o = n.min,
          s = n.max,
          r = (1.3 <= this._wmsVersion && this._crs === be ? [o.y, o.x, s.y, s.x] : [o.x, o.y, s.x, s.y]).join(","),
          a = sn.prototype.getTileUrl.call(this, t);

      return a + _(this.wmsParams, a, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + r;
    },
    setParams: function setParams(t, i) {
      return h(this.wmsParams, t), i || this.redraw(), this;
    }
  });
  sn.WMS = an, rn.wms = function (t, i) {
    return new an(t, i);
  };
  var hn = Me.extend({
    options: {
      padding: .1,
      tolerance: 0
    },
    initialize: function initialize(t) {
      c(this, t), m(this), this._layers = this._layers || {};
    },
    onAdd: function onAdd() {
      this._container || (this._initContainer(), this._zoomAnimated && ci(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this);
    },
    onRemove: function onRemove() {
      this.off("update", this._updatePaths, this), this._destroyContainer();
    },
    getEvents: function getEvents() {
      var t = {
        viewreset: this._reset,
        zoom: this._onZoom,
        moveend: this._update,
        zoomend: this._onZoomEnd
      };
      return this._zoomAnimated && (t.zoomanim = this._onAnimZoom), t;
    },
    _onAnimZoom: function _onAnimZoom(t) {
      this._updateTransform(t.center, t.zoom);
    },
    _onZoom: function _onZoom() {
      this._updateTransform(this._map.getCenter(), this._map.getZoom());
    },
    _updateTransform: function _updateTransform(t, i) {
      var e = this._map.getZoomScale(i, this._zoom),
          n = yi(this._container),
          o = this._map.getSize().multiplyBy(.5 + this.options.padding),
          s = this._map.project(this._center, i),
          r = this._map.project(t, i).subtract(s),
          a = o.multiplyBy(-e).add(n).add(o).subtract(r);

      vt ? gi(this._container, a, e) : vi(this._container, a);
    },
    _reset: function _reset() {
      for (var t in this._update(), this._updateTransform(this._center, this._zoom), this._layers) {
        this._layers[t]._reset();
      }
    },
    _onZoomEnd: function _onZoomEnd() {
      for (var t in this._layers) {
        this._layers[t]._project();
      }
    },
    _updatePaths: function _updatePaths() {
      for (var t in this._layers) {
        this._layers[t]._update();
      }
    },
    _update: function _update() {
      var t = this.options.padding,
          i = this._map.getSize(),
          e = this._map.containerPointToLayerPoint(i.multiplyBy(-t)).round();

      this._bounds = new I(e, e.add(i.multiplyBy(1 + 2 * t)).round()), this._center = this._map.getCenter(), this._zoom = this._map.getZoom();
    }
  }),
      un = hn.extend({
    getEvents: function getEvents() {
      var t = hn.prototype.getEvents.call(this);
      return t.viewprereset = this._onViewPreReset, t;
    },
    _onViewPreReset: function _onViewPreReset() {
      this._postponeUpdatePaths = !0;
    },
    onAdd: function onAdd() {
      hn.prototype.onAdd.call(this), this._draw();
    },
    _initContainer: function _initContainer() {
      var t = this._container = document.createElement("canvas");
      zi(t, "mousemove", this._onMouseMove, this), zi(t, "click dblclick mousedown mouseup contextmenu", this._onClick, this), zi(t, "mouseout", this._handleMouseOut, this), this._ctx = t.getContext("2d");
    },
    _destroyContainer: function _destroyContainer() {
      z(this._redrawRequest), delete this._ctx, ri(this._container), Si(this._container), delete this._container;
    },
    _updatePaths: function _updatePaths() {
      if (!this._postponeUpdatePaths) {
        for (var t in this._redrawBounds = null, this._layers) {
          this._layers[t]._update();
        }

        this._redraw();
      }
    },
    _update: function _update() {
      var t, i, e, n;
      this._map._animatingZoom && this._bounds || (hn.prototype._update.call(this), t = this._bounds, i = this._container, e = t.getSize(), n = zt ? 2 : 1, vi(i, t.min), i.width = n * e.x, i.height = n * e.y, i.style.width = e.x + "px", i.style.height = e.y + "px", zt && this._ctx.scale(2, 2), this._ctx.translate(-t.min.x, -t.min.y), this.fire("update"));
    },
    _reset: function _reset() {
      hn.prototype._reset.call(this), this._postponeUpdatePaths && (this._postponeUpdatePaths = !1, this._updatePaths());
    },
    _initPath: function _initPath(t) {
      this._updateDashArray(t);

      var i = (this._layers[m(t)] = t)._order = {
        layer: t,
        prev: this._drawLast,
        next: null
      };
      this._drawLast && (this._drawLast.next = i), this._drawLast = i, this._drawFirst = this._drawFirst || this._drawLast;
    },
    _addPath: function _addPath(t) {
      this._requestRedraw(t);
    },
    _removePath: function _removePath(t) {
      var i = t._order,
          e = i.next,
          n = i.prev;
      e ? e.prev = n : this._drawLast = n, n ? n.next = e : this._drawFirst = e, delete t._order, delete this._layers[m(t)], this._requestRedraw(t);
    },
    _updatePath: function _updatePath(t) {
      this._extendRedrawBounds(t), t._project(), t._update(), this._requestRedraw(t);
    },
    _updateStyle: function _updateStyle(t) {
      this._updateDashArray(t), this._requestRedraw(t);
    },
    _updateDashArray: function _updateDashArray(t) {
      if ("string" == typeof t.options.dashArray) {
        for (var i, e = t.options.dashArray.split(/[, ]+/), n = [], o = 0; o < e.length; o++) {
          if (i = Number(e[o]), isNaN(i)) return;
          n.push(i);
        }

        t.options._dashArray = n;
      } else t.options._dashArray = t.options.dashArray;
    },
    _requestRedraw: function _requestRedraw(t) {
      this._map && (this._extendRedrawBounds(t), this._redrawRequest = this._redrawRequest || M(this._redraw, this));
    },
    _extendRedrawBounds: function _extendRedrawBounds(t) {
      var i;
      t._pxBounds && (i = (t.options.weight || 0) + 1, this._redrawBounds = this._redrawBounds || new I(), this._redrawBounds.extend(t._pxBounds.min.subtract([i, i])), this._redrawBounds.extend(t._pxBounds.max.add([i, i])));
    },
    _redraw: function _redraw() {
      this._redrawRequest = null, this._redrawBounds && (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()), this._clear(), this._draw(), this._redrawBounds = null;
    },
    _clear: function _clear() {
      var t,
          i = this._redrawBounds;
      i ? (t = i.getSize(), this._ctx.clearRect(i.min.x, i.min.y, t.x, t.y)) : (this._ctx.save(), this._ctx.setTransform(1, 0, 0, 1, 0, 0), this._ctx.clearRect(0, 0, this._container.width, this._container.height), this._ctx.restore());
    },
    _draw: function _draw() {
      var t,
          i,
          e = this._redrawBounds;
      this._ctx.save(), e && (i = e.getSize(), this._ctx.beginPath(), this._ctx.rect(e.min.x, e.min.y, i.x, i.y), this._ctx.clip()), this._drawing = !0;

      for (var n = this._drawFirst; n; n = n.next) {
        t = n.layer, (!e || t._pxBounds && t._pxBounds.intersects(e)) && t._updatePath();
      }

      this._drawing = !1, this._ctx.restore();
    },
    _updatePoly: function _updatePoly(t, i) {
      if (this._drawing) {
        var e,
            n,
            o,
            s,
            r = t._parts,
            a = r.length,
            h = this._ctx;

        if (a) {
          for (h.beginPath(), e = 0; e < a; e++) {
            for (n = 0, o = r[e].length; n < o; n++) {
              s = r[e][n], h[n ? "lineTo" : "moveTo"](s.x, s.y);
            }

            i && h.closePath();
          }

          this._fillStroke(h, t);
        }
      }
    },
    _updateCircle: function _updateCircle(t) {
      var i, e, n, o;
      this._drawing && !t._empty() && (i = t._point, e = this._ctx, n = Math.max(Math.round(t._radius), 1), 1 != (o = (Math.max(Math.round(t._radiusY), 1) || n) / n) && (e.save(), e.scale(1, o)), e.beginPath(), e.arc(i.x, i.y / o, n, 0, 2 * Math.PI, !1), 1 != o && e.restore(), this._fillStroke(e, t));
    },
    _fillStroke: function _fillStroke(t, i) {
      var e = i.options;
      e.fill && (t.globalAlpha = e.fillOpacity, t.fillStyle = e.fillColor || e.color, t.fill(e.fillRule || "evenodd")), e.stroke && 0 !== e.weight && (t.setLineDash && t.setLineDash(i.options && i.options._dashArray || []), t.globalAlpha = e.opacity, t.lineWidth = e.weight, t.strokeStyle = e.color, t.lineCap = e.lineCap, t.lineJoin = e.lineJoin, t.stroke());
    },
    _onClick: function _onClick(t) {
      for (var i, e, n = this._map.mouseEventToLayerPoint(t), o = this._drawFirst; o; o = o.next) {
        (i = o.layer).options.interactive && i._containsPoint(n) && (("click" === t.type || "preclick" !== t.type) && this._map._draggableMoved(i) || (e = i));
      }

      e && (Fi(t), this._fireEvent([e], t));
    },
    _onMouseMove: function _onMouseMove(t) {
      var i;
      !this._map || this._map.dragging.moving() || this._map._animatingZoom || (i = this._map.mouseEventToLayerPoint(t), this._handleMouseHover(t, i));
    },
    _handleMouseOut: function _handleMouseOut(t) {
      var i = this._hoveredLayer;
      i && (_i(this._container, "leaflet-interactive"), this._fireEvent([i], t, "mouseout"), this._hoveredLayer = null, this._mouseHoverThrottled = !1);
    },
    _handleMouseHover: function _handleMouseHover(t, i) {
      if (!this._mouseHoverThrottled) {
        for (var e, n, o = this._drawFirst; o; o = o.next) {
          (e = o.layer).options.interactive && e._containsPoint(i) && (n = e);
        }

        n !== this._hoveredLayer && (this._handleMouseOut(t), n && (ci(this._container, "leaflet-interactive"), this._fireEvent([n], t, "mouseover"), this._hoveredLayer = n)), this._hoveredLayer && this._fireEvent([this._hoveredLayer], t), this._mouseHoverThrottled = !0, setTimeout(p(function () {
          this._mouseHoverThrottled = !1;
        }, this), 32);
      }
    },
    _fireEvent: function _fireEvent(t, i, e) {
      this._map._fireDOMEvent(i, e || i.type, t);
    },
    _bringToFront: function _bringToFront(t) {
      var i,
          e,
          n = t._order;
      n && (i = n.next, e = n.prev, i && ((i.prev = e) ? e.next = i : i && (this._drawFirst = i), n.prev = this._drawLast, (this._drawLast.next = n).next = null, this._drawLast = n, this._requestRedraw(t)));
    },
    _bringToBack: function _bringToBack(t) {
      var i,
          e,
          n = t._order;
      n && (i = n.next, (e = n.prev) && ((e.next = i) ? i.prev = e : e && (this._drawLast = e), n.prev = null, n.next = this._drawFirst, this._drawFirst.prev = n, this._drawFirst = n, this._requestRedraw(t)));
    }
  });

  function ln(t) {
    return St ? new un(t) : null;
  }

  var cn = function () {
    try {
      return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"), function (t) {
        return document.createElement("<lvml:" + t + ' class="lvml">');
      };
    } catch (t) {
      return function (t) {
        return document.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
      };
    }
  }(),
      _n = {
    _initContainer: function _initContainer() {
      this._container = si("div", "leaflet-vml-container");
    },
    _update: function _update() {
      this._map._animatingZoom || (hn.prototype._update.call(this), this.fire("update"));
    },
    _initPath: function _initPath(t) {
      var i = t._container = cn("shape");
      ci(i, "leaflet-vml-shape " + (this.options.className || "")), i.coordsize = "1 1", t._path = cn("path"), i.appendChild(t._path), this._updateStyle(t), this._layers[m(t)] = t;
    },
    _addPath: function _addPath(t) {
      var i = t._container;
      this._container.appendChild(i), t.options.interactive && t.addInteractiveTarget(i);
    },
    _removePath: function _removePath(t) {
      var i = t._container;
      ri(i), t.removeInteractiveTarget(i), delete this._layers[m(t)];
    },
    _updateStyle: function _updateStyle(t) {
      var i = t._stroke,
          e = t._fill,
          n = t.options,
          o = t._container;
      o.stroked = !!n.stroke, o.filled = !!n.fill, n.stroke ? (i = i || (t._stroke = cn("stroke")), o.appendChild(i), i.weight = n.weight + "px", i.color = n.color, i.opacity = n.opacity, n.dashArray ? i.dashStyle = g(n.dashArray) ? n.dashArray.join(" ") : n.dashArray.replace(/( *, *)/g, " ") : i.dashStyle = "", i.endcap = n.lineCap.replace("butt", "flat"), i.joinstyle = n.lineJoin) : i && (o.removeChild(i), t._stroke = null), n.fill ? (e = e || (t._fill = cn("fill")), o.appendChild(e), e.color = n.fillColor || n.color, e.opacity = n.fillOpacity) : e && (o.removeChild(e), t._fill = null);
    },
    _updateCircle: function _updateCircle(t) {
      var i = t._point.round(),
          e = Math.round(t._radius),
          n = Math.round(t._radiusY || e);

      this._setPath(t, t._empty() ? "M0 0" : "AL " + i.x + "," + i.y + " " + e + "," + n + " 0,23592600");
    },
    _setPath: function _setPath(t, i) {
      t._path.v = i;
    },
    _bringToFront: function _bringToFront(t) {
      hi(t._container);
    },
    _bringToBack: function _bringToBack(t) {
      ui(t._container);
    }
  },
      dn = Et ? cn : J,
      pn = hn.extend({
    getEvents: function getEvents() {
      var t = hn.prototype.getEvents.call(this);
      return t.zoomstart = this._onZoomStart, t;
    },
    _initContainer: function _initContainer() {
      this._container = dn("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = dn("g"), this._container.appendChild(this._rootGroup);
    },
    _destroyContainer: function _destroyContainer() {
      ri(this._container), Si(this._container), delete this._container, delete this._rootGroup, delete this._svgSize;
    },
    _onZoomStart: function _onZoomStart() {
      this._update();
    },
    _update: function _update() {
      var t, i, e;
      this._map._animatingZoom && this._bounds || (hn.prototype._update.call(this), i = (t = this._bounds).getSize(), e = this._container, this._svgSize && this._svgSize.equals(i) || (this._svgSize = i, e.setAttribute("width", i.x), e.setAttribute("height", i.y)), vi(e, t.min), e.setAttribute("viewBox", [t.min.x, t.min.y, i.x, i.y].join(" ")), this.fire("update"));
    },
    _initPath: function _initPath(t) {
      var i = t._path = dn("path");
      t.options.className && ci(i, t.options.className), t.options.interactive && ci(i, "leaflet-interactive"), this._updateStyle(t), this._layers[m(t)] = t;
    },
    _addPath: function _addPath(t) {
      this._rootGroup || this._initContainer(), this._rootGroup.appendChild(t._path), t.addInteractiveTarget(t._path);
    },
    _removePath: function _removePath(t) {
      ri(t._path), t.removeInteractiveTarget(t._path), delete this._layers[m(t)];
    },
    _updatePath: function _updatePath(t) {
      t._project(), t._update();
    },
    _updateStyle: function _updateStyle(t) {
      var i = t._path,
          e = t.options;
      i && (e.stroke ? (i.setAttribute("stroke", e.color), i.setAttribute("stroke-opacity", e.opacity), i.setAttribute("stroke-width", e.weight), i.setAttribute("stroke-linecap", e.lineCap), i.setAttribute("stroke-linejoin", e.lineJoin), e.dashArray ? i.setAttribute("stroke-dasharray", e.dashArray) : i.removeAttribute("stroke-dasharray"), e.dashOffset ? i.setAttribute("stroke-dashoffset", e.dashOffset) : i.removeAttribute("stroke-dashoffset")) : i.setAttribute("stroke", "none"), e.fill ? (i.setAttribute("fill", e.fillColor || e.color), i.setAttribute("fill-opacity", e.fillOpacity), i.setAttribute("fill-rule", e.fillRule || "evenodd")) : i.setAttribute("fill", "none"));
    },
    _updatePoly: function _updatePoly(t, i) {
      this._setPath(t, $(t._parts, i));
    },
    _updateCircle: function _updateCircle(t) {
      var i = t._point,
          e = Math.max(Math.round(t._radius), 1),
          n = "a" + e + "," + (Math.max(Math.round(t._radiusY), 1) || e) + " 0 1,0 ",
          o = t._empty() ? "M0 0" : "M" + (i.x - e) + "," + i.y + n + 2 * e + ",0 " + n + 2 * -e + ",0 ";

      this._setPath(t, o);
    },
    _setPath: function _setPath(t, i) {
      t._path.setAttribute("d", i);
    },
    _bringToFront: function _bringToFront(t) {
      hi(t._path);
    },
    _bringToBack: function _bringToBack(t) {
      ui(t._path);
    }
  });

  function mn(t) {
    return Zt || Et ? new pn(t) : null;
  }

  Et && pn.include(_n), Ki.include({
    getRenderer: function getRenderer(t) {
      var i = (i = t.options.renderer || this._getPaneRenderer(t.options.pane) || this.options.renderer || this._renderer) || (this._renderer = this._createRenderer());

      return this.hasLayer(i) || this.addLayer(i), i;
    },
    _getPaneRenderer: function _getPaneRenderer(t) {
      if ("overlayPane" === t || void 0 === t) return !1;
      var i = this._paneRenderers[t];
      return void 0 === i && (i = this._createRenderer({
        pane: t
      }), this._paneRenderers[t] = i), i;
    },
    _createRenderer: function _createRenderer(t) {
      return this.options.preferCanvas && ln(t) || mn(t);
    }
  });
  var fn = Re.extend({
    initialize: function initialize(t, i) {
      Re.prototype.initialize.call(this, this._boundsToLatLngs(t), i);
    },
    setBounds: function setBounds(t) {
      return this.setLatLngs(this._boundsToLatLngs(t));
    },
    _boundsToLatLngs: function _boundsToLatLngs(t) {
      return [(t = N(t)).getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()];
    }
  });
  pn.create = dn, pn.pointsToPath = $, Ne.geometryToLayer = De, Ne.coordsToLatLng = We, Ne.coordsToLatLngs = He, Ne.latLngToCoords = Fe, Ne.latLngsToCoords = Ue, Ne.getFeature = Ve, Ne.asFeature = qe, Ki.mergeOptions({
    boxZoom: !0
  });
  var gn = ie.extend({
    initialize: function initialize(t) {
      this._map = t, this._container = t._container, this._pane = t._panes.overlayPane, this._resetStateTimeout = 0, t.on("unload", this._destroy, this);
    },
    addHooks: function addHooks() {
      zi(this._container, "mousedown", this._onMouseDown, this);
    },
    removeHooks: function removeHooks() {
      Si(this._container, "mousedown", this._onMouseDown, this);
    },
    moved: function moved() {
      return this._moved;
    },
    _destroy: function _destroy() {
      ri(this._pane), delete this._pane;
    },
    _resetState: function _resetState() {
      this._resetStateTimeout = 0, this._moved = !1;
    },
    _clearDeferredResetState: function _clearDeferredResetState() {
      0 !== this._resetStateTimeout && (clearTimeout(this._resetStateTimeout), this._resetStateTimeout = 0);
    },
    _onMouseDown: function _onMouseDown(t) {
      if (!t.shiftKey || 1 !== t.which && 1 !== t.button) return !1;
      this._clearDeferredResetState(), this._resetState(), Xt(), xi(), this._startPoint = this._map.mouseEventToContainerPoint(t), zi(document, {
        contextmenu: Ni,
        mousemove: this._onMouseMove,
        mouseup: this._onMouseUp,
        keydown: this._onKeyDown
      }, this);
    },
    _onMouseMove: function _onMouseMove(t) {
      this._moved || (this._moved = !0, this._box = si("div", "leaflet-zoom-box", this._container), ci(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(t);
      var i = new I(this._point, this._startPoint),
          e = i.getSize();
      vi(this._box, i.min), this._box.style.width = e.x + "px", this._box.style.height = e.y + "px";
    },
    _finish: function _finish() {
      this._moved && (ri(this._box), _i(this._container, "leaflet-crosshair")), Jt(), wi(), Si(document, {
        contextmenu: Ni,
        mousemove: this._onMouseMove,
        mouseup: this._onMouseUp,
        keydown: this._onKeyDown
      }, this);
    },
    _onMouseUp: function _onMouseUp(t) {
      var i;
      1 !== t.which && 1 !== t.button || (this._finish(), this._moved && (this._clearDeferredResetState(), this._resetStateTimeout = setTimeout(p(this._resetState, this), 0), i = new R(this._map.containerPointToLatLng(this._startPoint), this._map.containerPointToLatLng(this._point)), this._map.fitBounds(i).fire("boxzoomend", {
        boxZoomBounds: i
      })));
    },
    _onKeyDown: function _onKeyDown(t) {
      27 === t.keyCode && this._finish();
    }
  });
  Ki.addInitHook("addHandler", "boxZoom", gn), Ki.mergeOptions({
    doubleClickZoom: !0
  });
  var vn = ie.extend({
    addHooks: function addHooks() {
      this._map.on("dblclick", this._onDoubleClick, this);
    },
    removeHooks: function removeHooks() {
      this._map.off("dblclick", this._onDoubleClick, this);
    },
    _onDoubleClick: function _onDoubleClick(t) {
      var i = this._map,
          e = i.getZoom(),
          n = i.options.zoomDelta,
          o = t.originalEvent.shiftKey ? e - n : e + n;
      "center" === i.options.doubleClickZoom ? i.setZoom(o) : i.setZoomAround(t.containerPoint, o);
    }
  });
  Ki.addInitHook("addHandler", "doubleClickZoom", vn), Ki.mergeOptions({
    dragging: !0,
    inertia: !st,
    inertiaDeceleration: 3400,
    inertiaMaxSpeed: 1 / 0,
    easeLinearity: .2,
    worldCopyJump: !1,
    maxBoundsViscosity: 0
  });
  var yn = ie.extend({
    addHooks: function addHooks() {
      var t;
      this._draggable || (t = this._map, this._draggable = new ae(t._mapPane, t._container), this._draggable.on({
        dragstart: this._onDragStart,
        drag: this._onDrag,
        dragend: this._onDragEnd
      }, this), this._draggable.on("predrag", this._onPreDragLimit, this), t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), t.on("zoomend", this._onZoomEnd, this), t.whenReady(this._onZoomEnd, this))), ci(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), this._positions = [], this._times = [];
    },
    removeHooks: function removeHooks() {
      _i(this._map._container, "leaflet-grab"), _i(this._map._container, "leaflet-touch-drag"), this._draggable.disable();
    },
    moved: function moved() {
      return this._draggable && this._draggable._moved;
    },
    moving: function moving() {
      return this._draggable && this._draggable._moving;
    },
    _onDragStart: function _onDragStart() {
      var t,
          i = this._map;
      i._stop(), this._map.options.maxBounds && this._map.options.maxBoundsViscosity ? (t = N(this._map.options.maxBounds), this._offsetLimit = O(this._map.latLngToContainerPoint(t.getNorthWest()).multiplyBy(-1), this._map.latLngToContainerPoint(t.getSouthEast()).multiplyBy(-1).add(this._map.getSize())), this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity))) : this._offsetLimit = null, i.fire("movestart").fire("dragstart"), i.options.inertia && (this._positions = [], this._times = []);
    },
    _onDrag: function _onDrag(t) {
      var i, e;
      this._map.options.inertia && (i = this._lastTime = +new Date(), e = this._lastPos = this._draggable._absPos || this._draggable._newPos, this._positions.push(e), this._times.push(i), this._prunePositions(i)), this._map.fire("move", t).fire("drag", t);
    },
    _prunePositions: function _prunePositions(t) {
      for (; 1 < this._positions.length && 50 < t - this._times[0];) {
        this._positions.shift(), this._times.shift();
      }
    },
    _onZoomEnd: function _onZoomEnd() {
      var t = this._map.getSize().divideBy(2),
          i = this._map.latLngToLayerPoint([0, 0]);

      this._initialWorldOffset = i.subtract(t).x, this._worldWidth = this._map.getPixelWorldBounds().getSize().x;
    },
    _viscousLimit: function _viscousLimit(t, i) {
      return t - (t - i) * this._viscosity;
    },
    _onPreDragLimit: function _onPreDragLimit() {
      var t, i;
      this._viscosity && this._offsetLimit && (t = this._draggable._newPos.subtract(this._draggable._startPos), i = this._offsetLimit, t.x < i.min.x && (t.x = this._viscousLimit(t.x, i.min.x)), t.y < i.min.y && (t.y = this._viscousLimit(t.y, i.min.y)), t.x > i.max.x && (t.x = this._viscousLimit(t.x, i.max.x)), t.y > i.max.y && (t.y = this._viscousLimit(t.y, i.max.y)), this._draggable._newPos = this._draggable._startPos.add(t));
    },
    _onPreDragWrap: function _onPreDragWrap() {
      var t = this._worldWidth,
          i = Math.round(t / 2),
          e = this._initialWorldOffset,
          n = this._draggable._newPos.x,
          o = (n - i + e) % t + i - e,
          s = (n + i + e) % t - i - e,
          r = Math.abs(o + e) < Math.abs(s + e) ? o : s;
      this._draggable._absPos = this._draggable._newPos.clone(), this._draggable._newPos.x = r;
    },
    _onDragEnd: function _onDragEnd(t) {
      var i,
          e,
          n,
          o,
          s,
          r,
          a,
          h,
          u,
          l = this._map,
          c = l.options,
          _ = !c.inertia || this._times.length < 2;

      l.fire("dragend", t), _ ? l.fire("moveend") : (this._prunePositions(+new Date()), i = this._lastPos.subtract(this._positions[0]), e = (this._lastTime - this._times[0]) / 1e3, n = c.easeLinearity, s = (o = i.multiplyBy(n / e)).distanceTo([0, 0]), r = Math.min(c.inertiaMaxSpeed, s), a = o.multiplyBy(r / s), h = r / (c.inertiaDeceleration * n), (u = a.multiplyBy(-h / 2).round()).x || u.y ? (u = l._limitOffset(u, l.options.maxBounds), M(function () {
        l.panBy(u, {
          duration: h,
          easeLinearity: n,
          noMoveStart: !0,
          animate: !0
        });
      })) : l.fire("moveend"));
    }
  });
  Ki.addInitHook("addHandler", "dragging", yn), Ki.mergeOptions({
    keyboard: !0,
    keyboardPanDelta: 80
  });
  var xn = ie.extend({
    keyCodes: {
      left: [37],
      right: [39],
      down: [40],
      up: [38],
      zoomIn: [187, 107, 61, 171],
      zoomOut: [189, 109, 54, 173]
    },
    initialize: function initialize(t) {
      this._map = t, this._setPanDelta(t.options.keyboardPanDelta), this._setZoomDelta(t.options.zoomDelta);
    },
    addHooks: function addHooks() {
      var t = this._map._container;
      t.tabIndex <= 0 && (t.tabIndex = "0"), zi(t, {
        focus: this._onFocus,
        blur: this._onBlur,
        mousedown: this._onMouseDown
      }, this), this._map.on({
        focus: this._addHooks,
        blur: this._removeHooks
      }, this);
    },
    removeHooks: function removeHooks() {
      this._removeHooks(), Si(this._map._container, {
        focus: this._onFocus,
        blur: this._onBlur,
        mousedown: this._onMouseDown
      }, this), this._map.off({
        focus: this._addHooks,
        blur: this._removeHooks
      }, this);
    },
    _onMouseDown: function _onMouseDown() {
      var t, i, e, n;
      this._focused || (t = document.body, i = document.documentElement, e = t.scrollTop || i.scrollTop, n = t.scrollLeft || i.scrollLeft, this._map._container.focus(), window.scrollTo(n, e));
    },
    _onFocus: function _onFocus() {
      this._focused = !0, this._map.fire("focus");
    },
    _onBlur: function _onBlur() {
      this._focused = !1, this._map.fire("blur");
    },
    _setPanDelta: function _setPanDelta(t) {
      for (var i = this._panKeys = {}, e = this.keyCodes, n = 0, o = e.left.length; n < o; n++) {
        i[e.left[n]] = [-1 * t, 0];
      }

      for (n = 0, o = e.right.length; n < o; n++) {
        i[e.right[n]] = [t, 0];
      }

      for (n = 0, o = e.down.length; n < o; n++) {
        i[e.down[n]] = [0, t];
      }

      for (n = 0, o = e.up.length; n < o; n++) {
        i[e.up[n]] = [0, -1 * t];
      }
    },
    _setZoomDelta: function _setZoomDelta(t) {
      for (var i = this._zoomKeys = {}, e = this.keyCodes, n = 0, o = e.zoomIn.length; n < o; n++) {
        i[e.zoomIn[n]] = t;
      }

      for (n = 0, o = e.zoomOut.length; n < o; n++) {
        i[e.zoomOut[n]] = -t;
      }
    },
    _addHooks: function _addHooks() {
      zi(document, "keydown", this._onKeyDown, this);
    },
    _removeHooks: function _removeHooks() {
      Si(document, "keydown", this._onKeyDown, this);
    },
    _onKeyDown: function _onKeyDown(t) {
      if (!(t.altKey || t.ctrlKey || t.metaKey)) {
        var i,
            e = t.keyCode,
            n = this._map;
        if (e in this._panKeys) n._panAnim && n._panAnim._inProgress || (i = this._panKeys[e], t.shiftKey && (i = A(i).multiplyBy(3)), n.panBy(i), n.options.maxBounds && n.panInsideBounds(n.options.maxBounds));else if (e in this._zoomKeys) n.setZoom(n.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[e]);else {
          if (27 !== e || !n._popup || !n._popup.options.closeOnEscapeKey) return;
          n.closePopup();
        }
        Ni(t);
      }
    }
  });
  Ki.addInitHook("addHandler", "keyboard", xn), Ki.mergeOptions({
    scrollWheelZoom: !0,
    wheelDebounceTime: 40,
    wheelPxPerZoomLevel: 60
  });
  var wn = ie.extend({
    addHooks: function addHooks() {
      zi(this._map._container, "wheel", this._onWheelScroll, this), this._delta = 0;
    },
    removeHooks: function removeHooks() {
      Si(this._map._container, "wheel", this._onWheelScroll, this);
    },
    _onWheelScroll: function _onWheelScroll(t) {
      var i = Wi(t),
          e = this._map.options.wheelDebounceTime;
      this._delta += i, this._lastMousePos = this._map.mouseEventToContainerPoint(t), this._startTime || (this._startTime = +new Date());
      var n = Math.max(e - (new Date() - this._startTime), 0);
      clearTimeout(this._timer), this._timer = setTimeout(p(this._performZoom, this), n), Ni(t);
    },
    _performZoom: function _performZoom() {
      var t = this._map,
          i = t.getZoom(),
          e = this._map.options.zoomSnap || 0;

      t._stop();

      var n = this._delta / (4 * this._map.options.wheelPxPerZoomLevel),
          o = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(n)))) / Math.LN2,
          s = e ? Math.ceil(o / e) * e : o,
          r = t._limitZoom(i + (0 < this._delta ? s : -s)) - i;
      this._delta = 0, this._startTime = null, r && ("center" === t.options.scrollWheelZoom ? t.setZoom(i + r) : t.setZoomAround(this._lastMousePos, i + r));
    }
  });
  Ki.addInitHook("addHandler", "scrollWheelZoom", wn), Ki.mergeOptions({
    tap: !0,
    tapTolerance: 15
  });
  var Pn = ie.extend({
    addHooks: function addHooks() {
      zi(this._map._container, "touchstart", this._onDown, this);
    },
    removeHooks: function removeHooks() {
      Si(this._map._container, "touchstart", this._onDown, this);
    },
    _onDown: function _onDown(t) {
      if (t.touches) {
        if (Ri(t), this._fireClick = !0, 1 < t.touches.length) return this._fireClick = !1, void clearTimeout(this._holdTimeout);
        var i = t.touches[0],
            e = i.target;
        this._startPos = this._newPos = new k(i.clientX, i.clientY), e.tagName && "a" === e.tagName.toLowerCase() && ci(e, "leaflet-active"), this._holdTimeout = setTimeout(p(function () {
          this._isTapValid() && (this._fireClick = !1, this._onUp(), this._simulateEvent("contextmenu", i));
        }, this), 1e3), this._simulateEvent("mousedown", i), zi(document, {
          touchmove: this._onMove,
          touchend: this._onUp
        }, this);
      }
    },
    _onUp: function _onUp(t) {
      var i, e;
      clearTimeout(this._holdTimeout), Si(document, {
        touchmove: this._onMove,
        touchend: this._onUp
      }, this), this._fireClick && t && t.changedTouches && ((e = (i = t.changedTouches[0]).target) && e.tagName && "a" === e.tagName.toLowerCase() && _i(e, "leaflet-active"), this._simulateEvent("mouseup", i), this._isTapValid() && this._simulateEvent("click", i));
    },
    _isTapValid: function _isTapValid() {
      return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
    },
    _onMove: function _onMove(t) {
      var i = t.touches[0];
      this._newPos = new k(i.clientX, i.clientY), this._simulateEvent("mousemove", i);
    },
    _simulateEvent: function _simulateEvent(t, i) {
      var e = document.createEvent("MouseEvents");
      e._simulated = !0, i.target._simulatedClick = !0, e.initMouseEvent(t, !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null), i.target.dispatchEvent(e);
    }
  });
  !bt || Lt && !ct || Ki.addInitHook("addHandler", "tap", Pn), Ki.mergeOptions({
    touchZoom: bt && !st,
    bounceAtZoomLimits: !0
  });
  var Ln = ie.extend({
    addHooks: function addHooks() {
      ci(this._map._container, "leaflet-touch-zoom"), zi(this._map._container, "touchstart", this._onTouchStart, this);
    },
    removeHooks: function removeHooks() {
      _i(this._map._container, "leaflet-touch-zoom"), Si(this._map._container, "touchstart", this._onTouchStart, this);
    },
    _onTouchStart: function _onTouchStart(t) {
      var i,
          e,
          n = this._map;
      !t.touches || 2 !== t.touches.length || n._animatingZoom || this._zooming || (i = n.mouseEventToContainerPoint(t.touches[0]), e = n.mouseEventToContainerPoint(t.touches[1]), this._centerPoint = n.getSize()._divideBy(2), this._startLatLng = n.containerPointToLatLng(this._centerPoint), "center" !== n.options.touchZoom && (this._pinchStartLatLng = n.containerPointToLatLng(i.add(e)._divideBy(2))), this._startDist = i.distanceTo(e), this._startZoom = n.getZoom(), this._moved = !1, this._zooming = !0, n._stop(), zi(document, "touchmove", this._onTouchMove, this), zi(document, "touchend", this._onTouchEnd, this), Ri(t));
    },
    _onTouchMove: function _onTouchMove(t) {
      if (t.touches && 2 === t.touches.length && this._zooming) {
        var i = this._map,
            e = i.mouseEventToContainerPoint(t.touches[0]),
            n = i.mouseEventToContainerPoint(t.touches[1]),
            o = e.distanceTo(n) / this._startDist;

        if (this._zoom = i.getScaleZoom(o, this._startZoom), !i.options.bounceAtZoomLimits && (this._zoom < i.getMinZoom() && o < 1 || this._zoom > i.getMaxZoom() && 1 < o) && (this._zoom = i._limitZoom(this._zoom)), "center" === i.options.touchZoom) {
          if (this._center = this._startLatLng, 1 == o) return;
        } else {
          var s = e._add(n)._divideBy(2)._subtract(this._centerPoint);

          if (1 == o && 0 === s.x && 0 === s.y) return;
          this._center = i.unproject(i.project(this._pinchStartLatLng, this._zoom).subtract(s), this._zoom);
        }

        this._moved || (i._moveStart(!0, !1), this._moved = !0), z(this._animRequest);
        var r = p(i._move, i, this._center, this._zoom, {
          pinch: !0,
          round: !1
        });
        this._animRequest = M(r, this, !0), Ri(t);
      }
    },
    _onTouchEnd: function _onTouchEnd() {
      this._moved && this._zooming ? (this._zooming = !1, z(this._animRequest), Si(document, "touchmove", this._onTouchMove, this), Si(document, "touchend", this._onTouchEnd, this), this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom))) : this._zooming = !1;
    }
  });
  Ki.addInitHook("addHandler", "touchZoom", Ln), Ki.BoxZoom = gn, Ki.DoubleClickZoom = vn, Ki.Drag = yn, Ki.Keyboard = xn, Ki.ScrollWheelZoom = wn, Ki.Tap = Pn, Ki.TouchZoom = Ln, t.version = "1.7.1", t.Control = Xi, t.control = Yi, t.Browser = Bt, t.Evented = E, t.Mixin = ne, t.Util = C, t.Class = S, t.Handler = ie, t.extend = h, t.bind = p, t.stamp = m, t.setOptions = c, t.DomEvent = qi, t.DomUtil = Mi, t.PosAnimation = Gi, t.Draggable = ae, t.LineUtil = fe, t.PolyUtil = ye, t.Point = k, t.point = A, t.Bounds = I, t.bounds = O, t.Transformation = q, t.transformation = G, t.Projection = Pe, t.LatLng = D, t.latLng = j, t.LatLngBounds = R, t.latLngBounds = N, t.CRS = H, t.GeoJSON = Ne, t.geoJSON = Ke, t.geoJson = Ye, t.Layer = Me, t.LayerGroup = ze, t.layerGroup = function (t, i) {
    return new ze(t, i);
  }, t.FeatureGroup = Ce, t.featureGroup = function (t, i) {
    return new Ce(t, i);
  }, t.ImageOverlay = Xe, t.imageOverlay = function (t, i, e) {
    return new Xe(t, i, e);
  }, t.VideoOverlay = Je, t.videoOverlay = function (t, i, e) {
    return new Je(t, i, e);
  }, t.SVGOverlay = $e, t.svgOverlay = function (t, i, e) {
    return new $e(t, i, e);
  }, t.DivOverlay = Qe, t.Popup = tn, t.popup = function (t, i) {
    return new tn(t, i);
  }, t.Tooltip = en, t.tooltip = function (t, i) {
    return new en(t, i);
  }, t.Icon = Se, t.icon = function (t) {
    return new Se(t);
  }, t.DivIcon = nn, t.divIcon = function (t) {
    return new nn(t);
  }, t.Marker = ke, t.marker = function (t, i) {
    return new ke(t, i);
  }, t.TileLayer = sn, t.tileLayer = rn, t.GridLayer = on, t.gridLayer = function (t) {
    return new on(t);
  }, t.SVG = pn, t.svg = mn, t.Renderer = hn, t.Canvas = un, t.canvas = ln, t.Path = Be, t.CircleMarker = Ae, t.circleMarker = function (t, i) {
    return new Ae(t, i);
  }, t.Circle = Ie, t.circle = function (t, i, e) {
    return new Ie(t, i, e);
  }, t.Polyline = Oe, t.polyline = function (t, i) {
    return new Oe(t, i);
  }, t.Polygon = Re, t.polygon = function (t, i) {
    return new Re(t, i);
  }, t.Rectangle = fn, t.rectangle = function (t, i) {
    return new fn(t, i);
  }, t.Map = Ki, t.map = function (t, i) {
    return new Ki(t, i);
  };
  var bn = window.L;
  t.noConflict = function () {
    return window.L = bn, this;
  }, window.L = t;
});

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.content.edit.js":
/*!***********************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.content.edit.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (global, doc, eZ, Translator) {
  var enterKeyCode = 13;
  var inputTypeToPreventSubmit = ['checkbox', 'color', 'date', 'datetime-local', 'email', 'file', 'image', 'month', 'number', 'radio', 'range', 'reset', 'search', 'select-one', 'select-multiple', 'tel', 'text', 'time', 'url'];
  var form = doc.querySelector('.ez-form-validate');
  var submitBtns = form.querySelectorAll('[type="submit"]:not([formnovalidate])');

  var getValidationResults = function getValidationResults(validator) {
    var isValid = validator.isValid();
    var validatorName = validator.constructor.name;
    var result = {
      isValid: isValid,
      validatorName: validatorName
    };
    return result;
  };

  var getInvalidTabs = function getInvalidTabs(validator) {
    return validator.fieldsToValidate.reduce(function (invalidTabs, field) {
      var tabPane = field.item.closest('.tab-pane');

      if (tabPane && field.item.classList.contains('is-invalid')) {
        invalidTabs.add(tabPane.id);
      }

      return invalidTabs;
    }, new Set());
  };

  var fields = doc.querySelectorAll('.ez-field-edit');

  var focusOnFirstError = function focusOnFirstError() {
    var invalidFields = doc.querySelectorAll('.ez-field-edit.is-invalid');
    fields.forEach(function (field) {
      return field.removeAttribute('tabindex');
    });
    invalidFields.forEach(function (field) {
      return field.setAttribute('tabindex', '-1');
    });
    invalidTab = invalidFields[0].closest('.tab-pane');

    if (invalidTab) {
      var invalidTabLink = doc.querySelector("a[href=\"#".concat(invalidTab.id, "\"]"));
      invalidTabLink.click();
    }

    invalidFields[0].focus();
    doc.querySelector('.ez-content-item__errors-wrapper').removeAttribute('hidden');
  };

  var clickHandler = function clickHandler(event) {
    var btn = event.currentTarget;

    if (parseInt(btn.dataset.isFormValid, 10)) {
      return;
    }

    event.preventDefault();
    var validators = eZ.fieldTypeValidators;
    var validationResults = validators.map(getValidationResults);
    var isFormValid = validationResults.every(function (result) {
      return result.isValid;
    });
    var invalidTabs = validators.map(getInvalidTabs);

    if (isFormValid) {
      btn.dataset.isFormValid = 1; // for some reason trying to fire click event inside the event handler flow is impossible
      // the following line breaks the flow so it's possible to fire click event on a button again.

      window.setTimeout(function () {
        return btn.click();
      }, 0);
    } else {
      btn.dataset.validatorsWithErrors = Array.from(validationResults.filter(function (result) {
        return !result.isValid;
      }).reduce(function (total, result) {
        total.add(result.validatorName);
        return total;
      }, new Set())).join();
      fields.forEach(function (field) {
        return field.removeAttribute('id');
      });
      doc.querySelectorAll('.ez-tabs__nav-item').forEach(function (navItem) {
        navItem.classList.remove('ez-tabs__nav-item--invalid');
      });
      invalidTabs.forEach(function (invalidInputs) {
        invalidInputs.forEach(function (invalidInputKey) {
          doc.querySelector("#item-".concat(invalidInputKey)).classList.add('ez-tabs__nav-item--invalid');
        });
      });
      focusOnFirstError();
    }
  };

  var isAutosaveEnabled = function isAutosaveEnabled() {
    return eZ.adminUiConfig.autosave.enabled && form.querySelector('[name="ezplatform_content_forms_content_edit[autosave]"]');
  };

  if (isAutosaveEnabled()) {
    var autosaveWrapper = doc.querySelector('.ez-content-edit-page-title__autosave-wrapper');
    var AUTOSAVE_SUBMIT_BUTTON_NAME = 'ezplatform_content_forms_content_edit[autosave]';
    var lastSuccessfulAutosave = null;
    setInterval(function () {
      var formData = new FormData(form);
      formData.set(AUTOSAVE_SUBMIT_BUTTON_NAME, true);
      fetch(form.target || window.location.href, {
        method: 'POST',
        body: formData
      }).then(eZ.helpers.request.getStatusFromResponse).then(function () {
        lastSuccessfulAutosave = eZ.helpers.timezone.formatFullDateTime(new Date());
        autosaveWrapper.classList.remove('ez-content-edit-page-title__autosave-wrapper--failed');
        autosaveWrapper.classList.add('ez-content-edit-page-title__autosave-wrapper--saved');
      })["catch"](function () {
        autosaveWrapper.classList.remove('ez-content-edit-page-title__autosave-wrapper--saved');
        autosaveWrapper.classList.add('ez-content-edit-page-title__autosave-wrapper--failed');
      })["finally"](function () {
        autosaveWrapper.classList.remove('ez-content-edit-page-title__autosave-wrapper--not-saved');

        if (lastSuccessfulAutosave) {
          var lastSavedText = Translator.trans(
          /*@Desc("Last saved draft was on %date%")*/
          'content_edit.last_saved', {
            date: lastSuccessfulAutosave
          }, 'content');
          autosaveWrapper.querySelector('.ez-content-edit-page-title__autosave-last-saved').innerHTML = lastSavedText;
        }
      });
    }, eZ.adminUiConfig.autosave.interval);
  }

  form.setAttribute('novalidate', true);

  form.onkeypress = function (event) {
    var keyCode = event.charCode || event.keyCode || 0;
    var activeElementType = typeof doc.activeElement.type !== 'undefined' ? doc.activeElement.type.toLowerCase() : '';

    if (keyCode === enterKeyCode && inputTypeToPreventSubmit.includes(activeElementType)) {
      event.preventDefault();
    }
  };

  submitBtns.forEach(function (btn) {
    btn.dataset.isFormValid = 0;
    btn.addEventListener('click', clickHandler, false);
  });
})(window, window.document, window.eZ, window.Translator);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.location.tab.js":
/*!***********************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.location.tab.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (global, doc, $) {
  $(".ez-tabs a[href=\"#".concat(global.location.hash.split('#')[1], "\"]")).tab('show'); // Change hash for page-reload

  $('.ez-tabs a').on('shown.bs.tab', function (event) {
    global.location.hash = "".concat(event.target.hash, "#tab");
  });
})(window, window.document, window.jQuery);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/base/base-field.js":
/*!******************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/base/base-field.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(function (global, doc, eZ) {
  var BaseFieldValidator = /*#__PURE__*/function () {
    "use strict";

    function BaseFieldValidator(config) {
      _classCallCheck(this, BaseFieldValidator);

      this.classInvalid = config.classInvalid;
      this.eventsMap = config.eventsMap;
      this.fieldSelector = config.fieldSelector;
      this.fieldContainer = config.fieldContainer;
      this.fieldsToValidate = [];
      this.isValid = this.isValid.bind(this);
    }

    _createClass(BaseFieldValidator, [{
      key: "getFieldTypeContainer",
      value: function getFieldTypeContainer(fallback) {
        return this.fieldContainer ? this.fieldContainer : fallback;
      }
      /**
       * Attaches event to elements found with a selector provided by field config
       *
       * @method attachEvent
       * @param {Object} config
       * @memberof BaseFieldValidator
       */

    }, {
      key: "attachEvent",
      value: function attachEvent(config) {
        var container = this.getFieldTypeContainer(doc);
        var elements = config.elements || container.querySelectorAll(config.selector);
        elements.forEach(this.attachEventToElement.bind(this, config));
      }
      /**
       * Attaches event to elements found with a selector provided by field config
       *
       * @method attachEventToElement
       * @param {Object} config
       * @param {HTMLElement} item
       * @memberof BaseFieldValidator
       */

    }, {
      key: "attachEventToElement",
      value: function attachEventToElement(config, item) {
        var isValueValidator = typeof config.isValueValidator !== 'undefined' ? config.isValueValidator : true;
        this.fieldsToValidate.push({
          item: item,
          isValueValidator: isValueValidator,
          callback: config.validateField
        });
        item.addEventListener(config.eventName, config.validateField, false);
        item.addEventListener('checkIsValid', this.isValid, false);
      }
      /**
       * Removes event from a node found by a given selector
       *
       * @method removeEvent
       * @param {String} eventName
       * @param {String} selector
       * @param {Function} callback
       * @memberof BaseFieldValidator
       */

    }, {
      key: "removeEvent",
      value: function removeEvent(eventName, selector, callback) {
        var _this = this;

        this.getFieldTypeContainer(doc).querySelectorAll(selector).forEach(function (item) {
          item.removeEventListener('checkIsValid', _this.isValid, false);
          item.removeEventListener(eventName, callback, false);
        });
      }
      /**
       * Finds nodes to add validation state
       *
       * @method findValidationStateNodes
       * @param {HTMLElement} fieldNode
       * @param {HTMLElement} input
       * @param {Array} selectors
       * @returns {Array}
       * @memberof BaseFieldValidator
       */

    }, {
      key: "findValidationStateNodes",
      value: function findValidationStateNodes(fieldNode, input) {
        var selectors = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
        return selectors.reduce(function (total, selector) {
          return total.concat(_toConsumableArray(fieldNode.querySelectorAll(selector)));
        }, []);
      }
      /**
       * Toggles the invalid state
       *
       * @method toggleInvalidState
       * @param {Boolean} isError
       * @param {Object} config
       * @param {HTMLElement} input
       * @memberof BaseFieldValidator
       */

    }, {
      key: "toggleInvalidState",
      value: function toggleInvalidState(isError, config, input) {
        var _this2 = this;

        var container = this.getFieldTypeContainer(input.closest(this.fieldSelector));
        var methodName = isError ? 'add' : 'remove';
        var nodes = this.findValidationStateNodes(container, input, config.invalidStateSelectors);
        container.classList[methodName](this.classInvalid);
        input.classList[methodName](this.classInvalid);
        nodes.forEach(function (el) {
          return el.classList[methodName](_this2.classInvalid);
        });
      }
      /**
       * Creates an error node
       *
       * @method createErrorNode
       * @param {String} message
       * @returns {HTMLElement}
       * @memberof BaseFieldValidator
       */

    }, {
      key: "createErrorNode",
      value: function createErrorNode(message) {
        var errorNode = doc.createElement('em');
        errorNode.classList.add('ez-field-edit__error');
        errorNode.innerHTML = message;
        return errorNode;
      }
      /**
       * Finds the error containers
       *
       * @method findErrorContainers
       * @param {HTMLElement} fieldNode
       * @param {HTMLElement} input
       * @param {Array} selectors
       * @returns {Array}
       * @memberof BaseFieldValidator
       */

    }, {
      key: "findErrorContainers",
      value: function findErrorContainers(fieldNode, input, selectors) {
        return selectors.reduce(function (total, selector) {
          return total.concat(_toConsumableArray(fieldNode.querySelectorAll(selector)));
        }, []);
      }
      /**
       * Finds the existing error nodes
       *
       * @method findExistingErrorNodes
       * @param {HTMLElement} fieldNode
       * @param {HTMLElement} input
       * @param {Array} selectors
       * @returns {Array}
       * @memberof BaseFieldValidator
       */

    }, {
      key: "findExistingErrorNodes",
      value: function findExistingErrorNodes(fieldNode, input, selectors) {
        return this.findErrorContainers(fieldNode, input, selectors);
      }
      /**
       * Toggles the error message
       *
       * @method toggleErrorMessage
       * @param {Object} validationResult
       * @param {Object} config
       * @param {HTMLElement} input
       * @memberof BaseFieldValidator
       */

    }, {
      key: "toggleErrorMessage",
      value: function toggleErrorMessage(validationResult, config, input) {
        var _this3 = this;

        var container = this.getFieldTypeContainer(input.closest(this.fieldSelector));
        var nodes = this.findErrorContainers(container, input, config.errorNodeSelectors);
        var existingErrorSelectors = config.errorNodeSelectors.map(function (selector) {
          return "".concat(selector, " .ez-field-edit__error");
        });
        var existingErrorNodes = this.findExistingErrorNodes(container, input, existingErrorSelectors);
        existingErrorNodes.forEach(function (el) {
          return el.remove();
        });

        if (validationResult.isError) {
          nodes.forEach(function (el) {
            var errorNode = _this3.createErrorNode(validationResult.errorMessage);

            el.append(errorNode);
          });
        }
      }
      /**
       * Validates the field
       *
       * @method validateField
       * @param {Object} config
       * @param {Event} event
       * @memberof BaseFieldValidator
       */

    }, {
      key: "validateField",
      value: function validateField(config, event) {
        var validationResult = this[config.callback](event);

        if (!validationResult) {
          return;
        }

        this.toggleInvalidState(validationResult.isError, config, event.target);
        this.toggleErrorMessage(validationResult, config, event.target);
        return validationResult;
      }
      /**
       * Attaches event listeners based on a config.
       *
       * @method init
       * @memberof BaseFieldValidator
       */

    }, {
      key: "init",
      value: function init() {
        var _this4 = this;

        this.fieldsToValidate = [];
        this.eventsMap.forEach(function (eventConfig) {
          eventConfig.validateField = _this4.validateField.bind(_this4, eventConfig);

          _this4.attachEvent(eventConfig);
        });
      }
      /**
       * Removes event listeners and attaches again.
       *
       * @method reinit
       * @memberof BaseFieldValidator
       */

    }, {
      key: "reinit",
      value: function reinit() {
        var _this5 = this;

        this.eventsMap.forEach(function (_ref) {
          var eventName = _ref.eventName,
              selector = _ref.selector,
              validateField = _ref.validateField;
          return _this5.removeEvent(eventName, selector, validateField);
        });
        this.init();
      }
      /**
       * Cancels all errors
       *
       * @method cancelErrors
       * @returns {Object}
       */

    }, {
      key: "cancelErrors",
      value: function cancelErrors() {
        return {
          isError: false
        };
      }
      /**
       * Checks whether field values are valid
       *
       * @method isValid
       * @returns {Boolean}
       */

    }, {
      key: "isValid",
      value: function isValid() {
        if (!this.fieldsToValidate.length) {
          return true;
        }

        var results = [];
        this.fieldsToValidate.forEach(function (field) {
          if (field.isValueValidator) {
            results.push(field.callback({
              target: field.item,
              currentTarget: field.item
            }));
          }
        });
        return results.every(function (result) {
          return result && !result.isError;
        });
      }
    }]);

    return BaseFieldValidator;
  }();

  eZ.addConfig('BaseFieldValidator', BaseFieldValidator);
})(window, window.document, window.eZ);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/base/base-file-field.js":
/*!***********************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/base/base-file-field.js ***!
  \***********************************************************************************************************************/
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

(function (global, doc, eZ) {
  var SELECTOR_FIELD_LABEL = '.ez-field-edit__label-wrapper .ez-field-edit__label';

  var BaseFileFieldValidator = /*#__PURE__*/function (_eZ$BaseFieldValidato) {
    "use strict";

    _inherits(BaseFileFieldValidator, _eZ$BaseFieldValidato);

    var _super = _createSuper(BaseFileFieldValidator);

    function BaseFileFieldValidator() {
      _classCallCheck(this, BaseFileFieldValidator);

      return _super.apply(this, arguments);
    }

    _createClass(BaseFileFieldValidator, [{
      key: "validateInput",
      value:
      /**
       * Validates the input
       *
       * @method validateInput
       * @param {Event} event
       * @returns {Object}
       */
      function validateInput(event) {
        var input = event.currentTarget;
        var dataContainer = this.fieldContainer.querySelector('.ez-field-edit__data');
        var label = this.fieldContainer.querySelector(SELECTOR_FIELD_LABEL).innerHTML;
        var isRequired = input.required || this.fieldContainer.classList.contains('ez-field-edit--required');
        var dataMaxSize = +input.dataset.maxFileSize;
        var maxFileSize = parseInt(dataMaxSize, 10);
        var isEmpty = input.files && !input.files.length && dataContainer && !dataContainer.hasAttribute('hidden');
        var result = {
          isError: false
        };

        if (isRequired && isEmpty) {
          result = {
            isError: true,
            errorMessage: eZ.errors.emptyField.replace('{fieldName}', label)
          };
        }

        if (!isEmpty && maxFileSize > 0 && input.files[0] && input.files[0].size > maxFileSize) {
          result = this.validateFileSize(event);
        }

        return result;
      }
    }, {
      key: "validateFileSize",
      value: function validateFileSize(event) {
        return this.showFileSizeError();
      }
      /**
       * Displays an error message: file size exceeds maximum value
       *
       * @method showFileSizeNotice
       * @returns {Object}
       */

    }, {
      key: "showFileSizeError",
      value: function showFileSizeError() {
        var label = this.fieldContainer.querySelector(SELECTOR_FIELD_LABEL).innerHTML;
        var result = {
          isError: true,
          errorMessage: eZ.errors.invalidFileSize.replace('{fieldName}', label)
        };
        return result;
      }
    }]);

    return BaseFileFieldValidator;
  }(eZ.BaseFieldValidator);

  eZ.addConfig('BaseFileFieldValidator', BaseFileFieldValidator);
})(window, window.document, window.eZ);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/base/base-preview-field.js":
/*!**************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/base/base-preview-field.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(function (global, doc, eZ) {
  var SELECTOR_DATA = '.ez-field-edit__data';
  var SELECTOR_PREVIEW = '.ez-field-edit__preview';
  var SELECTOR_BTN_REMOVE = '.ez-field-edit-preview__action--remove';

  var BasePreviewField = /*#__PURE__*/function () {
    "use strict";

    function BasePreviewField(_ref) {
      var fieldContainer = _ref.fieldContainer,
          allowedFileTypes = _ref.allowedFileTypes,
          fileTypeAccept = _ref.fileTypeAccept,
          validator = _ref.validator;

      _classCallCheck(this, BasePreviewField);

      this.fieldContainer = fieldContainer || null;
      this.allowedFileTypes = allowedFileTypes || [];
      this.fileTypeAccept = fileTypeAccept || '';
      this.validator = validator;
      this.inputField = this.findInputField();
      this.clonedInputField = this.inputField.cloneNode(true);
      this.openFileSelector = this.openFileSelector.bind(this);
      this.showPreview = this.showPreview.bind(this);
      this.handleRemoveFile = this.handleRemoveFile.bind(this);
      this.handleDropFile = this.handleDropFile.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
      var dataMaxSize = +this.inputField.dataset.maxFileSize;
      this.maxFileSize = parseInt(dataMaxSize, 10);
      this.showPreviewEventName = 'ez-base:show-preview';
    }
    /**
     * Formats a file size information
     *
     * @method formatFileSize
     * @param {Number} bytes file size in bytes
     * @return {String} formatted file size information
     */


    _createClass(BasePreviewField, [{
      key: "formatFileSize",
      value: function formatFileSize(bytes) {
        var units = ['B', 'KB', 'MB', 'GB'];
        var kilobyte = 1024;
        var size = parseInt(bytes, 10) || 0;
        var unitIndex = 0;
        var decimalUnits;

        while (size >= kilobyte) {
          size = size / kilobyte;
          unitIndex++;
        }

        decimalUnits = unitIndex < 1 ? 0 : 1;
        var sizeFixed = size.toFixed(size >= 10 || decimalUnits);
        var unit = units[unitIndex];
        return "".concat(sizeFixed, " ").concat(unit);
      }
      /**
       * Finds an input element in a field container
       *
       * @method findInputField
       */

    }, {
      key: "findInputField",
      value: function findInputField() {
        return this.fieldContainer.querySelector('input[type="file"]');
      }
      /**
       * Opens a native file selector
       *
       * @method openFileSelector
       * @param {Event} event
       */

    }, {
      key: "openFileSelector",
      value: function openFileSelector(event) {
        event.preventDefault();
        this.inputField.click();
      }
      /**
       * Handles dropping files
       *
       * @method handleDropFiles
       * @param {Event} event
       */

    }, {
      key: "handleDropFile",
      value: function handleDropFile(event) {
        var file = event.dataTransfer.files[0];

        if (!this.checkCanDrop(file)) {
          return;
        }

        if (this.maxFileSize > 0 && file.size > this.maxFileSize) {
          return this.showFileSizeError();
        }

        var changeEvent = new Event('change');
        this.inputField.files = event.dataTransfer.files;
        this.inputField.dispatchEvent(changeEvent);
      }
      /**
       * Displays a file size error
       *
       * @method showFileSizeError
       */

    }, {
      key: "showFileSizeError",
      value: function showFileSizeError() {
        this.inputField.dispatchEvent(new CustomEvent('ez-invalid-file-size'));
      }
      /**
       * Checks whether a given file can be dropped onto a field
       *
       * @method checkCanDrop
       * @param {File} file
       * @returns {Boolean}
       */

    }, {
      key: "checkCanDrop",
      value: function checkCanDrop(file) {
        var accept = this.fileTypeAccept;

        if (!this.allowedFileTypes.length && !accept.length) {
          return true;
        }

        if (accept.length && accept.includes('/*')) {
          var pattern = accept.substr(0, accept.indexOf('*'));
          return file.type.includes(pattern);
        }

        return this.allowedFileTypes.includes(file.type);
      }
      /**
       * Checks if file size is an allowed limit
       *
       * @method handleInputChange
       * @param {Event} event
       */

    }, {
      key: "handleInputChange",
      value: function handleInputChange(event) {
        if (this.maxFileSize > 0 && event.currentTarget.files[0].size > this.maxFileSize) {
          return this.resetInputField();
        }

        this.fieldContainer.querySelector('.ez-field-edit__option--remove-media').checked = false;
        this.showPreview(event);
      }
      /**
       * Displays a file preview
       *
       * @method showPreview
       * @param {Event} [event]
       */

    }, {
      key: "showPreview",
      value: function showPreview(event) {
        var btnRemove = this.fieldContainer.querySelector(SELECTOR_BTN_REMOVE);
        var dropZone = this.fieldContainer.querySelector(SELECTOR_DATA);

        if (event) {
          this.loadDroppedFilePreview(event);
        }

        this.fieldContainer.querySelector(SELECTOR_PREVIEW).removeAttribute('hidden');
        dropZone.setAttribute('hidden', true);
        btnRemove.addEventListener('click', this.handleRemoveFile, false);
        dropZone.removeEventListener('drop', this.handleDropFile);
      }
      /**
       * Loads dropped file preview.
       * It should redefined in each class that extends this one.
       *
       * @method loadDroppedFilePreview
       * @param {Event} event
       */

    }, {
      key: "loadDroppedFilePreview",
      value: function loadDroppedFilePreview(event) {
        console.log('CUSTOMIZE RENDERING DROPPED FILE PREVIEW', event);
      }
      /**
       * Hides a file preview
       *
       * @method hidePreview
       */

    }, {
      key: "hidePreview",
      value: function hidePreview() {
        var btnRemove = this.fieldContainer.querySelector(SELECTOR_BTN_REMOVE);
        this.fieldContainer.querySelector(SELECTOR_DATA).removeAttribute('hidden');
        this.fieldContainer.querySelector(SELECTOR_PREVIEW).setAttribute('hidden', true);
        this.fieldContainer.classList.remove('is-invalid');
        this.fieldContainer.querySelectorAll('.ez-field-edit__error').forEach(function (element) {
          return element.remove();
        });
        btnRemove.removeEventListener('click', this.handleRemoveFile);
        this.initializeDropZone();
      }
      /**
       * Resets input field state
       *
       * @method resetInputField
       */

    }, {
      key: "resetInputField",
      value: function resetInputField() {
        var clonedInput = this.clonedInputField.cloneNode(true); // required to reset properly the input of file type properly

        this.inputField.parentNode.replaceChild(clonedInput, this.inputField);
        this.inputField = clonedInput;
        this.inputField.addEventListener('change', this.handleInputChange, false);
        this.fieldContainer.querySelector('.ez-field-edit__option--remove-media').checked = true;
        this.validator.reinit();
      }
      /**
       * Removes a file from input and hides a preview afterwards
       *
       * @method handleRemoveFile
       */

    }, {
      key: "handleRemoveFile",
      value: function handleRemoveFile(event) {
        event.preventDefault();
        this.resetInputField();
        this.hidePreview();
      }
      /**
       * Prevents from executing default actions
       *
       * @method preventDefaultAction
       * @param {Object} event
       */

    }, {
      key: "preventDefaultAction",
      value: function preventDefaultAction(event) {
        event.preventDefault();
        event.stopPropagation();
      }
      /**
       * Initializes drop zone event handlers
       *
       * @method initializeDropZone
       */

    }, {
      key: "initializeDropZone",
      value: function initializeDropZone() {
        var dropZone = this.fieldContainer.querySelector('.ez-field-edit__preview[hidden] + .ez-field-edit__data');

        if (dropZone) {
          dropZone.addEventListener('drop', this.handleDropFile, false);
        }
      }
      /**
       * Initializes the preview
       *
       * @method initializePreview
       */

    }, {
      key: "initializePreview",
      value: function initializePreview() {
        var preview = this.fieldContainer.querySelector('.ez-field-edit__preview');

        if (!preview.hasAttribute('hidden')) {
          this.showPreview();
        }
      }
      /**
       * Initializes the preview
       *
       * @method init
       */

    }, {
      key: "init",
      value: function init() {
        var _this = this;

        this.btnAdd = this.fieldContainer.querySelector('.ez-data-source__btn-add');
        this.btnAdd.addEventListener('click', this.openFileSelector, false);
        this.inputField.addEventListener('change', this.handleInputChange, false);
        window.addEventListener('drop', this.preventDefaultAction, false);
        window.addEventListener('dragover', this.preventDefaultAction, false);
        this.fieldContainer.addEventListener(this.showPreviewEventName, function () {
          return _this.showPreview();
        });
        this.initializeDropZone();
        this.initializePreview();
        this.validator.init();
      }
    }]);

    return BasePreviewField;
  }();

  eZ.addConfig('BasePreviewField', BasePreviewField);
})(window, window.document, window.eZ);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/base/multi-input-field.js":
/*!*************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/base/multi-input-field.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _excluded = ["containerSelectors"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

(function (global, doc, eZ) {
  var MultiInputFieldValidator = /*#__PURE__*/function (_eZ$BaseFieldValidato) {
    "use strict";

    _inherits(MultiInputFieldValidator, _eZ$BaseFieldValidato);

    var _super = _createSuper(MultiInputFieldValidator);

    function MultiInputFieldValidator(_ref) {
      var _this;

      var containerSelectors = _ref.containerSelectors,
          restProps = _objectWithoutProperties(_ref, _excluded);

      _classCallCheck(this, MultiInputFieldValidator);

      _this = _super.call(this, restProps);
      _this.containerSelectors = containerSelectors;
      return _this;
    }

    _createClass(MultiInputFieldValidator, [{
      key: "toggleInvalidState",
      value: function toggleInvalidState(isError, config, input) {
        var _this2 = this;

        _get(_getPrototypeOf(MultiInputFieldValidator.prototype), "toggleInvalidState", this).call(this, isError, config, input);

        this.containerSelectors.forEach(function (selector) {
          var invalidSelector = ".".concat(_this2.classInvalid);
          var container = input.closest(selector);
          var method = !!container.querySelector(invalidSelector) ? 'add' : 'remove';
          container.classList[method](_this2.classInvalid);
        });
      }
    }]);

    return MultiInputFieldValidator;
  }(eZ.BaseFieldValidator);

  eZ.addConfig('MultiInputFieldValidator', MultiInputFieldValidator);
})(window, window.document, window.eZ);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezauthor.js":
/*!***********************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezauthor.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

(function (global, doc, eZ) {
  var SELECTOR_REMOVE_AUTHOR = '.ez-btn--remove-author';
  var SELECTOR_AUTHOR = '.ez-data-source__author';
  var SELECTOR_FIELD = '.ez-field-edit--ezauthor';
  var SELECTOR_LABEL = '.ez-data-source__label';
  var SELECTOR_FIELD_EMAIL = '.ez-data-source__field--email';
  var SELECTOR_FIELD_NAME = '.ez-data-source__field--name';

  var EzAuthorValidator = /*#__PURE__*/function (_eZ$MultiInputFieldVa) {
    "use strict";

    _inherits(EzAuthorValidator, _eZ$MultiInputFieldVa);

    var _super = _createSuper(EzAuthorValidator);

    function EzAuthorValidator() {
      _classCallCheck(this, EzAuthorValidator);

      return _super.apply(this, arguments);
    }

    _createClass(EzAuthorValidator, [{
      key: "validateName",
      value:
      /**
       * Validates the 'name' input field value
       *
       * @method validateName
       * @param {Event} event
       * @returns {Object}
       * @memberof EzAuthorValidator
       */
      function validateName(event) {
        var isError = !event.target.value.trim() && event.target.required;
        var fieldNode = event.target.closest(SELECTOR_FIELD_NAME);
        var errorMessage = eZ.errors.emptyField.replace('{fieldName}', fieldNode.querySelector(SELECTOR_LABEL).innerHTML);
        return {
          isError: isError,
          errorMessage: errorMessage
        };
      }
      /**
       * Validates the 'email' input field value
       *
       * @method validateEmail
       * @param {Event} event
       * @returns {Object}
       * @memberof EzAuthorValidator
       */

    }, {
      key: "validateEmail",
      value: function validateEmail(event) {
        var input = event.currentTarget;
        var isRequired = input.required;
        var isEmpty = !input.value.trim();
        var isValid = eZ.errors.emailRegexp.test(input.value);
        var isError = isRequired && isEmpty || !isEmpty && !isValid;
        var label = input.closest(SELECTOR_FIELD_EMAIL).querySelector(SELECTOR_LABEL).innerHTML;
        var result = {
          isError: isError
        };

        if (isRequired && isEmpty) {
          result.errorMessage = eZ.errors.emptyField.replace('{fieldName}', label);
        } else if (!isEmpty && !isValid) {
          result.errorMessage = eZ.errors.invalidEmail;
        }

        return result;
      }
      /**
       * Sets an index to template.
       *
       * @method setIndex
       * @param {HTMLElement} parentNode
       * @param {String} template
       * @returns {String}
       * @memberof EzAuthorValidator
       */

    }, {
      key: "setIndex",
      value: function setIndex(parentNode, template) {
        return template.replace(/__index__/g, parentNode.dataset.nextAuthorId);
      }
      /**
       * Updates the disable state.
       *
       * @method updateDisabledState
       * @param {HTMLElement} parentNode
       * @memberof EzAuthorValidator
       */

    }, {
      key: "updateDisabledState",
      value: function updateDisabledState(parentNode) {
        var isEnabled = parentNode.querySelectorAll(SELECTOR_AUTHOR).length > 1;
        parentNode.querySelectorAll(SELECTOR_REMOVE_AUTHOR).forEach(function (btn) {
          if (isEnabled) {
            btn.removeAttribute('disabled');
          } else {
            btn.setAttribute('disabled', true);
          }
        });
      }
      /**
       * Removes an item.
       *
       * @method removeItem
       * @param {Event} event
       * @memberof EzAuthorValidator
       */

    }, {
      key: "removeItem",
      value: function removeItem(event) {
        var authorNode = event.target.closest(SELECTOR_FIELD);
        event.target.closest(SELECTOR_AUTHOR).remove();
        this.updateDisabledState(authorNode);
        this.reinit();
      }
      /**
       * Adds an item.
       *
       * @method addItem
       * @param {Event} event
       * @memberof EzAuthorValidator
       */

    }, {
      key: "addItem",
      value: function addItem(event) {
        var authorNode = event.target.closest(SELECTOR_FIELD);
        var template = authorNode.dataset.template;
        var node = event.target.closest('.ez-field-edit__data .ez-data-source');
        node.insertAdjacentHTML('beforeend', this.setIndex(authorNode, template));
        authorNode.dataset.nextAuthorId++;
        this.reinit();
        this.updateDisabledState(authorNode);
        eZ.helpers.tooltips.parse(node);
        eZ.helpers.tooltips.hideAll();
      }
      /**
       * Finds the nodes to add validation state
       *
       * @method findValidationStateNodes
       * @param {HTMLElement} fieldNode
       * @param {HTMLElement} input
       * @param {Array} selectors
       * @returns {Array}
       * @memberof EzAuthorValidator
       */

    }, {
      key: "findValidationStateNodes",
      value: function findValidationStateNodes(fieldNode, input, selectors) {
        var authorRow = input.closest(SELECTOR_AUTHOR);
        var nodes = [fieldNode, authorRow];
        return selectors.reduce(function (total, selector) {
          return total.concat(_toConsumableArray(authorRow.querySelectorAll(selector)));
        }, nodes);
      }
      /**
       * Finds the error containers
       *
       * @method findErrorContainers
       * @param {HTMLElement} fieldNode
       * @param {HTMLElement} input
       * @param {Array} selectors
       * @returns {Array}
       * @memberof EzAuthorValidator
       */

    }, {
      key: "findErrorContainers",
      value: function findErrorContainers(fieldNode, input, selectors) {
        var authorRow = input.closest(SELECTOR_AUTHOR);
        return selectors.reduce(function (total, selector) {
          return total.concat(_toConsumableArray(authorRow.querySelectorAll(selector)));
        }, []);
      }
      /**
       * Finds the existing error nodes
       *
       * @method findExistingErrorNodes
       * @param {HTMLElement} fieldNode
       * @param {HTMLElement} input
       * @param {Array} selectors
       * @returns {Array}
       * @memberof EzAuthorValidator
       */

    }, {
      key: "findExistingErrorNodes",
      value: function findExistingErrorNodes(fieldNode, input, selectors) {
        return selectors.reduce(function (total, selector) {
          return total.concat(_toConsumableArray(input.closest(SELECTOR_AUTHOR).querySelectorAll(selector)));
        }, []);
      }
      /**
       * Attaches event listeners based on a config.
       *
       * @method init
       * @memberof EzAuthorValidator
       */

    }, {
      key: "init",
      value: function init() {
        var _this = this;

        _get(_getPrototypeOf(EzAuthorValidator.prototype), "init", this).call(this);

        doc.querySelectorAll(this.fieldSelector).forEach(function (field) {
          return _this.updateDisabledState(field);
        });
      }
    }]);

    return EzAuthorValidator;
  }(eZ.MultiInputFieldValidator);

  var validator = new EzAuthorValidator({
    classInvalid: 'is-invalid',
    fieldSelector: SELECTOR_FIELD,
    containerSelectors: ['.ez-data-source__author', '.ez-field-edit--ezauthor'],
    eventsMap: [{
      selector: ".ez-data-source__author ".concat(SELECTOR_FIELD_NAME, " .ez-data-source__input"),
      eventName: 'blur',
      callback: 'validateName',
      invalidStateSelectors: [SELECTOR_FIELD_NAME, "".concat(SELECTOR_FIELD_NAME, " .ez-data-source__input"), "".concat(SELECTOR_FIELD_NAME, " .ez-data-source__label")],
      errorNodeSelectors: [SELECTOR_FIELD_NAME]
    }, {
      selector: ".ez-data-source__author ".concat(SELECTOR_FIELD_EMAIL, " .ez-data-source__input"),
      eventName: 'blur',
      callback: 'validateEmail',
      invalidStateSelectors: [SELECTOR_FIELD_EMAIL, "".concat(SELECTOR_FIELD_EMAIL, " .ez-data-source__input"), "".concat(SELECTOR_FIELD_EMAIL, " .ez-data-source__label")],
      errorNodeSelectors: [SELECTOR_FIELD_EMAIL]
    }, {
      isValueValidator: false,
      selector: SELECTOR_REMOVE_AUTHOR,
      eventName: 'click',
      callback: 'removeItem'
    }, {
      isValueValidator: false,
      selector: '.ez-btn--add-author',
      eventName: 'click',
      callback: 'addItem'
    }]
  });
  validator.init();
  eZ.addConfig('fieldTypeValidators', [validator], true);
})(window, window.document, window.eZ);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezbinaryfile.js":
/*!***************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezbinaryfile.js ***!
  \***************************************************************************************************************/
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

(function (global, doc, eZ) {
  var SELECTOR_FIELD = '.ez-field-edit--ezbinaryfile';
  var SELECTOR_LABEL_WRAPPER = '.ez-field-edit__label-wrapper';
  var SELECTOR_FILESIZE_NOTICE = '.ez-data-source__message--filesize';

  var EzBinaryFilePreviewField = /*#__PURE__*/function (_eZ$BasePreviewField) {
    "use strict";

    _inherits(EzBinaryFilePreviewField, _eZ$BasePreviewField);

    var _super = _createSuper(EzBinaryFilePreviewField);

    function EzBinaryFilePreviewField() {
      _classCallCheck(this, EzBinaryFilePreviewField);

      return _super.apply(this, arguments);
    }

    _createClass(EzBinaryFilePreviewField, [{
      key: "loadDroppedFilePreview",
      value:
      /**
       * Loads dropped file preview
       *
       * @param {Event} event
       */
      function loadDroppedFilePreview(event) {
        var preview = this.fieldContainer.querySelector('.ez-field-edit__preview');
        var nameContainer = preview.querySelector('.ez-field-edit-preview__file-name');
        var sizeContainer = preview.querySelector('.ez-field-edit-preview__file-size');
        var files = [].slice.call(event.target.files);
        var fileSize = this.formatFileSize(files[0].size);
        nameContainer.innerHTML = files[0].name;
        nameContainer.title = files[0].name;
        sizeContainer.innerHTML = fileSize;
        sizeContainer.title = fileSize;
        preview.querySelector('.ez-field-edit-preview__action--preview').href = URL.createObjectURL(files[0]);
      }
    }]);

    return EzBinaryFilePreviewField;
  }(eZ.BasePreviewField);

  var EzBinaryFileFieldValidator = /*#__PURE__*/function (_eZ$BaseFileFieldVali) {
    "use strict";

    _inherits(EzBinaryFileFieldValidator, _eZ$BaseFileFieldVali);

    var _super2 = _createSuper(EzBinaryFileFieldValidator);

    function EzBinaryFileFieldValidator() {
      _classCallCheck(this, EzBinaryFileFieldValidator);

      return _super2.apply(this, arguments);
    }

    _createClass(EzBinaryFileFieldValidator, [{
      key: "validateFileSize",
      value: function validateFileSize(event) {
        event.currentTarget.dispatchEvent(new CustomEvent('ez-invalid-file-size'));
        return {
          isError: false
        };
      }
    }]);

    return EzBinaryFileFieldValidator;
  }(eZ.BaseFileFieldValidator);

  doc.querySelectorAll(SELECTOR_FIELD).forEach(function (fieldContainer) {
    var validator = new EzBinaryFileFieldValidator({
      classInvalid: 'is-invalid',
      fieldContainer: fieldContainer,
      eventsMap: [{
        selector: "input[type=\"file\"]",
        eventName: 'change',
        callback: 'validateInput',
        errorNodeSelectors: [SELECTOR_LABEL_WRAPPER]
      }, {
        isValueValidator: false,
        selector: "input[type=\"file\"]",
        eventName: 'ez-invalid-file-size',
        callback: 'showFileSizeError',
        errorNodeSelectors: [SELECTOR_FILESIZE_NOTICE]
      }]
    });
    var previewField = new EzBinaryFilePreviewField({
      validator: validator,
      fieldContainer: fieldContainer
    });
    previewField.init();
    eZ.addConfig('fieldTypeValidators', [validator], true);
  });
})(window, window.document, window.eZ);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezboolean.js":
/*!************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezboolean.js ***!
  \************************************************************************************************************/
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

(function (global, doc, eZ) {
  var SELECTOR_FIELD = '.ez-field-edit--ezboolean';
  var SELECTOR_ERROR_NODE = '.ez-data-source';

  var EzBooleanValidator = /*#__PURE__*/function (_eZ$BaseFieldValidato) {
    "use strict";

    _inherits(EzBooleanValidator, _eZ$BaseFieldValidato);

    var _super = _createSuper(EzBooleanValidator);

    function EzBooleanValidator() {
      _classCallCheck(this, EzBooleanValidator);

      return _super.apply(this, arguments);
    }

    _createClass(EzBooleanValidator, [{
      key: "validateInput",
      value:
      /**
       * Validates the input field value
       *
       * @method validateInput
       * @param {Event} event
       * @returns {Object}
       * @memberof EzBooleanValidator
       */
      function validateInput(event) {
        var isError = !event.target.checked && event.target.required;
        var label = event.target.closest(SELECTOR_FIELD).querySelector('.ez-field-edit__label').innerHTML;
        var errorMessage = eZ.errors.emptyField.replace('{fieldName}', label);
        return {
          isError: isError,
          errorMessage: errorMessage
        };
      }
      /**
       * Updates the state of checkbox indicator.
       *
       * @method updateState
       * @param {Event} event
       * @memberof EzBooleanValidator
       */

    }, {
      key: "updateState",
      value: function updateState(event) {
        var methodName = event.target.checked ? 'add' : 'remove';
        event.target.closest('.ez-data-source__label').classList[methodName]('is-checked');
      }
    }]);

    return EzBooleanValidator;
  }(eZ.BaseFieldValidator);

  var validator = new EzBooleanValidator({
    classInvalid: 'is-invalid',
    fieldSelector: SELECTOR_FIELD,
    eventsMap: [{
      selector: '.ez-field-edit--ezboolean input',
      eventName: 'change',
      callback: 'validateInput',
      errorNodeSelectors: [SELECTOR_ERROR_NODE]
    }, {
      isValueValidator: false,
      selector: '.ez-field-edit--ezboolean input',
      eventName: 'change',
      callback: 'updateState'
    }]
  });
  validator.init();
  eZ.addConfig('fieldTypeValidators', [validator], true);
})(window, window.document, window.eZ);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezcountry.js":
/*!************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezcountry.js ***!
  \************************************************************************************************************/
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

(function (global, doc, eZ) {
  var SELECTOR_FIELD = '.ez-field-edit--ezcountry';
  var SELECTOR_SELECTED = '.ez-custom-dropdown__selection-info';
  var SELECTOR_SOURCE_INPUT = '.ez-data-source__input';
  var EVENT_VALUE_CHANGED = 'valueChanged';
  var SELECTOR_ERROR_NODE = '.ez-data-source';

  var EzCountryValidator = /*#__PURE__*/function (_eZ$BaseFieldValidato) {
    "use strict";

    _inherits(EzCountryValidator, _eZ$BaseFieldValidato);

    var _super = _createSuper(EzCountryValidator);

    function EzCountryValidator() {
      _classCallCheck(this, EzCountryValidator);

      return _super.apply(this, arguments);
    }

    _createClass(EzCountryValidator, [{
      key: "validateInput",
      value:
      /**
       * Validates the country field value
       *
       * @method validateInput
       * @param {Event} event
       * @returns {Object}
       * @memberof EzCountryValidator
       */
      function validateInput(event) {
        var fieldContainer = event.currentTarget.closest(SELECTOR_FIELD);
        var hasSelectedOptions = !!fieldContainer.querySelectorAll('.ez-custom-dropdown__selected-item').length;
        var isRequired = fieldContainer.classList.contains('ez-field-edit--required');
        var isError = isRequired && !hasSelectedOptions;
        var label = fieldContainer.querySelector('.ez-field-edit__label').innerHTML;
        var errorMessage = eZ.errors.emptyField.replace('{fieldName}', label);
        return {
          isError: isError,
          errorMessage: errorMessage
        };
      }
    }]);

    return EzCountryValidator;
  }(eZ.BaseFieldValidator);

  var validator = new EzCountryValidator({
    classInvalid: 'is-invalid',
    fieldSelector: SELECTOR_FIELD,
    eventsMap: [{
      selector: '.ez-data-source__input--ezcountry',
      eventName: EVENT_VALUE_CHANGED,
      callback: 'validateInput',
      errorNodeSelectors: [SELECTOR_ERROR_NODE],
      invalidStateSelectors: [SELECTOR_SELECTED]
    }]
  });
  validator.init();
  eZ.addConfig('fieldTypeValidators', [validator], true);
  doc.querySelectorAll(SELECTOR_FIELD).forEach(function (container) {
    var dropdown = new eZ.core.CustomDropdown({
      container: container,
      itemsContainer: container.querySelector('.ez-custom-dropdown__items'),
      sourceInput: container.querySelector(SELECTOR_SOURCE_INPUT)
    });
    dropdown.init();
  });
})(window, window.document, window.eZ);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezdate.js":
/*!*********************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezdate.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

(function (global, doc, eZ, flatpickr) {
  var SELECTOR_FIELD = '.ez-field-edit--ezdate';
  var SELECTOR_INPUT = '.ez-data-source__input:not(.flatpickr-input)';
  var SELECTOR_FLATPICKR_INPUT = '.flatpickr-input';
  var EVENT_VALUE_CHANGED = 'valueChanged';
  var SELECTOR_ERROR_NODE = '.ez-data-source';

  var EzDateValidator = /*#__PURE__*/function (_eZ$BaseFieldValidato) {
    "use strict";

    _inherits(EzDateValidator, _eZ$BaseFieldValidato);

    var _super = _createSuper(EzDateValidator);

    function EzDateValidator() {
      _classCallCheck(this, EzDateValidator);

      return _super.apply(this, arguments);
    }

    _createClass(EzDateValidator, [{
      key: "validateInput",
      value:
      /**
       * Validates the input
       *
       * @method validateInput
       * @param {Event} event
       * @returns {Object}
       * @memberof EzDateValidator
       */
      function validateInput(event) {
        var target = event.currentTarget;
        var isRequired = target.required;
        var isEmpty = !target.value.trim().length;
        var label = event.target.closest(this.fieldSelector).querySelector('.ez-field-edit__label').innerHTML;
        var isError = false;
        var errorMessage = '';

        if (isRequired && isEmpty) {
          isError = true;
          errorMessage = eZ.errors.emptyField.replace('{fieldName}', label);
        }

        return {
          isError: isError,
          errorMessage: errorMessage
        };
      }
    }]);

    return EzDateValidator;
  }(eZ.BaseFieldValidator);

  var validator = new EzDateValidator({
    classInvalid: 'is-invalid',
    fieldSelector: SELECTOR_FIELD,
    eventsMap: [{
      selector: "".concat(SELECTOR_FIELD, " ").concat(SELECTOR_INPUT),
      eventName: EVENT_VALUE_CHANGED,
      callback: 'validateInput',
      errorNodeSelectors: [SELECTOR_ERROR_NODE],
      invalidStateSelectors: [SELECTOR_FLATPICKR_INPUT]
    }, {
      selector: "".concat(SELECTOR_FIELD, " ").concat(SELECTOR_FLATPICKR_INPUT),
      eventName: 'blur',
      callback: 'validateInput',
      errorNodeSelectors: [SELECTOR_ERROR_NODE],
      invalidStateSelectors: [SELECTOR_FLATPICKR_INPUT]
    }]
  });
  validator.init();
  eZ.addConfig('fieldTypeValidators', [validator], true);
  var dateFields = doc.querySelectorAll(SELECTOR_FIELD);
  var dateConfig = {
    formatDate: function formatDate(date) {
      return eZ.helpers.timezone.formatFullDateTime(date, null, eZ.adminUiConfig.dateFormat.fullDate);
    }
  };

  var updateInputValue = function updateInputValue(sourceInput, date) {
    var event = new CustomEvent(EVENT_VALUE_CHANGED);

    if (!date.length) {
      sourceInput.value = '';
      sourceInput.dispatchEvent(event);
      return;
    }

    date = new Date(date[0]);
    date = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    sourceInput.value = Math.floor(date.getTime() / 1000);
    sourceInput.dispatchEvent(event);
  };

  var clearValue = function clearValue(sourceInput, flatpickrInstance, event) {
    event.preventDefault();
    flatpickrInstance.clear();
    sourceInput.dispatchEvent(new CustomEvent(EVENT_VALUE_CHANGED));
  };

  var initFlatPickr = function initFlatPickr(field) {
    var sourceInput = field.querySelector(SELECTOR_INPUT);
    var flatPickrInput = field.querySelector(SELECTOR_FLATPICKR_INPUT);
    var btnClear = field.querySelector('.ez-data-source__btn--clear-input');
    var defaultDate = null;

    if (sourceInput.value) {
      defaultDate = new Date(sourceInput.value * 1000);
      var actionType = sourceInput.dataset.actionType;

      if (actionType === 'create') {
        defaultDate.setTime(new Date().getTime());
      } else if (actionType === 'edit') {
        defaultDate.setTime(defaultDate.getTime());
      }

      updateInputValue(sourceInput, [defaultDate]);
    }

    var flatpickrInstance = flatpickr(flatPickrInput, _objectSpread(_objectSpread({}, dateConfig), {}, {
      onChange: updateInputValue.bind(null, sourceInput),
      defaultDate: defaultDate
    }));
    btnClear.addEventListener('click', clearValue.bind(null, sourceInput, flatpickrInstance), false);

    if (sourceInput.hasAttribute('required')) {
      flatPickrInput.setAttribute('required', true);
    }
  };

  dateFields.forEach(initFlatPickr);
})(window, window.document, window.eZ, window.flatpickr);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezdatetime.js":
/*!*************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezdatetime.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

(function (global, doc, eZ, flatpickr) {
  var SELECTOR_FIELD = '.ez-field-edit--ezdatetime';
  var SELECTOR_INPUT = '.ez-data-source__input[data-seconds]';
  var SELECTOR_FLATPICKR_INPUT = '.flatpickr-input';
  var EVENT_VALUE_CHANGED = 'valueChanged';
  var SELECTOR_ERROR_NODE = '.ez-data-source';
  var _eZ$helpers$timezone = eZ.helpers.timezone,
      convertDateToTimezone = _eZ$helpers$timezone.convertDateToTimezone,
      formatShortDateTime = _eZ$helpers$timezone.formatShortDateTime;
  var userTimezone = eZ.adminUiConfig.timezone;

  var EzDateTimeValidator = /*#__PURE__*/function (_eZ$BaseFieldValidato) {
    "use strict";

    _inherits(EzDateTimeValidator, _eZ$BaseFieldValidato);

    var _super = _createSuper(EzDateTimeValidator);

    function EzDateTimeValidator() {
      _classCallCheck(this, EzDateTimeValidator);

      return _super.apply(this, arguments);
    }

    _createClass(EzDateTimeValidator, [{
      key: "validateInput",
      value:
      /**
       * Validates the input
       *
       * @method validateInput
       * @param {Event} event
       * @returns {Object}
       * @memberof EzDateTimeValidator
       */
      function validateInput(event) {
        var target = event.currentTarget;
        var isRequired = target.required;
        var isEmpty = !target.value.trim().length;
        var label = event.target.closest(this.fieldSelector).querySelector('.ez-field-edit__label').innerHTML;
        var isError = false;
        var errorMessage = '';

        if (isRequired && isEmpty) {
          isError = true;
          errorMessage = eZ.errors.emptyField.replace('{fieldName}', label);
        }

        return {
          isError: isError,
          errorMessage: errorMessage
        };
      }
    }]);

    return EzDateTimeValidator;
  }(eZ.BaseFieldValidator);

  var validator = new EzDateTimeValidator({
    classInvalid: 'is-invalid',
    fieldSelector: SELECTOR_FIELD,
    eventsMap: [{
      selector: "".concat(SELECTOR_FIELD, " ").concat(SELECTOR_INPUT),
      eventName: EVENT_VALUE_CHANGED,
      callback: 'validateInput',
      errorNodeSelectors: [SELECTOR_ERROR_NODE],
      invalidStateSelectors: [SELECTOR_FLATPICKR_INPUT]
    }, {
      selector: "".concat(SELECTOR_FIELD, " ").concat(SELECTOR_FLATPICKR_INPUT),
      eventName: 'blur',
      callback: 'validateInput',
      errorNodeSelectors: [SELECTOR_ERROR_NODE],
      invalidStateSelectors: [SELECTOR_FLATPICKR_INPUT]
    }]
  });
  validator.init();
  eZ.addConfig('fieldTypeValidators', [validator], true);
  var datetimeFields = doc.querySelectorAll(SELECTOR_FIELD);
  var datetimeConfig = {
    enableTime: true,
    time_24hr: true,
    formatDate: function formatDate(date) {
      return formatShortDateTime(date, null);
    }
  };

  var updateInputValue = function updateInputValue(sourceInput, dates) {
    var event = new CustomEvent(EVENT_VALUE_CHANGED);

    if (!dates.length) {
      sourceInput.value = '';
      sourceInput.dispatchEvent(event);
      return;
    }

    var selectedDate = dates[0];
    var selectedDateWithUserTimezone = convertDateToTimezone(selectedDate, userTimezone, true);
    var timestamp = Math.floor(selectedDateWithUserTimezone.valueOf() / 1000);
    sourceInput.value = timestamp;
    sourceInput.dispatchEvent(event);
  };

  var clearValue = function clearValue(sourceInput, flatpickrInstance, event) {
    event.preventDefault();
    flatpickrInstance.clear();
    sourceInput.dispatchEvent(new CustomEvent(EVENT_VALUE_CHANGED));
  };

  var initFlatPickr = function initFlatPickr(field) {
    var sourceInput = field.querySelector(SELECTOR_INPUT);
    var flatPickrInput = field.querySelector(SELECTOR_FLATPICKR_INPUT);
    var btnClear = field.querySelector('.ez-data-source__btn--clear-input');
    var secondsEnabled = sourceInput.dataset.seconds === '1';
    var defaultDate = null;

    if (sourceInput.value) {
      var defaultDateWithUserTimezone = convertDateToTimezone(sourceInput.value * 1000);
      var browserTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      defaultDate = new Date(convertDateToTimezone(defaultDateWithUserTimezone, browserTimezone, true));
    }

    var flatpickrInstance = flatpickr(flatPickrInput, _objectSpread(_objectSpread({}, datetimeConfig), {}, {
      onChange: updateInputValue.bind(null, sourceInput),
      defaultDate: defaultDate,
      enableSeconds: secondsEnabled
    }));
    btnClear.addEventListener('click', clearValue.bind(null, sourceInput, flatpickrInstance), false);

    if (sourceInput.hasAttribute('required')) {
      flatPickrInput.setAttribute('required', true);
    }
  };

  datetimeFields.forEach(initFlatPickr);
})(window, window.document, window.eZ, window.flatpickr);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezemail.js":
/*!**********************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezemail.js ***!
  \**********************************************************************************************************/
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

(function (global, doc, eZ) {
  var SELECTOR_FIELD = '.ez-field-edit--ezemail';
  var SELECTOR_ERROR_NODE = '.ez-data-source';

  var EzEmailValidator = /*#__PURE__*/function (_eZ$BaseFieldValidato) {
    "use strict";

    _inherits(EzEmailValidator, _eZ$BaseFieldValidato);

    var _super = _createSuper(EzEmailValidator);

    function EzEmailValidator() {
      _classCallCheck(this, EzEmailValidator);

      return _super.apply(this, arguments);
    }

    _createClass(EzEmailValidator, [{
      key: "validateInput",
      value:
      /**
       * Validates the input
       *
       * @method validateInput
       * @param {Event} event
       * @returns {Object}
       * @memberof EzEmailValidator
       */
      function validateInput(event) {
        var input = event.currentTarget;
        var isRequired = input.required;
        var isEmpty = !input.value.trim();
        var isValid = eZ.errors.emailRegexp.test(input.value);
        var isError = isRequired && isEmpty || !isEmpty && !isValid;
        var label = input.closest(SELECTOR_FIELD).querySelector('.ez-field-edit__label').innerHTML;
        var result = {
          isError: isError
        };

        if (isRequired && isEmpty) {
          result.errorMessage = eZ.errors.emptyField.replace('{fieldName}', label);
        } else if (!isEmpty && !isValid) {
          result.errorMessage = eZ.errors.invalidEmail;
        }

        return result;
      }
    }]);

    return EzEmailValidator;
  }(eZ.BaseFieldValidator);

  var validator = new EzEmailValidator({
    classInvalid: 'is-invalid',
    fieldSelector: SELECTOR_FIELD,
    eventsMap: [{
      selector: '.ez-field-edit--ezemail input',
      eventName: 'blur',
      callback: 'validateInput',
      errorNodeSelectors: [SELECTOR_ERROR_NODE]
    }]
  });
  validator.init();
  eZ.addConfig('fieldTypeValidators', [validator], true);
})(window, window.document, window.eZ);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezfloat.js":
/*!**********************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezfloat.js ***!
  \**********************************************************************************************************/
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

(function (global, doc, eZ) {
  var SELECTOR_FIELD = '.ez-field-edit--ezfloat';
  var SELECTOR_ERROR_NODE = '.ez-data-source';

  var EzFloatValidator = /*#__PURE__*/function (_eZ$BaseFieldValidato) {
    "use strict";

    _inherits(EzFloatValidator, _eZ$BaseFieldValidato);

    var _super = _createSuper(EzFloatValidator);

    function EzFloatValidator() {
      _classCallCheck(this, EzFloatValidator);

      return _super.apply(this, arguments);
    }

    _createClass(EzFloatValidator, [{
      key: "validateFloat",
      value:
      /**
       * Validates the input
       *
       * @method validateFloat
       * @param {Event} event
       * @returns {Object}
       * @memberof EzFloatValidator
       */
      function validateFloat(event) {
        var isRequired = event.target.required;
        var value = +event.target.value;
        var isEmpty = !event.target.value && event.target.value !== '0';
        var isFloat = Number.isInteger(value) || value % 1 !== 0;
        var isLess = value < parseFloat(event.target.getAttribute('min'));
        var isGreater = value > parseFloat(event.target.getAttribute('max'));
        var isError = isEmpty && isRequired || !isFloat || isLess || isGreater;
        var label = event.target.closest(SELECTOR_FIELD).querySelector('.ez-field-edit__label').innerHTML;
        var result = {
          isError: isError
        };

        if (isEmpty) {
          result.errorMessage = eZ.errors.emptyField.replace('{fieldName}', label);
        } else if (!isFloat) {
          result.errorMessage = eZ.errors.isNotFloat.replace('{fieldName}', label);
        } else if (isLess) {
          result.errorMessage = eZ.errors.isLess.replace('{fieldName}', label).replace('{minValue}', event.target.getAttribute('min'));
        } else if (isGreater) {
          result.errorMessage = eZ.errors.isGreater.replace('{fieldName}', label).replace('{maxValue}', event.target.getAttribute('max'));
        }

        return result;
      }
    }]);

    return EzFloatValidator;
  }(eZ.BaseFieldValidator);

  var validator = new EzFloatValidator({
    classInvalid: 'is-invalid',
    fieldSelector: SELECTOR_FIELD,
    eventsMap: [{
      selector: '.ez-field-edit--ezfloat input',
      eventName: 'blur',
      callback: 'validateFloat',
      errorNodeSelectors: [SELECTOR_ERROR_NODE]
    }]
  });
  validator.init();
  eZ.addConfig('fieldTypeValidators', [validator], true);
})(window, window.document, window.eZ);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezgmaplocation.js":
/*!*****************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezgmaplocation.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

(function (global, doc, eZ, Leaflet) {
  var SELECTOR_FIELD = '.ez-field-edit--ezgmaplocation';
  var SELECTOR_ADDRESS_INPUT = '.ez-data-source__field--address .ez-data-source__input';
  var SELECTOR_LAT_FIELD = '.ez-data-source__field--latitude';
  var SELECTOR_LON_FIELD = '.ez-data-source__field--longitude';
  var SELECTOR_LAT_INPUT = '.ez-data-source__field--latitude .ez-data-source__input';
  var SELECTOR_LON_INPUT = '.ez-data-source__field--longitude .ez-data-source__input';
  var SELECTOR_LABEL_WRAPPER = '.ez-field-edit__label-wrapper';
  var SELECTOR_ADDRESS_ERROR_NODE = '.ez-data-source__field--address';
  var SELECTOR_LAT_ERROR_NODE = '.ez-data-source__field--latitude';
  var SELECTOR_LON_ERROR_NODE = '.ez-data-source__field--longitude';
  var EVENT_BLUR = 'blur';
  var EVENT_KEYUP = 'keyup';
  var EVENT_CANCEL_ERRORS = 'ez-cancel-errors';
  var EVENT_ADDRESS_NOT_FOUND = 'ez-address-not-found';
  var POSITION_TYPE_LONGITUDE = 'longitude';
  var POSITION_TYPE_LATITUDE = 'latitude';
  var VALIDATE_LONGITUDE = 'validateLongitude';
  var VALIDATE_LATITUDE = 'validateLatitude';
  var VALIDATE_ADDRESS = 'validateAddress';

  var EzGMapLocationValidator = /*#__PURE__*/function (_eZ$BaseFieldValidato) {
    "use strict";

    _inherits(EzGMapLocationValidator, _eZ$BaseFieldValidato);

    var _super = _createSuper(EzGMapLocationValidator);

    function EzGMapLocationValidator() {
      _classCallCheck(this, EzGMapLocationValidator);

      return _super.apply(this, arguments);
    }

    _createClass(EzGMapLocationValidator, [{
      key: "validateCoordInput",
      value:
      /**
       * Validates latitude/longitude input value
       *
       * @method validateCoordInput
       * @param {HTMLElement} input
       * @param {Object} range of coord input
       * @returns {Object}
       */
      function validateCoordInput(input, _ref) {
        var min = _ref.min,
            max = _ref.max;
        var value = parseFloat(input.value.replace(',', '.'));
        var result = {
          isError: false
        };
        var label = input.closest('.ez-data-source__field').querySelector('.ez-data-source__label').innerHTML;
        var isNumber = !isNaN(value);
        var isInRange = value <= max && value >= min;

        if (!input.required && isNumber && isInRange) {
          return result;
        }

        if (isNumber && !isInRange) {
          result.isError = true;
          result.errorMessage = eZ.errors.outOfRangeValue.replace('{fieldName}', label).replace('{min}', min).replace('{max}', max);
          return result;
        }

        if (input.required && !isNumber) {
          result.isError = true;
          result.errorMessage = eZ.errors.emptyField.replace('{fieldName}', label);
        }

        return result;
      }
      /**
       * Validates longitude input value
       *
       * @method validateLongitude
       * @param {Event} event
       * @returns {Object}
       */

    }, {
      key: "validateLongitude",
      value: function validateLongitude(event) {
        var lonResult = this.validateCoordInput(event.currentTarget, {
          min: -180,
          max: 180
        });

        if (lonResult.isError) {
          return lonResult;
        }

        var latInput = event.currentTarget.closest(SELECTOR_FIELD).querySelector(SELECTOR_LAT_INPUT);
        var latResult = this.validateCoordInput(latInput, {
          min: -90,
          max: 90
        });
        var isNativeEvent = event.type && (event.type === EVENT_BLUR || event.type === EVENT_KEYUP);
        var allEmptyOrFilledResult = this.checkAllFieldsEmptyOrFilled(latInput, event.currentTarget);
        var invalidLatitude = allEmptyOrFilledResult.invalidInputType === POSITION_TYPE_LATITUDE;

        if (latResult.isError || !isNativeEvent && invalidLatitude) {
          return false;
        } else if (!isNativeEvent && allEmptyOrFilledResult.invalidInputType === POSITION_TYPE_LONGITUDE) {
          lonResult.isError = true;
          lonResult.errorMessage = allEmptyOrFilledResult.errorMessage;
          return lonResult;
        } else {
          return lonResult;
        }
      }
      /**
       * Validates latitude input value
       *
       * @method validateLatitude
       * @param {Event} event
       * @returns {Object}
       */

    }, {
      key: "validateLatitude",
      value: function validateLatitude(event) {
        var latResult = this.validateCoordInput(event.currentTarget, {
          min: -90,
          max: 90
        });

        if (latResult.isError) {
          return latResult;
        }

        var lonInput = event.currentTarget.closest(SELECTOR_FIELD).querySelector(SELECTOR_LON_INPUT);
        var lonResult = this.validateCoordInput(lonInput, {
          min: -180,
          max: 180
        });
        var isNativeEvent = event.type && (event.type === EVENT_BLUR || event.type === EVENT_KEYUP);
        var allEmptyOrFilledResult = this.checkAllFieldsEmptyOrFilled(event.currentTarget, lonInput);
        var invalidLongitude = allEmptyOrFilledResult.invalidInputType === POSITION_TYPE_LONGITUDE;

        if (lonResult.isError || !isNativeEvent && invalidLongitude) {
          return false;
        } else if (!isNativeEvent && allEmptyOrFilledResult.invalidInputType === POSITION_TYPE_LATITUDE) {
          latResult.isError = true;
          latResult.errorMessage = allEmptyOrFilledResult.errorMessage;
          return latResult;
        } else {
          return latResult;
        }
      }
      /**
       * Checks whether both longitude input field and latitude input field are filled or empty.
       *
       * @method checkAllFieldsEmptyOrFilled
       * @param {HTMLElement} latInput latitude input DOM node
       * @param {HTMLElement} lonInput longitude input DOM node
       * @returns {Object}
       */

    }, {
      key: "checkAllFieldsEmptyOrFilled",
      value: function checkAllFieldsEmptyOrFilled(latInput, lonInput) {
        var lonInputFilled = lonInput.value.trim().length;
        var latInputFilled = latInput.value.trim().length;
        var lonInputFilledlatInputEmpty = lonInputFilled && !latInputFilled;
        var latInputFilledlonInputEmpty = !lonInputFilled && latInputFilled;
        var errorMessage = null;
        var invalidInputType = null;

        if (lonInputFilledlatInputEmpty) {
          errorMessage = eZ.errors.provideLatitudeValue;
          invalidInputType = POSITION_TYPE_LATITUDE;
        } else if (latInputFilledlonInputEmpty) {
          errorMessage = eZ.errors.provideLongitudeValue;
          invalidInputType = POSITION_TYPE_LONGITUDE;
        }

        return {
          isError: lonInputFilledlatInputEmpty || latInputFilledlonInputEmpty,
          invalidInputType: invalidInputType,
          errorMessage: errorMessage
        };
      }
      /**
       * Validates longitude input value after clicking "Enter" key
       *
       * @method validateLongitudeOnEnter
       * @param {Event} event
       * @returns {Object}
       */

    }, {
      key: "validateLongitudeOnEnter",
      value: function validateLongitudeOnEnter(event) {
        event.preventDefault();
        event.stopPropagation();

        if (event.keyCode === 13) {
          return this.validateLongitude(event);
        }
        /**
         * If is not a Tab or Shift + Tab key set.
         *
         * When in the longitude field and after pressing the Tab or Shift + Tab key,
         * the keyup event fires on a latitude input field instead of a latitude input field.
         * It prevents such behaviour. The field will be validated on blur event.
         */


        if (event.keyCode !== 9 && event.keyCode !== 16) {
          return {
            isError: false
          };
        }
      }
      /**
       * Validates Latitude input value after clicking "Enter" key
       *
       * @method validateLatitudeOnEnter
       * @param {Event} event
       * @returns {Object}
       */

    }, {
      key: "validateLatitudeOnEnter",
      value: function validateLatitudeOnEnter(event) {
        event.preventDefault();
        event.stopPropagation();

        if (event.keyCode === 13) {
          return this.validateLatitude(event);
        }
        /**
         * If is not a Tab or Shift + Tab key set.
         *
         * When in the latitude field and after pressing the Tab or Shift + Tab key,
         * the keyup event fires on a longitude input field instead of a latitude input field.
         * It prevents such behaviour. The field will be validated on blur event.
         */


        if (event.keyCode !== 9 && event.keyCode !== 16) {
          return {
            isError: false
          };
        }
      }
      /**
       * Displays address not found error
       *
       * @method showNotFoundError
       * @returns {Object}
       */

    }, {
      key: "showNotFoundError",
      value: function showNotFoundError() {
        return {
          isError: true,
          errorMessage: eZ.errors.addressNotFound
        };
      }
      /**
       * Validates the address input value.
       *
       * @method validateAddress
       * @param {Event} event
       * @returns {Object}
       */

    }, {
      key: "validateAddress",
      value: function validateAddress(event) {
        var field = event.currentTarget.closest(SELECTOR_FIELD);
        var latInput = field.querySelector(SELECTOR_LAT_INPUT);
        var lonInput = field.querySelector(SELECTOR_LON_INPUT);

        if (!event.currentTarget.value.trim().length) {
          return {
            isError: false
          };
        }

        if (!latInput.value.trim().length || !lonInput.value.trim().length) {
          return {
            isError: true,
            errorMessage: eZ.errors.addressNotFound
          };
        }

        return {
          isError: false
        };
      }
      /**
       * Validates the lanitude input field on demand
       *
       * @method validateLatitudeOnDemand
       * @returns {Object} hash with 'result' and 'config' keys
       */

    }, {
      key: "validateLatitudeOnDemand",
      value: function validateLatitudeOnDemand() {
        var container = this.getFieldTypeContainer(doc);
        var latitudeInputConfig = this.eventsMap.find(function (eventConfig) {
          return eventConfig.callback === VALIDATE_LATITUDE;
        });
        return {
          result: this.validateLatitude({
            currentTarget: container.querySelector(latitudeInputConfig.selector)
          }),
          config: latitudeInputConfig
        };
      }
      /**
       * Validates the longitude input field on demand
       *
       * @method validateLongitudeOnDemand
       * @returns {Object} hash with 'result' and 'config' keys
       */

    }, {
      key: "validateLongitudeOnDemand",
      value: function validateLongitudeOnDemand() {
        var container = this.getFieldTypeContainer(doc);
        var longitudeInputConfig = this.eventsMap.find(function (eventConfig) {
          return eventConfig.callback === VALIDATE_LONGITUDE;
        });
        return {
          result: this.validateLongitude({
            currentTarget: container.querySelector(longitudeInputConfig.selector)
          }),
          config: longitudeInputConfig
        };
      }
      /**
       * Creates a hash with fields validation results and invalid state selectors
       *
       * @method buildCoordFieldsValidationHash
       * @param {Array} fieldsData
       * @returns {Object}
       */

    }, {
      key: "buildCoordFieldsValidationHash",
      value: function buildCoordFieldsValidationHash(fieldsData) {
        return {
          validationResults: fieldsData.map(function (field) {
            return field.result;
          }),
          invalidStateSelectors: fieldsData.reduce(function (total, field) {
            return [].concat(_toConsumableArray(total), _toConsumableArray(field.config.invalidStateSelectors));
          }, [])
        };
      }
      /**
       * Validates the field
       *
       * @method validateField
       * @param {Object} config
       * @param {Event} event
       */

    }, {
      key: "validateField",
      value: function validateField(config, event) {
        var validationResult = this[config.callback](event);

        if (!validationResult) {
          return;
        }

        this.toggleInvalidState(validationResult.isError, config, event.target);
        this.toggleErrorMessage(validationResult, config, event.target);

        if (validationResult.isError) {
          var errorMessage = Translator.trans(
          /* @Desc("Area below needs correction") */
          'ezmaplocation.create.message.error', {}, 'fieldtypes_edit');
          var allFieldsResult = {
            isError: true,
            errorMessage: errorMessage
          };
          config.errorNodeSelectors = [SELECTOR_LABEL_WRAPPER];
          this.toggleInvalidState(true, config, event.target);
          this.toggleErrorMessage(allFieldsResult, config, event.target);
        }

        return validationResult;
      }
    }]);

    return EzGMapLocationValidator;
  }(eZ.BaseFieldValidator);

  var validator = new EzGMapLocationValidator({
    classInvalid: 'is-invalid',
    fieldSelector: SELECTOR_FIELD,
    eventsMap: [{
      isValueValidator: false,
      selector: "".concat(SELECTOR_FIELD, " ").concat(SELECTOR_ADDRESS_INPUT),
      eventName: EVENT_ADDRESS_NOT_FOUND,
      callback: 'showNotFoundError',
      errorNodeSelectors: [SELECTOR_LABEL_WRAPPER]
    }, {
      isValueValidator: false,
      selector: "".concat(SELECTOR_FIELD, " ").concat(SELECTOR_ADDRESS_INPUT),
      eventName: EVENT_CANCEL_ERRORS,
      callback: 'cancelErrors',
      errorNodeSelectors: [SELECTOR_LABEL_WRAPPER]
    }, {
      selector: "".concat(SELECTOR_FIELD, " ").concat(SELECTOR_ADDRESS_INPUT),
      eventName: 'checkValidity',
      callback: VALIDATE_ADDRESS,
      errorNodeSelectors: [SELECTOR_ADDRESS_ERROR_NODE]
    }, {
      selector: "".concat(SELECTOR_FIELD, " ").concat(SELECTOR_LON_INPUT),
      positionType: POSITION_TYPE_LONGITUDE,
      eventName: EVENT_BLUR,
      callback: VALIDATE_LONGITUDE,
      errorNodeSelectors: [SELECTOR_LON_ERROR_NODE],
      invalidStateSelectors: [SELECTOR_LON_FIELD]
    }, {
      isValueValidator: false,
      selector: "".concat(SELECTOR_FIELD, " ").concat(SELECTOR_LON_INPUT),
      eventName: EVENT_KEYUP,
      callback: 'validateLongitudeOnEnter',
      errorNodeSelectors: [SELECTOR_LON_ERROR_NODE],
      invalidStateSelectors: [SELECTOR_LON_FIELD]
    }, {
      isValueValidator: false,
      selector: "".concat(SELECTOR_FIELD, " ").concat(SELECTOR_LON_INPUT),
      eventName: EVENT_CANCEL_ERRORS,
      callback: 'cancelErrors',
      errorNodeSelectors: [SELECTOR_LON_ERROR_NODE],
      invalidStateSelectors: [SELECTOR_LON_FIELD]
    }, {
      selector: "".concat(SELECTOR_FIELD, " ").concat(SELECTOR_LAT_INPUT),
      positionType: POSITION_TYPE_LATITUDE,
      eventName: EVENT_BLUR,
      callback: VALIDATE_LATITUDE,
      errorNodeSelectors: [SELECTOR_LAT_ERROR_NODE],
      invalidStateSelectors: [SELECTOR_LAT_FIELD]
    }, {
      isValueValidator: false,
      selector: "".concat(SELECTOR_FIELD, " ").concat(SELECTOR_LAT_INPUT),
      eventName: EVENT_KEYUP,
      callback: 'validateLatitudeOnEnter',
      errorNodeSelectors: [SELECTOR_LAT_ERROR_NODE],
      invalidStateSelectors: [SELECTOR_LAT_FIELD]
    }, {
      isValueValidator: false,
      selector: "".concat(SELECTOR_FIELD, " ").concat(SELECTOR_LAT_INPUT),
      eventName: EVENT_CANCEL_ERRORS,
      callback: 'cancelErrors',
      errorNodeSelectors: [SELECTOR_LAT_ERROR_NODE],
      invalidStateSelectors: [SELECTOR_LAT_FIELD]
    }]
  });
  validator.init();
  /**
   * Searches geo coords by a provided address
   *
   * @function searchByAddress
   * @param {String} value
   * @param {Function} foundCallback
   * @param {Function} notFoundCallback
   */

  var searchByAddress = function searchByAddress(value, foundCallback, notFoundCallback) {
    fetch("https://nominatim.openstreetmap.org/search?format=json&q=".concat(global.encodeURI(value), "&zoom=15")).then(function (response) {
      return response.json();
    }).then(function (locations) {
      if (locations.length) {
        foundCallback(locations[0].lat, locations[0].lon);
      } else {
        notFoundCallback();
      }
    })["catch"](eZ.helpers.notification.showErrorNotification);
  };
  /**
   * Disables default action of an event
   *
   * @function disableDefaultAction
   * @param {Event} event
   */


  var disableDefaultAction = function disableDefaultAction(event) {
    return event.preventDefault();
  };
  /**
   * Prevents form submission
   *
   * @function preventFormSubmission
   * @param {Event} event
   */


  var preventFormSubmission = function preventFormSubmission(event) {
    return event.currentTarget.closest('form').addEventListener('submit', disableDefaultAction, false);
  };
  /**
   * Enables form submission
   *
   * @function enableFormSubmission
   * @param {Event} event
   */


  var enableFormSubmission = function enableFormSubmission(event) {
    return event.currentTarget.closest('form').removeEventListener('submit', disableDefaultAction);
  };
  /**
   * Corrects coord input field notation by replacing "," with "."
   *
   * @function correctNotation
   * @param {Event} event
   */


  var correctNotation = function correctNotation(event) {
    return event.currentTarget.value = event.currentTarget.value.replace(',', '.');
  };

  doc.querySelectorAll(SELECTOR_FIELD).forEach(function (field) {
    var addressInput = field.querySelector(SELECTOR_ADDRESS_INPUT);
    var longitudeInput = field.querySelector(SELECTOR_LON_INPUT);
    var latitudeInput = field.querySelector(SELECTOR_LAT_INPUT);
    var areCoordsSet = !!longitudeInput.value.length && !!latitudeInput.value.length;
    var locateMeBtn = field.querySelector('.ez-data-source__locate-me .btn');
    var searchBtn = field.querySelector('.btn--search-by-address');
    var mapConfig = {
      zoom: areCoordsSet ? 15 : 1,
      center: areCoordsSet ? [parseFloat(latitudeInput.value), parseFloat(longitudeInput.value)] : [0, 0]
    };
    var map = Leaflet.map(field.querySelector('.ez-data-source__map'), mapConfig);
    longitudeInput.value = longitudeInput.dataset.value.replace(',', '.');
    latitudeInput.value = latitudeInput.dataset.value.replace(',', '.');
    /**
     * Updates map state to show location with provided coordinates
     *
     * @function updateMapState
     * @param {Number} lat
     * @param {Number} lon
     */

    var updateMapState = function updateMapState(lat, lon) {
      map.setView(Leaflet.latLng(lat, lon), 15);
      longitudeInput.value = lon;
      latitudeInput.value = lat;

      if (locationMarker) {
        map.removeLayer(locationMarker);
      }

      locationMarker = Leaflet.marker([lat, lon], {
        icon: new Leaflet.Icon.Default({
          imagePath: '/bundles/ezplatformadminuiassets/vendors/leaflet/dist/images/'
        })
      }).addTo(map);
      addressInput.dispatchEvent(new CustomEvent(EVENT_CANCEL_ERRORS));
      longitudeInput.dispatchEvent(new CustomEvent(EVENT_CANCEL_ERRORS));
      latitudeInput.dispatchEvent(new CustomEvent(EVENT_CANCEL_ERRORS));
    };
    /**
     * Displays address not found error
     *
     * @function showAddressNotFoundError
     */


    var showAddressNotFoundError = function showAddressNotFoundError() {
      return addressInput.dispatchEvent(new CustomEvent(EVENT_ADDRESS_NOT_FOUND));
    };
    /**
     * Handles address input actions
     *
     * @function handleAddressInput
     * @param {Event} event
     */


    var handleAddressInput = function handleAddressInput(event) {
      event.preventDefault();
      event.stopPropagation();

      if (event.keyCode === 13 || event.type === 'click') {
        searchByAddress(addressInput.value, updateMapState, showAddressNotFoundError);
      }
    };
    /**
     * Handles latitude input actions
     *
     * @function handleLatitudeInput
     * @param {Event} event
     */


    var handleLatitudeInput = function handleLatitudeInput(event) {
      event.preventDefault();
      event.stopPropagation();

      if (event.keyCode !== 13) {
        return;
      }

      if (!longitudeInput.value.trim().length) {
        longitudeInput.dispatchEvent(new Event(EVENT_BLUR));
        return;
      }

      updateMapState(parseFloat(latitudeInput.value), parseFloat(longitudeInput.value));
    };
    /**
     * Handles longitude input actions
     *
     * @function handleLongitudeInput
     * @param {Event} event
     */


    var handleLongitudeInput = function handleLongitudeInput(event) {
      event.preventDefault();
      event.stopPropagation();

      if (event.keyCode !== 13) {
        return;
      }

      if (!latitudeInput.value.trim().length) {
        latitudeInput.dispatchEvent(new Event(EVENT_BLUR));
        return;
      }

      updateMapState(parseFloat(latitudeInput.value), parseFloat(longitudeInput.value));
    };
    /**
     * Handles clicking on a map
     *
     * @function handleOnMapClick
     * @param {Event} event
     */


    var handleOnMapClick = function handleOnMapClick(event) {
      var latlng = event.latlng.wrap();
      updateMapState(latlng.lat, latlng.lng);
    };
    /**
     * IMPORTANT!
     * Requires a secure domain (HTTPS)
     *
     * Sets a current location on a map
     *
     * @function setCurrentLocation
     * @param {Event} event
     */


    var setCurrentLocation = function setCurrentLocation(event) {
      event.preventDefault();
      event.stopPropagation();
      navigator.geolocation.getCurrentPosition(function (position) {
        return updateMapState(position.coords.latitude, position.coords.longitude);
      }, function (error) {
        return eZ.helpers.notification.showErrorNotification(error);
      });
    };

    var locationMarker;
    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    if (areCoordsSet) {
      updateMapState(mapConfig.center[0], mapConfig.center[1]);
    }

    addressInput.addEventListener(EVENT_KEYUP, handleAddressInput, false);
    addressInput.addEventListener('focus', preventFormSubmission, false);
    addressInput.addEventListener(EVENT_BLUR, enableFormSubmission, false);
    searchBtn.addEventListener('click', handleAddressInput, false);
    longitudeInput.addEventListener(EVENT_KEYUP, handleLongitudeInput, false);
    longitudeInput.addEventListener(EVENT_BLUR, correctNotation, false);
    latitudeInput.addEventListener(EVENT_KEYUP, handleLatitudeInput, false);
    latitudeInput.addEventListener(EVENT_BLUR, correctNotation, false);
    map.on('click', handleOnMapClick);

    if (global.location.protocol === 'https:') {
      locateMeBtn.addEventListener('click', setCurrentLocation, false);
    } else {
      locateMeBtn.setAttribute('disabled', 'disabled');
    }
  });
  eZ.addConfig('fieldTypeValidators', [validator], true);
})(window, window.document, window.eZ, window.L);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezimage.js":
/*!**********************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezimage.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

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

(function (global, doc, eZ) {
  var SELECTOR_FIELD = '.ez-field-edit--ezimage';
  var SELECTOR_INPUT_FILE = 'input[type="file"]';
  var SELECTOR_LABEL_WRAPPER = '.ez-field-edit__label-wrapper';
  var SELECTOR_FILESIZE_NOTICE = '.ez-data-source__message--filesize';
  var SELECTOR_ALT_WRAPPER = '.ez-field-edit-preview__image-alt';
  var SELECTOR_INPUT_ALT = '.ez-field-edit-preview__image-alt .ez-data-source__input';
  var EVENT_CANCEL_ERROR = 'ez-cancel-errors';

  var EzImageFilePreviewField = /*#__PURE__*/function (_eZ$BasePreviewField) {
    "use strict";

    _inherits(EzImageFilePreviewField, _eZ$BasePreviewField);

    var _super = _createSuper(EzImageFilePreviewField);

    function EzImageFilePreviewField() {
      _classCallCheck(this, EzImageFilePreviewField);

      return _super.apply(this, arguments);
    }

    _createClass(EzImageFilePreviewField, [{
      key: "getImageUrl",
      value:
      /**
       * Gets a temporary image URL
       *
       * @method getImageUrl
       * @param {File} file
       * @param {Function} callback the callback returns a retrieved file's temporary URL
       */
      function getImageUrl(file, callback) {
        var reader = new FileReader();

        reader.onload = function (event) {
          return callback(event.target.result);
        };

        reader.readAsDataURL(file);
      }
      /**
       * Loads dropped file preview.
       * It should redefined in each class that extends this one.
       *
       * @method loadDroppedFilePreview
       * @param {Event} event
       */

    }, {
      key: "loadDroppedFilePreview",
      value: function loadDroppedFilePreview(event) {
        var preview = this.fieldContainer.querySelector('.ez-field-edit__preview');
        var image = preview.querySelector('.ez-field-edit-preview__media');
        var nameContainer = preview.querySelector('.ez-field-edit-preview__file-name');
        var sizeContainer = preview.querySelector('.ez-field-edit-preview__file-size');
        var files = [].slice.call(event.target.files);
        var fileSize = this.formatFileSize(files[0].size);
        this.getImageUrl(files[0], function (url) {
          return image.setAttribute('src', url);
        });
        nameContainer.innerHTML = files[0].name;
        nameContainer.title = files[0].name;
        sizeContainer.innerHTML = fileSize;
        sizeContainer.title = fileSize;
        preview.querySelector('.ez-field-edit-preview__action--preview').href = URL.createObjectURL(files[0]);
        this.fieldContainer.querySelector(SELECTOR_INPUT_ALT).dispatchEvent(new CustomEvent(EVENT_CANCEL_ERROR));
      }
    }]);

    return EzImageFilePreviewField;
  }(eZ.BasePreviewField);

  var EzImageFieldValidator = /*#__PURE__*/function (_eZ$BaseFileFieldVali) {
    "use strict";

    _inherits(EzImageFieldValidator, _eZ$BaseFileFieldVali);

    var _super2 = _createSuper(EzImageFieldValidator);

    function EzImageFieldValidator() {
      _classCallCheck(this, EzImageFieldValidator);

      return _super2.apply(this, arguments);
    }

    _createClass(EzImageFieldValidator, [{
      key: "toggleInvalidState",
      value: function toggleInvalidState(isError, config, input) {
        _get(_getPrototypeOf(EzImageFieldValidator.prototype), "toggleInvalidState", this).call(this, isError, config, input);

        var container = this.getFieldTypeContainer(input.closest(this.fieldSelector));
        var method = !!container.querySelector(".".concat(this.classInvalid)) ? 'add' : 'remove';
        container.classList[method](this.classInvalid);
      }
    }, {
      key: "validateFileSize",
      value: function validateFileSize(event) {
        event.currentTarget.dispatchEvent(new CustomEvent('ez-invalid-file-size'));
        return {
          isError: false
        };
      }
      /**
       * Validates the alternative text input
       *
       * @method validateAltInput
       * @param {Event} event
       * @returns {Object}
       * @memberof EzStringValidator
       */

    }, {
      key: "validateAltInput",
      value: function validateAltInput(event) {
        var isRequired = event.target.required;
        var isEmpty = !event.target.value;
        var isError = isEmpty && isRequired;
        var label = event.target.closest(SELECTOR_ALT_WRAPPER).querySelector('.ez-data-source__label').innerHTML;
        var result = {
          isError: isError
        };

        if (isEmpty) {
          result.errorMessage = eZ.errors.emptyField.replace('{fieldName}', label);
        }

        return result;
      }
    }]);

    return EzImageFieldValidator;
  }(eZ.BaseFileFieldValidator);

  doc.querySelectorAll(SELECTOR_FIELD).forEach(function (fieldContainer) {
    var validator = new EzImageFieldValidator({
      classInvalid: 'is-invalid',
      fieldContainer: fieldContainer,
      eventsMap: [{
        selector: "".concat(SELECTOR_INPUT_FILE),
        eventName: 'change',
        callback: 'validateInput',
        errorNodeSelectors: [SELECTOR_LABEL_WRAPPER]
      }, {
        selector: SELECTOR_INPUT_ALT,
        eventName: 'blur',
        callback: 'validateAltInput',
        invalidStateSelectors: ['.ez-data-source__field--alternativeText'],
        errorNodeSelectors: ["".concat(SELECTOR_ALT_WRAPPER, " .ez-data-source__label-wrapper")]
      }, {
        isValueValidator: false,
        selector: "".concat(SELECTOR_INPUT_FILE),
        eventName: 'ez-invalid-file-size',
        callback: 'showFileSizeError',
        errorNodeSelectors: [SELECTOR_FILESIZE_NOTICE]
      }, {
        isValueValidator: false,
        selector: SELECTOR_INPUT_ALT,
        eventName: EVENT_CANCEL_ERROR,
        callback: 'cancelErrors',
        invalidStateSelectors: ['.ez-data-source__field--alternativeText'],
        errorNodeSelectors: ["".concat(SELECTOR_ALT_WRAPPER, " .ez-data-source__label-wrapper")]
      }]
    });
    var previewField = new EzImageFilePreviewField({
      validator: validator,
      fieldContainer: fieldContainer,
      fileTypeAccept: fieldContainer.querySelector(SELECTOR_INPUT_FILE).accept
    });
    previewField.init();
    eZ.addConfig('fieldTypeValidators', [validator], true);
  });
})(window, window.document, window.eZ);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezimageasset.js":
/*!***************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezimageasset.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

(function (global, doc, eZ, React, ReactDOM, Translator, Routing) {
  var SELECTOR_FIELD = '.ez-field-edit--ezimageasset';
  var SELECTOR_INPUT_FILE = 'input[type="file"]';
  var SELECTOR_INPUT_DESTINATION_CONTENT_ID = '.ez-data-source__destination-content-id';
  var SELECTOR_LABEL_WRAPPER = '.ez-field-edit__label-wrapper';
  var SELECTOR_FILESIZE_NOTICE = '.ez-data-source__message--filesize';
  var token = doc.querySelector('meta[name="CSRF-Token"]').content;
  var showErrorNotification = eZ.helpers.notification.showErrorNotification;
  var showSuccessNotification = eZ.helpers.notification.showSuccessNotification;
  var getJsonFromResponse = eZ.helpers.request.getJsonFromResponse;
  var imageAssetMapping = eZ.adminUiConfig.imageAssetMapping;

  var EzImageAssetPreviewField = /*#__PURE__*/function (_eZ$BasePreviewField) {
    "use strict";

    _inherits(EzImageAssetPreviewField, _eZ$BasePreviewField);

    var _super = _createSuper(EzImageAssetPreviewField);

    function EzImageAssetPreviewField(props) {
      var _this;

      _classCallCheck(this, EzImageAssetPreviewField);

      _this = _super.call(this, props);
      _this.showPreviewEventName = 'ez-image-asset:show-preview';
      return _this;
    }
    /**
     * Creates a new Image Asset
     *
     * @method createAsset
     * @param {File} file
     * @param {String} languageCode
     */


    _createClass(EzImageAssetPreviewField, [{
      key: "createAsset",
      value: function createAsset(file, languageCode) {
        var assetCreateUri = Routing.generate('ezplatform.asset.upload_image');
        var form = new FormData();
        form.append('languageCode', languageCode);
        form.append('file', file);
        var options = {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'X-CSRF-Token': token
          },
          body: form,
          mode: 'same-origin',
          credentials: 'same-origin'
        };
        this.toggleLoading(true);
        fetch(assetCreateUri, options).then(getJsonFromResponse).then(eZ.helpers.request.handleRequest).then(this.onAssetCreateSuccess.bind(this))["catch"](this.onAssetCreateFailure.bind(this));
      }
      /**
       * Handle a successfully created Image Asset
       *
       * @method onAssetCreateSuccess
       * @param {Object} response
       */

    }, {
      key: "onAssetCreateSuccess",
      value: function onAssetCreateSuccess(response) {
        var destinationContent = response.destinationContent;
        this.updateData(destinationContent.id, destinationContent.name, destinationContent.locationId, response.value);
        this.toggleLoading(false);
        showSuccessNotification(Translator.trans(
        /* @Desc("The image has been published and can now be reused") */
        'ezimageasset.create.message.success', {}, 'fieldtypes_edit'));
      }
      /**
       * Handle a failure while creating Image Asset
       *
       * @method onAssetCreateFailure
       */

    }, {
      key: "onAssetCreateFailure",
      value: function onAssetCreateFailure(error) {
        var message = Translator.trans(
        /* @Desc("Error while creating Image Asset: %error%") */
        'ezimageasset.create.message.error', {
          error: error.message
        }, 'fieldtypes_edit');
        this.toggleLoading(false);
        showErrorNotification(message);
      }
      /**
       * Loads selected Image Asset
       *
       * @method loadAsset
       * @param {Object} response
       */

    }, {
      key: "loadAsset",
      value: function loadAsset(response) {
        var imageField = response.ContentInfo.Content.CurrentVersion.Version.Fields.field.find(function (field) {
          return field.fieldDefinitionIdentifier === imageAssetMapping['contentFieldIdentifier'];
        });
        this.updateData(response.ContentInfo.Content._id, response.ContentInfo.Content.TranslatedName, response.id, imageField.fieldValue);
      }
      /**
       * Toggle visibility of the loading spinner
       *
       * @method toggleLoading
       * @param {boolean} show
       */

    }, {
      key: "toggleLoading",
      value: function toggleLoading(show) {
        this.fieldContainer.classList.toggle('ez-field-edit--is-preview-loading', show);
      }
      /**
       * Updates Image Asset preview data
       *
       * @method updateData
       * @param {Number} destinationContentId
       * @param {String} destinationContentName
       * @param {Number} destinationLocationId
       * @param {Object} image
       */

    }, {
      key: "updateData",
      value: function updateData(destinationContentId, destinationContentName, destinationLocationId, image) {
        var preview = this.fieldContainer.querySelector('.ez-field-edit__preview');
        var previewVisual = preview.querySelector('.ez-field-edit-preview__visual');
        var previewImg = preview.querySelector('.ez-field-edit-preview__media');
        var previewAlt = preview.querySelector('.ez-field-edit-preview__image-alt input');
        var previewActionPreview = preview.querySelector('.ez-field-edit-preview__action--preview');
        var assetNameContainer = preview.querySelector('.ez-field-edit-preview__asset-name a');
        var destinationLocationUrl = Routing.generate('_ez_content_view', {
          contentId: destinationContentId,
          locationId: destinationLocationId
        });
        var additionalData = Array.isArray(image.additionalData) ? '{}' : JSON.stringify(image.additionalData);
        previewVisual.setAttribute('data-additional-data', additionalData);
        previewImg.setAttribute('src', image ? image.uri : '//:0');
        previewImg.classList.toggle('d-none', image === null);
        previewAlt.value = image.alternativeText;
        previewActionPreview.setAttribute('href', destinationLocationUrl);
        assetNameContainer.innerHTML = destinationContentName;
        assetNameContainer.setAttribute('href', destinationLocationUrl);
        this.inputDestinationContentId.value = destinationContentId;
        this.inputField.value = '';
        this.showPreview();
      }
      /**
       * Open UDW to select an existing Image Asset
       *
       * @method openUDW
       * @param {Event} event
       */

    }, {
      key: "openUDW",
      value: function openUDW(event) {
        var _this2 = this;

        event.preventDefault();
        var udwContainer = doc.getElementById('react-udw');
        var config = JSON.parse(event.currentTarget.dataset.udwConfig);
        var title = Translator.trans(
        /*@Desc("Select Image Asset")*/
        'ezimageasset.title', {}, 'universal_discovery_widget');

        var closeUDW = function closeUDW() {
          return ReactDOM.unmountComponentAtNode(udwContainer);
        };

        var onCancel = closeUDW;

        var onConfirm = function onConfirm(items) {
          closeUDW();

          _this2.loadAsset(items[0]);
        };

        ReactDOM.render(React.createElement(eZ.modules.UniversalDiscovery, _objectSpread({
          onConfirm: onConfirm,
          onCancel: onCancel,
          title: title
        }, config)), udwContainer);
      }
      /**
       * Checks if file size is an allowed limit
       *
       * @method handleInputChange
       * @param {Event} event
       */

    }, {
      key: "handleInputChange",
      value: function handleInputChange(event) {
        var file = event.currentTarget.files[0];
        var languageCode = event.currentTarget.dataset.languageCode;
        var isFileSizeLimited = this.maxFileSize > 0;
        var maxFileSizeExceeded = isFileSizeLimited && file.size > this.maxFileSize;

        if (maxFileSizeExceeded) {
          this.resetInputField();
          return;
        }

        this.fieldContainer.querySelector('.ez-field-edit__option--remove-media').checked = false;
        this.createAsset(file, languageCode);
      }
      /**
       * Resets input field state
       *
       * @method resetInputField
       */

    }, {
      key: "resetInputField",
      value: function resetInputField() {
        _get(_getPrototypeOf(EzImageAssetPreviewField.prototype), "resetInputField", this).call(this);

        this.inputDestinationContentId.value = '';
      }
      /**
       * Initializes the preview
       *
       * @method init
       */

    }, {
      key: "init",
      value: function init() {
        _get(_getPrototypeOf(EzImageAssetPreviewField.prototype), "init", this).call(this);

        this.btnSelect = this.fieldContainer.querySelector('.ez-data-source__btn-select');
        this.btnSelect.addEventListener('click', this.openUDW.bind(this), false);
        this.inputDestinationContentId = this.fieldContainer.querySelector(SELECTOR_INPUT_DESTINATION_CONTENT_ID);
      }
    }]);

    return EzImageAssetPreviewField;
  }(eZ.BasePreviewField);

  var EzImageAssetFieldValidator = /*#__PURE__*/function (_eZ$BaseFileFieldVali) {
    "use strict";

    _inherits(EzImageAssetFieldValidator, _eZ$BaseFileFieldVali);

    var _super2 = _createSuper(EzImageAssetFieldValidator);

    function EzImageAssetFieldValidator() {
      _classCallCheck(this, EzImageAssetFieldValidator);

      return _super2.apply(this, arguments);
    }

    _createClass(EzImageAssetFieldValidator, [{
      key: "validateFileSize",
      value: function validateFileSize(event) {
        event.currentTarget.dispatchEvent(new CustomEvent('ez-invalid-file-size'));
        return {
          isError: false
        };
      }
    }]);

    return EzImageAssetFieldValidator;
  }(eZ.BaseFileFieldValidator);

  doc.querySelectorAll(SELECTOR_FIELD).forEach(function (fieldContainer) {
    var validator = new EzImageAssetFieldValidator({
      classInvalid: 'is-invalid',
      fieldContainer: fieldContainer,
      eventsMap: [{
        selector: "".concat(SELECTOR_INPUT_FILE),
        eventName: 'change',
        callback: 'validateInput',
        errorNodeSelectors: [SELECTOR_LABEL_WRAPPER]
      }, {
        isValueValidator: false,
        selector: "".concat(SELECTOR_INPUT_FILE),
        eventName: 'ez-invalid-file-size',
        callback: 'showFileSizeError',
        errorNodeSelectors: [SELECTOR_FILESIZE_NOTICE]
      }]
    });
    var previewField = new EzImageAssetPreviewField({
      validator: validator,
      fieldContainer: fieldContainer,
      fileTypeAccept: fieldContainer.querySelector(SELECTOR_INPUT_FILE).accept
    });
    previewField.init();
    eZ.addConfig('fieldTypeValidators', [validator], true);
  });
})(window, window.document, window.eZ, window.React, window.ReactDOM, window.Translator, window.Routing);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezinteger.js":
/*!************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezinteger.js ***!
  \************************************************************************************************************/
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

(function (global, doc, eZ) {
  var SELECTOR_FIELD = '.ez-field-edit--ezinteger';
  var SELECTOR_ERROR_NODE = '.ez-data-source';

  var EzIntegerValidator = /*#__PURE__*/function (_eZ$BaseFieldValidato) {
    "use strict";

    _inherits(EzIntegerValidator, _eZ$BaseFieldValidato);

    var _super = _createSuper(EzIntegerValidator);

    function EzIntegerValidator() {
      _classCallCheck(this, EzIntegerValidator);

      return _super.apply(this, arguments);
    }

    _createClass(EzIntegerValidator, [{
      key: "validateInteger",
      value:
      /**
       * Validates the input
       *
       * @method validateInteger
       * @param {Event} event
       * @returns {Object}
       * @memberof EzIntegerValidator
       */
      function validateInteger(event) {
        var isRequired = event.target.required;
        var value = +event.target.value;
        var isEmpty = !event.target.value && event.target.value !== '0';
        var isInteger = Number.isInteger(value);
        var isLess = value < parseInt(event.target.getAttribute('min'), 10);
        var isGreater = value > parseInt(event.target.getAttribute('max'), 10);
        var isError = isEmpty && isRequired || !isInteger || isLess || isGreater;
        var label = event.target.closest(SELECTOR_FIELD).querySelector('.ez-field-edit__label').innerHTML;
        var result = {
          isError: isError
        };

        if (isEmpty) {
          result.errorMessage = eZ.errors.emptyField.replace('{fieldName}', label);
        } else if (!isInteger) {
          result.errorMessage = eZ.errors.isNotInteger.replace('{fieldName}', label);
        } else if (isLess) {
          result.errorMessage = eZ.errors.isLess.replace('{fieldName}', label).replace('{minValue}', event.target.getAttribute('min'));
        } else if (isGreater) {
          result.errorMessage = eZ.errors.isGreater.replace('{fieldName}', label).replace('{maxValue}', event.target.getAttribute('max'));
        }

        return result;
      }
    }]);

    return EzIntegerValidator;
  }(eZ.BaseFieldValidator);

  var validator = new EzIntegerValidator({
    classInvalid: 'is-invalid',
    fieldSelector: SELECTOR_FIELD,
    eventsMap: [{
      selector: '.ez-field-edit--ezinteger input',
      eventName: 'blur',
      callback: 'validateInteger',
      errorNodeSelectors: [SELECTOR_ERROR_NODE]
    }]
  });
  validator.init();
  eZ.addConfig('fieldTypeValidators', [validator], true);
})(window, window.document, window.eZ);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezkeyword.js":
/*!************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezkeyword.js ***!
  \************************************************************************************************************/
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

(function (global, doc, eZ) {
  var _this = this;

  var SELECTOR_FIELD = '.ez-field-edit--ezkeyword';
  var SELECTOR_TAGGIFY = '.ez-data-source__taggify';
  var SELECTOR_ERROR_NODE = '.ez-data-source';
  var CLASS_TAGGIFY_FOCUS = 'ez-data-source__taggify--focused';

  var EzKeywordValidator = /*#__PURE__*/function (_eZ$BaseFieldValidato) {
    "use strict";

    _inherits(EzKeywordValidator, _eZ$BaseFieldValidato);

    var _super = _createSuper(EzKeywordValidator);

    function EzKeywordValidator() {
      _classCallCheck(this, EzKeywordValidator);

      return _super.apply(this, arguments);
    }

    _createClass(EzKeywordValidator, [{
      key: "validateKeywords",
      value:
      /**
       * Validates the keywords input
       *
       * @method validateKeywords
       * @param {Event} event
       * @returns {Object}
       * @memberof EzKeywordValidator
       */
      function validateKeywords(event) {
        var fieldContainer = event.currentTarget.closest(SELECTOR_FIELD);
        var input = fieldContainer.querySelector('.ez-data-source__input-wrapper .ez-data-source__input');
        var label = fieldContainer.querySelector('.ez-field-edit__label').innerHTML;
        var isRequired = input.required;
        var isEmpty = !input.value.trim().length;
        var isError = isEmpty && isRequired;
        var result = {
          isError: isError
        };

        if (isError) {
          result.errorMessage = eZ.errors.emptyField.replace('{fieldName}', label);
        }

        return result;
      }
    }]);

    return EzKeywordValidator;
  }(eZ.BaseFieldValidator);
  /**
   * Updates input value with provided value
   *
   * @function updateValue
   * @param {HTMLElement} input
   * @param {Event} event
   */


  var updateValue = function updateValue(input, event) {
    input.value = event.detail.tags.map(function (tag) {
      return tag.label;
    }).join();
    input.dispatchEvent(new Event('change'));
  };

  doc.querySelectorAll(SELECTOR_FIELD).forEach(function (field) {
    var taggifyContainer = field.querySelector(SELECTOR_TAGGIFY);
    var validator = new EzKeywordValidator({
      classInvalid: 'is-invalid',
      fieldSelector: SELECTOR_FIELD,
      eventsMap: [{
        isValueValidator: false,
        selector: "".concat(SELECTOR_FIELD, " .taggify__input"),
        eventName: 'blur',
        callback: 'validateKeywords',
        errorNodeSelectors: [SELECTOR_ERROR_NODE],
        invalidStateSelectors: [SELECTOR_TAGGIFY]
      }, {
        selector: "".concat(SELECTOR_FIELD, " .ez-data-source__input.form-control"),
        eventName: 'change',
        callback: 'validateKeywords',
        errorNodeSelectors: [SELECTOR_ERROR_NODE],
        invalidStateSelectors: [SELECTOR_TAGGIFY]
      }]
    });
    var taggify = new global.Taggify({
      containerNode: taggifyContainer,
      displayLabel: false,
      displayInputValues: false,
      // The "," key code
      hotKeys: [188]
    });
    var keywordInput = field.querySelector('.ez-data-source__input-wrapper .ez-data-source__input.form-control');
    var updateKeywords = updateValue.bind(_this, keywordInput);

    var addFocusState = function addFocusState() {
      return taggifyContainer.classList.add(CLASS_TAGGIFY_FOCUS);
    };

    var removeFocusState = function removeFocusState() {
      return taggifyContainer.classList.remove(CLASS_TAGGIFY_FOCUS);
    };

    var taggifyInput = taggifyContainer.querySelector('.taggify__input');

    if (keywordInput.required) {
      taggifyInput.setAttribute('required', true);
    }

    validator.init();

    if (keywordInput.value.length) {
      taggify.updateTags(keywordInput.value.split(',').map(function (item) {
        return {
          id: Math.floor((1 + Math.random()) * 0x10000).toString(16),
          label: item
        };
      }));
    }

    taggifyContainer.addEventListener('tagsCreated', updateKeywords, false);
    taggifyContainer.addEventListener('tagRemoved', updateKeywords, false);
    taggifyInput.addEventListener('focus', addFocusState, false);
    taggifyInput.addEventListener('blur', removeFocusState, false);
    eZ.addConfig('fieldTypeValidators', [validator], true);
  });
})(window, window.document, window.eZ);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezmedia.js":
/*!**********************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezmedia.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

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

(function (global, doc, eZ) {
  var SELECTOR_FIELD = '.ez-field-edit--ezmedia';
  var SELECTOR_PREVIEW = '.ez-field-edit__preview';
  var SELECTOR_MEDIA = '.ez-field-edit-preview__media';
  var SELECTOR_LABEL_WRAPPER = '.ez-field-edit__label-wrapper';
  var SELECTOR_INFO_WRAPPER = '.ez-field-edit-preview__info';
  var SELECTOR_MEDIA_WRAPPER = '.ez-field-edit-preview__media-wrapper';
  var SELECTOR_INPUT_FILE = 'input[type="file"]';
  var CLASS_MEDIA_WRAPPER_LOADING = 'ez-field-edit-preview__media-wrapper--loading';
  var SELECTOR_FILESIZE_NOTICE = '.ez-data-source__message--filesize';

  var EzMediaValidator = /*#__PURE__*/function (_eZ$BaseFileFieldVali) {
    "use strict";

    _inherits(EzMediaValidator, _eZ$BaseFileFieldVali);

    var _super = _createSuper(EzMediaValidator);

    function EzMediaValidator() {
      _classCallCheck(this, EzMediaValidator);

      return _super.apply(this, arguments);
    }

    _createClass(EzMediaValidator, [{
      key: "validateFileSize",
      value: function validateFileSize(event) {
        event.currentTarget.dispatchEvent(new CustomEvent('ez-invalid-file-size'));
        return {
          isError: false
        };
      }
      /**
       * Validates the dimensions inputs
       *
       * @method validateDimensions
       * @param {Event} event
       * @returns {Object}
       * @memberof EzMediaValidator
       */

    }, {
      key: "validateDimensions",
      value: function validateDimensions(event) {
        var input = event.currentTarget;
        var isRequired = input.required;
        var value = parseInt(input.value, 10);
        var isEmpty = isNaN(value);
        var isInteger = Number.isInteger(value);
        var isError = isEmpty && isRequired || !isEmpty && !isInteger;
        var label = input.closest(SELECTOR_INFO_WRAPPER).querySelector('.ez-field-edit-preview__label').innerHTML;
        var result = {
          isError: isError
        };

        if (isEmpty) {
          result.errorMessage = eZ.errors.emptyField.replace('{fieldName}', label);
        } else if (!isInteger) {
          result.errorMessage = eZ.errors.isNotInteger.replace('{fieldName}', label);
        }

        if (!input.closest('.ez-field-edit__preview').hasAttribute('hidden')) {
          return result;
        }

        return {
          isError: false
        };
      }
    }]);

    return EzMediaValidator;
  }(eZ.BaseFileFieldValidator);

  var EzMediaPreviewField = /*#__PURE__*/function (_eZ$BasePreviewField) {
    "use strict";

    _inherits(EzMediaPreviewField, _eZ$BasePreviewField);

    var _super2 = _createSuper(EzMediaPreviewField);

    function EzMediaPreviewField() {
      _classCallCheck(this, EzMediaPreviewField);

      return _super2.apply(this, arguments);
    }

    _createClass(EzMediaPreviewField, [{
      key: "loadDroppedFilePreview",
      value:
      /**
       * Loads dropped file preview
       *
       * @param {Event} event
       */
      function loadDroppedFilePreview(event) {
        var preview = this.fieldContainer.querySelector('.ez-field-edit__preview');
        var nameContainer = preview.querySelector('.ez-field-edit-preview__file-name');
        var sizeContainer = preview.querySelector('.ez-field-edit-preview__file-size');
        var files = [].slice.call(event.target.files);
        var fileSize = this.formatFileSize(files[0].size);
        nameContainer.innerHTML = files[0].name;
        nameContainer.title = files[0].name;
        sizeContainer.innerHTML = fileSize;
        sizeContainer.title = fileSize; // it breaks the rendering flow and prevents from blocking
        // rendering a whole fieldtype container
        // while loading video source

        window.setTimeout(this.updateMediaSource.bind(this, files[0]), 100);
      }
      /**
       * Updates a value of media source (the video tag - src attribute)
       *
       * @method updateMediaSource
       * @param {File} file
       */

    }, {
      key: "updateMediaSource",
      value: function updateMediaSource(file) {
        var preview = this.fieldContainer.querySelector(SELECTOR_PREVIEW);
        var videoUrl = URL.createObjectURL(file);
        preview.querySelector('.ez-field-edit-preview__action--preview').href = videoUrl;
        preview.querySelector(SELECTOR_MEDIA).setAttribute('src', videoUrl);
      }
      /**
       * Displays a media preview container
       *
       * @method showMediaPreview
       */

    }, {
      key: "showMediaPreview",
      value: function showMediaPreview() {
        var mediaWrapper = this.fieldContainer.querySelector(SELECTOR_MEDIA_WRAPPER);
        mediaWrapper.classList.remove(CLASS_MEDIA_WRAPPER_LOADING);
      }
      /**
       * Displays a media loading container
       *
       * @method showMediaLoadingScreen
       */

    }, {
      key: "showMediaLoadingScreen",
      value: function showMediaLoadingScreen() {
        var mediaWrapper = this.fieldContainer.querySelector(SELECTOR_MEDIA_WRAPPER);
        mediaWrapper.classList.add(CLASS_MEDIA_WRAPPER_LOADING);
      }
      /**
       * Handles file removing
       *
       * @method handleRemoveFile
       * @param {Event} event
       */

    }, {
      key: "handleRemoveFile",
      value: function handleRemoveFile(event) {
        _get(_getPrototypeOf(EzMediaPreviewField.prototype), "handleRemoveFile", this).call(this, event);

        this.showMediaLoadingScreen();
      }
      /**
       * Initializes the preview
       *
       * @method init
       */

    }, {
      key: "init",
      value: function init() {
        _get(_getPrototypeOf(EzMediaPreviewField.prototype), "init", this).call(this);

        var preview = this.fieldContainer.querySelector(SELECTOR_PREVIEW);
        var video = preview.querySelector(SELECTOR_MEDIA);
        video.addEventListener('canplay', this.showMediaPreview.bind(this), false);
      }
    }]);

    return EzMediaPreviewField;
  }(eZ.BasePreviewField);

  doc.querySelectorAll(SELECTOR_FIELD).forEach(function (fieldContainer) {
    var validator = new EzMediaValidator({
      classInvalid: 'is-invalid',
      fieldContainer: fieldContainer,
      eventsMap: [{
        selector: SELECTOR_INPUT_FILE,
        eventName: 'change',
        callback: 'validateInput',
        errorNodeSelectors: [SELECTOR_LABEL_WRAPPER]
      }, {
        isValueValidator: false,
        selector: SELECTOR_INPUT_FILE,
        eventName: 'ez-invalid-file-size',
        callback: 'showFileSizeError',
        errorNodeSelectors: [SELECTOR_FILESIZE_NOTICE]
      }, {
        selector: '.ez-field-edit-preview__dimensions .form-control',
        eventName: 'blur',
        callback: 'validateDimensions',
        errorNodeSelectors: ["".concat(SELECTOR_INFO_WRAPPER, " .ez-field-edit-preview__label-wrapper")]
      }]
    });
    var previewField = new EzMediaPreviewField({
      validator: validator,
      fieldContainer: fieldContainer,
      fileTypeAccept: fieldContainer.querySelector(SELECTOR_INPUT_FILE).accept
    });
    previewField.init();
    eZ.addConfig('fieldTypeValidators', [validator], true);
  });
})(window, window.document, window.eZ);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezobjectrelationlist.js":
/*!***********************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezobjectrelationlist.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

(function (global, doc, eZ, React, ReactDOM, Translator) {
  var CLASS_FIELD_SINGLE = 'ez-field-edit--ezobjectrelation';
  var SELECTOR_FIELD_MULTIPLE = '.ez-field-edit--ezobjectrelationlist';
  var SELECTOR_FIELD_SINGLE = '.ez-field-edit--ezobjectrelation';
  var SELECTOR_INPUT = '.ez-data-source__input';
  var SELECTOR_LABEL_WRAPPER = '.ez-field-edit__label-wrapper';
  var SELECTOR_BTN_ADD = '.ez-relations__table-action--create';
  var SELECTOR_ROW = '.ez-relations__item';
  var EVENT_CUSTOM = 'validateInput';

  var EzObjectRelationListValidator = /*#__PURE__*/function (_eZ$BaseFieldValidato) {
    "use strict";

    _inherits(EzObjectRelationListValidator, _eZ$BaseFieldValidato);

    var _super = _createSuper(EzObjectRelationListValidator);

    function EzObjectRelationListValidator() {
      _classCallCheck(this, EzObjectRelationListValidator);

      return _super.apply(this, arguments);
    }

    _createClass(EzObjectRelationListValidator, [{
      key: "validateInput",
      value:
      /**
       * Validates the input
       *
       * @method validateInput
       * @param {Event} event
       * @returns {Object}
       * @memberof EzObjectRelationListValidator
       */
      function validateInput(_ref) {
        var currentTarget = _ref.currentTarget;
        var isRequired = currentTarget.required;
        var isEmpty = !currentTarget.value.length;
        var hasCorrectValues = currentTarget.value.split(',').every(function (id) {
          return !isNaN(parseInt(id, 10));
        });
        var fieldContainer = currentTarget.closest(SELECTOR_FIELD_MULTIPLE) || currentTarget.closest(SELECTOR_FIELD_SINGLE);
        var label = fieldContainer.querySelector('.ez-field-edit__label').innerHTML;
        var result = {
          isError: false
        };

        if (isRequired && isEmpty) {
          result.isError = true;
          result.errorMessage = eZ.errors.emptyField.replace('{fieldName}', label);
        } else if (!isEmpty && !hasCorrectValues) {
          result.isError = true;
          result.errorMessage = eZ.errors.invalidValue.replace('{fieldName}', label);
        }

        return result;
      }
    }]);

    return EzObjectRelationListValidator;
  }(eZ.BaseFieldValidator);

  var singleObjectRelationFields = doc.querySelectorAll(SELECTOR_FIELD_SINGLE);

  if (singleObjectRelationFields.length) {
    console.warn('EzObjectRelation fieldtype is deprecated. Please, use EzObjectRelationList fieldtype instead.');
  }

  [].concat(_toConsumableArray(doc.querySelectorAll(SELECTOR_FIELD_MULTIPLE)), _toConsumableArray(singleObjectRelationFields)).forEach(function (fieldContainer) {
    var validator = new EzObjectRelationListValidator({
      classInvalid: 'is-invalid',
      fieldContainer: fieldContainer,
      eventsMap: [{
        selector: SELECTOR_INPUT,
        eventName: 'blur',
        callback: 'validateInput',
        errorNodeSelectors: [SELECTOR_LABEL_WRAPPER]
      }, {
        isValueValidator: false,
        selector: SELECTOR_INPUT,
        eventName: EVENT_CUSTOM,
        callback: 'validateInput',
        errorNodeSelectors: [SELECTOR_LABEL_WRAPPER]
      }]
    });
    var udwContainer = doc.getElementById('react-udw');
    var sourceInput = fieldContainer.querySelector(SELECTOR_INPUT);
    var relationsContainer = fieldContainer.querySelector('.ez-relations__list');
    var relationsWrapper = fieldContainer.querySelector('.ez-relations__wrapper');
    var relationsCTA = fieldContainer.querySelector('.ez-relations__cta');
    var addBtn = fieldContainer.querySelector(SELECTOR_BTN_ADD);
    var trashBtn = fieldContainer.querySelector('.ez-relations__table-action--remove');
    var isSingle = fieldContainer.classList.contains(CLASS_FIELD_SINGLE);
    var selectedItemsLimit = isSingle ? 1 : parseInt(relationsContainer.dataset.limit, 10);
    var startingLocationId = relationsContainer.dataset.defaultLocation !== '0' ? parseInt(relationsContainer.dataset.defaultLocation, 10) : null;
    var allowedContentTypes = relationsContainer.dataset.allowedContentTypes.split(',').filter(function (item) {
      return item.length;
    });

    var closeUDW = function closeUDW() {
      return ReactDOM.unmountComponentAtNode(udwContainer);
    };

    var renderRows = function renderRows(items) {
      return items.forEach(function () {
        return relationsContainer.insertAdjacentHTML('beforeend', renderRow.apply(void 0, arguments));
      });
    };

    var updateInputValue = function updateInputValue(items) {
      sourceInput.value = items.join();
      sourceInput.dispatchEvent(new CustomEvent(EVENT_CUSTOM));
    };

    var onConfirm = function onConfirm(items) {
      items = excludeDuplicatedItems(items);
      renderRows(items);
      attachRowsEventHandlers();
      selectedItems = [].concat(_toConsumableArray(selectedItems), _toConsumableArray(items.map(function (item) {
        return item.ContentInfo.Content._id;
      })));
      updateInputValue(selectedItems);
      closeUDW();
      updateFieldState();
      updateAddBtnState();
    };

    var canSelectContent = function canSelectContent(_ref2, callback) {
      var item = _ref2.item,
          itemsCount = _ref2.itemsCount;
      var isAllowedContentType = allowedContentTypes.length ? allowedContentTypes.includes(item.ContentInfo.Content.ContentTypeInfo.identifier) : true;

      if (!isAllowedContentType) {
        return callback(false);
      }

      var isAlreadySelected = !!selectedItems.find(function (id) {
        return id === item.ContentInfo.Content._id;
      });

      if (!selectedItemsLimit) {
        return callback(!isAlreadySelected);
      }

      var canSelect = selectedItems.length + itemsCount < selectedItemsLimit && !isAlreadySelected;
      callback(canSelect);
    };

    var openUDW = function openUDW(event) {
      event.preventDefault();
      var config = JSON.parse(event.currentTarget.dataset.udwConfig);
      var limit = parseInt(event.currentTarget.dataset.limit, 10);
      var title = limit === 1 ? Translator.trans(
      /*@Desc("Select a Content item")*/
      'ezobjectrelationlist.title.single', {}, 'universal_discovery_widget') : Translator.trans(
      /*@Desc("Select Content item(s)")*/
      'ezobjectrelationlist.title.multi', {}, 'universal_discovery_widget');
      ReactDOM.render(React.createElement(eZ.modules.UniversalDiscovery, _objectSpread({
        onConfirm: onConfirm,
        onCancel: closeUDW,
        title: title,
        multiple: isSingle ? false : selectedItemsLimit !== 1,
        multipleItemsLimit: selectedItemsLimit,
        startingLocationId: startingLocationId,
        canSelectContent: canSelectContent
      }, config)), udwContainer);
    };

    var excludeDuplicatedItems = function excludeDuplicatedItems(items) {
      selectedItemsMap = items.reduce(function (total, item) {
        return _objectSpread(_objectSpread({}, total), {}, _defineProperty({}, item.ContentInfo.Content._id, item));
      }, selectedItemsMap);
      return items.filter(function (item) {
        return selectedItemsMap[item.ContentInfo.Content._id];
      });
    };

    var renderRow = function renderRow(item, index) {
      var escapeHTML = eZ.helpers.text.escapeHTML;
      var formatShortDateTime = eZ.helpers.timezone.formatShortDateTime;
      var contentTypeName = eZ.helpers.contentType.getContentTypeName(item.ContentInfo.Content.ContentTypeInfo.identifier);
      var contentName = escapeHTML(item.ContentInfo.Content.TranslatedName);
      var contentId = escapeHTML(item.ContentInfo.Content._id);
      return "\n                <tr class=\"ez-relations__item\" data-content-id=\"".concat(contentId, "\">\n                    <td><input class=\"ez-input ez-input--checkbox\" type=\"checkbox\" value=\"").concat(contentId, "\" /></td>\n                    <td class=\"ez-relations__item-name\">").concat(contentName, "</td>\n                    <td>").concat(contentTypeName, "</td>\n                    <td>").concat(formatShortDateTime(item.ContentInfo.Content.publishedDate), "</td>\n                    <td colspan=\"2\"><input class=\"ez-relations__order-input\" type=\"number\" value=\"").concat(selectedItems.length + index + 1, "\" /></td>\n                </tr>\n            ");
    };

    var updateFieldState = function updateFieldState() {
      var wrapperMethod = selectedItems.length ? 'removeAttribute' : 'setAttribute';
      var ctaMethod = selectedItems.length ? 'setAttribute' : 'removeAttribute';
      relationsWrapper[wrapperMethod]('hidden', true);
      relationsCTA[ctaMethod]('hidden', true);
    };

    var updateAddBtnState = function updateAddBtnState() {
      var methodName = !selectedItemsLimit || selectedItems.length < selectedItemsLimit ? 'removeAttribute' : 'setAttribute';
      addBtn[methodName]('disabled', true);
    };

    var updateTrashBtnState = function updateTrashBtnState(event) {
      if ((!event.target.hasAttribute('type') || event.target.type !== 'checkbox') && event.currentTarget !== trashBtn) {
        return;
      }

      var anySelected = findCheckboxes().some(function (item) {
        return item.checked === true;
      });
      var methodName = anySelected ? 'removeAttribute' : 'setAttribute';
      trashBtn[methodName]('disabled', true);
    };

    var removeItem = function removeItem(event) {
      event.preventDefault();
      var removedItems = [];
      relationsContainer.querySelectorAll('input:checked').forEach(function (input) {
        removedItems.push(parseInt(input.value, 10));
        input.closest('tr').remove();
      });
      selectedItems = selectedItems.filter(function (item) {
        return !removedItems.includes(item);
      });
      updateInputValue(selectedItems);
      updateFieldState();
      updateAddBtnState();
    };

    var findOrderInputs = function findOrderInputs() {
      return _toConsumableArray(relationsContainer.querySelectorAll('.ez-relations__order-input'));
    };

    var findCheckboxes = function findCheckboxes() {
      return _toConsumableArray(relationsContainer.querySelectorAll('[type="checkbox"]'));
    };

    var attachRowsEventHandlers = function attachRowsEventHandlers() {
      var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
      findOrderInputs().forEach(function (item) {
        item.addEventListener('blur', updateSelectedItemsOrder, false);

        if (isFirefox) {
          item.addEventListener('change', focusOnElement, false);
        }
      });
    };

    var focusOnElement = function focusOnElement(event) {
      if (doc.activeElement !== event.target) {
        event.target.focus();
      }
    };

    var emptyRelationsContainer = function emptyRelationsContainer() {
      while (relationsContainer.lastChild) {
        relationsContainer.removeChild(relationsContainer.lastChild);
      }
    };

    var updateSelectedItemsOrder = function updateSelectedItemsOrder(event) {
      event.preventDefault();
      var inputs = findOrderInputs().reduce(function (total, input) {
        return [].concat(_toConsumableArray(total), [{
          order: parseInt(input.value, 10),
          row: input.closest(SELECTOR_ROW)
        }]);
      }, []);
      inputs.sort(function (a, b) {
        return a.order - b.order;
      });
      var fragment = inputs.reduce(function (frag, item) {
        frag.appendChild(item.row);
        return frag;
      }, doc.createDocumentFragment());
      emptyRelationsContainer();
      relationsContainer.appendChild(fragment);
      attachRowsEventHandlers();
      selectedItems = inputs.map(function (item) {
        return parseInt(item.row.dataset.contentId, 10);
      });
      updateInputValue(selectedItems);
    };

    var selectedItems = _toConsumableArray(fieldContainer.querySelectorAll(SELECTOR_ROW)).map(function (row) {
      return parseInt(row.dataset.contentId, 10);
    });

    var selectedItemsMap = selectedItems.reduce(function (total, item) {
      return _objectSpread(_objectSpread({}, total), {}, _defineProperty({}, item, item));
    }, {});
    updateAddBtnState();
    attachRowsEventHandlers();
    [].concat(_toConsumableArray(fieldContainer.querySelectorAll(SELECTOR_BTN_ADD)), _toConsumableArray(fieldContainer.querySelectorAll('.ez-relations__cta-btn'))).forEach(function (btn) {
      return btn.addEventListener('click', openUDW, false);
    });
    trashBtn.addEventListener('click', removeItem, false);
    trashBtn.addEventListener('click', updateTrashBtnState, false);
    relationsContainer.addEventListener('change', updateTrashBtnState, false);
    validator.init();
    eZ.addConfig('fieldTypeValidators', [validator], true);
  });
})(window, window.document, window.eZ, window.React, window.ReactDOM, window.Translator);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezrichtext.js":
/*!*************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezrichtext.js ***!
  \*************************************************************************************************************/
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

(function (global, doc, eZ, React, ReactDOM) {
  var SELECTOR_FIELD = '.ez-field-edit--ezrichtext';
  var SELECTOR_INPUT = '.ez-data-source__richtext';
  var SELECTOR_ERROR_NODE = '.ez-field-edit__label-wrapper';

  var selectContent = function selectContent(config) {
    var udwContainer = document.querySelector('#react-udw');

    var confirmHandler = function confirmHandler(items) {
      if (typeof config.onConfirm === 'function') {
        config.onConfirm(items);
      }

      ReactDOM.unmountComponentAtNode(udwContainer);
    };

    var cancelHandler = function cancelHandler() {
      if (typeof config.onCancel === 'function') {
        config.onCancel();
      }

      ReactDOM.unmountComponentAtNode(udwContainer);
    };

    var mergedConfig = Object.assign({}, config, {
      onConfirm: confirmHandler,
      onCancel: cancelHandler
    });
    ReactDOM.render(React.createElement(eZ.modules.UniversalDiscovery, mergedConfig), udwContainer);
  };

  eZ.addConfig('richText.alloyEditor.callbacks.selectContent', selectContent);

  var EzRichTextValidator = /*#__PURE__*/function (_eZ$BaseFieldValidato) {
    "use strict";

    _inherits(EzRichTextValidator, _eZ$BaseFieldValidato);

    var _super = _createSuper(EzRichTextValidator);

    function EzRichTextValidator(config) {
      var _this;

      _classCallCheck(this, EzRichTextValidator);

      _this = _super.call(this, config);
      _this.alloyEditor = config.alloyEditor;
      return _this;
    }
    /**
     * Validates the input
     *
     * @method validateInput
     * @param {Event} event
     * @returns {Object}
     * @memberof EzRichTextValidator
     */


    _createClass(EzRichTextValidator, [{
      key: "validateInput",
      value: function validateInput(event) {
        var fieldContainer = event.currentTarget.closest(SELECTOR_FIELD);
        var isRequired = fieldContainer.classList.contains('ez-field-edit--required');
        var label = fieldContainer.querySelector('.ez-field-edit__label').innerHTML;
        var isEmpty = !this.alloyEditor.get('nativeEditor').getData().length;
        var isError = isRequired && isEmpty;
        var result = {
          isError: isError
        };

        if (isError) {
          result.errorMessage = eZ.errors.emptyField.replace('{fieldName}', label);
        }

        return result;
      }
    }]);

    return EzRichTextValidator;
  }(eZ.BaseFieldValidator);

  doc.querySelectorAll("".concat(SELECTOR_FIELD, " ").concat(SELECTOR_INPUT)).forEach(function (container) {
    var richtext = new eZ.BaseRichText();
    var alloyEditor = richtext.init(container);
    var validator = new EzRichTextValidator({
      classInvalid: 'is-invalid',
      fieldContainer: container.closest(SELECTOR_FIELD),
      alloyEditor: alloyEditor,
      eventsMap: [{
        selector: SELECTOR_INPUT,
        eventName: 'input',
        callback: 'validateInput',
        errorNodeSelectors: [SELECTOR_ERROR_NODE]
      }, {
        selector: SELECTOR_INPUT,
        eventName: 'blur',
        callback: 'validateInput',
        errorNodeSelectors: [SELECTOR_ERROR_NODE]
      }]
    });
    validator.init();
    eZ.addConfig('fieldTypeValidators', [validator], true);
  });
})(window, window.document, window.eZ, window.React, window.ReactDOM);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezselection.js":
/*!**************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezselection.js ***!
  \**************************************************************************************************************/
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

(function (global, doc, eZ) {
  var SELECTOR_FIELD = '.ez-field-edit--ezselection';
  var SELECTOR_SELECTED = '.ez-custom-dropdown__selection-info';
  var SELECTOR_SOURCE_INPUT = '.ez-data-source__input';
  var SELECTOR_ERROR_NODE = '.ez-data-source';
  var EVENT_VALUE_CHANGED = 'valueChanged';

  var EzSelectionValidator = /*#__PURE__*/function (_eZ$BaseFieldValidato) {
    "use strict";

    _inherits(EzSelectionValidator, _eZ$BaseFieldValidato);

    var _super = _createSuper(EzSelectionValidator);

    function EzSelectionValidator() {
      _classCallCheck(this, EzSelectionValidator);

      return _super.apply(this, arguments);
    }

    _createClass(EzSelectionValidator, [{
      key: "validateInput",
      value:
      /**
       * Validates the textarea field value
       *
       * @method validateInput
       * @param {Event} event
       * @returns {Object}
       * @memberof EzSelectionValidator
       */
      function validateInput(event) {
        var fieldContainer = event.currentTarget.closest(SELECTOR_FIELD);
        var hasSelectedOptions = !!fieldContainer.querySelectorAll('.ez-custom-dropdown__selected-item').length;
        var isRequired = fieldContainer.classList.contains('ez-field-edit--required');
        var isError = isRequired && !hasSelectedOptions;
        var label = fieldContainer.querySelector('.ez-field-edit__label').innerHTML;
        var errorMessage = eZ.errors.emptyField.replace('{fieldName}', label);
        return {
          isError: isError,
          errorMessage: errorMessage
        };
      }
    }]);

    return EzSelectionValidator;
  }(eZ.BaseFieldValidator);

  var validator = new EzSelectionValidator({
    classInvalid: 'is-invalid',
    fieldSelector: SELECTOR_FIELD,
    eventsMap: [{
      selector: '.ez-data-source__input--selection',
      eventName: EVENT_VALUE_CHANGED,
      callback: 'validateInput',
      errorNodeSelectors: [SELECTOR_ERROR_NODE],
      invalidStateSelectors: [SELECTOR_SELECTED]
    }]
  });
  validator.init();
  eZ.addConfig('fieldTypeValidators', [validator], true);
  doc.querySelectorAll(SELECTOR_FIELD).forEach(function (container) {
    var dropdown = new eZ.core.CustomDropdown({
      container: container,
      itemsContainer: container.querySelector('.ez-custom-dropdown__items'),
      sourceInput: container.querySelector(SELECTOR_SOURCE_INPUT)
    });
    dropdown.init();
  });
})(window, window.document, window.eZ);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezstring.js":
/*!***********************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezstring.js ***!
  \***********************************************************************************************************/
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

(function (global, doc, eZ) {
  var SELECTOR_FIELD = '.ez-field-edit--ezstring';
  var SELECTOR_ERROR_NODE = '.ez-data-source';
  var SELECTOR_SOURCE_INPUT = '.ez-data-source__input';

  var EzStringValidator = /*#__PURE__*/function (_eZ$BaseFieldValidato) {
    "use strict";

    _inherits(EzStringValidator, _eZ$BaseFieldValidato);

    var _super = _createSuper(EzStringValidator);

    function EzStringValidator() {
      _classCallCheck(this, EzStringValidator);

      return _super.apply(this, arguments);
    }

    _createClass(EzStringValidator, [{
      key: "validateInput",
      value:
      /**
       * Validates the input
       *
       * @method validateInput
       * @param {Event} event
       * @returns {Object}
       * @memberof EzStringValidator
       */
      function validateInput(event) {
        var isRequired = event.target.required;
        var isEmpty = !event.target.value;
        var isTooShort = event.target.value.length < parseInt(event.target.dataset.min, 10);
        var isTooLong = event.target.value.length > parseInt(event.target.dataset.max, 10);
        var isError = isEmpty && isRequired || isTooShort || isTooLong;
        var label = event.target.closest(SELECTOR_FIELD).querySelector('.ez-field-edit__label').innerHTML;
        var result = {
          isError: isError
        };

        if (isEmpty) {
          result.errorMessage = eZ.errors.emptyField.replace('{fieldName}', label);
        } else if (isTooShort) {
          result.errorMessage = eZ.errors.tooShort.replace('{fieldName}', label).replace('{minLength}', event.target.dataset.min);
        } else if (isTooLong) {
          result.errorMessage = eZ.errors.tooLong.replace('{fieldName}', label).replace('{maxLength}', event.target.dataset.max);
        }

        return result;
      }
    }]);

    return EzStringValidator;
  }(eZ.BaseFieldValidator);

  var validator = new EzStringValidator({
    classInvalid: 'is-invalid',
    fieldSelector: SELECTOR_FIELD,
    eventsMap: [{
      selector: '.ez-field-edit--ezstring input',
      eventName: 'blur',
      callback: 'validateInput',
      errorNodeSelectors: [SELECTOR_ERROR_NODE],
      invalidStateSelectors: [SELECTOR_SOURCE_INPUT]
    }]
  });
  validator.init();
  eZ.addConfig('fieldTypeValidators', [validator], true);
})(window, window.document, window.eZ);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/eztext.js":
/*!*********************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/eztext.js ***!
  \*********************************************************************************************************/
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

(function (global, doc, eZ) {
  var SELECTOR_FIELD = '.ez-field-edit--eztext';

  var EzTextValidator = /*#__PURE__*/function (_eZ$BaseFieldValidato) {
    "use strict";

    _inherits(EzTextValidator, _eZ$BaseFieldValidato);

    var _super = _createSuper(EzTextValidator);

    function EzTextValidator() {
      _classCallCheck(this, EzTextValidator);

      return _super.apply(this, arguments);
    }

    _createClass(EzTextValidator, [{
      key: "validateInput",
      value:
      /**
       * Validates the textarea field value
       *
       * @method validateInput
       * @param {Event} event
       * @returns {Object}
       * @memberof EzTextValidator
       */
      function validateInput(event) {
        var isError = event.target.required && !event.target.value.trim();
        var label = event.target.closest(SELECTOR_FIELD).querySelector('.ez-field-edit__label').innerHTML;
        var errorMessage = eZ.errors.emptyField.replace('{fieldName}', label);
        return {
          isError: isError,
          errorMessage: errorMessage
        };
      }
    }]);

    return EzTextValidator;
  }(eZ.BaseFieldValidator);

  var validator = new EzTextValidator({
    classInvalid: 'is-invalid',
    fieldSelector: SELECTOR_FIELD,
    eventsMap: [{
      selector: '.ez-field-edit--eztext textarea',
      eventName: 'blur',
      callback: 'validateInput',
      errorNodeSelectors: ['.ez-field-edit__label-wrapper']
    }]
  });
  validator.init();
  eZ.addConfig('fieldTypeValidators', [validator], true);
})(window, window.document, window.eZ);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/eztime.js":
/*!*********************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/eztime.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

(function (global, doc, eZ, flatpickr) {
  var SELECTOR_FIELD = '.ez-field-edit--eztime';
  var SELECTOR_INPUT = '.ez-data-source__input:not(.flatpickr-input)';
  var SELECTOR_FLATPICKR_INPUT = '.flatpickr-input';
  var SELECTOR_ERROR_NODE = '.ez-data-source';
  var EVENT_VALUE_CHANGED = 'valueChanged';

  var EzTimeValidator = /*#__PURE__*/function (_eZ$BaseFieldValidato) {
    "use strict";

    _inherits(EzTimeValidator, _eZ$BaseFieldValidato);

    var _super = _createSuper(EzTimeValidator);

    function EzTimeValidator() {
      _classCallCheck(this, EzTimeValidator);

      return _super.apply(this, arguments);
    }

    _createClass(EzTimeValidator, [{
      key: "validateInput",
      value:
      /**
       * Validates the input
       *
       * @method validateInput
       * @param {Event} event
       * @returns {Object}
       * @memberof EzTimeValidator
       */
      function validateInput(event) {
        var target = event.currentTarget;
        var isRequired = target.required;
        var isEmpty = !target.value.trim().length;
        var label = event.target.closest(this.fieldSelector).querySelector('.ez-field-edit__label').innerHTML;
        var isError = false;
        var errorMessage = '';

        if (isRequired && isEmpty) {
          isError = true;
          errorMessage = eZ.errors.emptyField.replace('{fieldName}', label);
        }

        return {
          isError: isError,
          errorMessage: errorMessage
        };
      }
    }]);

    return EzTimeValidator;
  }(eZ.BaseFieldValidator);

  var validator = new EzTimeValidator({
    classInvalid: 'is-invalid',
    fieldSelector: SELECTOR_FIELD,
    eventsMap: [{
      selector: "".concat(SELECTOR_FIELD, " ").concat(SELECTOR_INPUT),
      eventName: EVENT_VALUE_CHANGED,
      callback: 'validateInput',
      errorNodeSelectors: [SELECTOR_ERROR_NODE],
      invalidStateSelectors: [SELECTOR_FLATPICKR_INPUT]
    }, {
      selector: "".concat(SELECTOR_FIELD, " ").concat(SELECTOR_FLATPICKR_INPUT),
      eventName: 'blur',
      callback: 'validateInput',
      errorNodeSelectors: [SELECTOR_ERROR_NODE],
      invalidStateSelectors: [SELECTOR_FLATPICKR_INPUT]
    }]
  });
  validator.init();
  eZ.addConfig('fieldTypeValidators', [validator], true);
  var timeFields = doc.querySelectorAll(SELECTOR_FIELD);
  var timeConfig = {
    enableTime: true,
    noCalendar: true,
    time_24hr: true,
    formatDate: function formatDate(date) {
      return eZ.helpers.timezone.formatFullDateTime(date, null, eZ.adminUiConfig.dateFormat.fullTime);
    }
  };

  var updateInputValue = function updateInputValue(sourceInput, date) {
    var event = new CustomEvent(EVENT_VALUE_CHANGED);

    if (!date.length) {
      sourceInput.value = '';
      sourceInput.dispatchEvent(event);
      return;
    }

    date = new Date(date[0]);
    sourceInput.value = date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
    sourceInput.dispatchEvent(event);
  };

  var initFlatPickr = function initFlatPickr(field) {
    var sourceInput = field.querySelector(SELECTOR_INPUT);
    var flatPickrInput = field.querySelector(SELECTOR_FLATPICKR_INPUT);
    var btnClear = field.querySelector('.ez-data-source__btn--clear-input');
    var enableSeconds = sourceInput.dataset.seconds === '1';
    var defaultDate;

    if (sourceInput.value) {
      var value = parseInt(sourceInput.value, 10);
      var date = new Date();
      date.setHours(Math.floor(value / 3600));
      date.setMinutes(Math.floor(value % 3600 / 60));
      date.setSeconds(Math.floor(value % 3600 % 60));
      defaultDate = date;
    }

    btnClear.addEventListener('click', function (event) {
      event.preventDefault();
      flatPickrInput.value = '';
      sourceInput.value = '';
      sourceInput.dispatchEvent(new CustomEvent(EVENT_VALUE_CHANGED));
    }, false);
    flatpickr(flatPickrInput, _objectSpread(_objectSpread({}, timeConfig), {}, {
      enableSeconds: enableSeconds,
      onChange: updateInputValue.bind(null, sourceInput),
      onClose: updateInputValue.bind(null, sourceInput),
      defaultDate: defaultDate
    }));

    if (sourceInput.hasAttribute('required')) {
      flatPickrInput.setAttribute('required', true);
    }
  };

  timeFields.forEach(initFlatPickr);
})(window, window.document, window.eZ, window.flatpickr);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezurl.js":
/*!********************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezurl.js ***!
  \********************************************************************************************************/
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

(function (global, doc, eZ) {
  var SELECTOR_FIELD = '.ez-field-edit--ezurl';
  var SELECTOR_FIELD_LINK = '.ez-data-source__field--link';
  var SELECTOR_LINK_INPUT = "".concat(SELECTOR_FIELD_LINK, " .ez-data-source__input");
  var SELECTOR_LABEL = '.ez-data-source__label';
  var SELECTOR_ERROR_NODE = '.ez-data-source';

  var EzUrlValidator = /*#__PURE__*/function (_eZ$BaseFieldValidato) {
    "use strict";

    _inherits(EzUrlValidator, _eZ$BaseFieldValidato);

    var _super = _createSuper(EzUrlValidator);

    function EzUrlValidator() {
      _classCallCheck(this, EzUrlValidator);

      return _super.apply(this, arguments);
    }

    _createClass(EzUrlValidator, [{
      key: "validateUrl",
      value: function validateUrl(event) {
        var input = event.currentTarget;
        var isRequired = input.required;
        var isEmpty = !input.value.trim();
        var isError = isEmpty && isRequired;
        var label = input.closest(SELECTOR_FIELD_LINK).querySelector(SELECTOR_LABEL).innerHTML;
        var result = {
          isError: isError
        };

        if (isRequired && isEmpty) {
          result.errorMessage = eZ.errors.emptyField.replace('{fieldName}', label);
        }

        return result;
      }
    }]);

    return EzUrlValidator;
  }(eZ.BaseFieldValidator);

  var validator = new EzUrlValidator({
    classInvalid: 'is-invalid',
    fieldSelector: SELECTOR_FIELD,
    eventsMap: [{
      selector: "".concat(SELECTOR_FIELD, " ").concat(SELECTOR_LINK_INPUT),
      eventName: 'blur',
      callback: 'validateUrl',
      invalidStateSelectors: [SELECTOR_LINK_INPUT, "".concat(SELECTOR_FIELD_LINK, " ").concat(SELECTOR_LABEL)],
      errorNodeSelectors: [SELECTOR_ERROR_NODE]
    }]
  });
  validator.init();
  eZ.addConfig('fieldTypeValidators', [validator], true);
})(window, window.document, window.eZ);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezuser.js":
/*!*********************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezuser.js ***!
  \*********************************************************************************************************/
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

(function (global, doc, eZ) {
  var SELECTOR_FIELD = '.ez-field-edit--ezuser';
  var SELECTOR_INNER_FIELD = '.ez-data-source__field';
  var SELECTOR_LABEL = '.ez-data-source__label';
  var SELECTOR_LABEL_WRAPPER = '.ez-data-source__label-wrapper';
  var SELECTOR_FIELD_USERNAME = '.ez-data-source__field--username';
  var SELECTOR_FIELD_FIRST = '.ez-data-source__field--first';
  var SELECTOR_FIELD_SECOND = '.ez-data-source__field--second';
  var SELECTOR_FIELD_EMAIL = '.ez-data-source__field--email';
  var SELECTOR_INPUT = '.ez-data-source__input';

  var EzUserValidator = /*#__PURE__*/function (_eZ$BaseFieldValidato) {
    "use strict";

    _inherits(EzUserValidator, _eZ$BaseFieldValidato);

    var _super = _createSuper(EzUserValidator);

    function EzUserValidator() {
      _classCallCheck(this, EzUserValidator);

      return _super.apply(this, arguments);
    }

    _createClass(EzUserValidator, [{
      key: "updateState",
      value:
      /**
       * Updates the state of checkbox indicator.
       *
       * @method updateState
       * @param {Event} event
       * @memberof EzUserValidator
       */
      function updateState(event) {
        var methodName = event.currentTarget.checked ? 'add' : 'remove';
        var label = event.currentTarget.closest(SELECTOR_LABEL);
        label.classList[methodName]('is-checked');
      }
      /**
       * Validates the input field value
       *
       * @method validateInput
       * @param {Event} event
       * @returns {Object}
       * @memberof EzUserValidator
       */

    }, {
      key: "validateInput",
      value: function validateInput(_ref) {
        var target = _ref.target;
        var fieldContainer = target.closest(SELECTOR_INNER_FIELD);
        var label = fieldContainer.querySelector(SELECTOR_LABEL).innerHTML;
        var isError = target.required && !target.value.trim().length;
        var errorMessage = eZ.errors.emptyField.replace('{fieldName}', label);
        return {
          isError: isError,
          errorMessage: errorMessage
        };
      }
      /**
       * Validates the email input field value
       *
       * @method validateEmailInput
       * @param {Event} event
       * @returns {Object}
       * @memberof EzUserValidator
       */

    }, {
      key: "validateEmailInput",
      value: function validateEmailInput(_ref2) {
        var target = _ref2.target;
        var isRequired = target.required;
        var isEmpty = !target.value.trim();
        var isValid = eZ.errors.emailRegexp.test(target.value);
        var isError = isRequired && isEmpty || !isValid;
        var fieldContainer = target.closest(SELECTOR_INNER_FIELD);
        var result = {
          isError: isError
        };

        if (isEmpty) {
          result.errorMessage = eZ.errors.emptyField.replace('{fieldName}', fieldContainer.querySelector(SELECTOR_LABEL).innerHTML);
        } else if (!isValid) {
          result.errorMessage = eZ.errors.invalidEmail;
        }

        return result;
      }
      /**
       * Compares the values of both password inputs
       *
       * @method comparePasswords
       * @param {Event} event
       * @returns {Object}
       * @memberof EzUserValidator
       */

    }, {
      key: "comparePasswords",
      value: function comparePasswords(_ref3) {
        var target = _ref3.target;
        var validationResults = this.validateInput({
          target: target
        });

        if (validationResults.isError) {
          return validationResults;
        }

        var firstPassword = target.closest(this.fieldSelector).querySelector("".concat(SELECTOR_FIELD_FIRST, " ").concat(SELECTOR_INPUT)).value.trim();
        var secondPassword = target.value.trim();
        var passwordsMatch = firstPassword === secondPassword;
        var requiredNotMatch = target.required && !passwordsMatch;
        var notRequiredNotMatch = !target.required && (firstPassword.length || secondPassword.length) && !passwordsMatch;
        var isError = false;
        var errorMessage;

        if (requiredNotMatch || notRequiredNotMatch) {
          isError = true;
          errorMessage = eZ.errors.notSamePasswords;
        }

        return {
          isError: isError,
          errorMessage: errorMessage
        };
      }
    }]);

    return EzUserValidator;
  }(eZ.BaseFieldValidator);

  var validator = new EzUserValidator({
    classInvalid: 'is-invalid',
    fieldSelector: SELECTOR_FIELD,
    eventsMap: [{
      selector: "".concat(SELECTOR_FIELD, " ").concat(SELECTOR_FIELD_USERNAME, " ").concat(SELECTOR_INPUT),
      eventName: 'blur',
      callback: 'validateInput',
      invalidStateSelectors: ["".concat(SELECTOR_FIELD_USERNAME, " ").concat(SELECTOR_LABEL)],
      errorNodeSelectors: [SELECTOR_FIELD_USERNAME]
    }, {
      selector: "".concat(SELECTOR_FIELD, " ").concat(SELECTOR_FIELD_FIRST, " ").concat(SELECTOR_INPUT),
      eventName: 'blur',
      callback: 'validateInput',
      invalidStateSelectors: ["".concat(SELECTOR_FIELD_FIRST, " ").concat(SELECTOR_LABEL)],
      errorNodeSelectors: [SELECTOR_FIELD_FIRST]
    }, {
      selector: "".concat(SELECTOR_FIELD, " ").concat(SELECTOR_FIELD_SECOND, " ").concat(SELECTOR_INPUT),
      eventName: 'blur',
      callback: 'comparePasswords',
      invalidStateSelectors: ["".concat(SELECTOR_FIELD_SECOND, " ").concat(SELECTOR_LABEL)],
      errorNodeSelectors: [SELECTOR_FIELD_SECOND]
    }, {
      selector: "".concat(SELECTOR_FIELD, " ").concat(SELECTOR_FIELD_EMAIL, " ").concat(SELECTOR_INPUT),
      eventName: 'blur',
      callback: 'validateEmailInput',
      invalidStateSelectors: ["".concat(SELECTOR_FIELD_EMAIL, " ").concat(SELECTOR_LABEL)],
      errorNodeSelectors: [SELECTOR_FIELD_EMAIL]
    }, {
      isValueValidator: false,
      selector: ".ez-data-source__input[type=\"checkbox\"]",
      eventName: 'change',
      callback: 'updateState'
    }]
  });
  validator.init();
  eZ.addConfig('fieldTypeValidators', [validator], true);
})(window, window.document, window.eZ);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/sidebar/extra.actions.js":
/*!**************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/sidebar/extra.actions.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(function (global, doc) {
  var CLASS_HIDDEN = 'ez-extra-actions--hidden';
  var CLASS_EXPANDED = 'ez-context-menu--expanded';
  var CLASS_ACTIVE_BUTTON = 'ez-btn--active-button';
  var CLASS_PREVENT_SHOW = 'ez-extra-actions--prevent-show';
  var ACTIONS_CONTAINER_MARGIN = 8;
  var RESIZE_AND_SCROLL_TIMEOUT = 50;

  var btns = _toConsumableArray(doc.querySelectorAll('.ez-btn--extra-actions'));

  var menu = doc.querySelector('.ez-context-menu');
  var footer = doc.querySelector('.ez-footer');
  var containerHeightTimeout;

  var haveHiddenPart = function haveHiddenPart(element) {
    return element.classList.contains(CLASS_HIDDEN) && !element.classList.contains(CLASS_PREVENT_SHOW);
  };

  var setContainerHeight = function setContainerHeight() {
    var container = doc.querySelector('.ez-extra-actions:not(.ez-extra-actions--hidden)');
    var bottomPosition = Math.min(footer.getBoundingClientRect().top, global.innerHeight);
    var containerHeight = bottomPosition - container.getBoundingClientRect().top - ACTIONS_CONTAINER_MARGIN;
    container.style.height = "".concat(containerHeight, "px");
  };

  var setContainerHeightTimeout = function setContainerHeightTimeout() {
    clearTimeout(containerHeightTimeout);
    containerHeightTimeout = setTimeout(setContainerHeight, RESIZE_AND_SCROLL_TIMEOUT);
  };

  var addContainerHeightListeners = function addContainerHeightListeners() {
    global.addEventListener('scroll', setContainerHeightTimeout, false);
    global.addEventListener('resize', setContainerHeightTimeout, false);
  };

  var removeContainerHeightListeners = function removeContainerHeightListeners() {
    global.removeEventListener('scroll', setContainerHeightTimeout, false);
    global.removeEventListener('resize', setContainerHeightTimeout, false);
  };

  btns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var actions = doc.querySelector(".ez-extra-actions[data-actions=\"".concat(btn.dataset.actions, "\"]"));
      var isHidden = haveHiddenPart(actions);
      var methodNameButton = isHidden ? 'add' : 'remove';
      var methodNameContainer = isHidden ? 'remove' : 'add';
      var methodNameMenu = isHidden ? 'add' : 'remove';
      var focusElement = actions.querySelector(btn.dataset.focusElement);

      var detectClickOutside = function detectClickOutside(event) {
        var isNotButton = !btn.contains(event.target);
        var shouldCollapseMenu = !btns.includes(event.target);
        var isNotExtraActions = !event.target.closest('.ez-extra-actions');
        var isNotCalendar = !event.target.closest('.flatpickr-calendar');

        if (isNotButton && isNotExtraActions && isNotCalendar) {
          btn.classList.remove(CLASS_ACTIVE_BUTTON);
          actions.classList.add(CLASS_HIDDEN);

          if (shouldCollapseMenu) {
            menu.classList.remove(CLASS_EXPANDED);
          }

          doc.body.removeEventListener('click', detectClickOutside, false);
          removeContainerHeightListeners();
        }
      };

      btn.classList[methodNameButton](CLASS_ACTIVE_BUTTON);
      actions.classList[methodNameContainer](CLASS_HIDDEN);
      menu.classList[methodNameMenu](CLASS_EXPANDED);

      if (!actions.classList.contains(CLASS_HIDDEN)) {
        doc.body.addEventListener('click', detectClickOutside, false);
        setContainerHeight();
        addContainerHeightListeners();
      } else {
        doc.body.removeEventListener('click', detectClickOutside);
        removeContainerHeightListeners();
      }

      if (focusElement) {
        focusElement.focus();
      }
    }, false);
  });
})(window, window.document);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-matrix-fieldtype/src/bundle/Resources/public/js/scripts/fieldType/ezmatrix.js":
/*!*******************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-matrix-fieldtype/src/bundle/Resources/public/js/scripts/fieldType/ezmatrix.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

(function (global, doc, eZ) {
  var SELECTOR_REMOVE_MATRIX_ENTRY = '.ez-btn--remove-matrix-entry';
  var SELECTOR_ADD_MATRIX_ENTRY = '.ez-btn--add-matrix-entry';
  var SELECTOR_MATRIX_ENTRIES_CONTAINER = '.ez-table__body';
  var SELECTOR_MATRIX_ENTRY_TEMPLATE = '.ez-data-source__entry-template';
  var SELECTOR_MATRIX_ENTRY_CHECKBOX = '.ez-table__ezmatrix-entry-checkbox';
  var SELECTOR_MATRIX_ENTRY = '.ez-table__matrix-entry';
  var SELECTOR_FIELD = '.ez-field-edit--ezmatrix';
  var NUMBER_PLACEHOLDER = /__index__/g;

  if (!doc.querySelector(SELECTOR_FIELD)) {
    return;
  }

  var EzMatrixValidator = /*#__PURE__*/function (_eZ$BaseFieldValidato) {
    "use strict";

    _inherits(EzMatrixValidator, _eZ$BaseFieldValidato);

    var _super = _createSuper(EzMatrixValidator);

    function EzMatrixValidator() {
      _classCallCheck(this, EzMatrixValidator);

      return _super.apply(this, arguments);
    }

    _createClass(EzMatrixValidator, [{
      key: "addItem",
      value:
      /**
       * Adds an item.
       *
       * @method addItem
       * @param {Event} event
       * @memberof EzMatrixValidator
       */
      function addItem(event) {
        var matrixNode = event.target.closest(SELECTOR_FIELD);
        var template = matrixNode.querySelector(SELECTOR_MATRIX_ENTRY_TEMPLATE).innerHTML;
        var node = matrixNode.querySelector(SELECTOR_MATRIX_ENTRIES_CONTAINER);
        node.insertAdjacentHTML('beforeend', this.setIndex(matrixNode, template));
        this.reinit();
        this.updateDisabledState(matrixNode);
      }
    }, {
      key: "findCheckedEntries",
      value: function findCheckedEntries(node) {
        return node.querySelectorAll("".concat(SELECTOR_MATRIX_ENTRY_CHECKBOX, ":checked"));
      }
    }, {
      key: "getNextIndex",
      value: function getNextIndex(parentNode) {
        var node = parentNode.querySelector(SELECTOR_MATRIX_ENTRIES_CONTAINER);
        return node.dataset.nextIndex++;
      }
      /**
       * Sets an index to template.
       *
       * @method setIndex
       * @param {HTMLElement} parentNode
       * @param {String} template
       * @returns {String}
       * @memberof EzMatrixValidator
       */

    }, {
      key: "setIndex",
      value: function setIndex(parentNode, template) {
        return template.replace(NUMBER_PLACEHOLDER, this.getNextIndex(parentNode));
      }
      /**
       * Updates the disable state.
       *
       * @method updateDisabledState
       * @param {HTMLElement} parentNode
       * @memberof EzMatrixValidator
       */

    }, {
      key: "updateDisabledState",
      value: function updateDisabledState(parentNode) {
        var isEnabled = this.findCheckedEntries(parentNode).length > 0;
        var methodName = isEnabled ? 'removeAttribute' : 'setAttribute';
        parentNode.querySelectorAll(SELECTOR_REMOVE_MATRIX_ENTRY).forEach(function (btn) {
          return btn[methodName]('disabled', !isEnabled);
        });
      }
      /**
       * Removes an item.
       *
       * @method removeItem
       * @param {Event} event
       * @memberof EzMatrixValidator
       */

    }, {
      key: "removeItems",
      value: function removeItems(event) {
        var matrixNode = event.target.closest(SELECTOR_FIELD);
        this.findCheckedEntries(matrixNode).forEach(function (element) {
          return element.closest(SELECTOR_MATRIX_ENTRY).remove();
        });
        this.updateDisabledState(matrixNode);
        this.reinit();
      }
    }, {
      key: "checkEntry",
      value: function checkEntry(event) {
        var matrixNode = event.target.closest(SELECTOR_FIELD);
        this.updateDisabledState(matrixNode);
      }
      /**
       * Attaches event listeners based on a config.
       *
       * @method init
       * @memberof EzMatrixValidator
       */

    }, {
      key: "init",
      value: function init() {
        var _this = this;

        _get(_getPrototypeOf(EzMatrixValidator.prototype), "init", this).call(this);

        doc.querySelectorAll(this.fieldSelector).forEach(function (field) {
          var rowsCount = field.querySelectorAll(SELECTOR_MATRIX_ENTRY).length;
          var minimumRows = parseInt(field.querySelector(SELECTOR_MATRIX_ENTRIES_CONTAINER).dataset.minimumRows, 10);
          var emptyEntriesAdded = field.dataset.emptyEntriesAdded;
          field.dataset.emptyEntriesAdded = true;

          if (!emptyEntriesAdded) {
            for (var i = 0; i < minimumRows - rowsCount; i++) {
              _this.addItem({
                target: field
              });
            }
          }

          _this.updateDisabledState(field);
        });
      }
    }]);

    return EzMatrixValidator;
  }(eZ.BaseFieldValidator);

  var validator = new EzMatrixValidator({
    classInvalid: 'is-invalid',
    fieldSelector: SELECTOR_FIELD,
    eventsMap: [{
      isValueValidator: false,
      selector: SELECTOR_MATRIX_ENTRY_CHECKBOX,
      eventName: 'click',
      callback: 'checkEntry'
    }, {
      isValueValidator: false,
      selector: SELECTOR_REMOVE_MATRIX_ENTRY,
      eventName: 'click',
      callback: 'removeItems'
    }, {
      isValueValidator: false,
      selector: SELECTOR_ADD_MATRIX_ENTRY,
      eventName: 'click',
      callback: 'addItem'
    }]
  });
  validator.init();
  global.eZ.fieldTypeValidators = global.eZ.fieldTypeValidators ? [].concat(_toConsumableArray(global.eZ.fieldTypeValidators), [validator]) : [validator];
})(window, window.document, window.eZ);

/***/ }),

/***/ 24:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./vendor/ezsystems/ezplatform-admin-ui-assets/Resources/public/vendors/leaflet/dist/leaflet.js ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.location.tab.js ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.content.edit.js ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/base/base-field.js ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/base/base-file-field.js ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/base/base-preview-field.js ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/base/multi-input-field.js ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezauthor.js ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezbinaryfile.js ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezboolean.js ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezcountry.js ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezdate.js ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezdatetime.js ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezemail.js ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezfloat.js ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezgmaplocation.js ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezimage.js ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezimageasset.js ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezinteger.js ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezkeyword.js ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezmedia.js ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezobjectrelationlist.js ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezrichtext.js ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezselection.js ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezstring.js ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/eztext.js ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/eztime.js ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezurl.js ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezuser.js ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/sidebar/extra.actions.js ./vendor/ezsystems/ezplatform-matrix-fieldtype/src/bundle/Resources/public/js/scripts/fieldType/ezmatrix.js ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-admin-ui-assets/Resources/public/vendors/leaflet/dist/leaflet.js */"./vendor/ezsystems/ezplatform-admin-ui-assets/Resources/public/vendors/leaflet/dist/leaflet.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.location.tab.js */"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.location.tab.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.content.edit.js */"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.content.edit.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/base/base-field.js */"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/base/base-field.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/base/base-file-field.js */"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/base/base-file-field.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/base/base-preview-field.js */"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/base/base-preview-field.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/base/multi-input-field.js */"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/base/multi-input-field.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezauthor.js */"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezauthor.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezbinaryfile.js */"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezbinaryfile.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezboolean.js */"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezboolean.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezcountry.js */"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezcountry.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezdate.js */"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezdate.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezdatetime.js */"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezdatetime.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezemail.js */"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezemail.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezfloat.js */"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezfloat.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezgmaplocation.js */"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezgmaplocation.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezimage.js */"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezimage.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezimageasset.js */"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezimageasset.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezinteger.js */"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezinteger.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezkeyword.js */"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezkeyword.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezmedia.js */"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezmedia.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezobjectrelationlist.js */"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezobjectrelationlist.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezrichtext.js */"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezrichtext.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezselection.js */"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezselection.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezstring.js */"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezstring.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/eztext.js */"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/eztext.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/eztime.js */"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/eztime.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezurl.js */"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezurl.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezuser.js */"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/ezuser.js");
__webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/sidebar/extra.actions.js */"./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/sidebar/extra.actions.js");
module.exports = __webpack_require__(/*! /home/paul/PhpstormProjects/ibexa_website/vendor/ezsystems/ezplatform-matrix-fieldtype/src/bundle/Resources/public/js/scripts/fieldType/ezmatrix.js */"./vendor/ezsystems/ezplatform-matrix-fieldtype/src/bundle/Resources/public/js/scripts/fieldType/ezmatrix.js");


/***/ })

},[[24,"runtime"]]]);