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
        if (!gameStart) {
          if (!musicPlaying) {
            musicPlaying = true;
            bgm.loop = true;
            pauseBtn.classList.remove("hidden");
            playBtn.classList.add("hidden");
            bgm.play();
          }

          gameStart = true; // startGame();

          startAnimating(60);
          break;
        }

      default:
        return;
    }
  });
  var fps, interval, startTime, now, then, elapsed;

  function startAnimating(fps) {
    interval = 1000 / fps;
    then = Date.now();
    startTime = then;
    animate();
  }

  function animate() {
    now = Date.now();
    elapsed = now - then;

    if (elapsed > interval) {
      then = now - elapsed % interval;
      requestAnimationFrame(gameLoop);
    }

    ;
    requestAnimationFrame(gameLoop);
  } // function startGame() {
  //   gameLoop();
  //   requestAnimationFrame(gameLoop);
  // }


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qdW1wcXVlc3QvLi9zcmMvc2NyaXB0cy9iYWNrZ3JvdW5kLmpzIiwid2VicGFjazovL2p1bXBxdWVzdC8uL3NyYy9zY3JpcHRzL2NoYXJhY3Rlci5qcyIsIndlYnBhY2s6Ly9qdW1wcXVlc3QvLi9zcmMvc2NyaXB0cy9jb250cm9sbGVyLmpzIiwid2VicGFjazovL2p1bXBxdWVzdC8uL3NyYy9zY3JpcHRzL29ic3RhY2xlLmpzIiwid2VicGFjazovL2p1bXBxdWVzdC8uL3NyYy9zY3JpcHRzL3BsYXRmb3JtLmpzIiwid2VicGFjazovL2p1bXBxdWVzdC8uL3NyYy9zY3JpcHRzL3V0aWwuanMiLCJ3ZWJwYWNrOi8vanVtcHF1ZXN0Ly4vc3JjL3NjcmlwdHMvd2VsY29tZS5qcyIsIndlYnBhY2s6Ly9qdW1wcXVlc3QvLi9zcmMvc2NyaXB0cy93aW5uZXIuanMiLCJ3ZWJwYWNrOi8vanVtcHF1ZXN0Ly4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIiwid2VicGFjazovL2p1bXBxdWVzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qdW1wcXVlc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2p1bXBxdWVzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2p1bXBxdWVzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2p1bXBxdWVzdC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJCYWNrZ3JvdW5kIiwiYmdXaWR0aCIsImJnSGVpZ2h0Iiwid2lkdGgiLCJoZWlnaHQiLCJwb3NZIiwiY3R4IiwiZHJhd0ltYWdlIiwicGVhY2VCZyIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiZmlsbCIsIkNoYXJhY3RlciIsImdhbWVXaWR0aCIsImdhbWVIZWlnaHQiLCJkaXJlY3Rpb24iLCJtb3ZlU3BlZWQiLCJqdW1wSGVpZ2h0IiwiY3JvdWNoaW5nIiwianVtcGluZyIsImZhbGxpbmciLCJpc0NvbGxpZGluZyIsInBvc2l0aW9uIiwieCIsInkiLCJ2ZWxvY2l0eSIsImNvbnN0YW50cyIsImdyYXZpdHkiLCJmcmljdGlvbiIsImtleXMiLCJmcmFtZXMiLCJmaW5uTGVmdCIsIm1vdmluZyIsImZpbm5SaWdodCIsInBsYXRmb3JtcyIsIm9ic3RhY2xlcyIsImkiLCJsZW5ndGgiLCJwbGF0Zm9ybSIsIm9uUGxhdGZvcm0iLCJvYnN0YWNsZSIsImNvbGxpc2lvbkRldGVjdGlvbiIsIm9yaWVudGF0aW9uIiwiY2hhclBvcyIsIm8iLCJyIiwicmFkaXVzIiwiYyIsInciLCJoIiwiZGlzdFgiLCJNYXRoIiwiYWJzIiwiZGlzdFkiLCJkeCIsImR5IiwicG93IiwiQ29udHJvbGxlciIsImNoYXIiLCJqdW1wU0ZYIiwiQXVkaW8iLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImNvZGUiLCJ1cGRhdGVLZXlzIiwiY3JvdWNoIiwiY29sbGlkaW5nIiwicGxheSIsImp1bXAiLCJzdG9wIiwidW5jcm91Y2giLCJPYnN0YWNsZSIsInBvc1giLCJ0cmF2ZWxMZW5ndGgiLCJjb2xvciIsInNwZWVkIiwiaW5pdFBvcyIsInRyYXZlbExlbiIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImFyYyIsIlBJIiwic3Ryb2tlIiwiUGxhdGZvcm0iLCJpbmRleCIsIkltYWdlIiwic3JjIiwiYmVlbW8iLCJmaW5uQmVlbW8iLCJ3ZWxjb21lTW9kYWwiLCJnYW1lU3RhcnQiLCJHQU1FX1dJRFRIIiwiR0FNRV9IRUlHSFQiLCJmb250IiwiZmlsbFRleHQiLCJ3aW5uZXJNb2RhbCIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwiZ2V0Q29udGV4dCIsImJnIiwiY29udHJvbHNTaG93biIsImNvbnRyb2xzQnRuIiwiY29udHJvbHMiLCJiZ20iLCJtdXNpY1BsYXlpbmciLCJtdXNpY0J0biIsInBsYXlCdG4iLCJwYXVzZUJ0biIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInBhdXNlIiwibG9vcCIsInN0YXJ0QW5pbWF0aW5nIiwiZnBzIiwiaW50ZXJ2YWwiLCJzdGFydFRpbWUiLCJub3ciLCJ0aGVuIiwiZWxhcHNlZCIsIkRhdGUiLCJhbmltYXRlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZ2FtZUxvb3AiLCJjbGVhclJlY3QiLCJkcmF3QmFja2dyb3VuZCIsImRyYXdQbGF0Zm9ybXMiLCJ1cGRhdGVPYnN0YWNsZXMiLCJkcmF3T2JzdGFjbGVzIiwidXBkYXRlIiwiT2JqZWN0IiwidmFsdWVzIiwiZHJhd0NoYXIiLCJmb3JFYWNoIiwicCIsImRyYXdQbGF0Zm9ybSIsIm5ld09ic3RhY2xlcyIsImNyZWF0ZU9ic3RhY2xlcyIsImRyYXdPYnN0YWNsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0lBRU1BLFU7QUFDSixzQkFBWUMsT0FBWixFQUFxQkMsUUFBckIsRUFBK0I7QUFBQTs7QUFDN0IsU0FBS0MsS0FBTCxHQUFhRixPQUFiO0FBQ0EsU0FBS0csTUFBTCxHQUFjRixRQUFkO0FBQ0EsU0FBS0csSUFBTCxHQUFZLElBQVo7QUFDRDs7OztXQUVELHdCQUFlQyxHQUFmLEVBQW9CO0FBQ2xCO0FBQ0E7QUFDQTtBQUVBQSxTQUFHLENBQUNDLFNBQUosQ0FBY0MsMENBQWQsRUFBdUIsQ0FBdkIsRUFBMEIsQ0FBMUIsRUFBNkIsSUFBN0IsRUFBbUMsR0FBbkMsRUFBd0MsQ0FBeEMsRUFBMkMsQ0FBM0MsRUFBOEMsSUFBOUMsRUFBb0QsR0FBcEQ7QUFDQUYsU0FBRyxDQUFDRyxTQUFKLEdBQWdCLFNBQWhCO0FBQ0FILFNBQUcsQ0FBQ0ksUUFBSixDQUFhLENBQWIsRUFBZ0IsS0FBS04sTUFBTCxHQUFjLEVBQTlCLEVBQWtDLEtBQUtELEtBQXZDLEVBQThDLEtBQUtDLE1BQW5EO0FBQ0FFLFNBQUcsQ0FBQ0ssSUFBSjtBQUNEOzs7Ozs7QUFHSCwrREFBZVgsVUFB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MkRBQVksQ0FBQ3BGLEdBQUQsRUFBTXFGLFNBQU4sRUFBaUJDLFVBQWpCLEVBQTZCQyxXQUE3QixDQUFaO0FBRUQsQ0EzTkQsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcGVhY2VCZyB9IGZyb20gJy4vdXRpbCc7XG5cbmNsYXNzIEJhY2tncm91bmQge1xuICBjb25zdHJ1Y3RvcihiZ1dpZHRoLCBiZ0hlaWdodCkge1xuICAgIHRoaXMud2lkdGggPSBiZ1dpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gYmdIZWlnaHQ7XG4gICAgdGhpcy5wb3NZID0gMzIwMDtcbiAgfVxuXG4gIGRyYXdCYWNrZ3JvdW5kKGN0eCkge1xuICAgIC8vIGN0eC5maWxsU3R5bGUgPSBcIk1pc3R5Um9zZVwiO1xuICAgIC8vIGN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCAtIDIwKTtcbiAgICAvLyBjdHguZmlsbCgpO1xuXG4gICAgY3R4LmRyYXdJbWFnZShwZWFjZUJnLCAwLCAwLCAxMDAwLCA4MDAsIDAsIDAsIDEwMDAsIDgwMCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiIzAwMzMwMFwiO1xuICAgIGN0eC5maWxsUmVjdCgwLCB0aGlzLmhlaWdodCAtIDIwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgY3R4LmZpbGwoKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYWNrZ3JvdW5kOyIsImltcG9ydCB7IGZpbm5SaWdodCwgZmlubkxlZnQgfSBmcm9tICcuL3V0aWwnO1xuXG5jbGFzcyBDaGFyYWN0ZXIge1xuICBjb25zdHJ1Y3RvcihnYW1lV2lkdGgsIGdhbWVIZWlnaHQpIHtcbiAgICB0aGlzLmdhbWVXaWR0aCA9IGdhbWVXaWR0aDtcbiAgICB0aGlzLmdhbWVIZWlnaHQgPSBnYW1lSGVpZ2h0O1xuICAgIHRoaXMud2lkdGggPSA2NDtcbiAgICB0aGlzLmhlaWdodCA9IDQwO1xuICAgIHRoaXMuZGlyZWN0aW9uID0gXCJyaWdodFwiO1xuICAgIHRoaXMubW92ZVNwZWVkID0gLjc1O1xuICAgIHRoaXMuanVtcEhlaWdodCA9IC0xMDtcbiAgICB0aGlzLmNyb3VjaGluZyA9IGZhbHNlO1xuICAgIHRoaXMuanVtcGluZyA9IGZhbHNlO1xuICAgIHRoaXMuZmFsbGluZyA9IGZhbHNlO1xuICAgIHRoaXMuaXNDb2xsaWRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgeDogNTAsXG4gICAgICB5OiB0aGlzLmdhbWVIZWlnaHQgLSB0aGlzLmhlaWdodCAtIDIwLFxuICAgIH07XG4gICAgdGhpcy52ZWxvY2l0eSA9IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwLFxuICAgIH07XG4gICAgdGhpcy5jb25zdGFudHMgPSB7XG4gICAgICBncmF2aXR5OiAwLjE1LFxuICAgICAgZnJpY3Rpb246IDAuOSxcbiAgICB9O1xuICAgIHRoaXMua2V5cyA9IHt9O1xuICB9XG5cbiAgZHJhd0NoYXIoY3R4LCBmcmFtZXMpIHtcbiAgICAvLyB0ZXN0aW5nIGNoYXJhY3RlciBib3VuZGFyaWVzXG4gICAgLy8gY3R4LnN0cm9rZVN0eWxlID0gXCJncmVlblwiO1xuICAgIC8vIGN0eC5tb3ZlVG8odGhpcy5wb3NpdGlvbi54KzIwLCB0aGlzLnBvc2l0aW9uLnkpO1xuICAgIC8vIGN0eC5saW5lVG8odGhpcy5wb3NpdGlvbi54KzIwLCAwKTtcbiAgICAvLyBjdHgubW92ZVRvKHRoaXMucG9zaXRpb24ueCt0aGlzLndpZHRoLTMwLCB0aGlzLnBvc2l0aW9uLnkpO1xuICAgIC8vIGN0eC5saW5lVG8odGhpcy5wb3NpdGlvbi54K3RoaXMud2lkdGgtMzAsIDApO1xuICAgIC8vIGN0eC5zdHJva2UoKTtcblxuICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PSAnbGVmdCcpIHtcbiAgICAgIGlmICh0aGlzLmlzQ29sbGlkaW5nKSB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoZmlubkxlZnQsIDM1MiwgMCwgMzIsIDIwLCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmp1bXBpbmcgfHwgdGhpcy5mYWxsaW5nKSB7IFxuICAgICAgICBjdHguZHJhd0ltYWdlKGZpbm5MZWZ0LCA0NDgsIDAsIDMyLCAyMCwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5tb3ZpbmcpIHtcbiAgICAgICAgaWYgKGZyYW1lcyA8IDIwKSB7XG4gICAgICAgICAgY3R4LmRyYXdJbWFnZShmaW5uTGVmdCwgNTQ0LCAwLCAzMiwgMjAsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZnJhbWVzID4gMjAgJiYgZnJhbWVzIDwgNDApIHsgXG4gICAgICAgICAgY3R4LmRyYXdJbWFnZShmaW5uTGVmdCwgNTEyLCAwLCAzMiwgMjAsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY3R4LmRyYXdJbWFnZShmaW5uTGVmdCwgNDgwLCAwLCAzMiwgMjAsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZnJhbWVzIDwgNDApIHtcbiAgICAgICAgICBjdHguZHJhd0ltYWdlKGZpbm5MZWZ0LCA4NjQsIDAsIDMyLCAyMCwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjdHguZHJhd0ltYWdlKGZpbm5MZWZ0LCA4MDAsIDAsIDMyLCAyMCwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgfTtcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmICh0aGlzLmRpcmVjdGlvbiA9PSAncmlnaHQnKSB7XG4gICAgICBpZiAodGhpcy5pc0NvbGxpZGluZykgeyBcbiAgICAgICAgY3R4LmRyYXdJbWFnZShmaW5uUmlnaHQsIDUxMiwgMCwgMzIsIDIwLCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmp1bXBpbmcgfHwgdGhpcy5mYWxsaW5nKSB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoZmlublJpZ2h0LCA0ODAsIDAsIDMyLCAyMCwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5tb3ZpbmcpIHtcbiAgICAgICAgaWYgKGZyYW1lcyA8IDIwKSB7XG4gICAgICAgICAgY3R4LmRyYXdJbWFnZShmaW5uUmlnaHQsIDMyMCwgMCwgMzIsIDIwLCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB9IGVsc2UgaWYgKGZyYW1lcyA+IDIwICYmIGZyYW1lcyA8IDQwKSB7IFxuICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoZmlublJpZ2h0LCAzODQsIDAsIDMyLCAyMCwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjdHguZHJhd0ltYWdlKGZpbm5SaWdodCwgNDE2LCAwLCAzMiwgMjAsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZnJhbWVzIDwgNDApIHtcbiAgICAgICAgICBjdHguZHJhd0ltYWdlKGZpbm5SaWdodCwgMCwgMCwgMzIsIDIwLCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoZmlublJpZ2h0LCA2NCwgMCwgMzIsIDIwLCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlS2V5cyhrZXlzKSB7XG4gICAgdGhpcy5rZXlzID0ga2V5cztcbiAgfVxuXG4gIHN0b3AoKSB7XG4gICAgdGhpcy52ZWxvY2l0eS54ID0gMDtcbiAgICB0aGlzLnZlbG9jaXR5LnkgPSAwO1xuICB9XG5cbiAganVtcCgpIHtcbiAgICBpZiAodGhpcy5qdW1waW5nKSB7XG4gICAgICB0aGlzLnZlbG9jaXR5LnkgPSB0aGlzLmp1bXBIZWlnaHRcbiAgICB9XG4gIH1cblxuICBjcm91Y2goKSB7XG4gICAgdGhpcy5oZWlnaHQgPSAyMDtcbiAgfVxuXG4gIHVuY3JvdWNoKCkge1xuICAgIHRoaXMuaGVpZ2h0ID0gNDA7XG4gICAgdGhpcy52ZWxvY2l0eS55ID0gLTU7XG4gIH1cblxuICB1cGRhdGUocGxhdGZvcm1zLCBvYnN0YWNsZXMpIHtcbiAgICAvLyBjaGVjayBjdXJyZW50IGtleSBwcmVzc2VzXG4gICAgaWYgKHRoaXMua2V5c1snQXJyb3dMZWZ0J10gfHwgdGhpcy5rZXlzWydLZXlBJ10pIHtcbiAgICAgIHRoaXMudmVsb2NpdHkueCA9IC10aGlzLm1vdmVTcGVlZDtcbiAgICB9IGVsc2UgaWYgKHRoaXMua2V5c1snQXJyb3dSaWdodCddIHx8IHRoaXMua2V5c1snS2V5RCddKSB7XG4gICAgICB0aGlzLnZlbG9jaXR5LnggPSB0aGlzLm1vdmVTcGVlZDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tb3ZpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBjaGFyIG1vdmVtZW50c1xuICAgIHRoaXMucG9zaXRpb24ueSArPSB0aGlzLnZlbG9jaXR5Lnk7XG4gICAgdGhpcy5wb3NpdGlvbi54ICs9IHRoaXMudmVsb2NpdHkueDtcbiAgICB0aGlzLnZlbG9jaXR5LnkgKz0gdGhpcy5jb25zdGFudHMuZ3Jhdml0eTtcbiAgICB0aGlzLnZlbG9jaXR5LnggKj0gdGhpcy5jb25zdGFudHMuZnJpY3Rpb247XG4gICAgdGhpcy52ZWxvY2l0eS55ICo9IHRoaXMuY29uc3RhbnRzLmZyaWN0aW9uO1xuXG4gICAgLy8gaWYgY2hhciBpcyBnb2luZyBvZmYgc2NyZWVuLCBzdG9wIGF0IGVkZ2Ugb2Ygc2NyZWVuXG4gICAgaWYgKHRoaXMucG9zaXRpb24ueCA8PSAwKSB7XG4gICAgICB0aGlzLnBvc2l0aW9uLnggPSAwO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wb3NpdGlvbi54ID49IHRoaXMuZ2FtZVdpZHRoIC0gdGhpcy53aWR0aCkge1xuICAgICAgdGhpcy5wb3NpdGlvbi54ID0gdGhpcy5nYW1lV2lkdGggLSB0aGlzLndpZHRoO1xuICAgIH1cblxuICAgIC8vICoqV3JpdGUgY29kZSB0byBmaWx0ZXIgb3V0IHBsYXRmb3JtcyBOT1QgaW4gY3VycmVudCB2aWV3IGZyYW1lKipcbiAgICAvLyBjaGVjayBpZiBjaGFyIGlzIHN0YW5kaW5nIG9uIGFueSBwbGF0Zm9ybVxuICAgIC8vIGVsc2UgY2hlY2sgaWYgY2hhciBpcyBmYWxsaW5nIGJlbG93IGZsb29yIGxpbmVcbiAgICAvLyBlbHNlIGNoYXIgaXMgY3VycmVudGx5IGZhbGxpbmdcbiAgICBmb3IgKGxldCBpPTA7IGk8cGxhdGZvcm1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgcGxhdGZvcm0gPSBwbGF0Zm9ybXNbaV07XG4gICAgICBpZiAodGhpcy5vblBsYXRmb3JtKHRoaXMucG9zaXRpb24sIHBsYXRmb3JtKSkge1xuICAgICAgICB0aGlzLmZhbGxpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5qdW1waW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueSA9IHBsYXRmb3JtWzFdLXRoaXMuaGVpZ2h0O1xuICAgICAgICB0aGlzLnZlbG9jaXR5LnkgPSAwO1xuICAgICAgICBicmVhaztcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5wb3NpdGlvbi55ID49IHRoaXMuZ2FtZUhlaWdodC10aGlzLmhlaWdodC0yMCkge1xuICAgICAgICB0aGlzLmp1bXBpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5mYWxsaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueSA9IHRoaXMuZ2FtZUhlaWdodCAtIHRoaXMuaGVpZ2h0IC0gMjA7XG4gICAgICAgIHRoaXMudmVsb2NpdHkueSA9IDA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5mYWxsaW5nID0gdHJ1ZTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gKipXcml0ZSBjb2RlIHRvIGZpbHRlciBvdXQgb2JzdGFjbGVzIE5PVCBpbiBjdXJyZW50IHZpZXcgZnJhbWUqKlxuICAgIGZvciAobGV0IGk9MDsgaTxvYnN0YWNsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBvYnN0YWNsZSA9IG9ic3RhY2xlc1tpXTtcbiAgICAgIGlmICh0aGlzLmNvbGxpc2lvbkRldGVjdGlvbihvYnN0YWNsZSkpIHtcbiAgICAgICAgdGhpcy5pc0NvbGxpZGluZyA9IHRydWU7XG4gICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge3RoaXMuY29sbGlkaW5nID0gZmFsc2V9LCAxMDAwKTtcblxuICAgICAgICBpZiAob2JzdGFjbGUub3JpZW50YXRpb24gPT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PSAnbGVmdCcpIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCArPSAxNTtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSArPSAxO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggLT0gMTU7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnkgKz0gMTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKG9ic3RhY2xlLmRpcmVjdGlvbiA9PSBcIlJEXCIpIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCArPSAyMDtcbiAgICAgICAgICB9IGVsc2UgaWYgKG9ic3RhY2xlLmRpcmVjdGlvbiA9PSBcIkxVXCIpIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCAtPSAyMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmlzQ29sbGlkaW5nID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gIH07XG5cbiAgb25QbGF0Zm9ybShjaGFyUG9zLCBwbGF0Zm9ybSkge1xuICAgIC8vIGNoYXJQb3MgPSB7XG4gICAgLy8gICB4OiBjaGFyUG9zWCxcbiAgICAvLyAgIHk6IGNoYXJQb3NZLFxuICAgIC8vIH1cbiAgICAvLyBwbGF0Zm9ybSA9IFtwb3NYLCBwb3NZLCB3aWR0aF1cbiAgICBpZiAodGhpcy5jcm91Y2hpbmcpIHtcbiAgICAgIGlmICgoKGNoYXJQb3MueCArIHRoaXMud2lkdGggLTE1KSA+PSBwbGF0Zm9ybVswXSkgJiZcbiAgICAgICgoY2hhclBvcy54KzE1KSA8PSAocGxhdGZvcm1bMF0rcGxhdGZvcm1bMl0pKSAmJlxuICAgICAgKChjaGFyUG9zLnkgKyAyMCkgPD0gcGxhdGZvcm1bMV0pICYmXG4gICAgICAoKGNoYXJQb3MueSArIDIwKSA+PSBwbGF0Zm9ybVsxXS0yKSl7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICgoKGNoYXJQb3MueCArIHRoaXMud2lkdGggLTE1KSA+PSBwbGF0Zm9ybVswXSkgJiZcbiAgICAgICgoY2hhclBvcy54KzE1KSA8PSAocGxhdGZvcm1bMF0rcGxhdGZvcm1bMl0pKSAmJlxuICAgICAgKChjaGFyUG9zLnkgKyA0MCkgPD0gcGxhdGZvcm1bMV0pICYmXG4gICAgICAoKGNoYXJQb3MueSArIDQwKSA+PSBwbGF0Zm9ybVsxXS0yKSl7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH07XG4gICAgfTtcbiAgfVxuXG4gIC8vIHJldHVybiB0cnVlIGlmIGFuIG9ic3RhY2xlIGNvbGxpZGVzIHdpdGggdXNlclxuICBjb2xsaXNpb25EZXRlY3Rpb24ob2JzdGFjbGUpIHtcbiAgICBsZXQgbyA9IHtcbiAgICAgIHg6IG9ic3RhY2xlLnBvc2l0aW9uLngsXG4gICAgICB5OiBvYnN0YWNsZS5wb3NpdGlvbi55LFxuICAgICAgcjogb2JzdGFjbGUucmFkaXVzXG4gICAgfTtcbiAgICBsZXQgYyA9IHtcbiAgICAgIHg6IHRoaXMucG9zaXRpb24ueCArIDIwLFxuICAgICAgeTogdGhpcy5wb3NpdGlvbi55LFxuICAgICAgdzogdGhpcy53aWR0aC0zMCxcbiAgICAgIGg6IHRoaXMuaGVpZ2h0XG4gICAgfVxuXG4gICAgLy8gZmluZCBob3Jpei92ZXJ0IGRpc3RhbmNlIGIvdyBjZW50ZXIgb2Ygb2JzdGFjbGUgJiBjaGFyYWN0ZXJcbiAgICBsZXQgZGlzdFggPSBNYXRoLmFicyhvLnggLSBjLnggLSBjLncvMik7XG4gICAgbGV0IGRpc3RZID0gTWF0aC5hYnMoby55IC0gYy55IC0gYy5oLzIpO1xuXG4gICAgLy8gcmV0dXJuIGZhbHNlIGlmIGRpc3QgaXMgZ3JlYXRlciB0aGFuIG1pbiBkaXN0IGIvdyBlZGdlcyAoeCBvciB5KVxuICAgIGlmICgoZGlzdFggPiAoYy53LzIgKyBvLnIpKSB8fCAoZGlzdFkgPiAoYy5oLzIgKyBvLnIpKSkge3JldHVybiBmYWxzZX07XG5cbiAgICAvLyByZXR1cm4gdHJ1ZSBpZiBkaXN0IGlzIDw9IGNoYXIgd2lkdGgvMlxuICAgIGlmICgoZGlzdFggPD0gKGMudy8yKSkgJiYgKGRpc3RZIDw9IChjLmgvMikpKSB7cmV0dXJuIHRydWV9O1xuXG4gICAgLy8gZHggJiBkeSA9IGRpc3QgYi93IG9ic3RhY2xlIGNlbnRlciAmIGNoYXIgZWRnZSAoeCAmIHkpXG4gICAgbGV0IGR4ID0gZGlzdFggLSBjLncgLyAyO1xuICAgIGxldCBkeSA9IGRpc3RZIC0gYy5oIC8gMjtcblxuICAgIC8vIHVzZSBweXRoYWdvcmVhbiB0aGVvcmVtIHRvIHNlZSBpZiByYWRpdXNeMiAgXG4gICAgLy8gaXMgZ3JlYXRlciB0aGFuIGh5cG90ZW51c2Ugb2YgZHheMiArIGR5XjIgXG4gICAgLy8gaWYgZ3JlYXRlciwgb2JqZWN0IGFuZCBjaGFyIGFyZSBjb2xsaWRpbmcgKHRydWUpXG4gICAgcmV0dXJuIChNYXRoLnBvdyhkeCwyKSArIE1hdGgucG93KGR5LDIpIDw9IE1hdGgucG93KG8uciwyKSk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGFyYWN0ZXI7IiwiY2xhc3MgQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKGNoYXIpIHtcbiAgICB0aGlzLmtleXMgPSB7fTtcbiAgICB0aGlzLmp1bXBTRlggPSBuZXcgQXVkaW8oXCIuL3NyYy9hdWRpby9tYXBsZS1qdW1wLXNmeC5tcDNcIilcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICAgIHN3aXRjaCAoZXZlbnQuY29kZSkge1xuICAgICAgICBjYXNlICdBcnJvd0xlZnQnOlxuICAgICAgICBjYXNlICdLZXlBJzogIFxuICAgICAgICAgIHRoaXMua2V5c1tldmVudC5jb2RlXSA9IHRydWVcbiAgICAgICAgICBjaGFyLmRpcmVjdGlvbiA9IFwibGVmdFwiO1xuICAgICAgICAgIGNoYXIubW92aW5nID0gdHJ1ZTtcbiAgICAgICAgICBjaGFyLmtleXMgPSB0aGlzLmtleXM7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICBjYXNlICdLZXlEJzpcbiAgICAgICAgICB0aGlzLmtleXNbZXZlbnQuY29kZV0gPSB0cnVlXG4gICAgICAgICAgY2hhci5kaXJlY3Rpb24gPSBcInJpZ2h0XCI7XG4gICAgICAgICAgY2hhci5tb3ZpbmcgPSB0cnVlO1xuICAgICAgICAgIGNoYXIudXBkYXRlS2V5cyh0aGlzLmtleXMpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdBcnJvd0Rvd24nOlxuICAgICAgICBjYXNlICdLZXlTJzpcbiAgICAgICAgICAvLyB0aGlzLmtleXNbZXZlbnQuY29kZV0gPSB0cnVlXG4gICAgICAgICAgY2hhci5jcm91Y2hpbmcgPSB0cnVlO1xuICAgICAgICAgIGNoYXIuY3JvdWNoKCk7ICAgXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1NwYWNlJzpcbiAgICAgICAgICAvLyB0aGlzLmtleXNbZXZlbnQuY29kZV0gPSB0cnVlXG4gICAgICAgICAgaWYgKCFjaGFyLmp1bXBpbmcgJiYgIWNoYXIuZmFsbGluZyAmJiAhY2hhci5jb2xsaWRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuanVtcFNGWC5wbGF5KCk7XG4gICAgICAgICAgICBjaGFyLmp1bXBpbmcgPSB0cnVlO1xuICAgICAgICAgICAgY2hhci5qdW1wKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQpID0+IHtcbiAgICAgIHN3aXRjaCAoZXZlbnQuY29kZSkge1xuICAgICAgICBjYXNlICdBcnJvd0xlZnQnOlxuICAgICAgICBjYXNlICdLZXlBJzogXG4gICAgICAgICAgdGhpcy5rZXlzW2V2ZW50LmNvZGVdID0gZmFsc2U7XG4gICAgICAgICAgY2hhci5rZXlzID0gdGhpcy5rZXlzO1xuICAgICAgICAgIGNoYXIuc3RvcCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdBcnJvd1JpZ2h0JzpcbiAgICAgICAgY2FzZSAnS2V5RCc6XG4gICAgICAgICAgdGhpcy5rZXlzW2V2ZW50LmNvZGVdID0gZmFsc2U7XG4gICAgICAgICAgY2hhci5rZXlzID0gdGhpcy5rZXlzO1xuICAgICAgICAgIGNoYXIuc3RvcCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdBcnJvd0Rvd24nOlxuICAgICAgICBjYXNlICdLZXlTJzpcbiAgICAgICAgICAvLyB0aGlzLmtleXNbZXZlbnQuY29kZV0gPSBmYWxzZTtcbiAgICAgICAgICBjaGFyLmNyb3VjaGluZyA9IGZhbHNlO1xuICAgICAgICAgIGNoYXIudW5jcm91Y2goKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnU3BhY2UnOlxuICAgICAgICAgIC8vIHRoaXMua2V5c1tldmVudC5jb2RlXSA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udHJvbGxlcjsiLCJjbGFzcyBPYnN0YWNsZSB7XG4gIGNvbnN0cnVjdG9yKHBvc1gsIHBvc1ksIHJhZGl1cywgb3JpZW50YXRpb24sIHRyYXZlbExlbmd0aCwgY29sb3IsIHNwZWVkKSB7XG4gICAgdGhpcy5pbml0UG9zID0ge1xuICAgICAgeDogcG9zWCxcbiAgICAgIHk6IHBvc1lcbiAgICB9O1xuICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICB4OiBwb3NYLFxuICAgICAgeTogcG9zWVxuICAgIH07XG4gICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XG4gICAgdGhpcy5vcmllbnRhdGlvbiA9IG9yaWVudGF0aW9uO1xuICAgIHRoaXMudHJhdmVsTGVuID0gdHJhdmVsTGVuZ3RoXG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgIHRoaXMuc3BlZWQgPSBzcGVlZDtcbiAgICB0aGlzLmRpcmVjdGlvbiA9IFwiUkRcIjsgLy8gTFUgPSBsZWZ0L3VwLCBSRCA9IHJpZ2h0L2Rvd24gKGRlcC4gb24gb3JpZW50YXRpb24pXG4gIH1cblxuICBkcmF3T2JzdGFjbGUoY3R4KSB7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8odGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnkpO1xuICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgIGN0eC5hcmModGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMucmFkaXVzLCAwLCBNYXRoLlBJICogMiwgdHJ1ZSk7XG4gICAgY3R4LnN0cm9rZSgpO1xuICAgIGN0eC5maWxsKCk7XG4gIH0gXG5cbiAgdXBkYXRlKCkge1xuICAgIC8vIHNldCBkaXJlY3Rpb24gb2JzdGFjbGUgc2hvdWxkIG1vdmUgYmFzZWQgb24gY3VycmVudCBwb3NpdGlvbiAoUkQvTFUpXG4gICAgaWYgKHRoaXMub3JpZW50YXRpb24gPT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnggPD0gdGhpcy5pbml0UG9zLngpIHtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBcIlJEXCJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5wb3NpdGlvbi54ID49IHRoaXMuaW5pdFBvcy54ICsgdGhpcy50cmF2ZWxMZW4pIHtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBcIkxVXCJcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gdGhpcy5kaXJlY3Rpb247XG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAodGhpcy5vcmllbnRhdGlvbiA9PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnkgPD0gdGhpcy5pbml0UG9zLnkpIHtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBcIlJEXCJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5wb3NpdGlvbi55ID49IHRoaXMuaW5pdFBvcy55ICsgdGhpcy50cmF2ZWxMZW4pIHtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBcIkxVXCJcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gdGhpcy5kaXJlY3Rpb247XG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAodGhpcy5kaXJlY3Rpb24gPT09IFwic3RhdGljXCIpIHtcbiAgICAgIFxuICAgIH07XG4gICAgXG4gICAgLy8gbW92ZSBvYnN0YWNsZSBhY2NvcmRpbmcgdG8gaXRzIGRpcmVjdGlvblxuICAgIGlmICh0aGlzLm9yaWVudGF0aW9uID09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT0gXCJSRFwiKSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueCArPSB0aGlzLnNwZWVkXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnggLT0gdGhpcy5zcGVlZFxuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKHRoaXMub3JpZW50YXRpb24gPT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT0gXCJSRFwiKSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueSArPSB0aGlzLnNwZWVkXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgLT0gdGhpcy5zcGVlZFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBPYnN0YWNsZTtcblxuIiwiY2xhc3MgUGxhdGZvcm0ge1xuICBjb25zdHJ1Y3Rvcihwb3NYLCBwb3NZLCB3aWR0aCwgaSkge1xuICAgIHRoaXMuaGVpZ2h0ID0gMTU7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICB4OiBwb3NYLFxuICAgICAgeTogcG9zWVxuICAgIH1cbiAgICB0aGlzLmluZGV4ID0gaTtcbiAgfVxuXG4gIGRyYXdQbGF0Zm9ybShjdHgpIHtcbiAgICBjdHguZmlsbFN0eWxlID0gXCJraGFraVwiLFxuICAgIGN0eC5maWxsUmVjdCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIFxuICAgIC8vIHByaW50aW5nIHBsYXRmb3JtIGluZGV4L2tleSAmIGNvb3JkaW5hdGVzXG4gICAgLy8gY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjsgXG4gICAgLy8gY3R4LmZvbnQgPVwiMTRweCBzZXJpZlwiO1xuICAgIC8vIGN0eC5maWxsVGV4dChgJHt0aGlzLmluZGV4fTogJHt0aGlzLnBvc2l0aW9uLnh9LCAke3RoaXMucG9zaXRpb24ueX1gLCBcbiAgICAvLyAgIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55KzMzKTtcblxuICAgIC8vIHRlc3RpbmcgcGxhdGZvcm0gYm91bmRhcmllc1xuICAgIC8vIGN0eC5iZWdpblBhdGgoKTtcbiAgICAvLyBjdHguc3Ryb2tlU3R5bGUgPSBcImJsdWVcIjtcbiAgICAvLyBjdHgubW92ZVRvKHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55KTtcbiAgICAvLyBjdHgubGluZVRvKHRoaXMucG9zaXRpb24ueCwgMCk7XG4gICAgLy8gY3R4Lm1vdmVUbyh0aGlzLnBvc2l0aW9uLngrdGhpcy53aWR0aCwgdGhpcy5wb3NpdGlvbi55KTtcbiAgICAvLyBjdHgubGluZVRvKHRoaXMucG9zaXRpb24ueCt0aGlzLndpZHRoLCAwKTtcbiAgICAvLyBjdHguc3Ryb2tlKCk7XG4gIH0gXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXRmb3JtO1xuXG4iLCJleHBvcnQgY29uc3QgZmlublJpZ2h0ID0gbmV3IEltYWdlKCk7XG5maW5uUmlnaHQuc3JjID0gJy4vZGlzdC9pbWFnZXMvRmlublNwcml0ZS1yaWdodC5wbmcnO1xuZXhwb3J0IGNvbnN0IGZpbm5MZWZ0ID0gbmV3IEltYWdlKCk7XG5maW5uTGVmdC5zcmMgPSAnLi9kaXN0L2ltYWdlcy9GaW5uU3ByaXRlLWxlZnQucG5nJztcbmV4cG9ydCBjb25zdCBwZWFjZUJnID0gbmV3IEltYWdlKCk7XG5wZWFjZUJnLnNyYyA9ICcuL2Rpc3QvaW1hZ2VzL3BlYWNlLWJnLnBuZyc7XG5leHBvcnQgY29uc3QgYmVlbW8gPSBuZXcgSW1hZ2UoKTtcbmJlZW1vLnNyYyA9ICcuL2Rpc3QvaW1hZ2VzL2JlZW1vLnBuZyc7XG5leHBvcnQgY29uc3QgZmlubkJlZW1vID0gbmV3IEltYWdlKCk7XG5maW5uQmVlbW8uc3JjID0gJy4vZGlzdC9pbWFnZXMvZmlubi1hbmQtYmVlbW8uanBnJzsiLCJpbXBvcnQgeyBmaW5uUmlnaHQsIGJlZW1vIH0gZnJvbSAnLi91dGlsJztcbmNvbnN0IHdlbGNvbWVNb2RhbCA9IChjdHgsIGdhbWVTdGFydCwgR0FNRV9XSURUSCwgR0FNRV9IRUlHSFQpID0+IHtcblxuICBpZiAoIWdhbWVTdGFydCkge1xuICAgIGN0eC5maWxsU3R5bGUgPSBcImxpZ2h0c2xhdGVncmV5XCI7XG4gICAgY3R4LmZpbGxSZWN0KDAsIDAsIEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hUKTtcbiAgICBjdHguZmlsbFN0eWxlID0gXCJzbm93XCI7XG4gICAgY3R4LmZvbnQgPSAnYm9sZCA1MHB4IGFyaWFsJztcbiAgICBjdHguZmlsbFRleHQoXCJXZWxjb21lIHRvIEp1bXAgUXVlc3QhXCIsIDIyNSwgNjApO1xuICAgIGN0eC5mb250ID0gJ2JvbGQgMzBweCBhcmlhbCc7XG4gICAgY3R4LmZpbGxUZXh0KFwiQmVlbW8gICAgICAgICAgaXMgbG9zdCFcIiwgNzUsIDE1MCk7XG4gICAgY3R4LmZpbGxUZXh0KFwiSGVscCBGaW5uICAgICAgICBuYXZpZ2F0ZSBhY3Jvc3MgdGhlIHBsYXRmb3JtcyB0byBmaW5kIGhpbS5cIiwgNzUsIDIyNSk7XG4gICAgY3R4LmZpbGxUZXh0KFwiQmUgc3VyZSB0byBkb2RnZSB0aGUgZmx5aW5nIG9ic3RhY2xlcyB1c2luZyBjcm91Y2ggb3IganVtcC5cIiwgNzUsIDMwMCk7XG4gICAgY3R4LmZpbGxUZXh0KFwiSWYgeW91IGdldCBoaXQsIHlvdSBtYXkgaGF2ZSB0byBzdGFydCBmcm9tIGFuIGVhcmxpZXIgcG9zaXRpb24uXCIsIDc1LCAzNzUpO1xuXG4gICAgY3R4LmZvbnQgPSAnYm9sZCAyMHB4IGFyaWFsJztcbiAgICBjdHguZmlsbFRleHQoXCItIEhvcml6b250YWxseSBtb3ZpbmcgYmFsbHMgd2lsbCBwdXNoIHlvdSBpbiB0aGVpciBkaXJlY3Rpb25cIiwgMTAwLCA0MTApO1xuICAgIGN0eC5maWxsVGV4dChcIi0gVmVydGljYWxseSBtb3ZpbmcgYmFsbHMgd2lsbCBrbm9jayB5b3Ugb2ZmIG9mIHRoZSBwbGF0Zm9ybVwiLCAxMDAsIDQ0NSk7XG4gICAgXG4gICAgY3R4LmZvbnQgPSAnYm9sZCAzMHB4IGFyaWFsJztcbiAgICBjdHguZmlsbFRleHQoXCJHb29kIGx1Y2shISFcIiwgNzUsIDU1MCk7XG4gICAgXG4gICAgY3R4LmZvbnQgPSAnYm9sZCAyMHB4IGFyaWFsJztcbiAgICBjdHguZmlsbFRleHQoXCIoSWYgeW91ciBzY3JlZW4gaGVpZ2h0IGlzIHNtYWxsZXIgdGhhbiA4NjUgcGl4ZWxzLCBwbGVhc2UgY29uc2lkZXIgem9vbWluZyBvdXQgdG8gODAtOTAlKVwiLCA3NSwgNjAwKTtcbiAgICBcbiAgICBjdHguZm9udCA9ICdib2xkIDQwcHggYXJpYWwnO1xuICAgIGN0eC5maWxsVGV4dChcIlByZXNzIEVOVEVSIHRvIGJlZ2luIVwiLCAyNzUsIDcwMCk7XG4gICAgY3R4LmZpbGwoKTtcblxuICAgIGN0eC5mb250ID0gJ2JvbGQgMjBweCBhcmlhbCc7XG4gICAgY3R4LmZpbGxUZXh0KFwiR2FtZSBkZXNpZ24gYnkgQ2hyaXMgSm9vXCIsIDczMCwgNzkwKTtcbiAgICBjdHguZmlsbFRleHQoXCJNdXNpYyBieSBJTlNFQ1VSRSBNVVNJQ1wiLCAyMCwgNzkwKTtcblxuICAgIGN0eC5maWxsKCk7XG4gICAgXG4gICAgYmVlbW8ub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICBjdHguZHJhd0ltYWdlKGJlZW1vLCAyMDAsIDEyNSwgMzMsIDQwKTtcbiAgICB9XG4gICAgZmlublJpZ2h0Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgY3R4LmRyYXdJbWFnZShmaW5uUmlnaHQsIDAsIDAsIDMyLCAyMCwgMjE1LCAxOTUsIDY0LCA0MCk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3ZWxjb21lTW9kYWw7IiwiaW1wb3J0IHsgZmlubkJlZW1vIH0gZnJvbSAnLi91dGlsJztcblxuY29uc3Qgd2lubmVyTW9kYWwgPSAoY3R4LCBHQU1FX1dJRFRILCBHQU1FX0hFSUdIVCkgPT4ge1xuICBjdHguZmlsbFN0eWxlID0gXCJsaWdodHNsYXRlZ3JleVwiO1xuICBjdHguZmlsbFJlY3QoMCwgMCwgR0FNRV9XSURUSCwgR0FNRV9IRUlHSFQpO1xuICBjdHguZmlsbFN0eWxlID0gXCJzbm93XCI7XG4gIGN0eC5mb250ID0gJ2JvbGQgNTBweCBhcmlhbCc7XG4gIGN0eC5maWxsVGV4dChcIllvdSBzYXZlZCBCZWVtbyFcIiwgMjcwLCAxMjApO1xuICAvLyBmaW5uQmVlbW8ub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgY3R4LmRyYXdJbWFnZShmaW5uQmVlbW8sIDE0MCwgMjI1LCA3MjgsIDQwOSk7XG4gIC8vIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpbm5lck1vZGFsOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbi8vIGltcG9ydCBKdW1wUXVlc3QgZnJvbSBcIi4vc2NyaXB0cy9nYW1lXCI7XG5pbXBvcnQgd2VsY29tZU1vZGFsIGZyb20gJy4vc2NyaXB0cy93ZWxjb21lJztcbmltcG9ydCBDaGFyYWN0ZXIgZnJvbSBcIi4vc2NyaXB0cy9jaGFyYWN0ZXJcIjtcbmltcG9ydCBDb250cm9sbGVyIGZyb20gXCIuL3NjcmlwdHMvY29udHJvbGxlclwiO1xuaW1wb3J0IEJhY2tncm91bmQgZnJvbSBcIi4vc2NyaXB0cy9iYWNrZ3JvdW5kXCI7XG5pbXBvcnQgUGxhdGZvcm0gZnJvbSBcIi4vc2NyaXB0cy9wbGF0Zm9ybVwiO1xuaW1wb3J0IE9ic3RhY2xlIGZyb20gXCIuL3NjcmlwdHMvb2JzdGFjbGVcIjtcbmltcG9ydCB7IGJlZW1vIH0gZnJvbSAnLi9zY3JpcHRzL3V0aWwnO1xuaW1wb3J0IHdpbm5lck1vZGFsIGZyb20gJy4vc2NyaXB0cy93aW5uZXInO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImp1bXAtcXVlc3RcIik7XG4gIGxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gIC8vIGdhbWUgdmFyaWFibGVzXG4gIGxldCBnYW1lU3RhcnQgPSBmYWxzZTtcbiAgY29uc3QgR0FNRV9XSURUSCA9IGNhbnZhcy53aWR0aDsgLy8gMTAwMFxuICBjb25zdCBHQU1FX0hFSUdIVCA9IGNhbnZhcy5oZWlnaHQ7IC8vIDgwMFxuICBsZXQgY2hhciA9IG5ldyBDaGFyYWN0ZXIoR0FNRV9XSURUSCwgR0FNRV9IRUlHSFQpO1xuICBuZXcgQ29udHJvbGxlcihjaGFyKVxuICBsZXQgYmcgPSBuZXcgQmFja2dyb3VuZChHQU1FX1dJRFRILCBHQU1FX0hFSUdIVCk7XG4gIGxldCBmcmFtZXMgPSAwO1xuICBsZXQgb2JzdGFjbGVzID0ge307XG5cbiAgLy8gY29udHJvbHMvaG93LXRvLXBsYXkgdmFyaWFibGVzXG4gIGxldCBjb250cm9sc1Nob3duID0gZmFsc2U7XG4gIGxldCBjb250cm9sc0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udHJvbHMtYnRuXCIpO1xuICBsZXQgY29udHJvbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udHJvbHMnKTtcblxuICAvLyBhdWRpby9iZ20gdmFyaWFibGVzXG4gIGxldCBiZ20gPSBuZXcgQXVkaW8oXCIuL3NyYy9hdWRpby9nb29kLW1vcm5pbmctaW5zZWN1cmUubXAzXCIpO1xuICBsZXQgbXVzaWNQbGF5aW5nID0gZmFsc2U7XG4gIGxldCBtdXNpY0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXVzaWMtYnRuXCIpO1xuICBsZXQgcGxheUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheS1idG5cIik7XG4gIGxldCBwYXVzZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGF1c2UtYnRuXCIpO1xuXG4gIGNvbnRyb2xzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKGNvbnRyb2xzU2hvd24pIHtcbiAgICAgIGNvbnRyb2xzU2hvd24gPSBmYWxzZTtcbiAgICAgIGNvbnRyb2xzLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICBjb250cm9sc0J0bi5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udHJvbHNTaG93biA9IHRydWU7XG4gICAgICBjb250cm9scy5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgICAgY29udHJvbHNCdG4uY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIik7XG4gICAgfTtcbiAgfSk7XG5cbiAgbXVzaWNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAobXVzaWNQbGF5aW5nKSB7XG4gICAgICBtdXNpY1BsYXlpbmcgPSBmYWxzZTtcbiAgICAgIGJnbS5wYXVzZSgpO1xuICAgICAgcGF1c2VCdG4uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgIHBsYXlCdG4uY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbXVzaWNQbGF5aW5nID0gdHJ1ZTtcbiAgICAgIGJnbS5sb29wID0gdHJ1ZTtcbiAgICAgIGJnbS5wbGF5KCk7XG4gICAgICBwYXVzZUJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgICAgcGxheUJ0bi5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIH1cbiAgfSlcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBldmVudCA9PiB7XG4gICAgc3dpdGNoKGV2ZW50LmNvZGUpIHtcbiAgICAgIGNhc2UgJ0VudGVyJzpcbiAgICAgICAgaWYgKCFnYW1lU3RhcnQpIHtcbiAgICAgICAgICBpZiAoIW11c2ljUGxheWluZykge1xuICAgICAgICAgICAgbXVzaWNQbGF5aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIGJnbS5sb29wID0gdHJ1ZTtcbiAgICAgICAgICAgIHBhdXNlQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgICAgICAgICBwbGF5QnRuLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICAgICAgICBiZ20ucGxheSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBnYW1lU3RhcnQgPSB0cnVlO1xuICAgICAgICAgIC8vIHN0YXJ0R2FtZSgpO1xuICAgICAgICAgIHN0YXJ0QW5pbWF0aW5nKDYwKVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gIH0pXG4gICAgXG4gIGxldCBmcHMsIGludGVydmFsLCBzdGFydFRpbWUsIG5vdywgdGhlbiwgZWxhcHNlZDtcbiAgZnVuY3Rpb24gc3RhcnRBbmltYXRpbmcoZnBzKSB7XG4gICAgaW50ZXJ2YWwgPSAxMDAwIC8gZnBzO1xuICAgIHRoZW4gPSBEYXRlLm5vdygpO1xuICAgIHN0YXJ0VGltZSA9IHRoZW47XG4gICAgYW5pbWF0ZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgICBub3cgPSBEYXRlLm5vdygpO1xuICAgIGVsYXBzZWQgPSBub3cgLSB0aGVuO1xuICAgIGlmIChlbGFwc2VkID4gaW50ZXJ2YWwpIHtcbiAgICAgIHRoZW4gPSBub3cgLSAoZWxhcHNlZCAlIGludGVydmFsKTtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG4gICAgfTtcblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG4gIH1cblxuICAvLyBmdW5jdGlvbiBzdGFydEdhbWUoKSB7XG4gIC8vICAgZ2FtZUxvb3AoKTtcbiAgLy8gICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xuICAvLyB9XG5cbiAgZnVuY3Rpb24gZ2FtZUxvb3AoKSB7XG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBHQU1FX1dJRFRILCBHQU1FX0hFSUdIVCk7XG4gICAgYmcuZHJhd0JhY2tncm91bmQoY3R4KTtcbiAgICBkcmF3UGxhdGZvcm1zKCk7XG4gICAgdXBkYXRlT2JzdGFjbGVzKCk7XG4gICAgZHJhd09ic3RhY2xlcygpO1xuICAgIC8vIHdyaXRlIGFsZ29yaXRobSB0byBvbmx5IHBhc3MgaW4gcGxhdGZvcm1zICYgb2JzdGFjbGVzIGluIGN1cnJlbnQgdnBcbiAgICBjaGFyLnVwZGF0ZShPYmplY3QudmFsdWVzKHBsYXRmb3JtcyksIE9iamVjdC52YWx1ZXMob2JzdGFjbGVzKSk7XG4gICAgY2hhci5kcmF3Q2hhcihjdHgsIGZyYW1lcyk7XG4gICAgY3R4LmRyYXdJbWFnZShiZWVtbywgMCwgMCwgMzMsIDQwLCAwLCAxMCwgMzMsIDQwKTtcblxuICAgIGlmICgoY2hhci5wb3NpdGlvbi54IDw9IDEwICkgJiYgKGNoYXIucG9zaXRpb24ueSA8PSAxMCkpIHtcbiAgICAgIG11c2ljUGxheWluZyA9IGZhbHNlO1xuICAgICAgYmdtLnBhdXNlKCk7XG4gICAgICBwYXVzZUJ0bi5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgcGxheUJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgICAgd2lubmVyTW9kYWwoY3R4LCBHQU1FX1dJRFRILCBHQU1FX0hFSUdIVCk7XG4gICAgfVxuXG4gICAgaWYgKGZyYW1lcyA+PSA2MCkge1xuICAgICAgZnJhbWVzID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgZnJhbWVzKys7XG4gICAgfVxuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcbiAgfVxuXG4gIC8vIHBsYXRmb3JtID0gW3Bvc1gsIHBvc1ksIHdpZHRoXVxuICBsZXQgcGxhdGZvcm1zID0ge1xuICAgIDA6IFsxNTAsIDc0MCwgMTAwXSxcbiAgICAxOiBbMzAwLCA3MDAsIDEwMF0sXG4gICAgMjogWzQ1MCwgNjYwLCAxMDBdLFxuICAgIDM6IFs2MDAsIDYyMCwgMTAwXSxcbiAgICA0OiBbNzUwLCA1ODAsIDEwMF0sXG4gICAgNTogWzg1MCwgNTQwLCA1MF0sXG4gICAgNjogWzgwMCwgNTAwLCA1MF0sXG4gICAgNzogWzc1MCwgNDYwLCA1MF0sXG4gICAgODogWzcwMCwgNDIwLCA1MF0sXG4gICAgOTogWzY1MCwgNDYwLCA1MF0sXG4gICAgMTA6IFs2MDAsIDUxMCwgNTBdLFxuICAgIDExOiBbNTUwLCA0NjAsIDUwXSxcbiAgICAxMjogWzUwMCwgNDIwLCA1MF0sXG4gICAgMTM6IFs0NTAsIDQ2MCwgNTBdLFxuICAgIDE0OiBbNDAwLCA1MTAsIDUwXSxcbiAgICAxNTogWzM1MCwgNDYwLCA1MF0sXG4gICAgMTY6IFszMDAsIDQyMCwgNTBdLFxuICAgIDE3OiBbMjUwLCA0NjAsIDUwXSxcbiAgICAxODogWzIwMCwgNTEwLCA1MF0sXG4gICAgMTk6IFsxNTAsIDQ2MCwgNTBdLFxuICAgIDIwOiBbMTAwLCA0MjAsIDUwXSxcbiAgICAyMTogWzUwLCAzODAsIDUwXSxcbiAgICAyMjogWzEwMCwgMzQwLCA1MF0sXG4gICAgMjM6IFsyMDAsIDMwMCwgMTAwXSxcbiAgICAyNDogWzM1MCwgMzAwLCAxMDBdLFxuICAgIDI1OiBbNTAwLCAzMDAsIDEwMF0sXG4gICAgMjY6IFs2NTAsIDMwMCwgMTAwXSxcbiAgICAyNzogWzgwMCwgMjUwLCA1MF0sXG4gICAgMjg6IFs4NTAsIDIxMCwgNTBdLFxuICAgIDI5OiBbODAwLCAxNzAsIDUwXSxcbiAgICAzMDogWzc1MCwgMTMwLCA1MF0sXG4gICAgMzE6IFs3MDAsIDE3MCwgNTBdLFxuICAgIDMyOiBbNjUwLCAyMTAsIDUwXSxcbiAgICAzMzogWzYwMCwgMTcwLCA1MF0sXG4gICAgMzQ6IFs1NTAsIDEzMCwgNTBdLFxuICAgIDM1OiBbNTAwLCA5MCwgNTBdLFxuICAgIDM2OiBbNDUwLCAxMzAsIDUwXSxcbiAgICAzNzogWzIwMCwgMTMwLCAyMDBdLFxuICAgIDM4OiBbMTI1LCA5MCwgNTBdLFxuICAgIDM5OiBbMCwgNTAsIDEwMF0sXG4gICAgNDA6IFs5MDAsIDUwLCAxMDBdLFxuICB9O1xuICBcbiAgZnVuY3Rpb24gZHJhd1BsYXRmb3JtcygpIHtcbiAgICBPYmplY3QudmFsdWVzKHBsYXRmb3JtcykuZm9yRWFjaCgocGxhdGZvcm0sIGkpID0+IHtcbiAgICAgIGxldCBwID0gbmV3IFBsYXRmb3JtKC4uLnBsYXRmb3JtLCBpKTtcbiAgICAgIHAuZHJhd1BsYXRmb3JtKGN0eCk7XG4gICAgfSlcbiAgfTtcblxuICAvLyBvYnN0YWNsZSA9IFtwb3NYLCBwb3NZLCByYWRpdXMsIG9yaWVudGF0aW9uLCB0cmF2ZWxMZW5ndGgsIGNvbG9yLCBzcGVlZF1cbiAgbGV0IG5ld09ic3RhY2xlcyA9IHtcbiAgICAxOiBbNzUwLCA1NzAsIDUsIFwiaG9yaXpvbnRhbFwiLCAxMDAsIFwidmlvbGV0XCIsIDAuMV0sXG4gICAgMjogWzYyNSwgNDUwLCA1LCBcImhvcml6b250YWxcIiwgMjAwLCBcImZvcmVzdGdyZWVuXCIsIDAuM10sXG4gICAgMzogWzIyNSwgNDUwLCA1LCBcImhvcml6b250YWxcIiwgMjAwLCBcImZvcmVzdGdyZWVuXCIsIDAuM10sXG4gICAgNDogWzUyNSwgMzUwLCA1LCBcInZlcnRpY2FsXCIsIDE1MCwgXCJza3libHVlXCIsIDAuM10sXG4gICAgNTogWzc1LCAzMDAsIDUsIFwidmVydGljYWxcIiwgMTUwLCBcInNreWJsdWVcIiwgMC4zXSxcbiAgICA2OiBbMzI1LCAyNjAsIDEwLCBcInZlcnRpY2FsXCIsIDEwMCwgXCJjcmltc29uXCIsIDAuM10sXG4gICAgNzogWzYyNSwgMjYwLCAxMCwgXCJ2ZXJ0aWNhbFwiLCAxMDAsIFwiY3JpbXNvblwiLCAwLjNdLFxuICAgIDg6IFszNTAsIDI2MCwgMTAsIFwiaG9yaXpvbnRhbFwiLCAyNTAsIFwiaW5kaWdvXCIsIDAuMzc1XSxcbiAgICA5OiBbNjUwLCAxOTUsIDUsIFwiaG9yaXpvbnRhbFwiLCAyNTAsIFwib3JhbmdlXCIsIDAuNV0sXG4gICAgMTA6IFs2MDAsIDE1MCwgMTAsIFwiaG9yaXpvbnRhbFwiLCAyNTAsIFwiaW5kaWdvXCIsIDAuMzc1XSxcbiAgICAxMTogWzUyNSwgMjAsIDUsIFwidmVydGljYWxcIiwgMTQwLCBcIm1hcm9vblwiLCAwLjNdLFxuICAgIDEyOiBbMzUwLCA2MCwgNSwgXCJ2ZXJ0aWNhbFwiLCAxNDAsIFwiTWVkaXVtU2xhdGVCbHVlXCIsIDAuNF0sXG4gICAgMTM6IFsyNTAsIDYwLCA1LCBcInZlcnRpY2FsXCIsIDE0MCwgXCJNZWRpdW1TbGF0ZUJsdWVcIiwgMC40XSxcbiAgfVxuXG4gIGNyZWF0ZU9ic3RhY2xlcygpO1xuICBcbiAgZnVuY3Rpb24gY3JlYXRlT2JzdGFjbGVzKCkge1xuICAgIE9iamVjdC52YWx1ZXMobmV3T2JzdGFjbGVzKS5mb3JFYWNoKChvYnN0YWNsZSwgaSkgPT4ge1xuICAgICAgb2JzdGFjbGVzW2ldID0gbmV3IE9ic3RhY2xlKC4uLm9ic3RhY2xlKTs7XG4gICAgfSlcbiAgfTtcblxuICBmdW5jdGlvbiB1cGRhdGVPYnN0YWNsZXMoKSB7XG4gICAgT2JqZWN0LnZhbHVlcyhvYnN0YWNsZXMpLmZvckVhY2gob2JzdGFjbGUgPT4ge1xuICAgICAgb2JzdGFjbGUudXBkYXRlKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gZHJhd09ic3RhY2xlcygpIHtcbiAgICBPYmplY3QudmFsdWVzKG9ic3RhY2xlcykuZm9yRWFjaChvYnN0YWNsZSA9PiB7XG4gICAgICBvYnN0YWNsZS5kcmF3T2JzdGFjbGUoY3R4KTtcbiAgICB9KTtcbiAgfTtcblxuICB3ZWxjb21lTW9kYWwoY3R4LCBnYW1lU3RhcnQsIEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hUKTtcblxufSkiXSwic291cmNlUm9vdCI6IiJ9