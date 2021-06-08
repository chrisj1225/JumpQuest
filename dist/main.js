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
    ctx.fillText("Good luck!!!", 75, 550);
    ctx.font = 'bold 20px arial';
    ctx.fillText("(If your screen height is smaller than 865 pixels, please consider zooming out to 80-90%)", 75, 600);
    ctx.font = 'bold 40px arial';
    ctx.fillText("Press ENTER to begin!", 275, 700);
    ctx.fill();
    ctx.font = 'bold 20px arial';
    ctx.fillText("Game design by Chris Joo", 730, 780);
    ctx.fillText("Music by INSECURE MUSIC", 20, 780);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qdW1wcXVlc3QvLi9zcmMvc2NyaXB0cy9iYWNrZ3JvdW5kLmpzIiwid2VicGFjazovL2p1bXBxdWVzdC8uL3NyYy9zY3JpcHRzL2NoYXJhY3Rlci5qcyIsIndlYnBhY2s6Ly9qdW1wcXVlc3QvLi9zcmMvc2NyaXB0cy9jb250cm9sbGVyLmpzIiwid2VicGFjazovL2p1bXBxdWVzdC8uL3NyYy9zY3JpcHRzL29ic3RhY2xlLmpzIiwid2VicGFjazovL2p1bXBxdWVzdC8uL3NyYy9zY3JpcHRzL3BsYXRmb3JtLmpzIiwid2VicGFjazovL2p1bXBxdWVzdC8uL3NyYy9zY3JpcHRzL3V0aWwuanMiLCJ3ZWJwYWNrOi8vanVtcHF1ZXN0Ly4vc3JjL3NjcmlwdHMvd2VsY29tZS5qcyIsIndlYnBhY2s6Ly9qdW1wcXVlc3QvLi9zcmMvc2NyaXB0cy93aW5uZXIuanMiLCJ3ZWJwYWNrOi8vanVtcHF1ZXN0Ly4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIiwid2VicGFjazovL2p1bXBxdWVzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qdW1wcXVlc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2p1bXBxdWVzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2p1bXBxdWVzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2p1bXBxdWVzdC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJCYWNrZ3JvdW5kIiwiYmdXaWR0aCIsImJnSGVpZ2h0Iiwid2lkdGgiLCJoZWlnaHQiLCJwb3NZIiwiY3R4IiwiZHJhd0ltYWdlIiwicGVhY2VCZyIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiZmlsbCIsIkNoYXJhY3RlciIsImdhbWVXaWR0aCIsImdhbWVIZWlnaHQiLCJkaXJlY3Rpb24iLCJtb3ZlU3BlZWQiLCJqdW1wSGVpZ2h0IiwiY3JvdWNoaW5nIiwianVtcGluZyIsImZhbGxpbmciLCJpc0NvbGxpZGluZyIsInBvc2l0aW9uIiwieCIsInkiLCJ2ZWxvY2l0eSIsImNvbnN0YW50cyIsImdyYXZpdHkiLCJmcmljdGlvbiIsImtleXMiLCJmcmFtZXMiLCJmaW5uTGVmdCIsIm1vdmluZyIsImZpbm5SaWdodCIsInBsYXRmb3JtcyIsIm9ic3RhY2xlcyIsImkiLCJsZW5ndGgiLCJwbGF0Zm9ybSIsIm9uUGxhdGZvcm0iLCJvYnN0YWNsZSIsImNvbGxpc2lvbkRldGVjdGlvbiIsIm9yaWVudGF0aW9uIiwiY2hhclBvcyIsIm8iLCJyIiwicmFkaXVzIiwiYyIsInciLCJoIiwiZGlzdFgiLCJNYXRoIiwiYWJzIiwiZGlzdFkiLCJkeCIsImR5IiwicG93IiwiQ29udHJvbGxlciIsImNoYXIiLCJqdW1wU0ZYIiwiQXVkaW8iLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImNvZGUiLCJ1cGRhdGVLZXlzIiwiY3JvdWNoIiwiY29sbGlkaW5nIiwicGxheSIsImp1bXAiLCJzdG9wIiwidW5jcm91Y2giLCJPYnN0YWNsZSIsInBvc1giLCJ0cmF2ZWxMZW5ndGgiLCJjb2xvciIsInNwZWVkIiwiaW5pdFBvcyIsInRyYXZlbExlbiIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImFyYyIsIlBJIiwic3Ryb2tlIiwiUGxhdGZvcm0iLCJpbmRleCIsIkltYWdlIiwic3JjIiwiYmVlbW8iLCJmaW5uQmVlbW8iLCJ3ZWxjb21lTW9kYWwiLCJnYW1lU3RhcnQiLCJHQU1FX1dJRFRIIiwiR0FNRV9IRUlHSFQiLCJmb250IiwiZmlsbFRleHQiLCJ3aW5uZXJNb2RhbCIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwiZ2V0Q29udGV4dCIsImJnIiwiY29udHJvbHNTaG93biIsImNvbnRyb2xzQnRuIiwiY29udHJvbHMiLCJiZ20iLCJtdXNpY1BsYXlpbmciLCJtdXNpY0J0biIsInBsYXlCdG4iLCJwYXVzZUJ0biIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInBhdXNlIiwibG9vcCIsInN0YXJ0R2FtZSIsImdhbWVMb29wIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2xlYXJSZWN0IiwiZHJhd0JhY2tncm91bmQiLCJkcmF3UGxhdGZvcm1zIiwidXBkYXRlT2JzdGFjbGVzIiwiZHJhd09ic3RhY2xlcyIsInVwZGF0ZSIsIk9iamVjdCIsInZhbHVlcyIsImRyYXdDaGFyIiwiZm9yRWFjaCIsInAiLCJkcmF3UGxhdGZvcm0iLCJuZXdPYnN0YWNsZXMiLCJjcmVhdGVPYnN0YWNsZXMiLCJkcmF3T2JzdGFjbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztJQUVNQSxVO0FBQ0osc0JBQVlDLE9BQVosRUFBcUJDLFFBQXJCLEVBQStCO0FBQUE7O0FBQzdCLFNBQUtDLEtBQUwsR0FBYUYsT0FBYjtBQUNBLFNBQUtHLE1BQUwsR0FBY0YsUUFBZDtBQUNBLFNBQUtHLElBQUwsR0FBWSxJQUFaO0FBQ0Q7Ozs7V0FFRCx3QkFBZUMsR0FBZixFQUFvQjtBQUNsQjtBQUNBO0FBQ0E7QUFFQUEsU0FBRyxDQUFDQyxTQUFKLENBQWNDLDBDQUFkLEVBQXVCLENBQXZCLEVBQTBCLENBQTFCLEVBQTZCLElBQTdCLEVBQW1DLEdBQW5DLEVBQXdDLENBQXhDLEVBQTJDLENBQTNDLEVBQThDLElBQTlDLEVBQW9ELEdBQXBEO0FBQ0FGLFNBQUcsQ0FBQ0csU0FBSixHQUFnQixTQUFoQjtBQUNBSCxTQUFHLENBQUNJLFFBQUosQ0FBYSxDQUFiLEVBQWdCLEtBQUtOLE1BQUwsR0FBYyxFQUE5QixFQUFrQyxLQUFLRCxLQUF2QyxFQUE4QyxLQUFLQyxNQUFuRDtBQUNBRSxTQUFHLENBQUNLLElBQUo7QUFDRDs7Ozs7O0FBR0gsK0RBQWVYLFVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJBOztJQUVNWSxTO0FBQ0oscUJBQVlDLFNBQVosRUFBdUJDLFVBQXZCLEVBQW1DO0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFDLGlCQUFlOztBQUVmLFdBQVNBLGVBQVQsR0FBMkI7QUFDekJQLFVBQU0sQ0FBQ0MsTUFBUCxDQUFjSyxZQUFkLEVBQTRCSCxPQUE1QixDQUFvQyxVQUFDeEYsUUFBRCxFQUFXSixDQUFYLEVBQWlCO0FBQ25ERCxlQUFTLENBQUNDLENBQUQsQ0FBVCxjQUFtQm9DLHNEQUFuQixxQkFBK0JoQyxRQUEvQjtBQUF5QztBQUMxQyxLQUZEO0FBR0Q7O0FBQUE7O0FBRUQsV0FBU2tGLGVBQVQsR0FBMkI7QUFDekJHLFVBQU0sQ0FBQ0MsTUFBUCxDQUFjM0YsU0FBZCxFQUF5QjZGLE9BQXpCLENBQWlDLFVBQUF4RixRQUFRLEVBQUk7QUFDM0NBLGNBQVEsQ0FBQ29GLE1BQVQ7QUFDRCxLQUZEO0FBR0Q7O0FBQUE7O0FBRUQsV0FBU0QsYUFBVCxHQUF5QjtBQUN2QkUsVUFBTSxDQUFDQyxNQUFQLENBQWMzRixTQUFkLEVBQXlCNkYsT0FBekIsQ0FBaUMsVUFBQXhGLFFBQVEsRUFBSTtBQUMzQ0EsY0FBUSxDQUFDNkYsWUFBVCxDQUFzQi9ILEdBQXRCO0FBQ0QsS0FGRDtBQUdEOztBQUFBO0FBRURvRiwyREFBWSxDQUFDcEYsR0FBRCxFQUFNcUYsU0FBTixFQUFpQkMsVUFBakIsRUFBNkJDLFdBQTdCLENBQVo7QUFFRCxDQTdPRCxFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwZWFjZUJnIH0gZnJvbSAnLi91dGlsJztcblxuY2xhc3MgQmFja2dyb3VuZCB7XG4gIGNvbnN0cnVjdG9yKGJnV2lkdGgsIGJnSGVpZ2h0KSB7XG4gICAgdGhpcy53aWR0aCA9IGJnV2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBiZ0hlaWdodDtcbiAgICB0aGlzLnBvc1kgPSAzMjAwO1xuICB9XG5cbiAgZHJhd0JhY2tncm91bmQoY3R4KSB7XG4gICAgLy8gY3R4LmZpbGxTdHlsZSA9IFwiTWlzdHlSb3NlXCI7XG4gICAgLy8gY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0IC0gMjApO1xuICAgIC8vIGN0eC5maWxsKCk7XG5cbiAgICBjdHguZHJhd0ltYWdlKHBlYWNlQmcsIDAsIDAsIDEwMDAsIDgwMCwgMCwgMCwgMTAwMCwgODAwKTtcbiAgICBjdHguZmlsbFN0eWxlID0gXCIjMDAzMzAwXCI7XG4gICAgY3R4LmZpbGxSZWN0KDAsIHRoaXMuaGVpZ2h0IC0gMjAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICBjdHguZmlsbCgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhY2tncm91bmQ7IiwiaW1wb3J0IHsgZmlublJpZ2h0LCBmaW5uTGVmdCB9IGZyb20gJy4vdXRpbCc7XG5cbmNsYXNzIENoYXJhY3RlciB7XG4gIGNvbnN0cnVjdG9yKGdhbWVXaWR0aCwgZ2FtZUhlaWdodCkge1xuICAgIHRoaXMuZ2FtZVdpZHRoID0gZ2FtZVdpZHRoO1xuICAgIHRoaXMuZ2FtZUhlaWdodCA9IGdhbWVIZWlnaHQ7XG4gICAgdGhpcy53aWR0aCA9IDY0O1xuICAgIHRoaXMuaGVpZ2h0ID0gNDA7XG4gICAgdGhpcy5kaXJlY3Rpb24gPSBcInJpZ2h0XCI7XG4gICAgdGhpcy5tb3ZlU3BlZWQgPSAuNzU7XG4gICAgdGhpcy5qdW1wSGVpZ2h0ID0gLTEwO1xuICAgIHRoaXMuY3JvdWNoaW5nID0gZmFsc2U7XG4gICAgdGhpcy5qdW1waW5nID0gZmFsc2U7XG4gICAgdGhpcy5mYWxsaW5nID0gZmFsc2U7XG4gICAgdGhpcy5pc0NvbGxpZGluZyA9IGZhbHNlO1xuICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICB4OiA1MCxcbiAgICAgIHk6IHRoaXMuZ2FtZUhlaWdodCAtIHRoaXMuaGVpZ2h0IC0gMjAsXG4gICAgfTtcbiAgICB0aGlzLnZlbG9jaXR5ID0ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDAsXG4gICAgfTtcbiAgICB0aGlzLmNvbnN0YW50cyA9IHtcbiAgICAgIGdyYXZpdHk6IDAuMTUsXG4gICAgICBmcmljdGlvbjogMC45LFxuICAgIH07XG4gICAgdGhpcy5rZXlzID0ge307XG4gIH1cblxuICBkcmF3Q2hhcihjdHgsIGZyYW1lcykge1xuICAgIC8vIHRlc3RpbmcgY2hhcmFjdGVyIGJvdW5kYXJpZXNcbiAgICAvLyBjdHguc3Ryb2tlU3R5bGUgPSBcImdyZWVuXCI7XG4gICAgLy8gY3R4Lm1vdmVUbyh0aGlzLnBvc2l0aW9uLngrMjAsIHRoaXMucG9zaXRpb24ueSk7XG4gICAgLy8gY3R4LmxpbmVUbyh0aGlzLnBvc2l0aW9uLngrMjAsIDApO1xuICAgIC8vIGN0eC5tb3ZlVG8odGhpcy5wb3NpdGlvbi54K3RoaXMud2lkdGgtMzAsIHRoaXMucG9zaXRpb24ueSk7XG4gICAgLy8gY3R4LmxpbmVUbyh0aGlzLnBvc2l0aW9uLngrdGhpcy53aWR0aC0zMCwgMCk7XG4gICAgLy8gY3R4LnN0cm9rZSgpO1xuXG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uID09ICdsZWZ0Jykge1xuICAgICAgaWYgKHRoaXMuaXNDb2xsaWRpbmcpIHtcbiAgICAgICAgY3R4LmRyYXdJbWFnZShmaW5uTGVmdCwgMzUyLCAwLCAzMiwgMjAsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuanVtcGluZyB8fCB0aGlzLmZhbGxpbmcpIHsgXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoZmlubkxlZnQsIDQ0OCwgMCwgMzIsIDIwLCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLm1vdmluZykge1xuICAgICAgICBpZiAoZnJhbWVzIDwgMjApIHtcbiAgICAgICAgICBjdHguZHJhd0ltYWdlKGZpbm5MZWZ0LCA1NDQsIDAsIDMyLCAyMCwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgfSBlbHNlIGlmIChmcmFtZXMgPiAyMCAmJiBmcmFtZXMgPCA0MCkgeyBcbiAgICAgICAgICBjdHguZHJhd0ltYWdlKGZpbm5MZWZ0LCA0ODAsIDAsIDMyLCAyMCwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjdHguZHJhd0ltYWdlKGZpbm5MZWZ0LCA0NDgsIDAsIDMyLCAyMCwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChmcmFtZXMgPCA0MCkge1xuICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoZmlubkxlZnQsIDg2NCwgMCwgMzIsIDIwLCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoZmlubkxlZnQsIDgwMCwgMCwgMzIsIDIwLCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB9O1xuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZGlyZWN0aW9uID09ICdyaWdodCcpIHtcbiAgICAgIGlmICh0aGlzLmlzQ29sbGlkaW5nKSB7IFxuICAgICAgICBjdHguZHJhd0ltYWdlKGZpbm5SaWdodCwgNTEyLCAwLCAzMiwgMjAsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuanVtcGluZyB8fCB0aGlzLmZhbGxpbmcpIHtcbiAgICAgICAgY3R4LmRyYXdJbWFnZShmaW5uUmlnaHQsIDQ4MCwgMCwgMzIsIDIwLCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLm1vdmluZykge1xuICAgICAgICBpZiAoZnJhbWVzIDwgMjApIHtcbiAgICAgICAgICBjdHguZHJhd0ltYWdlKGZpbm5SaWdodCwgMzIwLCAwLCAzMiwgMjAsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZnJhbWVzID4gMjAgJiYgZnJhbWVzIDwgNDApIHsgXG4gICAgICAgICAgY3R4LmRyYXdJbWFnZShmaW5uUmlnaHQsIDM4NCwgMCwgMzIsIDIwLCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoZmlublJpZ2h0LCA0MTYsIDAsIDMyLCAyMCwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChmcmFtZXMgPCA0MCkge1xuICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoZmlublJpZ2h0LCAwLCAwLCAzMiwgMjAsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY3R4LmRyYXdJbWFnZShmaW5uUmlnaHQsIDY0LCAwLCAzMiwgMjAsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB1cGRhdGVLZXlzKGtleXMpIHtcbiAgICB0aGlzLmtleXMgPSBrZXlzO1xuICB9XG5cbiAgc3RvcCgpIHtcbiAgICB0aGlzLnZlbG9jaXR5LnggPSAwO1xuICAgIHRoaXMudmVsb2NpdHkueSA9IDA7XG4gIH1cblxuICBqdW1wKCkge1xuICAgIGlmICh0aGlzLmp1bXBpbmcpIHtcbiAgICAgIHRoaXMudmVsb2NpdHkueSA9IHRoaXMuanVtcEhlaWdodFxuICAgIH1cbiAgfVxuXG4gIGNyb3VjaCgpIHtcbiAgICB0aGlzLmhlaWdodCA9IDIwO1xuICB9XG5cbiAgdW5jcm91Y2goKSB7XG4gICAgdGhpcy5oZWlnaHQgPSA0MDtcbiAgICB0aGlzLnZlbG9jaXR5LnkgPSAtNTtcbiAgfVxuXG4gIHVwZGF0ZShwbGF0Zm9ybXMsIG9ic3RhY2xlcykge1xuICAgIC8vIGNoZWNrIGN1cnJlbnQga2V5IHByZXNzZXNcbiAgICBpZiAodGhpcy5rZXlzWydBcnJvd0xlZnQnXSB8fCB0aGlzLmtleXNbJ0tleUEnXSkge1xuICAgICAgdGhpcy52ZWxvY2l0eS54ID0gLXRoaXMubW92ZVNwZWVkO1xuICAgIH0gZWxzZSBpZiAodGhpcy5rZXlzWydBcnJvd1JpZ2h0J10gfHwgdGhpcy5rZXlzWydLZXlEJ10pIHtcbiAgICAgIHRoaXMudmVsb2NpdHkueCA9IHRoaXMubW92ZVNwZWVkO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1vdmluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8vIGNoYXIgbW92ZW1lbnRzXG4gICAgdGhpcy5wb3NpdGlvbi55ICs9IHRoaXMudmVsb2NpdHkueTtcbiAgICB0aGlzLnBvc2l0aW9uLnggKz0gdGhpcy52ZWxvY2l0eS54O1xuICAgIHRoaXMudmVsb2NpdHkueSArPSB0aGlzLmNvbnN0YW50cy5ncmF2aXR5O1xuICAgIHRoaXMudmVsb2NpdHkueCAqPSB0aGlzLmNvbnN0YW50cy5mcmljdGlvbjtcbiAgICB0aGlzLnZlbG9jaXR5LnkgKj0gdGhpcy5jb25zdGFudHMuZnJpY3Rpb247XG5cbiAgICAvLyBpZiBjaGFyIGlzIGdvaW5nIG9mZiBzY3JlZW4sIHN0b3AgYXQgZWRnZSBvZiBzY3JlZW5cbiAgICBpZiAodGhpcy5wb3NpdGlvbi54IDw9IDApIHtcbiAgICAgIHRoaXMucG9zaXRpb24ueCA9IDA7XG4gICAgfSBlbHNlIGlmICh0aGlzLnBvc2l0aW9uLnggPj0gdGhpcy5nYW1lV2lkdGggLSB0aGlzLndpZHRoKSB7XG4gICAgICB0aGlzLnBvc2l0aW9uLnggPSB0aGlzLmdhbWVXaWR0aCAtIHRoaXMud2lkdGg7XG4gICAgfVxuXG4gICAgLy8gKipXcml0ZSBjb2RlIHRvIGZpbHRlciBvdXQgcGxhdGZvcm1zIE5PVCBpbiBjdXJyZW50IHZpZXcgZnJhbWUqKlxuICAgIC8vIGNoZWNrIGlmIGNoYXIgaXMgc3RhbmRpbmcgb24gYW55IHBsYXRmb3JtXG4gICAgLy8gZWxzZSBjaGVjayBpZiBjaGFyIGlzIGZhbGxpbmcgYmVsb3cgZmxvb3IgbGluZVxuICAgIC8vIGVsc2UgY2hhciBpcyBjdXJyZW50bHkgZmFsbGluZ1xuICAgIGZvciAobGV0IGk9MDsgaTxwbGF0Zm9ybXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBwbGF0Zm9ybSA9IHBsYXRmb3Jtc1tpXTtcbiAgICAgIGlmICh0aGlzLm9uUGxhdGZvcm0odGhpcy5wb3NpdGlvbiwgcGxhdGZvcm0pKSB7XG4gICAgICAgIHRoaXMuZmFsbGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmp1bXBpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gcGxhdGZvcm1bMV0tdGhpcy5oZWlnaHQ7XG4gICAgICAgIHRoaXMudmVsb2NpdHkueSA9IDA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnBvc2l0aW9uLnkgPj0gdGhpcy5nYW1lSGVpZ2h0LXRoaXMuaGVpZ2h0LTIwKSB7XG4gICAgICAgIHRoaXMuanVtcGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZhbGxpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gdGhpcy5nYW1lSGVpZ2h0IC0gdGhpcy5oZWlnaHQgLSAyMDtcbiAgICAgICAgdGhpcy52ZWxvY2l0eS55ID0gMDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmZhbGxpbmcgPSB0cnVlO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyAqKldyaXRlIGNvZGUgdG8gZmlsdGVyIG91dCBvYnN0YWNsZXMgTk9UIGluIGN1cnJlbnQgdmlldyBmcmFtZSoqXG4gICAgZm9yIChsZXQgaT0wOyBpPG9ic3RhY2xlcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IG9ic3RhY2xlID0gb2JzdGFjbGVzW2ldO1xuICAgICAgaWYgKHRoaXMuY29sbGlzaW9uRGV0ZWN0aW9uKG9ic3RhY2xlKSkge1xuICAgICAgICB0aGlzLmlzQ29sbGlkaW5nID0gdHJ1ZTtcbiAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB7dGhpcy5jb2xsaWRpbmcgPSBmYWxzZX0sIDEwMDApO1xuXG4gICAgICAgIGlmIChvYnN0YWNsZS5vcmllbnRhdGlvbiA9PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09ICdsZWZ0Jykge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ICs9IDE1O1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55ICs9IDE7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCAtPSAxNTtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSArPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAob2JzdGFjbGUuZGlyZWN0aW9uID09IFwiUkRcIikge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ICs9IDIwO1xuICAgICAgICAgIH0gZWxzZSBpZiAob2JzdGFjbGUuZGlyZWN0aW9uID09IFwiTFVcIikge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54IC09IDIwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaXNDb2xsaWRpbmcgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfTtcblxuICBvblBsYXRmb3JtKGNoYXJQb3MsIHBsYXRmb3JtKSB7XG4gICAgLy8gY2hhclBvcyA9IHtcbiAgICAvLyAgIHg6IGNoYXJQb3NYLFxuICAgIC8vICAgeTogY2hhclBvc1ksXG4gICAgLy8gfVxuICAgIC8vIHBsYXRmb3JtID0gW3Bvc1gsIHBvc1ksIHdpZHRoXVxuICAgIGlmICh0aGlzLmNyb3VjaGluZykge1xuICAgICAgaWYgKCgoY2hhclBvcy54ICsgdGhpcy53aWR0aCAtMTUpID49IHBsYXRmb3JtWzBdKSAmJlxuICAgICAgKChjaGFyUG9zLngrMTUpIDw9IChwbGF0Zm9ybVswXStwbGF0Zm9ybVsyXSkpICYmXG4gICAgICAoKGNoYXJQb3MueSArIDIwKSA8PSBwbGF0Zm9ybVsxXSkgJiZcbiAgICAgICgoY2hhclBvcy55ICsgMjApID49IHBsYXRmb3JtWzFdLTIpKXtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCgoY2hhclBvcy54ICsgdGhpcy53aWR0aCAtMTUpID49IHBsYXRmb3JtWzBdKSAmJlxuICAgICAgKChjaGFyUG9zLngrMTUpIDw9IChwbGF0Zm9ybVswXStwbGF0Zm9ybVsyXSkpICYmXG4gICAgICAoKGNoYXJQb3MueSArIDQwKSA8PSBwbGF0Zm9ybVsxXSkgJiZcbiAgICAgICgoY2hhclBvcy55ICsgNDApID49IHBsYXRmb3JtWzFdLTIpKXtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfTtcbiAgICB9O1xuICB9XG5cbiAgLy8gcmV0dXJuIHRydWUgaWYgYW4gb2JzdGFjbGUgY29sbGlkZXMgd2l0aCB1c2VyXG4gIGNvbGxpc2lvbkRldGVjdGlvbihvYnN0YWNsZSkge1xuICAgIGxldCBvID0ge1xuICAgICAgeDogb2JzdGFjbGUucG9zaXRpb24ueCxcbiAgICAgIHk6IG9ic3RhY2xlLnBvc2l0aW9uLnksXG4gICAgICByOiBvYnN0YWNsZS5yYWRpdXNcbiAgICB9O1xuICAgIGxldCBjID0ge1xuICAgICAgeDogdGhpcy5wb3NpdGlvbi54ICsgMjAsXG4gICAgICB5OiB0aGlzLnBvc2l0aW9uLnksXG4gICAgICB3OiB0aGlzLndpZHRoLTMwLFxuICAgICAgaDogdGhpcy5oZWlnaHRcbiAgICB9XG5cbiAgICAvLyBmaW5kIGhvcml6L3ZlcnQgZGlzdGFuY2UgYi93IGNlbnRlciBvZiBvYnN0YWNsZSAmIGNoYXJhY3RlclxuICAgIGxldCBkaXN0WCA9IE1hdGguYWJzKG8ueCAtIGMueCAtIGMudy8yKTtcbiAgICBsZXQgZGlzdFkgPSBNYXRoLmFicyhvLnkgLSBjLnkgLSBjLmgvMik7XG5cbiAgICAvLyByZXR1cm4gZmFsc2UgaWYgZGlzdCBpcyBncmVhdGVyIHRoYW4gbWluIGRpc3QgYi93IGVkZ2VzICh4IG9yIHkpXG4gICAgaWYgKChkaXN0WCA+IChjLncvMiArIG8ucikpIHx8IChkaXN0WSA+IChjLmgvMiArIG8ucikpKSB7cmV0dXJuIGZhbHNlfTtcblxuICAgIC8vIHJldHVybiB0cnVlIGlmIGRpc3QgaXMgPD0gY2hhciB3aWR0aC8yXG4gICAgaWYgKChkaXN0WCA8PSAoYy53LzIpKSAmJiAoZGlzdFkgPD0gKGMuaC8yKSkpIHtyZXR1cm4gdHJ1ZX07XG5cbiAgICAvLyBkeCAmIGR5ID0gZGlzdCBiL3cgb2JzdGFjbGUgY2VudGVyICYgY2hhciBlZGdlICh4ICYgeSlcbiAgICBsZXQgZHggPSBkaXN0WCAtIGMudyAvIDI7XG4gICAgbGV0IGR5ID0gZGlzdFkgLSBjLmggLyAyO1xuXG4gICAgLy8gdXNlIHB5dGhhZ29yZWFuIHRoZW9yZW0gdG8gc2VlIGlmIHJhZGl1c14yICBcbiAgICAvLyBpcyBncmVhdGVyIHRoYW4gaHlwb3RlbnVzZSBvZiBkeF4yICsgZHleMiBcbiAgICAvLyBpZiBncmVhdGVyLCBvYmplY3QgYW5kIGNoYXIgYXJlIGNvbGxpZGluZyAodHJ1ZSlcbiAgICByZXR1cm4gKE1hdGgucG93KGR4LDIpICsgTWF0aC5wb3coZHksMikgPD0gTWF0aC5wb3coby5yLDIpKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IENoYXJhY3RlcjsiLCJjbGFzcyBDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoY2hhcikge1xuICAgIHRoaXMua2V5cyA9IHt9O1xuICAgIHRoaXMuanVtcFNGWCA9IG5ldyBBdWRpbyhcIi4vc3JjL2F1ZGlvL21hcGxlLWp1bXAtc2Z4Lm1wM1wiKVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICAgICAgc3dpdGNoIChldmVudC5jb2RlKSB7XG4gICAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgICAgIGNhc2UgJ0tleUEnOiAgXG4gICAgICAgICAgdGhpcy5rZXlzW2V2ZW50LmNvZGVdID0gdHJ1ZVxuICAgICAgICAgIGNoYXIuZGlyZWN0aW9uID0gXCJsZWZ0XCI7XG4gICAgICAgICAgY2hhci5tb3ZpbmcgPSB0cnVlO1xuICAgICAgICAgIGNoYXIua2V5cyA9IHRoaXMua2V5cztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XG4gICAgICAgIGNhc2UgJ0tleUQnOlxuICAgICAgICAgIHRoaXMua2V5c1tldmVudC5jb2RlXSA9IHRydWVcbiAgICAgICAgICBjaGFyLmRpcmVjdGlvbiA9IFwicmlnaHRcIjtcbiAgICAgICAgICBjaGFyLm1vdmluZyA9IHRydWU7XG4gICAgICAgICAgY2hhci51cGRhdGVLZXlzKHRoaXMua2V5cyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0Fycm93RG93bic6XG4gICAgICAgIGNhc2UgJ0tleVMnOlxuICAgICAgICAgIC8vIHRoaXMua2V5c1tldmVudC5jb2RlXSA9IHRydWVcbiAgICAgICAgICBjaGFyLmNyb3VjaGluZyA9IHRydWU7XG4gICAgICAgICAgY2hhci5jcm91Y2goKTsgICBcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnU3BhY2UnOlxuICAgICAgICAgIC8vIHRoaXMua2V5c1tldmVudC5jb2RlXSA9IHRydWVcbiAgICAgICAgICBpZiAoIWNoYXIuanVtcGluZyAmJiAhY2hhci5mYWxsaW5nICYmICFjaGFyLmNvbGxpZGluZykge1xuICAgICAgICAgICAgdGhpcy5qdW1wU0ZYLnBsYXkoKTtcbiAgICAgICAgICAgIGNoYXIuanVtcGluZyA9IHRydWU7XG4gICAgICAgICAgICBjaGFyLmp1bXAoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSlcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChldmVudCkgPT4ge1xuICAgICAgc3dpdGNoIChldmVudC5jb2RlKSB7XG4gICAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgICAgIGNhc2UgJ0tleUEnOiBcbiAgICAgICAgICB0aGlzLmtleXNbZXZlbnQuY29kZV0gPSBmYWxzZTtcbiAgICAgICAgICBjaGFyLmtleXMgPSB0aGlzLmtleXM7XG4gICAgICAgICAgY2hhci5zdG9wKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICBjYXNlICdLZXlEJzpcbiAgICAgICAgICB0aGlzLmtleXNbZXZlbnQuY29kZV0gPSBmYWxzZTtcbiAgICAgICAgICBjaGFyLmtleXMgPSB0aGlzLmtleXM7XG4gICAgICAgICAgY2hhci5zdG9wKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0Fycm93RG93bic6XG4gICAgICAgIGNhc2UgJ0tleVMnOlxuICAgICAgICAgIC8vIHRoaXMua2V5c1tldmVudC5jb2RlXSA9IGZhbHNlO1xuICAgICAgICAgIGNoYXIuY3JvdWNoaW5nID0gZmFsc2U7XG4gICAgICAgICAgY2hhci51bmNyb3VjaCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdTcGFjZSc6XG4gICAgICAgICAgLy8gdGhpcy5rZXlzW2V2ZW50LmNvZGVdID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250cm9sbGVyOyIsImNsYXNzIE9ic3RhY2xlIHtcbiAgY29uc3RydWN0b3IocG9zWCwgcG9zWSwgcmFkaXVzLCBvcmllbnRhdGlvbiwgdHJhdmVsTGVuZ3RoLCBjb2xvciwgc3BlZWQpIHtcbiAgICB0aGlzLmluaXRQb3MgPSB7XG4gICAgICB4OiBwb3NYLFxuICAgICAgeTogcG9zWVxuICAgIH07XG4gICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgIHg6IHBvc1gsXG4gICAgICB5OiBwb3NZXG4gICAgfTtcbiAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcbiAgICB0aGlzLm9yaWVudGF0aW9uID0gb3JpZW50YXRpb247XG4gICAgdGhpcy50cmF2ZWxMZW4gPSB0cmF2ZWxMZW5ndGhcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xuICAgIHRoaXMuZGlyZWN0aW9uID0gXCJSRFwiOyAvLyBMVSA9IGxlZnQvdXAsIFJEID0gcmlnaHQvZG93biAoZGVwLiBvbiBvcmllbnRhdGlvbilcbiAgfVxuXG4gIGRyYXdPYnN0YWNsZShjdHgpIHtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgY3R4LmFyYyh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy5yYWRpdXMsIDAsIE1hdGguUEkgKiAyLCB0cnVlKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgY3R4LmZpbGwoKTtcbiAgfSBcblxuICB1cGRhdGUoKSB7XG4gICAgLy8gc2V0IGRpcmVjdGlvbiBvYnN0YWNsZSBzaG91bGQgbW92ZSBiYXNlZCBvbiBjdXJyZW50IHBvc2l0aW9uIChSRC9MVSlcbiAgICBpZiAodGhpcy5vcmllbnRhdGlvbiA9PSBcImhvcml6b250YWxcIikge1xuICAgICAgaWYgKHRoaXMucG9zaXRpb24ueCA8PSB0aGlzLmluaXRQb3MueCkge1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IFwiUkRcIlxuICAgICAgfSBlbHNlIGlmICh0aGlzLnBvc2l0aW9uLnggPj0gdGhpcy5pbml0UG9zLnggKyB0aGlzLnRyYXZlbExlbikge1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IFwiTFVcIlxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSB0aGlzLmRpcmVjdGlvbjtcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmICh0aGlzLm9yaWVudGF0aW9uID09IFwidmVydGljYWxcIikge1xuICAgICAgaWYgKHRoaXMucG9zaXRpb24ueSA8PSB0aGlzLmluaXRQb3MueSkge1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IFwiUkRcIlxuICAgICAgfSBlbHNlIGlmICh0aGlzLnBvc2l0aW9uLnkgPj0gdGhpcy5pbml0UG9zLnkgKyB0aGlzLnRyYXZlbExlbikge1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IFwiTFVcIlxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSB0aGlzLmRpcmVjdGlvbjtcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gXCJzdGF0aWNcIikge1xuICAgICAgXG4gICAgfTtcbiAgICBcbiAgICAvLyBtb3ZlIG9ic3RhY2xlIGFjY29yZGluZyB0byBpdHMgZGlyZWN0aW9uXG4gICAgaWYgKHRoaXMub3JpZW50YXRpb24gPT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PSBcIlJEXCIpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ICs9IHRoaXMuc3BlZWRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueCAtPSB0aGlzLnNwZWVkXG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAodGhpcy5vcmllbnRhdGlvbiA9PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PSBcIlJEXCIpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55ICs9IHRoaXMuc3BlZWRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueSAtPSB0aGlzLnNwZWVkXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IE9ic3RhY2xlO1xuXG4iLCJjbGFzcyBQbGF0Zm9ybSB7XG4gIGNvbnN0cnVjdG9yKHBvc1gsIHBvc1ksIHdpZHRoLCBpKSB7XG4gICAgdGhpcy5oZWlnaHQgPSAxNTtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgIHg6IHBvc1gsXG4gICAgICB5OiBwb3NZXG4gICAgfVxuICAgIHRoaXMuaW5kZXggPSBpO1xuICB9XG5cbiAgZHJhd1BsYXRmb3JtKGN0eCkge1xuICAgIGN0eC5maWxsU3R5bGUgPSBcImtoYWtpXCIsXG4gICAgY3R4LmZpbGxSZWN0KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgXG4gICAgLy8gcHJpbnRpbmcgcGxhdGZvcm0gaW5kZXgva2V5ICYgY29vcmRpbmF0ZXNcbiAgICAvLyBjdHguZmlsbFN0eWxlID0gXCJibGFja1wiOyBcbiAgICAvLyBjdHguZm9udCA9XCIxNHB4IHNlcmlmXCI7XG4gICAgLy8gY3R4LmZpbGxUZXh0KGAke3RoaXMuaW5kZXh9OiAke3RoaXMucG9zaXRpb24ueH0sICR7dGhpcy5wb3NpdGlvbi55fWAsIFxuICAgIC8vICAgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnkrMzMpO1xuXG4gICAgLy8gdGVzdGluZyBwbGF0Zm9ybSBib3VuZGFyaWVzXG4gICAgLy8gY3R4LmJlZ2luUGF0aCgpO1xuICAgIC8vIGN0eC5zdHJva2VTdHlsZSA9IFwiYmx1ZVwiO1xuICAgIC8vIGN0eC5tb3ZlVG8odGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnkpO1xuICAgIC8vIGN0eC5saW5lVG8odGhpcy5wb3NpdGlvbi54LCAwKTtcbiAgICAvLyBjdHgubW92ZVRvKHRoaXMucG9zaXRpb24ueCt0aGlzLndpZHRoLCB0aGlzLnBvc2l0aW9uLnkpO1xuICAgIC8vIGN0eC5saW5lVG8odGhpcy5wb3NpdGlvbi54K3RoaXMud2lkdGgsIDApO1xuICAgIC8vIGN0eC5zdHJva2UoKTtcbiAgfSBcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxhdGZvcm07XG5cbiIsImV4cG9ydCBjb25zdCBmaW5uUmlnaHQgPSBuZXcgSW1hZ2UoKTtcbmZpbm5SaWdodC5zcmMgPSAnLi9kaXN0L2ltYWdlcy9GaW5uU3ByaXRlLXJpZ2h0LnBuZyc7XG5leHBvcnQgY29uc3QgZmlubkxlZnQgPSBuZXcgSW1hZ2UoKTtcbmZpbm5MZWZ0LnNyYyA9ICcuL2Rpc3QvaW1hZ2VzL0Zpbm5TcHJpdGUtbGVmdC5wbmcnO1xuZXhwb3J0IGNvbnN0IHBlYWNlQmcgPSBuZXcgSW1hZ2UoKTtcbnBlYWNlQmcuc3JjID0gJy4vZGlzdC9pbWFnZXMvcGVhY2UtYmcucG5nJztcbmV4cG9ydCBjb25zdCBiZWVtbyA9IG5ldyBJbWFnZSgpO1xuYmVlbW8uc3JjID0gJy4vZGlzdC9pbWFnZXMvYmVlbW8ucG5nJztcbmV4cG9ydCBjb25zdCBmaW5uQmVlbW8gPSBuZXcgSW1hZ2UoKTtcbmZpbm5CZWVtby5zcmMgPSAnLi9kaXN0L2ltYWdlcy9maW5uLWFuZC1iZWVtby5qcGcnOyIsImltcG9ydCB7IGZpbm5SaWdodCwgYmVlbW8gfSBmcm9tICcuL3V0aWwnO1xuY29uc3Qgd2VsY29tZU1vZGFsID0gKGN0eCwgZ2FtZVN0YXJ0LCBHQU1FX1dJRFRILCBHQU1FX0hFSUdIVCkgPT4ge1xuXG4gIGlmICghZ2FtZVN0YXJ0KSB7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwibGlnaHRzbGF0ZWdyZXlcIjtcbiAgICBjdHguZmlsbFJlY3QoMCwgMCwgR0FNRV9XSURUSCwgR0FNRV9IRUlHSFQpO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcInNub3dcIjtcbiAgICBjdHguZm9udCA9ICdib2xkIDUwcHggYXJpYWwnO1xuICAgIGN0eC5maWxsVGV4dChcIldlbGNvbWUgdG8gSnVtcCBRdWVzdCFcIiwgMjI1LCA2MCk7XG4gICAgY3R4LmZvbnQgPSAnYm9sZCAzMHB4IGFyaWFsJztcbiAgICBjdHguZmlsbFRleHQoXCJCZWVtbyAgICAgICAgICBpcyBsb3N0IGFuZCBuZWVkcyB5b3VyIGhlbHAhXCIsIDc1LCAxNTApO1xuICAgIGN0eC5maWxsVGV4dChcIkhlbHAgRmlubiAgICAgICAgbmF2aWdhdGUgYWNyb3NzIHRoZSBwbGF0Zm9ybXMgdG8gZmluZCBoaW0uXCIsIDc1LCAyMjUpO1xuICAgIGN0eC5maWxsVGV4dChcIkJlIHN1cmUgdG8gZG9kZ2UgdGhlIGZseWluZyBvYnN0YWNsZXMgdXNpbmcgY3JvdWNoIG9yIGp1bXAuXCIsIDc1LCAzMDApO1xuICAgIGN0eC5maWxsVGV4dChcIklmIHlvdSBnZXQgaGl0LCB5b3UgbWF5IGhhdmUgdG8gc3RhcnQgZnJvbSBhbiBlYXJsaWVyIHBvc2l0aW9uLlwiLCA3NSwgMzc1KTtcblxuICAgIGN0eC5mb250ID0gJ2JvbGQgMjBweCBhcmlhbCc7XG4gICAgY3R4LmZpbGxUZXh0KFwiLSBIb3Jpem9udGFsbHkgbW92aW5nIGJhbGxzIHdpbGwgcHVzaCB5b3UgaW4gdGhlaXIgZGlyZWN0aW9uXCIsIDEwMCwgNDEwKTtcbiAgICBjdHguZmlsbFRleHQoXCItIFZlcnRpY2FsbHkgbW92aW5nIGJhbGxzIHdpbGwga25vY2sgeW91IG9mZiBvZiB0aGUgcGxhdGZvcm1cIiwgMTAwLCA0NDUpO1xuICAgIFxuICAgIGN0eC5mb250ID0gJ2JvbGQgMzBweCBhcmlhbCc7XG4gICAgY3R4LmZpbGxUZXh0KFwiR29vZCBsdWNrISEhXCIsIDc1LCA1NTApO1xuICAgIFxuICAgIGN0eC5mb250ID0gJ2JvbGQgMjBweCBhcmlhbCc7XG4gICAgY3R4LmZpbGxUZXh0KFwiKElmIHlvdXIgc2NyZWVuIGhlaWdodCBpcyBzbWFsbGVyIHRoYW4gODY1IHBpeGVscywgcGxlYXNlIGNvbnNpZGVyIHpvb21pbmcgb3V0IHRvIDgwLTkwJSlcIiwgNzUsIDYwMCk7XG4gICAgXG4gICAgY3R4LmZvbnQgPSAnYm9sZCA0MHB4IGFyaWFsJztcbiAgICBjdHguZmlsbFRleHQoXCJQcmVzcyBFTlRFUiB0byBiZWdpbiFcIiwgMjc1LCA3MDApO1xuICAgIGN0eC5maWxsKCk7XG5cbiAgICBjdHguZm9udCA9ICdib2xkIDIwcHggYXJpYWwnO1xuICAgIGN0eC5maWxsVGV4dChcIkdhbWUgZGVzaWduIGJ5IENocmlzIEpvb1wiLCA3MzAsIDc4MCk7XG4gICAgY3R4LmZpbGxUZXh0KFwiTXVzaWMgYnkgSU5TRUNVUkUgTVVTSUNcIiwgMjAsIDc4MCk7XG5cbiAgICBjdHguZmlsbCgpO1xuICAgIFxuICAgIGJlZW1vLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgY3R4LmRyYXdJbWFnZShiZWVtbywgMjAwLCAxMjUsIDMzLCA0MCk7XG4gICAgfVxuICAgIGZpbm5SaWdodC5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgIGN0eC5kcmF3SW1hZ2UoZmlublJpZ2h0LCAwLCAwLCAzMiwgMjAsIDIxNSwgMTk1LCA2NCwgNDApO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgd2VsY29tZU1vZGFsOyIsImltcG9ydCB7IGZpbm5CZWVtbyB9IGZyb20gJy4vdXRpbCc7XG5cbmNvbnN0IHdpbm5lck1vZGFsID0gKGN0eCwgR0FNRV9XSURUSCwgR0FNRV9IRUlHSFQpID0+IHtcbiAgY3R4LmZpbGxTdHlsZSA9IFwibGlnaHRzbGF0ZWdyZXlcIjtcbiAgY3R4LmZpbGxSZWN0KDAsIDAsIEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hUKTtcbiAgY3R4LmZpbGxTdHlsZSA9IFwic25vd1wiO1xuICBjdHguZm9udCA9ICdib2xkIDUwcHggYXJpYWwnO1xuICBjdHguZmlsbFRleHQoXCJZb3Ugc2F2ZWQgQmVlbW8hXCIsIDI3MCwgMTIwKTtcbiAgLy8gZmlubkJlZW1vLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgIGN0eC5kcmF3SW1hZ2UoZmlubkJlZW1vLCAxNDAsIDIyNSwgNzI4LCA0MDkpO1xuICAvLyB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aW5uZXJNb2RhbDsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG4vLyBpbXBvcnQgSnVtcFF1ZXN0IGZyb20gXCIuL3NjcmlwdHMvZ2FtZVwiO1xuaW1wb3J0IHdlbGNvbWVNb2RhbCBmcm9tICcuL3NjcmlwdHMvd2VsY29tZSc7XG5pbXBvcnQgQ2hhcmFjdGVyIGZyb20gXCIuL3NjcmlwdHMvY2hhcmFjdGVyXCI7XG5pbXBvcnQgQ29udHJvbGxlciBmcm9tIFwiLi9zY3JpcHRzL2NvbnRyb2xsZXJcIjtcbmltcG9ydCBCYWNrZ3JvdW5kIGZyb20gXCIuL3NjcmlwdHMvYmFja2dyb3VuZFwiO1xuaW1wb3J0IFBsYXRmb3JtIGZyb20gXCIuL3NjcmlwdHMvcGxhdGZvcm1cIjtcbmltcG9ydCBPYnN0YWNsZSBmcm9tIFwiLi9zY3JpcHRzL29ic3RhY2xlXCI7XG5pbXBvcnQgeyBiZWVtbyB9IGZyb20gJy4vc2NyaXB0cy91dGlsJztcbmltcG9ydCB3aW5uZXJNb2RhbCBmcm9tICcuL3NjcmlwdHMvd2lubmVyJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBsZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqdW1wLXF1ZXN0XCIpO1xuICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuICAvLyBnYW1lIHZhcmlhYmxlc1xuICBsZXQgZ2FtZVN0YXJ0ID0gZmFsc2U7XG4gIGNvbnN0IEdBTUVfV0lEVEggPSBjYW52YXMud2lkdGg7IC8vIDEwMDBcbiAgY29uc3QgR0FNRV9IRUlHSFQgPSBjYW52YXMuaGVpZ2h0OyAvLyA4MDBcbiAgbGV0IGNoYXIgPSBuZXcgQ2hhcmFjdGVyKEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hUKTtcbiAgbmV3IENvbnRyb2xsZXIoY2hhcilcbiAgbGV0IGJnID0gbmV3IEJhY2tncm91bmQoR0FNRV9XSURUSCwgR0FNRV9IRUlHSFQpO1xuICBsZXQgZnJhbWVzID0gMDtcbiAgbGV0IG9ic3RhY2xlcyA9IHt9O1xuXG4gIC8vIGNvbnRyb2xzL2hvdy10by1wbGF5IHZhcmlhYmxlc1xuICBsZXQgY29udHJvbHNTaG93biA9IGZhbHNlO1xuICBsZXQgY29udHJvbHNCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRyb2xzLWJ0blwiKTtcbiAgbGV0IGNvbnRyb2xzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRyb2xzJyk7XG5cbiAgLy8gYXVkaW8vYmdtIHZhcmlhYmxlc1xuICBsZXQgYmdtID0gbmV3IEF1ZGlvKFwiLi9zcmMvYXVkaW8vZ29vZC1tb3JuaW5nLWluc2VjdXJlLm1wM1wiKTtcbiAgbGV0IG11c2ljUGxheWluZyA9IGZhbHNlO1xuICBsZXQgbXVzaWNCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm11c2ljLWJ0blwiKTtcbiAgbGV0IHBsYXlCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXktYnRuXCIpO1xuICBsZXQgcGF1c2VCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhdXNlLWJ0blwiKTtcblxuICBjb250cm9sc0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChjb250cm9sc1Nob3duKSB7XG4gICAgICBjb250cm9sc1Nob3duID0gZmFsc2U7XG4gICAgICBjb250cm9scy5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgY29udHJvbHNCdG4uY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRyb2xzU2hvd24gPSB0cnVlO1xuICAgICAgY29udHJvbHMuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICAgIGNvbnRyb2xzQnRuLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICAgIH07XG4gIH0pO1xuXG4gIG11c2ljQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKG11c2ljUGxheWluZykge1xuICAgICAgbXVzaWNQbGF5aW5nID0gZmFsc2U7XG4gICAgICBiZ20ucGF1c2UoKTtcbiAgICAgIHBhdXNlQnRuLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICBwbGF5QnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIG11c2ljUGxheWluZyA9IHRydWU7XG4gICAgICBiZ20ubG9vcCA9IHRydWU7XG4gICAgICBiZ20ucGxheSgpO1xuICAgICAgcGF1c2VCdG4uY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICAgIHBsYXlCdG4uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICB9XG4gIH0pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZXZlbnQgPT4ge1xuICAgIHN3aXRjaChldmVudC5jb2RlKSB7XG4gICAgICBjYXNlICdFbnRlcic6XG4gICAgICAgIGlmICghZ2FtZVN0YXJ0KSB7XG4gICAgICAgICAgaWYgKCFtdXNpY1BsYXlpbmcpIHtcbiAgICAgICAgICAgIG11c2ljUGxheWluZyA9IHRydWU7XG4gICAgICAgICAgICBiZ20ubG9vcCA9IHRydWU7XG4gICAgICAgICAgICBwYXVzZUJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgICAgICAgICAgcGxheUJ0bi5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgICAgICAgYmdtLnBsYXkoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZ2FtZVN0YXJ0ID0gdHJ1ZTtcbiAgICAgICAgICBzdGFydEdhbWUoKTtcbiAgICAgICAgICAvLyBzdGFydEFuaW1hdGluZygyNDApXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfSlcbiAgICBcbiAgLy8gbGV0IGZwcywgaW50ZXJ2YWwsIHN0YXJ0VGltZSwgbm93LCB0aGVuLCBlbGFwc2VkO1xuICAvLyBmdW5jdGlvbiBzdGFydEFuaW1hdGluZyhmcHMpIHtcbiAgLy8gICBpbnRlcnZhbCA9IDEwMDAgLyBmcHM7XG4gIC8vICAgdGhlbiA9IERhdGUubm93KCk7XG4gIC8vICAgc3RhcnRUaW1lID0gdGhlbjtcbiAgLy8gICBhbmltYXRlKCk7XG4gIC8vIH1cblxuICAvLyBmdW5jdGlvbiBhbmltYXRlKCkge1xuICAvLyAgIG5vdyA9IERhdGUubm93KCk7XG4gIC8vICAgZWxhcHNlZCA9IG5vdyAtIHRoZW47XG4gIC8vICAgaWYgKGVsYXBzZWQgPiBpbnRlcnZhbCkge1xuICAvLyAgICAgdGhlbiA9IG5vdyAtIChlbGFwc2VkICUgaW50ZXJ2YWwpO1xuICAvLyAgICAgZ2FtZUxvb3AoKTtcbiAgLy8gICB9O1xuXG4gIC8vICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICAvLyB9XG5cbiAgZnVuY3Rpb24gc3RhcnRHYW1lKCkge1xuICAgIGdhbWVMb29wKCk7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdhbWVMb29wKCkge1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgR0FNRV9XSURUSCwgR0FNRV9IRUlHSFQpO1xuICAgIGJnLmRyYXdCYWNrZ3JvdW5kKGN0eCk7XG4gICAgZHJhd1BsYXRmb3JtcygpO1xuICAgIHVwZGF0ZU9ic3RhY2xlcygpO1xuICAgIGRyYXdPYnN0YWNsZXMoKTtcbiAgICAvLyB3cml0ZSBhbGdvcml0aG0gdG8gb25seSBwYXNzIGluIHBsYXRmb3JtcyAmIG9ic3RhY2xlcyBpbiBjdXJyZW50IHZwXG4gICAgY2hhci51cGRhdGUoT2JqZWN0LnZhbHVlcyhwbGF0Zm9ybXMpLCBPYmplY3QudmFsdWVzKG9ic3RhY2xlcykpO1xuICAgIGNoYXIuZHJhd0NoYXIoY3R4LCBmcmFtZXMpO1xuICAgIGN0eC5kcmF3SW1hZ2UoYmVlbW8sIDAsIDAsIDMzLCA0MCwgMCwgMTAsIDMzLCA0MCk7XG5cbiAgICBpZiAoKGNoYXIucG9zaXRpb24ueCA8PSAxMCApICYmIChjaGFyLnBvc2l0aW9uLnkgPD0gMTApKSB7XG4gICAgICBtdXNpY1BsYXlpbmcgPSBmYWxzZTtcbiAgICAgIGJnbS5wYXVzZSgpO1xuICAgICAgcGF1c2VCdG4uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgIHBsYXlCdG4uY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICAgIHdpbm5lck1vZGFsKGN0eCwgR0FNRV9XSURUSCwgR0FNRV9IRUlHSFQpO1xuICAgIH1cblxuICAgIGlmIChmcmFtZXMgPj0gNjApIHtcbiAgICAgIGZyYW1lcyA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZyYW1lcysrO1xuICAgIH1cblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG4gICAgLy8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICB9XG5cbiAgLy8gcGxhdGZvcm0gPSBbcG9zWCwgcG9zWSwgd2lkdGhdXG4gIGxldCBwbGF0Zm9ybXMgPSB7XG4gICAgMDogWzE1MCwgNzQwLCAxMDBdLFxuICAgIDE6IFszMDAsIDcwMCwgMTAwXSxcbiAgICAyOiBbNDUwLCA2NjAsIDEwMF0sXG4gICAgMzogWzYwMCwgNjIwLCAxMDBdLFxuICAgIDQ6IFs3NTAsIDU4MCwgMTAwXSxcbiAgICA1OiBbODUwLCA1NDAsIDUwXSxcbiAgICA2OiBbODAwLCA1MDAsIDUwXSxcbiAgICA3OiBbNzUwLCA0NjAsIDUwXSxcbiAgICA4OiBbNzAwLCA0MjAsIDUwXSxcbiAgICA5OiBbNjUwLCA0NjAsIDUwXSxcbiAgICAxMDogWzYwMCwgNTEwLCA1MF0sXG4gICAgMTE6IFs1NTAsIDQ2MCwgNTBdLFxuICAgIDEyOiBbNTAwLCA0MjAsIDUwXSxcbiAgICAxMzogWzQ1MCwgNDYwLCA1MF0sXG4gICAgMTQ6IFs0MDAsIDUxMCwgNTBdLFxuICAgIDE1OiBbMzUwLCA0NjAsIDUwXSxcbiAgICAxNjogWzMwMCwgNDIwLCA1MF0sXG4gICAgMTc6IFsyNTAsIDQ2MCwgNTBdLFxuICAgIDE4OiBbMjAwLCA1MTAsIDUwXSxcbiAgICAxOTogWzE1MCwgNDYwLCA1MF0sXG4gICAgMjA6IFsxMDAsIDQyMCwgNTBdLFxuICAgIDIxOiBbNTAsIDM4MCwgNTBdLFxuICAgIDIyOiBbMTAwLCAzNDAsIDUwXSxcbiAgICAyMzogWzIwMCwgMzAwLCAxMDBdLFxuICAgIDI0OiBbMzUwLCAzMDAsIDEwMF0sXG4gICAgMjU6IFs1MDAsIDMwMCwgMTAwXSxcbiAgICAyNjogWzY1MCwgMzAwLCAxMDBdLFxuICAgIDI3OiBbODAwLCAyNTAsIDUwXSxcbiAgICAyODogWzg1MCwgMjEwLCA1MF0sXG4gICAgMjk6IFs4MDAsIDE3MCwgNTBdLFxuICAgIDMwOiBbNzUwLCAxMzAsIDUwXSxcbiAgICAzMTogWzcwMCwgMTcwLCA1MF0sXG4gICAgMzI6IFs2NTAsIDIxMCwgNTBdLFxuICAgIDMzOiBbNjAwLCAxNzAsIDUwXSxcbiAgICAzNDogWzU1MCwgMTMwLCA1MF0sXG4gICAgMzU6IFs1MDAsIDkwLCA1MF0sXG4gICAgMzY6IFs0NTAsIDEzMCwgNTBdLFxuICAgIDM3OiBbMjAwLCAxMzAsIDIwMF0sXG4gICAgMzg6IFsxMjUsIDkwLCA1MF0sXG4gICAgMzk6IFswLCA1MCwgMTAwXSxcbiAgICA0MDogWzkwMCwgNTAsIDEwMF0sXG4gIH07XG4gIFxuICBmdW5jdGlvbiBkcmF3UGxhdGZvcm1zKCkge1xuICAgIE9iamVjdC52YWx1ZXMocGxhdGZvcm1zKS5mb3JFYWNoKChwbGF0Zm9ybSwgaSkgPT4ge1xuICAgICAgbGV0IHAgPSBuZXcgUGxhdGZvcm0oLi4ucGxhdGZvcm0sIGkpO1xuICAgICAgcC5kcmF3UGxhdGZvcm0oY3R4KTtcbiAgICB9KVxuICB9O1xuXG4gIC8vIG9ic3RhY2xlID0gW3Bvc1gsIHBvc1ksIHJhZGl1cywgb3JpZW50YXRpb24sIHRyYXZlbExlbmd0aCwgY29sb3IsIHNwZWVkXVxuICAvLyBvYnN0YWNsZSBzcGVlZHMgZm9yIDI0MCBGUFMuXG4gIGxldCBuZXdPYnN0YWNsZXMgPSB7XG4gICAgMTogWzc1MCwgNTcwLCA1LCBcImhvcml6b250YWxcIiwgMTAwLCBcInZpb2xldFwiLCAwLjFdLFxuICAgIDI6IFs2MjUsIDQ1MCwgNSwgXCJob3Jpem9udGFsXCIsIDIwMCwgXCJmb3Jlc3RncmVlblwiLCAwLjNdLFxuICAgIDM6IFsyMjUsIDQ1MCwgNSwgXCJob3Jpem9udGFsXCIsIDIwMCwgXCJmb3Jlc3RncmVlblwiLCAwLjNdLFxuICAgIDQ6IFs1MjUsIDM1MCwgNSwgXCJ2ZXJ0aWNhbFwiLCAxNTAsIFwic2t5Ymx1ZVwiLCAwLjNdLFxuICAgIDU6IFs3NSwgMzAwLCA1LCBcInZlcnRpY2FsXCIsIDE1MCwgXCJza3libHVlXCIsIDAuM10sXG4gICAgNjogWzMyNSwgMjYwLCAxMCwgXCJ2ZXJ0aWNhbFwiLCAxMDAsIFwiY3JpbXNvblwiLCAwLjNdLFxuICAgIDc6IFs2MjUsIDI2MCwgMTAsIFwidmVydGljYWxcIiwgMTAwLCBcImNyaW1zb25cIiwgMC4zXSxcbiAgICA4OiBbMzUwLCAyNjAsIDEwLCBcImhvcml6b250YWxcIiwgMjUwLCBcImluZGlnb1wiLCAwLjM3NV0sXG4gICAgOTogWzY1MCwgMTk1LCA1LCBcImhvcml6b250YWxcIiwgMjUwLCBcIm9yYW5nZVwiLCAwLjVdLFxuICAgIDEwOiBbNjAwLCAxNTAsIDEwLCBcImhvcml6b250YWxcIiwgMjUwLCBcImluZGlnb1wiLCAwLjM3NV0sXG4gICAgMTE6IFs1MjUsIDIwLCA1LCBcInZlcnRpY2FsXCIsIDE0MCwgXCJtYXJvb25cIiwgMC4zXSxcbiAgICAxMjogWzM1MCwgNjAsIDUsIFwidmVydGljYWxcIiwgMTQwLCBcIk1lZGl1bVNsYXRlQmx1ZVwiLCAwLjRdLFxuICAgIDEzOiBbMjUwLCA2MCwgNSwgXCJ2ZXJ0aWNhbFwiLCAxNDAsIFwiTWVkaXVtU2xhdGVCbHVlXCIsIDAuNF0sXG4gIH1cbiAgLy8gb2JzdGFjbGUgc3BlZWRzIGZvciA2MCBGUFMuXG4gIC8vIGxldCBuZXdPYnN0YWNsZXMgPSB7XG4gIC8vICAgMTogWzc1MCwgNTcwLCA1LCBcImhvcml6b250YWxcIiwgMTAwLCBcInZpb2xldFwiLCAwLjRdLFxuICAvLyAgIDI6IFs2MjUsIDQ1MCwgNSwgXCJob3Jpem9udGFsXCIsIDIwMCwgXCJmb3Jlc3RncmVlblwiLCAxLjJdLFxuICAvLyAgIDM6IFsyMjUsIDQ1MCwgNSwgXCJob3Jpem9udGFsXCIsIDIwMCwgXCJmb3Jlc3RncmVlblwiLCAxLjJdLFxuICAvLyAgIDQ6IFs1MjUsIDM1MCwgNSwgXCJ2ZXJ0aWNhbFwiLCAxNTAsIFwic2t5Ymx1ZVwiLCAxLjJdLFxuICAvLyAgIDU6IFs3NSwgMzAwLCA1LCBcInZlcnRpY2FsXCIsIDE1MCwgXCJza3libHVlXCIsIDEuMl0sXG4gIC8vICAgNjogWzMyNSwgMjYwLCAxMCwgXCJ2ZXJ0aWNhbFwiLCAxMDAsIFwiY3JpbXNvblwiLCAxLjJdLFxuICAvLyAgIDc6IFs2MjUsIDI2MCwgMTAsIFwidmVydGljYWxcIiwgMTAwLCBcImNyaW1zb25cIiwgMS4yXSxcbiAgLy8gICA4OiBbMzUwLCAyNjAsIDEwLCBcImhvcml6b250YWxcIiwgMjUwLCBcImluZGlnb1wiLCAxLjVdLFxuICAvLyAgIDk6IFs2NTAsIDE5NSwgNSwgXCJob3Jpem9udGFsXCIsIDI1MCwgXCJvcmFuZ2VcIiwgMl0sXG4gIC8vICAgMTA6IFs2MDAsIDE1MCwgMTAsIFwiaG9yaXpvbnRhbFwiLCAyNTAsIFwiaW5kaWdvXCIsIDEuNV0sXG4gIC8vICAgMTE6IFs1MjUsIDIwLCA1LCBcInZlcnRpY2FsXCIsIDE0MCwgXCJtYXJvb25cIiwgMS4yXSxcbiAgLy8gICAxMjogWzM1MCwgNjAsIDUsIFwidmVydGljYWxcIiwgMTQwLCBcIk1lZGl1bVNsYXRlQmx1ZVwiLCAxLjZdLFxuICAvLyAgIDEzOiBbMjUwLCA2MCwgNSwgXCJ2ZXJ0aWNhbFwiLCAxNDAsIFwiTWVkaXVtU2xhdGVCbHVlXCIsIDEuNl0sXG4gIC8vIH1cblxuICBjcmVhdGVPYnN0YWNsZXMoKTtcbiAgXG4gIGZ1bmN0aW9uIGNyZWF0ZU9ic3RhY2xlcygpIHtcbiAgICBPYmplY3QudmFsdWVzKG5ld09ic3RhY2xlcykuZm9yRWFjaCgob2JzdGFjbGUsIGkpID0+IHtcbiAgICAgIG9ic3RhY2xlc1tpXSA9IG5ldyBPYnN0YWNsZSguLi5vYnN0YWNsZSk7O1xuICAgIH0pXG4gIH07XG5cbiAgZnVuY3Rpb24gdXBkYXRlT2JzdGFjbGVzKCkge1xuICAgIE9iamVjdC52YWx1ZXMob2JzdGFjbGVzKS5mb3JFYWNoKG9ic3RhY2xlID0+IHtcbiAgICAgIG9ic3RhY2xlLnVwZGF0ZSgpO1xuICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGRyYXdPYnN0YWNsZXMoKSB7XG4gICAgT2JqZWN0LnZhbHVlcyhvYnN0YWNsZXMpLmZvckVhY2gob2JzdGFjbGUgPT4ge1xuICAgICAgb2JzdGFjbGUuZHJhd09ic3RhY2xlKGN0eCk7XG4gICAgfSk7XG4gIH07XG5cbiAgd2VsY29tZU1vZGFsKGN0eCwgZ2FtZVN0YXJ0LCBHQU1FX1dJRFRILCBHQU1FX0hFSUdIVCk7XG5cbn0pIl0sInNvdXJjZVJvb3QiOiIifQ==