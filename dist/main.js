/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/background.js":
/*!***********************************!*\
  !*** ./src/scripts/background.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
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
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, this.width, this.height);
      ctx.fill();
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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Character = /*#__PURE__*/function () {
  function Character(gameWidth, gameHeight) {
    _classCallCheck(this, Character);

    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.width = 50;
    this.height = 80;
    this.direction = "right";
    this.speed = 5;
    this.crouching = "false";
    this.jumping = false;
    this.falling = false;
    this.position = {
      x: 300,
      y: this.gameHeight - this.height - 20
    };
    this.velocity = {
      x: 0,
      y: 0
    };
    this.constants = {
      gravity: 1,
      friction: 0.9
    };
  }

  _createClass(Character, [{
    key: "drawChar",
    value: function drawChar(ctx) {
      ctx.fillStyle = "white";
      ctx.beginPath();
      ctx.rect(this.position.x, this.position.y, this.width, this.height);
      ctx.fill();
    }
  }, {
    key: "move",
    value: function move() {
      if (this.direction == "left") {
        this.velocity.x = -this.speed;
      } else {
        this.velocity.x = this.speed;
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      this.velocity.x = 0;
    }
  }, {
    key: "jump",
    value: function jump() {
      if (this.jumping) {
        this.position.y = this.velocity.y;
      }
    }
  }, {
    key: "crouch",
    value: function crouch() {
      this.height = 40;
    }
  }, {
    key: "uncrouch",
    value: function uncrouch() {
      this.height = 80;
    }
  }, {
    key: "render",
    value: function render() {
      this.velocity.y += this.constants.gravity;
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
      this.velocity.x *= this.constants.friction;
      this.velocity.y *= this.constants.friction; // if char is falling below floor line, stop falling

      if (this.position.y > this.gameHeight - this.height - 20) {
        this.jumping = false;
        this.position.y = this.gameHeight - this.height - 20;
        this.velocity.y = 0;
      } // if char is going off screen, stop at edge of screen


      if (this.position.x == 0) {
        this.position.x = 0;
      } else if (this.position.x == this.gameWidth) {
        this.position.x = this.gameWidth - this.width;
      }
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

  this.left = false;
  this.right = false;
  this.down = false;
  this.jump = false;
  document.addEventListener('keydown', function (event) {
    switch (event.code) {
      case 'ArrowLeft':
        _this.left = true;
        char.direction = "left";
        char.move();
        break;

      case 'ArrowRight':
        _this.right = true;
        char.direction = "right";
        char.move();
        break;

      case 'ArrowDown':
        _this.down = true;
        char.crouching = true;
        char.crouch();
        break;

      case 'Space':
        _this.jump = true;

        if (!char.jumping) {
          char.jumping = true;
          char.jump();
        }

        break;
    }
  });
  document.addEventListener('keyup', function (event) {
    switch (event.code) {
      case 'ArrowLeft':
        _this.left = false;
        char.direction = "left";
        char.stop();
        break;

      case 'ArrowRight':
        _this.right = false;
        char.direction = "right";
        char.stop();
        break;

      case 'ArrowDown':
        _this.down = false;
        char.crouching = false;
        char.uncrouch();
        break;

      case 'Space':
        _this.jump = false;
        char.stop();
        break;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Controller);

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
/* harmony import */ var _scripts_character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/character */ "./src/scripts/character.js");
/* harmony import */ var _scripts_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/controller */ "./src/scripts/controller.js");
/* harmony import */ var _scripts_background__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/background */ "./src/scripts/background.js");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
// import JumpQuest from "./scripts/game";




console.log("webpack is working properly");
document.addEventListener("DOMContentLoaded", function () {
  var canvas = document.getElementById("jump-quest");
  var ctx = canvas.getContext("2d");
  var GAME_WIDTH = ctx.canvas.width;
  var GAME_HEIGHT = ctx.canvas.height;
  var char = new _scripts_character__WEBPACK_IMPORTED_MODULE_0__.default(GAME_WIDTH, GAME_HEIGHT);
  var controller = new _scripts_controller__WEBPACK_IMPORTED_MODULE_1__.default(char);
  var bg = new _scripts_background__WEBPACK_IMPORTED_MODULE_2__.default(GAME_WIDTH, GAME_HEIGHT); // function startGame() {

  bg.drawBackground(ctx);
  char.drawChar(ctx); // }

  function gameLoop() {
    // startGame();
    // if (controller.left) {
    //   char.velocity.x -= 0.5;
    // }
    // if (controller.right) {
    //   char.velocity.x += 0.5;
    // }
    // if (controller.jump && !char.jumping) {
    //   char.velocity.y -= 20;
    // }
    // moved code below to character.js
    // char.velocity.y += char.constants.gravity;
    // char.position.x += char.velocity.x;
    // char.position.y += char.velocity.y;
    // char.velocity.x *= char.constants.friction;
    // char.velocity.y *= char.constants.friction;
    // // if char is falling below floor line, stop falling
    // if (char.position.y > GAME_HEIGHT - char.height - 20) {
    //   char.jumping = false;
    //   char.position.y = GAME_HEIGHT - char.height - 20;
    //   char.velocity.y = 0;
    // }
    // // if char is going off screen, stop at edge of screen
    // if (char.position.x == 0) {
    //   char.position.x = 0;
    // } else if (char.position.x == GAME_WIDTH) {
    //   char.position.x = GAME_WIDTH - char.width;
    // }
    char.render();
    requestAnimationFrame(gameLoop);
  }

  requestAnimationFrame(gameLoop);
});
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qdW1wcXVlc3QvLi9zcmMvc2NyaXB0cy9iYWNrZ3JvdW5kLmpzIiwid2VicGFjazovL2p1bXBxdWVzdC8uL3NyYy9zY3JpcHRzL2NoYXJhY3Rlci5qcyIsIndlYnBhY2s6Ly9qdW1wcXVlc3QvLi9zcmMvc2NyaXB0cy9jb250cm9sbGVyLmpzIiwid2VicGFjazovL2p1bXBxdWVzdC8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly9qdW1wcXVlc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vanVtcHF1ZXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vanVtcHF1ZXN0Ly4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIkJhY2tncm91bmQiLCJnYW1lV2lkdGgiLCJnYW1lSGVpZ2h0Iiwid2lkdGgiLCJoZWlnaHQiLCJjdHgiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImZpbGwiLCJkcmF3QmFja2dyb3VuZCIsIkNoYXJhY3RlciIsImRpcmVjdGlvbiIsInNwZWVkIiwiY3JvdWNoaW5nIiwianVtcGluZyIsImZhbGxpbmciLCJwb3NpdGlvbiIsIngiLCJ5IiwidmVsb2NpdHkiLCJjb25zdGFudHMiLCJncmF2aXR5IiwiZnJpY3Rpb24iLCJiZWdpblBhdGgiLCJyZWN0IiwiQ29udHJvbGxlciIsImNoYXIiLCJsZWZ0IiwicmlnaHQiLCJkb3duIiwianVtcCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiY29kZSIsIm1vdmUiLCJjcm91Y2giLCJzdG9wIiwidW5jcm91Y2giLCJjb25zb2xlIiwibG9nIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0IiwiR0FNRV9XSURUSCIsIkdBTUVfSEVJR0hUIiwiY29udHJvbGxlciIsImJnIiwiZHJhd0NoYXIiLCJnYW1lTG9vcCIsInJlbmRlciIsInJlcXVlc3RBbmltYXRpb25GcmFt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QVM0QyxRQUFULEdBQW9CO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUF2QixRQUFJLENBQUN3QixNQUFMO0FBQ0FDLHlCQUFxQixDQUFDRixRQUFELENBQXJCO0FBQ0Q7O0FBRURFLHVCQUFxQixDQUFDRixRQUFELENBQXJCO0FBQ0QsQ0FyREQsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQmFja2dyb3VuZCB7XG4gIGNvbnN0cnVjdG9yKGdhbWVXaWR0aCwgZ2FtZUhlaWdodCkge1xuICAgIHRoaXMud2lkdGggPSBnYW1lV2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBnYW1lSGVpZ2h0O1xuICB9XG5cbiAgZHJhd0JhY2tncm91bmQoY3R4KSB7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIlxuICAgIGN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcbiAgICBjdHguZmlsbCgpO1xuICB9XG5cbiAgYW5pbWF0ZShjdHgpIHtcbiAgICB0aGlzLmRyYXdCYWNrZ3JvdW5kKGN0eCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFja2dyb3VuZDsiLCJjbGFzcyBDaGFyYWN0ZXIge1xuICBjb25zdHJ1Y3RvcihnYW1lV2lkdGgsIGdhbWVIZWlnaHQpIHtcbiAgICB0aGlzLmdhbWVXaWR0aCA9IGdhbWVXaWR0aDtcbiAgICB0aGlzLmdhbWVIZWlnaHQgPSBnYW1lSGVpZ2h0O1xuICAgIHRoaXMud2lkdGggPSA1MDtcbiAgICB0aGlzLmhlaWdodCA9IDgwO1xuICAgIHRoaXMuZGlyZWN0aW9uID0gXCJyaWdodFwiO1xuICAgIHRoaXMuc3BlZWQgPSA1O1xuICAgIHRoaXMuY3JvdWNoaW5nID0gXCJmYWxzZVwiO1xuICAgIHRoaXMuanVtcGluZyA9IGZhbHNlO1xuICAgIHRoaXMuZmFsbGluZyA9IGZhbHNlO1xuICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICB4OiAzMDAsXG4gICAgICB5OiB0aGlzLmdhbWVIZWlnaHQgLSB0aGlzLmhlaWdodCAtIDIwLFxuICAgIH07XG4gICAgdGhpcy52ZWxvY2l0eSA9IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwLFxuICAgIH07XG4gICAgdGhpcy5jb25zdGFudHMgPSB7XG4gICAgICBncmF2aXR5OiAxLFxuICAgICAgZnJpY3Rpb246IDAuOSxcbiAgICB9O1xuICB9XG5cbiAgZHJhd0NoYXIoY3R4KSB7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIlxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgucmVjdCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIGN0eC5maWxsKCk7XG4gIH1cblxuICBtb3ZlKCkge1xuICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PSBcImxlZnRcIikge1xuICAgICAgdGhpcy52ZWxvY2l0eS54ID0gLXRoaXMuc3BlZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmVsb2NpdHkueCA9IHRoaXMuc3BlZWQ7XG4gICAgfVxuICB9XG5cbiAgc3RvcCgpIHtcbiAgICB0aGlzLnZlbG9jaXR5LnggPSAwO1xuICB9XG5cbiAganVtcCgpIHtcbiAgICBpZiAodGhpcy5qdW1waW5nKSB7XG4gICAgICB0aGlzLnBvc2l0aW9uLnkgPSB0aGlzLnZlbG9jaXR5LnlcbiAgICB9XG4gIH1cblxuICBjcm91Y2goKSB7XG4gICAgdGhpcy5oZWlnaHQgPSA0MDtcbiAgfVxuXG4gIHVuY3JvdWNoKCkge1xuICAgIHRoaXMuaGVpZ2h0ID0gODA7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdGhpcy52ZWxvY2l0eS55ICs9IHRoaXMuY29uc3RhbnRzLmdyYXZpdHk7XG4gICAgdGhpcy5wb3NpdGlvbi54ICs9IHRoaXMudmVsb2NpdHkueDtcbiAgICB0aGlzLnBvc2l0aW9uLnkgKz0gdGhpcy52ZWxvY2l0eS55O1xuICAgIHRoaXMudmVsb2NpdHkueCAqPSB0aGlzLmNvbnN0YW50cy5mcmljdGlvbjtcbiAgICB0aGlzLnZlbG9jaXR5LnkgKj0gdGhpcy5jb25zdGFudHMuZnJpY3Rpb247XG5cbiAgICAvLyBpZiBjaGFyIGlzIGZhbGxpbmcgYmVsb3cgZmxvb3IgbGluZSwgc3RvcCBmYWxsaW5nXG4gICAgaWYgKHRoaXMucG9zaXRpb24ueSA+IHRoaXMuZ2FtZUhlaWdodCAtIHRoaXMuaGVpZ2h0IC0gMjApIHtcbiAgICAgIHRoaXMuanVtcGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5wb3NpdGlvbi55ID0gdGhpcy5nYW1lSGVpZ2h0IC0gdGhpcy5oZWlnaHQgLSAyMDtcbiAgICAgIHRoaXMudmVsb2NpdHkueSA9IDA7XG4gICAgfVxuXG4gICAgLy8gaWYgY2hhciBpcyBnb2luZyBvZmYgc2NyZWVuLCBzdG9wIGF0IGVkZ2Ugb2Ygc2NyZWVuXG4gICAgaWYgKHRoaXMucG9zaXRpb24ueCA9PSAwKSB7XG4gICAgICB0aGlzLnBvc2l0aW9uLnggPSAwO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wb3NpdGlvbi54ID09IHRoaXMuZ2FtZVdpZHRoKSB7XG4gICAgICB0aGlzLnBvc2l0aW9uLnggPSB0aGlzLmdhbWVXaWR0aCAtIHRoaXMud2lkdGg7XG4gICAgfVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hhcmFjdGVyOyIsImNsYXNzIENvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcihjaGFyKSB7XG4gICAgdGhpcy5sZWZ0ID0gZmFsc2U7XG4gICAgdGhpcy5yaWdodCA9IGZhbHNlO1xuICAgIHRoaXMuZG93biA9IGZhbHNlO1xuICAgIHRoaXMuanVtcCA9IGZhbHNlO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICAgICAgc3dpdGNoIChldmVudC5jb2RlKSB7XG4gICAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgICAgICAgdGhpcy5sZWZ0ID0gdHJ1ZTtcbiAgICAgICAgICBjaGFyLmRpcmVjdGlvbiA9IFwibGVmdFwiO1xuICAgICAgICAgIGNoYXIubW92ZSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdBcnJvd1JpZ2h0JzpcbiAgICAgICAgICB0aGlzLnJpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgICBjaGFyLmRpcmVjdGlvbiA9IFwicmlnaHRcIjtcbiAgICAgICAgICBjaGFyLm1vdmUoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgICB0aGlzLmRvd24gPSB0cnVlO1xuICAgICAgICAgIGNoYXIuY3JvdWNoaW5nID0gdHJ1ZTtcbiAgICAgICAgICBjaGFyLmNyb3VjaCgpOyAgIFxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdTcGFjZSc6XG4gICAgICAgICAgdGhpcy5qdW1wID0gdHJ1ZTtcbiAgICAgICAgICBpZiAoIWNoYXIuanVtcGluZykge1xuICAgICAgICAgICAgY2hhci5qdW1waW5nID0gdHJ1ZVxuICAgICAgICAgICAgY2hhci5qdW1wKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQpID0+IHtcbiAgICAgIHN3aXRjaCAoZXZlbnQuY29kZSkge1xuICAgICAgICBjYXNlICdBcnJvd0xlZnQnOlxuICAgICAgICAgIHRoaXMubGVmdCA9IGZhbHNlO1xuICAgICAgICAgIGNoYXIuZGlyZWN0aW9uID0gXCJsZWZ0XCI7XG4gICAgICAgICAgY2hhci5zdG9wKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICAgIHRoaXMucmlnaHQgPSBmYWxzZTtcbiAgICAgICAgICBjaGFyLmRpcmVjdGlvbiA9IFwicmlnaHRcIjtcbiAgICAgICAgICBjaGFyLnN0b3AoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgICB0aGlzLmRvd24gPSBmYWxzZTtcbiAgICAgICAgICBjaGFyLmNyb3VjaGluZyA9IGZhbHNlO1xuICAgICAgICAgIGNoYXIudW5jcm91Y2goKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnU3BhY2UnOlxuICAgICAgICAgIHRoaXMuanVtcCA9IGZhbHNlO1xuICAgICAgICAgIGNoYXIuc3RvcCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udHJvbGxlcjsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBpbXBvcnQgSnVtcFF1ZXN0IGZyb20gXCIuL3NjcmlwdHMvZ2FtZVwiO1xuaW1wb3J0IENoYXJhY3RlciBmcm9tIFwiLi9zY3JpcHRzL2NoYXJhY3RlclwiO1xuaW1wb3J0IENvbnRyb2xsZXIgZnJvbSBcIi4vc2NyaXB0cy9jb250cm9sbGVyXCI7XG5pbXBvcnQgQmFja2dyb3VuZCBmcm9tIFwiLi9zY3JpcHRzL2JhY2tncm91bmRcIjtcbmltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmNvbnNvbGUubG9nKFwid2VicGFjayBpcyB3b3JraW5nIHByb3Blcmx5XCIpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImp1bXAtcXVlc3RcIik7XG4gIGxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICBjb25zdCBHQU1FX1dJRFRIID0gY3R4LmNhbnZhcy53aWR0aDtcbiAgY29uc3QgR0FNRV9IRUlHSFQgPSBjdHguY2FudmFzLmhlaWdodDtcblxuICBsZXQgY2hhciA9IG5ldyBDaGFyYWN0ZXIoR0FNRV9XSURUSCwgR0FNRV9IRUlHSFQpO1xuICBsZXQgY29udHJvbGxlciA9IG5ldyBDb250cm9sbGVyKGNoYXIpXG4gIGxldCBiZyA9IG5ldyBCYWNrZ3JvdW5kKEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hUKTtcblxuICAvLyBmdW5jdGlvbiBzdGFydEdhbWUoKSB7XG4gICAgYmcuZHJhd0JhY2tncm91bmQoY3R4KTtcbiAgICBjaGFyLmRyYXdDaGFyKGN0eCk7XG4gIC8vIH1cblxuICBmdW5jdGlvbiBnYW1lTG9vcCgpIHtcbiAgICAvLyBzdGFydEdhbWUoKTtcbiAgICAvLyBpZiAoY29udHJvbGxlci5sZWZ0KSB7XG4gICAgLy8gICBjaGFyLnZlbG9jaXR5LnggLT0gMC41O1xuICAgIC8vIH1cbiAgICAvLyBpZiAoY29udHJvbGxlci5yaWdodCkge1xuICAgIC8vICAgY2hhci52ZWxvY2l0eS54ICs9IDAuNTtcbiAgICAvLyB9XG4gICAgLy8gaWYgKGNvbnRyb2xsZXIuanVtcCAmJiAhY2hhci5qdW1waW5nKSB7XG4gICAgLy8gICBjaGFyLnZlbG9jaXR5LnkgLT0gMjA7XG4gICAgLy8gfVxuXG4gICAgLy8gbW92ZWQgY29kZSBiZWxvdyB0byBjaGFyYWN0ZXIuanNcbiAgICAvLyBjaGFyLnZlbG9jaXR5LnkgKz0gY2hhci5jb25zdGFudHMuZ3Jhdml0eTtcbiAgICAvLyBjaGFyLnBvc2l0aW9uLnggKz0gY2hhci52ZWxvY2l0eS54O1xuICAgIC8vIGNoYXIucG9zaXRpb24ueSArPSBjaGFyLnZlbG9jaXR5Lnk7XG4gICAgLy8gY2hhci52ZWxvY2l0eS54ICo9IGNoYXIuY29uc3RhbnRzLmZyaWN0aW9uO1xuICAgIC8vIGNoYXIudmVsb2NpdHkueSAqPSBjaGFyLmNvbnN0YW50cy5mcmljdGlvbjtcblxuICAgIC8vIC8vIGlmIGNoYXIgaXMgZmFsbGluZyBiZWxvdyBmbG9vciBsaW5lLCBzdG9wIGZhbGxpbmdcbiAgICAvLyBpZiAoY2hhci5wb3NpdGlvbi55ID4gR0FNRV9IRUlHSFQgLSBjaGFyLmhlaWdodCAtIDIwKSB7XG4gICAgLy8gICBjaGFyLmp1bXBpbmcgPSBmYWxzZTtcbiAgICAvLyAgIGNoYXIucG9zaXRpb24ueSA9IEdBTUVfSEVJR0hUIC0gY2hhci5oZWlnaHQgLSAyMDtcbiAgICAvLyAgIGNoYXIudmVsb2NpdHkueSA9IDA7XG4gICAgLy8gfVxuXG4gICAgLy8gLy8gaWYgY2hhciBpcyBnb2luZyBvZmYgc2NyZWVuLCBzdG9wIGF0IGVkZ2Ugb2Ygc2NyZWVuXG4gICAgLy8gaWYgKGNoYXIucG9zaXRpb24ueCA9PSAwKSB7XG4gICAgLy8gICBjaGFyLnBvc2l0aW9uLnggPSAwO1xuICAgIC8vIH0gZWxzZSBpZiAoY2hhci5wb3NpdGlvbi54ID09IEdBTUVfV0lEVEgpIHtcbiAgICAvLyAgIGNoYXIucG9zaXRpb24ueCA9IEdBTUVfV0lEVEggLSBjaGFyLndpZHRoO1xuICAgIC8vIH1cblxuICAgIGNoYXIucmVuZGVyKCk7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcbiAgfVxuXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG59KSJdLCJzb3VyY2VSb290IjoiIn0=