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
    1: [800, 3740, 5, "horizontal", 100, "violet", .1],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qdW1wcXVlc3QvLi9zcmMvc2NyaXB0cy9iYWNrZ3JvdW5kLmpzIiwid2VicGFjazovL2p1bXBxdWVzdC8uL3NyYy9zY3JpcHRzL2NoYXJhY3Rlci5qcyIsIndlYnBhY2s6Ly9qdW1wcXVlc3QvLi9zcmMvc2NyaXB0cy9jb250cm9sbGVyLmpzIiwid2VicGFjazovL2p1bXBxdWVzdC8uL3NyYy9zY3JpcHRzL29ic3RhY2xlLmpzIiwid2VicGFjazovL2p1bXBxdWVzdC8uL3NyYy9zY3JpcHRzL3BsYXRmb3JtLmpzIiwid2VicGFjazovL2p1bXBxdWVzdC8uL3NyYy9zY3JpcHRzL3V0aWwuanMiLCJ3ZWJwYWNrOi8vanVtcHF1ZXN0Ly4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIiwid2VicGFjazovL2p1bXBxdWVzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qdW1wcXVlc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2p1bXBxdWVzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2p1bXBxdWVzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2p1bXBxdWVzdC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJCYWNrZ3JvdW5kIiwiZ2FtZVdpZHRoIiwiZ2FtZUhlaWdodCIsIndpZHRoIiwiaGVpZ2h0IiwiY3R4IiwiZHJhd0ltYWdlIiwicGVhY2VCZyIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiZmlsbCIsImRyYXdCYWNrZ3JvdW5kIiwiQ2hhcmFjdGVyIiwiZGlyZWN0aW9uIiwibW92ZVNwZWVkIiwianVtcEhlaWdodCIsImNyb3VjaGluZyIsImp1bXBpbmciLCJmYWxsaW5nIiwiaXNDb2xsaWRpbmciLCJwb3NpdGlvbiIsIngiLCJ5IiwidmVsb2NpdHkiLCJjb25zdGFudHMiLCJncmF2aXR5IiwiZnJpY3Rpb24iLCJrZXlzIiwiZnJhbWVzIiwiZmlubkxlZnQiLCJtb3ZpbmciLCJmaW5uUmlnaHQiLCJwbGF0Zm9ybXMiLCJvYnN0YWNsZXMiLCJpIiwibGVuZ3RoIiwicGxhdGZvcm0iLCJvblBsYXRmb3JtIiwib2JzdGFjbGUiLCJjb2xsaXNpb25EZXRlY3Rpb24iLCJvcmllbnRhdGlvbiIsImNoYXJQb3MiLCJvIiwiciIsInJhZGl1cyIsImMiLCJ3IiwiaCIsImRpc3RYIiwiTWF0aCIsImFicyIsImRpc3RZIiwiZHgiLCJkeSIsInBvdyIsIkNvbnRyb2xsZXIiLCJjaGFyIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJjb2RlIiwidXBkYXRlS2V5cyIsImNyb3VjaCIsImNvbGxpZGluZyIsImp1bXAiLCJzdG9wIiwidW5jcm91Y2giLCJPYnN0YWNsZSIsInBvc1giLCJwb3NZIiwidHJhdmVsTGVuZ3RoIiwiY29sb3IiLCJzcGVlZCIsImluaXRQb3MiLCJ0cmF2ZWxMZW4iLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJhcmMiLCJQSSIsInN0cm9rZSIsIlBsYXRmb3JtIiwiaW5kZXgiLCJmb250IiwiZmlsbFRleHQiLCJJbWFnZSIsInNyYyIsInNub3d5QmciLCJtb3VudGFpbkJnIiwiY29uc29sZSIsImxvZyIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwiZ2V0Q29udGV4dCIsIkdBTUVfV0lEVEgiLCJHQU1FX0hFSUdIVCIsImJnIiwic3RhcnRHYW1lIiwiZ2FtZUxvb3AiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjbGVhclJlY3QiLCJkcmF3UGxhdGZvcm1zIiwidXBkYXRlT2JzdGFjbGVzIiwiZHJhd09ic3RhY2xlcyIsInVwZGF0ZSIsIk9iamVjdCIsInZhbHVlcyIsImRyYXdDaGFyIiwiZm9yRWFjaCIsInAiLCJkcmF3UGxhdGZvcm0iLCJuZXdPYnN0YWNsZXMiLCJjcmVhdGVPYnN0YWNsZXMiLCJkcmF3T2JzdGFjbGUiXSwibWFwcGluZ3MiOiI7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QUVqQixPQUFHLENBQUMsR0FBRCxFQUFNLElBQU4sRUFBWSxFQUFaLEVBQWdCLFVBQWhCLEVBQTRCLEdBQTVCLEVBQWlDLFNBQWpDLEVBQTRDLEdBQTVDLENBRmM7QUFHakIsT0FBRyxDQUFDLEdBQUQsRUFBTSxJQUFOLEVBQVksRUFBWixFQUFnQixZQUFoQixFQUE4QixHQUE5QixFQUFtQyxXQUFuQyxFQUFnRCxHQUFoRDtBQUhjLEdBQW5CO0FBTUFDLGlCQUFlOztBQUVmLFdBQVNBLGVBQVQsR0FBMkI7QUFDekJQLFVBQU0sQ0FBQ0MsTUFBUCxDQUFjSyxZQUFkLEVBQTRCSCxPQUE1QixDQUFvQyxVQUFDckUsUUFBRCxFQUFXSixDQUFYLEVBQWlCO0FBQ25ERCxlQUFTLENBQUNDLENBQUQsQ0FBVCxjQUFtQmlDLHNEQUFuQixxQkFBK0I3QixRQUEvQjtBQUF5QztBQUMxQyxLQUZEO0FBR0Q7O0FBQUE7O0FBRUQsV0FBUytELGVBQVQsR0FBMkI7QUFDekJHLFVBQU0sQ0FBQ0MsTUFBUCxDQUFjeEUsU0FBZCxFQUF5QjBFLE9BQXpCLENBQWlDLFVBQUFyRSxRQUFRLEVBQUk7QUFDM0NBLGNBQVEsQ0FBQ2lFLE1BQVQ7QUFDRCxLQUZEO0FBR0Q7O0FBQUE7O0FBRUQsV0FBU0QsYUFBVCxHQUF5QjtBQUN2QkUsVUFBTSxDQUFDQyxNQUFQLENBQWN4RSxTQUFkLEVBQXlCMEUsT0FBekIsQ0FBaUMsVUFBQXJFLFFBQVEsRUFBSTtBQUMzQ0EsY0FBUSxDQUFDMEUsWUFBVCxDQUFzQjNHLEdBQXRCO0FBQ0QsS0FGRDtBQUdEOztBQUFBO0FBRUYsQ0FwR0QsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc25vd3lCZywgcGVhY2VCZywgbW91bnRhaW5CZyB9IGZyb20gJy4vdXRpbCc7XG5cbmNsYXNzIEJhY2tncm91bmQge1xuICBjb25zdHJ1Y3RvcihnYW1lV2lkdGgsIGdhbWVIZWlnaHQpIHtcbiAgICB0aGlzLndpZHRoID0gZ2FtZVdpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gZ2FtZUhlaWdodDtcbiAgfVxuXG4gIGRyYXdCYWNrZ3JvdW5kKGN0eCkge1xuICAgIC8vIGN0eC5maWxsU3R5bGUgPSBcImdyZXlcIjtcbiAgICAvLyBjdHguZmlsbFJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQgLSAyMCk7XG4gICAgLy8gY3R4LmZpbGwoKTtcbiAgICAvLyBjdHguZHJhd0ltYWdlKHNub3d5QmcsIDAsIDAsIDEwMDAsIDgwMCwgMCwgdGhpcy5oZWlnaHQtODAwLCAxMDAwLCA4MDApO1xuICAgIC8vIGN0eC5maWxsU3R5bGUgPSBcIkRpbUdyZXlcIjtcbiAgICAvLyBjdHguZmlsbFJlY3QoMCwgdGhpcy5oZWlnaHQgLSAyMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIC8vIGN0eC5maWxsKCk7XG4gICAgY3R4LmRyYXdJbWFnZShwZWFjZUJnLCAwLCAwLCA1MDAsIDIwMDAsIDAsIDAsIDEwMDAsIDQwMDApO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcInBlcnVcIjtcbiAgICBjdHguZmlsbFJlY3QoMCwgdGhpcy5oZWlnaHQgLSAyMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIGN0eC5maWxsKCk7XG4gICAgLy8gY3R4LmRyYXdJbWFnZShtb3VudGFpbkJnLCAwLCAwLCAxMDAwLCAyMDAwLCAwLCAwLCAxMDAwLCA0MDAwKTtcbiAgICAvLyBjdHguZmlsbFN0eWxlID0gXCJwZXJ1XCI7XG4gICAgLy8gY3R4LmZpbGxSZWN0KDAsIHRoaXMuaGVpZ2h0IC0gMjAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAvLyBjdHguZmlsbCgpO1xuICB9XG5cbiAgYW5pbWF0ZShjdHgpIHtcbiAgICB0aGlzLmRyYXdCYWNrZ3JvdW5kKGN0eCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFja2dyb3VuZDsiLCJpbXBvcnQgeyBmaW5uUmlnaHQsIGZpbm5MZWZ0IH0gZnJvbSAnLi91dGlsJztcblxuY2xhc3MgQ2hhcmFjdGVyIHtcbiAgY29uc3RydWN0b3IoZ2FtZVdpZHRoLCBnYW1lSGVpZ2h0KSB7XG4gICAgdGhpcy5nYW1lV2lkdGggPSBnYW1lV2lkdGg7XG4gICAgdGhpcy5nYW1lSGVpZ2h0ID0gZ2FtZUhlaWdodDtcbiAgICB0aGlzLndpZHRoID0gNjQ7XG4gICAgdGhpcy5oZWlnaHQgPSA0MDtcbiAgICB0aGlzLmRpcmVjdGlvbiA9IFwicmlnaHRcIjtcbiAgICB0aGlzLm1vdmVTcGVlZCA9IC43NTtcbiAgICB0aGlzLmp1bXBIZWlnaHQgPSAtMTA7XG4gICAgdGhpcy5jcm91Y2hpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmp1bXBpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmZhbGxpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmlzQ29sbGlkaW5nID0gZmFsc2U7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgIHg6IDEwMCxcbiAgICAgIHk6IHRoaXMuZ2FtZUhlaWdodCAtIHRoaXMuaGVpZ2h0IC0gMjAsXG4gICAgfTtcbiAgICB0aGlzLnZlbG9jaXR5ID0ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDAsXG4gICAgfTtcbiAgICB0aGlzLmNvbnN0YW50cyA9IHtcbiAgICAgIGdyYXZpdHk6IDAuMTUsXG4gICAgICBmcmljdGlvbjogMC45LFxuICAgIH07XG4gICAgdGhpcy5rZXlzID0ge307XG4gIH1cblxuICBkcmF3Q2hhcihjdHgsIGZyYW1lcykge1xuICAgIC8vIHRlc3RpbmcgY2hhcmFjdGVyIGJvdW5kYXJpZXNcbiAgICAvLyBjdHguc3Ryb2tlU3R5bGUgPSBcImdyZWVuXCI7XG4gICAgLy8gY3R4Lm1vdmVUbyh0aGlzLnBvc2l0aW9uLngrMjAsIHRoaXMucG9zaXRpb24ueSk7XG4gICAgLy8gY3R4LmxpbmVUbyh0aGlzLnBvc2l0aW9uLngrMjAsIDApO1xuICAgIC8vIGN0eC5tb3ZlVG8odGhpcy5wb3NpdGlvbi54K3RoaXMud2lkdGgtMzAsIHRoaXMucG9zaXRpb24ueSk7XG4gICAgLy8gY3R4LmxpbmVUbyh0aGlzLnBvc2l0aW9uLngrdGhpcy53aWR0aC0zMCwgMCk7XG4gICAgLy8gY3R4LnN0cm9rZSgpO1xuXG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uID09ICdsZWZ0Jykge1xuICAgICAgaWYgKHRoaXMuaXNDb2xsaWRpbmcpIHtcbiAgICAgICAgY3R4LmRyYXdJbWFnZShmaW5uTGVmdCwgMzUyLCAwLCAzMiwgMjAsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuanVtcGluZyB8fCB0aGlzLmZhbGxpbmcpIHsgXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoZmlubkxlZnQsIDQ0OCwgMCwgMzIsIDIwLCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLm1vdmluZykge1xuICAgICAgICBpZiAoZnJhbWVzIDwgMjApIHtcbiAgICAgICAgICBjdHguZHJhd0ltYWdlKGZpbm5MZWZ0LCA1NDQsIDAsIDMyLCAyMCwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgfSBlbHNlIGlmIChmcmFtZXMgPiAyMCAmJiBmcmFtZXMgPCA0MCkgeyBcbiAgICAgICAgICBjdHguZHJhd0ltYWdlKGZpbm5MZWZ0LCA1MTIsIDAsIDMyLCAyMCwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjdHguZHJhd0ltYWdlKGZpbm5MZWZ0LCA0ODAsIDAsIDMyLCAyMCwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChmcmFtZXMgPCA0MCkge1xuICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoZmlubkxlZnQsIDg2NCwgMCwgMzIsIDIwLCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoZmlubkxlZnQsIDgwMCwgMCwgMzIsIDIwLCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB9O1xuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZGlyZWN0aW9uID09ICdyaWdodCcpIHtcbiAgICAgIGlmICh0aGlzLmlzQ29sbGlkaW5nKSB7IFxuICAgICAgICBjdHguZHJhd0ltYWdlKGZpbm5SaWdodCwgNTEyLCAwLCAzMiwgMjAsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuanVtcGluZyB8fCB0aGlzLmZhbGxpbmcpIHtcbiAgICAgICAgY3R4LmRyYXdJbWFnZShmaW5uUmlnaHQsIDQ4MCwgMCwgMzIsIDIwLCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLm1vdmluZykge1xuICAgICAgICBpZiAoZnJhbWVzIDwgMjApIHtcbiAgICAgICAgICBjdHguZHJhd0ltYWdlKGZpbm5SaWdodCwgMzIwLCAwLCAzMiwgMjAsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZnJhbWVzID4gMjAgJiYgZnJhbWVzIDwgNDApIHsgXG4gICAgICAgICAgY3R4LmRyYXdJbWFnZShmaW5uUmlnaHQsIDM4NCwgMCwgMzIsIDIwLCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoZmlublJpZ2h0LCA0MTYsIDAsIDMyLCAyMCwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChmcmFtZXMgPCA0MCkge1xuICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoZmlublJpZ2h0LCAwLCAwLCAzMiwgMjAsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY3R4LmRyYXdJbWFnZShmaW5uUmlnaHQsIDY0LCAwLCAzMiwgMjAsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB1cGRhdGVLZXlzKGtleXMpIHtcbiAgICB0aGlzLmtleXMgPSBrZXlzO1xuICB9XG5cbiAgc3RvcCgpIHtcbiAgICB0aGlzLnZlbG9jaXR5LnggPSAwO1xuICAgIHRoaXMudmVsb2NpdHkueSA9IDA7XG4gIH1cblxuICBqdW1wKCkge1xuICAgIGlmICh0aGlzLmp1bXBpbmcpIHtcbiAgICAgIHRoaXMudmVsb2NpdHkueSA9IHRoaXMuanVtcEhlaWdodFxuICAgIH1cbiAgfVxuXG4gIGNyb3VjaCgpIHtcbiAgICB0aGlzLmhlaWdodCA9IDIwO1xuICB9XG5cbiAgdW5jcm91Y2goKSB7XG4gICAgdGhpcy5oZWlnaHQgPSA0MDtcbiAgICB0aGlzLnZlbG9jaXR5LnkgPSAtNTtcbiAgfVxuXG4gIHVwZGF0ZShwbGF0Zm9ybXMsIG9ic3RhY2xlcykge1xuICAgIC8vIGNoZWNrIGN1cnJlbnQga2V5IHByZXNzZXNcbiAgICBpZiAodGhpcy5rZXlzWydBcnJvd0xlZnQnXSB8fCB0aGlzLmtleXNbJ0tleUEnXSkge1xuICAgICAgdGhpcy52ZWxvY2l0eS54ID0gLXRoaXMubW92ZVNwZWVkO1xuICAgIH0gZWxzZSBpZiAodGhpcy5rZXlzWydBcnJvd1JpZ2h0J10gfHwgdGhpcy5rZXlzWydLZXlEJ10pIHtcbiAgICAgIHRoaXMudmVsb2NpdHkueCA9IHRoaXMubW92ZVNwZWVkO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1vdmluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8vIGNoYXIgbW92ZW1lbnRzXG4gICAgdGhpcy5wb3NpdGlvbi55ICs9IHRoaXMudmVsb2NpdHkueTtcbiAgICB0aGlzLnBvc2l0aW9uLnggKz0gdGhpcy52ZWxvY2l0eS54O1xuICAgIHRoaXMudmVsb2NpdHkueSArPSB0aGlzLmNvbnN0YW50cy5ncmF2aXR5O1xuICAgIHRoaXMudmVsb2NpdHkueCAqPSB0aGlzLmNvbnN0YW50cy5mcmljdGlvbjtcbiAgICB0aGlzLnZlbG9jaXR5LnkgKj0gdGhpcy5jb25zdGFudHMuZnJpY3Rpb247XG5cbiAgICAvLyBpZiBjaGFyIGlzIGdvaW5nIG9mZiBzY3JlZW4sIHN0b3AgYXQgZWRnZSBvZiBzY3JlZW5cbiAgICBpZiAodGhpcy5wb3NpdGlvbi54IDw9IDApIHtcbiAgICAgIHRoaXMucG9zaXRpb24ueCA9IDA7XG4gICAgfSBlbHNlIGlmICh0aGlzLnBvc2l0aW9uLnggPj0gdGhpcy5nYW1lV2lkdGggLSB0aGlzLndpZHRoKSB7XG4gICAgICB0aGlzLnBvc2l0aW9uLnggPSB0aGlzLmdhbWVXaWR0aCAtIHRoaXMud2lkdGg7XG4gICAgfVxuXG4gICAgLy8gKipXcml0ZSBjb2RlIHRvIGZpbHRlciBvdXQgcGxhdGZvcm1zIE5PVCBpbiBjdXJyZW50IHZpZXcgZnJhbWUqKlxuICAgIC8vIGNoZWNrIGlmIGNoYXIgaXMgc3RhbmRpbmcgb24gYW55IHBsYXRmb3JtXG4gICAgLy8gZWxzZSBjaGVjayBpZiBjaGFyIGlzIGZhbGxpbmcgYmVsb3cgZmxvb3IgbGluZVxuICAgIC8vIGVsc2UgY2hhciBpcyBjdXJyZW50bHkgZmFsbGluZ1xuICAgIGZvciAobGV0IGk9MDsgaTxwbGF0Zm9ybXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBwbGF0Zm9ybSA9IHBsYXRmb3Jtc1tpXTtcbiAgICAgIGlmICh0aGlzLm9uUGxhdGZvcm0odGhpcy5wb3NpdGlvbiwgcGxhdGZvcm0pKSB7XG4gICAgICAgIHRoaXMuZmFsbGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmp1bXBpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gcGxhdGZvcm1bMV0tdGhpcy5oZWlnaHQ7XG4gICAgICAgIHRoaXMudmVsb2NpdHkueSA9IDA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnBvc2l0aW9uLnkgPj0gdGhpcy5nYW1lSGVpZ2h0LXRoaXMuaGVpZ2h0LTIwKSB7XG4gICAgICAgIHRoaXMuanVtcGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZhbGxpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gdGhpcy5nYW1lSGVpZ2h0IC0gdGhpcy5oZWlnaHQgLSAyMDtcbiAgICAgICAgdGhpcy52ZWxvY2l0eS55ID0gMDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmZhbGxpbmcgPSB0cnVlO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyAqKldyaXRlIGNvZGUgdG8gZmlsdGVyIG91dCBvYnN0YWNsZXMgTk9UIGluIGN1cnJlbnQgdmlldyBmcmFtZSoqXG4gICAgZm9yIChsZXQgaT0wOyBpPG9ic3RhY2xlcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IG9ic3RhY2xlID0gb2JzdGFjbGVzW2ldO1xuICAgICAgaWYgKHRoaXMuY29sbGlzaW9uRGV0ZWN0aW9uKG9ic3RhY2xlKSkge1xuICAgICAgICB0aGlzLmlzQ29sbGlkaW5nID0gdHJ1ZTtcbiAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB7dGhpcy5jb2xsaWRpbmcgPSBmYWxzZX0sIDEwMDApO1xuXG4gICAgICAgIGlmIChvYnN0YWNsZS5vcmllbnRhdGlvbiA9PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09ICdsZWZ0Jykge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ICs9IDE1O1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55ICs9IDE7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCAtPSAxNTtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSArPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAob2JzdGFjbGUuZGlyZWN0aW9uID09IFwiUkRcIikge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ICs9IDIwO1xuICAgICAgICAgIH0gZWxzZSBpZiAob2JzdGFjbGUuZGlyZWN0aW9uID09IFwiTFVcIikge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54IC09IDIwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaXNDb2xsaWRpbmcgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfTtcblxuICBvblBsYXRmb3JtKGNoYXJQb3MsIHBsYXRmb3JtKSB7XG4gICAgLy8gY2hhclBvcyA9IHtcbiAgICAvLyAgIHg6IGNoYXJQb3NYLFxuICAgIC8vICAgeTogY2hhclBvc1ksXG4gICAgLy8gfVxuICAgIC8vIHBsYXRmb3JtID0gW3Bvc1gsIHBvc1ksIHdpZHRoXVxuICAgIGlmICh0aGlzLmNyb3VjaGluZykge1xuICAgICAgaWYgKCgoY2hhclBvcy54ICsgdGhpcy53aWR0aCAtMTUpID49IHBsYXRmb3JtWzBdKSAmJlxuICAgICAgKChjaGFyUG9zLngrMTUpIDw9IChwbGF0Zm9ybVswXStwbGF0Zm9ybVsyXSkpICYmXG4gICAgICAoKGNoYXJQb3MueSArIDIwKSA8PSBwbGF0Zm9ybVsxXSkgJiZcbiAgICAgICgoY2hhclBvcy55ICsgMjApID49IHBsYXRmb3JtWzFdLTIpKXtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCgoY2hhclBvcy54ICsgdGhpcy53aWR0aCAtMTUpID49IHBsYXRmb3JtWzBdKSAmJlxuICAgICAgKChjaGFyUG9zLngrMTUpIDw9IChwbGF0Zm9ybVswXStwbGF0Zm9ybVsyXSkpICYmXG4gICAgICAoKGNoYXJQb3MueSArIDQwKSA8PSBwbGF0Zm9ybVsxXSkgJiZcbiAgICAgICgoY2hhclBvcy55ICsgNDApID49IHBsYXRmb3JtWzFdLTIpKXtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfTtcbiAgICB9O1xuICB9XG5cbiAgLy8gcmV0dXJuIHRydWUgaWYgYW4gb2JzdGFjbGUgY29sbGlkZXMgd2l0aCB1c2VyXG4gIGNvbGxpc2lvbkRldGVjdGlvbihvYnN0YWNsZSkge1xuICAgIGxldCBvID0ge1xuICAgICAgeDogb2JzdGFjbGUucG9zaXRpb24ueCxcbiAgICAgIHk6IG9ic3RhY2xlLnBvc2l0aW9uLnksXG4gICAgICByOiBvYnN0YWNsZS5yYWRpdXNcbiAgICB9O1xuICAgIGxldCBjID0ge1xuICAgICAgeDogdGhpcy5wb3NpdGlvbi54ICsgMjAsXG4gICAgICB5OiB0aGlzLnBvc2l0aW9uLnksXG4gICAgICB3OiB0aGlzLndpZHRoLTMwLFxuICAgICAgaDogdGhpcy5oZWlnaHRcbiAgICB9XG5cbiAgICAvLyBmaW5kIGhvcml6L3ZlcnQgZGlzdGFuY2UgYi93IGNlbnRlciBvZiBvYnN0YWNsZSAmIGNoYXJhY3RlclxuICAgIGxldCBkaXN0WCA9IE1hdGguYWJzKG8ueCAtIGMueCAtIGMudy8yKTtcbiAgICBsZXQgZGlzdFkgPSBNYXRoLmFicyhvLnkgLSBjLnkgLSBjLmgvMik7XG5cbiAgICAvLyByZXR1cm4gZmFsc2UgaWYgZGlzdCBpcyBncmVhdGVyIHRoYW4gbWluIGRpc3QgYi93IGVkZ2VzICh4IG9yIHkpXG4gICAgaWYgKChkaXN0WCA+IChjLncvMiArIG8ucikpIHx8IChkaXN0WSA+IChjLmgvMiArIG8ucikpKSB7cmV0dXJuIGZhbHNlfTtcblxuICAgIC8vIHJldHVybiB0cnVlIGlmIGRpc3QgaXMgPD0gY2hhciB3aWR0aC8yXG4gICAgaWYgKChkaXN0WCA8PSAoYy53LzIpKSAmJiAoZGlzdFkgPD0gKGMuaC8yKSkpIHtyZXR1cm4gdHJ1ZX07XG5cbiAgICAvLyBkeCAmIGR5ID0gZGlzdCBiL3cgb2JzdGFjbGUgY2VudGVyICYgY2hhciBlZGdlICh4ICYgeSlcbiAgICBsZXQgZHggPSBkaXN0WCAtIGMudyAvIDI7XG4gICAgbGV0IGR5ID0gZGlzdFkgLSBjLmggLyAyO1xuXG4gICAgLy8gdXNlIHB5dGhhZ29yZWFuIHRoZW9yZW0gdG8gc2VlIGlmIHJhZGl1c14yICBcbiAgICAvLyBpcyBncmVhdGVyIHRoYW4gaHlwb3RlbnVzZSBvZiBkeF4yICsgZHleMiBcbiAgICAvLyBpZiBncmVhdGVyLCBvYmplY3QgYW5kIGNoYXIgYXJlIGNvbGxpZGluZyAodHJ1ZSlcbiAgICByZXR1cm4gKE1hdGgucG93KGR4LDIpICsgTWF0aC5wb3coZHksMikgPD0gTWF0aC5wb3coby5yLDIpKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IENoYXJhY3RlcjsiLCJjbGFzcyBDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoY2hhcikge1xuICAgIHRoaXMua2V5cyA9IHt9O1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICAgICAgc3dpdGNoIChldmVudC5jb2RlKSB7XG4gICAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgICAgIGNhc2UgJ0tleUEnOiAgXG4gICAgICAgICAgdGhpcy5rZXlzW2V2ZW50LmNvZGVdID0gdHJ1ZVxuICAgICAgICAgIGNoYXIuZGlyZWN0aW9uID0gXCJsZWZ0XCI7XG4gICAgICAgICAgY2hhci5tb3ZpbmcgPSB0cnVlO1xuICAgICAgICAgIGNoYXIua2V5cyA9IHRoaXMua2V5cztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XG4gICAgICAgIGNhc2UgJ0tleUQnOlxuICAgICAgICAgIHRoaXMua2V5c1tldmVudC5jb2RlXSA9IHRydWVcbiAgICAgICAgICBjaGFyLmRpcmVjdGlvbiA9IFwicmlnaHRcIjtcbiAgICAgICAgICBjaGFyLm1vdmluZyA9IHRydWU7XG4gICAgICAgICAgY2hhci51cGRhdGVLZXlzKHRoaXMua2V5cyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0Fycm93RG93bic6XG4gICAgICAgIGNhc2UgJ0tleVMnOlxuICAgICAgICAgIC8vIHRoaXMua2V5c1tldmVudC5jb2RlXSA9IHRydWVcbiAgICAgICAgICBjaGFyLmNyb3VjaGluZyA9IHRydWU7XG4gICAgICAgICAgY2hhci5jcm91Y2goKTsgICBcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnU3BhY2UnOlxuICAgICAgICAgIC8vIHRoaXMua2V5c1tldmVudC5jb2RlXSA9IHRydWVcbiAgICAgICAgICBpZiAoIWNoYXIuanVtcGluZyAmJiAhY2hhci5mYWxsaW5nICYmICFjaGFyLmNvbGxpZGluZykge1xuICAgICAgICAgICAgY2hhci5qdW1waW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIGNoYXIuanVtcCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2ZW50KSA9PiB7XG4gICAgICBzd2l0Y2ggKGV2ZW50LmNvZGUpIHtcbiAgICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcbiAgICAgICAgY2FzZSAnS2V5QSc6IFxuICAgICAgICAgIHRoaXMua2V5c1tldmVudC5jb2RlXSA9IGZhbHNlO1xuICAgICAgICAgIGNoYXIua2V5cyA9IHRoaXMua2V5cztcbiAgICAgICAgICBjaGFyLnN0b3AoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XG4gICAgICAgIGNhc2UgJ0tleUQnOlxuICAgICAgICAgIHRoaXMua2V5c1tldmVudC5jb2RlXSA9IGZhbHNlO1xuICAgICAgICAgIGNoYXIua2V5cyA9IHRoaXMua2V5cztcbiAgICAgICAgICBjaGFyLnN0b3AoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgY2FzZSAnS2V5Uyc6XG4gICAgICAgICAgLy8gdGhpcy5rZXlzW2V2ZW50LmNvZGVdID0gZmFsc2U7XG4gICAgICAgICAgY2hhci5jcm91Y2hpbmcgPSBmYWxzZTtcbiAgICAgICAgICBjaGFyLnVuY3JvdWNoKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1NwYWNlJzpcbiAgICAgICAgICAvLyB0aGlzLmtleXNbZXZlbnQuY29kZV0gPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xsZXI7IiwiY2xhc3MgT2JzdGFjbGUge1xuICBjb25zdHJ1Y3Rvcihwb3NYLCBwb3NZLCByYWRpdXMsIG9yaWVudGF0aW9uLCB0cmF2ZWxMZW5ndGgsIGNvbG9yLCBzcGVlZCkge1xuICAgIHRoaXMuaW5pdFBvcyA9IHtcbiAgICAgIHg6IHBvc1gsXG4gICAgICB5OiBwb3NZXG4gICAgfTtcbiAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgeDogcG9zWCxcbiAgICAgIHk6IHBvc1lcbiAgICB9O1xuICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xuICAgIHRoaXMub3JpZW50YXRpb24gPSBvcmllbnRhdGlvbjtcbiAgICB0aGlzLnRyYXZlbExlbiA9IHRyYXZlbExlbmd0aFxuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICB0aGlzLnNwZWVkID0gc3BlZWQ7XG4gICAgdGhpcy5kaXJlY3Rpb24gPSBcIlJEXCI7IC8vIExVID0gbGVmdC91cCwgUkQgPSByaWdodC9kb3duIChkZXAuIG9uIG9yaWVudGF0aW9uKVxuICB9XG5cbiAgZHJhd09ic3RhY2xlKGN0eCkge1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55KTtcbiAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICBjdHguYXJjKHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLnJhZGl1cywgMCwgTWF0aC5QSSAqIDIsIHRydWUpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgICBjdHguZmlsbCgpO1xuICB9IFxuXG4gIHVwZGF0ZSgpIHtcbiAgICAvLyBzZXQgZGlyZWN0aW9uIG9ic3RhY2xlIHNob3VsZCBtb3ZlIGJhc2VkIG9uIGN1cnJlbnQgcG9zaXRpb24gKFJEL0xVKVxuICAgIGlmICh0aGlzLm9yaWVudGF0aW9uID09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICBpZiAodGhpcy5wb3NpdGlvbi54IDw9IHRoaXMuaW5pdFBvcy54KSB7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gXCJSRFwiXG4gICAgICB9IGVsc2UgaWYgKHRoaXMucG9zaXRpb24ueCA+PSB0aGlzLmluaXRQb3MueCArIHRoaXMudHJhdmVsTGVuKSB7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gXCJMVVwiXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IHRoaXMuZGlyZWN0aW9uO1xuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKHRoaXMub3JpZW50YXRpb24gPT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICBpZiAodGhpcy5wb3NpdGlvbi55IDw9IHRoaXMuaW5pdFBvcy55KSB7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gXCJSRFwiXG4gICAgICB9IGVsc2UgaWYgKHRoaXMucG9zaXRpb24ueSA+PSB0aGlzLmluaXRQb3MueSArIHRoaXMudHJhdmVsTGVuKSB7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gXCJMVVwiXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IHRoaXMuZGlyZWN0aW9uO1xuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZGlyZWN0aW9uID09PSBcInN0YXRpY1wiKSB7XG4gICAgICBcbiAgICB9O1xuICAgIFxuICAgIC8vIG1vdmUgb2JzdGFjbGUgYWNjb3JkaW5nIHRvIGl0cyBkaXJlY3Rpb25cbiAgICBpZiAodGhpcy5vcmllbnRhdGlvbiA9PSBcImhvcml6b250YWxcIikge1xuICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09IFwiUkRcIikge1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnggKz0gdGhpcy5zcGVlZFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54IC09IHRoaXMuc3BlZWRcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmICh0aGlzLm9yaWVudGF0aW9uID09IFwidmVydGljYWxcIikge1xuICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09IFwiUkRcIikge1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgKz0gdGhpcy5zcGVlZFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55IC09IHRoaXMuc3BlZWRcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgT2JzdGFjbGU7XG5cbiIsImNsYXNzIFBsYXRmb3JtIHtcbiAgY29uc3RydWN0b3IocG9zWCwgcG9zWSwgd2lkdGgsIGkpIHtcbiAgICB0aGlzLmhlaWdodCA9IDIwO1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgeDogcG9zWCxcbiAgICAgIHk6IHBvc1lcbiAgICB9XG4gICAgdGhpcy5pbmRleCA9IGk7XG4gIH1cblxuICBkcmF3UGxhdGZvcm0oY3R4KSB7XG4gICAgaWYgKHRoaXMucG9zaXRpb24ueSA+PSAzNzUwKSB7XG4gICAgICBjdHguZmlsbFN0eWxlID0gXCJTYWRkbGVCcm93blwiO1xuICAgICAgY3R4LmZpbGxSZWN0KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBcImdvbGRcIixcbiAgICAgIGN0eC5maWxsUmVjdCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIH1cbiAgICAvLyBjdHguZmlsbCgpO1xuICAgIC8vIGN0eC5maWxsU3R5bGUgPSBcInNub3dcIjtcbiAgICAvLyBjdHguZmlsbFJlY3QodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgvMiwgNik7XG4gICAgLy8gY3R4LmZpbGxSZWN0KHRoaXMucG9zaXRpb24ueCArIHRoaXMud2lkdGgvMiwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLzIsIDUpO1xuICAgIC8vIGN0eC5maWxsKCk7XG5cbiAgICAvLyBjdHguZmlsbFN0eWxlID0gXCJwaW5rXCI7XG4gICAgLy8gY3R4LmZpbGxSZWN0KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgXG4gICAgLy8gcHJpbnRpbmcgcGxhdGZvcm0gaW5kZXgva2V5ICYgY29vcmRpbmF0ZXNcbiAgICBjdHguZmlsbFN0eWxlID0gXCJibGFja1wiOyBcbiAgICBjdHguZm9udCA9XCIxNHB4IHNlcmlmXCI7XG4gICAgY3R4LmZpbGxUZXh0KGAke3RoaXMuaW5kZXh9OiAke3RoaXMucG9zaXRpb24ueH0sICR7dGhpcy5wb3NpdGlvbi55fWAsIFxuICAgICAgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnkrMzMpO1xuXG4gICAgLy8gdGVzdGluZyBwbGF0Zm9ybSBib3VuZGFyaWVzXG4gICAgLy8gY3R4LmJlZ2luUGF0aCgpO1xuICAgIC8vIGN0eC5zdHJva2VTdHlsZSA9IFwiYmx1ZVwiO1xuICAgIC8vIGN0eC5tb3ZlVG8odGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnkpO1xuICAgIC8vIGN0eC5saW5lVG8odGhpcy5wb3NpdGlvbi54LCAwKTtcbiAgICAvLyBjdHgubW92ZVRvKHRoaXMucG9zaXRpb24ueCt0aGlzLndpZHRoLCB0aGlzLnBvc2l0aW9uLnkpO1xuICAgIC8vIGN0eC5saW5lVG8odGhpcy5wb3NpdGlvbi54K3RoaXMud2lkdGgsIDApO1xuICAgIC8vIGN0eC5zdHJva2UoKTtcbiAgfSBcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxhdGZvcm07XG5cbiIsImV4cG9ydCBjb25zdCBmaW5uUmlnaHQgPSBuZXcgSW1hZ2UoKTtcbmZpbm5SaWdodC5zcmMgPSAnLi9kaXN0L2ltYWdlcy9GaW5uU3ByaXRlLXJpZ2h0LnBuZyc7XG5leHBvcnQgY29uc3QgZmlubkxlZnQgPSBuZXcgSW1hZ2UoKTtcbmZpbm5MZWZ0LnNyYyA9ICcuL2Rpc3QvaW1hZ2VzL0Zpbm5TcHJpdGUtbGVmdC5wbmcnO1xuZXhwb3J0IGNvbnN0IHNub3d5QmcgPSBuZXcgSW1hZ2UoKTtcbnNub3d5Qmcuc3JjID0gJy4vZGlzdC9pbWFnZXMvc25vd3ktYmcucG5nJztcbmV4cG9ydCBjb25zdCBwZWFjZUJnID0gbmV3IEltYWdlKCk7XG5wZWFjZUJnLnNyYyA9ICcuL2Rpc3QvaW1hZ2VzL3BlYWNlZnVsLWJnLnBuZyc7XG5leHBvcnQgY29uc3QgbW91bnRhaW5CZyA9IG5ldyBJbWFnZSgpO1xubW91bnRhaW5CZy5zcmMgPSAnLi9kaXN0L2ltYWdlcy9tb3VudGFpbi1iZy5wbmcnOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbi8vIGltcG9ydCBKdW1wUXVlc3QgZnJvbSBcIi4vc2NyaXB0cy9nYW1lXCI7XG5pbXBvcnQgQ2hhcmFjdGVyIGZyb20gXCIuL3NjcmlwdHMvY2hhcmFjdGVyXCI7XG5pbXBvcnQgQ29udHJvbGxlciBmcm9tIFwiLi9zY3JpcHRzL2NvbnRyb2xsZXJcIjtcbmltcG9ydCBCYWNrZ3JvdW5kIGZyb20gXCIuL3NjcmlwdHMvYmFja2dyb3VuZFwiO1xuaW1wb3J0IFBsYXRmb3JtIGZyb20gXCIuL3NjcmlwdHMvcGxhdGZvcm1cIjtcbmltcG9ydCBPYnN0YWNsZSBmcm9tIFwiLi9zY3JpcHRzL29ic3RhY2xlXCI7XG5jb25zb2xlLmxvZyhcIndlYnBhY2sgaXMgd29ya2luZyBwcm9wZXJseVwiKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBsZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqdW1wLXF1ZXN0XCIpO1xuICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgY29uc3QgR0FNRV9XSURUSCA9IGN0eC5jYW52YXMud2lkdGg7XG4gIGNvbnN0IEdBTUVfSEVJR0hUID0gY3R4LmNhbnZhcy5oZWlnaHQ7XG5cbiAgbGV0IGNoYXIgPSBuZXcgQ2hhcmFjdGVyKEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hUKTtcbiAgbmV3IENvbnRyb2xsZXIoY2hhcilcbiAgbGV0IGJnID0gbmV3IEJhY2tncm91bmQoR0FNRV9XSURUSCwgR0FNRV9IRUlHSFQpO1xuICBsZXQgZnJhbWVzID0gMDtcbiAgbGV0IG9ic3RhY2xlcyA9IHt9O1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGV2ZW50ID0+IHtcbiAgICBzd2l0Y2goZXZlbnQuY29kZSkge1xuICAgICAgY2FzZSAnRW50ZXInOlxuICAgICAgICBzdGFydEdhbWUoKTtcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gIH0pXG4gICAgXG4gIGZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcbiAgICBnYW1lTG9vcCgpO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG4gIH1cblxuICBmdW5jdGlvbiBnYW1lTG9vcCgpIHtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hUKTtcbiAgICBiZy5kcmF3QmFja2dyb3VuZChjdHgpO1xuICAgIGRyYXdQbGF0Zm9ybXMoKTtcbiAgICB1cGRhdGVPYnN0YWNsZXMoKTtcbiAgICBkcmF3T2JzdGFjbGVzKCk7XG4gICAgLy8gd3JpdGUgYWxnb3JpdGhtIHRvIG9ubHkgcGFzcyBpbiBwbGF0Zm9ybXMgJiBvYnN0YWNsZXMgaW4gY3VycmVudCB2cFxuICAgIGNoYXIudXBkYXRlKE9iamVjdC52YWx1ZXMocGxhdGZvcm1zKSwgT2JqZWN0LnZhbHVlcyhvYnN0YWNsZXMpKTtcbiAgICBjaGFyLmRyYXdDaGFyKGN0eCwgZnJhbWVzKTtcblxuICAgIGlmIChmcmFtZXMgPj0gNjApIHtcbiAgICAgIGZyYW1lcyA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZyYW1lcysrO1xuICAgIH1cblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG4gIH1cblxuICAvLyBwbGF0Zm9ybSA9IFtwb3NYLCBwb3NZLCB3aWR0aF1cbiAgbGV0IHBsYXRmb3JtcyA9IHtcbiAgICAxOiBbMjAwLCAzOTEwLCAxMDBdLFxuICAgIDI6IFszNTAsIDM4NzAsIDEwMF0sXG4gICAgMzogWzUwMCwgMzgzMCwgMTAwXSxcbiAgICA0OiBbNjUwLCAzNzkwLCAxMDBdLFxuICAgIDU6IFs4MDAsIDM3NTAsIDEwMF0sXG4gICAgNjogWzcwMCwgMzcxMCwgNTBdLFxuICAgIDc6IFs2MDAsIDM2NzAsIDUwXSxcbiAgICA4OiBbNTAwLCAzNjMwLCA1MF0sXG4gICAgOTogWzQwMCwgMzU5MCwgNTBdLFxuICAgIDEwOiBbMzAwLCAzNTUwLCA1MF0sXG4gICAgMTE6IFsyMDAsIDM1MDAsIDUwXSxcbiAgICAxMjogWzEwMCwgMzQ1MCwgNTBdLFxuICAgIDEzOiBbMjAwLCAzNDAwLCA1MF0sXG4gICAgMTQ6IFsxMDAsIDMzNTAsIDUwXSxcbiAgICAxNTogWzIwMCwgMzMwMCwgNTBdLFxuICAgIDE2OiBbMTAwLCAzMjUwLCA1MF0sXG4gIH07XG4gIFxuICBmdW5jdGlvbiBkcmF3UGxhdGZvcm1zKCkge1xuICAgIE9iamVjdC52YWx1ZXMocGxhdGZvcm1zKS5mb3JFYWNoKChwbGF0Zm9ybSwgaSkgPT4ge1xuICAgICAgbGV0IHAgPSBuZXcgUGxhdGZvcm0oLi4ucGxhdGZvcm0sIGkpO1xuICAgICAgcC5kcmF3UGxhdGZvcm0oY3R4KTtcbiAgICB9KVxuICB9O1xuXG4gIC8vIG9ic3RhY2xlID0gW3Bvc1gsIHBvc1ksIHJhZGl1cywgb3JpZW50YXRpb24sIHRyYXZlbExlbmd0aCwgY29sb3IsIHNwZWVkXVxuICBsZXQgbmV3T2JzdGFjbGVzID0ge1xuICAgIDE6IFs4MDAsIDM3NDAsIDUsIFwiaG9yaXpvbnRhbFwiLCAxMDAsIFwidmlvbGV0XCIsIC4xXSxcbiAgICAyOiBbMjI1LCAzMjUwLCAxMCwgXCJ2ZXJ0aWNhbFwiLCAzMDAsIFwiY3JpbXNvblwiLCAwLjVdLFxuICAgIDM6IFs1MDAsIDM0MDAsIDIwLCBcImhvcml6b250YWxcIiwgMzAwLCBcIkxpbWVHcmVlblwiLCAxLjBdLFxuICB9XG5cbiAgY3JlYXRlT2JzdGFjbGVzKCk7XG4gIFxuICBmdW5jdGlvbiBjcmVhdGVPYnN0YWNsZXMoKSB7XG4gICAgT2JqZWN0LnZhbHVlcyhuZXdPYnN0YWNsZXMpLmZvckVhY2goKG9ic3RhY2xlLCBpKSA9PiB7XG4gICAgICBvYnN0YWNsZXNbaV0gPSBuZXcgT2JzdGFjbGUoLi4ub2JzdGFjbGUpOztcbiAgICB9KVxuICB9O1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZU9ic3RhY2xlcygpIHtcbiAgICBPYmplY3QudmFsdWVzKG9ic3RhY2xlcykuZm9yRWFjaChvYnN0YWNsZSA9PiB7XG4gICAgICBvYnN0YWNsZS51cGRhdGUoKTtcbiAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBkcmF3T2JzdGFjbGVzKCkge1xuICAgIE9iamVjdC52YWx1ZXMob2JzdGFjbGVzKS5mb3JFYWNoKG9ic3RhY2xlID0+IHtcbiAgICAgIG9ic3RhY2xlLmRyYXdPYnN0YWNsZShjdHgpO1xuICAgIH0pO1xuICB9O1xuXG59KSJdLCJzb3VyY2VSb290IjoiIn0=