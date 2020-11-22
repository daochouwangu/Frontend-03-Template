/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./Button.js":
/*!*******************!*\
  !*** ./Button.js ***!
  \*******************/
/*! namespace exports */
/*! export ATTRIBUTE [provided] [no usage info] [missing usage info prevents renaming] -> ./framework.js .ATTRIBUTE */
/*! export Button [provided] [no usage info] [missing usage info prevents renaming] */
/*! export STATE [provided] [no usage info] [missing usage info prevents renaming] -> ./framework.js .STATE */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "STATE": () => /* reexport safe */ _framework_js__WEBPACK_IMPORTED_MODULE_0__.STATE,
/* harmony export */   "ATTRIBUTE": () => /* reexport safe */ _framework_js__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE,
/* harmony export */   "Button": () => /* binding */ Button
/* harmony export */ });
/* harmony import */ var _framework_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./framework.js */ "./framework.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var Button = /*#__PURE__*/function (_Component) {
  _inherits(Button, _Component);

  var _super = _createSuper(Button);

  function Button() {
    _classCallCheck(this, Button);

    return _super.call(this);
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      this.childContainer = (0,_framework_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null);
      this.root = (0,_framework_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, this.childContainer).render();
      return this.root;
    }
  }, {
    key: "appendChild",
    value: function appendChild(child) {
      if (!this.childContainer) {
        this.render();
      }

      this.childContainer.appendChild(child);
    }
  }]);

  return Button;
}(_framework_js__WEBPACK_IMPORTED_MODULE_0__.Component);

/***/ }),

/***/ "./Carousel.js":
/*!*********************!*\
  !*** ./Carousel.js ***!
  \*********************/
/*! namespace exports */
/*! export ATTRIBUTE [provided] [no usage info] [missing usage info prevents renaming] -> ./framework.js .ATTRIBUTE */
/*! export Carousel [provided] [no usage info] [missing usage info prevents renaming] */
/*! export STATE [provided] [no usage info] [missing usage info prevents renaming] -> ./framework.js .STATE */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "STATE": () => /* reexport safe */ _framework_js__WEBPACK_IMPORTED_MODULE_0__.STATE,
/* harmony export */   "ATTRIBUTE": () => /* reexport safe */ _framework_js__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE,
/* harmony export */   "Carousel": () => /* binding */ Carousel
/* harmony export */ });
/* harmony import */ var _framework_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./framework.js */ "./framework.js");
/* harmony import */ var _gesture_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gesture.js */ "./gesture.js");
/* harmony import */ var _animation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animation.js */ "./animation.js");
/* harmony import */ var _ease_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ease.js */ "./ease.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var Carousel = /*#__PURE__*/function (_Component) {
  _inherits(Carousel, _Component);

  var _super = _createSuper(Carousel);

  function Carousel() {
    _classCallCheck(this, Carousel);

    return _super.call(this);
  }

  _createClass(Carousel, [{
    key: "render",
    value: function render() {
      var _this = this;

      this.root = document.createElement("div");
      this.root.classList.add("carousel");

      var _iterator = _createForOfIteratorHelper(this[_framework_js__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE].data),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var record = _step.value;
          var child = document.createElement("div");
          child.style.backgroundImage = "url('".concat(record.img, "')");
          this.root.appendChild(child);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      (0,_gesture_js__WEBPACK_IMPORTED_MODULE_2__.enableGesture)(this.root);
      var timeline = new _animation_js__WEBPACK_IMPORTED_MODULE_1__.Timeline();
      timeline.start();
      var children = this.root.children;
      var t = 0;
      var ax = 0;
      this[_framework_js__WEBPACK_IMPORTED_MODULE_0__.STATE].position = 0;
      var handler;
      this.root.addEventListener("start", function (event) {
        timeline.pause();
        clearInterval(handler);

        if (Date.now() - t < 500) {
          var progress = (Date.now() - t) / 500;
          ax = (0,_ease_js__WEBPACK_IMPORTED_MODULE_3__.ease)(progress) * 500 - 500;
        } else {
          ax = 0;
        }
      });
      this.root.addEventListener("tap", function (event) {
        _this.triggerEvent("click", {
          data: _this[_framework_js__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE].data[_this[_framework_js__WEBPACK_IMPORTED_MODULE_0__.STATE].position],
          position: _this[_framework_js__WEBPACK_IMPORTED_MODULE_0__.STATE].position
        });
      });
      this.root.addEventListener("pan", function (event) {
        var x = event.clientX - event.startX - ax;
        var current = _this[_framework_js__WEBPACK_IMPORTED_MODULE_0__.STATE].position - (x - x % 500) / 500;

        for (var _i = 0, _arr = [-1, 0, 1]; _i < _arr.length; _i++) {
          var offset = _arr[_i];
          var pos = current + offset;
          pos = (pos % children.length + children.length) % children.length;
          children[pos].style.transition = "none";
          children[pos].style.transform = "translateX(".concat(-pos * 500 + offset * 500 + x % 500, "px)");
        }
      });
      this.root.addEventListener("end", function (event) {
        timeline.reset();
        timeline.start();
        handler = setInterval(nextPicture, 3000);
        var x = event.clientX - event.startX - ax;
        var current = _this[_framework_js__WEBPACK_IMPORTED_MODULE_0__.STATE].position - (x - x % 500) / 500;
        var direction = Math.round(x % 500 / 500);

        if (event.isFlick) {
          if (event.velocity < 0) {
            direction = Math.ceil(x % 500 / 500);
          } else {
            direction = Math.floor(x % 500 / 500);
          }
        }

        for (var _i2 = 0, _arr2 = [-1, 0, 1]; _i2 < _arr2.length; _i2++) {
          var offset = _arr2[_i2];
          var pos = current + offset;
          pos = (pos % children.length + children.length) % children.length;
          children[pos].style.transition = "none";
          timeline.add(new _animation_js__WEBPACK_IMPORTED_MODULE_1__.Animation(children[pos].style, "transform", -pos * 500 + offset * 500 + x % 500, -500 * pos + offset * 500 + direction * 500, 500, 0, _ease_js__WEBPACK_IMPORTED_MODULE_3__.ease, function (v) {
            return "translateX(".concat(v, "px)");
          }));
        }

        _this[_framework_js__WEBPACK_IMPORTED_MODULE_0__.STATE].position = _this[_framework_js__WEBPACK_IMPORTED_MODULE_0__.STATE].position - (x - x % 500) / 500 - direction;
        _this[_framework_js__WEBPACK_IMPORTED_MODULE_0__.STATE].position = (_this[_framework_js__WEBPACK_IMPORTED_MODULE_0__.STATE].position % children.length + children.length) % children.length;

        _this.triggerEvent("change", {
          position: _this[_framework_js__WEBPACK_IMPORTED_MODULE_0__.STATE].position
        });
      });

      var nextPicture = function nextPicture() {
        var nextIndex = (_this[_framework_js__WEBPACK_IMPORTED_MODULE_0__.STATE].position + 1) % children.length;
        var current = children[_this[_framework_js__WEBPACK_IMPORTED_MODULE_0__.STATE].position];
        var next = children[nextIndex];
        t = Date.now();
        timeline.add(new _animation_js__WEBPACK_IMPORTED_MODULE_1__.Animation(current.style, "transform", -_this[_framework_js__WEBPACK_IMPORTED_MODULE_0__.STATE].position * 500, -500 - _this[_framework_js__WEBPACK_IMPORTED_MODULE_0__.STATE].position * 500, 500, 0, _ease_js__WEBPACK_IMPORTED_MODULE_3__.ease, function (v) {
          return "translateX(".concat(v, "px)");
        }));
        timeline.add(new _animation_js__WEBPACK_IMPORTED_MODULE_1__.Animation(next.style, "transform", 500 - nextIndex * 500, -nextIndex * 500, 500, 0, _ease_js__WEBPACK_IMPORTED_MODULE_3__.ease, function (v) {
          return "translateX(".concat(v, "px)");
        }));
        _this[_framework_js__WEBPACK_IMPORTED_MODULE_0__.STATE].position = nextIndex;

        _this.triggerEvent("change", {
          position: _this[_framework_js__WEBPACK_IMPORTED_MODULE_0__.STATE].position
        });
      };

      handler = setInterval(nextPicture, 3000);
      return this.root;
    }
  }]);

  return Carousel;
}(_framework_js__WEBPACK_IMPORTED_MODULE_0__.Component);

/***/ }),

/***/ "./List.js":
/*!*****************!*\
  !*** ./List.js ***!
  \*****************/
/*! namespace exports */
/*! export ATTRIBUTE [provided] [no usage info] [missing usage info prevents renaming] -> ./framework.js .ATTRIBUTE */
/*! export List [provided] [no usage info] [missing usage info prevents renaming] */
/*! export STATE [provided] [no usage info] [missing usage info prevents renaming] -> ./framework.js .STATE */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "STATE": () => /* reexport safe */ _framework_js__WEBPACK_IMPORTED_MODULE_0__.STATE,
/* harmony export */   "ATTRIBUTE": () => /* reexport safe */ _framework_js__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE,
/* harmony export */   "List": () => /* binding */ List
/* harmony export */ });
/* harmony import */ var _framework_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./framework.js */ "./framework.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var List = /*#__PURE__*/function (_Component) {
  _inherits(List, _Component);

  var _super = _createSuper(List);

  function List() {
    _classCallCheck(this, List);

    return _super.call(this);
  }

  _createClass(List, [{
    key: "render",
    value: function render() {
      this.children = this[_framework_js__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE].data.map(this.template);
      this.root = (0,_framework_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, this.children).render();
      return this.root;
    }
  }, {
    key: "appendChild",
    value: function appendChild(child) {
      this.template = child;
      this.render();
    }
  }]);

  return List;
}(_framework_js__WEBPACK_IMPORTED_MODULE_0__.Component);

/***/ }),

/***/ "./animation.js":
/*!**********************!*\
  !*** ./animation.js ***!
  \**********************/
