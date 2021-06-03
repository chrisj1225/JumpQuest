/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/background.js":
/*!***********************************!*\
  !*** ./src/scripts/background.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Background = /*#__PURE__*/function () {
  function Background(gameWidth, gameHeight) {
    _classCallCheck(this, Background);

    this.width = gameWidth;
    this.height = gameHeight;
  }

  _createClass(Background, [{
    key: "drawBackground",
    value: function drawBackground(ctx) {
      ctx.fillStyle = "grey";
      ctx.fillRect(0, 0, this.width, this.height - 20);
      ctx.fill();
      ctx.fillStyle = "brown";
      ctx.fillRect(0, this.height - 20, this.width, this.height);
      ctx.fill();
    }
  }, {
    key: "animate",
    value: function animate(ctx) {
      this.drawBackground(ctx);
    }
  }]);

  return Background;
}();

/* harmony default export */ __webpack_exports__["default"] = (Background);

/***/ }),

/***/ "./src/scripts/character.js":
/*!**********************************!*\
  !*** ./src/scripts/character.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/scripts/util.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Character = /*#__PURE__*/function () {
  function Character(gameWidth, gameHeight) {
    _classCallCheck(this, Character);

    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.width = 64;
    this.height = 40;
    this.direction = "right";
    this.moveSpeed = .75;
    this.jumpHeight = -10;
    this.crouching = "false";
    this.jumping = false;
    this.falling = false;
    this.position = {
      x: 100,
      y: this.gameHeight - this.height - 20
    };
    this.velocity = {
      x: 0,
      y: 0
    };
    this.constants = {
      gravity: 0.15,
      friction: 0.9
    };
    this.keys = {};
  }

  _createClass(Character, [{
    key: "drawChar",
    value: function drawChar(ctx, frames) {
      // testing character boundaries
      // ctx.strokeStyle = "green";
      // ctx.moveTo(this.position.x, this.position.y);
      // ctx.lineTo(this.position.x, 0);
      // ctx.moveTo(this.position.x+this.width, this.position.y);
      // ctx.lineTo(this.position.x+this.width, 0);
      // ctx.stroke();
      if (this.direction == 'left') {
        if (this.jumping) {
          ctx.drawImage(_util__WEBPACK_IMPORTED_MODULE_0__.finnLeft, 448, 0, 32, 20, this.position.x, this.position.y, this.width, this.height);
        } else if (this.moving) {
          if (frames < 20) {
            ctx.drawImage(_util__WEBPACK_IMPORTED_MODULE_0__.finnLeft, 544, 0, 32, 20, this.position.x, this.position.y, this.width, this.height);
          } else if (frames > 20 && frames < 40) {
            ctx.drawImage(_util__WEBPACK_IMPORTED_MODULE_0__.finnLeft, 512, 0, 32, 20, this.position.x, this.position.y, this.width, this.height);
          } else {
            ctx.drawImage(_util__WEBPACK_IMPORTED_MODULE_0__.finnLeft, 480, 0, 32, 20, this.position.x, this.position.y, this.width, this.height);
          }

          ;
        } else {
          if (frames < 40) {
            ctx.drawImage(_util__WEBPACK_IMPORTED_MODULE_0__.finnLeft, 864, 0, 32, 20, this.position.x, this.position.y, this.width, this.height);
          } else {
            ctx.drawImage(_util__WEBPACK_IMPORTED_MODULE_0__.finnLeft, 800, 0, 32, 20, this.position.x, this.position.y, this.width, this.height);
          }

          ;
        }

        ;
      } else if (this.direction == 'right') {
        if (this.jumping) {
          ctx.drawImage(_util__WEBPACK_IMPORTED_MODULE_0__.finnRight, 480, 0, 32, 20, this.position.x, this.position.y, this.width, this.height);
        } else if (this.moving) {
          if (frames < 20) {
            ctx.drawImage(_util__WEBPACK_IMPORTED_MODULE_0__.finnRight, 320, 0, 32, 20, this.position.x, this.position.y, this.width, this.height);
          } else if (frames > 20 && frames < 40) {
            ctx.drawImage(_util__WEBPACK_IMPORTED_MODULE_0__.finnRight, 384, 0, 32, 20, this.position.x, this.position.y, this.width, this.height);
          } else {
            ctx.drawImage(_util__WEBPACK_IMPORTED_MODULE_0__.finnRight, 416, 0, 32, 20, this.position.x, this.position.y, this.width, this.height);
          }

          ;
        } else {
          if (frames < 40) {
            ctx.drawImage(_util__WEBPACK_IMPORTED_MODULE_0__.finnRight, 0, 0, 32, 20, this.position.x, this.position.y, this.width, this.height);
          } else {
            ctx.drawImage(_util__WEBPACK_IMPORTED_MODULE_0__.finnRight, 64, 0, 32, 20, this.position.x, this.position.y, this.width, this.height);
          }
        }
      }
    }
  }, {
    key: "updateKeys",
    value: function updateKeys(keys) {
      this.keys = keys;
    }
  }, {
    key: "stop",
    value: function stop() {
      this.velocity.x = 0;
      this.velocity.y = 0;
    }
  }, {
    key: "jump",
    value: function jump() {
      if (this.jumping) {
        this.velocity.y = this.jumpHeight;
      }
    }
  }, {
    key: "crouch",
    value: function crouch() {
      this.height = 20;
    }
  }, {
    key: "uncrouch",
    value: function uncrouch() {
      this.height = 40;
    }
  }, {
    key: "update",
    value: function update(platforms) {
      // check current key presses
      if (this.keys['ArrowLeft']) {
        this.velocity.x = -this.moveSpeed;
      } else if (this.keys['ArrowRight']) {
        this.velocity.x = this.moveSpeed;
      } else {
        this.moving = false;
      }

      this.position.y += this.velocity.y;
      this.position.x += this.velocity.x;
      this.velocity.y += this.constants.gravity;
      this.velocity.x *= this.constants.friction;
      this.velocity.y *= this.constants.friction; // if char is going off screen, stop at edge of screen

      if (this.position.x <= 0) {
        this.position.x = 0;
      } else if (this.position.x >= this.gameWidth - this.width) {
        this.position.x = this.gameWidth - this.width;
      } // check if char is standing on any platform
      // else check if char is falling below floor line
      // else char is currently falling


      for (var i = 0; i < platforms.length; i++) {
        var platform = platforms[i];

        if (this.onPlatform(this.position, platform)) {
          this.falling = false;
          this.jumping = false;
          this.position.y = platform[1] - this.height;
          this.velocity.y = 0;
          break;
        } else if (this.position.y >= this.gameHeight - this.height - 20) {
          this.jumping = false; // char is no longer jumping when landed

          this.falling = false;
          this.position.y = this.gameHeight - this.height - 20;
          this.velocity.y = 0;
          break;
        } else {
          this.falling = true;
        }

        ;
      }
    }
  }, {
    key: "onPlatform",
    value: function onPlatform(charPos, platform) {
      // charPos = {
      //   x: charPosX,
      //   y: charPosY,
      // }
      // platform = [posX, posY, width]
      if (charPos.x + this.width - 15 >= platform[0] && charPos.x + 15 <= platform[0] + platform[2] && charPos.y + 40 <= platform[1] && charPos.y + 40 >= platform[1] - 2) {
        return true;
      }
    }
  }]);

  return Character;
}();

