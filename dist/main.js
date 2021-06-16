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
            ctx.drawImage(_util__WEBPACK_IMPORTED_MODULE_0__.finnLeft, 480, 0, 32, 20, this.position.x, this.position.y, this.width, this.height);
          } else {
            ctx.drawImage(_util__WEBPACK_IMPORTED_MODULE_0__.finnLeft, 448, 0, 32, 20, this.position.x, this.position.y, this.width, this.height);
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
  this.jumpSFX = new Audio("./src/audio/maple-jump-sfx.mp3");
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
      case 'KeyW':
        // this.keys[event.code] = true
        if (!char.jumping && !char.falling && !char.colliding) {
          _this.jumpSFX.play();

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
      case 'KeyW':
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
/* harmony export */   "beemo": function() { return /* binding */ beemo; },
/* harmony export */   "finnBeemo": function() { return /* binding */ finnBeemo; }
/* harmony export */ });
var finnRight = new Image();
finnRight.src = './dist/images/FinnSprite-right.png';
var finnLeft = new Image();
finnLeft.src = './dist/images/FinnSprite-left.png';
var peaceBg = new Image();
peaceBg.src = './dist/images/peace-bg.png';
var beemo = new Image();
beemo.src = './dist/images/beemo.png';
var finnBeemo = new Image();
finnBeemo.src = './dist/images/finn-and-beemo.jpg';

/***/ }),

/***/ "./src/scripts/welcome.js":
/*!********************************!*\
  !*** ./src/scripts/welcome.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/scripts/util.js");


var welcomeModal = function welcomeModal(ctx, gameStart, GAME_WIDTH, GAME_HEIGHT) {
  if (!gameStart) {
    ctx.fillStyle = "lightslategrey";
    ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    ctx.fillStyle = "snow";
    ctx.font = 'bold 50px arial';
    ctx.fillText("Welcome to Jump Quest!", 225, 60);
    ctx.font = 'bold 30px arial';
    ctx.fillText("Beemo          is lost and needs your help!", 75, 150);
    ctx.fillText("Help Finn        navigate across the platforms to find him.", 75, 225);
    ctx.fillText("Be sure to dodge the flying obstacles using crouch or jump.", 75, 300);
    ctx.fillText("If you get hit, you may have to start from an earlier position.", 75, 375);
    ctx.font = 'bold 20px arial';
    ctx.fillText("- Horizontally moving balls will push you in their direction", 100, 410);
    ctx.fillText("- Vertically moving balls will knock you off of the platform", 100, 445);
    ctx.font = 'bold 30px arial';
    ctx.fillText("Good luck!!!", 75, 530);
    ctx.fillStyle = "gold";
    ctx.font = 'bold 20px arial';
    ctx.fillText("**If your screen height is smaller than 865 pixels, please zoom browser out to 80 or 90%**", 75, 600);
    ctx.fillText("Hold CTRL/CMD and tap the - key to zoom out", 90, 630);
    ctx.fillStyle = "snow";
    ctx.font = 'bold 40px arial';
    ctx.fillText("Press ENTER to begin!", 275, 710);
    ctx.fill();
    ctx.font = 'bold 20px arial';
    ctx.fillText("Game design by Chris Joo", 730, 790);
    ctx.fillText("Music by INSECURE MUSIC", 20, 790);
    ctx.fill();

    _util__WEBPACK_IMPORTED_MODULE_0__.beemo.onload = function () {
      ctx.drawImage(_util__WEBPACK_IMPORTED_MODULE_0__.beemo, 200, 125, 33, 40);
    };

    _util__WEBPACK_IMPORTED_MODULE_0__.finnRight.onload = function () {
      ctx.drawImage(_util__WEBPACK_IMPORTED_MODULE_0__.finnRight, 0, 0, 32, 20, 215, 195, 64, 40);
    };
  }
};

/* harmony default export */ __webpack_exports__["default"] = (welcomeModal);

/***/ }),