/*! namespace exports */
/*! export Animation [provided] [no usage info] [missing usage info prevents renaming] */
/*! export Timeline [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Timeline": () => /* binding */ Timeline,
/* harmony export */   "Animation": () => /* binding */ Animation
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TICK = Symbol("tick");
var TICK_HANDLER = Symbol("tick-handler");
var ANIMATIONS = Symbol("animations");
var START_TIME = Symbol("animation start time");
var PAUSE_START = Symbol("pause start");
var PAUSE_TIME = Symbol("pause time");
var Status = {
  WAIT: Symbol("wait"),
  RUNNING: Symbol("running"),
  PAUSE: Symbol("pause")
};
var Timeline = /*#__PURE__*/function () {
  function Timeline(props) {
    _classCallCheck(this, Timeline);

    this.state = Status.WAIT;
    this[START_TIME] = new WeakMap();
    this[ANIMATIONS] = new Set();
  }

  _createClass(Timeline, [{
    key: "start",
    value: function start() {
      var _this = this;

      if (this.state !== Status.WAIT) {
        return;
      }

      this.state = Status.RUNNING;
      var startTime = Date.now(); // 被暂停的时间

      this[PAUSE_TIME] = 0;

      this[TICK] = function () {
        var now = Date.now();

        var _iterator = _createForOfIteratorHelper(_this[ANIMATIONS]),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var animation = _step.value;

            var _startTime = Math.max(startTime, _this[START_TIME].get(animation));

            var t = now - _startTime - _this[PAUSE_TIME] - animation.delay;

            if (animation.duration < t) {
              _this[ANIMATIONS]["delete"](animation); // 保证最后相等，不然可能会超出一点点


              t = animation.duration;
            }

            if (t > 0) {
              animation.receiveTime(t);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        _this[TICK_HANDLER] = requestAnimationFrame(_this[TICK]);
      };

      this[TICK]();
    }
  }, {
    key: "pause",
    value: function pause() {
      if (this.state !== Status.RUNNING) {
        return;
      }

      this.state = Status.PAUSE;
      this[PAUSE_START] = Date.now();
      cancelAnimationFrame(this[TICK_HANDLER]);
    }
  }, {
    key: "resume",
    value: function resume() {
      if (this.state !== Status.PAUSE) {
        return;
      }

      this.state = Status.RUNNING;
      this[PAUSE_TIME] += Date.now() - this[PAUSE_START];
      this[TICK]();
    }
  }, {
    key: "add",
    value: function add(animation, startTime) {
      if (arguments.length < 2) {
        startTime = Date.now();
      }

      this[START_TIME].set(animation, startTime);
      this[ANIMATIONS].add(animation);
    }
  }, {
    key: "reset",
    value: function reset() {
      this.pause();
      this.state = Status.WAIT;
      this[PAUSE_START] = 0;
      this[PAUSE_TIME] = 0;
      this[ANIMATIONS] = new Set();
      this[START_TIME] = new Map();
      this[TICK_HANDLER] = null;
    }
  }]);

  return Timeline;
}();
var Animation = /*#__PURE__*/function () {
  function Animation(object, property, startValue, endValue, duration, delay, timingFunction, template) {
    _classCallCheck(this, Animation);

    timingFunction = timingFunction || function (v) {
      return v;
    };

    template = template || function (v) {
      return v;
    };

    this.object = object;
    this.property = property;
    this.startValue = startValue;
    this.endValue = endValue;
    this.duration = duration;
    this.timingFunction = timingFunction;
    this.delay = delay;
    this.template = template;
  }

  _createClass(Animation, [{
    key: "receiveTime",
    value: function receiveTime(time) {
      var range = this.endValue - this.startValue;
      var progress = this.timingFunction(time / this.duration);
      this.object[this.property] = this.template(this.startValue + range * progress);
    }
  }]);

  return Animation;
}();

/***/ }),

/***/ "./ease.js":
/*!*****************!*\
  !*** ./ease.js ***!
  \*****************/
/*! namespace exports */
/*! export ease [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ease": () => /* binding */ ease
/* harmony export */ });
var ease = function ease(v) {
  return v;
};

/***/ }),

/***/ "./framework.js":
/*!**********************!*\
  !*** ./framework.js ***!
  \**********************/
/*! namespace exports */
/*! export ATTRIBUTE [provided] [no usage info] [missing usage info prevents renaming] */
/*! export Component [provided] [no usage info] [missing usage info prevents renaming] */
/*! export STATE [provided] [no usage info] [missing usage info prevents renaming] */
/*! export createElement [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createElement": () => /* binding */ createElement,
/* harmony export */   "STATE": () => /* binding */ STATE,
/* harmony export */   "ATTRIBUTE": () => /* binding */ ATTRIBUTE,
/* harmony export */   "Component": () => /* binding */ Component
/* harmony export */ });
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function createElement(type, attributes) {
  var element;

  if (typeof type === 'string') {
    element = new ElementWrapper(type);
  } else {
    element = new type();
  }

  for (var name in attributes) {
    element.setAttribute(name, attributes[name]);
  }

  var processChildren = function processChildren(children) {
    var _iterator = _createForOfIteratorHelper(children),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var child = _step.value;

        if (_typeof(child) === "object" && child instanceof Array) {
          processChildren(child);
          continue;
        } else if (typeof child === 'string') {
          child = new TextWrapper(child);
        }

        element.appendChild(child);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  };

  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  processChildren(children);
  return element;
}
var STATE = Symbol("state");
var ATTRIBUTE = Symbol("attribute");
var Component = /*#__PURE__*/function () {
  function Component(type) {
    _classCallCheck(this, Component);

    this[ATTRIBUTE] = Object.create(null);
    this[STATE] = Object.create(null);
  }

  _createClass(Component, [{
    key: "setAttribute",
    value: function setAttribute(name, value) {
      this[ATTRIBUTE][name] = value;
    }
  }, {
    key: "appendChild",
    value: function appendChild(child) {
      console.log(child);
      child.mountTo(this.root);
    }
  }, {
    key: "mountTo",
    value: function mountTo(parent) {
      if (!this.root) {
        this.render();
      }

      parent.appendChild(this.root);
    }
  }, {
    key: "triggerEvent",
    value: function triggerEvent(type, args) {
      var name = "on" + type.replace(/^[\s\S]/, function (s) {
        return s.toUpperCase();
      });
      console.log(name);
      this[ATTRIBUTE][name](new CustomEvent(type, {
        detail: args
      }));
    }
  }, {
    key: "render",
    value: function render() {
      return this.root;
    }
  }]);

  return Component;
}();

var ElementWrapper = /*#__PURE__*/function (_Component) {
  _inherits(ElementWrapper, _Component);

  var _super = _createSuper(ElementWrapper);

  function ElementWrapper(type) {
    var _this;

    _classCallCheck(this, ElementWrapper);

    _this = _super.call(this);
    _this.root = document.createElement(type);
    return _this;
  }

  _createClass(ElementWrapper, [{
    key: "setAttribute",
    value: function setAttribute(name, value) {
      this.root.setAttribute(name, value);
    }
  }]);

  return ElementWrapper;
}(Component);

var TextWrapper = /*#__PURE__*/function (_Component2) {
  _inherits(TextWrapper, _Component2);

  var _super2 = _createSuper(TextWrapper);

  function TextWrapper(content) {
    var _this2;

    _classCallCheck(this, TextWrapper);

    _this2 = _super2.call(this);
    _this2.root = document.createTextNode(content);
    return _this2;
  }

  return TextWrapper;
}(Component);

/***/ }),

/***/ "./gesture.js":
/*!********************!*\
  !*** ./gesture.js ***!
  \********************/
/*! namespace exports */
/*! export Dispatcher [provided] [no usage info] [missing usage info prevents renaming] */
/*! export Listener [provided] [no usage info] [missing usage info prevents renaming] */
/*! export Recognizer [provided] [no usage info] [missing usage info prevents renaming] */
/*! export enableGesture [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dispatcher": () => /* binding */ Dispatcher,
/* harmony export */   "Listener": () => /* binding */ Listener,
/* harmony export */   "Recognizer": () => /* binding */ Recognizer,
/* harmony export */   "enableGesture": () => /* binding */ enableGesture
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Dispatcher = /*#__PURE__*/function () {
  function Dispatcher(element) {
    _classCallCheck(this, Dispatcher);

    this.element = element;
  }

  _createClass(Dispatcher, [{
    key: "dispatch",
    value: function dispatch(type, properties) {
      var event = new Event(type);

      for (var name in properties) {
        event[name] = properties[name];
      }

      this.element.dispatchEvent(event);
    }
  }]);

  return Dispatcher;
}(); // listen => recognize => dispatch
// new Listener(new Recognizer(dispatch))

