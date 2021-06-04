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
  function Background(gameWidth, gameHeight) {
    _classCallCheck(this, Background);

    this.width = gameWidth;
    this.height = gameHeight;
  }

  _createClass(Background, [{
    key: "drawBackground",
    value: function drawBackground(ctx) {
      // ctx.fillStyle = "grey";
      // ctx.fillRect(0, 0, this.width, this.height - 20);
      // ctx.fill();
      // ctx.drawImage(snowyBg, 0, 0, 1000, 800, 0, this.height-800, 1000, 800);
      // ctx.fillStyle = "DimGrey";
      // ctx.fillRect(0, this.height - 20, this.width, this.height);
      // ctx.fill();
      ctx.drawImage(_util__WEBPACK_IMPORTED_MODULE_0__.peaceBg, 0, 0, 500, 2000, 0, 0, 1000, 4000);
      ctx.fillStyle = "peru";
      ctx.fillRect(0, this.height - 20, this.width, this.height);
      ctx.fill(); // ctx.drawImage(mountainBg, 0, 0, 1000, 2000, 0, 0, 1000, 4000);
      // ctx.fillStyle = "peru";
      // ctx.fillRect(0, this.height - 20, this.width, this.height);
      // ctx.fill();
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
    this.isColliding = false;
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
      if (this.position.y >= 3750) {
        ctx.fillStyle = "SaddleBrown";
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
      } else {
        ctx.fillStyle = "gold", ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
      } // ctx.fill();
      // ctx.fillStyle = "snow";
      // ctx.fillRect(this.position.x, this.position.y, this.width/2, 6);
      // ctx.fillRect(this.position.x + this.width/2, this.position.y, this.width/2, 5);
      // ctx.fill();
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
/* harmony export */   "snowyBg": function() { return /* binding */ snowyBg; },
/* harmony export */   "peaceBg": function() { return /* binding */ peaceBg; },
/* harmony export */   "mountainBg": function() { return /* binding */ mountainBg; }
/* harmony export */ });
var finnRight = new Image();
finnRight.src = './dist/images/FinnSprite-right.png';
var finnLeft = new Image();
finnLeft.src = './dist/images/FinnSprite-left.png';
var snowyBg = new Image();
snowyBg.src = './dist/images/snowy-bg.png';
var peaceBg = new Image();
peaceBg.src = './dist/images/peaceful-bg.png';
var mountainBg = new Image();
mountainBg.src = './dist/images/mountain-bg.png';

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
    1: [200, 3910, 100],
    2: [350, 3870, 100],
    3: [500, 3830, 100],
    4: [650, 3790, 100],
    5: [800, 3750, 100],
    6: [700, 3710, 50],
    7: [600, 3670, 50],
    8: [500, 3630, 50],
    9: [400, 3590, 50],
    10: [300, 3550, 50],
    11: [200, 3500, 50],
    12: [100, 3450, 50],
    13: [200, 3400, 50],
    14: [100, 3350, 50],
    15: [200, 3300, 50],
    16: [100, 3250, 50]
  };

  function drawPlatforms() {
    Object.values(platforms).forEach(function (platform, i) {
      var p = _construct(_scripts_platform__WEBPACK_IMPORTED_MODULE_4__.default, _toConsumableArray(platform).concat([i]));

      p.drawPlatform(ctx);
    });
  }

  ; // obstacle = [posX, posY, radius, orientation, travelLength, color, speed]

  var newObstacles = {
    1: [800, 3740, 5, "horizontal", 100, "gold", .1],
    2: [225, 3250, 10, "vertical", 300, "crimson", 0.5],
    3: [500, 3400, 20, "horizontal", 300, "LimeGreen", 1.0]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qdW1wcXVlc3QvLi9zcmMvc2NyaXB0cy9iYWNrZ3JvdW5kLmpzIiwid2VicGFjazovL2p1bXBxdWVzdC8uL3NyYy9zY3JpcHRzL2NoYXJhY3Rlci5qcyIsIndlYnBhY2s6Ly9qdW1wcXVlc3QvLi9zcmMvc2NyaXB0cy9jb250cm9sbGVyLmpzIiwid2VicGFjazovL2p1bXBxdWVzdC8uL3NyYy9zY3JpcHRzL29ic3RhY2xlLmpzIiwid2VicGFjazovL2p1bXBxdWVzdC8uL3NyYy9zY3JpcHRzL3BsYXRmb3JtLmpzIiwid2VicGFjazovL2p1bXBxdWVzdC8uL3NyYy9zY3JpcHRzL3V0aWwuanMiLCJ3ZWJwYWNrOi8vanVtcHF1ZXN0Ly4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIiwid2VicGFjazovL2p1bXBxdWVzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qdW1wcXVlc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2p1bXBxdWVzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2p1bXBxdWVzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2p1bXBxdWVzdC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJCYWNrZ3JvdW5kIiwiZ2FtZVdpZHRoIiwiZ2FtZUhlaWdodCIsIndpZHRoIiwiaGVpZ2h0IiwiY3R4IiwiZHJhd0ltYWdlIiwicGVhY2VCZyIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiZmlsbCIsImRyYXdCYWNrZ3JvdW5kIiwiQ2hhcmFjdGVyIiwiZGlyZWN0aW9uIiwibW92ZVNwZWVkIiwianVtcEhlaWdodCIsImNyb3VjaGluZyIsImp1bXBpbmciLCJmYWxsaW5nIiwiaXNDb2xsaWRpbmciLCJwb3NpdGlvbiIsIngiLCJ5IiwidmVsb2NpdHkiLCJjb25zdGFudHMiLCJncmF2aXR5IiwiZnJpY3Rpb24iLCJrZXlzIiwiZnJhbWVzIiwiZmlubkxlZnQiLCJtb3ZpbmciLCJmaW5uUmlnaHQiLCJwbGF0Zm9ybXMiLCJvYnN0YWNsZXMiLCJpIiwibGVuZ3RoIiwicGxhdGZvcm0iLCJvblBsYXRmb3JtIiwib2JzdGFjbGUiLCJjb2xsaXNpb25EZXRlY3Rpb24iLCJvcmllbnRhdGlvbiIsImNoYXJQb3MiLCJvIiwiciIsInJhZGl1cyIsImMiLCJ3IiwiaCIsImRpc3RYIiwiTWF0aCIsImFicyIsImRpc3RZIiwiZHgiLCJkeSIsInBvdyIsIkNvbnRyb2xsZXIiLCJjaGFyIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJjb2RlIiwidXBkYXRlS2V5cyIsImNyb3VjaCIsImNvbGxpZGluZyIsImp1bXAiLCJzdG9wIiwidW5jcm91Y2giLCJPYnN0YWNsZSIsInBvc1giLCJwb3NZIiwidHJhdmVsTGVuZ3RoIiwiY29sb3IiLCJzcGVlZCIsImluaXRQb3MiLCJ0cmF2ZWxMZW4iLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJhcmMiLCJQSSIsInN0cm9rZSIsIlBsYXRmb3JtIiwiaW5kZXgiLCJmb250IiwiZmlsbFRleHQiLCJJbWFnZSIsInNyYyIsInNub3d5QmciLCJtb3VudGFpbkJnIiwiY29uc29sZSIsImxvZyIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwiZ2V0Q29udGV4dCIsIkdBTUVfV0lEVEgiLCJHQU1FX0hFSUdIVCIsImJnIiwic3RhcnRHYW1lIiwiZ2FtZUxvb3AiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjbGVhclJlY3QiLCJkcmF3UGxhdGZvcm1zIiwidXBkYXRlT2JzdGFjbGVzIiwiZHJhd09ic3RhY2xlcyIsInVwZGF0ZSIsIk9iamVjdCIsInZhbHVlcyIsImRyYXdDaGFyIiwiZm9yRWFjaCIsInAiLCJkcmF3UGxhdGZvcm0iLCJuZXdPYnN0YWNsZXMiLCJjcmVhdGVPYnN0YWNsZXMiLCJkcmF3T2JzdGFjbGUiXSwibWFwcGluZ3MiOiI7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RUFBOEIsR0FBOUIsRUFBbUMsV0FBbkMsRUFBZ0QsR0FBaEQ7QUFIYyxHQUFuQjtBQU1BQyxpQkFBZTs7QUFFZixXQUFTQSxlQUFULEdBQTJCO0FBQ3pCUCxVQUFNLENBQUNDLE1BQVAsQ0FBY0ssWUFBZCxFQUE0QkgsT0FBNUIsQ0FBb0MsVUFBQ3JFLFFBQUQsRUFBV0osQ0FBWCxFQUFpQjtBQUNuREQsZUFBUyxDQUFDQyxDQUFELENBQVQsY0FBbUJpQyxzREFBbkIscUJBQStCN0IsUUFBL0I7QUFBeUM7QUFDMUMsS0FGRDtBQUdEOztBQUFBOztBQUVELFdBQVMrRCxlQUFULEdBQTJCO0FBQ3pCRyxVQUFNLENBQUNDLE1BQVAsQ0FBY3hFLFNBQWQsRUFBeUIwRSxPQUF6QixDQUFpQyxVQUFBckUsUUFBUSxFQUFJO0FBQzNDQSxjQUFRLENBQUNpRSxNQUFUO0FBQ0QsS0FGRDtBQUdEOztBQUFBOztBQUVELFdBQVNELGFBQVQsR0FBeUI7QUFDdkJFLFVBQU0sQ0FBQ0MsTUFBUCxDQUFjeEUsU0FBZCxFQUF5QjBFLE9BQXpCLENBQWlDLFVBQUFyRSxRQUFRLEVBQUk7QUFDM0NBLGNBQVEsQ0FBQzBFLFlBQVQsQ0FBc0IzRyxHQUF0QjtBQUNELEtBRkQ7QUFHRDs7QUFBQTtBQUVGLENBcEdELEUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNub3d5QmcsIHBlYWNlQmcsIG1vdW50YWluQmcgfSBmcm9tICcuL3V0aWwnO1xuXG5jbGFzcyBCYWNrZ3JvdW5kIHtcbiAgY29uc3RydWN0b3IoZ2FtZVdpZHRoLCBnYW1lSGVpZ2h0KSB7XG4gICAgdGhpcy53aWR0aCA9IGdhbWVXaWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IGdhbWVIZWlnaHQ7XG4gIH1cblxuICBkcmF3QmFja2dyb3VuZChjdHgpIHtcbiAgICAvLyBjdHguZmlsbFN0eWxlID0gXCJncmV5XCI7XG4gICAgLy8gY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0IC0gMjApO1xuICAgIC8vIGN0eC5maWxsKCk7XG4gICAgLy8gY3R4LmRyYXdJbWFnZShzbm93eUJnLCAwLCAwLCAxMDAwLCA4MDAsIDAsIHRoaXMuaGVpZ2h0LTgwMCwgMTAwMCwgODAwKTtcbiAgICAvLyBjdHguZmlsbFN0eWxlID0gXCJEaW1HcmV5XCI7XG4gICAgLy8gY3R4LmZpbGxSZWN0KDAsIHRoaXMuaGVpZ2h0IC0gMjAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAvLyBjdHguZmlsbCgpO1xuICAgIGN0eC5kcmF3SW1hZ2UocGVhY2VCZywgMCwgMCwgNTAwLCAyMDAwLCAwLCAwLCAxMDAwLCA0MDAwKTtcbiAgICBjdHguZmlsbFN0eWxlID0gXCJwZXJ1XCI7XG4gICAgY3R4LmZpbGxSZWN0KDAsIHRoaXMuaGVpZ2h0IC0gMjAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICBjdHguZmlsbCgpO1xuICAgIC8vIGN0eC5kcmF3SW1hZ2UobW91bnRhaW5CZywgMCwgMCwgMTAwMCwgMjAwMCwgMCwgMCwgMTAwMCwgNDAwMCk7XG4gICAgLy8gY3R4LmZpbGxTdHlsZSA9IFwicGVydVwiO1xuICAgIC8vIGN0eC5maWxsUmVjdCgwLCB0aGlzLmhlaWdodCAtIDIwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgLy8gY3R4LmZpbGwoKTtcbiAgfVxuXG4gIGFuaW1hdGUoY3R4KSB7XG4gICAgdGhpcy5kcmF3QmFja2dyb3VuZChjdHgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhY2tncm91bmQ7IiwiaW1wb3J0IHsgZmlublJpZ2h0LCBmaW5uTGVmdCB9IGZyb20gJy4vdXRpbCc7XG5cbmNsYXNzIENoYXJhY3RlciB7XG4gIGNvbnN0cnVjdG9yKGdhbWVXaWR0aCwgZ2FtZUhlaWdodCkge1xuICAgIHRoaXMuZ2FtZVdpZHRoID0gZ2FtZVdpZHRoO1xuICAgIHRoaXMuZ2FtZUhlaWdodCA9IGdhbWVIZWlnaHQ7XG4gICAgdGhpcy53aWR0aCA9IDY0O1xuICAgIHRoaXMuaGVpZ2h0ID0gNDA7XG4gICAgdGhpcy5kaXJlY3Rpb24gPSBcInJpZ2h0XCI7XG4gICAgdGhpcy5tb3ZlU3BlZWQgPSAuNzU7XG4gICAgdGhpcy5qdW1wSGVpZ2h0ID0gLTEwO1xuICAgIHRoaXMuY3JvdWNoaW5nID0gZmFsc2U7XG4gICAgdGhpcy5qdW1waW5nID0gZmFsc2U7XG4gICAgdGhpcy5mYWxsaW5nID0gZmFsc2U7XG4gICAgdGhpcy5pc0NvbGxpZGluZyA9IGZhbHNlO1xuICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICB4OiAxMDAsXG4gICAgICB5OiB0aGlzLmdhbWVIZWlnaHQgLSB0aGlzLmhlaWdodCAtIDIwLFxuICAgIH07XG4gICAgdGhpcy52ZWxvY2l0eSA9IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwLFxuICAgIH07XG4gICAgdGhpcy5jb25zdGFudHMgPSB7XG4gICAgICBncmF2aXR5OiAwLjE1LFxuICAgICAgZnJpY3Rpb246IDAuOSxcbiAgICB9O1xuICAgIHRoaXMua2V5cyA9IHt9O1xuICB9XG5cbiAgZHJhd0NoYXIoY3R4LCBmcmFtZXMpIHtcbiAgICAvLyB0ZXN0aW5nIGNoYXJhY3RlciBib3VuZGFyaWVzXG4gICAgLy8gY3R4LnN0cm9rZVN0eWxlID0gXCJncmVlblwiO1xuICAgIC8vIGN0eC5tb3ZlVG8odGhpcy5wb3NpdGlvbi54KzIwLCB0aGlzLnBvc2l0aW9uLnkpO1xuICAgIC8vIGN0eC5saW5lVG8odGhpcy5wb3NpdGlvbi54KzIwLCAwKTtcbiAgICAvLyBjdHgubW92ZVRvKHRoaXMucG9zaXRpb24ueCt0aGlzLndpZHRoLTMwLCB0aGlzLnBvc2l0aW9uLnkpO1xuICAgIC8vIGN0eC5saW5lVG8odGhpcy5wb3NpdGlvbi54K3RoaXMud2lkdGgtMzAsIDApO1xuICAgIC8vIGN0eC5zdHJva2UoKTtcblxuICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PSAnbGVmdCcpIHtcbiAgICAgIGlmICh0aGlzLmlzQ29sbGlkaW5nKSB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoZmlubkxlZnQsIDM1MiwgMCwgMzIsIDIwLCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmp1bXBpbmcgfHwgdGhpcy5mYWxsaW5nKSB7IFxuICAgICAgICBjdHguZHJhd0ltYWdlKGZpbm5MZWZ0LCA0NDgsIDAsIDMyLCAyMCwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5tb3ZpbmcpIHtcbiAgICAgICAgaWYgKGZyYW1lcyA8IDIwKSB7XG4gICAgICAgICAgY3R4LmRyYXdJbWFnZShmaW5uTGVmdCwgNTQ0LCAwLCAzMiwgMjAsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZnJhbWVzID4gMjAgJiYgZnJhbWVzIDwgNDApIHsgXG4gICAgICAgICAgY3R4LmRyYXdJbWFnZShmaW5uTGVmdCwgNTEyLCAwLCAzMiwgMjAsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY3R4LmRyYXdJbWFnZShmaW5uTGVmdCwgNDgwLCAwLCAzMiwgMjAsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZnJhbWVzIDwgNDApIHtcbiAgICAgICAgICBjdHguZHJhd0ltYWdlKGZpbm5MZWZ0LCA4NjQsIDAsIDMyLCAyMCwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjdHguZHJhd0ltYWdlKGZpbm5MZWZ0LCA4MDAsIDAsIDMyLCAyMCwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgfTtcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmICh0aGlzLmRpcmVjdGlvbiA9PSAncmlnaHQnKSB7XG4gICAgICBpZiAodGhpcy5pc0NvbGxpZGluZykgeyBcbiAgICAgICAgY3R4LmRyYXdJbWFnZShmaW5uUmlnaHQsIDUxMiwgMCwgMzIsIDIwLCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmp1bXBpbmcgfHwgdGhpcy5mYWxsaW5nKSB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoZmlublJpZ2h0LCA0ODAsIDAsIDMyLCAyMCwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5tb3ZpbmcpIHtcbiAgICAgICAgaWYgKGZyYW1lcyA8IDIwKSB7XG4gICAgICAgICAgY3R4LmRyYXdJbWFnZShmaW5uUmlnaHQsIDMyMCwgMCwgMzIsIDIwLCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB9IGVsc2UgaWYgKGZyYW1lcyA+IDIwICYmIGZyYW1lcyA8IDQwKSB7IFxuICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoZmlublJpZ2h0LCAzODQsIDAsIDMyLCAyMCwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjdHguZHJhd0ltYWdlKGZpbm5SaWdodCwgNDE2LCAwLCAzMiwgMjAsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZnJhbWVzIDwgNDApIHtcbiAgICAgICAgICBjdHguZHJhd0ltYWdlKGZpbm5SaWdodCwgMCwgMCwgMzIsIDIwLCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoZmlublJpZ2h0LCA2NCwgMCwgMzIsIDIwLCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlS2V5cyhrZXlzKSB7XG4gICAgdGhpcy5rZXlzID0ga2V5cztcbiAgfVxuXG4gIHN0b3AoKSB7XG4gICAgdGhpcy52ZWxvY2l0eS54ID0gMDtcbiAgICB0aGlzLnZlbG9jaXR5LnkgPSAwO1xuICB9XG5cbiAganVtcCgpIHtcbiAgICBpZiAodGhpcy5qdW1waW5nKSB7XG4gICAgICB0aGlzLnZlbG9jaXR5LnkgPSB0aGlzLmp1bXBIZWlnaHRcbiAgICB9XG4gIH1cblxuICBjcm91Y2goKSB7XG4gICAgdGhpcy5oZWlnaHQgPSAyMDtcbiAgfVxuXG4gIHVuY3JvdWNoKCkge1xuICAgIHRoaXMuaGVpZ2h0ID0gNDA7XG4gICAgdGhpcy52ZWxvY2l0eS55ID0gLTU7XG4gIH1cblxuICB1cGRhdGUocGxhdGZvcm1zLCBvYnN0YWNsZXMpIHtcbiAgICAvLyBjaGVjayBjdXJyZW50IGtleSBwcmVzc2VzXG4gICAgaWYgKHRoaXMua2V5c1snQXJyb3dMZWZ0J10pIHtcbiAgICAgIHRoaXMudmVsb2NpdHkueCA9IC10aGlzLm1vdmVTcGVlZDtcbiAgICB9IGVsc2UgaWYgKHRoaXMua2V5c1snQXJyb3dSaWdodCddKSB7XG4gICAgICB0aGlzLnZlbG9jaXR5LnggPSB0aGlzLm1vdmVTcGVlZDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tb3ZpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBjaGFyIG1vdmVtZW50c1xuICAgIHRoaXMucG9zaXRpb24ueSArPSB0aGlzLnZlbG9jaXR5Lnk7XG4gICAgdGhpcy5wb3NpdGlvbi54ICs9IHRoaXMudmVsb2NpdHkueDtcbiAgICB0aGlzLnZlbG9jaXR5LnkgKz0gdGhpcy5jb25zdGFudHMuZ3Jhdml0eTtcbiAgICB0aGlzLnZlbG9jaXR5LnggKj0gdGhpcy5jb25zdGFudHMuZnJpY3Rpb247XG4gICAgdGhpcy52ZWxvY2l0eS55ICo9IHRoaXMuY29uc3RhbnRzLmZyaWN0aW9uO1xuXG4gICAgLy8gaWYgY2hhciBpcyBnb2luZyBvZmYgc2NyZWVuLCBzdG9wIGF0IGVkZ2Ugb2Ygc2NyZWVuXG4gICAgaWYgKHRoaXMucG9zaXRpb24ueCA8PSAwKSB7XG4gICAgICB0aGlzLnBvc2l0aW9uLnggPSAwO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wb3NpdGlvbi54ID49IHRoaXMuZ2FtZVdpZHRoIC0gdGhpcy53aWR0aCkge1xuICAgICAgdGhpcy5wb3NpdGlvbi54ID0gdGhpcy5nYW1lV2lkdGggLSB0aGlzLndpZHRoO1xuICAgIH1cblxuICAgIC8vICoqV3JpdGUgY29kZSB0byBmaWx0ZXIgb3V0IHBsYXRmb3JtcyBOT1QgaW4gY3VycmVudCB2aWV3IGZyYW1lKipcbiAgICAvLyBjaGVjayBpZiBjaGFyIGlzIHN0YW5kaW5nIG9uIGFueSBwbGF0Zm9ybVxuICAgIC8vIGVsc2UgY2hlY2sgaWYgY2hhciBpcyBmYWxsaW5nIGJlbG93IGZsb29yIGxpbmVcbiAgICAvLyBlbHNlIGNoYXIgaXMgY3VycmVudGx5IGZhbGxpbmdcbiAgICBmb3IgKGxldCBpPTA7IGk8cGxhdGZvcm1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgcGxhdGZvcm0gPSBwbGF0Zm9ybXNbaV07XG4gICAgICBpZiAodGhpcy5vblBsYXRmb3JtKHRoaXMucG9zaXRpb24sIHBsYXRmb3JtKSkge1xuICAgICAgICB0aGlzLmZhbGxpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5qdW1waW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueSA9IHBsYXRmb3JtWzFdLXRoaXMuaGVpZ2h0O1xuICAgICAgICB0aGlzLnZlbG9jaXR5LnkgPSAwO1xuICAgICAgICBicmVhaztcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5wb3NpdGlvbi55ID49IHRoaXMuZ2FtZUhlaWdodC10aGlzLmhlaWdodC0yMCkge1xuICAgICAgICB0aGlzLmp1bXBpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5mYWxsaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueSA9IHRoaXMuZ2FtZUhlaWdodCAtIHRoaXMuaGVpZ2h0IC0gMjA7XG4gICAgICAgIHRoaXMudmVsb2NpdHkueSA9IDA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5mYWxsaW5nID0gdHJ1ZTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gKipXcml0ZSBjb2RlIHRvIGZpbHRlciBvdXQgb2JzdGFjbGVzIE5PVCBpbiBjdXJyZW50IHZpZXcgZnJhbWUqKlxuICAgIGZvciAobGV0IGk9MDsgaTxvYnN0YWNsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBvYnN0YWNsZSA9IG9ic3RhY2xlc1tpXTtcbiAgICAgIGlmICh0aGlzLmNvbGxpc2lvbkRldGVjdGlvbihvYnN0YWNsZSkpIHtcbiAgICAgICAgdGhpcy5pc0NvbGxpZGluZyA9IHRydWU7XG4gICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge3RoaXMuY29sbGlkaW5nID0gZmFsc2V9LCAxMDAwKTtcblxuICAgICAgICBpZiAob2JzdGFjbGUub3JpZW50YXRpb24gPT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PSAnbGVmdCcpIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCArPSAxNTtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSArPSAxO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggLT0gMTU7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnkgKz0gMTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKG9ic3RhY2xlLmRpcmVjdGlvbiA9PSBcIlJEXCIpIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCArPSAyMDtcbiAgICAgICAgICB9IGVsc2UgaWYgKG9ic3RhY2xlLmRpcmVjdGlvbiA9PSBcIkxVXCIpIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCAtPSAyMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmlzQ29sbGlkaW5nID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gIH07XG5cbiAgb25QbGF0Zm9ybShjaGFyUG9zLCBwbGF0Zm9ybSkge1xuICAgIC8vIGNoYXJQb3MgPSB7XG4gICAgLy8gICB4OiBjaGFyUG9zWCxcbiAgICAvLyAgIHk6IGNoYXJQb3NZLFxuICAgIC8vIH1cbiAgICAvLyBwbGF0Zm9ybSA9IFtwb3NYLCBwb3NZLCB3aWR0aF1cbiAgICBpZiAodGhpcy5jcm91Y2hpbmcpIHtcbiAgICAgIGlmICgoKGNoYXJQb3MueCArIHRoaXMud2lkdGggLTE1KSA+PSBwbGF0Zm9ybVswXSkgJiZcbiAgICAgICgoY2hhclBvcy54KzE1KSA8PSAocGxhdGZvcm1bMF0rcGxhdGZvcm1bMl0pKSAmJlxuICAgICAgKChjaGFyUG9zLnkgKyAyMCkgPD0gcGxhdGZvcm1bMV0pICYmXG4gICAgICAoKGNoYXJQb3MueSArIDIwKSA+PSBwbGF0Zm9ybVsxXS0yKSl7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICgoKGNoYXJQb3MueCArIHRoaXMud2lkdGggLTE1KSA+PSBwbGF0Zm9ybVswXSkgJiZcbiAgICAgICgoY2hhclBvcy54KzE1KSA8PSAocGxhdGZvcm1bMF0rcGxhdGZvcm1bMl0pKSAmJlxuICAgICAgKChjaGFyUG9zLnkgKyA0MCkgPD0gcGxhdGZvcm1bMV0pICYmXG4gICAgICAoKGNoYXJQb3MueSArIDQwKSA+PSBwbGF0Zm9ybVsxXS0yKSl7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH07XG4gICAgfTtcbiAgfVxuXG4gIC8vIHJldHVybiB0cnVlIGlmIGFuIG9ic3RhY2xlIGNvbGxpZGVzIHdpdGggdXNlclxuICBjb2xsaXNpb25EZXRlY3Rpb24ob2JzdGFjbGUpIHtcbiAgICBsZXQgbyA9IHtcbiAgICAgIHg6IG9ic3RhY2xlLnBvc2l0aW9uLngsXG4gICAgICB5OiBvYnN0YWNsZS5wb3NpdGlvbi55LFxuICAgICAgcjogb2JzdGFjbGUucmFkaXVzXG4gICAgfTtcbiAgICBsZXQgYyA9IHtcbiAgICAgIHg6IHRoaXMucG9zaXRpb24ueCArIDIwLFxuICAgICAgeTogdGhpcy5wb3NpdGlvbi55LFxuICAgICAgdzogdGhpcy53aWR0aC0zMCxcbiAgICAgIGg6IHRoaXMuaGVpZ2h0XG4gICAgfVxuXG4gICAgLy8gZmluZCBob3Jpei92ZXJ0IGRpc3RhbmNlIGIvdyBjZW50ZXIgb2Ygb2JzdGFjbGUgJiBjaGFyYWN0ZXJcbiAgICBsZXQgZGlzdFggPSBNYXRoLmFicyhvLnggLSBjLnggLSBjLncvMik7XG4gICAgbGV0IGRpc3RZID0gTWF0aC5hYnMoby55IC0gYy55IC0gYy5oLzIpO1xuXG4gICAgLy8gcmV0dXJuIGZhbHNlIGlmIGRpc3QgaXMgZ3JlYXRlciB0aGFuIG1pbiBkaXN0IGIvdyBlZGdlcyAoeCBvciB5KVxuICAgIGlmICgoZGlzdFggPiAoYy53LzIgKyBvLnIpKSB8fCAoZGlzdFkgPiAoYy5oLzIgKyBvLnIpKSkge3JldHVybiBmYWxzZX07XG5cbiAgICAvLyByZXR1cm4gdHJ1ZSBpZiBkaXN0IGlzIDw9IGNoYXIgd2lkdGgvMlxuICAgIGlmICgoZGlzdFggPD0gKGMudy8yKSkgJiYgKGRpc3RZIDw9IChjLmgvMikpKSB7cmV0dXJuIHRydWV9O1xuXG4gICAgLy8gZHggJiBkeSA9IGRpc3QgYi93IG9ic3RhY2xlIGNlbnRlciAmIGNoYXIgZWRnZSAoeCAmIHkpXG4gICAgbGV0IGR4ID0gZGlzdFggLSBjLncgLyAyO1xuICAgIGxldCBkeSA9IGRpc3RZIC0gYy5oIC8gMjtcblxuICAgIC8vIHVzZSBweXRoYWdvcmVhbiB0aGVvcmVtIHRvIHNlZSBpZiByYWRpdXNeMiAgXG4gICAgLy8gaXMgZ3JlYXRlciB0aGFuIGh5cG90ZW51c2Ugb2YgZHheMiArIGR5XjIgXG4gICAgLy8gaWYgZ3JlYXRlciwgb2JqZWN0IGFuZCBjaGFyIGFyZSBjb2xsaWRpbmcgKHRydWUpXG4gICAgcmV0dXJuIChNYXRoLnBvdyhkeCwyKSArIE1hdGgucG93KGR5LDIpIDw9IE1hdGgucG93KG8uciwyKSk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGFyYWN0ZXI7IiwiY2xhc3MgQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKGNoYXIpIHtcbiAgICB0aGlzLmtleXMgPSB7fTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICAgIHN3aXRjaCAoZXZlbnQuY29kZSkge1xuICAgICAgICBjYXNlICdBcnJvd0xlZnQnOlxuICAgICAgICAgIHRoaXMua2V5c1tldmVudC5jb2RlXSA9IHRydWVcbiAgICAgICAgICBjaGFyLmRpcmVjdGlvbiA9IFwibGVmdFwiO1xuICAgICAgICAgIGNoYXIubW92aW5nID0gdHJ1ZTtcbiAgICAgICAgICBjaGFyLmtleXMgPSB0aGlzLmtleXM7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICAgIHRoaXMua2V5c1tldmVudC5jb2RlXSA9IHRydWVcbiAgICAgICAgICBjaGFyLmRpcmVjdGlvbiA9IFwicmlnaHRcIjtcbiAgICAgICAgICBjaGFyLm1vdmluZyA9IHRydWU7XG4gICAgICAgICAgY2hhci51cGRhdGVLZXlzKHRoaXMua2V5cyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0Fycm93RG93bic6XG4gICAgICAgICAgLy8gdGhpcy5rZXlzW2V2ZW50LmNvZGVdID0gdHJ1ZVxuICAgICAgICAgIGNoYXIuY3JvdWNoaW5nID0gdHJ1ZTtcbiAgICAgICAgICBjaGFyLmNyb3VjaCgpOyAgIFxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdTcGFjZSc6XG4gICAgICAgICAgLy8gdGhpcy5rZXlzW2V2ZW50LmNvZGVdID0gdHJ1ZVxuICAgICAgICAgIGlmICghY2hhci5qdW1waW5nICYmICFjaGFyLmZhbGxpbmcgJiYgIWNoYXIuY29sbGlkaW5nKSB7XG4gICAgICAgICAgICBjaGFyLmp1bXBpbmcgPSB0cnVlO1xuICAgICAgICAgICAgY2hhci5qdW1wKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQpID0+IHtcbiAgICAgIHN3aXRjaCAoZXZlbnQuY29kZSkge1xuICAgICAgICBjYXNlICdBcnJvd0xlZnQnOlxuICAgICAgICAgIHRoaXMua2V5c1tldmVudC5jb2RlXSA9IGZhbHNlO1xuICAgICAgICAgIGNoYXIua2V5cyA9IHRoaXMua2V5cztcbiAgICAgICAgICBjaGFyLnN0b3AoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XG4gICAgICAgICAgdGhpcy5rZXlzW2V2ZW50LmNvZGVdID0gZmFsc2U7XG4gICAgICAgICAgY2hhci5rZXlzID0gdGhpcy5rZXlzO1xuICAgICAgICAgIGNoYXIuc3RvcCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdBcnJvd0Rvd24nOlxuICAgICAgICAgIC8vIHRoaXMua2V5c1tldmVudC5jb2RlXSA9IGZhbHNlO1xuICAgICAgICAgIGNoYXIuY3JvdWNoaW5nID0gZmFsc2U7XG4gICAgICAgICAgY2hhci51bmNyb3VjaCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdTcGFjZSc6XG4gICAgICAgICAgLy8gdGhpcy5rZXlzW2V2ZW50LmNvZGVdID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250cm9sbGVyOyIsImNsYXNzIE9ic3RhY2xlIHtcbiAgY29uc3RydWN0b3IocG9zWCwgcG9zWSwgcmFkaXVzLCBvcmllbnRhdGlvbiwgdHJhdmVsTGVuZ3RoLCBjb2xvciwgc3BlZWQpIHtcbiAgICB0aGlzLmluaXRQb3MgPSB7XG4gICAgICB4OiBwb3NYLFxuICAgICAgeTogcG9zWVxuICAgIH07XG4gICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgIHg6IHBvc1gsXG4gICAgICB5OiBwb3NZXG4gICAgfTtcbiAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcbiAgICB0aGlzLm9yaWVudGF0aW9uID0gb3JpZW50YXRpb247XG4gICAgdGhpcy50cmF2ZWxMZW4gPSB0cmF2ZWxMZW5ndGhcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xuICAgIHRoaXMuZGlyZWN0aW9uID0gXCJSRFwiOyAvLyBMVSA9IGxlZnQvdXAsIFJEID0gcmlnaHQvZG93biAoZGVwLiBvbiBvcmllbnRhdGlvbilcbiAgfVxuXG4gIGRyYXdPYnN0YWNsZShjdHgpIHtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgY3R4LmFyYyh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy5yYWRpdXMsIDAsIE1hdGguUEkgKiAyLCB0cnVlKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgY3R4LmZpbGwoKTtcbiAgfSBcblxuICB1cGRhdGUoKSB7XG4gICAgLy8gc2V0IGRpcmVjdGlvbiBvYnN0YWNsZSBzaG91bGQgbW92ZSBiYXNlZCBvbiBjdXJyZW50IHBvc2l0aW9uIChSRC9MVSlcbiAgICBpZiAodGhpcy5vcmllbnRhdGlvbiA9PSBcImhvcml6b250YWxcIikge1xuICAgICAgaWYgKHRoaXMucG9zaXRpb24ueCA8PSB0aGlzLmluaXRQb3MueCkge1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IFwiUkRcIlxuICAgICAgfSBlbHNlIGlmICh0aGlzLnBvc2l0aW9uLnggPj0gdGhpcy5pbml0UG9zLnggKyB0aGlzLnRyYXZlbExlbikge1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IFwiTFVcIlxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSB0aGlzLmRpcmVjdGlvbjtcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmICh0aGlzLm9yaWVudGF0aW9uID09IFwidmVydGljYWxcIikge1xuICAgICAgaWYgKHRoaXMucG9zaXRpb24ueSA8PSB0aGlzLmluaXRQb3MueSkge1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IFwiUkRcIlxuICAgICAgfSBlbHNlIGlmICh0aGlzLnBvc2l0aW9uLnkgPj0gdGhpcy5pbml0UG9zLnkgKyB0aGlzLnRyYXZlbExlbikge1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IFwiTFVcIlxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSB0aGlzLmRpcmVjdGlvbjtcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gXCJzdGF0aWNcIikge1xuICAgICAgXG4gICAgfTtcbiAgICBcbiAgICAvLyBtb3ZlIG9ic3RhY2xlIGFjY29yZGluZyB0byBpdHMgZGlyZWN0aW9uXG4gICAgaWYgKHRoaXMub3JpZW50YXRpb24gPT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PSBcIlJEXCIpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ICs9IHRoaXMuc3BlZWRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueCAtPSB0aGlzLnNwZWVkXG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAodGhpcy5vcmllbnRhdGlvbiA9PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PSBcIlJEXCIpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55ICs9IHRoaXMuc3BlZWRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueSAtPSB0aGlzLnNwZWVkXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IE9ic3RhY2xlO1xuXG4iLCJjbGFzcyBQbGF0Zm9ybSB7XG4gIGNvbnN0cnVjdG9yKHBvc1gsIHBvc1ksIHdpZHRoLCBpKSB7XG4gICAgdGhpcy5oZWlnaHQgPSAyMDtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgIHg6IHBvc1gsXG4gICAgICB5OiBwb3NZXG4gICAgfVxuICAgIHRoaXMuaW5kZXggPSBpO1xuICB9XG5cbiAgZHJhd1BsYXRmb3JtKGN0eCkge1xuICAgIGlmICh0aGlzLnBvc2l0aW9uLnkgPj0gMzc1MCkge1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiU2FkZGxlQnJvd25cIjtcbiAgICAgIGN0eC5maWxsUmVjdCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdHguZmlsbFN0eWxlID0gXCJnb2xkXCIsXG4gICAgICBjdHguZmlsbFJlY3QodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICB9XG4gICAgLy8gY3R4LmZpbGwoKTtcbiAgICAvLyBjdHguZmlsbFN0eWxlID0gXCJzbm93XCI7XG4gICAgLy8gY3R4LmZpbGxSZWN0KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLzIsIDYpO1xuICAgIC8vIGN0eC5maWxsUmVjdCh0aGlzLnBvc2l0aW9uLnggKyB0aGlzLndpZHRoLzIsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aC8yLCA1KTtcbiAgICAvLyBjdHguZmlsbCgpO1xuXG4gICAgLy8gY3R4LmZpbGxTdHlsZSA9IFwicGlua1wiO1xuICAgIC8vIGN0eC5maWxsUmVjdCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIFxuICAgIC8vIHByaW50aW5nIHBsYXRmb3JtIGluZGV4L2tleSAmIGNvb3JkaW5hdGVzXG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjsgXG4gICAgY3R4LmZvbnQgPVwiMTRweCBzZXJpZlwiO1xuICAgIGN0eC5maWxsVGV4dChgJHt0aGlzLmluZGV4fTogJHt0aGlzLnBvc2l0aW9uLnh9LCAke3RoaXMucG9zaXRpb24ueX1gLCBcbiAgICAgIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55KzMzKTtcblxuICAgIC8vIHRlc3RpbmcgcGxhdGZvcm0gYm91bmRhcmllc1xuICAgIC8vIGN0eC5iZWdpblBhdGgoKTtcbiAgICAvLyBjdHguc3Ryb2tlU3R5bGUgPSBcImJsdWVcIjtcbiAgICAvLyBjdHgubW92ZVRvKHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55KTtcbiAgICAvLyBjdHgubGluZVRvKHRoaXMucG9zaXRpb24ueCwgMCk7XG4gICAgLy8gY3R4Lm1vdmVUbyh0aGlzLnBvc2l0aW9uLngrdGhpcy53aWR0aCwgdGhpcy5wb3NpdGlvbi55KTtcbiAgICAvLyBjdHgubGluZVRvKHRoaXMucG9zaXRpb24ueCt0aGlzLndpZHRoLCAwKTtcbiAgICAvLyBjdHguc3Ryb2tlKCk7XG4gIH0gXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXRmb3JtO1xuXG4iLCJleHBvcnQgY29uc3QgZmlublJpZ2h0ID0gbmV3IEltYWdlKCk7XG5maW5uUmlnaHQuc3JjID0gJy4vZGlzdC9pbWFnZXMvRmlublNwcml0ZS1yaWdodC5wbmcnO1xuZXhwb3J0IGNvbnN0IGZpbm5MZWZ0ID0gbmV3IEltYWdlKCk7XG5maW5uTGVmdC5zcmMgPSAnLi9kaXN0L2ltYWdlcy9GaW5uU3ByaXRlLWxlZnQucG5nJztcbmV4cG9ydCBjb25zdCBzbm93eUJnID0gbmV3IEltYWdlKCk7XG5zbm93eUJnLnNyYyA9ICcuL2Rpc3QvaW1hZ2VzL3Nub3d5LWJnLnBuZyc7XG5leHBvcnQgY29uc3QgcGVhY2VCZyA9IG5ldyBJbWFnZSgpO1xucGVhY2VCZy5zcmMgPSAnLi9kaXN0L2ltYWdlcy9wZWFjZWZ1bC1iZy5wbmcnO1xuZXhwb3J0IGNvbnN0IG1vdW50YWluQmcgPSBuZXcgSW1hZ2UoKTtcbm1vdW50YWluQmcuc3JjID0gJy4vZGlzdC9pbWFnZXMvbW91bnRhaW4tYmcucG5nJzsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG4vLyBpbXBvcnQgSnVtcFF1ZXN0IGZyb20gXCIuL3NjcmlwdHMvZ2FtZVwiO1xuaW1wb3J0IENoYXJhY3RlciBmcm9tIFwiLi9zY3JpcHRzL2NoYXJhY3RlclwiO1xuaW1wb3J0IENvbnRyb2xsZXIgZnJvbSBcIi4vc2NyaXB0cy9jb250cm9sbGVyXCI7XG5pbXBvcnQgQmFja2dyb3VuZCBmcm9tIFwiLi9zY3JpcHRzL2JhY2tncm91bmRcIjtcbmltcG9ydCBQbGF0Zm9ybSBmcm9tIFwiLi9zY3JpcHRzL3BsYXRmb3JtXCI7XG5pbXBvcnQgT2JzdGFjbGUgZnJvbSBcIi4vc2NyaXB0cy9vYnN0YWNsZVwiO1xuY29uc29sZS5sb2coXCJ3ZWJwYWNrIGlzIHdvcmtpbmcgcHJvcGVybHlcIik7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianVtcC1xdWVzdFwiKTtcbiAgbGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gIGNvbnN0IEdBTUVfV0lEVEggPSBjdHguY2FudmFzLndpZHRoO1xuICBjb25zdCBHQU1FX0hFSUdIVCA9IGN0eC5jYW52YXMuaGVpZ2h0O1xuXG4gIGxldCBjaGFyID0gbmV3IENoYXJhY3RlcihHQU1FX1dJRFRILCBHQU1FX0hFSUdIVCk7XG4gIG5ldyBDb250cm9sbGVyKGNoYXIpXG4gIGxldCBiZyA9IG5ldyBCYWNrZ3JvdW5kKEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hUKTtcbiAgbGV0IGZyYW1lcyA9IDA7XG4gIGxldCBvYnN0YWNsZXMgPSB7fTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBldmVudCA9PiB7XG4gICAgc3dpdGNoKGV2ZW50LmNvZGUpIHtcbiAgICAgIGNhc2UgJ0VudGVyJzpcbiAgICAgICAgc3RhcnRHYW1lKCk7XG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm47XG4gICAgfVxuICB9KVxuICAgIFxuICBmdW5jdGlvbiBzdGFydEdhbWUoKSB7XG4gICAgZ2FtZUxvb3AoKTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2FtZUxvb3AoKSB7XG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBHQU1FX1dJRFRILCBHQU1FX0hFSUdIVCk7XG4gICAgYmcuZHJhd0JhY2tncm91bmQoY3R4KTtcbiAgICBkcmF3UGxhdGZvcm1zKCk7XG4gICAgdXBkYXRlT2JzdGFjbGVzKCk7XG4gICAgZHJhd09ic3RhY2xlcygpO1xuICAgIC8vIHdyaXRlIGFsZ29yaXRobSB0byBvbmx5IHBhc3MgaW4gcGxhdGZvcm1zICYgb2JzdGFjbGVzIGluIGN1cnJlbnQgdnBcbiAgICBjaGFyLnVwZGF0ZShPYmplY3QudmFsdWVzKHBsYXRmb3JtcyksIE9iamVjdC52YWx1ZXMob2JzdGFjbGVzKSk7XG4gICAgY2hhci5kcmF3Q2hhcihjdHgsIGZyYW1lcyk7XG5cbiAgICBpZiAoZnJhbWVzID49IDYwKSB7XG4gICAgICBmcmFtZXMgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBmcmFtZXMrKztcbiAgICB9XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xuICB9XG5cbiAgLy8gcGxhdGZvcm0gPSBbcG9zWCwgcG9zWSwgd2lkdGhdXG4gIGxldCBwbGF0Zm9ybXMgPSB7XG4gICAgMTogWzIwMCwgMzkxMCwgMTAwXSxcbiAgICAyOiBbMzUwLCAzODcwLCAxMDBdLFxuICAgIDM6IFs1MDAsIDM4MzAsIDEwMF0sXG4gICAgNDogWzY1MCwgMzc5MCwgMTAwXSxcbiAgICA1OiBbODAwLCAzNzUwLCAxMDBdLFxuICAgIDY6IFs3MDAsIDM3MTAsIDUwXSxcbiAgICA3OiBbNjAwLCAzNjcwLCA1MF0sXG4gICAgODogWzUwMCwgMzYzMCwgNTBdLFxuICAgIDk6IFs0MDAsIDM1OTAsIDUwXSxcbiAgICAxMDogWzMwMCwgMzU1MCwgNTBdLFxuICAgIDExOiBbMjAwLCAzNTAwLCA1MF0sXG4gICAgMTI6IFsxMDAsIDM0NTAsIDUwXSxcbiAgICAxMzogWzIwMCwgMzQwMCwgNTBdLFxuICAgIDE0OiBbMTAwLCAzMzUwLCA1MF0sXG4gICAgMTU6IFsyMDAsIDMzMDAsIDUwXSxcbiAgICAxNjogWzEwMCwgMzI1MCwgNTBdLFxuICB9O1xuICBcbiAgZnVuY3Rpb24gZHJhd1BsYXRmb3JtcygpIHtcbiAgICBPYmplY3QudmFsdWVzKHBsYXRmb3JtcykuZm9yRWFjaCgocGxhdGZvcm0sIGkpID0+IHtcbiAgICAgIGxldCBwID0gbmV3IFBsYXRmb3JtKC4uLnBsYXRmb3JtLCBpKTtcbiAgICAgIHAuZHJhd1BsYXRmb3JtKGN0eCk7XG4gICAgfSlcbiAgfTtcblxuICAvLyBvYnN0YWNsZSA9IFtwb3NYLCBwb3NZLCByYWRpdXMsIG9yaWVudGF0aW9uLCB0cmF2ZWxMZW5ndGgsIGNvbG9yLCBzcGVlZF1cbiAgbGV0IG5ld09ic3RhY2xlcyA9IHtcbiAgICAxOiBbODAwLCAzNzQwLCA1LCBcImhvcml6b250YWxcIiwgMTAwLCBcImdvbGRcIiwgLjFdLFxuICAgIDI6IFsyMjUsIDMyNTAsIDEwLCBcInZlcnRpY2FsXCIsIDMwMCwgXCJjcmltc29uXCIsIDAuNV0sXG4gICAgMzogWzUwMCwgMzQwMCwgMjAsIFwiaG9yaXpvbnRhbFwiLCAzMDAsIFwiTGltZUdyZWVuXCIsIDEuMF0sXG4gIH1cblxuICBjcmVhdGVPYnN0YWNsZXMoKTtcbiAgXG4gIGZ1bmN0aW9uIGNyZWF0ZU9ic3RhY2xlcygpIHtcbiAgICBPYmplY3QudmFsdWVzKG5ld09ic3RhY2xlcykuZm9yRWFjaCgob2JzdGFjbGUsIGkpID0+IHtcbiAgICAgIG9ic3RhY2xlc1tpXSA9IG5ldyBPYnN0YWNsZSguLi5vYnN0YWNsZSk7O1xuICAgIH0pXG4gIH07XG5cbiAgZnVuY3Rpb24gdXBkYXRlT2JzdGFjbGVzKCkge1xuICAgIE9iamVjdC52YWx1ZXMob2JzdGFjbGVzKS5mb3JFYWNoKG9ic3RhY2xlID0+IHtcbiAgICAgIG9ic3RhY2xlLnVwZGF0ZSgpO1xuICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGRyYXdPYnN0YWNsZXMoKSB7XG4gICAgT2JqZWN0LnZhbHVlcyhvYnN0YWNsZXMpLmZvckVhY2gob2JzdGFjbGUgPT4ge1xuICAgICAgb2JzdGFjbGUuZHJhd09ic3RhY2xlKGN0eCk7XG4gICAgfSk7XG4gIH07XG5cbn0pIl0sInNvdXJjZVJvb3QiOiIifQ==