/* harmony default export */ __webpack_exports__["default"] = (Character);

/***/ }),

/***/ "./src/scripts/controller.js":
/*!***********************************!*\
  !*** ./src/scripts/controller.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Controller = function Controller(char) {
  var _this = this;

  _classCallCheck(this, Controller);

  this.keys = {};
  document.addEventListener('keydown', function (event) {
    switch (event.code) {
      case 'ArrowLeft':
        _this.keys[event.code] = true;
        char.direction = "left";
        char.moving = true;
        char.keys = _this.keys;
        break;

      case 'ArrowRight':
        _this.keys[event.code] = true;
        char.direction = "right";
        char.moving = true;
        char.updateKeys(_this.keys);
        break;

      case 'ArrowDown':
        // this.keys[event.code] = true
        char.crouching = true;
        char.crouch();
        break;

      case 'Space':
        // this.keys[event.code] = true
        console.log(char);

        if (!char.jumping && !char.falling) {
          char.jumping = true;
          char.jump();
        }

        break;
    }
  });
  document.addEventListener('keyup', function (event) {
    switch (event.code) {
      case 'ArrowLeft':
        _this.keys[event.code] = false;
        char.keys = _this.keys;
        char.stop();
        break;

      case 'ArrowRight':
        _this.keys[event.code] = false;
        char.keys = _this.keys;
        char.stop();
        break;

      case 'ArrowDown':
        // this.keys[event.code] = false;
        char.crouching = false;
        char.uncrouch();
        break;

      case 'Space':
        // this.keys[event.code] = false;
        break;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Controller);

/***/ }),

/***/ "./src/scripts/platform.js":
/*!*********************************!*\
  !*** ./src/scripts/platform.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Platform = /*#__PURE__*/function () {
  function Platform(posX, posY, width) {
    _classCallCheck(this, Platform);

    this.height = 20;
    this.width = width;
    this.position = {
      x: posX,
      y: posY
    };
  }

  _createClass(Platform, [{
    key: "drawPlatform",
    value: function drawPlatform(ctx) {
      ctx.fillStyle = "pink";
      ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
      ctx.fill(); // testing platform boundaries
      // ctx.beginPath();
      // ctx.strokeStyle = "blue";
      // ctx.moveTo(this.position.x, this.position.y);
      // ctx.lineTo(this.position.x, 0);
      // ctx.moveTo(this.position.x+this.width, this.position.y);
      // ctx.lineTo(this.position.x+this.width, 0);
      // ctx.stroke();
    }
  }]);

  return Platform;
}();

/* harmony default export */ __webpack_exports__["default"] = (Platform);

/***/ }),

/***/ "./src/scripts/util.js":
/*!*****************************!*\
  !*** ./src/scripts/util.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "finnRight": function() { return /* binding */ finnRight; },