var Listener = function Listener(element, recognizer) {
  _classCallCheck(this, Listener);

  var contexts = new Map();
  var isListeningMouse = false;
  element.addEventListener("mousedown", function (event) {
    // event.button 1~5 表示按下哪个键
    var context = Object.create(null);
    contexts.set("mouse".concat(1 << event.button), context);
    recognizer.start(event, context);

    var mouseMove = function mouseMove(event) {
      var button = 1;

      while (button <= event.buttons) {
        // 一个坑 buttons里的第二位和第四位是反的
        if (button & event.buttons) {
          var key = void 0;

          if (button === 2) {
            key = 4;
          } else if (button === 4) {
            key = 2;
          } else {
            key = button;
          }

          var _context = contexts.get("mouse" + key);

          recognizer.move(event, _context);
        }

        button = button << 1;
      }
    };

    var mouseUp = function mouseUp(event) {
      var context = contexts.get("mouse" + (1 << event.button));
      recognizer.end(event, context);
      contexts["delete"]("mouse" + (1 << event.button));

      if (event.buttons === 0) {
        document.removeEventListener("mousemove", mouseMove);
        document.removeEventListener("mouseup", mouseUp);
        isListeningMouse = false;
      }
    };

    if (!isListeningMouse) {
      document.addEventListener("mousemove", mouseMove);
      document.addEventListener("mouseup", mouseUp);
      isListeningMouse = true;
    }
  });
  element.addEventListener("touchstart", function (event) {
    var _iterator = _createForOfIteratorHelper(event.changedTouches),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var touch = _step.value;
        var context = Object.create(null);
        contexts.set(touch.identifier, context);
        recognizer.start(touch, context);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  });
  element.addEventListener("touchmove", function (event) {
    var _iterator2 = _createForOfIteratorHelper(event.changedTouches),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var touch = _step2.value;
        var context = contexts.get(touch.identifier);
        recognizer.move(touch, context);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  });
  element.addEventListener("touchend", function (event) {
    var _iterator3 = _createForOfIteratorHelper(event.changedTouches),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var touch = _step3.value;
        var context = contexts.get(touch.identifier);
        recognizer.end(touch, context);
        contexts["delete"](touch.identifier);
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
  }); // 被打断,比如弹窗

  element.addEventListener("touchcancel", function (event) {
    var _iterator4 = _createForOfIteratorHelper(event.changedTouches),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var touch = _step4.value;
        var context = contexts.get(touch.identifier);
        recognizer.cancel(touch, context);
        contexts["delete"](touch.identifier);
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
  });
};
var Recognizer = /*#__PURE__*/function () {
  function Recognizer(dispatcher) {
    _classCallCheck(this, Recognizer);

    this.dispatcher = dispatcher;
  }

  _createClass(Recognizer, [{
    key: "start",
    value: function start(point, context) {
      var _this = this;

      // 初始化起始手势位置
      context.startX = point.clientX;
      context.startY = point.clientY;
      this.dispatcher.dispatch("start", {
        clientX: point.clientX,
        clientY: point.clientY
      });
      context.points = [{
        t: Date.now(),
        x: point.clientX,
        y: point.clientY
      }]; // 初始化

      context.isPan = false;
      context.isTap = true;
      context.isPress = false; // 延时0.5秒， 触发则是长按

      context.handler = setTimeout(function () {
        context.isTap = false;
        context.isPan = false;
        context.isPress = true;

        _this.dispatcher.dispatch("press", {});

        context.handler = null;
      }, 500);
    }
  }, {
    key: "move",
    value: function move(point, context) {
      var dx = point.clientX - context.startX,
          dy = point.clientY - context.startY;
      context.isVertical = Math.abs(dx) < Math.abs(dy); // 第一次移动

      if (!context.isPan && Math.pow(dx, 2) + Math.pow(dy, 2) > 100) {
        context.isTap = false;
        context.isPan = true;
        context.isPress = false;
        this.dispatcher.dispatch("panstart", {
          startX: context.startX,
          startY: context.startY,
          clientX: point.clientX,
          clientY: point.clientY,
          isVertical: context.isVertical
        });
        clearTimeout(context.handler);
      } // 移动


      if (context.isPan) {
        this.dispatcher.dispatch("pan", {
          startX: context.startX,
          startY: context.startY,
          clientX: point.clientX,
          clientY: point.clientY,
          isVertical: context.isVertical
        });
      }

      context.points = context.points.filter(function (point) {
        return Date.now() - point.t < 500;
      });
      context.points.push({
        t: Date.now(),
        x: point.clientX,
        y: point.clientY
      });
    }
  }, {
    key: "end",
    value: function end(point, context) {
      // 如果是单击
      if (context.isTap) {
        this.dispatcher.dispatch("tap", {});
        clearTimeout(context.handler);
      } // 如果是长按


      if (context.isPress) {
        this.dispatcher.dispatch("pressend", {});
      }

      context.points = context.points.filter(function (point) {
        return Date.now() - point.t < 500;
      });
      var d, v;

      if (!context.points.length) {
        v = 0;
      } else {
        d = Math.sqrt(Math.pow(point.clientX - context.points[0].x, 2) + Math.pow(point.clientY - context.points[0].y, 2));
        v = d / (Date.now() - context.points[0].t);
      }

      if (v > 1.5) {
        this.dispatcher.dispatch("flick", {
          startX: context.startX,
          startY: context.startY,
          clientX: point.clientX,
          clientY: point.clientY,
          isVertical: context.isVertical,
          isFlick: context.isFlick,
          velocity: v
        });
        context.isFlick = true;
      } else {
        context.isFlick = false;
      } // 如果是移动


      if (context.isPan) {
        this.dispatcher.dispatch("panend", {
          startX: context.startX,
          startY: context.startY,
          clientX: point.clientX,
          clientY: point.clientY,
          isVertical: context.isVertical,
          isFlick: context.isFlick,
          velocity: v
        });
      }

      this.dispatcher.dispatch("end", {
        startX: context.startX,
        startY: context.startY,
        clientX: point.clientX,
        clientY: point.clientY,
        isVertical: context.isVertical,
        isFlick: context.isFlick,
        velocity: v
      });
    }
  }, {
    key: "cancel",
    value: function cancel(point, context) {
      this.dispatcher.dispatch("cancel", {});
    }
  }]);

  return Recognizer;
}();
function enableGesture(element) {
  new Listener(element, new Recognizer(new Dispatcher(element)));
}

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Carousel */ "./Carousel.js");
/* harmony import */ var _framework__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./framework */ "./framework.js");
/* harmony import */ var _Button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button.js */ "./Button.js");
/* harmony import */ var _List_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./List.js */ "./List.js");




var d = [{
  img: "https://static001.geekbang.org/resource/image/bb/21/bb38fb7c1073eaee1755f81131f11d21.jpg",
  url: "https://time.geekbang.org",
  title: "蓝猫"
}, {
  img: "https://static001.geekbang.org/resource/image/1b/21/1b809d9a2bdf3ecc481322d7c9223c21.jpg",
  url: "https://time.geekbang.org",
  title: "橘猫加白"
}, {
  img: "https://static001.geekbang.org/resource/image/b6/4f/b6d65b2f12646a9fd6b8cb2b020d754f.jpg",
  url: "https://time.geekbang.org",
  title: "黑猫"
}, {
  img: "https://static001.geekbang.org/resource/image/73/e4/730ea9c393def7975deceb48b3eb6fe4.jpg",
  url: "https://time.geekbang.org",
  title: "橘猫"
}]; // let a = <Carousel data={d} onChange={event => console.log(event.detail.position)} onClick={event => window.location.href=event.detail.data.url}/>;