/***/ "./src/scripts/winner.js":
/*!*******************************!*\
  !*** ./src/scripts/winner.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/scripts/util.js");


var winnerModal = function winnerModal(ctx, GAME_WIDTH, GAME_HEIGHT) {
  ctx.fillStyle = "lightslategrey";
  ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  ctx.fillStyle = "snow";
  ctx.font = 'bold 50px arial';
  ctx.fillText("You saved Beemo!", 270, 120); // finnBeemo.onload = function() {

  ctx.drawImage(_util__WEBPACK_IMPORTED_MODULE_0__.finnBeemo, 140, 225, 728, 409); // }
};

/* harmony default export */ __webpack_exports__["default"] = (winnerModal);

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
/* harmony import */ var _scripts_welcome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/welcome */ "./src/scripts/welcome.js");
/* harmony import */ var _scripts_character__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/character */ "./src/scripts/character.js");
/* harmony import */ var _scripts_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/controller */ "./src/scripts/controller.js");
/* harmony import */ var _scripts_background__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/background */ "./src/scripts/background.js");
/* harmony import */ var _scripts_platform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/platform */ "./src/scripts/platform.js");
/* harmony import */ var _scripts_obstacle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scripts/obstacle */ "./src/scripts/obstacle.js");
/* harmony import */ var _scripts_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scripts/util */ "./src/scripts/util.js");
/* harmony import */ var _scripts_winner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./scripts/winner */ "./src/scripts/winner.js");
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
  var ctx = canvas.getContext("2d"); // game variables

  var gameStart = false;
  var GAME_WIDTH = canvas.width; // 1000

  var GAME_HEIGHT = canvas.height; // 800

  var char = new _scripts_character__WEBPACK_IMPORTED_MODULE_2__.default(GAME_WIDTH, GAME_HEIGHT);
  new _scripts_controller__WEBPACK_IMPORTED_MODULE_3__.default(char);
  var bg = new _scripts_background__WEBPACK_IMPORTED_MODULE_4__.default(GAME_WIDTH, GAME_HEIGHT);
  var frames = 0;
  var obstacles = {}; // controls/how-to-play variables

  var controlsShown = false;
  var controlsBtn = document.getElementById("controls-btn");
  var controls = document.getElementById('controls'); // audio/bgm variables

  var bgm = new Audio("./src/audio/good-morning-insecure.mp3");
  var musicPlaying = false;
  var musicBtn = document.getElementById("music-btn");
  var playBtn = document.getElementById("play-btn");
  var pauseBtn = document.getElementById("pause-btn");
  controlsBtn.addEventListener("click", function (e) {
    e.preventDefault();

    if (controlsShown) {
      controlsShown = false;
      controls.classList.add("hidden");
      controlsBtn.classList.remove("clicked");
    } else {
      controlsShown = true;
      controls.classList.remove("hidden");
      controlsBtn.classList.add("clicked");
    }

    ;
  });
  musicBtn.addEventListener("click", function (e) {
    e.preventDefault();

    if (musicPlaying) {
      musicPlaying = false;
      bgm.pause();
      pauseBtn.classList.add("hidden");
      playBtn.classList.remove("hidden");
    } else {
      musicPlaying = true;
      bgm.loop = true;
      bgm.play();
      pauseBtn.classList.remove("hidden");
      playBtn.classList.add("hidden");
    }
  });
  document.addEventListener("keydown", function (event) {
    switch (event.code) {
      case 'Enter':
        if (!gameStart) {
          if (!musicPlaying) {
            musicPlaying = true;
            bgm.loop = true;
            pauseBtn.classList.remove("hidden");
            playBtn.classList.add("hidden");
            bgm.play();
          }

          gameStart = true;
          startGame(); // startAnimating(240)

          break;
        }

      default:
        return;
    }
  }); // let fps, interval, startTime, now, then, elapsed;
  // function startAnimating(fps) {
  //   interval = 1000 / fps;
  //   then = Date.now();
  //   startTime = then;
  //   animate();
  // }
  // function animate() {
  //   now = Date.now();
  //   elapsed = now - then;
  //   if (elapsed > interval) {
  //     then = now - (elapsed % interval);
  //     gameLoop();
  //   };
  //   requestAnimationFrame(animate);
  // }

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
    ctx.drawImage(_scripts_util__WEBPACK_IMPORTED_MODULE_7__.beemo, 0, 0, 33, 40, 0, 10, 33, 40);

    if (char.position.x <= 10 && char.position.y <= 10) {
      musicPlaying = false;
      bgm.pause();
      pauseBtn.classList.add("hidden");
      playBtn.classList.remove("hidden");
      (0,_scripts_winner__WEBPACK_IMPORTED_MODULE_8__.default)(ctx, GAME_WIDTH, GAME_HEIGHT);
    }

    if (frames >= 60) {
      frames = 0;
    } else {
      frames++;
    }

    requestAnimationFrame(gameLoop); // requestAnimationFrame(animate);
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
      var p = _construct(_scripts_platform__WEBPACK_IMPORTED_MODULE_5__.default, _toConsumableArray(platform).concat([i]));

      p.drawPlatform(ctx);
    });
  }

  ; // obstacle = [posX, posY, radius, orientation, travelLength, color, speed]
  // obstacle speeds for 240 FPS.

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
  }; // obstacle speeds for 60 FPS.
  // let newObstacles = {
  //   1: [750, 570, 5, "horizontal", 100, "violet", 0.4],
  //   2: [625, 450, 5, "horizontal", 200, "forestgreen", 1.2],
  //   3: [225, 450, 5, "horizontal", 200, "forestgreen", 1.2],
  //   4: [525, 350, 5, "vertical", 150, "skyblue", 1.2],
  //   5: [75, 300, 5, "vertical", 150, "skyblue", 1.2],
  //   6: [325, 260, 10, "vertical", 100, "crimson", 1.2],
  //   7: [625, 260, 10, "vertical", 100, "crimson", 1.2],
  //   8: [350, 260, 10, "horizontal", 250, "indigo", 1.5],
  //   9: [650, 195, 5, "horizontal", 250, "orange", 2],
  //   10: [600, 150, 10, "horizontal", 250, "indigo", 1.5],
  //   11: [525, 20, 5, "vertical", 140, "maroon", 1.2],
  //   12: [350, 60, 5, "vertical", 140, "MediumSlateBlue", 1.6],
  //   13: [250, 60, 5, "vertical", 140, "MediumSlateBlue", 1.6],
  // }

  createObstacles();

  function createObstacles() {
    Object.values(newObstacles).forEach(function (obstacle, i) {
      obstacles[i] = _construct(_scripts_obstacle__WEBPACK_IMPORTED_MODULE_6__.default, _toConsumableArray(obstacle));
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
  (0,_scripts_welcome__WEBPACK_IMPORTED_MODULE_1__.default)(ctx, gameStart, GAME_WIDTH, GAME_HEIGHT);
});
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qdW1wcXVlc3QvLi9zcmMvc2NyaXB0cy9iYWNrZ3JvdW5kLmpzIiwid2VicGFjazovL2p1bXBxdWVzdC8uL3NyYy9zY3JpcHRzL2NoYXJhY3Rlci5qcyIsIndlYnBhY2s6Ly9qdW1wcXVlc3QvLi9zcmMvc2NyaXB0cy9jb250cm9sbGVyLmpzIiwid2VicGFjazovL2p1bXBxdWVzdC8uL3NyYy9zY3JpcHRzL29ic3RhY2xlLmpzIiwid2VicGFjazovL2p1bXBxdWVzdC8uL3NyYy9zY3JpcHRzL3BsYXRmb3JtLmpzIiwid2VicGFjazovL2p1bXBxdWVzdC8uL3NyYy9zY3JpcHRzL3V0aWwuanMiLCJ3ZWJwYWNrOi8vanVtcHF1ZXN0Ly4vc3JjL3NjcmlwdHMvd2VsY29tZS5qcyIsIndlYnBhY2s6Ly9qdW1wcXVlc3QvLi9zcmMvc2NyaXB0cy93aW5uZXIuanMiLCJ3ZWJwYWNrOi8vanVtcHF1ZXN0Ly4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIiwid2VicGFjazovL2p1bXBxdWVzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qdW1wcXVlc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2p1bXBxdWVzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2p1bXBxdWVzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2p1bXBxdWVzdC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJCYWNrZ3JvdW5kIiwiYmdXaWR0aCIsImJnSGVpZ2h0Iiwid2lkdGgiLCJoZWlnaHQiLCJwb3NZIiwiY3R4IiwiZHJhd0ltYWdlIiwicGVhY2VCZyIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiZmlsbCIsIkNoYXJhY3RlciIsImdhbWVXaWR0aCIsImdhbWVIZWlnaHQiLCJkaXJlY3Rpb24iLCJtb3ZlU3BlZWQiLCJqdW1wSGVpZ2h0IiwiY3JvdWNoaW5nIiwianVtcGluZyIsImZhbGxpbmciLCJpc0NvbGxpZGluZyIsInBvc2l0aW9uIiwieCIsInkiLCJ2ZWxvY2l0eSIsImNvbnN0YW50cyIsImdyYXZpdHkiLCJmcmljdGlvbiIsImtleXMiLCJmcmFtZXMiLCJmaW5uTGVmdCIsIm1vdmluZyIsImZpbm5SaWdodCIsInBsYXRmb3JtcyIsIm9ic3RhY2xlcyIsImkiLCJsZW5ndGgiLCJwbGF0Zm9ybSIsIm9uUGxhdGZvcm0iLCJvYnN0YWNsZSIsImNvbGxpc2lvbkRldGVjdGlvbiIsIm9yaWVudGF0aW9uIiwiY2hhclBvcyIsIm8iLCJyIiwicmFkaXVzIiwiYyIsInciLCJoIiwiZGlzdFgiLCJNYXRoIiwiYWJzIiwiZGlzdFkiLCJkeCIsImR5IiwicG93IiwiQ29udHJvbGxlciIsImNoYXIiLCJqdW1wU0ZYIiwiQXVkaW8iLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImNvZGUiLCJ1cGRhdGVLZXlzIiwiY3JvdWNoIiwiY29sbGlkaW5nIiwicGxheSIsImp1bXAiLCJzdG9wIiwidW5jcm91Y2giLCJPYnN0YWNsZSIsInBvc1giLCJ0cmF2ZWxMZW5ndGgiLCJjb2xvciIsInNwZWVkIiwiaW5pdFBvcyIsInRyYXZlbExlbiIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImFyYyIsIlBJIiwic3Ryb2tlIiwiUGxhdGZvcm0iLCJpbmRleCIsIkltYWdlIiwic3JjIiwiYmVlbW8iLCJmaW5uQmVlbW8iLCJ3ZWxjb21lTW9kYWwiLCJnYW1lU3RhcnQiLCJHQU1FX1dJRFRIIiwiR0FNRV9IRUlHSFQiLCJmb250IiwiZmlsbFRleHQiLCJ3aW5uZXJNb2RhbCIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwiZ2V0Q29udGV4dCIsImJnIiwiY29udHJvbHNTaG93biIsImNvbnRyb2xzQnRuIiwiY29udHJvbHMiLCJiZ20iLCJtdXNpY1BsYXlpbmciLCJtdXNpY0J0biIsInBsYXlCdG4iLCJwYXVzZUJ0biIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInBhdXNlIiwibG9vcCIsInN0YXJ0R2FtZSIsImdhbWVMb29wIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2xlYXJSZWN0IiwiZHJhd0JhY2tncm91bmQiLCJkcmF3UGxhdGZvcm1zIiwidXBkYXRlT2JzdGFjbGVzIiwiZHJhd09ic3RhY2xlcyIsInVwZGF0ZSIsIk9iamVjdCIsInZhbHVlcyIsImRyYXdDaGFyIiwiZm9yRWFjaCIsInAiLCJkcmF3UGxhdGZvcm0iLCJuZXdPYnN0YWNsZXMiLCJjcmVhdGVPYnN0YWNsZXMiLCJkcmF3T2JzdGFjbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztJQUVNQSxVO0FBQ0osc0JBQVlDLE9BQVosRUFBcUJDLFFBQXJCLEVBQStCO0FBQUE7O0FBQzdCLFNBQUtDLEtBQUwsR0FBYUYsT0FBYjtBQUNBLFNBQUtHLE1BQUwsR0FBY0YsUUFBZDtBQUNBLFNBQUtHLElBQUwsR0FBWSxJQUFaO0FBQ0Q7Ozs7V0FFRCx3QkFBZUMsR0FBZixFQUFvQjtBQUNsQjtBQUNBO0FBQ0E7QUFFQUEsU0FBRyxDQUFDQyxTQUFKLENBQWNDLDBDQUFkLEVBQXVCLENBQXZCLEVBQTBCLENBQTFCLEVBQTZCLElBQTdCLEVBQW1DLEdBQW5DLEVBQXdDLENBQXhDLEVBQTJDLENBQTNDLEVBQThDLElBQTlDLEVBQW9ELEdBQXBEO0FBQ0FGLFNBQUcsQ0FBQ0csU0FBSixHQUFnQixTQUFoQjtBQUNBSCxTQUFHLENBQUNJLFFBQUosQ0FBYSxDQUFiLEVBQWdCLEtBQUtOLE1BQUwsR0FBYyxFQUE5QixFQUFrQyxLQUFLRCxLQUF2QyxFQUE4QyxLQUFLQyxNQUFuRDtBQUNBRSxTQUFHLENBQUNLLElBQUo7QUFDRDs7Ozs7O0FBR0gsK0RBQWVYLFVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJBOztJQUVNWSxTO0FBQ0oscUJBQVlDLFNBQVosRUFBdUJDLFVBQXZCLEVBQW1DO0FB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QixHQUF6QixFQUE4QixpQkFBOUIsRUFBaUQsR0FBakQsQ0FaYTtBQWFqQixRQUFJLENBQUMsR0FBRCxFQUFNLEVBQU4sRUFBVSxDQUFWLEVBQWEsVUFBYixFQUF5QixHQUF6QixFQUE4QixpQkFBOUIsRUFBaUQsR0FBakQ7QUFiYSxHQUFuQixDQXZMa0QsQ0FzTWxEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBQyxpQkFBZTs7QUFFZixXQUFTQSxlQUFULEdBQTJCO0FBQ3pCUCxVQUFNLENBQUNDLE1BQVAsQ0FBY0ssWUFBZCxFQUE0QkgsT0FBNUIsQ0FBb0MsVUFBQ3hGLFFBQUQsRUFBV0osQ0FBWCxFQUFpQjtBQUNuREQsZUFBUyxDQUFDQyxDQUFELENBQVQsY0FBbUJvQyxzREFBbkIscUJBQStCaEMsUUFBL0I7QUFBeUM7QUFDMUMsS0FGRDtBQUdEOztBQUFBOztBQUVELFdBQVNrRixlQUFULEdBQTJCO0FBQ3pCRyxVQUFNLENBQUNDLE1BQVAsQ0FBYzNGLFNBQWQsRUFBeUI2RixPQUF6QixDQUFpQyxVQUFBeEYsUUFBUSxFQUFJO0FBQzNDQSxjQUFRLENBQUNvRixNQUFUO0FBQ0QsS0FGRDtBQUdEOztBQUFBOztBQUVELFdBQVNELGFBQVQsR0FBeUI7QUFDdkJFLFVBQU0sQ0FBQ0MsTUFBUCxDQUFjM0YsU0FBZCxFQUF5QjZGLE9BQXpCLENBQWlDLFVBQUF4RixRQUFRLEVBQUk7QUFDM0NBLGNBQVEsQ0FBQzZGLFlBQVQsQ0FBc0IvSCxHQUF0QjtBQUNELEtBRkQ7QUFHRDs7QUFBQTtBQUVEb0YsMkRBQVksQ0FBQ3BGLEdBQUQsRUFBTXFGLFNBQU4sRUFBaUJDLFVBQWpCLEVBQTZCQyxXQUE3QixDQUFaO0FBRUQsQ0E3T0QsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcGVhY2VCZyB9IGZyb20gJy4vdXRpbCc7XG5cbmNsYXNzIEJhY2tncm91bmQge1xuICBjb25zdHJ1Y3RvcihiZ1dpZHRoLCBiZ0hlaWdodCkge1xuICAgIHRoaXMud2lkdGggPSBiZ1dpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gYmdIZWlnaHQ7XG4gICAgdGhpcy5wb3NZID0gMzIwMDtcbiAgfVxuXG4gIGRyYXdCYWNrZ3JvdW5kKGN0eCkge1xuICAgIC8vIGN0eC5maWxsU3R5bGUgPSBcIk1pc3R5Um9zZVwiO1xuICAgIC8vIGN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCAtIDIwKTtcbiAgICAvLyBjdHguZmlsbCgpO1xuXG4gICAgY3R4LmRyYXdJbWFnZShwZWFjZUJnLCAwLCAwLCAxMDAwLCA4MDAsIDAsIDAsIDEwMDAsIDgwMCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiIzAwMzMwMFwiO1xuICAgIGN0eC5maWxsUmVjdCgwLCB0aGlzLmhlaWdodCAtIDIwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgY3R4LmZpbGwoKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYWNrZ3JvdW5kOyIsImltcG9ydCB7IGZpbm5SaWdodCwgZmlubkxlZnQgfSBmcm9tICcuL3V0aWwnO1xuXG5jbGFzcyBDaGFyYWN0ZXIge1xuICBjb25zdHJ1Y3RvcihnYW1lV2lkdGgsIGdhbWVIZWlnaHQpIHtcbiAgICB0aGlzLmdhbWVXaWR0aCA9IGdhbWVXaWR0aDtcbiAgICB0aGlzLmdhbWVIZWlnaHQgPSBnYW1lSGVpZ2h0O1xuICAgIHRoaXMud2lkdGggPSA2NDtcbiAgICB0aGlzLmhlaWdodCA9IDQwO1xuICAgIHRoaXMuZGlyZWN0aW9uID0gXCJyaWdodFwiO1xuICAgIHRoaXMubW92ZVNwZWVkID0gLjc1O1xuICAgIHRoaXMuanVtcEhlaWdodCA9IC0xMDtcbiAgICB0aGlzLmNyb3VjaGluZyA9IGZhbHNlO1xuICAgIHRoaXMuanVtcGluZyA9IGZhbHNlO1xuICAgIHRoaXMuZmFsbGluZyA9IGZhbHNlO1xuICAgIHRoaXMuaXNDb2xsaWRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgeDogNTAsXG4gICAgICB5OiB0aGlzLmdhbWVIZWlnaHQgLSB0aGlzLmhlaWdodCAtIDIwLFxuICAgIH07XG4gICAgdGhpcy52ZWxvY2l0eSA9IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwLFxuICAgIH07XG4gICAgdGhpcy5jb25zdGFudHMgPSB7XG4gICAgICBncmF2aXR5OiAwLjE1LFxuICAgICAgZnJpY3Rpb246IDAuOSxcbiAgICB9O1xuICAgIHRoaXMua2V5cyA9IHt9O1xuICB9XG5cbiAgZHJhd0NoYXIoY3R4LCBmcmFtZXMpIHtcbiAgICAvLyB0ZXN0aW5nIGNoYXJhY3RlciBib3VuZGFyaWVzXG4gICAgLy8gY3R4LnN0cm9rZVN0eWxlID0gXCJncmVlblwiO1xuICAgIC8vIGN0eC5tb3ZlVG8odGhpcy5wb3NpdGlvbi54KzIwLCB0aGlzLnBvc2l0aW9uLnkpO1xuICAgIC8vIGN0eC5saW5lVG8odGhpcy5wb3NpdGlvbi54KzIwLCAwKTtcbiAgICAvLyBjdHgubW92ZVRvKHRoaXMucG9zaXRpb24ueCt0aGlzLndpZHRoLTMwLCB0aGlzLnBvc2l0aW9uLnkpO1xuICAgIC8vIGN0eC5saW5lVG8odGhpcy5wb3NpdGlvbi54K3RoaXMud2lkdGgtMzAsIDApO1xuICAgIC8vIGN0eC5zdHJva2UoKTtcblxuICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PSAnbGVmdCcpIHtcbiAgICAgIGlmICh0aGlzLmlzQ29sbGlkaW5nKSB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoZmlubkxlZnQsIDM1MiwgMCwgMzIsIDIwLCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmp1bXBpbmcgfHwgdGhpcy5mYWxsaW5nKSB7IFxuICAgICAgICBjdHguZHJhd0ltYWdlKGZpbm5MZWZ0LCA0NDgsIDAsIDMyLCAyMCwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5tb3ZpbmcpIHtcbiAgICAgICAgaWYgKGZyYW1lcyA8IDIwKSB7XG4gICAgICAgICAgY3R4LmRyYXdJbWFnZShmaW5uTGVmdCwgNTQ0LCAwLCAzMiwgMjAsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZnJhbWVzID4gMjAgJiYgZnJhbWVzIDwgNDApIHsgXG4gICAgICAgICAgY3R4LmRyYXdJbWFnZShmaW5uTGVmdCwgNDgwLCAwLCAzMiwgMjAsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY3R4LmRyYXdJbWFnZShmaW5uTGVmdCwgNDQ4LCAwLCAzMiwgMjAsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZnJhbWVzIDwgNDApIHtcbiAgICAgICAgICBjdHguZHJhd0ltYWdlKGZpbm5MZWZ0LCA4NjQsIDAsIDMyLCAyMCwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjdHguZHJhd0ltYWdlKGZpbm5MZWZ0LCA4MDAsIDAsIDMyLCAyMCwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgfTtcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmICh0aGlzLmRpcmVjdGlvbiA9PSAncmlnaHQnKSB7XG4gICAgICBpZiAodGhpcy5pc0NvbGxpZGluZykgeyBcbiAgICAgICAgY3R4LmRyYXdJbWFnZShmaW5uUmlnaHQsIDUxMiwgMCwgMzIsIDIwLCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmp1bXBpbmcgfHwgdGhpcy5mYWxsaW5nKSB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoZmlublJpZ2h0LCA0ODAsIDAsIDMyLCAyMCwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5tb3ZpbmcpIHtcbiAgICAgICAgaWYgKGZyYW1lcyA8IDIwKSB7XG4gICAgICAgICAgY3R4LmRyYXdJbWFnZShmaW5uUmlnaHQsIDMyMCwgMCwgMzIsIDIwLCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB9IGVsc2UgaWYgKGZyYW1lcyA+IDIwICYmIGZyYW1lcyA8IDQwKSB7IFxuICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoZmlublJpZ2h0LCAzODQsIDAsIDMyLCAyMCwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjdHguZHJhd0ltYWdlKGZpbm5SaWdodCwgNDE2LCAwLCAzMiwgMjAsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZnJhbWVzIDwgNDApIHtcbiAgICAgICAgICBjdHguZHJhd0ltYWdlKGZpbm5SaWdodCwgMCwgMCwgMzIsIDIwLCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoZmlublJpZ2h0LCA2NCwgMCwgMzIsIDIwLCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlS2V5cyhrZXlzKSB7XG4gICAgdGhpcy5rZXlzID0ga2V5cztcbiAgfVxuXG4gIHN0b3AoKSB7XG4gICAgdGhpcy52ZWxvY2l0eS54ID0gMDtcbiAgICB0aGlzLnZlbG9jaXR5LnkgPSAwO1xuICB9XG5cbiAganVtcCgpIHtcbiAgICBpZiAodGhpcy5qdW1waW5nKSB7XG4gICAgICB0aGlzLnZlbG9jaXR5LnkgPSB0aGlzLmp1bXBIZWlnaHRcbiAgICB9XG4gIH1cblxuICBjcm91Y2goKSB7XG4gICAgdGhpcy5oZWlnaHQgPSAyMDtcbiAgfVxuXG4gIHVuY3JvdWNoKCkge1xuICAgIHRoaXMuaGVpZ2h0ID0gNDA7XG4gICAgdGhpcy52ZWxvY2l0eS55ID0gLTU7XG4gIH1cblxuICB1cGRhdGUocGxhdGZvcm1zLCBvYnN0YWNsZXMpIHtcbiAgICAvLyBjaGVjayBjdXJyZW50IGtleSBwcmVzc2VzXG4gICAgaWYgKHRoaXMua2V5c1snQXJyb3dMZWZ0J10gfHwgdGhpcy5rZXlzWydLZXlBJ10pIHtcbiAgICAgIHRoaXMudmVsb2NpdHkueCA9IC10aGlzLm1vdmVTcGVlZDtcbiAgICB9IGVsc2UgaWYgKHRoaXMua2V5c1snQXJyb3dSaWdodCddIHx8IHRoaXMua2V5c1snS2V5RCddKSB7XG4gICAgICB0aGlzLnZlbG9jaXR5LnggPSB0aGlzLm1vdmVTcGVlZDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tb3ZpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBjaGFyIG1vdmVtZW50c1xuICAgIHRoaXMucG9zaXRpb24ueSArPSB0aGlzLnZlbG9jaXR5Lnk7XG4gICAgdGhpcy5wb3NpdGlvbi54ICs9IHRoaXMudmVsb2NpdHkueDtcbiAgICB0aGlzLnZlbG9jaXR5LnkgKz0gdGhpcy5jb25zdGFudHMuZ3Jhdml0eTtcbiAgICB0aGlzLnZlbG9jaXR5LnggKj0gdGhpcy5jb25zdGFudHMuZnJpY3Rpb247XG4gICAgdGhpcy52ZWxvY2l0eS55ICo9IHRoaXMuY29uc3RhbnRzLmZyaWN0aW9uO1xuXG4gICAgLy8gaWYgY2hhciBpcyBnb2luZyBvZmYgc2NyZWVuLCBzdG9wIGF0IGVkZ2Ugb2Ygc2NyZWVuXG4gICAgaWYgKHRoaXMucG9zaXRpb24ueCA8PSAwKSB7XG4gICAgICB0aGlzLnBvc2l0aW9uLnggPSAwO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wb3NpdGlvbi54ID49IHRoaXMuZ2FtZVdpZHRoIC0gdGhpcy53aWR0aCkge1xuICAgICAgdGhpcy5wb3NpdGlvbi54ID0gdGhpcy5nYW1lV2lkdGggLSB0aGlzLndpZHRoO1xuICAgIH1cblxuICAgIC8vICoqV3JpdGUgY29kZSB0byBmaWx0ZXIgb3V0IHBsYXRmb3JtcyBOT1QgaW4gY3VycmVudCB2aWV3IGZyYW1lKipcbiAgICAvLyBjaGVjayBpZiBjaGFyIGlzIHN0YW5kaW5nIG9uIGFueSBwbGF0Zm9ybVxuICAgIC8vIGVsc2UgY2hlY2sgaWYgY2hhciBpcyBmYWxsaW5nIGJlbG93IGZsb29yIGxpbmVcbiAgICAvLyBlbHNlIGNoYXIgaXMgY3VycmVudGx5IGZhbGxpbmdcbiAgICBmb3IgKGxldCBpPTA7IGk8cGxhdGZvcm1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgcGxhdGZvcm0gPSBwbGF0Zm9ybXNbaV07XG4gICAgICBpZiAodGhpcy5vblBsYXRmb3JtKHRoaXMucG9zaXRpb24sIHBsYXRmb3JtKSkge1xuICAgICAgICB0aGlzLmZhbGxpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5qdW1waW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueSA9IHBsYXRmb3JtWzFdLXRoaXMuaGVpZ2h0O1xuICAgICAgICB0aGlzLnZlbG9jaXR5LnkgPSAwO1xuICAgICAgICBicmVhaztcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5wb3NpdGlvbi55ID49IHRoaXMuZ2FtZUhlaWdodC10aGlzLmhlaWdodC0yMCkge1xuICAgICAgICB0aGlzLmp1bXBpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5mYWxsaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueSA9IHRoaXMuZ2FtZUhlaWdodCAtIHRoaXMuaGVpZ2h0IC0gMjA7XG4gICAgICAgIHRoaXMudmVsb2NpdHkueSA9IDA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5mYWxsaW5nID0gdHJ1ZTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gKipXcml0ZSBjb2RlIHRvIGZpbHRlciBvdXQgb2JzdGFjbGVzIE5PVCBpbiBjdXJyZW50IHZpZXcgZnJhbWUqKlxuICAgIGZvciAobGV0IGk9MDsgaTxvYnN0YWNsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBvYnN0YWNsZSA9IG9ic3RhY2xlc1tpXTtcbiAgICAgIGlmICh0aGlzLmNvbGxpc2lvbkRldGVjdGlvbihvYnN0YWNsZSkpIHtcbiAgICAgICAgdGhpcy5pc0NvbGxpZGluZyA9IHRydWU7XG4gICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge3RoaXMuY29sbGlkaW5nID0gZmFsc2V9LCAxMDAwKTtcblxuICAgICAgICBpZiAob2JzdGFjbGUub3JpZW50YXRpb24gPT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PSAnbGVmdCcpIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCArPSAxNTtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSArPSAxO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggLT0gMTU7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnkgKz0gMTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKG9ic3RhY2xlLmRpcmVjdGlvbiA9PSBcIlJEXCIpIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCArPSAyMDtcbiAgICAgICAgICB9IGVsc2UgaWYgKG9ic3RhY2xlLmRpcmVjdGlvbiA9PSBcIkxVXCIpIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCAtPSAyMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmlzQ29sbGlkaW5nID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gIH07XG5cbiAgb25QbGF0Zm9ybShjaGFyUG9zLCBwbGF0Zm9ybSkge1xuICAgIC8vIGNoYXJQb3MgPSB7XG4gICAgLy8gICB4OiBjaGFyUG9zWCxcbiAgICAvLyAgIHk6IGNoYXJQb3NZLFxuICAgIC8vIH1cbiAgICAvLyBwbGF0Zm9ybSA9IFtwb3NYLCBwb3NZLCB3aWR0aF1cbiAgICBpZiAodGhpcy5jcm91Y2hpbmcpIHtcbiAgICAgIGlmICgoKGNoYXJQb3MueCArIHRoaXMud2lkdGggLTE1KSA+PSBwbGF0Zm9ybVswXSkgJiZcbiAgICAgICgoY2hhclBvcy54KzE1KSA8PSAocGxhdGZvcm1bMF0rcGxhdGZvcm1bMl0pKSAmJlxuICAgICAgKChjaGFyUG9zLnkgKyAyMCkgPD0gcGxhdGZvcm1bMV0pICYmXG4gICAgICAoKGNoYXJQb3MueSArIDIwKSA+PSBwbGF0Zm9ybVsxXS0yKSl7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICgoKGNoYXJQb3MueCArIHRoaXMud2lkdGggLTE1KSA+PSBwbGF0Zm9ybVswXSkgJiZcbiAgICAgICgoY2hhclBvcy54KzE1KSA8PSAocGxhdGZvcm1bMF0rcGxhdGZvcm1bMl0pKSAmJlxuICAgICAgKChjaGFyUG9zLnkgKyA0MCkgPD0gcGxhdGZvcm1bMV0pICYmXG4gICAgICAoKGNoYXJQb3MueSArIDQwKSA+PSBwbGF0Zm9ybVsxXS0yKSl7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH07XG4gICAgfTtcbiAgfVxuXG4gIC8vIHJldHVybiB0cnVlIGlmIGFuIG9ic3RhY2xlIGNvbGxpZGVzIHdpdGggdXNlclxuICBjb2xsaXNpb25EZXRlY3Rpb24ob2JzdGFjbGUpIHtcbiAgICBsZXQgbyA9IHtcbiAgICAgIHg6IG9ic3RhY2xlLnBvc2l0aW9uLngsXG4gICAgICB5OiBvYnN0YWNsZS5wb3NpdGlvbi55LFxuICAgICAgcjogb2JzdGFjbGUucmFkaXVzXG4gICAgfTtcbiAgICBsZXQgYyA9IHtcbiAgICAgIHg6IHRoaXMucG9zaXRpb24ueCArIDIwLFxuICAgICAgeTogdGhpcy5wb3NpdGlvbi55LFxuICAgICAgdzogdGhpcy53aWR0aC0zMCxcbiAgICAgIGg6IHRoaXMuaGVpZ2h0XG4gICAgfVxuXG4gICAgLy8gZmluZCBob3Jpei92ZXJ0IGRpc3RhbmNlIGIvdyBjZW50ZXIgb2Ygb2JzdGFjbGUgJiBjaGFyYWN0ZXJcbiAgICBsZXQgZGlzdFggPSBNYXRoLmFicyhvLnggLSBjLnggLSBjLncvMik7XG4gICAgbGV0IGRpc3RZID0gTWF0aC5hYnMoby55IC0gYy55IC0gYy5oLzIpO1xuXG4gICAgLy8gcmV0dXJuIGZhbHNlIGlmIGRpc3QgaXMgZ3JlYXRlciB0aGFuIG1pbiBkaXN0IGIvdyBlZGdlcyAoeCBvciB5KVxuICAgIGlmICgoZGlzdFggPiAoYy53LzIgKyBvLnIpKSB8fCAoZGlzdFkgPiAoYy5oLzIgKyBvLnIpKSkge3JldHVybiBmYWxzZX07XG5cbiAgICAvLyByZXR1cm4gdHJ1ZSBpZiBkaXN0IGlzIDw9IGNoYXIgd2lkdGgvMlxuICAgIGlmICgoZGlzdFggPD0gKGMudy8yKSkgJiYgKGRpc3RZIDw9IChjLmgvMikpKSB7cmV0dXJuIHRydWV9O1xuXG4gICAgLy8gZHggJiBkeSA9IGRpc3QgYi93IG9ic3RhY2xlIGNlbnRlciAmIGNoYXIgZWRnZSAoeCAmIHkpXG4gICAgbGV0IGR4ID0gZGlzdFggLSBjLncgLyAyO1xuICAgIGxldCBkeSA9IGRpc3RZIC0gYy5oIC8gMjtcblxuICAgIC8vIHVzZSBweXRoYWdvcmVhbiB0aGVvcmVtIHRvIHNlZSBpZiByYWRpdXNeMiAgXG4gICAgLy8gaXMgZ3JlYXRlciB0aGFuIGh5cG90ZW51c2Ugb2YgZHheMiArIGR5XjIgXG4gICAgLy8gaWYgZ3JlYXRlciwgb2JqZWN0IGFuZCBjaGFyIGFyZSBjb2xsaWRpbmcgKHRydWUpXG4gICAgcmV0dXJuIChNYXRoLnBvdyhkeCwyKSArIE1hdGgucG93KGR5LDIpIDw9IE1hdGgucG93KG8uciwyKSk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGFyYWN0ZXI7IiwiY2xhc3MgQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKGNoYXIpIHtcbiAgICB0aGlzLmtleXMgPSB7fTtcbiAgICB0aGlzLmp1bXBTRlggPSBuZXcgQXVkaW8oXCIuL3NyYy9hdWRpby9tYXBsZS1qdW1wLXNmeC5tcDNcIilcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICAgIHN3aXRjaCAoZXZlbnQuY29kZSkge1xuICAgICAgICBjYXNlICdBcnJvd0xlZnQnOlxuICAgICAgICBjYXNlICdLZXlBJzogIFxuICAgICAgICAgIHRoaXMua2V5c1tldmVudC5jb2RlXSA9IHRydWVcbiAgICAgICAgICBjaGFyLmRpcmVjdGlvbiA9IFwibGVmdFwiO1xuICAgICAgICAgIGNoYXIubW92aW5nID0gdHJ1ZTtcbiAgICAgICAgICBjaGFyLmtleXMgPSB0aGlzLmtleXM7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICBjYXNlICdLZXlEJzpcbiAgICAgICAgICB0aGlzLmtleXNbZXZlbnQuY29kZV0gPSB0cnVlXG4gICAgICAgICAgY2hhci5kaXJlY3Rpb24gPSBcInJpZ2h0XCI7XG4gICAgICAgICAgY2hhci5tb3ZpbmcgPSB0cnVlO1xuICAgICAgICAgIGNoYXIudXBkYXRlS2V5cyh0aGlzLmtleXMpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdBcnJvd0Rvd24nOlxuICAgICAgICBjYXNlICdLZXlTJzpcbiAgICAgICAgICAvLyB0aGlzLmtleXNbZXZlbnQuY29kZV0gPSB0cnVlXG4gICAgICAgICAgY2hhci5jcm91Y2hpbmcgPSB0cnVlO1xuICAgICAgICAgIGNoYXIuY3JvdWNoKCk7ICAgXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1NwYWNlJzpcbiAgICAgICAgY2FzZSAnS2V5Vyc6XG4gICAgICAgICAgLy8gdGhpcy5rZXlzW2V2ZW50LmNvZGVdID0gdHJ1ZVxuICAgICAgICAgIGlmICghY2hhci5qdW1waW5nICYmICFjaGFyLmZhbGxpbmcgJiYgIWNoYXIuY29sbGlkaW5nKSB7XG4gICAgICAgICAgICB0aGlzLmp1bXBTRlgucGxheSgpO1xuICAgICAgICAgICAgY2hhci5qdW1waW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIGNoYXIuanVtcCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2ZW50KSA9PiB7XG4gICAgICBzd2l0Y2ggKGV2ZW50LmNvZGUpIHtcbiAgICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcbiAgICAgICAgY2FzZSAnS2V5QSc6IFxuICAgICAgICAgIHRoaXMua2V5c1tldmVudC5jb2RlXSA9IGZhbHNlO1xuICAgICAgICAgIGNoYXIua2V5cyA9IHRoaXMua2V5cztcbiAgICAgICAgICBjaGFyLnN0b3AoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XG4gICAgICAgIGNhc2UgJ0tleUQnOlxuICAgICAgICAgIHRoaXMua2V5c1tldmVudC5jb2RlXSA9IGZhbHNlO1xuICAgICAgICAgIGNoYXIua2V5cyA9IHRoaXMua2V5cztcbiAgICAgICAgICBjaGFyLnN0b3AoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgY2FzZSAnS2V5Uyc6XG4gICAgICAgICAgLy8gdGhpcy5rZXlzW2V2ZW50LmNvZGVdID0gZmFsc2U7XG4gICAgICAgICAgY2hhci5jcm91Y2hpbmcgPSBmYWxzZTtcbiAgICAgICAgICBjaGFyLnVuY3JvdWNoKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1NwYWNlJzpcbiAgICAgICAgY2FzZSAnS2V5Vyc6XG4gICAgICAgICAgLy8gdGhpcy5rZXlzW2V2ZW50LmNvZGVdID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250cm9sbGVyOyIsImNsYXNzIE9ic3RhY2xlIHtcbiAgY29uc3RydWN0b3IocG9zWCwgcG9zWSwgcmFkaXVzLCBvcmllbnRhdGlvbiwgdHJhdmVsTGVuZ3RoLCBjb2xvciwgc3BlZWQpIHtcbiAgICB0aGlzLmluaXRQb3MgPSB7XG4gICAgICB4OiBwb3NYLFxuICAgICAgeTogcG9zWVxuICAgIH07XG4gICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgIHg6IHBvc1gsXG4gICAgICB5OiBwb3NZXG4gICAgfTtcbiAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcbiAgICB0aGlzLm9yaWVudGF0aW9uID0gb3JpZW50YXRpb247XG4gICAgdGhpcy50cmF2ZWxMZW4gPSB0cmF2ZWxMZW5ndGhcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xuICAgIHRoaXMuZGlyZWN0aW9uID0gXCJSRFwiOyAvLyBMVSA9IGxlZnQvdXAsIFJEID0gcmlnaHQvZG93biAoZGVwLiBvbiBvcmllbnRhdGlvbilcbiAgfVxuXG4gIGRyYXdPYnN0YWNsZShjdHgpIHtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgY3R4LmFyYyh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy5yYWRpdXMsIDAsIE1hdGguUEkgKiAyLCB0cnVlKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgY3R4LmZpbGwoKTtcbiAgfSBcblxuICB1cGRhdGUoKSB7XG4gICAgLy8gc2V0IGRpcmVjdGlvbiBvYnN0YWNsZSBzaG91bGQgbW92ZSBiYXNlZCBvbiBjdXJyZW50IHBvc2l0aW9uIChSRC9MVSlcbiAgICBpZiAodGhpcy5vcmllbnRhdGlvbiA9PSBcImhvcml6b250YWxcIikge1xuICAgICAgaWYgKHRoaXMucG9zaXRpb24ueCA8PSB0aGlzLmluaXRQb3MueCkge1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IFwiUkRcIlxuICAgICAgfSBlbHNlIGlmICh0aGlzLnBvc2l0aW9uLnggPj0gdGhpcy5pbml0UG9zLnggKyB0aGlzLnRyYXZlbExlbikge1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IFwiTFVcIlxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSB0aGlzLmRpcmVjdGlvbjtcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmICh0aGlzLm9yaWVudGF0aW9uID09IFwidmVydGljYWxcIikge1xuICAgICAgaWYgKHRoaXMucG9zaXRpb24ueSA8PSB0aGlzLmluaXRQb3MueSkge1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IFwiUkRcIlxuICAgICAgfSBlbHNlIGlmICh0aGlzLnBvc2l0aW9uLnkgPj0gdGhpcy5pbml0UG9zLnkgKyB0aGlzLnRyYXZlbExlbikge1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IFwiTFVcIlxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSB0aGlzLmRpcmVjdGlvbjtcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gXCJzdGF0aWNcIikge1xuICAgICAgXG4gICAgfTtcbiAgICBcbiAgICAvLyBtb3ZlIG9ic3RhY2xlIGFjY29yZGluZyB0byBpdHMgZGlyZWN0aW9uXG4gICAgaWYgKHRoaXMub3JpZW50YXRpb24gPT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PSBcIlJEXCIpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ICs9IHRoaXMuc3BlZWRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueCAtPSB0aGlzLnNwZWVkXG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAodGhpcy5vcmllbnRhdGlvbiA9PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PSBcIlJEXCIpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55ICs9IHRoaXMuc3BlZWRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueSAtPSB0aGlzLnNwZWVkXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IE9ic3RhY2xlO1xuXG4iLCJjbGFzcyBQbGF0Zm9ybSB7XG4gIGNvbnN0cnVjdG9yKHBvc1gsIHBvc1ksIHdpZHRoLCBpKSB7XG4gICAgdGhpcy5oZWlnaHQgPSAxNTtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgIHg6IHBvc1gsXG4gICAgICB5OiBwb3NZXG4gICAgfVxuICAgIHRoaXMuaW5kZXggPSBpO1xuICB9XG5cbiAgZHJhd1BsYXRmb3JtKGN0eCkge1xuICAgIGN0eC5maWxsU3R5bGUgPSBcImtoYWtpXCIsXG4gICAgY3R4LmZpbGxSZWN0KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgXG4gICAgLy8gcHJpbnRpbmcgcGxhdGZvcm0gaW5kZXgva2V5ICYgY29vcmRpbmF0ZXNcbiAgICAvLyBjdHguZmlsbFN0eWxlID0gXCJibGFja1wiOyBcbiAgICAvLyBjdHguZm9udCA9XCIxNHB4IHNlcmlmXCI7XG4gICAgLy8gY3R4LmZpbGxUZXh0KGAke3RoaXMuaW5kZXh9OiAke3RoaXMucG9zaXRpb24ueH0sICR7dGhpcy5wb3NpdGlvbi55fWAsIFxuICAgIC8vICAgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnkrMzMpO1xuXG4gICAgLy8gdGVzdGluZyBwbGF0Zm9ybSBib3VuZGFyaWVzXG4gICAgLy8gY3R4LmJlZ2luUGF0aCgpO1xuICAgIC8vIGN0eC5zdHJva2VTdHlsZSA9IFwiYmx1ZVwiO1xuICAgIC8vIGN0eC5tb3ZlVG8odGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnkpO1xuICAgIC8vIGN0eC5saW5lVG8odGhpcy5wb3NpdGlvbi54LCAwKTtcbiAgICAvLyBjdHgubW92ZVRvKHRoaXMucG9zaXRpb24ueCt0aGlzLndpZHRoLCB0aGlzLnBvc2l0aW9uLnkpO1xuICAgIC8vIGN0eC5saW5lVG8odGhpcy5wb3NpdGlvbi54K3RoaXMud2lkdGgsIDApO1xuICAgIC8vIGN0eC5zdHJva2UoKTtcbiAgfSBcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxhdGZvcm07XG5cbiIsImV4cG9ydCBjb25zdCBmaW5uUmlnaHQgPSBuZXcgSW1hZ2UoKTtcbmZpbm5SaWdodC5zcmMgPSAnLi9kaXN0L2ltYWdlcy9GaW5uU3ByaXRlLXJpZ2h0LnBuZyc7XG5leHBvcnQgY29uc3QgZmlubkxlZnQgPSBuZXcgSW1hZ2UoKTtcbmZpbm5MZWZ0LnNyYyA9ICcuL2Rpc3QvaW1hZ2VzL0Zpbm5TcHJpdGUtbGVmdC5wbmcnO1xuZXhwb3J0IGNvbnN0IHBlYWNlQmcgPSBuZXcgSW1hZ2UoKTtcbnBlYWNlQmcuc3JjID0gJy4vZGlzdC9pbWFnZXMvcGVhY2UtYmcucG5nJztcbmV4cG9ydCBjb25zdCBiZWVtbyA9IG5ldyBJbWFnZSgpO1xuYmVlbW8uc3JjID0gJy4vZGlzdC9pbWFnZXMvYmVlbW8ucG5nJztcbmV4cG9ydCBjb25zdCBmaW5uQmVlbW8gPSBuZXcgSW1hZ2UoKTtcbmZpbm5CZWVtby5zcmMgPSAnLi9kaXN0L2ltYWdlcy9maW5uLWFuZC1iZWVtby5qcGcnOyIsImltcG9ydCB7IGZpbm5SaWdodCwgYmVlbW8gfSBmcm9tICcuL3V0aWwnO1xuY29uc3Qgd2VsY29tZU1vZGFsID0gKGN0eCwgZ2FtZVN0YXJ0LCBHQU1FX1dJRFRILCBHQU1FX0hFSUdIVCkgPT4ge1xuXG4gIGlmICghZ2FtZVN0YXJ0KSB7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwibGlnaHRzbGF0ZWdyZXlcIjtcbiAgICBjdHguZmlsbFJlY3QoMCwgMCwgR0FNRV9XSURUSCwgR0FNRV9IRUlHSFQpO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcInNub3dcIjtcbiAgICBjdHguZm9udCA9ICdib2xkIDUwcHggYXJpYWwnO1xuICAgIGN0eC5maWxsVGV4dChcIldlbGNvbWUgdG8gSnVtcCBRdWVzdCFcIiwgMjI1LCA2MCk7XG4gICAgY3R4LmZvbnQgPSAnYm9sZCAzMHB4IGFyaWFsJztcbiAgICBjdHguZmlsbFRleHQoXCJCZWVtbyAgICAgICAgICBpcyBsb3N0IGFuZCBuZWVkcyB5b3VyIGhlbHAhXCIsIDc1LCAxNTApO1xuICAgIGN0eC5maWxsVGV4dChcIkhlbHAgRmlubiAgICAgICAgbmF2aWdhdGUgYWNyb3NzIHRoZSBwbGF0Zm9ybXMgdG8gZmluZCBoaW0uXCIsIDc1LCAyMjUpO1xuICAgIGN0eC5maWxsVGV4dChcIkJlIHN1cmUgdG8gZG9kZ2UgdGhlIGZseWluZyBvYnN0YWNsZXMgdXNpbmcgY3JvdWNoIG9yIGp1bXAuXCIsIDc1LCAzMDApO1xuICAgIGN0eC5maWxsVGV4dChcIklmIHlvdSBnZXQgaGl0LCB5b3UgbWF5IGhhdmUgdG8gc3RhcnQgZnJvbSBhbiBlYXJsaWVyIHBvc2l0aW9uLlwiLCA3NSwgMzc1KTtcblxuICAgIGN0eC5mb250ID0gJ2JvbGQgMjBweCBhcmlhbCc7XG4gICAgY3R4LmZpbGxUZXh0KFwiLSBIb3Jpem9udGFsbHkgbW92aW5nIGJhbGxzIHdpbGwgcHVzaCB5b3UgaW4gdGhlaXIgZGlyZWN0aW9uXCIsIDEwMCwgNDEwKTtcbiAgICBjdHguZmlsbFRleHQoXCItIFZlcnRpY2FsbHkgbW92aW5nIGJhbGxzIHdpbGwga25vY2sgeW91IG9mZiBvZiB0aGUgcGxhdGZvcm1cIiwgMTAwLCA0NDUpO1xuICAgIFxuICAgIGN0eC5mb250ID0gJ2JvbGQgMzBweCBhcmlhbCc7XG4gICAgY3R4LmZpbGxUZXh0KFwiR29vZCBsdWNrISEhXCIsIDc1LCA1MzApO1xuICAgIFxuICAgIGN0eC5maWxsU3R5bGUgPSBcImdvbGRcIjtcbiAgICBjdHguZm9udCA9ICdib2xkIDIwcHggYXJpYWwnO1xuICAgIGN0eC5maWxsVGV4dChcIioqSWYgeW91ciBzY3JlZW4gaGVpZ2h0IGlzIHNtYWxsZXIgdGhhbiA4NjUgcGl4ZWxzLCBwbGVhc2Ugem9vbSBicm93c2VyIG91dCB0byA4MCBvciA5MCUqKlwiLCA3NSwgNjAwKTtcbiAgICBjdHguZmlsbFRleHQoXCJIb2xkIENUUkwvQ01EIGFuZCB0YXAgdGhlIC0ga2V5IHRvIHpvb20gb3V0XCIsIDkwLCA2MzApO1xuICAgIFxuICAgIGN0eC5maWxsU3R5bGUgPSBcInNub3dcIjtcbiAgICBjdHguZm9udCA9ICdib2xkIDQwcHggYXJpYWwnO1xuICAgIGN0eC5maWxsVGV4dChcIlByZXNzIEVOVEVSIHRvIGJlZ2luIVwiLCAyNzUsIDcxMCk7XG4gICAgY3R4LmZpbGwoKTtcblxuICAgIGN0eC5mb250ID0gJ2JvbGQgMjBweCBhcmlhbCc7XG4gICAgY3R4LmZpbGxUZXh0KFwiR2FtZSBkZXNpZ24gYnkgQ2hyaXMgSm9vXCIsIDczMCwgNzkwKTtcbiAgICBjdHguZmlsbFRleHQoXCJNdXNpYyBieSBJTlNFQ1VSRSBNVVNJQ1wiLCAyMCwgNzkwKTtcblxuICAgIGN0eC5maWxsKCk7XG4gICAgXG4gICAgYmVlbW8ub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICBjdHguZHJhd0ltYWdlKGJlZW1vLCAyMDAsIDEyNSwgMzMsIDQwKTtcbiAgICB9XG4gICAgZmlublJpZ2h0Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgY3R4LmRyYXdJbWFnZShmaW5uUmlnaHQsIDAsIDAsIDMyLCAyMCwgMjE1LCAxOTUsIDY0LCA0MCk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3ZWxjb21lTW9kYWw7IiwiaW1wb3J0IHsgZmlubkJlZW1vIH0gZnJvbSAnLi91dGlsJztcblxuY29uc3Qgd2lubmVyTW9kYWwgPSAoY3R4LCBHQU1FX1dJRFRILCBHQU1FX0hFSUdIVCkgPT4ge1xuICBjdHguZmlsbFN0eWxlID0gXCJsaWdodHNsYXRlZ3JleVwiO1xuICBjdHguZmlsbFJlY3QoMCwgMCwgR0FNRV9XSURUSCwgR0FNRV9IRUlHSFQpO1xuICBjdHguZmlsbFN0eWxlID0gXCJzbm93XCI7XG4gIGN0eC5mb250ID0gJ2JvbGQgNTBweCBhcmlhbCc7XG4gIGN0eC5maWxsVGV4dChcIllvdSBzYXZlZCBCZWVtbyFcIiwgMjcwLCAxMjApO1xuICAvLyBmaW5uQmVlbW8ub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgY3R4LmRyYXdJbWFnZShmaW5uQmVlbW8sIDE0MCwgMjI1LCA3MjgsIDQwOSk7XG4gIC8vIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpbm5lck1vZGFsOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbi8vIGltcG9ydCBKdW1wUXVlc3QgZnJvbSBcIi4vc2NyaXB0cy9nYW1lXCI7XG5pbXBvcnQgd2VsY29tZU1vZGFsIGZyb20gJy4vc2NyaXB0cy93ZWxjb21lJztcbmltcG9ydCBDaGFyYWN0ZXIgZnJvbSBcIi4vc2NyaXB0cy9jaGFyYWN0ZXJcIjtcbmltcG9ydCBDb250cm9sbGVyIGZyb20gXCIuL3NjcmlwdHMvY29udHJvbGxlclwiO1xuaW1wb3J0IEJhY2tncm91bmQgZnJvbSBcIi4vc2NyaXB0cy9iYWNrZ3JvdW5kXCI7XG5pbXBvcnQgUGxhdGZvcm0gZnJvbSBcIi4vc2NyaXB0cy9wbGF0Zm9ybVwiO1xuaW1wb3J0IE9ic3RhY2xlIGZyb20gXCIuL3NjcmlwdHMvb2JzdGFjbGVcIjtcbmltcG9ydCB7IGJlZW1vIH0gZnJvbSAnLi9zY3JpcHRzL3V0aWwnO1xuaW1wb3J0IHdpbm5lck1vZGFsIGZyb20gJy4vc2NyaXB0cy93aW5uZXInO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImp1bXAtcXVlc3RcIik7XG4gIGxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gIC8vIGdhbWUgdmFyaWFibGVzXG4gIGxldCBnYW1lU3RhcnQgPSBmYWxzZTtcbiAgY29uc3QgR0FNRV9XSURUSCA9IGNhbnZhcy53aWR0aDsgLy8gMTAwMFxuICBjb25zdCBHQU1FX0hFSUdIVCA9IGNhbnZhcy5oZWlnaHQ7IC8vIDgwMFxuICBsZXQgY2hhciA9IG5ldyBDaGFyYWN0ZXIoR0FNRV9XSURUSCwgR0FNRV9IRUlHSFQpO1xuICBuZXcgQ29udHJvbGxlcihjaGFyKVxuICBsZXQgYmcgPSBuZXcgQmFja2dyb3VuZChHQU1FX1dJRFRILCBHQU1FX0hFSUdIVCk7XG4gIGxldCBmcmFtZXMgPSAwO1xuICBsZXQgb2JzdGFjbGVzID0ge307XG5cbiAgLy8gY29udHJvbHMvaG93LXRvLXBsYXkgdmFyaWFibGVzXG4gIGxldCBjb250cm9sc1Nob3duID0gZmFsc2U7XG4gIGxldCBjb250cm9sc0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udHJvbHMtYnRuXCIpO1xuICBsZXQgY29udHJvbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udHJvbHMnKTtcblxuICAvLyBhdWRpby9iZ20gdmFyaWFibGVzXG4gIGxldCBiZ20gPSBuZXcgQXVkaW8oXCIuL3NyYy9hdWRpby9nb29kLW1vcm5pbmctaW5zZWN1cmUubXAzXCIpO1xuICBsZXQgbXVzaWNQbGF5aW5nID0gZmFsc2U7XG4gIGxldCBtdXNpY0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXVzaWMtYnRuXCIpO1xuICBsZXQgcGxheUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheS1idG5cIik7XG4gIGxldCBwYXVzZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGF1c2UtYnRuXCIpO1xuXG4gIGNvbnRyb2xzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKGNvbnRyb2xzU2hvd24pIHtcbiAgICAgIGNvbnRyb2xzU2hvd24gPSBmYWxzZTtcbiAgICAgIGNvbnRyb2xzLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICBjb250cm9sc0J0bi5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udHJvbHNTaG93biA9IHRydWU7XG4gICAgICBjb250cm9scy5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgICAgY29udHJvbHNCdG4uY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIik7XG4gICAgfTtcbiAgfSk7XG5cbiAgbXVzaWNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAobXVzaWNQbGF5aW5nKSB7XG4gICAgICBtdXNpY1BsYXlpbmcgPSBmYWxzZTtcbiAgICAgIGJnbS5wYXVzZSgpO1xuICAgICAgcGF1c2VCdG4uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgIHBsYXlCdG4uY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbXVzaWNQbGF5aW5nID0gdHJ1ZTtcbiAgICAgIGJnbS5sb29wID0gdHJ1ZTtcbiAgICAgIGJnbS5wbGF5KCk7XG4gICAgICBwYXVzZUJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgICAgcGxheUJ0bi5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIH1cbiAgfSlcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBldmVudCA9PiB7XG4gICAgc3dpdGNoKGV2ZW50LmNvZGUpIHtcbiAgICAgIGNhc2UgJ0VudGVyJzpcbiAgICAgICAgaWYgKCFnYW1lU3RhcnQpIHtcbiAgICAgICAgICBpZiAoIW11c2ljUGxheWluZykge1xuICAgICAgICAgICAgbXVzaWNQbGF5aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIGJnbS5sb29wID0gdHJ1ZTtcbiAgICAgICAgICAgIHBhdXNlQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgICAgICAgICBwbGF5QnRuLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICAgICAgICBiZ20ucGxheSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBnYW1lU3RhcnQgPSB0cnVlO1xuICAgICAgICAgIHN0YXJ0R2FtZSgpO1xuICAgICAgICAgIC8vIHN0YXJ0QW5pbWF0aW5nKDI0MClcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm47XG4gICAgfVxuICB9KVxuICAgIFxuICAvLyBsZXQgZnBzLCBpbnRlcnZhbCwgc3RhcnRUaW1lLCBub3csIHRoZW4sIGVsYXBzZWQ7XG4gIC8vIGZ1bmN0aW9uIHN0YXJ0QW5pbWF0aW5nKGZwcykge1xuICAvLyAgIGludGVydmFsID0gMTAwMCAvIGZwcztcbiAgLy8gICB0aGVuID0gRGF0ZS5ub3coKTtcbiAgLy8gICBzdGFydFRpbWUgPSB0aGVuO1xuICAvLyAgIGFuaW1hdGUoKTtcbiAgLy8gfVxuXG4gIC8vIGZ1bmN0aW9uIGFuaW1hdGUoKSB7XG4gIC8vICAgbm93ID0gRGF0ZS5ub3coKTtcbiAgLy8gICBlbGFwc2VkID0gbm93IC0gdGhlbjtcbiAgLy8gICBpZiAoZWxhcHNlZCA+IGludGVydmFsKSB7XG4gIC8vICAgICB0aGVuID0gbm93IC0gKGVsYXBzZWQgJSBpbnRlcnZhbCk7XG4gIC8vICAgICBnYW1lTG9vcCgpO1xuICAvLyAgIH07XG5cbiAgLy8gICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gIC8vIH1cblxuICBmdW5jdGlvbiBzdGFydEdhbWUoKSB7XG4gICAgZ2FtZUxvb3AoKTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2FtZUxvb3AoKSB7XG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBHQU1FX1dJRFRILCBHQU1FX0hFSUdIVCk7XG4gICAgYmcuZHJhd0JhY2tncm91bmQoY3R4KTtcbiAgICBkcmF3UGxhdGZvcm1zKCk7XG4gICAgdXBkYXRlT2JzdGFjbGVzKCk7XG4gICAgZHJhd09ic3RhY2xlcygpO1xuICAgIC8vIHdyaXRlIGFsZ29yaXRobSB0byBvbmx5IHBhc3MgaW4gcGxhdGZvcm1zICYgb2JzdGFjbGVzIGluIGN1cnJlbnQgdnBcbiAgICBjaGFyLnVwZGF0ZShPYmplY3QudmFsdWVzKHBsYXRmb3JtcyksIE9iamVjdC52YWx1ZXMob2JzdGFjbGVzKSk7XG4gICAgY2hhci5kcmF3Q2hhcihjdHgsIGZyYW1lcyk7XG4gICAgY3R4LmRyYXdJbWFnZShiZWVtbywgMCwgMCwgMzMsIDQwLCAwLCAxMCwgMzMsIDQwKTtcblxuICAgIGlmICgoY2hhci5wb3NpdGlvbi54IDw9IDEwICkgJiYgKGNoYXIucG9zaXRpb24ueSA8PSAxMCkpIHtcbiAgICAgIG11c2ljUGxheWluZyA9IGZhbHNlO1xuICAgICAgYmdtLnBhdXNlKCk7XG4gICAgICBwYXVzZUJ0bi5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgcGxheUJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgICAgd2lubmVyTW9kYWwoY3R4LCBHQU1FX1dJRFRILCBHQU1FX0hFSUdIVCk7XG4gICAgfVxuXG4gICAgaWYgKGZyYW1lcyA+PSA2MCkge1xuICAgICAgZnJhbWVzID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgZnJhbWVzKys7XG4gICAgfVxuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcbiAgICAvLyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gIH1cblxuICAvLyBwbGF0Zm9ybSA9IFtwb3NYLCBwb3NZLCB3aWR0aF1cbiAgbGV0IHBsYXRmb3JtcyA9IHtcbiAgICAwOiBbMTUwLCA3NDAsIDEwMF0sXG4gICAgMTogWzMwMCwgNzAwLCAxMDBdLFxuICAgIDI6IFs0NTAsIDY2MCwgMTAwXSxcbiAgICAzOiBbNjAwLCA2MjAsIDEwMF0sXG4gICAgNDogWzc1MCwgNTgwLCAxMDBdLFxuICAgIDU6IFs4NTAsIDU0MCwgNTBdLFxuICAgIDY6IFs4MDAsIDUwMCwgNTBdLFxuICAgIDc6IFs3NTAsIDQ2MCwgNTBdLFxuICAgIDg6IFs3MDAsIDQyMCwgNTBdLFxuICAgIDk6IFs2NTAsIDQ2MCwgNTBdLFxuICAgIDEwOiBbNjAwLCA1MTAsIDUwXSxcbiAgICAxMTogWzU1MCwgNDYwLCA1MF0sXG4gICAgMTI6IFs1MDAsIDQyMCwgNTBdLFxuICAgIDEzOiBbNDUwLCA0NjAsIDUwXSxcbiAgICAxNDogWzQwMCwgNTEwLCA1MF0sXG4gICAgMTU6IFszNTAsIDQ2MCwgNTBdLFxuICAgIDE2OiBbMzAwLCA0MjAsIDUwXSxcbiAgICAxNzogWzI1MCwgNDYwLCA1MF0sXG4gICAgMTg6IFsyMDAsIDUxMCwgNTBdLFxuICAgIDE5OiBbMTUwLCA0NjAsIDUwXSxcbiAgICAyMDogWzEwMCwgNDIwLCA1MF0sXG4gICAgMjE6IFs1MCwgMzgwLCA1MF0sXG4gICAgMjI6IFsxMDAsIDM0MCwgNTBdLFxuICAgIDIzOiBbMjAwLCAzMDAsIDEwMF0sXG4gICAgMjQ6IFszNTAsIDMwMCwgMTAwXSxcbiAgICAyNTogWzUwMCwgMzAwLCAxMDBdLFxuICAgIDI2OiBbNjUwLCAzMDAsIDEwMF0sXG4gICAgMjc6IFs4MDAsIDI1MCwgNTBdLFxuICAgIDI4OiBbODUwLCAyMTAsIDUwXSxcbiAgICAyOTogWzgwMCwgMTcwLCA1MF0sXG4gICAgMzA6IFs3NTAsIDEzMCwgNTBdLFxuICAgIDMxOiBbNzAwLCAxNzAsIDUwXSxcbiAgICAzMjogWzY1MCwgMjEwLCA1MF0sXG4gICAgMzM6IFs2MDAsIDE3MCwgNTBdLFxuICAgIDM0OiBbNTUwLCAxMzAsIDUwXSxcbiAgICAzNTogWzUwMCwgOTAsIDUwXSxcbiAgICAzNjogWzQ1MCwgMTMwLCA1MF0sXG4gICAgMzc6IFsyMDAsIDEzMCwgMjAwXSxcbiAgICAzODogWzEyNSwgOTAsIDUwXSxcbiAgICAzOTogWzAsIDUwLCAxMDBdLFxuICAgIDQwOiBbOTAwLCA1MCwgMTAwXSxcbiAgfTtcbiAgXG4gIGZ1bmN0aW9uIGRyYXdQbGF0Zm9ybXMoKSB7XG4gICAgT2JqZWN0LnZhbHVlcyhwbGF0Zm9ybXMpLmZvckVhY2goKHBsYXRmb3JtLCBpKSA9PiB7XG4gICAgICBsZXQgcCA9IG5ldyBQbGF0Zm9ybSguLi5wbGF0Zm9ybSwgaSk7XG4gICAgICBwLmRyYXdQbGF0Zm9ybShjdHgpO1xuICAgIH0pXG4gIH07XG5cbiAgLy8gb2JzdGFjbGUgPSBbcG9zWCwgcG9zWSwgcmFkaXVzLCBvcmllbnRhdGlvbiwgdHJhdmVsTGVuZ3RoLCBjb2xvciwgc3BlZWRdXG4gIC8vIG9ic3RhY2xlIHNwZWVkcyBmb3IgMjQwIEZQUy5cbiAgbGV0IG5ld09ic3RhY2xlcyA9IHtcbiAgICAxOiBbNzUwLCA1NzAsIDUsIFwiaG9yaXpvbnRhbFwiLCAxMDAsIFwidmlvbGV0XCIsIDAuMV0sXG4gICAgMjogWzYyNSwgNDUwLCA1LCBcImhvcml6b250YWxcIiwgMjAwLCBcImZvcmVzdGdyZWVuXCIsIDAuM10sXG4gICAgMzogWzIyNSwgNDUwLCA1LCBcImhvcml6b250YWxcIiwgMjAwLCBcImZvcmVzdGdyZWVuXCIsIDAuM10sXG4gICAgNDogWzUyNSwgMzUwLCA1LCBcInZlcnRpY2FsXCIsIDE1MCwgXCJza3libHVlXCIsIDAuM10sXG4gICAgNTogWzc1LCAzMDAsIDUsIFwidmVydGljYWxcIiwgMTUwLCBcInNreWJsdWVcIiwgMC4zXSxcbiAgICA2OiBbMzI1LCAyNjAsIDEwLCBcInZlcnRpY2FsXCIsIDEwMCwgXCJjcmltc29uXCIsIDAuM10sXG4gICAgNzogWzYyNSwgMjYwLCAxMCwgXCJ2ZXJ0aWNhbFwiLCAxMDAsIFwiY3JpbXNvblwiLCAwLjNdLFxuICAgIDg6IFszNTAsIDI2MCwgMTAsIFwiaG9yaXpvbnRhbFwiLCAyNTAsIFwiaW5kaWdvXCIsIDAuMzc1XSxcbiAgICA5OiBbNjUwLCAxOTUsIDUsIFwiaG9yaXpvbnRhbFwiLCAyNTAsIFwib3JhbmdlXCIsIDAuNV0sXG4gICAgMTA6IFs2MDAsIDE1MCwgMTAsIFwiaG9yaXpvbnRhbFwiLCAyNTAsIFwiaW5kaWdvXCIsIDAuMzc1XSxcbiAgICAxMTogWzUyNSwgMjAsIDUsIFwidmVydGljYWxcIiwgMTQwLCBcIm1hcm9vblwiLCAwLjNdLFxuICAgIDEyOiBbMzUwLCA2MCwgNSwgXCJ2ZXJ0aWNhbFwiLCAxNDAsIFwiTWVkaXVtU2xhdGVCbHVlXCIsIDAuNF0sXG4gICAgMTM6IFsyNTAsIDYwLCA1LCBcInZlcnRpY2FsXCIsIDE0MCwgXCJNZWRpdW1TbGF0ZUJsdWVcIiwgMC40XSxcbiAgfVxuICAvLyBvYnN0YWNsZSBzcGVlZHMgZm9yIDYwIEZQUy5cbiAgLy8gbGV0IG5ld09ic3RhY2xlcyA9IHtcbiAgLy8gICAxOiBbNzUwLCA1NzAsIDUsIFwiaG9yaXpvbnRhbFwiLCAxMDAsIFwidmlvbGV0XCIsIDAuNF0sXG4gIC8vICAgMjogWzYyNSwgNDUwLCA1LCBcImhvcml6b250YWxcIiwgMjAwLCBcImZvcmVzdGdyZWVuXCIsIDEuMl0sXG4gIC8vICAgMzogWzIyNSwgNDUwLCA1LCBcImhvcml6b250YWxcIiwgMjAwLCBcImZvcmVzdGdyZWVuXCIsIDEuMl0sXG4gIC8vICAgNDogWzUyNSwgMzUwLCA1LCBcInZlcnRpY2FsXCIsIDE1MCwgXCJza3libHVlXCIsIDEuMl0sXG4gIC8vICAgNTogWzc1LCAzMDAsIDUsIFwidmVydGljYWxcIiwgMTUwLCBcInNreWJsdWVcIiwgMS4yXSxcbiAgLy8gICA2OiBbMzI1LCAyNjAsIDEwLCBcInZlcnRpY2FsXCIsIDEwMCwgXCJjcmltc29uXCIsIDEuMl0sXG4gIC8vICAgNzogWzYyNSwgMjYwLCAxMCwgXCJ2ZXJ0aWNhbFwiLCAxMDAsIFwiY3JpbXNvblwiLCAxLjJdLFxuICAvLyAgIDg6IFszNTAsIDI2MCwgMTAsIFwiaG9yaXpvbnRhbFwiLCAyNTAsIFwiaW5kaWdvXCIsIDEuNV0sXG4gIC8vICAgOTogWzY1MCwgMTk1LCA1LCBcImhvcml6b250YWxcIiwgMjUwLCBcIm9yYW5nZVwiLCAyXSxcbiAgLy8gICAxMDogWzYwMCwgMTUwLCAxMCwgXCJob3Jpem9udGFsXCIsIDI1MCwgXCJpbmRpZ29cIiwgMS41XSxcbiAgLy8gICAxMTogWzUyNSwgMjAsIDUsIFwidmVydGljYWxcIiwgMTQwLCBcIm1hcm9vblwiLCAxLjJdLFxuICAvLyAgIDEyOiBbMzUwLCA2MCwgNSwgXCJ2ZXJ0aWNhbFwiLCAxNDAsIFwiTWVkaXVtU2xhdGVCbHVlXCIsIDEuNl0sXG4gIC8vICAgMTM6IFsyNTAsIDYwLCA1LCBcInZlcnRpY2FsXCIsIDE0MCwgXCJNZWRpdW1TbGF0ZUJsdWVcIiwgMS42XSxcbiAgLy8gfVxuXG4gIGNyZWF0ZU9ic3RhY2xlcygpO1xuICBcbiAgZnVuY3Rpb24gY3JlYXRlT2JzdGFjbGVzKCkge1xuICAgIE9iamVjdC52YWx1ZXMobmV3T2JzdGFjbGVzKS5mb3JFYWNoKChvYnN0YWNsZSwgaSkgPT4ge1xuICAgICAgb2JzdGFjbGVzW2ldID0gbmV3IE9ic3RhY2xlKC4uLm9ic3RhY2xlKTs7XG4gICAgfSlcbiAgfTtcblxuICBmdW5jdGlvbiB1cGRhdGVPYnN0YWNsZXMoKSB7XG4gICAgT2JqZWN0LnZhbHVlcyhvYnN0YWNsZXMpLmZvckVhY2gob2JzdGFjbGUgPT4ge1xuICAgICAgb2JzdGFjbGUudXBkYXRlKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gZHJhd09ic3RhY2xlcygpIHtcbiAgICBPYmplY3QudmFsdWVzKG9ic3RhY2xlcykuZm9yRWFjaChvYnN0YWNsZSA9PiB7XG4gICAgICBvYnN0YWNsZS5kcmF3T2JzdGFjbGUoY3R4KTtcbiAgICB9KTtcbiAgfTtcblxuICB3ZWxjb21lTW9kYWwoY3R4LCBnYW1lU3RhcnQsIEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hUKTtcblxufSkiXSwic291cmNlUm9vdCI6IiJ9