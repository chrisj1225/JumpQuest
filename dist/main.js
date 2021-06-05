/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/background.js":
/*!***********************************!*\
  !*** ./src/scripts/background.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/scripts/util.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Background = /*#__PURE__*/function () {
  function Background(bgWidth, bgHeight) {
    _classCallCheck(this, Background);

    this.width = bgWidth;
    this.height = bgHeight;
    this.posY = 3200;
  }

  _createClass(Background, [{
    key: "drawBackground",
    value: function drawBackground(ctx) {
      // ctx.fillStyle = "MistyRose";
      // ctx.fillRect(0, 0, this.width, this.height - 20);
      // ctx.fill();
      ctx.drawImage(_util__WEBPACK_IMPORTED_MODULE_0__.peaceBg, 0, 0, 1000, 800, 0, 0, 1000, 800);
      ctx.fillStyle = "#003300";
      ctx.fillRect(0, this.height - 20, this.width, this.height);
      ctx.fill();
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
    this.isColliding = false;
    this.position = {
      x: 50,
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
        if (this.isColliding) {
          ctx.drawImage(_util__WEBPACK_IMPORTED_MODULE_0__.finnLeft, 352, 0, 32, 20, this.position.x, this.position.y, this.width, this.height);
        } else if (this.jumping || this.falling) {
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
        if (this.isColliding) {
          ctx.drawImage(_util__WEBPACK_IMPORTED_MODULE_0__.finnRight, 512, 0, 32, 20, this.position.x, this.position.y, this.width, this.height);
        } else if (this.jumping || this.falling) {
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
      if (this.keys['ArrowLeft'] || this.keys['KeyA']) {
        this.velocity.x = -this.moveSpeed;
      } else if (this.keys['ArrowRight'] || this.keys['KeyD']) {
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
          this.isColliding = true; // setTimeout(() => {this.colliding = false}, 1000);

          if (obstacle.orientation == 'vertical') {
            if (this.direction == 'left') {
              this.position.x += 15;
              this.position.y += 1;
            } else {
              this.position.x -= 15;
              this.position.y += 1;
            }
          } else {
            if (obstacle.direction == "RD") {
              this.position.x += 20;
            } else if (obstacle.direction == "LU") {
              this.position.x -= 20;
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
      case 'KeyA':
        _this.keys[event.code] = true;
        char.direction = "left";
        char.moving = true;
        char.keys = _this.keys;
        break;

      case 'ArrowRight':
      case 'KeyD':
        _this.keys[event.code] = true;
        char.direction = "right";
        char.moving = true;
        char.updateKeys(_this.keys);
        break;

      case 'ArrowDown':
      case 'KeyS':
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
      case 'KeyA':
        _this.keys[event.code] = false;
        char.keys = _this.keys;
        char.stop();
        break;

      case 'ArrowRight':
      case 'KeyD':
        _this.keys[event.code] = false;
        char.keys = _this.keys;
        char.stop();
        break;

      case 'ArrowDown':
      case 'KeyS':
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

    this.height = 15;
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
      ctx.fillStyle = "khaki", ctx.fillRect(this.position.x, this.position.y, this.width, this.height); // ctx.fillStyle = "SaddleBrown",
      // ctx.fillRect(this.position.x, this.position.y, this.width, 5);
      // ctx.fillStyle = "pink";
      // ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
      // printing platform index/key & coordinates

      ctx.fillStyle = "black";
      ctx.font = "14px serif";
      ctx.fillText("".concat(this.index, ": ").concat(this.position.x, ", ").concat(this.position.y), this.position.x, this.position.y + 33); // testing platform boundaries
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
/* harmony export */   "finnLeft": function() { return /* binding */ finnLeft; },
/* harmony export */   "peaceBg": function() { return /* binding */ peaceBg; },
/* harmony export */   "beemo": function() { return /* binding */ beemo; }
/* harmony export */ });
var finnRight = new Image();
finnRight.src = './dist/images/FinnSprite-right.png';
var finnLeft = new Image();
finnLeft.src = './dist/images/FinnSprite-left.png';
var peaceBg = new Image();
peaceBg.src = './dist/images/peace-bg.png';
var beemo = new Image();
beemo.src = './dist/images/beemo.png';

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
/* harmony import */ var _scripts_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scripts/util */ "./src/scripts/util.js");
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







document.addEventListener("DOMContentLoaded", function () {
  var canvas = document.getElementById("jump-quest");
  var ctx = canvas.getContext("2d");
  var GAME_WIDTH = canvas.width; // 1000

  var GAME_HEIGHT = canvas.height; // 800

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
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    bg.drawBackground(ctx);
    drawPlatforms();
    updateObstacles();
    drawObstacles(); // write algorithm to only pass in platforms & obstacles in current vp

    char.update(Object.values(platforms), Object.values(obstacles));
    char.drawChar(ctx, frames);
    ctx.drawImage(_scripts_util__WEBPACK_IMPORTED_MODULE_6__.beemo, 0, 0, 33, 40, 0, 10, 33, 40);

    if (frames >= 60) {
      frames = 0;
    } else {
      frames++;
    }

    requestAnimationFrame(gameLoop);
  } // platform = [posX, posY, width]


  var platforms = {
    0: [150, 740, 100],
    1: [300, 700, 100],
    2: [450, 660, 100],
    3: [600, 620, 100],
    4: [750, 580, 100],
    5: [850, 540, 50],
    6: [800, 500, 50],
    7: [750, 460, 50],
    8: [700, 420, 50],
    9: [650, 460, 50],
    10: [600, 510, 50],
    11: [550, 460, 50],
    12: [500, 420, 50],
    13: [450, 460, 50],
    14: [400, 510, 50],
    15: [350, 460, 50],
    16: [300, 420, 50],
    17: [250, 460, 50],
    18: [200, 510, 50],
    19: [150, 460, 50],
    20: [100, 420, 50],
    21: [50, 380, 50],
    22: [100, 340, 50],
    23: [200, 300, 100],
    24: [350, 300, 100],
    25: [500, 300, 100],
    26: [650, 300, 100],
    27: [800, 250, 50],
    28: [850, 210, 50],
    29: [800, 170, 50],
    30: [750, 130, 50],
    31: [700, 170, 50],
    32: [650, 210, 50],
    33: [600, 170, 50],
    34: [550, 130, 50],
    35: [500, 90, 50],
    36: [450, 130, 50],
    37: [200, 130, 200],
    38: [125, 90, 50],
    39: [0, 50, 100],
    40: [900, 50, 100]
  };

  function drawPlatforms() {
    Object.values(platforms).forEach(function (platform, i) {
      var p = _construct(_scripts_platform__WEBPACK_IMPORTED_MODULE_4__.default, _toConsumableArray(platform).concat([i]));

      p.drawPlatform(ctx);
    });
  }

  ; // obstacle = [posX, posY, radius, orientation, travelLength, color, speed]

  var newObstacles = {
    1: [750, 570, 5, "horizontal", 100, "violet", 0.1],
    2: [625, 450, 5, "horizontal", 200, "forestgreen", 0.3],
    3: [225, 450, 5, "horizontal", 200, "forestgreen", 0.3],
    4: [525, 350, 5, "vertical", 150, "skyblue", 0.3],
    5: [75, 300, 5, "vertical", 150, "skyblue", 0.3],
    6: [325, 260, 10, "vertical", 100, "crimson", 0.3],
    7: [625, 260, 10, "vertical", 100, "crimson", 0.3],
    8: [350, 260, 10, "horizontal", 250, "indigo", 0.375],
    9: [650, 195, 5, "horizontal", 250, "orange", 0.5],
    10: [600, 150, 10, "horizontal", 250, "indigo", 0.375],
    11: [525, 20, 5, "vertical", 140, "maroon", 0.3],
    12: [350, 60, 5, "vertical", 140, "MediumSlateBlue", 0.4],
    13: [250, 60, 5, "vertical", 140, "MediumSlateBlue", 0.4]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qdW1wcXVlc3QvLi9zcmMvc2NyaXB0cy9iYWNrZ3JvdW5kLmpzIiwid2VicGFjazovL2p1bXBxdWVzdC8uL3NyYy9zY3JpcHRzL2NoYXJhY3Rlci5qcyIsIndlYnBhY2s6Ly9qdW1wcXVlc3QvLi9zcmMvc2NyaXB0cy9jb250cm9sbGVyLmpzIiwid2VicGFjazovL2p1bXBxdWVzdC8uL3NyYy9zY3JpcHRzL29ic3RhY2xlLmpzIiwid2VicGFjazovL2p1bXBxdWVzdC8uL3NyYy9zY3JpcHRzL3BsYXRmb3JtLmpzIiwid2VicGFjazovL2p1bXBxdWVzdC8uL3NyYy9zY3JpcHRzL3V0aWwuanMiLCJ3ZWJwYWNrOi8vanVtcHF1ZXN0Ly4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIiwid2VicGFjazovL2p1bXBxdWVzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qdW1wcXVlc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2p1bXBxdWVzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2p1bXBxdWVzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2p1bXBxdWVzdC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJCYWNrZ3JvdW5kIiwiYmdXaWR0aCIsImJnSGVpZ2h0Iiwid2lkdGgiLCJoZWlnaHQiLCJwb3NZIiwiY3R4IiwiZHJhd0ltYWdlIiwicGVhY2VCZyIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiZmlsbCIsIkNoYXJhY3RlciIsImdhbWVXaWR0aCIsImdhbWVIZWlnaHQiLCJkaXJlY3Rpb24iLCJtb3ZlU3BlZWQiLCJqdW1wSGVpZ2h0IiwiY3JvdWNoaW5nIiwianVtcGluZyIsImZhbGxpbmciLCJpc0NvbGxpZGluZyIsInBvc2l0aW9uIiwieCIsInkiLCJ2ZWxvY2l0eSIsImNvbnN0YW50cyIsImdyYXZpdHkiLCJmcmljdGlvbiIsImtleXMiLCJmcmFtZXMiLCJmaW5uTGVmdCIsIm1vdmluZyIsImZpbm5SaWdodCIsInBsYXRmb3JtcyIsIm9ic3RhY2xlcyIsImkiLCJsZW5ndGgiLCJwbGF0Zm9ybSIsIm9uUGxhdGZvcm0iLCJvYnN0YWNsZSIsImNvbGxpc2lvbkRldGVjdGlvbiIsIm9yaWVudGF0aW9uIiwiY2hhclBvcyIsIm8iLCJyIiwicmFkaXVzIiwiYyIsInciLCJoIiwiZGlzdFgiLCJNYXRoIiwiYWJzIiwiZGlzdFkiLCJkeCIsImR5IiwicG93IiwiQ29udHJvbGxlciIsImNoYXIiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImNvZGUiLCJ1cGRhdGVLZXlzIiwiY3JvdWNoIiwiY29sbGlkaW5nIiwianVtcCIsInN0b3AiLCJ1bmNyb3VjaCIsIk9ic3RhY2xlIiwicG9zWCIsInRyYXZlbExlbmd0aCIsImNvbG9yIiwic3BlZWQiLCJpbml0UG9zIiwidHJhdmVsTGVuIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwiYXJjIiwiUEkiLCJzdHJva2UiLCJQbGF0Zm9ybSIsImluZGV4IiwiZm9udCIsImZpbGxUZXh0IiwiSW1hZ2UiLCJzcmMiLCJiZWVtbyIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwiZ2V0Q29udGV4dCIsIkdBTUVfV0lEVEgiLCJHQU1FX0hFSUdIVCIsImJnIiwic3RhcnRHYW1lIiwiZ2FtZUxvb3AiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjbGVhclJlY3QiLCJkcmF3QmFja2dyb3VuZCIsImRyYXdQbGF0Zm9ybXMiLCJ1cGRhdGVPYnN0YWNsZXMiLCJkcmF3T2JzdGFjbGVzIiwidXBkYXRlIiwiT2JqZWN0IiwidmFsdWVzIiwiZHJhd0NoYXIiLCJmb3JFYWNoIiwicCIsImRyYXdQbGF0Zm9ybSIsIm5ld09ic3RhY2xlcyIsImNyZWF0ZU9ic3RhY2xlcyIsImRyYXdPYnN0YWNsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7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LFFBQUksQ0FBQyxHQUFELEVBQU0sRUFBTixFQUFVLENBQVYsRUFBYSxVQUFiLEVBQXlCLEdBQXpCLEVBQThCLGlCQUE5QixFQUFpRCxHQUFqRCxDQVphO0FBYWpCLFFBQUksQ0FBQyxHQUFELEVBQU0sRUFBTixFQUFVLENBQVYsRUFBYSxVQUFiLEVBQXlCLEdBQXpCLEVBQThCLGlCQUE5QixFQUFpRCxHQUFqRDtBQWJhLEdBQW5CO0FBZ0JBQyxpQkFBZTs7QUFFZixXQUFTQSxlQUFULEdBQTJCO0FBQ3pCUCxVQUFNLENBQUNDLE1BQVAsQ0FBY0ssWUFBZCxFQUE0QkgsT0FBNUIsQ0FBb0MsVUFBQ2xFLFFBQUQsRUFBV0osQ0FBWCxFQUFpQjtBQUNuREQsZUFBUyxDQUFDQyxDQUFELENBQVQsY0FBbUJpQyxzREFBbkIscUJBQStCN0IsUUFBL0I7QUFBeUM7QUFDMUMsS0FGRDtBQUdEOztBQUFBOztBQUVELFdBQVM0RCxlQUFULEdBQTJCO0FBQ3pCRyxVQUFNLENBQUNDLE1BQVAsQ0FBY3JFLFNBQWQsRUFBeUJ1RSxPQUF6QixDQUFpQyxVQUFBbEUsUUFBUSxFQUFJO0FBQzNDQSxjQUFRLENBQUM4RCxNQUFUO0FBQ0QsS0FGRDtBQUdEOztBQUFBOztBQUVELFdBQVNELGFBQVQsR0FBeUI7QUFDdkJFLFVBQU0sQ0FBQ0MsTUFBUCxDQUFjckUsU0FBZCxFQUF5QnVFLE9BQXpCLENBQWlDLFVBQUFsRSxRQUFRLEVBQUk7QUFDM0NBLGNBQVEsQ0FBQ3VFLFlBQVQsQ0FBc0J6RyxHQUF0QjtBQUNELEtBRkQ7QUFHRDs7QUFBQTtBQUVGLENBeElELEUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHBlYWNlQmcgfSBmcm9tICcuL3V0aWwnO1xuXG5jbGFzcyBCYWNrZ3JvdW5kIHtcbiAgY29uc3RydWN0b3IoYmdXaWR0aCwgYmdIZWlnaHQpIHtcbiAgICB0aGlzLndpZHRoID0gYmdXaWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IGJnSGVpZ2h0O1xuICAgIHRoaXMucG9zWSA9IDMyMDA7XG4gIH1cblxuICBkcmF3QmFja2dyb3VuZChjdHgpIHtcbiAgICAvLyBjdHguZmlsbFN0eWxlID0gXCJNaXN0eVJvc2VcIjtcbiAgICAvLyBjdHguZmlsbFJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQgLSAyMCk7XG4gICAgLy8gY3R4LmZpbGwoKTtcblxuICAgIGN0eC5kcmF3SW1hZ2UocGVhY2VCZywgMCwgMCwgMTAwMCwgODAwLCAwLCAwLCAxMDAwLCA4MDApO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcIiMwMDMzMDBcIjtcbiAgICBjdHguZmlsbFJlY3QoMCwgdGhpcy5oZWlnaHQgLSAyMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIGN0eC5maWxsKCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFja2dyb3VuZDsiLCJpbXBvcnQgeyBmaW5uUmlnaHQsIGZpbm5MZWZ0IH0gZnJvbSAnLi91dGlsJztcblxuY2xhc3MgQ2hhcmFjdGVyIHtcbiAgY29uc3RydWN0b3IoZ2FtZVdpZHRoLCBnYW1lSGVpZ2h0KSB7XG4gICAgdGhpcy5nYW1lV2lkdGggPSBnYW1lV2lkdGg7XG4gICAgdGhpcy5nYW1lSGVpZ2h0ID0gZ2FtZUhlaWdodDtcbiAgICB0aGlzLndpZHRoID0gNjQ7XG4gICAgdGhpcy5oZWlnaHQgPSA0MDtcbiAgICB0aGlzLmRpcmVjdGlvbiA9IFwicmlnaHRcIjtcbiAgICB0aGlzLm1vdmVTcGVlZCA9IC43NTtcbiAgICB0aGlzLmp1bXBIZWlnaHQgPSAtMTA7XG4gICAgdGhpcy5jcm91Y2hpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmp1bXBpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmZhbGxpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmlzQ29sbGlkaW5nID0gZmFsc2U7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgIHg6IDUwLFxuICAgICAgeTogdGhpcy5nYW1lSGVpZ2h0IC0gdGhpcy5oZWlnaHQgLSAyMCxcbiAgICB9O1xuICAgIHRoaXMudmVsb2NpdHkgPSB7XG4gICAgICB4OiAwLFxuICAgICAgeTogMCxcbiAgICB9O1xuICAgIHRoaXMuY29uc3RhbnRzID0ge1xuICAgICAgZ3Jhdml0eTogMC4xNSxcbiAgICAgIGZyaWN0aW9uOiAwLjksXG4gICAgfTtcbiAgICB0aGlzLmtleXMgPSB7fTtcbiAgfVxuXG4gIGRyYXdDaGFyKGN0eCwgZnJhbWVzKSB7XG4gICAgLy8gdGVzdGluZyBjaGFyYWN0ZXIgYm91bmRhcmllc1xuICAgIC8vIGN0eC5zdHJva2VTdHlsZSA9IFwiZ3JlZW5cIjtcbiAgICAvLyBjdHgubW92ZVRvKHRoaXMucG9zaXRpb24ueCsyMCwgdGhpcy5wb3NpdGlvbi55KTtcbiAgICAvLyBjdHgubGluZVRvKHRoaXMucG9zaXRpb24ueCsyMCwgMCk7XG4gICAgLy8gY3R4Lm1vdmVUbyh0aGlzLnBvc2l0aW9uLngrdGhpcy53aWR0aC0zMCwgdGhpcy5wb3NpdGlvbi55KTtcbiAgICAvLyBjdHgubGluZVRvKHRoaXMucG9zaXRpb24ueCt0aGlzLndpZHRoLTMwLCAwKTtcbiAgICAvLyBjdHguc3Ryb2tlKCk7XG5cbiAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT0gJ2xlZnQnKSB7XG4gICAgICBpZiAodGhpcy5pc0NvbGxpZGluZykge1xuICAgICAgICBjdHguZHJhd0ltYWdlKGZpbm5MZWZ0LCAzNTIsIDAsIDMyLCAyMCwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5qdW1waW5nIHx8IHRoaXMuZmFsbGluZykgeyBcbiAgICAgICAgY3R4LmRyYXdJbWFnZShmaW5uTGVmdCwgNDQ4LCAwLCAzMiwgMjAsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMubW92aW5nKSB7XG4gICAgICAgIGlmIChmcmFtZXMgPCAyMCkge1xuICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoZmlubkxlZnQsIDU0NCwgMCwgMzIsIDIwLCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB9IGVsc2UgaWYgKGZyYW1lcyA+IDIwICYmIGZyYW1lcyA8IDQwKSB7IFxuICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoZmlubkxlZnQsIDUxMiwgMCwgMzIsIDIwLCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoZmlubkxlZnQsIDQ4MCwgMCwgMzIsIDIwLCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGZyYW1lcyA8IDQwKSB7XG4gICAgICAgICAgY3R4LmRyYXdJbWFnZShmaW5uTGVmdCwgODY0LCAwLCAzMiwgMjAsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY3R4LmRyYXdJbWFnZShmaW5uTGVmdCwgODAwLCAwLCAzMiwgMjAsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIH07XG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAodGhpcy5kaXJlY3Rpb24gPT0gJ3JpZ2h0Jykge1xuICAgICAgaWYgKHRoaXMuaXNDb2xsaWRpbmcpIHsgXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoZmlublJpZ2h0LCA1MTIsIDAsIDMyLCAyMCwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5qdW1waW5nIHx8IHRoaXMuZmFsbGluZykge1xuICAgICAgICBjdHguZHJhd0ltYWdlKGZpbm5SaWdodCwgNDgwLCAwLCAzMiwgMjAsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMubW92aW5nKSB7XG4gICAgICAgIGlmIChmcmFtZXMgPCAyMCkge1xuICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoZmlublJpZ2h0LCAzMjAsIDAsIDMyLCAyMCwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgfSBlbHNlIGlmIChmcmFtZXMgPiAyMCAmJiBmcmFtZXMgPCA0MCkgeyBcbiAgICAgICAgICBjdHguZHJhd0ltYWdlKGZpbm5SaWdodCwgMzg0LCAwLCAzMiwgMjAsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY3R4LmRyYXdJbWFnZShmaW5uUmlnaHQsIDQxNiwgMCwgMzIsIDIwLCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGZyYW1lcyA8IDQwKSB7XG4gICAgICAgICAgY3R4LmRyYXdJbWFnZShmaW5uUmlnaHQsIDAsIDAsIDMyLCAyMCwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjdHguZHJhd0ltYWdlKGZpbm5SaWdodCwgNjQsIDAsIDMyLCAyMCwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUtleXMoa2V5cykge1xuICAgIHRoaXMua2V5cyA9IGtleXM7XG4gIH1cblxuICBzdG9wKCkge1xuICAgIHRoaXMudmVsb2NpdHkueCA9IDA7XG4gICAgdGhpcy52ZWxvY2l0eS55ID0gMDtcbiAgfVxuXG4gIGp1bXAoKSB7XG4gICAgaWYgKHRoaXMuanVtcGluZykge1xuICAgICAgdGhpcy52ZWxvY2l0eS55ID0gdGhpcy5qdW1wSGVpZ2h0XG4gICAgfVxuICB9XG5cbiAgY3JvdWNoKCkge1xuICAgIHRoaXMuaGVpZ2h0ID0gMjA7XG4gIH1cblxuICB1bmNyb3VjaCgpIHtcbiAgICB0aGlzLmhlaWdodCA9IDQwO1xuICAgIHRoaXMudmVsb2NpdHkueSA9IC01O1xuICB9XG5cbiAgdXBkYXRlKHBsYXRmb3Jtcywgb2JzdGFjbGVzKSB7XG4gICAgLy8gY2hlY2sgY3VycmVudCBrZXkgcHJlc3Nlc1xuICAgIGlmICh0aGlzLmtleXNbJ0Fycm93TGVmdCddIHx8IHRoaXMua2V5c1snS2V5QSddKSB7XG4gICAgICB0aGlzLnZlbG9jaXR5LnggPSAtdGhpcy5tb3ZlU3BlZWQ7XG4gICAgfSBlbHNlIGlmICh0aGlzLmtleXNbJ0Fycm93UmlnaHQnXSB8fCB0aGlzLmtleXNbJ0tleUQnXSkge1xuICAgICAgdGhpcy52ZWxvY2l0eS54ID0gdGhpcy5tb3ZlU3BlZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubW92aW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gY2hhciBtb3ZlbWVudHNcbiAgICB0aGlzLnBvc2l0aW9uLnkgKz0gdGhpcy52ZWxvY2l0eS55O1xuICAgIHRoaXMucG9zaXRpb24ueCArPSB0aGlzLnZlbG9jaXR5Lng7XG4gICAgdGhpcy52ZWxvY2l0eS55ICs9IHRoaXMuY29uc3RhbnRzLmdyYXZpdHk7XG4gICAgdGhpcy52ZWxvY2l0eS54ICo9IHRoaXMuY29uc3RhbnRzLmZyaWN0aW9uO1xuICAgIHRoaXMudmVsb2NpdHkueSAqPSB0aGlzLmNvbnN0YW50cy5mcmljdGlvbjtcblxuICAgIC8vIGlmIGNoYXIgaXMgZ29pbmcgb2ZmIHNjcmVlbiwgc3RvcCBhdCBlZGdlIG9mIHNjcmVlblxuICAgIGlmICh0aGlzLnBvc2l0aW9uLnggPD0gMCkge1xuICAgICAgdGhpcy5wb3NpdGlvbi54ID0gMDtcbiAgICB9IGVsc2UgaWYgKHRoaXMucG9zaXRpb24ueCA+PSB0aGlzLmdhbWVXaWR0aCAtIHRoaXMud2lkdGgpIHtcbiAgICAgIHRoaXMucG9zaXRpb24ueCA9IHRoaXMuZ2FtZVdpZHRoIC0gdGhpcy53aWR0aDtcbiAgICB9XG5cbiAgICAvLyAqKldyaXRlIGNvZGUgdG8gZmlsdGVyIG91dCBwbGF0Zm9ybXMgTk9UIGluIGN1cnJlbnQgdmlldyBmcmFtZSoqXG4gICAgLy8gY2hlY2sgaWYgY2hhciBpcyBzdGFuZGluZyBvbiBhbnkgcGxhdGZvcm1cbiAgICAvLyBlbHNlIGNoZWNrIGlmIGNoYXIgaXMgZmFsbGluZyBiZWxvdyBmbG9vciBsaW5lXG4gICAgLy8gZWxzZSBjaGFyIGlzIGN1cnJlbnRseSBmYWxsaW5nXG4gICAgZm9yIChsZXQgaT0wOyBpPHBsYXRmb3Jtcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHBsYXRmb3JtID0gcGxhdGZvcm1zW2ldO1xuICAgICAgaWYgKHRoaXMub25QbGF0Zm9ybSh0aGlzLnBvc2l0aW9uLCBwbGF0Zm9ybSkpIHtcbiAgICAgICAgdGhpcy5mYWxsaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuanVtcGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgPSBwbGF0Zm9ybVsxXS10aGlzLmhlaWdodDtcbiAgICAgICAgdGhpcy52ZWxvY2l0eS55ID0gMDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMucG9zaXRpb24ueSA+PSB0aGlzLmdhbWVIZWlnaHQtdGhpcy5oZWlnaHQtMjApIHtcbiAgICAgICAgdGhpcy5qdW1waW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZmFsbGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgPSB0aGlzLmdhbWVIZWlnaHQgLSB0aGlzLmhlaWdodCAtIDIwO1xuICAgICAgICB0aGlzLnZlbG9jaXR5LnkgPSAwO1xuICAgICAgICBicmVhaztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZmFsbGluZyA9IHRydWU7XG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vICoqV3JpdGUgY29kZSB0byBmaWx0ZXIgb3V0IG9ic3RhY2xlcyBOT1QgaW4gY3VycmVudCB2aWV3IGZyYW1lKipcbiAgICBmb3IgKGxldCBpPTA7IGk8b2JzdGFjbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgb2JzdGFjbGUgPSBvYnN0YWNsZXNbaV07XG4gICAgICBpZiAodGhpcy5jb2xsaXNpb25EZXRlY3Rpb24ob2JzdGFjbGUpKSB7XG4gICAgICAgIHRoaXMuaXNDb2xsaWRpbmcgPSB0cnVlO1xuICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHt0aGlzLmNvbGxpZGluZyA9IGZhbHNlfSwgMTAwMCk7XG5cbiAgICAgICAgaWYgKG9ic3RhY2xlLm9yaWVudGF0aW9uID09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT0gJ2xlZnQnKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggKz0gMTU7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnkgKz0gMTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54IC09IDE1O1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55ICs9IDE7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChvYnN0YWNsZS5kaXJlY3Rpb24gPT0gXCJSRFwiKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggKz0gMjA7XG4gICAgICAgICAgfSBlbHNlIGlmIChvYnN0YWNsZS5kaXJlY3Rpb24gPT0gXCJMVVwiKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggLT0gMjA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pc0NvbGxpZGluZyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICB9O1xuXG4gIG9uUGxhdGZvcm0oY2hhclBvcywgcGxhdGZvcm0pIHtcbiAgICAvLyBjaGFyUG9zID0ge1xuICAgIC8vICAgeDogY2hhclBvc1gsXG4gICAgLy8gICB5OiBjaGFyUG9zWSxcbiAgICAvLyB9XG4gICAgLy8gcGxhdGZvcm0gPSBbcG9zWCwgcG9zWSwgd2lkdGhdXG4gICAgaWYgKHRoaXMuY3JvdWNoaW5nKSB7XG4gICAgICBpZiAoKChjaGFyUG9zLnggKyB0aGlzLndpZHRoIC0xNSkgPj0gcGxhdGZvcm1bMF0pICYmXG4gICAgICAoKGNoYXJQb3MueCsxNSkgPD0gKHBsYXRmb3JtWzBdK3BsYXRmb3JtWzJdKSkgJiZcbiAgICAgICgoY2hhclBvcy55ICsgMjApIDw9IHBsYXRmb3JtWzFdKSAmJlxuICAgICAgKChjaGFyUG9zLnkgKyAyMCkgPj0gcGxhdGZvcm1bMV0tMikpe1xuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoKChjaGFyUG9zLnggKyB0aGlzLndpZHRoIC0xNSkgPj0gcGxhdGZvcm1bMF0pICYmXG4gICAgICAoKGNoYXJQb3MueCsxNSkgPD0gKHBsYXRmb3JtWzBdK3BsYXRmb3JtWzJdKSkgJiZcbiAgICAgICgoY2hhclBvcy55ICsgNDApIDw9IHBsYXRmb3JtWzFdKSAmJlxuICAgICAgKChjaGFyUG9zLnkgKyA0MCkgPj0gcGxhdGZvcm1bMV0tMikpe1xuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9O1xuICAgIH07XG4gIH1cblxuICAvLyByZXR1cm4gdHJ1ZSBpZiBhbiBvYnN0YWNsZSBjb2xsaWRlcyB3aXRoIHVzZXJcbiAgY29sbGlzaW9uRGV0ZWN0aW9uKG9ic3RhY2xlKSB7XG4gICAgbGV0IG8gPSB7XG4gICAgICB4OiBvYnN0YWNsZS5wb3NpdGlvbi54LFxuICAgICAgeTogb2JzdGFjbGUucG9zaXRpb24ueSxcbiAgICAgIHI6IG9ic3RhY2xlLnJhZGl1c1xuICAgIH07XG4gICAgbGV0IGMgPSB7XG4gICAgICB4OiB0aGlzLnBvc2l0aW9uLnggKyAyMCxcbiAgICAgIHk6IHRoaXMucG9zaXRpb24ueSxcbiAgICAgIHc6IHRoaXMud2lkdGgtMzAsXG4gICAgICBoOiB0aGlzLmhlaWdodFxuICAgIH1cblxuICAgIC8vIGZpbmQgaG9yaXovdmVydCBkaXN0YW5jZSBiL3cgY2VudGVyIG9mIG9ic3RhY2xlICYgY2hhcmFjdGVyXG4gICAgbGV0IGRpc3RYID0gTWF0aC5hYnMoby54IC0gYy54IC0gYy53LzIpO1xuICAgIGxldCBkaXN0WSA9IE1hdGguYWJzKG8ueSAtIGMueSAtIGMuaC8yKTtcblxuICAgIC8vIHJldHVybiBmYWxzZSBpZiBkaXN0IGlzIGdyZWF0ZXIgdGhhbiBtaW4gZGlzdCBiL3cgZWRnZXMgKHggb3IgeSlcbiAgICBpZiAoKGRpc3RYID4gKGMudy8yICsgby5yKSkgfHwgKGRpc3RZID4gKGMuaC8yICsgby5yKSkpIHtyZXR1cm4gZmFsc2V9O1xuXG4gICAgLy8gcmV0dXJuIHRydWUgaWYgZGlzdCBpcyA8PSBjaGFyIHdpZHRoLzJcbiAgICBpZiAoKGRpc3RYIDw9IChjLncvMikpICYmIChkaXN0WSA8PSAoYy5oLzIpKSkge3JldHVybiB0cnVlfTtcblxuICAgIC8vIGR4ICYgZHkgPSBkaXN0IGIvdyBvYnN0YWNsZSBjZW50ZXIgJiBjaGFyIGVkZ2UgKHggJiB5KVxuICAgIGxldCBkeCA9IGRpc3RYIC0gYy53IC8gMjtcbiAgICBsZXQgZHkgPSBkaXN0WSAtIGMuaCAvIDI7XG5cbiAgICAvLyB1c2UgcHl0aGFnb3JlYW4gdGhlb3JlbSB0byBzZWUgaWYgcmFkaXVzXjIgIFxuICAgIC8vIGlzIGdyZWF0ZXIgdGhhbiBoeXBvdGVudXNlIG9mIGR4XjIgKyBkeV4yIFxuICAgIC8vIGlmIGdyZWF0ZXIsIG9iamVjdCBhbmQgY2hhciBhcmUgY29sbGlkaW5nICh0cnVlKVxuICAgIHJldHVybiAoTWF0aC5wb3coZHgsMikgKyBNYXRoLnBvdyhkeSwyKSA8PSBNYXRoLnBvdyhvLnIsMikpO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hhcmFjdGVyOyIsImNsYXNzIENvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcihjaGFyKSB7XG4gICAgdGhpcy5rZXlzID0ge307XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICBzd2l0Y2ggKGV2ZW50LmNvZGUpIHtcbiAgICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcbiAgICAgICAgY2FzZSAnS2V5QSc6ICBcbiAgICAgICAgICB0aGlzLmtleXNbZXZlbnQuY29kZV0gPSB0cnVlXG4gICAgICAgICAgY2hhci5kaXJlY3Rpb24gPSBcImxlZnRcIjtcbiAgICAgICAgICBjaGFyLm1vdmluZyA9IHRydWU7XG4gICAgICAgICAgY2hhci5rZXlzID0gdGhpcy5rZXlzO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdBcnJvd1JpZ2h0JzpcbiAgICAgICAgY2FzZSAnS2V5RCc6XG4gICAgICAgICAgdGhpcy5rZXlzW2V2ZW50LmNvZGVdID0gdHJ1ZVxuICAgICAgICAgIGNoYXIuZGlyZWN0aW9uID0gXCJyaWdodFwiO1xuICAgICAgICAgIGNoYXIubW92aW5nID0gdHJ1ZTtcbiAgICAgICAgICBjaGFyLnVwZGF0ZUtleXModGhpcy5rZXlzKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgY2FzZSAnS2V5Uyc6XG4gICAgICAgICAgLy8gdGhpcy5rZXlzW2V2ZW50LmNvZGVdID0gdHJ1ZVxuICAgICAgICAgIGNoYXIuY3JvdWNoaW5nID0gdHJ1ZTtcbiAgICAgICAgICBjaGFyLmNyb3VjaCgpOyAgIFxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdTcGFjZSc6XG4gICAgICAgICAgLy8gdGhpcy5rZXlzW2V2ZW50LmNvZGVdID0gdHJ1ZVxuICAgICAgICAgIGlmICghY2hhci5qdW1waW5nICYmICFjaGFyLmZhbGxpbmcgJiYgIWNoYXIuY29sbGlkaW5nKSB7XG4gICAgICAgICAgICBjaGFyLmp1bXBpbmcgPSB0cnVlO1xuICAgICAgICAgICAgY2hhci5qdW1wKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQpID0+IHtcbiAgICAgIHN3aXRjaCAoZXZlbnQuY29kZSkge1xuICAgICAgICBjYXNlICdBcnJvd0xlZnQnOlxuICAgICAgICBjYXNlICdLZXlBJzogXG4gICAgICAgICAgdGhpcy5rZXlzW2V2ZW50LmNvZGVdID0gZmFsc2U7XG4gICAgICAgICAgY2hhci5rZXlzID0gdGhpcy5rZXlzO1xuICAgICAgICAgIGNoYXIuc3RvcCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdBcnJvd1JpZ2h0JzpcbiAgICAgICAgY2FzZSAnS2V5RCc6XG4gICAgICAgICAgdGhpcy5rZXlzW2V2ZW50LmNvZGVdID0gZmFsc2U7XG4gICAgICAgICAgY2hhci5rZXlzID0gdGhpcy5rZXlzO1xuICAgICAgICAgIGNoYXIuc3RvcCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdBcnJvd0Rvd24nOlxuICAgICAgICBjYXNlICdLZXlTJzpcbiAgICAgICAgICAvLyB0aGlzLmtleXNbZXZlbnQuY29kZV0gPSBmYWxzZTtcbiAgICAgICAgICBjaGFyLmNyb3VjaGluZyA9IGZhbHNlO1xuICAgICAgICAgIGNoYXIudW5jcm91Y2goKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnU3BhY2UnOlxuICAgICAgICAgIC8vIHRoaXMua2V5c1tldmVudC5jb2RlXSA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udHJvbGxlcjsiLCJjbGFzcyBPYnN0YWNsZSB7XG4gIGNvbnN0cnVjdG9yKHBvc1gsIHBvc1ksIHJhZGl1cywgb3JpZW50YXRpb24sIHRyYXZlbExlbmd0aCwgY29sb3IsIHNwZWVkKSB7XG4gICAgdGhpcy5pbml0UG9zID0ge1xuICAgICAgeDogcG9zWCxcbiAgICAgIHk6IHBvc1lcbiAgICB9O1xuICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICB4OiBwb3NYLFxuICAgICAgeTogcG9zWVxuICAgIH07XG4gICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XG4gICAgdGhpcy5vcmllbnRhdGlvbiA9IG9yaWVudGF0aW9uO1xuICAgIHRoaXMudHJhdmVsTGVuID0gdHJhdmVsTGVuZ3RoXG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgIHRoaXMuc3BlZWQgPSBzcGVlZDtcbiAgICB0aGlzLmRpcmVjdGlvbiA9IFwiUkRcIjsgLy8gTFUgPSBsZWZ0L3VwLCBSRCA9IHJpZ2h0L2Rvd24gKGRlcC4gb24gb3JpZW50YXRpb24pXG4gIH1cblxuICBkcmF3T2JzdGFjbGUoY3R4KSB7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8odGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnkpO1xuICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgIGN0eC5hcmModGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMucmFkaXVzLCAwLCBNYXRoLlBJICogMiwgdHJ1ZSk7XG4gICAgY3R4LnN0cm9rZSgpO1xuICAgIGN0eC5maWxsKCk7XG4gIH0gXG5cbiAgdXBkYXRlKCkge1xuICAgIC8vIHNldCBkaXJlY3Rpb24gb2JzdGFjbGUgc2hvdWxkIG1vdmUgYmFzZWQgb24gY3VycmVudCBwb3NpdGlvbiAoUkQvTFUpXG4gICAgaWYgKHRoaXMub3JpZW50YXRpb24gPT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnggPD0gdGhpcy5pbml0UG9zLngpIHtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBcIlJEXCJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5wb3NpdGlvbi54ID49IHRoaXMuaW5pdFBvcy54ICsgdGhpcy50cmF2ZWxMZW4pIHtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBcIkxVXCJcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gdGhpcy5kaXJlY3Rpb247XG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAodGhpcy5vcmllbnRhdGlvbiA9PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnkgPD0gdGhpcy5pbml0UG9zLnkpIHtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBcIlJEXCJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5wb3NpdGlvbi55ID49IHRoaXMuaW5pdFBvcy55ICsgdGhpcy50cmF2ZWxMZW4pIHtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBcIkxVXCJcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gdGhpcy5kaXJlY3Rpb247XG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAodGhpcy5kaXJlY3Rpb24gPT09IFwic3RhdGljXCIpIHtcbiAgICAgIFxuICAgIH07XG4gICAgXG4gICAgLy8gbW92ZSBvYnN0YWNsZSBhY2NvcmRpbmcgdG8gaXRzIGRpcmVjdGlvblxuICAgIGlmICh0aGlzLm9yaWVudGF0aW9uID09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT0gXCJSRFwiKSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueCArPSB0aGlzLnNwZWVkXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnggLT0gdGhpcy5zcGVlZFxuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKHRoaXMub3JpZW50YXRpb24gPT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT0gXCJSRFwiKSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueSArPSB0aGlzLnNwZWVkXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgLT0gdGhpcy5zcGVlZFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBPYnN0YWNsZTtcblxuIiwiY2xhc3MgUGxhdGZvcm0ge1xuICBjb25zdHJ1Y3Rvcihwb3NYLCBwb3NZLCB3aWR0aCwgaSkge1xuICAgIHRoaXMuaGVpZ2h0ID0gMTU7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICB4OiBwb3NYLFxuICAgICAgeTogcG9zWVxuICAgIH1cbiAgICB0aGlzLmluZGV4ID0gaTtcbiAgfVxuXG4gIGRyYXdQbGF0Zm9ybShjdHgpIHtcbiAgICBjdHguZmlsbFN0eWxlID0gXCJraGFraVwiLFxuICAgIGN0eC5maWxsUmVjdCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIC8vIGN0eC5maWxsU3R5bGUgPSBcIlNhZGRsZUJyb3duXCIsXG4gICAgLy8gY3R4LmZpbGxSZWN0KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCA1KTtcblxuICAgIC8vIGN0eC5maWxsU3R5bGUgPSBcInBpbmtcIjtcbiAgICAvLyBjdHguZmlsbFJlY3QodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICBcbiAgICAvLyBwcmludGluZyBwbGF0Zm9ybSBpbmRleC9rZXkgJiBjb29yZGluYXRlc1xuICAgIGN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7IFxuICAgIGN0eC5mb250ID1cIjE0cHggc2VyaWZcIjtcbiAgICBjdHguZmlsbFRleHQoYCR7dGhpcy5pbmRleH06ICR7dGhpcy5wb3NpdGlvbi54fSwgJHt0aGlzLnBvc2l0aW9uLnl9YCwgXG4gICAgICB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSszMyk7XG5cbiAgICAvLyB0ZXN0aW5nIHBsYXRmb3JtIGJvdW5kYXJpZXNcbiAgICAvLyBjdHguYmVnaW5QYXRoKCk7XG4gICAgLy8gY3R4LnN0cm9rZVN0eWxlID0gXCJibHVlXCI7XG4gICAgLy8gY3R4Lm1vdmVUbyh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSk7XG4gICAgLy8gY3R4LmxpbmVUbyh0aGlzLnBvc2l0aW9uLngsIDApO1xuICAgIC8vIGN0eC5tb3ZlVG8odGhpcy5wb3NpdGlvbi54K3RoaXMud2lkdGgsIHRoaXMucG9zaXRpb24ueSk7XG4gICAgLy8gY3R4LmxpbmVUbyh0aGlzLnBvc2l0aW9uLngrdGhpcy53aWR0aCwgMCk7XG4gICAgLy8gY3R4LnN0cm9rZSgpO1xuICB9IFxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF0Zm9ybTtcblxuIiwiZXhwb3J0IGNvbnN0IGZpbm5SaWdodCA9IG5ldyBJbWFnZSgpO1xuZmlublJpZ2h0LnNyYyA9ICcuL2Rpc3QvaW1hZ2VzL0Zpbm5TcHJpdGUtcmlnaHQucG5nJztcbmV4cG9ydCBjb25zdCBmaW5uTGVmdCA9IG5ldyBJbWFnZSgpO1xuZmlubkxlZnQuc3JjID0gJy4vZGlzdC9pbWFnZXMvRmlublNwcml0ZS1sZWZ0LnBuZyc7XG5leHBvcnQgY29uc3QgcGVhY2VCZyA9IG5ldyBJbWFnZSgpO1xucGVhY2VCZy5zcmMgPSAnLi9kaXN0L2ltYWdlcy9wZWFjZS1iZy5wbmcnO1xuZXhwb3J0IGNvbnN0IGJlZW1vID0gbmV3IEltYWdlKCk7XG5iZWVtby5zcmMgPSAnLi9kaXN0L2ltYWdlcy9iZWVtby5wbmcnOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbi8vIGltcG9ydCBKdW1wUXVlc3QgZnJvbSBcIi4vc2NyaXB0cy9nYW1lXCI7XG5pbXBvcnQgQ2hhcmFjdGVyIGZyb20gXCIuL3NjcmlwdHMvY2hhcmFjdGVyXCI7XG5pbXBvcnQgQ29udHJvbGxlciBmcm9tIFwiLi9zY3JpcHRzL2NvbnRyb2xsZXJcIjtcbmltcG9ydCBCYWNrZ3JvdW5kIGZyb20gXCIuL3NjcmlwdHMvYmFja2dyb3VuZFwiO1xuaW1wb3J0IFBsYXRmb3JtIGZyb20gXCIuL3NjcmlwdHMvcGxhdGZvcm1cIjtcbmltcG9ydCBPYnN0YWNsZSBmcm9tIFwiLi9zY3JpcHRzL29ic3RhY2xlXCI7XG5pbXBvcnQgeyBiZWVtbyB9IGZyb20gJy4vc2NyaXB0cy91dGlsJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBsZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqdW1wLXF1ZXN0XCIpO1xuICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgY29uc3QgR0FNRV9XSURUSCA9IGNhbnZhcy53aWR0aDsgLy8gMTAwMFxuICBjb25zdCBHQU1FX0hFSUdIVCA9IGNhbnZhcy5oZWlnaHQ7IC8vIDgwMFxuXG4gIGxldCBjaGFyID0gbmV3IENoYXJhY3RlcihHQU1FX1dJRFRILCBHQU1FX0hFSUdIVCk7XG4gIG5ldyBDb250cm9sbGVyKGNoYXIpXG4gIGxldCBiZyA9IG5ldyBCYWNrZ3JvdW5kKEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hUKTtcbiAgbGV0IGZyYW1lcyA9IDA7XG4gIGxldCBvYnN0YWNsZXMgPSB7fTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBldmVudCA9PiB7XG4gICAgc3dpdGNoKGV2ZW50LmNvZGUpIHtcbiAgICAgIGNhc2UgJ0VudGVyJzpcbiAgICAgICAgc3RhcnRHYW1lKCk7XG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm47XG4gICAgfVxuICB9KVxuICAgIFxuICBmdW5jdGlvbiBzdGFydEdhbWUoKSB7XG4gICAgZ2FtZUxvb3AoKTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2FtZUxvb3AoKSB7XG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBHQU1FX1dJRFRILCBHQU1FX0hFSUdIVCk7XG4gICAgYmcuZHJhd0JhY2tncm91bmQoY3R4KTtcbiAgICBkcmF3UGxhdGZvcm1zKCk7XG4gICAgdXBkYXRlT2JzdGFjbGVzKCk7XG4gICAgZHJhd09ic3RhY2xlcygpO1xuICAgIC8vIHdyaXRlIGFsZ29yaXRobSB0byBvbmx5IHBhc3MgaW4gcGxhdGZvcm1zICYgb2JzdGFjbGVzIGluIGN1cnJlbnQgdnBcbiAgICBjaGFyLnVwZGF0ZShPYmplY3QudmFsdWVzKHBsYXRmb3JtcyksIE9iamVjdC52YWx1ZXMob2JzdGFjbGVzKSk7XG4gICAgY2hhci5kcmF3Q2hhcihjdHgsIGZyYW1lcyk7XG4gICAgY3R4LmRyYXdJbWFnZShiZWVtbywgMCwgMCwgMzMsIDQwLCAwLCAxMCwgMzMsIDQwKTtcblxuICAgIGlmIChmcmFtZXMgPj0gNjApIHtcbiAgICAgIGZyYW1lcyA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZyYW1lcysrO1xuICAgIH1cblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG4gIH1cblxuICAvLyBwbGF0Zm9ybSA9IFtwb3NYLCBwb3NZLCB3aWR0aF1cbiAgbGV0IHBsYXRmb3JtcyA9IHtcbiAgICAwOiBbMTUwLCA3NDAsIDEwMF0sXG4gICAgMTogWzMwMCwgNzAwLCAxMDBdLFxuICAgIDI6IFs0NTAsIDY2MCwgMTAwXSxcbiAgICAzOiBbNjAwLCA2MjAsIDEwMF0sXG4gICAgNDogWzc1MCwgNTgwLCAxMDBdLFxuICAgIDU6IFs4NTAsIDU0MCwgNTBdLFxuICAgIDY6IFs4MDAsIDUwMCwgNTBdLFxuICAgIDc6IFs3NTAsIDQ2MCwgNTBdLFxuICAgIDg6IFs3MDAsIDQyMCwgNTBdLFxuICAgIDk6IFs2NTAsIDQ2MCwgNTBdLFxuICAgIDEwOiBbNjAwLCA1MTAsIDUwXSxcbiAgICAxMTogWzU1MCwgNDYwLCA1MF0sXG4gICAgMTI6IFs1MDAsIDQyMCwgNTBdLFxuICAgIDEzOiBbNDUwLCA0NjAsIDUwXSxcbiAgICAxNDogWzQwMCwgNTEwLCA1MF0sXG4gICAgMTU6IFszNTAsIDQ2MCwgNTBdLFxuICAgIDE2OiBbMzAwLCA0MjAsIDUwXSxcbiAgICAxNzogWzI1MCwgNDYwLCA1MF0sXG4gICAgMTg6IFsyMDAsIDUxMCwgNTBdLFxuICAgIDE5OiBbMTUwLCA0NjAsIDUwXSxcbiAgICAyMDogWzEwMCwgNDIwLCA1MF0sXG4gICAgMjE6IFs1MCwgMzgwLCA1MF0sXG4gICAgMjI6IFsxMDAsIDM0MCwgNTBdLFxuICAgIDIzOiBbMjAwLCAzMDAsIDEwMF0sXG4gICAgMjQ6IFszNTAsIDMwMCwgMTAwXSxcbiAgICAyNTogWzUwMCwgMzAwLCAxMDBdLFxuICAgIDI2OiBbNjUwLCAzMDAsIDEwMF0sXG4gICAgMjc6IFs4MDAsIDI1MCwgNTBdLFxuICAgIDI4OiBbODUwLCAyMTAsIDUwXSxcbiAgICAyOTogWzgwMCwgMTcwLCA1MF0sXG4gICAgMzA6IFs3NTAsIDEzMCwgNTBdLFxuICAgIDMxOiBbNzAwLCAxNzAsIDUwXSxcbiAgICAzMjogWzY1MCwgMjEwLCA1MF0sXG4gICAgMzM6IFs2MDAsIDE3MCwgNTBdLFxuICAgIDM0OiBbNTUwLCAxMzAsIDUwXSxcbiAgICAzNTogWzUwMCwgOTAsIDUwXSxcbiAgICAzNjogWzQ1MCwgMTMwLCA1MF0sXG4gICAgMzc6IFsyMDAsIDEzMCwgMjAwXSxcbiAgICAzODogWzEyNSwgOTAsIDUwXSxcbiAgICAzOTogWzAsIDUwLCAxMDBdLFxuICAgIDQwOiBbOTAwLCA1MCwgMTAwXSxcbiAgfTtcbiAgXG4gIGZ1bmN0aW9uIGRyYXdQbGF0Zm9ybXMoKSB7XG4gICAgT2JqZWN0LnZhbHVlcyhwbGF0Zm9ybXMpLmZvckVhY2goKHBsYXRmb3JtLCBpKSA9PiB7XG4gICAgICBsZXQgcCA9IG5ldyBQbGF0Zm9ybSguLi5wbGF0Zm9ybSwgaSk7XG4gICAgICBwLmRyYXdQbGF0Zm9ybShjdHgpO1xuICAgIH0pXG4gIH07XG5cbiAgLy8gb2JzdGFjbGUgPSBbcG9zWCwgcG9zWSwgcmFkaXVzLCBvcmllbnRhdGlvbiwgdHJhdmVsTGVuZ3RoLCBjb2xvciwgc3BlZWRdXG4gIGxldCBuZXdPYnN0YWNsZXMgPSB7XG4gICAgMTogWzc1MCwgNTcwLCA1LCBcImhvcml6b250YWxcIiwgMTAwLCBcInZpb2xldFwiLCAwLjFdLFxuICAgIDI6IFs2MjUsIDQ1MCwgNSwgXCJob3Jpem9udGFsXCIsIDIwMCwgXCJmb3Jlc3RncmVlblwiLCAwLjNdLFxuICAgIDM6IFsyMjUsIDQ1MCwgNSwgXCJob3Jpem9udGFsXCIsIDIwMCwgXCJmb3Jlc3RncmVlblwiLCAwLjNdLFxuICAgIDQ6IFs1MjUsIDM1MCwgNSwgXCJ2ZXJ0aWNhbFwiLCAxNTAsIFwic2t5Ymx1ZVwiLCAwLjNdLFxuICAgIDU6IFs3NSwgMzAwLCA1LCBcInZlcnRpY2FsXCIsIDE1MCwgXCJza3libHVlXCIsIDAuM10sXG4gICAgNjogWzMyNSwgMjYwLCAxMCwgXCJ2ZXJ0aWNhbFwiLCAxMDAsIFwiY3JpbXNvblwiLCAwLjNdLFxuICAgIDc6IFs2MjUsIDI2MCwgMTAsIFwidmVydGljYWxcIiwgMTAwLCBcImNyaW1zb25cIiwgMC4zXSxcbiAgICA4OiBbMzUwLCAyNjAsIDEwLCBcImhvcml6b250YWxcIiwgMjUwLCBcImluZGlnb1wiLCAwLjM3NV0sXG4gICAgOTogWzY1MCwgMTk1LCA1LCBcImhvcml6b250YWxcIiwgMjUwLCBcIm9yYW5nZVwiLCAwLjVdLFxuICAgIDEwOiBbNjAwLCAxNTAsIDEwLCBcImhvcml6b250YWxcIiwgMjUwLCBcImluZGlnb1wiLCAwLjM3NV0sXG4gICAgMTE6IFs1MjUsIDIwLCA1LCBcInZlcnRpY2FsXCIsIDE0MCwgXCJtYXJvb25cIiwgMC4zXSxcbiAgICAxMjogWzM1MCwgNjAsIDUsIFwidmVydGljYWxcIiwgMTQwLCBcIk1lZGl1bVNsYXRlQmx1ZVwiLCAwLjRdLFxuICAgIDEzOiBbMjUwLCA2MCwgNSwgXCJ2ZXJ0aWNhbFwiLCAxNDAsIFwiTWVkaXVtU2xhdGVCbHVlXCIsIDAuNF0sXG4gIH1cblxuICBjcmVhdGVPYnN0YWNsZXMoKTtcbiAgXG4gIGZ1bmN0aW9uIGNyZWF0ZU9ic3RhY2xlcygpIHtcbiAgICBPYmplY3QudmFsdWVzKG5ld09ic3RhY2xlcykuZm9yRWFjaCgob2JzdGFjbGUsIGkpID0+IHtcbiAgICAgIG9ic3RhY2xlc1tpXSA9IG5ldyBPYnN0YWNsZSguLi5vYnN0YWNsZSk7O1xuICAgIH0pXG4gIH07XG5cbiAgZnVuY3Rpb24gdXBkYXRlT2JzdGFjbGVzKCkge1xuICAgIE9iamVjdC52YWx1ZXMob2JzdGFjbGVzKS5mb3JFYWNoKG9ic3RhY2xlID0+IHtcbiAgICAgIG9ic3RhY2xlLnVwZGF0ZSgpO1xuICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGRyYXdPYnN0YWNsZXMoKSB7XG4gICAgT2JqZWN0LnZhbHVlcyhvYnN0YWNsZXMpLmZvckVhY2gob2JzdGFjbGUgPT4ge1xuICAgICAgb2JzdGFjbGUuZHJhd09ic3RhY2xlKGN0eCk7XG4gICAgfSk7XG4gIH07XG5cbn0pIl0sInNvdXJjZVJvb3QiOiIifQ==