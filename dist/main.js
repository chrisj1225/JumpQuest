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
    ctx.fillText("Beemo          is lost!", 75, 150);
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
        if (!musicPlaying) {
          musicPlaying = true;
          bgm.loop = true;
          pauseBtn.classList.remove("hidden");
          playBtn.classList.add("hidden");
          bgm.play();
        }

        gameStart = true;
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
      var p = _construct(_scripts_platform__WEBPACK_IMPORTED_MODULE_5__.default, _toConsumableArray(platform).concat([i]));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qdW1wcXVlc3QvLi9zcmMvc2NyaXB0cy9iYWNrZ3JvdW5kLmpzIiwid2VicGFjazovL2p1bXBxdWVzdC8uL3NyYy9zY3JpcHRzL2NoYXJhY3Rlci5qcyIsIndlYnBhY2s6Ly9qdW1wcXVlc3QvLi9zcmMvc2NyaXB0cy9jb250cm9sbGVyLmpzIiwid2VicGFjazovL2p1bXBxdWVzdC8uL3NyYy9zY3JpcHRzL29ic3RhY2xlLmpzIiwid2VicGFjazovL2p1bXBxdWVzdC8uL3NyYy9zY3JpcHRzL3BsYXRmb3JtLmpzIiwid2VicGFjazovL2p1bXBxdWVzdC8uL3NyYy9zY3JpcHRzL3V0aWwuanMiLCJ3ZWJwYWNrOi8vanVtcHF1ZXN0Ly4vc3JjL3NjcmlwdHMvd2VsY29tZS5qcyIsIndlYnBhY2s6Ly9qdW1wcXVlc3QvLi9zcmMvc2NyaXB0cy93aW5uZXIuanMiLCJ3ZWJwYWNrOi8vanVtcHF1ZXN0Ly4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIiwid2VicGFjazovL2p1bXBxdWVzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qdW1wcXVlc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2p1bXBxdWVzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2p1bXBxdWVzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2p1bXBxdWVzdC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJCYWNrZ3JvdW5kIiwiYmdXaWR0aCIsImJnSGVpZ2h0Iiwid2lkdGgiLCJoZWlnaHQiLCJwb3NZIiwiY3R4IiwiZHJhd0ltYWdlIiwicGVhY2VCZyIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiZmlsbCIsIkNoYXJhY3RlciIsImdhbWVXaWR0aCIsImdhbWVIZWlnaHQiLCJkaXJlY3Rpb24iLCJtb3ZlU3BlZWQiLCJqdW1wSGVpZ2h0IiwiY3JvdWNoaW5nIiwianVtcGluZyIsImZhbGxpbmciLCJpc0NvbGxpZGluZyIsInBvc2l0aW9uIiwieCIsInkiLCJ2ZWxvY2l0eSIsImNvbnN0YW50cyIsImdyYXZpdHkiLCJmcmljdGlvbiIsImtleXMiLCJmcmFtZXMiLCJmaW5uTGVmdCIsIm1vdmluZyIsImZpbm5SaWdodCIsInBsYXRmb3JtcyIsIm9ic3RhY2xlcyIsImkiLCJsZW5ndGgiLCJwbGF0Zm9ybSIsIm9uUGxhdGZvcm0iLCJvYnN0YWNsZSIsImNvbGxpc2lvbkRldGVjdGlvbiIsIm9yaWVudGF0aW9uIiwiY2hhclBvcyIsIm8iLCJyIiwicmFkaXVzIiwiYyIsInciLCJoIiwiZGlzdFgiLCJNYXRoIiwiYWJzIiwiZGlzdFkiLCJkeCIsImR5IiwicG93IiwiQ29udHJvbGxlciIsImNoYXIiLCJqdW1wU0ZYIiwiQXVkaW8iLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImNvZGUiLCJ1cGRhdGVLZXlzIiwiY3JvdWNoIiwiY29sbGlkaW5nIiwicGxheSIsImp1bXAiLCJzdG9wIiwidW5jcm91Y2giLCJPYnN0YWNsZSIsInBvc1giLCJ0cmF2ZWxMZW5ndGgiLCJjb2xvciIsInNwZWVkIiwiaW5pdFBvcyIsInRyYXZlbExlbiIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImFyYyIsIlBJIiwic3Ryb2tlIiwiUGxhdGZvcm0iLCJpbmRleCIsIkltYWdlIiwic3JjIiwiYmVlbW8iLCJmaW5uQmVlbW8iLCJ3ZWxjb21lTW9kYWwiLCJnYW1lU3RhcnQiLCJHQU1FX1dJRFRIIiwiR0FNRV9IRUlHSFQiLCJmb250IiwiZmlsbFRleHQiLCJ3aW5uZXJNb2RhbCIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwiZ2V0Q29udGV4dCIsImJnIiwiY29udHJvbHNTaG93biIsImNvbnRyb2xzQnRuIiwiY29udHJvbHMiLCJiZ20iLCJtdXNpY1BsYXlpbmciLCJtdXNpY0J0biIsInBsYXlCdG4iLCJwYXVzZUJ0biIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInBhdXNlIiwibG9vcCIsInN0YXJ0R2FtZSIsImdhbWVMb29wIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2xlYXJSZWN0IiwiZHJhd0JhY2tncm91bmQiLCJkcmF3UGxhdGZvcm1zIiwidXBkYXRlT2JzdGFjbGVzIiwiZHJhd09ic3RhY2xlcyIsInVwZGF0ZSIsIk9iamVjdCIsInZhbHVlcyIsImRyYXdDaGFyIiwiZm9yRWFjaCIsInAiLCJkcmF3UGxhdGZvcm0iLCJuZXdPYnN0YWNsZXMiLCJjcmVhdGVPYnN0YWNsZXMiLCJkcmF3T2JzdGFjbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztJQUVNQSxVO0FBQ0osc0JBQVlDLE9BQVosRUFBcUJDLFFBQXJCLEVBQStCO0FBQUE7O0FBQzdCLFNBQUtDLEtBQUwsR0FBYUYsT0FBYjtBQUNBLFNBQUtHLE1BQUwsR0FBY0YsUUFBZDtBQUNBLFNBQUtHLElBQUwsR0FBWSxJQUFaO0FBQ0Q7Ozs7V0FFRCx3QkFBZUMsR0FBZixFQUFvQjtBQUNsQjtBQUNBO0FBQ0E7QUFFQUEsU0FBRyxDQUFDQyxTQUFKLENBQWNDLDBDQUFkLEVBQXVCLENBQXZCLEVBQTBCLENBQTFCLEVBQTZCLElBQTdCLEVBQW1DLEdBQW5DLEVBQXdDLENBQXhDLEVBQTJDLENBQTNDLEVBQThDLElBQTlDLEVBQW9ELEdBQXBEO0FBQ0FGLFNBQUcsQ0FBQ0csU0FBSixHQUFnQixTQUFoQjtBQUNBSCxTQUFHLENBQUNJLFFBQUosQ0FBYSxDQUFiLEVBQWdCLEtBQUtOLE1BQUwsR0FBYyxFQUE5QixFQUFrQyxLQUFLRCxLQUF2QyxFQUE4QyxLQUFLQyxNQUFuRDtBQUNBRSxTQUFHLENBQUNLLElBQUo7QUFDRDs7Ozs7O0FBR0gsK0RBQWVYLFVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJBOztJQUVNWSxTO0FBQ0oscUJBQVlDLFNBQVosRUFBdUJDLFVBQXZCLEVBQW1DO0FB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QS9CO0FBQXlDO0FBQzFDLEtBRkQ7QUFHRDs7QUFBQTs7QUFFRCxXQUFTa0YsZUFBVCxHQUEyQjtBQUN6QkcsVUFBTSxDQUFDQyxNQUFQLENBQWMzRixTQUFkLEVBQXlCNkYsT0FBekIsQ0FBaUMsVUFBQXhGLFFBQVEsRUFBSTtBQUMzQ0EsY0FBUSxDQUFDb0YsTUFBVDtBQUNELEtBRkQ7QUFHRDs7QUFBQTs7QUFFRCxXQUFTRCxhQUFULEdBQXlCO0FBQ3ZCRSxVQUFNLENBQUNDLE1BQVAsQ0FBYzNGLFNBQWQsRUFBeUI2RixPQUF6QixDQUFpQyxVQUFBeEYsUUFBUSxFQUFJO0FBQzNDQSxjQUFRLENBQUM2RixZQUFULENBQXNCL0gsR0FBdEI7QUFDRCxLQUZEO0FBR0Q7O0FBQUE7QUFFRG9GLDJEQUFZLENBQUNwRixHQUFELEVBQU1xRixTQUFOLEVBQWlCQyxVQUFqQixFQUE2QkMsV0FBN0IsQ0FBWjtBQUVELENBck1ELEUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHBlYWNlQmcgfSBmcm9tICcuL3V0aWwnO1xuXG5jbGFzcyBCYWNrZ3JvdW5kIHtcbiAgY29uc3RydWN0b3IoYmdXaWR0aCwgYmdIZWlnaHQpIHtcbiAgICB0aGlzLndpZHRoID0gYmdXaWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IGJnSGVpZ2h0O1xuICAgIHRoaXMucG9zWSA9IDMyMDA7XG4gIH1cblxuICBkcmF3QmFja2dyb3VuZChjdHgpIHtcbiAgICAvLyBjdHguZmlsbFN0eWxlID0gXCJNaXN0eVJvc2VcIjtcbiAgICAvLyBjdHguZmlsbFJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQgLSAyMCk7XG4gICAgLy8gY3R4LmZpbGwoKTtcblxuICAgIGN0eC5kcmF3SW1hZ2UocGVhY2VCZywgMCwgMCwgMTAwMCwgODAwLCAwLCAwLCAxMDAwLCA4MDApO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcIiMwMDMzMDBcIjtcbiAgICBjdHguZmlsbFJlY3QoMCwgdGhpcy5oZWlnaHQgLSAyMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIGN0eC5maWxsKCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFja2dyb3VuZDsiLCJpbXBvcnQgeyBmaW5uUmlnaHQsIGZpbm5MZWZ0IH0gZnJvbSAnLi91dGlsJztcblxuY2xhc3MgQ2hhcmFjdGVyIHtcbiAgY29uc3RydWN0b3IoZ2FtZVdpZHRoLCBnYW1lSGVpZ2h0KSB7XG4gICAgdGhpcy5nYW1lV2lkdGggPSBnYW1lV2lkdGg7XG4gICAgdGhpcy5nYW1lSGVpZ2h0ID0gZ2FtZUhlaWdodDtcbiAgICB0aGlzLndpZHRoID0gNjQ7XG4gICAgdGhpcy5oZWlnaHQgPSA0MDtcbiAgICB0aGlzLmRpcmVjdGlvbiA9IFwicmlnaHRcIjtcbiAgICB0aGlzLm1vdmVTcGVlZCA9IC43NTtcbiAgICB0aGlzLmp1bXBIZWlnaHQgPSAtMTA7XG4gICAgdGhpcy5jcm91Y2hpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmp1bXBpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmZhbGxpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmlzQ29sbGlkaW5nID0gZmFsc2U7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgIHg6IDUwLFxuICAgICAgeTogdGhpcy5nYW1lSGVpZ2h0IC0gdGhpcy5oZWlnaHQgLSAyMCxcbiAgICB9O1xuICAgIHRoaXMudmVsb2NpdHkgPSB7XG4gICAgICB4OiAwLFxuICAgICAgeTogMCxcbiAgICB9O1xuICAgIHRoaXMuY29uc3RhbnRzID0ge1xuICAgICAgZ3Jhdml0eTogMC4xNSxcbiAgICAgIGZyaWN0aW9uOiAwLjksXG4gICAgfTtcbiAgICB0aGlzLmtleXMgPSB7fTtcbiAgfVxuXG4gIGRyYXdDaGFyKGN0eCwgZnJhbWVzKSB7XG4gICAgLy8gdGVzdGluZyBjaGFyYWN0ZXIgYm91bmRhcmllc1xuICAgIC8vIGN0eC5zdHJva2VTdHlsZSA9IFwiZ3JlZW5cIjtcbiAgICAvLyBjdHgubW92ZVRvKHRoaXMucG9zaXRpb24ueCsyMCwgdGhpcy5wb3NpdGlvbi55KTtcbiAgICAvLyBjdHgubGluZVRvKHRoaXMucG9zaXRpb24ueCsyMCwgMCk7XG4gICAgLy8gY3R4Lm1vdmVUbyh0aGlzLnBvc2l0aW9uLngrdGhpcy53aWR0aC0zMCwgdGhpcy5wb3NpdGlvbi55KTtcbiAgICAvLyBjdHgubGluZVRvKHRoaXMucG9zaXRpb24ueCt0aGlzLndpZHRoLTMwLCAwKTtcbiAgICAvLyBjdHguc3Ryb2tlKCk7XG5cbiAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT0gJ2xlZnQnKSB7XG4gICAgICBpZiAodGhpcy5pc0NvbGxpZGluZykge1xuICAgICAgICBjdHguZHJhd0ltYWdlKGZpbm5MZWZ0LCAzNTIsIDAsIDMyLCAyMCwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5qdW1waW5nIHx8IHRoaXMuZmFsbGluZykgeyBcbiAgICAgICAgY3R4LmRyYXdJbWFnZShmaW5uTGVmdCwgNDQ4LCAwLCAzMiwgMjAsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMubW92aW5nKSB7XG4gICAgICAgIGlmIChmcmFtZXMgPCAyMCkge1xuICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoZmlubkxlZnQsIDU0NCwgMCwgMzIsIDIwLCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB9IGVsc2UgaWYgKGZyYW1lcyA+IDIwICYmIGZyYW1lcyA8IDQwKSB7IFxuICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoZmlubkxlZnQsIDUxMiwgMCwgMzIsIDIwLCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoZmlubkxlZnQsIDQ4MCwgMCwgMzIsIDIwLCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGZyYW1lcyA8IDQwKSB7XG4gICAgICAgICAgY3R4LmRyYXdJbWFnZShmaW5uTGVmdCwgODY0LCAwLCAzMiwgMjAsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY3R4LmRyYXdJbWFnZShmaW5uTGVmdCwgODAwLCAwLCAzMiwgMjAsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIH07XG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAodGhpcy5kaXJlY3Rpb24gPT0gJ3JpZ2h0Jykge1xuICAgICAgaWYgKHRoaXMuaXNDb2xsaWRpbmcpIHsgXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoZmlublJpZ2h0LCA1MTIsIDAsIDMyLCAyMCwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5qdW1waW5nIHx8IHRoaXMuZmFsbGluZykge1xuICAgICAgICBjdHguZHJhd0ltYWdlKGZpbm5SaWdodCwgNDgwLCAwLCAzMiwgMjAsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMubW92aW5nKSB7XG4gICAgICAgIGlmIChmcmFtZXMgPCAyMCkge1xuICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoZmlublJpZ2h0LCAzMjAsIDAsIDMyLCAyMCwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgfSBlbHNlIGlmIChmcmFtZXMgPiAyMCAmJiBmcmFtZXMgPCA0MCkgeyBcbiAgICAgICAgICBjdHguZHJhd0ltYWdlKGZpbm5SaWdodCwgMzg0LCAwLCAzMiwgMjAsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY3R4LmRyYXdJbWFnZShmaW5uUmlnaHQsIDQxNiwgMCwgMzIsIDIwLCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGZyYW1lcyA8IDQwKSB7XG4gICAgICAgICAgY3R4LmRyYXdJbWFnZShmaW5uUmlnaHQsIDAsIDAsIDMyLCAyMCwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjdHguZHJhd0ltYWdlKGZpbm5SaWdodCwgNjQsIDAsIDMyLCAyMCwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUtleXMoa2V5cykge1xuICAgIHRoaXMua2V5cyA9IGtleXM7XG4gIH1cblxuICBzdG9wKCkge1xuICAgIHRoaXMudmVsb2NpdHkueCA9IDA7XG4gICAgdGhpcy52ZWxvY2l0eS55ID0gMDtcbiAgfVxuXG4gIGp1bXAoKSB7XG4gICAgaWYgKHRoaXMuanVtcGluZykge1xuICAgICAgdGhpcy52ZWxvY2l0eS55ID0gdGhpcy5qdW1wSGVpZ2h0XG4gICAgfVxuICB9XG5cbiAgY3JvdWNoKCkge1xuICAgIHRoaXMuaGVpZ2h0ID0gMjA7XG4gIH1cblxuICB1bmNyb3VjaCgpIHtcbiAgICB0aGlzLmhlaWdodCA9IDQwO1xuICAgIHRoaXMudmVsb2NpdHkueSA9IC01O1xuICB9XG5cbiAgdXBkYXRlKHBsYXRmb3Jtcywgb2JzdGFjbGVzKSB7XG4gICAgLy8gY2hlY2sgY3VycmVudCBrZXkgcHJlc3Nlc1xuICAgIGlmICh0aGlzLmtleXNbJ0Fycm93TGVmdCddIHx8IHRoaXMua2V5c1snS2V5QSddKSB7XG4gICAgICB0aGlzLnZlbG9jaXR5LnggPSAtdGhpcy5tb3ZlU3BlZWQ7XG4gICAgfSBlbHNlIGlmICh0aGlzLmtleXNbJ0Fycm93UmlnaHQnXSB8fCB0aGlzLmtleXNbJ0tleUQnXSkge1xuICAgICAgdGhpcy52ZWxvY2l0eS54ID0gdGhpcy5tb3ZlU3BlZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubW92aW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gY2hhciBtb3ZlbWVudHNcbiAgICB0aGlzLnBvc2l0aW9uLnkgKz0gdGhpcy52ZWxvY2l0eS55O1xuICAgIHRoaXMucG9zaXRpb24ueCArPSB0aGlzLnZlbG9jaXR5Lng7XG4gICAgdGhpcy52ZWxvY2l0eS55ICs9IHRoaXMuY29uc3RhbnRzLmdyYXZpdHk7XG4gICAgdGhpcy52ZWxvY2l0eS54ICo9IHRoaXMuY29uc3RhbnRzLmZyaWN0aW9uO1xuICAgIHRoaXMudmVsb2NpdHkueSAqPSB0aGlzLmNvbnN0YW50cy5mcmljdGlvbjtcblxuICAgIC8vIGlmIGNoYXIgaXMgZ29pbmcgb2ZmIHNjcmVlbiwgc3RvcCBhdCBlZGdlIG9mIHNjcmVlblxuICAgIGlmICh0aGlzLnBvc2l0aW9uLnggPD0gMCkge1xuICAgICAgdGhpcy5wb3NpdGlvbi54ID0gMDtcbiAgICB9IGVsc2UgaWYgKHRoaXMucG9zaXRpb24ueCA+PSB0aGlzLmdhbWVXaWR0aCAtIHRoaXMud2lkdGgpIHtcbiAgICAgIHRoaXMucG9zaXRpb24ueCA9IHRoaXMuZ2FtZVdpZHRoIC0gdGhpcy53aWR0aDtcbiAgICB9XG5cbiAgICAvLyAqKldyaXRlIGNvZGUgdG8gZmlsdGVyIG91dCBwbGF0Zm9ybXMgTk9UIGluIGN1cnJlbnQgdmlldyBmcmFtZSoqXG4gICAgLy8gY2hlY2sgaWYgY2hhciBpcyBzdGFuZGluZyBvbiBhbnkgcGxhdGZvcm1cbiAgICAvLyBlbHNlIGNoZWNrIGlmIGNoYXIgaXMgZmFsbGluZyBiZWxvdyBmbG9vciBsaW5lXG4gICAgLy8gZWxzZSBjaGFyIGlzIGN1cnJlbnRseSBmYWxsaW5nXG4gICAgZm9yIChsZXQgaT0wOyBpPHBsYXRmb3Jtcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHBsYXRmb3JtID0gcGxhdGZvcm1zW2ldO1xuICAgICAgaWYgKHRoaXMub25QbGF0Zm9ybSh0aGlzLnBvc2l0aW9uLCBwbGF0Zm9ybSkpIHtcbiAgICAgICAgdGhpcy5mYWxsaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuanVtcGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgPSBwbGF0Zm9ybVsxXS10aGlzLmhlaWdodDtcbiAgICAgICAgdGhpcy52ZWxvY2l0eS55ID0gMDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMucG9zaXRpb24ueSA+PSB0aGlzLmdhbWVIZWlnaHQtdGhpcy5oZWlnaHQtMjApIHtcbiAgICAgICAgdGhpcy5qdW1waW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZmFsbGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgPSB0aGlzLmdhbWVIZWlnaHQgLSB0aGlzLmhlaWdodCAtIDIwO1xuICAgICAgICB0aGlzLnZlbG9jaXR5LnkgPSAwO1xuICAgICAgICBicmVhaztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZmFsbGluZyA9IHRydWU7XG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vICoqV3JpdGUgY29kZSB0byBmaWx0ZXIgb3V0IG9ic3RhY2xlcyBOT1QgaW4gY3VycmVudCB2aWV3IGZyYW1lKipcbiAgICBmb3IgKGxldCBpPTA7IGk8b2JzdGFjbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgb2JzdGFjbGUgPSBvYnN0YWNsZXNbaV07XG4gICAgICBpZiAodGhpcy5jb2xsaXNpb25EZXRlY3Rpb24ob2JzdGFjbGUpKSB7XG4gICAgICAgIHRoaXMuaXNDb2xsaWRpbmcgPSB0cnVlO1xuICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHt0aGlzLmNvbGxpZGluZyA9IGZhbHNlfSwgMTAwMCk7XG5cbiAgICAgICAgaWYgKG9ic3RhY2xlLm9yaWVudGF0aW9uID09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT0gJ2xlZnQnKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggKz0gMTU7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnkgKz0gMTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54IC09IDE1O1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55ICs9IDE7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChvYnN0YWNsZS5kaXJlY3Rpb24gPT0gXCJSRFwiKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggKz0gMjA7XG4gICAgICAgICAgfSBlbHNlIGlmIChvYnN0YWNsZS5kaXJlY3Rpb24gPT0gXCJMVVwiKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggLT0gMjA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pc0NvbGxpZGluZyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICB9O1xuXG4gIG9uUGxhdGZvcm0oY2hhclBvcywgcGxhdGZvcm0pIHtcbiAgICAvLyBjaGFyUG9zID0ge1xuICAgIC8vICAgeDogY2hhclBvc1gsXG4gICAgLy8gICB5OiBjaGFyUG9zWSxcbiAgICAvLyB9XG4gICAgLy8gcGxhdGZvcm0gPSBbcG9zWCwgcG9zWSwgd2lkdGhdXG4gICAgaWYgKHRoaXMuY3JvdWNoaW5nKSB7XG4gICAgICBpZiAoKChjaGFyUG9zLnggKyB0aGlzLndpZHRoIC0xNSkgPj0gcGxhdGZvcm1bMF0pICYmXG4gICAgICAoKGNoYXJQb3MueCsxNSkgPD0gKHBsYXRmb3JtWzBdK3BsYXRmb3JtWzJdKSkgJiZcbiAgICAgICgoY2hhclBvcy55ICsgMjApIDw9IHBsYXRmb3JtWzFdKSAmJlxuICAgICAgKChjaGFyUG9zLnkgKyAyMCkgPj0gcGxhdGZvcm1bMV0tMikpe1xuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoKChjaGFyUG9zLnggKyB0aGlzLndpZHRoIC0xNSkgPj0gcGxhdGZvcm1bMF0pICYmXG4gICAgICAoKGNoYXJQb3MueCsxNSkgPD0gKHBsYXRmb3JtWzBdK3BsYXRmb3JtWzJdKSkgJiZcbiAgICAgICgoY2hhclBvcy55ICsgNDApIDw9IHBsYXRmb3JtWzFdKSAmJlxuICAgICAgKChjaGFyUG9zLnkgKyA0MCkgPj0gcGxhdGZvcm1bMV0tMikpe1xuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9O1xuICAgIH07XG4gIH1cblxuICAvLyByZXR1cm4gdHJ1ZSBpZiBhbiBvYnN0YWNsZSBjb2xsaWRlcyB3aXRoIHVzZXJcbiAgY29sbGlzaW9uRGV0ZWN0aW9uKG9ic3RhY2xlKSB7XG4gICAgbGV0IG8gPSB7XG4gICAgICB4OiBvYnN0YWNsZS5wb3NpdGlvbi54LFxuICAgICAgeTogb2JzdGFjbGUucG9zaXRpb24ueSxcbiAgICAgIHI6IG9ic3RhY2xlLnJhZGl1c1xuICAgIH07XG4gICAgbGV0IGMgPSB7XG4gICAgICB4OiB0aGlzLnBvc2l0aW9uLnggKyAyMCxcbiAgICAgIHk6IHRoaXMucG9zaXRpb24ueSxcbiAgICAgIHc6IHRoaXMud2lkdGgtMzAsXG4gICAgICBoOiB0aGlzLmhlaWdodFxuICAgIH1cblxuICAgIC8vIGZpbmQgaG9yaXovdmVydCBkaXN0YW5jZSBiL3cgY2VudGVyIG9mIG9ic3RhY2xlICYgY2hhcmFjdGVyXG4gICAgbGV0IGRpc3RYID0gTWF0aC5hYnMoby54IC0gYy54IC0gYy53LzIpO1xuICAgIGxldCBkaXN0WSA9IE1hdGguYWJzKG8ueSAtIGMueSAtIGMuaC8yKTtcblxuICAgIC8vIHJldHVybiBmYWxzZSBpZiBkaXN0IGlzIGdyZWF0ZXIgdGhhbiBtaW4gZGlzdCBiL3cgZWRnZXMgKHggb3IgeSlcbiAgICBpZiAoKGRpc3RYID4gKGMudy8yICsgby5yKSkgfHwgKGRpc3RZID4gKGMuaC8yICsgby5yKSkpIHtyZXR1cm4gZmFsc2V9O1xuXG4gICAgLy8gcmV0dXJuIHRydWUgaWYgZGlzdCBpcyA8PSBjaGFyIHdpZHRoLzJcbiAgICBpZiAoKGRpc3RYIDw9IChjLncvMikpICYmIChkaXN0WSA8PSAoYy5oLzIpKSkge3JldHVybiB0cnVlfTtcblxuICAgIC8vIGR4ICYgZHkgPSBkaXN0IGIvdyBvYnN0YWNsZSBjZW50ZXIgJiBjaGFyIGVkZ2UgKHggJiB5KVxuICAgIGxldCBkeCA9IGRpc3RYIC0gYy53IC8gMjtcbiAgICBsZXQgZHkgPSBkaXN0WSAtIGMuaCAvIDI7XG5cbiAgICAvLyB1c2UgcHl0aGFnb3JlYW4gdGhlb3JlbSB0byBzZWUgaWYgcmFkaXVzXjIgIFxuICAgIC8vIGlzIGdyZWF0ZXIgdGhhbiBoeXBvdGVudXNlIG9mIGR4XjIgKyBkeV4yIFxuICAgIC8vIGlmIGdyZWF0ZXIsIG9iamVjdCBhbmQgY2hhciBhcmUgY29sbGlkaW5nICh0cnVlKVxuICAgIHJldHVybiAoTWF0aC5wb3coZHgsMikgKyBNYXRoLnBvdyhkeSwyKSA8PSBNYXRoLnBvdyhvLnIsMikpO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hhcmFjdGVyOyIsImNsYXNzIENvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcihjaGFyKSB7XG4gICAgdGhpcy5rZXlzID0ge307XG4gICAgdGhpcy5qdW1wU0ZYID0gbmV3IEF1ZGlvKFwiLi9zcmMvYXVkaW8vbWFwbGUtanVtcC1zZngubXAzXCIpXG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICBzd2l0Y2ggKGV2ZW50LmNvZGUpIHtcbiAgICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcbiAgICAgICAgY2FzZSAnS2V5QSc6ICBcbiAgICAgICAgICB0aGlzLmtleXNbZXZlbnQuY29kZV0gPSB0cnVlXG4gICAgICAgICAgY2hhci5kaXJlY3Rpb24gPSBcImxlZnRcIjtcbiAgICAgICAgICBjaGFyLm1vdmluZyA9IHRydWU7XG4gICAgICAgICAgY2hhci5rZXlzID0gdGhpcy5rZXlzO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdBcnJvd1JpZ2h0JzpcbiAgICAgICAgY2FzZSAnS2V5RCc6XG4gICAgICAgICAgdGhpcy5rZXlzW2V2ZW50LmNvZGVdID0gdHJ1ZVxuICAgICAgICAgIGNoYXIuZGlyZWN0aW9uID0gXCJyaWdodFwiO1xuICAgICAgICAgIGNoYXIubW92aW5nID0gdHJ1ZTtcbiAgICAgICAgICBjaGFyLnVwZGF0ZUtleXModGhpcy5rZXlzKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgY2FzZSAnS2V5Uyc6XG4gICAgICAgICAgLy8gdGhpcy5rZXlzW2V2ZW50LmNvZGVdID0gdHJ1ZVxuICAgICAgICAgIGNoYXIuY3JvdWNoaW5nID0gdHJ1ZTtcbiAgICAgICAgICBjaGFyLmNyb3VjaCgpOyAgIFxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdTcGFjZSc6XG4gICAgICAgICAgLy8gdGhpcy5rZXlzW2V2ZW50LmNvZGVdID0gdHJ1ZVxuICAgICAgICAgIGlmICghY2hhci5qdW1waW5nICYmICFjaGFyLmZhbGxpbmcgJiYgIWNoYXIuY29sbGlkaW5nKSB7XG4gICAgICAgICAgICB0aGlzLmp1bXBTRlgucGxheSgpO1xuICAgICAgICAgICAgY2hhci5qdW1waW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIGNoYXIuanVtcCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2ZW50KSA9PiB7XG4gICAgICBzd2l0Y2ggKGV2ZW50LmNvZGUpIHtcbiAgICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcbiAgICAgICAgY2FzZSAnS2V5QSc6IFxuICAgICAgICAgIHRoaXMua2V5c1tldmVudC5jb2RlXSA9IGZhbHNlO1xuICAgICAgICAgIGNoYXIua2V5cyA9IHRoaXMua2V5cztcbiAgICAgICAgICBjaGFyLnN0b3AoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XG4gICAgICAgIGNhc2UgJ0tleUQnOlxuICAgICAgICAgIHRoaXMua2V5c1tldmVudC5jb2RlXSA9IGZhbHNlO1xuICAgICAgICAgIGNoYXIua2V5cyA9IHRoaXMua2V5cztcbiAgICAgICAgICBjaGFyLnN0b3AoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgY2FzZSAnS2V5Uyc6XG4gICAgICAgICAgLy8gdGhpcy5rZXlzW2V2ZW50LmNvZGVdID0gZmFsc2U7XG4gICAgICAgICAgY2hhci5jcm91Y2hpbmcgPSBmYWxzZTtcbiAgICAgICAgICBjaGFyLnVuY3JvdWNoKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1NwYWNlJzpcbiAgICAgICAgICAvLyB0aGlzLmtleXNbZXZlbnQuY29kZV0gPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xsZXI7IiwiY2xhc3MgT2JzdGFjbGUge1xuICBjb25zdHJ1Y3Rvcihwb3NYLCBwb3NZLCByYWRpdXMsIG9yaWVudGF0aW9uLCB0cmF2ZWxMZW5ndGgsIGNvbG9yLCBzcGVlZCkge1xuICAgIHRoaXMuaW5pdFBvcyA9IHtcbiAgICAgIHg6IHBvc1gsXG4gICAgICB5OiBwb3NZXG4gICAgfTtcbiAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgeDogcG9zWCxcbiAgICAgIHk6IHBvc1lcbiAgICB9O1xuICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xuICAgIHRoaXMub3JpZW50YXRpb24gPSBvcmllbnRhdGlvbjtcbiAgICB0aGlzLnRyYXZlbExlbiA9IHRyYXZlbExlbmd0aFxuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICB0aGlzLnNwZWVkID0gc3BlZWQ7XG4gICAgdGhpcy5kaXJlY3Rpb24gPSBcIlJEXCI7IC8vIExVID0gbGVmdC91cCwgUkQgPSByaWdodC9kb3duIChkZXAuIG9uIG9yaWVudGF0aW9uKVxuICB9XG5cbiAgZHJhd09ic3RhY2xlKGN0eCkge1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55KTtcbiAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICBjdHguYXJjKHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLnJhZGl1cywgMCwgTWF0aC5QSSAqIDIsIHRydWUpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgICBjdHguZmlsbCgpO1xuICB9IFxuXG4gIHVwZGF0ZSgpIHtcbiAgICAvLyBzZXQgZGlyZWN0aW9uIG9ic3RhY2xlIHNob3VsZCBtb3ZlIGJhc2VkIG9uIGN1cnJlbnQgcG9zaXRpb24gKFJEL0xVKVxuICAgIGlmICh0aGlzLm9yaWVudGF0aW9uID09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICBpZiAodGhpcy5wb3NpdGlvbi54IDw9IHRoaXMuaW5pdFBvcy54KSB7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gXCJSRFwiXG4gICAgICB9IGVsc2UgaWYgKHRoaXMucG9zaXRpb24ueCA+PSB0aGlzLmluaXRQb3MueCArIHRoaXMudHJhdmVsTGVuKSB7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gXCJMVVwiXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IHRoaXMuZGlyZWN0aW9uO1xuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKHRoaXMub3JpZW50YXRpb24gPT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICBpZiAodGhpcy5wb3NpdGlvbi55IDw9IHRoaXMuaW5pdFBvcy55KSB7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gXCJSRFwiXG4gICAgICB9IGVsc2UgaWYgKHRoaXMucG9zaXRpb24ueSA+PSB0aGlzLmluaXRQb3MueSArIHRoaXMudHJhdmVsTGVuKSB7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gXCJMVVwiXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IHRoaXMuZGlyZWN0aW9uO1xuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZGlyZWN0aW9uID09PSBcInN0YXRpY1wiKSB7XG4gICAgICBcbiAgICB9O1xuICAgIFxuICAgIC8vIG1vdmUgb2JzdGFjbGUgYWNjb3JkaW5nIHRvIGl0cyBkaXJlY3Rpb25cbiAgICBpZiAodGhpcy5vcmllbnRhdGlvbiA9PSBcImhvcml6b250YWxcIikge1xuICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09IFwiUkRcIikge1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnggKz0gdGhpcy5zcGVlZFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54IC09IHRoaXMuc3BlZWRcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmICh0aGlzLm9yaWVudGF0aW9uID09IFwidmVydGljYWxcIikge1xuICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09IFwiUkRcIikge1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgKz0gdGhpcy5zcGVlZFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55IC09IHRoaXMuc3BlZWRcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgT2JzdGFjbGU7XG5cbiIsImNsYXNzIFBsYXRmb3JtIHtcbiAgY29uc3RydWN0b3IocG9zWCwgcG9zWSwgd2lkdGgsIGkpIHtcbiAgICB0aGlzLmhlaWdodCA9IDE1O1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgeDogcG9zWCxcbiAgICAgIHk6IHBvc1lcbiAgICB9XG4gICAgdGhpcy5pbmRleCA9IGk7XG4gIH1cblxuICBkcmF3UGxhdGZvcm0oY3R4KSB7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwia2hha2lcIixcbiAgICBjdHguZmlsbFJlY3QodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICBcbiAgICAvLyBwcmludGluZyBwbGF0Zm9ybSBpbmRleC9rZXkgJiBjb29yZGluYXRlc1xuICAgIC8vIGN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7IFxuICAgIC8vIGN0eC5mb250ID1cIjE0cHggc2VyaWZcIjtcbiAgICAvLyBjdHguZmlsbFRleHQoYCR7dGhpcy5pbmRleH06ICR7dGhpcy5wb3NpdGlvbi54fSwgJHt0aGlzLnBvc2l0aW9uLnl9YCwgXG4gICAgLy8gICB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSszMyk7XG5cbiAgICAvLyB0ZXN0aW5nIHBsYXRmb3JtIGJvdW5kYXJpZXNcbiAgICAvLyBjdHguYmVnaW5QYXRoKCk7XG4gICAgLy8gY3R4LnN0cm9rZVN0eWxlID0gXCJibHVlXCI7XG4gICAgLy8gY3R4Lm1vdmVUbyh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSk7XG4gICAgLy8gY3R4LmxpbmVUbyh0aGlzLnBvc2l0aW9uLngsIDApO1xuICAgIC8vIGN0eC5tb3ZlVG8odGhpcy5wb3NpdGlvbi54K3RoaXMud2lkdGgsIHRoaXMucG9zaXRpb24ueSk7XG4gICAgLy8gY3R4LmxpbmVUbyh0aGlzLnBvc2l0aW9uLngrdGhpcy53aWR0aCwgMCk7XG4gICAgLy8gY3R4LnN0cm9rZSgpO1xuICB9IFxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF0Zm9ybTtcblxuIiwiZXhwb3J0IGNvbnN0IGZpbm5SaWdodCA9IG5ldyBJbWFnZSgpO1xuZmlublJpZ2h0LnNyYyA9ICcuL2Rpc3QvaW1hZ2VzL0Zpbm5TcHJpdGUtcmlnaHQucG5nJztcbmV4cG9ydCBjb25zdCBmaW5uTGVmdCA9IG5ldyBJbWFnZSgpO1xuZmlubkxlZnQuc3JjID0gJy4vZGlzdC9pbWFnZXMvRmlublNwcml0ZS1sZWZ0LnBuZyc7XG5leHBvcnQgY29uc3QgcGVhY2VCZyA9IG5ldyBJbWFnZSgpO1xucGVhY2VCZy5zcmMgPSAnLi9kaXN0L2ltYWdlcy9wZWFjZS1iZy5wbmcnO1xuZXhwb3J0IGNvbnN0IGJlZW1vID0gbmV3IEltYWdlKCk7XG5iZWVtby5zcmMgPSAnLi9kaXN0L2ltYWdlcy9iZWVtby5wbmcnO1xuZXhwb3J0IGNvbnN0IGZpbm5CZWVtbyA9IG5ldyBJbWFnZSgpO1xuZmlubkJlZW1vLnNyYyA9ICcuL2Rpc3QvaW1hZ2VzL2Zpbm4tYW5kLWJlZW1vLmpwZyc7IiwiaW1wb3J0IHsgZmlublJpZ2h0LCBiZWVtbyB9IGZyb20gJy4vdXRpbCc7XG5jb25zdCB3ZWxjb21lTW9kYWwgPSAoY3R4LCBnYW1lU3RhcnQsIEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hUKSA9PiB7XG5cbiAgaWYgKCFnYW1lU3RhcnQpIHtcbiAgICBjdHguZmlsbFN0eWxlID0gXCJsaWdodHNsYXRlZ3JleVwiO1xuICAgIGN0eC5maWxsUmVjdCgwLCAwLCBHQU1FX1dJRFRILCBHQU1FX0hFSUdIVCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwic25vd1wiO1xuICAgIGN0eC5mb250ID0gJ2JvbGQgNTBweCBhcmlhbCc7XG4gICAgY3R4LmZpbGxUZXh0KFwiV2VsY29tZSB0byBKdW1wIFF1ZXN0IVwiLCAyMjUsIDYwKTtcbiAgICBjdHguZm9udCA9ICdib2xkIDMwcHggYXJpYWwnO1xuICAgIGN0eC5maWxsVGV4dChcIkJlZW1vICAgICAgICAgIGlzIGxvc3QhXCIsIDc1LCAxNTApO1xuICAgIGN0eC5maWxsVGV4dChcIkhlbHAgRmlubiAgICAgICAgbmF2aWdhdGUgYWNyb3NzIHRoZSBwbGF0Zm9ybXMgdG8gZmluZCBoaW0uXCIsIDc1LCAyMjUpO1xuICAgIGN0eC5maWxsVGV4dChcIkJlIHN1cmUgdG8gZG9kZ2UgdGhlIGZseWluZyBvYnN0YWNsZXMgdXNpbmcgY3JvdWNoIG9yIGp1bXAuXCIsIDc1LCAzMDApO1xuICAgIGN0eC5maWxsVGV4dChcIklmIHlvdSBnZXQgaGl0LCB5b3UgbWF5IGhhdmUgdG8gc3RhcnQgZnJvbSBhbiBlYXJsaWVyIHBvc2l0aW9uLlwiLCA3NSwgMzc1KTtcblxuICAgIGN0eC5mb250ID0gJ2JvbGQgMjBweCBhcmlhbCc7XG4gICAgY3R4LmZpbGxUZXh0KFwiLSBIb3Jpem9udGFsbHkgbW92aW5nIGJhbGxzIHdpbGwgcHVzaCB5b3UgaW4gdGhlaXIgZGlyZWN0aW9uXCIsIDEwMCwgNDEwKTtcbiAgICBjdHguZmlsbFRleHQoXCItIFZlcnRpY2FsbHkgbW92aW5nIGJhbGxzIHdpbGwga25vY2sgeW91IG9mZiBvZiB0aGUgcGxhdGZvcm1cIiwgMTAwLCA0NDUpO1xuICAgIFxuICAgIGN0eC5mb250ID0gJ2JvbGQgMzBweCBhcmlhbCc7XG4gICAgY3R4LmZpbGxUZXh0KFwiR29vZCBsdWNrISEhXCIsIDc1LCA1NTApO1xuICAgIFxuICAgIGN0eC5mb250ID0gJ2JvbGQgMjBweCBhcmlhbCc7XG4gICAgY3R4LmZpbGxUZXh0KFwiKElmIHlvdXIgc2NyZWVuIGhlaWdodCBpcyBzbWFsbGVyIHRoYW4gODY1IHBpeGVscywgcGxlYXNlIGNvbnNpZGVyIHpvb21pbmcgb3V0IHRvIDgwLTkwJSlcIiwgNzUsIDYwMCk7XG4gICAgXG4gICAgY3R4LmZvbnQgPSAnYm9sZCA0MHB4IGFyaWFsJztcbiAgICBjdHguZmlsbFRleHQoXCJQcmVzcyBFTlRFUiB0byBiZWdpbiFcIiwgMjc1LCA3MDApO1xuICAgIGN0eC5maWxsKCk7XG5cbiAgICBjdHguZm9udCA9ICdib2xkIDIwcHggYXJpYWwnO1xuICAgIGN0eC5maWxsVGV4dChcIkdhbWUgZGVzaWduIGJ5IENocmlzIEpvb1wiLCA3MzAsIDc5MCk7XG4gICAgY3R4LmZpbGxUZXh0KFwiTXVzaWMgYnkgSU5TRUNVUkUgTVVTSUNcIiwgMjAsIDc5MCk7XG5cbiAgICBjdHguZmlsbCgpO1xuICAgIFxuICAgIGJlZW1vLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgY3R4LmRyYXdJbWFnZShiZWVtbywgMjAwLCAxMjUsIDMzLCA0MCk7XG4gICAgfVxuICAgIGZpbm5SaWdodC5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgIGN0eC5kcmF3SW1hZ2UoZmlublJpZ2h0LCAwLCAwLCAzMiwgMjAsIDIxNSwgMTk1LCA2NCwgNDApO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgd2VsY29tZU1vZGFsOyIsImltcG9ydCB7IGZpbm5CZWVtbyB9IGZyb20gJy4vdXRpbCc7XG5cbmNvbnN0IHdpbm5lck1vZGFsID0gKGN0eCwgR0FNRV9XSURUSCwgR0FNRV9IRUlHSFQpID0+IHtcbiAgY3R4LmZpbGxTdHlsZSA9IFwibGlnaHRzbGF0ZWdyZXlcIjtcbiAgY3R4LmZpbGxSZWN0KDAsIDAsIEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hUKTtcbiAgY3R4LmZpbGxTdHlsZSA9IFwic25vd1wiO1xuICBjdHguZm9udCA9ICdib2xkIDUwcHggYXJpYWwnO1xuICBjdHguZmlsbFRleHQoXCJZb3Ugc2F2ZWQgQmVlbW8hXCIsIDI3MCwgMTIwKTtcbiAgLy8gZmlubkJlZW1vLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgIGN0eC5kcmF3SW1hZ2UoZmlubkJlZW1vLCAxNDAsIDIyNSwgNzI4LCA0MDkpO1xuICAvLyB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aW5uZXJNb2RhbDsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG4vLyBpbXBvcnQgSnVtcFF1ZXN0IGZyb20gXCIuL3NjcmlwdHMvZ2FtZVwiO1xuaW1wb3J0IHdlbGNvbWVNb2RhbCBmcm9tICcuL3NjcmlwdHMvd2VsY29tZSc7XG5pbXBvcnQgQ2hhcmFjdGVyIGZyb20gXCIuL3NjcmlwdHMvY2hhcmFjdGVyXCI7XG5pbXBvcnQgQ29udHJvbGxlciBmcm9tIFwiLi9zY3JpcHRzL2NvbnRyb2xsZXJcIjtcbmltcG9ydCBCYWNrZ3JvdW5kIGZyb20gXCIuL3NjcmlwdHMvYmFja2dyb3VuZFwiO1xuaW1wb3J0IFBsYXRmb3JtIGZyb20gXCIuL3NjcmlwdHMvcGxhdGZvcm1cIjtcbmltcG9ydCBPYnN0YWNsZSBmcm9tIFwiLi9zY3JpcHRzL29ic3RhY2xlXCI7XG5pbXBvcnQgeyBiZWVtbyB9IGZyb20gJy4vc2NyaXB0cy91dGlsJztcbmltcG9ydCB3aW5uZXJNb2RhbCBmcm9tICcuL3NjcmlwdHMvd2lubmVyJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBsZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqdW1wLXF1ZXN0XCIpO1xuICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuICAvLyBnYW1lIHZhcmlhYmxlc1xuICBsZXQgZ2FtZVN0YXJ0ID0gZmFsc2U7XG4gIGNvbnN0IEdBTUVfV0lEVEggPSBjYW52YXMud2lkdGg7IC8vIDEwMDBcbiAgY29uc3QgR0FNRV9IRUlHSFQgPSBjYW52YXMuaGVpZ2h0OyAvLyA4MDBcbiAgbGV0IGNoYXIgPSBuZXcgQ2hhcmFjdGVyKEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hUKTtcbiAgbmV3IENvbnRyb2xsZXIoY2hhcilcbiAgbGV0IGJnID0gbmV3IEJhY2tncm91bmQoR0FNRV9XSURUSCwgR0FNRV9IRUlHSFQpO1xuICBsZXQgZnJhbWVzID0gMDtcbiAgbGV0IG9ic3RhY2xlcyA9IHt9O1xuXG4gIC8vIGNvbnRyb2xzL2hvdy10by1wbGF5IHZhcmlhYmxlc1xuICBsZXQgY29udHJvbHNTaG93biA9IGZhbHNlO1xuICBsZXQgY29udHJvbHNCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRyb2xzLWJ0blwiKTtcbiAgbGV0IGNvbnRyb2xzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRyb2xzJyk7XG5cbiAgLy8gYXVkaW8vYmdtIHZhcmlhYmxlc1xuICBsZXQgYmdtID0gbmV3IEF1ZGlvKFwiLi9zcmMvYXVkaW8vZ29vZC1tb3JuaW5nLWluc2VjdXJlLm1wM1wiKTtcbiAgbGV0IG11c2ljUGxheWluZyA9IGZhbHNlO1xuICBsZXQgbXVzaWNCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm11c2ljLWJ0blwiKTtcbiAgbGV0IHBsYXlCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXktYnRuXCIpO1xuICBsZXQgcGF1c2VCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhdXNlLWJ0blwiKTtcblxuICBjb250cm9sc0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChjb250cm9sc1Nob3duKSB7XG4gICAgICBjb250cm9sc1Nob3duID0gZmFsc2U7XG4gICAgICBjb250cm9scy5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgY29udHJvbHNCdG4uY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRyb2xzU2hvd24gPSB0cnVlO1xuICAgICAgY29udHJvbHMuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICAgIGNvbnRyb2xzQnRuLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICAgIH07XG4gIH0pO1xuXG4gIG11c2ljQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKG11c2ljUGxheWluZykge1xuICAgICAgbXVzaWNQbGF5aW5nID0gZmFsc2U7XG4gICAgICBiZ20ucGF1c2UoKTtcbiAgICAgIHBhdXNlQnRuLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICBwbGF5QnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIG11c2ljUGxheWluZyA9IHRydWU7XG4gICAgICBiZ20ubG9vcCA9IHRydWU7XG4gICAgICBiZ20ucGxheSgpO1xuICAgICAgcGF1c2VCdG4uY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICAgIHBsYXlCdG4uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICB9XG4gIH0pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZXZlbnQgPT4ge1xuICAgIHN3aXRjaChldmVudC5jb2RlKSB7XG4gICAgICBjYXNlICdFbnRlcic6XG4gICAgICAgIGlmICghbXVzaWNQbGF5aW5nKSB7XG4gICAgICAgICAgbXVzaWNQbGF5aW5nID0gdHJ1ZTtcbiAgICAgICAgICBiZ20ubG9vcCA9IHRydWU7XG4gICAgICAgICAgcGF1c2VCdG4uY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICAgICAgICBwbGF5QnRuLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICAgICAgYmdtLnBsYXkoKTtcbiAgICAgICAgfVxuICAgICAgICBnYW1lU3RhcnQgPSB0cnVlO1xuICAgICAgICBzdGFydEdhbWUoKTtcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gIH0pXG4gICAgXG4gIGZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcbiAgICBnYW1lTG9vcCgpO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG4gIH1cblxuICBmdW5jdGlvbiBnYW1lTG9vcCgpIHtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hUKTtcbiAgICBiZy5kcmF3QmFja2dyb3VuZChjdHgpO1xuICAgIGRyYXdQbGF0Zm9ybXMoKTtcbiAgICB1cGRhdGVPYnN0YWNsZXMoKTtcbiAgICBkcmF3T2JzdGFjbGVzKCk7XG4gICAgLy8gd3JpdGUgYWxnb3JpdGhtIHRvIG9ubHkgcGFzcyBpbiBwbGF0Zm9ybXMgJiBvYnN0YWNsZXMgaW4gY3VycmVudCB2cFxuICAgIGNoYXIudXBkYXRlKE9iamVjdC52YWx1ZXMocGxhdGZvcm1zKSwgT2JqZWN0LnZhbHVlcyhvYnN0YWNsZXMpKTtcbiAgICBjaGFyLmRyYXdDaGFyKGN0eCwgZnJhbWVzKTtcbiAgICBjdHguZHJhd0ltYWdlKGJlZW1vLCAwLCAwLCAzMywgNDAsIDAsIDEwLCAzMywgNDApO1xuXG4gICAgaWYgKChjaGFyLnBvc2l0aW9uLnggPD0gMTAgKSAmJiAoY2hhci5wb3NpdGlvbi55IDw9IDEwKSkge1xuICAgICAgbXVzaWNQbGF5aW5nID0gZmFsc2U7XG4gICAgICBiZ20ucGF1c2UoKTtcbiAgICAgIHBhdXNlQnRuLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICBwbGF5QnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgICB3aW5uZXJNb2RhbChjdHgsIEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hUKTtcbiAgICB9XG5cbiAgICBpZiAoZnJhbWVzID49IDYwKSB7XG4gICAgICBmcmFtZXMgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBmcmFtZXMrKztcbiAgICB9XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xuICB9XG5cbiAgLy8gcGxhdGZvcm0gPSBbcG9zWCwgcG9zWSwgd2lkdGhdXG4gIGxldCBwbGF0Zm9ybXMgPSB7XG4gICAgMDogWzE1MCwgNzQwLCAxMDBdLFxuICAgIDE6IFszMDAsIDcwMCwgMTAwXSxcbiAgICAyOiBbNDUwLCA2NjAsIDEwMF0sXG4gICAgMzogWzYwMCwgNjIwLCAxMDBdLFxuICAgIDQ6IFs3NTAsIDU4MCwgMTAwXSxcbiAgICA1OiBbODUwLCA1NDAsIDUwXSxcbiAgICA2OiBbODAwLCA1MDAsIDUwXSxcbiAgICA3OiBbNzUwLCA0NjAsIDUwXSxcbiAgICA4OiBbNzAwLCA0MjAsIDUwXSxcbiAgICA5OiBbNjUwLCA0NjAsIDUwXSxcbiAgICAxMDogWzYwMCwgNTEwLCA1MF0sXG4gICAgMTE6IFs1NTAsIDQ2MCwgNTBdLFxuICAgIDEyOiBbNTAwLCA0MjAsIDUwXSxcbiAgICAxMzogWzQ1MCwgNDYwLCA1MF0sXG4gICAgMTQ6IFs0MDAsIDUxMCwgNTBdLFxuICAgIDE1OiBbMzUwLCA0NjAsIDUwXSxcbiAgICAxNjogWzMwMCwgNDIwLCA1MF0sXG4gICAgMTc6IFsyNTAsIDQ2MCwgNTBdLFxuICAgIDE4OiBbMjAwLCA1MTAsIDUwXSxcbiAgICAxOTogWzE1MCwgNDYwLCA1MF0sXG4gICAgMjA6IFsxMDAsIDQyMCwgNTBdLFxuICAgIDIxOiBbNTAsIDM4MCwgNTBdLFxuICAgIDIyOiBbMTAwLCAzNDAsIDUwXSxcbiAgICAyMzogWzIwMCwgMzAwLCAxMDBdLFxuICAgIDI0OiBbMzUwLCAzMDAsIDEwMF0sXG4gICAgMjU6IFs1MDAsIDMwMCwgMTAwXSxcbiAgICAyNjogWzY1MCwgMzAwLCAxMDBdLFxuICAgIDI3OiBbODAwLCAyNTAsIDUwXSxcbiAgICAyODogWzg1MCwgMjEwLCA1MF0sXG4gICAgMjk6IFs4MDAsIDE3MCwgNTBdLFxuICAgIDMwOiBbNzUwLCAxMzAsIDUwXSxcbiAgICAzMTogWzcwMCwgMTcwLCA1MF0sXG4gICAgMzI6IFs2NTAsIDIxMCwgNTBdLFxuICAgIDMzOiBbNjAwLCAxNzAsIDUwXSxcbiAgICAzNDogWzU1MCwgMTMwLCA1MF0sXG4gICAgMzU6IFs1MDAsIDkwLCA1MF0sXG4gICAgMzY6IFs0NTAsIDEzMCwgNTBdLFxuICAgIDM3OiBbMjAwLCAxMzAsIDIwMF0sXG4gICAgMzg6IFsxMjUsIDkwLCA1MF0sXG4gICAgMzk6IFswLCA1MCwgMTAwXSxcbiAgICA0MDogWzkwMCwgNTAsIDEwMF0sXG4gIH07XG4gIFxuICBmdW5jdGlvbiBkcmF3UGxhdGZvcm1zKCkge1xuICAgIE9iamVjdC52YWx1ZXMocGxhdGZvcm1zKS5mb3JFYWNoKChwbGF0Zm9ybSwgaSkgPT4ge1xuICAgICAgbGV0IHAgPSBuZXcgUGxhdGZvcm0oLi4ucGxhdGZvcm0sIGkpO1xuICAgICAgcC5kcmF3UGxhdGZvcm0oY3R4KTtcbiAgICB9KVxuICB9O1xuXG4gIC8vIG9ic3RhY2xlID0gW3Bvc1gsIHBvc1ksIHJhZGl1cywgb3JpZW50YXRpb24sIHRyYXZlbExlbmd0aCwgY29sb3IsIHNwZWVkXVxuICBsZXQgbmV3T2JzdGFjbGVzID0ge1xuICAgIDE6IFs3NTAsIDU3MCwgNSwgXCJob3Jpem9udGFsXCIsIDEwMCwgXCJ2aW9sZXRcIiwgMC4xXSxcbiAgICAyOiBbNjI1LCA0NTAsIDUsIFwiaG9yaXpvbnRhbFwiLCAyMDAsIFwiZm9yZXN0Z3JlZW5cIiwgMC4zXSxcbiAgICAzOiBbMjI1LCA0NTAsIDUsIFwiaG9yaXpvbnRhbFwiLCAyMDAsIFwiZm9yZXN0Z3JlZW5cIiwgMC4zXSxcbiAgICA0OiBbNTI1LCAzNTAsIDUsIFwidmVydGljYWxcIiwgMTUwLCBcInNreWJsdWVcIiwgMC4zXSxcbiAgICA1OiBbNzUsIDMwMCwgNSwgXCJ2ZXJ0aWNhbFwiLCAxNTAsIFwic2t5Ymx1ZVwiLCAwLjNdLFxuICAgIDY6IFszMjUsIDI2MCwgMTAsIFwidmVydGljYWxcIiwgMTAwLCBcImNyaW1zb25cIiwgMC4zXSxcbiAgICA3OiBbNjI1LCAyNjAsIDEwLCBcInZlcnRpY2FsXCIsIDEwMCwgXCJjcmltc29uXCIsIDAuM10sXG4gICAgODogWzM1MCwgMjYwLCAxMCwgXCJob3Jpem9udGFsXCIsIDI1MCwgXCJpbmRpZ29cIiwgMC4zNzVdLFxuICAgIDk6IFs2NTAsIDE5NSwgNSwgXCJob3Jpem9udGFsXCIsIDI1MCwgXCJvcmFuZ2VcIiwgMC41XSxcbiAgICAxMDogWzYwMCwgMTUwLCAxMCwgXCJob3Jpem9udGFsXCIsIDI1MCwgXCJpbmRpZ29cIiwgMC4zNzVdLFxuICAgIDExOiBbNTI1LCAyMCwgNSwgXCJ2ZXJ0aWNhbFwiLCAxNDAsIFwibWFyb29uXCIsIDAuM10sXG4gICAgMTI6IFszNTAsIDYwLCA1LCBcInZlcnRpY2FsXCIsIDE0MCwgXCJNZWRpdW1TbGF0ZUJsdWVcIiwgMC40XSxcbiAgICAxMzogWzI1MCwgNjAsIDUsIFwidmVydGljYWxcIiwgMTQwLCBcIk1lZGl1bVNsYXRlQmx1ZVwiLCAwLjRdLFxuICB9XG5cbiAgY3JlYXRlT2JzdGFjbGVzKCk7XG4gIFxuICBmdW5jdGlvbiBjcmVhdGVPYnN0YWNsZXMoKSB7XG4gICAgT2JqZWN0LnZhbHVlcyhuZXdPYnN0YWNsZXMpLmZvckVhY2goKG9ic3RhY2xlLCBpKSA9PiB7XG4gICAgICBvYnN0YWNsZXNbaV0gPSBuZXcgT2JzdGFjbGUoLi4ub2JzdGFjbGUpOztcbiAgICB9KVxuICB9O1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZU9ic3RhY2xlcygpIHtcbiAgICBPYmplY3QudmFsdWVzKG9ic3RhY2xlcykuZm9yRWFjaChvYnN0YWNsZSA9PiB7XG4gICAgICBvYnN0YWNsZS51cGRhdGUoKTtcbiAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBkcmF3T2JzdGFjbGVzKCkge1xuICAgIE9iamVjdC52YWx1ZXMob2JzdGFjbGVzKS5mb3JFYWNoKG9ic3RhY2xlID0+IHtcbiAgICAgIG9ic3RhY2xlLmRyYXdPYnN0YWNsZShjdHgpO1xuICAgIH0pO1xuICB9O1xuXG4gIHdlbGNvbWVNb2RhbChjdHgsIGdhbWVTdGFydCwgR0FNRV9XSURUSCwgR0FNRV9IRUlHSFQpO1xuXG59KSJdLCJzb3VyY2VSb290IjoiIn0=