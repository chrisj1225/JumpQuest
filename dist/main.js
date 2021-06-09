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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qdW1wcXVlc3QvLi9zcmMvc2NyaXB0cy9iYWNrZ3JvdW5kLmpzIiwid2VicGFjazovL2p1bXBxdWVzdC8uL3NyYy9zY3JpcHRzL2NoYXJhY3Rlci5qcyIsIndlYnBhY2s6Ly9qdW1wcXVlc3QvLi9zcmMvc2NyaXB0cy9jb250cm9sbGVyLmpzIiwid2VicGFjazovL2p1bXBxdWVzdC8uL3NyYy9zY3JpcHRzL29ic3RhY2xlLmpzIiwid2VicGFjazovL2p1bXBxdWVzdC8uL3NyYy9zY3JpcHRzL3BsYXRmb3JtLmpzIiwid2VicGFjazovL2p1bXBxdWVzdC8uL3NyYy9zY3JpcHRzL3V0aWwuanMiLCJ3ZWJwYWNrOi8vanVtcHF1ZXN0Ly4vc3JjL3NjcmlwdHMvd2VsY29tZS5qcyIsIndlYnBhY2s6Ly9qdW1wcXVlc3QvLi9zcmMvc2NyaXB0cy93aW5uZXIuanMiLCJ3ZWJwYWNrOi8vanVtcHF1ZXN0Ly4vc3JjL3N0eWxlcy9pbmRleC5zY3NzPzg1NTkiLCJ3ZWJwYWNrOi8vanVtcHF1ZXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2p1bXBxdWVzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vanVtcHF1ZXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vanVtcHF1ZXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vanVtcHF1ZXN0Ly4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIkJhY2tncm91bmQiLCJiZ1dpZHRoIiwiYmdIZWlnaHQiLCJ3aWR0aCIsImhlaWdodCIsInBvc1kiLCJjdHgiLCJkcmF3SW1hZ2UiLCJwZWFjZUJnIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJmaWxsIiwiQ2hhcmFjdGVyIiwiZ2FtZVdpZHRoIiwiZ2FtZUhlaWdodCIsImRpcmVjdGlvbiIsIm1vdmVTcGVlZCIsImp1bXBIZWlnaHQiLCJjcm91Y2hpbmciLCJqdW1waW5nIiwiZmFsbGluZyIsImlzQ29sbGlkaW5nIiwicG9zaXRpb24iLCJ4IiwieSIsInZlbG9jaXR5IiwiY29uc3RhbnRzIiwiZ3Jhdml0eSIsImZyaWN0aW9uIiwia2V5cyIsImZyYW1lcyIsImZpbm5MZWZ0IiwibW92aW5nIiwiZmlublJpZ2h0IiwicGxhdGZvcm1zIiwib2JzdGFjbGVzIiwiaSIsImxlbmd0aCIsInBsYXRmb3JtIiwib25QbGF0Zm9ybSIsIm9ic3RhY2xlIiwiY29sbGlzaW9uRGV0ZWN0aW9uIiwib3JpZW50YXRpb24iLCJjaGFyUG9zIiwibyIsInIiLCJyYWRpdXMiLCJjIiwidyIsImgiLCJkaXN0WCIsIk1hdGgiLCJhYnMiLCJkaXN0WSIsImR4IiwiZHkiLCJwb3ciLCJDb250cm9sbGVyIiwiY2hhciIsImp1bXBTRlgiLCJBdWRpbyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiY29kZSIsInVwZGF0ZUtleXMiLCJjcm91Y2giLCJjb2xsaWRpbmciLCJwbGF5IiwianVtcCIsInN0b3AiLCJ1bmNyb3VjaCIsIk9ic3RhY2xlIiwicG9zWCIsInRyYXZlbExlbmd0aCIsImNvbG9yIiwic3BlZWQiLCJpbml0UG9zIiwidHJhdmVsTGVuIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwiYXJjIiwiUEkiLCJzdHJva2UiLCJQbGF0Zm9ybSIsImluZGV4IiwiSW1hZ2UiLCJzcmMiLCJiZWVtbyIsImZpbm5CZWVtbyIsIndlbGNvbWVNb2RhbCIsImdhbWVTdGFydCIsIkdBTUVfV0lEVEgiLCJHQU1FX0hFSUdIVCIsImZvbnQiLCJmaWxsVGV4dCIsIndpbm5lck1vZGFsIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0IiwiYmciLCJjb250cm9sc1Nob3duIiwiY29udHJvbHNCdG4iLCJjb250cm9scyIsImJnbSIsIm11c2ljUGxheWluZyIsIm11c2ljQnRuIiwicGxheUJ0biIsInBhdXNlQnRuIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwicGF1c2UiLCJsb29wIiwic3RhcnRHYW1lIiwiZ2FtZUxvb3AiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjbGVhclJlY3QiLCJkcmF3QmFja2dyb3VuZCIsImRyYXdQbGF0Zm9ybXMiLCJ1cGRhdGVPYnN0YWNsZXMiLCJkcmF3T2JzdGFjbGVzIiwidXBkYXRlIiwiT2JqZWN0IiwidmFsdWVzIiwiZHJhd0NoYXIiLCJmb3JFYWNoIiwicCIsImRyYXdQbGF0Zm9ybSIsIm5ld09ic3RhY2xlcyIsImNyZWF0ZU9ic3RhY2xlcyIsImRyYXdPYnN0YWNsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0lBRU1BLFU7QUFDSixzQkFBWUMsT0FBWixFQUFxQkMsUUFBckIsRUFBK0I7QUFBQTs7QUFDN0IsU0FBS0MsS0FBTCxHQUFhRixPQUFiO0FBQ0EsU0FBS0csTUFBTCxHQUFjRixRQUFkO0FBQ0EsU0FBS0csSUFBTCxHQUFZLElBQVo7QUFDRDs7OztXQUVELHdCQUFlQyxHQUFmLEVBQW9CO0FBQ2xCO0FBQ0E7QUFDQTtBQUVBQSxTQUFHLENBQUNDLFNBQUosQ0FBY0MsMENBQWQsRUFBdUIsQ0FBdkIsRUFBMEIsQ0FBMUIsRUFBNkIsSUFBN0IsRUFBbUMsR0FBbkMsRUFBd0MsQ0FBeEMsRUFBMkMsQ0FBM0MsRUFBOEMsSUFBOUMsRUFBb0QsR0FBcEQ7QUFDQUYsU0FBRyxDQUFDRyxTQUFKLEdBQWdCLFNBQWhCO0FBQ0FILFNBQUcsQ0FBQ0ksUUFBSixDQUFhLENBQWIsRUFBZ0IsS0FBS04sTUFBTCxHQUFjLEVBQTlCLEVBQWtDLEtBQUtELEtBQXZDLEVBQThDLEtBQUtDLE1BQW5EO0FBQ0FFLFNBQUcsQ0FBQ0ssSUFBSjtBQUNEOzs7Ozs7QUFHSCwrREFBZVgsVUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7O0lBRU1ZLFM7QUFDSixxQkFBWUMsU0FBWixFQUF1QkMsVUFBdkIsRUFB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQUMsaUJBQWU7O0FBRWYsV0FBU0EsZUFBVCxHQUEyQjtBQUN6QlAsVUFBTSxDQUFDQyxNQUFQLENBQWNLLFlBQWQsRUFBNEJILE9BQTVCLENBQW9DLFVBQUN4RixRQUFELEVBQVdKLENBQVgsRUFBaUI7QUFDbkRELGVBQVMsQ0FBQ0MsQ0FBRCxDQUFULGNBQW1Cb0Msc0RBQW5CLHFCQUErQmhDLFFBQS9CO0FBQXlDO0FBQzFDLEtBRkQ7QUFHRDs7QUFBQTs7QUFFRCxXQUFTa0YsZUFBVCxHQUEyQjtBQUN6QkcsVUFBTSxDQUFDQyxNQUFQLENBQWMzRixTQUFkLEVBQXlCNkYsT0FBekIsQ0FBaUMsVUFBQXhGLFFBQVEsRUFBSTtBQUMzQ0EsY0FBUSxDQUFDb0YsTUFBVDtBQUNELEtBRkQ7QUFHRDs7QUFBQTs7QUFFRCxXQUFTRCxhQUFULEdBQXlCO0FBQ3ZCRSxVQUFNLENBQUNDLE1BQVAsQ0FBYzNGLFNBQWQsRUFBeUI2RixPQUF6QixDQUFpQyxVQUFBeEYsUUFBUSxFQUFJO0FBQzNDQSxjQUFRLENBQUM2RixZQUFULENBQXNCL0gsR0FBdEI7QUFDRCxLQUZEO0FBR0Q7O0FBQUE7QUFFRG9GLDJEQUFZLENBQUNwRixHQUFELEVBQU1xRixTQUFOLEVBQWlCQyxVQUFqQixFQUE2QkMsV0FBN0IsQ0FBWjtBQUVELENBN09ELEUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHBlYWNlQmcgfSBmcm9tICcuL3V0aWwnO1xuXG5jbGFzcyBCYWNrZ3JvdW5kIHtcbiAgY29uc3RydWN0b3IoYmdXaWR0aCwgYmdIZWlnaHQpIHtcbiAgICB0aGlzLndpZHRoID0gYmdXaWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IGJnSGVpZ2h0O1xuICAgIHRoaXMucG9zWSA9IDMyMDA7XG4gIH1cblxuICBkcmF3QmFja2dyb3VuZChjdHgpIHtcbiAgICAvLyBjdHguZmlsbFN0eWxlID0gXCJNaXN0eVJvc2VcIjtcbiAgICAvLyBjdHguZmlsbFJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQgLSAyMCk7XG4gICAgLy8gY3R4LmZpbGwoKTtcblxuICAgIGN0eC5kcmF3SW1hZ2UocGVhY2VCZywgMCwgMCwgMTAwMCwgODAwLCAwLCAwLCAxMDAwLCA4MDApO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcIiMwMDMzMDBcIjtcbiAgICBjdHguZmlsbFJlY3QoMCwgdGhpcy5oZWlnaHQgLSAyMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIGN0eC5maWxsKCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFja2dyb3VuZDsiLCJpbXBvcnQgeyBmaW5uUmlnaHQsIGZpbm5MZWZ0IH0gZnJvbSAnLi91dGlsJztcblxuY2xhc3MgQ2hhcmFjdGVyIHtcbiAgY29uc3RydWN0b3IoZ2FtZVdpZHRoLCBnYW1lSGVpZ2h0KSB7XG4gICAgdGhpcy5nYW1lV2lkdGggPSBnYW1lV2lkdGg7XG4gICAgdGhpcy5nYW1lSGVpZ2h0ID0gZ2FtZUhlaWdodDtcbiAgICB0aGlzLndpZHRoID0gNjQ7XG4gICAgdGhpcy5oZWlnaHQgPSA0MDtcbiAgICB0aGlzLmRpcmVjdGlvbiA9IFwicmlnaHRcIjtcbiAgICB0aGlzLm1vdmVTcGVlZCA9IC43NTtcbiAgICB0aGlzLmp1bXBIZWlnaHQgPSAtMTA7XG4gICAgdGhpcy5jcm91Y2hpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmp1bXBpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmZhbGxpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmlzQ29sbGlkaW5nID0gZmFsc2U7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgIHg6IDUwLFxuICAgICAgeTogdGhpcy5nYW1lSGVpZ2h0IC0gdGhpcy5oZWlnaHQgLSAyMCxcbiAgICB9O1xuICAgIHRoaXMudmVsb2NpdHkgPSB7XG4gICAgICB4OiAwLFxuICAgICAgeTogMCxcbiAgICB9O1xuICAgIHRoaXMuY29uc3RhbnRzID0ge1xuICAgICAgZ3Jhdml0eTogMC4xNSxcbiAgICAgIGZyaWN0aW9uOiAwLjksXG4gICAgfTtcbiAgICB0aGlzLmtleXMgPSB7fTtcbiAgfVxuXG4gIGRyYXdDaGFyKGN0eCwgZnJhbWVzKSB7XG4gICAgLy8gdGVzdGluZyBjaGFyYWN0ZXIgYm91bmRhcmllc1xuICAgIC8vIGN0eC5zdHJva2VTdHlsZSA9IFwiZ3JlZW5cIjtcbiAgICAvLyBjdHgubW92ZVRvKHRoaXMucG9zaXRpb24ueCsyMCwgdGhpcy5wb3NpdGlvbi55KTtcbiAgICAvLyBjdHgubGluZVRvKHRoaXMucG9zaXRpb24ueCsyMCwgMCk7XG4gICAgLy8gY3R4Lm1vdmVUbyh0aGlzLnBvc2l0aW9uLngrdGhpcy53aWR0aC0zMCwgdGhpcy5wb3NpdGlvbi55KTtcbiAgICAvLyBjdHgubGluZVRvKHRoaXMucG9zaXRpb24ueCt0aGlzLndpZHRoLTMwLCAwKTtcbiAgICAvLyBjdHguc3Ryb2tlKCk7XG5cbiAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT0gJ2xlZnQnKSB7XG4gICAgICBpZiAodGhpcy5pc0NvbGxpZGluZykge1xuICAgICAgICBjdHguZHJhd0ltYWdlKGZpbm5MZWZ0LCAzNTIsIDAsIDMyLCAyMCwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5qdW1waW5nIHx8IHRoaXMuZmFsbGluZykgeyBcbiAgICAgICAgY3R4LmRyYXdJbWFnZShmaW5uTGVmdCwgNDQ4LCAwLCAzMiwgMjAsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMubW92aW5nKSB7XG4gICAgICAgIGlmIChmcmFtZXMgPCAyMCkge1xuICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoZmlubkxlZnQsIDU0NCwgMCwgMzIsIDIwLCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB9IGVsc2UgaWYgKGZyYW1lcyA+IDIwICYmIGZyYW1lcyA8IDQwKSB7IFxuICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoZmlubkxlZnQsIDQ4MCwgMCwgMzIsIDIwLCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoZmlubkxlZnQsIDQ0OCwgMCwgMzIsIDIwLCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGZyYW1lcyA8IDQwKSB7XG4gICAgICAgICAgY3R4LmRyYXdJbWFnZShmaW5uTGVmdCwgODY0LCAwLCAzMiwgMjAsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY3R4LmRyYXdJbWFnZShmaW5uTGVmdCwgODAwLCAwLCAzMiwgMjAsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIH07XG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAodGhpcy5kaXJlY3Rpb24gPT0gJ3JpZ2h0Jykge1xuICAgICAgaWYgKHRoaXMuaXNDb2xsaWRpbmcpIHsgXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoZmlublJpZ2h0LCA1MTIsIDAsIDMyLCAyMCwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5qdW1waW5nIHx8IHRoaXMuZmFsbGluZykge1xuICAgICAgICBjdHguZHJhd0ltYWdlKGZpbm5SaWdodCwgNDgwLCAwLCAzMiwgMjAsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMubW92aW5nKSB7XG4gICAgICAgIGlmIChmcmFtZXMgPCAyMCkge1xuICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoZmlublJpZ2h0LCAzMjAsIDAsIDMyLCAyMCwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgfSBlbHNlIGlmIChmcmFtZXMgPiAyMCAmJiBmcmFtZXMgPCA0MCkgeyBcbiAgICAgICAgICBjdHguZHJhd0ltYWdlKGZpbm5SaWdodCwgMzg0LCAwLCAzMiwgMjAsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY3R4LmRyYXdJbWFnZShmaW5uUmlnaHQsIDQxNiwgMCwgMzIsIDIwLCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGZyYW1lcyA8IDQwKSB7XG4gICAgICAgICAgY3R4LmRyYXdJbWFnZShmaW5uUmlnaHQsIDAsIDAsIDMyLCAyMCwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjdHguZHJhd0ltYWdlKGZpbm5SaWdodCwgNjQsIDAsIDMyLCAyMCwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUtleXMoa2V5cykge1xuICAgIHRoaXMua2V5cyA9IGtleXM7XG4gIH1cblxuICBzdG9wKCkge1xuICAgIHRoaXMudmVsb2NpdHkueCA9IDA7XG4gICAgdGhpcy52ZWxvY2l0eS55ID0gMDtcbiAgfVxuXG4gIGp1bXAoKSB7XG4gICAgaWYgKHRoaXMuanVtcGluZykge1xuICAgICAgdGhpcy52ZWxvY2l0eS55ID0gdGhpcy5qdW1wSGVpZ2h0XG4gICAgfVxuICB9XG5cbiAgY3JvdWNoKCkge1xuICAgIHRoaXMuaGVpZ2h0ID0gMjA7XG4gIH1cblxuICB1bmNyb3VjaCgpIHtcbiAgICB0aGlzLmhlaWdodCA9IDQwO1xuICAgIHRoaXMudmVsb2NpdHkueSA9IC01O1xuICB9XG5cbiAgdXBkYXRlKHBsYXRmb3Jtcywgb2JzdGFjbGVzKSB7XG4gICAgLy8gY2hlY2sgY3VycmVudCBrZXkgcHJlc3Nlc1xuICAgIGlmICh0aGlzLmtleXNbJ0Fycm93TGVmdCddIHx8IHRoaXMua2V5c1snS2V5QSddKSB7XG4gICAgICB0aGlzLnZlbG9jaXR5LnggPSAtdGhpcy5tb3ZlU3BlZWQ7XG4gICAgfSBlbHNlIGlmICh0aGlzLmtleXNbJ0Fycm93UmlnaHQnXSB8fCB0aGlzLmtleXNbJ0tleUQnXSkge1xuICAgICAgdGhpcy52ZWxvY2l0eS54ID0gdGhpcy5tb3ZlU3BlZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubW92aW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gY2hhciBtb3ZlbWVudHNcbiAgICB0aGlzLnBvc2l0aW9uLnkgKz0gdGhpcy52ZWxvY2l0eS55O1xuICAgIHRoaXMucG9zaXRpb24ueCArPSB0aGlzLnZlbG9jaXR5Lng7XG4gICAgdGhpcy52ZWxvY2l0eS55ICs9IHRoaXMuY29uc3RhbnRzLmdyYXZpdHk7XG4gICAgdGhpcy52ZWxvY2l0eS54ICo9IHRoaXMuY29uc3RhbnRzLmZyaWN0aW9uO1xuICAgIHRoaXMudmVsb2NpdHkueSAqPSB0aGlzLmNvbnN0YW50cy5mcmljdGlvbjtcblxuICAgIC8vIGlmIGNoYXIgaXMgZ29pbmcgb2ZmIHNjcmVlbiwgc3RvcCBhdCBlZGdlIG9mIHNjcmVlblxuICAgIGlmICh0aGlzLnBvc2l0aW9uLnggPD0gMCkge1xuICAgICAgdGhpcy5wb3NpdGlvbi54ID0gMDtcbiAgICB9IGVsc2UgaWYgKHRoaXMucG9zaXRpb24ueCA+PSB0aGlzLmdhbWVXaWR0aCAtIHRoaXMud2lkdGgpIHtcbiAgICAgIHRoaXMucG9zaXRpb24ueCA9IHRoaXMuZ2FtZVdpZHRoIC0gdGhpcy53aWR0aDtcbiAgICB9XG5cbiAgICAvLyAqKldyaXRlIGNvZGUgdG8gZmlsdGVyIG91dCBwbGF0Zm9ybXMgTk9UIGluIGN1cnJlbnQgdmlldyBmcmFtZSoqXG4gICAgLy8gY2hlY2sgaWYgY2hhciBpcyBzdGFuZGluZyBvbiBhbnkgcGxhdGZvcm1cbiAgICAvLyBlbHNlIGNoZWNrIGlmIGNoYXIgaXMgZmFsbGluZyBiZWxvdyBmbG9vciBsaW5lXG4gICAgLy8gZWxzZSBjaGFyIGlzIGN1cnJlbnRseSBmYWxsaW5nXG4gICAgZm9yIChsZXQgaT0wOyBpPHBsYXRmb3Jtcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHBsYXRmb3JtID0gcGxhdGZvcm1zW2ldO1xuICAgICAgaWYgKHRoaXMub25QbGF0Zm9ybSh0aGlzLnBvc2l0aW9uLCBwbGF0Zm9ybSkpIHtcbiAgICAgICAgdGhpcy5mYWxsaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuanVtcGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgPSBwbGF0Zm9ybVsxXS10aGlzLmhlaWdodDtcbiAgICAgICAgdGhpcy52ZWxvY2l0eS55ID0gMDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMucG9zaXRpb24ueSA+PSB0aGlzLmdhbWVIZWlnaHQtdGhpcy5oZWlnaHQtMjApIHtcbiAgICAgICAgdGhpcy5qdW1waW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZmFsbGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgPSB0aGlzLmdhbWVIZWlnaHQgLSB0aGlzLmhlaWdodCAtIDIwO1xuICAgICAgICB0aGlzLnZlbG9jaXR5LnkgPSAwO1xuICAgICAgICBicmVhaztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZmFsbGluZyA9IHRydWU7XG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vICoqV3JpdGUgY29kZSB0byBmaWx0ZXIgb3V0IG9ic3RhY2xlcyBOT1QgaW4gY3VycmVudCB2aWV3IGZyYW1lKipcbiAgICBmb3IgKGxldCBpPTA7IGk8b2JzdGFjbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgb2JzdGFjbGUgPSBvYnN0YWNsZXNbaV07XG4gICAgICBpZiAodGhpcy5jb2xsaXNpb25EZXRlY3Rpb24ob2JzdGFjbGUpKSB7XG4gICAgICAgIHRoaXMuaXNDb2xsaWRpbmcgPSB0cnVlO1xuICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHt0aGlzLmNvbGxpZGluZyA9IGZhbHNlfSwgMTAwMCk7XG5cbiAgICAgICAgaWYgKG9ic3RhY2xlLm9yaWVudGF0aW9uID09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT0gJ2xlZnQnKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggKz0gMTU7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnkgKz0gMTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54IC09IDE1O1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55ICs9IDE7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChvYnN0YWNsZS5kaXJlY3Rpb24gPT0gXCJSRFwiKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggKz0gMjA7XG4gICAgICAgICAgfSBlbHNlIGlmIChvYnN0YWNsZS5kaXJlY3Rpb24gPT0gXCJMVVwiKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggLT0gMjA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pc0NvbGxpZGluZyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICB9O1xuXG4gIG9uUGxhdGZvcm0oY2hhclBvcywgcGxhdGZvcm0pIHtcbiAgICAvLyBjaGFyUG9zID0ge1xuICAgIC8vICAgeDogY2hhclBvc1gsXG4gICAgLy8gICB5OiBjaGFyUG9zWSxcbiAgICAvLyB9XG4gICAgLy8gcGxhdGZvcm0gPSBbcG9zWCwgcG9zWSwgd2lkdGhdXG4gICAgaWYgKHRoaXMuY3JvdWNoaW5nKSB7XG4gICAgICBpZiAoKChjaGFyUG9zLnggKyB0aGlzLndpZHRoIC0xNSkgPj0gcGxhdGZvcm1bMF0pICYmXG4gICAgICAoKGNoYXJQb3MueCsxNSkgPD0gKHBsYXRmb3JtWzBdK3BsYXRmb3JtWzJdKSkgJiZcbiAgICAgICgoY2hhclBvcy55ICsgMjApIDw9IHBsYXRmb3JtWzFdKSAmJlxuICAgICAgKChjaGFyUG9zLnkgKyAyMCkgPj0gcGxhdGZvcm1bMV0tMikpe1xuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoKChjaGFyUG9zLnggKyB0aGlzLndpZHRoIC0xNSkgPj0gcGxhdGZvcm1bMF0pICYmXG4gICAgICAoKGNoYXJQb3MueCsxNSkgPD0gKHBsYXRmb3JtWzBdK3BsYXRmb3JtWzJdKSkgJiZcbiAgICAgICgoY2hhclBvcy55ICsgNDApIDw9IHBsYXRmb3JtWzFdKSAmJlxuICAgICAgKChjaGFyUG9zLnkgKyA0MCkgPj0gcGxhdGZvcm1bMV0tMikpe1xuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9O1xuICAgIH07XG4gIH1cblxuICAvLyByZXR1cm4gdHJ1ZSBpZiBhbiBvYnN0YWNsZSBjb2xsaWRlcyB3aXRoIHVzZXJcbiAgY29sbGlzaW9uRGV0ZWN0aW9uKG9ic3RhY2xlKSB7XG4gICAgbGV0IG8gPSB7XG4gICAgICB4OiBvYnN0YWNsZS5wb3NpdGlvbi54LFxuICAgICAgeTogb2JzdGFjbGUucG9zaXRpb24ueSxcbiAgICAgIHI6IG9ic3RhY2xlLnJhZGl1c1xuICAgIH07XG4gICAgbGV0IGMgPSB7XG4gICAgICB4OiB0aGlzLnBvc2l0aW9uLnggKyAyMCxcbiAgICAgIHk6IHRoaXMucG9zaXRpb24ueSxcbiAgICAgIHc6IHRoaXMud2lkdGgtMzAsXG4gICAgICBoOiB0aGlzLmhlaWdodFxuICAgIH1cblxuICAgIC8vIGZpbmQgaG9yaXovdmVydCBkaXN0YW5jZSBiL3cgY2VudGVyIG9mIG9ic3RhY2xlICYgY2hhcmFjdGVyXG4gICAgbGV0IGRpc3RYID0gTWF0aC5hYnMoby54IC0gYy54IC0gYy53LzIpO1xuICAgIGxldCBkaXN0WSA9IE1hdGguYWJzKG8ueSAtIGMueSAtIGMuaC8yKTtcblxuICAgIC8vIHJldHVybiBmYWxzZSBpZiBkaXN0IGlzIGdyZWF0ZXIgdGhhbiBtaW4gZGlzdCBiL3cgZWRnZXMgKHggb3IgeSlcbiAgICBpZiAoKGRpc3RYID4gKGMudy8yICsgby5yKSkgfHwgKGRpc3RZID4gKGMuaC8yICsgby5yKSkpIHtyZXR1cm4gZmFsc2V9O1xuXG4gICAgLy8gcmV0dXJuIHRydWUgaWYgZGlzdCBpcyA8PSBjaGFyIHdpZHRoLzJcbiAgICBpZiAoKGRpc3RYIDw9IChjLncvMikpICYmIChkaXN0WSA8PSAoYy5oLzIpKSkge3JldHVybiB0cnVlfTtcblxuICAgIC8vIGR4ICYgZHkgPSBkaXN0IGIvdyBvYnN0YWNsZSBjZW50ZXIgJiBjaGFyIGVkZ2UgKHggJiB5KVxuICAgIGxldCBkeCA9IGRpc3RYIC0gYy53IC8gMjtcbiAgICBsZXQgZHkgPSBkaXN0WSAtIGMuaCAvIDI7XG5cbiAgICAvLyB1c2UgcHl0aGFnb3JlYW4gdGhlb3JlbSB0byBzZWUgaWYgcmFkaXVzXjIgIFxuICAgIC8vIGlzIGdyZWF0ZXIgdGhhbiBoeXBvdGVudXNlIG9mIGR4XjIgKyBkeV4yIFxuICAgIC8vIGlmIGdyZWF0ZXIsIG9iamVjdCBhbmQgY2hhciBhcmUgY29sbGlkaW5nICh0cnVlKVxuICAgIHJldHVybiAoTWF0aC5wb3coZHgsMikgKyBNYXRoLnBvdyhkeSwyKSA8PSBNYXRoLnBvdyhvLnIsMikpO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hhcmFjdGVyOyIsImNsYXNzIENvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcihjaGFyKSB7XG4gICAgdGhpcy5rZXlzID0ge307XG4gICAgdGhpcy5qdW1wU0ZYID0gbmV3IEF1ZGlvKFwiLi9zcmMvYXVkaW8vbWFwbGUtanVtcC1zZngubXAzXCIpXG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICBzd2l0Y2ggKGV2ZW50LmNvZGUpIHtcbiAgICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcbiAgICAgICAgY2FzZSAnS2V5QSc6ICBcbiAgICAgICAgICB0aGlzLmtleXNbZXZlbnQuY29kZV0gPSB0cnVlXG4gICAgICAgICAgY2hhci5kaXJlY3Rpb24gPSBcImxlZnRcIjtcbiAgICAgICAgICBjaGFyLm1vdmluZyA9IHRydWU7XG4gICAgICAgICAgY2hhci5rZXlzID0gdGhpcy5rZXlzO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdBcnJvd1JpZ2h0JzpcbiAgICAgICAgY2FzZSAnS2V5RCc6XG4gICAgICAgICAgdGhpcy5rZXlzW2V2ZW50LmNvZGVdID0gdHJ1ZVxuICAgICAgICAgIGNoYXIuZGlyZWN0aW9uID0gXCJyaWdodFwiO1xuICAgICAgICAgIGNoYXIubW92aW5nID0gdHJ1ZTtcbiAgICAgICAgICBjaGFyLnVwZGF0ZUtleXModGhpcy5rZXlzKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgY2FzZSAnS2V5Uyc6XG4gICAgICAgICAgLy8gdGhpcy5rZXlzW2V2ZW50LmNvZGVdID0gdHJ1ZVxuICAgICAgICAgIGNoYXIuY3JvdWNoaW5nID0gdHJ1ZTtcbiAgICAgICAgICBjaGFyLmNyb3VjaCgpOyAgIFxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdTcGFjZSc6XG4gICAgICAgICAgLy8gdGhpcy5rZXlzW2V2ZW50LmNvZGVdID0gdHJ1ZVxuICAgICAgICAgIGlmICghY2hhci5qdW1waW5nICYmICFjaGFyLmZhbGxpbmcgJiYgIWNoYXIuY29sbGlkaW5nKSB7XG4gICAgICAgICAgICB0aGlzLmp1bXBTRlgucGxheSgpO1xuICAgICAgICAgICAgY2hhci5qdW1waW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIGNoYXIuanVtcCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2ZW50KSA9PiB7XG4gICAgICBzd2l0Y2ggKGV2ZW50LmNvZGUpIHtcbiAgICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcbiAgICAgICAgY2FzZSAnS2V5QSc6IFxuICAgICAgICAgIHRoaXMua2V5c1tldmVudC5jb2RlXSA9IGZhbHNlO1xuICAgICAgICAgIGNoYXIua2V5cyA9IHRoaXMua2V5cztcbiAgICAgICAgICBjaGFyLnN0b3AoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XG4gICAgICAgIGNhc2UgJ0tleUQnOlxuICAgICAgICAgIHRoaXMua2V5c1tldmVudC5jb2RlXSA9IGZhbHNlO1xuICAgICAgICAgIGNoYXIua2V5cyA9IHRoaXMua2V5cztcbiAgICAgICAgICBjaGFyLnN0b3AoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgY2FzZSAnS2V5Uyc6XG4gICAgICAgICAgLy8gdGhpcy5rZXlzW2V2ZW50LmNvZGVdID0gZmFsc2U7XG4gICAgICAgICAgY2hhci5jcm91Y2hpbmcgPSBmYWxzZTtcbiAgICAgICAgICBjaGFyLnVuY3JvdWNoKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1NwYWNlJzpcbiAgICAgICAgICAvLyB0aGlzLmtleXNbZXZlbnQuY29kZV0gPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xsZXI7IiwiY2xhc3MgT2JzdGFjbGUge1xuICBjb25zdHJ1Y3Rvcihwb3NYLCBwb3NZLCByYWRpdXMsIG9yaWVudGF0aW9uLCB0cmF2ZWxMZW5ndGgsIGNvbG9yLCBzcGVlZCkge1xuICAgIHRoaXMuaW5pdFBvcyA9IHtcbiAgICAgIHg6IHBvc1gsXG4gICAgICB5OiBwb3NZXG4gICAgfTtcbiAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgeDogcG9zWCxcbiAgICAgIHk6IHBvc1lcbiAgICB9O1xuICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xuICAgIHRoaXMub3JpZW50YXRpb24gPSBvcmllbnRhdGlvbjtcbiAgICB0aGlzLnRyYXZlbExlbiA9IHRyYXZlbExlbmd0aFxuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICB0aGlzLnNwZWVkID0gc3BlZWQ7XG4gICAgdGhpcy5kaXJlY3Rpb24gPSBcIlJEXCI7IC8vIExVID0gbGVmdC91cCwgUkQgPSByaWdodC9kb3duIChkZXAuIG9uIG9yaWVudGF0aW9uKVxuICB9XG5cbiAgZHJhd09ic3RhY2xlKGN0eCkge1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55KTtcbiAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICBjdHguYXJjKHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLnJhZGl1cywgMCwgTWF0aC5QSSAqIDIsIHRydWUpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgICBjdHguZmlsbCgpO1xuICB9IFxuXG4gIHVwZGF0ZSgpIHtcbiAgICAvLyBzZXQgZGlyZWN0aW9uIG9ic3RhY2xlIHNob3VsZCBtb3ZlIGJhc2VkIG9uIGN1cnJlbnQgcG9zaXRpb24gKFJEL0xVKVxuICAgIGlmICh0aGlzLm9yaWVudGF0aW9uID09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICBpZiAodGhpcy5wb3NpdGlvbi54IDw9IHRoaXMuaW5pdFBvcy54KSB7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gXCJSRFwiXG4gICAgICB9IGVsc2UgaWYgKHRoaXMucG9zaXRpb24ueCA+PSB0aGlzLmluaXRQb3MueCArIHRoaXMudHJhdmVsTGVuKSB7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gXCJMVVwiXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IHRoaXMuZGlyZWN0aW9uO1xuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKHRoaXMub3JpZW50YXRpb24gPT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICBpZiAodGhpcy5wb3NpdGlvbi55IDw9IHRoaXMuaW5pdFBvcy55KSB7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gXCJSRFwiXG4gICAgICB9IGVsc2UgaWYgKHRoaXMucG9zaXRpb24ueSA+PSB0aGlzLmluaXRQb3MueSArIHRoaXMudHJhdmVsTGVuKSB7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gXCJMVVwiXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IHRoaXMuZGlyZWN0aW9uO1xuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZGlyZWN0aW9uID09PSBcInN0YXRpY1wiKSB7XG4gICAgICBcbiAgICB9O1xuICAgIFxuICAgIC8vIG1vdmUgb2JzdGFjbGUgYWNjb3JkaW5nIHRvIGl0cyBkaXJlY3Rpb25cbiAgICBpZiAodGhpcy5vcmllbnRhdGlvbiA9PSBcImhvcml6b250YWxcIikge1xuICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09IFwiUkRcIikge1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnggKz0gdGhpcy5zcGVlZFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54IC09IHRoaXMuc3BlZWRcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmICh0aGlzLm9yaWVudGF0aW9uID09IFwidmVydGljYWxcIikge1xuICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09IFwiUkRcIikge1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgKz0gdGhpcy5zcGVlZFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55IC09IHRoaXMuc3BlZWRcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgT2JzdGFjbGU7XG5cbiIsImNsYXNzIFBsYXRmb3JtIHtcbiAgY29uc3RydWN0b3IocG9zWCwgcG9zWSwgd2lkdGgsIGkpIHtcbiAgICB0aGlzLmhlaWdodCA9IDE1O1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgeDogcG9zWCxcbiAgICAgIHk6IHBvc1lcbiAgICB9XG4gICAgdGhpcy5pbmRleCA9IGk7XG4gIH1cblxuICBkcmF3UGxhdGZvcm0oY3R4KSB7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwia2hha2lcIixcbiAgICBjdHguZmlsbFJlY3QodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICBcbiAgICAvLyBwcmludGluZyBwbGF0Zm9ybSBpbmRleC9rZXkgJiBjb29yZGluYXRlc1xuICAgIC8vIGN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7IFxuICAgIC8vIGN0eC5mb250ID1cIjE0cHggc2VyaWZcIjtcbiAgICAvLyBjdHguZmlsbFRleHQoYCR7dGhpcy5pbmRleH06ICR7dGhpcy5wb3NpdGlvbi54fSwgJHt0aGlzLnBvc2l0aW9uLnl9YCwgXG4gICAgLy8gICB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSszMyk7XG5cbiAgICAvLyB0ZXN0aW5nIHBsYXRmb3JtIGJvdW5kYXJpZXNcbiAgICAvLyBjdHguYmVnaW5QYXRoKCk7XG4gICAgLy8gY3R4LnN0cm9rZVN0eWxlID0gXCJibHVlXCI7XG4gICAgLy8gY3R4Lm1vdmVUbyh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSk7XG4gICAgLy8gY3R4LmxpbmVUbyh0aGlzLnBvc2l0aW9uLngsIDApO1xuICAgIC8vIGN0eC5tb3ZlVG8odGhpcy5wb3NpdGlvbi54K3RoaXMud2lkdGgsIHRoaXMucG9zaXRpb24ueSk7XG4gICAgLy8gY3R4LmxpbmVUbyh0aGlzLnBvc2l0aW9uLngrdGhpcy53aWR0aCwgMCk7XG4gICAgLy8gY3R4LnN0cm9rZSgpO1xuICB9IFxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF0Zm9ybTtcblxuIiwiZXhwb3J0IGNvbnN0IGZpbm5SaWdodCA9IG5ldyBJbWFnZSgpO1xuZmlublJpZ2h0LnNyYyA9ICcuL2Rpc3QvaW1hZ2VzL0Zpbm5TcHJpdGUtcmlnaHQucG5nJztcbmV4cG9ydCBjb25zdCBmaW5uTGVmdCA9IG5ldyBJbWFnZSgpO1xuZmlubkxlZnQuc3JjID0gJy4vZGlzdC9pbWFnZXMvRmlublNwcml0ZS1sZWZ0LnBuZyc7XG5leHBvcnQgY29uc3QgcGVhY2VCZyA9IG5ldyBJbWFnZSgpO1xucGVhY2VCZy5zcmMgPSAnLi9kaXN0L2ltYWdlcy9wZWFjZS1iZy5wbmcnO1xuZXhwb3J0IGNvbnN0IGJlZW1vID0gbmV3IEltYWdlKCk7XG5iZWVtby5zcmMgPSAnLi9kaXN0L2ltYWdlcy9iZWVtby5wbmcnO1xuZXhwb3J0IGNvbnN0IGZpbm5CZWVtbyA9IG5ldyBJbWFnZSgpO1xuZmlubkJlZW1vLnNyYyA9ICcuL2Rpc3QvaW1hZ2VzL2Zpbm4tYW5kLWJlZW1vLmpwZyc7IiwiaW1wb3J0IHsgZmlublJpZ2h0LCBiZWVtbyB9IGZyb20gJy4vdXRpbCc7XG5jb25zdCB3ZWxjb21lTW9kYWwgPSAoY3R4LCBnYW1lU3RhcnQsIEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hUKSA9PiB7XG5cbiAgaWYgKCFnYW1lU3RhcnQpIHtcbiAgICBjdHguZmlsbFN0eWxlID0gXCJsaWdodHNsYXRlZ3JleVwiO1xuICAgIGN0eC5maWxsUmVjdCgwLCAwLCBHQU1FX1dJRFRILCBHQU1FX0hFSUdIVCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwic25vd1wiO1xuICAgIGN0eC5mb250ID0gJ2JvbGQgNTBweCBhcmlhbCc7XG4gICAgY3R4LmZpbGxUZXh0KFwiV2VsY29tZSB0byBKdW1wIFF1ZXN0IVwiLCAyMjUsIDYwKTtcbiAgICBjdHguZm9udCA9ICdib2xkIDMwcHggYXJpYWwnO1xuICAgIGN0eC5maWxsVGV4dChcIkJlZW1vICAgICAgICAgIGlzIGxvc3QgYW5kIG5lZWRzIHlvdXIgaGVscCFcIiwgNzUsIDE1MCk7XG4gICAgY3R4LmZpbGxUZXh0KFwiSGVscCBGaW5uICAgICAgICBuYXZpZ2F0ZSBhY3Jvc3MgdGhlIHBsYXRmb3JtcyB0byBmaW5kIGhpbS5cIiwgNzUsIDIyNSk7XG4gICAgY3R4LmZpbGxUZXh0KFwiQmUgc3VyZSB0byBkb2RnZSB0aGUgZmx5aW5nIG9ic3RhY2xlcyB1c2luZyBjcm91Y2ggb3IganVtcC5cIiwgNzUsIDMwMCk7XG4gICAgY3R4LmZpbGxUZXh0KFwiSWYgeW91IGdldCBoaXQsIHlvdSBtYXkgaGF2ZSB0byBzdGFydCBmcm9tIGFuIGVhcmxpZXIgcG9zaXRpb24uXCIsIDc1LCAzNzUpO1xuXG4gICAgY3R4LmZvbnQgPSAnYm9sZCAyMHB4IGFyaWFsJztcbiAgICBjdHguZmlsbFRleHQoXCItIEhvcml6b250YWxseSBtb3ZpbmcgYmFsbHMgd2lsbCBwdXNoIHlvdSBpbiB0aGVpciBkaXJlY3Rpb25cIiwgMTAwLCA0MTApO1xuICAgIGN0eC5maWxsVGV4dChcIi0gVmVydGljYWxseSBtb3ZpbmcgYmFsbHMgd2lsbCBrbm9jayB5b3Ugb2ZmIG9mIHRoZSBwbGF0Zm9ybVwiLCAxMDAsIDQ0NSk7XG4gICAgXG4gICAgY3R4LmZvbnQgPSAnYm9sZCAzMHB4IGFyaWFsJztcbiAgICBjdHguZmlsbFRleHQoXCJHb29kIGx1Y2shISFcIiwgNzUsIDU1MCk7XG4gICAgXG4gICAgY3R4LmZvbnQgPSAnYm9sZCAyMHB4IGFyaWFsJztcbiAgICBjdHguZmlsbFRleHQoXCIoSWYgeW91ciBzY3JlZW4gaGVpZ2h0IGlzIHNtYWxsZXIgdGhhbiA4NjUgcGl4ZWxzLCBwbGVhc2UgY29uc2lkZXIgem9vbWluZyBvdXQgdG8gODAtOTAlKVwiLCA3NSwgNjAwKTtcbiAgICBcbiAgICBjdHguZm9udCA9ICdib2xkIDQwcHggYXJpYWwnO1xuICAgIGN0eC5maWxsVGV4dChcIlByZXNzIEVOVEVSIHRvIGJlZ2luIVwiLCAyNzUsIDcwMCk7XG4gICAgY3R4LmZpbGwoKTtcblxuICAgIGN0eC5mb250ID0gJ2JvbGQgMjBweCBhcmlhbCc7XG4gICAgY3R4LmZpbGxUZXh0KFwiR2FtZSBkZXNpZ24gYnkgQ2hyaXMgSm9vXCIsIDczMCwgNzgwKTtcbiAgICBjdHguZmlsbFRleHQoXCJNdXNpYyBieSBJTlNFQ1VSRSBNVVNJQ1wiLCAyMCwgNzgwKTtcblxuICAgIGN0eC5maWxsKCk7XG4gICAgXG4gICAgYmVlbW8ub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICBjdHguZHJhd0ltYWdlKGJlZW1vLCAyMDAsIDEyNSwgMzMsIDQwKTtcbiAgICB9XG4gICAgZmlublJpZ2h0Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgY3R4LmRyYXdJbWFnZShmaW5uUmlnaHQsIDAsIDAsIDMyLCAyMCwgMjE1LCAxOTUsIDY0LCA0MCk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3ZWxjb21lTW9kYWw7IiwiaW1wb3J0IHsgZmlubkJlZW1vIH0gZnJvbSAnLi91dGlsJztcblxuY29uc3Qgd2lubmVyTW9kYWwgPSAoY3R4LCBHQU1FX1dJRFRILCBHQU1FX0hFSUdIVCkgPT4ge1xuICBjdHguZmlsbFN0eWxlID0gXCJsaWdodHNsYXRlZ3JleVwiO1xuICBjdHguZmlsbFJlY3QoMCwgMCwgR0FNRV9XSURUSCwgR0FNRV9IRUlHSFQpO1xuICBjdHguZmlsbFN0eWxlID0gXCJzbm93XCI7XG4gIGN0eC5mb250ID0gJ2JvbGQgNTBweCBhcmlhbCc7XG4gIGN0eC5maWxsVGV4dChcIllvdSBzYXZlZCBCZWVtbyFcIiwgMjcwLCAxMjApO1xuICAvLyBmaW5uQmVlbW8ub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgY3R4LmRyYXdJbWFnZShmaW5uQmVlbW8sIDE0MCwgMjI1LCA3MjgsIDQwOSk7XG4gIC8vIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpbm5lck1vZGFsOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbi8vIGltcG9ydCBKdW1wUXVlc3QgZnJvbSBcIi4vc2NyaXB0cy9nYW1lXCI7XG5pbXBvcnQgd2VsY29tZU1vZGFsIGZyb20gJy4vc2NyaXB0cy93ZWxjb21lJztcbmltcG9ydCBDaGFyYWN0ZXIgZnJvbSBcIi4vc2NyaXB0cy9jaGFyYWN0ZXJcIjtcbmltcG9ydCBDb250cm9sbGVyIGZyb20gXCIuL3NjcmlwdHMvY29udHJvbGxlclwiO1xuaW1wb3J0IEJhY2tncm91bmQgZnJvbSBcIi4vc2NyaXB0cy9iYWNrZ3JvdW5kXCI7XG5pbXBvcnQgUGxhdGZvcm0gZnJvbSBcIi4vc2NyaXB0cy9wbGF0Zm9ybVwiO1xuaW1wb3J0IE9ic3RhY2xlIGZyb20gXCIuL3NjcmlwdHMvb2JzdGFjbGVcIjtcbmltcG9ydCB7IGJlZW1vIH0gZnJvbSAnLi9zY3JpcHRzL3V0aWwnO1xuaW1wb3J0IHdpbm5lck1vZGFsIGZyb20gJy4vc2NyaXB0cy93aW5uZXInO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImp1bXAtcXVlc3RcIik7XG4gIGxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gIC8vIGdhbWUgdmFyaWFibGVzXG4gIGxldCBnYW1lU3RhcnQgPSBmYWxzZTtcbiAgY29uc3QgR0FNRV9XSURUSCA9IGNhbnZhcy53aWR0aDsgLy8gMTAwMFxuICBjb25zdCBHQU1FX0hFSUdIVCA9IGNhbnZhcy5oZWlnaHQ7IC8vIDgwMFxuICBsZXQgY2hhciA9IG5ldyBDaGFyYWN0ZXIoR0FNRV9XSURUSCwgR0FNRV9IRUlHSFQpO1xuICBuZXcgQ29udHJvbGxlcihjaGFyKVxuICBsZXQgYmcgPSBuZXcgQmFja2dyb3VuZChHQU1FX1dJRFRILCBHQU1FX0hFSUdIVCk7XG4gIGxldCBmcmFtZXMgPSAwO1xuICBsZXQgb2JzdGFjbGVzID0ge307XG5cbiAgLy8gY29udHJvbHMvaG93LXRvLXBsYXkgdmFyaWFibGVzXG4gIGxldCBjb250cm9sc1Nob3duID0gZmFsc2U7XG4gIGxldCBjb250cm9sc0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udHJvbHMtYnRuXCIpO1xuICBsZXQgY29udHJvbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udHJvbHMnKTtcblxuICAvLyBhdWRpby9iZ20gdmFyaWFibGVzXG4gIGxldCBiZ20gPSBuZXcgQXVkaW8oXCIuL3NyYy9hdWRpby9nb29kLW1vcm5pbmctaW5zZWN1cmUubXAzXCIpO1xuICBsZXQgbXVzaWNQbGF5aW5nID0gZmFsc2U7XG4gIGxldCBtdXNpY0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXVzaWMtYnRuXCIpO1xuICBsZXQgcGxheUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheS1idG5cIik7XG4gIGxldCBwYXVzZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGF1c2UtYnRuXCIpO1xuXG4gIGNvbnRyb2xzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKGNvbnRyb2xzU2hvd24pIHtcbiAgICAgIGNvbnRyb2xzU2hvd24gPSBmYWxzZTtcbiAgICAgIGNvbnRyb2xzLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICBjb250cm9sc0J0bi5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udHJvbHNTaG93biA9IHRydWU7XG4gICAgICBjb250cm9scy5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgICAgY29udHJvbHNCdG4uY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIik7XG4gICAgfTtcbiAgfSk7XG5cbiAgbXVzaWNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAobXVzaWNQbGF5aW5nKSB7XG4gICAgICBtdXNpY1BsYXlpbmcgPSBmYWxzZTtcbiAgICAgIGJnbS5wYXVzZSgpO1xuICAgICAgcGF1c2VCdG4uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgIHBsYXlCdG4uY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbXVzaWNQbGF5aW5nID0gdHJ1ZTtcbiAgICAgIGJnbS5sb29wID0gdHJ1ZTtcbiAgICAgIGJnbS5wbGF5KCk7XG4gICAgICBwYXVzZUJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgICAgcGxheUJ0bi5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIH1cbiAgfSlcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBldmVudCA9PiB7XG4gICAgc3dpdGNoKGV2ZW50LmNvZGUpIHtcbiAgICAgIGNhc2UgJ0VudGVyJzpcbiAgICAgICAgaWYgKCFnYW1lU3RhcnQpIHtcbiAgICAgICAgICBpZiAoIW11c2ljUGxheWluZykge1xuICAgICAgICAgICAgbXVzaWNQbGF5aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIGJnbS5sb29wID0gdHJ1ZTtcbiAgICAgICAgICAgIHBhdXNlQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgICAgICAgICBwbGF5QnRuLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICAgICAgICBiZ20ucGxheSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBnYW1lU3RhcnQgPSB0cnVlO1xuICAgICAgICAgIHN0YXJ0R2FtZSgpO1xuICAgICAgICAgIC8vIHN0YXJ0QW5pbWF0aW5nKDI0MClcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm47XG4gICAgfVxuICB9KVxuICAgIFxuICAvLyBsZXQgZnBzLCBpbnRlcnZhbCwgc3RhcnRUaW1lLCBub3csIHRoZW4sIGVsYXBzZWQ7XG4gIC8vIGZ1bmN0aW9uIHN0YXJ0QW5pbWF0aW5nKGZwcykge1xuICAvLyAgIGludGVydmFsID0gMTAwMCAvIGZwcztcbiAgLy8gICB0aGVuID0gRGF0ZS5ub3coKTtcbiAgLy8gICBzdGFydFRpbWUgPSB0aGVuO1xuICAvLyAgIGFuaW1hdGUoKTtcbiAgLy8gfVxuXG4gIC8vIGZ1bmN0aW9uIGFuaW1hdGUoKSB7XG4gIC8vICAgbm93ID0gRGF0ZS5ub3coKTtcbiAgLy8gICBlbGFwc2VkID0gbm93IC0gdGhlbjtcbiAgLy8gICBpZiAoZWxhcHNlZCA+IGludGVydmFsKSB7XG4gIC8vICAgICB0aGVuID0gbm93IC0gKGVsYXBzZWQgJSBpbnRlcnZhbCk7XG4gIC8vICAgICBnYW1lTG9vcCgpO1xuICAvLyAgIH07XG5cbiAgLy8gICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gIC8vIH1cblxuICBmdW5jdGlvbiBzdGFydEdhbWUoKSB7XG4gICAgZ2FtZUxvb3AoKTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2FtZUxvb3AoKSB7XG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBHQU1FX1dJRFRILCBHQU1FX0hFSUdIVCk7XG4gICAgYmcuZHJhd0JhY2tncm91bmQoY3R4KTtcbiAgICBkcmF3UGxhdGZvcm1zKCk7XG4gICAgdXBkYXRlT2JzdGFjbGVzKCk7XG4gICAgZHJhd09ic3RhY2xlcygpO1xuICAgIC8vIHdyaXRlIGFsZ29yaXRobSB0byBvbmx5IHBhc3MgaW4gcGxhdGZvcm1zICYgb2JzdGFjbGVzIGluIGN1cnJlbnQgdnBcbiAgICBjaGFyLnVwZGF0ZShPYmplY3QudmFsdWVzKHBsYXRmb3JtcyksIE9iamVjdC52YWx1ZXMob2JzdGFjbGVzKSk7XG4gICAgY2hhci5kcmF3Q2hhcihjdHgsIGZyYW1lcyk7XG4gICAgY3R4LmRyYXdJbWFnZShiZWVtbywgMCwgMCwgMzMsIDQwLCAwLCAxMCwgMzMsIDQwKTtcblxuICAgIGlmICgoY2hhci5wb3NpdGlvbi54IDw9IDEwICkgJiYgKGNoYXIucG9zaXRpb24ueSA8PSAxMCkpIHtcbiAgICAgIG11c2ljUGxheWluZyA9IGZhbHNlO1xuICAgICAgYmdtLnBhdXNlKCk7XG4gICAgICBwYXVzZUJ0bi5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgcGxheUJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgICAgd2lubmVyTW9kYWwoY3R4LCBHQU1FX1dJRFRILCBHQU1FX0hFSUdIVCk7XG4gICAgfVxuXG4gICAgaWYgKGZyYW1lcyA+PSA2MCkge1xuICAgICAgZnJhbWVzID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgZnJhbWVzKys7XG4gICAgfVxuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcbiAgICAvLyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gIH1cblxuICAvLyBwbGF0Zm9ybSA9IFtwb3NYLCBwb3NZLCB3aWR0aF1cbiAgbGV0IHBsYXRmb3JtcyA9IHtcbiAgICAwOiBbMTUwLCA3NDAsIDEwMF0sXG4gICAgMTogWzMwMCwgNzAwLCAxMDBdLFxuICAgIDI6IFs0NTAsIDY2MCwgMTAwXSxcbiAgICAzOiBbNjAwLCA2MjAsIDEwMF0sXG4gICAgNDogWzc1MCwgNTgwLCAxMDBdLFxuICAgIDU6IFs4NTAsIDU0MCwgNTBdLFxuICAgIDY6IFs4MDAsIDUwMCwgNTBdLFxuICAgIDc6IFs3NTAsIDQ2MCwgNTBdLFxuICAgIDg6IFs3MDAsIDQyMCwgNTBdLFxuICAgIDk6IFs2NTAsIDQ2MCwgNTBdLFxuICAgIDEwOiBbNjAwLCA1MTAsIDUwXSxcbiAgICAxMTogWzU1MCwgNDYwLCA1MF0sXG4gICAgMTI6IFs1MDAsIDQyMCwgNTBdLFxuICAgIDEzOiBbNDUwLCA0NjAsIDUwXSxcbiAgICAxNDogWzQwMCwgNTEwLCA1MF0sXG4gICAgMTU6IFszNTAsIDQ2MCwgNTBdLFxuICAgIDE2OiBbMzAwLCA0MjAsIDUwXSxcbiAgICAxNzogWzI1MCwgNDYwLCA1MF0sXG4gICAgMTg6IFsyMDAsIDUxMCwgNTBdLFxuICAgIDE5OiBbMTUwLCA0NjAsIDUwXSxcbiAgICAyMDogWzEwMCwgNDIwLCA1MF0sXG4gICAgMjE6IFs1MCwgMzgwLCA1MF0sXG4gICAgMjI6IFsxMDAsIDM0MCwgNTBdLFxuICAgIDIzOiBbMjAwLCAzMDAsIDEwMF0sXG4gICAgMjQ6IFszNTAsIDMwMCwgMTAwXSxcbiAgICAyNTogWzUwMCwgMzAwLCAxMDBdLFxuICAgIDI2OiBbNjUwLCAzMDAsIDEwMF0sXG4gICAgMjc6IFs4MDAsIDI1MCwgNTBdLFxuICAgIDI4OiBbODUwLCAyMTAsIDUwXSxcbiAgICAyOTogWzgwMCwgMTcwLCA1MF0sXG4gICAgMzA6IFs3NTAsIDEzMCwgNTBdLFxuICAgIDMxOiBbNzAwLCAxNzAsIDUwXSxcbiAgICAzMjogWzY1MCwgMjEwLCA1MF0sXG4gICAgMzM6IFs2MDAsIDE3MCwgNTBdLFxuICAgIDM0OiBbNTUwLCAxMzAsIDUwXSxcbiAgICAzNTogWzUwMCwgOTAsIDUwXSxcbiAgICAzNjogWzQ1MCwgMTMwLCA1MF0sXG4gICAgMzc6IFsyMDAsIDEzMCwgMjAwXSxcbiAgICAzODogWzEyNSwgOTAsIDUwXSxcbiAgICAzOTogWzAsIDUwLCAxMDBdLFxuICAgIDQwOiBbOTAwLCA1MCwgMTAwXSxcbiAgfTtcbiAgXG4gIGZ1bmN0aW9uIGRyYXdQbGF0Zm9ybXMoKSB7XG4gICAgT2JqZWN0LnZhbHVlcyhwbGF0Zm9ybXMpLmZvckVhY2goKHBsYXRmb3JtLCBpKSA9PiB7XG4gICAgICBsZXQgcCA9IG5ldyBQbGF0Zm9ybSguLi5wbGF0Zm9ybSwgaSk7XG4gICAgICBwLmRyYXdQbGF0Zm9ybShjdHgpO1xuICAgIH0pXG4gIH07XG5cbiAgLy8gb2JzdGFjbGUgPSBbcG9zWCwgcG9zWSwgcmFkaXVzLCBvcmllbnRhdGlvbiwgdHJhdmVsTGVuZ3RoLCBjb2xvciwgc3BlZWRdXG4gIC8vIG9ic3RhY2xlIHNwZWVkcyBmb3IgMjQwIEZQUy5cbiAgbGV0IG5ld09ic3RhY2xlcyA9IHtcbiAgICAxOiBbNzUwLCA1NzAsIDUsIFwiaG9yaXpvbnRhbFwiLCAxMDAsIFwidmlvbGV0XCIsIDAuMV0sXG4gICAgMjogWzYyNSwgNDUwLCA1LCBcImhvcml6b250YWxcIiwgMjAwLCBcImZvcmVzdGdyZWVuXCIsIDAuM10sXG4gICAgMzogWzIyNSwgNDUwLCA1LCBcImhvcml6b250YWxcIiwgMjAwLCBcImZvcmVzdGdyZWVuXCIsIDAuM10sXG4gICAgNDogWzUyNSwgMzUwLCA1LCBcInZlcnRpY2FsXCIsIDE1MCwgXCJza3libHVlXCIsIDAuM10sXG4gICAgNTogWzc1LCAzMDAsIDUsIFwidmVydGljYWxcIiwgMTUwLCBcInNreWJsdWVcIiwgMC4zXSxcbiAgICA2OiBbMzI1LCAyNjAsIDEwLCBcInZlcnRpY2FsXCIsIDEwMCwgXCJjcmltc29uXCIsIDAuM10sXG4gICAgNzogWzYyNSwgMjYwLCAxMCwgXCJ2ZXJ0aWNhbFwiLCAxMDAsIFwiY3JpbXNvblwiLCAwLjNdLFxuICAgIDg6IFszNTAsIDI2MCwgMTAsIFwiaG9yaXpvbnRhbFwiLCAyNTAsIFwiaW5kaWdvXCIsIDAuMzc1XSxcbiAgICA5OiBbNjUwLCAxOTUsIDUsIFwiaG9yaXpvbnRhbFwiLCAyNTAsIFwib3JhbmdlXCIsIDAuNV0sXG4gICAgMTA6IFs2MDAsIDE1MCwgMTAsIFwiaG9yaXpvbnRhbFwiLCAyNTAsIFwiaW5kaWdvXCIsIDAuMzc1XSxcbiAgICAxMTogWzUyNSwgMjAsIDUsIFwidmVydGljYWxcIiwgMTQwLCBcIm1hcm9vblwiLCAwLjNdLFxuICAgIDEyOiBbMzUwLCA2MCwgNSwgXCJ2ZXJ0aWNhbFwiLCAxNDAsIFwiTWVkaXVtU2xhdGVCbHVlXCIsIDAuNF0sXG4gICAgMTM6IFsyNTAsIDYwLCA1LCBcInZlcnRpY2FsXCIsIDE0MCwgXCJNZWRpdW1TbGF0ZUJsdWVcIiwgMC40XSxcbiAgfVxuICAvLyBvYnN0YWNsZSBzcGVlZHMgZm9yIDYwIEZQUy5cbiAgLy8gbGV0IG5ld09ic3RhY2xlcyA9IHtcbiAgLy8gICAxOiBbNzUwLCA1NzAsIDUsIFwiaG9yaXpvbnRhbFwiLCAxMDAsIFwidmlvbGV0XCIsIDAuNF0sXG4gIC8vICAgMjogWzYyNSwgNDUwLCA1LCBcImhvcml6b250YWxcIiwgMjAwLCBcImZvcmVzdGdyZWVuXCIsIDEuMl0sXG4gIC8vICAgMzogWzIyNSwgNDUwLCA1LCBcImhvcml6b250YWxcIiwgMjAwLCBcImZvcmVzdGdyZWVuXCIsIDEuMl0sXG4gIC8vICAgNDogWzUyNSwgMzUwLCA1LCBcInZlcnRpY2FsXCIsIDE1MCwgXCJza3libHVlXCIsIDEuMl0sXG4gIC8vICAgNTogWzc1LCAzMDAsIDUsIFwidmVydGljYWxcIiwgMTUwLCBcInNreWJsdWVcIiwgMS4yXSxcbiAgLy8gICA2OiBbMzI1LCAyNjAsIDEwLCBcInZlcnRpY2FsXCIsIDEwMCwgXCJjcmltc29uXCIsIDEuMl0sXG4gIC8vICAgNzogWzYyNSwgMjYwLCAxMCwgXCJ2ZXJ0aWNhbFwiLCAxMDAsIFwiY3JpbXNvblwiLCAxLjJdLFxuICAvLyAgIDg6IFszNTAsIDI2MCwgMTAsIFwiaG9yaXpvbnRhbFwiLCAyNTAsIFwiaW5kaWdvXCIsIDEuNV0sXG4gIC8vICAgOTogWzY1MCwgMTk1LCA1LCBcImhvcml6b250YWxcIiwgMjUwLCBcIm9yYW5nZVwiLCAyXSxcbiAgLy8gICAxMDogWzYwMCwgMTUwLCAxMCwgXCJob3Jpem9udGFsXCIsIDI1MCwgXCJpbmRpZ29cIiwgMS41XSxcbiAgLy8gICAxMTogWzUyNSwgMjAsIDUsIFwidmVydGljYWxcIiwgMTQwLCBcIm1hcm9vblwiLCAxLjJdLFxuICAvLyAgIDEyOiBbMzUwLCA2MCwgNSwgXCJ2ZXJ0aWNhbFwiLCAxNDAsIFwiTWVkaXVtU2xhdGVCbHVlXCIsIDEuNl0sXG4gIC8vICAgMTM6IFsyNTAsIDYwLCA1LCBcInZlcnRpY2FsXCIsIDE0MCwgXCJNZWRpdW1TbGF0ZUJsdWVcIiwgMS42XSxcbiAgLy8gfVxuXG4gIGNyZWF0ZU9ic3RhY2xlcygpO1xuICBcbiAgZnVuY3Rpb24gY3JlYXRlT2JzdGFjbGVzKCkge1xuICAgIE9iamVjdC52YWx1ZXMobmV3T2JzdGFjbGVzKS5mb3JFYWNoKChvYnN0YWNsZSwgaSkgPT4ge1xuICAgICAgb2JzdGFjbGVzW2ldID0gbmV3IE9ic3RhY2xlKC4uLm9ic3RhY2xlKTs7XG4gICAgfSlcbiAgfTtcblxuICBmdW5jdGlvbiB1cGRhdGVPYnN0YWNsZXMoKSB7XG4gICAgT2JqZWN0LnZhbHVlcyhvYnN0YWNsZXMpLmZvckVhY2gob2JzdGFjbGUgPT4ge1xuICAgICAgb2JzdGFjbGUudXBkYXRlKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gZHJhd09ic3RhY2xlcygpIHtcbiAgICBPYmplY3QudmFsdWVzKG9ic3RhY2xlcykuZm9yRWFjaChvYnN0YWNsZSA9PiB7XG4gICAgICBvYnN0YWNsZS5kcmF3T2JzdGFjbGUoY3R4KTtcbiAgICB9KTtcbiAgfTtcblxuICB3ZWxjb21lTW9kYWwoY3R4LCBnYW1lU3RhcnQsIEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hUKTtcblxufSkiXSwic291cmNlUm9vdCI6IiJ9