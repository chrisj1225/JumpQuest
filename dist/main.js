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
        if (this.jumping || this.falling) {
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
      } // **Write code fo tiler out obstacles NOT in current view frame**


      for (var _i = 0; _i < obstacles.length; _i++) {
        var obstacle = obstacles[_i];

        if (this.collisionDetection(obstacle)) {
          console.log('collision!');
          break;
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
        x: this.position.x,
        y: this.position.y,
        w: this.width,
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
    1: [225, 4250, 10, "vertical", 300, "red", 0.5],
    2: [500, 4400, 20, "horizontal", 300, "green", 1.0]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qdW1wcXVlc3QvLi9zcmMvc2NyaXB0cy9iYWNrZ3JvdW5kLmpzIiwid2VicGFjazovL2p1bXBxdWVzdC8uL3NyYy9zY3JpcHRzL2NoYXJhY3Rlci5qcyIsIndlYnBhY2s6Ly9qdW1wcXVlc3QvLi9zcmMvc2NyaXB0cy9jb250cm9sbGVyLmpzIiwid2VicGFjazovL2p1bXBxdWVzdC8uL3NyYy9zY3JpcHRzL29ic3RhY2xlLmpzIiwid2VicGFjazovL2p1bXBxdWVzdC8uL3NyYy9zY3JpcHRzL3BsYXRmb3JtLmpzIiwid2VicGFjazovL2p1bXBxdWVzdC8uL3NyYy9zY3JpcHRzL3V0aWwuanMiLCJ3ZWJwYWNrOi8vanVtcHF1ZXN0Ly4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIiwid2VicGFjazovL2p1bXBxdWVzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qdW1wcXVlc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2p1bXBxdWVzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2p1bXBxdWVzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2p1bXBxdWVzdC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJCYWNrZ3JvdW5kIiwiZ2FtZVdpZHRoIiwiZ2FtZUhlaWdodCIsIndpZHRoIiwiaGVpZ2h0IiwiY3R4IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJmaWxsIiwiZHJhd0JhY2tncm91bmQiLCJDaGFyYWN0ZXIiLCJkaXJlY3Rpb24iLCJtb3ZlU3BlZWQiLCJqdW1wSGVpZ2h0IiwiY3JvdWNoaW5nIiwianVtcGluZyIsImZhbGxpbmciLCJwb3NpdGlvbiIsIngiLCJ5IiwidmVsb2NpdHkiLCJjb25zdGFudHMiLCJncmF2aXR5IiwiZnJpY3Rpb24iLCJrZXlzIiwiZnJhbWVzIiwiZHJhd0ltYWdlIiwiZmlubkxlZnQiLCJtb3ZpbmciLCJmaW5uUmlnaHQiLCJwbGF0Zm9ybXMiLCJvYnN0YWNsZXMiLCJpIiwibGVuZ3RoIiwicGxhdGZvcm0iLCJvblBsYXRmb3JtIiwib2JzdGFjbGUiLCJjb2xsaXNpb25EZXRlY3Rpb24iLCJjb25zb2xlIiwibG9nIiwiY2hhclBvcyIsIm8iLCJyIiwicmFkaXVzIiwiYyIsInciLCJoIiwiZGlzdFgiLCJNYXRoIiwiYWJzIiwiZGlzdFkiLCJkeCIsImR5IiwicG93IiwiQ29udHJvbGxlciIsImNoYXIiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImNvZGUiLCJ1cGRhdGVLZXlzIiwiY3JvdWNoIiwianVtcCIsInN0b3AiLCJ1bmNyb3VjaCIsIk9ic3RhY2xlIiwicG9zWCIsInBvc1kiLCJvcmllbnRhdGlvbiIsInRyYXZlbExlbmd0aCIsImNvbG9yIiwic3BlZWQiLCJpbml0UG9zIiwidHJhdmVsTGVuIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwiYXJjIiwiUEkiLCJzdHJva2UiLCJQbGF0Zm9ybSIsImluZGV4IiwiZm9udCIsImZpbGxUZXh0IiwiSW1hZ2UiLCJzcmMiLCJjYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsImdldENvbnRleHQiLCJHQU1FX1dJRFRIIiwiR0FNRV9IRUlHSFQiLCJiZyIsInN0YXJ0R2FtZSIsImdhbWVMb29wIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZHJhd1BsYXRmb3JtcyIsInVwZGF0ZU9ic3RhY2xlcyIsImRyYXdPYnN0YWNsZXMiLCJ1cGRhdGUiLCJPYmplY3QiLCJ2YWx1ZXMiLCJkcmF3Q2hhciIsImZvckVhY2giLCJwIiwiZHJhd1BsYXRmb3JtIiwibmV3T2JzdGFjbGVzIiwiY3JlYXRlT2JzdGFjbGVzIiwiZHJhd09ic3RhY2xlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztJQUFNQSxVO0FBQ0osc0JBQVlDLFNBQVosRUFBdUJDLFVBQXZCLEVBQW1DO0FBQUE7O0FBQ2pD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aEIsRUFBOEIsR0FBOUIsRUFBbUMsT0FBbkMsRUFBNEMsR0FBNUM7QUFGYyxHQUFuQjtBQUtBQyxpQkFBZTs7QUFFZixXQUFTQSxlQUFULEdBQTJCO0FBQ3pCUCxVQUFNLENBQUNDLE1BQVAsQ0FBY0ssWUFBZCxFQUE0QkgsT0FBNUIsQ0FBb0MsVUFBQ2pFLFFBQUQsRUFBV0osQ0FBWCxFQUFpQjtBQUNuREQsZUFBUyxDQUFDQyxDQUFELENBQVQsY0FBbUJpQyxzREFBbkIscUJBQStCN0IsUUFBL0I7QUFBeUM7QUFDMUMsS0FGRDtBQUdEOztBQUFBOztBQUVELFdBQVMyRCxlQUFULEdBQTJCO0FBQ3pCRyxVQUFNLENBQUNDLE1BQVAsQ0FBY3BFLFNBQWQsRUFBeUJzRSxPQUF6QixDQUFpQyxVQUFBakUsUUFBUSxFQUFJO0FBQzNDQSxjQUFRLENBQUM2RCxNQUFUO0FBQ0QsS0FGRDtBQUdEOztBQUFBOztBQUVELFdBQVNELGFBQVQsR0FBeUI7QUFDdkJFLFVBQU0sQ0FBQ0MsTUFBUCxDQUFjcEUsU0FBZCxFQUF5QnNFLE9BQXpCLENBQWlDLFVBQUFqRSxRQUFRLEVBQUk7QUFDM0NBLGNBQVEsQ0FBQ3NFLFlBQVQsQ0FBc0JyRyxHQUF0QjtBQUNELEtBRkQ7QUFHRDs7QUFBQTtBQUVGLENBbkdELEUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEJhY2tncm91bmQge1xuICBjb25zdHJ1Y3RvcihnYW1lV2lkdGgsIGdhbWVIZWlnaHQpIHtcbiAgICB0aGlzLndpZHRoID0gZ2FtZVdpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gZ2FtZUhlaWdodDtcbiAgfVxuXG4gIGRyYXdCYWNrZ3JvdW5kKGN0eCkge1xuICAgIGN0eC5maWxsU3R5bGUgPSBcImdyZXlcIjtcbiAgICBjdHguZmlsbFJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQgLSAyMCk7XG4gICAgY3R4LmZpbGwoKTtcbiAgICBjdHguZmlsbFN0eWxlID0gXCJsaWdodGJsdWVcIjtcbiAgICBjdHguZmlsbFJlY3QoMCwgdGhpcy5oZWlnaHQgLSAyMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIGN0eC5maWxsKCk7XG4gIH1cblxuICBhbmltYXRlKGN0eCkge1xuICAgIHRoaXMuZHJhd0JhY2tncm91bmQoY3R4KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYWNrZ3JvdW5kOyIsImltcG9ydCB7IGZpbm5SaWdodCwgZmlubkxlZnQgfSBmcm9tICcuL3V0aWwnO1xuXG5jbGFzcyBDaGFyYWN0ZXIge1xuICBjb25zdHJ1Y3RvcihnYW1lV2lkdGgsIGdhbWVIZWlnaHQpIHtcbiAgICB0aGlzLmdhbWVXaWR0aCA9IGdhbWVXaWR0aDtcbiAgICB0aGlzLmdhbWVIZWlnaHQgPSBnYW1lSGVpZ2h0O1xuICAgIHRoaXMud2lkdGggPSA2NDtcbiAgICB0aGlzLmhlaWdodCA9IDQwO1xuICAgIHRoaXMuZGlyZWN0aW9uID0gXCJyaWdodFwiO1xuICAgIHRoaXMubW92ZVNwZWVkID0gLjc1O1xuICAgIHRoaXMuanVtcEhlaWdodCA9IC0xMDtcbiAgICB0aGlzLmNyb3VjaGluZyA9IGZhbHNlO1xuICAgIHRoaXMuanVtcGluZyA9IGZhbHNlO1xuICAgIHRoaXMuZmFsbGluZyA9IGZhbHNlO1xuICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICB4OiAxMDAsXG4gICAgICB5OiB0aGlzLmdhbWVIZWlnaHQgLSB0aGlzLmhlaWdodCAtIDIwLFxuICAgIH07XG4gICAgdGhpcy52ZWxvY2l0eSA9IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwLFxuICAgIH07XG4gICAgdGhpcy5jb25zdGFudHMgPSB7XG4gICAgICBncmF2aXR5OiAwLjE1LFxuICAgICAgZnJpY3Rpb246IDAuOSxcbiAgICB9O1xuICAgIHRoaXMua2V5cyA9IHt9O1xuICB9XG5cbiAgZHJhd0NoYXIoY3R4LCBmcmFtZXMpIHtcbiAgICAvLyB0ZXN0aW5nIGNoYXJhY3RlciBib3VuZGFyaWVzXG4gICAgLy8gY3R4LnN0cm9rZVN0eWxlID0gXCJncmVlblwiO1xuICAgIC8vIGN0eC5tb3ZlVG8odGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnkpO1xuICAgIC8vIGN0eC5saW5lVG8odGhpcy5wb3NpdGlvbi54LCAwKTtcbiAgICAvLyBjdHgubW92ZVRvKHRoaXMucG9zaXRpb24ueCt0aGlzLndpZHRoLCB0aGlzLnBvc2l0aW9uLnkpO1xuICAgIC8vIGN0eC5saW5lVG8odGhpcy5wb3NpdGlvbi54K3RoaXMud2lkdGgsIDApO1xuICAgIC8vIGN0eC5zdHJva2UoKTtcblxuICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PSAnbGVmdCcpIHtcbiAgICAgIGlmICh0aGlzLmp1bXBpbmcgfHwgdGhpcy5mYWxsaW5nKSB7IFxuICAgICAgICBjdHguZHJhd0ltYWdlKGZpbm5MZWZ0LCA0NDgsIDAsIDMyLCAyMCwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5tb3ZpbmcpIHtcbiAgICAgICAgaWYgKGZyYW1lcyA8IDIwKSB7XG4gICAgICAgICAgY3R4LmRyYXdJbWFnZShmaW5uTGVmdCwgNTQ0LCAwLCAzMiwgMjAsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZnJhbWVzID4gMjAgJiYgZnJhbWVzIDwgNDApIHsgXG4gICAgICAgICAgY3R4LmRyYXdJbWFnZShmaW5uTGVmdCwgNTEyLCAwLCAzMiwgMjAsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY3R4LmRyYXdJbWFnZShmaW5uTGVmdCwgNDgwLCAwLCAzMiwgMjAsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZnJhbWVzIDwgNDApIHtcbiAgICAgICAgICBjdHguZHJhd0ltYWdlKGZpbm5MZWZ0LCA4NjQsIDAsIDMyLCAyMCwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjdHguZHJhd0ltYWdlKGZpbm5MZWZ0LCA4MDAsIDAsIDMyLCAyMCwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgfTtcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmICh0aGlzLmRpcmVjdGlvbiA9PSAncmlnaHQnKSB7XG4gICAgICBpZiAodGhpcy5qdW1waW5nIHx8IHRoaXMuZmFsbGluZykge1xuICAgICAgICBjdHguZHJhd0ltYWdlKGZpbm5SaWdodCwgNDgwLCAwLCAzMiwgMjAsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMubW92aW5nKSB7XG4gICAgICAgIGlmIChmcmFtZXMgPCAyMCkge1xuICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoZmlublJpZ2h0LCAzMjAsIDAsIDMyLCAyMCwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgfSBlbHNlIGlmIChmcmFtZXMgPiAyMCAmJiBmcmFtZXMgPCA0MCkgeyBcbiAgICAgICAgICBjdHguZHJhd0ltYWdlKGZpbm5SaWdodCwgMzg0LCAwLCAzMiwgMjAsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY3R4LmRyYXdJbWFnZShmaW5uUmlnaHQsIDQxNiwgMCwgMzIsIDIwLCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGZyYW1lcyA8IDQwKSB7XG4gICAgICAgICAgY3R4LmRyYXdJbWFnZShmaW5uUmlnaHQsIDAsIDAsIDMyLCAyMCwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjdHguZHJhd0ltYWdlKGZpbm5SaWdodCwgNjQsIDAsIDMyLCAyMCwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUtleXMoa2V5cykge1xuICAgIHRoaXMua2V5cyA9IGtleXM7XG4gIH1cblxuICBzdG9wKCkge1xuICAgIHRoaXMudmVsb2NpdHkueCA9IDA7XG4gICAgdGhpcy52ZWxvY2l0eS55ID0gMDtcbiAgfVxuXG4gIGp1bXAoKSB7XG4gICAgaWYgKHRoaXMuanVtcGluZykge1xuICAgICAgdGhpcy52ZWxvY2l0eS55ID0gdGhpcy5qdW1wSGVpZ2h0XG4gICAgfVxuICB9XG5cbiAgY3JvdWNoKCkge1xuICAgIHRoaXMuaGVpZ2h0ID0gMjA7XG4gIH1cblxuICB1bmNyb3VjaCgpIHtcbiAgICB0aGlzLmhlaWdodCA9IDQwO1xuICAgIHRoaXMudmVsb2NpdHkueSA9IC01O1xuICB9XG5cbiAgdXBkYXRlKHBsYXRmb3Jtcywgb2JzdGFjbGVzKSB7XG4gICAgLy8gY2hlY2sgY3VycmVudCBrZXkgcHJlc3Nlc1xuICAgIGlmICh0aGlzLmtleXNbJ0Fycm93TGVmdCddKSB7XG4gICAgICB0aGlzLnZlbG9jaXR5LnggPSAtdGhpcy5tb3ZlU3BlZWQ7XG4gICAgfSBlbHNlIGlmICh0aGlzLmtleXNbJ0Fycm93UmlnaHQnXSkge1xuICAgICAgdGhpcy52ZWxvY2l0eS54ID0gdGhpcy5tb3ZlU3BlZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubW92aW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gY2hhciBtb3ZlbWVudHNcbiAgICB0aGlzLnBvc2l0aW9uLnkgKz0gdGhpcy52ZWxvY2l0eS55O1xuICAgIHRoaXMucG9zaXRpb24ueCArPSB0aGlzLnZlbG9jaXR5Lng7XG4gICAgdGhpcy52ZWxvY2l0eS55ICs9IHRoaXMuY29uc3RhbnRzLmdyYXZpdHk7XG4gICAgdGhpcy52ZWxvY2l0eS54ICo9IHRoaXMuY29uc3RhbnRzLmZyaWN0aW9uO1xuICAgIHRoaXMudmVsb2NpdHkueSAqPSB0aGlzLmNvbnN0YW50cy5mcmljdGlvbjtcblxuICAgIC8vIGlmIGNoYXIgaXMgZ29pbmcgb2ZmIHNjcmVlbiwgc3RvcCBhdCBlZGdlIG9mIHNjcmVlblxuICAgIGlmICh0aGlzLnBvc2l0aW9uLnggPD0gMCkge1xuICAgICAgdGhpcy5wb3NpdGlvbi54ID0gMDtcbiAgICB9IGVsc2UgaWYgKHRoaXMucG9zaXRpb24ueCA+PSB0aGlzLmdhbWVXaWR0aCAtIHRoaXMud2lkdGgpIHtcbiAgICAgIHRoaXMucG9zaXRpb24ueCA9IHRoaXMuZ2FtZVdpZHRoIC0gdGhpcy53aWR0aDtcbiAgICB9XG5cbiAgICAvLyAqKldyaXRlIGNvZGUgdG8gZmlsdGVyIG91dCBwbGF0Zm9ybXMgTk9UIGluIGN1cnJlbnQgdmlldyBmcmFtZSoqXG4gICAgLy8gY2hlY2sgaWYgY2hhciBpcyBzdGFuZGluZyBvbiBhbnkgcGxhdGZvcm1cbiAgICAvLyBlbHNlIGNoZWNrIGlmIGNoYXIgaXMgZmFsbGluZyBiZWxvdyBmbG9vciBsaW5lXG4gICAgLy8gZWxzZSBjaGFyIGlzIGN1cnJlbnRseSBmYWxsaW5nXG4gICAgZm9yIChsZXQgaT0wOyBpPHBsYXRmb3Jtcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHBsYXRmb3JtID0gcGxhdGZvcm1zW2ldO1xuICAgICAgaWYgKHRoaXMub25QbGF0Zm9ybSh0aGlzLnBvc2l0aW9uLCBwbGF0Zm9ybSkpIHtcbiAgICAgICAgdGhpcy5mYWxsaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuanVtcGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgPSBwbGF0Zm9ybVsxXS10aGlzLmhlaWdodDtcbiAgICAgICAgdGhpcy52ZWxvY2l0eS55ID0gMDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMucG9zaXRpb24ueSA+PSB0aGlzLmdhbWVIZWlnaHQtdGhpcy5oZWlnaHQtMjApIHtcbiAgICAgICAgdGhpcy5qdW1waW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZmFsbGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgPSB0aGlzLmdhbWVIZWlnaHQgLSB0aGlzLmhlaWdodCAtIDIwO1xuICAgICAgICB0aGlzLnZlbG9jaXR5LnkgPSAwO1xuICAgICAgICBicmVhaztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZmFsbGluZyA9IHRydWU7XG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vICoqV3JpdGUgY29kZSBmbyB0aWxlciBvdXQgb2JzdGFjbGVzIE5PVCBpbiBjdXJyZW50IHZpZXcgZnJhbWUqKlxuICAgIGZvciAobGV0IGk9MDsgaTxvYnN0YWNsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBvYnN0YWNsZSA9IG9ic3RhY2xlc1tpXTtcbiAgICAgIGlmICh0aGlzLmNvbGxpc2lvbkRldGVjdGlvbihvYnN0YWNsZSkpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2NvbGxpc2lvbiEnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9IFxuICAgIH1cblxuICB9XG5cbiAgb25QbGF0Zm9ybShjaGFyUG9zLCBwbGF0Zm9ybSkge1xuICAgIC8vIGNoYXJQb3MgPSB7XG4gICAgLy8gICB4OiBjaGFyUG9zWCxcbiAgICAvLyAgIHk6IGNoYXJQb3NZLFxuICAgIC8vIH1cbiAgICAvLyBwbGF0Zm9ybSA9IFtwb3NYLCBwb3NZLCB3aWR0aF1cbiAgICBpZiAodGhpcy5jcm91Y2hpbmcpIHtcbiAgICAgIGlmICgoKGNoYXJQb3MueCArIHRoaXMud2lkdGggLTE1KSA+PSBwbGF0Zm9ybVswXSkgJiZcbiAgICAgICgoY2hhclBvcy54KzE1KSA8PSAocGxhdGZvcm1bMF0rcGxhdGZvcm1bMl0pKSAmJlxuICAgICAgKChjaGFyUG9zLnkgKyAyMCkgPD0gcGxhdGZvcm1bMV0pICYmXG4gICAgICAoKGNoYXJQb3MueSArIDIwKSA+PSBwbGF0Zm9ybVsxXS0yKSl7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICgoKGNoYXJQb3MueCArIHRoaXMud2lkdGggLTE1KSA+PSBwbGF0Zm9ybVswXSkgJiZcbiAgICAgICgoY2hhclBvcy54KzE1KSA8PSAocGxhdGZvcm1bMF0rcGxhdGZvcm1bMl0pKSAmJlxuICAgICAgKChjaGFyUG9zLnkgKyA0MCkgPD0gcGxhdGZvcm1bMV0pICYmXG4gICAgICAoKGNoYXJQb3MueSArIDQwKSA+PSBwbGF0Zm9ybVsxXS0yKSl7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH07XG4gICAgfTtcbiAgfVxuXG4gIC8vIHJldHVybiB0cnVlIGlmIGFuIG9ic3RhY2xlIGNvbGxpZGVzIHdpdGggdXNlclxuICBjb2xsaXNpb25EZXRlY3Rpb24ob2JzdGFjbGUpIHtcbiAgICBsZXQgbyA9IHtcbiAgICAgIHg6IG9ic3RhY2xlLnBvc2l0aW9uLngsXG4gICAgICB5OiBvYnN0YWNsZS5wb3NpdGlvbi55LFxuICAgICAgcjogb2JzdGFjbGUucmFkaXVzXG4gICAgfTtcbiAgICBsZXQgYyA9IHtcbiAgICAgIHg6IHRoaXMucG9zaXRpb24ueCxcbiAgICAgIHk6IHRoaXMucG9zaXRpb24ueSxcbiAgICAgIHc6IHRoaXMud2lkdGgsXG4gICAgICBoOiB0aGlzLmhlaWdodFxuICAgIH1cblxuICAgIC8vIGZpbmQgaG9yaXovdmVydCBkaXN0YW5jZSBiL3cgY2VudGVyIG9mIG9ic3RhY2xlICYgY2hhcmFjdGVyXG4gICAgbGV0IGRpc3RYID0gTWF0aC5hYnMoby54IC0gYy54IC0gYy53LzIpO1xuICAgIGxldCBkaXN0WSA9IE1hdGguYWJzKG8ueSAtIGMueSAtIGMuaC8yKTtcblxuICAgIC8vIHJldHVybiBmYWxzZSBpZiBkaXN0IGlzIGdyZWF0ZXIgdGhhbiBtaW4gZGlzdCBiL3cgZWRnZXMgKHggb3IgeSlcbiAgICBpZiAoKGRpc3RYID4gKGMudy8yICsgby5yKSkgfHwgKGRpc3RZID4gKGMuaC8yICsgby5yKSkpIHtyZXR1cm4gZmFsc2V9O1xuXG4gICAgLy8gcmV0dXJuIHRydWUgaWYgZGlzdCBpcyA8PSBjaGFyIHdpZHRoLzJcbiAgICBpZiAoKGRpc3RYIDw9IChjLncvMikpICYmIChkaXN0WSA8PSAoYy5oLzIpKSkge3JldHVybiB0cnVlfTtcblxuICAgIC8vIGR4ICYgZHkgPSBkaXN0IGIvdyBvYnN0YWNsZSBjZW50ZXIgJiBjaGFyIGVkZ2UgKHggJiB5KVxuICAgIGxldCBkeCA9IGRpc3RYIC0gYy53IC8gMjtcbiAgICBsZXQgZHkgPSBkaXN0WSAtIGMuaCAvIDI7XG5cbiAgICAvLyB1c2UgcHl0aGFnb3JlYW4gdGhlb3JlbSB0byBzZWUgaWYgcmFkaXVzXjIgIFxuICAgIC8vIGlzIGdyZWF0ZXIgdGhhbiBoeXBvdGVudXNlIG9mIGR4XjIgKyBkeV4yIFxuICAgIC8vIGlmIGdyZWF0ZXIsIG9iamVjdCBhbmQgY2hhciBhcmUgY29sbGlkaW5nICh0cnVlKVxuICAgIHJldHVybiAoTWF0aC5wb3coZHgsMikgKyBNYXRoLnBvdyhkeSwyKSA8PSBNYXRoLnBvdyhvLnIsMikpO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hhcmFjdGVyOyIsImNsYXNzIENvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcihjaGFyKSB7XG4gICAgdGhpcy5rZXlzID0ge307XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICBzd2l0Y2ggKGV2ZW50LmNvZGUpIHtcbiAgICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcbiAgICAgICAgICB0aGlzLmtleXNbZXZlbnQuY29kZV0gPSB0cnVlXG4gICAgICAgICAgY2hhci5kaXJlY3Rpb24gPSBcImxlZnRcIjtcbiAgICAgICAgICBjaGFyLm1vdmluZyA9IHRydWU7XG4gICAgICAgICAgY2hhci5rZXlzID0gdGhpcy5rZXlzO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdBcnJvd1JpZ2h0JzpcbiAgICAgICAgICB0aGlzLmtleXNbZXZlbnQuY29kZV0gPSB0cnVlXG4gICAgICAgICAgY2hhci5kaXJlY3Rpb24gPSBcInJpZ2h0XCI7XG4gICAgICAgICAgY2hhci5tb3ZpbmcgPSB0cnVlO1xuICAgICAgICAgIGNoYXIudXBkYXRlS2V5cyh0aGlzLmtleXMpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdBcnJvd0Rvd24nOlxuICAgICAgICAgIC8vIHRoaXMua2V5c1tldmVudC5jb2RlXSA9IHRydWVcbiAgICAgICAgICBjaGFyLmNyb3VjaGluZyA9IHRydWU7XG4gICAgICAgICAgY2hhci5jcm91Y2goKTsgICBcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnU3BhY2UnOlxuICAgICAgICAgIC8vIHRoaXMua2V5c1tldmVudC5jb2RlXSA9IHRydWVcbiAgICAgICAgICBpZiAoIWNoYXIuanVtcGluZyAmJiAhY2hhci5mYWxsaW5nKSB7XG4gICAgICAgICAgICBjaGFyLmp1bXBpbmcgPSB0cnVlO1xuICAgICAgICAgICAgY2hhci5qdW1wKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQpID0+IHtcbiAgICAgIHN3aXRjaCAoZXZlbnQuY29kZSkge1xuICAgICAgICBjYXNlICdBcnJvd0xlZnQnOlxuICAgICAgICAgIHRoaXMua2V5c1tldmVudC5jb2RlXSA9IGZhbHNlO1xuICAgICAgICAgIGNoYXIua2V5cyA9IHRoaXMua2V5cztcbiAgICAgICAgICBjaGFyLnN0b3AoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XG4gICAgICAgICAgdGhpcy5rZXlzW2V2ZW50LmNvZGVdID0gZmFsc2U7XG4gICAgICAgICAgY2hhci5rZXlzID0gdGhpcy5rZXlzO1xuICAgICAgICAgIGNoYXIuc3RvcCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdBcnJvd0Rvd24nOlxuICAgICAgICAgIC8vIHRoaXMua2V5c1tldmVudC5jb2RlXSA9IGZhbHNlO1xuICAgICAgICAgIGNoYXIuY3JvdWNoaW5nID0gZmFsc2U7XG4gICAgICAgICAgY2hhci51bmNyb3VjaCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdTcGFjZSc6XG4gICAgICAgICAgLy8gdGhpcy5rZXlzW2V2ZW50LmNvZGVdID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250cm9sbGVyOyIsImNsYXNzIE9ic3RhY2xlIHtcbiAgY29uc3RydWN0b3IocG9zWCwgcG9zWSwgcmFkaXVzLCBvcmllbnRhdGlvbiwgdHJhdmVsTGVuZ3RoLCBjb2xvciwgc3BlZWQpIHtcbiAgICB0aGlzLmluaXRQb3MgPSB7XG4gICAgICB4OiBwb3NYLFxuICAgICAgeTogcG9zWVxuICAgIH07XG4gICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgIHg6IHBvc1gsXG4gICAgICB5OiBwb3NZXG4gICAgfTtcbiAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcbiAgICB0aGlzLm9yaWVudGF0aW9uID0gb3JpZW50YXRpb247XG4gICAgdGhpcy50cmF2ZWxMZW4gPSB0cmF2ZWxMZW5ndGhcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xuICAgIHRoaXMuZGlyZWN0aW9uID0gXCJSRFwiOyAvLyBMVSA9IGxlZnQvdXAsIFJEID0gcmlnaHQvZG93biAoZGVwLiBvbiBvcmllbnRhdGlvbilcbiAgfVxuXG4gIGRyYXdPYnN0YWNsZShjdHgpIHtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgY3R4LmFyYyh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy5yYWRpdXMsIDAsIE1hdGguUEkgKiAyLCB0cnVlKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgY3R4LmZpbGwoKTtcbiAgfSBcblxuICB1cGRhdGUoKSB7XG4gICAgLy8gc2V0IGRpcmVjdGlvbiBvYnN0YWNsZSBzaG91bGQgbW92ZSBiYXNlZCBvbiBjdXJyZW50IHBvc2l0aW9uIChSRC9MVSlcbiAgICBpZiAodGhpcy5vcmllbnRhdGlvbiA9PSBcImhvcml6b250YWxcIikge1xuICAgICAgaWYgKHRoaXMucG9zaXRpb24ueCA8PSB0aGlzLmluaXRQb3MueCkge1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IFwiUkRcIlxuICAgICAgfSBlbHNlIGlmICh0aGlzLnBvc2l0aW9uLnggPj0gdGhpcy5pbml0UG9zLnggKyB0aGlzLnRyYXZlbExlbikge1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IFwiTFVcIlxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSB0aGlzLmRpcmVjdGlvbjtcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmICh0aGlzLm9yaWVudGF0aW9uID09IFwidmVydGljYWxcIikge1xuICAgICAgaWYgKHRoaXMucG9zaXRpb24ueSA8PSB0aGlzLmluaXRQb3MueSkge1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IFwiUkRcIlxuICAgICAgfSBlbHNlIGlmICh0aGlzLnBvc2l0aW9uLnkgPj0gdGhpcy5pbml0UG9zLnkgKyB0aGlzLnRyYXZlbExlbikge1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IFwiTFVcIlxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSB0aGlzLmRpcmVjdGlvbjtcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gXCJzdGF0aWNcIikge1xuICAgICAgXG4gICAgfTtcbiAgICBcbiAgICAvLyBtb3ZlIG9ic3RhY2xlIGFjY29yZGluZyB0byBpdHMgZGlyZWN0aW9uXG4gICAgaWYgKHRoaXMub3JpZW50YXRpb24gPT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PSBcIlJEXCIpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ICs9IHRoaXMuc3BlZWRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueCAtPSB0aGlzLnNwZWVkXG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAodGhpcy5vcmllbnRhdGlvbiA9PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PSBcIlJEXCIpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55ICs9IHRoaXMuc3BlZWRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueSAtPSB0aGlzLnNwZWVkXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IE9ic3RhY2xlO1xuXG4iLCJjbGFzcyBQbGF0Zm9ybSB7XG4gIGNvbnN0cnVjdG9yKHBvc1gsIHBvc1ksIHdpZHRoLCBpKSB7XG4gICAgdGhpcy5oZWlnaHQgPSAyMDtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgIHg6IHBvc1gsXG4gICAgICB5OiBwb3NZXG4gICAgfVxuICAgIHRoaXMuaW5kZXggPSBpO1xuICB9XG5cbiAgZHJhd1BsYXRmb3JtKGN0eCkge1xuICAgIGN0eC5maWxsU3R5bGUgPSBcInBpbmtcIjtcbiAgICBjdHguZmlsbFJlY3QodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICBjdHguZmlsbCgpO1xuXG4gICAgLy8gcHJpbnRpbmcgcGxhdGZvcm0gaW5kZXgva2V5ICYgY29vcmRpbmF0ZXNcbiAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgIGN0eC5mb250ID1cIjE2cHggc2VyaWZcIjtcbiAgICBjdHguZmlsbFRleHQoYCR7dGhpcy5pbmRleH06ICR7dGhpcy5wb3NpdGlvbi54fSwgJHt0aGlzLnBvc2l0aW9uLnl9YCwgXG4gICAgICB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSszNSk7XG5cbiAgICAvLyB0ZXN0aW5nIHBsYXRmb3JtIGJvdW5kYXJpZXNcbiAgICAvLyBjdHguYmVnaW5QYXRoKCk7XG4gICAgLy8gY3R4LnN0cm9rZVN0eWxlID0gXCJibHVlXCI7XG4gICAgLy8gY3R4Lm1vdmVUbyh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSk7XG4gICAgLy8gY3R4LmxpbmVUbyh0aGlzLnBvc2l0aW9uLngsIDApO1xuICAgIC8vIGN0eC5tb3ZlVG8odGhpcy5wb3NpdGlvbi54K3RoaXMud2lkdGgsIHRoaXMucG9zaXRpb24ueSk7XG4gICAgLy8gY3R4LmxpbmVUbyh0aGlzLnBvc2l0aW9uLngrdGhpcy53aWR0aCwgMCk7XG4gICAgLy8gY3R4LnN0cm9rZSgpO1xuICB9IFxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXRmb3JtO1xuXG4iLCJleHBvcnQgY29uc3QgZmlublJpZ2h0ID0gbmV3IEltYWdlKCk7XG5maW5uUmlnaHQuc3JjID0gJy4vZGlzdC9pbWFnZXMvRmlublNwcml0ZS1yaWdodC5wbmcnO1xuZXhwb3J0IGNvbnN0IGZpbm5MZWZ0ID0gbmV3IEltYWdlKCk7XG5maW5uTGVmdC5zcmMgPSAnLi9kaXN0L2ltYWdlcy9GaW5uU3ByaXRlLWxlZnQucG5nJzsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG4vLyBpbXBvcnQgSnVtcFF1ZXN0IGZyb20gXCIuL3NjcmlwdHMvZ2FtZVwiO1xuaW1wb3J0IENoYXJhY3RlciBmcm9tIFwiLi9zY3JpcHRzL2NoYXJhY3RlclwiO1xuaW1wb3J0IENvbnRyb2xsZXIgZnJvbSBcIi4vc2NyaXB0cy9jb250cm9sbGVyXCI7XG5pbXBvcnQgQmFja2dyb3VuZCBmcm9tIFwiLi9zY3JpcHRzL2JhY2tncm91bmRcIjtcbmltcG9ydCBQbGF0Zm9ybSBmcm9tIFwiLi9zY3JpcHRzL3BsYXRmb3JtXCI7XG5pbXBvcnQgT2JzdGFjbGUgZnJvbSBcIi4vc2NyaXB0cy9vYnN0YWNsZVwiO1xuY29uc29sZS5sb2coXCJ3ZWJwYWNrIGlzIHdvcmtpbmcgcHJvcGVybHlcIik7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianVtcC1xdWVzdFwiKTtcbiAgbGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gIGNvbnN0IEdBTUVfV0lEVEggPSBjdHguY2FudmFzLndpZHRoO1xuICBjb25zdCBHQU1FX0hFSUdIVCA9IGN0eC5jYW52YXMuaGVpZ2h0O1xuXG4gIGxldCBjaGFyID0gbmV3IENoYXJhY3RlcihHQU1FX1dJRFRILCBHQU1FX0hFSUdIVCk7XG4gIG5ldyBDb250cm9sbGVyKGNoYXIpXG4gIGxldCBiZyA9IG5ldyBCYWNrZ3JvdW5kKEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hUKTtcbiAgbGV0IGZyYW1lcyA9IDA7XG4gIGxldCBvYnN0YWNsZXMgPSB7fTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBldmVudCA9PiB7XG4gICAgc3dpdGNoKGV2ZW50LmNvZGUpIHtcbiAgICAgIGNhc2UgJ0VudGVyJzpcbiAgICAgICAgc3RhcnRHYW1lKCk7XG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm47XG4gICAgfVxuICB9KVxuICAgIFxuICBmdW5jdGlvbiBzdGFydEdhbWUoKSB7XG4gICAgZ2FtZUxvb3AoKTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2FtZUxvb3AoKSB7XG4gICAgLy8gY3R4LmNsZWFyUmVjdCgwLCAwLCBHQU1FX1dJRFRILCBHQU1FX0hFSUdIVCk7XG4gICAgYmcuZHJhd0JhY2tncm91bmQoY3R4KTtcbiAgICBkcmF3UGxhdGZvcm1zKCk7XG4gICAgdXBkYXRlT2JzdGFjbGVzKCk7XG4gICAgZHJhd09ic3RhY2xlcygpO1xuICAgIC8vIHdyaXRlIGFsZ29yaXRobSB0byBvbmx5IHBhc3MgaW4gcGxhdGZvcm1zICYgb2JzdGFjbGVzIGluIGN1cnJlbnQgdnBcbiAgICBjaGFyLnVwZGF0ZShPYmplY3QudmFsdWVzKHBsYXRmb3JtcyksIE9iamVjdC52YWx1ZXMob2JzdGFjbGVzKSk7XG4gICAgY2hhci5kcmF3Q2hhcihjdHgsIGZyYW1lcyk7XG5cbiAgICBpZiAoZnJhbWVzID49IDYwKSB7XG4gICAgICBmcmFtZXMgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBmcmFtZXMrKztcbiAgICB9XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xuICB9XG5cbiAgLy8gcGxhdGZvcm0gPSBbcG9zWCwgcG9zWSwgd2lkdGhdXG4gIGxldCBwbGF0Zm9ybXMgPSB7XG4gICAgMTogWzIwMCwgNDkxMCwgMTAwXSxcbiAgICAyOiBbMzUwLCA0ODcwLCAxMDBdLFxuICAgIDM6IFs1MDAsIDQ4MzAsIDEwMF0sXG4gICAgNDogWzY1MCwgNDc5MCwgMTAwXSxcbiAgICA1OiBbODAwLCA0NzUwLCAxMDBdLFxuICAgIDY6IFs3MDAsIDQ3MTAsIDUwXSxcbiAgICA3OiBbNjAwLCA0NjcwLCA1MF0sXG4gICAgODogWzUwMCwgNDYzMCwgNTBdLFxuICAgIDk6IFs0MDAsIDQ1OTAsIDUwXSxcbiAgICAxMDogWzMwMCwgNDU1MCwgNTBdLFxuICAgIDExOiBbMjAwLCA0NTAwLCA1MF0sXG4gICAgMTI6IFsxMDAsIDQ0NTAsIDUwXSxcbiAgICAxMzogWzIwMCwgNDQwMCwgNTBdLFxuICAgIDE0OiBbMTAwLCA0MzUwLCA1MF0sXG4gICAgMTU6IFsyMDAsIDQzMDAsIDUwXSxcbiAgICAxNjogWzEwMCwgNDI1MCwgNTBdLFxuICB9O1xuICBcbiAgZnVuY3Rpb24gZHJhd1BsYXRmb3JtcygpIHtcbiAgICBPYmplY3QudmFsdWVzKHBsYXRmb3JtcykuZm9yRWFjaCgocGxhdGZvcm0sIGkpID0+IHtcbiAgICAgIGxldCBwID0gbmV3IFBsYXRmb3JtKC4uLnBsYXRmb3JtLCBpKTtcbiAgICAgIHAuZHJhd1BsYXRmb3JtKGN0eCk7XG4gICAgfSlcbiAgfTtcblxuICAvLyBvYnN0YWNsZSA9IFtwb3NYLCBwb3NZLCByYWRpdXMsIG9yaWVudGF0aW9uLCB0cmF2ZWxMZW5ndGgsIGNvbG9yLCBzcGVlZF1cbiAgbGV0IG5ld09ic3RhY2xlcyA9IHtcbiAgICAxOiBbMjI1LCA0MjUwLCAxMCwgXCJ2ZXJ0aWNhbFwiLCAzMDAsIFwicmVkXCIsIDAuNV0sXG4gICAgMjogWzUwMCwgNDQwMCwgMjAsIFwiaG9yaXpvbnRhbFwiLCAzMDAsIFwiZ3JlZW5cIiwgMS4wXSxcbiAgfVxuXG4gIGNyZWF0ZU9ic3RhY2xlcygpO1xuICBcbiAgZnVuY3Rpb24gY3JlYXRlT2JzdGFjbGVzKCkge1xuICAgIE9iamVjdC52YWx1ZXMobmV3T2JzdGFjbGVzKS5mb3JFYWNoKChvYnN0YWNsZSwgaSkgPT4ge1xuICAgICAgb2JzdGFjbGVzW2ldID0gbmV3IE9ic3RhY2xlKC4uLm9ic3RhY2xlKTs7XG4gICAgfSlcbiAgfTtcblxuICBmdW5jdGlvbiB1cGRhdGVPYnN0YWNsZXMoKSB7XG4gICAgT2JqZWN0LnZhbHVlcyhvYnN0YWNsZXMpLmZvckVhY2gob2JzdGFjbGUgPT4ge1xuICAgICAgb2JzdGFjbGUudXBkYXRlKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gZHJhd09ic3RhY2xlcygpIHtcbiAgICBPYmplY3QudmFsdWVzKG9ic3RhY2xlcykuZm9yRWFjaChvYnN0YWNsZSA9PiB7XG4gICAgICBvYnN0YWNsZS5kcmF3T2JzdGFjbGUoY3R4KTtcbiAgICB9KTtcbiAgfTtcblxufSkiXSwic291cmNlUm9vdCI6IiJ9