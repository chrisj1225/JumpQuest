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
      ctx.fillStyle = "khaki", ctx.fillRect(this.position.x, this.position.y, this.width, this.height); // printing platform index/key & coordinates
      // ctx.fillStyle = "black"; 
      // ctx.font ="14px serif";
      // ctx.fillText(`${this.index}: ${this.position.x}, ${this.position.y}`, 
      //   this.position.x, this.position.y+33);
      // testing platform boundaries
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qdW1wcXVlc3QvLi9zcmMvc2NyaXB0cy9iYWNrZ3JvdW5kLmpzIiwid2VicGFjazovL2p1bXBxdWVzdC8uL3NyYy9zY3JpcHRzL2NoYXJhY3Rlci5qcyIsIndlYnBhY2s6Ly9qdW1wcXVlc3QvLi9zcmMvc2NyaXB0cy9jb250cm9sbGVyLmpzIiwid2VicGFjazovL2p1bXBxdWVzdC8uL3NyYy9zY3JpcHRzL29ic3RhY2xlLmpzIiwid2VicGFjazovL2p1bXBxdWVzdC8uL3NyYy9zY3JpcHRzL3BsYXRmb3JtLmpzIiwid2VicGFjazovL2p1bXBxdWVzdC8uL3NyYy9zY3JpcHRzL3V0aWwuanMiLCJ3ZWJwYWNrOi8vanVtcHF1ZXN0Ly4vc3JjL3N0eWxlcy9pbmRleC5zY3NzPzg1NTkiLCJ3ZWJwYWNrOi8vanVtcHF1ZXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2p1bXBxdWVzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vanVtcHF1ZXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vanVtcHF1ZXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vanVtcHF1ZXN0Ly4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIkJhY2tncm91bmQiLCJiZ1dpZHRoIiwiYmdIZWlnaHQiLCJ3aWR0aCIsImhlaWdodCIsInBvc1kiLCJjdHgiLCJkcmF3SW1hZ2UiLCJwZWFjZUJnIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJmaWxsIiwiQ2hhcmFjdGVyIiwiZ2FtZVdpZHRoIiwiZ2FtZUhlaWdodCIsImRpcmVjdGlvbiIsIm1vdmVTcGVlZCIsImp1bXBIZWlnaHQiLCJjcm91Y2hpbmciLCJqdW1waW5nIiwiZmFsbGluZyIsImlzQ29sbGlkaW5nIiwicG9zaXRpb24iLCJ4IiwieSIsInZlbG9jaXR5IiwiY29uc3RhbnRzIiwiZ3Jhdml0eSIsImZyaWN0aW9uIiwia2V5cyIsImZyYW1lcyIsImZpbm5MZWZ0IiwibW92aW5nIiwiZmlublJpZ2h0IiwicGxhdGZvcm1zIiwib2JzdGFjbGVzIiwiaSIsImxlbmd0aCIsInBsYXRmb3JtIiwib25QbGF0Zm9ybSIsIm9ic3RhY2xlIiwiY29sbGlzaW9uRGV0ZWN0aW9uIiwib3JpZW50YXRpb24iLCJjaGFyUG9zIiwibyIsInIiLCJyYWRpdXMiLCJjIiwidyIsImgiLCJkaXN0WCIsIk1hdGgiLCJhYnMiLCJkaXN0WSIsImR4IiwiZHkiLCJwb3ciLCJDb250cm9sbGVyIiwiY2hhciIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiY29kZSIsInVwZGF0ZUtleXMiLCJjcm91Y2giLCJjb2xsaWRpbmciLCJqdW1wIiwic3RvcCIsInVuY3JvdWNoIiwiT2JzdGFjbGUiLCJwb3NYIiwidHJhdmVsTGVuZ3RoIiwiY29sb3IiLCJzcGVlZCIsImluaXRQb3MiLCJ0cmF2ZWxMZW4iLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJhcmMiLCJQSSIsInN0cm9rZSIsIlBsYXRmb3JtIiwiaW5kZXgiLCJJbWFnZSIsInNyYyIsImJlZW1vIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0IiwiR0FNRV9XSURUSCIsIkdBTUVfSEVJR0hUIiwiYmciLCJzdGFydEdhbWUiLCJnYW1lTG9vcCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNsZWFyUmVjdCIsImRyYXdCYWNrZ3JvdW5kIiwiZHJhd1BsYXRmb3JtcyIsInVwZGF0ZU9ic3RhY2xlcyIsImRyYXdPYnN0YWNsZXMiLCJ1cGRhdGUiLCJPYmplY3QiLCJ2YWx1ZXMiLCJkcmF3Q2hhciIsImZvckVhY2giLCJwIiwiZHJhd1BsYXRmb3JtIiwibmV3T2JzdGFjbGVzIiwiY3JlYXRlT2JzdGFjbGVzIiwiZHJhd09ic3RhY2xlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7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RUFBNEJILE9BQTVCLENBQW9DLFVBQUNoRSxRQUFELEVBQVdKLENBQVgsRUFBaUI7QUFDbkRELGVBQVMsQ0FBQ0MsQ0FBRCxDQUFULGNBQW1CaUMsc0RBQW5CLHFCQUErQjdCLFFBQS9CO0FBQXlDO0FBQzFDLEtBRkQ7QUFHRDs7QUFBQTs7QUFFRCxXQUFTMEQsZUFBVCxHQUEyQjtBQUN6QkcsVUFBTSxDQUFDQyxNQUFQLENBQWNuRSxTQUFkLEVBQXlCcUUsT0FBekIsQ0FBaUMsVUFBQWhFLFFBQVEsRUFBSTtBQUMzQ0EsY0FBUSxDQUFDNEQsTUFBVDtBQUNELEtBRkQ7QUFHRDs7QUFBQTs7QUFFRCxXQUFTRCxhQUFULEdBQXlCO0FBQ3ZCRSxVQUFNLENBQUNDLE1BQVAsQ0FBY25FLFNBQWQsRUFBeUJxRSxPQUF6QixDQUFpQyxVQUFBaEUsUUFBUSxFQUFJO0FBQzNDQSxjQUFRLENBQUNxRSxZQUFULENBQXNCdkcsR0FBdEI7QUFDRCxLQUZEO0FBR0Q7O0FBQUE7QUFFRixDQXhJRCxFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwZWFjZUJnIH0gZnJvbSAnLi91dGlsJztcblxuY2xhc3MgQmFja2dyb3VuZCB7XG4gIGNvbnN0cnVjdG9yKGJnV2lkdGgsIGJnSGVpZ2h0KSB7XG4gICAgdGhpcy53aWR0aCA9IGJnV2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBiZ0hlaWdodDtcbiAgICB0aGlzLnBvc1kgPSAzMjAwO1xuICB9XG5cbiAgZHJhd0JhY2tncm91bmQoY3R4KSB7XG4gICAgLy8gY3R4LmZpbGxTdHlsZSA9IFwiTWlzdHlSb3NlXCI7XG4gICAgLy8gY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0IC0gMjApO1xuICAgIC8vIGN0eC5maWxsKCk7XG5cbiAgICBjdHguZHJhd0ltYWdlKHBlYWNlQmcsIDAsIDAsIDEwMDAsIDgwMCwgMCwgMCwgMTAwMCwgODAwKTtcbiAgICBjdHguZmlsbFN0eWxlID0gXCIjMDAzMzAwXCI7XG4gICAgY3R4LmZpbGxSZWN0KDAsIHRoaXMuaGVpZ2h0IC0gMjAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICBjdHguZmlsbCgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhY2tncm91bmQ7IiwiaW1wb3J0IHsgZmlublJpZ2h0LCBmaW5uTGVmdCB9IGZyb20gJy4vdXRpbCc7XG5cbmNsYXNzIENoYXJhY3RlciB7XG4gIGNvbnN0cnVjdG9yKGdhbWVXaWR0aCwgZ2FtZUhlaWdodCkge1xuICAgIHRoaXMuZ2FtZVdpZHRoID0gZ2FtZVdpZHRoO1xuICAgIHRoaXMuZ2FtZUhlaWdodCA9IGdhbWVIZWlnaHQ7XG4gICAgdGhpcy53aWR0aCA9IDY0O1xuICAgIHRoaXMuaGVpZ2h0ID0gNDA7XG4gICAgdGhpcy5kaXJlY3Rpb24gPSBcInJpZ2h0XCI7XG4gICAgdGhpcy5tb3ZlU3BlZWQgPSAuNzU7XG4gICAgdGhpcy5qdW1wSGVpZ2h0ID0gLTEwO1xuICAgIHRoaXMuY3JvdWNoaW5nID0gZmFsc2U7XG4gICAgdGhpcy5qdW1waW5nID0gZmFsc2U7XG4gICAgdGhpcy5mYWxsaW5nID0gZmFsc2U7XG4gICAgdGhpcy5pc0NvbGxpZGluZyA9IGZhbHNlO1xuICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICB4OiA1MCxcbiAgICAgIHk6IHRoaXMuZ2FtZUhlaWdodCAtIHRoaXMuaGVpZ2h0IC0gMjAsXG4gICAgfTtcbiAgICB0aGlzLnZlbG9jaXR5ID0ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDAsXG4gICAgfTtcbiAgICB0aGlzLmNvbnN0YW50cyA9IHtcbiAgICAgIGdyYXZpdHk6IDAuMTUsXG4gICAgICBmcmljdGlvbjogMC45LFxuICAgIH07XG4gICAgdGhpcy5rZXlzID0ge307XG4gIH1cblxuICBkcmF3Q2hhcihjdHgsIGZyYW1lcykge1xuICAgIC8vIHRlc3RpbmcgY2hhcmFjdGVyIGJvdW5kYXJpZXNcbiAgICAvLyBjdHguc3Ryb2tlU3R5bGUgPSBcImdyZWVuXCI7XG4gICAgLy8gY3R4Lm1vdmVUbyh0aGlzLnBvc2l0aW9uLngrMjAsIHRoaXMucG9zaXRpb24ueSk7XG4gICAgLy8gY3R4LmxpbmVUbyh0aGlzLnBvc2l0aW9uLngrMjAsIDApO1xuICAgIC8vIGN0eC5tb3ZlVG8odGhpcy5wb3NpdGlvbi54K3RoaXMud2lkdGgtMzAsIHRoaXMucG9zaXRpb24ueSk7XG4gICAgLy8gY3R4LmxpbmVUbyh0aGlzLnBvc2l0aW9uLngrdGhpcy53aWR0aC0zMCwgMCk7XG4gICAgLy8gY3R4LnN0cm9rZSgpO1xuXG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uID09ICdsZWZ0Jykge1xuICAgICAgaWYgKHRoaXMuaXNDb2xsaWRpbmcpIHtcbiAgICAgICAgY3R4LmRyYXdJbWFnZShmaW5uTGVmdCwgMzUyLCAwLCAzMiwgMjAsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuanVtcGluZyB8fCB0aGlzLmZhbGxpbmcpIHsgXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoZmlubkxlZnQsIDQ0OCwgMCwgMzIsIDIwLCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLm1vdmluZykge1xuICAgICAgICBpZiAoZnJhbWVzIDwgMjApIHtcbiAgICAgICAgICBjdHguZHJhd0ltYWdlKGZpbm5MZWZ0LCA1NDQsIDAsIDMyLCAyMCwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgfSBlbHNlIGlmIChmcmFtZXMgPiAyMCAmJiBmcmFtZXMgPCA0MCkgeyBcbiAgICAgICAgICBjdHguZHJhd0ltYWdlKGZpbm5MZWZ0LCA1MTIsIDAsIDMyLCAyMCwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjdHguZHJhd0ltYWdlKGZpbm5MZWZ0LCA0ODAsIDAsIDMyLCAyMCwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChmcmFtZXMgPCA0MCkge1xuICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoZmlubkxlZnQsIDg2NCwgMCwgMzIsIDIwLCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoZmlubkxlZnQsIDgwMCwgMCwgMzIsIDIwLCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB9O1xuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZGlyZWN0aW9uID09ICdyaWdodCcpIHtcbiAgICAgIGlmICh0aGlzLmlzQ29sbGlkaW5nKSB7IFxuICAgICAgICBjdHguZHJhd0ltYWdlKGZpbm5SaWdodCwgNTEyLCAwLCAzMiwgMjAsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuanVtcGluZyB8fCB0aGlzLmZhbGxpbmcpIHtcbiAgICAgICAgY3R4LmRyYXdJbWFnZShmaW5uUmlnaHQsIDQ4MCwgMCwgMzIsIDIwLCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLm1vdmluZykge1xuICAgICAgICBpZiAoZnJhbWVzIDwgMjApIHtcbiAgICAgICAgICBjdHguZHJhd0ltYWdlKGZpbm5SaWdodCwgMzIwLCAwLCAzMiwgMjAsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZnJhbWVzID4gMjAgJiYgZnJhbWVzIDwgNDApIHsgXG4gICAgICAgICAgY3R4LmRyYXdJbWFnZShmaW5uUmlnaHQsIDM4NCwgMCwgMzIsIDIwLCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoZmlublJpZ2h0LCA0MTYsIDAsIDMyLCAyMCwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChmcmFtZXMgPCA0MCkge1xuICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoZmlublJpZ2h0LCAwLCAwLCAzMiwgMjAsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY3R4LmRyYXdJbWFnZShmaW5uUmlnaHQsIDY0LCAwLCAzMiwgMjAsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB1cGRhdGVLZXlzKGtleXMpIHtcbiAgICB0aGlzLmtleXMgPSBrZXlzO1xuICB9XG5cbiAgc3RvcCgpIHtcbiAgICB0aGlzLnZlbG9jaXR5LnggPSAwO1xuICAgIHRoaXMudmVsb2NpdHkueSA9IDA7XG4gIH1cblxuICBqdW1wKCkge1xuICAgIGlmICh0aGlzLmp1bXBpbmcpIHtcbiAgICAgIHRoaXMudmVsb2NpdHkueSA9IHRoaXMuanVtcEhlaWdodFxuICAgIH1cbiAgfVxuXG4gIGNyb3VjaCgpIHtcbiAgICB0aGlzLmhlaWdodCA9IDIwO1xuICB9XG5cbiAgdW5jcm91Y2goKSB7XG4gICAgdGhpcy5oZWlnaHQgPSA0MDtcbiAgICB0aGlzLnZlbG9jaXR5LnkgPSAtNTtcbiAgfVxuXG4gIHVwZGF0ZShwbGF0Zm9ybXMsIG9ic3RhY2xlcykge1xuICAgIC8vIGNoZWNrIGN1cnJlbnQga2V5IHByZXNzZXNcbiAgICBpZiAodGhpcy5rZXlzWydBcnJvd0xlZnQnXSB8fCB0aGlzLmtleXNbJ0tleUEnXSkge1xuICAgICAgdGhpcy52ZWxvY2l0eS54ID0gLXRoaXMubW92ZVNwZWVkO1xuICAgIH0gZWxzZSBpZiAodGhpcy5rZXlzWydBcnJvd1JpZ2h0J10gfHwgdGhpcy5rZXlzWydLZXlEJ10pIHtcbiAgICAgIHRoaXMudmVsb2NpdHkueCA9IHRoaXMubW92ZVNwZWVkO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1vdmluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8vIGNoYXIgbW92ZW1lbnRzXG4gICAgdGhpcy5wb3NpdGlvbi55ICs9IHRoaXMudmVsb2NpdHkueTtcbiAgICB0aGlzLnBvc2l0aW9uLnggKz0gdGhpcy52ZWxvY2l0eS54O1xuICAgIHRoaXMudmVsb2NpdHkueSArPSB0aGlzLmNvbnN0YW50cy5ncmF2aXR5O1xuICAgIHRoaXMudmVsb2NpdHkueCAqPSB0aGlzLmNvbnN0YW50cy5mcmljdGlvbjtcbiAgICB0aGlzLnZlbG9jaXR5LnkgKj0gdGhpcy5jb25zdGFudHMuZnJpY3Rpb247XG5cbiAgICAvLyBpZiBjaGFyIGlzIGdvaW5nIG9mZiBzY3JlZW4sIHN0b3AgYXQgZWRnZSBvZiBzY3JlZW5cbiAgICBpZiAodGhpcy5wb3NpdGlvbi54IDw9IDApIHtcbiAgICAgIHRoaXMucG9zaXRpb24ueCA9IDA7XG4gICAgfSBlbHNlIGlmICh0aGlzLnBvc2l0aW9uLnggPj0gdGhpcy5nYW1lV2lkdGggLSB0aGlzLndpZHRoKSB7XG4gICAgICB0aGlzLnBvc2l0aW9uLnggPSB0aGlzLmdhbWVXaWR0aCAtIHRoaXMud2lkdGg7XG4gICAgfVxuXG4gICAgLy8gKipXcml0ZSBjb2RlIHRvIGZpbHRlciBvdXQgcGxhdGZvcm1zIE5PVCBpbiBjdXJyZW50IHZpZXcgZnJhbWUqKlxuICAgIC8vIGNoZWNrIGlmIGNoYXIgaXMgc3RhbmRpbmcgb24gYW55IHBsYXRmb3JtXG4gICAgLy8gZWxzZSBjaGVjayBpZiBjaGFyIGlzIGZhbGxpbmcgYmVsb3cgZmxvb3IgbGluZVxuICAgIC8vIGVsc2UgY2hhciBpcyBjdXJyZW50bHkgZmFsbGluZ1xuICAgIGZvciAobGV0IGk9MDsgaTxwbGF0Zm9ybXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBwbGF0Zm9ybSA9IHBsYXRmb3Jtc1tpXTtcbiAgICAgIGlmICh0aGlzLm9uUGxhdGZvcm0odGhpcy5wb3NpdGlvbiwgcGxhdGZvcm0pKSB7XG4gICAgICAgIHRoaXMuZmFsbGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmp1bXBpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gcGxhdGZvcm1bMV0tdGhpcy5oZWlnaHQ7XG4gICAgICAgIHRoaXMudmVsb2NpdHkueSA9IDA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnBvc2l0aW9uLnkgPj0gdGhpcy5nYW1lSGVpZ2h0LXRoaXMuaGVpZ2h0LTIwKSB7XG4gICAgICAgIHRoaXMuanVtcGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZhbGxpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gdGhpcy5nYW1lSGVpZ2h0IC0gdGhpcy5oZWlnaHQgLSAyMDtcbiAgICAgICAgdGhpcy52ZWxvY2l0eS55ID0gMDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmZhbGxpbmcgPSB0cnVlO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyAqKldyaXRlIGNvZGUgdG8gZmlsdGVyIG91dCBvYnN0YWNsZXMgTk9UIGluIGN1cnJlbnQgdmlldyBmcmFtZSoqXG4gICAgZm9yIChsZXQgaT0wOyBpPG9ic3RhY2xlcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IG9ic3RhY2xlID0gb2JzdGFjbGVzW2ldO1xuICAgICAgaWYgKHRoaXMuY29sbGlzaW9uRGV0ZWN0aW9uKG9ic3RhY2xlKSkge1xuICAgICAgICB0aGlzLmlzQ29sbGlkaW5nID0gdHJ1ZTtcbiAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB7dGhpcy5jb2xsaWRpbmcgPSBmYWxzZX0sIDEwMDApO1xuXG4gICAgICAgIGlmIChvYnN0YWNsZS5vcmllbnRhdGlvbiA9PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09ICdsZWZ0Jykge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ICs9IDE1O1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55ICs9IDE7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCAtPSAxNTtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSArPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAob2JzdGFjbGUuZGlyZWN0aW9uID09IFwiUkRcIikge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ICs9IDIwO1xuICAgICAgICAgIH0gZWxzZSBpZiAob2JzdGFjbGUuZGlyZWN0aW9uID09IFwiTFVcIikge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54IC09IDIwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaXNDb2xsaWRpbmcgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfTtcblxuICBvblBsYXRmb3JtKGNoYXJQb3MsIHBsYXRmb3JtKSB7XG4gICAgLy8gY2hhclBvcyA9IHtcbiAgICAvLyAgIHg6IGNoYXJQb3NYLFxuICAgIC8vICAgeTogY2hhclBvc1ksXG4gICAgLy8gfVxuICAgIC8vIHBsYXRmb3JtID0gW3Bvc1gsIHBvc1ksIHdpZHRoXVxuICAgIGlmICh0aGlzLmNyb3VjaGluZykge1xuICAgICAgaWYgKCgoY2hhclBvcy54ICsgdGhpcy53aWR0aCAtMTUpID49IHBsYXRmb3JtWzBdKSAmJlxuICAgICAgKChjaGFyUG9zLngrMTUpIDw9IChwbGF0Zm9ybVswXStwbGF0Zm9ybVsyXSkpICYmXG4gICAgICAoKGNoYXJQb3MueSArIDIwKSA8PSBwbGF0Zm9ybVsxXSkgJiZcbiAgICAgICgoY2hhclBvcy55ICsgMjApID49IHBsYXRmb3JtWzFdLTIpKXtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCgoY2hhclBvcy54ICsgdGhpcy53aWR0aCAtMTUpID49IHBsYXRmb3JtWzBdKSAmJlxuICAgICAgKChjaGFyUG9zLngrMTUpIDw9IChwbGF0Zm9ybVswXStwbGF0Zm9ybVsyXSkpICYmXG4gICAgICAoKGNoYXJQb3MueSArIDQwKSA8PSBwbGF0Zm9ybVsxXSkgJiZcbiAgICAgICgoY2hhclBvcy55ICsgNDApID49IHBsYXRmb3JtWzFdLTIpKXtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfTtcbiAgICB9O1xuICB9XG5cbiAgLy8gcmV0dXJuIHRydWUgaWYgYW4gb2JzdGFjbGUgY29sbGlkZXMgd2l0aCB1c2VyXG4gIGNvbGxpc2lvbkRldGVjdGlvbihvYnN0YWNsZSkge1xuICAgIGxldCBvID0ge1xuICAgICAgeDogb2JzdGFjbGUucG9zaXRpb24ueCxcbiAgICAgIHk6IG9ic3RhY2xlLnBvc2l0aW9uLnksXG4gICAgICByOiBvYnN0YWNsZS5yYWRpdXNcbiAgICB9O1xuICAgIGxldCBjID0ge1xuICAgICAgeDogdGhpcy5wb3NpdGlvbi54ICsgMjAsXG4gICAgICB5OiB0aGlzLnBvc2l0aW9uLnksXG4gICAgICB3OiB0aGlzLndpZHRoLTMwLFxuICAgICAgaDogdGhpcy5oZWlnaHRcbiAgICB9XG5cbiAgICAvLyBmaW5kIGhvcml6L3ZlcnQgZGlzdGFuY2UgYi93IGNlbnRlciBvZiBvYnN0YWNsZSAmIGNoYXJhY3RlclxuICAgIGxldCBkaXN0WCA9IE1hdGguYWJzKG8ueCAtIGMueCAtIGMudy8yKTtcbiAgICBsZXQgZGlzdFkgPSBNYXRoLmFicyhvLnkgLSBjLnkgLSBjLmgvMik7XG5cbiAgICAvLyByZXR1cm4gZmFsc2UgaWYgZGlzdCBpcyBncmVhdGVyIHRoYW4gbWluIGRpc3QgYi93IGVkZ2VzICh4IG9yIHkpXG4gICAgaWYgKChkaXN0WCA+IChjLncvMiArIG8ucikpIHx8IChkaXN0WSA+IChjLmgvMiArIG8ucikpKSB7cmV0dXJuIGZhbHNlfTtcblxuICAgIC8vIHJldHVybiB0cnVlIGlmIGRpc3QgaXMgPD0gY2hhciB3aWR0aC8yXG4gICAgaWYgKChkaXN0WCA8PSAoYy53LzIpKSAmJiAoZGlzdFkgPD0gKGMuaC8yKSkpIHtyZXR1cm4gdHJ1ZX07XG5cbiAgICAvLyBkeCAmIGR5ID0gZGlzdCBiL3cgb2JzdGFjbGUgY2VudGVyICYgY2hhciBlZGdlICh4ICYgeSlcbiAgICBsZXQgZHggPSBkaXN0WCAtIGMudyAvIDI7XG4gICAgbGV0IGR5ID0gZGlzdFkgLSBjLmggLyAyO1xuXG4gICAgLy8gdXNlIHB5dGhhZ29yZWFuIHRoZW9yZW0gdG8gc2VlIGlmIHJhZGl1c14yICBcbiAgICAvLyBpcyBncmVhdGVyIHRoYW4gaHlwb3RlbnVzZSBvZiBkeF4yICsgZHleMiBcbiAgICAvLyBpZiBncmVhdGVyLCBvYmplY3QgYW5kIGNoYXIgYXJlIGNvbGxpZGluZyAodHJ1ZSlcbiAgICByZXR1cm4gKE1hdGgucG93KGR4LDIpICsgTWF0aC5wb3coZHksMikgPD0gTWF0aC5wb3coby5yLDIpKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IENoYXJhY3RlcjsiLCJjbGFzcyBDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoY2hhcikge1xuICAgIHRoaXMua2V5cyA9IHt9O1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICAgICAgc3dpdGNoIChldmVudC5jb2RlKSB7XG4gICAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgICAgIGNhc2UgJ0tleUEnOiAgXG4gICAgICAgICAgdGhpcy5rZXlzW2V2ZW50LmNvZGVdID0gdHJ1ZVxuICAgICAgICAgIGNoYXIuZGlyZWN0aW9uID0gXCJsZWZ0XCI7XG4gICAgICAgICAgY2hhci5tb3ZpbmcgPSB0cnVlO1xuICAgICAgICAgIGNoYXIua2V5cyA9IHRoaXMua2V5cztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XG4gICAgICAgIGNhc2UgJ0tleUQnOlxuICAgICAgICAgIHRoaXMua2V5c1tldmVudC5jb2RlXSA9IHRydWVcbiAgICAgICAgICBjaGFyLmRpcmVjdGlvbiA9IFwicmlnaHRcIjtcbiAgICAgICAgICBjaGFyLm1vdmluZyA9IHRydWU7XG4gICAgICAgICAgY2hhci51cGRhdGVLZXlzKHRoaXMua2V5cyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0Fycm93RG93bic6XG4gICAgICAgIGNhc2UgJ0tleVMnOlxuICAgICAgICAgIC8vIHRoaXMua2V5c1tldmVudC5jb2RlXSA9IHRydWVcbiAgICAgICAgICBjaGFyLmNyb3VjaGluZyA9IHRydWU7XG4gICAgICAgICAgY2hhci5jcm91Y2goKTsgICBcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnU3BhY2UnOlxuICAgICAgICAgIC8vIHRoaXMua2V5c1tldmVudC5jb2RlXSA9IHRydWVcbiAgICAgICAgICBpZiAoIWNoYXIuanVtcGluZyAmJiAhY2hhci5mYWxsaW5nICYmICFjaGFyLmNvbGxpZGluZykge1xuICAgICAgICAgICAgY2hhci5qdW1waW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIGNoYXIuanVtcCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2ZW50KSA9PiB7XG4gICAgICBzd2l0Y2ggKGV2ZW50LmNvZGUpIHtcbiAgICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcbiAgICAgICAgY2FzZSAnS2V5QSc6IFxuICAgICAgICAgIHRoaXMua2V5c1tldmVudC5jb2RlXSA9IGZhbHNlO1xuICAgICAgICAgIGNoYXIua2V5cyA9IHRoaXMua2V5cztcbiAgICAgICAgICBjaGFyLnN0b3AoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XG4gICAgICAgIGNhc2UgJ0tleUQnOlxuICAgICAgICAgIHRoaXMua2V5c1tldmVudC5jb2RlXSA9IGZhbHNlO1xuICAgICAgICAgIGNoYXIua2V5cyA9IHRoaXMua2V5cztcbiAgICAgICAgICBjaGFyLnN0b3AoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgY2FzZSAnS2V5Uyc6XG4gICAgICAgICAgLy8gdGhpcy5rZXlzW2V2ZW50LmNvZGVdID0gZmFsc2U7XG4gICAgICAgICAgY2hhci5jcm91Y2hpbmcgPSBmYWxzZTtcbiAgICAgICAgICBjaGFyLnVuY3JvdWNoKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1NwYWNlJzpcbiAgICAgICAgICAvLyB0aGlzLmtleXNbZXZlbnQuY29kZV0gPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xsZXI7IiwiY2xhc3MgT2JzdGFjbGUge1xuICBjb25zdHJ1Y3Rvcihwb3NYLCBwb3NZLCByYWRpdXMsIG9yaWVudGF0aW9uLCB0cmF2ZWxMZW5ndGgsIGNvbG9yLCBzcGVlZCkge1xuICAgIHRoaXMuaW5pdFBvcyA9IHtcbiAgICAgIHg6IHBvc1gsXG4gICAgICB5OiBwb3NZXG4gICAgfTtcbiAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgeDogcG9zWCxcbiAgICAgIHk6IHBvc1lcbiAgICB9O1xuICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xuICAgIHRoaXMub3JpZW50YXRpb24gPSBvcmllbnRhdGlvbjtcbiAgICB0aGlzLnRyYXZlbExlbiA9IHRyYXZlbExlbmd0aFxuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICB0aGlzLnNwZWVkID0gc3BlZWQ7XG4gICAgdGhpcy5kaXJlY3Rpb24gPSBcIlJEXCI7IC8vIExVID0gbGVmdC91cCwgUkQgPSByaWdodC9kb3duIChkZXAuIG9uIG9yaWVudGF0aW9uKVxuICB9XG5cbiAgZHJhd09ic3RhY2xlKGN0eCkge1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55KTtcbiAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICBjdHguYXJjKHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLnJhZGl1cywgMCwgTWF0aC5QSSAqIDIsIHRydWUpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgICBjdHguZmlsbCgpO1xuICB9IFxuXG4gIHVwZGF0ZSgpIHtcbiAgICAvLyBzZXQgZGlyZWN0aW9uIG9ic3RhY2xlIHNob3VsZCBtb3ZlIGJhc2VkIG9uIGN1cnJlbnQgcG9zaXRpb24gKFJEL0xVKVxuICAgIGlmICh0aGlzLm9yaWVudGF0aW9uID09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICBpZiAodGhpcy5wb3NpdGlvbi54IDw9IHRoaXMuaW5pdFBvcy54KSB7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gXCJSRFwiXG4gICAgICB9IGVsc2UgaWYgKHRoaXMucG9zaXRpb24ueCA+PSB0aGlzLmluaXRQb3MueCArIHRoaXMudHJhdmVsTGVuKSB7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gXCJMVVwiXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IHRoaXMuZGlyZWN0aW9uO1xuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKHRoaXMub3JpZW50YXRpb24gPT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICBpZiAodGhpcy5wb3NpdGlvbi55IDw9IHRoaXMuaW5pdFBvcy55KSB7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gXCJSRFwiXG4gICAgICB9IGVsc2UgaWYgKHRoaXMucG9zaXRpb24ueSA+PSB0aGlzLmluaXRQb3MueSArIHRoaXMudHJhdmVsTGVuKSB7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gXCJMVVwiXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IHRoaXMuZGlyZWN0aW9uO1xuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZGlyZWN0aW9uID09PSBcInN0YXRpY1wiKSB7XG4gICAgICBcbiAgICB9O1xuICAgIFxuICAgIC8vIG1vdmUgb2JzdGFjbGUgYWNjb3JkaW5nIHRvIGl0cyBkaXJlY3Rpb25cbiAgICBpZiAodGhpcy5vcmllbnRhdGlvbiA9PSBcImhvcml6b250YWxcIikge1xuICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09IFwiUkRcIikge1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnggKz0gdGhpcy5zcGVlZFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54IC09IHRoaXMuc3BlZWRcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmICh0aGlzLm9yaWVudGF0aW9uID09IFwidmVydGljYWxcIikge1xuICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09IFwiUkRcIikge1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgKz0gdGhpcy5zcGVlZFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55IC09IHRoaXMuc3BlZWRcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgT2JzdGFjbGU7XG5cbiIsImNsYXNzIFBsYXRmb3JtIHtcbiAgY29uc3RydWN0b3IocG9zWCwgcG9zWSwgd2lkdGgsIGkpIHtcbiAgICB0aGlzLmhlaWdodCA9IDE1O1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgeDogcG9zWCxcbiAgICAgIHk6IHBvc1lcbiAgICB9XG4gICAgdGhpcy5pbmRleCA9IGk7XG4gIH1cblxuICBkcmF3UGxhdGZvcm0oY3R4KSB7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwia2hha2lcIixcbiAgICBjdHguZmlsbFJlY3QodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICBcbiAgICAvLyBwcmludGluZyBwbGF0Zm9ybSBpbmRleC9rZXkgJiBjb29yZGluYXRlc1xuICAgIC8vIGN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7IFxuICAgIC8vIGN0eC5mb250ID1cIjE0cHggc2VyaWZcIjtcbiAgICAvLyBjdHguZmlsbFRleHQoYCR7dGhpcy5pbmRleH06ICR7dGhpcy5wb3NpdGlvbi54fSwgJHt0aGlzLnBvc2l0aW9uLnl9YCwgXG4gICAgLy8gICB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSszMyk7XG5cbiAgICAvLyB0ZXN0aW5nIHBsYXRmb3JtIGJvdW5kYXJpZXNcbiAgICAvLyBjdHguYmVnaW5QYXRoKCk7XG4gICAgLy8gY3R4LnN0cm9rZVN0eWxlID0gXCJibHVlXCI7XG4gICAgLy8gY3R4Lm1vdmVUbyh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSk7XG4gICAgLy8gY3R4LmxpbmVUbyh0aGlzLnBvc2l0aW9uLngsIDApO1xuICAgIC8vIGN0eC5tb3ZlVG8odGhpcy5wb3NpdGlvbi54K3RoaXMud2lkdGgsIHRoaXMucG9zaXRpb24ueSk7XG4gICAgLy8gY3R4LmxpbmVUbyh0aGlzLnBvc2l0aW9uLngrdGhpcy53aWR0aCwgMCk7XG4gICAgLy8gY3R4LnN0cm9rZSgpO1xuICB9IFxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF0Zm9ybTtcblxuIiwiZXhwb3J0IGNvbnN0IGZpbm5SaWdodCA9IG5ldyBJbWFnZSgpO1xuZmlublJpZ2h0LnNyYyA9ICcuL2Rpc3QvaW1hZ2VzL0Zpbm5TcHJpdGUtcmlnaHQucG5nJztcbmV4cG9ydCBjb25zdCBmaW5uTGVmdCA9IG5ldyBJbWFnZSgpO1xuZmlubkxlZnQuc3JjID0gJy4vZGlzdC9pbWFnZXMvRmlublNwcml0ZS1sZWZ0LnBuZyc7XG5leHBvcnQgY29uc3QgcGVhY2VCZyA9IG5ldyBJbWFnZSgpO1xucGVhY2VCZy5zcmMgPSAnLi9kaXN0L2ltYWdlcy9wZWFjZS1iZy5wbmcnO1xuZXhwb3J0IGNvbnN0IGJlZW1vID0gbmV3IEltYWdlKCk7XG5iZWVtby5zcmMgPSAnLi9kaXN0L2ltYWdlcy9iZWVtby5wbmcnOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbi8vIGltcG9ydCBKdW1wUXVlc3QgZnJvbSBcIi4vc2NyaXB0cy9nYW1lXCI7XG5pbXBvcnQgQ2hhcmFjdGVyIGZyb20gXCIuL3NjcmlwdHMvY2hhcmFjdGVyXCI7XG5pbXBvcnQgQ29udHJvbGxlciBmcm9tIFwiLi9zY3JpcHRzL2NvbnRyb2xsZXJcIjtcbmltcG9ydCBCYWNrZ3JvdW5kIGZyb20gXCIuL3NjcmlwdHMvYmFja2dyb3VuZFwiO1xuaW1wb3J0IFBsYXRmb3JtIGZyb20gXCIuL3NjcmlwdHMvcGxhdGZvcm1cIjtcbmltcG9ydCBPYnN0YWNsZSBmcm9tIFwiLi9zY3JpcHRzL29ic3RhY2xlXCI7XG5pbXBvcnQgeyBiZWVtbyB9IGZyb20gJy4vc2NyaXB0cy91dGlsJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBsZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqdW1wLXF1ZXN0XCIpO1xuICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgY29uc3QgR0FNRV9XSURUSCA9IGNhbnZhcy53aWR0aDsgLy8gMTAwMFxuICBjb25zdCBHQU1FX0hFSUdIVCA9IGNhbnZhcy5oZWlnaHQ7IC8vIDgwMFxuXG4gIGxldCBjaGFyID0gbmV3IENoYXJhY3RlcihHQU1FX1dJRFRILCBHQU1FX0hFSUdIVCk7XG4gIG5ldyBDb250cm9sbGVyKGNoYXIpXG4gIGxldCBiZyA9IG5ldyBCYWNrZ3JvdW5kKEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hUKTtcbiAgbGV0IGZyYW1lcyA9IDA7XG4gIGxldCBvYnN0YWNsZXMgPSB7fTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBldmVudCA9PiB7XG4gICAgc3dpdGNoKGV2ZW50LmNvZGUpIHtcbiAgICAgIGNhc2UgJ0VudGVyJzpcbiAgICAgICAgc3RhcnRHYW1lKCk7XG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm47XG4gICAgfVxuICB9KVxuICAgIFxuICBmdW5jdGlvbiBzdGFydEdhbWUoKSB7XG4gICAgZ2FtZUxvb3AoKTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2FtZUxvb3AoKSB7XG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBHQU1FX1dJRFRILCBHQU1FX0hFSUdIVCk7XG4gICAgYmcuZHJhd0JhY2tncm91bmQoY3R4KTtcbiAgICBkcmF3UGxhdGZvcm1zKCk7XG4gICAgdXBkYXRlT2JzdGFjbGVzKCk7XG4gICAgZHJhd09ic3RhY2xlcygpO1xuICAgIC8vIHdyaXRlIGFsZ29yaXRobSB0byBvbmx5IHBhc3MgaW4gcGxhdGZvcm1zICYgb2JzdGFjbGVzIGluIGN1cnJlbnQgdnBcbiAgICBjaGFyLnVwZGF0ZShPYmplY3QudmFsdWVzKHBsYXRmb3JtcyksIE9iamVjdC52YWx1ZXMob2JzdGFjbGVzKSk7XG4gICAgY2hhci5kcmF3Q2hhcihjdHgsIGZyYW1lcyk7XG4gICAgY3R4LmRyYXdJbWFnZShiZWVtbywgMCwgMCwgMzMsIDQwLCAwLCAxMCwgMzMsIDQwKTtcblxuICAgIGlmIChmcmFtZXMgPj0gNjApIHtcbiAgICAgIGZyYW1lcyA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZyYW1lcysrO1xuICAgIH1cblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG4gIH1cblxuICAvLyBwbGF0Zm9ybSA9IFtwb3NYLCBwb3NZLCB3aWR0aF1cbiAgbGV0IHBsYXRmb3JtcyA9IHtcbiAgICAwOiBbMTUwLCA3NDAsIDEwMF0sXG4gICAgMTogWzMwMCwgNzAwLCAxMDBdLFxuICAgIDI6IFs0NTAsIDY2MCwgMTAwXSxcbiAgICAzOiBbNjAwLCA2MjAsIDEwMF0sXG4gICAgNDogWzc1MCwgNTgwLCAxMDBdLFxuICAgIDU6IFs4NTAsIDU0MCwgNTBdLFxuICAgIDY6IFs4MDAsIDUwMCwgNTBdLFxuICAgIDc6IFs3NTAsIDQ2MCwgNTBdLFxuICAgIDg6IFs3MDAsIDQyMCwgNTBdLFxuICAgIDk6IFs2NTAsIDQ2MCwgNTBdLFxuICAgIDEwOiBbNjAwLCA1MTAsIDUwXSxcbiAgICAxMTogWzU1MCwgNDYwLCA1MF0sXG4gICAgMTI6IFs1MDAsIDQyMCwgNTBdLFxuICAgIDEzOiBbNDUwLCA0NjAsIDUwXSxcbiAgICAxNDogWzQwMCwgNTEwLCA1MF0sXG4gICAgMTU6IFszNTAsIDQ2MCwgNTBdLFxuICAgIDE2OiBbMzAwLCA0MjAsIDUwXSxcbiAgICAxNzogWzI1MCwgNDYwLCA1MF0sXG4gICAgMTg6IFsyMDAsIDUxMCwgNTBdLFxuICAgIDE5OiBbMTUwLCA0NjAsIDUwXSxcbiAgICAyMDogWzEwMCwgNDIwLCA1MF0sXG4gICAgMjE6IFs1MCwgMzgwLCA1MF0sXG4gICAgMjI6IFsxMDAsIDM0MCwgNTBdLFxuICAgIDIzOiBbMjAwLCAzMDAsIDEwMF0sXG4gICAgMjQ6IFszNTAsIDMwMCwgMTAwXSxcbiAgICAyNTogWzUwMCwgMzAwLCAxMDBdLFxuICAgIDI2OiBbNjUwLCAzMDAsIDEwMF0sXG4gICAgMjc6IFs4MDAsIDI1MCwgNTBdLFxuICAgIDI4OiBbODUwLCAyMTAsIDUwXSxcbiAgICAyOTogWzgwMCwgMTcwLCA1MF0sXG4gICAgMzA6IFs3NTAsIDEzMCwgNTBdLFxuICAgIDMxOiBbNzAwLCAxNzAsIDUwXSxcbiAgICAzMjogWzY1MCwgMjEwLCA1MF0sXG4gICAgMzM6IFs2MDAsIDE3MCwgNTBdLFxuICAgIDM0OiBbNTUwLCAxMzAsIDUwXSxcbiAgICAzNTogWzUwMCwgOTAsIDUwXSxcbiAgICAzNjogWzQ1MCwgMTMwLCA1MF0sXG4gICAgMzc6IFsyMDAsIDEzMCwgMjAwXSxcbiAgICAzODogWzEyNSwgOTAsIDUwXSxcbiAgICAzOTogWzAsIDUwLCAxMDBdLFxuICAgIDQwOiBbOTAwLCA1MCwgMTAwXSxcbiAgfTtcbiAgXG4gIGZ1bmN0aW9uIGRyYXdQbGF0Zm9ybXMoKSB7XG4gICAgT2JqZWN0LnZhbHVlcyhwbGF0Zm9ybXMpLmZvckVhY2goKHBsYXRmb3JtLCBpKSA9PiB7XG4gICAgICBsZXQgcCA9IG5ldyBQbGF0Zm9ybSguLi5wbGF0Zm9ybSwgaSk7XG4gICAgICBwLmRyYXdQbGF0Zm9ybShjdHgpO1xuICAgIH0pXG4gIH07XG5cbiAgLy8gb2JzdGFjbGUgPSBbcG9zWCwgcG9zWSwgcmFkaXVzLCBvcmllbnRhdGlvbiwgdHJhdmVsTGVuZ3RoLCBjb2xvciwgc3BlZWRdXG4gIGxldCBuZXdPYnN0YWNsZXMgPSB7XG4gICAgMTogWzc1MCwgNTcwLCA1LCBcImhvcml6b250YWxcIiwgMTAwLCBcInZpb2xldFwiLCAwLjFdLFxuICAgIDI6IFs2MjUsIDQ1MCwgNSwgXCJob3Jpem9udGFsXCIsIDIwMCwgXCJmb3Jlc3RncmVlblwiLCAwLjNdLFxuICAgIDM6IFsyMjUsIDQ1MCwgNSwgXCJob3Jpem9udGFsXCIsIDIwMCwgXCJmb3Jlc3RncmVlblwiLCAwLjNdLFxuICAgIDQ6IFs1MjUsIDM1MCwgNSwgXCJ2ZXJ0aWNhbFwiLCAxNTAsIFwic2t5Ymx1ZVwiLCAwLjNdLFxuICAgIDU6IFs3NSwgMzAwLCA1LCBcInZlcnRpY2FsXCIsIDE1MCwgXCJza3libHVlXCIsIDAuM10sXG4gICAgNjogWzMyNSwgMjYwLCAxMCwgXCJ2ZXJ0aWNhbFwiLCAxMDAsIFwiY3JpbXNvblwiLCAwLjNdLFxuICAgIDc6IFs2MjUsIDI2MCwgMTAsIFwidmVydGljYWxcIiwgMTAwLCBcImNyaW1zb25cIiwgMC4zXSxcbiAgICA4OiBbMzUwLCAyNjAsIDEwLCBcImhvcml6b250YWxcIiwgMjUwLCBcImluZGlnb1wiLCAwLjM3NV0sXG4gICAgOTogWzY1MCwgMTk1LCA1LCBcImhvcml6b250YWxcIiwgMjUwLCBcIm9yYW5nZVwiLCAwLjVdLFxuICAgIDEwOiBbNjAwLCAxNTAsIDEwLCBcImhvcml6b250YWxcIiwgMjUwLCBcImluZGlnb1wiLCAwLjM3NV0sXG4gICAgMTE6IFs1MjUsIDIwLCA1LCBcInZlcnRpY2FsXCIsIDE0MCwgXCJtYXJvb25cIiwgMC4zXSxcbiAgICAxMjogWzM1MCwgNjAsIDUsIFwidmVydGljYWxcIiwgMTQwLCBcIk1lZGl1bVNsYXRlQmx1ZVwiLCAwLjRdLFxuICAgIDEzOiBbMjUwLCA2MCwgNSwgXCJ2ZXJ0aWNhbFwiLCAxNDAsIFwiTWVkaXVtU2xhdGVCbHVlXCIsIDAuNF0sXG4gIH1cblxuICBjcmVhdGVPYnN0YWNsZXMoKTtcbiAgXG4gIGZ1bmN0aW9uIGNyZWF0ZU9ic3RhY2xlcygpIHtcbiAgICBPYmplY3QudmFsdWVzKG5ld09ic3RhY2xlcykuZm9yRWFjaCgob2JzdGFjbGUsIGkpID0+IHtcbiAgICAgIG9ic3RhY2xlc1tpXSA9IG5ldyBPYnN0YWNsZSguLi5vYnN0YWNsZSk7O1xuICAgIH0pXG4gIH07XG5cbiAgZnVuY3Rpb24gdXBkYXRlT2JzdGFjbGVzKCkge1xuICAgIE9iamVjdC52YWx1ZXMob2JzdGFjbGVzKS5mb3JFYWNoKG9ic3RhY2xlID0+IHtcbiAgICAgIG9ic3RhY2xlLnVwZGF0ZSgpO1xuICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGRyYXdPYnN0YWNsZXMoKSB7XG4gICAgT2JqZWN0LnZhbHVlcyhvYnN0YWNsZXMpLmZvckVhY2gob2JzdGFjbGUgPT4ge1xuICAgICAgb2JzdGFjbGUuZHJhd09ic3RhY2xlKGN0eCk7XG4gICAgfSk7XG4gIH07XG5cbn0pIl0sInNvdXJjZVJvb3QiOiIifQ==