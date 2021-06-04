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
/* harmony export */   "peaceBg": function() { return /* binding */ peaceBg; }
/* harmony export */ });
var finnRight = new Image();
finnRight.src = './dist/images/FinnSprite-right.png';
var finnLeft = new Image();
finnLeft.src = './dist/images/FinnSprite-left.png';
var peaceBg = new Image();
peaceBg.src = './dist/images/peace-bg.png';

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
    // 26: [600, 290, 50],
    27: [800, 250, 50],
    28: [850, 210, 50]
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
    8: [350, 260, 10, "horizontal", 250, "indigo", 0.375]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qdW1wcXVlc3QvLi9zcmMvc2NyaXB0cy9iYWNrZ3JvdW5kLmpzIiwid2VicGFjazovL2p1bXBxdWVzdC8uL3NyYy9zY3JpcHRzL2NoYXJhY3Rlci5qcyIsIndlYnBhY2s6Ly9qdW1wcXVlc3QvLi9zcmMvc2NyaXB0cy9jb250cm9sbGVyLmpzIiwid2VicGFjazovL2p1bXBxdWVzdC8uL3NyYy9zY3JpcHRzL29ic3RhY2xlLmpzIiwid2VicGFjazovL2p1bXBxdWVzdC8uL3NyYy9zY3JpcHRzL3BsYXRmb3JtLmpzIiwid2VicGFjazovL2p1bXBxdWVzdC8uL3NyYy9zY3JpcHRzL3V0aWwuanMiLCJ3ZWJwYWNrOi8vanVtcHF1ZXN0Ly4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIiwid2VicGFjazovL2p1bXBxdWVzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qdW1wcXVlc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2p1bXBxdWVzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2p1bXBxdWVzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2p1bXBxdWVzdC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJCYWNrZ3JvdW5kIiwiYmdXaWR0aCIsImJnSGVpZ2h0Iiwid2lkdGgiLCJoZWlnaHQiLCJwb3NZIiwiY3R4IiwiZHJhd0ltYWdlIiwicGVhY2VCZyIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiZmlsbCIsIkNoYXJhY3RlciIsImdhbWVXaWR0aCIsImdhbWVIZWlnaHQiLCJkaXJlY3Rpb24iLCJtb3ZlU3BlZWQiLCJqdW1wSGVpZ2h0IiwiY3JvdWNoaW5nIiwianVtcGluZyIsImZhbGxpbmciLCJpc0NvbGxpZGluZyIsInBvc2l0aW9uIiwieCIsInkiLCJ2ZWxvY2l0eSIsImNvbnN0YW50cyIsImdyYXZpdHkiLCJmcmljdGlvbiIsImtleXMiLCJmcmFtZXMiLCJmaW5uTGVmdCIsIm1vdmluZyIsImZpbm5SaWdodCIsInBsYXRmb3JtcyIsIm9ic3RhY2xlcyIsImkiLCJsZW5ndGgiLCJwbGF0Zm9ybSIsIm9uUGxhdGZvcm0iLCJvYnN0YWNsZSIsImNvbGxpc2lvbkRldGVjdGlvbiIsIm9yaWVudGF0aW9uIiwiY2hhclBvcyIsIm8iLCJyIiwicmFkaXVzIiwiYyIsInciLCJoIiwiZGlzdFgiLCJNYXRoIiwiYWJzIiwiZGlzdFkiLCJkeCIsImR5IiwicG93IiwiQ29udHJvbGxlciIsImNoYXIiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImNvZGUiLCJ1cGRhdGVLZXlzIiwiY3JvdWNoIiwiY29sbGlkaW5nIiwianVtcCIsInN0b3AiLCJ1bmNyb3VjaCIsIk9ic3RhY2xlIiwicG9zWCIsInRyYXZlbExlbmd0aCIsImNvbG9yIiwic3BlZWQiLCJpbml0UG9zIiwidHJhdmVsTGVuIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwiYXJjIiwiUEkiLCJzdHJva2UiLCJQbGF0Zm9ybSIsImluZGV4IiwiZm9udCIsImZpbGxUZXh0IiwiSW1hZ2UiLCJzcmMiLCJjb25zb2xlIiwibG9nIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0IiwiR0FNRV9XSURUSCIsIkdBTUVfSEVJR0hUIiwiYmciLCJzdGFydEdhbWUiLCJnYW1lTG9vcCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNsZWFyUmVjdCIsImRyYXdCYWNrZ3JvdW5kIiwiZHJhd1BsYXRmb3JtcyIsInVwZGF0ZU9ic3RhY2xlcyIsImRyYXdPYnN0YWNsZXMiLCJ1cGRhdGUiLCJPYmplY3QiLCJ2YWx1ZXMiLCJkcmF3Q2hhciIsImZvckVhY2giLCJwIiwiZHJhd1BsYXRmb3JtIiwibmV3T2JzdGFjbGVzIiwiY3JlYXRlT2JzdGFjbGVzIiwiZHJhd09ic3RhY2xlIl0sIm1hcHBpbmdzIjoiOzs7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V0osQ0FBWCxFQUFpQjtBQUNuREQsZUFBUyxDQUFDQyxDQUFELENBQVQsY0FBbUJpQyxzREFBbkIscUJBQStCN0IsUUFBL0I7QUFBeUM7QUFDMUMsS0FGRDtBQUdEOztBQUFBOztBQUVELFdBQVM2RCxlQUFULEdBQTJCO0FBQ3pCRyxVQUFNLENBQUNDLE1BQVAsQ0FBY3RFLFNBQWQsRUFBeUJ3RSxPQUF6QixDQUFpQyxVQUFBbkUsUUFBUSxFQUFJO0FBQzNDQSxjQUFRLENBQUMrRCxNQUFUO0FBQ0QsS0FGRDtBQUdEOztBQUFBOztBQUVELFdBQVNELGFBQVQsR0FBeUI7QUFDdkJFLFVBQU0sQ0FBQ0MsTUFBUCxDQUFjdEUsU0FBZCxFQUF5QndFLE9BQXpCLENBQWlDLFVBQUFuRSxRQUFRLEVBQUk7QUFDM0NBLGNBQVEsQ0FBQ3dFLFlBQVQsQ0FBc0IxRyxHQUF0QjtBQUNELEtBRkQ7QUFHRDs7QUFBQTtBQUVGLENBeEhELEUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHBlYWNlQmcgfSBmcm9tICcuL3V0aWwnO1xuXG5jbGFzcyBCYWNrZ3JvdW5kIHtcbiAgY29uc3RydWN0b3IoYmdXaWR0aCwgYmdIZWlnaHQpIHtcbiAgICB0aGlzLndpZHRoID0gYmdXaWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IGJnSGVpZ2h0O1xuICAgIHRoaXMucG9zWSA9IDMyMDA7XG4gIH1cblxuICBkcmF3QmFja2dyb3VuZChjdHgpIHtcbiAgICAvLyBjdHguZmlsbFN0eWxlID0gXCJNaXN0eVJvc2VcIjtcbiAgICAvLyBjdHguZmlsbFJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQgLSAyMCk7XG4gICAgLy8gY3R4LmZpbGwoKTtcblxuICAgIGN0eC5kcmF3SW1hZ2UocGVhY2VCZywgMCwgMCwgMTAwMCwgODAwLCAwLCAwLCAxMDAwLCA4MDApO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcIiMwMDMzMDBcIjtcbiAgICBjdHguZmlsbFJlY3QoMCwgdGhpcy5oZWlnaHQgLSAyMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIGN0eC5maWxsKCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFja2dyb3VuZDsiLCJpbXBvcnQgeyBmaW5uUmlnaHQsIGZpbm5MZWZ0IH0gZnJvbSAnLi91dGlsJztcblxuY2xhc3MgQ2hhcmFjdGVyIHtcbiAgY29uc3RydWN0b3IoZ2FtZVdpZHRoLCBnYW1lSGVpZ2h0KSB7XG4gICAgdGhpcy5nYW1lV2lkdGggPSBnYW1lV2lkdGg7XG4gICAgdGhpcy5nYW1lSGVpZ2h0ID0gZ2FtZUhlaWdodDtcbiAgICB0aGlzLndpZHRoID0gNjQ7XG4gICAgdGhpcy5oZWlnaHQgPSA0MDtcbiAgICB0aGlzLmRpcmVjdGlvbiA9IFwicmlnaHRcIjtcbiAgICB0aGlzLm1vdmVTcGVlZCA9IC43NTtcbiAgICB0aGlzLmp1bXBIZWlnaHQgPSAtMTA7XG4gICAgdGhpcy5jcm91Y2hpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmp1bXBpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmZhbGxpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmlzQ29sbGlkaW5nID0gZmFsc2U7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgIHg6IDUwLFxuICAgICAgeTogdGhpcy5nYW1lSGVpZ2h0IC0gdGhpcy5oZWlnaHQgLSAyMCxcbiAgICB9O1xuICAgIHRoaXMudmVsb2NpdHkgPSB7XG4gICAgICB4OiAwLFxuICAgICAgeTogMCxcbiAgICB9O1xuICAgIHRoaXMuY29uc3RhbnRzID0ge1xuICAgICAgZ3Jhdml0eTogMC4xNSxcbiAgICAgIGZyaWN0aW9uOiAwLjksXG4gICAgfTtcbiAgICB0aGlzLmtleXMgPSB7fTtcbiAgfVxuXG4gIGRyYXdDaGFyKGN0eCwgZnJhbWVzKSB7XG4gICAgLy8gdGVzdGluZyBjaGFyYWN0ZXIgYm91bmRhcmllc1xuICAgIC8vIGN0eC5zdHJva2VTdHlsZSA9IFwiZ3JlZW5cIjtcbiAgICAvLyBjdHgubW92ZVRvKHRoaXMucG9zaXRpb24ueCsyMCwgdGhpcy5wb3NpdGlvbi55KTtcbiAgICAvLyBjdHgubGluZVRvKHRoaXMucG9zaXRpb24ueCsyMCwgMCk7XG4gICAgLy8gY3R4Lm1vdmVUbyh0aGlzLnBvc2l0aW9uLngrdGhpcy53aWR0aC0zMCwgdGhpcy5wb3NpdGlvbi55KTtcbiAgICAvLyBjdHgubGluZVRvKHRoaXMucG9zaXRpb24ueCt0aGlzLndpZHRoLTMwLCAwKTtcbiAgICAvLyBjdHguc3Ryb2tlKCk7XG5cbiAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT0gJ2xlZnQnKSB7XG4gICAgICBpZiAodGhpcy5pc0NvbGxpZGluZykge1xuICAgICAgICBjdHguZHJhd0ltYWdlKGZpbm5MZWZ0LCAzNTIsIDAsIDMyLCAyMCwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5qdW1waW5nIHx8IHRoaXMuZmFsbGluZykgeyBcbiAgICAgICAgY3R4LmRyYXdJbWFnZShmaW5uTGVmdCwgNDQ4LCAwLCAzMiwgMjAsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMubW92aW5nKSB7XG4gICAgICAgIGlmIChmcmFtZXMgPCAyMCkge1xuICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoZmlubkxlZnQsIDU0NCwgMCwgMzIsIDIwLCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB9IGVsc2UgaWYgKGZyYW1lcyA+IDIwICYmIGZyYW1lcyA8IDQwKSB7IFxuICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoZmlubkxlZnQsIDUxMiwgMCwgMzIsIDIwLCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoZmlubkxlZnQsIDQ4MCwgMCwgMzIsIDIwLCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGZyYW1lcyA8IDQwKSB7XG4gICAgICAgICAgY3R4LmRyYXdJbWFnZShmaW5uTGVmdCwgODY0LCAwLCAzMiwgMjAsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY3R4LmRyYXdJbWFnZShmaW5uTGVmdCwgODAwLCAwLCAzMiwgMjAsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIH07XG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAodGhpcy5kaXJlY3Rpb24gPT0gJ3JpZ2h0Jykge1xuICAgICAgaWYgKHRoaXMuaXNDb2xsaWRpbmcpIHsgXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoZmlublJpZ2h0LCA1MTIsIDAsIDMyLCAyMCwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5qdW1waW5nIHx8IHRoaXMuZmFsbGluZykge1xuICAgICAgICBjdHguZHJhd0ltYWdlKGZpbm5SaWdodCwgNDgwLCAwLCAzMiwgMjAsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMubW92aW5nKSB7XG4gICAgICAgIGlmIChmcmFtZXMgPCAyMCkge1xuICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoZmlublJpZ2h0LCAzMjAsIDAsIDMyLCAyMCwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgfSBlbHNlIGlmIChmcmFtZXMgPiAyMCAmJiBmcmFtZXMgPCA0MCkgeyBcbiAgICAgICAgICBjdHguZHJhd0ltYWdlKGZpbm5SaWdodCwgMzg0LCAwLCAzMiwgMjAsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY3R4LmRyYXdJbWFnZShmaW5uUmlnaHQsIDQxNiwgMCwgMzIsIDIwLCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGZyYW1lcyA8IDQwKSB7XG4gICAgICAgICAgY3R4LmRyYXdJbWFnZShmaW5uUmlnaHQsIDAsIDAsIDMyLCAyMCwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjdHguZHJhd0ltYWdlKGZpbm5SaWdodCwgNjQsIDAsIDMyLCAyMCwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUtleXMoa2V5cykge1xuICAgIHRoaXMua2V5cyA9IGtleXM7XG4gIH1cblxuICBzdG9wKCkge1xuICAgIHRoaXMudmVsb2NpdHkueCA9IDA7XG4gICAgdGhpcy52ZWxvY2l0eS55ID0gMDtcbiAgfVxuXG4gIGp1bXAoKSB7XG4gICAgaWYgKHRoaXMuanVtcGluZykge1xuICAgICAgdGhpcy52ZWxvY2l0eS55ID0gdGhpcy5qdW1wSGVpZ2h0XG4gICAgfVxuICB9XG5cbiAgY3JvdWNoKCkge1xuICAgIHRoaXMuaGVpZ2h0ID0gMjA7XG4gIH1cblxuICB1bmNyb3VjaCgpIHtcbiAgICB0aGlzLmhlaWdodCA9IDQwO1xuICAgIHRoaXMudmVsb2NpdHkueSA9IC01O1xuICB9XG5cbiAgdXBkYXRlKHBsYXRmb3Jtcywgb2JzdGFjbGVzKSB7XG4gICAgLy8gY2hlY2sgY3VycmVudCBrZXkgcHJlc3Nlc1xuICAgIGlmICh0aGlzLmtleXNbJ0Fycm93TGVmdCddIHx8IHRoaXMua2V5c1snS2V5QSddKSB7XG4gICAgICB0aGlzLnZlbG9jaXR5LnggPSAtdGhpcy5tb3ZlU3BlZWQ7XG4gICAgfSBlbHNlIGlmICh0aGlzLmtleXNbJ0Fycm93UmlnaHQnXSB8fCB0aGlzLmtleXNbJ0tleUQnXSkge1xuICAgICAgdGhpcy52ZWxvY2l0eS54ID0gdGhpcy5tb3ZlU3BlZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubW92aW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gY2hhciBtb3ZlbWVudHNcbiAgICB0aGlzLnBvc2l0aW9uLnkgKz0gdGhpcy52ZWxvY2l0eS55O1xuICAgIHRoaXMucG9zaXRpb24ueCArPSB0aGlzLnZlbG9jaXR5Lng7XG4gICAgdGhpcy52ZWxvY2l0eS55ICs9IHRoaXMuY29uc3RhbnRzLmdyYXZpdHk7XG4gICAgdGhpcy52ZWxvY2l0eS54ICo9IHRoaXMuY29uc3RhbnRzLmZyaWN0aW9uO1xuICAgIHRoaXMudmVsb2NpdHkueSAqPSB0aGlzLmNvbnN0YW50cy5mcmljdGlvbjtcblxuICAgIC8vIGlmIGNoYXIgaXMgZ29pbmcgb2ZmIHNjcmVlbiwgc3RvcCBhdCBlZGdlIG9mIHNjcmVlblxuICAgIGlmICh0aGlzLnBvc2l0aW9uLnggPD0gMCkge1xuICAgICAgdGhpcy5wb3NpdGlvbi54ID0gMDtcbiAgICB9IGVsc2UgaWYgKHRoaXMucG9zaXRpb24ueCA+PSB0aGlzLmdhbWVXaWR0aCAtIHRoaXMud2lkdGgpIHtcbiAgICAgIHRoaXMucG9zaXRpb24ueCA9IHRoaXMuZ2FtZVdpZHRoIC0gdGhpcy53aWR0aDtcbiAgICB9XG5cbiAgICAvLyAqKldyaXRlIGNvZGUgdG8gZmlsdGVyIG91dCBwbGF0Zm9ybXMgTk9UIGluIGN1cnJlbnQgdmlldyBmcmFtZSoqXG4gICAgLy8gY2hlY2sgaWYgY2hhciBpcyBzdGFuZGluZyBvbiBhbnkgcGxhdGZvcm1cbiAgICAvLyBlbHNlIGNoZWNrIGlmIGNoYXIgaXMgZmFsbGluZyBiZWxvdyBmbG9vciBsaW5lXG4gICAgLy8gZWxzZSBjaGFyIGlzIGN1cnJlbnRseSBmYWxsaW5nXG4gICAgZm9yIChsZXQgaT0wOyBpPHBsYXRmb3Jtcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHBsYXRmb3JtID0gcGxhdGZvcm1zW2ldO1xuICAgICAgaWYgKHRoaXMub25QbGF0Zm9ybSh0aGlzLnBvc2l0aW9uLCBwbGF0Zm9ybSkpIHtcbiAgICAgICAgdGhpcy5mYWxsaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuanVtcGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgPSBwbGF0Zm9ybVsxXS10aGlzLmhlaWdodDtcbiAgICAgICAgdGhpcy52ZWxvY2l0eS55ID0gMDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMucG9zaXRpb24ueSA+PSB0aGlzLmdhbWVIZWlnaHQtdGhpcy5oZWlnaHQtMjApIHtcbiAgICAgICAgdGhpcy5qdW1waW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZmFsbGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgPSB0aGlzLmdhbWVIZWlnaHQgLSB0aGlzLmhlaWdodCAtIDIwO1xuICAgICAgICB0aGlzLnZlbG9jaXR5LnkgPSAwO1xuICAgICAgICBicmVhaztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZmFsbGluZyA9IHRydWU7XG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vICoqV3JpdGUgY29kZSB0byBmaWx0ZXIgb3V0IG9ic3RhY2xlcyBOT1QgaW4gY3VycmVudCB2aWV3IGZyYW1lKipcbiAgICBmb3IgKGxldCBpPTA7IGk8b2JzdGFjbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgb2JzdGFjbGUgPSBvYnN0YWNsZXNbaV07XG4gICAgICBpZiAodGhpcy5jb2xsaXNpb25EZXRlY3Rpb24ob2JzdGFjbGUpKSB7XG4gICAgICAgIHRoaXMuaXNDb2xsaWRpbmcgPSB0cnVlO1xuICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHt0aGlzLmNvbGxpZGluZyA9IGZhbHNlfSwgMTAwMCk7XG5cbiAgICAgICAgaWYgKG9ic3RhY2xlLm9yaWVudGF0aW9uID09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT0gJ2xlZnQnKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggKz0gMTU7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnkgKz0gMTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54IC09IDE1O1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55ICs9IDE7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChvYnN0YWNsZS5kaXJlY3Rpb24gPT0gXCJSRFwiKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggKz0gMjA7XG4gICAgICAgICAgfSBlbHNlIGlmIChvYnN0YWNsZS5kaXJlY3Rpb24gPT0gXCJMVVwiKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggLT0gMjA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pc0NvbGxpZGluZyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICB9O1xuXG4gIG9uUGxhdGZvcm0oY2hhclBvcywgcGxhdGZvcm0pIHtcbiAgICAvLyBjaGFyUG9zID0ge1xuICAgIC8vICAgeDogY2hhclBvc1gsXG4gICAgLy8gICB5OiBjaGFyUG9zWSxcbiAgICAvLyB9XG4gICAgLy8gcGxhdGZvcm0gPSBbcG9zWCwgcG9zWSwgd2lkdGhdXG4gICAgaWYgKHRoaXMuY3JvdWNoaW5nKSB7XG4gICAgICBpZiAoKChjaGFyUG9zLnggKyB0aGlzLndpZHRoIC0xNSkgPj0gcGxhdGZvcm1bMF0pICYmXG4gICAgICAoKGNoYXJQb3MueCsxNSkgPD0gKHBsYXRmb3JtWzBdK3BsYXRmb3JtWzJdKSkgJiZcbiAgICAgICgoY2hhclBvcy55ICsgMjApIDw9IHBsYXRmb3JtWzFdKSAmJlxuICAgICAgKChjaGFyUG9zLnkgKyAyMCkgPj0gcGxhdGZvcm1bMV0tMikpe1xuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoKChjaGFyUG9zLnggKyB0aGlzLndpZHRoIC0xNSkgPj0gcGxhdGZvcm1bMF0pICYmXG4gICAgICAoKGNoYXJQb3MueCsxNSkgPD0gKHBsYXRmb3JtWzBdK3BsYXRmb3JtWzJdKSkgJiZcbiAgICAgICgoY2hhclBvcy55ICsgNDApIDw9IHBsYXRmb3JtWzFdKSAmJlxuICAgICAgKChjaGFyUG9zLnkgKyA0MCkgPj0gcGxhdGZvcm1bMV0tMikpe1xuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9O1xuICAgIH07XG4gIH1cblxuICAvLyByZXR1cm4gdHJ1ZSBpZiBhbiBvYnN0YWNsZSBjb2xsaWRlcyB3aXRoIHVzZXJcbiAgY29sbGlzaW9uRGV0ZWN0aW9uKG9ic3RhY2xlKSB7XG4gICAgbGV0IG8gPSB7XG4gICAgICB4OiBvYnN0YWNsZS5wb3NpdGlvbi54LFxuICAgICAgeTogb2JzdGFjbGUucG9zaXRpb24ueSxcbiAgICAgIHI6IG9ic3RhY2xlLnJhZGl1c1xuICAgIH07XG4gICAgbGV0IGMgPSB7XG4gICAgICB4OiB0aGlzLnBvc2l0aW9uLnggKyAyMCxcbiAgICAgIHk6IHRoaXMucG9zaXRpb24ueSxcbiAgICAgIHc6IHRoaXMud2lkdGgtMzAsXG4gICAgICBoOiB0aGlzLmhlaWdodFxuICAgIH1cblxuICAgIC8vIGZpbmQgaG9yaXovdmVydCBkaXN0YW5jZSBiL3cgY2VudGVyIG9mIG9ic3RhY2xlICYgY2hhcmFjdGVyXG4gICAgbGV0IGRpc3RYID0gTWF0aC5hYnMoby54IC0gYy54IC0gYy53LzIpO1xuICAgIGxldCBkaXN0WSA9IE1hdGguYWJzKG8ueSAtIGMueSAtIGMuaC8yKTtcblxuICAgIC8vIHJldHVybiBmYWxzZSBpZiBkaXN0IGlzIGdyZWF0ZXIgdGhhbiBtaW4gZGlzdCBiL3cgZWRnZXMgKHggb3IgeSlcbiAgICBpZiAoKGRpc3RYID4gKGMudy8yICsgby5yKSkgfHwgKGRpc3RZID4gKGMuaC8yICsgby5yKSkpIHtyZXR1cm4gZmFsc2V9O1xuXG4gICAgLy8gcmV0dXJuIHRydWUgaWYgZGlzdCBpcyA8PSBjaGFyIHdpZHRoLzJcbiAgICBpZiAoKGRpc3RYIDw9IChjLncvMikpICYmIChkaXN0WSA8PSAoYy5oLzIpKSkge3JldHVybiB0cnVlfTtcblxuICAgIC8vIGR4ICYgZHkgPSBkaXN0IGIvdyBvYnN0YWNsZSBjZW50ZXIgJiBjaGFyIGVkZ2UgKHggJiB5KVxuICAgIGxldCBkeCA9IGRpc3RYIC0gYy53IC8gMjtcbiAgICBsZXQgZHkgPSBkaXN0WSAtIGMuaCAvIDI7XG5cbiAgICAvLyB1c2UgcHl0aGFnb3JlYW4gdGhlb3JlbSB0byBzZWUgaWYgcmFkaXVzXjIgIFxuICAgIC8vIGlzIGdyZWF0ZXIgdGhhbiBoeXBvdGVudXNlIG9mIGR4XjIgKyBkeV4yIFxuICAgIC8vIGlmIGdyZWF0ZXIsIG9iamVjdCBhbmQgY2hhciBhcmUgY29sbGlkaW5nICh0cnVlKVxuICAgIHJldHVybiAoTWF0aC5wb3coZHgsMikgKyBNYXRoLnBvdyhkeSwyKSA8PSBNYXRoLnBvdyhvLnIsMikpO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hhcmFjdGVyOyIsImNsYXNzIENvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcihjaGFyKSB7XG4gICAgdGhpcy5rZXlzID0ge307XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICBzd2l0Y2ggKGV2ZW50LmNvZGUpIHtcbiAgICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcbiAgICAgICAgY2FzZSAnS2V5QSc6ICBcbiAgICAgICAgICB0aGlzLmtleXNbZXZlbnQuY29kZV0gPSB0cnVlXG4gICAgICAgICAgY2hhci5kaXJlY3Rpb24gPSBcImxlZnRcIjtcbiAgICAgICAgICBjaGFyLm1vdmluZyA9IHRydWU7XG4gICAgICAgICAgY2hhci5rZXlzID0gdGhpcy5rZXlzO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdBcnJvd1JpZ2h0JzpcbiAgICAgICAgY2FzZSAnS2V5RCc6XG4gICAgICAgICAgdGhpcy5rZXlzW2V2ZW50LmNvZGVdID0gdHJ1ZVxuICAgICAgICAgIGNoYXIuZGlyZWN0aW9uID0gXCJyaWdodFwiO1xuICAgICAgICAgIGNoYXIubW92aW5nID0gdHJ1ZTtcbiAgICAgICAgICBjaGFyLnVwZGF0ZUtleXModGhpcy5rZXlzKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgY2FzZSAnS2V5Uyc6XG4gICAgICAgICAgLy8gdGhpcy5rZXlzW2V2ZW50LmNvZGVdID0gdHJ1ZVxuICAgICAgICAgIGNoYXIuY3JvdWNoaW5nID0gdHJ1ZTtcbiAgICAgICAgICBjaGFyLmNyb3VjaCgpOyAgIFxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdTcGFjZSc6XG4gICAgICAgICAgLy8gdGhpcy5rZXlzW2V2ZW50LmNvZGVdID0gdHJ1ZVxuICAgICAgICAgIGlmICghY2hhci5qdW1waW5nICYmICFjaGFyLmZhbGxpbmcgJiYgIWNoYXIuY29sbGlkaW5nKSB7XG4gICAgICAgICAgICBjaGFyLmp1bXBpbmcgPSB0cnVlO1xuICAgICAgICAgICAgY2hhci5qdW1wKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQpID0+IHtcbiAgICAgIHN3aXRjaCAoZXZlbnQuY29kZSkge1xuICAgICAgICBjYXNlICdBcnJvd0xlZnQnOlxuICAgICAgICBjYXNlICdLZXlBJzogXG4gICAgICAgICAgdGhpcy5rZXlzW2V2ZW50LmNvZGVdID0gZmFsc2U7XG4gICAgICAgICAgY2hhci5rZXlzID0gdGhpcy5rZXlzO1xuICAgICAgICAgIGNoYXIuc3RvcCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdBcnJvd1JpZ2h0JzpcbiAgICAgICAgY2FzZSAnS2V5RCc6XG4gICAgICAgICAgdGhpcy5rZXlzW2V2ZW50LmNvZGVdID0gZmFsc2U7XG4gICAgICAgICAgY2hhci5rZXlzID0gdGhpcy5rZXlzO1xuICAgICAgICAgIGNoYXIuc3RvcCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdBcnJvd0Rvd24nOlxuICAgICAgICBjYXNlICdLZXlTJzpcbiAgICAgICAgICAvLyB0aGlzLmtleXNbZXZlbnQuY29kZV0gPSBmYWxzZTtcbiAgICAgICAgICBjaGFyLmNyb3VjaGluZyA9IGZhbHNlO1xuICAgICAgICAgIGNoYXIudW5jcm91Y2goKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnU3BhY2UnOlxuICAgICAgICAgIC8vIHRoaXMua2V5c1tldmVudC5jb2RlXSA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udHJvbGxlcjsiLCJjbGFzcyBPYnN0YWNsZSB7XG4gIGNvbnN0cnVjdG9yKHBvc1gsIHBvc1ksIHJhZGl1cywgb3JpZW50YXRpb24sIHRyYXZlbExlbmd0aCwgY29sb3IsIHNwZWVkKSB7XG4gICAgdGhpcy5pbml0UG9zID0ge1xuICAgICAgeDogcG9zWCxcbiAgICAgIHk6IHBvc1lcbiAgICB9O1xuICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICB4OiBwb3NYLFxuICAgICAgeTogcG9zWVxuICAgIH07XG4gICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XG4gICAgdGhpcy5vcmllbnRhdGlvbiA9IG9yaWVudGF0aW9uO1xuICAgIHRoaXMudHJhdmVsTGVuID0gdHJhdmVsTGVuZ3RoXG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgIHRoaXMuc3BlZWQgPSBzcGVlZDtcbiAgICB0aGlzLmRpcmVjdGlvbiA9IFwiUkRcIjsgLy8gTFUgPSBsZWZ0L3VwLCBSRCA9IHJpZ2h0L2Rvd24gKGRlcC4gb24gb3JpZW50YXRpb24pXG4gIH1cblxuICBkcmF3T2JzdGFjbGUoY3R4KSB7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8odGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnkpO1xuICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgIGN0eC5hcmModGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMucmFkaXVzLCAwLCBNYXRoLlBJICogMiwgdHJ1ZSk7XG4gICAgY3R4LnN0cm9rZSgpO1xuICAgIGN0eC5maWxsKCk7XG4gIH0gXG5cbiAgdXBkYXRlKCkge1xuICAgIC8vIHNldCBkaXJlY3Rpb24gb2JzdGFjbGUgc2hvdWxkIG1vdmUgYmFzZWQgb24gY3VycmVudCBwb3NpdGlvbiAoUkQvTFUpXG4gICAgaWYgKHRoaXMub3JpZW50YXRpb24gPT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnggPD0gdGhpcy5pbml0UG9zLngpIHtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBcIlJEXCJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5wb3NpdGlvbi54ID49IHRoaXMuaW5pdFBvcy54ICsgdGhpcy50cmF2ZWxMZW4pIHtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBcIkxVXCJcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gdGhpcy5kaXJlY3Rpb247XG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAodGhpcy5vcmllbnRhdGlvbiA9PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnkgPD0gdGhpcy5pbml0UG9zLnkpIHtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBcIlJEXCJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5wb3NpdGlvbi55ID49IHRoaXMuaW5pdFBvcy55ICsgdGhpcy50cmF2ZWxMZW4pIHtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBcIkxVXCJcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gdGhpcy5kaXJlY3Rpb247XG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAodGhpcy5kaXJlY3Rpb24gPT09IFwic3RhdGljXCIpIHtcbiAgICAgIFxuICAgIH07XG4gICAgXG4gICAgLy8gbW92ZSBvYnN0YWNsZSBhY2NvcmRpbmcgdG8gaXRzIGRpcmVjdGlvblxuICAgIGlmICh0aGlzLm9yaWVudGF0aW9uID09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT0gXCJSRFwiKSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueCArPSB0aGlzLnNwZWVkXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnggLT0gdGhpcy5zcGVlZFxuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKHRoaXMub3JpZW50YXRpb24gPT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT0gXCJSRFwiKSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueSArPSB0aGlzLnNwZWVkXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgLT0gdGhpcy5zcGVlZFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBPYnN0YWNsZTtcblxuIiwiY2xhc3MgUGxhdGZvcm0ge1xuICBjb25zdHJ1Y3Rvcihwb3NYLCBwb3NZLCB3aWR0aCwgaSkge1xuICAgIHRoaXMuaGVpZ2h0ID0gMTU7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICB4OiBwb3NYLFxuICAgICAgeTogcG9zWVxuICAgIH1cbiAgICB0aGlzLmluZGV4ID0gaTtcbiAgfVxuXG4gIGRyYXdQbGF0Zm9ybShjdHgpIHtcbiAgICBjdHguZmlsbFN0eWxlID0gXCJraGFraVwiLFxuICAgIGN0eC5maWxsUmVjdCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIC8vIGN0eC5maWxsU3R5bGUgPSBcIlNhZGRsZUJyb3duXCIsXG4gICAgLy8gY3R4LmZpbGxSZWN0KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCA1KTtcblxuICAgIC8vIGN0eC5maWxsU3R5bGUgPSBcInBpbmtcIjtcbiAgICAvLyBjdHguZmlsbFJlY3QodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICBcbiAgICAvLyBwcmludGluZyBwbGF0Zm9ybSBpbmRleC9rZXkgJiBjb29yZGluYXRlc1xuICAgIGN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7IFxuICAgIGN0eC5mb250ID1cIjE0cHggc2VyaWZcIjtcbiAgICBjdHguZmlsbFRleHQoYCR7dGhpcy5pbmRleH06ICR7dGhpcy5wb3NpdGlvbi54fSwgJHt0aGlzLnBvc2l0aW9uLnl9YCwgXG4gICAgICB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSszMyk7XG5cbiAgICAvLyB0ZXN0aW5nIHBsYXRmb3JtIGJvdW5kYXJpZXNcbiAgICAvLyBjdHguYmVnaW5QYXRoKCk7XG4gICAgLy8gY3R4LnN0cm9rZVN0eWxlID0gXCJibHVlXCI7XG4gICAgLy8gY3R4Lm1vdmVUbyh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSk7XG4gICAgLy8gY3R4LmxpbmVUbyh0aGlzLnBvc2l0aW9uLngsIDApO1xuICAgIC8vIGN0eC5tb3ZlVG8odGhpcy5wb3NpdGlvbi54K3RoaXMud2lkdGgsIHRoaXMucG9zaXRpb24ueSk7XG4gICAgLy8gY3R4LmxpbmVUbyh0aGlzLnBvc2l0aW9uLngrdGhpcy53aWR0aCwgMCk7XG4gICAgLy8gY3R4LnN0cm9rZSgpO1xuICB9IFxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF0Zm9ybTtcblxuIiwiZXhwb3J0IGNvbnN0IGZpbm5SaWdodCA9IG5ldyBJbWFnZSgpO1xuZmlublJpZ2h0LnNyYyA9ICcuL2Rpc3QvaW1hZ2VzL0Zpbm5TcHJpdGUtcmlnaHQucG5nJztcbmV4cG9ydCBjb25zdCBmaW5uTGVmdCA9IG5ldyBJbWFnZSgpO1xuZmlubkxlZnQuc3JjID0gJy4vZGlzdC9pbWFnZXMvRmlublNwcml0ZS1sZWZ0LnBuZyc7XG5leHBvcnQgY29uc3QgcGVhY2VCZyA9IG5ldyBJbWFnZSgpO1xucGVhY2VCZy5zcmMgPSAnLi9kaXN0L2ltYWdlcy9wZWFjZS1iZy5wbmcnOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbi8vIGltcG9ydCBKdW1wUXVlc3QgZnJvbSBcIi4vc2NyaXB0cy9nYW1lXCI7XG5pbXBvcnQgQ2hhcmFjdGVyIGZyb20gXCIuL3NjcmlwdHMvY2hhcmFjdGVyXCI7XG5pbXBvcnQgQ29udHJvbGxlciBmcm9tIFwiLi9zY3JpcHRzL2NvbnRyb2xsZXJcIjtcbmltcG9ydCBCYWNrZ3JvdW5kIGZyb20gXCIuL3NjcmlwdHMvYmFja2dyb3VuZFwiO1xuaW1wb3J0IFBsYXRmb3JtIGZyb20gXCIuL3NjcmlwdHMvcGxhdGZvcm1cIjtcbmltcG9ydCBPYnN0YWNsZSBmcm9tIFwiLi9zY3JpcHRzL29ic3RhY2xlXCI7XG5jb25zb2xlLmxvZyhcIndlYnBhY2sgaXMgd29ya2luZyBwcm9wZXJseVwiKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBsZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqdW1wLXF1ZXN0XCIpO1xuICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgY29uc3QgR0FNRV9XSURUSCA9IGNhbnZhcy53aWR0aDsgLy8gMTAwMFxuICBjb25zdCBHQU1FX0hFSUdIVCA9IGNhbnZhcy5oZWlnaHQ7IC8vIDgwMFxuXG4gIGxldCBjaGFyID0gbmV3IENoYXJhY3RlcihHQU1FX1dJRFRILCBHQU1FX0hFSUdIVCk7XG4gIG5ldyBDb250cm9sbGVyKGNoYXIpXG4gIGxldCBiZyA9IG5ldyBCYWNrZ3JvdW5kKEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hUKTtcbiAgbGV0IGZyYW1lcyA9IDA7XG4gIGxldCBvYnN0YWNsZXMgPSB7fTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBldmVudCA9PiB7XG4gICAgc3dpdGNoKGV2ZW50LmNvZGUpIHtcbiAgICAgIGNhc2UgJ0VudGVyJzpcbiAgICAgICAgc3RhcnRHYW1lKCk7XG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm47XG4gICAgfVxuICB9KVxuICAgIFxuICBmdW5jdGlvbiBzdGFydEdhbWUoKSB7XG4gICAgZ2FtZUxvb3AoKTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2FtZUxvb3AoKSB7XG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBHQU1FX1dJRFRILCBHQU1FX0hFSUdIVCk7XG4gICAgYmcuZHJhd0JhY2tncm91bmQoY3R4KTtcbiAgICBkcmF3UGxhdGZvcm1zKCk7XG4gICAgdXBkYXRlT2JzdGFjbGVzKCk7XG4gICAgZHJhd09ic3RhY2xlcygpO1xuICAgIC8vIHdyaXRlIGFsZ29yaXRobSB0byBvbmx5IHBhc3MgaW4gcGxhdGZvcm1zICYgb2JzdGFjbGVzIGluIGN1cnJlbnQgdnBcbiAgICBjaGFyLnVwZGF0ZShPYmplY3QudmFsdWVzKHBsYXRmb3JtcyksIE9iamVjdC52YWx1ZXMob2JzdGFjbGVzKSk7XG4gICAgY2hhci5kcmF3Q2hhcihjdHgsIGZyYW1lcyk7XG5cbiAgICBpZiAoZnJhbWVzID49IDYwKSB7XG4gICAgICBmcmFtZXMgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBmcmFtZXMrKztcbiAgICB9XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xuICB9XG5cbiAgLy8gcGxhdGZvcm0gPSBbcG9zWCwgcG9zWSwgd2lkdGhdXG4gIGxldCBwbGF0Zm9ybXMgPSB7XG4gICAgMDogWzE1MCwgNzQwLCAxMDBdLFxuICAgIDE6IFszMDAsIDcwMCwgMTAwXSxcbiAgICAyOiBbNDUwLCA2NjAsIDEwMF0sXG4gICAgMzogWzYwMCwgNjIwLCAxMDBdLFxuICAgIDQ6IFs3NTAsIDU4MCwgMTAwXSxcbiAgICA1OiBbODUwLCA1NDAsIDUwXSxcbiAgICA2OiBbODAwLCA1MDAsIDUwXSxcbiAgICA3OiBbNzUwLCA0NjAsIDUwXSxcbiAgICA4OiBbNzAwLCA0MjAsIDUwXSxcbiAgICA5OiBbNjUwLCA0NjAsIDUwXSxcbiAgICAxMDogWzYwMCwgNTEwLCA1MF0sXG4gICAgMTE6IFs1NTAsIDQ2MCwgNTBdLFxuICAgIDEyOiBbNTAwLCA0MjAsIDUwXSxcbiAgICAxMzogWzQ1MCwgNDYwLCA1MF0sXG4gICAgMTQ6IFs0MDAsIDUxMCwgNTBdLFxuICAgIDE1OiBbMzUwLCA0NjAsIDUwXSxcbiAgICAxNjogWzMwMCwgNDIwLCA1MF0sXG4gICAgMTc6IFsyNTAsIDQ2MCwgNTBdLFxuICAgIDE4OiBbMjAwLCA1MTAsIDUwXSxcbiAgICAxOTogWzE1MCwgNDYwLCA1MF0sXG4gICAgMjA6IFsxMDAsIDQyMCwgNTBdLFxuICAgIDIxOiBbNTAsIDM4MCwgNTBdLFxuICAgIDIyOiBbMTAwLCAzNDAsIDUwXSxcbiAgICAyMzogWzIwMCwgMzAwLCAxMDBdLFxuICAgIDI0OiBbMzUwLCAzMDAsIDEwMF0sXG4gICAgMjU6IFs1MDAsIDMwMCwgMTAwXSxcbiAgICAyNjogWzY1MCwgMzAwLCAxMDBdLFxuICAgIC8vIDI2OiBbNjAwLCAyOTAsIDUwXSxcbiAgICAyNzogWzgwMCwgMjUwLCA1MF0sXG4gICAgMjg6IFs4NTAsIDIxMCwgNTBdLFxuXG4gIH07XG4gIFxuICBmdW5jdGlvbiBkcmF3UGxhdGZvcm1zKCkge1xuICAgIE9iamVjdC52YWx1ZXMocGxhdGZvcm1zKS5mb3JFYWNoKChwbGF0Zm9ybSwgaSkgPT4ge1xuICAgICAgbGV0IHAgPSBuZXcgUGxhdGZvcm0oLi4ucGxhdGZvcm0sIGkpO1xuICAgICAgcC5kcmF3UGxhdGZvcm0oY3R4KTtcbiAgICB9KVxuICB9O1xuXG4gIC8vIG9ic3RhY2xlID0gW3Bvc1gsIHBvc1ksIHJhZGl1cywgb3JpZW50YXRpb24sIHRyYXZlbExlbmd0aCwgY29sb3IsIHNwZWVkXVxuICBsZXQgbmV3T2JzdGFjbGVzID0ge1xuICAgIDE6IFs3NTAsIDU3MCwgNSwgXCJob3Jpem9udGFsXCIsIDEwMCwgXCJ2aW9sZXRcIiwgMC4xXSxcbiAgICAyOiBbNjI1LCA0NTAsIDUsIFwiaG9yaXpvbnRhbFwiLCAyMDAsIFwiZm9yZXN0Z3JlZW5cIiwgMC4zXSxcbiAgICAzOiBbMjI1LCA0NTAsIDUsIFwiaG9yaXpvbnRhbFwiLCAyMDAsIFwiZm9yZXN0Z3JlZW5cIiwgMC4zXSxcbiAgICA0OiBbNTI1LCAzNTAsIDUsIFwidmVydGljYWxcIiwgMTUwLCBcInNreWJsdWVcIiwgMC4zXSxcbiAgICA1OiBbNzUsIDMwMCwgNSwgXCJ2ZXJ0aWNhbFwiLCAxNTAsIFwic2t5Ymx1ZVwiLCAwLjNdLFxuICAgIDY6IFszMjUsIDI2MCwgMTAsIFwidmVydGljYWxcIiwgMTAwLCBcImNyaW1zb25cIiwgMC4zXSxcbiAgICA3OiBbNjI1LCAyNjAsIDEwLCBcInZlcnRpY2FsXCIsIDEwMCwgXCJjcmltc29uXCIsIDAuM10sXG4gICAgODogWzM1MCwgMjYwLCAxMCwgXCJob3Jpem9udGFsXCIsIDI1MCwgXCJpbmRpZ29cIiwgMC4zNzVdLFxuICB9XG5cbiAgY3JlYXRlT2JzdGFjbGVzKCk7XG4gIFxuICBmdW5jdGlvbiBjcmVhdGVPYnN0YWNsZXMoKSB7XG4gICAgT2JqZWN0LnZhbHVlcyhuZXdPYnN0YWNsZXMpLmZvckVhY2goKG9ic3RhY2xlLCBpKSA9PiB7XG4gICAgICBvYnN0YWNsZXNbaV0gPSBuZXcgT2JzdGFjbGUoLi4ub2JzdGFjbGUpOztcbiAgICB9KVxuICB9O1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZU9ic3RhY2xlcygpIHtcbiAgICBPYmplY3QudmFsdWVzKG9ic3RhY2xlcykuZm9yRWFjaChvYnN0YWNsZSA9PiB7XG4gICAgICBvYnN0YWNsZS51cGRhdGUoKTtcbiAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBkcmF3T2JzdGFjbGVzKCkge1xuICAgIE9iamVjdC52YWx1ZXMob2JzdGFjbGVzKS5mb3JFYWNoKG9ic3RhY2xlID0+IHtcbiAgICAgIG9ic3RhY2xlLmRyYXdPYnN0YWNsZShjdHgpO1xuICAgIH0pO1xuICB9O1xuXG59KSJdLCJzb3VyY2VSb290IjoiIn0=