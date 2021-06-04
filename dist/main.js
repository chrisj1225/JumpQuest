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
      ctx.fillStyle = "lightblue";
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
    this.crouching = false;
    this.jumping = false;
    this.falling = false;
    this.isColliding = true;
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
      // ctx.moveTo(this.position.x+20, this.position.y);
      // ctx.lineTo(this.position.x+20, 0);
      // ctx.moveTo(this.position.x+this.width-30, this.position.y);
      // ctx.lineTo(this.position.x+this.width-30, 0);
      // ctx.stroke();
      if (this.direction == 'left') {
        if (this.jumping || this.falling) {
          ctx.drawImage(_util__WEBPACK_IMPORTED_MODULE_0__.finnLeft, 448, 0, 32, 20, this.position.x, this.position.y, this.width, this.height);
        } else if (this.isColliding) {
          ctx.drawImage(_util__WEBPACK_IMPORTED_MODULE_0__.finnLeft, 416, 0, 32, 20, this.position.x, this.position.y, this.width, this.height);
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
        if (this.jumping || this.falling) {
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
      this.velocity.y = -5;
    }
  }, {
    key: "update",
    value: function update(platforms, obstacles) {
      // check current key presses
      if (this.keys['ArrowLeft']) {
        this.velocity.x = -this.moveSpeed;
      } else if (this.keys['ArrowRight']) {
        this.velocity.x = this.moveSpeed;
      } else {
        this.moving = false;
      } // char movements


      this.position.y += this.velocity.y;
      this.position.x += this.velocity.x;
      this.velocity.y += this.constants.gravity;
      this.velocity.x *= this.constants.friction;
      this.velocity.y *= this.constants.friction; // if char is going off screen, stop at edge of screen

      if (this.position.x <= 0) {
        this.position.x = 0;
      } else if (this.position.x >= this.gameWidth - this.width) {
        this.position.x = this.gameWidth - this.width;
      } // **Write code to filter out platforms NOT in current view frame**
      // check if char is standing on any platform
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
          this.jumping = false;
          this.falling = false;
          this.position.y = this.gameHeight - this.height - 20;
          this.velocity.y = 0;
          break;
        } else {
          this.falling = true;
        }

        ;
      } // **Write code to filter out obstacles NOT in current view frame**


      for (var _i = 0; _i < obstacles.length; _i++) {
        var obstacle = obstacles[_i];

        if (this.collisionDetection(obstacle)) {
          // console.log('collision!');
          this.isColliding = true;

          if (obstacle.orientation == 'vertical') {
            if (this.direction == 'left') {
              this.position.x += 10;
            } else {
              this.position.x -= 10;
            }
          } else {
            if (obstacle.direction = 'RD') {
              this.position.x -= 10;
            } else {
              this.position.x += 10;
            }
          }

          break;
        } else {
          this.isColliding = false;
        }
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
      if (this.crouching) {
        if (charPos.x + this.width - 15 >= platform[0] && charPos.x + 15 <= platform[0] + platform[2] && charPos.y + 20 <= platform[1] && charPos.y + 20 >= platform[1] - 2) {
          return true;
        }

        ;
      } else {
        if (charPos.x + this.width - 15 >= platform[0] && charPos.x + 15 <= platform[0] + platform[2] && charPos.y + 40 <= platform[1] && charPos.y + 40 >= platform[1] - 2) {
          return true;
        }

        ;
      }

      ;
    } // return true if an obstacle collides with user

  }, {
    key: "collisionDetection",
    value: function collisionDetection(obstacle) {
      var o = {
        x: obstacle.position.x,
        y: obstacle.position.y,
        r: obstacle.radius
      };
      var c = {
        x: this.position.x + 20,
        y: this.position.y,
        w: this.width - 30,
        h: this.height
      }; // find horiz/vert distance b/w center of obstacle & character

      var distX = Math.abs(o.x - c.x - c.w / 2);
      var distY = Math.abs(o.y - c.y - c.h / 2); // return false if dist is greater than min dist b/w edges (x or y)

      if (distX > c.w / 2 + o.r || distY > c.h / 2 + o.r) {
        return false;
      }

      ; // return true if dist is <= char width/2

      if (distX <= c.w / 2 && distY <= c.h / 2) {
        return true;
      }

      ; // dx & dy = dist b/w obstacle center & char edge (x & y)

      var dx = distX - c.w / 2;
      var dy = distY - c.h / 2; // use pythagorean theorem to see if radius^2  
      // is greater than hypotenuse of dx^2 + dy^2 
      // if greater, object and char are colliding (true)

      return Math.pow(dx, 2) + Math.pow(dy, 2) <= Math.pow(o.r, 2);
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
        if (!char.jumping && !char.falling && !char.colliding) {
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

/***/ "./src/scripts/obstacle.js":
/*!*********************************!*\
  !*** ./src/scripts/obstacle.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Obstacle = /*#__PURE__*/function () {
  function Obstacle(posX, posY, radius, orientation, travelLength, color, speed) {
    _classCallCheck(this, Obstacle);

    this.initPos = {
      x: posX,
      y: posY
    };
    this.position = {
      x: posX,
      y: posY
    };
    this.radius = radius;
    this.orientation = orientation;
    this.travelLen = travelLength;
    this.color = color;
    this.speed = speed;
    this.direction = "RD"; // LU = left/up, RD = right/down (dep. on orientation)
  }

  _createClass(Obstacle, [{
    key: "drawObstacle",
    value: function drawObstacle(ctx) {
      ctx.beginPath();
      ctx.moveTo(this.position.x, this.position.y);
      ctx.fillStyle = this.color;
      ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, true);
      ctx.stroke();
      ctx.fill();
    }
  }, {
    key: "update",
    value: function update() {
      // set direction obstacle should move based on current position (RD/LU)
      if (this.orientation == "horizontal") {
        if (this.position.x <= this.initPos.x) {
          this.direction = "RD";
        } else if (this.position.x >= this.initPos.x + this.travelLen) {
          this.direction = "LU";
        } else {
          this.direction = this.direction;
        }

        ;
      } else if (this.orientation == "vertical") {
        if (this.position.y <= this.initPos.y) {
          this.direction = "RD";
        } else if (this.position.y >= this.initPos.y + this.travelLen) {
          this.direction = "LU";
        } else {
          this.direction = this.direction;
        }

        ;
      } else if (this.direction === "static") {}

      ; // move obstacle according to its direction

      if (this.orientation == "horizontal") {
        if (this.direction == "RD") {
          this.position.x += this.speed;
        } else {
          this.position.x -= this.speed;
        }

        ;
      } else if (this.orientation == "vertical") {
        if (this.direction == "RD") {
          this.position.y += this.speed;
        } else {
          this.position.y -= this.speed;
        }

        ;
      }
    }
  }]);

  return Obstacle;
}();

/* harmony default export */ __webpack_exports__["default"] = (Obstacle);

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
  function Platform(posX, posY, width, i) {
    _classCallCheck(this, Platform);

    this.height = 20;
    this.width = width;
    this.position = {
      x: posX,
      y: posY
    };
    this.index = i;
  }

  _createClass(Platform, [{
    key: "drawPlatform",
    value: function drawPlatform(ctx) {
      ctx.fillStyle = "pink";
      ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
      ctx.fill(); // printing platform index/key & coordinates

      ctx.fillStyle = "white";
      ctx.font = "16px serif";
      ctx.fillText("".concat(this.index, ": ").concat(this.position.x, ", ").concat(this.position.y), this.position.x, this.position.y + 35); // testing platform boundaries
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
/* harmony import */ var _scripts_obstacle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/obstacle */ "./src/scripts/obstacle.js");
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
  var frames = 0;
  var obstacles = {};
  document.addEventListener("keydown", function (event) {
    switch (event.code) {
      case 'Enter':
        startGame();
        break;

      default:
        return;
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
    updateObstacles();
    drawObstacles(); // write algorithm to only pass in platforms & obstacles in current vp

    char.update(Object.values(platforms), Object.values(obstacles));
    char.drawChar(ctx, frames);

    if (frames >= 60) {
      frames = 0;
    } else {
      frames++;
    }

    requestAnimationFrame(gameLoop);
  } // platform = [posX, posY, width]


  var platforms = {
    1: [200, 4910, 100],
    2: [350, 4870, 100],
    3: [500, 4830, 100],
    4: [650, 4790, 100],
    5: [800, 4750, 100],
    6: [700, 4710, 50],
    7: [600, 4670, 50],
    8: [500, 4630, 50],
    9: [400, 4590, 50],
    10: [300, 4550, 50],
    11: [200, 4500, 50],
    12: [100, 4450, 50],
    13: [200, 4400, 50],
    14: [100, 4350, 50],
    15: [200, 4300, 50],
    16: [100, 4250, 50]
  };

  function drawPlatforms() {
    Object.values(platforms).forEach(function (platform, i) {
      var p = _construct(_scripts_platform__WEBPACK_IMPORTED_MODULE_4__.default, _toConsumableArray(platform).concat([i]));

      p.drawPlatform(ctx);
    });
  }

  ; // obstacle = [posX, posY, radius, orientation, travelLength, color, speed]

  var newObstacles = {
    1: [800, 4740, 5, "horizontal", 100, "blue", .1],
    2: [225, 4250, 10, "vertical", 300, "red", 0.5],
    3: [500, 4400, 20, "horizontal", 300, "green", 1.0]
  };
  createObstacles();

  function createObstacles() {
    Object.values(newObstacles).forEach(function (obstacle, i) {
      obstacles[i] = _construct(_scripts_obstacle__WEBPACK_IMPORTED_MODULE_5__.default, _toConsumableArray(obstacle));
      ;
    });
  }

  ;

  function updateObstacles() {
    Object.values(obstacles).forEach(function (obstacle) {
      obstacle.update();
    });
  }

  ;

  function drawObstacles() {
    Object.values(obstacles).forEach(function (obstacle) {
      obstacle.drawObstacle(ctx);
    });
  }

  ;
});
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qdW1wcXVlc3QvLi9zcmMvc2NyaXB0cy9iYWNrZ3JvdW5kLmpzIiwid2VicGFjazovL2p1bXBxdWVzdC8uL3NyYy9zY3JpcHRzL2NoYXJhY3Rlci5qcyIsIndlYnBhY2s6Ly9qdW1wcXVlc3QvLi9zcmMvc2NyaXB0cy9jb250cm9sbGVyLmpzIiwid2VicGFjazovL2p1bXBxdWVzdC8uL3NyYy9zY3JpcHRzL29ic3RhY2xlLmpzIiwid2VicGFjazovL2p1bXBxdWVzdC8uL3NyYy9zY3JpcHRzL3BsYXRmb3JtLmpzIiwid2VicGFjazovL2p1bXBxdWVzdC8uL3NyYy9zY3JpcHRzL3V0aWwuanMiLCJ3ZWJwYWNrOi8vanVtcHF1ZXN0Ly4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIiwid2VicGFjazovL2p1bXBxdWVzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qdW1wcXVlc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2p1bXBxdWVzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2p1bXBxdWVzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2p1bXBxdWVzdC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJCYWNrZ3JvdW5kIiwiZ2FtZVdpZHRoIiwiZ2FtZUhlaWdodCIsIndpZHRoIiwiaGVpZ2h0IiwiY3R4IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJmaWxsIiwiZHJhd0JhY2tncm91bmQiLCJDaGFyYWN0ZXIiLCJkaXJlY3Rpb24iLCJtb3ZlU3BlZWQiLCJqdW1wSGVpZ2h0IiwiY3JvdWNoaW5nIiwianVtcGluZyIsImZhbGxpbmciLCJpc0NvbGxpZGluZyIsInBvc2l0aW9uIiwieCIsInkiLCJ2ZWxvY2l0eSIsImNvbnN0YW50cyIsImdyYXZpdHkiLCJmcmljdGlvbiIsImtleXMiLCJmcmFtZXMiLCJkcmF3SW1hZ2UiLCJmaW5uTGVmdCIsIm1vdmluZyIsImZpbm5SaWdodCIsInBsYXRmb3JtcyIsIm9ic3RhY2xlcyIsImkiLCJsZW5ndGgiLCJwbGF0Zm9ybSIsIm9uUGxhdGZvcm0iLCJvYnN0YWNsZSIsImNvbGxpc2lvbkRldGVjdGlvbiIsIm9yaWVudGF0aW9uIiwiY2hhclBvcyIsIm8iLCJyIiwicmFkaXVzIiwiYyIsInciLCJoIiwiZGlzdFgiLCJNYXRoIiwiYWJzIiwiZGlzdFkiLCJkeCIsImR5IiwicG93IiwiQ29udHJvbGxlciIsImNoYXIiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImNvZGUiLCJ1cGRhdGVLZXlzIiwiY3JvdWNoIiwiY29sbGlkaW5nIiwianVtcCIsInN0b3AiLCJ1bmNyb3VjaCIsIk9ic3RhY2xlIiwicG9zWCIsInBvc1kiLCJ0cmF2ZWxMZW5ndGgiLCJjb2xvciIsInNwZWVkIiwiaW5pdFBvcyIsInRyYXZlbExlbiIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImFyYyIsIlBJIiwic3Ryb2tlIiwiUGxhdGZvcm0iLCJpbmRleCIsImZvbnQiLCJmaWxsVGV4dCIsIkltYWdlIiwic3JjIiwiY29uc29sZSIsImxvZyIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwiZ2V0Q29udGV4dCIsIkdBTUVfV0lEVEgiLCJHQU1FX0hFSUdIVCIsImJnIiwic3RhcnRHYW1lIiwiZ2FtZUxvb3AiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJkcmF3UGxhdGZvcm1zIiwidXBkYXRlT2JzdGFjbGVzIiwiZHJhd09ic3RhY2xlcyIsInVwZGF0ZSIsIk9iamVjdCIsInZhbHVlcyIsImRyYXdDaGFyIiwiZm9yRWFjaCIsInAiLCJkcmF3UGxhdGZvcm0iLCJuZXdPYnN0YWNsZXMiLCJjcmVhdGVPYnN0YWNsZXMiLCJkcmF3T2JzdGFjbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQU1BLFU7QUFDSixzQkFBWUMsU0FBWixFQUF1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R0FBMkI7QUFDekJQLFVBQU0sQ0FBQ0MsTUFBUCxDQUFjSyxZQUFkLEVBQTRCSCxPQUE1QixDQUFvQyxVQUFDbEUsUUFBRCxFQUFXSixDQUFYLEVBQWlCO0FBQ25ERCxlQUFTLENBQUNDLENBQUQsQ0FBVCxjQUFtQmlDLHNEQUFuQixxQkFBK0I3QixRQUEvQjtBQUF5QztBQUMxQyxLQUZEO0FBR0Q7O0FBQUE7O0FBRUQsV0FBUzRELGVBQVQsR0FBMkI7QUFDekJHLFVBQU0sQ0FBQ0MsTUFBUCxDQUFjckUsU0FBZCxFQUF5QnVFLE9BQXpCLENBQWlDLFVBQUFsRSxRQUFRLEVBQUk7QUFDM0NBLGNBQVEsQ0FBQzhELE1BQVQ7QUFDRCxLQUZEO0FBR0Q7O0FBQUE7O0FBRUQsV0FBU0QsYUFBVCxHQUF5QjtBQUN2QkUsVUFBTSxDQUFDQyxNQUFQLENBQWNyRSxTQUFkLEVBQXlCdUUsT0FBekIsQ0FBaUMsVUFBQWxFLFFBQVEsRUFBSTtBQUMzQ0EsY0FBUSxDQUFDdUUsWUFBVCxDQUFzQnZHLEdBQXRCO0FBQ0QsS0FGRDtBQUdEOztBQUFBO0FBRUYsQ0FwR0QsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQmFja2dyb3VuZCB7XG4gIGNvbnN0cnVjdG9yKGdhbWVXaWR0aCwgZ2FtZUhlaWdodCkge1xuICAgIHRoaXMud2lkdGggPSBnYW1lV2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBnYW1lSGVpZ2h0O1xuICB9XG5cbiAgZHJhd0JhY2tncm91bmQoY3R4KSB7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiZ3JleVwiO1xuICAgIGN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCAtIDIwKTtcbiAgICBjdHguZmlsbCgpO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcImxpZ2h0Ymx1ZVwiO1xuICAgIGN0eC5maWxsUmVjdCgwLCB0aGlzLmhlaWdodCAtIDIwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgY3R4LmZpbGwoKTtcbiAgfVxuXG4gIGFuaW1hdGUoY3R4KSB7XG4gICAgdGhpcy5kcmF3QmFja2dyb3VuZChjdHgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhY2tncm91bmQ7IiwiaW1wb3J0IHsgZmlublJpZ2h0LCBmaW5uTGVmdCB9IGZyb20gJy4vdXRpbCc7XG5cbmNsYXNzIENoYXJhY3RlciB7XG4gIGNvbnN0cnVjdG9yKGdhbWVXaWR0aCwgZ2FtZUhlaWdodCkge1xuICAgIHRoaXMuZ2FtZVdpZHRoID0gZ2FtZVdpZHRoO1xuICAgIHRoaXMuZ2FtZUhlaWdodCA9IGdhbWVIZWlnaHQ7XG4gICAgdGhpcy53aWR0aCA9IDY0O1xuICAgIHRoaXMuaGVpZ2h0ID0gNDA7XG4gICAgdGhpcy5kaXJlY3Rpb24gPSBcInJpZ2h0XCI7XG4gICAgdGhpcy5tb3ZlU3BlZWQgPSAuNzU7XG4gICAgdGhpcy5qdW1wSGVpZ2h0ID0gLTEwO1xuICAgIHRoaXMuY3JvdWNoaW5nID0gZmFsc2U7XG4gICAgdGhpcy5qdW1waW5nID0gZmFsc2U7XG4gICAgdGhpcy5mYWxsaW5nID0gZmFsc2U7XG4gICAgdGhpcy5pc0NvbGxpZGluZyA9IHRydWU7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgIHg6IDEwMCxcbiAgICAgIHk6IHRoaXMuZ2FtZUhlaWdodCAtIHRoaXMuaGVpZ2h0IC0gMjAsXG4gICAgfTtcbiAgICB0aGlzLnZlbG9jaXR5ID0ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDAsXG4gICAgfTtcbiAgICB0aGlzLmNvbnN0YW50cyA9IHtcbiAgICAgIGdyYXZpdHk6IDAuMTUsXG4gICAgICBmcmljdGlvbjogMC45LFxuICAgIH07XG4gICAgdGhpcy5rZXlzID0ge307XG4gIH1cblxuICBkcmF3Q2hhcihjdHgsIGZyYW1lcykge1xuICAgIC8vIHRlc3RpbmcgY2hhcmFjdGVyIGJvdW5kYXJpZXNcbiAgICAvLyBjdHguc3Ryb2tlU3R5bGUgPSBcImdyZWVuXCI7XG4gICAgLy8gY3R4Lm1vdmVUbyh0aGlzLnBvc2l0aW9uLngrMjAsIHRoaXMucG9zaXRpb24ueSk7XG4gICAgLy8gY3R4LmxpbmVUbyh0aGlzLnBvc2l0aW9uLngrMjAsIDApO1xuICAgIC8vIGN0eC5tb3ZlVG8odGhpcy5wb3NpdGlvbi54K3RoaXMud2lkdGgtMzAsIHRoaXMucG9zaXRpb24ueSk7XG4gICAgLy8gY3R4LmxpbmVUbyh0aGlzLnBvc2l0aW9uLngrdGhpcy53aWR0aC0zMCwgMCk7XG4gICAgLy8gY3R4LnN0cm9rZSgpO1xuXG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uID09ICdsZWZ0Jykge1xuICAgICAgaWYgKHRoaXMuanVtcGluZyB8fCB0aGlzLmZhbGxpbmcpIHsgXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoZmlubkxlZnQsIDQ0OCwgMCwgMzIsIDIwLCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmlzQ29sbGlkaW5nKSB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoZmlubkxlZnQsIDQxNiwgMCwgMzIsIDIwLCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLm1vdmluZykge1xuICAgICAgICBpZiAoZnJhbWVzIDwgMjApIHtcbiAgICAgICAgICBjdHguZHJhd0ltYWdlKGZpbm5MZWZ0LCA1NDQsIDAsIDMyLCAyMCwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgfSBlbHNlIGlmIChmcmFtZXMgPiAyMCAmJiBmcmFtZXMgPCA0MCkgeyBcbiAgICAgICAgICBjdHguZHJhd0ltYWdlKGZpbm5MZWZ0LCA1MTIsIDAsIDMyLCAyMCwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjdHguZHJhd0ltYWdlKGZpbm5MZWZ0LCA0ODAsIDAsIDMyLCAyMCwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChmcmFtZXMgPCA0MCkge1xuICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoZmlubkxlZnQsIDg2NCwgMCwgMzIsIDIwLCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoZmlubkxlZnQsIDgwMCwgMCwgMzIsIDIwLCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB9O1xuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZGlyZWN0aW9uID09ICdyaWdodCcpIHtcbiAgICAgIGlmICh0aGlzLmp1bXBpbmcgfHwgdGhpcy5mYWxsaW5nKSB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoZmlublJpZ2h0LCA0ODAsIDAsIDMyLCAyMCwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5tb3ZpbmcpIHtcbiAgICAgICAgaWYgKGZyYW1lcyA8IDIwKSB7XG4gICAgICAgICAgY3R4LmRyYXdJbWFnZShmaW5uUmlnaHQsIDMyMCwgMCwgMzIsIDIwLCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB9IGVsc2UgaWYgKGZyYW1lcyA+IDIwICYmIGZyYW1lcyA8IDQwKSB7IFxuICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoZmlublJpZ2h0LCAzODQsIDAsIDMyLCAyMCwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjdHguZHJhd0ltYWdlKGZpbm5SaWdodCwgNDE2LCAwLCAzMiwgMjAsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZnJhbWVzIDwgNDApIHtcbiAgICAgICAgICBjdHguZHJhd0ltYWdlKGZpbm5SaWdodCwgMCwgMCwgMzIsIDIwLCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoZmlublJpZ2h0LCA2NCwgMCwgMzIsIDIwLCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlS2V5cyhrZXlzKSB7XG4gICAgdGhpcy5rZXlzID0ga2V5cztcbiAgfVxuXG4gIHN0b3AoKSB7XG4gICAgdGhpcy52ZWxvY2l0eS54ID0gMDtcbiAgICB0aGlzLnZlbG9jaXR5LnkgPSAwO1xuICB9XG5cbiAganVtcCgpIHtcbiAgICBpZiAodGhpcy5qdW1waW5nKSB7XG4gICAgICB0aGlzLnZlbG9jaXR5LnkgPSB0aGlzLmp1bXBIZWlnaHRcbiAgICB9XG4gIH1cblxuICBjcm91Y2goKSB7XG4gICAgdGhpcy5oZWlnaHQgPSAyMDtcbiAgfVxuXG4gIHVuY3JvdWNoKCkge1xuICAgIHRoaXMuaGVpZ2h0ID0gNDA7XG4gICAgdGhpcy52ZWxvY2l0eS55ID0gLTU7XG4gIH1cblxuICB1cGRhdGUocGxhdGZvcm1zLCBvYnN0YWNsZXMpIHtcbiAgICAvLyBjaGVjayBjdXJyZW50IGtleSBwcmVzc2VzXG4gICAgaWYgKHRoaXMua2V5c1snQXJyb3dMZWZ0J10pIHtcbiAgICAgIHRoaXMudmVsb2NpdHkueCA9IC10aGlzLm1vdmVTcGVlZDtcbiAgICB9IGVsc2UgaWYgKHRoaXMua2V5c1snQXJyb3dSaWdodCddKSB7XG4gICAgICB0aGlzLnZlbG9jaXR5LnggPSB0aGlzLm1vdmVTcGVlZDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tb3ZpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBjaGFyIG1vdmVtZW50c1xuICAgIHRoaXMucG9zaXRpb24ueSArPSB0aGlzLnZlbG9jaXR5Lnk7XG4gICAgdGhpcy5wb3NpdGlvbi54ICs9IHRoaXMudmVsb2NpdHkueDtcbiAgICB0aGlzLnZlbG9jaXR5LnkgKz0gdGhpcy5jb25zdGFudHMuZ3Jhdml0eTtcbiAgICB0aGlzLnZlbG9jaXR5LnggKj0gdGhpcy5jb25zdGFudHMuZnJpY3Rpb247XG4gICAgdGhpcy52ZWxvY2l0eS55ICo9IHRoaXMuY29uc3RhbnRzLmZyaWN0aW9uO1xuXG4gICAgLy8gaWYgY2hhciBpcyBnb2luZyBvZmYgc2NyZWVuLCBzdG9wIGF0IGVkZ2Ugb2Ygc2NyZWVuXG4gICAgaWYgKHRoaXMucG9zaXRpb24ueCA8PSAwKSB7XG4gICAgICB0aGlzLnBvc2l0aW9uLnggPSAwO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wb3NpdGlvbi54ID49IHRoaXMuZ2FtZVdpZHRoIC0gdGhpcy53aWR0aCkge1xuICAgICAgdGhpcy5wb3NpdGlvbi54ID0gdGhpcy5nYW1lV2lkdGggLSB0aGlzLndpZHRoO1xuICAgIH1cblxuICAgIC8vICoqV3JpdGUgY29kZSB0byBmaWx0ZXIgb3V0IHBsYXRmb3JtcyBOT1QgaW4gY3VycmVudCB2aWV3IGZyYW1lKipcbiAgICAvLyBjaGVjayBpZiBjaGFyIGlzIHN0YW5kaW5nIG9uIGFueSBwbGF0Zm9ybVxuICAgIC8vIGVsc2UgY2hlY2sgaWYgY2hhciBpcyBmYWxsaW5nIGJlbG93IGZsb29yIGxpbmVcbiAgICAvLyBlbHNlIGNoYXIgaXMgY3VycmVudGx5IGZhbGxpbmdcbiAgICBmb3IgKGxldCBpPTA7IGk8cGxhdGZvcm1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgcGxhdGZvcm0gPSBwbGF0Zm9ybXNbaV07XG4gICAgICBpZiAodGhpcy5vblBsYXRmb3JtKHRoaXMucG9zaXRpb24sIHBsYXRmb3JtKSkge1xuICAgICAgICB0aGlzLmZhbGxpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5qdW1waW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueSA9IHBsYXRmb3JtWzFdLXRoaXMuaGVpZ2h0O1xuICAgICAgICB0aGlzLnZlbG9jaXR5LnkgPSAwO1xuICAgICAgICBicmVhaztcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5wb3NpdGlvbi55ID49IHRoaXMuZ2FtZUhlaWdodC10aGlzLmhlaWdodC0yMCkge1xuICAgICAgICB0aGlzLmp1bXBpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5mYWxsaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueSA9IHRoaXMuZ2FtZUhlaWdodCAtIHRoaXMuaGVpZ2h0IC0gMjA7XG4gICAgICAgIHRoaXMudmVsb2NpdHkueSA9IDA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5mYWxsaW5nID0gdHJ1ZTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gKipXcml0ZSBjb2RlIHRvIGZpbHRlciBvdXQgb2JzdGFjbGVzIE5PVCBpbiBjdXJyZW50IHZpZXcgZnJhbWUqKlxuICAgIGZvciAobGV0IGk9MDsgaTxvYnN0YWNsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBvYnN0YWNsZSA9IG9ic3RhY2xlc1tpXTtcbiAgICAgIGlmICh0aGlzLmNvbGxpc2lvbkRldGVjdGlvbihvYnN0YWNsZSkpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2NvbGxpc2lvbiEnKTtcbiAgICAgICAgdGhpcy5pc0NvbGxpZGluZyA9IHRydWU7XG4gICAgICAgIGlmIChvYnN0YWNsZS5vcmllbnRhdGlvbiA9PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09ICdsZWZ0Jykge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ICs9IDEwO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggLT0gMTA7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChvYnN0YWNsZS5kaXJlY3Rpb24gPSAnUkQnKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggLT0gMTA7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCArPSAxMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmlzQ29sbGlkaW5nID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gIH07XG5cbiAgb25QbGF0Zm9ybShjaGFyUG9zLCBwbGF0Zm9ybSkge1xuICAgIC8vIGNoYXJQb3MgPSB7XG4gICAgLy8gICB4OiBjaGFyUG9zWCxcbiAgICAvLyAgIHk6IGNoYXJQb3NZLFxuICAgIC8vIH1cbiAgICAvLyBwbGF0Zm9ybSA9IFtwb3NYLCBwb3NZLCB3aWR0aF1cbiAgICBpZiAodGhpcy5jcm91Y2hpbmcpIHtcbiAgICAgIGlmICgoKGNoYXJQb3MueCArIHRoaXMud2lkdGggLTE1KSA+PSBwbGF0Zm9ybVswXSkgJiZcbiAgICAgICgoY2hhclBvcy54KzE1KSA8PSAocGxhdGZvcm1bMF0rcGxhdGZvcm1bMl0pKSAmJlxuICAgICAgKChjaGFyUG9zLnkgKyAyMCkgPD0gcGxhdGZvcm1bMV0pICYmXG4gICAgICAoKGNoYXJQb3MueSArIDIwKSA+PSBwbGF0Zm9ybVsxXS0yKSl7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICgoKGNoYXJQb3MueCArIHRoaXMud2lkdGggLTE1KSA+PSBwbGF0Zm9ybVswXSkgJiZcbiAgICAgICgoY2hhclBvcy54KzE1KSA8PSAocGxhdGZvcm1bMF0rcGxhdGZvcm1bMl0pKSAmJlxuICAgICAgKChjaGFyUG9zLnkgKyA0MCkgPD0gcGxhdGZvcm1bMV0pICYmXG4gICAgICAoKGNoYXJQb3MueSArIDQwKSA+PSBwbGF0Zm9ybVsxXS0yKSl7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH07XG4gICAgfTtcbiAgfVxuXG4gIC8vIHJldHVybiB0cnVlIGlmIGFuIG9ic3RhY2xlIGNvbGxpZGVzIHdpdGggdXNlclxuICBjb2xsaXNpb25EZXRlY3Rpb24ob2JzdGFjbGUpIHtcbiAgICBsZXQgbyA9IHtcbiAgICAgIHg6IG9ic3RhY2xlLnBvc2l0aW9uLngsXG4gICAgICB5OiBvYnN0YWNsZS5wb3NpdGlvbi55LFxuICAgICAgcjogb2JzdGFjbGUucmFkaXVzXG4gICAgfTtcbiAgICBsZXQgYyA9IHtcbiAgICAgIHg6IHRoaXMucG9zaXRpb24ueCArIDIwLFxuICAgICAgeTogdGhpcy5wb3NpdGlvbi55LFxuICAgICAgdzogdGhpcy53aWR0aC0zMCxcbiAgICAgIGg6IHRoaXMuaGVpZ2h0XG4gICAgfVxuXG4gICAgLy8gZmluZCBob3Jpei92ZXJ0IGRpc3RhbmNlIGIvdyBjZW50ZXIgb2Ygb2JzdGFjbGUgJiBjaGFyYWN0ZXJcbiAgICBsZXQgZGlzdFggPSBNYXRoLmFicyhvLnggLSBjLnggLSBjLncvMik7XG4gICAgbGV0IGRpc3RZID0gTWF0aC5hYnMoby55IC0gYy55IC0gYy5oLzIpO1xuXG4gICAgLy8gcmV0dXJuIGZhbHNlIGlmIGRpc3QgaXMgZ3JlYXRlciB0aGFuIG1pbiBkaXN0IGIvdyBlZGdlcyAoeCBvciB5KVxuICAgIGlmICgoZGlzdFggPiAoYy53LzIgKyBvLnIpKSB8fCAoZGlzdFkgPiAoYy5oLzIgKyBvLnIpKSkge3JldHVybiBmYWxzZX07XG5cbiAgICAvLyByZXR1cm4gdHJ1ZSBpZiBkaXN0IGlzIDw9IGNoYXIgd2lkdGgvMlxuICAgIGlmICgoZGlzdFggPD0gKGMudy8yKSkgJiYgKGRpc3RZIDw9IChjLmgvMikpKSB7cmV0dXJuIHRydWV9O1xuXG4gICAgLy8gZHggJiBkeSA9IGRpc3QgYi93IG9ic3RhY2xlIGNlbnRlciAmIGNoYXIgZWRnZSAoeCAmIHkpXG4gICAgbGV0IGR4ID0gZGlzdFggLSBjLncgLyAyO1xuICAgIGxldCBkeSA9IGRpc3RZIC0gYy5oIC8gMjtcblxuICAgIC8vIHVzZSBweXRoYWdvcmVhbiB0aGVvcmVtIHRvIHNlZSBpZiByYWRpdXNeMiAgXG4gICAgLy8gaXMgZ3JlYXRlciB0aGFuIGh5cG90ZW51c2Ugb2YgZHheMiArIGR5XjIgXG4gICAgLy8gaWYgZ3JlYXRlciwgb2JqZWN0IGFuZCBjaGFyIGFyZSBjb2xsaWRpbmcgKHRydWUpXG4gICAgcmV0dXJuIChNYXRoLnBvdyhkeCwyKSArIE1hdGgucG93KGR5LDIpIDw9IE1hdGgucG93KG8uciwyKSk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGFyYWN0ZXI7IiwiY2xhc3MgQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKGNoYXIpIHtcbiAgICB0aGlzLmtleXMgPSB7fTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICAgIHN3aXRjaCAoZXZlbnQuY29kZSkge1xuICAgICAgICBjYXNlICdBcnJvd0xlZnQnOlxuICAgICAgICAgIHRoaXMua2V5c1tldmVudC5jb2RlXSA9IHRydWVcbiAgICAgICAgICBjaGFyLmRpcmVjdGlvbiA9IFwibGVmdFwiO1xuICAgICAgICAgIGNoYXIubW92aW5nID0gdHJ1ZTtcbiAgICAgICAgICBjaGFyLmtleXMgPSB0aGlzLmtleXM7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICAgIHRoaXMua2V5c1tldmVudC5jb2RlXSA9IHRydWVcbiAgICAgICAgICBjaGFyLmRpcmVjdGlvbiA9IFwicmlnaHRcIjtcbiAgICAgICAgICBjaGFyLm1vdmluZyA9IHRydWU7XG4gICAgICAgICAgY2hhci51cGRhdGVLZXlzKHRoaXMua2V5cyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0Fycm93RG93bic6XG4gICAgICAgICAgLy8gdGhpcy5rZXlzW2V2ZW50LmNvZGVdID0gdHJ1ZVxuICAgICAgICAgIGNoYXIuY3JvdWNoaW5nID0gdHJ1ZTtcbiAgICAgICAgICBjaGFyLmNyb3VjaCgpOyAgIFxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdTcGFjZSc6XG4gICAgICAgICAgLy8gdGhpcy5rZXlzW2V2ZW50LmNvZGVdID0gdHJ1ZVxuICAgICAgICAgIGlmICghY2hhci5qdW1waW5nICYmICFjaGFyLmZhbGxpbmcgJiYgIWNoYXIuY29sbGlkaW5nKSB7XG4gICAgICAgICAgICBjaGFyLmp1bXBpbmcgPSB0cnVlO1xuICAgICAgICAgICAgY2hhci5qdW1wKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQpID0+IHtcbiAgICAgIHN3aXRjaCAoZXZlbnQuY29kZSkge1xuICAgICAgICBjYXNlICdBcnJvd0xlZnQnOlxuICAgICAgICAgIHRoaXMua2V5c1tldmVudC5jb2RlXSA9IGZhbHNlO1xuICAgICAgICAgIGNoYXIua2V5cyA9IHRoaXMua2V5cztcbiAgICAgICAgICBjaGFyLnN0b3AoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XG4gICAgICAgICAgdGhpcy5rZXlzW2V2ZW50LmNvZGVdID0gZmFsc2U7XG4gICAgICAgICAgY2hhci5rZXlzID0gdGhpcy5rZXlzO1xuICAgICAgICAgIGNoYXIuc3RvcCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdBcnJvd0Rvd24nOlxuICAgICAgICAgIC8vIHRoaXMua2V5c1tldmVudC5jb2RlXSA9IGZhbHNlO1xuICAgICAgICAgIGNoYXIuY3JvdWNoaW5nID0gZmFsc2U7XG4gICAgICAgICAgY2hhci51bmNyb3VjaCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdTcGFjZSc6XG4gICAgICAgICAgLy8gdGhpcy5rZXlzW2V2ZW50LmNvZGVdID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250cm9sbGVyOyIsImNsYXNzIE9ic3RhY2xlIHtcbiAgY29uc3RydWN0b3IocG9zWCwgcG9zWSwgcmFkaXVzLCBvcmllbnRhdGlvbiwgdHJhdmVsTGVuZ3RoLCBjb2xvciwgc3BlZWQpIHtcbiAgICB0aGlzLmluaXRQb3MgPSB7XG4gICAgICB4OiBwb3NYLFxuICAgICAgeTogcG9zWVxuICAgIH07XG4gICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgIHg6IHBvc1gsXG4gICAgICB5OiBwb3NZXG4gICAgfTtcbiAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcbiAgICB0aGlzLm9yaWVudGF0aW9uID0gb3JpZW50YXRpb247XG4gICAgdGhpcy50cmF2ZWxMZW4gPSB0cmF2ZWxMZW5ndGhcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xuICAgIHRoaXMuZGlyZWN0aW9uID0gXCJSRFwiOyAvLyBMVSA9IGxlZnQvdXAsIFJEID0gcmlnaHQvZG93biAoZGVwLiBvbiBvcmllbnRhdGlvbilcbiAgfVxuXG4gIGRyYXdPYnN0YWNsZShjdHgpIHtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgY3R4LmFyYyh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy5yYWRpdXMsIDAsIE1hdGguUEkgKiAyLCB0cnVlKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgY3R4LmZpbGwoKTtcbiAgfSBcblxuICB1cGRhdGUoKSB7XG4gICAgLy8gc2V0IGRpcmVjdGlvbiBvYnN0YWNsZSBzaG91bGQgbW92ZSBiYXNlZCBvbiBjdXJyZW50IHBvc2l0aW9uIChSRC9MVSlcbiAgICBpZiAodGhpcy5vcmllbnRhdGlvbiA9PSBcImhvcml6b250YWxcIikge1xuICAgICAgaWYgKHRoaXMucG9zaXRpb24ueCA8PSB0aGlzLmluaXRQb3MueCkge1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IFwiUkRcIlxuICAgICAgfSBlbHNlIGlmICh0aGlzLnBvc2l0aW9uLnggPj0gdGhpcy5pbml0UG9zLnggKyB0aGlzLnRyYXZlbExlbikge1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IFwiTFVcIlxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSB0aGlzLmRpcmVjdGlvbjtcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmICh0aGlzLm9yaWVudGF0aW9uID09IFwidmVydGljYWxcIikge1xuICAgICAgaWYgKHRoaXMucG9zaXRpb24ueSA8PSB0aGlzLmluaXRQb3MueSkge1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IFwiUkRcIlxuICAgICAgfSBlbHNlIGlmICh0aGlzLnBvc2l0aW9uLnkgPj0gdGhpcy5pbml0UG9zLnkgKyB0aGlzLnRyYXZlbExlbikge1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IFwiTFVcIlxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSB0aGlzLmRpcmVjdGlvbjtcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gXCJzdGF0aWNcIikge1xuICAgICAgXG4gICAgfTtcbiAgICBcbiAgICAvLyBtb3ZlIG9ic3RhY2xlIGFjY29yZGluZyB0byBpdHMgZGlyZWN0aW9uXG4gICAgaWYgKHRoaXMub3JpZW50YXRpb24gPT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PSBcIlJEXCIpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ICs9IHRoaXMuc3BlZWRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueCAtPSB0aGlzLnNwZWVkXG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAodGhpcy5vcmllbnRhdGlvbiA9PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PSBcIlJEXCIpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55ICs9IHRoaXMuc3BlZWRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueSAtPSB0aGlzLnNwZWVkXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IE9ic3RhY2xlO1xuXG4iLCJjbGFzcyBQbGF0Zm9ybSB7XG4gIGNvbnN0cnVjdG9yKHBvc1gsIHBvc1ksIHdpZHRoLCBpKSB7XG4gICAgdGhpcy5oZWlnaHQgPSAyMDtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgIHg6IHBvc1gsXG4gICAgICB5OiBwb3NZXG4gICAgfVxuICAgIHRoaXMuaW5kZXggPSBpO1xuICB9XG5cbiAgZHJhd1BsYXRmb3JtKGN0eCkge1xuICAgIGN0eC5maWxsU3R5bGUgPSBcInBpbmtcIjtcbiAgICBjdHguZmlsbFJlY3QodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICBjdHguZmlsbCgpO1xuXG4gICAgLy8gcHJpbnRpbmcgcGxhdGZvcm0gaW5kZXgva2V5ICYgY29vcmRpbmF0ZXNcbiAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgIGN0eC5mb250ID1cIjE2cHggc2VyaWZcIjtcbiAgICBjdHguZmlsbFRleHQoYCR7dGhpcy5pbmRleH06ICR7dGhpcy5wb3NpdGlvbi54fSwgJHt0aGlzLnBvc2l0aW9uLnl9YCwgXG4gICAgICB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSszNSk7XG5cbiAgICAvLyB0ZXN0aW5nIHBsYXRmb3JtIGJvdW5kYXJpZXNcbiAgICAvLyBjdHguYmVnaW5QYXRoKCk7XG4gICAgLy8gY3R4LnN0cm9rZVN0eWxlID0gXCJibHVlXCI7XG4gICAgLy8gY3R4Lm1vdmVUbyh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSk7XG4gICAgLy8gY3R4LmxpbmVUbyh0aGlzLnBvc2l0aW9uLngsIDApO1xuICAgIC8vIGN0eC5tb3ZlVG8odGhpcy5wb3NpdGlvbi54K3RoaXMud2lkdGgsIHRoaXMucG9zaXRpb24ueSk7XG4gICAgLy8gY3R4LmxpbmVUbyh0aGlzLnBvc2l0aW9uLngrdGhpcy53aWR0aCwgMCk7XG4gICAgLy8gY3R4LnN0cm9rZSgpO1xuICB9IFxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXRmb3JtO1xuXG4iLCJleHBvcnQgY29uc3QgZmlublJpZ2h0ID0gbmV3IEltYWdlKCk7XG5maW5uUmlnaHQuc3JjID0gJy4vZGlzdC9pbWFnZXMvRmlublNwcml0ZS1yaWdodC5wbmcnO1xuZXhwb3J0IGNvbnN0IGZpbm5MZWZ0ID0gbmV3IEltYWdlKCk7XG5maW5uTGVmdC5zcmMgPSAnLi9kaXN0L2ltYWdlcy9GaW5uU3ByaXRlLWxlZnQucG5nJzsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG4vLyBpbXBvcnQgSnVtcFF1ZXN0IGZyb20gXCIuL3NjcmlwdHMvZ2FtZVwiO1xuaW1wb3J0IENoYXJhY3RlciBmcm9tIFwiLi9zY3JpcHRzL2NoYXJhY3RlclwiO1xuaW1wb3J0IENvbnRyb2xsZXIgZnJvbSBcIi4vc2NyaXB0cy9jb250cm9sbGVyXCI7XG5pbXBvcnQgQmFja2dyb3VuZCBmcm9tIFwiLi9zY3JpcHRzL2JhY2tncm91bmRcIjtcbmltcG9ydCBQbGF0Zm9ybSBmcm9tIFwiLi9zY3JpcHRzL3BsYXRmb3JtXCI7XG5pbXBvcnQgT2JzdGFjbGUgZnJvbSBcIi4vc2NyaXB0cy9vYnN0YWNsZVwiO1xuY29uc29sZS5sb2coXCJ3ZWJwYWNrIGlzIHdvcmtpbmcgcHJvcGVybHlcIik7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianVtcC1xdWVzdFwiKTtcbiAgbGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gIGNvbnN0IEdBTUVfV0lEVEggPSBjdHguY2FudmFzLndpZHRoO1xuICBjb25zdCBHQU1FX0hFSUdIVCA9IGN0eC5jYW52YXMuaGVpZ2h0O1xuXG4gIGxldCBjaGFyID0gbmV3IENoYXJhY3RlcihHQU1FX1dJRFRILCBHQU1FX0hFSUdIVCk7XG4gIG5ldyBDb250cm9sbGVyKGNoYXIpXG4gIGxldCBiZyA9IG5ldyBCYWNrZ3JvdW5kKEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hUKTtcbiAgbGV0IGZyYW1lcyA9IDA7XG4gIGxldCBvYnN0YWNsZXMgPSB7fTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBldmVudCA9PiB7XG4gICAgc3dpdGNoKGV2ZW50LmNvZGUpIHtcbiAgICAgIGNhc2UgJ0VudGVyJzpcbiAgICAgICAgc3RhcnRHYW1lKCk7XG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm47XG4gICAgfVxuICB9KVxuICAgIFxuICBmdW5jdGlvbiBzdGFydEdhbWUoKSB7XG4gICAgZ2FtZUxvb3AoKTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2FtZUxvb3AoKSB7XG4gICAgLy8gY3R4LmNsZWFyUmVjdCgwLCAwLCBHQU1FX1dJRFRILCBHQU1FX0hFSUdIVCk7XG4gICAgYmcuZHJhd0JhY2tncm91bmQoY3R4KTtcbiAgICBkcmF3UGxhdGZvcm1zKCk7XG4gICAgdXBkYXRlT2JzdGFjbGVzKCk7XG4gICAgZHJhd09ic3RhY2xlcygpO1xuICAgIC8vIHdyaXRlIGFsZ29yaXRobSB0byBvbmx5IHBhc3MgaW4gcGxhdGZvcm1zICYgb2JzdGFjbGVzIGluIGN1cnJlbnQgdnBcbiAgICBjaGFyLnVwZGF0ZShPYmplY3QudmFsdWVzKHBsYXRmb3JtcyksIE9iamVjdC52YWx1ZXMob2JzdGFjbGVzKSk7XG4gICAgY2hhci5kcmF3Q2hhcihjdHgsIGZyYW1lcyk7XG5cbiAgICBpZiAoZnJhbWVzID49IDYwKSB7XG4gICAgICBmcmFtZXMgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBmcmFtZXMrKztcbiAgICB9XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xuICB9XG5cbiAgLy8gcGxhdGZvcm0gPSBbcG9zWCwgcG9zWSwgd2lkdGhdXG4gIGxldCBwbGF0Zm9ybXMgPSB7XG4gICAgMTogWzIwMCwgNDkxMCwgMTAwXSxcbiAgICAyOiBbMzUwLCA0ODcwLCAxMDBdLFxuICAgIDM6IFs1MDAsIDQ4MzAsIDEwMF0sXG4gICAgNDogWzY1MCwgNDc5MCwgMTAwXSxcbiAgICA1OiBbODAwLCA0NzUwLCAxMDBdLFxuICAgIDY6IFs3MDAsIDQ3MTAsIDUwXSxcbiAgICA3OiBbNjAwLCA0NjcwLCA1MF0sXG4gICAgODogWzUwMCwgNDYzMCwgNTBdLFxuICAgIDk6IFs0MDAsIDQ1OTAsIDUwXSxcbiAgICAxMDogWzMwMCwgNDU1MCwgNTBdLFxuICAgIDExOiBbMjAwLCA0NTAwLCA1MF0sXG4gICAgMTI6IFsxMDAsIDQ0NTAsIDUwXSxcbiAgICAxMzogWzIwMCwgNDQwMCwgNTBdLFxuICAgIDE0OiBbMTAwLCA0MzUwLCA1MF0sXG4gICAgMTU6IFsyMDAsIDQzMDAsIDUwXSxcbiAgICAxNjogWzEwMCwgNDI1MCwgNTBdLFxuICB9O1xuICBcbiAgZnVuY3Rpb24gZHJhd1BsYXRmb3JtcygpIHtcbiAgICBPYmplY3QudmFsdWVzKHBsYXRmb3JtcykuZm9yRWFjaCgocGxhdGZvcm0sIGkpID0+IHtcbiAgICAgIGxldCBwID0gbmV3IFBsYXRmb3JtKC4uLnBsYXRmb3JtLCBpKTtcbiAgICAgIHAuZHJhd1BsYXRmb3JtKGN0eCk7XG4gICAgfSlcbiAgfTtcblxuICAvLyBvYnN0YWNsZSA9IFtwb3NYLCBwb3NZLCByYWRpdXMsIG9yaWVudGF0aW9uLCB0cmF2ZWxMZW5ndGgsIGNvbG9yLCBzcGVlZF1cbiAgbGV0IG5ld09ic3RhY2xlcyA9IHtcbiAgICAxOiBbODAwLCA0NzQwLCA1LCBcImhvcml6b250YWxcIiwgMTAwLCBcImJsdWVcIiwgLjFdLFxuICAgIDI6IFsyMjUsIDQyNTAsIDEwLCBcInZlcnRpY2FsXCIsIDMwMCwgXCJyZWRcIiwgMC41XSxcbiAgICAzOiBbNTAwLCA0NDAwLCAyMCwgXCJob3Jpem9udGFsXCIsIDMwMCwgXCJncmVlblwiLCAxLjBdLFxuICB9XG5cbiAgY3JlYXRlT2JzdGFjbGVzKCk7XG4gIFxuICBmdW5jdGlvbiBjcmVhdGVPYnN0YWNsZXMoKSB7XG4gICAgT2JqZWN0LnZhbHVlcyhuZXdPYnN0YWNsZXMpLmZvckVhY2goKG9ic3RhY2xlLCBpKSA9PiB7XG4gICAgICBvYnN0YWNsZXNbaV0gPSBuZXcgT2JzdGFjbGUoLi4ub2JzdGFjbGUpOztcbiAgICB9KVxuICB9O1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZU9ic3RhY2xlcygpIHtcbiAgICBPYmplY3QudmFsdWVzKG9ic3RhY2xlcykuZm9yRWFjaChvYnN0YWNsZSA9PiB7XG4gICAgICBvYnN0YWNsZS51cGRhdGUoKTtcbiAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBkcmF3T2JzdGFjbGVzKCkge1xuICAgIE9iamVjdC52YWx1ZXMob2JzdGFjbGVzKS5mb3JFYWNoKG9ic3RhY2xlID0+IHtcbiAgICAgIG9ic3RhY2xlLmRyYXdPYnN0YWNsZShjdHgpO1xuICAgIH0pO1xuICB9O1xuXG59KSJdLCJzb3VyY2VSb290IjoiIn0=