var a = (0,_framework__WEBPACK_IMPORTED_MODULE_1__.createElement)(_List_js__WEBPACK_IMPORTED_MODULE_3__.List, {
  data: d
}, function (record) {
  return (0,_framework__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", null, (0,_framework__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", {
    src: record.img
  }), (0,_framework__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", {
    href: record.url
  }, record.title));
});
a.mountTo(document.body);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./main.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc3gvLi9CdXR0b24uanMiLCJ3ZWJwYWNrOi8vanN4Ly4vQ2Fyb3VzZWwuanMiLCJ3ZWJwYWNrOi8vanN4Ly4vTGlzdC5qcyIsIndlYnBhY2s6Ly9qc3gvLi9hbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vanN4Ly4vZWFzZS5qcyIsIndlYnBhY2s6Ly9qc3gvLi9mcmFtZXdvcmsuanMiLCJ3ZWJwYWNrOi8vanN4Ly4vZ2VzdHVyZS5qcyIsIndlYnBhY2s6Ly9qc3gvLi9tYWluLmpzIiwid2VicGFjazovL2pzeC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qc3gvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pzeC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pzeC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pzeC93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsiQnV0dG9uIiwiY2hpbGRDb250YWluZXIiLCJyb290IiwicmVuZGVyIiwiY2hpbGQiLCJhcHBlbmRDaGlsZCIsIkNvbXBvbmVudCIsIkNhcm91c2VsIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiQVRUUklCVVRFIiwiZGF0YSIsInJlY29yZCIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiaW1nIiwiZW5hYmxlR2VzdHVyZSIsInRpbWVsaW5lIiwiVGltZWxpbmUiLCJzdGFydCIsImNoaWxkcmVuIiwidCIsImF4IiwiU1RBVEUiLCJwb3NpdGlvbiIsImhhbmRsZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwYXVzZSIsImNsZWFySW50ZXJ2YWwiLCJEYXRlIiwibm93IiwicHJvZ3Jlc3MiLCJlYXNlIiwidHJpZ2dlckV2ZW50IiwieCIsImNsaWVudFgiLCJzdGFydFgiLCJjdXJyZW50Iiwib2Zmc2V0IiwicG9zIiwibGVuZ3RoIiwidHJhbnNpdGlvbiIsInRyYW5zZm9ybSIsInJlc2V0Iiwic2V0SW50ZXJ2YWwiLCJuZXh0UGljdHVyZSIsImRpcmVjdGlvbiIsIk1hdGgiLCJyb3VuZCIsImlzRmxpY2siLCJ2ZWxvY2l0eSIsImNlaWwiLCJmbG9vciIsIkFuaW1hdGlvbiIsInYiLCJuZXh0SW5kZXgiLCJuZXh0IiwiTGlzdCIsIm1hcCIsInRlbXBsYXRlIiwiVElDSyIsIlN5bWJvbCIsIlRJQ0tfSEFORExFUiIsIkFOSU1BVElPTlMiLCJTVEFSVF9USU1FIiwiUEFVU0VfU1RBUlQiLCJQQVVTRV9USU1FIiwiU3RhdHVzIiwiV0FJVCIsIlJVTk5JTkciLCJQQVVTRSIsInByb3BzIiwic3RhdGUiLCJXZWFrTWFwIiwiU2V0Iiwic3RhcnRUaW1lIiwiYW5pbWF0aW9uIiwiX3N0YXJ0VGltZSIsIm1heCIsImdldCIsImRlbGF5IiwiZHVyYXRpb24iLCJyZWNlaXZlVGltZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiYXJndW1lbnRzIiwic2V0IiwiTWFwIiwib2JqZWN0IiwicHJvcGVydHkiLCJzdGFydFZhbHVlIiwiZW5kVmFsdWUiLCJ0aW1pbmdGdW5jdGlvbiIsInRpbWUiLCJyYW5nZSIsInR5cGUiLCJhdHRyaWJ1dGVzIiwiZWxlbWVudCIsIkVsZW1lbnRXcmFwcGVyIiwibmFtZSIsInNldEF0dHJpYnV0ZSIsInByb2Nlc3NDaGlsZHJlbiIsIkFycmF5IiwiVGV4dFdyYXBwZXIiLCJPYmplY3QiLCJjcmVhdGUiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJtb3VudFRvIiwicGFyZW50IiwiYXJncyIsInJlcGxhY2UiLCJzIiwidG9VcHBlckNhc2UiLCJDdXN0b21FdmVudCIsImRldGFpbCIsImNvbnRlbnQiLCJjcmVhdGVUZXh0Tm9kZSIsIkRpc3BhdGNoZXIiLCJwcm9wZXJ0aWVzIiwiRXZlbnQiLCJkaXNwYXRjaEV2ZW50IiwiTGlzdGVuZXIiLCJyZWNvZ25pemVyIiwiY29udGV4dHMiLCJpc0xpc3RlbmluZ01vdXNlIiwiY29udGV4dCIsImJ1dHRvbiIsIm1vdXNlTW92ZSIsImJ1dHRvbnMiLCJrZXkiLCJtb3ZlIiwibW91c2VVcCIsImVuZCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjaGFuZ2VkVG91Y2hlcyIsInRvdWNoIiwiaWRlbnRpZmllciIsImNhbmNlbCIsIlJlY29nbml6ZXIiLCJkaXNwYXRjaGVyIiwicG9pbnQiLCJzdGFydFkiLCJjbGllbnRZIiwiZGlzcGF0Y2giLCJwb2ludHMiLCJ5IiwiaXNQYW4iLCJpc1RhcCIsImlzUHJlc3MiLCJzZXRUaW1lb3V0IiwiZHgiLCJkeSIsImlzVmVydGljYWwiLCJhYnMiLCJjbGVhclRpbWVvdXQiLCJmaWx0ZXIiLCJwdXNoIiwiZCIsInNxcnQiLCJ1cmwiLCJ0aXRsZSIsImEiLCJib2R5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFTyxJQUFNQSxNQUFiO0FBQUE7O0FBQUE7O0FBQ0Usb0JBQWM7QUFBQTs7QUFBQTtBQUViOztBQUhIO0FBQUE7QUFBQSw2QkFJVztBQUNQLFdBQUtDLGNBQUwsR0FBc0IsMEVBQXRCO0FBQ0EsV0FBS0MsSUFBTCxHQUNFLDBFQUNHLEtBQUtELGNBRFIsQ0FEVSxDQUlWRSxNQUpVLEVBQVo7QUFLQSxhQUFPLEtBQUtELElBQVo7QUFDRDtBQVpIO0FBQUE7QUFBQSxnQ0FhY0UsS0FiZCxFQWFvQjtBQUNoQixVQUFHLENBQUMsS0FBS0gsY0FBVCxFQUF5QjtBQUN2QixhQUFLRSxNQUFMO0FBQ0Q7O0FBQ0QsV0FBS0YsY0FBTCxDQUFvQkksV0FBcEIsQ0FBZ0NELEtBQWhDO0FBQ0Q7QUFsQkg7O0FBQUE7QUFBQSxFQUE0QkUsb0RBQTVCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FB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LEVBQUUsMEZBRFA7QUFFRW1KLEtBQUcsRUFBRSwyQkFGUDtBQUdFQyxPQUFLLEVBQUU7QUFIVCxDQVhNLEVBZ0JOO0FBQ0VwSixLQUFHLEVBQUUsMEZBRFA7QUFFRW1KLEtBQUcsRUFBRSwyQkFGUDtBQUdFQyxPQUFLLEVBQUU7QUFIVCxDQWhCTSxDQUFSLEMsQ0F1QkE7O0FBQ0EsSUFBSUMsQ0FBQyxHQUFHLDBEQUFDLDBDQUFEO0FBQU0sTUFBSSxFQUFFSjtBQUFaLEdBRUosVUFBQ3BKLE1BQUQ7QUFBQSxTQUNFLHVFQUNFO0FBQUssT0FBRyxFQUFFQSxNQUFNLENBQUNHO0FBQWpCLElBREYsRUFFRTtBQUFHLFFBQUksRUFBRUgsTUFBTSxDQUFDc0o7QUFBaEIsS0FDR3RKLE1BQU0sQ0FBQ3VKLEtBRFYsQ0FGRixDQURGO0FBQUEsQ0FGSSxDQUFSO0FBV0FDLENBQUMsQ0FBQ3RELE9BQUYsQ0FBVXhHLFFBQVEsQ0FBQytKLElBQW5CLEU7Ozs7OztVQ3hDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHNGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7O1VDTkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFNUQVRFLCBBVFRSSUJVVEUsIGNyZWF0ZUVsZW1lbnR9IGZyb20gJy4vZnJhbWV3b3JrLmpzJ1xuaW1wb3J0IHsgZW5hYmxlR2VzdHVyZSB9IGZyb20gJy4vZ2VzdHVyZS5qcyc7XG5cbmV4cG9ydCB7U1RBVEUsIEFUVFJJQlVURX0gZnJvbSAnLi9mcmFtZXdvcmsuanMnO1xuXG5leHBvcnQgY2xhc3MgQnV0dG9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgdGhpcy5jaGlsZENvbnRhaW5lciA9IDxzcGFuIC8+XG4gICAgdGhpcy5yb290ID0gKFxuICAgICAgPGRpdj5cbiAgICAgICAge3RoaXMuY2hpbGRDb250YWluZXJ9XG4gICAgICA8L2Rpdj5cbiAgICApLnJlbmRlcigpO1xuICAgIHJldHVybiB0aGlzLnJvb3Q7XG4gIH1cbiAgYXBwZW5kQ2hpbGQoY2hpbGQpe1xuICAgIGlmKCF0aGlzLmNoaWxkQ29udGFpbmVyKSB7XG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cbiAgICB0aGlzLmNoaWxkQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoaWxkKVxuICB9XG59XG4iLCJcbmltcG9ydCB7IENvbXBvbmVudCwgU1RBVEUgLCBBVFRSSUJVVEV9IGZyb20gXCIuL2ZyYW1ld29yay5qc1wiO1xuaW1wb3J0IHsgZW5hYmxlR2VzdHVyZSB9IGZyb20gJy4vZ2VzdHVyZS5qcyc7XG5pbXBvcnQgeyBUaW1lbGluZSwgQW5pbWF0aW9uIH0gZnJvbSAnLi9hbmltYXRpb24uanMnXG5pbXBvcnQgeyBlYXNlIH0gZnJvbSAnLi9lYXNlLmpzJztcbmV4cG9ydCB7IFNUQVRFLCBBVFRSSUJVVEUgfSBmcm9tIFwiLi9mcmFtZXdvcmsuanNcIjtcblxuZXhwb3J0IGNsYXNzIENhcm91c2VsIGV4dGVuZHMgQ29tcG9uZW50e1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICB0aGlzLnJvb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRoaXMucm9vdC5jbGFzc0xpc3QuYWRkKFwiY2Fyb3VzZWxcIik7XG4gICAgZm9yIChsZXQgcmVjb3JkIG9mIHRoaXNbQVRUUklCVVRFXS5kYXRhKSB7XG4gICAgICBsZXQgY2hpbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY2hpbGQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtyZWNvcmQuaW1nfScpYDtcbiAgICAgIHRoaXMucm9vdC5hcHBlbmRDaGlsZChjaGlsZCk7XG4gICAgfVxuICAgIGVuYWJsZUdlc3R1cmUodGhpcy5yb290KTtcbiAgICBsZXQgdGltZWxpbmUgPSBuZXcgVGltZWxpbmUoKTtcbiAgICB0aW1lbGluZS5zdGFydCgpO1xuICAgIGxldCBjaGlsZHJlbiA9IHRoaXMucm9vdC5jaGlsZHJlbjtcbiAgICBsZXQgdCA9IDA7XG4gICAgbGV0IGF4ID0gMDtcbiAgICB0aGlzW1NUQVRFXS5wb3NpdGlvbiA9IDA7XG4gICAgbGV0IGhhbmRsZXI7XG4gICAgdGhpcy5yb290LmFkZEV2ZW50TGlzdGVuZXIoXCJzdGFydFwiLCBldmVudCA9PiB7XG4gICAgICB0aW1lbGluZS5wYXVzZSgpO1xuICAgICAgY2xlYXJJbnRlcnZhbChoYW5kbGVyKVxuICAgICAgaWYgKERhdGUubm93KCkgLSB0IDwgNTAwKSB7XG4gICAgICAgIGxldCBwcm9ncmVzcyA9IChEYXRlLm5vdygpIC0gdCApIC8gNTAwO1xuICAgICAgICBheCA9IGVhc2UocHJvZ3Jlc3MpICogNTAwIC0gNTAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXggPSAwXG4gICAgICB9XG4gICAgfSlcbiAgICB0aGlzLnJvb3QuYWRkRXZlbnRMaXN0ZW5lcihcInRhcFwiLCBldmVudCA9PiB7XG4gICAgICB0aGlzLnRyaWdnZXJFdmVudChcImNsaWNrXCIsIHtcbiAgICAgICAgZGF0YTogdGhpc1tBVFRSSUJVVEVdLmRhdGFbdGhpc1tTVEFURV0ucG9zaXRpb25dLFxuICAgICAgICBwb3NpdGlvbjogdGhpc1tTVEFURV0ucG9zaXRpb25cbiAgICAgIH0pXG4gICAgfSlcbiAgICB0aGlzLnJvb3QuYWRkRXZlbnRMaXN0ZW5lcihcInBhblwiLCBldmVudCA9PiB7XG4gICAgICBsZXQgeCA9IGV2ZW50LmNsaWVudFggLSBldmVudC5zdGFydFggLSBheDtcbiAgICAgIGxldCBjdXJyZW50ID0gdGhpc1tTVEFURV0ucG9zaXRpb24gLSAoKHggLSB4ICUgNTAwKSAvIDUwMCk7XG4gICAgICBmb3IgKGxldCBvZmZzZXQgb2YgWy0xLCAwLCAxXSkge1xuICAgICAgICBsZXQgcG9zID0gY3VycmVudCArIG9mZnNldDtcbiAgICAgICAgcG9zID0gKHBvcyAlIGNoaWxkcmVuLmxlbmd0aCArIGNoaWxkcmVuLmxlbmd0aCApICUgY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICBjaGlsZHJlbltwb3NdLnN0eWxlLnRyYW5zaXRpb24gPSBcIm5vbmVcIjtcbiAgICAgICAgY2hpbGRyZW5bcG9zXS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgkey1wb3MgKiA1MDAgKyBvZmZzZXQgKiA1MDAgKyB4ICUgNTAwfXB4KWA7XG4gICAgICB9XG4gICAgfSlcbiAgICB0aGlzLnJvb3QuYWRkRXZlbnRMaXN0ZW5lcihcImVuZFwiLCBldmVudCA9PiB7XG4gICAgICB0aW1lbGluZS5yZXNldCgpO1xuICAgICAgdGltZWxpbmUuc3RhcnQoKTtcbiAgICAgIGhhbmRsZXIgPSBzZXRJbnRlcnZhbChuZXh0UGljdHVyZSwgMzAwMCkgXG5cbiAgICAgIGxldCB4ID0gZXZlbnQuY2xpZW50WCAtIGV2ZW50LnN0YXJ0WCAtIGF4O1xuICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzW1NUQVRFXS5wb3NpdGlvbiAtICgoeCAtIHggJSA1MDApIC8gNTAwKVxuICAgICAgbGV0IGRpcmVjdGlvbiA9IE1hdGgucm91bmQoKHggJSA1MDApIC8gNTAwKTtcbiAgICAgIGlmKGV2ZW50LmlzRmxpY2spIHtcbiAgICAgICAgaWYoZXZlbnQudmVsb2NpdHkgPCAwKSB7XG4gICAgICAgICAgZGlyZWN0aW9uID0gTWF0aC5jZWlsKCh4ICUgNTAwKSAvIDUwMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGlyZWN0aW9uID0gTWF0aC5mbG9vcigoeCAlIDUwMCkgLyA1MDApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBvZmZzZXQgb2YgWy0xLDAsMV0pIHtcbiAgICAgICAgbGV0IHBvcyA9IGN1cnJlbnQgKyBvZmZzZXQ7XG4gICAgICAgIHBvcyA9IChwb3MgJSBjaGlsZHJlbi5sZW5ndGggKyBjaGlsZHJlbi5sZW5ndGgpICUgY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICBjaGlsZHJlbltwb3NdLnN0eWxlLnRyYW5zaXRpb24gPSBcIm5vbmVcIjtcbiAgICAgICAgdGltZWxpbmUuYWRkKG5ldyBBbmltYXRpb24oXG4gICAgICAgICAgY2hpbGRyZW5bcG9zXS5zdHlsZSwgXCJ0cmFuc2Zvcm1cIixcbiAgICAgICAgICAtcG9zICogNTAwICsgb2Zmc2V0ICogNTAwICsgeCAlIDUwMCxcbiAgICAgICAgICAtNTAwICogcG9zICsgb2Zmc2V0ICogNTAwICsgZGlyZWN0aW9uICogNTAwLFxuICAgICAgICAgIDUwMCwgMCwgZWFzZSwgdiA9PiBgdHJhbnNsYXRlWCgke3Z9cHgpYCkpXG4gICAgICB9XG4gICAgICB0aGlzW1NUQVRFXS5wb3NpdGlvbiA9IHRoaXNbU1RBVEVdLnBvc2l0aW9uIC0gKCh4IC0geCU1MDApIC8gNTAwKSAtIGRpcmVjdGlvbjtcbiAgICAgIHRoaXNbU1RBVEVdLnBvc2l0aW9uID0gKHRoaXNbU1RBVEVdLnBvc2l0aW9uICUgY2hpbGRyZW4ubGVuZ3RoICsgY2hpbGRyZW4ubGVuZ3RoKSAlIGNoaWxkcmVuLmxlbmd0aDtcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KFwiY2hhbmdlXCIsIHtcbiAgICAgICAgcG9zaXRpb246IHRoaXNbU1RBVEVdLnBvc2l0aW9uXG4gICAgICB9KVxuICAgIH0pXG4gICAgbGV0IG5leHRQaWN0dXJlID0gKCkgPT4ge1xuICAgICAgbGV0IG5leHRJbmRleCA9ICh0aGlzW1NUQVRFXS5wb3NpdGlvbiArIDEpICUgY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgbGV0IGN1cnJlbnQgPSBjaGlsZHJlblt0aGlzW1NUQVRFXS5wb3NpdGlvbl07XG4gICAgICBsZXQgbmV4dCA9IGNoaWxkcmVuW25leHRJbmRleF07XG4gICAgICB0ID0gRGF0ZS5ub3coKTtcbiAgICAgIHRpbWVsaW5lLmFkZChuZXcgQW5pbWF0aW9uKGN1cnJlbnQuc3R5bGUsIFwidHJhbnNmb3JtXCIsIC10aGlzW1NUQVRFXS5wb3NpdGlvbiAqIDUwMCwgLTUwMCAtIHRoaXNbU1RBVEVdLnBvc2l0aW9uKjUwMCwgNTAwLCAwLCBlYXNlLCB2ID0+IGB0cmFuc2xhdGVYKCR7dn1weClgKSlcbiAgICAgIHRpbWVsaW5lLmFkZChuZXcgQW5pbWF0aW9uKG5leHQuc3R5bGUsIFwidHJhbnNmb3JtXCIsIDUwMCAtbmV4dEluZGV4ICogNTAwLCAtIG5leHRJbmRleCo1MDAsIDUwMCwgMCwgZWFzZSwgdiA9PiBgdHJhbnNsYXRlWCgke3Z9cHgpYCkpXG4gICAgICB0aGlzW1NUQVRFXS5wb3NpdGlvbiA9IG5leHRJbmRleDtcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KFwiY2hhbmdlXCIsIHtcbiAgICAgICAgcG9zaXRpb246IHRoaXNbU1RBVEVdLnBvc2l0aW9uXG4gICAgICB9KVxuICAgIH1cbiAgICBoYW5kbGVyID0gc2V0SW50ZXJ2YWwobmV4dFBpY3R1cmUsIDMwMDApXG4gICAgcmV0dXJuIHRoaXMucm9vdFxuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIFNUQVRFLCBBVFRSSUJVVEUsIGNyZWF0ZUVsZW1lbnR9IGZyb20gJy4vZnJhbWV3b3JrLmpzJ1xuaW1wb3J0IHsgZW5hYmxlR2VzdHVyZSB9IGZyb20gJy4vZ2VzdHVyZS5qcyc7XG5cbmV4cG9ydCB7U1RBVEUsIEFUVFJJQlVURX0gZnJvbSAnLi9mcmFtZXdvcmsuanMnO1xuXG5leHBvcnQgY2xhc3MgTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHRoaXMuY2hpbGRyZW4gPSB0aGlzW0FUVFJJQlVURV0uZGF0YS5tYXAodGhpcy50ZW1wbGF0ZSlcbiAgICB0aGlzLnJvb3QgPSAoXG4gICAgICA8ZGl2PlxuICAgICAgICB7dGhpcy5jaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgICkucmVuZGVyKCk7XG4gICAgcmV0dXJuIHRoaXMucm9vdDtcbiAgfVxuICBhcHBlbmRDaGlsZChjaGlsZCl7XG4gICAgdGhpcy50ZW1wbGF0ZSA9IGNoaWxkO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cbn1cbiIsImNvbnN0IFRJQ0sgPSBTeW1ib2woXCJ0aWNrXCIpO1xuY29uc3QgVElDS19IQU5ETEVSID0gU3ltYm9sKFwidGljay1oYW5kbGVyXCIpO1xuY29uc3QgQU5JTUFUSU9OUyA9IFN5bWJvbChcImFuaW1hdGlvbnNcIik7XG5jb25zdCBTVEFSVF9USU1FID0gU3ltYm9sKFwiYW5pbWF0aW9uIHN0YXJ0IHRpbWVcIilcbmNvbnN0IFBBVVNFX1NUQVJUID0gU3ltYm9sKFwicGF1c2Ugc3RhcnRcIik7XG5jb25zdCBQQVVTRV9USU1FID0gU3ltYm9sKFwicGF1c2UgdGltZVwiKVxuY29uc3QgU3RhdHVzID0ge1xuICBXQUlUOiBTeW1ib2woXCJ3YWl0XCIpLFxuICBSVU5OSU5HOiBTeW1ib2woXCJydW5uaW5nXCIpLFxuICBQQVVTRTogU3ltYm9sKFwicGF1c2VcIiksXG59XG5leHBvcnQgY2xhc3MgVGltZWxpbmUge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHRoaXMuc3RhdGUgPSBTdGF0dXMuV0FJVFxuICAgIHRoaXNbU1RBUlRfVElNRV0gPSBuZXcgV2Vha01hcCgpO1xuICAgIHRoaXNbQU5JTUFUSU9OU10gPSBuZXcgU2V0KCk7XG4gIH1cbiAgc3RhcnQoKSB7XG4gICAgaWYodGhpcy5zdGF0ZSAhPT0gU3RhdHVzLldBSVQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zdGF0ZSA9IFN0YXR1cy5SVU5OSU5HXG4gICAgbGV0IHN0YXJ0VGltZSA9IERhdGUubm93KCk7XG4gICAgLy8g6KKr5pqC5YGc55qE5pe26Ze0XG4gICAgdGhpc1tQQVVTRV9USU1FXSA9IDA7XG4gICAgdGhpc1tUSUNLXSA9ICgpID0+IHtcbiAgICAgIGxldCBub3cgPSBEYXRlLm5vdygpO1xuICAgICAgXG4gICAgICBmb3IobGV0IGFuaW1hdGlvbiBvZiB0aGlzW0FOSU1BVElPTlNdKSB7XG4gICAgICAgIGxldCBfc3RhcnRUaW1lID0gTWF0aC5tYXgoc3RhcnRUaW1lLCB0aGlzW1NUQVJUX1RJTUVdLmdldChhbmltYXRpb24pKVxuICAgICAgICBsZXQgdCA9IG5vdyAtIF9zdGFydFRpbWUgLSB0aGlzW1BBVVNFX1RJTUVdIC0gYW5pbWF0aW9uLmRlbGF5O1xuXG4gICAgICAgIGlmIChhbmltYXRpb24uZHVyYXRpb24gPCB0KSB7XG4gICAgICAgICAgdGhpc1tBTklNQVRJT05TXS5kZWxldGUoYW5pbWF0aW9uKTtcbiAgICAgICAgICAvLyDkv53or4HmnIDlkI7nm7jnrYnvvIzkuI3nhLblj6/og73kvJrotoXlh7rkuIDngrnngrlcbiAgICAgICAgICB0ID0gYW5pbWF0aW9uLmR1cmF0aW9uO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0ID4gMCkge1xuICAgICAgICAgIGFuaW1hdGlvbi5yZWNlaXZlVGltZSh0KVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgfVxuICAgICAgdGhpc1tUSUNLX0hBTkRMRVJdID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXNbVElDS10pXG4gICAgfVxuICAgIHRoaXNbVElDS10oKVxuICB9XG4gIHBhdXNlKCkge1xuICAgIGlmKHRoaXMuc3RhdGUgIT09IFN0YXR1cy5SVU5OSU5HKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc3RhdGUgPSBTdGF0dXMuUEFVU0VcbiAgICB0aGlzW1BBVVNFX1NUQVJUXSA9IERhdGUubm93KCk7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpc1tUSUNLX0hBTkRMRVJdKTtcbiAgfVxuICByZXN1bWUoKSB7XG4gICAgaWYodGhpcy5zdGF0ZSAhPT0gU3RhdHVzLlBBVVNFKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc3RhdGUgPSBTdGF0dXMuUlVOTklOR1xuICAgIHRoaXNbUEFVU0VfVElNRV0gKz0gRGF0ZS5ub3coKSAtIHRoaXNbUEFVU0VfU1RBUlRdXG4gICAgdGhpc1tUSUNLXSgpXG4gIH1cbiAgYWRkKGFuaW1hdGlvbiwgc3RhcnRUaW1lKSB7XG4gICAgaWYoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHtcbiAgICAgIHN0YXJ0VGltZSA9IERhdGUubm93KClcbiAgICB9XG4gICAgdGhpc1tTVEFSVF9USU1FXS5zZXQoYW5pbWF0aW9uLCBzdGFydFRpbWUpO1xuICAgIHRoaXNbQU5JTUFUSU9OU10uYWRkKGFuaW1hdGlvbik7XG4gIH1cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5wYXVzZSgpO1xuICAgIHRoaXMuc3RhdGUgPSBTdGF0dXMuV0FJVFxuICAgIHRoaXNbUEFVU0VfU1RBUlRdID0gMDtcbiAgICB0aGlzW1BBVVNFX1RJTUVdID0gMDtcbiAgICB0aGlzW0FOSU1BVElPTlNdID0gbmV3IFNldCgpO1xuICAgIHRoaXNbU1RBUlRfVElNRV0gPSBuZXcgTWFwKCk7XG4gICAgdGhpc1tUSUNLX0hBTkRMRVJdID0gbnVsbDtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIEFuaW1hdGlvbntcbiAgY29uc3RydWN0b3Iob2JqZWN0LCBwcm9wZXJ0eSwgc3RhcnRWYWx1ZSwgZW5kVmFsdWUsIGR1cmF0aW9uLCBkZWxheSwgdGltaW5nRnVuY3Rpb24sIHRlbXBsYXRlKSB7XG4gICAgdGltaW5nRnVuY3Rpb24gPSB0aW1pbmdGdW5jdGlvbiB8fCAodiA9PiB2KVxuICAgIHRlbXBsYXRlID0gdGVtcGxhdGUgfHwgKHYgPT4gdilcbiAgICB0aGlzLm9iamVjdCA9IG9iamVjdDtcbiAgICB0aGlzLnByb3BlcnR5ID0gcHJvcGVydHk7XG4gICAgdGhpcy5zdGFydFZhbHVlID0gc3RhcnRWYWx1ZTtcbiAgICB0aGlzLmVuZFZhbHVlID0gZW5kVmFsdWU7XG4gICAgdGhpcy5kdXJhdGlvbiA9IGR1cmF0aW9uO1xuICAgIHRoaXMudGltaW5nRnVuY3Rpb24gPSB0aW1pbmdGdW5jdGlvbjtcbiAgICB0aGlzLmRlbGF5ID0gZGVsYXk7XG4gICAgdGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlXG4gIH1cbiAgcmVjZWl2ZVRpbWUodGltZSkge1xuICAgIGxldCByYW5nZSA9ICh0aGlzLmVuZFZhbHVlIC0gdGhpcy5zdGFydFZhbHVlKTtcbiAgICBsZXQgcHJvZ3Jlc3MgPSB0aGlzLnRpbWluZ0Z1bmN0aW9uKHRpbWUvdGhpcy5kdXJhdGlvbik7XG4gICAgdGhpcy5vYmplY3RbdGhpcy5wcm9wZXJ0eV0gPSB0aGlzLnRlbXBsYXRlKHRoaXMuc3RhcnRWYWx1ZSArIHJhbmdlICogcHJvZ3Jlc3MpO1xuICB9XG59XG4iLCJleHBvcnQgbGV0IGVhc2UgPSB2ID0+IHY7XG4iLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0eXBlLCBhdHRyaWJ1dGVzLCAuLi5jaGlsZHJlbikge1xuICBsZXQgZWxlbWVudDtcbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIGVsZW1lbnQgPSBuZXcgRWxlbWVudFdyYXBwZXIodHlwZSk7XG4gIH0gZWxzZSB7XG4gICAgZWxlbWVudCA9IG5ldyB0eXBlXG4gIH1cbiAgXG4gIGZvciAobGV0IG5hbWUgaW4gYXR0cmlidXRlcykge1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIGF0dHJpYnV0ZXNbbmFtZV0pO1xuICB9XG4gIFxuICBsZXQgcHJvY2Vzc0NoaWxkcmVuID0gKGNoaWxkcmVuKSA9PiB7XG4gICAgZm9yIChsZXQgY2hpbGQgb2YgY2hpbGRyZW4pIHtcbiAgICAgIGlmKHR5cGVvZiBjaGlsZCA9PT0gXCJvYmplY3RcIiAmJiBjaGlsZCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIHByb2Nlc3NDaGlsZHJlbihjaGlsZCk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgY2hpbGQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNoaWxkID0gbmV3IFRleHRXcmFwcGVyKGNoaWxkKTtcbiAgICAgIH1cbiAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGQpXG4gICAgfVxuICB9XG4gIHByb2Nlc3NDaGlsZHJlbihjaGlsZHJlbik7XG4gIHJldHVybiBlbGVtZW50O1xufVxuZXhwb3J0IGNvbnN0IFNUQVRFID0gU3ltYm9sKFwic3RhdGVcIilcbmV4cG9ydCBjb25zdCBBVFRSSUJVVEUgPSBTeW1ib2woXCJhdHRyaWJ1dGVcIilcbmV4cG9ydCBjbGFzcyBDb21wb25lbnR7XG4gIGNvbnN0cnVjdG9yKHR5cGUpIHtcbiAgICB0aGlzW0FUVFJJQlVURV0gPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHRoaXNbU1RBVEVdID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgfVxuICBzZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHtcbiAgICB0aGlzW0FUVFJJQlVURV1bbmFtZV0gPSB2YWx1ZVxuICB9XG4gIGFwcGVuZENoaWxkKGNoaWxkKSB7XG4gICAgY29uc29sZS5sb2coY2hpbGQpXG4gICAgY2hpbGQubW91bnRUbyh0aGlzLnJvb3QpXG4gIH1cbiAgbW91bnRUbyhwYXJlbnQpIHtcbiAgICBpZighdGhpcy5yb290KSB7XG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5yb290KVxuICB9XG4gIHRyaWdnZXJFdmVudCh0eXBlLCBhcmdzKSB7XG4gICAgbGV0IG5hbWUgPSBcIm9uXCIrdHlwZS5yZXBsYWNlKC9eW1xcc1xcU10vLCBzID0+IHMudG9VcHBlckNhc2UoKSlcbiAgICBjb25zb2xlLmxvZyhuYW1lKVxuICAgIHRoaXNbQVRUUklCVVRFXVtuYW1lXShuZXcgQ3VzdG9tRXZlbnQodHlwZSwge2RldGFpbDphcmdzfSkpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5yb290XG4gIH1cbn1cbmNsYXNzIEVsZW1lbnRXcmFwcGVyIGV4dGVuZHMgQ29tcG9uZW50e1xuICBjb25zdHJ1Y3Rvcih0eXBlKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnJvb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpXG4gIH1cbiAgc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7XG4gICAgdGhpcy5yb290LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSlcbiAgfVxufVxuY2xhc3MgVGV4dFdyYXBwZXIgZXh0ZW5kcyBDb21wb25lbnR7XG4gIGNvbnN0cnVjdG9yKGNvbnRlbnQpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucm9vdCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNvbnRlbnQpXG4gIH1cbn1cbiIsIlxuZXhwb3J0IGNsYXNzIERpc3BhdGNoZXJ7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG4gIH1cbiAgZGlzcGF0Y2godHlwZSwgcHJvcGVydGllcykge1xuICAgIGxldCBldmVudCA9IG5ldyBFdmVudCh0eXBlKTtcbiAgICBmb3IgKGxldCBuYW1lIGluIHByb3BlcnRpZXMpIHtcbiAgICAgIGV2ZW50W25hbWVdID0gcHJvcGVydGllc1tuYW1lXVxuICAgIH1cbiAgICB0aGlzLmVsZW1lbnQuZGlzcGF0Y2hFdmVudChldmVudClcbiAgfVxufVxuXG4vLyBsaXN0ZW4gPT4gcmVjb2duaXplID0+IGRpc3BhdGNoXG4vLyBuZXcgTGlzdGVuZXIobmV3IFJlY29nbml6ZXIoZGlzcGF0Y2gpKVxuZXhwb3J0IGNsYXNzIExpc3RlbmVyIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgcmVjb2duaXplcil7XG4gICAgbGV0IGNvbnRleHRzID0gbmV3IE1hcCgpXG4gICAgbGV0IGlzTGlzdGVuaW5nTW91c2UgPSBmYWxzZTtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGV2ZW50KT0+IHtcbiAgICAgIC8vIGV2ZW50LmJ1dHRvbiAxfjUg6KGo56S65oyJ5LiL5ZOq5Liq6ZSuXG4gICAgICBsZXQgY29udGV4dCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICBjb250ZXh0cy5zZXQoYG1vdXNlJHsxIDw8IGV2ZW50LmJ1dHRvbn1gLCBjb250ZXh0KTtcbiAgICAgIHJlY29nbml6ZXIuc3RhcnQoZXZlbnQsIGNvbnRleHQpXG4gICAgICBsZXQgbW91c2VNb3ZlID0gZXZlbnQgPT4ge1xuICAgICAgICBsZXQgYnV0dG9uID0gMTtcbiAgICAgICAgd2hpbGUoYnV0dG9uIDw9IGV2ZW50LmJ1dHRvbnMpIHtcbiAgICAgICAgICAvLyDkuIDkuKrlnZEgYnV0dG9uc+mHjOeahOesrOS6jOS9jeWSjOesrOWbm+S9jeaYr+WPjeeahFxuICAgICAgICAgIGlmICggYnV0dG9uICYgZXZlbnQuYnV0dG9ucykge1xuICAgICAgICAgICAgbGV0IGtleTtcbiAgICAgICAgICAgIGlmKGJ1dHRvbiA9PT0gMikge1xuICAgICAgICAgICAgICBrZXkgPSA0O1xuICAgICAgICAgICAgfWVsc2UgaWYoYnV0dG9uID09PSA0KSB7XG4gICAgICAgICAgICAgIGtleSA9IDI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBrZXkgPSBidXR0b247XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgY29udGV4dCA9IGNvbnRleHRzLmdldChcIm1vdXNlXCIra2V5KVxuICAgICAgICAgICAgcmVjb2duaXplci5tb3ZlKGV2ZW50LCBjb250ZXh0KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnV0dG9uID0gYnV0dG9uIDw8IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxldCBtb3VzZVVwID0gZXZlbnQgPT4ge1xuICAgICAgICBsZXQgY29udGV4dCA9IGNvbnRleHRzLmdldChcIm1vdXNlXCIrKDE8PGV2ZW50LmJ1dHRvbikpO1xuICAgICAgICByZWNvZ25pemVyLmVuZChldmVudCwgY29udGV4dCk7XG4gICAgICAgIGNvbnRleHRzLmRlbGV0ZShcIm1vdXNlXCIrKDE8PGV2ZW50LmJ1dHRvbikpXG4gICAgICAgIGlmKGV2ZW50LmJ1dHRvbnMgPT09IDApIHtcbiAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG1vdXNlTW92ZSk7XG4gICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgbW91c2VVcCk7XG4gICAgICAgICAgaXNMaXN0ZW5pbmdNb3VzZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZighaXNMaXN0ZW5pbmdNb3VzZSkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG1vdXNlTW92ZSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIG1vdXNlVXApO1xuICAgICAgICBpc0xpc3RlbmluZ01vdXNlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgXG4gICAgfSlcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGV2ZW50ID0+IHtcbiAgICAgIGZvcihsZXQgdG91Y2ggb2YgZXZlbnQuY2hhbmdlZFRvdWNoZXMpIHtcbiAgICAgICAgbGV0IGNvbnRleHQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICBjb250ZXh0cy5zZXQodG91Y2guaWRlbnRpZmllciwgY29udGV4dCk7XG4gICAgICAgIHJlY29nbml6ZXIuc3RhcnQodG91Y2gsIGNvbnRleHQpO1xuICAgICAgfVxuICAgIH0pXG4gICAgXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIGV2ZW50ID0+IHtcbiAgICAgIGZvcihsZXQgdG91Y2ggb2YgZXZlbnQuY2hhbmdlZFRvdWNoZXMpIHtcbiAgICAgICAgbGV0IGNvbnRleHQgPSBjb250ZXh0cy5nZXQodG91Y2guaWRlbnRpZmllcik7XG4gICAgICAgIHJlY29nbml6ZXIubW92ZSh0b3VjaCwgY29udGV4dClcbiAgICAgIH1cbiAgICB9KVxuICAgIFxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIGV2ZW50ID0+IHtcbiAgICAgIGZvcihsZXQgdG91Y2ggb2YgZXZlbnQuY2hhbmdlZFRvdWNoZXMpIHtcbiAgICAgICAgbGV0IGNvbnRleHQgPSBjb250ZXh0cy5nZXQodG91Y2guaWRlbnRpZmllcik7XG4gICAgICAgIHJlY29nbml6ZXIuZW5kKHRvdWNoLCBjb250ZXh0KVxuICAgICAgICBjb250ZXh0cy5kZWxldGUodG91Y2guaWRlbnRpZmllcilcbiAgICAgIH1cbiAgICB9KVxuICAgIC8vIOiiq+aJk+aWrSzmr5TlpoLlvLnnqpdcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGNhbmNlbFwiLCBldmVudCA9PiB7XG4gICAgICBmb3IobGV0IHRvdWNoIG9mIGV2ZW50LmNoYW5nZWRUb3VjaGVzKSB7XG4gICAgICAgIGxldCBjb250ZXh0ID0gY29udGV4dHMuZ2V0KHRvdWNoLmlkZW50aWZpZXIpO1xuICAgICAgICByZWNvZ25pemVyLmNhbmNlbCh0b3VjaCwgY29udGV4dClcbiAgICAgICAgY29udGV4dHMuZGVsZXRlKHRvdWNoLmlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuZXhwb3J0IGNsYXNzIFJlY29nbml6ZXIge1xuICBjb25zdHJ1Y3RvcihkaXNwYXRjaGVyKSB7XG4gICAgdGhpcy5kaXNwYXRjaGVyID0gZGlzcGF0Y2hlclxuICB9XG4gIHN0YXJ0KHBvaW50LCBjb250ZXh0KSB7XG4gICAgLy8g5Yid5aeL5YyW6LW35aeL5omL5Yq/5L2N572uXG4gICAgY29udGV4dC5zdGFydFggPSBwb2ludC5jbGllbnRYO1xuICAgIGNvbnRleHQuc3RhcnRZID0gcG9pbnQuY2xpZW50WTtcbiAgICB0aGlzLmRpc3BhdGNoZXIuZGlzcGF0Y2goXCJzdGFydFwiLCB7XG4gICAgICBjbGllbnRYOiBwb2ludC5jbGllbnRYLFxuICAgICAgY2xpZW50WTogcG9pbnQuY2xpZW50WVxuICAgIH0pXG4gICAgY29udGV4dC5wb2ludHMgPSBbe1xuICAgICAgdDogRGF0ZS5ub3coKSxcbiAgICAgIHg6IHBvaW50LmNsaWVudFgsXG4gICAgICB5OiBwb2ludC5jbGllbnRZXG4gICAgfV1cbiAgICAvLyDliJ3lp4vljJZcbiAgICBjb250ZXh0LmlzUGFuID0gZmFsc2U7XG4gICAgY29udGV4dC5pc1RhcCA9IHRydWU7XG4gICAgY29udGV4dC5pc1ByZXNzID0gZmFsc2U7XG4gICAgLy8g5bu25pe2MC4156eS77yMIOinpuWPkeWImeaYr+mVv+aMiVxuICAgIGNvbnRleHQuaGFuZGxlciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29udGV4dC5pc1RhcCA9IGZhbHNlO1xuICAgICAgY29udGV4dC5pc1BhbiA9IGZhbHNlO1xuICAgICAgY29udGV4dC5pc1ByZXNzID0gdHJ1ZTtcbiAgICAgIHRoaXMuZGlzcGF0Y2hlci5kaXNwYXRjaChcInByZXNzXCIsIHt9KVxuICAgICAgY29udGV4dC5oYW5kbGVyID0gbnVsbDtcbiAgICB9LCA1MDApXG4gIH1cbiAgbW92ZShwb2ludCwgY29udGV4dCkge1xuICAgIGxldCBkeCA9IHBvaW50LmNsaWVudFggLSBjb250ZXh0LnN0YXJ0WCwgZHkgPSBwb2ludC5jbGllbnRZIC0gY29udGV4dC5zdGFydFk7XG4gICAgY29udGV4dC5pc1ZlcnRpY2FsID0gTWF0aC5hYnMoZHgpIDwgTWF0aC5hYnMoZHkpXG4gICAgLy8g56ys5LiA5qyh56e75YqoXG4gICAgaWYgKCFjb250ZXh0LmlzUGFuICYmIGR4ICoqIDIgKyBkeSAqKiAyID4gMTAwKSB7XG4gICAgICBjb250ZXh0LmlzVGFwID0gZmFsc2U7XG4gICAgICBjb250ZXh0LmlzUGFuID0gdHJ1ZTtcbiAgICAgIGNvbnRleHQuaXNQcmVzcyA9IGZhbHNlO1xuICAgICAgdGhpcy5kaXNwYXRjaGVyLmRpc3BhdGNoKFwicGFuc3RhcnRcIiwge1xuICAgICAgICBzdGFydFg6IGNvbnRleHQuc3RhcnRYLFxuICAgICAgICBzdGFydFk6IGNvbnRleHQuc3RhcnRZLFxuICAgICAgICBjbGllbnRYOiBwb2ludC5jbGllbnRYLFxuICAgICAgICBjbGllbnRZOiBwb2ludC5jbGllbnRZLFxuICAgICAgICBpc1ZlcnRpY2FsOiBjb250ZXh0LmlzVmVydGljYWxcbiAgICAgIH0pXG4gICAgICBjbGVhclRpbWVvdXQoY29udGV4dC5oYW5kbGVyKTtcbiAgICB9XG4gICAgLy8g56e75YqoXG4gICAgaWYoY29udGV4dC5pc1Bhbikge1xuICAgICAgdGhpcy5kaXNwYXRjaGVyLmRpc3BhdGNoKFwicGFuXCIsIHtcbiAgICAgICAgc3RhcnRYOiBjb250ZXh0LnN0YXJ0WCxcbiAgICAgICAgc3RhcnRZOiBjb250ZXh0LnN0YXJ0WSxcbiAgICAgICAgY2xpZW50WDogcG9pbnQuY2xpZW50WCxcbiAgICAgICAgY2xpZW50WTogcG9pbnQuY2xpZW50WSxcbiAgICAgICAgaXNWZXJ0aWNhbDogY29udGV4dC5pc1ZlcnRpY2FsXG4gICAgICB9KVxuICAgIH1cbiAgICBjb250ZXh0LnBvaW50cyA9IGNvbnRleHQucG9pbnRzLmZpbHRlcihwb2ludCA9PiBEYXRlLm5vdygpIC0gcG9pbnQudCA8IDUwMClcbiAgICBjb250ZXh0LnBvaW50cy5wdXNoKHtcbiAgICAgIHQ6IERhdGUubm93KCksXG4gICAgICB4OiBwb2ludC5jbGllbnRYLFxuICAgICAgeTogcG9pbnQuY2xpZW50WVxuICAgIH0pXG4gICAgXG4gIH1cbiAgZW5kKHBvaW50LGNvbnRleHQpIHtcbiAgICAvLyDlpoLmnpzmmK/ljZXlh7tcbiAgICBpZihjb250ZXh0LmlzVGFwKSB7XG4gICAgICB0aGlzLmRpc3BhdGNoZXIuZGlzcGF0Y2goXCJ0YXBcIiwge30pXG4gICAgICBjbGVhclRpbWVvdXQoY29udGV4dC5oYW5kbGVyKVxuICAgIH1cbiAgICAvLyDlpoLmnpzmmK/plb/mjIlcbiAgICBpZihjb250ZXh0LmlzUHJlc3MpIHtcbiAgICAgIHRoaXMuZGlzcGF0Y2hlci5kaXNwYXRjaChcInByZXNzZW5kXCIsIHt9KVxuICAgIH1cbiAgICBjb250ZXh0LnBvaW50cyA9IGNvbnRleHQucG9pbnRzLmZpbHRlcihwb2ludCA9PiBEYXRlLm5vdygpIC0gcG9pbnQudCA8IDUwMClcbiAgICBsZXQgZCx2O1xuICAgIGlmKCFjb250ZXh0LnBvaW50cy5sZW5ndGgpIHtcbiAgICAgIHYgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBkID0gTWF0aC5zcXJ0KChwb2ludC5jbGllbnRYIC0gY29udGV4dC5wb2ludHNbMF0ueCApICoqIDIgKyBcbiAgICAgIChwb2ludC5jbGllbnRZIC0gY29udGV4dC5wb2ludHNbMF0ueSApICoqIDIpO1xuICAgICAgdiA9IGQgLyAoRGF0ZS5ub3coKSAtIGNvbnRleHQucG9pbnRzWzBdLnQpO1xuICAgIH1cbiAgICBcbiAgICBpZiAodiA+IDEuNSkge1xuICAgICAgdGhpcy5kaXNwYXRjaGVyLmRpc3BhdGNoKFwiZmxpY2tcIiwge1xuICAgICAgICBzdGFydFg6IGNvbnRleHQuc3RhcnRYLFxuICAgICAgICBzdGFydFk6IGNvbnRleHQuc3RhcnRZLFxuICAgICAgICBjbGllbnRYOiBwb2ludC5jbGllbnRYLFxuICAgICAgICBjbGllbnRZOiBwb2ludC5jbGllbnRZLFxuICAgICAgICBpc1ZlcnRpY2FsOiBjb250ZXh0LmlzVmVydGljYWwsXG4gICAgICAgIGlzRmxpY2s6IGNvbnRleHQuaXNGbGljayxcbiAgICAgICAgdmVsb2NpdHk6IHZcbiAgICAgIH0pXG4gICAgICBjb250ZXh0LmlzRmxpY2sgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmlzRmxpY2sgPSBmYWxzZTtcbiAgICB9XG4gICAgLy8g5aaC5p6c5piv56e75YqoXG4gICAgaWYoY29udGV4dC5pc1Bhbikge1xuICAgICAgdGhpcy5kaXNwYXRjaGVyLmRpc3BhdGNoKFwicGFuZW5kXCIsIHtcbiAgICAgICAgc3RhcnRYOiBjb250ZXh0LnN0YXJ0WCxcbiAgICAgICAgc3RhcnRZOiBjb250ZXh0LnN0YXJ0WSxcbiAgICAgICAgY2xpZW50WDogcG9pbnQuY2xpZW50WCxcbiAgICAgICAgY2xpZW50WTogcG9pbnQuY2xpZW50WSxcbiAgICAgICAgaXNWZXJ0aWNhbDogY29udGV4dC5pc1ZlcnRpY2FsLFxuICAgICAgICBpc0ZsaWNrOiBjb250ZXh0LmlzRmxpY2ssXG4gICAgICAgIHZlbG9jaXR5OiB2XG4gICAgICB9KVxuICAgIH1cbiAgICB0aGlzLmRpc3BhdGNoZXIuZGlzcGF0Y2goXCJlbmRcIiwge1xuICAgICAgc3RhcnRYOiBjb250ZXh0LnN0YXJ0WCxcbiAgICAgIHN0YXJ0WTogY29udGV4dC5zdGFydFksXG4gICAgICBjbGllbnRYOiBwb2ludC5jbGllbnRYLFxuICAgICAgY2xpZW50WTogcG9pbnQuY2xpZW50WSxcbiAgICAgIGlzVmVydGljYWw6IGNvbnRleHQuaXNWZXJ0aWNhbCxcbiAgICAgIGlzRmxpY2s6IGNvbnRleHQuaXNGbGljayxcbiAgICAgIHZlbG9jaXR5OiB2XG4gICAgfSlcbiAgfVxuICBcbiAgY2FuY2VsKHBvaW50LGNvbnRleHQpIHtcbiAgICB0aGlzLmRpc3BhdGNoZXIuZGlzcGF0Y2goXCJjYW5jZWxcIiwge30pXG4gIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBlbmFibGVHZXN0dXJlKGVsZW1lbnQpIHtcbiAgbmV3IExpc3RlbmVyKGVsZW1lbnQsIG5ldyBSZWNvZ25pemVyKG5ldyBEaXNwYXRjaGVyKGVsZW1lbnQpKSlcbn1cbiIsImltcG9ydCB7Q2Fyb3VzZWx9IGZyb20gJy4vQ2Fyb3VzZWwnXG5pbXBvcnQge2NyZWF0ZUVsZW1lbnR9IGZyb20gJy4vZnJhbWV3b3JrJ1xuaW1wb3J0IHtCdXR0b259IGZyb20gJy4vQnV0dG9uLmpzJ1xuaW1wb3J0IHtMaXN0fSBmcm9tICcuL0xpc3QuanMnXG5cbmxldCBkID0gW1xuICB7XG4gICAgaW1nOiBcImh0dHBzOi8vc3RhdGljMDAxLmdlZWtiYW5nLm9yZy9yZXNvdXJjZS9pbWFnZS9iYi8yMS9iYjM4ZmI3YzEwNzNlYWVlMTc1NWY4MTEzMWYxMWQyMS5qcGdcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly90aW1lLmdlZWtiYW5nLm9yZ1wiLFxuICAgIHRpdGxlOiBcIuiTneeMq1wiXG4gIH0sXG4gIHtcbiAgICBpbWc6IFwiaHR0cHM6Ly9zdGF0aWMwMDEuZ2Vla2Jhbmcub3JnL3Jlc291cmNlL2ltYWdlLzFiLzIxLzFiODA5ZDlhMmJkZjNlY2M0ODEzMjJkN2M5MjIzYzIxLmpwZ1wiLFxuICAgIHVybDogXCJodHRwczovL3RpbWUuZ2Vla2Jhbmcub3JnXCIsXG4gICAgdGl0bGU6IFwi5qmY54yr5Yqg55m9XCJcbiAgfSxcbiAge1xuICAgIGltZzogXCJodHRwczovL3N0YXRpYzAwMS5nZWVrYmFuZy5vcmcvcmVzb3VyY2UvaW1hZ2UvYjYvNGYvYjZkNjViMmYxMjY0NmE5ZmQ2YjhjYjJiMDIwZDc1NGYuanBnXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vdGltZS5nZWVrYmFuZy5vcmdcIixcbiAgICB0aXRsZTogXCLpu5HnjKtcIlxuICB9LFxuICB7XG4gICAgaW1nOiBcImh0dHBzOi8vc3RhdGljMDAxLmdlZWtiYW5nLm9yZy9yZXNvdXJjZS9pbWFnZS83My9lNC83MzBlYTljMzkzZGVmNzk3NWRlY2ViNDhiM2ViNmZlNC5qcGdcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly90aW1lLmdlZWtiYW5nLm9yZ1wiLFxuICAgIHRpdGxlOiBcIuapmOeMq1wiXG4gIH1cbiAgXG5dXG4vLyBsZXQgYSA9IDxDYXJvdXNlbCBkYXRhPXtkfSBvbkNoYW5nZT17ZXZlbnQgPT4gY29uc29sZS5sb2coZXZlbnQuZGV0YWlsLnBvc2l0aW9uKX0gb25DbGljaz17ZXZlbnQgPT4gd2luZG93LmxvY2F0aW9uLmhyZWY9ZXZlbnQuZGV0YWlsLmRhdGEudXJsfS8+O1xubGV0IGEgPSA8TGlzdCBkYXRhPXtkfT5cbiAge1xuICAgIChyZWNvcmQpID0+IFxuICAgICAgPGRpdj5cbiAgICAgICAgPGltZyBzcmM9e3JlY29yZC5pbWd9IC8+XG4gICAgICAgIDxhIGhyZWY9e3JlY29yZC51cmx9PlxuICAgICAgICAgIHtyZWNvcmQudGl0bGV9XG4gICAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuICB9XG48L0xpc3Q+XG5hLm1vdW50VG8oZG9jdW1lbnQuYm9keSlcblxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL21haW4uanNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9