/* harmony export */   "finnLeft": function() { return /* binding */ finnLeft; }
/* harmony export */ });
var finnRight = new Image();
finnRight.src = './dist/images/FinnSprite-right.png';
var finnLeft = new Image();
finnLeft.src = './dist/images/FinnSprite-left.png';

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _scripts_character__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/character */ "./src/scripts/character.js");
/* harmony import */ var _scripts_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/controller */ "./src/scripts/controller.js");
/* harmony import */ var _scripts_background__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/background */ "./src/scripts/background.js");
/* harmony import */ var _scripts_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/platform */ "./src/scripts/platform.js");
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

 // import JumpQuest from "./scripts/game";





console.log("webpack is working properly");
document.addEventListener("DOMContentLoaded", function () {
  var canvas = document.getElementById("jump-quest");
  var ctx = canvas.getContext("2d");
  var GAME_WIDTH = ctx.canvas.width;
  var GAME_HEIGHT = ctx.canvas.height;
  var char = new _scripts_character__WEBPACK_IMPORTED_MODULE_1__.default(GAME_WIDTH, GAME_HEIGHT);
  new _scripts_controller__WEBPACK_IMPORTED_MODULE_2__.default(char);
  var bg = new _scripts_background__WEBPACK_IMPORTED_MODULE_3__.default(GAME_WIDTH, GAME_HEIGHT);
  var frames = 0; // platform = [posX, posY, width]

  var platforms = {
    1: [200, 4910, 100],
    2: [350, 4870, 100],
    3: [500, 4830, 100],
    4: [650, 4790, 100],
    5: [800, 4750, 100]
  };
  document.addEventListener("keydown", function (event) {
    switch (event.code) {
      case 'Enter':
        startGame();
        break;
    }
  });

  function startGame() {
    gameLoop();
    requestAnimationFrame(gameLoop);
  }

  function gameLoop() {
    // ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    bg.drawBackground(ctx);
    drawPlatforms();
    char.update(Object.values(platforms));
    char.drawChar(ctx, frames);

    if (frames >= 60) {
      frames = 0;
    } else {
      frames++;
    }

    requestAnimationFrame(gameLoop);
  }

  function drawPlatforms() {
    Object.values(platforms).forEach(function (platform) {
      var p = _construct(_scripts_platform__WEBPACK_IMPORTED_MODULE_4__.default, _toConsumableArray(platform));

      p.drawPlatform(ctx);
    });
  }
});
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qdW1wcXVlc3QvLi9zcmMvc2NyaXB0cy9iYWNrZ3JvdW5kLmpzIiwid2VicGFjazovL2p1bXBxdWVzdC8uL3NyYy9zY3JpcHRzL2NoYXJhY3Rlci5qcyIsIndlYnBhY2s6Ly9qdW1wcXVlc3QvLi9zcmMvc2NyaXB0cy9jb250cm9sbGVyLmpzIiwid2VicGFjazovL2p1bXBxdWVzdC8uL3NyYy9zY3JpcHRzL3BsYXRmb3JtLmpzIiwid2VicGFjazovL2p1bXBxdWVzdC8uL3NyYy9zY3JpcHRzL3V0aWwuanMiLCJ3ZWJwYWNrOi8vanVtcHF1ZXN0Ly4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIiwid2VicGFjazovL2p1bXBxdWVzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qdW1wcXVlc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2p1bXBxdWVzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2p1bXBxdWVzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2p1bXBxdWVzdC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJCYWNrZ3JvdW5kIiwiZ2FtZVdpZHRoIiwiZ2FtZUhlaWdodCIsIndpZHRoIiwiaGVpZ2h0IiwiY3R4IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJmaWxsIiwiZHJhd0JhY2tncm91bmQiLCJDaGFyYWN0ZXIiLCJkaXJlY3Rpb24iLCJtb3ZlU3BlZWQiLCJqdW1wSGVpZ2h0IiwiY3JvdWNoaW5nIiwianVtcGluZyIsImZhbGxpbmciLCJwb3NpdGlvbiIsIngiLCJ5IiwidmVsb2NpdHkiLCJjb25zdGFudHMiLCJncmF2aXR5IiwiZnJpY3Rpb24iLCJrZXlzIiwiZnJhbWVzIiwiZHJhd0ltYWdlIiwiZmlubkxlZnQiLCJtb3ZpbmciLCJmaW5uUmlnaHQiLCJwbGF0Zm9ybXMiLCJpIiwibGVuZ3RoIiwicGxhdGZvcm0iLCJvblBsYXRmb3JtIiwiY2hhclBvcyIsIkNvbnRyb2xsZXIiLCJjaGFyIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJjb2RlIiwidXBkYXRlS2V5cyIsImNyb3VjaCIsImNvbnNvbGUiLCJsb2ciLCJqdW1wIiwic3RvcCIsInVuY3JvdWNoIiwiUGxhdGZvcm0iLCJwb3NYIiwicG9zWSIsIkltYWdlIiwic3JjIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0IiwiR0FNRV9XSURUSCIsIkdBTUVfSEVJR0hUIiwiYmciLCJzdGFydEdhbWUiLCJnYW1lTG9vcCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImRyYXdQbGF0Zm9ybXMiLCJ1cGRhdGUiLCJPYmplY3QiLCJ2YWx1ZXMiLCJkcmF3Q2hhciIsImZvckVhY2giLCJwIiwiZHJhd1BsYXRmb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztJQUFNQSxVO0FBQ0osc0JBQVlDLFNBQVosRUFBdUJDLFVBQXZCLEVBQW1DO0FBQUE7O0FBQ2pDLFNBQUtDLEtBQUwsR0FBYUYsU0FBYjtBQUNBLFNBQUtHLE1BQUwsR0FBY0YsVUFBZDtBQUNEOzs7O1dBRUQsd0JBQWVHLEdBQWYsRUFBb0I7QUFDbEJBLFNBQUcsQ0FBQ0MsU0FBSixHQUFnQixNQUFoQjtBQUNBRCxTQUFHLENBQUNFLFFBQUosQ0FBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLEtBQUtKLEtBQXhCLEVBQStCLEtBQUtDLE1BQUwsR0FBYyxFQUE3QztBQUNBQyxTQUFHLENBQUNHLElBQUo7QUFDQUgsU0FBRyxDQUFDQyxTQUFKLEdBQWdCLE9BQWhCO0FBQ0FELFNBQUcsQ0FBQ0UsUUFBSixDQUFhLENBQWIsRUFBZ0IsS0FBS0gsTUFBTCxHQUFjLEVBQTlCLEVBQWtDLEtBQUtELEtBQXZDLEVBQThDLEtBQUtDLE1BQW5EO0FBQ0FDLFNBQUcsQ0FBQ0csSUFBSjtBQUNEOzs7V0FFRCxp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WjtBQUxXLEdBQWhCO0FBUUFRLFVBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUMsVUFBQUMsS0FBSyxFQUFJO0FBQzVDLFlBQU9BLEtBQUssQ0FBQ0MsSUFBYjtBQUNFLFdBQUssT0FBTDtBQUNFbUIsaUJBQVM7QUFDVDtBQUhKO0FBS0QsR0FORDs7QUFRQSxXQUFTQSxTQUFULEdBQXFCO0FBQ25CQyxZQUFRO0FBQ1JDLHlCQUFxQixDQUFDRCxRQUFELENBQXJCO0FBQ0Q7O0FBRUQsV0FBU0EsUUFBVCxHQUFvQjtBQUNsQjtBQUNBRixNQUFFLENBQUNsRCxjQUFILENBQWtCSixHQUFsQjtBQUNBMEQsaUJBQWE7QUFDYjFCLFFBQUksQ0FBQzJCLE1BQUwsQ0FBWUMsTUFBTSxDQUFDQyxNQUFQLENBQWNwQyxTQUFkLENBQVo7QUFDQU8sUUFBSSxDQUFDOEIsUUFBTCxDQUFjOUQsR0FBZCxFQUFtQm9CLE1BQW5COztBQUVBLFFBQUlBLE1BQU0sSUFBSSxFQUFkLEVBQWtCO0FBQ2hCQSxZQUFNLEdBQUcsQ0FBVDtBQUNELEtBRkQsTUFFTztBQUNMQSxZQUFNO0FBQ1A7O0FBRURxQyx5QkFBcUIsQ0FBQ0QsUUFBRCxDQUFyQjtBQUNEOztBQUVELFdBQVNFLGFBQVQsR0FBeUI7QUFDdkJFLFVBQU0sQ0FBQ0MsTUFBUCxDQUFjcEMsU0FBZCxFQUF5QnNDLE9BQXpCLENBQWlDLFVBQUFuQyxRQUFRLEVBQUk7QUFDM0MsVUFBSW9DLENBQUMsY0FBT3BCLHNEQUFQLHFCQUFtQmhCLFFBQW5CLEVBQUw7O0FBQ0FvQyxPQUFDLENBQUNDLFlBQUYsQ0FBZWpFLEdBQWY7QUFDRCxLQUhEO0FBSUQ7QUFFRixDQXZERCxFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBCYWNrZ3JvdW5kIHtcbiAgY29uc3RydWN0b3IoZ2FtZVdpZHRoLCBnYW1lSGVpZ2h0KSB7XG4gICAgdGhpcy53aWR0aCA9IGdhbWVXaWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IGdhbWVIZWlnaHQ7XG4gIH1cblxuICBkcmF3QmFja2dyb3VuZChjdHgpIHtcbiAgICBjdHguZmlsbFN0eWxlID0gXCJncmV5XCI7XG4gICAgY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0IC0gMjApO1xuICAgIGN0eC5maWxsKCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiYnJvd25cIjtcbiAgICBjdHguZmlsbFJlY3QoMCwgdGhpcy5oZWlnaHQgLSAyMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIGN0eC5maWxsKCk7XG4gIH1cblxuICBhbmltYXRlKGN0eCkge1xuICAgIHRoaXMuZHJhd0JhY2tncm91bmQoY3R4KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYWNrZ3JvdW5kOyIsImltcG9ydCB7IGZpbm5SaWdodCwgZmlubkxlZnQgfSBmcm9tICcuL3V0aWwnO1xuXG5jbGFzcyBDaGFyYWN0ZXIge1xuICBjb25zdHJ1Y3RvcihnYW1lV2lkdGgsIGdhbWVIZWlnaHQpIHtcbiAgICB0aGlzLmdhbWVXaWR0aCA9IGdhbWVXaWR0aDtcbiAgICB0aGlzLmdhbWVIZWlnaHQgPSBnYW1lSGVpZ2h0O1xuICAgIHRoaXMud2lkdGggPSA2NDtcbiAgICB0aGlzLmhlaWdodCA9IDQwO1xuICAgIHRoaXMuZGlyZWN0aW9uID0gXCJyaWdodFwiO1xuICAgIHRoaXMubW92ZVNwZWVkID0gLjc1O1xuICAgIHRoaXMuanVtcEhlaWdodCA9IC0xMDtcbiAgICB0aGlzLmNyb3VjaGluZyA9IFwiZmFsc2VcIjtcbiAgICB0aGlzLmp1bXBpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmZhbGxpbmcgPSBmYWxzZTtcbiAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgeDogMTAwLFxuICAgICAgeTogdGhpcy5nYW1lSGVpZ2h0IC0gdGhpcy5oZWlnaHQgLSAyMCxcbiAgICB9O1xuICAgIHRoaXMudmVsb2NpdHkgPSB7XG4gICAgICB4OiAwLFxuICAgICAgeTogMCxcbiAgICB9O1xuICAgIHRoaXMuY29uc3RhbnRzID0ge1xuICAgICAgZ3Jhdml0eTogMC4xNSxcbiAgICAgIGZyaWN0aW9uOiAwLjksXG4gICAgfTtcbiAgICB0aGlzLmtleXMgPSB7fTtcbiAgfVxuXG4gIGRyYXdDaGFyKGN0eCwgZnJhbWVzKSB7XG4gICAgLy8gdGVzdGluZyBjaGFyYWN0ZXIgYm91bmRhcmllc1xuICAgIC8vIGN0eC5zdHJva2VTdHlsZSA9IFwiZ3JlZW5cIjtcbiAgICAvLyBjdHgubW92ZVRvKHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55KTtcbiAgICAvLyBjdHgubGluZVRvKHRoaXMucG9zaXRpb24ueCwgMCk7XG4gICAgLy8gY3R4Lm1vdmVUbyh0aGlzLnBvc2l0aW9uLngrdGhpcy53aWR0aCwgdGhpcy5wb3NpdGlvbi55KTtcbiAgICAvLyBjdHgubGluZVRvKHRoaXMucG9zaXRpb24ueCt0aGlzLndpZHRoLCAwKTtcbiAgICAvLyBjdHguc3Ryb2tlKCk7XG5cbiAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT0gJ2xlZnQnKSB7XG4gICAgICBpZiAodGhpcy5qdW1waW5nKSB7IFxuICAgICAgICBjdHguZHJhd0ltYWdlKGZpbm5MZWZ0LCA0NDgsIDAsIDMyLCAyMCwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5tb3ZpbmcpIHtcbiAgICAgICAgaWYgKGZyYW1lcyA8IDIwKSB7XG4gICAgICAgICAgY3R4LmRyYXdJbWFnZShmaW5uTGVmdCwgNTQ0LCAwLCAzMiwgMjAsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZnJhbWVzID4gMjAgJiYgZnJhbWVzIDwgNDApIHsgXG4gICAgICAgICAgY3R4LmRyYXdJbWFnZShmaW5uTGVmdCwgNTEyLCAwLCAzMiwgMjAsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY3R4LmRyYXdJbWFnZShmaW5uTGVmdCwgNDgwLCAwLCAzMiwgMjAsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZnJhbWVzIDwgNDApIHtcbiAgICAgICAgICBjdHguZHJhd0ltYWdlKGZpbm5MZWZ0LCA4NjQsIDAsIDMyLCAyMCwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjdHguZHJhd0ltYWdlKGZpbm5MZWZ0LCA4MDAsIDAsIDMyLCAyMCwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgfTtcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmICh0aGlzLmRpcmVjdGlvbiA9PSAncmlnaHQnKSB7XG4gICAgICBpZiAodGhpcy5qdW1waW5nKSB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoZmlublJpZ2h0LCA0ODAsIDAsIDMyLCAyMCwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5tb3ZpbmcpIHtcbiAgICAgICAgaWYgKGZyYW1lcyA8IDIwKSB7XG4gICAgICAgICAgY3R4LmRyYXdJbWFnZShmaW5uUmlnaHQsIDMyMCwgMCwgMzIsIDIwLCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB9IGVsc2UgaWYgKGZyYW1lcyA+IDIwICYmIGZyYW1lcyA8IDQwKSB7IFxuICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoZmlublJpZ2h0LCAzODQsIDAsIDMyLCAyMCwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjdHguZHJhd0ltYWdlKGZpbm5SaWdodCwgNDE2LCAwLCAzMiwgMjAsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZnJhbWVzIDwgNDApIHtcbiAgICAgICAgICBjdHguZHJhd0ltYWdlKGZpbm5SaWdodCwgMCwgMCwgMzIsIDIwLCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoZmlublJpZ2h0LCA2NCwgMCwgMzIsIDIwLCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlS2V5cyhrZXlzKSB7XG4gICAgdGhpcy5rZXlzID0ga2V5cztcbiAgfVxuXG4gIHN0b3AoKSB7XG4gICAgdGhpcy52ZWxvY2l0eS54ID0gMDtcbiAgICB0aGlzLnZlbG9jaXR5LnkgPSAwO1xuICB9XG5cbiAganVtcCgpIHtcbiAgICBpZiAodGhpcy5qdW1waW5nKSB7XG4gICAgICB0aGlzLnZlbG9jaXR5LnkgPSB0aGlzLmp1bXBIZWlnaHRcbiAgICB9XG4gIH1cblxuICBjcm91Y2goKSB7XG4gICAgdGhpcy5oZWlnaHQgPSAyMDtcbiAgfVxuXG4gIHVuY3JvdWNoKCkge1xuICAgIHRoaXMuaGVpZ2h0ID0gNDA7XG4gIH1cblxuICB1cGRhdGUocGxhdGZvcm1zKSB7XG4gICAgLy8gY2hlY2sgY3VycmVudCBrZXkgcHJlc3Nlc1xuICAgIGlmICh0aGlzLmtleXNbJ0Fycm93TGVmdCddKSB7XG4gICAgICB0aGlzLnZlbG9jaXR5LnggPSAtdGhpcy5tb3ZlU3BlZWQ7XG4gICAgfSBlbHNlIGlmICh0aGlzLmtleXNbJ0Fycm93UmlnaHQnXSkge1xuICAgICAgdGhpcy52ZWxvY2l0eS54ID0gdGhpcy5tb3ZlU3BlZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubW92aW5nID0gZmFsc2U7XG4gICAgfVxuICAgIFxuICAgIHRoaXMucG9zaXRpb24ueSArPSB0aGlzLnZlbG9jaXR5Lnk7XG4gICAgdGhpcy5wb3NpdGlvbi54ICs9IHRoaXMudmVsb2NpdHkueDtcbiAgICB0aGlzLnZlbG9jaXR5LnkgKz0gdGhpcy5jb25zdGFudHMuZ3Jhdml0eTtcbiAgICB0aGlzLnZlbG9jaXR5LnggKj0gdGhpcy5jb25zdGFudHMuZnJpY3Rpb247XG4gICAgdGhpcy52ZWxvY2l0eS55ICo9IHRoaXMuY29uc3RhbnRzLmZyaWN0aW9uO1xuXG4gICAgLy8gaWYgY2hhciBpcyBnb2luZyBvZmYgc2NyZWVuLCBzdG9wIGF0IGVkZ2Ugb2Ygc2NyZWVuXG4gICAgaWYgKHRoaXMucG9zaXRpb24ueCA8PSAwKSB7XG4gICAgICB0aGlzLnBvc2l0aW9uLnggPSAwO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wb3NpdGlvbi54ID49IHRoaXMuZ2FtZVdpZHRoIC0gdGhpcy53aWR0aCkge1xuICAgICAgdGhpcy5wb3NpdGlvbi54ID0gdGhpcy5nYW1lV2lkdGggLSB0aGlzLndpZHRoO1xuICAgIH1cblxuICAgIC8vIGNoZWNrIGlmIGNoYXIgaXMgc3RhbmRpbmcgb24gYW55IHBsYXRmb3JtXG4gICAgLy8gZWxzZSBjaGVjayBpZiBjaGFyIGlzIGZhbGxpbmcgYmVsb3cgZmxvb3IgbGluZVxuICAgIC8vIGVsc2UgY2hhciBpcyBjdXJyZW50bHkgZmFsbGluZ1xuICAgIGZvciAobGV0IGk9MDsgaTxwbGF0Zm9ybXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBwbGF0Zm9ybSA9IHBsYXRmb3Jtc1tpXTtcbiAgICAgIGlmICh0aGlzLm9uUGxhdGZvcm0odGhpcy5wb3NpdGlvbiwgcGxhdGZvcm0pKSB7XG4gICAgICAgIHRoaXMuZmFsbGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmp1bXBpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gcGxhdGZvcm1bMV0tdGhpcy5oZWlnaHQ7XG4gICAgICAgIHRoaXMudmVsb2NpdHkueSA9IDA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnBvc2l0aW9uLnkgPj0gdGhpcy5nYW1lSGVpZ2h0IC0gdGhpcy5oZWlnaHQgLSAyMCkge1xuICAgICAgICB0aGlzLmp1bXBpbmcgPSBmYWxzZTsgLy8gY2hhciBpcyBubyBsb25nZXIganVtcGluZyB3aGVuIGxhbmRlZFxuICAgICAgICB0aGlzLmZhbGxpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gdGhpcy5nYW1lSGVpZ2h0IC0gdGhpcy5oZWlnaHQgLSAyMDtcbiAgICAgICAgdGhpcy52ZWxvY2l0eS55ID0gMDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmZhbGxpbmcgPSB0cnVlO1xuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBvblBsYXRmb3JtKGNoYXJQb3MsIHBsYXRmb3JtKSB7XG4gICAgLy8gY2hhclBvcyA9IHtcbiAgICAvLyAgIHg6IGNoYXJQb3NYLFxuICAgIC8vICAgeTogY2hhclBvc1ksXG4gICAgLy8gfVxuICAgIC8vIHBsYXRmb3JtID0gW3Bvc1gsIHBvc1ksIHdpZHRoXVxuXG4gICAgaWYgKCgoY2hhclBvcy54ICsgdGhpcy53aWR0aCAtMTUpID49IHBsYXRmb3JtWzBdKSAmJlxuICAgICgoY2hhclBvcy54KzE1KSA8PSAocGxhdGZvcm1bMF0rcGxhdGZvcm1bMl0pKSAmJlxuICAgICgoY2hhclBvcy55ICsgNDApIDw9IHBsYXRmb3JtWzFdKSAmJlxuICAgICgoY2hhclBvcy55ICsgNDApID49IHBsYXRmb3JtWzFdLTIpKXtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IENoYXJhY3RlcjsiLCJjbGFzcyBDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoY2hhcikge1xuICAgIHRoaXMua2V5cyA9IHt9O1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICAgICAgc3dpdGNoIChldmVudC5jb2RlKSB7XG4gICAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgICAgICAgdGhpcy5rZXlzW2V2ZW50LmNvZGVdID0gdHJ1ZVxuICAgICAgICAgIGNoYXIuZGlyZWN0aW9uID0gXCJsZWZ0XCI7XG4gICAgICAgICAgY2hhci5tb3ZpbmcgPSB0cnVlO1xuICAgICAgICAgIGNoYXIua2V5cyA9IHRoaXMua2V5cztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XG4gICAgICAgICAgdGhpcy5rZXlzW2V2ZW50LmNvZGVdID0gdHJ1ZVxuICAgICAgICAgIGNoYXIuZGlyZWN0aW9uID0gXCJyaWdodFwiO1xuICAgICAgICAgIGNoYXIubW92aW5nID0gdHJ1ZTtcbiAgICAgICAgICBjaGFyLnVwZGF0ZUtleXModGhpcy5rZXlzKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgICAvLyB0aGlzLmtleXNbZXZlbnQuY29kZV0gPSB0cnVlXG4gICAgICAgICAgY2hhci5jcm91Y2hpbmcgPSB0cnVlO1xuICAgICAgICAgIGNoYXIuY3JvdWNoKCk7ICAgXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1NwYWNlJzpcbiAgICAgICAgICAvLyB0aGlzLmtleXNbZXZlbnQuY29kZV0gPSB0cnVlXG4gICAgICAgICAgY29uc29sZS5sb2coY2hhcik7XG4gICAgICAgICAgaWYgKCFjaGFyLmp1bXBpbmcgJiYgIWNoYXIuZmFsbGluZykge1xuICAgICAgICAgICAgY2hhci5qdW1waW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIGNoYXIuanVtcCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2ZW50KSA9PiB7XG4gICAgICBzd2l0Y2ggKGV2ZW50LmNvZGUpIHtcbiAgICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcbiAgICAgICAgICB0aGlzLmtleXNbZXZlbnQuY29kZV0gPSBmYWxzZTtcbiAgICAgICAgICBjaGFyLmtleXMgPSB0aGlzLmtleXM7XG4gICAgICAgICAgY2hhci5zdG9wKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICAgIHRoaXMua2V5c1tldmVudC5jb2RlXSA9IGZhbHNlO1xuICAgICAgICAgIGNoYXIua2V5cyA9IHRoaXMua2V5cztcbiAgICAgICAgICBjaGFyLnN0b3AoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgICAvLyB0aGlzLmtleXNbZXZlbnQuY29kZV0gPSBmYWxzZTtcbiAgICAgICAgICBjaGFyLmNyb3VjaGluZyA9IGZhbHNlO1xuICAgICAgICAgIGNoYXIudW5jcm91Y2goKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnU3BhY2UnOlxuICAgICAgICAgIC8vIHRoaXMua2V5c1tldmVudC5jb2RlXSA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udHJvbGxlcjsiLCJjbGFzcyBQbGF0Zm9ybSB7XG4gIGNvbnN0cnVjdG9yKHBvc1gsIHBvc1ksIHdpZHRoKSB7XG4gICAgdGhpcy5oZWlnaHQgPSAyMDtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgIHg6IHBvc1gsXG4gICAgICB5OiBwb3NZXG4gICAgfVxuICB9XG5cbiAgZHJhd1BsYXRmb3JtKGN0eCkge1xuICAgIGN0eC5maWxsU3R5bGUgPSBcInBpbmtcIjtcbiAgICBjdHguZmlsbFJlY3QodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICBjdHguZmlsbCgpO1xuXG4gICAgLy8gdGVzdGluZyBwbGF0Zm9ybSBib3VuZGFyaWVzXG4gICAgLy8gY3R4LmJlZ2luUGF0aCgpO1xuICAgIC8vIGN0eC5zdHJva2VTdHlsZSA9IFwiYmx1ZVwiO1xuICAgIC8vIGN0eC5tb3ZlVG8odGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnkpO1xuICAgIC8vIGN0eC5saW5lVG8odGhpcy5wb3NpdGlvbi54LCAwKTtcbiAgICAvLyBjdHgubW92ZVRvKHRoaXMucG9zaXRpb24ueCt0aGlzLndpZHRoLCB0aGlzLnBvc2l0aW9uLnkpO1xuICAgIC8vIGN0eC5saW5lVG8odGhpcy5wb3NpdGlvbi54K3RoaXMud2lkdGgsIDApO1xuICAgIC8vIGN0eC5zdHJva2UoKTtcbiAgfSBcblxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF0Zm9ybTtcblxuIiwiZXhwb3J0IGNvbnN0IGZpbm5SaWdodCA9IG5ldyBJbWFnZSgpO1xuZmlublJpZ2h0LnNyYyA9ICcuL2Rpc3QvaW1hZ2VzL0Zpbm5TcHJpdGUtcmlnaHQucG5nJztcbmV4cG9ydCBjb25zdCBmaW5uTGVmdCA9IG5ldyBJbWFnZSgpO1xuZmlubkxlZnQuc3JjID0gJy4vZGlzdC9pbWFnZXMvRmlublNwcml0ZS1sZWZ0LnBuZyc7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuLy8gaW1wb3J0IEp1bXBRdWVzdCBmcm9tIFwiLi9zY3JpcHRzL2dhbWVcIjtcbmltcG9ydCBDaGFyYWN0ZXIgZnJvbSBcIi4vc2NyaXB0cy9jaGFyYWN0ZXJcIjtcbmltcG9ydCBDb250cm9sbGVyIGZyb20gXCIuL3NjcmlwdHMvY29udHJvbGxlclwiO1xuaW1wb3J0IEJhY2tncm91bmQgZnJvbSBcIi4vc2NyaXB0cy9iYWNrZ3JvdW5kXCI7XG5pbXBvcnQgUGxhdGZvcm0gZnJvbSBcIi4vc2NyaXB0cy9wbGF0Zm9ybVwiO1xuY29uc29sZS5sb2coXCJ3ZWJwYWNrIGlzIHdvcmtpbmcgcHJvcGVybHlcIik7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianVtcC1xdWVzdFwiKTtcbiAgbGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gIGNvbnN0IEdBTUVfV0lEVEggPSBjdHguY2FudmFzLndpZHRoO1xuICBjb25zdCBHQU1FX0hFSUdIVCA9IGN0eC5jYW52YXMuaGVpZ2h0O1xuXG4gIGxldCBjaGFyID0gbmV3IENoYXJhY3RlcihHQU1FX1dJRFRILCBHQU1FX0hFSUdIVCk7XG4gIG5ldyBDb250cm9sbGVyKGNoYXIpXG4gIGxldCBiZyA9IG5ldyBCYWNrZ3JvdW5kKEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hUKTtcbiAgbGV0IGZyYW1lcyA9IDA7XG4gIC8vIHBsYXRmb3JtID0gW3Bvc1gsIHBvc1ksIHdpZHRoXVxuICBsZXQgcGxhdGZvcm1zID0ge1xuICAgIDE6IFsyMDAsIDQ5MTAsIDEwMF0sXG4gICAgMjogWzM1MCwgNDg3MCwgMTAwXSxcbiAgICAzOiBbNTAwLCA0ODMwLCAxMDBdLFxuICAgIDQ6IFs2NTAsIDQ3OTAsIDEwMF0sXG4gICAgNTogWzgwMCwgNDc1MCwgMTAwXSxcbiAgfTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBldmVudCA9PiB7XG4gICAgc3dpdGNoKGV2ZW50LmNvZGUpIHtcbiAgICAgIGNhc2UgJ0VudGVyJzpcbiAgICAgICAgc3RhcnRHYW1lKCk7XG4gICAgICAgIGJyZWFrXG4gICAgfVxuICB9KVxuXG4gIGZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcbiAgICBnYW1lTG9vcCgpO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG4gIH1cblxuICBmdW5jdGlvbiBnYW1lTG9vcCgpIHtcbiAgICAvLyBjdHguY2xlYXJSZWN0KDAsIDAsIEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hUKTtcbiAgICBiZy5kcmF3QmFja2dyb3VuZChjdHgpO1xuICAgIGRyYXdQbGF0Zm9ybXMoKTtcbiAgICBjaGFyLnVwZGF0ZShPYmplY3QudmFsdWVzKHBsYXRmb3JtcykpO1xuICAgIGNoYXIuZHJhd0NoYXIoY3R4LCBmcmFtZXMpO1xuXG4gICAgaWYgKGZyYW1lcyA+PSA2MCkge1xuICAgICAgZnJhbWVzID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgZnJhbWVzKys7XG4gICAgfVxuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRyYXdQbGF0Zm9ybXMoKSB7XG4gICAgT2JqZWN0LnZhbHVlcyhwbGF0Zm9ybXMpLmZvckVhY2gocGxhdGZvcm0gPT4ge1xuICAgICAgbGV0IHAgPSBuZXcgUGxhdGZvcm0oLi4ucGxhdGZvcm0pO1xuICAgICAgcC5kcmF3UGxhdGZvcm0oY3R4KTtcbiAgICB9KVxuICB9XG5cbn0pIl0sInNvdXJjZVJvb3QiOiIifQ==